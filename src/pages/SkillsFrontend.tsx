import mcpLogo from "@/assets/mcp-logo.png";
import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import ParticlesBackground from "../components/ParticlesBackground";
import FloatingContact from "../components/FloatingContact";
import CustomCursor from "../components/CustomCursor";
import AnimatedSection from "../components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

function SkillCard({ skill, index }: { skill: { name: string; icon?: string; emoji?: string; localIcon?: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12, y: -6 }}
      className="group flex flex-col items-center gap-3"
    >
      <div className="w-24 h-24 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
        {skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="w-12 h-12" loading="lazy" />
        ) : (
          <span className="text-4xl">{skill.emoji}</span>
        )}
      </div>
      <span className="text-sm font-mono text-muted group-hover:text-accent transition-colors">{skill.name}</span>
    </motion.div>
  );
}

export default function SkillsFrontend() {
  return (
    <main>
      <ParticlesBackground />
      <CustomCursor />
      <MouseGlow />
      <Navbar />
      <section className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-5xl w-full mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Skills — 01</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Frontend</span>
            </h2>
            <p className="text-muted text-lg">Tecnologias que uso para construir interfaces modernas e responsivas.</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-8 justify-center">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
          <AnimatedSection className="flex justify-center gap-4 mt-16">
            <Link to="/" className="px-6 py-3 rounded-full border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 transition-all text-sm font-mono">← Voltar</Link>
            <Link to="/skills/backend" className="px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all text-sm font-mono">Backend & Ferramentas →</Link>
          </AnimatedSection>
        </div>
      </section>
      <FloatingContact />
    </main>
  );
}
