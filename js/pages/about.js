/**
 * THECCODA - About Page Renderer
 * Comprehensive organizational history, leadership, governance, methodology, and timeline.
 */

(function () {
  window.renderAboutPage = function () {
    const store = window.katosiStore;
    const leadership = store.getLeadership();

    return `
      <!-- Header Banner -->
      <section class="section section-sm section-bg-primary" style="padding-top: var(--space-16);">
        <div class="container">
          <div class="container-narrow">
            <span class="badge badge-secondary" style="margin-bottom: var(--space-3);">About THECCODA</span>
            <h1 style="color: #ffffff; margin-bottom: var(--space-4);">Building Hope, Peace and Community in Bududa</h1>
            <p style="font-size: var(--text-body-lg); color: rgba(255,255,255,0.88); line-height: 1.6;">
              Trauma Healing Childcare and Development Association (THECCODA) is an accredited national and local NGO in Uganda dedicated to caring for vulnerable persons, providing psychosocial counseling, protective havens, and sustainable community development.
            </p>
          </div>
        </div>
      </section>

      <!-- Vision, Mission & Values -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="grid grid-2" style="gap: var(--space-6); margin-bottom: var(--space-10);">
            <div class="card card-hover" style="padding: var(--space-6); background: #ffffff; border-radius: var(--radius-lg); border-top: 5px solid var(--color-secondary);">
              <span class="badge" style="background: #fef3c7; color: #92400e; font-weight: 700; text-transform: uppercase;">Our Vision</span>
              <h3 style="color: var(--color-primary); margin-top: var(--space-3); margin-bottom: var(--space-2); font-weight: 800;">
                A world enabling vulnerable individuals have access to better social services.
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-muted); line-height: 1.6;">
                We envision an equitable society where vulnerable children, elderly, and displaced persons receive high-quality counseling, healthcare, and sanctuary, living with dignity and opportunity.
              </p>
            </div>

            <div class="card card-hover" style="padding: var(--space-6); background: #ffffff; border-radius: var(--radius-lg); border-top: 5px solid var(--color-primary);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-2);">
                <span class="badge" style="background: #eff6ff; color: #1e40af; font-weight: 700; text-transform: uppercase;">Our Mission</span>
                <div style="width: 48px; height: 38px; display: flex; align-items: center; justify-content: center;">
                  <img src="images/icon-mission.png" alt="Mission Target Icon" style="max-height: 34px; max-width: 46px; object-fit: contain;" />
                </div>
              </div>
              <h3 style="color: var(--color-primary); margin-top: var(--space-2); margin-bottom: var(--space-2); font-weight: 800;">
                Bring people together to build hope, peace and community.
              </h3>
              <p style="font-size: var(--text-sm); color: var(--color-text-muted); line-height: 1.6;">
                Through grassroots collaboration, clinical psychosocial therapy, haven protection, and faith-inspired fellowship, we mobilize families and partners to heal trauma and restore lasting peace.
              </p>
            </div>
          </div>

          <div class="section-header text-center" style="max-width: 700px; margin: 0 auto var(--space-8);">
            <span class="section-kicker">Guiding Principles</span>
            <h2 class="section-title">Our Core Values</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4);">
            <div class="card card-hover" style="padding: var(--space-5); background: #ffffff; border-radius: var(--radius-md); border-top: 3px solid #0a4db3;">
              <span style="font-size: 1.2rem;">❤️</span>
              <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary); margin: var(--space-2) 0 var(--space-1);">1. Compassion and dignity</h4>
              <p style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; margin: 0;">Honoring the inherent worth of every person with empathy and respect.</p>
            </div>

            <div class="card card-hover" style="padding: var(--space-5); background: #ffffff; border-radius: var(--radius-md); border-top: 3px solid #d97706;">
              <span style="font-size: 1.2rem;">🌱</span>
              <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary); margin: var(--space-2) 0 var(--space-1);">2. Resilience</h4>
              <p style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; margin: 0;">Empowering individuals to overcome disaster and cultivate lasting inner strength.</p>
            </div>

            <div class="card card-hover" style="padding: var(--space-5); background: #ffffff; border-radius: var(--radius-md); border-top: 3px solid #16a34a;">
              <span style="font-size: 1.2rem;">⚖️</span>
              <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary); margin: var(--space-2) 0 var(--space-1);">3. Integrity &amp; equity</h4>
              <p style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; margin: 0;">Unwavering honesty and fair, equal access to protection and social services.</p>
            </div>

            <div class="card card-hover" style="padding: var(--space-5); background: #ffffff; border-radius: var(--radius-md); border-top: 3px solid #0284c7;">
              <span style="font-size: 1.2rem;">🔍</span>
              <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary); margin: var(--space-2) 0 var(--space-1);">4. Accountability</h4>
              <p style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; margin: 0;">Open stewardship and financial clarity before God, donors, and communities.</p>
            </div>

            <div class="card card-hover" style="padding: var(--space-5); background: #ffffff; border-radius: var(--radius-md); border-top: 3px solid #8b5cf6;">
              <span style="font-size: 1.2rem;">🤝</span>
              <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-primary); margin: var(--space-2) 0 var(--space-1);">5. Collaboration</h4>
              <p style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; margin: 0;">Building enduring partnerships with grassroots groups and leaders for collective impact.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Story -->
      <section class="section">
        <div class="container">
          <div class="editorial-grid">
            <div>
              <span class="section-kicker">Our Heritage</span>
              <h2 class="section-title">Founded in Makalama Village, 1997</h2>
              <p class="section-lead">
                In 1997, community elders, faith leaders, and social advocates came together in Makalama village to respond to severe humanitarian distress on the mountain slopes of Bududa District.
              </p>
              <p style="color: var(--color-text-muted); line-height: 1.65; margin-bottom: var(--space-4);">
                Located at Makalama Village, Bukibino Sub-County, Manjiya County in Bududa District, our community faced recurring mudslides, geographic isolation, and severe poverty, leaving vulnerable children and families without social safety nets.
              </p>
              <p style="color: var(--color-text-muted); line-height: 1.65; margin-bottom: var(--space-6);">
                THECCODA pioneered compassionate, faith-guided and evidence-based trauma recovery, safe havens, and livelihood empowerment, proving that with love, community, and social support, every wounded life can be restored.
              </p>
              <div style="padding: var(--space-4); background-color: var(--color-surface-subtle); border-left: 3px solid var(--color-secondary); border-radius: var(--radius-xs);">
                <strong style="display: block; color: var(--color-text); font-size: var(--text-sm); margin-bottom: 2px;">Legal Registration & Compliance</strong>
                <span style="font-size: var(--text-xs); color: var(--color-text-muted);">Registered National and Local NGO under Uganda NGO Registration #INBR199708. Slogan: "Building a community driven with faith and hope".</span>
              </div>
            </div>

            <div>
              <img 
                src="images/hero-tcdo.jpg" 
                alt="Child receiving compassionate care at THECCODA" 
                style="border-radius: var(--radius-md); width: 100%; box-shadow: var(--shadow-card);"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership & Oversight -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-kicker">Leadership & Oversight</span>
            <h2 class="section-title">Dedicated Community Stewardship</h2>
            <p class="section-lead">
              Our directors, clinical counselors, and board members bring decades of child psychiatry, social justice, and institutional governance expertise.
            </p>
          </div>

          <div class="grid grid-4">
            ${leadership.map(l => `
              <div class="card card-hover">
                <div class="card-img-wrap" style="aspect-ratio: 1 / 1;">
                  <img src="${l.image}" alt="${l.name}" loading="lazy" />
                </div>
                <div class="card-body">
                  <h4 style="font-size: var(--text-body); font-weight: 700; margin-bottom: 2px;">${l.name}</h4>
                  <span style="font-size: var(--text-xs); color: var(--color-secondary); font-weight: 600; display: block; margin-bottom: var(--space-3);">${l.role}</span>
                  <p style="font-size: var(--text-xs); color: var(--color-text-muted); line-height: 1.6; margin-bottom: var(--space-3);">${l.bio}</p>
                  <div style="font-size: 0.72rem; color: var(--color-text-subtle); border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-2);">
                    <strong>Focus:</strong> ${l.expertise}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  };
})();
