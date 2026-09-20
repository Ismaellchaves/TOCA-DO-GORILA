import { i as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as useFrame, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield, b as ArrowDown, h as ChevronLeft, i as Swords, l as Menu, m as ChevronRight, p as CircleCheck, r as Target, t as X, u as Instagram, v as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as fight_team_logo_default } from "./fight-team-logo-CQm4Pn5j.mjs";
import { a as exercito_4__default, c as fotos2_default, i as exercito_3__default, l as fotos_default, n as exercito_1__default, o as exercito_5__default, r as exercito_2__default, s as fotos1_default, t as equipe_treino_default } from "./fotos2-DSk7jPtD.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C241X6vj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Embers() {
	const points = (0, import_react.useRef)(null);
	const positions = (0, import_react.useMemo)(() => {
		const values = /* @__PURE__ */ new Float32Array(540);
		for (let i = 0; i < 180; i += 1) {
			values[i * 3] = i * 47 % 100 / 10 - 5;
			values[i * 3 + 1] = i * 31 % 100 / 10 - 5;
			values[i * 3 + 2] = i * 73 % 60 / 10 - 3;
		}
		return values;
	}, []);
	useFrame((state, rawDelta) => {
		const delta = Math.min(rawDelta, .05);
		const current = points.current;
		if (!current) return;
		current.rotation.y += delta * .025;
		current.rotation.z = Math.sin(state.clock.elapsedTime * .18) * .025;
		current.position.x += (state.pointer.x * .18 - current.position.x) * (1 - Math.exp(-2.5 * delta));
		current.position.y += (state.pointer.y * .1 - current.position.y) * (1 - Math.exp(-2.5 * delta));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
		ref: points,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
			attach: "attributes-position",
			args: [positions, 3]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
			color: "#e10600",
			size: .028,
			transparent: true,
			opacity: .58,
			depthWrite: false
		})]
	});
}
function FightAtmosphere() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hero-webgl",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
			dpr: [1, 1.5],
			camera: {
				position: [
					0,
					0,
					6
				],
				fov: 50
			},
			gl: {
				antialias: false,
				alpha: true
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Embers, {})
		})
	});
}
var professor_muay_thai_default = "/assets/professor-muay-thai-BCDTOxgR.jpg";
var treino_ringue_default = "/assets/treino-ringue-BVmYtg9D.jpg";
var karate_default = "/assets/karate-BIkuRCzn.jpg";
var jiujitsu_default = "/assets/jiujitsu-DBDTH5H7.jpg";
var muay_thay_default = "/assets/muay-thay-BnKOTjZ8.jpg";
var muay_thay_kids_default = "/assets/muay-thay-kids-o1v6jZtE.jpg";
var gideon_dourado_fighter_default = "/assets/gideon-dourado-fighter-Bkfrixyx.png";
var colagem_muay_thai_default = "/assets/colagem-muay-thai-BXt9EgdS.png";
var locationUrl = "https://www.google.com/maps/place/Toca+do+Gorila/@-5.1775467,-40.669833,17z/data=!3m1!4b1!4m6!3m5!1s0x796f5b2471eaff5:0xad0dfcd2f2ed83bd!8m2!3d-5.177552!4d-40.6672581!16s%2Fg%2F11sgcnt3xd";
var nav = [
	["INÍCIO", "inicio"],
	["SOBRE", "sobre"],
	["MODALIDADES", "modalidades"],
	["GALERIA", "galeria"],
	["TREINE CONOSCO", "treine"],
	["LOCALIZAÇÃO", "localizacao"]
];
var pricingPlans = [
	{
		name: "Diária",
		price: "R$ 45",
		description: "Treino pontual para quem quer começar hoje.",
		badge: "Acesso avulso"
	},
	{
		name: "Semanal",
		price: "R$ 80",
		description: "Mais constância para evoluir com ritmo e foco.",
		badge: "Ideal para rotina"
	},
	{
		name: "Mensal",
		price: "R$ 90",
		description: "Treinamento contínuo com progressão real.",
		badge: "Melhor custo-benefício"
	},
	{
		name: "Plano individual",
		price: "Sob consulta",
		description: "Atendimento personalizado e metas específicas.",
		badge: "Foco no aluno"
	}
];
var modalities = [
	{
		title: "AULAS DE MUAY THAI",
		text: "Técnica, condicionamento e estratégia para todos os níveis.",
		summary: "Treinos completos da arte das oito armas, com foco em técnica, preparo físico, disciplina e evolução gradual.",
		origin: "Originário da Tailândia, o Muay Thai se desenvolveu como uma arte de combate usando punhos, cotovelos, joelhos e pernas.",
		benefits: "Melhora o condicionamento, a coordenação, a autoconfiança e a disciplina, além de ensinar defesa e estratégia.",
		idealFor: "Todos os níveis, de quem está começando a atletas que buscam evolução técnica.",
		image: muay_thay_default
	},
	{
		title: "PERSONAL FIGHT",
		text: "Treino individual com metas sob medida.",
		summary: "Acompanhamento exclusivo para quem busca acelerar resultados, corrigir detalhes técnicos ou treinar com objetivos específicos.",
		origin: "O treinamento individual reúne fundamentos das artes marciais e preparação física em um plano construído para cada aluno.",
		benefits: "Permite correções precisas, evolução mais direcionada, maior flexibilidade e acompanhamento próximo do professor.",
		idealFor: "Quem quer resultados específicos, preparação para competição ou uma rotina adaptada.",
		image: professor_muay_thai_default
	},
	{
		title: "MUAY THAI KIDS",
		text: "Disciplina, confiança e diversão para crianças.",
		summary: "Aulas adaptadas para crianças, trabalhando coordenação, respeito, concentração e confiança em um ambiente seguro.",
		origin: "A modalidade adapta os fundamentos do Muay Thai para o desenvolvimento infantil, com atividades lúdicas e progressivas.",
		benefits: "Estimula coordenação motora, concentração, respeito, autocontrole e confiança de forma segura e divertida.",
		idealFor: "Crianças que precisam de movimento, disciplina e uma atividade que desenvolva corpo e mente.",
		image: muay_thay_kids_default
	},
	{
		title: "KICK BOXING",
		text: "Velocidade, potência e condicionamento.",
		summary: "Combinação dinâmica de socos e chutes para desenvolver resistência, agilidade, potência e excelente condicionamento.",
		origin: "O Kick Boxing combina técnicas de boxe e chutes de diferentes tradições de luta em uma prática esportiva dinâmica.",
		benefits: "Aumenta a resistência, a velocidade, a potência e a queima calórica, além de desenvolver reflexos.",
		idealFor: "Quem busca um treino intenso, dinâmico e completo para condicionamento e técnica de golpes.",
		image: treino_ringue_default
	},
	{
		title: "KARATÊ",
		text: "Técnica, disciplina e autocontrole.",
		summary: "Prática de fundamentos, golpes, defesa e valores marciais para fortalecer corpo, mente, foco e autocontrole.",
		origin: "O Karatê surgiu em Okinawa, no Japão, e une técnicas de defesa pessoal a uma forte formação de caráter.",
		benefits: "Desenvolve foco, disciplina, equilíbrio, coordenação, condicionamento e autocontrole.",
		idealFor: "Quem deseja aprender defesa pessoal e construir evolução física e mental com constância.",
		image: karate_default
	},
	{
		title: "AULAS DE JIU JITSU",
		text: "Técnica de solo, estratégia e controle.",
		summary: "Aprenda posições, quedas, escapes e finalizações com inteligência corporal, técnica e respeito ao parceiro.",
		origin: "O Jiu Jitsu brasileiro se desenvolveu a partir do Jiu Jitsu japonês, valorizando alavancas e técnica para controlar o oponente no solo.",
		benefits: "Melhora a mobilidade, a resistência, o raciocínio sob pressão, a confiança e a capacidade de resolver situações.",
		idealFor: "Todos os perfis, inclusive quem prefere estratégia, técnica de solo e evolução sem depender apenas de força.",
		image: jiujitsu_default
	}
];
var gallery = [
	exercito_1__default,
	exercito_2__default,
	exercito_3__default,
	exercito_4__default,
	exercito_5__default,
	equipe_treino_default,
	fotos1_default,
	fotos_default,
	fotos2_default
];
var weapons = [
	[
		"02",
		"MÃOS",
		Target
	],
	[
		"02",
		"COTOVELOS",
		Swords
	],
	[
		"02",
		"JOELHOS",
		Shield
	],
	[
		"02",
		"PERNAS",
		CircleCheck
	]
];
function Brand({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		className: compact ? "brand brand-compact" : "brand",
		src: fight_team_logo_default,
		alt: "Gideon Dourado Fight Team",
		width: 180,
		height: 152
	});
}
function MediaAsset({ src, alt, className, controls = false, poster }) {
	if (src.endsWith(".mp4")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		className,
		src,
		poster,
		"aria-label": alt,
		autoPlay: !controls,
		muted: !controls,
		loop: !controls,
		playsInline: true,
		controls
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		className,
		src,
		alt,
		width: 1536,
		height: 1024,
		loading: "lazy"
	});
}
function SectionTitle({ eyebrow, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-heading reveal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: eyebrow }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children })]
	});
}
function FightTeamPage() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [activeSection, setActiveSection] = (0, import_react.useState)("inicio");
	const [plansOpen, setPlansOpen] = (0, import_react.useState)(false);
	const [planIndex, setPlanIndex] = (0, import_react.useState)(0);
	const [activeModality, setActiveModality] = (0, import_react.useState)(null);
	const [modalityIndex, setModalityIndex] = (0, import_react.useState)(0);
	const nextPlan = () => setPlanIndex((current) => (current + 1) % pricingPlans.length);
	const prevPlan = () => setPlanIndex((current) => (current - 1 + pricingPlans.length) % pricingPlans.length);
	const nextModality = () => setModalityIndex((current) => (current + 1) % modalities.length);
	const prevModality = () => setModalityIndex((current) => (current - 1 + modalities.length) % modalities.length);
	(0, import_react.useEffect)(() => {
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const context = gsapWithCSS.context(() => {
			gsapWithCSS.to(".loader", {
				autoAlpha: 0,
				duration: reduced ? .01 : .65,
				delay: .35,
				pointerEvents: "none"
			});
			if (reduced) return;
			gsapWithCSS.from(".hero-copy > *:not(.button)", {
				y: 28,
				opacity: 0,
				stagger: .11,
				duration: .75,
				ease: "power3.out",
				delay: .4
			});
			gsapWithCSS.fromTo(".hero-copy .button", { scale: .94 }, {
				scale: 1,
				opacity: 1,
				duration: .5,
				ease: "back.out(1.8)",
				delay: .65
			});
			gsapWithCSS.to(".hero-visual", {
				yPercent: 10,
				scale: 1.04,
				ease: "none",
				scrollTrigger: {
					trigger: ".hero",
					start: "top top",
					end: "bottom top",
					scrub: 1
				}
			});
			gsapWithCSS.to(".hero-copy", {
				y: -70,
				opacity: 0,
				ease: "none",
				scrollTrigger: {
					trigger: ".hero",
					start: "35% top",
					end: "bottom top",
					scrub: 1
				}
			});
			gsapWithCSS.utils.toArray(".reveal").forEach((element) => {
				gsapWithCSS.from(element, {
					y: 44,
					opacity: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: element,
						start: "top 88%",
						once: true
					}
				});
			});
		});
		const onScroll = () => document.body.classList.toggle("page-scrolled", window.scrollY > 40);
		const onMove = (event) => {
			document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
			document.documentElement.style.setProperty("--my", `${event.clientY}px`);
			const x = (event.clientX / window.innerWidth - .5) * 10;
			const y = (event.clientY / window.innerHeight - .5) * 6;
			gsapWithCSS.to(".hero-fighter", {
				x,
				y,
				duration: 1.2,
				ease: "power2.out"
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("mousemove", onMove, { passive: true });
		const sections = nav.map(([, id]) => document.getElementById(id)).filter((section) => Boolean(section));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			const id = visible?.target instanceof HTMLElement ? visible.target.id : "";
			if (id) setActiveSection(id);
		}, {
			rootMargin: "-30% 0px -55%",
			threshold: [
				0,
				.1,
				.3
			]
		});
		sections.forEach((section) => observer.observe(section));
		return () => {
			context.revert();
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("mousemove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "loader",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TOCA" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DO GORILA" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cursor",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					"aria-label": "Início",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { compact: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Navegação principal",
					children: nav.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: activeSection === id ? "is-active" : "",
						href: `#${id}`,
						children: label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "button button-outline header-cta",
					href: "/agendar?modalidade=Muay%20Thai&auto=1",
					rel: "noreferrer",
					children: ["AGENDAR AULA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "menu-toggle",
					"aria-label": menuOpen ? "Fechar menu" : "Abrir menu",
					onClick: () => setMenuOpen(!menuOpen),
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `mobile-menu ${menuOpen ? "is-open" : ""}`,
					children: [nav.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: activeSection === id ? "is-active" : "",
						href: `#${id}`,
						onClick: () => setMenuOpen(false),
						children: label
					}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/agendar?modalidade=Muay%20Thai&auto=1",
						children: "AGENDAR AULA"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			id: "inicio",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FightAtmosphere, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-visual",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "hero-fighter",
						src: gideon_dourado_fighter_default,
						alt: "Lutador Gideon Dourado em posição de combate",
						width: 464,
						height: 537
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "instagram-float",
					href: "https://www.instagram.com/gideondouradomuaythai/",
					target: "_blank",
					rel: "noreferrer noopener",
					"aria-label": "Instagram de Gideon Dourado",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gideon Dourado" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-smoke hero-smoke-one" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-smoke hero-smoke-two" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grain" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "TOCA DO GORILA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DISCIPLINA" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TÉCNICA" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RESPEITO" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-description",
							children: [
								"Mais que uma luta.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Um estilo de vida."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "button button-primary",
							href: "/agendar?modalidade=Muay%20Thai&auto=1",
							rel: "noreferrer",
							children: ["AGENDAR AULA EXPERIMENTAL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "scroll-cue",
					href: "#sobre",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCROLL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "about section",
			id: "sobre",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "about-photo reveal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: professor_muay_thai_default,
						alt: "Professor de Muay Thai na academia",
						width: 1024,
						height: 1536,
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-content container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionTitle, {
							eyebrow: "SOBRE A ACADEMIA",
							children: [
								"TRADIÇÃO E",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "RESULTADOS" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead reveal",
							children: "A academia nasceu do desejo de transformar disciplina em evolução. Aqui você encontra treinamento técnico, preparação física e uma comunidade que respeita o caminho de cada aluno."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stats reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "17+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"ANOS DE",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"EXPERIÊNCIA"
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "08" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MODALIDADES" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100%" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FOCO NO ALUNO" })] })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "creed reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "“O Muay Thai não muda apenas o seu corpo, muda a sua mente.”" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "— CREDO DA EQUIPE" })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "modalities section",
			id: "modalidades",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "NOSSAS",
						children: "MODALIDADES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-intro reveal",
						children: "Escolha a modalidade ideal para você e venha fazer parte do nosso time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "modality-carousel reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "modality-carousel-arrow",
								"aria-label": "Modalidade anterior",
								onClick: prevModality,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "modality-viewport",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "modality-track",
									style: { transform: `translateX(-${modalityIndex * 100}%)` },
									children: modalities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "modality-card",
										role: "button",
										tabIndex: 0,
										onClick: () => setActiveModality(item),
										onKeyDown: (event) => {
											if (event.key === "Enter" || event.key === " ") setActiveModality(item);
										},
										"aria-label": `Ver resumo de ${item.title}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaAsset, {
												src: item.image,
												alt: `Treino de ${item.title}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "card-shade" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "card-number",
												children: ["0", index + 1]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "card-copy",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "round-arrow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
											})
										]
									}, item.title))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "modality-carousel-arrow",
								"aria-label": "Próxima modalidade",
								onClick: nextModality,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "modality-dots",
						"aria-label": "Indicadores das modalidades",
						children: modalities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: index === modalityIndex ? "is-active" : "",
							"aria-label": `Exibir ${item.title}`,
							onClick: () => setModalityIndex(index)
						}, `${item.title}-dot`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group-schedule reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ROTINA DE TREINO" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Horários em Grupo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Os treinos de Muay Thai são realizados de segunda a sexta:" })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "schedule-list",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "17:00 às 18:00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Segunda a sexta" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "18:00 às 19:00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Segunda a sexta" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "19:00 às 20:00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Segunda a sexta" })] })
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "weapons section",
			id: "armas",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container weapons-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "weapons-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionTitle, {
								eyebrow: "A ARTE DAS",
								children: [
									"AS ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "8" }),
									" ARMAS",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"DO ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "MUAY THAI" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal",
								children: "O Muay Thai é conhecido como a arte das oito armas. Seu corpo é seu equipamento: cada golpe nasce de técnica e estratégia."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button button-outline reveal",
								href: "#modalidades",
								children: ["CONHEÇA MAIS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "weapons-figure reveal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: colagem_muay_thai_default,
							alt: "Composição de lutadores da Gideon Dourado Fight Team",
							width: 643,
							height: 496,
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "weapon-list reveal",
						children: weapons.map(([n, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: n }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: label })
						] }, label))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "gallery section",
			id: "galeria",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container gallery-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "NOSSA",
						children: "GALERIA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal",
						children: "Momentos, conquistas e nossa família em ação. Confira um pouco do nosso dia a dia."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-grid container",
					children: gallery.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `gallery-item gallery-${index + 1} reveal`,
						onClick: () => setSelected(image),
						"aria-label": `Ampliar foto ${index + 1}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaAsset, {
							src: image,
							alt: `Treinamento na academia ${index + 1}`
						})
					}, `${image}-${index}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-actions container",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						className: "button button-outline gallery-toggle",
						to: "/galeria",
						children: ["VER MAIS FOTOS E VÍDEOS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "train section",
			id: "treine",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: treino_ringue_default,
					alt: "Treino de Muay Thai no ringue",
					width: 1536,
					height: 1024,
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container train-content reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TREINE CONOSCO" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"SEU MELHOR",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "COMEÇA AQUI!" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Disciplina hoje.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Resultados amanhã."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "train-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button button-primary",
								href: "/agendar?modalidade=Muay%20Thai&auto=1",
								rel: "noreferrer",
								children: ["AGENDAR AULA EXPERIMENTAL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "button button-outline train-price-toggle",
								onClick: () => setPlansOpen((open) => !open),
								children: [
									plansOpen ? "FECHAR PLANOS" : "VER PLANOS",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `pricing-modal ${plansOpen ? "is-open" : ""}`,
					"aria-live": "polite",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pricing-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pricing-header",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Investimento" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Planos e mensalidades" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Fechar preços",
									onClick: () => setPlansOpen(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pricing-slider",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "pricing-arrow",
										"aria-label": "Plano anterior",
										onClick: prevPlan,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pricing-viewport",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pricing-track",
											style: { transform: `translateX(-${planIndex * 100}%)` },
											children: pricingPlans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
												className: "price-card",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "price-badge",
														children: plan.badge
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: plan.name }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: plan.price }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: plan.description })
												]
											}, plan.name))
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "pricing-arrow",
										"aria-label": "Próximo plano",
										onClick: nextPlan,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pricing-dots",
								"aria-label": "Indicadores de planos",
								children: pricingPlans.map((plan, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: index === planIndex ? "is-active" : "",
									"aria-label": `Exibir plano ${plan.name}`,
									onClick: () => setPlanIndex(index)
								}, `${plan.name}-dot`))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "benefits container reveal",
					children: [
						"AULAS PARA TODOS OS NÍVEIS",
						"TREINOS PERSONALIZADOS",
						"ACOMPANHAMENTO PROFISSIONAL",
						"AMBIENTE RESPEITOSO"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), item] }, item))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "location section",
			id: "localizacao",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container location-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "location-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							eyebrow: "NOSSA",
							children: "LOCALIZAÇÃO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal",
							children: "Encontre nosso espaço e venha treinar com a gente."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "address reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TOCA DO GORILA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Localização oficial no Google Maps" })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "button button-outline reveal",
							href: locationUrl,
							target: "_blank",
							rel: "noreferrer",
							children: ["VER NO GOOGLE MAPS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "map-frame reveal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Mapa da Toca do Gorila",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						src: "https://www.google.com/maps?q=-5.177552,-40.6672581&z=17&output=embed"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container footer-main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: nav.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${id}`,
						children: label
					}, id)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "socials",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/tocadogorila/",
							"aria-label": "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Gideon Dourado TOCA DO GORILA. Todos os direitos reservados." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Versão 1.0.0" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container footer-credit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Desenvolvido por ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://ismaell.vercel.app",
					target: "_blank",
					rel: "noreferrer noopener",
					children: "ISMAELL CHAVES"
				})] })
			})
		] }),
		selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lightbox",
			role: "dialog",
			"aria-modal": "true",
			onClick: () => setSelected(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Fechar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaAsset, {
				src: selected,
				alt: "Mídia ampliada da academia",
				controls: true
			})]
		}),
		activeModality && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "modality-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "modality-dialog-title",
			onClick: () => setActiveModality(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "modality-dialog-card",
				onClick: (event) => event.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "modality-dialog-close",
						"aria-label": "Fechar resumo",
						onClick: () => setActiveModality(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["MODALIDADE ", String(modalities.indexOf(activeModality) + 1).padStart(2, "0")] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "modality-dialog-title",
						children: activeModality.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activeModality.summary }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "modality-dialog-details",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Origem" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activeModality.origin })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Benefícios" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activeModality.benefits })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Para quem é" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activeModality.idealFor })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "button button-primary",
						href: `/agendar?modalidade=${encodeURIComponent(activeModality.title)}&auto=1`,
						rel: "noreferrer",
						children: ["AGENDAR AULA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				]
			})
		})
	] });
}
var SplitComponent = FightTeamPage;
//#endregion
export { SplitComponent as component };
