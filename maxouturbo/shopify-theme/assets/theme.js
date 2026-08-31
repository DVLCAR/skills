(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var T = window.TMAX || { routes: {}, moneyFormat: "{{amount}} €", freeShip: 5000 };

  /* ---------- money ---------- */
  function formatMoney(cents) {
    if (typeof cents === "string") cents = cents.replace(".", "");
    var fmt = T.moneyFormat || "{{amount}} €";
    var re = /\{\{\s*(\w+)\s*\}\}/;
    function fwd(number, precision, thousands, decimal) {
      precision = precision == null ? 2 : precision; thousands = thousands || ","; decimal = decimal || ".";
      if (isNaN(number) || number == null) return "0";
      number = (number / 100).toFixed(precision);
      var parts = number.split("."),
        d = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
        c = parts[1] ? decimal + parts[1] : "";
      return d + c;
    }
    var m = fmt.match(re), val = "";
    var key = m ? m[1] : "amount";
    if (key === "amount") val = fwd(cents, 2);
    else if (key === "amount_no_decimals") val = fwd(cents, 0);
    else if (key === "amount_with_comma_separator") val = fwd(cents, 2, ".", ",");
    else if (key === "amount_no_decimals_with_comma_separator") val = fwd(cents, 0, ".", ",");
    else if (key === "amount_with_apostrophe_separator") val = fwd(cents, 2, "'", ".");
    else val = fwd(cents, 2);
    return fmt.replace(re, val);
  }

  /* ---------- toast ---------- */
  var toast = $("#toast"), toastMsg = $("#toastMsg"), tt;
  function showToast(msg) { if (!toast) return; toastMsg.textContent = msg; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("show"); }, 2200); }

  /* ---------- reveal ---------- */
  document.body.classList.add("rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else { $$(".reveal").forEach(function (el) { el.classList.add("in"); }); }

  /* ---------- header ---------- */
  var header = $("#header");
  if (header) { window.addEventListener("scroll", function () { header.classList.toggle("scrolled", window.scrollY > 6); }, { passive: true }); }

  /* mega menu */
  var mega = $("#mega"), megaBack = null, openMega = null;
  if (mega) {
    megaBack = document.createElement("div"); megaBack.className = "mega-back"; document.body.appendChild(megaBack);
    function showMega(name, toggle) {
      $$(".mega__panel", mega).forEach(function (p) { p.classList.toggle("show", p.getAttribute("data-panel") === name); });
      mega.classList.add("open"); megaBack.classList.add("show");
      $$(".nav__toggle").forEach(function (t) { t.setAttribute("aria-expanded", String(t === toggle)); });
      openMega = name;
    }
    function hideMega() { mega.classList.remove("open"); megaBack.classList.remove("show"); $$(".nav__toggle").forEach(function (t) { t.setAttribute("aria-expanded", "false"); }); openMega = null; }
    $$(".nav__toggle").forEach(function (t) { t.addEventListener("click", function (e) { e.stopPropagation(); var n = t.getAttribute("data-mega"); if (openMega === n) hideMega(); else showMega(n, t); }); });
    megaBack.addEventListener("click", hideMega);
    window.__hideMega = hideMega;
  }

  /* mobile drawer */
  var mobile = $("#mobile"), burger = $("#burger");
  function openMobile() { if (mobile) { mobile.classList.add("show"); document.body.classList.add("lock"); } }
  function closeMobile() { if (mobile) { mobile.classList.remove("show"); document.body.classList.remove("lock"); } }
  if (burger) burger.addEventListener("click", openMobile);
  var mClose = $("#mClose"); if (mClose) mClose.addEventListener("click", closeMobile);
  $$("[data-acc]").forEach(function (b) { b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); }); });

  /* ---------- cart drawer ---------- */
  var overlay = $("#overlay"), drawer = $("#drawer"), cartBtn = $("#cartBtn");
  var cc = $("#cartCount"), dItems = $("#dItems"), dCount = $("#dCount"), dSub = $("#dSub"), shipTxt = $("#shipTxt"), shipFill = $("#shipFill");
  function openCart() { if (!drawer) return; overlay.removeAttribute("hidden"); requestAnimationFrame(function () { overlay.classList.add("show"); }); drawer.classList.add("show"); drawer.setAttribute("aria-hidden", "false"); document.body.classList.add("lock"); }
  function closeCart() { if (!drawer) return; overlay.classList.remove("show"); drawer.classList.remove("show"); drawer.setAttribute("aria-hidden", "true"); document.body.classList.remove("lock"); setTimeout(function () { overlay.setAttribute("hidden", ""); }, 260); }
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  var dClose = $("#dClose"); if (dClose) dClose.addEventListener("click", closeCart);
  if (overlay) overlay.addEventListener("click", closeCart);

  function miniArt() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l3 3v5h-3M4 8v8h3M7 8V6h7v2"/><circle cx="9" cy="17" r="1.6"/><circle cx="16" cy="17" r="1.6"/></svg>'; }
  function renderCart(cart) {
    if (!drawer) return;
    var q = cart.item_count;
    if (cc) { cc.textContent = q; cc.classList.toggle("show", q > 0); cc.classList.remove("bump"); void cc.offsetWidth; if (q > 0) cc.classList.add("bump"); }
    if (dCount) dCount.textContent = q;
    if (!cart.items.length) { dItems.innerHTML = '<p class="drawer__empty">Ton panier est vide.</p>'; }
    else {
      dItems.innerHTML = cart.items.map(function (it, i) {
        var line = i + 1;
        var img = it.image ? '<img src="' + it.image.replace(/(\.[a-z]+)(\?|$)/i, "_120x$1$2") + '" alt="" loading="lazy">' : miniArt();
        var opt = (it.variant_title && it.variant_title.indexOf("Default") === -1) ? '<div class="ditem__opt">' + it.variant_title + '</div>' : "";
        return '<div class="ditem"><div class="ditem__img">' + img + '</div><div class="ditem__main"><div class="ditem__name">' + it.product_title + '</div>' + opt + '<div class="ditem__price">' + formatMoney(it.final_line_price) + '</div><div class="qty"><button type="button" data-line="' + line + '" data-qty="' + it.quantity + '" data-delta="-1" aria-label="Moins">−</button><span>' + it.quantity + '</span><button type="button" data-line="' + line + '" data-qty="' + it.quantity + '" data-delta="1" aria-label="Plus">+</button></div></div><button class="ditem__rm" type="button" data-line="' + line + '" data-qty="0">Retirer</button></div>';
      }).join("");
    }
    if (dSub) dSub.textContent = formatMoney(cart.total_price);
    if (shipFill) {
      var ratio = Math.min(cart.total_price / T.freeShip, 1);
      shipFill.style.transform = "scaleX(" + ratio + ")";
      if (shipTxt) shipTxt.innerHTML = cart.total_price >= T.freeShip ? "Livraison offerte débloquée ✓" : "Plus que <b>" + formatMoney(T.freeShip - cart.total_price) + "</b> pour la livraison offerte 🚚";
    }
  }
  function loadCart(cb) { fetch((T.routes.cart || "/cart") + ".js", { headers: { "Accept": "application/json" } }).then(function (r) { return r.json(); }).then(function (c) { renderCart(c); if (cb) cb(c); }).catch(function () {}); }
  function postJSON(url, body) { return fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(body) }).then(function (r) { return r.json(); }); }
  function addToCart(id, qty, name) {
    postJSON((T.routes.cart_add || "/cart/add") + ".js", { id: id, quantity: qty || 1 }).then(function (res) {
      if (res && res.status && res.status !== 200) { showToast(res.description || "Indisponible"); return; }
      loadCart(function () { openCart(); showToast((name || "Article") + " ajouté"); });
    }).catch(function () { showToast("Erreur, réessaie"); });
  }
  function changeLine(line, qty) { postJSON((T.routes.cart_change || "/cart/change") + ".js", { line: line, quantity: qty }).then(function (c) { renderCart(c); }).catch(function () {}); }
  if (dItems) dItems.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-line]") : null; if (!b) return;
    var line = parseInt(b.getAttribute("data-line"), 10);
    var to = b.hasAttribute("data-delta") ? (parseInt(b.getAttribute("data-qty"), 10) + parseInt(b.getAttribute("data-delta"), 10)) : parseInt(b.getAttribute("data-qty"), 10);
    changeLine(line, Math.max(0, to));
  });

  /* delegated quick-add on product cards */
  document.addEventListener("click", function (e) {
    var add = e.target.closest ? e.target.closest("[data-add]") : null;
    if (add && add.getAttribute("data-id")) { e.preventDefault(); addToCart(add.getAttribute("data-id"), 1, "Article"); }
  });

  /* product forms (product page + featured product) */
  $$(".js-product-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      var idField = form.querySelector('[name="id"]');
      if (!idField || !idField.value) return; // let it submit normally
      e.preventDefault();
      var qtyField = form.querySelector('[name="quantity"]');
      var qty = qtyField ? parseInt(qtyField.value, 10) || 1 : 1;
      var name = (form.closest(".product-info") && form.closest(".product-info").querySelector(".product-title")) || (form.closest(".feature__body") && form.closest(".feature__body").querySelector("h3"));
      addToCart(idField.value, qty, name ? name.textContent : "Article");
    });
  });

  /* product page: variant change updates price, thumbs, qty */
  var pVariant = $("[data-variant-select]");
  if (pVariant) {
    pVariant.addEventListener("change", function () {
      var opt = pVariant.options[pVariant.selectedIndex];
      var pNow = $("#pNow"), pWas = $("#pWas"), pPrice = $("#pPrice");
      if (pNow) pNow.textContent = formatMoney(opt.getAttribute("data-price"));
      var cmp = parseInt(opt.getAttribute("data-compare"), 10) || 0, price = parseInt(opt.getAttribute("data-price"), 10) || 0;
      if (pPrice) pPrice.classList.toggle("is-sale", cmp > price);
      if (pWas) { if (cmp > price) { pWas.textContent = formatMoney(cmp); pWas.style.display = ""; } else { pWas.style.display = "none"; } }
    });
  }
  $$(".pg-thumb").forEach(function (t) { t.addEventListener("click", function () { var main = $("#pgMain"); if (main) main.src = t.getAttribute("data-src"); }); });
  $$("[data-qty]").forEach(function (box) {
    var input = box.querySelector("[data-qval]"); if (!input) return;
    var minus = box.querySelector("[data-qminus]"), plus = box.querySelector("[data-qplus]");
    if (minus) minus.addEventListener("click", function () { input.value = Math.max(1, (parseInt(input.value, 10) || 1) - 1); });
    if (plus) plus.addEventListener("click", function () { input.value = (parseInt(input.value, 10) || 1) + 1; });
  });

  /* featured-products tabs */
  $$(".mtabs[data-tabgroup]").forEach(function (tabs) {
    var group = tabs.getAttribute("data-tabgroup");
    $$(".mtab", tabs).forEach(function (tab) {
      tab.addEventListener("click", function () {
        $$(".mtab", tabs).forEach(function (t) { t.setAttribute("aria-selected", "false"); });
        tab.setAttribute("aria-selected", "true");
        var target = tab.getAttribute("data-target");
        $$('[data-tabpanel^="' + group + '-"]').forEach(function (p) { p.hidden = (p.getAttribute("data-tabpanel") !== target); });
      });
    });
  });

  /* carousel arrows */
  $$("[data-scroll]").forEach(function (b) {
    b.addEventListener("click", function () {
      var sec = b.closest("section"); if (!sec) return;
      var sc = $$(".scroller", sec).filter(function (s) { return !s.hidden; })[0]; if (!sc) return;
      var card = sc.querySelector(".card");
      sc.scrollBy({ left: (card ? card.offsetWidth + 20 : 260) * parseInt(b.getAttribute("data-scroll"), 10), behavior: "smooth" });
    });
  });

  /* prépa builder */
  var parts = $("#parts");
  if (parts) {
    var disc = parseInt(parts.getAttribute("data-discount"), 10) || 0;
    function renderBuilder() {
      var sel = $$(".part.on", parts), raw = 0;
      sel.forEach(function (p) { raw += parseInt(p.getAttribute("data-price"), 10) || 0; });
      var save = Math.round(raw * disc / 100), total = raw - save;
      var bc = $("#bCount"), br = $("#bRaw"), bs = $("#bSave"), bt = $("#bTotal");
      if (bc) bc.textContent = sel.length + (sel.length > 1 ? " pièces" : " pièce");
      if (br) br.textContent = formatMoney(raw);
      if (bs) bs.textContent = "−" + formatMoney(save);
      if (bt) bt.textContent = formatMoney(total);
    }
    $$(".part", parts).forEach(function (p) { p.addEventListener("click", function (e) { e.preventDefault(); p.classList.toggle("on"); renderBuilder(); }); });
    renderBuilder();
    var bAdd = $("#bAdd");
    if (bAdd) bAdd.addEventListener("click", function () {
      var sel = $$(".part.on", parts).filter(function (p) { return p.getAttribute("data-id"); });
      if (!sel.length) { showToast("Sélectionne au moins une pièce"); return; }
      var items = sel.map(function (p) { return { id: parseInt(p.getAttribute("data-id"), 10), quantity: 1 }; });
      postJSON((T.routes.cart_add || "/cart/add") + ".js", { items: items }).then(function () { loadCart(function () { openCart(); showToast("Pack ajouté"); }); }).catch(function () { showToast("Erreur, réessaie"); });
    });
  }

  /* hero finder -> search */
  var finder = $("#finder");
  if (finder) finder.addEventListener("submit", function (e) {
    e.preventDefault();
    var mod = $("#fMod"), cat = $("#fCat");
    if (mod && !mod.value) { mod.focus(); return; }
    var terms = [mod ? mod.value : "", cat ? cat.value : ""].filter(Boolean).join(" ");
    var base = finder.getAttribute("data-search") || "/search";
    window.location.href = base + "?q=" + encodeURIComponent(terms) + "&type=product&options[prefix]=last";
  });

  /* mobile filters (collection) */
  var filters = $("#filters"), filtToggle = $("#filtToggle"), filtClose = $("#filtClose");
  if (filtToggle && filters) filtToggle.addEventListener("click", function () { filters.classList.add("open"); document.body.classList.add("lock"); });
  if (filtClose && filters) filtClose.addEventListener("click", function () { filters.classList.remove("open"); document.body.classList.remove("lock"); });

  /* chat + esc */
  var chat = $("#chat"); if (chat) chat.addEventListener("click", function () { showToast("Chat : bientôt disponible"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { if (window.__hideMega) window.__hideMega(); closeCart(); closeMobile(); if (filters) { filters.classList.remove("open"); } document.body.classList.remove("lock"); } });

  /* initial cart sync */
  loadCart();
})();
