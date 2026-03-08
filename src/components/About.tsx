import AnimatedSection from "./AnimatedSection";

const stats = [
  { label: "Projetos entregues", value: "10+" },
  { label: "Automações criadas", value: "20+" },
  { label: "Clientes satisfeitos", value: "5+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-background-alt">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Sobre mim</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Quem é o <span className="gradient-text">Guilherme</span>?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Tenho 18 anos, sou desenvolvedor full-stack com ensino médio completo, atualmente atuando como <strong className="text-foreground">Desenvolvedor na Soluções para Empresas</strong>. 
            Sou especialista em criar soluções digitais de ponta a ponta — desde websites modernos e responsivos até automações inteligentes com <strong className="text-foreground">n8n</strong>, 
            chatbots com <strong className="text-foreground">inteligência artificial</strong> e integrações de <strong className="text-foreground">CRM + IA</strong> que transformam a operação de empresas.
          </p>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Já desenvolvi sites como o da <a href="https://solucoesparaempresas.com.br" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Soluções para Empresas</a> e 
            da <a href="https://reisrepresentacoesoficial.com.br" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Reis Representações</a>, 
            além de fluxos automatizados que conectam ferramentas, eliminam trabalho manual e potencializam resultados com IA. 
            Minha missão é simplificar processos complexos através da tecnologia.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 sm:p-6 rounded-2xl border border-foreground/5 bg-background">
                <p className="font-display text-3xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-muted text-xs sm:text-sm font-mono break-words">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <a
            href="/certificados/curriculo.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-accent text-accent font-display font-semibold text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            Ver currículo ↗
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
