# 🥊 TOCA DO GORILA — Gideon Dourado

Site institucional da academia **Toca do Gorila**, comandada por **Gideon Dourado**. O projeto apresenta a academia, suas modalidades e permite que visitantes agendem uma aula experimental diretamente pelo WhatsApp.

<p align="center">
  <img src="https://github.com/user-attachments/assets/6ef77f95-d2f8-47c6-b073-7efbd0119c94" alt="Mockup Toca do Gorila" width="700" />
</p>

---

## 📑 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Modalidades](#-modalidades)
- [Tecnologias](#-tecnologias)
- [Paleta de cores](#-paleta-de-cores)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Deploy](#-deploy)
- [Apresentação](#-apresentação)
- [Autor](#-autor)

---

## 🎯 Sobre o projeto

O **Toca do Gorila** é um site institucional desenvolvido para a academia de artes marciais **Gideon Dourado**. O objetivo é apresentar a academia de forma moderna e responsiva, além de facilitar o contato de novos alunos por meio de um formulário de agendamento que envia a solicitação direto para o WhatsApp da academia.

Principais recursos:

- ✅ Layout responsivo (desktop e mobile)
- ✅ Página inicial com apresentação da academia
- ✅ Galeria de fotos
- ✅ Seção de modalidades
- ✅ Formulário de **agendamento de aula experimental** integrado ao WhatsApp
- ✅ Botão flutuante de CTA (Call to Action)
- ✅ SEO básico com meta tags e Open Graph

---

## 🖼 Demonstração

### 🖥 Desktop

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/0642ea89-d7d5-4785-b540-d74fccbb8802" alt="Tela 01" /></td>
    <td><img src="https://github.com/user-attachments/assets/b4cb4762-95e1-4cce-8bf6-08f6f1a5cc3b" alt="Tela 02" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/c7d053e7-fc10-4d15-aa78-f42257f79719" alt="Tela 03" /></td>
    <td><img src="https://github.com/user-attachments/assets/e37d53e0-8b77-49da-8edb-84a4d014f6c5" alt="Tela 03 - Modalidade" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/64a7aa94-c7e5-441a-be18-5e28e8727b4f" alt="Tela 04" /></td>
    <td><img src="https://github.com/user-attachments/assets/9dba646f-a1e8-4a4d-a0a0-8d781829b24d" alt="Tela 05" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/19758cbc-9fa3-43c8-b46e-36d28238d9d6" alt="Tela 06" /></td>
    <td><img src="https://github.com/user-attachments/assets/19c07d2f-8349-4423-81e2-19419b68f1a7" alt="Botão Agendar Aula" /></td>
  </tr>
  <tr>
    <td colspan="2"><img src="https://github.com/user-attachments/assets/afff6ede-6c70-4c51-80ff-49c696f781aa" alt="Galeria" /></td>
  </tr>
</table>

### 📱 Mobile

<p align="center">
  <img src="https://github.com/user-attachments/assets/83e47f60-99b8-4274-837a-63652dfe857c" alt="Versão Mobile" width="320" />
</p>

---

## 🥋 Modalidades

- Muay Thai
- Kickboxing
- Jiu Jitsu
- Karatê
- Muay Thai Kids

---

## 🚀 Tecnologias

- **[React](https://react.dev/)** — biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Vite](https://vitejs.dev/)** — bundler e dev server
- **[TanStack Router](https://tanstack.com/router)** — roteamento type-safe
- **[TanStack Start](https://tanstack.com/start)** — framework full-stack
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização (se aplicável)
- **[Lucide React](https://lucide.dev/)** — ícones
- **[Vercel](https://vercel.com/)** — deploy

---

## 🎨 Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| 🟧 Laranja | `#ea580c` | Cor de destaque, CTAs e botões |
| ⬛ Preto | `#000000` | Fundo principal |
| ⬜ Branco | `#ffffff` | Textos e contrastes |

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Ismaellchaves/TOCA-DO-GORILA.git

# Entre na pasta
cd TOCA-DO-GORILA

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
O projeto estará disponível em http://localhost:8080.

Scripts disponíveis
Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera o build de produção
npm run preview	Pré-visualiza o build de produção
npm run lint	Executa o linter
💡 Se a porta 8080 já estiver em uso, rode npx kill-port 8080 ou npm run dev -- --port 3000.

📁 Estrutura do projeto
text
TOCA-DO-GORILA/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── routes/          # Rotas (TanStack Router)
│   │   ├── __root.tsx
│   │   ├── index.tsx    # Página inicial
│   │   └── agendar.tsx  # Página de agendamento
│   ├── styles/          # Estilos globais
│   ├── router.tsx       # Configuração do roteador
│   └── main.tsx         # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
🌐 Deploy
O projeto está configurado para deploy na Vercel.

Para fazer deploy manualmente:

bash
npm run build
E publique a pasta dist/ na sua plataforma de preferência.

Variáveis de ambiente
Se necessário, crie um arquivo .env com:

env
VERCEL_OIDC_TOKEN=seu_token_aqui
⚠️ Nunca commite o arquivo .env no repositório.

📄 Apresentação
O projeto conta com um PDF de apresentação completo, disponível em:

📎 Toca_do_Gorila_Apresentacao.pdf

Caso o link direto não funcione, verifique se o arquivo está na raiz do repositório.

👤 Autor
Ismael Chaves

GitHub: @Ismaellchaves

📝 Licença
Este projeto é de uso exclusivo da academia Toca do Gorila e do professor Gideon Dourado. Todos os direitos reservados.

<p align="center"> Feito com 🥊 e 💻 para a <strong>Toca do Gorila</strong> </p> ```
