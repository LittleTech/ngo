/**
 * THECCODA - Interactive Photo & Media Gallery
 * Handles category filtering, zoom interactions, and lightbox modal triggers.
 */

(function () {
  function initGallery() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const cards = document.querySelectorAll('.gallery-card');

    if (!cards.length) return;

    if (filterBtns.length) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
          const filter = this.getAttribute('data-filter');

          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              card.removeAttribute('data-hidden');
              card.style.display = '';
            } else {
              card.setAttribute('data-hidden', 'true');
              card.style.display = 'none';
            }
          });
        });
      });
    }

    cards.forEach(card => {
      card.addEventListener('click', function () {
        const img = this.querySelector('.gallery-card-img');
        const caption = this.getAttribute('data-caption') || (img ? img.alt : '');
        const src = this.getAttribute('data-full-src') || (img ? img.src : '');
        if (window.openLightbox && src) {
          window.openLightbox(src, caption);
        }
      });
    });
  }

  window.initGallery = initGallery;
})();
