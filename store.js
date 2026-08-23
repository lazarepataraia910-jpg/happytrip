(function () {
  var K = {
    wishlist: 'ht_wishlist', compare: 'ht_compare', bookings: 'ht_bookings',
    profile: 'ht_profile', theme: 'ht_theme', newsletter: 'ht_newsletter',
    toursAdded: 'ht_admin_tours_added', toursEdited: 'ht_admin_tours_edited', toursDeleted: 'ht_admin_tours_deleted',
    adminSession: 'ht_admin_session'
  };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
  function genRef() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var s = 'HT-';
    for (var i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }

  var HT_STORE = {
    getWishlist: function () { return read(K.wishlist, []); },
    isWishlisted: function (tourId) { return HT_STORE.getWishlist().indexOf(tourId) !== -1; },
    toggleWishlist: function (tourId) {
      var list = HT_STORE.getWishlist();
      var idx = list.indexOf(tourId);
      if (idx === -1) { list.push(tourId); } else { list.splice(idx, 1); }
      write(K.wishlist, list);
      return idx === -1;
    },

    getCompareList: function () { return read(K.compare, []); },
    isComparing: function (tourId) { return HT_STORE.getCompareList().indexOf(tourId) !== -1; },
    toggleCompare: function (tourId) {
      var list = HT_STORE.getCompareList();
      var idx = list.indexOf(tourId);
      if (idx !== -1) { list.splice(idx, 1); write(K.compare, list); return { added: false, full: false }; }
      if (list.length >= 3) return { added: false, full: true };
      list.push(tourId);
      write(K.compare, list);
      return { added: true, full: false };
    },
    clearCompare: function () { write(K.compare, []); },

    getBookings: function () { return read(K.bookings, []); },
    getBookingByRef: function (ref) {
      var list = HT_STORE.getBookings();
      for (var i = 0; i < list.length; i++) if (list[i].reference === ref) return list[i];
      return null;
    },
    saveBooking: function (booking) {
      var list = HT_STORE.getBookings();
      booking.reference = genRef();
      booking.createdAt = new Date().toISOString();
      booking.status = 'დადასტურებული';
      list.unshift(booking);
      write(K.bookings, list);
      return booking;
    },
    cancelBooking: function (ref) {
      var list = HT_STORE.getBookings();
      for (var i = 0; i < list.length; i++) {
        if (list[i].reference === ref) { list[i].status = 'გაუქმებული'; write(K.bookings, list); return true; }
      }
      return false;
    },

    getProfile: function () { return read(K.profile, null); },
    setProfile: function (profile) { write(K.profile, profile); },
    clearProfile: function () { try { localStorage.removeItem(K.profile); } catch (e) {} },

    getTheme: function () { return read(K.theme, 'light'); },
    setTheme: function (theme) {
      write(K.theme, theme);
      if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');
    },

    subscribeNewsletter: function (email) {
      var list = read(K.newsletter, []);
      if (list.indexOf(email) === -1) list.push(email);
      write(K.newsletter, list);
    },

    updateBookingStatus: function (ref, status) {
      var list = HT_STORE.getBookings();
      for (var i = 0; i < list.length; i++) {
        if (list[i].reference === ref) { list[i].status = status; write(K.bookings, list); return true; }
      }
      return false;
    },

    getAddedTours: function () { return read(K.toursAdded, []); },
    addTour: function (tour) {
      var list = HT_STORE.getAddedTours();
      tour.id = 'custom-' + Date.now().toString(36);
      tour.custom = true;
      list.push(tour);
      write(K.toursAdded, list);
      return tour;
    },
    getTourEdits: function () { return read(K.toursEdited, {}); },
    setTourEdit: function (id, fields) {
      var edits = HT_STORE.getTourEdits();
      edits[id] = Object.assign({}, edits[id] || {}, fields);
      write(K.toursEdited, edits);
    },
    getDeletedTourIds: function () { return read(K.toursDeleted, []); },
    deleteTour: function (id) {
      var added = HT_STORE.getAddedTours();
      var idx = added.findIndex(function (t) { return t.id === id; });
      if (idx !== -1) { added.splice(idx, 1); write(K.toursAdded, added); return; }
      var deleted = HT_STORE.getDeletedTourIds();
      if (deleted.indexOf(id) === -1) { deleted.push(id); write(K.toursDeleted, deleted); }
    },

    isAdminSession: function () { return read(K.adminSession, false) === true; },
    setAdminSession: function (v) { write(K.adminSession, !!v); }
  };

  window.HT_STORE = HT_STORE;
})();
