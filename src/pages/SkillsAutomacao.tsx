import mondayLogo from "@/assets/monday-logo.png";
import Navbar from "../components/Navbar";
import MouseGlow from "../components/MouseGlow";
import ParticlesBackground from "../components/ParticlesBackground";
import FloatingContact from "../components/FloatingContact";
import CustomCursor from "../components/CustomCursor";
import AnimatedSection from "../components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "n8n", icon: "https://n8n.io/favicon.ico" },
  { name: "Chatbots IA", emoji: "🤖" },
  { name: "CRM + IA", emoji: "🔗" },
  { name: "Pipedrive", icon: "https://cdn.brandfetch.io/idZG_U1qqs/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Monday", localIcon: mondayLogo },
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
        {skill.localIcon ? (
          <img src={skill.localIcon} alt={skill.name} className="w-12 h-12 object-contain" loading="lazy" />
        ) : skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="w-12 h-12" loading="lazy" />
        ) : (
          <span className="text-4xl">{skill.emoji}</span>
        )}
      </div>
      <span className="text-sm font-mono text-muted group-hover:text-accent transition-colors">{skill.name}</span>
    </motion.div>
  );
}

export default function SkillsAutomacao() {
  return (
    <main>
      <ParticlesBackground />
      <CustomCursor />
      <MouseGlow />
      <Navbar />
      <section className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-5xl w-full mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Skills — 03</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Automação & <span className="gradient-text">IA</span>
            </h2>
            <p className="text-muted text-lg">Ferramentas de automação, inteligência artificial e integrações.</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-8 justify-center">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
          <AnimatedSection className="flex justify-center gap-4 mt-16">
            <a href="/skills/backend" className="px-6 py-3 rounded-full border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 transition-all text-sm font-mono">← Backend</a>
            <a href="/" className="px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all text-sm font-mono">← Voltar ao portfólio</a>
          </AnimatedSection>
        </div>
      </section>
      <FloatingContact />
    </main>
  );
}
