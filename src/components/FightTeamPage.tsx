import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, CircleCheck, Instagram, Menu, Shield, Swords, Target, X, type LucideIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FightAtmosphere } from "./FightAtmosphere";
import coach from "../assets/galeria/professor-muay-thai.jpg";
import training from "../assets/galeria/treino-ringue.jpg";
import team from "../assets/galeria/equipe-treino.jpg";
import exercito1 from "../assets/galeria/exercito(1).jpg";
import exercito2 from "../assets/galeria/exercito(2).jpg";
import exercito3 from "../assets/galeria/exercito(3).jpg";
import exercito4 from "../assets/galeria/exercito(4).jpg";
import exercito5 from "../assets/galeria/exercito(5).jpg";
import fotos1 from "../assets/galeria/fotos1.jpg";
import fotos from "../assets/galeria/fotos.jpg";
import fotos2 from "../assets/galeria/fotos2.jpg";
import karate from "../assets/galeria/karate.jpg";
import jiujitsu from "../assets/galeria/jiujitsu.jpg";
import muayThai from "../assets/galeria/muay-thay.jpg";
import muayThaiKids from "../assets/galeria/muay-thay-kids.jpg";
import logoUrl from "../assets/fight-team-logo.png";
import gideonFighterImg from "../assets/gideon-dourado-fighter.png";
import collageImg from "../assets/galeria/colagem-muay-thai.png";

const locationUrl = "https://www.google.com/maps/place/Toca+do+Gorila/@-5.1775467,-40.669833,17z/data=!3m1!4b1!4m6!3m5!1s0x796f5b2471eaff5:0xad0dfcd2f2ed83bd!8m2!3d-5.177552!4d-40.6672581!16s%2Fg%2F11sgcnt3xd";

const nav: Array<[string, string]> = [
  ["INÍCIO", "inicio"], ["SOBRE", "sobre"], ["MODALIDADES", "modalidades"],
  ["GALERIA", "galeria"], ["TREINE CONOSCO", "treine"], ["LOCALIZAÇÃO", "localizacao"],
];

const pricingPlans = [
  { name: "Diária", price: "R$ 45", description: "Treino pontual para quem quer começar hoje.", badge: "Acesso avulso" },
  { name: "Semanal", price: "R$ 80", description: "Mais constância para evoluir com ritmo e foco.", badge: "Ideal para rotina" },
  { name: "Mensal", price: "R$ 90", description: "Treinamento contínuo com progressão real.", badge: "Melhor custo-benefício" },
  { name: "Plano individual", price: "Sob consulta", description: "Atendimento personalizado e metas específicas.", badge: "Foco no aluno" },
];

const modalities = [
  { title: "AULAS DE MUAY THAI", text: "Técnica, condicionamento e estratégia para todos os níveis.", summary: "Treinos completos da arte das oito armas, com foco em técnica, preparo físico, disciplina e evolução gradual.", origin: "Originário da Tailândia, o Muay Thai se desenvolveu como uma arte de combate usando punhos, cotovelos, joelhos e pernas.", benefits: "Melhora o condicionamento, a coordenação, a autoconfiança e a disciplina, além de ensinar defesa e estratégia.", idealFor: "Todos os níveis, de quem está começando a atletas que buscam evolução técnica.", image: muayThai },
  { title: "PERSONAL FIGHT", text: "Treino individual com metas sob medida.", summary: "Acompanhamento exclusivo para quem busca acelerar resultados, corrigir detalhes técnicos ou treinar com objetivos específicos.", origin: "O treinamento individual reúne fundamentos das artes marciais e preparação física em um plano construído para cada aluno.", benefits: "Permite correções precisas, evolução mais direcionada, maior flexibilidade e acompanhamento próximo do professor.", idealFor: "Quem quer resultados específicos, preparação para competição ou uma rotina adaptada.", image: coach },
  { title: "MUAY THAI KIDS", text: "Disciplina, confiança e diversão para crianças.", summary: "Aulas adaptadas para crianças, trabalhando coordenação, respeito, concentração e confiança em um ambiente seguro.", origin: "A modalidade adapta os fundamentos do Muay Thai para o desenvolvimento infantil, com atividades lúdicas e progressivas.", benefits: "Estimula coordenação motora, concentração, respeito, autocontrole e confiança de forma segura e divertida.", idealFor: "Crianças que precisam de movimento, disciplina e uma atividade que desenvolva corpo e mente.", image: muayThaiKids },
  { title: "KICK BOXING", text: "Velocidade, potência e condicionamento.", summary: "Combinação dinâmica de socos e chutes para desenvolver resistência, agilidade, potência e excelente condicionamento.", origin: "O Kick Boxing combina técnicas de boxe e chutes de diferentes tradições de luta em uma prática esportiva dinâmica.", benefits: "Aumenta a resistência, a velocidade, a potência e a queima calórica, além de desenvolver reflexos.", idealFor: "Quem busca um treino intenso, dinâmico e completo para condicionamento e técnica de golpes.", image: training },
  { title: "KARATÊ", text: "Técnica, disciplina e autocontrole.", summary: "Prática de fundamentos, golpes, defesa e valores marciais para fortalecer corpo, mente, foco e autocontrole.", origin: "O Karatê surgiu em Okinawa, no Japão, e une técnicas de defesa pessoal a uma forte formação de caráter.", benefits: "Desenvolve foco, disciplina, equilíbrio, coordenação, condicionamento e autocontrole.", idealFor: "Quem deseja aprender defesa pessoal e construir evolução física e mental com constância.", image: karate },
  { title: "AULAS DE JIU JITSU", text: "Técnica de solo, estratégia e controle.", summary: "Aprenda posições, quedas, escapes e finalizações com inteligência corporal, técnica e respeito ao parceiro.", origin: "O Jiu Jitsu brasileiro se desenvolveu a partir do Jiu Jitsu japonês, valorizando alavancas e técnica para controlar o oponente no solo.", benefits: "Melhora a mobilidade, a resistência, o raciocínio sob pressão, a confiança e a capacidade de resolver situações.", idealFor: "Todos os perfis, inclusive quem prefere estratégia, técnica de solo e evolução sem depender apenas de força.", image: jiujitsu },
];

const gallery = [exercito1, exercito2, exercito3, exercito4, exercito5, team, fotos1, fotos, fotos2];
const weapons: Array<[string, string, LucideIcon]> = [["02", "MÃOS", Target], ["02", "COTOVELOS", Swords], ["02", "JOELHOS", Shield], ["02", "PERNAS", CircleCheck]];

function Brand({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? "brand brand-compact" : "brand"} src={logoUrl} alt="Gideon Dourado Fight Team" width={180} height={152} />;
}

function MediaAsset({ src, alt, className, controls = false, poster }: { src: string; alt: string; className?: string; controls?: boolean; poster?: string }) {
  if (src.endsWith(".mp4")) {
    return <video className={className} src={src} poster={poster} aria-label={alt} autoPlay={!controls} muted={!controls} loop={!controls} playsInline controls={controls} />;
  }
  return <img className={className} src={src} alt={alt} width={1536} height={1024} loading="lazy" />;
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div className="section-heading reveal"><span>{eyebrow}</span><h2>{children}</h2></div>;
}

export function FightTeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const [plansOpen, setPlansOpen] = useState(false);
  const [planIndex, setPlanIndex] = useState(0);
  const [activeModality, setActiveModality] = useState<(typeof modalities)[number] | null>(null);
  const [modalityIndex, setModalityIndex] = useState(0);

  const nextPlan = () => setPlanIndex((current) => (current + 1) % pricingPlans.length);
  const prevPlan = () => setPlanIndex((current) => (current - 1 + pricingPlans.length) % pricingPlans.length);
  const nextModality = () => setModalityIndex((current) => (current + 1) % modalities.length);
  const prevModality = () => setModalityIndex((current) => (current - 1 + modalities.length) % modalities.length);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      gsap.to(".loader", { autoAlpha: 0, duration: reduced ? 0.01 : 0.65, delay: 0.35, pointerEvents: "none" });
      if (reduced) return;
      gsap.from(".hero-copy > *:not(.button)", { y: 28, opacity: 0, stagger: 0.11, duration: 0.75, ease: "power3.out", delay: 0.4 });
      gsap.fromTo(".hero-copy .button", { scale: 0.94 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)", delay: 0.65 });
      gsap.to(".hero-visual", { yPercent: 10, scale: 1.04, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
      gsap.to(".hero-copy", { y: -70, opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "35% top", end: "bottom top", scrub: 1 } });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, { y: 44, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
      });
    });
    const onScroll = () => document.body.classList.toggle("page-scrolled", window.scrollY > 40);
    const onMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 6;
      gsap.to(".hero-fighter", { x, y, duration: 1.2, ease: "power2.out" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    const sections = nav.map(([, id]) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const id = visible?.target instanceof HTMLElement ? visible.target.id : "";
      if (id) setActiveSection(id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.1, 0.3] });
    sections.forEach((section) => observer.observe(section));
    return () => { context.revert(); observer.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <main>
      <div className="loader"><Brand /><strong>TOCA</strong><span>DO GORILA</span><i /></div>
      <div className="cursor" aria-hidden="true" />
      <header className="site-header">
        <a href="#inicio" aria-label="Início"><Brand compact /></a>
        <nav aria-label="Navegação principal">
          {nav.map(([label, id]) => <a className={activeSection === id ? "is-active" : ""} key={id} href={`#${id}`}>{label}</a>)}
          <Link to="/loja">LOJA</Link>
        </nav>
        <a className="button button-outline header-cta" href="/agendar?modalidade=Muay%20Thai&auto=1" rel="noreferrer">AGENDAR AULA <ArrowUpRight /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          {nav.map(([label, id]) => <a className={activeSection === id ? "is-active" : ""} key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <Link to="/loja" onClick={() => setMenuOpen(false)}>LOJA</Link>
          <a href="/agendar?modalidade=Muay%20Thai&auto=1">AGENDAR AULA</a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <FightAtmosphere />
        <div className="hero-visual">
          <img className="hero-fighter" src={gideonFighterImg} alt="Lutador Gideon Dourado em posição de combate" width={464} height={537} />
        </div>
        <a className="instagram-float" href="https://www.instagram.com/gideondouradomuaythai/" target="_blank" rel="noreferrer noopener" aria-label="Instagram de Gideon Dourado">
          <Instagram />
          <span>Gideon Dourado</span>
        </a>
        <div className="hero-smoke hero-smoke-one" /><div className="hero-smoke hero-smoke-two" />
        <div className="hero-grain" />
        <div className="container hero-copy">
          <p className="kicker">TOCA DO GORILA</p>
          <h1><span>DISCIPLINA</span><span>TÉCNICA</span><span>RESPEITO</span></h1>
          <p className="hero-description">Mais que uma luta.<br />Um estilo de vida.</p>
          <a className="button button-primary" href="/agendar?modalidade=Muay%20Thai&auto=1" rel="noreferrer">AGENDAR AULA EXPERIMENTAL <ArrowUpRight /></a>
        </div>
        <a className="scroll-cue" href="#sobre"><span>SCROLL</span><ArrowDown /></a>
      </section>

      <section className="about section" id="sobre">
        <div className="about-photo reveal"><img src={coach} alt="Professor de Muay Thai na academia" width={1024} height={1536} loading="lazy" /></div>
        <div className="about-content container">
          <SectionTitle eyebrow="SOBRE A ACADEMIA">TRADIÇÃO E<br /><em>RESULTADOS</em></SectionTitle>
          <p className="lead reveal">A academia nasceu do desejo de transformar disciplina em evolução. Aqui você encontra treinamento técnico, preparação física e uma comunidade que respeita o caminho de cada aluno.</p>
          <div className="stats reveal">
            <div><strong>17+</strong><span>ANOS DE<br />EXPERIÊNCIA</span></div><div><strong>08</strong><span>MODALIDADES</span></div><div><strong>100%</strong><span>FOCO NO ALUNO</span></div>
          </div>
        </div>
        <aside className="creed reveal"><Brand /><blockquote>“O Muay Thai não muda apenas o seu corpo, muda a sua mente.”</blockquote><small>— CREDO DA EQUIPE</small></aside>
      </section>

      <section className="modalities section" id="modalidades">
        <div className="container">
          <SectionTitle eyebrow="NOSSAS">MODALIDADES</SectionTitle>
          <p className="section-intro reveal">Escolha a modalidade ideal para você e venha fazer parte do nosso time.</p>
          <div className="modality-carousel reveal">
            <button type="button" className="modality-carousel-arrow" aria-label="Modalidade anterior" onClick={prevModality}><ChevronLeft /></button>
            <div className="modality-viewport">
              <div className="modality-track" style={{ transform: `translateX(-${modalityIndex * 100}%)` }}>
                {modalities.map((item, index) => <article className="modality-card" key={item.title} role="button" tabIndex={0} onClick={() => setActiveModality(item)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setActiveModality(item); }} aria-label={`Ver resumo de ${item.title}`}>
                  <MediaAsset src={item.image} alt={`Treino de ${item.title}`} />
                  <div className="card-shade" /><span className="card-number">0{index + 1}</span>
                  <div className="card-copy"><h3>{item.title}</h3><p>{item.text}</p></div><span className="round-arrow"><ChevronRight /></span>
                </article>)}
              </div>
            </div>
            <button type="button" className="modality-carousel-arrow" aria-label="Próxima modalidade" onClick={nextModality}><ChevronRight /></button>
          </div>
          <div className="modality-dots" aria-label="Indicadores das modalidades">
            {modalities.map((item, index) => <button key={`${item.title}-dot`} type="button" className={index === modalityIndex ? "is-active" : ""} aria-label={`Exibir ${item.title}`} onClick={() => setModalityIndex(index)} />)}
          </div>
          <div className="group-schedule reveal">
            <div>
              <span>ROTINA DE TREINO</span>
              <h3>Horários em Grupo</h3>
              <p>Os treinos de Muay Thai são realizados de segunda a sexta:</p>
            </div>
            <div className="schedule-list">
              <div><strong>07:00 às 17:00</strong><span>Segunda a sexta</span></div>
              <div><strong>18:00 às 19:00</strong><span>Segunda a sexta</span></div>
              <div><strong>19:00 às 20:00</strong><span>Segunda a sexta</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="weapons section" id="armas">
        <div className="container weapons-grid">
          <div className="weapons-copy">
            <SectionTitle eyebrow="A ARTE DAS">AS <b>8</b> ARMAS<br />DO <em>MUAY THAI</em></SectionTitle>
            <p className="reveal">O Muay Thai é conhecido como a arte das oito armas. Seu corpo é seu equipamento: cada golpe nasce de técnica e estratégia.</p>
            <a className="button button-outline reveal" href="#modalidades">CONHEÇA MAIS <ArrowUpRight /></a>
          </div>
          <div className="weapons-figure reveal"><img src={collageImg} alt="Composição de lutadores da Gideon Dourado Fight Team" width={643} height={496} loading="lazy" /></div>
          <div className="weapon-list reveal">
            {weapons.map(([n, label, Icon]) => <div key={label}><span><Icon /></span><strong>{n}</strong><small>{label}</small></div>)}
          </div>
        </div>
      </section>

      <section className="gallery section" id="galeria">
        <div className="container gallery-head"><SectionTitle eyebrow="NOSSA">GALERIA</SectionTitle><p className="reveal">Momentos, conquistas e nossa família em ação. Confira um pouco do nosso dia a dia.</p></div>
        <div className="gallery-grid container">
          {gallery.map((image, index) => <button className={`gallery-item gallery-${index + 1} reveal`} key={`${image}-${index}`} onClick={() => setSelected(image)} aria-label={`Ampliar foto ${index + 1}`}><MediaAsset src={image} alt={`Treinamento na academia ${index + 1}`} /></button>)}
        </div>
        <div className="gallery-actions container"><Link className="button button-outline gallery-toggle" to="/galeria">VER MAIS FOTOS E VÍDEOS <ArrowUpRight /></Link></div>
      </section>

      <section className="train section" id="treine">
        <img src={training} alt="Treino de Muay Thai no ringue" width={1536} height={1024} loading="lazy" />
        <div className="container train-content reveal">
          <span>TREINE CONOSCO</span>
          <h2>SEU MELHOR<br /><em>COMEÇA AQUI!</em></h2>
          <p>Disciplina hoje.<br />Resultados amanhã.</p>
          <div className="train-actions">
            <a className="button button-primary" href="/agendar?modalidade=Muay%20Thai&auto=1" rel="noreferrer">AGENDAR AULA EXPERIMENTAL <ArrowUpRight /></a>
            <button type="button" className="button button-outline train-price-toggle" onClick={() => setPlansOpen((open) => !open)}>
              {plansOpen ? "FECHAR PLANOS" : "VER PLANOS"} <ArrowUpRight />
            </button>
            <Link className="button button-outline store-home-link" to="/loja">
              VER TODA A LOJA <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div className={`pricing-modal ${plansOpen ? "is-open" : ""}`} aria-live="polite">
          <div className="pricing-panel">
            <div className="pricing-header">
              <div>
                <span>Investimento</span>
                <h3>Planos e mensalidades</h3>
              </div>
              <button type="button" aria-label="Fechar preços" onClick={() => setPlansOpen(false)}><X /></button>
            </div>

            <div className="pricing-slider">
              <button type="button" className="pricing-arrow" aria-label="Plano anterior" onClick={prevPlan}><ChevronLeft /></button>
              <div className="pricing-viewport">
                <div className="pricing-track" style={{ transform: `translateX(-${planIndex * 100}%)` }}>
                  {pricingPlans.map((plan) => (
                    <article key={plan.name} className="price-card">
                      <span className="price-badge">{plan.badge}</span>
                      <h4>{plan.name}</h4>
                      <strong>{plan.price}</strong>
                      <p>{plan.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <button type="button" className="pricing-arrow" aria-label="Próximo plano" onClick={nextPlan}><ChevronRight /></button>
            </div>

            <div className="pricing-dots" aria-label="Indicadores de planos">
              {pricingPlans.map((plan, index) => (
                <button
                  key={`${plan.name}-dot`}
                  type="button"
                  className={index === planIndex ? "is-active" : ""}
                  aria-label={`Exibir plano ${plan.name}`}
                  onClick={() => setPlanIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="benefits container reveal">{["AULAS PARA TODOS OS NÍVEIS","TREINOS PERSONALIZADOS","ACOMPANHAMENTO PROFISSIONAL","AMBIENTE RESPEITOSO"].map(item => <span key={item}><CircleCheck />{item}</span>)}</div>
      </section>

      <section className="location section" id="localizacao">
        <div className="container location-grid">
          <div className="location-copy"><SectionTitle eyebrow="NOSSA">LOCALIZAÇÃO</SectionTitle><p className="reveal">Encontre nosso espaço e venha treinar com a gente.</p><div className="address reveal"><span><Target /></span><div><strong>TOCA DO GORILA</strong><small>Localização oficial no Google Maps</small></div></div><a className="button button-outline reveal" href={locationUrl} target="_blank" rel="noreferrer">VER NO GOOGLE MAPS <ArrowUpRight /></a></div>
          <div className="map-frame reveal"><iframe title="Mapa da Toca do Gorila" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=-5.177552,-40.6672581&z=17&output=embed" /></div>
        </div>
      </section>

      <footer>
        <div className="container footer-main"><Brand /><nav>{nav.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}<Link to="/loja">LOJA</Link></nav><div className="socials"><a href="https://www.instagram.com/tocadogorila/" aria-label="Instagram"><Instagram /></a></div></div>
        <div className="container footer-bottom">
          <span>© 2026 Gideon Dourado TOCA DO GORILA. Todos os direitos reservados.</span>
          <span>Versão 1.1.0</span>
        </div>
        <div className="container footer-credit">
          <span>Desenvolvido por <a href="https://ismaell.vercel.app" target="_blank" rel="noreferrer noopener">ISMAELL CHAVES</a></span>
        </div>
      </footer>

      {selected && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button aria-label="Fechar"><X /></button><MediaAsset src={selected} alt="Mídia ampliada da academia" controls /></div>}
      {activeModality && <div className="modality-dialog" role="dialog" aria-modal="true" aria-labelledby="modality-dialog-title" onClick={() => setActiveModality(null)}>
        <div className="modality-dialog-card" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="modality-dialog-close" aria-label="Fechar resumo" onClick={() => setActiveModality(null)}><X /></button>
          <span>MODALIDADE {String(modalities.indexOf(activeModality) + 1).padStart(2, "0")}</span>
          <h2 id="modality-dialog-title">{activeModality.title}</h2>
          <p>{activeModality.summary}</p>
          <div className="modality-dialog-details">
            <div><strong>Origem</strong><p>{activeModality.origin}</p></div>
            <div><strong>Benefícios</strong><p>{activeModality.benefits}</p></div>
            <div><strong>Para quem é</strong><p>{activeModality.idealFor}</p></div>
          </div>
          <a className="button button-primary" href={`/agendar?modalidade=${encodeURIComponent(activeModality.title)}&auto=1`} rel="noreferrer">AGENDAR AULA <ArrowUpRight /></a>
        </div>
      </div>}
    </main>
  );
}
