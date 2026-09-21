/**
 * TCDO - Media Lightbox Modal
 * Clean, lightweight photo viewer for child recovery center galleries and media assets.
 */

(function () {
  let lightboxEl = null;

  function buildLightbox() {
    if (lightboxEl) return;

    lightboxEl = document.createElement('div');
    lightboxEl.className = 'modal-backdrop';
    lightboxEl.id = 'mediaLightbox';
    lightboxEl.style.backgroundColor = 'rgba(10, 20, 15, 0.94)';
    lightboxEl.innerHTML = `
      <div style="position: relative; max-width: 90vw; max-height: 90vh; display: flex; flex-direction: column; align-items: center;">
        <button class="modal-close-btn" id="closeLightboxBtn" style="position: absolute; top: -45px; right: 0; color: #ffffff;">
          ${window.getIcon('x')}
        </button>
        <img id="lightboxImg" src="" alt="" style="max-width: 100%; max-height: 78vh; object-fit: contain; border-radius: var(--radius-sm); box-shadow: var(--shadow-modal);" />
        <div id="lightboxCaption" style="color: #ffffff; font-size: var(--text-sm); margin-top: var(--space-3); text-align: center; max-width: 600px; line-height: 1.5;"></div>
      </div>
    `;

    document.body.appendChild(lightboxEl);

    document.getElementById('closeLightboxBtn').addEventListener('click', closeLightbox);
    lightboxEl.addEventListener('click', (e) => {
      if (e.target === lightboxEl) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxEl.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  function openLightbox(src, caption) {
    buildLightbox();
    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');
    img.src = src;
    cap.innerText = caption || 'Trauma Childcare and Development Organisation';
    lightboxEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
})();
