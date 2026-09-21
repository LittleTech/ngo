/**
 * KATOSI NGO - Global Live Search Engine & Modal
 * Real-time indexing of projects, programmes, stories, news, and reports.
 */

(function () {
  let searchModal = null;

  function buildSearchModal() {
    if (searchModal) return;

    searchModal = document.createElement('div');
    searchModal.className = 'modal-backdrop';
    searchModal.id = 'globalSearchModal';
    searchModal.innerHTML = `
      <div class="modal-dialog" style="max-width: 680px;">
        <div class="modal-header" style="border-bottom: none; padding-bottom: 0;">
          <div style="display: flex; align-items: center; gap: var(--space-3); width: 100%;">
            <span style="color: var(--color-text-subtle); width: 22px; height: 22px; display: inline-flex;">
              ${window.getIcon('search')}
            </span>
            <input 
              type="text" 
              id="globalSearchInput" 
              placeholder="Search projects, stories, reports, programmes..." 
              style="width: 100%; font-size: var(--text-body-lg); border: none; outline: none; background: transparent; color: var(--color-text); font-family: var(--font-heading); font-weight: 600;"
              autocomplete="off"
            />
          </div>
          <button class="modal-close-btn" id="closeSearchModal">
            ${window.getIcon('x')}
          </button>
        </div>
        <div style="padding: 0 var(--space-6) var(--space-3); border-bottom: 1px solid var(--color-border-subtle); display: flex; gap: var(--space-2); font-size: var(--text-xs); color: var(--color-text-subtle);">
          <span>Tip: Press <strong>ESC</strong> to exit</span>
          <span>•</span>
          <span>Index covers all active programmes, projects & reports</span>
        </div>
        <div class="modal-body" id="searchResultsContainer" style="max-height: 440px; padding: var(--space-4) var(--space-6);">
          <div style="text-align: center; padding: var(--space-8); color: var(--color-text-muted);">
            Type a keyword like <em>"therapy"</em>, <em>"safeguarding"</em>, <em>"shelter"</em>, or <em>"education"</em>...
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(searchModal);

    // Bind Close events
    const closeBtn = document.getElementById('closeSearchModal');
    closeBtn.addEventListener('click', closeSearch);
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearch();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
    });

    // Bind Live Search input
    const input = document.getElementById('globalSearchInput');
    input.addEventListener('input', (e) => {
      performSearch(e.target.value.trim().toLowerCase());
    });
  }

  function openSearch() {
    buildSearchModal();
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('globalSearchInput');
    setTimeout(() => input.focus(), 100);
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function performSearch(query) {
    const resultsContainer = document.getElementById('searchResultsContainer');
    if (!resultsContainer) return;

    if (!query || query.length < 2) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: var(--space-8); color: var(--color-text-muted);">
          Type a keyword like <em>"therapy"</em>, <em>"safeguarding"</em>, <em>"haven"</em>, or <em>"education"</em>...
        </div>
      `;
      return;
    }

    const store = window.katosiStore;
    const projects = store.getProjects();
    const programmes = store.getProgrammes();
    const stories = store.getStories();
    const news = store.getNews();
    const resources = store.getResources();

    const matches = [];

    // Search Projects
    projects.forEach(p => {
      if (p.title.toLowerCase().includes(query) || p.overview.toLowerCase().includes(query) || p.district.toLowerCase().includes(query)) {
        matches.push({
          type: 'Project',
          title: p.title,
          desc: p.overview,
          link: `projects.html#${p.slug}`,
          badge: 'Project'
        });
      }
    });

    // Search Programmes
    programmes.forEach(prog => {
      if (prog.title.toLowerCase().includes(query) || prog.shortDesc.toLowerCase().includes(query)) {
        matches.push({
          type: 'Programme',
          title: prog.title,
          desc: prog.shortDesc,
          link: `our-work.html#${prog.slug}`,
          badge: 'Programme'
        });
      }
    });

    // Search Stories
    stories.forEach(s => {
      if (s.person.toLowerCase().includes(query) || s.excerpt.toLowerCase().includes(query) || s.quote.toLowerCase().includes(query)) {
        matches.push({
          type: 'Story',
          title: `${s.person}: "${s.quote.slice(0, 60)}..."`,
          desc: s.excerpt,
          link: `stories.html#${s.slug}`,
          badge: 'Child Story'
        });
      }
    });

    // Search News
    news.forEach(n => {
      if (n.title.toLowerCase().includes(query) || n.excerpt.toLowerCase().includes(query)) {
        matches.push({
          type: 'News',
          title: n.title,
          desc: n.excerpt,
          link: `news.html#${n.slug}`,
          badge: 'Article'
        });
      }
    });

    // Search Resources
    resources.forEach(r => {
      if (r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query) || r.category.toLowerCase().includes(query)) {
        matches.push({
          type: 'Resource',
          title: r.title,
          desc: `${r.category} (${r.year}) • ${r.fileType} (${r.fileSize})`,
          link: `resources.html`,
          badge: 'Resource'
        });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: var(--space-8);">
          <h4 style="color: var(--color-text); margin-bottom: var(--space-2);">No matches found for "${query}"</h4>
          <p style="color: var(--color-text-muted); font-size: var(--text-sm);">
            Try searching for terms such as <em>therapy, safe haven, child protection, education, nutrition, or audit</em>.
          </p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <div style="font-size: var(--text-xs); color: var(--color-text-subtle); margin-bottom: var(--space-3); text-transform: uppercase; letter-spacing: 0.05em;">
        Found ${matches.length} relevant record${matches.length > 1 ? 's' : ''}
      </div>
      <div style="display: flex; flex-direction: column; gap: var(--space-2);">
        ${matches.map(m => `
          <a href="${m.link}" onclick="window.closeSearchModal()" style="display: block; padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle); transition: background-color var(--transition-fast);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <strong style="font-family: var(--font-heading); font-size: var(--text-sm); color: var(--color-text);">${m.title}</strong>
              <span class="badge ${m.type === 'Project' ? 'badge-primary' : 'badge-secondary'}">${m.badge}</span>
            </div>
            <p style="font-size: var(--text-xs); color: var(--color-text-muted); margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${m.desc}
            </p>
          </a>
        `).join('')}
      </div>
    `;
  }

  window.initSearch = function () {
    const triggerBtns = document.querySelectorAll('.search-trigger-btn');
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', openSearch);
    });
  };

  window.openSearchModal = openSearch;
  window.closeSearchModal = closeSearch;
})();
