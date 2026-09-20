import { createFileRoute } from "@tanstack/react-router";
import { FightTeamPage } from "../components/FightTeamPage";

export const Route = createFileRoute("/")({
  ssr: false,
  component: FightTeamPage,
  head: () => ({
    meta: [
      { title: "TOCA DO GORILA | GIDEON DOURADO" },
      { name: "description", content: "Academia de Muay Thai, Kickboxing e Defesa Pessoal. Treine com profissionais e transforme disciplina em resultados." },
      { name: "keywords", content: "Muay Thai, Kickboxing, Defesa Pessoal, academia de luta" },
      { property: "og:title", content: "TOCA DO GORILA | GIDEON DOURADO" },
      { property: "og:description", content: "Academia de Muay Thai, Kickboxing e Defesa Pessoal. Treine com profissionais e transforme disciplina em resultados." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
