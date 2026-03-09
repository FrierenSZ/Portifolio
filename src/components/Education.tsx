import AnimatedSection from "./AnimatedSection";

const education = [
  { title: "Ensino Médio Completo", place: "Concluído", year: "2024" },
  { title: "Análise e Desenv. de Sistemas", place: "Cursando — 1º Semestre", year: "2025" },
  { title: "Web Designer", place: "Vocação", year: "2024", cert: "/certificados/Web-Designer-Vocação.pdf" },
  { title: "Curso De Python", place: "Vocação", year: "2024" },
  { title: "Preparação para o Trabalho", place: "Vocação", year: "2024", cert: "/certificados/CERTIFICADO - PPT.pdf" },
];

const experience = [
  {
    company: "Freelancer",
    roles: [
      { title: "Desenvolvedor Freelancer", desc: "Soluções para Empresas — Full-stack, automações n8n, chatbots com IA e integrações CRM.", period: "Jan 2026 - Atual" },
      { title: "Bot Developer", desc: "Desenvolvimento de bots e automações independentes", period: "2024 - 2025" },
      { title: "Web Developer", desc: "Projetos independentes — Sites para clientes como Reis Representações", period: "2024" },
    ],
  },
];

export default function Education() {
  return (
    <>
      <section id="education" className="relative py-32 px-6 grid-bg">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Formação</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Minha <span className="gradient-text">Educação</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl border border-foreground/5 bg-background-alt hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <span className="font-mono text-xs text-accent mb-3">{e.year}</span>
                  <h3 className="font-display text-xl font-bold mb-2">{e.title}</h3>
                  <p className="text-muted text-sm mb-4 flex-1">{e.place}</p>
                  {e.cert && (
                    <a
                      href={e.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline"
                    >
                      Ver certificado ↗
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-32 px-6 bg-background-alt">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Trajetória</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Minha <span className="gradient-text">Experiência</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.15}>
                <div className="mb-10">
                  <h3 className="font-display text-2xl font-bold mb-6 text-accent">{exp.company}</h3>
                  <div className="relative border-l-2 border-accent/30 pl-8 space-y-8">
                    {exp.roles.map((role, j) => (
                      <AnimatedSection key={role.title} delay={i * 0.15 + j * 0.1}>
                        <div className="relative">
                          <div className="absolute -left-[2.55rem] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                          <span className="font-mono text-xs text-accent">{role.period}</span>
                          <h4 className="font-display text-lg font-bold mt-1">{role.title}</h4>
                          <p className="text-muted text-sm mt-1">{role.desc}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
