import { i as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowLeft, c as Play, f as Image, t as X } from "../_libs/lucide-react.mjs";
import { t as fight_team_logo_default } from "./fight-team-logo-CQm4Pn5j.mjs";
import { a as exercito_4__default, c as fotos2_default, i as exercito_3__default, l as fotos_default, n as exercito_1__default, o as exercito_5__default, r as exercito_2__default, s as fotos1_default, t as equipe_treino_default } from "./fotos2-DSk7jPtD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galeria-DmxNMZv9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var treino_default = "/assets/treino-CUAzFo6x.mp4";
var treinos_default = "/assets/treinos-CA42Pign.mp4";
var photos = [
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
var videos = [treino_default, treinos_default];
function GalleryPage() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "gallery-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "gallery-page-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Voltar ao início",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: fight_team_logo_default,
						alt: "Gideon Dourado TOCA DO GORILA"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "button button-outline",
					to: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " VOLTAR AO INÍCIO"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gallery-page-intro container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NOSSA EQUIPE EM AÇÃO" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"FOTOS &",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "VÍDEOS" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Treinos, eventos, conquistas e a energia da Gideon Dourado TOCA DO GORILA." })
				]
			}),
			photos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gallery-page-content container",
				"aria-labelledby": "photos-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "media-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REGISTROS DA EQUIPE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "photos-title",
						children: "FOTOGRAFIAS"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-page-grid",
					children: photos.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: `gallery-page-item gallery-page-item-${index + 1}`,
						onClick: () => setSelected(image),
						"aria-label": `Ampliar fotografia ${index + 1}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image,
							alt: `Treino e equipe Gideon Dourado ${index + 1}`,
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VER FOTO" })]
					}, `${image}-${index}`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "video-library container",
				"aria-labelledby": "videos-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "media-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REGISTROS EM VÍDEO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "videos-title",
						children: "VÍDEOS"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "video-library-grid",
					children: videos.map((video) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: video,
						controls: true,
						playsInline: true
					}, video))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "gallery-page-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: fight_team_logo_default,
					alt: ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 GIDEON DOURADO TOCA DO GORILA" })]
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lightbox",
				role: "dialog",
				"aria-modal": "true",
				onClick: () => setSelected(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Fechar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: selected,
					alt: "Fotografia ampliada da equipe"
				})]
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
