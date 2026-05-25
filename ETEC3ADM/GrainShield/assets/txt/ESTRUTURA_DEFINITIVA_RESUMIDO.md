# 🎯 ESTRUTURA DEFINITIVA - WEBSITE GRAINSHIELD

## RESUMO EXECUTIVO

**Versão Final Recomendada** combinando os melhores elementos dos dois modelos propostos, adaptada aos seus arquivos reais.

---

## 📋 CHECKLIST RÁPIDO

| Item | Quantidade | Status |
|------|-----------|--------|
| Páginas HTML | 7 | ✅ |
| Arquivos CSS | 1 | ✅ |
| Arquivos JavaScript | 3 | ✅ |
| Arquivos de imagem | 36 (28+8) | ✅ Disponíveis |
| PDFs linkados | 2 | ✅ TCC_ADM.pdf + Slides_TCC.pdf |
| Vídeos embarcados | 1 | ✅ YouTube (JcccTw2qTw0) |
| Tempo de desenvolvimento | ~15h | 📊 |

---

## 🗂️ ESTRUTURA COMPLETA DE ARQUIVOS

```
GrainShield/
│
├── 📄 index.html              (HOME - Landing Page)
├── 📄 sobre.html              (SOBRE - Contexto do Projeto)
├── 📄 equipe.html             (EQUIPE - Integrantes da ETEC)
├── 📄 problema.html           (PROBLEMA - Dados e Gráficos)
├── 📄 empresa.html            (EMPRESA - GrainShield + Documentos)
├── 📄 banca.html              (BANCA - Vídeo YouTube + Fotos)
├── 📄 feira.html              (FEIRA - Evento de Ciências)
│
├── 📊 TCC_ADM.pdf             (Link do documento)
├── 🎬 Slides_TCC.pdf          (Link dos slides)
│
├── 🔧 assets/
│   │
│   ├── 🎨 css/
│   │   └── style.css          (~800-1000 linhas)
│   │                           Reset, Variáveis, Tipografia
│   │                           Layout, Componentes, Responsividade
│   │
│   ├── ⚙️ js/
│   │   ├── main.js            (~250-300 linhas)
│   │   │                       Menu mobile, Scroll suave, Dark mode
│   │   │
│   │   ├── charts.js          (~400-600 linhas)
│   │   │                       Chart.js - 6 gráficos + 2 tabelas
│   │   │
│   │   └── gallery.js         (~150-250 linhas)
│   │                           Lightbox/Modal para fotos
│   │
│   └── 🖼️ img/
│       ├── projeto/           (28 arquivos de conteúdo)
│       │   ├── Grafico1-6.png
│       │   ├── Tabela_*.png
│       │   ├── Mapa_*.jpeg
│       │   ├── Canvas.jpeg
│       │   ├── Logo.png
│       │   ├── CNPJ_Thumbnail.png
│       │   ├── Contrato_Social_Thumbnail.png
│       │   ├── CLI_Thumbnail.png
│       │   └── Inscricao_Estadual.png
│       │
│       ├── evento-banca/     (3 arquivos)
│       │   ├── Integrantes.jpeg
│       │   ├── WhatsApp_Image_*.jpeg
│       │   └── Projeto_Fisico.mp4
│       │
│       └── evento-feira/     (5+ arquivos)
│           ├── Banner_Horizontal.png
│           ├── Caminhão.jpeg
│           ├── Integrantes.jpeg
│           ├── Notebook_Apresentacao.jpeg
│           └── Slide_Monitor_PC.jpeg
│
├── 📋 sitemap.xml            (Para SEO)
├── 🤖 robots.txt             (Para SEO)
└── 📝 .gitignore             (GitHub)
```

---

## 📄 DESCRIÇÃO DE CADA PÁGINA HTML

### **1. index.html** (HOME)
```
Conteúdo:
├── Header com logo + navegação (sticky)
├── Hero section com título impactante
├── 3 números principais (10M toneladas, 2B reais, 77%)
├── 3 cards com CTAs
│   ├── "Veja o Problema"
│   ├── "Conheça a Solução"
│   └── "Assista a Apresentação"
├── Resumo de 3 parágrafos
├── Slide carousel (imagens destacadas)
└── Footer com links PDFs

Imagens:
- Logo (GrainShield)
- 1-2 fotos de destaque
```

---

### **2. sobre.html** (SOBRE)
```
Conteúdo:
├── Introdução ao projeto (TCC tema, orientadora, ETEC)
├── Timeline visual 2023-2025
├── Contextualização do agronegócio
├── 3 cards: "Tema" | "Contexto" | "Resultado"
├── Explicação da abordagem (quantitativa + qualitativa)
└── Footer

Imagens:
- Figura 1 ou Figura 2 (agronegócio/PIB)
```

---

### **3. equipe.html** (EQUIPE)
```
Conteúdo:
├── Cards dos 5 integrantes
│   ├── Kawã Fernandes da Silva Moreira
│   ├── Kaynã Marques da Silva
│   ├── Nathan Santiago dos Santos
│   ├── Pedro Henrique Almeida Dias
│   └── Samuel Bryan Neres dos Santos
├── Seção ETEC (nome, curso, anos 2023-2025)
├── HOMENAGEM ESPECIAL
│   └── "Dedicado a Gustavo Fortunato de Pinho"
├── Agradecimento à Prof.ª Caroline Gabriel
└── Footer

Imagens:
- evento-banca/Integrantes.jpeg
- evento-feira/Integrantes.jpeg
```

---

### **4. problema.html** (PROBLEMA)
```
Conteúdo:
├── Seção 1: "O Desafio da BR-163"
│   ├── 50 milhões toneladas/ano
│   ├── 2,5% de perdas
│   └── R$ 3+ bilhões prejuízo
├── Seção 2: "Gráficos & Análises"
│   └── 6 gráficos interativos (Chart.js)
├── Seção 3: "Tabelas de Dados"
│   ├── Distribuição de Perdas Logísticas
│   └── Antes/Depois (5,92% → 1,34%)
├── Seção 4: "Mapa de Palavras"
├── Seção 5: "Referências"
└── Footer

Imagens:
- Grafico1-6.png (6 gráficos)
- Tabela_Distribuicao_Perdas_Logisticas.png
- Tabela_antes_depois_implementacao_adequada.png
- Mapa_de_Palavras.jpeg
- Dado_2,5%_de_50_milhoes_toneladas.jpeg
- Custo_Logistico_Comparacao.avif
```

---

### **5. empresa.html** (EMPRESA)
```
Conteúdo:
├── BLOCO A: Apresentação GrainShield
│   ├── Logo oficial
│   ├── Visão e missão
│   ├── CNPJ, fundação, localização
│   └── Breve descrição
├── BLOCO B: Modelo de Negócios
│   ├── Canvas (imagem)
│   ├── Mapa de Empatia
│   ├── Custos: R$ 1.100/lona
│   └── Simulação ROI
├── BLOCO C: Documentação Legal
│   ├── CNPJ_Thumbnail.png (clicável)
│   ├── Contrato_Social_Thumbnail.png
│   ├── CLI_Thumbnail.png
│   └── Inscricao_Estadual.png
└── Footer

Imagens:
- Logo.png
- Modelo_Canvas_Negocios.jpeg
- Mapa_Empatia.jpeg
- 4 Thumbnails de documentos
```

---

### **6. banca.html** (BANCA)
```
Conteúdo:
├── Título: "Apresentação para a Banca Examinadora"
├── Vídeo YouTube (embed responsivo)
│   └── https://www.youtube.com/embed/JcccTw2qTw0
├── Galeria de Fotos (3 colunas + Lightbox)
│   ├── evento-banca/Integrantes.jpeg
│   ├── evento-banca/WhatsApp_Image_*.jpeg
│   └── evento-banca/Projeto_Fisico.mp4
├── Seção: "Feedbacks da Banca"
└── Footer

Imagens:
- evento-banca/Integrantes.jpeg
- evento-banca/WhatsApp_Image_*.jpeg
- evento-banca/Projeto_Fisico.mp4
```

---

### **7. feira.html** (FEIRA)
```
Conteúdo:
├── Título: "Feira de Ciências da ETEC"
├── Banner principal
│   └── evento-feira/Banner_Horizontal.png
├── Galeria de Fotos (4 colunas + Lightbox)
│   ├── evento-feira/Caminhão.jpeg
│   ├── evento-feira/Integrantes.jpeg
│   ├── evento-feira/Notebook_Apresentacao.jpeg
│   └── evento-feira/Slide_Monitor_PC.jpeg
├── Seção: "Destaques"
│   ├── Prêmios
│   └── Feedback público
└── Footer

Imagens:
- evento-feira/Banner_Horizontal.png
- evento-feira/Caminhão.jpeg
- evento-feira/Integrantes.jpeg
- evento-feira/Notebook_Apresentacao.jpeg
- evento-feira/Slide_Monitor_PC.jpeg
```

---

## 🎨 DESIGN VISUAL

### **Paleta de Cores (CSS Variables)**
```css
--cor-primaria: #2B6F3D          (Verde agronegócio)
--cor-secundaria: #185FA5        (Azul profissional)
--cor-destaque: #F2A623          (Ouro/amarelo)
--cor-fundo-claro: #F5F5F5
--cor-fundo-escuro: #333333
--cor-branco: #FFFFFF
```

### **Tipografia**
```css
Font Stack: Inter, Roboto, sans-serif
Headings: 500 weight (h1: 28px, h2: 22px, h3: 18px)
Body: 400 weight (16px, line-height 1.7)
Monospace: Source Code Pro (para dados)
```

### **Layout**
```css
Max-width: 1200px (container centralizado)
Breakpoints:
├── Mobile: < 480px
├── Tablet: 480px - 768px
├── Desktop: 768px - 1024px
└── Large: > 1024px

Grid/Flexbox para galeriais (3-4 colunas responsivas)
```

---

## ⚙️ FUNCIONALIDADES JAVASCRIPT

### **main.js**
- ✅ Menu mobile (hambúrguer)
- ✅ Scroll suave entre seções
- ✅ Active link na navegação (destaca página atual)
- ✅ Dark mode toggle (opcional)
- ✅ Lazy loading de imagens
- ✅ Smooth animations on scroll

### **charts.js**
- ✅ Chart.js integrado (CDN)
- ✅ 6 Gráficos interativos
  - Gráfico 1: Motoristas x Viagens
  - Gráfico 2: Motoristas x Perdas
  - Gráfico 3: Perdas por viagem (BR-365)
  - Gráfico 4: Perdas por viagem (rodovias estaduais)
  - Gráfico 5: Análise de perdas
  - Gráfico 6: Comparativo (MG vs federais)
- ✅ 2 Tabelas de dados
- ✅ Responsividade móvel
- ✅ Hover effects

### **gallery.js**
- ✅ Lightbox modal para fotos
- ✅ Navegação prev/next
- ✅ Fechar ao clicar fora
- ✅ Keyboard shortcuts (Esc, setas)
- ✅ Fade in/out effects

---

## 🔍 SEO & PERFORMANCE

### **Meta Tags (em cada página)**
```html
<meta name="title" content="...">
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="Kawã Fernandes et al.">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta name="twitter:card" content="summary_large_image">
```

### **Performance**
- ✅ Imagens otimizadas (AVIF + WebP + JPG fallback)
- ✅ Lazy loading (loading="lazy")
- ✅ Minificação CSS/JS (opcional)
- ✅ Gzip compression
- ✅ Cache headers
- ✅ Tamanho de imagem reduzido (max 200-300 KB cada)

### **Acessibilidade**
- ✅ Alt text em todas imagens
- ✅ Labels em formulários
- ✅ Contraste WCAG AA
- ✅ Keyboard navigation (Tab, Enter, Esc)
- ✅ ARIA labels
- ✅ Semantic HTML5

---

## 📊 MÉTRICAS FINAIS

| Métrica | Valor |
|---------|-------|
| Páginas HTML | 7 |
| Arquivos CSS | 1 (~850 linhas) |
| Arquivos JS | 3 (~850 linhas total) |
| Imagens | 36 (otimizadas) |
| Tamanho total site | ~4.5 MB |
| Lighthouse Score | 85-90+ |
| Mobile Speed | 2-3 segundos |
| Desktop Speed | 1-2 segundos |
| Acessibilidade | WCAG AA |

---

## ✅ PRÓXIMOS PASSOS PARA VOCÊ

1. **Revisar** esta proposta final
2. **Confirmar** estrutura e conteúdo das 7 páginas
3. **Fornecer feedback** sobre cores/design
4. **Organizar** textos finais para cada seção
5. **Preparar** para que eu comece a codificar

---

## 🚀 QUANDO COMEÇAR A CODIFICAÇÃO

Após sua aprovação, vou criar:

### **Fase 1: Estrutura HTML (2-3 horas)**
- 7 arquivos HTML completos
- HTML5 semântico
- Meta tags
- Placeholders para imagens

### **Fase 2: CSS Global (3-4 horas)**
- style.css único (~850 linhas)
- Design system completo
- Responsividade (mobile-first)
- Animações suaves
- Dark mode support

### **Fase 3: JavaScript Interativo (4-5 horas)**
- main.js (navegação, menu mobile)
- charts.js (Chart.js + 6 gráficos)
- gallery.js (Lightbox responsivo)

### **Fase 4: Otimização & Deploy (1-2 horas)**
- Otimizar imagens
- Testes em browsers/mobile
- Deploy no GitHub Pages
- Verificar links

---

## 📦 ARQUIVOS A RECEBER

Quando terminar, você terá:

```
GrainShield/
├── 7 arquivos .html (prontos para usar)
├── style.css (completo e funcional)
├── 3 arquivos .js (main.js, charts.js, gallery.js)
├── img/ (pasta com suas imagens organizadas)
├── sitemap.xml e robots.txt
└── README.md com instruções de customização
```

---

## 🎯 CONCLUSÃO

Esta é a **versão definitiva mais profissional, prática e viável** para seu projeto.

Combina:
- ✅ Estrutura clara e escalável
- ✅ Tecnologia moderna (HTML5, CSS3, vanilla JS)
- ✅ Adaptação aos seus arquivos reais
- ✅ Performance otimizada
- ✅ Acessibilidade garantida
- ✅ SEO-friendly
- ✅ Responsivo em todos dispositivos

**Tempo total: ~15 horas de desenvolvimento**

---

**Está pronto para começar? Aprove esta estrutura e digo sim para codificar! 🚀**
