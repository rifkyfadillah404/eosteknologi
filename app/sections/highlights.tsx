import { SectionHeader } from "../components/section-header";

const technologies = [
  "React",
  "Next.js",
  "Express",
  "Node.js",
  "Tailwind CSS",
  "TypeScript",
  "Laravel",
  "Flutter",
  "JavaScript",
  "Python",
  "Go",
  "PHP",
  "MongoDB",
  "MySQL",
  "Redis",
  "Docker",
];

export function TechnologiesSection() {
  return (
    <section className="py-20" id="stack">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          overline="Teknologi Terdepan"
          title="Dibangun dengan stack populer dan battle-tested"
          description="Kami menggabungkan tool modern untuk memastikan website Anda scalable, mudah dirawat, dan siap ekspansi."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-600 shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
