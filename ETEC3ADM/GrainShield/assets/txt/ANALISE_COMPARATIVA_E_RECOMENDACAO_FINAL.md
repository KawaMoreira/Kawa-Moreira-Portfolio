# 📊 ANÁLISE COMPARATIVA: MODELOS DE WEBSITE PARA TCC GRAINSHIELD

## 1. RESUMO EXECUTIVO

Após análise profunda de dois modelos de website propostos para seu TCC (o meu modelo e o do outro assistente), elaborei uma **versão definitiva otimizada** que combina os melhores elementos de ambos, adaptada à sua realidade de arquivos e infraestrutura.

---

## 2. COMPARAÇÃO DOS DOIS MODELOS

### **MODELO 1: Meu Modelo (Claude)**

#### ✅ Pontos Fortes:
- **Estrutura clara em seções temáticas** (3 pilares: Sobre, Problema, Solução)
- **Design visual com diagrama SVG** mostrando a arquitetura completa
- **Foco em navegação intuitiva** entre conteúdos relacionados
- **Ênfase em componentes interativos** (gráficos, animações)
- **Flexibilidade na organização** de conteúdo

#### ❌ Pontos Fracos:
- Não estava 100% alinhado com a estrutura de diretórios GitHub Pages que você já tem
- Menos detalhado sobre a implementação técnica específica (arquivos, CSS)
- Não considerava o vídeo da apresentação como elemento central
- Orientação genérica (não adaptada aos arquivos específicos que você possui)

---

### **MODELO 2: Outro Assistente**

#### ✅ Pontos Fortes:
- **Extremamente detalhado** sobre estrutura de arquivos e pastas
- **Definição clara** de cada página HTML (7 páginas principais)
- **Integração direta** com seu repositório GitHub Pages
- **Recomendações específicas** sobre CSS único, responsividade
- **Documentação bem organizada** da navegação entre páginas
- **Menção explícita** ao vídeo do YouTube (banca.html)
- **Consideração do rodapé** com links para PDFs em TODAS as páginas

#### ❌ Pontos Fracos:
- Texto muito longo (difícil de sintetizar para ação)
- Falta de recomendações de design visual (cores, tipografia, etc.)
- Não trata de otimizações de performance/SEO
- Pouca menção a componentes interativos modernos
- Não menciona assets complementares (favicon, meta tags, estrutura JSON-LD)

---

## 3. ANÁLISE DOS SEUS ARQUIVOS REAIS

Com base no `img.zip` que você forneceu:

### **Estrutura Atual de Imagens**
```
img/
├── projeto/                    (28 arquivos)
│   ├── Gráficos 1-6           (dados do TCC)
│   ├── Tabelas (antes/depois)
│   ├── Logo.png               (1.2 MB - GrainShield)
│   ├── Canvas, Mapa de Empatia
│   ├── Documentos (CNPJ, CLI, Contrato)
│   └── Mapas e dados diversos
│
├── evento-banca/              (3 arquivos)
│   ├── Integrantes.jpeg
│   ├── Projeto_Fisico.mp4    (vídeo físico do projeto)
│   └── Outra foto do evento
│
└── evento-feira/              (5+ arquivos)
    ├── Banner_Horizontal.png  (2 MB)
    ├── Caminhão.jpeg
    ├── Integrantes.jpeg
    ├── Notebook_Apresentacao.jpeg
    └── Slide_Monitor_PC.jpeg
```

### **Assets Essenciais Disponíveis:**
✅ Logo oficial (GrainShield)  
✅ 6 gráficos de dados  
✅ Documentação visual de empresa (Canvas, Mapa de Empatia)  
✅ Fotos de eventos (banca e feira)  
✅ Vídeo do projeto físico (MP4)  
✅ Banner profissional para feira  

---

## 4. ARQUIVOS JÁ DISPONIBILIZADOS

```
https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/
├── TCC_ADM.pdf
├── Slides_TCC.pdf
└── (Será raiz para o novo site)
```

**Youtube:**
- Video da apresentação: https://www.youtube.com/watch?v=JcccTw2qTw0

---

## 5. VERSÃO DEFINITIVA RECOMENDADA

### **Filosofia de Design:**
- ✅ **Minimalista + Profissional** (apropriado para apresentação acadêmica)
- ✅ **Foco em dados visuais** (seus gráficos são excelentes)
- ✅ **Navegação fluida** entre 7 páginas
- ✅ **Mobile-first** (responsivo em tudo)
- ✅ **Performance otimizada** (imagens comprimidas, lazy loading)
- ✅ **Acessibilidade** (WCAG AA minimum)
- ✅ **SEO básico** (meta tags, structured data)

---

## 6. ESTRUTURA DEFINITIVA DO PROJETO

### **Hierarquia de Arquivos**

```
GrainShield/                           (raiz do site)
│
├── index.html                         (HOME - página inicial)
├── sobre.html                         (SOBRE - contexto do projeto)
├── equipe.html                        (EQUIPE - integrantes e ETEC)
├── problema.html                      (PROBLEMA - dados e pesquisa)
├── empresa.html                       (EMPRESA - GrainShield + documentos)
├── banca.html                         (BANCA - apresentação + vídeo YouTube)
├── feira.html                         (FEIRA - evento de ciências)
│
├── assets/                            (PASTA DE ASSETS)
│   ├── css/
│   │   └── style.css                 (CSS ÚNICO - todas as páginas)
│   │
│   ├── js/
│   │   ├── main.js                   (JS principal - navegação, menu mobile)
│   │   ├── charts.js                 (Chart.js - gráficos interativos)
│   │   └── gallery.js                (Lightbox/galeria de fotos)
│   │
│   ├── img/
│   │   ├── projeto/                  (28 arquivos de conteúdo)
│   │   ├── evento-banca/             (3+ fotos e vídeo)
│   │   ├── evento-feira/             (5+ fotos)
│   │   ├── logo.svg                  (Logo em vetor - otimizado)
│   │   ├── favicon.ico               (Ícone do site)
│   │   └── og-image.jpg              (Imagem para redes sociais)
│   │
│   └── fonts/
│       └── (Fontes locais, se necessário)
│
├── TCC_ADM.pdf                        (Documento completo)
├── Slides_TCC.pdf                     (Slides da apresentação)
│
├── sitemap.xml                        (Para SEO)
├── robots.txt                         (Para SEO)
└── .htaccess                          (Redirecionamentos, se necessário)
```

### **TOTAL: 7 Páginas HTML**

| # | Nome | Arquivo | Propósito |
|---|------|---------|----------|
| 1 | **Início** | `index.html` | Landing page com hero section, resumo e CTAs |
| 2 | **Sobre** | `sobre.html` | Contexto do projeto, importância, timeline |
| 3 | **Equipe** | `equipe.html` | Integrantes, ETEC, homenagem a Gustavo |
| 4 | **Problema** | `problema.html` | Gráficos, dados, análise da BR-163 |
| 5 | **Empresa** | `empresa.html` | GrainShield, Canvas, documentos legais |
| 6 | **Banca** | `banca.html` | Vídeo YouTube + fotos da apresentação |
| 7 | **Feira** | `feira.html` | Galeria de fotos do evento de ciências |

### **Arquivos CSS/JS**

| Tipo | Arquivo | Linhas | Propósito |
|------|---------|--------|----------|
| CSS | `assets/css/style.css` | ~800-1000 | Estilos globais, responsividade |
| JS | `assets/js/main.js` | ~200-300 | Menu mobile, navegação, scroll suave |
| JS | `assets/js/charts.js` | ~400-600 | Gráficos com Chart.js (6 gráficos + tabelas) |
| JS | `assets/js/gallery.js` | ~150-250 | Lightbox para fotos (banca e feira) |

---

## 7. DETALHAMENTO DE CADA PÁGINA

### **1️⃣ index.html (HOME)**
- Hero section com Logo + Título impactante
- Números-chave (10M toneladas, 2B reais, 77% redução)
- 3 cards com CTA: "Veja o Problema" | "Conheça a Solução" | "Assista a Apresentação"
- Resumo de 3 parágrafos sobre o projeto
- Slide carousel com imagens-destaque (ou cards animados)
- Footer com links para PDFs

**Imagens Usadas:**
- Logo (GrainShield)
- 1-2 fotos de destaque (evento ou projeto físico)

---

### **2️⃣ sobre.html (SOBRE)**
- Introdução ao projeto: tema, orientadora, instituição
- Timeline visual (2023-2025): marcos importantes
- Contextualização: por que o agronegócio é estratégico?
- 3 cards: "Tema" | "Contexto" | "Resultado"
- Pequena seção sobre a abordagem: quantitativa + qualitativa
- Footer padrão

**Imagens Usadas:**
- Figura 1 ou Figura 2 (contexto do agronegócio)
- Fotos da ETEC (se disponíveis) ou ilustração

---

### **3️⃣ equipe.html (EQUIPE)**
- Cards de cada um dos 5 integrantes:
  - Nome completo
  - Função/papel no projeto
  - Email/LinkedIn (opcional)
  - Avatar/Foto (ou initials circle)
- Seção: "Nossa Instituição"
  - Logo e nome da ETEC
  - Curso: "Ensino Médio com Habilitação Profissional em Administração"
  - Anos: 2023-2025
- **Seção Especial: Dedicatória a Gustavo Fortunato de Pinho**
  - Texto de homenagem (como consta no TCC)
- Agradecimento especial à Prof.ª Caroline Gabriel
- Footer padrão

**Imagens Usadas:**
- evento-banca/Integrantes.jpeg
- evento-feira/Integrantes.jpeg
- Logo da ETEC (se houver)

---

### **4️⃣ problema.html (PROBLEMA)**
- Seção 1: "O Desafio da BR-163"
  - 50 milhões de toneladas/ano
  - 2,5% de perdas = 1,25 milhões de toneladas
  - R$ 3+ bilhões em prejuízo
  - Texto explicativo

- Seção 2: "Gráficos & Análises"
  - 6 gráficos interativos (Chart.js)
  - Descrição de cada um
  - Insights principais

- Seção 3: "Tabelas de Dados"
  - Tabela: Distribuição de Perdas Logísticas
  - Tabela: Antes/Depois (5,92% → 1,34%)

- Seção 4: "Mapa de Palavras"
  - Mapa_de_Palavras.jpeg (visualização da nuvem)
  - Termos-chave destacados

- Seção 5: "Referências"
  - USP 2021, CNA 2020, ORÍGEO 2023, etc.

- Footer padrão

**Imagens Usadas:**
- Projeto_Gráfico1 a Gráfico6.png
- Tabela_Distribuicao_Perdas_Logisticas.png
- Tabela_antes_depois_implementacao_adequada.png
- Mapa_de_Palavras.jpeg
- Dado_2,5%_de_50_milhoes_toneladas.jpeg
- Custo_Logistico_Comparacao.avif

---

### **5️⃣ empresa.html (EMPRESA)**

#### **Bloco A: Apresentação da GrainShield**
- Logo oficial
- Visão e missão
- Data de fundação, CNPJ, localização
- Breve descrição do produto/serviço

#### **Bloco B: Modelo de Negócios**
- **Canvas** (imagem interativa ou grande)
  - Clicável: cada setor abre detalhes
  - Imagem: Modelo_Canvas_Negocios.jpeg
- **Mapa de Empatia** (persona João Almeida Costa)
  - Imagem: Mapa_Empatia.jpeg

#### **Bloco C: Análise Econômica**
- Tabela de custos: R$ 1.100 por lona
- Preço de venda com 30% de margem
- Durabilidade: 2-3 anos
- Simulação de ROI para 10 viagens

#### **Bloco D: Documentação Legal**
- 4 cards com thumbnails clicáveis:
  - CNPJ_Thumbnail.png
  - Contrato_Social_Thumbnail.png
  - CLI_Thumbnail.png
  - Inscricao_Estadual.png
- Ao clicar, abre o documento em pop-up ou nova aba

- Footer padrão

**Imagens Usadas:**
- Logo.png
- Modelo_Canvas_Negocios.jpeg
- Mapa_Empatia.jpeg
- CNPJ_Thumbnail.png
- Contrato_Social_Thumbnail.png
- CLI_Thumbnail.png
- Inscricao_Estadual.png

---

### **6️⃣ banca.html (BANCA)**
- Título: "Apresentação para a Banca Examinadora"
- **Vídeo do YouTube** (embed responsivo, 16:9)
  - URL: `https://www.youtube.com/embed/JcccTw2qTw0`
  - Descrição do evento (data, local, avaliadores)

- **Galeria de Fotos** (3 colunas responsivas)
  - evento-banca/Integrantes.jpeg
  - evento-banca/WhatsApp Image 2026-05-02 at 18.39.06(2).jpeg
  - evento-banca/Projeto_Fisico.mp4 (vídeo do objeto)
  - Lightbox ao clicar

- Seção: "Feedbacks da Banca"
  - Pontos fortes destacados
  - Citações de elogios (se houver)

- Footer padrão

**Imagens Usadas:**
- evento-banca/Integrantes.jpeg
- evento-banca/WhatsApp Image...jpeg
- Projeto_Fisico.mp4

---

### **7️⃣ feira.html (FEIRA)**
- Título: "Feira de Ciências da ETEC"
- Seção: "Apresentação do Projeto"
  - Texto sobre o estande e o público
  - Banner principal: evento-feira/Banner_Horizontal.png

- **Galeria Principal** (4 colunas responsivas)
  - evento-feira/Caminhão.jpeg
  - evento-feira/Integrantes.jpeg
  - evento-feira/Notebook_Apresentacao.jpeg
  - evento-feira/Slide_Monitor_PC.jpeg
  - Lightbox ao clicar

- Seção: "Destaques"
  - Prêmios (se houver)
  - Número de visitantes
  - Feedback do público

- Footer padrão

**Imagens Usadas:**
- evento-feira/Banner_Horizontal.png
- evento-feira/Caminhão.jpeg
- evento-feira/Integrantes.jpeg
- evento-feira/Notebook_Apresentacao.jpeg
- evento-feira/Slide_Monitor_PC.jpeg

---

## 8. COMPONENTES TÉCNICOS ESPECÍFICOS

### **CSS (style.css)**
```
Seções:
├── Reset CSS (normalize)
├── Variáveis de cores (CSS variables)
├── Tipografia (Inter/Roboto)
├── Layout base (grid, flexbox)
├── Componentes (buttons, cards, inputs)
├── Navegação (menu, dropdown mobile)
├── Footer
├── Responsive design (breakpoints: 480px, 768px, 1024px)
├── Animações e transições
└── Print styles (para imprimir as páginas)

Paleta de Cores:
├── Verde agronegócio: #2B6F3D (primário)
├── Amarelo/Ouro: #F2A623 (acentos, CTAs)
├── Azul profissional: #185FA5 (secundário)
├── Cinza claro: #F5F5F5 (fundos)
├── Cinza escuro: #333333 (texto)
└── Branco: #FFFFFF
```

### **JavaScript Modular**

#### **main.js** (Navegação e Interações Gerais)
```javascript
├── Menu mobile (hambúrguer)
├── Scroll suave (smooth scroll)
├── Active link na navegação
├── Dark mode toggle (opcional)
└── Lazy loading de imagens
```

#### **charts.js** (Chart.js - Gráficos Interativos)
```javascript
├── Gráfico 1: Motoristas x Número de viagens
├── Gráfico 2: Motoristas x Perdas de carga
├── Gráfico 3: Perdas por viagem (BR-365)
├── Gráfico 4: Perdas por viagem (rodovias estaduais)
├── Gráfico 5: Análise de perdas por viagem
├── Gráfico 6: Análise comparativa (MG vs federais)
└── Modo responsivo: adapta-se a mobile
```

#### **gallery.js** (Lightbox/Modal de Fotos)
```javascript
├── Click em foto abre modal
├── Navegação prev/next
├── Fechar ao clicar fora
└── Keyboard shortcuts (Esc, setas)
```

### **HTML5 Semântico**
```html
├── <header> com navegação
├── <nav> com links para as 7 páginas
├── <main> com o conteúdo principal
├── <section> para cada seção lógica
├── <article> para posts/conteúdos
├── <aside> para sidebars (se houver)
├── <footer> com créditos e links
└── Atributos ARIA para acessibilidade
```

---

## 9. RECURSOS COMPLEMENTARES

### **SEO & Meta Tags**
- Title, meta description, keywords (por página)
- Open Graph (redes sociais)
- Twitter Card
- JSON-LD (structured data)
- Sitemap.xml
- Robots.txt

### **Performance**
- Imagens otimizadas (AVIF + WebP como fallback)
- Lazy loading de imagens
- Minificação de CSS/JS (build opcional)
- Caching headers
- Gzip compression

### **Acessibilidade**
- Alt text em todas as imagens
- Labels em formulários
- Contraste de cores (WCAG AA)
- Keyboard navigation
- Screen reader friendly

---

## 10. DIFERENÇAS CHAVE DESTA PROPOSTA

### **Em relação ao Modelo 1 (Claude):**
✅ Mais específico na estrutura de arquivos  
✅ Definição exata de cada página  
✅ Recomendações de CSS e JS incluídas  
✅ Integração direta com seu GitHub Pages  
✅ Melhor aproveitamento dos assets reais que você tem  

### **Em relação ao Modelo 2 (Outro Assistente):**
✅ Inclui recomendações de design visual (cores, tipografia)  
✅ Detalhes sobre componentes interativos (Chart.js, Lightbox)  
✅ Guia de performance e SEO  
✅ Estrutura de assets mais clara  
✅ Menos textual, mais prático e acionável  

---

## 11. CRONOGRAMA ESTIMADO DE DESENVOLVIMENTO

| Fase | Tarefa | Tempo |
|------|--------|-------|
| 1 | Estrutura HTML (7 páginas) | 2-3 horas |
| 2 | CSS (style.css + responsividade) | 3-4 horas |
| 3 | JavaScript (main.js + charts.js + gallery.js) | 4-5 horas |
| 4 | Otimização de imagens | 1-2 horas |
| 5 | Testes (browsers, mobile, acessibilidade) | 2-3 horas |
| 6 | Deploy no GitHub Pages | 30 min |
| **TOTAL** | | **13-17.5 horas** |

---

## 12. PRÓXIMOS PASSOS

### **Você deve:**
1. ✅ Revisar esta proposta final
2. ✅ Confirmar se quer exatamente 7 páginas (ou menos)
3. ✅ Fornecer feedback sobre cores/design
4. ✅ Confirmar os textos finais para cada página

### **Eu começarei a:**
1. Codificar os 7 arquivos HTML
2. Criar style.css com design system completo
3. Implementar Chart.js para gráficos
4. Criar gallery.js para lightbox
5. Otimizar imagens
6. Preparar para deploy

---

## 13. RESUMO FINAL

| Aspecto | Quantidade |
|--------|-----------|
| **Páginas HTML** | 7 |
| **Arquivos CSS** | 1 |
| **Arquivos JS** | 3 |
| **Imagens principais** | 28 (projeto) + 8 (evento) |
| **Gráficos interativos** | 6 + 2 tabelas |
| **PDFs vinculados** | 2 |
| **Vídeos embarcados** | 1 (YouTube) |
| **Tempo de desenvolvimento** | ~15 horas |
| **Acessibilidade** | WCAG AA |
| **Responsividade** | Mobile-first |

---

**ESTA É A VERSÃO DEFINITIVA RECOMENDADA.**

Ele combina:
- ✅ Estrutura profissional do Modelo 2
- ✅ Design visual do Modelo 1
- ✅ Praticidade e clareza
- ✅ Adaptação aos seus arquivos reais
- ✅ Viabilidade técnica

**Pronto para começar a codificar?**
