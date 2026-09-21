/**
 * THECCODA - Floating WhatsApp Inquiry Widget
 * Direct hotline & psychosocial / donation inquiry gateway
 * Primary Active WhatsApp Line: +256 772 458 912 (MTN Uganda)
 */

(function () {
  'use strict';

  const DEFAULT_CONFIG = {
    phone: '256772458912',
    defaultMessage: 'Hello THECCODA Trauma Healing Childcare & Development Association, I would like to make an inquiry regarding your programmes and support.',
    tooltipText: 'Chat on WhatsApp',
    greetingText: 'Need help? Chat with us 👋'
  };

  function initWhatsAppWidget(options) {
    const config = Object.assign({}, DEFAULT_CONFIG, options || {});

    // Prevent duplicate injection
    if (document.getElementById('floatingWhatsAppWrap')) return;

    const encodedMessage = encodeURIComponent(config.defaultMessage);
    const waUrl = `https://wa.me/${config.phone}?text=${encodedMessage}`;

    const widget = document.createElement('div');
    widget.id = 'floatingWhatsAppWrap';
    widget.className = 'floating-whatsapp-wrap';
    widget.innerHTML = `
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="floating-whatsapp-pill" id="whatsappChatPill" aria-label="Open WhatsApp chat with THECCODA">
        <span class="online-dot"></span>
        <span class="pill-text" id="whatsappPillText">${config.tooltipText}</span>
      </a>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="floating-whatsapp-btn" id="whatsappChatBtn" aria-label="Chat with THECCODA on WhatsApp" title="Inquire on WhatsApp (+256 772 458 912)">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 16.002 0 C 7.164 0 0 7.164 0 16.002 C 0 18.825 0.732 21.564 2.124 23.976 L 0.224 30.916 L 7.336 29.052 C 9.648 30.312 12.288 31.004 16.002 31.004 C 24.84 31.004 32.004 23.84 32.004 16.002 C 32.004 7.164 24.84 0 16.002 0 Z M 16.002 28.4 C 13.568 28.4 11.236 27.744 9.212 26.544 L 8.732 26.26 L 4.512 27.368 L 5.64 23.256 L 5.328 22.76 C 4.008 20.66 3.308 18.232 3.308 16.002 C 3.308 9.002 9.002 3.308 16.002 3.308 C 23.002 3.308 28.696 9.002 28.696 16.002 C 28.696 23.002 23.002 28.4 16.002 28.4 Z M 22.956 19.46 C 22.576 19.27 20.708 18.35 20.36 18.224 C 20.012 18.098 19.76 18.034 19.508 18.414 C 19.256 18.794 18.536 19.64 18.316 19.892 C 18.096 20.144 17.876 20.176 17.496 19.986 C 17.116 19.796 15.892 19.394 14.444 18.104 C 13.312 17.094 12.548 15.848 12.328 15.468 C 12.108 15.088 12.304 14.882 12.496 14.694 C 12.668 14.524 12.876 14.25 13.068 14.03 C 13.258 13.81 13.322 13.652 13.448 13.398 C 13.574 13.146 13.512 12.924 13.416 12.734 C 13.322 12.544 12.564 10.68 12.248 9.92 C 11.94 9.18 11.628 9.28 11.396 9.268 C 11.176 9.258 10.924 9.258 10.672 9.258 C 10.42 9.258 10.01 9.352 9.662 9.732 C 9.314 10.112 8.336 11.028 8.336 12.894 C 8.336 14.76 9.694 16.562 9.884 16.814 C 10.074 17.066 12.556 20.898 16.364 22.542 C 17.27 22.934 17.978 23.168 18.532 23.344 C 19.442 23.634 20.274 23.592 20.932 23.494 C 21.666 23.384 23.192 22.57 23.508 21.684 C 23.824 20.798 23.824 20.04 23.73 19.882 C 23.634 19.724 23.382 19.628 23.002 19.438 L 22.956 19.46 Z"/>
        </svg>
      </a>
    `;

    document.body.appendChild(widget);

    const pill = document.getElementById('whatsappChatPill');
    const pillText = document.getElementById('whatsappPillText');

    // Auto-tease greeting after 2 seconds on desktop
    if (window.innerWidth > 640 && pill) {
      setTimeout(() => {
        if (pillText) pillText.textContent = config.greetingText;
        pill.classList.add('visible');
        setTimeout(() => {
          if (pillText) pillText.textContent = config.tooltipText;
          pill.classList.remove('visible');
        }, 5000);
      }, 2200);
    }
  }

  // Export globally
  window.initWhatsAppWidget = initWhatsAppWidget;

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initWhatsAppWidget());
  } else {
    initWhatsAppWidget();
  }
})();
