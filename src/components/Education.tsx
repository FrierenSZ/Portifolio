import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";

const education = [
  { title: "Ensino Médio Completo", place: "Concluído", year: "2024" },
  { title: "Análise e Desenv. de Sistemas", place: "Cursando — 1º Semestre", year: "2025" },
  { title: "Web Designer", place: "Vocação", year: "2024", cert: "/certificados/Web-Designer-Vocação.pdf" },
  { title: "Curso De Python", place: "Vocação", year: "2024" },
  { title: "Preparação para o Trabalho", place: "Vocação", year: "2024", cert: "/certificados/CERTIFICADO - PPT.pdf" },
];

const experiencePreview = [
  { company: "Freelancer", current: "Desenvolvedor Freelancer", since: "Jan 2026" },
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
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Trajetória</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Minha <span className="gradient-text">Experiência</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-1 gap-6 max-w-md mx-auto">
            {experiencePreview.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.12}>
                <Link
                  to="/experience"
                  className="group block p-8 rounded-2xl border border-foreground/5 bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform" />
                    {exp.company}
                  </h3>
                  <p className="text-muted text-sm mb-1">{exp.current}</p>
                  <p className="text-muted/60 text-xs font-mono mb-4">Desde {exp.since}</p>
                  <span className="text-accent font-mono text-sm group-hover:underline">Ver timeline completa →</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
