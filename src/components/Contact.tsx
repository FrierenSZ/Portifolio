import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Telefone", value: "+55 11 958047400" },
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "ghipolitomonteiro@gmail.com" },
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Localização", value: "São Paulo, Brasil" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 grid-bg">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Contato</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl border border-foreground/5 bg-background-alt hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 stroke-accent" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d={c.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{c.label}</h3>
                <p className="text-muted text-sm">{c.value}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-muted text-sm font-mono">
            © 2025 Guilherme. Feito com <span className="text-accent">♥</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
