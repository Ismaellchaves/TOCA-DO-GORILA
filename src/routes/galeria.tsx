import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Image as ImageIcon, Play, X } from "lucide-react";
import exercito1 from "../assets/galeria/exercito(1).jpg";
import exercito2 from "../assets/galeria/exercito(2).jpg";
import exercito3 from "../assets/galeria/exercito(3).jpg";
import exercito4 from "../assets/galeria/exercito(4).jpg";
import exercito5 from "../assets/galeria/exercito(5).jpg";
import team from "../assets/galeria/equipe-treino.jpg";
import fotos1 from "../assets/galeria/fotos1.jpg";
import fotos from "../assets/galeria/fotos.jpg";
import fotos2 from "../assets/galeria/fotos2.jpg";
import logoUrl from "../assets/fight-team-logo.png";
import treinoVideo from "../assets/videos/treino.mp4";
import treinoVideo2 from "../assets/videos/treinos.mp4";

const photos = [exercito1, exercito2, exercito3, exercito4, exercito5, team, fotos1, fotos, fotos2];
const videos = [treinoVideo, treinoVideo2];

export const Route = createFileRoute("/galeria")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Galeria | Gideon Dourado TOCA DO GORILA" },
      { name: "description", content: "Fotos e vídeos dos treinos, eventos e conquistas da Gideon Dourado TOCA DO GORILA." },
      { property: "og:title", content: "Galeria | Gideon Dourado TOCA DO GORILA" },
      { property: "og:description", content: "Confira momentos dos treinos, eventos e conquistas da nossa equipe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="gallery-page">
      <header className="gallery-page-header">
        <Link to="/" aria-label="Voltar ao início"><img src={logoUrl} alt="Gideon Dourado TOCA DO GORILA" /></Link>
        <Link className="button button-outline" to="/"><ArrowLeft /> VOLTAR AO INÍCIO</Link>
      </header>

      <section className="gallery-page-intro container">
        <span>NOSSA EQUIPE EM AÇÃO</span>
        <h1>FOTOS &amp;<br /><em>VÍDEOS</em></h1>
        <p>Treinos, eventos, conquistas e a energia da Gideon Dourado TOCA DO GORILA.</p>
      </section>

      {photos.length > 0 && <section className="gallery-page-content container" aria-labelledby="photos-title">
        <div className="media-heading"><ImageIcon /><div><span>REGISTROS DA EQUIPE</span><h2 id="photos-title">FOTOGRAFIAS</h2></div></div>
        <div className="gallery-page-grid">
          {photos.map((image, index) => (
            <button className={`gallery-page-item gallery-page-item-${index + 1}`} key={`${image}-${index}`} onClick={() => setSelected(image)} aria-label={`Ampliar fotografia ${index + 1}`}>
              <img src={image} alt={`Treino e equipe Gideon Dourado ${index + 1}`} loading="lazy" />
              <span>VER FOTO</span>
            </button>
          ))}
        </div>
      </section>}

      <section className="video-library container" aria-labelledby="videos-title">
        <div className="media-heading"><Play /><div><span>REGISTROS EM VÍDEO</span><h2 id="videos-title">VÍDEOS</h2></div></div>
        <div className="video-library-grid">{videos.map((video) => <video key={video} src={video} controls playsInline />)}</div>
      </section>

      <footer className="gallery-page-footer"><img src={logoUrl} alt="" /><span>© 2026 GIDEON DOURADO TOCA DO GORILA</span></footer>

      {selected && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button aria-label="Fechar"><X /></button><img src={selected} alt="Fotografia ampliada da equipe" /></div>}
    </main>
  );
}