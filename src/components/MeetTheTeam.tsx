import FadeIn from "./FadeIn";

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5 text-muted transition-colors hover:text-foreground"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg
      className="h-5 w-5 text-muted transition-colors hover:text-foreground"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

const team = [
  {
    name: "James",
    role: "Strategy & Content",
    initials: "J",
    image: "/team/james.png",
    bio: "James brings the strategic vision and content expertise. He ensures every system we build is aligned with your business goals and market positioning.",
    substackUrl: "https://unpromptable.substack.com/",
  },
  {
    name: "Jenny",
    role: "Builder & Developer",
    initials: "J",
    bio: "Jenny is the technical architect who turns strategy into working systems. She builds custom AI solutions that are reliable, maintainable, and tailored to your workflow.",
    substackUrl: "https://buildtolaunch.substack.com/",
  },
];

export default function MeetTheTeam() {
  return (
    <section id="team" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Meet the Team
          </h2>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:mt-16 md:grid-cols-2">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 150}>
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-background overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-2xl font-bold text-muted">
                      {member.initials}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.1em] text-gold">
                  {member.role}
                </p>
                <p className="mt-4 leading-relaxed text-muted">{member.bio}</p>
                <div className="mt-5 flex justify-center">
                  <a
                    href={member.substackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Substack`}
                  >
                    <SubstackIcon />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
