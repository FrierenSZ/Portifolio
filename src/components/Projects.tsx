import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Troco de Banana",
    desc: "Plataforma de afiliados estilo e-commerce integrada com AliExpress, Shopee e Mercado Livre. Sem estoque próprio — lucro por comissão. Construído com APIs externas e Supabase para backend completo.",
    url: "https://trocodebanana.lovable.app",
    tags: ["Full-Stack", "APIs", "Supabase", "Afiliados"],
  },
  {
    title: "Soluções para Empresas",
    desc: "Site institucional + backend completo com design moderno e responsivo. Também desenvolvi integração Pipedrive + Cakto para links de pagamento e um agente de IA para atendimento automatizado.",
    url: "https://solucoesparaempresas.com.br",
    tags: ["Full-Stack", "Backend", "n8n", "IA", "CRM"],
  },
  {
    title: "Reis Representações",
    desc: "Website profissional com backend — interface limpa e navegação intuitiva para o segmento B2B de representações comerciais.",
    url: "https://reisrepresentacoesoficial.com.br",
    tags: ["Full-Stack", "Backend", "Responsivo"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const inner = (
    <>
      <div className="h-0.5 w-full bg-gradient-to-r from-accent to-accent-dark" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>
          {project.url && (
            <motion.div
              animate={{ rotate: hovered ? 45 : 0 }}
              className="w-8 h-8 rounded-lg border border-foreground/10 flex items-center justify-center flex-shrink-0 ml-3 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5 stroke-muted group-hover:stroke-accent transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.div>
          )}
        </div>
        <p className="text-muted text-sm leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-accent bg-accent/10 rounded-full border border-accent/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-2xl border border-foreground/5 bg-background-alt transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
        >
          {inner}
        </a>
      ) : (
        <div className="relative overflow-hidden rounded-2xl border border-foreground/5 bg-background-alt transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 cursor-default">
          {inner}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Sites, automações e integrações que desenvolvi do zero.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
