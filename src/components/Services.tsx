import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: "M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125",
    title: "Desenvolvimento Web",
    desc: "Sites e aplicações web modernas, responsivas e otimizadas — do design ao deploy em produção.",
  },
  {
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a3.25 3.25 0 01-2.296.951h-4.468a3.25 3.25 0 01-2.296-.951L5 14.5",
    title: "Automações com n8n",
    desc: "Fluxos automatizados que eliminam trabalho manual, conectam ferramentas e otimizam processos empresariais.",
  },
  {
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    title: "Chatbots com IA",
    desc: "Chatbots inteligentes que atendem, qualificam e convertem — integrados com WhatsApp, sites e CRMs.",
  },
  {
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    title: "Integrações CRM + IA",
    desc: "Conecto CRMs com inteligência artificial para automatizar vendas, follow-ups e análises de dados em tempo real.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">O que eu faço</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Meus <span className="gradient-text">Serviços</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12}>
              <div className="group relative p-8 rounded-2xl border border-foreground/5 bg-background-alt hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-7 h-7 stroke-accent" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted leading-relaxed">{s.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
