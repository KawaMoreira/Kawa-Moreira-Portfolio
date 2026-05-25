// ============================================================================
// GRAINSHIELD - main.js
// Funcionalidades principais: menu mobile, navegação, scroll, animações
// ============================================================================

// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }

  // Active Link Highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Lazy Loading de Imagens
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.getAttribute('data-src')) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Smooth Scroll para Links Internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Highlight Link Ativo no Scroll
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });

  // Inicializar Chart.js se disponível
  if (typeof initCharts === 'function') {
    initCharts();
  }

  // Inicializar Lightbox se disponível
  if (typeof initGallery === 'function') {
    initGallery();
  }
});

// ============================================================================
// Efeitos de Scroll suave
// ============================================================================

function smoothScroll(target, duration = 800) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.offsetTop;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let start = null;

  window.requestAnimationFrame(function animate(timestamp) {
    if (start === null) start = timestamp;
    const progress = timestamp - start;
    const ease = progress / duration < 0.5 
      ? 2 * progress * progress / duration / duration 
      : -1 + (4 - 2 * progress / duration) * progress / duration;
    
    window.scrollTo(0, startPosition + distance * ease);
    if (progress < duration) window.requestAnimationFrame(animate);
  });
}

// ============================================================================
// Utilitários
// ============================================================================

// Função para adicionar classe quando elemento entra na viewport
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}

// Executar ao carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeElements);
} else {
  observeElements();
}
