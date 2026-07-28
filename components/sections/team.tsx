import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { TEAM_MEMBERS } from "@/constants";

export function Team() {
  return (
    <section
      id="team"
      className="py-32 md:py-40 bg-surface border-t border-border"
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            id="team-heading"
            label="Our Team"
            title="Meet Our Experts"
            description="Passionate professionals dedicated to your oral health and beautiful smile."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <Card>
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-accent" aria-hidden="true">
                      {member.initials}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
