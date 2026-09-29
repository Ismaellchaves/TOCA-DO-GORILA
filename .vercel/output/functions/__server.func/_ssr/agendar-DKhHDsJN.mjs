import { i as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CalendarDays, c as MessageCircleMore, f as Clock3, g as Check, n as UserRound, y as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agendar-DKhHDsJN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "558892665285";
var DEFAULT_MODALITY = "Muay Thai";
function buildWhatsAppUrl({ name, date, time, modality }) {
	const safeName = name.trim() || "Aluno";
	const safeDate = date || "a definir";
	const safeTime = time || "a definir";
	const safeModality = modality || DEFAULT_MODALITY;
	const message = [
		"Olá! Meu nome é " + safeName + ".",
		"Queria fazer uma aula experimental e saber mais sobre o treino de " + safeModality + ".",
		"Gostaria de agendar para o dia " + safeDate + " às " + safeTime + ".",
		"Podem me passar mais informações?"
	].join(" ");
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function BookingPage() {
	const location = useLocation();
	const initialModality = (0, import_react.useMemo)(() => new URLSearchParams(location.search || ""), [location.search]).get("modalidade") || DEFAULT_MODALITY;
	const [name, setName] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("");
	const [modality, setModality] = (0, import_react.useState)(initialModality);
	const onSubmit = (event) => {
		event.preventDefault();
		const url = buildWhatsAppUrl({
			name,
			date,
			time,
			modality
		});
		window.open(url, "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "booking-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "booking-shell container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "booking-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "booking-back",
					"aria-label": "Voltar ao início",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Voltar"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "booking-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "booking-kicker",
						children: "Gideon Dourado"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TOCA DO GORILA" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "booking-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "booking-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AGENDE SUA AULA" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Seu primeiro passo começa aqui." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Preencha os dados abaixo e envie sua solicitação diretamente para o WhatsApp da academia." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "booking-form",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}), " Nome"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: name,
							onChange: (event) => setName(event.target.value),
							placeholder: "Seu nome completo",
							required: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "booking-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}), " Data"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: date,
								onChange: (event) => setDate(event.target.value),
								required: true
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {}), " Horário"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "time",
								value: time,
								onChange: (event) => setTime(event.target.value),
								required: true
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleMore, {}), " Modalidade"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: modality,
							onChange: (event) => setModality(event.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Muay Thai",
									children: "Muay Thai"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Kickboxing",
									children: "Kickboxing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Jiu Jitsu",
									children: "Jiu Jitsu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Karatê",
									children: "Karatê"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Muay Thai Kids",
									children: "Muay Thai Kids"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "button button-primary booking-submit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), " Enviar para WhatsApp"]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { BookingPage as component };
