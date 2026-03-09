import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";

const skillCategories = [
  {
    title: "Frontend",
    description: "HTML, CSS, JS, React, Tailwind...",
    href: "/skills/frontend",
  },
  {
    title: "Backend & Ferramentas",
    description: "Node, Python, SQL, MCP...",
    href: "/skills/backend",
  },
  {
    title: "Automação & IA",
    description: "n8n, Chatbots, CRM, Monday...",
    href: "/skills/automacao",
  },
];

function CategoryCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Link
        to={cat.href}
        className="group block p-8 rounded-2xl border border-foreground/5 bg-background hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
      >
        <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-3">
          <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform" />
          {cat.title}
        </h3>
        <p className="text-muted text-sm mb-4">{cat.description}</p>
        <span className="text-accent font-mono text-sm group-hover:underline">Ver todas →</span>
      </Link>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-background-alt">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Habilidades</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
