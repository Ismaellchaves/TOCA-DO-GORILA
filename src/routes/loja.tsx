import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MessageCircleMore, ShoppingBag, X } from "lucide-react";
import kitBksImage from "../assets/galeria/loja img/equipamentos/kitbks.jpg";
import kitBksImage1 from "../assets/galeria/loja img/equipamentos/kit bks (1).png";
import kitBksImage2 from "../assets/galeria/loja img/equipamentos/kit bks (2).png";
import kitBksImage3 from "../assets/galeria/loja img/equipamentos/kit bks (3).png";
import kitBksImage4 from "../assets/galeria/loja img/equipamentos/kit bks (4).png";
import kitBksImage5 from "../assets/galeria/loja img/equipamentos/kit bks (5).png";
import kitBksImage6 from "../assets/galeria/loja img/equipamentos/kit bks (6).png";
import kitBksImage7 from "../assets/galeria/loja img/equipamentos/kit bks (7).png";
import kitBks2Image1 from "../assets/galeria/loja img/equipamentos/kit2bks (1).png";
import kitBks2Image2 from "../assets/galeria/loja img/equipamentos/kit2bks (2).png";
import kitBks2Image3 from "../assets/galeria/loja img/equipamentos/kit2bks (3).png";
import kitBks2Image4 from "../assets/galeria/loja img/equipamentos/kit2bks (4).png";
import kitBks2Image5 from "../assets/galeria/loja img/equipamentos/kit2bks (5).png";
import kitBks2Image6 from "../assets/galeria/loja img/equipamentos/kit2bks (6).png";
import kitBks2Image7 from "../assets/galeria/loja img/equipamentos/kit2bks (7).png";
import kitMaximumImage1 from "../assets/galeria/loja img/equipamentos/kitmaximun (1).png";
import kitMaximumImage2 from "../assets/galeria/loja img/equipamentos/kitmaximun (2).png";
import bandagemLojaImage1 from "../assets/galeria/loja img/bandagens/bandagem.jpg";
import bandagemLojaImage2 from "../assets/galeria/loja img/bandagens/bandagemm.jpg";
import bandagemLojaImage3 from "../assets/galeria/loja img/bandagens/bandagemmm.jpg";
import bandagemLojaImage4 from "../assets/galeria/loja img/bandagens/bandagemmmm.jpg";
import shortAzulImage from "../assets/galeria/loja img/shorts/shortazul.jpg";
import shortAzulDetailImage from "../assets/galeria/loja img/shorts/shortazull.jpg";
import shortAzulBrImage from "../assets/galeria/loja img/shorts/shortazulbr.jpg";
import shortAzulBrDetailImage from "../assets/galeria/loja img/shorts/shortazulbrr.jpg";
import shortCinzaImage from "../assets/galeria/loja img/shorts/shortcinza.jpg";
import shortCinzaDetailImage from "../assets/galeria/loja img/shorts/shortcinzaa.jpg";
import shortRosaImage from "../assets/galeria/loja img/shorts/shortrosa.jpg";
import shortRosaDetailImage from "../assets/galeria/loja img/shorts/shortrosaa.jpg";
import blusaLaranjaImage from "../assets/galeria/loja img/blusas/blucaCT.jpg";
import blusaLaranjaDetailImage from "../assets/galeria/loja img/blusas/blucaCT.jpg";
import logoUrl from "../assets/fight-team-logo.png";

const WHATSAPP_NUMBER = "558892665285";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string;
  options: string;
  sizes?: string[];
  sizeSurcharge?: {
    amount: number;
    sizes: string[];
  };
  sizeGuidance?: Record<string, string>;
  sizeLabel?: string;
  purchaseUrl?: string;
  images: string[];
};

const bksSizeGuidance: Record<string, string> = {
  "08 oz":
    "Mais leve, costuma ser indicada para crianças ou atletas muito leves. Neste kit acompanha caneleira infantil; não é a escolha usual para sparring adulto.",
  "10 oz":
    "Opção leve, geralmente usada em saco, manoplas e treino técnico. A caneleira do kit é adulta.",
  "12 oz":
    "Gramatura intermediária, versátil para saco, manoplas e treino técnico. A caneleira do kit é adulta.",
  "14 oz":
    "Mais acolchoamento para treinos gerais; pode ser usada em atividades de contato leve conforme seu peso e orientação do professor. Acompanha caneleira adulta.",
  "16 oz":
    "Maior acolchoamento, frequentemente escolhida para sparring quando permitido pela academia. Acompanha caneleira adulta.",
};

const products: Product[] = [
  {
    id: "bandagem-elastica",
    name: "Bandagem elástica",
    category: "Acessórios",
    price: 50.0,
    description: "Suporte para as mãos e os punhos durante o treino.",
    details:
      "Ajuda a envolver mãos e punhos antes de calçar as luvas. Uma opção prática para complementar seu equipamento.",
    options: "Consulte as opções de comprimento e cor.",
    images: [bandagemLojaImage1, bandagemLojaImage2, bandagemLojaImage3, bandagemLojaImage4],
  },
  {
    id: "kit-bks",
    name: "Kit BKS de Boxe e Muay Thai",
    category: "Equipamentos",
    price: 224.1,
    description:
      "Kit completo para começar no Boxe, Muay Thai ou Kickboxing: luvas, caneleiras, bandagens, bucal com estojo e bolsa.",
    details:
      "Inclui 1 par de luvas, 1 par de caneleiras, bandagens elásticas de 3 m, bucal com estojo e bolsa transversal.\n\nA gramatura escolhida é a das luvas e também define a caneleira: 08 oz acompanha caneleira infantil; de 10 a 16 oz, caneleira adulta. Adultos devem escolher a partir de 10 oz. Em caso de dúvida, consulte seu professor antes de comprar.",
    options:
      "Escolha entre 08, 10, 12, 14 ou 16 oz. Cores disponíveis: azul, branco, dourado, prata, preto, rosa e vermelho. Consulte a disponibilidade.",
    sizes: ["08 oz", "10 oz", "12 oz", "14 oz", "16 oz"],
    sizeGuidance: bksSizeGuidance,
    purchaseUrl:
      "https://shopee.com.br/product/1773476765/58263150265?d_id=047b8&uls_trackid=56qmjfrq00l1&utm_content=42ynCbriQrqbJ1q6kg229fnSqij9",
    images: [
      kitBksImage,
      kitBksImage1,
      kitBksImage2,
      kitBksImage3,
      kitBksImage4,
      kitBksImage5,
      kitBksImage6,
      kitBksImage7,
    ],
  },
  {
    id: "kit-bks-essencial",
    name: "Kit BKS Essencial de Boxe e Muay Thai",
    category: "Equipamentos",
    price: 175.75,
    description: "Kit para começar a treinar com luvas, caneleiras, bandagens e bucal com estojo.",
    details:
      "Inclui 1 par de luvas, 1 par de caneleiras de tamanho único, bandagens elásticas de 3 m e bucal com estojo. As luvas têm palma ventilada e costura reforçada; as caneleiras usam espuma de dupla densidade.\n\nA gramatura da luva define a caneleira enviada: 08 oz acompanha caneleira infantil; as demais gramaturas acompanham caneleira adulta. Adultos devem escolher a partir de 10 oz.",
    options:
      "Luvas de 08, 10, 12, 14 ou 16 oz. Cores disponíveis: azul, branco, dourado, prata, preto, rosa e vermelho. Consulte a disponibilidade.",
    sizes: ["08 oz", "10 oz", "12 oz", "14 oz", "16 oz"],
    sizeGuidance: bksSizeGuidance,
    purchaseUrl:
      "https://shopee.com.br/product/1773476765/58265543483?d_id=047b8&uls_trackid=56qmjg9201l0&utm_content=42ynCbriQrwGA8e2PNJ6tECb3mHZ",
    images: [
      kitBks2Image1,
      kitBks2Image2,
      kitBks2Image3,
      kitBks2Image4,
      kitBks2Image5,
      kitBks2Image6,
      kitBks2Image7,
    ],
  },
  {
    id: "kit-maximum",
    name: "Kit Maximum Luvas e Caneleiras",
    category: "Equipamentos",
    price: 662.69,
    description: "Conjunto Maximum para treinos de Boxe e Muay Thai, com luvas e caneleiras.",
    details:
      "Kit de luvas para Boxe e Muay Thai com caneleiras Maximum. Selecione o tamanho da caneleira desejada e confirme as opções disponíveis na Shopee.",
    options: "Tamanhos de caneleira: P (S), M, G (L) e GG (XL).",
    sizes: ["P (S)", "M", "G (L)", "GG (XL)"],
    sizeLabel: "Tamanho da caneleira",
    purchaseUrl:
      "https://shopee.com.br/product/386537194/40417181187?d_id=047b8&uls_trackid=56qmjgup00jq&utm_content=42ynCbriQs1YoqGP8ZMWg2RU3BHy",
    images: [kitMaximumImage1, kitMaximumImage2],
  },
  {
    id: "Bulsa da Academia GD Toca do Gorila",
    name: "Blusa laranja da Academia GD Toca do Gorila",
    category: "Vestuário",
    price: 65.0,
    description: "Blusa laranja da Academia GD Toca do Gorila.",
    details: "Blusa laranja da Academia GD Toca do Gorila, ideal para treinos.",
    options: "Tamanhos disponíveis para consulta: P, M, G e GG.",
    sizes: ["P", "M", "G", "GG"],
    sizeSurcharge: { amount: 7, sizes: ["G", "GG"] },
    images: [blusaLaranjaImage, blusaLaranjaDetailImage],
  },
  {
    id: "short-muay-thai-azul",
    name: "Short de Muay Thai Azul",
    category: "Vestuário",
    price: 95.0,
    description: "Short de Muay Thai Go Fight na cor azul.",
    details: "Short de Muay Thai em tecido leve, com modelagem para artes marciais.",
    options: "Tamanhos disponíveis para consulta: P, M, G e GG.",
    sizes: ["P", "M", "G", "GG"],
    images: [shortAzulImage, shortAzulDetailImage],
  },
  {
    id: "short-muay-thai-azul-branco",
    name: "Short de Muay Thai Azul e Branco",
    category: "Vestuário",
    price: 95.0,
    description: "Short de Muay Thai Go Fight em azul e branco.",
    details: "Short de Muay Thai em tecido leve, com modelagem para artes marciais.",
    options: "Tamanhos disponíveis para consulta: P, M, G e GG.",
    sizes: ["P", "M", "G", "GG"],
    images: [shortAzulBrImage, shortAzulBrDetailImage],
  },
  {
    id: "short-muay-thai-cinza",
    name: "Short de Muay Thai Cinza",
    category: "Vestuário",
    price: 95.0,
    description: "Short de Muay Thai Go Fight na cor cinza.",
    details: "Short de Muay Thai em tecido leve, com modelagem para artes marciais.",
    options: "Tamanhos disponíveis para consulta: P, M, G e GG.",
    sizes: ["P", "M", "G", "GG"],
    images: [shortCinzaImage, shortCinzaDetailImage],
  },
  {
    id: "short-muay-thai-rosa",
    name: "Short de Muay Thai Rosa",
    category: "Vestuário",
    price: 95.0,
    description: "Short de Muay Thai Go Fight na cor rosa.",
    details: "Short de Muay Thai em tecido leve, com modelagem para artes marciais.",
    options: "Tamanhos disponíveis para consulta: P, M, G e GG.",
    sizes: ["P", "M", "G", "GG"],
    images: [shortRosaImage, shortRosaDetailImage],
  },
];

const categories = ["Todos", "Equipamentos", "Vestuário", "Acessórios"];
const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function getSizeSurcharge(product: Product, size?: string) {
  if (!size || !product.sizeSurcharge?.sizes.includes(size)) return 0;
  return product.sizeSurcharge.amount;
}

function buildWhatsAppUrl(product: Product, quantity: number, name: string, size?: string) {
  const customer = name.trim();
  const greeting = customer ? `Meu nome é ${customer}` : "Tenho interesse em um produto da loja";
  const sizeSurcharge = getSizeSurcharge(product, size);
  const unitPrice = product.price + sizeSurcharge;
  const message = [
    `Olá, boa tarde! ${greeting}.`,
    `Gostaria de adquirir ${quantity} unidade${quantity > 1 ? "s" : ""} do produto ${product.name}, no valor de ${formatPrice(unitPrice)} cada.`,
    ...(size ? [`Tamanho desejado: ${size}.`] : []),
    ...(sizeSurcharge > 0
      ? [`O tamanho ${size} tem acréscimo de ${formatPrice(sizeSurcharge)} por unidade.`]
      : []),
    `Poderiam, por gentileza, confirmar a disponibilidade e informar as opções de tamanho, cor, pagamento e retirada?`,
    "Agradeço desde já e aguardo o retorno.",
  ].join(" ");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/loja")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Loja | Gideon Dourado TOCA DO GORILA" },
      {
        name: "description",
        content:
          "Conheça os equipamentos, acessórios e produtos da loja Toca do Gorila. Consulte disponibilidade e compre pelo WhatsApp.",
      },
      { property: "og:title", content: "Loja | Gideon Dourado TOCA DO GORILA" },
      {
        property: "og:description",
        content: "Equipamentos, vestuário e acessórios para a sua rotina de treino.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  const [category, setCategory] = useState("Todos");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");
  const visibleProducts =
    category === "Todos" ? products : products.filter((product) => product.category === category);

  const showProduct = (product: Product) => {
    setActiveProduct(product);
    setActiveImage(0);
    setSelectedSize(product.sizes?.[0] ?? "M");
  };

  return (
    <main className="store-page">
      <header className="gallery-page-header">
        <Link to="/" aria-label="Voltar ao início">
          <img src={logoUrl} alt="Gideon Dourado TOCA DO GORILA" />
        </Link>
        <Link className="button button-outline" to="/">
          <ArrowLeft /> VOLTAR AO INÍCIO
        </Link>
      </header>

      <section className="store-intro container">
        <span>GIDEON DOURADO · TOCA DO GORILA</span>
        <h1>
          LOJA
          <br />
          <em>DA EQUIPE</em>
        </h1>
        <p>Equipamentos, vestuário e acessórios para acompanhar você em cada treino.</p>
      </section>

      <section className="store-catalog container" aria-label="Produtos da loja">
        <div className="store-toolbar">
          <div className="store-count">
            <ShoppingBag />
            <span>{visibleProducts.length} produtos</span>
          </div>
          <div className="store-filters" aria-label="Filtrar por categoria">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "is-active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="store-grid">
          {visibleProducts.map((product, index) => (
            <article
              className="store-product"
              key={product.id}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <button
                className="store-product-image"
                type="button"
                onClick={() => showProduct(product)}
                aria-label={`Ver detalhes de ${product.name}`}
              >
                <img
                  src={product.images[0]}
                  alt={`Imagem ilustrativa para ${product.name}`}
                  loading="lazy"
                />
                <span>FOTO ILUSTRATIVA</span>
              </button>
              <div className="store-product-info">
                <span className="store-product-category">{product.category}</span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="store-product-bottom">
                  <strong>{formatPrice(product.price)}</strong>
                  <button
                    type="button"
                    className="store-details-link"
                    onClick={() => showProduct(product)}
                  >
                    VER PRODUTO <ArrowUpRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="store-note">
          Consulte pelo WhatsApp a disponibilidade de tamanhos, cores e modelos.
        </p>
      </section>

      <footer className="gallery-page-footer">
        <img src={logoUrl} alt="" />
        <span>© 2026 GIDEON DOURADO TOCA DO GORILA</span>
      </footer>

      {activeProduct && (
        <div
          className="store-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="store-dialog-title"
          onClick={() => setActiveProduct(null)}
        >
          <div className="store-dialog-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="store-dialog-close"
              aria-label="Fechar detalhes"
              onClick={() => setActiveProduct(null)}
            >
              <X />
            </button>
            <div className="store-dialog-gallery">
              <img
                src={activeProduct.images[activeImage]}
                alt={`Imagem ilustrativa de ${activeProduct.name}`}
              />
              <span>FOTOS ILUSTRATIVAS</span>
              <div className="store-thumbnails" aria-label="Imagens do produto">
                {activeProduct.images.map((image, index) => (
                  <button
                    type="button"
                    key={`${activeProduct.id}-${image}`}
                    className={activeImage === index ? "is-active" : ""}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            </div>
            <div className="store-dialog-copy">
              <span className="store-product-category">{activeProduct.category}</span>
              <h2 id="store-dialog-title">{activeProduct.name}</h2>
              <strong className="store-dialog-price">
                {formatPrice(activeProduct.price + getSizeSurcharge(activeProduct, selectedSize))}
              </strong>
              <p>{activeProduct.details}</p>
              <div className="store-availability">
                <span>DISPONIBILIDADE</span>
                <p>{activeProduct.options}</p>
              </div>
              {!activeProduct.purchaseUrl && (
                <label className="store-order-field">
                  <span>Seu nome (opcional)</span>
                  <input
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Como podemos chamar você?"
                  />
                </label>
              )}
              {(activeProduct.sizes?.length ?? 0) > 0 && (
                <label className="store-order-field store-size">
                  <span>{activeProduct.sizeLabel ?? "Tamanho"}</span>
                  <select
                    value={selectedSize}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  >
                    {activeProduct.sizes?.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {getSizeSurcharge(activeProduct, selectedSize) > 0 && (
                    <small>
                      O tamanho {selectedSize} tem acréscimo de{" "}
                      {formatPrice(getSizeSurcharge(activeProduct, selectedSize))}.
                    </small>
                  )}
                  {activeProduct.sizeGuidance?.[selectedSize] && (
                    <small>{activeProduct.sizeGuidance[selectedSize]}</small>
                  )}
                </label>
              )}
              {!activeProduct.purchaseUrl && (
                <label className="store-order-field store-quantity">
                  <span>Quantidade</span>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(Math.max(1, Math.min(20, Number(event.target.value) || 1)))
                    }
                  />
                </label>
              )}
              {activeProduct.purchaseUrl && (
                <p className="store-purchase-note">
                  Escolha o tamanho e a cor também na página da Shopee para confirmar a variação.
                </p>
              )}
              <a
                className="button button-primary store-buy-button"
                href={
                  activeProduct.purchaseUrl ??
                  buildWhatsAppUrl(
                    activeProduct,
                    quantity,
                    customerName,
                    (activeProduct.sizes?.length ?? 0) > 0 ? selectedSize : undefined,
                  )
                }
                target="_blank"
                rel="noreferrer noopener"
              >
                {activeProduct.purchaseUrl ? <ShoppingBag /> : <MessageCircleMore />}
                {activeProduct.purchaseUrl ? "COMPRAR NA SHOPEE" : "COMPRAR PELO WHATSAPP"}
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
