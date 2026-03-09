import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import ParticlesBackground from "../components/ParticlesBackground";
import FloatingContact from "../components/FloatingContact";
import CustomCursor from "../components/CustomCursor";
import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";

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

export default function Experience() {
  return (
    <main>
      <ParticlesBackground />
      <CustomCursor />
      <MouseGlow />
      <Navbar />
      <section className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-3xl w-full mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Trajetória</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Minha <span className="gradient-text">Experiência</span>
            </h2>
          </AnimatedSection>

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

          <AnimatedSection className="flex justify-center mt-16">
            <Link to="/" className="px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all text-sm font-mono">← Voltar ao portfólio</Link>
          </AnimatedSection>
        </div>
      </section>
      <FloatingContact />
    </main>
  );
}
