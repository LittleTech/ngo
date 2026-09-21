/**
 * KATOSI NGO - Navigation Bar, Mobile Drawer & Global Header Coordinator
 */

(function () {
  function setupStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  function setupMobileDrawer() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('mobileBackdrop');
    const closeBtn = document.getElementById('mobileDrawerClose');

    if (!toggleBtn || !drawer || !backdrop) return;

    function openDrawer() {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    // Close when clicking any mobile nav link
    drawer.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  function setupLanguagePicker() {
    const picker = document.getElementById('languageSelect');
    if (!picker) return;

    picker.addEventListener('change', (e) => {
      const lang = e.target.value;
      const translations = {
        'en': 'Switched to English',
        'sw': 'Imebadilishwa kwenda Kiswahili (Swahili enabled)',
        'lg': 'Okyusiddwa mu Luganda (Luganda enabled)'
      };
      window.showToast(translations[lang] || 'Language updated');
    });
  }

  window.initNavigation = function () {
    setupStickyHeader();
    setupMobileDrawer();
    setupLanguagePicker();
    if (window.initScrollAnimations) {
      window.initScrollAnimations();
    }
  };
})();
