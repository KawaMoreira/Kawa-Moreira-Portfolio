# 🌾 GrainShield - Código Atualizado (Etapas 1 e 2)

> **Instruções de Uso:**
> Copie cada seção de código abaixo e cole no **Notepad++** ou editor de sua preferência.
> Salve os arquivos com as extensões indicadas na pasta correspondente.

---

## 📑 ÍNDICE
1. [sobre.html (NOVO - Fusão)](#sobrehtml-novo---fusão-de-sobre--equipe)
2. [eventos.html (NOVO - Fusão)](#eventoshtml-novo---fusão-de-banca--feira)
3. [index.html (ATUALIZADO)](#indexhtml-atualizado)
4. [problema.html (ATUALIZADO)](#problemahtml-atualizado)
5. [empresa.html (ATUALIZADO)](#empresahtml-atualizado)
6. [style.css (COMPLEMENTOS)](#stylecss-complementos)

---

## sobre.html (NOVO - Fusão de sobre + equipe)

**Salvar como:** `sobre.html` (substitui o arquivo antigo)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sobre o Projeto GrainShield e Equipe - Contexto, instituição e criadores">
  <title>Sobre | GrainShield - Soluções para Transporte de Grãos</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%232B6F3D'>G</text></svg>">
</head>
<body>
  <!-- HEADER & NAVEGAÇÃO -->
  <header>
    <div class="container">
      <nav>
        <a href="index.html" class="logo">
          <img src="assets/img/projeto/Logo.png" alt="GrainShield - Soluções em Proteção de Grãos" class="logo-img">
        </a>
        <button class="menu-toggle" id="menuToggle">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">Início</a></li>
          <li><a href="sobre.html" class="active">Sobre</a></li>
          <li><a href="problema.html">Problema</a></li>
          <li><a href="empresa.html">Empresa</a></li>
          <li><a href="eventos.html">Eventos</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text slide-up">
            <h1>Sobre o Projeto e Equipe</h1>
            <p>Um trabalho de conclusão de curso focado em soluções inovadoras para o agronegócio brasileiro, desenvolvido por 5 estudantes dedicados da ETEC de Carapicuíba.</p>
          </div>
          <div class="hero-image fade-in">
            <img src="assets/img/etec/Logo_ETEC_FATEC_Instituicao.jpg" alt="Logo ETEC e FATEC" loading="lazy" style="width: 100%; max-width: 350px; height: auto; border-radius: 12px;">
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXTO DO PROJETO -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Contexto do Projeto</h2>
          <p>Fundamentos da pesquisa e motivação</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
          <div class="fade-in">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">O Desafio Identificado</h3>
            <p>Este projeto nasceu da análise profunda de um dos principais desafios do agronegócio brasileiro: o desperdício de grãos durante o transporte rodoviário. O Brasil, sendo um dos maiores produtores e exportadores de soja e milho do mundo, perde milhões de toneladas anualmente nas estradas.</p>
            
            <p style="margin-top: 1.5rem;">A pesquisa concentra-se na BR-163, conhecida como "Rota da Soja", responsável pelo escoamento de aproximadamente 50 milhões de toneladas de grãos por safra, destacando a importância estratégica dessa via para o país.</p>

            <h3 style="color: #2B6F3D; margin-top: 2rem; margin-bottom: 1rem;">Objetivo Principal</h3>
            <p style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(43, 111, 61, 0.05) 100%); padding: 1.5rem; border-radius: 10px; border-left: 4px solid #2B6F3D;">Analisar as perdas de soja e milho durante o transporte rodoviário na BR-163 (2020-2023) e propor uma solução viável e economicamente sustentável para reduzir essas perdas.</p>
          </div>

          <div class="slide-up">
            <img src="assets/img/etec/Logo_ETEC.jpg" alt="Logo ETEC" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(24, 95, 165, 0.05) 100%); padding: 2rem; border-radius: 12px;">
              <h4 style="color: #2B6F3D; margin-bottom: 1rem;">Instituição Responsável</h4>
              <p style="margin: 0.5rem 0;"><strong>ETEC de Carapicuíba</strong></p>
              <p style="margin: 0.5rem 0; color: var(--txt-secundario); font-size: 0.95rem;">Centro Paula Souza</p>
              
              <p style="margin: 1rem 0 0.5rem 0; margin-top: 1.5rem;"><strong>Curso:</strong></p>
              <p style="margin: 0.5rem 0; color: var(--txt-secundario); font-size: 0.95rem;">Ensino Médio com Habilitação Profissional em Administração</p>

              <p style="margin: 1rem 0 0.5rem 0; margin-top: 1.5rem;"><strong>Período:</strong> 2023-2025</p>
              <p style="margin: 0.5rem 0; color: var(--txt-secundario); font-size: 0.95rem;">Orientadora: <strong>Prof.ª Caroline dos Santos Gabriel</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPORTÂNCIA ESTRATÉGICA -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Importância Estratégica</h2>
          <p>Por que este projeto é relevante para o Brasil?</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <div class="card slide-up">
            <div class="card-icon">📈</div>
            <h3>Impacto Econômico</h3>
            <p>O desperdício representa mais de R$ 3 bilhões em prejuízos anuais, afetando produtores, transportadoras e a competitividade nacional no mercado global.</p>
          </div>

          <div class="card slide-up">
            <div class="card-icon">🌱</div>
            <h3>Sustentabilidade</h3>
            <p>Reduzir perdas significa não apenas ganho econômico, mas contribuição para a segurança alimentar global e práticas mais sustentáveis no agronegócio.</p>
          </div>

          <div class="card slide-up">
            <div class="card-icon">🚚</div>
            <h3>Logística e Eficiência</h3>
            <p>A eficiência no transporte de grãos é fundamental para a cadeia de suprimento agrícola, impactando desde produtores até consumidores finais.</p>
          </div>

          <div class="card slide-up">
            <div class="card-icon">💡</div>
            <h3>Inovação Aplicada</h3>
            <p>Soluções práticas e inovadoras como GrainShield demonstram como pesquisa acadêmica pode gerar impacto real no setor produtivo.</p>
          </div>

          <div class="card slide-up">
            <div class="card-icon">🌍</div>
            <h3>Competitividade Global</h3>
            <p>Melhorar a eficiência logística aumenta a competitividade brasileira no mercado internacional de commodities agrícolas.</p>
          </div>

          <div class="card slide-up">
            <div class="card-icon">📊</div>
            <h3>Base em Dados</h3>
            <p>Análise baseada em dados secundários de qualidade, oferecendo insights fundamentados para a tomada de decisão no setor.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- METODOLOGIA -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Metodologia de Pesquisa</h2>
          <p>Abordagens utilizadas para desenvolvimento do projeto</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
          <div class="slide-up">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">Abordagem Quantitativa</h3>
            <p style="margin-bottom: 1rem;">Utilização de dados mensuráveis e análise estatística para fundamentar as conclusões:</p>
            <ul style="margin-left: 1.5rem; color: var(--txt-secundario); line-height: 1.8;">
              <li>✓ Análise de dados secundários de pesquisas no Mato Grosso</li>
              <li>✓ Processamento de informações estatísticas sobre perdas</li>
              <li>✓ Gráficos e tabelas comparativas de cenários</li>
              <li>✓ Cálculos de impacto econômico e ROI de soluções</li>
            </ul>
          </div>

          <div class="slide-up">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">Abordagem Qualitativa</h3>
            <p style="margin-bottom: 1rem;">Análise interpretativa e contextual dos dados e cenários:</p>
            <ul style="margin-left: 1.5rem; color: var(--txt-secundario); line-height: 1.8;">
              <li>✓ Análise documental de relatórios e pesquisas acadêmicas</li>
              <li>✓ Estudo de caso baseado em dados reais da BR-163</li>
              <li>✓ Nuvem de palavras para destacar temas principais</li>
              <li>✓ Mapeamento de empatia para entender stakeholders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Timeline do Projeto</h2>
          <p>Cronograma de desenvolvimento de 2023 a 2025</p>
        </div>

        <div style="max-width: 900px; margin: 0 auto;">
          <div style="border-left: 3px solid #2B6F3D; padding-left: 2rem; position: relative;">
            
            <div style="margin-bottom: 3rem; position: relative;">
              <div style="position: absolute; left: -26px; top: 0; width: 20px; height: 20px; background: #2B6F3D; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 3px #2B6F3D;"></div>
              <h4 style="color: #2B6F3D; margin-bottom: 0.5rem;">2023 - Início do Curso</h4>
              <p style="color: var(--txt-secundario); margin: 0;">Inscrição na ETEC de Carapicuíba, seleção do tema de TCC e início do desenvolvimento acadêmico da pesquisa sobre agronegócio.</p>
            </div>

            <div style="margin-bottom: 3rem; position: relative;">
              <div style="position: absolute; left: -26px; top: 0; width: 20px; height: 20px; background: #2B6F3D; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 3px #2B6F3D;"></div>
              <h4 style="color: #2B6F3D; margin-bottom: 0.5rem;">2024 - Pesquisa Intensiva</h4>
              <p style="color: var(--txt-secundario); margin: 0;">Coleta de dados sobre perdas na BR-163, análise documental aprofundada, criação de gráficos comparativos e desenvolvimento de soluções preliminares. Apresentações intermediárias em sala de aula.</p>
            </div>

            <div style="position: relative;">
              <div style="position: absolute; left: -26px; top: 0; width: 20px; height: 20px; background: #2B6F3D; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 3px #2B6F3D;"></div>
              <h4 style="color: #2B6F3D; margin-bottom: 0.5rem;">2025 - Conclusão e Apresentações</h4>
              <p style="color: var(--txt-secundario); margin: 0;">Desenvolvimento completo de GrainShield, documentação legal da empresa, apresentação para banca examinadora, participação na Feira de Ciências e criação do website do projeto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AUTORES DO PROJETO -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Autores do Projeto</h2>
          <p>Estudantes da ETEC que desenvolveram o TCC GrainShield</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem;">
          <div class="card slide-up" style="text-align: center;">
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #2B6F3D, #185FA5); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 36px;">KF</div>
            <h3>Kawã Fernandes da Silva Moreira</h3>
            <p style="color: var(--txt-secundario); font-size: 0.9rem;">Pesquisa, análise de dados e desenvolvimento técnico</p>
          </div>

          <div class="card slide-up" style="text-align: center;">
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #F2A623, #2B6F3D); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 36px;">KM</div>
            <h3>Kaynã Marques da Silva</h3>
            <p style="color: var(--txt-secundario); font-size: 0.9rem;">Documentação, apresentação e coordenação</p>
          </div>

          <div class="card slide-up" style="text-align: center;">
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #185FA5, #F2A623); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 36px;">NS</div>
            <h3>Nathan Santiago dos Santos</h3>
            <p style="color: var(--txt-secundario); font-size: 0.9rem;">Análise, revisão e qualidade</p>
          </div>

          <div class="card slide-up" style="text-align: center;">
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #27AE60, #2B6F3D); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 36px;">PA</div>
            <h3>Pedro Henrique Almeida Dias</h3>
            <p style="color: var(--txt-secundario); font-size: 0.9rem;">Modelagem empresarial e negócios</p>
          </div>

          <div class="card slide-up" style="text-align: center;">
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #E74C3C, #185FA5); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 36px;">SB</div>
            <h3>Samuel Bryan Neres dos Santos</h3>
            <p style="color: var(--txt-secundario); font-size: 0.9rem;">Pesquisa, coleta de dados e análise</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ORIENTADORA -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Orientadora e Apoio</h2>
          <p>Profissional que guiou o desenvolvimento do projeto</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <div class="card slide-up" style="text-align: center;">
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #8B5A2B, #2B6F3D); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 36px;">CG</div>
            <h3>Prof.ª Caroline dos Santos Gabriel</h3>
            <p style="color: var(--txt-secundario); font-weight: 600; margin: 0.5rem 0;">Orientadora do TCC</p>
            <p style="color: var(--txt-secundario); font-size: 0.9rem;">Orientou todo o desenvolvimento do projeto GrainShield, desde a concepção até a finalização, fornecendo suporte e direcionamento acadêmico essencial.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- RESULTADOS ESPERADOS -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Resultados Esperados</h2>
          <p>O que este projeto pretende alcançar</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem;">
          <div style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(43, 111, 61, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #2B6F3D;">
            <h4 style="color: #2B6F3D; text-align: center; margin-bottom: 1rem;">Acadêmico</h4>
            <p style="text-align: center; color: var(--txt-secundario);">Conclusão bem-sucedida do TCC com análise rigorosa e apresentação de resultados à banca examinadora.</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(24, 95, 165, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #185FA5;">
            <h4 style="color: #185FA5; text-align: center; margin-bottom: 1rem;">Prático</h4>
            <p style="text-align: center; color: var(--txt-secundario);">Desenvolvimento de uma empresa viável (GrainShield) com documentação legal e modelo de negócios funcional.</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #27AE60;">
            <h4 style="color: #27AE60; text-align: center; margin-bottom: 1rem;">Social</h4>
            <p style="text-align: center; color: var(--txt-secundario);">Impacto positivo no agronegócio brasileiro através de uma solução que reduz perdas e aumenta eficiência.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section>
      <div class="container">
        <div style="text-align: center; padding: 3rem; background: linear-gradient(135deg, #2B6F3D 0%, #1a4028 100%); border-radius: 12px; color: white;">
          <h2 style="color: white; margin-bottom: 1rem;">Continue Explorando</h2>
          <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin-bottom: 2rem;">Aprofunde seu conhecimento sobre o projeto GrainShield</p>
          
          <div class="btn-group" style="justify-content: center;">
            <a href="problema.html" class="btn btn-primary btn-lg">Ver Análise de Dados</a>
            <a href="empresa.html" class="btn" style="background: white; color: #2B6F3D; font-weight: 600; padding: 1rem 2rem; border-radius: 8px; display: inline-block;">Conhecer a Solução</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>GrainShield</h4>
          <p>Soluções inovadoras para reduzir perdas no transporte de grãos e fortalecer o agronegócio brasileiro.</p>
        </div>

        <div class="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="sobre.html">Sobre o Projeto</a></li>
            <li><a href="problema.html">Dados e Análises</a></li>
            <li><a href="empresa.html">Solução GrainShield</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Documentos</h4>
          <ul>
            <li><a href="https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/TCC_ADM.pdf" target="_blank">TCC Completo</a></li>
            <li><a href="https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/Slides_TCC.pdf" target="_blank">Slides da Apresentação</a></li>
            <li><a href="sobre.html">Conheça a Equipe</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contato</h4>
          <p>ETEC de Carapicuíba<br>Curso: Técnico em Administração<br>Ano: 2025</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="footer-bottom">
        <div class="footer-bottom-text">
          <p>Copyright 2025 GrainShield Brasil. Projeto de TCC - ETEC Carapicuíba. Desenvolvido por Kawã, Kaynã, Nathan, Pedro e Samuel.</p>
        </div>
        <div class="footer-socials">
          <a href="https://github.com" class="social-link" title="GitHub">
            <img src="assets/img/icones/github.png" alt="GitHub" class="social-icon">
          </a>
          <a href="https://linkedin.com" class="social-link" title="LinkedIn">
            <img src="assets/img/icones/linkedin.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="mailto:contact@grainshield.com" class="social-link" title="Email">
            <img src="assets/img/icones/email.png" alt="Email" class="social-icon">
          </a>
        </div>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/gallery.js"></script>
</body>
</html>
```

---

## eventos.html (NOVO - Fusão de banca + feira)

**Salvar como:** `eventos.html` (arquivo novo)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Eventos do Projeto GrainShield - Apresentação na Banca e Feira de Ciências">
  <title>Eventos | GrainShield - Apresentações e Demonstrações</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%232B6F3D'>G</text></svg>">
</head>
<body>
  <!-- HEADER & NAVEGAÇÃO -->
  <header>
    <div class="container">
      <nav>
        <a href="index.html" class="logo">
          <img src="assets/img/projeto/Logo.png" alt="GrainShield - Soluções em Proteção de Grãos" class="logo-img">
        </a>
        <button class="menu-toggle" id="menuToggle">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">Início</a></li>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="problema.html">Problema</a></li>
          <li><a href="empresa.html">Empresa</a></li>
          <li><a href="eventos.html" class="active">Eventos</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text slide-up">
            <h1>Eventos e Apresentações</h1>
            <p>Conheça as apresentações do projeto GrainShield na Banca Examinadora e na Feira de Ciências da ETEC de Carapicuíba.</p>
          </div>
          <div class="hero-image fade-in">
            <img src="assets/img/evento-feira/Banner_Horizontal.png" alt="Banner Eventos GrainShield" loading="lazy" style="width: 100%; max-width: 400px; height: auto; border-radius: 12px;">
          </div>
        </div>
      </div>
    </section>

    <!-- APRESENTAÇÃO BANCA EXAMINADORA -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Apresentação para a Banca Examinadora</h2>
          <p>Vídeo completo da apresentação do Trabalho de Conclusão de Curso</p>
        </div>

        <div style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(24, 95, 165, 0.05) 100%); padding: 2rem; border-radius: 12px; margin-bottom: 3rem;">
          <h3 style="color: #2B6F3D; margin-bottom: 1rem;">📅 Evento de Apresentação Acadêmica</h3>
          <p><strong>Data:</strong> 2025</p>
          <p><strong>Local:</strong> ETEC de Carapicuíba</p>
          <p style="margin-bottom: 0;"><strong>Apresentadores:</strong> Kawã Fernandes, Kaynã Marques, Nathan Santiago, Pedro Almeida e Samuel Bryan</p>
        </div>

        <div style="margin-bottom: 3rem;">
          <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <iframe 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 12px;"
              src="https://www.youtube.com/embed/JcccTw2qTw0" 
              title="Apresentação GrainShield - Banca Examinadora"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
          <p style="text-align: center; margin-top: 1rem; color: var(--txt-secundario); font-size: 0.95rem;">Apresentação completa do projeto GrainShield para a banca examinadora da ETEC de Carapicuíba</p>
        </div>

        <div class="section-header" style="margin-top: 3rem;">
          <h3>Galeria de Fotos - Apresentação na Banca</h3>
          <p>Momentos do evento acadêmico e apresentação</p>
        </div>

        <div class="gallery" id="galleryBanca">
          <div class="gallery-item">
            <img src="assets/img/evento-banca/Integrantes.jpeg" alt="Equipe apresentando para a banca" loading="lazy">
            <div class="gallery-overlay"><span class="gallery-overlay-icon">🔍</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEIRA DE CIÊNCIAS -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Feira de Ciências da ETEC</h2>
          <p>Apresentação prática e demonstração do projeto para o público</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-bottom: 3rem;">
          <div class="fade-in">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">Experiência Prática e Interativa</h3>
            <p>O projeto GrainShield foi apresentado de forma prática e interativa na Feira de Ciências da ETEC de Carapicuíba, permitindo que alunos, professores e visitantes entendessem o problema das perdas de grãos e conhecessem a solução proposta pela equipe.</p>
            
            <p style="margin-top: 1.5rem;">A equipe utilizou slides, protótipos e demonstrações para explicar como a vedação adequada de caminhões pode reduzir em até 77% as perdas de grãos no transporte rodoviário.</p>

            <h4 style="color: #2B6F3D; margin-top: 2rem; margin-bottom: 1rem;">Destaques do Evento</h4>
            <ul style="margin-left: 1.5rem; color: var(--txt-secundario); line-height: 1.8;">
              <li>✓ Grande interesse do público visitante</li>
              <li>✓ Muitas perguntas sobre viabilidade e implementação</li>
              <li>✓ Feedback positivo sobre a solução prática</li>
              <li>✓ Reconhecimento da importância do tema para o agronegócio</li>
            </ul>
          </div>

          <div class="slide-up">
            <img src="assets/img/evento-feira/Caminhao.jpeg" alt="Caminhão com sistema de vedação - Demonstração" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/evento-feira/Caminhao.jpeg', 'Caminhão com sistema de vedação - Demonstração')">
            <p style="text-align: center; color: var(--txt-secundario); font-size: 0.9rem;">Clique na imagem para ampliar</p>
          </div>
        </div>

        <div class="section-header" style="margin-top: 3rem; margin-bottom: 2rem;">
          <h3>Galeria de Fotos - Feira de Ciências</h3>
          <p>Momentos da apresentação e interação com os visitantes</p>
        </div>

        <div class="gallery" id="galleryFeira">
          <div class="gallery-item">
            <img src="assets/img/evento-feira/Banner_Horizontal.png" alt="Banner do estande da Feira" loading="lazy">
            <div class="gallery-overlay"><span class="gallery-overlay-icon">🔍</span></div>
          </div>
          <div class="gallery-item">
            <img src="assets/img/evento-feira/Caminhao.jpeg" alt="Caminhão com sistema de vedação" loading="lazy">
            <div class="gallery-overlay"><span class="gallery-overlay-icon">🔍</span></div>
          </div>
          <div class="gallery-item">
            <img src="assets/img/evento-feira/Notebook_Apresentacao.jpeg" alt="Notebook com apresentação" loading="lazy">
            <div class="gallery-overlay"><span class="gallery-overlay-icon">🔍</span></div>
          </div>
          <div class="gallery-item">
            <img src="assets/img/evento-feira/Slide_Monitor_PC.jpeg" alt="Slides em monitor" loading="lazy">
            <div class="gallery-overlay"><span class="gallery-overlay-icon">🔍</span></div>
          </div>
          <div class="gallery-item">
            <img src="assets/img/evento-feira/Integrantes.jpeg" alt="Integrantes da equipe" loading="lazy">
            <div class="gallery-overlay"><span class="gallery-overlay-icon">🔍</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section>
      <div class="container">
        <div style="text-align: center; padding: 3rem; background: linear-gradient(135deg, #2B6F3D 0%, #1a4028 100%); border-radius: 12px; color: white;">
          <h2 style="color: white; margin-bottom: 1rem;">Quer Saber Mais?</h2>
          <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin-bottom: 2rem;">Explore todo o projeto GrainShield e seus resultados</p>
          
          <div class="btn-group" style="justify-content: center;">
            <a href="sobre.html" class="btn btn-primary btn-lg">Conhecer a Equipe</a>
            <a href="problema.html" class="btn" style="background: white; color: #2B6F3D; font-weight: 600; padding: 1rem 2rem; border-radius: 8px; display: inline-block;">Ver Dados e Análises</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>GrainShield</h4>
          <p>Soluções inovadoras para reduzir perdas no transporte de grãos e fortalecer o agronegócio brasileiro.</p>
        </div>

        <div class="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="sobre.html">Sobre o Projeto</a></li>
            <li><a href="problema.html">Dados e Análises</a></li>
            <li><a href="empresa.html">Solução GrainShield</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Documentos</h4>
          <ul>
            <li><a href="https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/TCC_ADM.pdf" target="_blank">TCC Completo</a></li>
            <li><a href="https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/Slides_TCC.pdf" target="_blank">Slides da Apresentação</a></li>
            <li><a href="sobre.html">Conheça a Equipe</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contato</h4>
          <p>ETEC de Carapicuíba<br>Curso: Técnico em Administração<br>Ano: 2025</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="footer-bottom">
        <div class="footer-bottom-text">
          <p>Copyright 2025 GrainShield Brasil. Projeto de TCC - ETEC Carapicuíba. Desenvolvido por Kawã, Kaynã, Nathan, Pedro e Samuel.</p>
        </div>
        <div class="footer-socials">
          <a href="https://github.com" class="social-link" title="GitHub">
            <img src="assets/img/icones/github.png" alt="GitHub" class="social-icon">
          </a>
          <a href="https://linkedin.com" class="social-link" title="LinkedIn">
            <img src="assets/img/icones/linkedin.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="mailto:contact@grainshield.com" class="social-link" title="Email">
            <img src="assets/img/icones/email.png" alt="Email" class="social-icon">
          </a>
        </div>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/gallery.js"></script>
</body>
</html>
```

---

## index.html (ATUALIZADO)

**Salvar como:** `index.html` (substitui o arquivo antigo)

Este arquivo já está bem estruturado no seu projeto. As principais alterações são:
- ✅ Logo já está implementada
- ✅ Menu de navegação atualizado para "eventos.html"
- ✅ Footer com ícones (mantém a estrutura)

O arquivo atual já está pronto. Faça apenas uma pequena alteração na navegação para garantir consistência:

```html
<!-- No menu principal, substitua: -->
<li><a href="eventos.html">Eventos</a></li>

<!-- No lugar de separar "banca" e "feira" -->
```

---

## problema.html (ATUALIZADO)

**Salvar como:** `problema.html` (substitui o arquivo antigo)

Continuaremos na próxima mensagem devido ao limite de caracteres...

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Problema e Análise de Dados - GrainShield: Perdas de Grãos no Transporte Rodoviário">
  <title>Problema e Dados | GrainShield - Análise Completa</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%232B6F3D'>G</text></svg>">
</head>
<body>
  <!-- HEADER & NAVEGAÇÃO -->
  <header>
    <div class="container">
      <nav>
        <a href="index.html" class="logo">
          <img src="assets/img/projeto/Logo.png" alt="GrainShield - Soluções em Proteção de Grãos" class="logo-img">
        </a>
        <button class="menu-toggle" id="menuToggle">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">Início</a></li>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="problema.html" class="active">Problema</a></li>
          <li><a href="empresa.html">Empresa</a></li>
          <li><a href="eventos.html">Eventos</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text slide-up">
            <h1>O Problema das Perdas de Grãos</h1>
            <p>Análise aprofundada dos desafios logísticos no transporte rodoviário de soja e milho na BR-163, com dados estatísticos e visualizações de pesquisa acadêmica.</p>
          </div>
          <div class="hero-image fade-in">
            <img src="assets/img/projeto/Caminhao_estrada_com_despejos_de_soja.png" alt="Caminhão com desperdício de soja" loading="lazy" style="width: 100%; max-width: 400px; height: auto; border-radius: 12px;">
          </div>
        </div>
      </div>
    </section>

    <!-- BR-163: ROTA DA SOJA -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>BR-163: A Rota da Soja</h2>
          <p>Análise da importância estratégica e desafios logísticos</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
          <div class="fade-in">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">Importância Estratégica</h3>
            <p>A BR-163 é responsável pelo escoamento de aproximadamente <strong>50 milhões de toneladas</strong> de grãos anualmente, sendo a principal via de transporte da soja produzida no Centro-Oeste brasileiro.</p>
            
            <p style="margin-top: 1.5rem;">Esta rodovia conecta as principais regiões produtoras de soja e milho ao Porto de Santos, sendo vital para a exportação de commodities agrícolas brasileiras no mercado global.</p>

            <div style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(43, 111, 61, 0.05) 100%); padding: 1.5rem; border-radius: 10px; margin-top: 1.5rem; border-left: 4px solid #2B6F3D;">
              <p style="margin: 0; font-weight: 600; color: #2B6F3D;">Toneladas escoadas anualmente: <span style="font-size: 1.3em;">50 milhões</span></p>
            </div>
          </div>

          <div class="slide-up">
            <img src="assets/img/projeto/Rota_da_Soja_BR163.jpg" alt="Mapa da Rota da Soja BR-163" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Rota_da_Soja_BR163.jpg', 'Mapa da Rota da Soja BR-163')">
            <p style="text-align: center; color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEXTO LOGÍSTICO -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Contexto Logístico</h2>
          <p>Dados sobre perdas no transporte rodoviário brasileiro</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <div class="card slide-up">
            <h3 style="color: #2B6F3D; margin-bottom: 1rem;">91% Rodoviário</h3>
            <p>91% do transporte alimentício e de produtos agrícolas no Brasil é feito por rodovias, tornando a eficiência do transporte crítica para a economia.</p>
            <img src="assets/img/projeto/91%_do_transporte_alimenticio_e_rodoviario.png" alt="Gráfico - 91% Transporte Rodoviário" class="card-image" loading="lazy" style="margin-top: 1rem; cursor: pointer;" onclick="openLightbox('assets/img/projeto/91%_do_transporte_alimenticio_e_rodoviario.png', '91% do Transporte Alimentício é Rodoviário')">
          </div>

          <div class="card slide-up">
            <h3 style="color: #185FA5; margin-bottom: 1rem;">Custo Logístico: 18,4% do PIB</h3>
            <p>O custo logístico representa aproximadamente 18,4% do PIB brasileiro, destacando o impacto econômico das ineficiências na cadeia de suprimento.</p>
            <img src="assets/img/projeto/Custo_logistico_ate_18,4%_do_PIB.png" alt="Custo Logístico 18,4% PIB" class="card-image" loading="lazy" style="margin-top: 1rem; cursor: pointer;" onclick="openLightbox('assets/img/projeto/Custo_logistico_ate_18,4%_do_PIB.png', 'Custo Logístico até 18,4% do PIB')">
          </div>

          <div class="card slide-up">
            <h3 style="color: #F2A623; margin-bottom: 1rem;">30% Mais Caro no Brasil</h3>
            <p>O transporte no Brasil é 30% mais caro comparado aos EUA, impactando a competitividade das exportações agrícolas brasileiras.</p>
            <img src="assets/img/projeto/Custo_Logistico_Comparacao_Agro_Brasil_x_AR_x_EUA.avif" alt="Comparação de Custos Logísticos" class="card-image" loading="lazy" style="margin-top: 1rem; cursor: pointer;" onclick="openLightbox('assets/img/projeto/Custo_Logistico_Comparacao_Agro_Brasil_x_AR_x_EUA.avif', 'Comparação de Custos - Brasil vs EUA')">
          </div>
        </div>
      </div>
    </section>

    <!-- PERDAS DE GRÃOS -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Perdas de Grãos no Transporte</h2>
          <p>Quantificação e distribuição das perdas logísticas</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
          <div class="slide-up">
            <img src="assets/img/projeto/Dado_2,5%_de_50_milhoes_toneladas.jpeg" alt="Dados de Perdas: 2,5% de 50 milhões" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Dado_2,5%_de_50_milhoes_toneladas.jpeg', 'Perdas: 2,5% de 50 Milhões de Toneladas')">
            <p style="text-align: center; color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div class="fade-in">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">2,5% de Perdas</h3>
            <p>De 50 milhões de toneladas escoadas pela BR-163, <strong>1,25 milhão de toneladas são perdidas</strong> no transporte, equivalente a perdas de 2,5% por safra.</p>
            
            <p style="margin-top: 1.5rem; font-weight: 600; color: #2B6F3D;">Impacto Econômico:</p>
            <p>Essa perda representa um prejuízo estimado de <strong>mais de R$ 3 bilhões anuais</strong> para a economia brasileira, afetando produtores, transportadoras e a competitividade do país no mercado global.</p>

            <div style="background: linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 1.5rem; border-radius: 10px; margin-top: 1.5rem; border-left: 4px solid #E74C3C;">
              <p style="margin: 0; color: var(--txt-secundario);"><span style="font-weight: 700; color: #E74C3C;">1,25 milhão de toneladas</span> perdidas anualmente na BR-163</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DISTRIBUIÇÃO GEOGRÁFICA -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Distribuição Geográfica das Perdas</h2>
          <p>Estados com maiores perdas de grãos no transporte</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
          <div class="fade-in">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">Mapa de Perdas por Estado</h3>
            <p>O Mato Grosso é o estado com maiores registros de perdas de grãos no transporte rodoviário, seguido por Goiás e São Paulo. Esses estados concentram as principais rotas de escoamento da produção agrícola.</p>
            
            <p style="margin-top: 1.5rem;">As perdas variam conforme a condição das estradas, conservação dos veículos e adequação dos sistemas de vedação das carrocerias.</p>

            <ul style="margin-left: 1.5rem; margin-top: 1.5rem; color: var(--txt-secundario); line-height: 1.8;">
              <li><strong style="color: #2B6F3D;">Mato Grosso</strong> - Principal produtor de soja</li>
              <li><strong style="color: #2B6F3D;">Goiás</strong> - Região produtora e de passagem</li>
              <li><strong style="color: #2B6F3D;">São Paulo</strong> - Última etapa até Porto de Santos</li>
            </ul>
          </div>

          <div class="slide-up">
            <img src="assets/img/projeto/Brasil_estados_maior_perda_graos.jpg" alt="Mapa Brasil - Estados com maior perda de grãos" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Brasil_estados_maior_perda_graos.jpg', 'Mapa - Estados com Maior Perda de Grãos')">
            <p style="text-align: center; color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FATORES PRINCIPAIS -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Fatores Principais de Perda</h2>
          <p>Análise dos problemas identificados no transporte</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          <div class="card slide-up">
            <div class="card-icon">🚛</div>
            <h3>Vedação Inadequada</h3>
            <p>A falta de sistemas de vedação nas carrocerias é o fator principal, responsável por grandes volumes de desperdício acumulado durante toda a jornada.</p>
            <img src="assets/img/projeto/Caminhao_estrada_com_despejos_de_soja.png" alt="Caminhão com desperdício" class="card-image" loading="lazy" style="cursor: pointer;" onclick="openLightbox('assets/img/projeto/Caminhao_estrada_com_despejos_de_soja.png', 'Caminhão sem vedação adequada')">
          </div>

          <div class="card slide-up">
            <div class="card-icon">🛣️</div>
            <h3>Infraestrutura Precária</h3>
            <p>Estradas em más condições, trechos não pavimentados e falta de manutenção agravam o problema ao longo de toda a jornada.</p>
            <img src="assets/img/projeto/sustentabilidade-logistica-caminhoes.jpg" alt="Infraestrutura de estradas" class="card-image" loading="lazy" style="cursor: pointer;" onclick="openLightbox('assets/img/projeto/sustentabilidade-logistica-caminhoes.jpg', 'Condição das Estradas')">
          </div>

          <div class="card slide-up">
            <div class="card-icon">🔧</div>
            <h3>Estado dos Veículos</h3>
            <p>Caminhões com manutenção inadequada e desgaste das estruturas contribuem significativamente para as perdas durante o trajeto.</p>
            <img src="assets/img/projeto/Caminhao_Padrao.jpg" alt="Caminhão padrão" class="card-image" loading="lazy" style="cursor: pointer;" onclick="openLightbox('assets/img/projeto/Caminhao_Padrao.jpg', 'Caminhão Padrão de Transporte')">
          </div>
        </div>
      </div>
    </section>

    <!-- GRÁFICOS E VISUALIZAÇÕES -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>Gráficos & Visualizações</h2>
          <p>Dados quantitativos de pesquisa de campo documental</p>
        </div>

        <div style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(43, 111, 61, 0.05) 100%); padding: 2rem; border-radius: 12px; margin-bottom: 3rem; border-left: 4px solid #2B6F3D;">
          <p style="margin: 0; color: var(--txt-secundario); line-height: 1.6;">
            <strong style="color: #2B6F3D;">Metodologia:</strong> Os dados apresentados foram obtidos através de uma pesquisa de campo documental conduzida por Gabriel Caldeira Cardoso, estudante da Universidade Federal de Uberlândia (UFU), buscando quantificar e analisar as perdas de grãos durante o transporte rodoviário, considerando variáveis como tipo de rodovia, estado de conservação dos veículos e distâncias percorridas. A análise é fundamentada em levantamento bibliográfico extenso e análise documental de dados secundários de qualidade.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div style="text-align: center;">
            <img src="assets/img/projeto/Grafico1.png" alt="Gráfico 1 - Análise de Perdas" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Grafico1.png', 'Gráfico 1 - Análise de Perdas')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div style="text-align: center;">
            <img src="assets/img/projeto/Grafico2.png" alt="Gráfico 2 - Comparativo" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Grafico2.png', 'Gráfico 2 - Comparativo')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div style="text-align: center;">
            <img src="assets/img/projeto/Grafico3.png" alt="Gráfico 3 - Distribuição" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Grafico3.png', 'Gráfico 3 - Distribuição')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div style="text-align: center;">
            <img src="assets/img/projeto/Grafico4.png" alt="Gráfico 4 - Tendências" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Grafico4.png', 'Gráfico 4 - Tendências')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div style="text-align: center;">
            <img src="assets/img/projeto/Grafico5.png" alt="Gráfico 5 - Análise" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Grafico5.png', 'Gráfico 5 - Análise')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div style="text-align: center;">
            <img src="assets/img/projeto/Grafico6.png" alt="Gráfico 6 - Conclusões" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Grafico6.png', 'Gráfico 6 - Conclusões')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DIFICULDADES TÉCNICAS -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Dificuldades Técnicas Identificadas</h2>
          <p>Principais obstáculos na logística de transporte</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          <div style="background: linear-gradient(135deg, #E8F3ED 0%, rgba(43, 111, 61, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #2B6F3D; text-align: center;">
            <h4 style="color: #2B6F3D; margin-bottom: 0.5rem;">Vedação Inadequada</h4>
            <p style="color: var(--txt-secundario); margin: 0;">Caminhões sem sistemas de vedação eficientes</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(24, 95, 165, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #185FA5; text-align: center;">
            <h4 style="color: #185FA5; margin-bottom: 0.5rem;">Infraestrutura Deficiente</h4>
            <p style="color: var(--txt-secundario); margin: 0;">Estradas mal conservadas e buracos</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(242, 166, 35, 0.1) 0%, rgba(231, 76, 60, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #F2A623; text-align: center;">
            <h4 style="color: #F2A623; margin-bottom: 0.5rem;">Manutenção de Veículos</h4>
            <p style="color: var(--txt-secundario); margin: 0;">Frota com manutenção inadequada</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(39, 174, 96, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #27AE60; text-align: center;">
            <h4 style="color: #27AE60; margin-bottom: 0.5rem;">Distância Percorrida</h4>
            <p style="color: var(--txt-secundario); margin: 0;">Longas distâncias aumentam perdas</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #3498DB; text-align: center;">
            <h4 style="color: #3498DB; margin-bottom: 0.5rem;">Gestão Logística</h4>
            <p style="color: var(--txt-secundario); margin: 0;">Falta de controle e rastreamento</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(155, 89, 182, 0.1) 0%, rgba(242, 166, 35, 0.05) 100%); padding: 2rem; border-radius: 12px; border-top: 4px solid #9B59B6; text-align: center;">
            <h4 style="color: #9B59B6; margin-bottom: 0.5rem;">Climático</h4>
            <p style="color: var(--txt-secundario); margin: 0;">Chuvas e umidade afetam os grãos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SOLUÇÃO VIÁVEL -->
    <section class="alternado">
      <div class="container">
        <div class="section-header">
          <h2>A Solução: Vedação Adequada</h2>
          <p>Como reduzir perdas de forma prática e econômica</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
          <div class="fade-in">
            <h3 style="color: #2B6F3D; margin-bottom: 1.5rem;">Redução de 77% com Vedação</h3>
            <p>Sistemas de vedação adequada reduzem perdas em até <strong>77%</strong>, sendo uma solução simples, eficaz e economicamente viável para o setor de transporte de grãos.</p>
            
            <p style="margin-top: 1.5rem;">A implementação de vedação:
            </p>
            <ul style="margin-left: 1.5rem; margin-top: 1rem; color: var(--txt-secundario); line-height: 1.8;">
              <li>✓ Reduz perdas significativamente</li>
              <li>✓ É economicamente viável</li>
              <li>✓ Melhora a sustentabilidade</li>
              <li>✓ Aumenta a competitividade</li>
              <li>✓ Protege a carga durante o trajeto</li>
            </ul>
          </div>

          <div class="slide-up">
            <img src="assets/img/projeto/Reducao_Perdas_77%_apos_vedacao_adequada.png" alt="Redução de 77% com vedação adequada" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Reducao_Perdas_77%_apos_vedacao_adequada.png', 'Redução de 77% com Vedação Adequada')">
            <p style="text-align: center; color: var(--txt-secundario); font-size: 0.9rem;">Clique para ampliar</p>
            
            <img src="assets/img/projeto/Tabela_antes_depois_implementacao_adequada.png" alt="Tabela antes e depois" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer; margin-top: 1.5rem;" onclick="openLightbox('assets/img/projeto/Tabela_antes_depois_implementacao_adequada.png', 'Tabela - Antes e Depois da Vedação')">
            <p style="text-align: center; color: var(--txt-secundario); font-size: 0.9rem;">Clique para ampliar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPARAÇÃO E TABELAS -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2>Análise Comparativa de Perdas</h2>
          <p>Distribuição e cenários de perdas logísticas</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <div style="text-align: center;">
            <img src="assets/img/projeto/Tabela_Distribuicao_Perdas_Logisticas.png" alt="Tabela Distribuição de Perdas" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Tabela_Distribuicao_Perdas_Logisticas.png', 'Tabela - Distribuição de Perdas Logísticas')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>

          <div style="text-align: center;">
            <img src="assets/img/projeto/Mapa_Logistica_Soja_e_Milho.png" alt="Mapa Logística Soja e Milho" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox('assets/img/projeto/Mapa_Logistica_Soja_e_Milho.png', 'Mapa de Logística - Soja e Milho')">
            <p style="color: var(--txt-secundario); font-size: 0.9rem; margin-top: 0.5rem;">Clique para ampliar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section>
      <div class="container">
        <div style="text-align: center; padding: 3rem; background: linear-gradient(135deg, #2B6F3D 0%, #1a4028 100%); border-radius: 12px; color: white;">
          <h2 style="color: white; margin-bottom: 1rem;">Pronto para a Solução?</h2>
          <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin-bottom: 2rem;">Conheça como a GrainShield pode transformar a logística do agronegócio brasileiro</p>
          
          <div class="btn-group" style="justify-content: center;">
            <a href="empresa.html" class="btn btn-primary btn-lg">Conhecer a GrainShield</a>
            <a href="sobre.html" class="btn" style="background: white; color: #2B6F3D; font-weight: 600; padding: 1rem 2rem; border-radius: 8px; display: inline-block;">Ver Projeto Completo</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>GrainShield</h4>
          <p>Soluções inovadoras para reduzir perdas no transporte de grãos e fortalecer o agronegócio brasileiro.</p>
        </div>

        <div class="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="sobre.html">Sobre o Projeto</a></li>
            <li><a href="problema.html">Dados e Análises</a></li>
            <li><a href="empresa.html">Solução GrainShield</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Documentos</h4>
          <ul>
            <li><a href="https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/TCC_ADM.pdf" target="_blank">TCC Completo</a></li>
            <li><a href="https://kawamoreira.github.io/Kawa-Moreira-Portfolio/ETEC3ADM/GrainShield/Slides_TCC.pdf" target="_blank">Slides da Apresentação</a></li>
            <li><a href="sobre.html">Conheça a Equipe</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contato</h4>
          <p>ETEC de Carapicuíba<br>Curso: Técnico em Administração<br>Ano: 2025</p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="footer-bottom">
        <div class="footer-bottom-text">
          <p>Copyright 2025 GrainShield Brasil. Projeto de TCC - ETEC Carapicuíba. Desenvolvido por Kawã, Kaynã, Nathan, Pedro e Samuel.</p>
        </div>
        <div class="footer-socials">
          <a href="https://github.com" class="social-link" title="GitHub">
            <img src="assets/img/icones/github.png" alt="GitHub" class="social-icon">
          </a>
          <a href="https://linkedin.com" class="social-link" title="LinkedIn">
            <img src="assets/img/icones/linkedin.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="mailto:contact@grainshield.com" class="social-link" title="Email">
            <img src="assets/img/icones/email.png" alt="Email" class="social-icon">
          </a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    function openLightbox(imageSrc, imageAlt) {
      // Esta função será usada pelo gallery.js
      if (typeof showLightbox === 'function') {
        showLightbox(imageSrc, imageAlt);
      }
    }
  </script>
  <script src="assets/js/main.js"></script>
  <script src="assets/js/gallery.js"></script>
</body>
</html>
```

---

**Continuação na próxima resposta...**

(Empresa.html, Style.css e instruções finais virão na continuação)
