/**
 * THECCODA - Home Page View Renderer
 * Purpose-driven layout aligning with Vision, Mission, and Core Values.
 * Problem -> Who We Are -> Core Values -> Programmes -> Featured Project ->
 * Regional Map -> Human Stories -> News -> Partners -> Call to Action
 */

(function () {
  window.renderHomePage = function () {
    const store = window.katosiStore;
    const settings = store.getSettings();
    const stats = store.getStats();
    const programmes = store.getProgrammes();
    const projects = store.getProjects();
    const stories = store.getStories();
    const news = store.getNews();
    const partners = store.getPartners();

    const featuredProject = projects.find(p => p.featured) || projects[0];

    return `
      <!-- 1. HERO SECTION -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-trust-badge">
              <span class="hero-trust-dot"></span>
              <span>Accountable • Trauma Psychotherapy • 24/7 Haven Care</span>
            </div>

            <h1 class="hero-title">
              Healing Trauma. Nurturing Childhoods. <span class="hero-highlight">Restoring Futures.</span>
            </h1>

            <p class="hero-subtitle">
              ${settings.description || "Trauma Healing Childcare and Development Association (THECCODA) provides clinical psychosocial therapy, emergency safe havens, trauma-sensitive schooling, and caregiver economic preservation for orphaned, traumatized, and crisis-affected persons in Uganda."}
            </p>

            <div class="hero-actions">
              <button onclick="window.openDonationModal()" class="btn btn-secondary btn-lg" style="box-shadow: 0 4px 18px rgba(200, 90, 50, 0.4);">
                Sponsor a Child's Recovery ${window.getIcon('arrow-right')}
              </button>
              <a href="our-work.html" class="btn btn-outline-white btn-lg">
                Explore Our Programmes
              </a>
              <div class="hero-helpline-pill">
                <span class="pulse-beacon"></span>
                <span>24/7 Crisis Hotline: <strong>+256 800 222 888</strong> (Toll-Free)</span>
              </div>
            </div>

            <div class="hero-stats-preview">
              <div class="hero-stat-mini">
                <strong class="count-up" data-target="24800+">24,800+</strong>
                <span>Children Healed</span>
              </div>
              <div class="hero-stat-mini" style="border-left: 1px solid rgba(255,255,255,0.22); padding-left: clamp(14px, 2vw, 28px);">
                <strong class="count-up" data-target="1850+">1,850+</strong>
                <span>Safe Haven Placements</span>
              </div>
              <div class="hero-stat-mini" style="border-left: 1px solid rgba(255,255,255,0.22); padding-left: clamp(14px, 2vw, 28px);">
                <strong class="count-up" data-target="96%">96%</strong>
                <span>Trauma Remission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. IMPACT STATS STRIP -->
      <div class="container" style="position: relative;">
        <div class="impact-strip">
          <div class="impact-strip-grid">
            ${stats.map(s => `
              <div class="impact-stat-item">
                <span class="impact-stat-value count-up" data-target="${s.value}">${s.value}</span>
                <span class="impact-stat-label">${s.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- 3. INTRODUCTION: WHO WE ARE -->
      <section class="section">
        <div class="container">
          <div class="editorial-grid">
            <div class="editorial-img-stack">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" 
                alt="Child receiving compassionate care and education at THECCODA haven" 
                class="editorial-img-main"
              />
              <div class="editorial-quote-badge">
                <p>"When you heal a child's early trauma and empower their family, you break the cycle of suffering for generations."</p>
                <span>— Founding Council, Makalama 1997</span>
              </div>
            </div>

            <div>
              <span class="section-kicker">Who We Are</span>
              <h2 class="section-title">Healing begins with safety, empathy, and specialized care.</h2>
              <p class="section-lead">
                Since 1997, Trauma Healing Childcare and Development Association (THECCODA) has recognized that childhood emotional trauma and severe vulnerability are not life sentences, but calls for hope and social service.
              </p>
              <p style="color: var(--color-text-muted); line-height: 1.65; margin-bottom: var(--space-6);">
                We operate on the foundational truth that every child wounded by loss, abuse, displacement, or neglect deserves clinically-sound psychosocial therapy, loving safe havens, quality education, and strong family foundations. We do not institutionalize children; we rehabilitate them, protect their rights, and reintegrate them into thriving families.
              </p>

              <div style="display: flex; gap: var(--space-4); flex-wrap: wrap;">
                <a href="about.html" class="btn btn-primary">
                  Our Story & Approach ${window.getIcon('arrow-right')}
                </a>
                <a href="resources.html" class="btn btn-outline">
                  View Audited Reports
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. OUR MISSION, VISION & VALUES -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-kicker">Guiding Principles</span>
            <h2 class="section-title">Purpose-Driven Childcare & Development</h2>
            <p class="section-lead">
              Our mission is clear, our vision is ambitious, and our core values ensure uncompromising accountability to every child and caregiver we serve.
            </p>
          </div>

          <div class="grid grid-2" style="margin-bottom: var(--space-10);">
            <div class="card card-body" style="border-left: 4px solid var(--color-secondary);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                <span class="badge badge-secondary" style="width: fit-content;">Our Vision</span>
                <div style="width: 48px; height: 38px; display: flex; align-items: center; justify-content: center;">
                  <img src="images/icon-vision.png" alt="Vision Eye Icon" style="max-height: 34px; max-width: 46px; object-fit: contain;" />
                </div>
              </div>
              <h3 style="font-size: var(--text-h3); margin-bottom: var(--space-3);">A world enabling vulnerable individuals have access to better social services.</h3>
              <p style="color: var(--color-text-muted); line-height: 1.65; margin: 0;">
                Ensuring equitable access to trauma healing, safe haven care, nutrition, and restorative social welfare so that every vulnerable person can lead a fulfilled and dignified life.
              </p>
            </div>

            <div class="card card-body" style="border-left: 4px solid var(--color-primary);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                <span class="badge badge-primary" style="width: fit-content;">Our Mission</span>
                <div style="width: 48px; height: 38px; display: flex; align-items: center; justify-content: center;">
                  <img src="images/icon-mission.png" alt="Mission Target with Darts Icon" style="max-height: 36px; max-width: 46px; object-fit: contain;" />
                </div>
              </div>
              <h3 style="font-size: var(--text-h3); margin-bottom: var(--space-3);">Bring people together to build hope, peace and community.</h3>
              <p style="color: var(--color-text-muted); line-height: 1.65; margin: 0;">
                Through collaborative grassroots action, clinical psychosocial therapy, haven protection, and faith-inspired fellowship, we mobilize families, leaders, and partners to heal wounds of trauma and restore lasting community peace.
              </p>
            </div>
          </div>

          <!-- 5 Core Values -->
          <div style="text-align: center; margin-bottom: var(--space-6);">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary); letter-spacing: -0.01em;">
              Core Values
            </h3>
          </div>

          <div class="values-grid" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));">
            <div class="value-card">
              <div class="value-icon">${window.getIcon('heart')}</div>
              <h4 class="value-title">1. Compassion and dignity</h4>
              <p class="value-desc">Serving every hurting heart and vulnerable individual with boundless love, deep empathy, and profound respect.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">${window.getIcon('shield-check')}</div>
              <h4 class="value-title">2. Resilience</h4>
              <p class="value-desc">Cultivating inner strength, psychological healing, and endurance that outlasts crisis, poverty, and displacement.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">${window.getIcon('lock')}</div>
              <h4 class="value-title">3. Integrity &amp; equity</h4>
              <p class="value-desc">Ensuring upright moral conduct, fairness, and nondiscriminatory access to social assistance for all persons.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">${window.getIcon('calendar')}</div>
              <h4 class="value-title">4. Accountability</h4>
              <p class="value-desc">Practicing rigorous transparency, verifiable donor reporting, and faithful stewardship before our community.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">${window.getIcon('users')}</div>
              <h4 class="value-title">5. Collaboration</h4>
              <p class="value-desc">Building trusted coalitions with local residents, health leaders, institutions, and global supporters for shared impact.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. OUR PROGRAMMES (AREAS OF WORK) -->
      <section class="section">
        <div class="container">
          <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-4);">
            <div>
              <span class="section-kicker">Programmes</span>
              <h2 class="section-title" style="margin-bottom: 0;">Where We Heal Trauma & Build Futures</h2>
            </div>
            <a href="our-work.html" class="btn btn-outline">
              Explore All 6 Programmes ${window.getIcon('arrow-right')}
            </a>
          </div>

          <div class="grid grid-3">
            ${programmes.map(prog => `
              <div class="card card-hover programme-card">
                <div class="card-img-wrap">
                  <img src="${prog.image}" alt="${prog.title}" loading="lazy" />
                  <span class="badge badge-subtle card-badge-pos">Childcare Pillar</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">
                    <a href="our-work.html#${prog.slug}">${prog.title}</a>
                  </h3>
                  <p class="card-desc">${prog.shortDesc}</p>
                  
                  <div class="card-footer">
                    <a href="our-work.html#${prog.slug}" class="btn btn-ghost btn-sm" style="padding-left: 0;">
                      Learn More ${window.getIcon('arrow-right')}
                    </a>
                    <button onclick="window.openDonationModal('${prog.title}')" class="btn btn-primary btn-sm">
                      Support
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 6. FEATURED PROJECT SPOTLIGHT -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="featured-project-card">
            <img 
              src="${featuredProject.heroImage}" 
              alt="${featuredProject.title}" 
              class="featured-project-img" 
              loading="lazy"
            />
            <div class="featured-project-content">
              <span class="badge badge-secondary" style="width: fit-content; margin-bottom: var(--space-2);">Flagship Child Intervention</span>
              <h2 style="font-size: var(--text-h2); margin-bottom: var(--space-3);">${featuredProject.title}</h2>
              <div style="font-size: var(--text-xs); color: var(--color-text-subtle); margin-bottom: var(--space-4); display: flex; align-items: center; gap: 6px;">
                ${window.getIcon('map-pin')} ${featuredProject.location} (${featuredProject.district})
              </div>

              <p style="color: var(--color-text-muted); line-height: 1.6; margin-bottom: var(--space-4);">
                ${featuredProject.overview}
              </p>

              <!-- Progress Bar -->
              <div class="progress-wrap">
                <div class="progress-header">
                  <span>Programme Funding Status</span>
                  <span>${featuredProject.fundedPercent}% Funded</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${featuredProject.fundedPercent}%;"></div>
                </div>
              </div>

              <div class="featured-project-stats">
                <div class="featured-stat-box">
                  <strong>${featuredProject.currentBeneficiaries.split(' ')[0]}</strong>
                  <span>Children Helped</span>
                </div>
                <div class="featured-stat-box">
                  <strong>${featuredProject.status}</strong>
                  <span>Project Status</span>
                </div>
                <div class="featured-stat-box">
                  <strong>${featuredProject.year}</strong>
                  <span>Duration</span>
                </div>
              </div>

              <div style="display: flex; gap: var(--space-4); align-items: center; flex-wrap: wrap;">
                <a href="projects.html#${featuredProject.slug}" class="btn btn-primary">
                  View Full Case Study ${window.getIcon('arrow-right')}
                </a>
                <button onclick="window.openDonationModal('${featuredProject.programmeName}')" class="btn btn-secondary">
                  Fund This Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. INTERACTIVE REGIONAL OPERATIONS MAP -->
      <section class="section" id="homeMapContainer">
        <!-- Rendered dynamically by map.js -->
      </section>

      <!-- 8. STORIES OF CHANGE -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-4);">
            <div>
              <span class="section-kicker">Voices of Hope</span>
              <h2 class="section-title" style="margin-bottom: 0;">Stories of Healing & Transformation</h2>
            </div>
            <a href="stories.html" class="btn btn-outline">
              Read All Stories ${window.getIcon('arrow-right')}
            </a>
          </div>

          <div class="grid grid-3">
            ${stories.map(story => `
              <div class="card card-hover">
                <div class="card-img-wrap" style="aspect-ratio: 4 / 3;">
                  <img src="${story.image}" alt="${story.person}" loading="lazy" />
                  <span class="badge badge-subtle card-badge-pos">${story.location}</span>
                </div>
                <div class="card-body">
                  <div class="story-card-quote">
                    "${story.quote}"
                  </div>
                  <h4 style="font-size: var(--text-body); font-weight: 700; margin-bottom: 2px;">${story.person}</h4>
                  <span style="font-size: var(--text-xs); color: var(--color-text-subtle); display: block; margin-bottom: var(--space-4);">${story.role}</span>
                  
                  <div class="card-footer" style="padding-top: var(--space-3);">
                    <a href="stories.html#${story.slug}" class="btn btn-ghost btn-sm" style="padding-left: 0;">
                      Read Their Story ${window.getIcon('arrow-right')}
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 9. LATEST NEWS & INSIGHTS -->
      <section class="section">
        <div class="container">
          <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-4);">
            <div>
              <span class="section-kicker">Updates</span>
              <h2 class="section-title" style="margin-bottom: 0;">Child Development News & Insights</h2>
            </div>
            <a href="news.html" class="btn btn-outline">
              All Articles ${window.getIcon('arrow-right')}
            </a>
          </div>

          <div class="grid grid-3">
            ${news.map(item => `
              <div class="card card-hover">
                <div class="card-img-wrap">
                  <img src="${item.image}" alt="${item.title}" loading="lazy" />
                  <span class="badge badge-primary card-badge-pos">${item.category}</span>
                </div>
                <div class="card-body">
                  <div class="card-meta">
                    <span>${item.date}</span>
                    <span>•</span>
                    <span>${item.readTime}</span>
                  </div>
                  <h3 class="card-title">
                    <a href="news.html#${item.slug}">${item.title}</a>
                  </h3>
                  <p class="card-desc">${item.excerpt}</p>
                  
                  <div class="card-footer">
                    <a href="news.html#${item.slug}" class="btn btn-ghost btn-sm" style="padding-left: 0;">
                      Read Article ${window.getIcon('arrow-right')}
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 10. PARTNERS & INSTITUTIONAL ALLIANCES -->
      <section class="section section-sm section-bg-subtle" style="border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container">
          <div style="text-align: center; margin-bottom: var(--space-6);">
            <span style="font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-text-subtle);">
              Collaborating with Public Ministries, Child Rights Alliances & International Agencies
            </span>
          </div>

          <div class="partners-grid">
            ${partners.map(p => `
              <div class="partner-logo-item">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--color-secondary);"></span>
                <span>${p.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 11. GET INVOLVED CALL TO ACTION -->
      <section class="section section-bg-primary" style="text-align: center;">
        <div class="container container-narrow">
          <span class="badge badge-secondary" style="margin-bottom: var(--space-4);">Take Action Today</span>
          <h2 style="font-size: var(--text-display); color: #ffffff; margin-bottom: var(--space-4);">
            Every child deserves a life free from fear, pain, and neglect.
          </h2>
          <p style="font-size: var(--text-body-lg); color: rgba(255,255,255,0.85); line-height: 1.6; margin-bottom: var(--space-8);">
            Whether through trauma therapy kits, monthly child sponsorship, institutional grants, or volunteer mentorship, your compassionate support restores young futures.
          </p>

          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
            <button onclick="window.openDonationModal()" class="btn btn-secondary btn-lg">
              Sponsor a Child or Haven ${window.getIcon('arrow-right')}
            </button>
            <a href="volunteer.html" class="btn btn-outline-white btn-lg">
              Volunteer Your Skills
            </a>
            <a href="partner.html" class="btn btn-white btn-lg">
              Partner With THECCODA
            </a>
          </div>
        </div>
      </section>

      <!-- 12. NEWSLETTER SUBSCRIPTION -->
      <section class="section section-sm">
        <div class="container container-narrow">
          <div class="card card-body" style="background-color: var(--color-surface); border: 1px solid var(--color-border); padding: var(--space-8); display: flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-6);">
            <div style="max-width: 420px;">
              <h3 style="font-size: var(--text-h3); margin-bottom: var(--space-2);">Stay Connected to Our Mission</h3>
              <p style="color: var(--color-text-muted); font-size: var(--text-sm); margin: 0;">
                Receive quarterly child welfare impact reports, field dispatches, and audited publications directly in your inbox.
              </p>
            </div>

            <form id="newsletterForm" style="display: flex; gap: var(--space-2); flex-grow: 1; max-width: 460px;" onsubmit="event.preventDefault(); window.showToast('Thank you for subscribing to THECCODA updates!'); this.reset();">
              <input type="email" class="form-input" placeholder="Enter your email address" required style="flex-grow: 1;" />
              <button type="submit" class="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  };
})();
