/**
 * Trauma Healing Childcare and Development Association (THECCODA)
 * Interactive Regional Operations & Humanitarian Footprint Map
 * Centered at Makalama Village, Bukibino Sub-County, Manjiya County, Bududa District, Uganda
 */

(function () {
  const HUBS = [
    {
      id: 'hub-makalama-bududa',
      x: 500,
      y: 250,
      name: 'Makalama HQ (Bududa)',
      icon: '⭐',
      badgeColor: '#f59e0b',
      title: 'Makalama Headquarters & Safe Haven Sanctuary',
      district: 'Bududa District (Manjiya County)',
      programmes: 'Child Safe Havens, Trauma Psychotherapy, Emergency Aid, Education Bursaries',
      reach: '18,500+ Children & Vulnerable Persons',
      facilities: '1 Residential Safe Haven, 3 Counseling Suites, Community Meal Hall, Play Therapy Center',
      projects: ['Makalama Vulnerable Persons & Child Haven', 'Faith & Hope Community Counseling Circles'],
      lead: 'Reverend Stephen Watuwa & Miriam Khabuya',
      elevation: '1,840 m ASL',
      status: 'Primary Headquarters & 24/7 Haven',
      desc: 'Our founding headquarters established in 1997 in Makalama village, Bukibino sub-county, nestled in the Manjiya foothills. Serves as our primary clinical trauma recovery facility, 24/7 residential child safe haven, and crisis relief dispatch center.'
    },
    {
      id: 'hub-bushika-bubita',
      x: 580,
      y: 195,
      name: 'Bushika & Bubita Outreaches',
      icon: '🏔️',
      badgeColor: '#10b981',
      title: 'Bushika & Bubita Mountain Trauma Outreaches',
      district: 'Bududa District (Highland Parishes)',
      programmes: 'Disaster Bereavement Support, Mudslide Recovery Circles, Mobile Psychological Aid',
      reach: '7,400+ Villagers & Landslide Survivors',
      facilities: '6 Community Faith Healing Centers, Mobile Emergency Psychosocial Desk',
      projects: ['Bududa Landslide Survivors Trauma Healing', 'Community Caregiver VSLAs'],
      lead: 'Dr. Grace Nabukwasi, Trauma Lead',
      elevation: '2,250 m ASL',
      status: 'Active High-Altitude Field Outreaches',
      desc: 'Delivering mobile psychological first aid, bereavement guidance, and emergency warm blankets directly to high-altitude farming families affected by recurring landslides and severe climatic shocks on Mt. Elgon slopes.'
    },
    {
      id: 'hub-mbale-regional',
      x: 360,
      y: 225,
      name: 'Mbale Regional Center',
      icon: '🎓',
      badgeColor: '#3b82f6',
      title: 'Mbale Regional Operations & Logistics Center',
      district: 'Mbale City & District',
      programmes: 'Secondary Education Bursaries, Vocational Training, Legal Defense',
      reach: '6,200+ Beneficiaries',
      facilities: '1 Regional Coordination Office, Youth Vocational Workshop, Bursary Coordination Desk',
      projects: ['Orphan & Vulnerable Child Bursary Scheme'],
      lead: 'David Masaba, Regional Logistics Lead',
      elevation: '1,140 m ASL',
      status: 'Regional Transport & Academic Liaison',
      desc: 'Our regional coordination and partner liaison hub in Mbale, managing secondary school bursary placements across 48 partner institutions, university transitions, and field supply-chain logistics.'
    },
    {
      id: 'hub-manafwa-namisindwa',
      x: 460,
      y: 350,
      name: 'Manafwa & Namisindwa Hub',
      icon: '🌾',
      badgeColor: '#d97706',
      title: 'Manafwa & Namisindwa Community Development Hub',
      district: 'Manafwa & Namisindwa Districts',
      programmes: 'Caregiver VSLAs, Widows Livelihoods, Foster Family Mentorship',
      reach: '4,600+ Caregivers & Children',
      facilities: '42 Active VSLA Cooperatives, Agricultural Training Demo Plot',
      projects: ['Caregiver Village Savings & Household Resilience'],
      lead: 'Florence Nabulo, Community Livelihoods Lead',
      elevation: '1,320 m ASL',
      status: 'Community Micro-Finance & Livelihoods Hub',
      desc: 'Empowering widowed mothers, grandmothers, and foster caregivers with micro-enterprise seed capital, sustainable slope agriculture training, and self-managed village savings associations.'
    },
    {
      id: 'hub-kampala-liaison',
      x: 140,
      y: 355,
      name: 'Kampala National Office',
      icon: '🏛️',
      badgeColor: '#8b5cf6',
      title: 'Kampala National Liaison & Child Safeguarding Office',
      district: 'Kampala & National Secretariat',
      programmes: 'National NGO Compliance, Policy Advocacy, Strategic Donor Partnerships',
      reach: 'Nationwide Coordination & 48 Partner Schools',
      facilities: 'National Executive Secretariat, Safeguarding Legal Advisory Desk',
      projects: ['National Child Rights Defense & Safeguarding Advocacy'],
      lead: 'National Executive Director',
      elevation: '1,190 m ASL',
      status: 'Statutory NGO Board & Donor Liaison',
      desc: 'Coordinating national NGO Board statutory compliance, liaising with the Ministry of Gender, Labour & Social Development, and mobilizing bilateral partnerships for Bududa grassroots operations.'
    }
  ];

  window.renderOperationsMap = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="map-section-wrap container">
        
        <!-- Section Header -->
        <div class="section-header text-center" style="margin-bottom: var(--space-8); max-width: 840px; margin-left: auto; margin-right: auto;">
          <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #fef08a; border: 1px solid rgba(245, 158, 11, 0.45); margin-bottom: var(--space-3); font-size: 0.78rem; letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase;">
            Rooted in Bududa &bull; Serving Across Eastern Uganda Since 1997
          </span>
          <h2 class="section-title" style="color: #ffffff; font-size: clamp(1.8rem, 3.2vw, 2.5rem); margin-bottom: var(--space-3);">
            Where Faith &amp; Hope Heal: Our Operational Footprint
          </h2>
          <p class="section-lead" style="color: rgba(255, 255, 255, 0.88); font-size: clamp(0.95rem, 1.2vw, 1.05rem); line-height: 1.65;">
            Headquartered at <strong>Makalama Village, Bukibino Sub-County in Bududa District</strong>, THECCODA coordinates localized trauma healing, residential child safe haven care, and community development across the Mt. Elgon sub-region alongside a national advocacy liaison network.
          </p>
        </div>

        <!-- Filter / Quick Hub Selector -->
        <div class="map-hub-filter-bar" style="justify-content: center; margin-bottom: var(--space-5);">
          <span style="font-size: 0.76rem; color: rgba(255,255,255,0.6); font-weight: 700; text-transform: uppercase; margin-right: 4px;">Quick Select Hub:</span>
          ${HUBS.map(hub => `
            <button type="button" class="map-filter-btn ${hub.id === 'hub-makalama-bududa' ? 'active' : ''}" data-hub-target="${hub.id}">
              <span>${hub.icon}</span>
              <span>${hub.name}</span>
            </button>
          `).join('')}
        </div>

        <!-- Main Map Layout Grid -->
        <div class="map-layout">
          
          <!-- Vector GIS Cartographic Map Canvas -->
          <div class="svg-map-container" id="svgMapContainer">
            <svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <!-- Background Gradients -->
                <radialGradient id="mapBgGrad" cx="65%" cy="40%" r="80%">
                  <stop offset="0%" stop-color="#0a2a56" />
                  <stop offset="50%" stop-color="#071e3d" />
                  <stop offset="100%" stop-color="#041226" />
                </radialGradient>

                <!-- Mt. Elgon High Relief Gradient -->
                <radialGradient id="elgonPeakGrad" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stop-color="#1e3a29" stop-opacity="0.9" />
                  <stop offset="40%" stop-color="#14532d" stop-opacity="0.75" />
                  <stop offset="75%" stop-color="#0f3724" stop-opacity="0.5" />
                  <stop offset="100%" stop-color="#0a2a56" stop-opacity="0" />
                </radialGradient>

                <!-- Bududa Golden Focus Radial -->
                <radialGradient id="bududaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35" />
                  <stop offset="60%" stop-color="#d97706" stop-opacity="0.12" />
                  <stop offset="100%" stop-color="#071e3d" stop-opacity="0" />
                </radialGradient>

                <!-- Drop Shadow Filter -->
                <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6" />
                </filter>
              </defs>

              <!-- Base Background Map Canvas -->
              <rect width="800" height="520" fill="url(#mapBgGrad)" />

              <!-- Subtle Latitude/Longitude Grid Lines -->
              <g stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="3 6">
                <line x1="80" y1="0" x2="80" y2="520" />
                <line x1="240" y1="0" x2="240" y2="520" />
                <line x1="400" y1="0" x2="400" y2="520" />
                <line x1="560" y1="0" x2="560" y2="520" />
                <line x1="720" y1="0" x2="720" y2="520" />
                <line x1="0" y1="130" x2="800" y2="130" />
                <line x1="0" y1="260" x2="800" y2="260" />
                <line x1="0" y1="390" x2="800" y2="390" />
              </g>

              <!-- Grid Coordinates Reference -->
              <text x="715" y="24" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">34°30'E</text>
              <text x="395" y="24" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">34°10'E</text>
              <text x="12" y="264" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">01°00'N</text>

              <!-- Water Body Contours (Lake Victoria Southwest & Lake Kyoga Northwest) -->
              <!-- Lake Victoria Shoreline Accent -->
              <path d="M 0 450 Q 80 430 150 470 Q 190 500 240 520 L 0 520 Z" 
                    fill="#0369a1" opacity="0.25" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.3" />
              <text x="35" y="500" fill="rgba(56, 189, 248, 0.6)" font-size="10" font-weight="600" letter-spacing="1">LAKE VICTORIA BASIN</text>

              <!-- Lake Kyoga Wetland Inlets (Northwest) -->
              <path d="M 40 100 Q 120 120 160 80 Q 200 60 250 110 Q 210 140 140 130 Z" 
                    fill="#0284c7" opacity="0.18" stroke="#38bdf8" stroke-width="0.8" stroke-opacity="0.25" />
              <text x="90" y="115" fill="rgba(56, 189, 248, 0.45)" font-size="9" font-weight="600" letter-spacing="0.5">L. KYOGA SYSTEM</text>

              <!-- Mount Elgon Massif Topographic Contours (Eastern Region) -->
              <!-- Outer Slopes Contour (> 1,200m) -->
              <path d="M 430 70 C 520 40 680 50 750 110 C 790 170 800 270 760 350 C 710 410 590 440 490 400 C 420 370 380 320 400 240 C 410 180 390 110 430 70 Z" 
                    fill="url(#elgonPeakGrad)" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.3" />

              <!-- Mid-Highland Slopes Contour (> 2,000m) -->
              <path d="M 490 110 C 560 80 690 90 730 150 C 760 210 740 300 690 340 C 620 380 530 360 480 300 C 450 250 460 160 490 110 Z" 
                    fill="#047857" opacity="0.28" stroke="#34d399" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="4 2" />

              <!-- High Ridge Alpine Zone (> 3,000m) -->
              <path d="M 560 140 C 620 120 700 130 710 180 C 720 240 670 280 620 280 C 570 280 540 230 550 180 C 555 160 550 145 560 140 Z" 
                    fill="#064e3b" opacity="0.4" stroke="#a7f3d0" stroke-width="1" stroke-opacity="0.45" />

              <!-- Mount Elgon Caldera & Wagagai Peak (4,321m) -->
              <ellipse cx="640" cy="180" rx="35" ry="24" fill="#022c22" opacity="0.6" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.6" />
              <circle cx="640" cy="175" r="3" fill="#f59e0b" />
              <text x="640" y="165" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="700" letter-spacing="0.5">▲ Wagagai Peak (4,321m)</text>
              <text x="640" y="215" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="9" font-weight="600">Mt. Elgon Caldera</text>

              <!-- International Border (Uganda / Kenya) -->
              <path d="M 680 0 L 685 90 L 700 200 L 720 320 L 710 440 L 720 520" 
                    stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="6 4" fill="none" />
              <text x="735" y="80" fill="rgba(255,255,255,0.4)" font-size="9" font-weight="700" letter-spacing="1">UGANDA / KENYA BORDER</text>

              <!-- District Boundaries Accent (Subtle Dotted Lines) -->
              <!-- Bududa District Area Glow -->
              <path d="M 450 200 C 490 170 560 170 600 210 C 590 280 540 310 480 300 C 440 280 430 230 450 200 Z" 
                    fill="url(#bududaGlow)" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="5 3" stroke-opacity="0.8" />
              <text x="530" y="228" text-anchor="middle" fill="rgba(245, 158, 11, 0.45)" font-size="11" font-weight="800" letter-spacing="2">BUDUDA DISTRICT</text>

              <!-- Mbale District Perimeter -->
              <path d="M 310 180 C 370 170 410 190 420 250 C 400 300 340 310 300 270 C 290 230 290 190 310 180 Z" 
                    fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="3 3" />
              <text x="350" y="200" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9" font-weight="700">MBALE</text>

              <!-- Manafwa & Namisindwa Perimeter -->
              <path d="M 420 310 C 480 310 540 330 520 400 C 470 430 400 410 390 360 C 390 330 410 310 420 310 Z" 
                    fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="3 3" />
              <text x="450" y="380" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-weight="700">MANAFWA &amp; NAMISINDWA</text>

              <!-- Rivers / Mountain Drainage (Manafwa River & Tsutsu River) -->
              <path d="M 620 185 Q 560 210 500 250 Q 450 280 400 290 Q 320 310 240 350" 
                    fill="none" stroke="#0ea5e9" stroke-width="1.6" opacity="0.6" stroke-linecap="round" />
              <text x="400" y="280" fill="rgba(14, 165, 233, 0.6)" font-size="8" font-style="italic">River Manafwa Valley</text>

              <!-- Humanitarian Supply Corridors (Road Arteries) -->
              <!-- National Artery: Kampala -> Jinja -> Mbale -> Bududa HQ -->
              <path d="M 140 355 Q 230 330 280 300 Q 330 270 360 225 Q 420 225 500 250" 
                    fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" opacity="0.8" />
              
              <!-- Mountain Outreach Arteries: Bududa HQ -> Bushika/Bubita -->
              <line x1="500" y1="250" x2="580" y2="195" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" opacity="0.85" />
              
              <!-- Community VSLA Artery: Bududa HQ -> Manafwa/Namisindwa -->
              <line x1="500" y1="250" x2="460" y2="350" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3" opacity="0.8" />

              <!-- Bududa HQ Glowing Pulse Effect -->
              <circle cx="500" cy="250" r="38" fill="none" stroke="#f59e0b" stroke-width="1.8" class="map-pulse-ring" opacity="0.7" />
              <circle cx="500" cy="250" r="22" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.5" />

              <!-- ========================================================
                   INTERACTIVE HUB PINS & NON-CLIPPING LABELS
                   ======================================================== -->

              <!-- Pin 5: Kampala National Office -->
              <g class="map-pin" data-hub-id="hub-kampala-liaison" tabindex="0" role="button" aria-label="Kampala National Office">
                <circle cx="140" cy="355" r="10" fill="#8b5cf6" stroke="#ffffff" stroke-width="2.5" filter="url(#pinShadow)" />
                <circle cx="140" cy="355" r="4" fill="#ffffff" />
                <!-- Label Pill -->
                <rect x="65" y="375" width="150" height="24" rx="12" fill="rgba(7, 30, 61, 0.92)" stroke="rgba(139, 92, 246, 0.6)" stroke-width="1" />
                <text x="140" y="391" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700">🏛️ Kampala National HQ</text>
              </g>

              <!-- Pin 3: Mbale Regional Operations & Logistics -->
              <g class="map-pin" data-hub-id="hub-mbale-regional" tabindex="0" role="button" aria-label="Mbale Regional Operations">
                <circle cx="360" cy="225" r="11" fill="#2563eb" stroke="#ffffff" stroke-width="2.5" filter="url(#pinShadow)" />
                <circle cx="360" cy="225" r="4.5" fill="#ffffff" />
                <!-- Label Pill -->
                <rect x="285" y="245" width="150" height="24" rx="12" fill="rgba(7, 30, 61, 0.92)" stroke="rgba(37, 99, 235, 0.6)" stroke-width="1" />
                <text x="360" y="261" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700">🎓 Mbale Logistics Hub</text>
              </g>

              <!-- Pin 4: Manafwa & Namisindwa Community Development Hub -->
              <g class="map-pin" data-hub-id="hub-manafwa-namisindwa" tabindex="0" role="button" aria-label="Manafwa Community Hub">
                <circle cx="460" cy="350" r="10" fill="#d97706" stroke="#ffffff" stroke-width="2.5" filter="url(#pinShadow)" />
                <circle cx="460" cy="350" r="4" fill="#ffffff" />
                <!-- Label Pill -->
                <rect x="375" y="370" width="170" height="24" rx="12" fill="rgba(7, 30, 61, 0.92)" stroke="rgba(217, 119, 6, 0.6)" stroke-width="1" />
                <text x="460" y="386" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700">🌾 Manafwa &amp; VSLAs</text>
              </g>

              <!-- Pin 2: Bushika & Bubita Mountain Outreaches -->
              <g class="map-pin" data-hub-id="hub-bushika-bubita" tabindex="0" role="button" aria-label="Bushika and Bubita Outreaches">
                <circle cx="580" cy="195" r="11" fill="#10b981" stroke="#ffffff" stroke-width="2.5" filter="url(#pinShadow)" />
                <circle cx="580" cy="195" r="4.5" fill="#ffffff" />
                <!-- Label Pill (Placed above pin to avoid clipping) -->
                <rect x="495" y="152" width="170" height="24" rx="12" fill="rgba(7, 30, 61, 0.94)" stroke="rgba(16, 185, 129, 0.7)" stroke-width="1" />
                <text x="580" y="168" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700">🏔️ Bushika &amp; Bubita</text>
              </g>

              <!-- Pin 1: Makalama Headquarters & Safe Haven Sanctuary (Bududa) -->
              <g class="map-pin active" data-hub-id="hub-makalama-bududa" tabindex="0" role="button" aria-label="Makalama Main Headquarters">
                <circle cx="500" cy="250" r="16" fill="#f59e0b" stroke="#ffffff" stroke-width="3.5" filter="url(#pinShadow)" />
                <circle cx="500" cy="250" r="6" fill="#78350f" />
                <!-- Central Star Indicator -->
                <polygon points="500,244 502,248 506,248 503,251 504,255 500,253 496,255 497,251 494,248 498,248" fill="#ffffff" />
                <!-- Label Pill (Safely centered, plenty of room on both sides) -->
                <rect x="390" y="278" width="220" height="26" rx="13" fill="rgba(120, 53, 15, 0.95)" stroke="#f59e0b" stroke-width="1.8" filter="url(#pinShadow)" />
                <text x="500" y="295" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="800" letter-spacing="0.3">
                  ⭐ Makalama HQ (Bududa)
                </text>
              </g>

              <!-- Compass Rose Accent (Top-Right) -->
              <g transform="translate(60, 50)" opacity="0.8">
                <circle cx="0" cy="0" r="22" fill="rgba(7, 30, 61, 0.7)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
                <!-- North Needle -->
                <polygon points="0,-16 5,0 0,16 -5,0" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1" />
                <polygon points="0,-16 5,0 0,-3" fill="#ef4444" />
                <polygon points="0,-16 -5,0 0,-3" fill="#dc2626" />
                <text x="0" y="-20" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="800">N</text>
              </g>

              <!-- Scale & Legend Bar (Bottom Canvas) -->
              <g transform="translate(20, 485)">
                <!-- Legend Item 1 -->
                <circle cx="10" cy="0" r="6" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" />
                <text x="22" y="4" fill="rgba(255,255,255,0.85)" font-size="10" font-weight="600">Makalama Main HQ</text>

                <!-- Legend Item 2 -->
                <circle cx="145" cy="0" r="5" fill="#10b981" stroke="#ffffff" stroke-width="1.5" />
                <text x="156" y="4" fill="rgba(255,255,255,0.85)" font-size="10" font-weight="600">Mountain Outreaches</text>

                <!-- Legend Item 3 -->
                <circle cx="295" cy="0" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />
                <text x="306" y="4" fill="rgba(255,255,255,0.85)" font-size="10" font-weight="600">Regional Centers</text>

                <!-- Corridor Line Legend -->
                <line x1="420" y1="0" x2="455" y2="0" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2" />
                <text x="462" y="4" fill="rgba(255,255,255,0.85)" font-size="10" font-weight="600">Humanitarian Corridors</text>
              </g>

              <!-- Map Attribution / Coordinates Stamp -->
              <text x="780" y="505" text-anchor="end" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">
                Bududa HQ: 01°00'34"N, 34°19'58"E &bull; WGS84
              </text>
            </svg>
          </div>

          <!-- Dynamic Active Hub Information Card -->
          <div class="map-details-card" id="mapDetailsCard">
            <!-- Content injected by selectHub() -->
          </div>

        </div>

        <!-- Live Operations Summary Strip -->
        <div style="margin-top: var(--space-6); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-md); padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--text-xs); color: rgba(255,255,255,0.85);">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #34d399;" class="pulse-beacon"></span>
            <span><strong>24/7 Field Operations Active</strong> across Bududa District, Mbale &amp; National Liaison Offices.</span>
          </div>
          <div style="font-size: var(--text-xs); color: rgba(255,255,255,0.75);">
            Toll-Free Helpline: <strong style="color: #f59e0b;">+256 800 222 888</strong> &bull; Emergency Psychosocial Response
          </div>
        </div>

      </div>
    `;

    function selectHub(hubId) {
      const hub = HUBS.find(h => h.id === hubId) || HUBS[0];

      // Update active pin visual on map
      container.querySelectorAll('.map-pin').forEach(pin => {
        if (pin.getAttribute('data-hub-id') === hub.id) {
          pin.classList.add('active');
        } else {
          pin.classList.remove('active');
        }
      });

      // Update active filter button
      container.querySelectorAll('.map-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-hub-target') === hub.id) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Render Details Card
      const card = document.getElementById('mapDetailsCard');
      if (!card) return;

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-3); gap: 10px;">
          <span class="badge" style="background: ${hub.badgeColor}; color: #ffffff; font-weight: 700; font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.04em;">
            ${hub.district}
          </span>
          <span style="font-size: var(--text-xs); color: #34d399; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; flex-shrink: 0;">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: #34d399; display: inline-block;"></span> Verified Active
          </span>
        </div>

        <h3 style="color: #ffffff; font-size: clamp(1.25rem, 1.8vw, 1.5rem); line-height: 1.25; margin-bottom: var(--space-2); font-weight: 800;">
          ${hub.title}
        </h3>

        <div style="display: flex; gap: 12px; font-size: 0.76rem; color: rgba(255,255,255,0.65); margin-bottom: var(--space-4); align-items: center; flex-wrap: wrap;">
          <span>📍 Elevation: <strong style="color: #f59e0b;">${hub.elevation}</strong></span>
          <span>&bull;</span>
          <span>⚡ Status: <strong style="color: #ffffff;">${hub.status}</strong></span>
        </div>

        <p style="color: rgba(255,255,255,0.88); font-size: var(--text-sm); line-height: 1.65; margin-bottom: var(--space-5);">
          ${hub.desc}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: var(--space-3); padding: var(--space-4); background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); margin-bottom: var(--space-5); border: 1px solid rgba(255,255,255,0.1);">
          <div>
            <span style="font-size: 0.7rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Total Reach</span>
            <strong style="color: #f59e0b; display: block; font-size: 1.05rem; font-weight: 800;">${hub.reach}</strong>
          </div>
          <div>
            <span style="font-size: 0.7rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">Key Facilities</span>
            <strong style="color: #ffffff; display: block; font-size: var(--text-xs); line-height: 1.4;">${hub.facilities}</strong>
          </div>
        </div>

        <div style="margin-bottom: var(--space-5);">
          <span style="font-size: 0.7rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Pillar Activities</span>
          <span style="color: #ffffff; font-size: var(--text-sm); font-weight: 600; line-height: 1.5; display: block;">${hub.programmes}</span>
        </div>

        <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
          <a href="projects.html" class="btn btn-secondary btn-sm" style="flex: 1; text-align: center; font-weight: 700;">
            View Projects &rarr;
          </a>
          <button onclick="window.openDonationModal('${hub.title}')" class="btn btn-outline-white btn-sm" style="flex: 1;">
            Support This Hub
          </button>
        </div>
      `;
    }

    // Bind click events on interactive SVG map pins
    container.querySelectorAll('.map-pin').forEach(pin => {
      pin.addEventListener('click', () => {
        const id = pin.getAttribute('data-hub-id');
        selectHub(id);
      });
      pin.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = pin.getAttribute('data-hub-id');
          selectHub(id);
        }
      });
    });

    // Bind click events on quick-filter bar buttons
    container.querySelectorAll('.map-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-hub-target');
        selectHub(targetId);
      });
    });

    // Default selection: Makalama Main HQ (Bududa)
    selectHub(HUBS[0].id);
  };
})();
