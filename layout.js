(function () {
  var GOOGLE_CLIENT_ID = '391522755035-1gfti97mp8alko87gtmlagh83qnqb3ic.apps.googleusercontent.com';

  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
    filter: '<line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="15" cy="12" r="2"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="11" cy="17" r="2"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
    star: '<path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6-5.9-3.3-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/>',
    mapPin: '<path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z"/><circle cx="12" cy="9.5" r="2.3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
    users: '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 21v-1.2A5.8 5.8 0 0 1 8.3 14h.4a5.8 5.8 0 0 1 5.8 5.8V21"/><circle cx="17" cy="8.5" r="2.4"/><path d="M15 14.2c2.8.3 5 2.6 5 5.6V21"/>',
    clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/>',
    check: '<polyline points="4 12 9.5 17.5 20 6"/>',
    x: '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>',
    chevronDown: '<polyline points="5 8 12 15 19 8"/>',
    chevronRight: '<polyline points="9 5 16 12 9 19"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/>',
    share: '<circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><line x1="8" y1="10.8" x2="16" y2="7.2"/><line x1="8" y1="13.2" x2="16" y2="16.8"/>',
    compare: '<rect x="4" y="4" width="6" height="16" rx="1"/><rect x="14" y="9" width="6" height="11" rx="1"/>',
    arrowRight: '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/>',
    shield: '<path d="M12 2.5l8 3.2v6c0 5.2-3.4 8.7-8 9.8-4.6-1.1-8-4.6-8-9.8v-6z"/><polyline points="8.5 12 11 14.5 15.5 9.5"/>',
    award: '<circle cx="12" cy="8.5" r="5.5"/><polyline points="8.5 13.5 7 21 12 18.5 17 21 15.5 13.5"/>',
    headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19v1a3 3 0 0 1-3 3h-3"/>',
    compass: '<circle cx="12" cy="12" r="9"/><polygon points="15 9 13 13 9 15 11 11"/>',
    mountain: '<path d="M3 19h18L14.5 7l-3 5-2-2.5z"/>',
    city: '<rect x="3" y="10" width="6" height="11"/><rect x="10" y="5" width="6" height="16"/><rect x="17" y="12" width="4" height="9"/>',
    wave: '<path d="M2 12c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"/><path d="M2 17c2-2.5 4-2.5 6 0s4 2.5 6 0 4-2.5 6 0"/>',
    grape: '<circle cx="9" cy="8" r="2.1"/><circle cx="13" cy="8" r="2.1"/><circle cx="7" cy="12" r="2.1"/><circle cx="11" cy="12" r="2.1"/><circle cx="15" cy="12" r="2.1"/><circle cx="9" cy="16" r="2.1"/><circle cx="13" cy="16" r="2.1"/><path d="M11 6V3"/><path d="M11 3c1.5-1 3-1 4 0"/>',
    leaf: '<path d="M4 20c0-9 6-15 16-15 0 10-6 16-16 15z"/><path d="M4 20c3-3 6-6 12-11"/>',
    peak: '<path d="M2 20h20L16.5 6 12 13 9 9z"/><path d="M9 9l1.6 2.2" opacity="0.5"/>',
    castle: '<path d="M4 21V10l2-2V6h2v2l2-2V4h4v2l2-2v2l2 2v11z"/><line x1="4" y1="14" x2="20" y2="14"/>',
    canyon: '<path d="M3 20l4-10 3 6 3-9 3 7 4-9v15z"/>',
    path: '<circle cx="4" cy="19" r="1.3"/><circle cx="10" cy="14" r="1.3"/><circle cx="9" cy="7" r="1.3"/><circle cx="17" cy="5" r="1.3"/><path d="M4 19l6-5-1-7 8-2" stroke-dasharray="2 3"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l2-3h4l2 3"/><circle cx="12" cy="13.5" r="3.5"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    edit: '<path d="M4 20l.8-3.6L16 5.2l3.4 3.4L8.2 20H4z"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
    facebook: '<path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.1H8v3h2.6v7z"/>',
    instagram: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.6" cy="7.4" r="0.9" fill="currentColor"/>',
    youtube: '<rect x="3" y="6" width="18" height="12" rx="3"/><polygon points="10 9.5 10 14.5 15 12" fill="currentColor"/>',
    whatsapp: '<path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3z"/><path d="M8.5 8.5c.3 2.6 2.4 4.7 5 5l1-1.3c.2-.3.6-.4.9-.2l1.6.9c.3.2.4.6.2.9-.7 1.2-2 1.9-3.3 1.6-3-.6-5.7-3.3-6.3-6.3-.3-1.3.4-2.6 1.6-3.3.3-.2.7-.1.9.2l.9 1.6c.2.3.1.7-.2.9z"/>'
  };

  function icon(name, cls) {
    var body = ICONS[name] || '';
    return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
  }

  function phMedia(theme, iconName, label, extraCls) {
    return '<div class="ph-media ' + theme + ' ' + (extraCls || '') + '">' + icon(iconName) + (label ? '<span class="ph-label" style="position:absolute;bottom:10px;right:12px;left:12px;z-index:1;font-size:12px;font-weight:700;text-align:center;opacity:0.85">' + label + '</span>' : '') + '</div>';
  }

  function starsHtml(rating) {
    var full = Math.round(rating);
    var out = '<span class="stars">';
    for (var i = 0; i < 5; i++) out += icon('star', i < full ? '' : 'muted-star');
    out += '</span>';
    return out;
  }

  function formatGel(n) {
    return Math.round(n).toLocaleString('ka-GE') + ' ₾';
  }

  function toast(msg) {
    var wrap = document.querySelector('.toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'toast-wrap';
      document.body.appendChild(wrap);
    }
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    wrap.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('show'); });
    setTimeout(function () {
      el.classList.remove('show');
      setTimeout(function () { el.remove(); }, 250);
    }, 2400);
  }

  var NAV_LINKS = [
    { page: 'home', href: 'index.html', label: 'მთავარი' },
    { page: 'tours', href: 'tours.html', label: 'ტურები' },
    { page: 'destinations', href: 'destinations.html', label: 'დანიშნულებები' },
    { page: 'blog', href: 'blog.html', label: 'ბლოგი' },
    { page: 'about', href: 'about.html', label: 'ჩვენ შესახებ' },
    { page: 'contact', href: 'contact.html', label: 'კონტაქტი' }
  ];
  var NAV_SUB = [
    { page: 'faq', href: 'faq.html', label: 'კითხვები' },
    { page: 'compare', href: 'compare.html', label: 'შედარება' },
    { page: 'support', href: 'support.html', label: 'მხარდაჭერა' }
  ];

  function headerHtml(currentPage) {
    var links = NAV_LINKS.map(function (l) {
      return '<a class="nav-link' + (l.page === currentPage ? ' current' : '') + '" href="' + l.href + '">' + l.label + '</a>';
    }).join('');
    var sub = '<div class="nav-sub-row">' + NAV_SUB.map(function (l) {
      return '<a class="nav-link' + (l.page === currentPage ? ' current' : '') + '" href="' + l.href + '">' + l.label + '</a>';
    }).join('') + '</div>';

    return '' +
      '<div class="logo">' +
        '<a href="index.html" style="display:flex;align-items:center;gap:10px;">' +
          '<span class="logo-mark">' + icon('mountain', 'sm') + '</span>' +
          '<span class="logo-text display">Happy<b>Trip</b></span>' +
        '</a>' +
      '</div>' +
      '<div class="header-right">' +
        '<div class="nav-links" id="navLinks">' +
          '<a class="nav-link admin-link" href="admin.html">' + icon('lock') + ' ადმინ პანელი</a>' +
          links +
          '<div class="nav-divider"></div>' +
          sub +
          '<div class="nav-divider"></div>' +
          '<a class="nav-link" href="profile.html?tab=wishlist" id="wishNavLink">' + icon('heart') + ' რჩეულები <span class="badge" id="wishCount" style="margin-right:auto"></span></a>' +
          '<a class="call-btn" href="tel:+995500055993">' + icon('phone') + ' +995 500 05 59 93</a>' +
        '</div>' +
        '<div id="authSlot"></div>' +
        '<button class="nav-toggle" id="navToggle" type="button" aria-label="მენიუ" aria-expanded="false">' +
          '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>' +
        '</button>' +
      '</div>';
  }

  function footerHtml() {
    var year = new Date().getFullYear();
    return '' +
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<div class="logo"><span class="logo-mark">' + icon('mountain', 'sm') + '</span><span class="logo-text display">Happy<b>Trip</b></span></div>' +
            '<p>საქართველოს აღმოჩენა ადგილობრივ გიდებთან ერთად — მთიდან ზღვამდე, ისტორიიდან თანამედროვეობამდე.</p>' +
            '<div class="footer-social">' +
              '<a href="#" aria-label="Facebook">' + icon('facebook') + '</a>' +
              '<a href="#" aria-label="Instagram">' + icon('instagram') + '</a>' +
              '<a href="#" aria-label="YouTube">' + icon('youtube') + '</a>' +
              '<a href="#" aria-label="WhatsApp">' + icon('whatsapp') + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col"><h4>მოგზაურობა</h4>' +
            '<a href="tours.html">ტურები</a><a href="destinations.html">დანიშნულებები</a>' +
            '<a href="compare.html">შედარება</a><a href="blog.html">ბლოგი</a>' +
          '</div>' +
          '<div class="footer-col"><h4>კომპანია</h4>' +
            '<a href="about.html">ჩვენ შესახებ</a><a href="contact.html">კონტაქტი</a>' +
            '<a href="faq.html">ხშირი კითხვები</a><a href="support.html">მხარდაჭერა</a>' +
          '</div>' +
          '<div class="footer-col"><h4>სამართლებრივი</h4>' +
            '<a href="terms.html">წესები და პირობები</a><a href="privacy.html">კონფიდენციალურობა</a>' +
            '<a href="cancellation.html">გაუქმების პოლიტიკა</a>' +
          '</div>' +
          '<div class="footer-col footer-newsletter"><h4>სიახლეები</h4>' +
            '<p style="margin-bottom:12px">ახალი მარშრუტები და შეთავაზებები — პირდაპირ ფოსტაში.</p>' +
            '<form id="newsletterForm"><input type="email" placeholder="თქვენი ელფოსტა" required /><button class="btn btn-primary btn-sm" type="submit">გამოწერა</button></form>' +
            '<p class="ok-msg" id="newsletterOk">გმადლობთ გამოწერისთვის!</p>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>&copy; ' + year + ' HappyTrip. ყველა უფლება დაცულია.</span>' +
          '<div class="footer-legal"><a href="terms.html">პირობები</a><a href="privacy.html">კონფიდენციალურობა</a><a href="sitemap.html">საიტის რუკა</a></div>' +
        '</div>' +
      '</div>';
  }

  function renderAuthSlot() {
    var slot = document.getElementById('authSlot');
    if (!slot) return;
    var profile = window.HT_STORE.getProfile();
    if (profile) {
      var initial = (profile.name || '?').trim().charAt(0).toUpperCase();
      var avatarInner = profile.picture
        ? '<img src="' + profile.picture + '" alt="" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:cover;display:block" />'
        : '<span class="auth-avatar-fallback">' + initial + '</span>';
      slot.innerHTML = '<a href="profile.html" class="auth-chip auth-avatar-only" title="' + profile.name + '" aria-label="' + profile.name + '">' + avatarInner + '</a>';
    } else {
      slot.innerHTML = '<button type="button" class="auth-chip auth-login-btn" id="htLoginBtn">შესვლა</button>';
      var btn = document.getElementById('htLoginBtn');
      if (btn) btn.addEventListener('click', openLoginModal);
    }
  }

  function openLoginModal() {
    var overlay = document.getElementById('htLoginModal');
    if (overlay) { overlay.classList.add('open'); renderGoogleButton(); return; }
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'htLoginModal';
    overlay.innerHTML =
      '<div class="modal-box">' +
        '<h3>მოგესალმებით!</h3>' +
        '<p class="hint">შედით Google ანგარიშით, ან შეიყვანეთ სახელი ხელით — ორივე ინახება მხოლოდ ამ ბრაუზერში, არა სერვერზე.</p>' +
        '<div id="googleBtnSlot" style="display:flex;justify-content:center;min-height:44px;margin-bottom:16px"></div>' +
        '<div class="divider" style="margin:0 0 16px"></div>' +
        '<div class="field"><label for="htLoginName">სახელი (ხელით)</label><input type="text" id="htLoginName" placeholder="მაგ. ნინო კარელი" /></div>' +
        '<div style="display:flex;gap:8px;margin-top:6px">' +
          '<button class="btn btn-ghost" type="button" id="htLoginCancel" style="flex:1">გაუქმება</button>' +
          '<button class="btn btn-primary" type="button" id="htLoginSave" style="flex:1">შენახვა</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) overlay.classList.remove('open'); });
    document.getElementById('htLoginCancel').addEventListener('click', function () { overlay.classList.remove('open'); });
    document.getElementById('htLoginSave').addEventListener('click', function () {
      var input = document.getElementById('htLoginName');
      var name = input.value.trim();
      if (!name) { input.focus(); return; }
      window.HT_STORE.setProfile({ name: name, joinedAt: new Date().toISOString() });
      overlay.classList.remove('open');
      renderAuthSlot();
      updateWishCount();
      toast('კეთილი იყოს თქვენი მობრძანება, ' + name + '!');
    });
    overlay.classList.add('open');
    renderGoogleButton();
  }

  function loadGoogleScript(cb) {
    if (window.google && window.google.accounts && window.google.accounts.id) { cb(); return; }
    var existing = document.getElementById('googleGsiScript');
    if (existing) { existing.addEventListener('load', cb); return; }
    var s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true; s.defer = true; s.id = 'googleGsiScript';
    s.onload = cb;
    document.head.appendChild(s);
  }

  function decodeJwt(token) {
    try {
      var payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      var json = decodeURIComponent(atob(payload).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(json);
    } catch (e) { return null; }
  }

  function handleGoogleCredential(response) {
    var data = decodeJwt(response.credential);
    if (!data) { toast('Google შესვლა ვერ მოხერხდა'); return; }
    window.HT_STORE.setProfile({
      name: data.name || data.email, email: data.email, picture: data.picture,
      provider: 'google', joinedAt: new Date().toISOString()
    });
    var overlay = document.getElementById('htLoginModal');
    if (overlay) overlay.classList.remove('open');
    renderAuthSlot();
    updateWishCount();
    toast('კეთილი იყოს თქვენი მობრძანება, ' + (data.name || '') + '!');

    // Also establish a real Supabase session from the same Google credential,
    // so admin.html's writes carry a genuine auth.jwt() the RLS policies can check
    // (the decode above is purely local/decorative and proves nothing server-side).
    if (window.HT_DATA && window.HT_DATA.getSupabaseClient) {
      window.HT_DATA.getSupabaseClient().then(function (client) {
        return client.auth.signInWithIdToken({ provider: 'google', token: response.credential });
      }).then(function (res) {
        if (res.error) console.warn('Supabase sign-in failed:', res.error.message);
      }).catch(function (err) { console.warn('Supabase sign-in failed:', err); });
    }
  }

  function renderGoogleButton() {
    loadGoogleScript(function () {
      var slot = document.getElementById('googleBtnSlot');
      if (!slot) return;
      slot.innerHTML = '';
      try {
        google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCredential });
        google.accounts.id.renderButton(slot, { theme: 'outline', size: 'large', shape: 'pill', text: 'continue_with', locale: 'ka' });
      } catch (e) {
        slot.innerHTML = '<p style="font-size:12.5px;color:var(--slate)">Google შესვლა ამჟამად მიუწვდომელია</p>';
      }
    });
  }

  function updateWishCount() {
    var el = document.getElementById('wishCount');
    if (!el) return;
    var n = window.HT_STORE.getWishlist().length;
    el.textContent = n > 0 ? n : '';
    el.style.display = n > 0 ? 'inline-flex' : 'none';
  }

  function wireHeader() {
    var navToggleBtn = document.getElementById('navToggle');
    var navLinksEl = document.getElementById('navLinks');
    if (navToggleBtn && navLinksEl) {
      navToggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = navLinksEl.classList.toggle('open');
        navToggleBtn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function (e) {
        if (navLinksEl.classList.contains('open') && !navLinksEl.contains(e.target) && e.target !== navToggleBtn) {
          navLinksEl.classList.remove('open');
          navToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
    renderAuthSlot();
    updateWishCount();
  }

  function wireFooter() {
    var form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input.value) return;
      window.HT_STORE.subscribeNewsletter(input.value.trim());
      document.getElementById('newsletterOk').style.display = 'block';
      form.reset();
    });
  }

  function wireBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'ზემოთ დაბრუნება');
    btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="6 11 12 5 18 11"/></svg>';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 500);
    });
  }

  function renderTourCard(t, opts) {
    opts = opts || {};
    var dest = window.HT_DATA.getDestinationById(t.destinationId);
    var price = window.HT_DATA.finalPrice(t, 'basic');
    var wished = window.HT_STORE.isWishlisted(t.id);
    var comparing = window.HT_STORE.isComparing(t.id);
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
      '<a href="tour.html?slug=' + t.slug + '" style="display:block">' +
      '<div class="card-media">' + phMedia(t.theme, t.icon) +
        '<div class="card-badges">' + (t.featured ? '<span class="badge badge-primary">რჩეული</span>' : '') + (t.discount ? '<span class="badge badge-gold">-' + t.discount + '%</span>' : '') + '</div>' +
        '<button class="card-wish' + (wished ? ' active' : '') + '" data-wish="' + t.id + '" aria-label="რჩეულებში დამატება">' + icon('heart') + '</button>' +
      '</div></a>' +
      '<div class="card-body">' +
        '<div class="card-loc">' + icon('mapPin') + ' ' + (dest ? dest.name : '') + '</div>' +
        '<h3 class="card-title"><a href="tour.html?slug=' + t.slug + '">' + t.title + '</a></h3>' +
        '<div class="card-meta"><span>' + t.durationDays + ' დღე</span><span>&middot;</span><span>' + t.difficultyLabel + '</span>' + (t.reviewCount ? '<span>&middot;</span><span class="card-rating">' + icon('star') + ' ' + t.rating + ' (' + t.reviewCount + ')</span>' : '') + '</div>' +
        (opts.showCompare ? '<label class="card-compare-check"><input type="checkbox" data-compare="' + t.id + '"' + (comparing ? ' checked' : '') + ' /> შედარებაში დამატება</label>' : '') +
        '<div class="card-foot"><div class="card-price">' + (t.discount ? '<span class="was">' + formatGel(t.priceBasic) + '</span>' : '') + '<b>' + formatGel(price) + '</b><span>1 პიროვნებაზე</span></div><a class="btn btn-dark btn-sm" href="tour.html?slug=' + t.slug + '">ნახვა</a></div>' +
      '</div>';
    card.querySelector('[data-wish]').addEventListener('click', function (e) {
      e.preventDefault();
      var active = window.HT_STORE.toggleWishlist(t.id);
      this.classList.toggle('active', active);
      updateWishCount();
      toast(active ? 'დაემატა რჩეულებში' : 'ამოშალა რჩეულებიდან');
      if (opts.onWishChange) opts.onWishChange();
    });
    var compareBox = card.querySelector('[data-compare]');
    if (compareBox) {
      compareBox.addEventListener('change', function (e) {
        e.stopPropagation();
        var res = window.HT_STORE.toggleCompare(t.id);
        if (res.full) { this.checked = false; toast('შედარებაში მაქსიმუმ 3 ტურის დამატებაა შესაძლებელი'); return; }
        toast(res.added ? 'დაემატა შედარებაში' : 'ამოშალა შედარებიდან');
        if (opts.onCompareChange) opts.onCompareChange();
      });
      compareBox.addEventListener('click', function (e) { e.stopPropagation(); });
    }
    return card;
  }

  function initLayout() {
    var page = document.body.getAttribute('data-page') || '';
    var headerEl = document.getElementById('site-header');
    var footerEl = document.getElementById('site-footer');
    if (headerEl) { headerEl.innerHTML = headerHtml(page); }
    if (footerEl) { footerEl.innerHTML = footerHtml(); }
    wireHeader();
    wireFooter();
    wireBackToTop();
  }

  window.HT = {
    icon: icon, phMedia: phMedia, starsHtml: starsHtml, formatGel: formatGel, toast: toast,
    renderAuthSlot: renderAuthSlot, updateWishCount: updateWishCount, openLoginModal: openLoginModal,
    tourCard: renderTourCard
  };

  document.addEventListener('DOMContentLoaded', initLayout);
})();
