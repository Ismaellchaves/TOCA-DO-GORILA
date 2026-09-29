import { useMemo, useState } from "react";
import { Link, createFileRoute, useLocation } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check, Clock3, MessageCircleMore, UserRound } from "lucide-react";

const WHATSAPP_NUMBER = "558892665285";
const DEFAULT_MODALITY = "Muay Thai" , "Kickboxing" , "Jiu Jitsu" , "Karatê" , "Muay Thai Kids"  ;

function buildWhatsAppUrl({ name, date, time, modality }: { name: string; date: string; time: string; modality: string }) {
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

export const Route = createFileRoute("/agendar")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Agendar aula | Gideon Dourado TOCA DO GORILA" },
      { name: "description", content: "Agende uma aula experimental e envie sua solicitação diretamente para o WhatsApp da academia." },
      { property: "og:title", content: "Agendar aula | Gideon Dourado TOCA DO GORILA" },
      { property: "og:description", content: "Informe seu nome, data, horário e modalidade para agendar sua aula experimental." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search || ""), [location.search]);
  const initialModality = searchParams.get("modalidade") || DEFAULT_MODALITY;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [modality, setModality] = useState(initialModality);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildWhatsAppUrl({ name, date, time, modality });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="booking-page">
      <div className="booking-shell container">
        <header className="booking-header">
          <Link to="/" className="booking-back" aria-label="Voltar ao início"><ArrowLeft /> Voltar</Link>
          <div className="booking-brand">
            <span className="booking-kicker">Gideon Dourado</span>
            <strong>TOCA DO GORILA</strong>
          </div>
        </header>

        <section className="booking-card">
          <div className="booking-copy">
            <span>AGENDE SUA AULA</span>
            <h1>Seu primeiro passo começa aqui.</h1>
            <p>Preencha os dados abaixo e envie sua solicitação diretamente para o WhatsApp da academia.</p>
          </div>

          <form className="booking-form" onSubmit={onSubmit}>
            <label>
              <span><UserRound /> Nome</span>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome completo" required />
            </label>

            <div className="booking-grid">
              <label>
                <span><CalendarDays /> Data</span>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
              </label>

              <label>
                <span><Clock3 /> Horário</span>
                <input type="time" value={time} onChange={(event) => setTime(event.target.value)} required />
              </label>
            </div>

            <label>
              <span><MessageCircleMore /> Modalidade</span>
              <select value={modality} onChange={(event) => setModality(event.target.value)}>
                <option value="Muay Thai">Muay Thai</option>
                   {/*     <option value="Kickboxing">Kickboxing</option>
                <option value="Defesa Pessoal">Defesa Pessoal</option>
                <option value="Muay Thai Kids">Muay Thai Kids</option> */}
              </select>
            </label>

            <button type="submit" className="button button-primary booking-submit">
              <Check /> Enviar para WhatsApp
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
