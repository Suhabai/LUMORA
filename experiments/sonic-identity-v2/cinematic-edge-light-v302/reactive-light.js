class ReactiveLight {
  constructor() {
    this.context = null;
    this.analyser = null;
    this.audio = null;
    this.bins = null;
    this.frame = 0;
    this.lastSample = 0;
    this.enabled = false;
    this.reactive = true;
    this.intensity = 2.5;
    this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    this.values = {
      presence: 0, depth: 0, bloom: 0, air: 0, pressure: 0,
      tremor: 0, left: 0, right: 0
    };
    this.lastEnvMoment = -10000;
    this.envArmed = true;
    this.shiverArmed = true;
    this.lastShiverAt = -10000;
    this.shiverStart = -1;
    this.shiverCount = 0;
    this.shiverPeak = 0;
    this.previousPressure = 0;
    this.lastHudUpdate = 0;
    this.micro = [];
    this.onVisibilityChange = () => { if (document.hidden) this.disable(); };
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    this.reducedMotion.addEventListener('change', () => this.publish(performance.now()));
  }

  clamp(value, min = 0, max = 1) { return Math.max(min, Math.min(max, value)); }
  smooth(value) { const x = this.clamp(value); return x * x * (3 - 2 * x); }
  band(start, end) {
    let sum = 0;
    for (let index = start; index < end; index += 1) sum += this.bins[index];
    return sum / (end - start) / 255;
  }
  follow(key, target, elapsed, attack, release) {
    const duration = target > this.values[key] ? attack : release;
    this.values[key] += (target - this.values[key]) * (1 - Math.exp(-elapsed / duration));
  }
  async toggle() { return this.enabled ? (await this.disable(), false) : (await this.enable(), true); }
  async enable() {
    if (!this.context) this.createGraph();
    await this.context.resume();
    await this.audio.play();
    this.enabled = true;
    if (!this.frame) this.frame = requestAnimationFrame((time) => this.analyse(time));
  }
  async disable() {
    if (!this.context) return;
    this.cancelMicro();
    this.enabled = false;
    this.audio.pause();
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.lastSample = 0;
    this.neutral();
    await this.context.suspend();
  }
  createGraph() {
    this.context = new AudioContext();
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 512;
    this.analyser.smoothingTimeConstant = 0.88;
    this.bins = new Uint8Array(this.analyser.frequencyBinCount);
    this.audio = new Audio('./assets/dark-calm-still.wav');
    this.audio.loop = true;
    this.audio.volume = 0.48;
    this.context.createMediaElementSource(this.audio).connect(this.analyser).connect(this.context.destination);
  }
  setIntensity(value) {
    if ([2, 2.5, 3].includes(value)) this.intensity = value;
    this.publish(performance.now());
  }
  setReactive(value) {
    this.reactive = Boolean(value);
  }
  toggleResponse() { this.setReactive(!this.reactive); return this.reactive; }
  neutral() {
    for (const key of Object.keys(this.values)) this.values[key] = 0;
    this.envArmed = true;
    this.shiverArmed = true;
    this.shiverStart = -1;
    this.previousPressure = 0;
    document.querySelector('main').classList.remove('scene-shiver');
    this.publish(performance.now());
  }
  analyse(time) {
    if (!this.enabled || this.context?.state !== 'running') { this.frame = 0; return; }
    const interval = innerWidth < 700 ? 53 : 33;
    if (time - this.lastSample >= interval) {
      const elapsed = this.lastSample ? Math.min(110, time - this.lastSample) : interval;
      this.lastSample = time;
      this.analyser.getByteFrequencyData(this.bins);
      const low = this.smooth(this.clamp((this.band(1, 12) - 0.12) / 0.32));
      const mid = this.smooth(this.clamp((this.band(12, 54) - 0.012) / 0.14));
      const high = this.smooth(this.clamp((this.band(54, 140) - 0.008) / 0.11));
      const composite = this.smooth(this.clamp(low * .55 + mid * .35 + high * .10));
      const on = this.reactive ? 1 : 0;
      const pressure = this.clamp(this.smooth(this.clamp((low - .18) / .72)) * .92);
      const reduced = this.reducedMotion.matches;
      this.follow('presence', on * this.clamp(.08 + composite * .92), elapsed, reduced ? 650 : 230, reduced ? 1700 : 1120);
      this.follow('depth', on * this.clamp(.08 + low * .67 + composite * .23), elapsed, reduced ? 750 : 300, reduced ? 1800 : 1590);
      this.follow('bloom', on * this.clamp(.04 + composite * .58 + mid * .28), elapsed, reduced ? 600 : 210, reduced ? 1650 : 1080);
      this.follow('air', on * this.clamp(.035 + high * .55 + mid * .22), elapsed, 160, 710);
      this.follow('pressure', on * pressure, elapsed, reduced ? 750 : 330, 1700);
      const envelope = this.values.pressure;
      const pressureRise = envelope - this.previousPressure;
      this.previousPressure = envelope;
      if (envelope < .18) this.envArmed = true;
      if (envelope < .34) this.shiverArmed = true;
      if (on && !reduced && this.envArmed && envelope > .36 && pressureRise > .008 && time - this.lastEnvMoment > 3000) {
        this.values.tremor = Math.max(this.values.tremor, .4 + envelope * .38);
        this.lastEnvMoment = time;
        this.envArmed = false;
      }
      if (on && !reduced && this.shiverArmed && envelope > .55 && pressureRise > .012 && time - this.lastShiverAt > 7500) {
        this.shiverStart = time;
        this.lastShiverAt = time;
        this.shiverCount += 1;
        this.shiverArmed = false;
        this.values.tremor = Math.max(this.values.tremor, .72 + envelope * .22);
      }
      this.values.tremor *= Math.exp(-elapsed / 900);
      if (!on) this.values.tremor = 0;
      // Shared source, distinct inertia: two sides of one luminous system.
      this.follow('left', on * this.clamp(.08 + Math.sqrt(pressure) * .63 + composite * .21), elapsed, reduced ? 650 : 220, reduced ? 1700 : 1290);
      this.follow('right', on * this.clamp(.07 + Math.sqrt(pressure) * .54 + composite * .26 + this.values.air * .06), elapsed, reduced ? 790 : 340, reduced ? 1900 : 1710);
      this.publish(time);
    }
    this.frame = requestAnimationFrame((nextTime) => this.analyse(nextTime));
  }
  publish(time = 0) {
    const root = document.documentElement.style;
    const amplitude = this.intensity / 3 * (innerWidth < 700 ? .58 : 1);
    const reduced = this.reducedMotion.matches;
    const put = (name, value) => root.setProperty(`--sonic-${name}`, Number(value).toFixed(4));
    for (const [key, value] of Object.entries(this.values)) {
      const name = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
      put(name, this.clamp(value * amplitude));
    }
    const seconds = time / 1000;
    const force = reduced ? 0 : this.values.tremor * amplitude * 2.2;
    const bodyX = (Math.sin(seconds * 1.23) * 1.55 + Math.sin(seconds * .57 + 1.8) * .85) * force;
    const bodyY = (Math.sin(seconds * 1.07 + .6) * 1.4 + Math.sin(seconds * .43) * .8) * force;
    const leftX = (Math.sin(seconds * 1.41 + .4) * 2.2 + Math.sin(seconds * .67) * .75) * force;
    const rightX = (Math.sin(seconds * .91 + 2.2) * 1.7 + Math.sin(seconds * .39 + .7) * .7) * force;
    put('body-x', this.clamp(bodyX, -2.5, 2.5));
    put('body-y', this.clamp(bodyY, -2.5, 2.5));
    put('left-x', this.clamp(leftX, -3.5, 3.5));
    put('right-x', this.clamp(rightX, -3.5, 3.5));
    put('left-y', this.clamp((Math.sin(seconds * 1.09 + .7) * 1.45 + Math.sin(seconds * .47) * .8) * force, -3, 3));
    put('right-y', this.clamp((Math.sin(seconds * .83 + 1.9) * 1.25 + Math.sin(seconds * .34 + .4) * .8) * force, -3, 3));
    const main = document.querySelector('main');
    const age = time - this.shiverStart;
    const active = this.enabled && this.reactive && !reduced && age >= 0 && age < 350;
    main.classList.toggle('scene-shiver', active);
    let displacement = 0;
    if (active) {
      const p = age / 350;
      displacement = p < .22 ? Math.sin(p / .22 * Math.PI / 2) :
        p < .52 ? 1 - 1.26 * this.smooth((p - .22) / .30) :
        -.26 * (1 - this.smooth((p - .52) / .48));
    }
    const sceneAmplitude = Math.min(1.55, .85 + (this.intensity - 2) * .65) * (innerWidth < 700 ? .52 : 1);
    const direction = this.shiverCount % 2 ? 1 : -1;
    const sceneX = active ? direction * sceneAmplitude * displacement : 0;
    const sceneY = active ? sceneAmplitude * .43 * displacement : 0;
    const sceneAngle = active ? direction * .055 * displacement : 0;
    this.shiverPeak = Math.max(this.shiverPeak, Math.hypot(sceneX, sceneY));
    put('scene-x', this.clamp(sceneX, -2, 2));
    put('scene-y', this.clamp(sceneY, -1, 1));
    put('scene-angle', this.clamp(sceneAngle, -.08, .08));
    put('shiver-active', active ? 1 : 0);
    if (time - this.lastHudUpdate > 160) {
      this.lastHudUpdate = time;
      document.querySelector('#debug-pressure').textContent = this.values.pressure.toFixed(2);
      document.querySelector('#debug-active').textContent = active ? 'YES' : 'NO';
      document.querySelector('#debug-count').textContent = String(this.shiverCount);
    }
  }
  cancelMicro() {
    const now = this.context?.currentTime || 0;
    this.micro.forEach(({ oscillators, gain }) => {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setTargetAtTime(.0001, now, .12);
        oscillators.forEach((oscillator) => oscillator.stop(now + .28));
      } catch {}
    });
    this.micro = [];
  }
  async event(family) {
    await this.enable();
    this.cancelMicro();
    const config = { primary: [.84, .022, 137.4, 201], secondary: [.42, .012, 137.4, 164.9], navigation: [.56, .014, 100.4, 137.4], disclosure: [.52, .015, 137.4, 201], closure: [.46, .011, 100.4, 137.4] }[family];
    if (!config) return;
    const [duration, peak, first, second] = config;
    const now = this.context.currentTime;
    const filter = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    const pan = this.context.createStereoPanner();
    const one = this.context.createOscillator();
    const two = this.context.createOscillator();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(640, now);
    filter.frequency.linearRampToValueAtTime(1200, now + duration * .62);
    gain.gain.setValueAtTime(.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + .16);
    gain.gain.setTargetAtTime(.0001, now + duration * .55, .19);
    pan.pan.setValueAtTime(family === 'navigation' ? .04 : 0, now);
    one.type = two.type = 'sine';
    one.frequency.value = first;
    two.frequency.value = second;
    two.detune.value = -5;
    one.connect(filter); two.connect(filter);
    filter.connect(gain).connect(pan).connect(this.analyser);
    one.start(now); two.start(now);
    one.stop(now + duration + 1); two.stop(now + duration + 1);
    this.micro.push({ oscillators: [one, two], gain });
  }
}
window.reactiveLight = new ReactiveLight();
