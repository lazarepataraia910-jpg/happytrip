(function () {
  var K = {
    wishlist: 'ht_wishlist', compare: 'ht_compare', bookings: 'ht_bookings',
    profile: 'ht_profile', theme: 'ht_theme', newsletter: 'ht_newsletter'
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

  function idIndexOf(list, id) {
    var target = String(id);
    for (var i = 0; i < list.length; i++) if (String(list[i]) === target) return i;
    return -1;
  }

  var HT_STORE = {
    getWishlist: function () { return read(K.wishlist, []); },
    isWishlisted: function (tourId) { return idIndexOf(HT_STORE.getWishlist(), tourId) !== -1; },
    toggleWishlist: function (tourId) {
      var list = HT_STORE.getWishlist();
      var idx = idIndexOf(list, tourId);
      if (idx === -1) { list.push(tourId); } else { list.splice(idx, 1); }
      write(K.wishlist, list);
      return idx === -1;
    },

    getCompareList: function () { return read(K.compare, []); },
    isComparing: function (tourId) { return idIndexOf(HT_STORE.getCompareList(), tourId) !== -1; },
    toggleCompare: function (tourId) {
      var list = HT_STORE.getCompareList();
      var idx = idIndexOf(list, tourId);
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
    }
  };

  window.HT_STORE = HT_STORE;
})();
