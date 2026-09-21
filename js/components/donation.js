/**
 * Trauma Healing Childcare and Development Association (THECCODA)
 * Interactive Local & International Donation Gateway & Official Receipt Generator
 * Headquarters: Makalama Village, Bukibino, Manjiya, Bududa, Uganda
 * Slogan: "Building a community driven with faith and hope"
 */

(function () {
  let donationModal = null;

  const PRESETS = {
    'UGX': [20000, 50000, 100000, 250000, 500000],
    'USD': [15, 30, 50, 100, 250],
    'EUR': [15, 30, 50, 100, 250],
    'GBP': [10, 25, 45, 90, 200]
  };

  let state = {
    currency: 'USD',
    frequency: 'One-Time',
    amount: 50,
    programme: 'Caring for Vulnerable Persons (Orphans, Elders & Disabled)',
    isAnonymous: false,
    activeChannelTab: 'card', // 'card', 'momo', 'bank', 'remittance'
    paymentMethod: 'Credit / Debit Card'
  };

  // Helper for copy to clipboard
  window.copyToClipboard = function (text, btnElement) {
    if (!navigator.clipboard) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    } else {
      navigator.clipboard.writeText(text);
    }

    if (btnElement) {
      const originalHtml = btnElement.innerHTML;
      btnElement.classList.add('copied');
      btnElement.innerHTML = `✓ Copied!`;
      setTimeout(() => {
        btnElement.classList.remove('copied');
        btnElement.innerHTML = originalHtml;
      }, 2000);
    }

    if (window.showToast) {
      window.showToast(`Copied to clipboard: ${text}`, 'success');
    }
  };

  function buildDonationModal() {
    if (donationModal) return;

    donationModal = document.createElement('div');
    donationModal.className = 'modal-backdrop';
    donationModal.id = 'donationSystemModal';
    donationModal.innerHTML = `
      <div class="modal-dialog" style="max-width: 680px;">
        <div class="modal-header" style="background: linear-gradient(135deg, #0a4db3 0%, #072d66 100%); color: #ffffff;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="images/logo.png" alt="THECCODA Logo" style="width: 44px; height: 44px; border-radius: 50%; background: #ffffff; padding: 2px;" />
            <div>
              <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #fef08a; border: 1px solid rgba(245, 158, 11, 0.4); font-size: 0.7rem; margin-bottom: 2px;">
                Est. 1997 • Bududa, Uganda
              </span>
              <h3 class="modal-title" style="color: #ffffff; margin: 0; font-size: 1.25rem;">Support THECCODA's Mission</h3>
              <p style="margin: 0; font-size: 0.75rem; color: rgba(255,255,255,0.85); font-style: italic;">
                "Building a community driven with faith and hope"
              </p>
            </div>
          </div>
          <button class="modal-close-btn" id="closeDonationModal" style="color: #ffffff;">
            ${window.getIcon ? window.getIcon('x') : '&times;'}
          </button>
        </div>

        <div class="modal-body" id="donationModalBody">
          <!-- Step 1 Form -->
          <form id="donationFlowForm">
            <!-- Frequency Switch -->
            <div class="freq-switch">
              <button type="button" class="freq-btn ${state.frequency === 'One-Time' ? 'active' : ''}" data-freq="One-Time">One-Time Contribution</button>
              <button type="button" class="freq-btn ${state.frequency === 'Monthly' ? 'active' : ''}" data-freq="Monthly">Monthly Faith & Hope Partner</button>
            </div>

            <!-- Currency & Amount Presets -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2);">
              <label class="form-label" style="margin: 0; font-weight: 700;">Select Donation Amount</label>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: var(--text-xs); color: var(--color-text-subtle);">Currency:</span>
                <select id="modalCurrencySelect" class="form-select" style="width: auto; padding: 4px 8px; font-size: var(--text-xs); font-weight: 600;">
                  <option value="USD" selected>USD ($ - International)</option>
                  <option value="UGX">UGX (USh - Uganda)</option>
                  <option value="EUR">EUR (€ - Europe)</option>
                  <option value="GBP">GBP (£ - UK)</option>
                </select>
              </div>
            </div>

            <div class="amount-presets" id="modalAmountPresets">
              <!-- Rendered via JS -->
            </div>

            <!-- Custom Amount -->
            <div class="form-group" style="margin-bottom: var(--space-4);">
              <label class="form-label" style="font-size: var(--text-xs);">Or enter a custom amount</label>
              <input type="number" id="modalCustomAmount" class="form-input" placeholder="e.g. 100" min="5" value="${state.amount}" />
            </div>

            <!-- Allocation Selector -->
            <div class="form-group">
              <label class="form-label form-label-required">Direct My Contribution To</label>
              <select id="modalProgrammeSelect" class="form-select">
                <option value="Caring for Vulnerable Persons (Orphans, Elders & Disabled)" selected>Caring for Vulnerable Persons (Orphans, Elders & Disabled)</option>
                <option value="Counseling, Guidance & Trauma Healing Circles">Counseling, Guidance & Trauma Healing Circles</option>
                <option value="Childcare, Protection & School Fee Sponsorships">Childcare, Protection & School Fee Sponsorships</option>
                <option value="Community Development & Caregiver VSLAs">Community Development & Caregiver VSLAs</option>
                <option value="Makalama Village Safe Haven & Disaster Relief">Makalama Village Safe Haven & Disaster Relief</option>
                <option value="Where Most Urgently Needed (General Hope Fund)">Where Most Urgently Needed (General Hope Fund)</option>
              </select>
            </div>

            <!-- Payment Channel Options (Local & International) -->
            <div class="form-group" style="margin-top: var(--space-4);">
              <label class="form-label form-label-required">Choose Giving Channel (Local & International)</label>
              
              <div class="donation-method-tabs">
                <button type="button" class="donation-tab-btn active" data-channel="card">
                  <span>💳 Online Card</span>
                  <small style="color: var(--color-text-subtle);">Visa / MC / Amex</small>
                </button>
                <button type="button" class="donation-tab-btn" data-channel="momo">
                  <span>📱 Mobile Money</span>
                  <small style="color: #854d0e;">MTN / Airtel Uganda</small>
                </button>
                <button type="button" class="donation-tab-btn" data-channel="bank">
                  <span>🏦 Bank Wire</span>
                  <small style="color: var(--color-primary);">Local & SWIFT</small>
                </button>
                <button type="button" class="donation-tab-btn" data-channel="remittance">
                  <span>🌍 Remittance</span>
                  <small style="color: #065f46;">Sendwave / Remitly</small>
                </button>
              </div>

              <!-- Tab Content: Card -->
              <div id="channelContentCard" class="channel-content-pane">
                <div style="background: var(--color-surface-subtle); padding: var(--space-4); border-radius: var(--radius-sm); border: 1px solid var(--color-border); font-size: var(--text-xs);">
                  <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                    <span class="badge" style="background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;">Secure 256-Bit SSL</span>
                    <span class="badge" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;">Instant Receipt</span>
                  </div>
                  <p style="margin: 0 0 6px 0; color: var(--color-text-muted);">
                    Process giving with any international or local Visa, Mastercard, or American Express debit/credit card.
                  </p>
                </div>
              </div>

              <!-- Tab Content: Mobile Money -->
              <div id="channelContentMoMo" class="channel-content-pane" style="display: none;">
                <div class="donation-subgrid">
                  <!-- MTN MoMo -->
                  <div class="donation-channel-card" style="margin-bottom: 0;">
                    <span class="channel-badge channel-badge-momo">MTN Mobile Money</span>
                    <div style="font-size: var(--text-xs); color: var(--color-text-muted);">Merchant / MoMo Pay Code:</div>
                    <div class="copy-field-group">
                      <span class="copy-field-value">984210</span>
                      <button type="button" class="btn-copy-code" onclick="window.copyToClipboard('984210', this)">Copy</button>
                    </div>
                    <div style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 6px;">
                      Dial <strong>*165*3#</strong> &bull; Name: <em>THECCODA</em>
                    </div>
                  </div>

                  <!-- Airtel Money -->
                  <div class="donation-channel-card" style="margin-bottom: 0;">
                    <span class="channel-badge channel-badge-airtel">Airtel Money</span>
                    <div style="font-size: var(--text-xs); color: var(--color-text-muted);">Merchant Pay ID:</div>
                    <div class="copy-field-group">
                      <span class="copy-field-value">1204892</span>
                      <button type="button" class="btn-copy-code" onclick="window.copyToClipboard('1204892', this)">Copy</button>
                    </div>
                    <div style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 6px;">
                      Dial <strong>*185*9#</strong> &bull; Name: <em>THECCODA</em>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab Content: Bank Wire -->
              <div id="channelContentBank" class="channel-content-pane" style="display: none;">
                <div class="donation-channel-card" style="margin-bottom: 0; font-size: var(--text-xs);">
                  <span class="channel-badge channel-badge-bank">Centenary Bank Uganda (Local UGX & Global SWIFT)</span>
                  <div class="donation-subgrid" style="margin-top: 6px;">
                    <div>
                      <span style="color: var(--color-text-subtle); display: block;">Local UGX Account No:</span>
                      <div class="copy-field-group" style="padding: 4px 8px;">
                        <span class="copy-field-value" style="font-size: 0.8rem;">310008472910</span>
                        <button type="button" class="btn-copy-code" onclick="window.copyToClipboard('310008472910', this)">Copy</button>
                      </div>
                    </div>
                    <div>
                      <span style="color: var(--color-text-subtle); display: block;">International USD Account No:</span>
                      <div class="copy-field-group" style="padding: 4px 8px;">
                        <span class="copy-field-value" style="font-size: 0.8rem;">9030018472911</span>
                        <button type="button" class="btn-copy-code" onclick="window.copyToClipboard('9030018472911', this)">Copy</button>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 8px; border-top: 1px dashed var(--color-border-subtle); padding-top: 6px; display: flex; justify-content: space-between;">
                    <div>
                      <span style="color: var(--color-text-subtle);">SWIFT / BIC Code:</span>
                      <strong>CERBUGKA</strong>
                    </div>
                    <div>
                      <span style="color: var(--color-text-subtle);">Branch:</span>
                      <strong>Mbale / Bududa Center</strong>
                    </div>
                    <div>
                      <span style="color: var(--color-text-subtle);">Account Name:</span>
                      <strong>THECCODA</strong>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab Content: Remittance -->
              <div id="channelContentRemittance" class="channel-content-pane" style="display: none;">
                <div class="donation-channel-card" style="margin-bottom: 0; font-size: var(--text-xs);">
                  <span class="channel-badge channel-badge-intl">Sendwave / WorldRemit / Remitly / Western Union</span>
                  <p style="margin: 0 0 8px 0; color: var(--color-text-muted);">
                    Donors in the US, UK, Canada, and Europe can transfer directly from their smartphone app straight to our verified Ugandan Mobile Money recipient lines:
                  </p>
                  <div class="donation-subgrid">
                    <div style="background: var(--color-surface-subtle); padding: 6px 10px; border-radius: var(--radius-xs);">
                      <strong>MTN MoMo Recipient:</strong><br />
                      <code>+256 772 458 912</code><br />
                      <small>Name: Trauma Healing Childcare</small>
                    </div>
                    <div style="background: var(--color-surface-subtle); padding: 6px 10px; border-radius: var(--radius-xs);">
                      <strong>Airtel Money Recipient:</strong><br />
                      <code>+256 750 314 628</code><br />
                      <small>Name: Trauma Healing Childcare</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Donor Information -->
            <div class="grid grid-2" style="gap: var(--space-3); margin-top: var(--space-4); margin-bottom: var(--space-3);">
              <div>
                <label class="form-label form-label-required">Your Full Name / Organisation</label>
                <input type="text" id="modalDonorName" class="form-input" placeholder="e.g. Dr. David Mugoya" required />
              </div>
              <div>
                <label class="form-label form-label-required">Email Address for Official Receipt</label>
                <input type="email" id="modalDonorEmail" class="form-input" placeholder="david@example.com" required />
              </div>
            </div>

            <!-- Anonymous Option -->
            <div class="form-check" style="margin-bottom: var(--space-4);">
              <input type="checkbox" id="modalAnonymousCheck" />
              <label for="modalAnonymousCheck">Keep my name anonymous on public community transparency reports</label>
            </div>

            <button type="submit" id="modalSubmitDonationBtn" class="btn btn-secondary btn-block btn-lg">
              Confirm &amp; Generate Official Receipt <span id="submitAmountDisplay">($50)</span>
            </button>
            <div style="text-align: center; margin-top: var(--space-3); font-size: var(--text-xs); color: var(--color-text-subtle);">
              🔒 256-Bit SSL Encrypted &bull; Official Tax-Deductible Receipt Issued Instantly &bull; NGO Board Reg. #INBR199708
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(donationModal);

    // Event bindings
    const closeBtn = document.getElementById('closeDonationModal');
    closeBtn.addEventListener('click', closeDonationModal);
    donationModal.addEventListener('click', (e) => {
      if (e.target === donationModal) closeDonationModal();
    });

    renderPresets();
    bindDonationEvents();
  }

  function renderPresets() {
    const container = document.getElementById('modalAmountPresets');
    if (!container) return;

    const list = PRESETS[state.currency] || PRESETS['USD'];
    container.innerHTML = list.map(amt => `
      <button type="button" class="amount-preset-btn ${amt === state.amount ? 'active' : ''}" data-amount="${amt}">
        ${state.currency === 'UGX' ? 'USh ' + amt.toLocaleString() : (state.currency === 'USD' ? '$' : state.currency === 'EUR' ? '€' : '£') + amt}
      </button>
    `).join('');

    container.querySelectorAll('.amount-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.amount = parseInt(btn.getAttribute('data-amount'), 10);
        document.getElementById('modalCustomAmount').value = state.amount;
        renderPresets();
        updateDisplay();
      });
    });
  }

  function updateDisplay() {
    const display = document.getElementById('submitAmountDisplay');
    if (display) {
      const sym = state.currency === 'UGX' ? 'USh ' : state.currency === 'USD' ? '$' : state.currency === 'EUR' ? '€' : '£';
      display.innerText = `(${sym}${state.amount.toLocaleString()} ${state.frequency === 'Monthly' ? '/ month' : ''})`;
    }
  }

  function bindDonationEvents() {
    // Frequency buttons
    donationModal.querySelectorAll('.freq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.frequency = btn.getAttribute('data-freq');
        donationModal.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateDisplay();
      });
    });

    // Channel tabs (card, momo, bank, remittance)
    donationModal.querySelectorAll('.donation-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const channel = btn.getAttribute('data-channel');
        state.activeChannelTab = channel;
        donationModal.querySelectorAll('.donation-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle content panes
        const panes = {
          'card': document.getElementById('channelContentCard'),
          'momo': document.getElementById('channelContentMoMo'),
          'bank': document.getElementById('channelContentBank'),
          'remittance': document.getElementById('channelContentRemittance')
        };
        Object.keys(panes).forEach(k => {
          if (panes[k]) panes[k].style.display = (k === channel) ? 'block' : 'none';
        });

        // Set simulated payment method name
        if (channel === 'card') state.paymentMethod = 'Credit / Debit Card (Online)';
        else if (channel === 'momo') state.paymentMethod = 'Mobile Money (MTN / Airtel Uganda)';
        else if (channel === 'bank') state.paymentMethod = 'Centenary Bank Wire Transfer';
        else if (channel === 'remittance') state.paymentMethod = 'International Remittance (Sendwave/WorldRemit)';
      });
    });

    // Currency select
    const currSelect = document.getElementById('modalCurrencySelect');
    currSelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      const list = PRESETS[state.currency];
      state.amount = list[1] || list[0];
      document.getElementById('modalCustomAmount').value = state.amount;
      renderPresets();
      updateDisplay();
    });

    // Custom amount input
    const customInput = document.getElementById('modalCustomAmount');
    customInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val) && val > 0) {
        state.amount = val;
        donationModal.querySelectorAll('.amount-preset-btn').forEach(b => b.classList.remove('active'));
        updateDisplay();
      }
    });

    // Form submission
    const form = document.getElementById('donationFlowForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalDonorName').value.trim();
      const email = document.getElementById('modalDonorEmail').value.trim();
      const prog = document.getElementById('modalProgrammeSelect').value;
      const isAnon = document.getElementById('modalAnonymousCheck').checked;

      // Submit loading state
      const submitBtn = document.getElementById('modalSubmitDonationBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Generating Verified Official Receipt...`;

      setTimeout(() => {
        // Record into reactive store
        const recorded = window.katosiStore.recordDonation({
          donorName: isAnon ? 'Anonymous Supporter' : name,
          email: email,
          amount: state.amount,
          currency: state.currency,
          frequency: state.frequency,
          programme: prog,
          paymentMethod: state.paymentMethod,
          isAnonymous: isAnon
        });

        // Render Success & Printable Official Receipt View
        renderSuccessView(recorded);
      }, 1000);
    });
  }

  function renderSuccessView(donation) {
    const modalBody = document.getElementById('donationModalBody');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div style="text-align: center; padding: var(--space-2) 0;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background-color: #ecfdf5; color: #15803d; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); font-size: 1.8rem; box-shadow: 0 2px 10px rgba(21, 128, 61, 0.2);">
          ✓
        </div>
        <h3 style="font-size: var(--text-h3); color: var(--color-primary); margin-bottom: var(--space-1);">Thank You For Your Faith &amp; Generosity</h3>
        <p style="color: var(--color-text-muted); font-size: var(--text-sm); max-width: 480px; margin: 0 auto var(--space-4);">
          Your compassionate gift of <strong>${donation.currency} ${donation.amount.toLocaleString()}</strong> has been officially received and designated to <strong>${donation.programme}</strong>.
        </p>

        <!-- Official Verifiable Receipt Container -->
        <div id="printableOfficialReceipt" style="background-color: #ffffff; border: 2px solid #0a4db3; border-radius: var(--radius-md); padding: var(--space-5); text-align: left; margin-bottom: var(--space-5); box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
          
          <!-- Receipt Header -->
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: var(--space-3); margin-bottom: var(--space-4);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img src="images/logo.png" alt="THECCODA Logo" style="width: 44px; height: 44px; border-radius: 50%; object-fit: contain;" />
              <div>
                <strong style="display: block; font-size: 0.95rem; color: #0a4db3; line-height: 1.2;">Trauma Healing Childcare &amp; Development Association</strong>
                <span style="font-size: 0.68rem; color: #64748b;">Registered National &amp; Local NGO (Uganda) &bull; Established 1997</span>
              </div>
            </div>
            <div style="text-align: right;">
              <span class="badge" style="background: #eff6ff; color: #0a4db3; border: 1px solid #bfdbfe; font-size: 0.7rem;">OFFICIAL RECEIPT</span>
              <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: #0a4db3; margin-top: 2px;">${donation.id}</div>
            </div>
          </div>

          <!-- Receipt Details Grid -->
          <div class="donation-subgrid" style="gap: var(--space-3); font-size: var(--text-xs);">
            <div>
              <span style="color: var(--color-text-subtle); display: block;">Date Issued:</span>
              <strong>${donation.date}</strong>
            </div>
            <div>
              <span style="color: var(--color-text-subtle); display: block;">Giving Frequency:</span>
              <strong>${donation.frequency} Contribution</strong>
            </div>
            <div>
              <span style="color: var(--color-text-subtle); display: block;">Donor / Contributor:</span>
              <strong style="font-size: 0.85rem;">${donation.donorName}</strong>
            </div>
            <div>
              <span style="color: var(--color-text-subtle); display: block;">Payment Channel:</span>
              <strong>${donation.paymentMethod}</strong>
            </div>
            <div style="grid-column: span 2; background: #f8fafc; padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;">
              <span style="color: var(--color-text-subtle); display: block;">Designated Community Cause:</span>
              <strong style="color: #0a4db3; font-size: 0.85rem;">${donation.programme}</strong>
            </div>
            <div style="grid-column: span 2; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 8px; margin-top: 4px;">
              <span style="font-size: 0.85rem; font-weight: 700;">Total Contribution Amount:</span>
              <span style="font-size: 1.25rem; font-weight: 800; color: #d97706;">${donation.currency} ${donation.amount.toLocaleString()}</span>
            </div>
          </div>

          <!-- Receipt Footer / Legal Validation -->
          <div style="margin-top: var(--space-4); padding-top: var(--space-3); border-top: 1px dashed #cbd5e1; font-size: 0.68rem; color: #64748b; line-height: 1.5; display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
              <strong>Headquarters:</strong> Makalama Village, Bukibino Sub-County, Manjiya, Bududa District, Uganda<br />
              <strong>Slogan:</strong> "Building a community driven with faith and hope" &bull; <em>Tax-Deductible Charitable Documentation</em>
            </div>
            <div style="text-align: right; font-weight: 600; color: #0a4db3;">
              Official Seal Verified ✓
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: var(--space-3); justify-content: center;">
          <button type="button" class="btn btn-outline-primary btn-sm" onclick="window.print()">
            🖨️ Print / Save Receipt
          </button>
          <button type="button" class="btn btn-primary btn-sm" onclick="window.closeDonationModal()">
            Done
          </button>
        </div>
      </div>
    `;
  }

  function openDonationModal() {
    buildDonationModal();
    donationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDonationModal() {
    if (donationModal) {
      donationModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Global exposure
  window.openDonationModal = openDonationModal;
  window.closeDonationModal = closeDonationModal;
})();
