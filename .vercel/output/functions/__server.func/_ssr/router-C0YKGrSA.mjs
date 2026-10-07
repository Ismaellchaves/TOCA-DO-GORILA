import { i as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowLeft, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as fight_team_logo_default } from "./fight-team-logo-CQm4Pn5j.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C0YKGrSA.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B7WTzx6Z.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "not-found-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "not-found-noise",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "not-found-orbit not-found-orbit-one",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "not-found-orbit not-found-orbit-two",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "not-found-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "not-found-logo",
						src: fight_team_logo_default,
						alt: "Gideon Dourado Fight Team",
						width: 180,
						height: 152
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "not-found-kicker",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), " TOCA DO GORILA"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "not-found-code",
						children: "404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "ESTAMOS FORA DO AR" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "not-found-message",
						children: "Esta página está em manutenção. Em breve voltamos com tudo para você continuar seu treino."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "button button-primary not-found-button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " VOLTAR AO INÍCIO"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "not-found-footer",
				children: "DISCIPLINA · TÉCNICA · RESPEITO"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "referrer",
				content: "strict-origin-when-cross-origin"
			},
			{
				name: "application-version",
				content: "1.1.0"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Toca do Gorila"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./routes-Crb_O8am.mjs");
var Route$3 = createFileRoute("/")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "TOCA DO GORILA | GIDEON DOURADO" },
			{
				name: "description",
				content: "Academia de Muay Thai, Kickboxing e Defesa Pessoal. Treine com profissionais e transforme disciplina em resultados."
			},
			{
				name: "keywords",
				content: "Muay Thai, Kickboxing, Defesa Pessoal, academia de luta"
			},
			{
				property: "og:title",
				content: "TOCA DO GORILA | GIDEON DOURADO"
			},
			{
				property: "og:description",
				content: "Academia de Muay Thai, Kickboxing e Defesa Pessoal. Treine com profissionais e transforme disciplina em resultados."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./agendar-DKhHDsJN.mjs");
var Route$2 = createFileRoute("/agendar")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Agendar aula | Gideon Dourado TOCA DO GORILA" },
		{
			name: "description",
			content: "Agende uma aula experimental e envie sua solicitação diretamente para o WhatsApp da academia."
		},
		{
			property: "og:title",
			content: "Agendar aula | Gideon Dourado TOCA DO GORILA"
		},
		{
			property: "og:description",
			content: "Informe seu nome, data, horário e modalidade para agendar sua aula experimental."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./galeria-BGuDxWCy.mjs");
var Route$1 = createFileRoute("/galeria")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Galeria | Gideon Dourado TOCA DO GORILA" },
		{
			name: "description",
			content: "Fotos e vídeos dos treinos, eventos e conquistas da Gideon Dourado TOCA DO GORILA."
		},
		{
			property: "og:title",
			content: "Galeria | Gideon Dourado TOCA DO GORILA"
		},
		{
			property: "og:description",
			content: "Confira momentos dos treinos, eventos e conquistas da nossa equipe."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./loja-S6J-FRpW.mjs");
var Route = createFileRoute("/loja")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Loja | Gideon Dourado TOCA DO GORILA" },
		{
			name: "description",
			content: "Conheça os equipamentos, acessórios e produtos da loja Toca do Gorila. Consulte disponibilidade e compre pelo WhatsApp."
		},
		{
			property: "og:title",
			content: "Loja | Gideon Dourado TOCA DO GORILA"
		},
		{
			property: "og:description",
			content: "Equipamentos, vestuário e acessórios para a sua rotina de treino."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AgendarRoute: Route$2.update({
		id: "/agendar",
		path: "/agendar",
		getParentRoute: () => Route$4
	}),
	GaleriaRoute: Route$1.update({
		id: "/galeria",
		path: "/galeria",
		getParentRoute: () => Route$4
	}),
	LojaRoute: Route.update({
		id: "/loja",
		path: "/loja",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
