export const SITE_CONFIG = {
  name: "Aurora Dental",
  tagline: "The Future of Dentistry",
  description:
    "Premium dental care powered by cutting-edge technology. AI-powered diagnostics and precision treatments for a healthier, brighter smile.",
  url: "https://auroradental.com",
  phone: "(555) 234-5678",
  email: "hello@auroradental.com",
  address: "123 Future Ave, Suite 200",
  hours: "Mon–Fri: 8am–6pm",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Reviews" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Preventive Care",
    description: "AI-powered screenings, precision cleanings, and personalized wellness plans.",
    icon: "Shield",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description: "Digital smile design, veneers, and whitening treatments crafted to enhance your natural beauty.",
    icon: "Sparkles",
  },
  {
    number: "03",
    title: "Implants & Restoration",
    description: "3D-guided implant placement and same-day crowns using biocompatible materials.",
    icon: "Layers",
  },
  {
    number: "04",
    title: "Orthodontics",
    description: "Clear aligners and accelerated treatments with predictable AI-mapped outcomes.",
    icon: "Smile",
  },
  {
    number: "05",
    title: "Emergency Care",
    description: "Same-day emergency appointments with rapid response protocols.",
    icon: "Zap",
  },
  {
    number: "06",
    title: "Periodontal Therapy",
    description: "Laser-assisted gum treatment and regenerative procedures.",
    icon: "Activity",
  },
] as const;

export const TEAM_MEMBERS = [
  { initials: "DR", name: "Dr. Elena Rossi", role: "Lead Dentist & Founder" },
  { initials: "JM", name: "Dr. James Mitchell", role: "Orthodontist" },
  { initials: "AK", name: "Dr. Aisha Khan", role: "Periodontist" },
  { initials: "SC", name: "Dr. Samuel Chen", role: "Oral Surgeon" },
] as const;

export const TRUST_ITEMS = [
  { icon: "ShieldCheck", label: "Board Certified" },
  { icon: "Users", label: "15,000+ Patients" },
  { icon: "Clock", label: "Same-Day Appointments" },
  { icon: "Star", label: "4.9 Star Rating" },
] as const;

export const STATS = [
  { value: 15, suffix: "K+", label: "Patients Treated" },
  { value: 99, suffix: "%", label: "Success Rate" },
  { value: 20, suffix: "+", label: "Years Experience" },
] as const;

export const TECHNOLOGY_FEATURES = [
  {
    title: "AI Diagnostics",
    description: "Machine learning algorithms detect issues before they become problems.",
    icon: "Brain",
  },
  {
    title: "3D Imaging",
    description: "Cone beam CT scans for comprehensive treatment planning.",
    icon: "ScanLine",
  },
  {
    title: "Laser Dentistry",
    description: "Minimally invasive procedures with faster healing times.",
    icon: "Zap",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I've never felt so comfortable at a dental office. They showed me a 3D model of my teeth and explained everything. My crown was done in one visit. This is the future.",
    name: "Maria Lopez",
    initials: "ML",
    since: "2023",
    rating: 5,
  },
] as const;
