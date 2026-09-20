# Ironclad Muay Thai

CRIE ESTE SITE DO ZERO — NÃO FAÇA UM TEMPLATE GENÉRICO.

A imagem anexada é a REFERÊNCIA VISUAL PRINCIPAL deste projeto.

Quero uma landing page profissional para uma academia de MUAY THAI, reproduzindo fielmente a composição, proporções, hierarquia visual, atmosfera, espaçamentos, cores, navegação e estrutura visual da imagem de referência.

NÃO quero um site que apenas tenha "um estilo parecido".

Quero que você analise a imagem e reproduza a experiência visual dela o mais próximo possível, criando código próprio, responsivo e profissional.

==================================================

1. TECNOLOGIA

==================================================

Use:

- HTML5

- CSS3

- JavaScript

- Bootstrap 5.3

- Three.js

- GSAP

- Font Awesome

- Google Fonts

- Swiper.js quando necessário

- Leaflet ou mapa incorporado na seção de localização

Não utilize frameworks desnecessários.

O código precisa ser limpo, organizado e fácil de editar.

Estrutura:

/

├── index.html

├── css/

│   └── style.css

├── js/

│   └── main.js

├── assets/

│   ├── images/

│   ├── fighters/

│   ├── logo/

│   ├── gallery/

│   └── icons/

└── README.md

A identidade deve seguir exatamente a atmosfera da imagem.

Paleta principal:

PRETO:

#050505

#080808

#0D0D0D

VERMELHO:

#E10600

#C40000

#8B0000

CINZA:

#777777

#A0A0A0

BRANCO:

#FFFFFF

O vermelho deve ser utilizado principalmente para:

- títulos importantes

- palavras destacadas

- linhas

- ícones

- botões

- detalhes

- iluminação

- partículas

- glow

- elementos de navegação

O fundo deve ser predominantemente preto.

NÃO utilize fundos brancos predominantes.

A tipografia precisa transmitir:

- luta

- força

- disciplina

- competição

- premium

- agressividade controlada

Utilize uma fonte display forte semelhante à da referência para títulos.

Sugestões:

Anton

Bebas Neue

Oswald

Para textos:

Inter

Montserrat

Títulos grandes devem ser muito fortes.

Exemplo:

MUAY THAI

DISCIPLINA

TÉCNICA

RESPEITO

A palavra principal pode utilizar fonte display condensada e pesada.

Crie um header exatamente inspirado na referência.

Desktop:

Logo no canto esquerdo.

Menu pequeno e elegante no centro/direita.

Itens:

INÍCIO

SOBRE

MODALIDADES

GALERIA

TREINE CONOSCO

LOCALIZAÇÃO

No extremo direito:

[ AGENDAR AULA ↗ ]

O botão deve possuir borda vermelha.

Header:

- transparente inicialmente

- sobreposto ao Hero

- blur sutil

- background preto/transparente ao fazer scroll

- fixo no topo

- z-index alto

Logo deve ser circular.

Não invente uma logo complexa se não houver asset.

Crie um espaço preparado:

assets/logo/logo.png

Quando eu fornecer a logo real, ela deverá substituir automaticamente o placeholder.

Esta é a parte MAIS IMPORTANTE.

Reproduza a composição da imagem.

Tela cheia.

Altura aproximada:

100vh

Fundo:

academia de Muay Thai escura.

Muito preto.

Iluminação vermelha.

Fumaça.

Partículas.

Faíscas.

Luzes dramáticas.

No centro/direita:

LUTADOR DE MUAY THAI.

O lutador deve ocupar aproximadamente 55–65% da altura da tela.

Ele deve estar em uma posição dinâmica de luta.

Braço/punho avançado em direção à câmera.

Criar sensação de profundidade.

O punho deve parecer próximo do usuário.

Utilize perspectiva 3D.

IMPORTANTE:

Se existir modelo 3D GLB/GLTF do lutador, utilizar Three.js.

Preparar suporte para:

fighter.glb

Caso o modelo ainda não exista, criar uma estrutura visual temporária que possa ser substituída posteriormente.

O site deve possuir sensação real de 3D.

Utilizar:

Three.js

GSAP

requestAnimationFrame

Criar:

- movimento sutil de respiração

- movimento corporal

- câmera com parallax

- partículas

- luz vermelha dinâmica

- profundidade

- movimento conforme mouse

- movimento conforme scroll

Quando o usuário mover o mouse:

o lutador/câmera deve reagir levemente.

Não exagerar.

Deve parecer uma experiência de site premium.

No lado esquerdo:

pequeno texto:

MUAY THAI

Título grande:

DISCIPLINA

TÉCNICA

RESPEITO

Utilizar vermelho em algumas palavras.

Texto:

Mais que uma luta.

Um estilo de vida.

Botão:

AGENDAR AULA EXPERIMENTAL ↗

Botão vermelho.

Abaixo ou no canto inferior:

indicador:

SCROLL

↓

O Hero não deve simplesmente desaparecer.

Ao rolar:

- câmera 3D muda

- lutador se move

- texto desaparece suavemente

- fundo muda

- partículas continuam

- elementos entram na tela

- próxima seção aparece com transição cinematográfica

Utilize GSAP ScrollTrigger.

O scroll precisa parecer uma experiência de apresentação de academia profissional.

Logo abaixo do Hero.

Fundo preto.

Layout semelhante à referência.

Lado esquerdo:

imagem de lutador em preto/cinza/vermelho.

Lado direito:

SOBRE A ACADEMIA

TRADIÇÃO E

RESULTADOS

Texto:

A academia nasceu do desejo de transformar disciplina em evolução. Aqui você encontra treinamento técnico, preparação física e uma comunidade que respeita o caminho de cada aluno.

Abaixo:

pequenos indicadores.

Exemplo:

15+

ANOS DE EXPERIÊNCIA

8

MODALIDADES

100%

FOCO NO ALUNO

Adicionar pequenos ícones.

No canto direito:

card com logo da academia.

Frase:

"Muay Thai não é apenas esporte, é modo de vida."

Título:

NOSSAS

MODALIDADES

Texto:

Escolha a modalidade ideal para você e venha fazer parte do nosso time.

Criar 4 cards.

CARD 01

MUAY THAI

Aprenda golpes, defesa e estratégia.

CARD 02

KICKBOXING

Velocidade, potência e condicionamento.

CARD 03

DEFESA PESSOAL

Reação, postura e segurança.

CARD 04

MUAY THAI KIDS

Disciplina e confiança desde cedo.

Cada card deve possuir:

- imagem de luta

- borda fina vermelha

- número

- título

- descrição

- botão circular vermelho

Hover:

- card sobe alguns pixels

- imagem aumenta levemente

- vermelho aparece

- glow

- borda fica mais intensa

Reproduzir a seção correspondente da imagem.

Título:

AS 8 ARMAS

DO MUAY THAI

Destacar MUAY THAI em vermelho.

Texto explicativo.

No centro:

lutador em posição de luta.

Criar visual 3D/efeito de profundidade.

No lado direito:

02

MÃOS

02

COTOVELOS

02

JOELHOS

02

PERNAS

Cada item com ícone.

Criar efeitos de glow vermelho.

Botão:

CONHEÇA MAIS ↗

Título:

NOSSA

GALERIA

Criar uma galeria visual semelhante à referência.

Utilizar:

CSS Grid

Fotos da academia.

Exemplo:

- treino

- lutadores

- alunos

- sparring

- ringue

- professor

- competição

As imagens devem possuir:

- contraste alto

- overlay preto

- detalhes vermelhos

- zoom no hover

Ao clicar:

abrir Lightbox.

Utilizar Swiper ou solução equivalente.

Criar uma seção cinematográfica.

Fundo:

lutador/academia.

Muito vermelho e preto.

Texto grande:

TREINE CONOSCO

SEU MELHOR

COMEÇA AQUI!

"COMEÇA AQUI!" em vermelho.

Texto:

Disciplina hoje.

Resultados amanhã.

Botão:

AGENDAR AULA EXPERIMENTAL ↗

Adicionar pequenos benefícios:

✓ AULAS PARA TODOS OS NÍVEIS

✓ TREINOS PERSONALIZADOS

✓ ACOMPANHAMENTO PROFISSIONAL

✓ AMBIENTE RESPEITOSO

O botão:

AGENDAR AULA EXPERIMENTAL

deve abrir WhatsApp.

Utilizar:

[https://wa.me/SEUNUMERO](https://wa.me/SEUNUMERO)

Preparar uma mensagem:

Olá! Quero agendar uma aula experimental de Muay Thai.

Deixar o número facilmente editável no JavaScript.

Criar seção:

NOSSA

LOCALIZAÇÃO

Texto:

Encontre nosso espaço e venha treinar com a gente.

Botão:

VER NO GOOGLE MAPS ↗

Ao lado:

mapa escuro.

O mapa deve possuir aparência integrada ao design.

Utilizar:

Leaflet

ou Google Maps.

Adicionar marcador vermelho.

Mostrar:

MUAY THAI FIGHT TEAM

Endereço.

Footer preto.

Logo no lado esquerdo.

Links:

INÍCIO

SOBRE

MODALIDADES

GALERIA

TREINE CONOSCO

LOCALIZAÇÃO

Redes sociais:

Instagram

Facebook

WhatsApp

Texto pequeno:

© 2026 Muay Thai Fight Team.

Todos os direitos reservados.

O site deve ser extremamente fluido.

Utilizar GSAP.

Adicionar:

fade in

slide up

scale

parallax

blur transition

text reveal

image reveal

stagger

hover animation

No scroll:

elementos entram progressivamente.

Não utilizar animações exageradas.

O resultado deve parecer uma landing page de academia profissional produzida por uma agência premium.

Criar partículas vermelhas discretas.

Também criar:

- fumaça

- poeira

- pequenas faíscas

- glow

- light leaks

Esses efeitos devem ficar atrás do conteúdo.

NÃO prejudicar a leitura.

Desktop:

Criar cursor customizado discreto.

Um pequeno círculo.

Ao passar sobre:

botões

cards

links

o cursor reage.

No mobile:

desativar cursor customizado.

Antes de carregar:

tela preta.

Logo central.

Texto:

MUAY THAI

FIGHT TEAM

Loader vermelho.

Após carregar:

fade out.

Desktop:

1920px

1440px

1280px

Tablet:

1024px

768px

Mobile:

480px

390px

375px

No celular:

- menu hamburger

- textos redimensionados

- cards em coluna

- lutador reposicionado

- animações otimizadas

- não permitir overflow horizontal

O site precisa ser rápido.

Lazy loading nas imagens.

WebP quando possível.

Compressão.

Não carregar modelos 3D pesados sem necessidade.

No celular:

reduzir partículas.

Reduzir qualidade do WebGL.

Respeitar:

prefers-reduced-motion

Adicionar:

title

description

keywords

Open Graph

favicon

Título:

Muay Thai Fight Team | Disciplina, Técnica e Respeito

Description:

Academia de Muay Thai, Kickboxing e Defesa Pessoal. Treine com profissionais e transforme disciplina em resultados.

NÃO quero:

❌ aparência de template Bootstrap

❌ cards brancos

❌ gradientes coloridos demais

❌ visual genérico de IA

❌ excesso de sombras

❌ emojis

❌ elementos gigantes desnecessários

❌ navbar padrão

❌ botões padrão Bootstrap

Quero:

✓ preto profundo

✓ vermelho agressivo

✓ fotografia dramática

✓ tipografia forte

✓ composição cinematográfica

✓ bastante espaço negativo

✓ linhas finas

✓ microinterações

✓ textura

✓ fumaça

✓ partículas

✓ iluminação de academia

✓ sensação premium

✓ sensação de profundidade

✓ experiência 3D

A imagem enviada junto deste prompt é a referência visual principal.

Analise:

- posição dos elementos

- tamanhos

- proporções

- espaçamento

- hierarquia

- composição

- cores

- contraste

- tipografia

- cards

- seções

- imagens

- navegação

Reproduza a estrutura visual da referência o mais fielmente possível.

NÃO copie código de nenhum site existente.

Crie uma implementação própria baseada na referência visual fornecida.

Deixe tudo preparado para receber os assets reais:

/assets/logo/logo.png

/assets/fighters/fighter.glb

/assets/fighters/fighter.webp

/assets/gallery/01.webp

/assets/gallery/02.webp

/assets/gallery/03.webp

/assets/gallery/04.webp

/assets/gallery/05.webp

/assets/gallery/06.webp

Quando eu fornecer essas imagens, elas deverão ser usadas no lugar dos placeholders.

Quero um site que, quando aberto, pareça uma verdadeira landing page premium de uma academia de Muay Thai.

A primeira impressão deve ser:

FORTE

PROFISSIONAL

PREMIUM

AGRESSIVO

MODERNO

CINEMATOGRÁFICO

3D

ESPORTIVO

A referência visual anexada deve ser seguida como guia PRINCIPAL.

NÃO entregue apenas uma estrutura básica.

ENTREGUE O SITE COMPLETO FUNCIONANDO.

Antes de finalizar:

1. Teste todos os links.

2. Teste o menu mobile.

3. Teste o scroll.

4. Teste as animações.

5. Teste o WebGL.

6. Teste o formulário/WhatsApp.

7. Teste responsividade.

8. Verifique se não existe overflow horizontal.

9. Verifique console sem erros.

10. Garanta que o resultado visual esteja próximo da referência.

IMPORTANTE:

Não diga que "não é possível reproduzir exatamente".

Faça a melhor reprodução visual possível usando a imagem como referência.

Priorize o resultado visual sobre explicações.

mas crie do jeito da imagem do mesmo jeito todas as paginas todas as 7 paginas !

## Créditos

Desenvolvido por **Ismaell Chaves**.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
# TOCA-DO-GORILA
