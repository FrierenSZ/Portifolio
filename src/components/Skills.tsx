import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend & Ferramentas",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "APIs REST", emoji: "🔌" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Antigravity", icon: "/images/antigravity-logo.png" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Lovable", icon: "https://lovable.dev/favicon.ico" },
      { name: "MCP", icon: "https://modelcontextprotocol.io/favicon.ico" },
    ],
  },
  {
    title: "Automação & IA",
    skills: [
      { name: "n8n", icon: "https://n8n.io/favicon.ico" },
      { name: "Chatbots IA", emoji: "🤖" },
      { name: "CRM + IA", emoji: "🔗" },
      { name: "Pipedrive", icon: "https://cdn.brandfetch.io/idZG_U1qqs/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
      { name: "Monday", icon: "https://cdn.brandfetch.io/ideoam_mDi/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    ],
  },
];

function SkillIcon({ skill, index }: { skill: { name: string; icon?: string; emoji?: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15, y: -5 }}
      className="group flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
        {skill.icon ? (
          <img src={skill.icon} alt={skill.name} className="w-8 h-8" loading="lazy" />
        ) : (
          <span className="text-2xl">{skill.emoji}</span>
        )}
      </div>
      <span className="text-xs font-mono text-muted group-hover:text-accent transition-colors">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Habilidades</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {skillCategories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 0.15}>
              <div className="p-8 rounded-2xl border border-foreground/5 bg-background h-full">
                <h3 className="font-display text-xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-5 justify-center">
                  {cat.skills.map((skill, i) => (
                    <SkillIcon key={skill.name} skill={skill} index={ci * 3 + i} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
