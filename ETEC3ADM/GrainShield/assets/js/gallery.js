// ============================================================================
// GRAINSHIELD - gallery.js (versão definitiva)
// Lightbox funcional para todas as imagens
// ============================================================================

(function() {
  // Criar elementos do lightbox se não existirem
  function criarLightbox() {
    if (document.getElementById('gs-lightbox')) return;

    const html = `
      <div id="gs-lightbox" class="lightbox" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center; cursor: pointer;">
        <div style="position: relative; max-width: 90%; max-height: 90%;">
          <img id="gs-lightbox-img" style="max-width: 100%; max-height: 90vh; display: block; margin: auto; border-radius: 8px;">
          <button id="gs-lightbox-close" style="position: absolute; top: -40px; right: 0; background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">&times;</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);

    const lightbox = document.getElementById('gs-lightbox');
    const closeBtn = document.getElementById('gs-lightbox-close');
    const img = document.getElementById('gs-lightbox-img');

    // Fechar ao clicar no fundo ou no X
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === closeBtn) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (lightbox.style.display === 'flex' && e.key === 'Escape') {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // Função global para abrir uma imagem
  window.abrirImagem = function(src, alt) {
    const lightbox = document.getElementById('gs-lightbox');
    const img = document.getElementById('gs-lightbox-img');
    if (!lightbox || !img) {
      criarLightbox();
      // Rebuscar após criar
      return window.abrirImagem(src, alt);
    }
    img.src = src;
    img.alt = alt || '';
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  // Inicializar ao carregar a página
  document.addEventListener('DOMContentLoaded', () => {
    criarLightbox();

    // Adicionar evento a todas as imagens com a classe .gallery-item (para uso em eventos.html)
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', (e) => {
        const img = item.querySelector('img');
        if (img) abrirImagem(img.src, img.alt);
      });
    });
  });
})();