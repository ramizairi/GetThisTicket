/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ !(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  let t = "transitionend",
    e = (t) =>
      null == t
        ? `${t}`
        : Object.prototype.toString
            .call(t)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    i = (t) => {
      do t += Math.floor(1e6 * Math.random());
      while (document.getElementById(t));
      return t;
    },
    s = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    n = (t) => {
      let e = s(t);
      return e && document.querySelector(e) ? e : null;
    },
    o = (t) => {
      let e = s(t);
      return e ? document.querySelector(e) : null;
    },
    r = (t) => {
      if (!t) return 0;
      let { transitionDuration: e, transitionDelay: i } =
          window.getComputedStyle(t),
        s = Number.parseFloat(e),
        n = Number.parseFloat(i);
      return s || n
        ? ((e = e.split(",")[0]),
          (i = i.split(",")[0]),
          (Number.parseFloat(e) + Number.parseFloat(i)) * 1e3)
        : 0;
    },
    a = (e) => {
      e.dispatchEvent(new Event(t));
    },
    l = (t) =>
      !!t &&
      "object" == typeof t &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    h = (t) =>
      l(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    c = (t) => {
      if (!l(t) || 0 === t.getClientRects().length) return !1;
      let e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        let s = t.closest("summary");
        if ((s && s.parentNode !== i) || null === s) return !1;
      }
      return e;
    },
    d = (t) =>
      !!(
        !t ||
        t.nodeType !== Node.ELEMENT_NODE ||
        t.classList.contains("disabled")
      ) ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    u = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        let e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? u(t.parentNode)
        : null;
    },
    p = () => {},
    f = (t) => {
      t.offsetHeight;
    },
    m = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    g = [],
    v = (t) => {
      "loading" === document.readyState
        ? (g.length ||
            document.addEventListener("DOMContentLoaded", () => {
              for (let t of g) t();
            }),
          g.push(t))
        : t();
    },
    y = () => "rtl" === document.documentElement.dir,
    $ = (t) => {
      v(() => {
        let e = m();
        if (e) {
          let i = t.NAME,
            s = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = s), t.jQueryInterface));
        }
      });
    },
    b = (t) => {
      "function" == typeof t && t();
    },
    w = (e, i, s = !0) => {
      if (!s) {
        b(e);
        return;
      }
      let n = r(i) + 5,
        o = !1,
        l = ({ target: s }) => {
          s === i && ((o = !0), i.removeEventListener(t, l), b(e));
        };
      i.addEventListener(t, l),
        setTimeout(() => {
          o || a(i);
        }, n);
    },
    x = (t, e, i, s) => {
      let n = t.length,
        o = t.indexOf(e);
      return -1 === o
        ? !i && s
          ? t[n - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          s && (o = (o + n) % n),
          t[Math.max(0, Math.min(o, n - 1))]);
    },
    k = /[^.]*(?=\..*)\.|.*/,
    _ = /\..*/,
    C = /::\d+$/,
    D = {},
    S = 1,
    T = { mouseenter: "mouseover", mouseleave: "mouseout" },
    M = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function E(t, e) {
    return (e && `${e}::${S++}`) || t.uidEvent || S++;
  }
  function P(t) {
    let e = E(t);
    return (t.uidEvent = e), (D[e] = D[e] || {}), D[e];
  }
  function A(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function O(t, e, i) {
    let s = "string" == typeof e,
      n = H(t);
    return M.has(n) || (n = t), [s, s ? i : e || i, n];
  }
  function Y(t, e, i, s, n) {
    var o, r, a, l, h, c;
    if ("string" != typeof e || !t) return;
    let [d, u, p] = O(e, i, s);
    e in T &&
      (u =
        ((o = u),
        function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget &&
              !t.delegateTarget.contains(t.relatedTarget))
          )
            return o.call(this, t);
        }));
    let f = P(t),
      m = f[p] || (f[p] = {}),
      g = A(m, u, d ? i : null);
    if (g) {
      g.oneOff = g.oneOff && n;
      return;
    }
    let v = E(u, e.replace(k, "")),
      y = d
        ? ((r = t),
          (a = i),
          (l = u),
          function t(e) {
            let i = r.querySelectorAll(a);
            for (let { target: s } = e; s && s !== this; s = s.parentNode)
              for (let n of i)
                if (n === s)
                  return (
                    F(e, { delegateTarget: s }),
                    t.oneOff && W.off(r, e.type, a, l),
                    l.apply(s, [e])
                  );
          })
        : ((h = t),
          (c = u),
          function t(e) {
            return (
              F(e, { delegateTarget: h }),
              t.oneOff && W.off(h, e.type, c),
              c.apply(h, [e])
            );
          });
    (y.delegationSelector = d ? i : null),
      (y.callable = u),
      (y.oneOff = n),
      (y.uidEvent = v),
      (m[v] = y),
      t.addEventListener(p, y, d);
  }
  function I(t, e, i, s, n) {
    let o = A(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }
  function L(t, e, i, s) {
    let n = e[i] || {};
    for (let o of Object.keys(n))
      if (o.includes(s)) {
        let r = n[o];
        I(t, e, i, r.callable, r.delegationSelector);
      }
  }
  function H(t) {
    return T[(t = t.replace(_, ""))] || t;
  }
  let W = {
    on(t, e, i, s) {
      Y(t, e, i, s, !1);
    },
    one(t, e, i, s) {
      Y(t, e, i, s, !0);
    },
    off(t, e, i, s) {
      if ("string" != typeof e || !t) return;
      let [n, o, r] = O(e, i, s),
        a = r !== e,
        l = P(t),
        h = l[r] || {},
        c = e.startsWith(".");
      if (void 0 !== o) {
        if (!Object.keys(h).length) return;
        I(t, l, r, o, n ? i : null);
        return;
      }
      if (c) for (let d of Object.keys(l)) L(t, l, d, e.slice(1));
      for (let u of Object.keys(h)) {
        let p = u.replace(C, "");
        if (!a || e.includes(p)) {
          let f = h[u];
          I(t, l, r, f.callable, f.delegationSelector);
        }
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      let s = m(),
        n = H(e),
        o = null,
        r = !0,
        a = !0,
        l = !1;
      e !== n &&
        s &&
        ((o = s.Event(e, i)),
        s(t).trigger(o),
        (r = !o.isPropagationStopped()),
        (a = !o.isImmediatePropagationStopped()),
        (l = o.isDefaultPrevented()));
      let h = new Event(e, { bubbles: r, cancelable: !0 });
      return (
        (h = F(h, i)),
        l && h.preventDefault(),
        a && t.dispatchEvent(h),
        h.defaultPrevented && o && o.preventDefault(),
        h
      );
    },
  };
  function F(t, e) {
    for (let [i, s] of Object.entries(e || {}))
      try {
        t[i] = s;
      } catch (n) {
        Object.defineProperty(t, i, { configurable: !0, get: () => s });
      }
    return t;
  }
  let z = new Map(),
    N = {
      set(t, e, i) {
        z.has(t) || z.set(t, new Map());
        let s = z.get(t);
        if (!s.has(e) && 0 !== s.size) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(s.keys())[0]
            }.`
          );
          return;
        }
        s.set(e, i);
      },
      get: (t, e) => (z.has(t) && z.get(t).get(e)) || null,
      remove(t, e) {
        if (!z.has(t)) return;
        let i = z.get(t);
        i.delete(e), 0 === i.size && z.delete(t);
      },
    };
  function R(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function j(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  let B = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${j(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${j(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      let e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (let s of i) {
        let n = s.replace(/^bs/, "");
        e[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = R(
          t.dataset[s]
        );
      }
      return e;
    },
    getDataAttribute: (t, e) => R(t.getAttribute(`data-bs-${j(e)}`)),
  };
  class U {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      let i = l(e) ? B.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(l(e) ? B.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, i = this.constructor.DefaultType) {
      for (let s of Object.keys(i)) {
        let n = i[s],
          o = t[s],
          r = l(o) ? "element" : e(o);
        if (!RegExp(n).test(r))
          throw TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`
          );
      }
    }
  }
  class V extends U {
    constructor(t, e) {
      if ((super(), !(t = h(t)))) return;
      (this._element = t),
        (this._config = this._getConfig(e)),
        N.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      for (let t of (N.remove(this._element, this.constructor.DATA_KEY),
      W.off(this._element, this.constructor.EVENT_KEY),
      Object.getOwnPropertyNames(this)))
        this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      w(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return N.get(h(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.2.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  let q = (t, e = "hide") => {
      let i = `click.dismiss${t.EVENT_KEY}`,
        s = t.NAME;
      W.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this))
        )
          return;
        let n = o(this) || this.closest(`.${s}`),
          r = t.getOrCreateInstance(n);
        r[e]();
      });
    },
    G = ".bs.alert",
    Z = `close${G}`,
    K = `closed${G}`;
  class X extends V {
    static get NAME() {
      return "alert";
    }
    close() {
      let t = W.trigger(this._element, Z);
      if (t.defaultPrevented) return;
      this._element.classList.remove("show");
      let e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), W.trigger(this._element, K), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = X.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  q(X, "close"), $(X);
  let Q = '[data-bs-toggle="button"]',
    J = "click.bs.button.data-api";
  class tt extends V {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = tt.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  W.on(document, J, Q, (t) => {
    t.preventDefault();
    let e = t.target.closest(Q),
      i = tt.getOrCreateInstance(e);
    i.toggle();
  }),
    $(tt);
  let te = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        let i = [],
          s = t.parentNode.closest(e);
        for (; s; ) i.push(s), (s = s.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        let e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !d(t) && c(t));
      },
    },
    ti = ".bs.swipe",
    ts = `touchstart${ti}`,
    tn = `touchmove${ti}`,
    to = `touchend${ti}`,
    tr = `pointerdown${ti}`,
    ta = `pointerup${ti}`,
    tl = { endCallback: null, leftCallback: null, rightCallback: null },
    th = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class tc extends U {
    constructor(t, e) {
      if ((super(), (this._element = t), !t || !tc.isSupported())) return;
      (this._config = this._getConfig(e)),
        (this._deltaX = 0),
        (this._supportPointerEvents = Boolean(window.PointerEvent)),
        this._initEvents();
    }
    static get Default() {
      return tl;
    }
    static get DefaultType() {
      return th;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      W.off(this._element, ti);
    }
    _start(t) {
      if (!this._supportPointerEvents) {
        this._deltaX = t.touches[0].clientX;
        return;
      }
      this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        b(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      let t = Math.abs(this._deltaX);
      if (t <= 40) return;
      let e = t / this._deltaX;
      (this._deltaX = 0),
        e && b(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (W.on(this._element, tr, (t) => this._start(t)),
          W.on(this._element, ta, (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (W.on(this._element, ts, (t) => this._start(t)),
          W.on(this._element, tn, (t) => this._move(t)),
          W.on(this._element, to, (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  let td = ".bs.carousel",
    tu = ".data-api",
    tp = "next",
    tf = "prev",
    tm = "left",
    tg = "right",
    t8 = `slide${td}`,
    tv = `slid${td}`,
    ty = `keydown${td}`,
    t$ = `mouseenter${td}`,
    tb = `mouseleave${td}`,
    tw = `dragstart${td}`,
    tx = `load${td}${tu}`,
    tk = `click${td}${tu}`,
    t_ = "carousel",
    tC = "active",
    tD = ".active",
    tS = ".carousel-item",
    tT = tD + tS,
    t9 = { ArrowLeft: tg, ArrowRight: tm },
    tM = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    tE = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class tP extends V {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = te.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === t_ && this.cycle();
    }
    static get Default() {
      return tM;
    }
    static get DefaultType() {
      return tE;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(tp);
    }
    nextWhenVisible() {
      !document.hidden && c(this._element) && this.next();
    }
    prev() {
      this._slide(tf);
    }
    pause() {
      this._isSliding && a(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          W.one(this._element, tv, () => this.cycle());
          return;
        }
        this.cycle();
      }
    }
    to(t) {
      let e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding) {
        W.one(this._element, tv, () => this.to(t));
        return;
      }
      let i = this._getItemIndex(this._getActive());
      i !== t && this._slide(t > i ? tp : tf, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard && W.on(this._element, ty, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (W.on(this._element, t$, () => this.pause()),
          W.on(this._element, tb, () => this._maybeEnableCycle())),
        this._config.touch &&
          tc.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (let t of te.find(".carousel-item img", this._element))
        W.on(t, tw, (t) => t.preventDefault());
      let e = () => {
        "hover" === this._config.pause &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            500 + this._config.interval
          )));
      };
      this._swipeHelper = new tc(this._element, {
        leftCallback: () => this._slide(this._directionToOrder(tm)),
        rightCallback: () => this._slide(this._directionToOrder(tg)),
        endCallback: e,
      });
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      let e = t9[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      let e = te.findOne(tD, this._indicatorsElement);
      e.classList.remove(tC), e.removeAttribute("aria-current");
      let i = te.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(tC), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      let t = this._activeElement || this._getActive();
      if (!t) return;
      let e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      let i = this._getActive(),
        s = t === tp,
        n = e || x(this._getItems(), i, s, this._config.wrap);
      if (n === i) return;
      let o = this._getItemIndex(n),
        r = (e) =>
          W.trigger(this._element, e, {
            relatedTarget: n,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          }),
        a = r(t8);
      if (a.defaultPrevented || !i || !n) return;
      let l = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = n);
      let h = s ? "carousel-item-start" : "carousel-item-end",
        c = s ? "carousel-item-next" : "carousel-item-prev";
      n.classList.add(c), f(n), i.classList.add(h), n.classList.add(h);
      let d = () => {
        n.classList.remove(h, c),
          n.classList.add(tC),
          i.classList.remove(tC, c, h),
          (this._isSliding = !1),
          r(tv);
      };
      this._queueCallback(d, i, this._isAnimated()), l && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return te.findOne(tT, this._element);
    }
    _getItems() {
      return te.find(tS, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return y() ? (t === tm ? tf : tp) : t === tm ? tp : tf;
    }
    _orderToDirection(t) {
      return y() ? (t === tf ? tm : tg) : t === tf ? tg : tm;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = tP.getOrCreateInstance(this, t);
        if ("number" == typeof t) {
          e.to(t);
          return;
        }
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  W.on(document, tk, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    let e = o(this);
    if (!e || !e.classList.contains(t_)) return;
    t.preventDefault();
    let i = tP.getOrCreateInstance(e),
      s = this.getAttribute("data-bs-slide-to");
    if (s) {
      i.to(s), i._maybeEnableCycle();
      return;
    }
    if ("next" === B.getDataAttribute(this, "slide")) {
      i.next(), i._maybeEnableCycle();
      return;
    }
    i.prev(), i._maybeEnableCycle();
  }),
    W.on(window, tx, () => {
      let t = te.find('[data-bs-ride="carousel"]');
      for (let e of t) tP.getOrCreateInstance(e);
    }),
    $(tP);
  let tA = ".bs.collapse",
    tO = `show${tA}`,
    tY = `shown${tA}`,
    tI = `hide${tA}`,
    tL = `hidden${tA}`,
    t0 = `click${tA}.data-api`,
    tH = "show",
    tW = "collapse",
    tF = "collapsing",
    tz = `:scope .${tW} .${tW}`,
    tN = '[data-bs-toggle="collapse"]',
    tR = { parent: null, toggle: !0 },
    tj = { parent: "(null|element)", toggle: "boolean" };
  class tB extends V {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      let i = te.find(tN);
      for (let s of i) {
        let o = n(s),
          r = te.find(o).filter((t) => t === this._element);
        null !== o && r.length && this._triggerArray.push(s);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return tR;
    }
    static get DefaultType() {
      return tj;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => tB.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      let e = W.trigger(this._element, tO);
      if (e.defaultPrevented) return;
      for (let i of t) i.hide();
      let s = this._getDimension();
      this._element.classList.remove(tW),
        this._element.classList.add(tF),
        (this._element.style[s] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      let n = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(tF),
            this._element.classList.add(tW, tH),
            (this._element.style[s] = ""),
            W.trigger(this._element, tY);
        },
        o = s[0].toUpperCase() + s.slice(1),
        r = `scroll${o}`;
      this._queueCallback(n, this._element, !0),
        (this._element.style[s] = `${this._element[r]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      let t = W.trigger(this._element, tI);
      if (t.defaultPrevented) return;
      let e = this._getDimension();
      for (let i of ((this._element.style[e] = `${
        this._element.getBoundingClientRect()[e]
      }px`),
      f(this._element),
      this._element.classList.add(tF),
      this._element.classList.remove(tW, tH),
      this._triggerArray)) {
        let s = o(i);
        s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1);
      }
      this._isTransitioning = !0;
      let n = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(tF),
          this._element.classList.add(tW),
          W.trigger(this._element, tL);
      };
      (this._element.style[e] = ""), this._queueCallback(n, this._element, !0);
    }
    _isShown(t = this._element) {
      return t.classList.contains(tH);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = h(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      let t = this._getFirstLevelChildren(tN);
      for (let e of t) {
        let i = o(e);
        i && this._addAriaAndCollapsedClass([e], this._isShown(i));
      }
    }
    _getFirstLevelChildren(t) {
      let e = te.find(tz, this._config.parent);
      return te.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (let i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      let e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          let i = tB.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  W.on(document, t0, tN, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    let e = n(this),
      i = te.find(e);
    for (let s of i) tB.getOrCreateInstance(s, { toggle: !1 }).toggle();
  }),
    $(tB);
  var t1 = "bottom",
    tU = "right",
    tV = "left",
    t2 = "auto",
    t4 = ["top", t1, tU, tV],
    tq = "start",
    t3 = "clippingParents",
    tG = "viewport",
    t7 = "popper",
    t5 = "reference",
    tZ = t4.reduce(function (t, e) {
      return t.concat([e + "-" + tq, e + "-end"]);
    }, []),
    tK = [].concat(t4, [t2]).reduce(function (t, e) {
      return t.concat([e, e + "-" + tq, e + "-end"]);
    }, []),
    tX = "beforeRead",
    t6 = "read",
    tQ = "afterRead",
    tJ = "beforeMain",
    et = "main",
    ee = "afterMain",
    ei = "beforeWrite",
    es = "write",
    en = "afterWrite",
    eo = [tX, t6, tQ, tJ, et, ee, ei, es, en];
  function er(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function ea(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function el(t) {
    var e = ea(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function eh(t) {
    var e = ea(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function ec(t) {
    if ("undefined" == typeof ShadowRoot) return !1;
    var e = ea(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  let ed = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function t(e) {
      var i = e.state;
      Object.keys(i.elements).forEach(function (t) {
        var e = i.styles[t] || {},
          s = i.attributes[t] || {},
          n = i.elements[t];
        eh(n) &&
          er(n) &&
          (Object.assign(n.style, e),
          Object.keys(s).forEach(function (t) {
            var e = s[t];
            !1 === e
              ? n.removeAttribute(t)
              : n.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function t(e) {
      var i = e.state,
        s = {
          popper: {
            position: i.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(i.elements.popper.style, s.popper),
        (i.styles = s),
        i.elements.arrow && Object.assign(i.elements.arrow.style, s.arrow),
        function () {
          Object.keys(i.elements).forEach(function (t) {
            var e = i.elements[t],
              n = i.attributes[t] || {},
              o = Object.keys(
                i.styles.hasOwnProperty(t) ? i.styles[t] : s[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            eh(e) &&
              er(e) &&
              (Object.assign(e.style, o),
              Object.keys(n).forEach(function (t) {
                e.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function eu(t) {
    return t.split("-")[0];
  }
  var ep = Math.max,
    ef = Math.min,
    em = Math.round;
  function eg() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function e8() {
    return !/^((?!chrome|android).)*safari/i.test(eg());
  }
  function ev(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var s = t.getBoundingClientRect(),
      n = 1,
      o = 1;
    e &&
      eh(t) &&
      ((n = (t.offsetWidth > 0 && em(s.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && em(s.height) / t.offsetHeight) || 1));
    var r = (el(t) ? ea(t) : window).visualViewport,
      a = !e8() && i,
      l = (s.left + (a && r ? r.offsetLeft : 0)) / n,
      h = (s.top + (a && r ? r.offsetTop : 0)) / o,
      c = s.width / n,
      d = s.height / o;
    return {
      width: c,
      height: d,
      top: h,
      right: l + c,
      bottom: h + d,
      left: l,
      x: l,
      y: h,
    };
  }
  function ey(t) {
    var e = ev(t),
      i = t.offsetWidth,
      s = t.offsetHeight;
    return (
      1 >= Math.abs(e.width - i) && (i = e.width),
      1 >= Math.abs(e.height - s) && (s = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: s }
    );
  }
  function e$(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && ec(i)) {
      var s = e;
      do {
        if (s && t.isSameNode(s)) return !0;
        s = s.parentNode || s.host;
      } while (s);
    }
    return !1;
  }
  function eb(t) {
    return ea(t).getComputedStyle(t);
  }
  function ew(t) {
    return ["table", "td", "th"].indexOf(er(t)) >= 0;
  }
  function ex(t) {
    return (
      (el(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function ek(t) {
    return "html" === er(t)
      ? t
      : t.assignedSlot || t.parentNode || (ec(t) ? t.host : null) || ex(t);
  }
  function e_(t) {
    return eh(t) && "fixed" !== eb(t).position ? t.offsetParent : null;
  }
  function eC(t) {
    for (var e = ea(t), i = e_(t); i && ew(i) && "static" === eb(i).position; )
      i = e_(i);
    return i &&
      ("html" === er(i) || ("body" === er(i) && "static" === eb(i).position))
      ? e
      : i ||
          (function t(e) {
            var i = /firefox/i.test(eg());
            if (/Trident/i.test(eg()) && eh(e) && "fixed" === eb(e).position)
              return null;
            var s = ek(e);
            for (
              ec(s) && (s = s.host);
              eh(s) && 0 > ["html", "body"].indexOf(er(s));

            ) {
              var n = eb(s);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (i && "filter" === n.willChange) ||
                (i && n.filter && "none" !== n.filter)
              )
                return s;
              s = s.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function eD(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function eS(t, e, i) {
    return ep(t, ef(e, i));
  }
  function eT() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function e9(t) {
    return Object.assign({}, eT(), t);
  }
  function eM(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  let eE = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function t(e) {
      var i,
        s = e.state,
        n = e.name,
        o = e.options,
        r = s.elements.arrow,
        a = s.modifiersData.popperOffsets,
        l = eu(s.placement),
        h = eD(l),
        c = [tV, tU].indexOf(l) >= 0 ? "height" : "width";
      if (r && a) {
        var d,
          u,
          p =
            ((d = o.padding),
            (u = s),
            e9(
              "number" !=
                typeof (d =
                  "function" == typeof d
                    ? d(Object.assign({}, u.rects, { placement: u.placement }))
                    : d)
                ? d
                : eM(d, t4)
            )),
          f = ey(r),
          m =
            s.rects.reference[c] +
            s.rects.reference[h] -
            a[h] -
            s.rects.popper[c],
          g = a[h] - s.rects.reference[h],
          v = eC(r),
          y = v ? ("y" === h ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          $ = p["y" === h ? "top" : tV],
          b = y - f[c] - p["y" === h ? t1 : tU],
          w = y / 2 - f[c] / 2 + (m / 2 - g / 2),
          x = eS($, w, b),
          k = h;
        s.modifiersData[n] = (((i = {})[k] = x), (i.centerOffset = x - w), i);
      }
    },
    effect: function t(e) {
      var i = e.state,
        s = e.options.element,
        n = void 0 === s ? "[data-popper-arrow]" : s;
      null != n &&
        ("string" != typeof n || (n = i.elements.popper.querySelector(n))) &&
        e$(i.elements.popper, n) &&
        (i.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function eP(t) {
    return t.split("-")[1];
  }
  var eA = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function eO(t) {
    var e,
      i,
      s = t.popper,
      n = t.popperRect,
      o = t.placement,
      r = t.variation,
      a = t.offsets,
      l = t.position,
      h = t.gpuAcceleration,
      c = t.adaptive,
      d = t.roundOffsets,
      u = t.isFixed,
      p = a.x,
      f = void 0 === p ? 0 : p,
      m = a.y,
      g = void 0 === m ? 0 : m,
      v = "function" == typeof d ? d({ x: f, y: g }) : { x: f, y: g };
    (f = v.x), (g = v.y);
    var y = a.hasOwnProperty("x"),
      $ = a.hasOwnProperty("y"),
      b = tV,
      w = "top",
      x = window;
    if (c) {
      var k = eC(s),
        _ = "clientHeight",
        C = "clientWidth";
      k === ea(s) &&
        ((k = ex(s)),
        "static" !== eb(k).position &&
          "absolute" === l &&
          ((_ = "scrollHeight"), (C = "scrollWidth"))),
        ("top" === o || ((o === tV || o === tU) && "end" === r)) &&
          ((w = t1),
          (g -=
            (u && k === x && x.visualViewport
              ? x.visualViewport.height
              : k[_]) - n.height),
          (g *= h ? 1 : -1)),
        (o === tV || (("top" === o || o === t1) && "end" === r)) &&
          ((b = tU),
          (f -=
            (u && k === x && x.visualViewport ? x.visualViewport.width : k[C]) -
            n.width),
          (f *= h ? 1 : -1));
    }
    var D,
      S,
      T,
      M,
      E = Object.assign({ position: l }, c && eA),
      P =
        !0 === d
          ? ((S = (D = { x: f, y: g }).x),
            (T = D.y),
            {
              x: em(S * (M = window.devicePixelRatio || 1)) / M || 0,
              y: em(T * M) / M || 0,
            })
          : { x: f, y: g };
    return ((f = P.x), (g = P.y), h)
      ? Object.assign(
          {},
          E,
          (((i = {})[w] = $ ? "0" : ""),
          (i[b] = y ? "0" : ""),
          (i.transform =
            1 >= (x.devicePixelRatio || 1)
              ? "translate(" + f + "px, " + g + "px)"
              : "translate3d(" + f + "px, " + g + "px, 0)"),
          i)
        )
      : Object.assign(
          {},
          E,
          (((e = {})[w] = $ ? g + "px" : ""),
          (e[b] = y ? f + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  let eY = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function t(e) {
      var i = e.state,
        s = e.options,
        n = s.gpuAcceleration,
        o = s.adaptive,
        r = s.roundOffsets,
        a = void 0 === r || r,
        l = {
          placement: eu(i.placement),
          variation: eP(i.placement),
          popper: i.elements.popper,
          popperRect: i.rects.popper,
          gpuAcceleration: void 0 === n || n,
          isFixed: "fixed" === i.options.strategy,
        };
      null != i.modifiersData.popperOffsets &&
        (i.styles.popper = Object.assign(
          {},
          i.styles.popper,
          eO(
            Object.assign({}, l, {
              offsets: i.modifiersData.popperOffsets,
              position: i.options.strategy,
              adaptive: void 0 === o || o,
              roundOffsets: a,
            })
          )
        )),
        null != i.modifiersData.arrow &&
          (i.styles.arrow = Object.assign(
            {},
            i.styles.arrow,
            eO(
              Object.assign({}, l, {
                offsets: i.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: a,
              })
            )
          )),
        (i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-placement": i.placement,
        }));
    },
    data: {},
  };
  var eI = { passive: !0 };
  let eL = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function t() {},
    effect: function t(e) {
      var i = e.state,
        s = e.instance,
        n = e.options,
        o = n.scroll,
        r = void 0 === o || o,
        a = n.resize,
        l = void 0 === a || a,
        h = ea(i.elements.popper),
        c = [].concat(i.scrollParents.reference, i.scrollParents.popper);
      return (
        r &&
          c.forEach(function (t) {
            t.addEventListener("scroll", s.update, eI);
          }),
        l && h.addEventListener("resize", s.update, eI),
        function () {
          r &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", s.update, eI);
            }),
            l && h.removeEventListener("resize", s.update, eI);
        }
      );
    },
    data: {},
  };
  var e0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function eH(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e0[t];
    });
  }
  var eW = { start: "end", end: "start" };
  function eF(t) {
    return t.replace(/start|end/g, function (t) {
      return eW[t];
    });
  }
  function ez(t) {
    var e,
      i = ea(t);
    return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
  }
  function eN(t) {
    return ev(ex(t)).left + ez(t).scrollLeft;
  }
  function eR(t) {
    var e = eb(t),
      i = e.overflow,
      s = e.overflowX,
      n = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + n + s);
  }
  function ej(t, e) {
    void 0 === e && (e = []);
    var i,
      s = (function t(e) {
        return ["html", "body", "#document"].indexOf(er(e)) >= 0
          ? e.ownerDocument.body
          : eh(e) && eR(e)
          ? e
          : t(ek(e));
      })(t),
      n = s === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = ea(s),
      r = n ? [o].concat(o.visualViewport || [], eR(s) ? s : []) : s,
      a = e.concat(r);
    return n ? a : a.concat(ej(ek(r)));
  }
  function eB(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function e1(t, e, i) {
    var s, n, o, r, a, l, h, c, d, u, p, f;
    return e === tG
      ? eB(
          (function t(e, i) {
            var s = ea(e),
              n = ex(e),
              o = s.visualViewport,
              r = n.clientWidth,
              a = n.clientHeight,
              l = 0,
              h = 0;
            if (o) {
              (r = o.width), (a = o.height);
              var c = e8();
              (c || (!c && "fixed" === i)) &&
                ((l = o.offsetLeft), (h = o.offsetTop));
            }
            return { width: r, height: a, x: l + eN(e), y: h };
          })(t, i)
        )
      : el(e)
      ? ((s = e),
        ((o = ev(s, !1, "fixed" === (n = i))).top = o.top + s.clientTop),
        (o.left = o.left + s.clientLeft),
        (o.bottom = o.top + s.clientHeight),
        (o.right = o.left + s.clientWidth),
        (o.width = s.clientWidth),
        (o.height = s.clientHeight),
        (o.x = o.left),
        (o.y = o.top),
        o)
      : eB(
          ((r = ex(t)),
          (l = ex(r)),
          (h = ez(r)),
          (c = null == (a = r.ownerDocument) ? void 0 : a.body),
          (d = ep(
            l.scrollWidth,
            l.clientWidth,
            c ? c.scrollWidth : 0,
            c ? c.clientWidth : 0
          )),
          (u = ep(
            l.scrollHeight,
            l.clientHeight,
            c ? c.scrollHeight : 0,
            c ? c.clientHeight : 0
          )),
          (p = -h.scrollLeft + eN(r)),
          (f = -h.scrollTop),
          "rtl" === eb(c || l).direction &&
            (p += ep(l.clientWidth, c ? c.clientWidth : 0) - d),
          { width: d, height: u, x: p, y: f })
        );
  }
  function eU(t) {
    var e,
      i = t.reference,
      s = t.element,
      n = t.placement,
      o = n ? eu(n) : null,
      r = n ? eP(n) : null,
      a = i.x + i.width / 2 - s.width / 2,
      l = i.y + i.height / 2 - s.height / 2;
    switch (o) {
      case "top":
        e = { x: a, y: i.y - s.height };
        break;
      case t1:
        e = { x: a, y: i.y + i.height };
        break;
      case tU:
        e = { x: i.x + i.width, y: l };
        break;
      case tV:
        e = { x: i.x - s.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var h = o ? eD(o) : null;
    if (null != h) {
      var c = "y" === h ? "height" : "width";
      switch (r) {
        case tq:
          e[h] = e[h] - (i[c] / 2 - s[c] / 2);
          break;
        case "end":
          e[h] = e[h] + (i[c] / 2 - s[c] / 2);
      }
    }
    return e;
  }
  function eV(t, e) {
    void 0 === e && (e = {});
    var i,
      s,
      n,
      o,
      r,
      a,
      l,
      h,
      c,
      d,
      u = e,
      p = u.placement,
      f = void 0 === p ? t.placement : p,
      m = u.strategy,
      g = void 0 === m ? t.strategy : m,
      v = u.boundary,
      y = u.rootBoundary,
      $ = u.elementContext,
      b = void 0 === $ ? t7 : $,
      w = u.altBoundary,
      x = u.padding,
      k = void 0 === x ? 0 : x,
      _ = e9("number" != typeof k ? k : eM(k, t4)),
      C = t.rects.popper,
      D = t.elements[void 0 !== w && w ? (b === t7 ? t5 : t7) : b],
      S =
        ((i = el(D) ? D : D.contextElement || ex(t.elements.popper)),
        (s = void 0 === v ? t3 : v),
        (n = void 0 === y ? tG : y),
        (o = g),
        (c = (h = [].concat(
          "clippingParents" === s
            ? ((r = i),
              (a = ej(ek(r))),
              (l =
                ["absolute", "fixed"].indexOf(eb(r).position) >= 0 && eh(r)
                  ? eC(r)
                  : r),
              el(l)
                ? a.filter(function (t) {
                    return el(t) && e$(t, l) && "body" !== er(t);
                  })
                : [])
            : [].concat(s),
          [n]
        ))[0]),
        ((d = h.reduce(function (t, e) {
          var s = e1(i, e, o);
          return (
            (t.top = ep(s.top, t.top)),
            (t.right = ef(s.right, t.right)),
            (t.bottom = ef(s.bottom, t.bottom)),
            (t.left = ep(s.left, t.left)),
            t
          );
        }, e1(i, c, o))).width = d.right - d.left),
        (d.height = d.bottom - d.top),
        (d.x = d.left),
        (d.y = d.top),
        d),
      T = ev(t.elements.reference),
      M = eU({ reference: T, element: C, strategy: "absolute", placement: f }),
      E = eB(Object.assign({}, C, M)),
      P = b === t7 ? E : T,
      A = {
        top: S.top - P.top + _.top,
        bottom: P.bottom - S.bottom + _.bottom,
        left: S.left - P.left + _.left,
        right: P.right - S.right + _.right,
      },
      O = t.modifiersData.offset;
    if (b === t7 && O) {
      var Y = O[f];
      Object.keys(A).forEach(function (t) {
        var e = [tU, t1].indexOf(t) >= 0 ? 1 : -1,
          i = ["top", t1].indexOf(t) >= 0 ? "y" : "x";
        A[t] += Y[i] * e;
      });
    }
    return A;
  }
  let e2 = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function t(e) {
      var i = e.state,
        s = e.options,
        n = e.name;
      if (!i.modifiersData[n]._skip) {
        for (
          var o = s.mainAxis,
            r = void 0 === o || o,
            a = s.altAxis,
            l = void 0 === a || a,
            h = s.fallbackPlacements,
            c = s.padding,
            d = s.boundary,
            u = s.rootBoundary,
            p = s.altBoundary,
            f = s.flipVariations,
            m = void 0 === f || f,
            g = s.allowedAutoPlacements,
            v = i.options.placement,
            y = eu(v),
            $ = [v]
              .concat(
                h ||
                  (y !== v && m
                    ? (function t(e) {
                        if (eu(e) === t2) return [];
                        var i = eH(e);
                        return [eF(e), i, eF(i)];
                      })(v)
                    : [eH(v)])
              )
              .reduce(function (t, e) {
                var s, n, o, r, a, l, h, p, f, v, y, $, b, w;
                return t.concat(
                  eu(e) === t2
                    ? ((s = i),
                      (n = {
                        placement: e,
                        boundary: d,
                        rootBoundary: u,
                        padding: c,
                        flipVariations: m,
                        allowedAutoPlacements: g,
                      }),
                      (r = (o = n).placement),
                      (a = o.boundary),
                      (l = o.rootBoundary),
                      (h = o.padding),
                      (p = o.flipVariations),
                      (v = void 0 === (f = o.allowedAutoPlacements) ? tK : f),
                      0 ===
                        (b = ($ = (y = eP(r))
                          ? p
                            ? tZ
                            : tZ.filter(function (t) {
                                return eP(t) === y;
                              })
                          : t4).filter(function (t) {
                          return v.indexOf(t) >= 0;
                        })).length && (b = $),
                      Object.keys(
                        (w = b.reduce(function (t, e) {
                          return (
                            (t[e] = eV(s, {
                              placement: e,
                              boundary: a,
                              rootBoundary: l,
                              padding: h,
                            })[eu(e)]),
                            t
                          );
                        }, {}))
                      ).sort(function (t, e) {
                        return w[t] - w[e];
                      }))
                    : e
                );
              }, []),
            b = i.rects.reference,
            w = i.rects.popper,
            x = new Map(),
            k = !0,
            _ = $[0],
            C = 0;
          C < $.length;
          C++
        ) {
          var D = $[C],
            S = eu(D),
            T = eP(D) === tq,
            M = ["top", t1].indexOf(S) >= 0,
            E = M ? "width" : "height",
            P = eV(i, {
              placement: D,
              boundary: d,
              rootBoundary: u,
              altBoundary: p,
              padding: c,
            }),
            A = M ? (T ? tU : tV) : T ? t1 : "top";
          b[E] > w[E] && (A = eH(A));
          var O = eH(A),
            Y = [];
          if (
            (r && Y.push(P[S] <= 0),
            l && Y.push(P[A] <= 0, P[O] <= 0),
            Y.every(function (t) {
              return t;
            }))
          ) {
            (_ = D), (k = !1);
            break;
          }
          x.set(D, Y);
        }
        if (k)
          for (
            var I = m ? 3 : 1,
              L = function t(e) {
                var i = $.find(function (t) {
                  var i = x.get(t);
                  if (i)
                    return i.slice(0, e).every(function (t) {
                      return t;
                    });
                });
                if (i) return (_ = i), "break";
              },
              H = I;
            H > 0 && "break" !== L(H);
            H--
          );
        i.placement !== _ &&
          ((i.modifiersData[n]._skip = !0), (i.placement = _), (i.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function e4(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function eq(t) {
    return ["top", tU, t1, tV].some(function (e) {
      return t[e] >= 0;
    });
  }
  let e3 = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function t(e) {
        var i = e.state,
          s = e.name,
          n = i.rects.reference,
          o = i.rects.popper,
          r = i.modifiersData.preventOverflow,
          a = eV(i, { elementContext: "reference" }),
          l = eV(i, { altBoundary: !0 }),
          h = e4(a, n),
          c = e4(l, o, r),
          d = eq(h),
          u = eq(c);
        (i.modifiersData[s] = {
          referenceClippingOffsets: h,
          popperEscapeOffsets: c,
          isReferenceHidden: d,
          hasPopperEscaped: u,
        }),
          (i.attributes.popper = Object.assign({}, i.attributes.popper, {
            "data-popper-reference-hidden": d,
            "data-popper-escaped": u,
          }));
      },
    },
    eG = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function t(e) {
        var i = e.state,
          s = e.options,
          n = e.name,
          o = s.offset,
          r = void 0 === o ? [0, 0] : o,
          a = tK.reduce(function (t, e) {
            var s, n, o, a, l, h, c, d;
            return (
              (t[e] =
                ((s = e),
                (n = i.rects),
                (o = r),
                (l = [tV, "top"].indexOf((a = eu(s))) >= 0 ? -1 : 1),
                (c = (h =
                  "function" == typeof o
                    ? o(Object.assign({}, n, { placement: s }))
                    : o)[0]),
                (d = h[1]),
                (c = c || 0),
                (d = (d || 0) * l),
                [tV, tU].indexOf(a) >= 0 ? { x: d, y: c } : { x: c, y: d })),
              t
            );
          }, {}),
          l = a[i.placement],
          h = l.x,
          c = l.y;
        null != i.modifiersData.popperOffsets &&
          ((i.modifiersData.popperOffsets.x += h),
          (i.modifiersData.popperOffsets.y += c)),
          (i.modifiersData[n] = a);
      },
    },
    e7 = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function t(e) {
        var i = e.state,
          s = e.name;
        i.modifiersData[s] = eU({
          reference: i.rects.reference,
          element: i.rects.popper,
          strategy: "absolute",
          placement: i.placement,
        });
      },
      data: {},
    },
    e5 = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function t(e) {
        var i,
          s = e.state,
          n = e.options,
          o = e.name,
          r = n.mainAxis,
          a = n.altAxis,
          l = n.boundary,
          h = n.rootBoundary,
          c = n.altBoundary,
          d = n.padding,
          u = n.tether,
          p = void 0 === u || u,
          f = n.tetherOffset,
          m = void 0 === f ? 0 : f,
          g = eV(s, {
            boundary: l,
            rootBoundary: h,
            padding: d,
            altBoundary: c,
          }),
          v = eu(s.placement),
          y = eP(s.placement),
          $ = !y,
          b = eD(v),
          w = "x" === (i = b) ? "y" : "x",
          x = s.modifiersData.popperOffsets,
          k = s.rects.reference,
          _ = s.rects.popper,
          C =
            "function" == typeof m
              ? m(Object.assign({}, s.rects, { placement: s.placement }))
              : m,
          D =
            "number" == typeof C
              ? { mainAxis: C, altAxis: C }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          S = s.modifiersData.offset
            ? s.modifiersData.offset[s.placement]
            : null,
          T = { x: 0, y: 0 };
        if (x) {
          if (void 0 === r || r) {
            var M,
              E = "y" === b ? "top" : tV,
              P = "y" === b ? t1 : tU,
              A = "y" === b ? "height" : "width",
              O = x[b],
              Y = O + g[E],
              I = O - g[P],
              L = p ? -_[A] / 2 : 0,
              H = y === tq ? k[A] : _[A],
              W = y === tq ? -_[A] : -k[A],
              F = s.elements.arrow,
              z = p && F ? ey(F) : { width: 0, height: 0 },
              N = s.modifiersData["arrow#persistent"]
                ? s.modifiersData["arrow#persistent"].padding
                : eT(),
              R = N[E],
              j = N[P],
              B = eS(0, k[A], z[A]),
              U = $
                ? k[A] / 2 - L - B - R - D.mainAxis
                : H - B - R - D.mainAxis,
              V = $
                ? -k[A] / 2 + L + B + j + D.mainAxis
                : W + B + j + D.mainAxis,
              q = s.elements.arrow && eC(s.elements.arrow),
              G = q ? ("y" === b ? q.clientTop || 0 : q.clientLeft || 0) : 0,
              Z = null != (M = null == S ? void 0 : S[b]) ? M : 0,
              K = eS(p ? ef(Y, O + U - Z - G) : Y, O, p ? ep(I, O + V - Z) : I);
            (x[b] = K), (T[b] = K - O);
          }
          if (void 0 !== a && a) {
            var X,
              Q,
              J,
              tt,
              te,
              ti = x[w],
              ts = "y" === w ? "height" : "width",
              tn = ti + g["x" === b ? "top" : tV],
              to = ti - g["x" === b ? t1 : tU],
              tr = -1 !== ["top", tV].indexOf(v),
              ta = null != (X = null == S ? void 0 : S[w]) ? X : 0,
              tl = tr ? tn : ti - k[ts] - _[ts] - ta + D.altAxis,
              th = tr ? ti + k[ts] + _[ts] - ta - D.altAxis : to,
              tc =
                p && tr
                  ? ((Q = tl),
                    (J = ti),
                    (tt = th),
                    (te = eS(Q, J, tt)) > tt ? tt : te)
                  : eS(p ? tl : tn, ti, p ? th : to);
            (x[w] = tc), (T[w] = tc - ti);
          }
          s.modifiersData[o] = T;
        }
      },
      requiresIfExists: ["offset"],
    };
  var eZ = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function eK() {
    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function eX(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      s = void 0 === i ? [] : i,
      n = e.defaultOptions,
      o = void 0 === n ? eZ : n;
    return function t(e, i, n) {
      void 0 === n && (n = o);
      var r,
        a,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, eZ, o),
          modifiersData: {},
          elements: { reference: e, popper: i },
          attributes: {},
          styles: {},
        },
        h = [],
        c = !1,
        d = {
          state: l,
          setOptions: function t(n) {
            var r,
              a,
              c,
              p,
              f,
              m,
              g,
              v,
              y = "function" == typeof n ? n(l.options) : n;
            u(),
              (l.options = Object.assign({}, o, l.options, y)),
              (l.scrollParents = {
                reference: el(e)
                  ? ej(e)
                  : e.contextElement
                  ? ej(e.contextElement)
                  : [],
                popper: ej(i),
              });
            var $ =
              ((v =
                ((p = c =
                  Object.keys(
                    (a = (r = [].concat(s, l.options.modifiers)).reduce(
                      function (t, e) {
                        var i = t[e.name];
                        return (
                          (t[e.name] = i
                            ? Object.assign({}, i, e, {
                                options: Object.assign(
                                  {},
                                  i.options,
                                  e.options
                                ),
                                data: Object.assign({}, i.data, e.data),
                              })
                            : e),
                          t
                        );
                      },
                      {}
                    ))
                  ).map(function (t) {
                    return a[t];
                  })),
                (f = new Map()),
                (m = new Set()),
                (g = []),
                p.forEach(function (t) {
                  f.set(t.name, t);
                }),
                p.forEach(function (t) {
                  m.has(t.name) ||
                    (function t(e) {
                      m.add(e.name),
                        []
                          .concat(e.requires || [], e.requiresIfExists || [])
                          .forEach(function (e) {
                            if (!m.has(e)) {
                              var i = f.get(e);
                              i && t(i);
                            }
                          }),
                        g.push(e);
                    })(t);
                }),
                g)),
              eo.reduce(function (t, e) {
                return t.concat(
                  v.filter(function (t) {
                    return t.phase === e;
                  })
                );
              }, []));
            return (
              (l.orderedModifiers = $.filter(function (t) {
                return t.enabled;
              })),
              l.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  s = t.effect;
                if ("function" == typeof s) {
                  var n = s({
                      state: l,
                      name: e,
                      instance: d,
                      options: void 0 === i ? {} : i,
                    }),
                    o = function t() {};
                  h.push(n || o);
                }
              }),
              d.update()
            );
          },
          forceUpdate: function t() {
            if (!c) {
              var e,
                i,
                s,
                n,
                o,
                r,
                a,
                h,
                u,
                p,
                f,
                m,
                g,
                v,
                y,
                $ = l.elements,
                b = $.reference,
                w = $.popper;
              if (eK(b, w)) {
                (l.rects = {
                  reference:
                    ((s = b),
                    (n = eC(w)),
                    (o = "fixed" === l.options.strategy),
                    (r = eh(n)),
                    (f =
                      eh(n) &&
                      ((u =
                        em((h = (a = n).getBoundingClientRect()).width) /
                          a.offsetWidth || 1),
                      (p = em(h.height) / a.offsetHeight || 1),
                      1 !== u || 1 !== p)),
                    (m = ex(n)),
                    (g = ev(s, f, o)),
                    (v = { scrollLeft: 0, scrollTop: 0 }),
                    (y = { x: 0, y: 0 }),
                    (r || (!r && !o)) &&
                      (("body" !== er(n) || eR(m)) &&
                        (v =
                          ((e = n),
                          e !== ea(e) && eh(e)
                            ? {
                                scrollLeft: (i = e).scrollLeft,
                                scrollTop: i.scrollTop,
                              }
                            : ez(e))),
                      eh(n)
                        ? ((y = ev(n, !0)),
                          (y.x += n.clientLeft),
                          (y.y += n.clientTop))
                        : m && (y.x = eN(m))),
                    {
                      x: g.left + v.scrollLeft - y.x,
                      y: g.top + v.scrollTop - y.y,
                      width: g.width,
                      height: g.height,
                    }),
                  popper: ey(w),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (t) {
                    return (l.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var x = 0; x < l.orderedModifiers.length; x++) {
                  if (!0 === l.reset) {
                    (l.reset = !1), (x = -1);
                    continue;
                  }
                  var k = l.orderedModifiers[x],
                    _ = k.fn,
                    C = k.options,
                    D = void 0 === C ? {} : C,
                    S = k.name;
                  "function" == typeof _ &&
                    (l =
                      _({ state: l, options: D, name: S, instance: d }) || l);
                }
              }
            }
          },
          update:
            ((r = function () {
              return new Promise(function (t) {
                d.forceUpdate(), t(l);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (a = void 0), t(r());
                    });
                  })),
                a
              );
            }),
          destroy: function t() {
            u(), (c = !0);
          },
        };
      if (!eK(e, i)) return d;
      function u() {
        h.forEach(function (t) {
          return t();
        }),
          (h = []);
      }
      return (
        d.setOptions(n).then(function (t) {
          !c && n.onFirstUpdate && n.onFirstUpdate(t);
        }),
        d
      );
    };
  }
  var e6 = eX(),
    eQ = eX({ defaultModifiers: [eL, e7, eY, ed] }),
    eJ = eX({ defaultModifiers: [eL, e7, eY, ed, eG, e2, e5, eE, e3] });
  let it = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          popperGenerator: eX,
          detectOverflow: eV,
          createPopperBase: e6,
          createPopper: eJ,
          createPopperLite: eQ,
          top: "top",
          bottom: t1,
          right: tU,
          left: tV,
          auto: t2,
          basePlacements: t4,
          start: tq,
          end: "end",
          clippingParents: t3,
          viewport: tG,
          popper: t7,
          reference: t5,
          variationPlacements: tZ,
          placements: tK,
          beforeRead: tX,
          read: t6,
          afterRead: tQ,
          beforeMain: tJ,
          main: et,
          afterMain: ee,
          beforeWrite: ei,
          write: es,
          afterWrite: en,
          modifierPhases: eo,
          applyStyles: ed,
          arrow: eE,
          computeStyles: eY,
          eventListeners: eL,
          flip: e2,
          hide: e3,
          offset: eG,
          popperOffsets: e7,
          preventOverflow: e5,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    ie = "dropdown",
    ii = ".bs.dropdown",
    is = ".data-api",
    io = "ArrowDown",
    ir = `hide${ii}`,
    ia = `hidden${ii}`,
    il = `show${ii}`,
    ih = `shown${ii}`,
    ic = `click${ii}${is}`,
    id = `keydown${ii}${is}`,
    iu = `keyup${ii}${is}`,
    ip = "show",
    im = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ig = `${im}.${ip}`,
    i8 = ".dropdown-menu",
    iv = y() ? "top-end" : "top-start",
    iy = y() ? "top-start" : "top-end",
    i$ = y() ? "bottom-end" : "bottom-start",
    ib = y() ? "bottom-start" : "bottom-end",
    iw = y() ? "left-start" : "right-start",
    ix = y() ? "right-start" : "left-start",
    ik = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    i_ = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class iC extends V {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          te.next(this._element, i8)[0] ||
          te.prev(this._element, i8)[0] ||
          te.findOne(i8, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return ik;
    }
    static get DefaultType() {
      return i_;
    }
    static get NAME() {
      return ie;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (d(this._element) || this._isShown()) return;
      let t = { relatedTarget: this._element },
        e = W.trigger(this._element, il, t);
      if (!e.defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (let i of [].concat(...document.body.children))
            W.on(i, "mouseover", p);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(ip),
          this._element.classList.add(ip),
          W.trigger(this._element, ih, t);
      }
    }
    hide() {
      if (d(this._element) || !this._isShown()) return;
      let t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      let e = W.trigger(this._element, ir, t);
      if (!e.defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (let i of [].concat(...document.body.children))
            W.off(i, "mouseover", p);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(ip),
          this._element.classList.remove(ip),
          this._element.setAttribute("aria-expanded", "false"),
          B.removeDataAttribute(this._menu, "popper"),
          W.trigger(this._element, ia, t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !l(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw TypeError(
          `${ie.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === it)
        throw TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : l(this._config.reference)
        ? (t = h(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      let e = this._getPopperConfig();
      this._popper = eJ(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(ip);
    }
    _getPlacement() {
      let t = this._parent;
      if (t.classList.contains("dropend")) return iw;
      if (t.classList.contains("dropstart")) return ix;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      let e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? iy : iv) : e ? ib : i$;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      let { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      let t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (B.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      let i = te
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter((t) => c(t));
      i.length && x(i, e, t === io, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = iC.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      let e = te.find(ig);
      for (let i of e) {
        let s = iC.getInstance(i);
        if (!s || !1 === s._config.autoClose) continue;
        let n = t.composedPath(),
          o = n.includes(s._menu);
        if (
          n.includes(s._element) ||
          ("inside" === s._config.autoClose && !o) ||
          ("outside" === s._config.autoClose && o) ||
          (s._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName)))
        )
          continue;
        let r = { relatedTarget: s._element };
        "click" === t.type && (r.clickEvent = t), s._completeHide(r);
      }
    }
    static dataApiKeydownHandler(t) {
      let e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        s = ["ArrowUp", io].includes(t.key);
      if ((!s && !i) || (e && !i)) return;
      t.preventDefault();
      let n = this.matches(im)
          ? this
          : te.prev(this, im)[0] ||
            te.next(this, im)[0] ||
            te.findOne(im, t.delegateTarget.parentNode),
        o = iC.getOrCreateInstance(n);
      if (s) {
        t.stopPropagation(), o.show(), o._selectMenuItem(t);
        return;
      }
      o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
    }
  }
  W.on(document, id, im, iC.dataApiKeydownHandler),
    W.on(document, id, i8, iC.dataApiKeydownHandler),
    W.on(document, ic, iC.clearMenus),
    W.on(document, iu, iC.clearMenus),
    W.on(document, ic, im, function (t) {
      t.preventDefault(), iC.getOrCreateInstance(this).toggle();
    }),
    $(iC);
  let iD = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    iS = ".sticky-top",
    iT = "padding-right",
    i9 = "margin-right";
  class iM {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      let t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      let t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, iT, (e) => e + t),
        this._setElementAttributes(iD, iT, (e) => e + t),
        this._setElementAttributes(iS, i9, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, iT),
        this._resetElementAttributes(iD, iT),
        this._resetElementAttributes(iS, i9);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      let s = this.getWidth(),
        n = (t) => {
          if (t !== this._element && window.innerWidth > t.clientWidth + s)
            return;
          this._saveInitialAttribute(t, e);
          let n = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, `${i(Number.parseFloat(n))}px`);
        };
      this._applyManipulationCallback(t, n);
    }
    _saveInitialAttribute(t, e) {
      let i = t.style.getPropertyValue(e);
      i && B.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      let i = (t) => {
        let i = B.getDataAttribute(t, e);
        if (null === i) {
          t.style.removeProperty(e);
          return;
        }
        B.removeDataAttribute(t, e), t.style.setProperty(e, i);
      };
      this._applyManipulationCallback(t, i);
    }
    _applyManipulationCallback(t, e) {
      if (l(t)) {
        e(t);
        return;
      }
      for (let i of te.find(t, this._element)) e(i);
    }
  }
  let iE = "backdrop",
    iP = "show",
    iA = `mousedown.bs.${iE}`,
    iO = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    iY = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class iI extends U {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return iO;
    }
    static get DefaultType() {
      return iY;
    }
    static get NAME() {
      return iE;
    }
    show(t) {
      if (!this._config.isVisible) {
        b(t);
        return;
      }
      this._append();
      let e = this._getElement();
      this._config.isAnimated && f(e),
        e.classList.add(iP),
        this._emulateAnimation(() => {
          b(t);
        });
    }
    hide(t) {
      if (!this._config.isVisible) {
        b(t);
        return;
      }
      this._getElement().classList.remove(iP),
        this._emulateAnimation(() => {
          this.dispose(), b(t);
        });
    }
    dispose() {
      this._isAppended &&
        (W.off(this._element, iA),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        let t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = h(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      let t = this._getElement();
      this._config.rootElement.append(t),
        W.on(t, iA, () => {
          b(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      w(t, this._getElement(), this._config.isAnimated);
    }
  }
  let iL = ".bs.focustrap",
    i0 = `focusin${iL}`,
    iH = `keydown.tab${iL}`,
    iW = "backward",
    iF = { autofocus: !0, trapElement: null },
    iz = { autofocus: "boolean", trapElement: "element" };
  class iN extends U {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return iF;
    }
    static get DefaultType() {
      return iz;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      !this._isActive &&
        (this._config.autofocus && this._config.trapElement.focus(),
        W.off(document, iL),
        W.on(document, i0, (t) => this._handleFocusin(t)),
        W.on(document, iH, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), W.off(document, iL));
    }
    _handleFocusin(t) {
      let { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      let i = te.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === iW
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? iW : "forward");
    }
  }
  let iR = ".bs.modal",
    ij = `hide${iR}`,
    iB = `hidePrevented${iR}`,
    i1 = `hidden${iR}`,
    iU = `show${iR}`,
    iV = `shown${iR}`,
    i2 = `resize${iR}`,
    i4 = `click.dismiss${iR}`,
    iq = `mousedown.dismiss${iR}`,
    i3 = `keydown.dismiss${iR}`,
    iG = `click${iR}.data-api`,
    i7 = "modal-open",
    i5 = "show",
    iZ = "modal-static",
    iK = { backdrop: !0, focus: !0, keyboard: !0 },
    iX = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class i6 extends V {
    constructor(t, e) {
      super(t, e),
        (this._dialog = te.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new iM()),
        this._addEventListeners();
    }
    static get Default() {
      return iK;
    }
    static get DefaultType() {
      return iX;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      let e = W.trigger(this._element, iU, { relatedTarget: t });
      !e.defaultPrevented &&
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(i7),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      let t = W.trigger(this._element, ij);
      !t.defaultPrevented &&
        ((this._isShown = !1),
        (this._isTransitioning = !0),
        this._focustrap.deactivate(),
        this._element.classList.remove(i5),
        this._queueCallback(
          () => this._hideModal(),
          this._element,
          this._isAnimated()
        ));
    }
    dispose() {
      for (let t of [window, this._dialog]) W.off(t, iR);
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new iI({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new iN({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      let e = te.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0), f(this._element), this._element.classList.add(i5);
      let i = () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          W.trigger(this._element, iV, { relatedTarget: t });
      };
      this._queueCallback(i, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      W.on(this._element, i3, (t) => {
        if ("Escape" === t.key) {
          if (this._config.keyboard) {
            t.preventDefault(), this.hide();
            return;
          }
          this._triggerBackdropTransition();
        }
      }),
        W.on(window, i2, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        W.on(this._element, iq, (t) => {
          W.one(this._element, i4, (e) => {
            if (this._element === t.target && this._element === e.target) {
              if ("static" === this._config.backdrop) {
                this._triggerBackdropTransition();
                return;
              }
              this._config.backdrop && this.hide();
            }
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(i7),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            W.trigger(this._element, i1);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      let t = W.trigger(this._element, iB);
      if (t.defaultPrevented) return;
      let e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        i = this._element.style.overflowY;
      !("hidden" === i || this._element.classList.contains(iZ)) &&
        (e || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(iZ),
        this._queueCallback(() => {
          this._element.classList.remove(iZ),
            this._queueCallback(() => {
              this._element.style.overflowY = i;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      let t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        let s = y() ? "paddingLeft" : "paddingRight";
        this._element.style[s] = `${e}px`;
      }
      if (!i && t) {
        let n = y() ? "paddingRight" : "paddingLeft";
        this._element.style[n] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let i = i6.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  W.on(document, iG, '[data-bs-toggle="modal"]', function (t) {
    let e = o(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      W.one(e, iU, (t) => {
        !t.defaultPrevented &&
          W.one(e, i1, () => {
            c(this) && this.focus();
          });
      });
    let i = te.findOne(".modal.show");
    i && i6.getInstance(i).hide();
    let s = i6.getOrCreateInstance(e);
    s.toggle(this);
  }),
    q(i6),
    $(i6);
  let iQ = ".bs.offcanvas",
    iJ = ".data-api",
    st = `load${iQ}${iJ}`,
    se = "show",
    si = "showing",
    ss = "hiding",
    sn = ".offcanvas.show",
    so = `show${iQ}`,
    sr = `shown${iQ}`,
    sa = `hide${iQ}`,
    sl = `hidePrevented${iQ}`,
    sh = `hidden${iQ}`,
    sc = `resize${iQ}`,
    sd = `click${iQ}${iJ}`,
    su = `keydown.dismiss${iQ}`,
    sp = { backdrop: !0, keyboard: !0, scroll: !1 },
    sf = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class sm extends V {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return sp;
    }
    static get DefaultType() {
      return sf;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      let e = W.trigger(this._element, so, { relatedTarget: t });
      if (e.defaultPrevented) return;
      (this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new iM().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(si);
      let i = () => {
        (!this._config.scroll || this._config.backdrop) &&
          this._focustrap.activate(),
          this._element.classList.add(se),
          this._element.classList.remove(si),
          W.trigger(this._element, sr, { relatedTarget: t });
      };
      this._queueCallback(i, this._element, !0);
    }
    hide() {
      if (!this._isShown) return;
      let t = W.trigger(this._element, sa);
      if (t.defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.add(ss),
        this._backdrop.hide();
      let e = () => {
        this._element.classList.remove(se, ss),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          this._config.scroll || new iM().reset(),
          W.trigger(this._element, sh);
      };
      this._queueCallback(e, this._element, !0);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      let t = () => {
          if ("static" === this._config.backdrop) {
            W.trigger(this._element, sl);
            return;
          }
          this.hide();
        },
        e = Boolean(this._config.backdrop);
      return new iI({
        className: "offcanvas-backdrop",
        isVisible: e,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: e ? t : null,
      });
    }
    _initializeFocusTrap() {
      return new iN({ trapElement: this._element });
    }
    _addEventListeners() {
      W.on(this._element, su, (t) => {
        if ("Escape" === t.key) {
          if (!this._config.keyboard) {
            W.trigger(this._element, sl);
            return;
          }
          this.hide();
        }
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = sm.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  W.on(document, sd, '[data-bs-toggle="offcanvas"]', function (t) {
    let e = o(this);
    if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)))
      return;
    W.one(e, sh, () => {
      c(this) && this.focus();
    });
    let i = te.findOne(sn);
    i && i !== e && sm.getInstance(i).hide();
    let s = sm.getOrCreateInstance(e);
    s.toggle(this);
  }),
    W.on(window, st, () => {
      for (let t of te.find(sn)) sm.getOrCreateInstance(t).show();
    }),
    W.on(window, sc, () => {
      for (let t of te.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          sm.getOrCreateInstance(t).hide();
    }),
    q(sm),
    $(sm);
  let sg = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    s8 = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    sv =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    sy = (t, e) => {
      let i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !sg.has(i) || Boolean(s8.test(t.nodeValue) || sv.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    s$ = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    sb = {
      allowList: s$,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    sw = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    sx = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class sk extends U {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return sb;
    }
    static get DefaultType() {
      return sw;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      let t = document.createElement("div");
      for (let [e, i] of ((t.innerHTML = this._maybeSanitize(
        this._config.template
      )),
      Object.entries(this._config.content)))
        this._setContent(t, i, e);
      let s = t.children[0],
        n = this._resolvePossibleFunction(this._config.extraClass);
      return n && s.classList.add(...n.split(" ")), s;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (let [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, sx);
    }
    _setContent(t, e, i) {
      let s = te.findOne(i, t);
      if (s) {
        if (!(e = this._resolvePossibleFunction(e))) {
          s.remove();
          return;
        }
        if (l(e)) {
          this._putElementInTemplate(h(e), s);
          return;
        }
        if (this._config.html) {
          s.innerHTML = this._maybeSanitize(e);
          return;
        }
        s.textContent = e;
      }
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function t(e, i, s) {
            if (!e.length) return e;
            if (s && "function" == typeof s) return s(e);
            let n = new window.DOMParser(),
              o = n.parseFromString(e, "text/html"),
              r = [].concat(...o.body.querySelectorAll("*"));
            for (let a of r) {
              let l = a.nodeName.toLowerCase();
              if (!Object.keys(i).includes(l)) {
                a.remove();
                continue;
              }
              let h = [].concat(...a.attributes),
                c = [].concat(i["*"] || [], i[l] || []);
              for (let d of h) sy(d, c) || a.removeAttribute(d.nodeName);
            }
            return o.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) {
        (e.innerHTML = ""), e.append(t);
        return;
      }
      e.textContent = t.textContent;
    }
  }
  let s_ = new Set(["sanitize", "allowList", "sanitizeFn"]),
    sC = "fade",
    sD = "show",
    sS = ".modal",
    sT = "hide.bs.modal",
    s9 = "hover",
    sM = "focus",
    sE = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: y() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: y() ? "right" : "left",
    },
    sP = {
      allowList: s$,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    sA = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class sO extends V {
    constructor(t, e) {
      if (void 0 === it)
        throw TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return sP;
    }
    static get DefaultType() {
      return sA;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (this._isEnabled) {
        if (
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown())
        ) {
          this._leave();
          return;
        }
        this._enter();
      }
    }
    dispose() {
      clearTimeout(this._timeout),
        W.off(this._element.closest(sS), sT, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw Error("Please use show on visible elements");
      if (!(this._isWithContent() && this._isEnabled)) return;
      let t = W.trigger(this._element, this.constructor.eventName("show")),
        e = u(this._element),
        i = (e || this._element.ownerDocument.documentElement).contains(
          this._element
        );
      if (t.defaultPrevented || !i) return;
      this.tip && (this.tip.remove(), (this.tip = null));
      let s = this._getTipElement();
      this._element.setAttribute("aria-describedby", s.getAttribute("id"));
      let { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(s),
          W.trigger(this._element, this.constructor.eventName("inserted"))),
        this._popper
          ? this._popper.update()
          : (this._popper = this._createPopper(s)),
        s.classList.add(sD),
        "ontouchstart" in document.documentElement)
      )
        for (let o of [].concat(...document.body.children))
          W.on(o, "mouseover", p);
      let r = () => {
        W.trigger(this._element, this.constructor.eventName("shown")),
          !1 === this._isHovered && this._leave(),
          (this._isHovered = !1);
      };
      this._queueCallback(r, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) return;
      let t = W.trigger(this._element, this.constructor.eventName("hide"));
      if (t.defaultPrevented) return;
      let e = this._getTipElement();
      if ((e.classList.remove(sD), "ontouchstart" in document.documentElement))
        for (let i of [].concat(...document.body.children))
          W.off(i, "mouseover", p);
      (this._activeTrigger.click = !1),
        (this._activeTrigger[sM] = !1),
        (this._activeTrigger[s9] = !1),
        (this._isHovered = null);
      let s = () => {
        !this._isWithActiveTrigger() &&
          (this._isHovered || e.remove(),
          this._element.removeAttribute("aria-describedby"),
          W.trigger(this._element, this.constructor.eventName("hidden")),
          this._disposePopper());
      };
      this._queueCallback(s, this.tip, this._isAnimated());
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      let e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(sC, sD),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      let s = i(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", s), this._isAnimated() && e.classList.add(sC), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new sk({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(sC))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(sD);
    }
    _createPopper(t) {
      let e =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, t, this._element)
            : this._config.placement,
        i = sE[e.toUpperCase()];
      return eJ(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      let { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      let e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _setListeners() {
      let t = this._config.trigger.split(" ");
      for (let e of t)
        if ("click" === e)
          W.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              let e = this._initializeOnDelegatedTarget(t);
              e.toggle();
            }
          );
        else if ("manual" !== e) {
          let i =
              e === s9
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            s =
              e === s9
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          W.on(this._element, i, this._config.selector, (t) => {
            let e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? sM : s9] = !0), e._enter();
          }),
            W.on(this._element, s, this._config.selector, (t) => {
              let e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? sM : s9] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        W.on(this._element.closest(sS), sT, this._hideModalHandler);
    }
    _fixTitle() {
      let t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = !0;
        return;
      }
      (this._isHovered = !0),
        this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show);
    }
    _leave() {
      !this._isWithActiveTrigger() &&
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      let e = B.getDataAttributes(this._element);
      for (let i of Object.keys(e)) s_.has(i) && delete e[i];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : h(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      let t = {};
      for (let e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = sO.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  $(sO);
  let sY = {
      ...sO.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    sI = { ...sO.DefaultType, content: "(null|string|element|function)" };
  class sL extends sO {
    static get Default() {
      return sY;
    }
    static get DefaultType() {
      return sI;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = sL.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  $(sL);
  let s0 = ".bs.scrollspy",
    sH = `activate${s0}`,
    sW = `click${s0}`,
    sF = `load${s0}.data-api`,
    sz = "active",
    sN = "[href]",
    sR = ".nav-link",
    sj = `${sR}, .nav-item > ${sR}, .list-group-item`,
    sB = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    s1 = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class sU extends V {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return sB;
    }
    static get DefaultType() {
      return s1;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      for (let t of (this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver()),
      this._observableSections.values()))
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = h(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (W.off(this._config.target, sW),
        W.on(this._config.target, sW, sN, (t) => {
          let e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            let i = this._rootElement || window,
              s = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo) {
              i.scrollTo({ top: s, behavior: "smooth" });
              return;
            }
            i.scrollTop = s;
          }
        }));
    }
    _getNewObserver() {
      let t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      let e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        s = (this._rootElement || document.documentElement).scrollTop,
        n = s >= this._previousScrollData.parentScrollTop;
      for (let o of ((this._previousScrollData.parentScrollTop = s), t)) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        let r = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (n && r) {
          if ((i(o), !s)) return;
          continue;
        }
        n || r || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      let t = te.find(sN, this._config.target);
      for (let e of t) {
        if (!e.hash || d(e)) continue;
        let i = te.findOne(e.hash, this._element);
        c(i) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, i));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(sz),
        this._activateParents(t),
        W.trigger(this._element, sH, { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item")) {
        te.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(
          sz
        );
        return;
      }
      for (let e of te.parents(t, ".nav, .list-group"))
        for (let i of te.prev(e, sj)) i.classList.add(sz);
    }
    _clearActiveClass(t) {
      t.classList.remove(sz);
      let e = te.find(`${sN}.${sz}`, t);
      for (let i of e) i.classList.remove(sz);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = sU.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  W.on(window, sF, () => {
    for (let t of te.find('[data-bs-spy="scroll"]')) sU.getOrCreateInstance(t);
  }),
    $(sU);
  let sV = ".bs.tab",
    s2 = `hide${sV}`,
    s4 = `hidden${sV}`,
    sq = `show${sV}`,
    s3 = `shown${sV}`,
    sG = `click${sV}`,
    s7 = `keydown${sV}`,
    s5 = `load${sV}`,
    sZ = "ArrowRight",
    sK = "ArrowDown",
    sX = "active",
    s6 = "fade",
    sQ = "show",
    sJ = ":not(.dropdown-toggle)",
    nt = `.nav-link${sJ}, .list-group-item${sJ}, [role="tab"]${sJ}`,
    ne =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    ni = `${nt}, ${ne}`,
    ns = `.${sX}[data-bs-toggle="tab"], .${sX}[data-bs-toggle="pill"], .${sX}[data-bs-toggle="list"]`;
  class nn extends V {
    constructor(t) {
      if (
        (super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        !this._parent)
      )
        return;
      this._setInitialAttributes(this._parent, this._getChildren()),
        W.on(this._element, s7, (t) => this._keydown(t));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      let t = this._element;
      if (this._elemIsActive(t)) return;
      let e = this._getActiveElem(),
        i = e ? W.trigger(e, s2, { relatedTarget: t }) : null,
        s = W.trigger(t, sq, { relatedTarget: e });
      !s.defaultPrevented &&
        (!i || !i.defaultPrevented) &&
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(sX), this._activate(o(t));
      let i = () => {
        if ("tab" !== t.getAttribute("role")) {
          t.classList.add(sQ);
          return;
        }
        t.removeAttribute("tabindex"),
          t.setAttribute("aria-selected", !0),
          this._toggleDropDown(t, !0),
          W.trigger(t, s3, { relatedTarget: e });
      };
      this._queueCallback(i, t, t.classList.contains(s6));
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(sX), t.blur(), this._deactivate(o(t));
      let i = () => {
        if ("tab" !== t.getAttribute("role")) {
          t.classList.remove(sQ);
          return;
        }
        t.setAttribute("aria-selected", !1),
          t.setAttribute("tabindex", "-1"),
          this._toggleDropDown(t, !1),
          W.trigger(t, s4, { relatedTarget: e });
      };
      this._queueCallback(i, t, t.classList.contains(s6));
    }
    _keydown(t) {
      if (!["ArrowLeft", sZ, "ArrowUp", sK].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      let e = [sZ, sK].includes(t.key),
        i = x(
          this._getChildren().filter((t) => !d(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), nn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return te.find(ni, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      for (let i of (this._setAttributeIfNotExists(t, "role", "tablist"), e))
        this._setInitialAttributesOnChild(i);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      let e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      let e = o(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id &&
          this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      let i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      let s = (t, s) => {
        let n = te.findOne(t, i);
        n && n.classList.toggle(s, e);
      };
      s(".dropdown-toggle", sX),
        s(".dropdown-menu", sQ),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(sX);
    }
    _getInnerElement(t) {
      return t.matches(ni) ? t : te.findOne(ni, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = nn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  W.on(document, sG, ne, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      !d(this) && nn.getOrCreateInstance(this).show();
  }),
    W.on(window, s5, () => {
      for (let t of te.find(ns)) nn.getOrCreateInstance(t);
    }),
    $(nn);
  let no = ".bs.toast",
    nr = `mouseover${no}`,
    na = `mouseout${no}`,
    nl = `focusin${no}`,
    nh = `focusout${no}`,
    nc = `hide${no}`,
    nd = `hidden${no}`,
    nu = `show${no}`,
    np = `shown${no}`,
    nf = "hide",
    nm = "show",
    ng = "showing",
    n8 = { animation: "boolean", autohide: "boolean", delay: "number" },
    nv = { animation: !0, autohide: !0, delay: 5e3 };
  class ny extends V {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return nv;
    }
    static get DefaultType() {
      return n8;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      let t = W.trigger(this._element, nu);
      if (t.defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      let e = () => {
        this._element.classList.remove(ng),
          W.trigger(this._element, np),
          this._maybeScheduleHide();
      };
      this._element.classList.remove(nf),
        f(this._element),
        this._element.classList.add(nm, ng),
        this._queueCallback(e, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) return;
      let t = W.trigger(this._element, nc);
      if (t.defaultPrevented) return;
      let e = () => {
        this._element.classList.add(nf),
          this._element.classList.remove(ng, nm),
          W.trigger(this._element, nd);
      };
      this._element.classList.add(ng),
        this._queueCallback(e, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(nm),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(nm);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        !this._hasMouseInteraction &&
        !this._hasKeyboardInteraction &&
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) {
        this._clearTimeout();
        return;
      }
      let i = t.relatedTarget;
      !(this._element === i || this._element.contains(i)) &&
        this._maybeScheduleHide();
    }
    _setListeners() {
      W.on(this._element, nr, (t) => this._onInteraction(t, !0)),
        W.on(this._element, na, (t) => this._onInteraction(t, !1)),
        W.on(this._element, nl, (t) => this._onInteraction(t, !0)),
        W.on(this._element, nh, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = ny.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    q(ny),
    $(ny),
    {
      Alert: X,
      Button: tt,
      Carousel: tP,
      Collapse: tB,
      Dropdown: iC,
      Modal: i6,
      Offcanvas: sm,
      Popover: sL,
      ScrollSpy: sU,
      Tab: nn,
      Toast: ny,
      Tooltip: sO,
    }
  );
}),
  (function (t, e, i, s) {
    function n(e, i) {
      var o = this;
      "object" == typeof i &&
        (delete i.refresh, delete i.render, t.extend(this, i)),
        (this.$element = t(e)),
        !this.imageSrc &&
          this.$element.is("img") &&
          (this.imageSrc = this.$element.attr("src"));
      var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
      if (
        (r.length < 1 && r.push("center"),
        1 == r.length && r.push(r[0]),
        ("top" == r[0] ||
          "bottom" == r[0] ||
          "left" == r[1] ||
          "right" == r[1]) &&
          (r = [r[1], r[0]]),
        s !== this.positionX && (r[0] = this.positionX.toLowerCase()),
        s !== this.positionY && (r[1] = this.positionY.toLowerCase()),
        (o.positionX = r[0]),
        (o.positionY = r[1]),
        "left" != this.positionX &&
          "right" != this.positionX &&
          (isNaN(parseInt(this.positionX))
            ? (this.positionX = "center")
            : (this.positionX = parseInt(this.positionX))),
        "top" != this.positionY &&
          "bottom" != this.positionY &&
          (isNaN(parseInt(this.positionY))
            ? (this.positionY = "center")
            : (this.positionY = parseInt(this.positionY))),
        (this.position =
          this.positionX +
          (isNaN(this.positionX) ? "" : "px") +
          " " +
          this.positionY +
          (isNaN(this.positionY) ? "" : "px")),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
      )
        return (
          this.imageSrc &&
            this.iosFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: 'url("' + this.imageSrc + '")',
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this
        );
      if (navigator.userAgent.match(/(Android)/))
        return (
          this.imageSrc &&
            this.androidFix &&
            !this.$element.is("img") &&
            this.$element.css({
              backgroundImage: 'url("' + this.imageSrc + '")',
              backgroundSize: "cover",
              backgroundPosition: this.position,
            }),
          this
        );
      this.$mirror = t("<div />").prependTo(this.mirrorContainer);
      var a = this.$element.find(">.parallax-slider"),
        l = !1;
      0 == a.length
        ? (this.$slider = t("<img />").prependTo(this.$mirror))
        : ((this.$slider = a.prependTo(this.$mirror)), (l = !0)),
        this.$mirror
          .addClass("parallax-mirror")
          .css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
          }),
        this.$slider.addClass("parallax-slider").one("load", function () {
          (o.naturalHeight && o.naturalWidth) ||
            ((o.naturalHeight = this.naturalHeight || this.height || 1),
            (o.naturalWidth = this.naturalWidth || this.width || 1)),
            (o.aspectRatio = o.naturalWidth / o.naturalHeight),
            n.isSetup || n.setup(),
            n.sliders.push(o),
            (n.isFresh = !1),
            n.requestRender();
        }),
        l || (this.$slider[0].src = this.imageSrc),
        ((this.naturalHeight && this.naturalWidth) ||
          this.$slider[0].complete ||
          a.length > 0) &&
          this.$slider.trigger("load");
    }
    (function () {
      for (
        var t = 0, i = ["ms", "moz", "webkit", "o"], s = 0;
        s < i.length && !e.requestAnimationFrame;
        ++s
      )
        (e.requestAnimationFrame = e[i[s] + "RequestAnimationFrame"]),
          (e.cancelAnimationFrame =
            e[i[s] + "CancelAnimationFrame"] ||
            e[i[s] + "CancelRequestAnimationFrame"]);
      e.requestAnimationFrame ||
        (e.requestAnimationFrame = function (i) {
          var s = new Date().getTime(),
            n = Math.max(0, 16 - (s - t)),
            o = e.setTimeout(function () {
              i(s + n);
            }, n);
          return (t = s + n), o;
        }),
        e.cancelAnimationFrame ||
          (e.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          });
    })(),
      t.extend(n.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: 1,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        mirrorContainer: "body",
        refresh: function () {
          (this.boxWidth = this.$element.outerWidth()),
            (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
            (this.boxOffsetTop = this.$element.offset().top - this.bleed),
            (this.boxOffsetLeft = this.$element.offset().left),
            (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
          var t,
            e = n.winHeight,
            i = n.docHeight,
            s = Math.min(this.boxOffsetTop, i - e),
            o = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
            r = (this.boxHeight + (s - o) * (1 - this.speed)) | 0,
            a = ((this.boxOffsetTop - s) * (1 - this.speed)) | 0;
          r * this.aspectRatio >= this.boxWidth
            ? ((this.imageWidth = (r * this.aspectRatio) | 0),
              (this.imageHeight = r),
              (this.offsetBaseTop = a),
              (t = this.imageWidth - this.boxWidth),
              "left" == this.positionX
                ? (this.offsetLeft = 0)
                : "right" == this.positionX
                ? (this.offsetLeft = -t)
                : isNaN(this.positionX)
                ? (this.offsetLeft = (-t / 2) | 0)
                : (this.offsetLeft = Math.max(this.positionX, -t)))
            : ((this.imageWidth = this.boxWidth),
              (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
              (this.offsetLeft = 0),
              (t = this.imageHeight - r),
              "top" == this.positionY
                ? (this.offsetBaseTop = a)
                : "bottom" == this.positionY
                ? (this.offsetBaseTop = a - t)
                : isNaN(this.positionY)
                ? (this.offsetBaseTop = (a - t / 2) | 0)
                : (this.offsetBaseTop = a + Math.max(this.positionY, -t)));
        },
        render: function () {
          var t = n.scrollTop,
            e = n.scrollLeft,
            i = this.overScrollFix ? n.overScroll : 0,
            s = t + n.winHeight;
          this.boxOffsetBottom > t && this.boxOffsetTop <= s
            ? ((this.visibility = "visible"),
              (this.mirrorTop = this.boxOffsetTop - t),
              (this.mirrorLeft = this.boxOffsetLeft - e),
              (this.offsetTop =
                this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
            : (this.visibility = "hidden"),
            this.$mirror.css({
              transform:
                "translate3d(" +
                this.mirrorLeft +
                "px, " +
                (this.mirrorTop - i) +
                "px, 0px)",
              visibility: this.visibility,
              height: this.boxHeight,
              width: this.boxWidth,
            }),
            this.$slider.css({
              transform:
                "translate3d(" +
                this.offsetLeft +
                "px, " +
                this.offsetTop +
                "px, 0px)",
              position: "absolute",
              height: this.imageHeight,
              width: this.imageWidth,
              maxWidth: "none",
            });
        },
      }),
      t.extend(n, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1073741824,
        docWidth: 1073741824,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
          if (!this.isReady) {
            var s = this,
              o = t(i),
              r = t(e),
              a = function () {
                (n.winHeight = r.height()),
                  (n.winWidth = r.width()),
                  (n.docHeight = o.height()),
                  (n.docWidth = o.width());
              },
              l = function () {
                var t = r.scrollTop(),
                  e = n.docHeight - n.winHeight,
                  i = n.docWidth - n.winWidth;
                (n.scrollTop = Math.max(0, Math.min(e, t))),
                  (n.scrollLeft = Math.max(0, Math.min(i, r.scrollLeft()))),
                  (n.overScroll = Math.max(t - e, Math.min(t, 0)));
              };
            r
              .on("resize.px.parallax load.px.parallax", function () {
                a(), s.refresh(), (n.isFresh = !1), n.requestRender();
              })
              .on("scroll.px.parallax load.px.parallax", function () {
                l(), n.requestRender();
              }),
              a(),
              l(),
              (this.isReady = !0);
            var h = -1;
            (function t() {
              if (h == e.pageYOffset) return e.requestAnimationFrame(t), !1;
              (h = e.pageYOffset), s.render(), e.requestAnimationFrame(t);
            })();
          }
        },
        configure: function (e) {
          "object" == typeof e &&
            (delete e.refresh, delete e.render, t.extend(this.prototype, e));
        },
        refresh: function () {
          t.each(this.sliders, function () {
            this.refresh();
          }),
            (this.isFresh = !0);
        },
        render: function () {
          this.isFresh || this.refresh(),
            t.each(this.sliders, function () {
              this.render();
            });
        },
        requestRender: function () {
          var t = this;
          t.render(), (t.isBusy = !1);
        },
        destroy: function (i) {
          var s,
            o = t(i).data("px.parallax");
          for (o.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
            this.sliders[s] == o && this.sliders.splice(s, 1);
          t(i).data("px.parallax", !1),
            0 === this.sliders.length &&
              (t(e).off(
                "scroll.px.parallax resize.px.parallax load.px.parallax"
              ),
              (this.isReady = !1),
              (n.isSetup = !1));
        },
      });
    var o = t.fn.parallax;
    (t.fn.parallax = function s(o) {
      return this.each(function () {
        var s = t(this),
          r = "object" == typeof o && o;
        this == e || this == i || s.is("body")
          ? n.configure(r)
          : s.data("px.parallax")
          ? "object" == typeof o && t.extend(s.data("px.parallax"), r)
          : ((r = t.extend({}, s.data(), r)),
            s.data("px.parallax", new n(this, r))),
          "string" == typeof o && ("destroy" == o ? n.destroy(this) : n[o]());
      });
    }),
      (t.fn.parallax.Constructor = n),
      (t.fn.parallax.noConflict = function () {
        return (t.fn.parallax = o), this;
      }),
      t(function () {
        t('[data-parallax="scroll"]').parallax();
      });
  })(jQuery, window, document),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (t) {
    var e,
      i,
      s,
      n,
      o,
      r,
      a = "Close",
      l = "BeforeClose",
      h = "MarkupParse",
      c = "Open",
      d = "Change",
      u = ".mfp",
      p = "mfp-ready",
      f = "mfp-removing",
      m = "mfp-prevent-close",
      g = function () {},
      v = !!window.jQuery,
      y = t(window),
      $ = function (t, i) {
        e.ev.on("mfp" + t + u, i);
      },
      b = function (e, i, s, n) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + e),
          s && (o.innerHTML = s),
          n ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)),
          o
        );
      },
      w = function (i, s) {
        e.ev.triggerHandler("mfp" + i, s),
          e.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            e.st.callbacks[i] &&
              e.st.callbacks[i].apply(e, t.isArray(s) ? s : [s]));
      },
      x = function (i) {
        return (
          (i === r && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(
              e.st.closeMarkup.replace("%title%", e.st.tClose)
            )),
            (r = i)),
          e.currTemplate.closeBtn
        );
      },
      k = function () {
        t.magnificPopup.instance ||
          ((e = new g()).init(), (t.magnificPopup.instance = e));
      },
      _ = function () {
        var t = document.createElement("p").style,
          e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition) return !0;
        for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
        return !1;
      };
    (g.prototype = {
      constructor: g,
      init: function () {
        var i = navigator.appVersion;
        (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
          (e.isAndroid = /android/gi.test(i)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (e.supportsTransition = _()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (s = t(document)),
          (e.popupsCache = {});
      },
      open: function (i) {
        if (!1 === i.isObj) {
          (e.items = i.items.toArray()), (e.index = 0);
          var n,
            r,
            a = i.items;
          for (n = 0; n < a.length; n++)
            if (((r = a[n]).parsed && (r = r.el[0]), r === i.el[0])) {
              e.index = n;
              break;
            }
        } else
          (e.items = t.isArray(i.items) ? i.items : [i.items]),
            (e.index = i.index || 0);
        if (e.isOpen) {
          e.updateItemHTML();
          return;
        }
        (e.types = []),
          (o = ""),
          i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = s),
          i.key
            ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
              (e.currTemplate = e.popupsCache[i.key]))
            : (e.currTemplate = {}),
          (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
          (e.fixedContentPos =
            "auto" === e.st.fixedContentPos
              ? !e.probablyMobile
              : e.st.fixedContentPos),
          e.st.modal &&
            ((e.st.closeOnContentClick = !1),
            (e.st.closeOnBgClick = !1),
            (e.st.showCloseBtn = !1),
            (e.st.enableEscapeKey = !1)),
          e.bgOverlay ||
            ((e.bgOverlay = b("bg").on("click" + u, function () {
              e.close();
            })),
            (e.wrap = b("wrap")
              .attr("tabindex", -1)
              .on("click" + u, function (t) {
                e._checkIfClose(t.target) && e.close();
              })),
            (e.container = b("container", e.wrap))),
          (e.contentContainer = b("content")),
          e.st.preloader &&
            (e.preloader = b("preloader", e.container, e.st.tLoading));
        var l = t.magnificPopup.modules;
        for (n = 0; n < l.length; n++) {
          var d = l[n];
          e["init" + (d = d.charAt(0).toUpperCase() + d.slice(1))].call(e);
        }
        w("BeforeOpen"),
          e.st.showCloseBtn &&
            (e.st.closeBtnInside
              ? ($(h, function (t, e, i, s) {
                  i.close_replaceWith = x(s.type);
                }),
                (o += " mfp-close-btn-in"))
              : e.wrap.append(x())),
          e.st.alignTop && (o += " mfp-align-top"),
          e.fixedContentPos
            ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY,
              })
            : e.wrap.css({ top: y.scrollTop(), position: "absolute" }),
          (!1 !== e.st.fixedBgPos &&
            ("auto" !== e.st.fixedBgPos || e.fixedContentPos)) ||
            e.bgOverlay.css({ height: s.height(), position: "absolute" }),
          e.st.enableEscapeKey &&
            s.on("keyup" + u, function (t) {
              27 === t.keyCode && e.close();
            }),
          y.on("resize" + u, function () {
            e.updateSize();
          }),
          e.st.closeOnContentClick || (o += " mfp-auto-cursor"),
          o && e.wrap.addClass(o);
        var f = (e.wH = y.height()),
          m = {};
        if (e.fixedContentPos && e._hasScrollBar(f)) {
          var g = e._getScrollbarSize();
          g && (m.marginRight = g);
        }
        e.fixedContentPos &&
          (e.isIE7
            ? t("body, html").css("overflow", "hidden")
            : (m.overflow = "hidden"));
        var v = e.st.mainClass;
        return (
          e.isIE7 && (v += " mfp-ie7"),
          v && e._addClassToMFP(v),
          e.updateItemHTML(),
          w("BuildControls"),
          t("html").css(m),
          e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)),
          (e._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            e.content
              ? (e._addClassToMFP(p), e._setFocus())
              : e.bgOverlay.addClass(p),
              s.on("focusin" + u, e._onFocusIn);
          }, 16),
          (e.isOpen = !0),
          e.updateSize(f),
          w(c),
          i
        );
      },
      close: function () {
        e.isOpen &&
          (w(l),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP(f),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        w(a);
        var i = f + " " + p + " ";
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (i += e.st.mainClass + " "),
          e._removeClassFromMFP(i),
          e.fixedContentPos)
        ) {
          var n = { marginRight: "" };
          e.isIE7 ? t("body, html").css("overflow", "") : (n.overflow = ""),
            t("html").css(n);
        }
        s.off("keyup" + u + " focusin" + u),
          e.ev.off(u),
          e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          e.bgOverlay.attr("class", "mfp-bg"),
          e.container.attr("class", "mfp-container"),
          e.st.showCloseBtn &&
            (!e.st.closeBtnInside || !0 === e.currTemplate[e.currItem.type]) &&
            e.currTemplate.closeBtn &&
            e.currTemplate.closeBtn.detach(),
          e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          w("AfterClose");
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            s = window.innerHeight * i;
          e.wrap.css("height", s), (e.wH = s);
        } else e.wH = t || y.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), w("Resize");
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(),
          e.content && e.content.detach(),
          i.parsed || (i = e.parseEl(e.index));
        var s = i.type;
        if (
          (w("BeforeChange", [e.currItem ? e.currItem.type : "", s]),
          (e.currItem = i),
          !e.currTemplate[s])
        ) {
          var o = !!e.st[s] && e.st[s].markup;
          w("FirstMarkupParse", o),
            o ? (e.currTemplate[s] = t(o)) : (e.currTemplate[s] = !0);
        }
        n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
        var r = e["get" + s.charAt(0).toUpperCase() + s.slice(1)](
          i,
          e.currTemplate[s]
        );
        e.appendContent(r, s),
          (i.preloaded = !0),
          w(d, i),
          (n = i.type),
          e.container.prepend(e.contentContainer),
          w("AfterChange");
      },
      appendContent: function (t, i) {
        (e.content = t),
          t
            ? e.st.showCloseBtn &&
              e.st.closeBtnInside &&
              !0 === e.currTemplate[i]
              ? e.content.find(".mfp-close").length || e.content.append(x())
              : (e.content = t)
            : (e.content = ""),
          w("BeforeAppend"),
          e.container.addClass("mfp-" + i + "-holder"),
          e.contentContainer.append(e.content);
      },
      parseEl: function (i) {
        var s,
          n = e.items[i];
        if (
          (n.tagName
            ? (n = { el: t(n) })
            : ((s = n.type), (n = { data: n, src: n.src })),
          n.el)
        ) {
          for (var o = e.types, r = 0; r < o.length; r++)
            if (n.el.hasClass("mfp-" + o[r])) {
              s = o[r];
              break;
            }
          (n.src = n.el.attr("data-mfp-src")),
            n.src || (n.src = n.el.attr("href"));
        }
        return (
          (n.type = s || e.st.type || "inline"),
          (n.index = i),
          (n.parsed = !0),
          (e.items[i] = n),
          w("ElementParse", n),
          e.items[i]
        );
      },
      addGroup: function (t, i) {
        var s = function (s) {
          (s.mfpEl = this), e._openClick(s, t, i);
        };
        i || (i = {});
        var n = "click.magnificPopup";
        (i.mainEl = t),
          i.items
            ? ((i.isObj = !0), t.off(n).on(n, s))
            : ((i.isObj = !1),
              i.delegate
                ? t.off(n).on(n, i.delegate, s)
                : ((i.items = t), t.off(n).on(n, s)));
      },
      _openClick: function (i, s, n) {
        if (
          (void 0 !== n.midClick
            ? n.midClick
            : t.magnificPopup.defaults.midClick) ||
          (2 !== i.which &&
            !i.ctrlKey &&
            !i.metaKey &&
            !i.altKey &&
            !i.shiftKey)
        ) {
          var o =
            void 0 !== n.disableOn
              ? n.disableOn
              : t.magnificPopup.defaults.disableOn;
          if (o) {
            if (t.isFunction(o)) {
              if (!o.call(e)) return !0;
            } else if (y.width() < o) return !0;
          }
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
            (n.el = t(i.mfpEl)),
            n.delegate && (n.items = s.find(n.delegate)),
            e.open(n);
        }
      },
      updateStatus: function (t, s) {
        if (e.preloader) {
          i !== t && e.container.removeClass("mfp-s-" + i),
            s || "loading" !== t || (s = e.st.tLoading);
          var n = { status: t, text: s };
          w("UpdateStatus", n),
            (t = n.status),
            (s = n.text),
            e.preloader.html(s),
            e.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass(m)) {
          var s = e.st.closeOnContentClick,
            n = e.st.closeOnBgClick;
          if (
            (s && n) ||
            !e.content ||
            t(i).hasClass("mfp-close") ||
            (e.preloader && i === e.preloader[0])
          )
            return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (s) return !0;
          } else if (n && t.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (e.isIE7 ? s.height() : document.body.scrollHeight) >
          (t || y.height())
        );
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (i) {
        if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target))
          return e._setFocus(), !1;
      },
      _parseMarkup: function (e, i, s) {
        var n;
        s.data && (i = t.extend(s.data, i)),
          w(h, [e, i, s]),
          t.each(i, function (i, s) {
            if (void 0 === s || !1 === s) return !0;
            if ((n = i.split("_")).length > 1) {
              var o = e.find(u + "-" + n[0]);
              if (o.length > 0) {
                var r = n[1];
                "replaceWith" === r
                  ? o[0] !== s[0] && o.replaceWith(s)
                  : "img" === r
                  ? o.is("img")
                    ? o.attr("src", s)
                    : o.replaceWith(
                        t("<img>").attr("src", s).attr("class", o.attr("class"))
                      )
                  : o.attr(n[1], s);
              }
            } else e.find(u + "-" + i).html(s);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          (t.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: g.prototype,
        modules: [],
        open: function (e, i) {
          return (
            k(),
            ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = i || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, i) {
          i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close"></button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (t.fn.magnificPopup = function (i) {
        k();
        var s = t(this);
        if ("string" == typeof i) {
          if ("open" === i) {
            var n,
              o = v ? s.data("magnificPopup") : s[0].magnificPopup,
              r = parseInt(arguments[1], 10) || 0;
            o.items
              ? (n = o.items[r])
              : ((n = s),
                o.delegate && (n = n.find(o.delegate)),
                (n = n.eq(r))),
              e._openClick({ mfpEl: n }, s, o);
          } else
            e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        } else
          (i = t.extend(!0, {}, i)),
            v ? s.data("magnificPopup", i) : (s[0].magnificPopup = i),
            e.addGroup(s, i);
        return s;
      });
    var C,
      D,
      S,
      T = "inline",
      M = function () {
        S && (D.after(S.addClass(C)).detach(), (S = null));
      };
    t.magnificPopup.registerModule(T, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          e.types.push(T),
            $(a + "." + T, function () {
              M();
            });
        },
        getInline: function (i, s) {
          if ((M(), i.src)) {
            var n = e.st.inline,
              o = t(i.src);
            if (o.length) {
              var r = o[0].parentNode;
              r &&
                r.tagName &&
                (D || ((D = b((C = n.hiddenClass))), (C = "mfp-" + C)),
                (S = o.after(D).detach().removeClass(C))),
                e.updateStatus("ready");
            } else e.updateStatus("error", n.tNotFound), (o = t("<div>"));
            return (i.inlineElement = o), o;
          }
          return e.updateStatus("ready"), e._parseMarkup(s, {}, i), s;
        },
      },
    });
    var E,
      P = "ajax",
      A = function () {
        E && t(document.body).removeClass(E);
      },
      O = function () {
        A(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule(P, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push(P),
            (E = e.st.ajax.cursor),
            $(a + "." + P, O),
            $("BeforeChange." + P, O);
        },
        getAjax: function (i) {
          E && t(document.body).addClass(E), e.updateStatus("loading");
          var s = t.extend(
            {
              url: i.src,
              success: function (s, n, o) {
                var r = { data: s, xhr: o };
                w("ParseAjax", r),
                  e.appendContent(t(r.data), P),
                  (i.finished = !0),
                  A(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass(p);
                  }, 16),
                  e.updateStatus("ready"),
                  w("AjaxContentAdded");
              },
              error: function () {
                A(),
                  (i.finished = i.loadError = !0),
                  e.updateStatus(
                    "error",
                    e.st.ajax.tError.replace("%url%", i.src)
                  );
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(s)), "";
        },
      },
    });
    var Y,
      I,
      L = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var s = e.st.image.titleSrc;
        if (s) {
          if (t.isFunction(s)) return s.call(e, i);
          if (i.el) return i.el.attr(s) || "";
        }
        return "";
      };
    t.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var i = e.st.image,
            s = ".image";
          e.types.push("image"),
            $(c + s, function () {
              "image" === e.currItem.type &&
                i.cursor &&
                t(document.body).addClass(i.cursor);
            }),
            $(a + s, function () {
              i.cursor && t(document.body).removeClass(i.cursor),
                y.off("resize" + u);
            }),
            $("Resize" + s, e.resizeImage),
            e.isLowIE && $("AfterChange", e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE &&
              (i =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", e.wH - i);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            Y && clearInterval(Y),
            (t.isCheckingImgSize = !1),
            w("ImageHasSize", t),
            t.imgHidden &&
              (e.content && e.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var i = 0,
            s = t.img[0],
            n = function (o) {
              Y && clearInterval(Y),
                (Y = setInterval(function () {
                  if (s.naturalWidth > 0) {
                    e._onImageHasSize(t);
                    return;
                  }
                  i > 200 && clearInterval(Y),
                    3 == ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500);
                }, o));
            };
          n(1);
        },
        getImage: function (i, s) {
          var n = 0,
            o = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off(".mfploader"),
                    i === e.currItem &&
                      (e._onImageHasSize(i), e.updateStatus("ready")),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    w("ImageLoadComplete"))
                  : ++n < 200
                  ? setTimeout(o, 100)
                  : r());
            },
            r = function () {
              i &&
                (i.img.off(".mfploader"),
                i === e.currItem &&
                  (e._onImageHasSize(i),
                  e.updateStatus("error", a.tError.replace("%url%", i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            a = e.st.image,
            l = s.find(".mfp-img");
          if (l.length) {
            var h = document.createElement("img");
            (h.className = "mfp-img"),
              i.el &&
                i.el.find("img").length &&
                (h.alt = i.el.find("img").attr("alt")),
              (i.img = t(h).on("load.mfploader", o).on("error.mfploader", r)),
              (h.src = i.src),
              l.is("img") && (i.img = i.img.clone()),
              (h = i.img[0]).naturalWidth > 0
                ? (i.hasSize = !0)
                : h.width || (i.hasSize = !1);
          }
          return (e._parseMarkup(s, { title: L(i), img_replaceWith: i.img }, i),
          e.resizeImage(),
          i.hasSize)
            ? (Y && clearInterval(Y),
              i.loadError
                ? (s.addClass("mfp-loading"),
                  e.updateStatus("error", a.tError.replace("%url%", i.src)))
                : (s.removeClass("mfp-loading"), e.updateStatus("ready")),
              s)
            : (e.updateStatus("loading"),
              (i.loading = !0),
              i.hasSize ||
                ((i.imgHidden = !0),
                s.addClass("mfp-loading"),
                e.findImageSize(i)),
              s);
        },
      },
    }),
      t.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (t) {
            return t.is("img") ? t : t.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var t,
              i = e.st.zoom,
              s = ".zoom";
            if (i.enabled && e.supportsTransition) {
              var n,
                o,
                r = i.duration,
                h = function (t) {
                  var e = t
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    s = "all " + i.duration / 1e3 + "s " + i.easing,
                    n = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    o = "transition";
                  return (
                    (n["-webkit-" + o] =
                      n["-moz-" + o] =
                      n["-o-" + o] =
                      n[o] =
                        s),
                    e.css(n),
                    e
                  );
                },
                c = function () {
                  e.content.css("visibility", "visible");
                };
              $("BuildControls" + s, function () {
                if (e._allowZoom()) {
                  if (
                    (clearTimeout(n),
                    e.content.css("visibility", "hidden"),
                    !(t = e._getItemToZoom()))
                  ) {
                    c();
                    return;
                  }
                  (o = h(t)).css(e._getOffset()),
                    e.wrap.append(o),
                    (n = setTimeout(function () {
                      o.css(e._getOffset(!0)),
                        (n = setTimeout(function () {
                          c(),
                            setTimeout(function () {
                              o.remove(),
                                (t = o = null),
                                w("ZoomAnimationEnded");
                            }, 16);
                        }, r));
                    }, 16));
                }
              }),
                $(l + s, function () {
                  if (e._allowZoom()) {
                    if ((clearTimeout(n), (e.st.removalDelay = r), !t)) {
                      if (!(t = e._getItemToZoom())) return;
                      o = h(t);
                    }
                    o.css(e._getOffset(!0)),
                      e.wrap.append(o),
                      e.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        o.css(e._getOffset());
                      }, 16);
                  }
                }),
                $(a + s, function () {
                  e._allowZoom() && (c(), o && o.remove(), (t = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === e.currItem.type;
          },
          _getItemToZoom: function () {
            return !!e.currItem.hasSize && e.currItem.img;
          },
          _getOffset: function (i) {
            var s,
              n = (s = i
                ? e.currItem.img
                : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
              o = parseInt(s.css("padding-top"), 10),
              r = parseInt(s.css("padding-bottom"), 10);
            n.top -= t(window).scrollTop() - o;
            var a = {
              width: s.width(),
              height: (v ? s.innerHeight() : s[0].offsetHeight) - r - o,
            };
            return (
              (void 0 === I &&
                (I = void 0 !== document.createElement("p").style.MozTransform),
              I)
                ? (a["-moz-transform"] = a.transform =
                    "translate(" + n.left + "px," + n.top + "px)")
                : ((a.left = n.left), (a.top = n.top)),
              a
            );
          },
        },
      });
    var H = "iframe",
      W = function (t) {
        if (e.currTemplate[H]) {
          var i = e.currTemplate[H].find("iframe");
          i.length &&
            (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"));
        }
      };
    t.magnificPopup.registerModule(H, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push(H),
            $("BeforeChange", function (t, e, i) {
              e !== i && (e === H ? W() : i === H && W(!0));
            }),
            $(a + "." + H, function () {
              W();
            });
        },
        getIframe: function (i, s) {
          var n = i.src,
            o = e.st.iframe;
          t.each(o.patterns, function () {
            if (n.indexOf(this.index) > -1)
              return (
                this.id &&
                  (n =
                    "string" == typeof this.id
                      ? n.substr(
                          n.lastIndexOf(this.id) + this.id.length,
                          n.length
                        )
                      : this.id.call(this, n)),
                (n = this.src.replace("%id%", n)),
                !1
              );
          });
          var r = {};
          return (
            o.srcAction && (r[o.srcAction] = n),
            e._parseMarkup(s, r, i),
            e.updateStatus("ready"),
            s
          );
        },
      },
    });
    var F = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : t < 0 ? i + t : t;
      },
      z = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            n = ".mfp-gallery";
          if (((e.direction = !0), !i || !i.enabled)) return !1;
          (o += " mfp-gallery"),
            $(c + n, function () {
              i.navigateByImgClick &&
                e.wrap.on("click" + n, ".mfp-img", function () {
                  if (e.items.length > 1) return e.next(), !1;
                }),
                s.on("keydown" + n, function (t) {
                  37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                });
            }),
            $("UpdateStatus" + n, function (t, i) {
              i.text && (i.text = z(i.text, e.currItem.index, e.items.length));
            }),
            $(h + n, function (t, s, n, o) {
              var r = e.items.length;
              n.counter = r > 1 ? z(i.tCounter, o.index, r) : "";
            }),
            $("BuildControls" + n, function () {
              if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                var s = i.arrowMarkup,
                  n = (e.arrowLeft = t(
                    s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(m)),
                  o = (e.arrowRight = t(
                    s.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")
                  ).addClass(m));
                n.click(function () {
                  e.prev();
                }),
                  o.click(function () {
                    e.next();
                  }),
                  e.container.append(n.add(o));
              }
            }),
            $(d + n, function () {
              e._preloadTimeout && clearTimeout(e._preloadTimeout),
                (e._preloadTimeout = setTimeout(function () {
                  e.preloadNearbyImages(), (e._preloadTimeout = null);
                }, 16));
            }),
            $(a + n, function () {
              s.off(n),
                e.wrap.off("click" + n),
                (e.arrowRight = e.arrowLeft = null);
            });
        },
        next: function () {
          (e.direction = !0), (e.index = F(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = F(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            i = e.st.gallery.preload,
            s = Math.min(i[0], e.items.length),
            n = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? n : s); t++)
            e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? s : n); t++)
            e._preloadItem(e.index - t);
        },
        _preloadItem: function (i) {
          if (((i = F(i)), !e.items[i].preloaded)) {
            var s = e.items[i];
            s.parsed || (s = e.parseEl(i)),
              w("LazyLoad", s),
              "image" === s.type &&
                (s.img = t('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    s.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (s.hasSize = !0), (s.loadError = !0), w("LazyLoadError", s);
                  })
                  .attr("src", s.src)),
              (s.preloaded = !0);
          }
        },
      },
    });
    var N = "retina";
    t.magnificPopup.registerModule(N, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              ($("ImageHasSize." + N, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              $("ElementParse." + N, function (e, s) {
                s.src = t.replaceSrc(s, i);
              }));
          }
        },
      },
    }),
      k();
  }),
  /*! WOW - v1.1.3 - 2016-05-06
   * Copyright (c) 2016 Matthieu Aussaguel;*/ function () {
    var t,
      e,
      i,
      s,
      n,
      o = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      r =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (e = (function () {
      function t() {}
      return (
        (t.prototype.extend = function (t, e) {
          var i, s;
          for (i in e) (s = e[i]), null == t[i] && (t[i] = s);
          return t;
        }),
        (t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            t
          );
        }),
        (t.prototype.createEvent = function (t, e, i, s) {
          var n;
          return (
            null == e && (e = !1),
            null == i && (i = !1),
            null == s && (s = null),
            null != document.createEvent
              ? (n = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  e,
                  i,
                  s
                )
              : null != document.createEventObject
              ? ((n = document.createEventObject()).eventType = t)
              : (n.eventName = t),
            n
          );
        }),
        (t.prototype.emitEvent = function (t, e) {
          return null != t.dispatchEvent
            ? t.dispatchEvent(e)
            : e in (null != t)
            ? t[e]()
            : "on" + e in (null != t)
            ? t["on" + e]()
            : void 0;
        }),
        (t.prototype.addEvent = function (t, e, i) {
          return null != t.addEventListener
            ? t.addEventListener(e, i, !1)
            : null != t.attachEvent
            ? t.attachEvent("on" + e, i)
            : (t[e] = i);
        }),
        (t.prototype.removeEvent = function (t, e, i) {
          return null != t.removeEventListener
            ? t.removeEventListener(e, i, !1)
            : null != t.detachEvent
            ? t.detachEvent("on" + e, i)
            : delete t[e];
        }),
        (t.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        t
      );
    })()),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        (i = (function () {
          function t() {
            (this.keys = []), (this.values = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e, i, s, n, o;
              for (o = this.keys, e = s = 0, n = o.length; s < n; e = ++s)
                if ((i = o[e]) === t) return this.values[e];
            }),
            (t.prototype.set = function (t, e) {
              var i, s, n, o, r;
              for (r = this.keys, i = n = 0, o = r.length; n < o; i = ++n)
                if ((s = r[i]) === t) {
                  this.values[i] = e;
                  return;
                }
              return this.keys.push(t), this.values.push(e);
            }),
            t
          );
        })())),
      (t =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (t = (function () {
          function t() {
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "MutationObserver is not supported by your browser."
              ),
              "undefined" != typeof console &&
                null !== console &&
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                );
          }
          return (
            (t.notSupported = !0), (t.prototype.observe = function () {}), t
          );
        })())),
      (s =
        this.getComputedStyle ||
        function (t, e) {
          return (
            (this.getPropertyValue = function (e) {
              var i;
              return (
                "float" === e && (e = "styleFloat"),
                n.test(e) &&
                  e.replace(n, function (t, e) {
                    return e.toUpperCase();
                  }),
                (null != (i = t.currentStyle) ? i[e] : void 0) || null
              );
            }),
            this
          );
        }),
      (n = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function n(t) {
          null == t && (t = {}),
            (this.scrollCallback = o(this.scrollCallback, this)),
            (this.scrollHandler = o(this.scrollHandler, this)),
            (this.resetAnimation = o(this.resetAnimation, this)),
            (this.start = o(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(t, this.defaults)),
            null != t.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                t.scrollContainer
              )),
            (this.animationNameCache = new i()),
            (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
          (n.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
          }),
          (n.prototype.init = function () {
            var t;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (t = document.readyState) || "complete" === t
                ? this.start()
                : this.util().addEvent(
                    document,
                    "DOMContentLoaded",
                    this.start
                  ),
              (this.finished = [])
            );
          }),
          (n.prototype.start = function () {
            var e, i, s, n, o;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var t, i, s, n;
                for (
                  t = 0,
                    s = this.element.querySelectorAll(
                      "." + this.config.boxClass
                    ),
                    n = [],
                    i = s.length;
                  t < i;
                  t++
                )
                  (e = s[t]), n.push(e);
                return n;
              }.call(this)),
              (this.all = function () {
                var t, i, s, n;
                for (t = 0, s = this.boxes, n = [], i = s.length; t < i; t++)
                  (e = s[t]), n.push(e);
                return n;
              }.call(this)),
              this.boxes.length)
            ) {
              if (this.disabled()) this.resetStyle();
              else
                for (i = 0, s = (n = this.boxes).length; i < s; i++)
                  (e = n[i]), this.applyStyle(e, !0);
            }
            if (
              (this.disabled() ||
                (this.util().addEvent(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live)
            )
              return new t(
                ((o = this),
                function (t) {
                  var e, i, s, n, r;
                  for (e = 0, r = [], i = t.length; e < i; e++)
                    (n = t[e]),
                      r.push(
                        function () {
                          var t, e, i, o;
                          for (
                            t = 0, i = n.addedNodes || [], o = [], e = i.length;
                            t < e;
                            t++
                          )
                            (s = i[t]), o.push(this.doSync(s));
                          return o;
                        }.call(o)
                      );
                  return r;
                })
              ).observe(document.body, { childList: !0, subtree: !0 });
          }),
          (n.prototype.stop = function () {
            if (
              ((this.stopped = !0),
              this.util().removeEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval)
            )
              return clearInterval(this.interval);
          }),
          (n.prototype.sync = function (e) {
            if (t.notSupported) return this.doSync(this.element);
          }),
          (n.prototype.doSync = function (t) {
            var e, i, s, n, o;
            if ((null == t && (t = this.element), 1 === t.nodeType)) {
              for (
                i = 0,
                  n = (t = t.parentNode || t).querySelectorAll(
                    "." + this.config.boxClass
                  ),
                  o = [],
                  s = n.length;
                i < s;
                i++
              )
                (e = n[i]),
                  0 > r.call(this.all, e)
                    ? (this.boxes.push(e),
                      this.all.push(e),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(e, !0),
                      o.push((this.scrolled = !0)))
                    : o.push(void 0);
              return o;
            }
          }),
          (n.prototype.show = function (t) {
            return (
              this.applyStyle(t),
              (t.className = t.className + " " + this.config.animateClass),
              null != this.config.callback && this.config.callback(t),
              this.util().emitEvent(t, this.wowEvent),
              this.util().addEvent(t, "animationend", this.resetAnimation),
              this.util().addEvent(t, "oanimationend", this.resetAnimation),
              this.util().addEvent(
                t,
                "webkitAnimationEnd",
                this.resetAnimation
              ),
              this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
              t
            );
          }),
          (n.prototype.applyStyle = function (t, e) {
            var i, s, n, o;
            return (
              (s = t.getAttribute("data-wow-duration")),
              (i = t.getAttribute("data-wow-delay")),
              (n = t.getAttribute("data-wow-iteration")),
              this.animate(
                ((o = this),
                function () {
                  return o.customStyle(t, e, s, i, n);
                })
              )
            );
          }),
          (n.prototype.animate =
            "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                }),
          (n.prototype.resetStyle = function () {
            var t, e, i, s, n;
            for (e = 0, s = this.boxes, n = [], i = s.length; e < i; e++)
              (t = s[e]), n.push((t.style.visibility = "visible"));
            return n;
          }),
          (n.prototype.resetAnimation = function (t) {
            var e;
            if (t.type.toLowerCase().indexOf("animationend") >= 0)
              return ((e = t.target || t.srcElement).className = e.className
                .replace(this.config.animateClass, "")
                .trim());
          }),
          (n.prototype.customStyle = function (t, e, i, s, n) {
            return (
              e && this.cacheAnimationName(t),
              (t.style.visibility = e ? "hidden" : "visible"),
              i && this.vendorSet(t.style, { animationDuration: i }),
              s && this.vendorSet(t.style, { animationDelay: s }),
              n && this.vendorSet(t.style, { animationIterationCount: n }),
              this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t),
              }),
              t
            );
          }),
          (n.prototype.vendors = ["moz", "webkit"]),
          (n.prototype.vendorSet = function (t, e) {
            var i, s, n, o;
            for (i in ((s = []), e))
              (n = e[i]),
                (t["" + i] = n),
                s.push(
                  function () {
                    var e, s, r, a;
                    for (
                      e = 0, r = this.vendors, a = [], s = r.length;
                      e < s;
                      e++
                    )
                      (o = r[e]),
                        a.push(
                          (t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] =
                            n)
                        );
                    return a;
                  }.call(this)
                );
            return s;
          }),
          (n.prototype.vendorCSS = function (t, e) {
            var i, n, o, r, a, l;
            for (
              i = 0,
                r = (a = s(t)).getPropertyCSSValue(e),
                n = (o = this.vendors).length;
              i < n;
              i++
            )
              (l = o[i]), (r = r || a.getPropertyCSSValue("-" + l + "-" + e));
            return r;
          }),
          (n.prototype.animationName = function (t) {
            var e;
            try {
              e = this.vendorCSS(t, "animation-name").cssText;
            } catch (i) {
              e = s(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
          }),
          (n.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t));
          }),
          (n.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t);
          }),
          (n.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (n.prototype.scrollCallback = function () {
            var t;
            if (
              this.scrolled &&
              ((this.scrolled = !1),
              (this.boxes = function () {
                var e, i, s, n;
                for (e = 0, s = this.boxes, n = [], i = s.length; e < i; e++)
                  if ((t = s[e])) {
                    if (this.isVisible(t)) {
                      this.show(t);
                      continue;
                    }
                    n.push(t);
                  }
                return n;
              }.call(this)),
              !(this.boxes.length || this.config.live))
            )
              return this.stop();
          }),
          (n.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
            return e;
          }),
          (n.prototype.isVisible = function (t) {
            var e, i, s, n, o;
            return (
              (i = t.getAttribute("data-wow-offset") || this.config.offset),
              (n =
                (o =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset) +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                i),
              (e = (s = this.offsetTop(t)) + t.clientHeight),
              s <= n && e >= o
            );
          }),
          (n.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new e());
          }),
          (n.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          n
        );
      })());
  }.call(this),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, document, window, navigator);
        })
      : "object" == typeof exports
      ? t(require("jquery"), document, window, navigator)
      : t(jQuery, document, window, navigator);
  })(function (t, e, i, s, n) {
    "use strict";
    var o,
      r,
      a,
      l = 0,
      h =
        ((r = s.userAgent),
        (a = /msie\s\d+/i),
        r.search(a) > 0 &&
          (o = (o = a.exec(r).toString()).split(" ")[1]) < 9 &&
          (t("html").addClass("lt-ie9"), !0));
    Function.prototype.bind ||
      (Function.prototype.bind = function t(e) {
        var i = this,
          s = [].slice;
        if ("function" != typeof i) throw TypeError();
        var n = s.call(arguments, 1),
          o = function () {
            if (!(this instanceof o))
              return i.apply(e, n.concat(s.call(arguments)));
            var t = function () {};
            t.prototype = i.prototype;
            var r = new t(),
              a = i.apply(r, n.concat(s.call(arguments)));
            return Object(a) === a ? a : r;
          };
        return o;
      }),
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (t, e) {
          if (this == null) throw TypeError('"this" is null or not defined');
          var i,
            s = Object(this),
            n = s.length >>> 0;
          if (0 === n) return -1;
          var o = +e || 0;
          if ((Math.abs(o) === 1 / 0 && (o = 0), o >= n)) return -1;
          for (i = Math.max(o >= 0 ? o : n - Math.abs(o), 0); i < n; ) {
            if (i in s && s[i] === t) return i;
            i++;
          }
          return -1;
        });
    var c = function (s, o, r) {
      (this.VERSION = "2.2.0"),
        (this.input = s),
        (this.plugin_count = r),
        (this.current_plugin = 0),
        (this.calc_count = 0),
        (this.update_tm = 0),
        (this.old_from = 0),
        (this.old_to = 0),
        (this.old_min_interval = null),
        (this.raf_id = null),
        (this.dragging = !1),
        (this.force_redraw = !1),
        (this.no_diapason = !1),
        (this.has_tab_index = !0),
        (this.is_key = !1),
        (this.is_update = !1),
        (this.is_start = !0),
        (this.is_finish = !1),
        (this.is_active = !1),
        (this.is_resize = !1),
        (this.is_click = !1),
        (o = o || {}),
        (this.$cache = {
          win: t(i),
          body: t(e.body),
          input: t(s),
          cont: null,
          rs: null,
          min: null,
          max: null,
          from: null,
          to: null,
          single: null,
          bar: null,
          line: null,
          s_single: null,
          s_from: null,
          s_to: null,
          shad_single: null,
          shad_from: null,
          shad_to: null,
          edge: null,
          grid: null,
          grid_labels: [],
        }),
        (this.coords = {
          x_gap: 0,
          x_pointer: 0,
          w_rs: 0,
          w_rs_old: 0,
          w_handle: 0,
          p_gap: 0,
          p_gap_left: 0,
          p_gap_right: 0,
          p_step: 0,
          p_pointer: 0,
          p_handle: 0,
          p_single_fake: 0,
          p_single_real: 0,
          p_from_fake: 0,
          p_from_real: 0,
          p_to_fake: 0,
          p_to_real: 0,
          p_bar_x: 0,
          p_bar_w: 0,
          grid_gap: 0,
          big_num: 0,
          big: [],
          big_w: [],
          big_p: [],
          big_x: [],
        }),
        (this.labels = {
          w_min: 0,
          w_max: 0,
          w_from: 0,
          w_to: 0,
          w_single: 0,
          p_min: 0,
          p_max: 0,
          p_from_fake: 0,
          p_from_left: 0,
          p_to_fake: 0,
          p_to_left: 0,
          p_single_fake: 0,
          p_single_left: 0,
        });
      var a,
        l,
        h,
        c = this.$cache.input,
        d = c.prop("value");
      for (h in ((a = {
        type: "single",
        min: 10,
        max: 100,
        from: null,
        to: null,
        step: 1,
        min_interval: 0,
        max_interval: 0,
        drag_interval: !1,
        values: [],
        p_values: [],
        from_fixed: !1,
        from_min: null,
        from_max: null,
        from_shadow: !1,
        to_fixed: !1,
        to_min: null,
        to_max: null,
        to_shadow: !1,
        prettify_enabled: !0,
        prettify_separator: " ",
        prettify: null,
        force_edges: !1,
        keyboard: !0,
        grid: !1,
        grid_margin: !0,
        grid_num: 4,
        grid_snap: !1,
        hide_min_max: !1,
        hide_from_to: !1,
        prefix: "",
        postfix: "",
        max_postfix: "",
        decorate_both: !0,
        values_separator: " â€” ",
        input_values_separator: ";",
        disable: !1,
        block: !1,
        extra_classes: "",
        scope: null,
        onStart: null,
        onChange: null,
        onFinish: null,
        onUpdate: null,
      }),
      "INPUT" !== c[0].nodeName &&
        console &&
        console.warn &&
        console.warn("Base element should be <input>!", c[0]),
      ((l = {
        type: c.data("type"),
        min: c.data("min"),
        max: c.data("max"),
        from: c.data("from"),
        to: c.data("to"),
        step: c.data("step"),
        min_interval: c.data("minInterval"),
        max_interval: c.data("maxInterval"),
        drag_interval: c.data("dragInterval"),
        values: c.data("values"),
        from_fixed: c.data("fromFixed"),
        from_min: c.data("fromMin"),
        from_max: c.data("fromMax"),
        from_shadow: c.data("fromShadow"),
        to_fixed: c.data("toFixed"),
        to_min: c.data("toMin"),
        to_max: c.data("toMax"),
        to_shadow: c.data("toShadow"),
        prettify_enabled: c.data("prettifyEnabled"),
        prettify_separator: c.data("prettifySeparator"),
        force_edges: c.data("forceEdges"),
        keyboard: c.data("keyboard"),
        grid: c.data("grid"),
        grid_margin: c.data("gridMargin"),
        grid_num: c.data("gridNum"),
        grid_snap: c.data("gridSnap"),
        hide_min_max: c.data("hideMinMax"),
        hide_from_to: c.data("hideFromTo"),
        prefix: c.data("prefix"),
        postfix: c.data("postfix"),
        max_postfix: c.data("maxPostfix"),
        decorate_both: c.data("decorateBoth"),
        values_separator: c.data("valuesSeparator"),
        input_values_separator: c.data("inputValuesSeparator"),
        disable: c.data("disable"),
        block: c.data("block"),
        extra_classes: c.data("extraClasses"),
      }).values = l.values && l.values.split(",")),
      l))
        l.hasOwnProperty(h) && (n === l[h] || "" === l[h]) && delete l[h];
      d !== n &&
        "" !== d &&
        ((d = d.split(
          l.input_values_separator || o.input_values_separator || ";"
        ))[0] &&
          d[0] == +d[0] &&
          (d[0] = +d[0]),
        d[1] && d[1] == +d[1] && (d[1] = +d[1]),
        o && o.values && o.values.length
          ? ((a.from = d[0] && o.values.indexOf(d[0])),
            (a.to = d[1] && o.values.indexOf(d[1])))
          : ((a.from = d[0] && +d[0]), (a.to = d[1] && +d[1]))),
        t.extend(a, o),
        t.extend(a, l),
        (this.options = a),
        (this.update_check = {}),
        this.validate(),
        (this.result = {
          input: this.$cache.input,
          slider: null,
          min: this.options.min,
          max: this.options.max,
          from: this.options.from,
          from_percent: 0,
          from_value: null,
          to: this.options.to,
          to_percent: 0,
          to_value: null,
        }),
        this.init();
    };
    (c.prototype = {
      init: function (t) {
        (this.no_diapason = !1),
          (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
          (this.target = "base"),
          this.toggleInput(),
          this.append(),
          this.setMinMax(),
          t
            ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate())
            : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
          this.updateScene();
      },
      append: function () {
        var t =
          '<span class="irs js-irs-' +
          this.plugin_count +
          " " +
          this.options.extra_classes +
          '"></span>';
        this.$cache.input.before(t),
          this.$cache.input.prop("readonly", !0),
          (this.$cache.cont = this.$cache.input.prev()),
          (this.result.slider = this.$cache.cont),
          this.$cache.cont.html(
            '<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'
          ),
          (this.$cache.rs = this.$cache.cont.find(".irs")),
          (this.$cache.min = this.$cache.cont.find(".irs-min")),
          (this.$cache.max = this.$cache.cont.find(".irs-max")),
          (this.$cache.from = this.$cache.cont.find(".irs-from")),
          (this.$cache.to = this.$cache.cont.find(".irs-to")),
          (this.$cache.single = this.$cache.cont.find(".irs-single")),
          (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
          (this.$cache.line = this.$cache.cont.find(".irs-line")),
          (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
          "single" === this.options.type
            ? (this.$cache.cont.append(
                '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'
              ),
              (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
              (this.$cache.s_single = this.$cache.cont.find(".single")),
              (this.$cache.from[0].style.visibility = "hidden"),
              (this.$cache.to[0].style.visibility = "hidden"),
              (this.$cache.shad_single =
                this.$cache.cont.find(".shadow-single")))
            : (this.$cache.cont.append(
                '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'
              ),
              (this.$cache.s_from = this.$cache.cont.find(".from")),
              (this.$cache.s_to = this.$cache.cont.find(".to")),
              (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
              (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
              this.setTopHandler()),
          this.options.hide_from_to &&
            ((this.$cache.from[0].style.display = "none"),
            (this.$cache.to[0].style.display = "none"),
            (this.$cache.single[0].style.display = "none")),
          this.appendGrid(),
          this.options.disable
            ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0))
            : ((this.$cache.input[0].disabled = !1),
              this.removeDisableMask(),
              this.bindEvents()),
          this.options.disable ||
            (this.options.block
              ? this.appendDisableMask()
              : this.removeDisableMask()),
          this.options.drag_interval &&
            (this.$cache.bar[0].style.cursor = "ew-resize");
      },
      setTopHandler: function () {
        var t = this.options.min,
          e = this.options.max,
          i = this.options.from,
          s = this.options.to;
        i > t && s === e
          ? this.$cache.s_from.addClass("type_last")
          : s < e && this.$cache.s_to.addClass("type_last");
      },
      changeLevel: function (t) {
        switch (t) {
          case "single":
            (this.coords.p_gap = this.toFixed(
              this.coords.p_pointer - this.coords.p_single_fake
            )),
              this.$cache.s_single.addClass("state_hover");
            break;
          case "from":
            (this.coords.p_gap = this.toFixed(
              this.coords.p_pointer - this.coords.p_from_fake
            )),
              this.$cache.s_from.addClass("state_hover"),
              this.$cache.s_from.addClass("type_last"),
              this.$cache.s_to.removeClass("type_last");
            break;
          case "to":
            (this.coords.p_gap = this.toFixed(
              this.coords.p_pointer - this.coords.p_to_fake
            )),
              this.$cache.s_to.addClass("state_hover"),
              this.$cache.s_to.addClass("type_last"),
              this.$cache.s_from.removeClass("type_last");
            break;
          case "both":
            (this.coords.p_gap_left = this.toFixed(
              this.coords.p_pointer - this.coords.p_from_fake
            )),
              (this.coords.p_gap_right = this.toFixed(
                this.coords.p_to_fake - this.coords.p_pointer
              )),
              this.$cache.s_to.removeClass("type_last"),
              this.$cache.s_from.removeClass("type_last");
        }
      },
      appendDisableMask: function () {
        this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
          this.$cache.cont.addClass("irs-disabled");
      },
      removeDisableMask: function () {
        this.$cache.cont.remove(".irs-disable-mask"),
          this.$cache.cont.removeClass("irs-disabled");
      },
      remove: function () {
        this.$cache.cont.remove(),
          (this.$cache.cont = null),
          this.$cache.line.off("keydown.irs_" + this.plugin_count),
          this.$cache.body.off("touchmove.irs_" + this.plugin_count),
          this.$cache.body.off("mousemove.irs_" + this.plugin_count),
          this.$cache.win.off("touchend.irs_" + this.plugin_count),
          this.$cache.win.off("mouseup.irs_" + this.plugin_count),
          h &&
            (this.$cache.body.off("mouseup.irs_" + this.plugin_count),
            this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
          (this.$cache.grid_labels = []),
          (this.coords.big = []),
          (this.coords.big_w = []),
          (this.coords.big_p = []),
          (this.coords.big_x = []),
          cancelAnimationFrame(this.raf_id);
      },
      bindEvents: function () {
        !this.no_diapason &&
          (this.$cache.body.on(
            "touchmove.irs_" + this.plugin_count,
            this.pointerMove.bind(this)
          ),
          this.$cache.body.on(
            "mousemove.irs_" + this.plugin_count,
            this.pointerMove.bind(this)
          ),
          this.$cache.win.on(
            "touchend.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          ),
          this.$cache.win.on(
            "mouseup.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          ),
          this.$cache.line.on(
            "touchstart.irs_" + this.plugin_count,
            this.pointerClick.bind(this, "click")
          ),
          this.$cache.line.on(
            "mousedown.irs_" + this.plugin_count,
            this.pointerClick.bind(this, "click")
          ),
          this.$cache.line.on(
            "focus.irs_" + this.plugin_count,
            this.pointerFocus.bind(this)
          ),
          this.options.drag_interval && "double" === this.options.type
            ? (this.$cache.bar.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "both")
              ),
              this.$cache.bar.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "both")
              ))
            : (this.$cache.bar.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.bar.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              )),
          "single" === this.options.type
            ? (this.$cache.single.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "single")
              ),
              this.$cache.s_single.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "single")
              ),
              this.$cache.shad_single.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.single.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "single")
              ),
              this.$cache.s_single.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "single")
              ),
              this.$cache.edge.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.shad_single.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ))
            : (this.$cache.single.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, null)
              ),
              this.$cache.single.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, null)
              ),
              this.$cache.from.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "from")
              ),
              this.$cache.s_from.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "from")
              ),
              this.$cache.to.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "to")
              ),
              this.$cache.s_to.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "to")
              ),
              this.$cache.shad_from.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.shad_to.on(
                "touchstart.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.from.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "from")
              ),
              this.$cache.s_from.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "from")
              ),
              this.$cache.to.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "to")
              ),
              this.$cache.s_to.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerDown.bind(this, "to")
              ),
              this.$cache.shad_from.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              ),
              this.$cache.shad_to.on(
                "mousedown.irs_" + this.plugin_count,
                this.pointerClick.bind(this, "click")
              )),
          this.options.keyboard &&
            this.$cache.line.on(
              "keydown.irs_" + this.plugin_count,
              this.key.bind(this, "keyboard")
            ),
          h &&
            (this.$cache.body.on(
              "mouseup.irs_" + this.plugin_count,
              this.pointerUp.bind(this)
            ),
            this.$cache.body.on(
              "mouseleave.irs_" + this.plugin_count,
              this.pointerUp.bind(this)
            )));
      },
      pointerFocus: function (t) {
        if (!this.target) {
          var e, i;
          (e = (i =
            "single" === this.options.type
              ? this.$cache.single
              : this.$cache.from).offset().left),
            (e += i.width() / 2 - 1),
            this.pointerClick("single", {
              preventDefault: function () {},
              pageX: e,
            });
        }
      },
      pointerMove: function (t) {
        if (this.dragging) {
          var e =
            t.pageX ||
            (t.originalEvent.touches && t.originalEvent.touches[0].pageX);
          (this.coords.x_pointer = e - this.coords.x_gap), this.calc();
        }
      },
      pointerUp: function (e) {
        if (this.current_plugin === this.plugin_count)
          this.is_active &&
            ((this.is_active = !1),
            this.$cache.cont.find(".state_hover").removeClass("state_hover"),
            (this.force_redraw = !0),
            h && t("*").prop("unselectable", !1),
            this.updateScene(),
            this.restoreOriginalMinInterval(),
            (t.contains(this.$cache.cont[0], e.target) || this.dragging) &&
              this.callOnFinish(),
            (this.dragging = !1));
      },
      pointerDown: function (e, i) {
        i.preventDefault();
        var s =
          i.pageX ||
          (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
        2 !== i.button &&
          ("both" === e && this.setTempMinInterval(),
          e || (e = this.target || "from"),
          (this.current_plugin = this.plugin_count),
          (this.target = e),
          (this.is_active = !0),
          (this.dragging = !0),
          (this.coords.x_gap = this.$cache.rs.offset().left),
          (this.coords.x_pointer = s - this.coords.x_gap),
          this.calcPointerPercent(),
          this.changeLevel(e),
          h && t("*").prop("unselectable", !0),
          this.$cache.line.trigger("focus"),
          this.updateScene());
      },
      pointerClick: function (t, e) {
        e.preventDefault();
        var i =
          e.pageX ||
          (e.originalEvent.touches && e.originalEvent.touches[0].pageX);
        2 !== e.button &&
          ((this.current_plugin = this.plugin_count),
          (this.target = t),
          (this.is_click = !0),
          (this.coords.x_gap = this.$cache.rs.offset().left),
          (this.coords.x_pointer = +(i - this.coords.x_gap).toFixed()),
          (this.force_redraw = !0),
          this.calc(),
          this.$cache.line.trigger("focus"));
      },
      key: function (t, e) {
        if (
          this.current_plugin === this.plugin_count &&
          !e.altKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.metaKey
        ) {
          switch (e.which) {
            case 83:
            case 65:
            case 40:
            case 37:
              e.preventDefault(), this.moveByKey(!1);
              break;
            case 87:
            case 68:
            case 38:
            case 39:
              e.preventDefault(), this.moveByKey(!0);
          }
          return !0;
        }
      },
      moveByKey: function (t) {
        var e = this.coords.p_pointer,
          i = (this.options.max - this.options.min) / 100;
        (i = this.options.step / i),
          t ? (e += i) : (e -= i),
          (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * e)),
          (this.is_key = !0),
          this.calc();
      },
      setMinMax: function () {
        if (this.options) {
          if (this.options.hide_min_max) {
            (this.$cache.min[0].style.display = "none"),
              (this.$cache.max[0].style.display = "none");
            return;
          }
          if (this.options.values.length)
            this.$cache.min.html(
              this.decorate(this.options.p_values[this.options.min])
            ),
              this.$cache.max.html(
                this.decorate(this.options.p_values[this.options.max])
              );
          else {
            var t = this._prettify(this.options.min),
              e = this._prettify(this.options.max);
            (this.result.min_pretty = t),
              (this.result.max_pretty = e),
              this.$cache.min.html(this.decorate(t, this.options.min)),
              this.$cache.max.html(this.decorate(e, this.options.max));
          }
          (this.labels.w_min = this.$cache.min.outerWidth(!1)),
            (this.labels.w_max = this.$cache.max.outerWidth(!1));
        }
      },
      setTempMinInterval: function () {
        var t = this.result.to - this.result.from;
        null === this.old_min_interval &&
          (this.old_min_interval = this.options.min_interval),
          (this.options.min_interval = t);
      },
      restoreOriginalMinInterval: function () {
        null !== this.old_min_interval &&
          ((this.options.min_interval = this.old_min_interval),
          (this.old_min_interval = null));
      },
      calc: function (t) {
        if (this.options) {
          if (
            (this.calc_count++,
            (10 === this.calc_count || t) &&
              ((this.calc_count = 0),
              (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
              this.calcHandlePercent()),
            this.coords.w_rs)
          ) {
            this.calcPointerPercent();
            var e = this.getHandleX();
            switch (
              ("both" === this.target &&
                ((this.coords.p_gap = 0), (e = this.getHandleX())),
              "click" === this.target &&
                ((this.coords.p_gap = this.coords.p_handle / 2),
                (e = this.getHandleX()),
                this.options.drag_interval
                  ? (this.target = "both_one")
                  : (this.target = this.chooseHandle(e))),
              this.target)
            ) {
              case "base":
                var i = (this.options.max - this.options.min) / 100,
                  s = (this.result.from - this.options.min) / i,
                  n = (this.result.to - this.options.min) / i;
                (this.coords.p_single_real = this.toFixed(s)),
                  (this.coords.p_from_real = this.toFixed(s)),
                  (this.coords.p_to_real = this.toFixed(n)),
                  (this.coords.p_single_real = this.checkDiapason(
                    this.coords.p_single_real,
                    this.options.from_min,
                    this.options.from_max
                  )),
                  (this.coords.p_from_real = this.checkDiapason(
                    this.coords.p_from_real,
                    this.options.from_min,
                    this.options.from_max
                  )),
                  (this.coords.p_to_real = this.checkDiapason(
                    this.coords.p_to_real,
                    this.options.to_min,
                    this.options.to_max
                  )),
                  (this.coords.p_single_fake = this.convertToFakePercent(
                    this.coords.p_single_real
                  )),
                  (this.coords.p_from_fake = this.convertToFakePercent(
                    this.coords.p_from_real
                  )),
                  (this.coords.p_to_fake = this.convertToFakePercent(
                    this.coords.p_to_real
                  )),
                  (this.target = null);
                break;
              case "single":
                if (this.options.from_fixed) break;
                (this.coords.p_single_real = this.convertToRealPercent(e)),
                  (this.coords.p_single_real = this.calcWithStep(
                    this.coords.p_single_real
                  )),
                  (this.coords.p_single_real = this.checkDiapason(
                    this.coords.p_single_real,
                    this.options.from_min,
                    this.options.from_max
                  )),
                  (this.coords.p_single_fake = this.convertToFakePercent(
                    this.coords.p_single_real
                  ));
                break;
              case "from":
                if (this.options.from_fixed) break;
                (this.coords.p_from_real = this.convertToRealPercent(e)),
                  (this.coords.p_from_real = this.calcWithStep(
                    this.coords.p_from_real
                  )),
                  this.coords.p_from_real > this.coords.p_to_real &&
                    (this.coords.p_from_real = this.coords.p_to_real),
                  (this.coords.p_from_real = this.checkDiapason(
                    this.coords.p_from_real,
                    this.options.from_min,
                    this.options.from_max
                  )),
                  (this.coords.p_from_real = this.checkMinInterval(
                    this.coords.p_from_real,
                    this.coords.p_to_real,
                    "from"
                  )),
                  (this.coords.p_from_real = this.checkMaxInterval(
                    this.coords.p_from_real,
                    this.coords.p_to_real,
                    "from"
                  )),
                  (this.coords.p_from_fake = this.convertToFakePercent(
                    this.coords.p_from_real
                  ));
                break;
              case "to":
                if (this.options.to_fixed) break;
                (this.coords.p_to_real = this.convertToRealPercent(e)),
                  (this.coords.p_to_real = this.calcWithStep(
                    this.coords.p_to_real
                  )),
                  this.coords.p_to_real < this.coords.p_from_real &&
                    (this.coords.p_to_real = this.coords.p_from_real),
                  (this.coords.p_to_real = this.checkDiapason(
                    this.coords.p_to_real,
                    this.options.to_min,
                    this.options.to_max
                  )),
                  (this.coords.p_to_real = this.checkMinInterval(
                    this.coords.p_to_real,
                    this.coords.p_from_real,
                    "to"
                  )),
                  (this.coords.p_to_real = this.checkMaxInterval(
                    this.coords.p_to_real,
                    this.coords.p_from_real,
                    "to"
                  )),
                  (this.coords.p_to_fake = this.convertToFakePercent(
                    this.coords.p_to_real
                  ));
                break;
              case "both":
                if (this.options.from_fixed || this.options.to_fixed) break;
                (e = this.toFixed(e + 0.001 * this.coords.p_handle)),
                  (this.coords.p_from_real =
                    this.convertToRealPercent(e) - this.coords.p_gap_left),
                  (this.coords.p_from_real = this.calcWithStep(
                    this.coords.p_from_real
                  )),
                  (this.coords.p_from_real = this.checkDiapason(
                    this.coords.p_from_real,
                    this.options.from_min,
                    this.options.from_max
                  )),
                  (this.coords.p_from_real = this.checkMinInterval(
                    this.coords.p_from_real,
                    this.coords.p_to_real,
                    "from"
                  )),
                  (this.coords.p_from_fake = this.convertToFakePercent(
                    this.coords.p_from_real
                  )),
                  (this.coords.p_to_real =
                    this.convertToRealPercent(e) + this.coords.p_gap_right),
                  (this.coords.p_to_real = this.calcWithStep(
                    this.coords.p_to_real
                  )),
                  (this.coords.p_to_real = this.checkDiapason(
                    this.coords.p_to_real,
                    this.options.to_min,
                    this.options.to_max
                  )),
                  (this.coords.p_to_real = this.checkMinInterval(
                    this.coords.p_to_real,
                    this.coords.p_from_real,
                    "to"
                  )),
                  (this.coords.p_to_fake = this.convertToFakePercent(
                    this.coords.p_to_real
                  ));
                break;
              case "both_one":
                if (this.options.from_fixed || this.options.to_fixed) break;
                var o = this.convertToRealPercent(e),
                  r = this.result.from_percent,
                  a = this.result.to_percent - r,
                  l = a / 2,
                  h = o - l,
                  c = o + l;
                h < 0 && (c = (h = 0) + a),
                  c > 100 && (h = (c = 100) - a),
                  (this.coords.p_from_real = this.calcWithStep(h)),
                  (this.coords.p_from_real = this.checkDiapason(
                    this.coords.p_from_real,
                    this.options.from_min,
                    this.options.from_max
                  )),
                  (this.coords.p_from_fake = this.convertToFakePercent(
                    this.coords.p_from_real
                  )),
                  (this.coords.p_to_real = this.calcWithStep(c)),
                  (this.coords.p_to_real = this.checkDiapason(
                    this.coords.p_to_real,
                    this.options.to_min,
                    this.options.to_max
                  )),
                  (this.coords.p_to_fake = this.convertToFakePercent(
                    this.coords.p_to_real
                  ));
            }
            "single" === this.options.type
              ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
                (this.coords.p_bar_w = this.coords.p_single_fake),
                (this.result.from_percent = this.coords.p_single_real),
                (this.result.from = this.convertToValue(
                  this.coords.p_single_real
                )),
                (this.result.from_pretty = this._prettify(this.result.from)),
                this.options.values.length &&
                  (this.result.from_value =
                    this.options.values[this.result.from]))
              : ((this.coords.p_bar_x = this.toFixed(
                  this.coords.p_from_fake + this.coords.p_handle / 2
                )),
                (this.coords.p_bar_w = this.toFixed(
                  this.coords.p_to_fake - this.coords.p_from_fake
                )),
                (this.result.from_percent = this.coords.p_from_real),
                (this.result.from = this.convertToValue(
                  this.coords.p_from_real
                )),
                (this.result.from_pretty = this._prettify(this.result.from)),
                (this.result.to_percent = this.coords.p_to_real),
                (this.result.to = this.convertToValue(this.coords.p_to_real)),
                (this.result.to_pretty = this._prettify(this.result.to)),
                this.options.values.length &&
                  ((this.result.from_value =
                    this.options.values[this.result.from]),
                  (this.result.to_value =
                    this.options.values[this.result.to]))),
              this.calcMinMax(),
              this.calcLabels();
          }
        }
      },
      calcPointerPercent: function () {
        if (!this.coords.w_rs) {
          this.coords.p_pointer = 0;
          return;
        }
        this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)
          ? (this.coords.x_pointer = 0)
          : this.coords.x_pointer > this.coords.w_rs &&
            (this.coords.x_pointer = this.coords.w_rs),
          (this.coords.p_pointer = this.toFixed(
            (this.coords.x_pointer / this.coords.w_rs) * 100
          ));
      },
      convertToRealPercent: function (t) {
        return (t / (100 - this.coords.p_handle)) * 100;
      },
      convertToFakePercent: function (t) {
        return (t / 100) * (100 - this.coords.p_handle);
      },
      getHandleX: function () {
        var t = 100 - this.coords.p_handle,
          e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
        return e < 0 ? (e = 0) : e > t && (e = t), e;
      },
      calcHandlePercent: function () {
        "single" === this.options.type
          ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
          : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
          (this.coords.p_handle = this.toFixed(
            (this.coords.w_handle / this.coords.w_rs) * 100
          ));
      },
      chooseHandle: function (t) {
        return "single" === this.options.type
          ? "single"
          : t >=
            this.coords.p_from_real +
              (this.coords.p_to_real - this.coords.p_from_real) / 2
          ? this.options.to_fixed
            ? "from"
            : "to"
          : this.options.from_fixed
          ? "to"
          : "from";
      },
      calcMinMax: function () {
        this.coords.w_rs &&
          ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100),
          (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
      },
      calcLabels: function () {
        this.coords.w_rs &&
          !this.options.hide_from_to &&
          ("single" === this.options.type
            ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
              (this.labels.p_single_fake =
                (this.labels.w_single / this.coords.w_rs) * 100),
              (this.labels.p_single_left =
                this.coords.p_single_fake +
                this.coords.p_handle / 2 -
                this.labels.p_single_fake / 2),
              (this.labels.p_single_left = this.checkEdges(
                this.labels.p_single_left,
                this.labels.p_single_fake
              )))
            : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
              (this.labels.p_from_fake =
                (this.labels.w_from / this.coords.w_rs) * 100),
              (this.labels.p_from_left =
                this.coords.p_from_fake +
                this.coords.p_handle / 2 -
                this.labels.p_from_fake / 2),
              (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
              (this.labels.p_from_left = this.checkEdges(
                this.labels.p_from_left,
                this.labels.p_from_fake
              )),
              (this.labels.w_to = this.$cache.to.outerWidth(!1)),
              (this.labels.p_to_fake =
                (this.labels.w_to / this.coords.w_rs) * 100),
              (this.labels.p_to_left =
                this.coords.p_to_fake +
                this.coords.p_handle / 2 -
                this.labels.p_to_fake / 2),
              (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
              (this.labels.p_to_left = this.checkEdges(
                this.labels.p_to_left,
                this.labels.p_to_fake
              )),
              (this.labels.w_single = this.$cache.single.outerWidth(!1)),
              (this.labels.p_single_fake =
                (this.labels.w_single / this.coords.w_rs) * 100),
              (this.labels.p_single_left =
                (this.labels.p_from_left +
                  this.labels.p_to_left +
                  this.labels.p_to_fake) /
                  2 -
                this.labels.p_single_fake / 2),
              (this.labels.p_single_left = this.toFixed(
                this.labels.p_single_left
              )),
              (this.labels.p_single_left = this.checkEdges(
                this.labels.p_single_left,
                this.labels.p_single_fake
              ))));
      },
      updateScene: function () {
        this.raf_id &&
          (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
          clearTimeout(this.update_tm),
          (this.update_tm = null),
          this.options &&
            (this.drawHandles(),
            this.is_active
              ? (this.raf_id = requestAnimationFrame(
                  this.updateScene.bind(this)
                ))
              : (this.update_tm = setTimeout(
                  this.updateScene.bind(this),
                  300
                )));
      },
      drawHandles: function () {
        if (
          ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)), this.coords.w_rs)
        )
          this.coords.w_rs !== this.coords.w_rs_old &&
            ((this.target = "base"), (this.is_resize = !0)),
            (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) &&
              (this.setMinMax(),
              this.calc(!0),
              this.drawLabels(),
              this.options.grid &&
                (this.calcGridMargin(), this.calcGridLabels()),
              (this.force_redraw = !0),
              (this.coords.w_rs_old = this.coords.w_rs),
              this.drawShadow()),
            this.coords.w_rs &&
              (this.dragging || this.force_redraw || this.is_key) &&
              ((this.old_from !== this.result.from ||
                this.old_to !== this.result.to ||
                this.force_redraw ||
                this.is_key) &&
                (this.drawLabels(),
                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                "single" === this.options.type
                  ? ((this.$cache.s_single[0].style.left =
                      this.coords.p_single_fake + "%"),
                    (this.$cache.single[0].style.left =
                      this.labels.p_single_left + "%"))
                  : ((this.$cache.s_from[0].style.left =
                      this.coords.p_from_fake + "%"),
                    (this.$cache.s_to[0].style.left =
                      this.coords.p_to_fake + "%"),
                    (this.old_from !== this.result.from || this.force_redraw) &&
                      (this.$cache.from[0].style.left =
                        this.labels.p_from_left + "%"),
                    (this.old_to !== this.result.to || this.force_redraw) &&
                      (this.$cache.to[0].style.left =
                        this.labels.p_to_left + "%"),
                    (this.$cache.single[0].style.left =
                      this.labels.p_single_left + "%")),
                this.writeToInput(),
                (this.old_from === this.result.from &&
                  this.old_to === this.result.to) ||
                  this.is_start ||
                  (this.$cache.input.trigger("change"),
                  this.$cache.input.trigger("input")),
                (this.old_from = this.result.from),
                (this.old_to = this.result.to),
                this.is_resize ||
                  this.is_update ||
                  this.is_start ||
                  this.is_finish ||
                  this.callOnChange(),
                (this.is_key || this.is_click) &&
                  ((this.is_key = !1),
                  (this.is_click = !1),
                  this.callOnFinish()),
                (this.is_update = !1),
                (this.is_resize = !1),
                (this.is_finish = !1)),
              (this.is_start = !1),
              (this.is_key = !1),
              (this.is_click = !1),
              (this.force_redraw = !1));
      },
      drawLabels: function () {
        if (this.options) {
          var t,
            e,
            i,
            s,
            n,
            o = this.options.values.length,
            r = this.options.p_values;
          if (!this.options.hide_from_to) {
            if ("single" === this.options.type)
              o
                ? ((t = this.decorate(r[this.result.from])),
                  this.$cache.single.html(t))
                : ((s = this._prettify(this.result.from)),
                  (t = this.decorate(s, this.result.from)),
                  this.$cache.single.html(t)),
                this.calcLabels(),
                this.labels.p_single_left < this.labels.p_min + 1
                  ? (this.$cache.min[0].style.visibility = "hidden")
                  : (this.$cache.min[0].style.visibility = "visible"),
                this.labels.p_single_left + this.labels.p_single_fake >
                100 - this.labels.p_max - 1
                  ? (this.$cache.max[0].style.visibility = "hidden")
                  : (this.$cache.max[0].style.visibility = "visible");
            else {
              o
                ? (this.options.decorate_both
                    ? ((t = this.decorate(r[this.result.from])),
                      (t += this.options.values_separator),
                      (t += this.decorate(r[this.result.to])))
                    : (t = this.decorate(
                        r[this.result.from] +
                          this.options.values_separator +
                          r[this.result.to]
                      )),
                  (e = this.decorate(r[this.result.from])),
                  (i = this.decorate(r[this.result.to])),
                  this.$cache.single.html(t),
                  this.$cache.from.html(e),
                  this.$cache.to.html(i))
                : ((s = this._prettify(this.result.from)),
                  (n = this._prettify(this.result.to)),
                  this.options.decorate_both
                    ? ((t = this.decorate(s, this.result.from)),
                      (t += this.options.values_separator),
                      (t += this.decorate(n, this.result.to)))
                    : (t = this.decorate(
                        s + this.options.values_separator + n,
                        this.result.to
                      )),
                  (e = this.decorate(s, this.result.from)),
                  (i = this.decorate(n, this.result.to)),
                  this.$cache.single.html(t),
                  this.$cache.from.html(e),
                  this.$cache.to.html(i)),
                this.calcLabels();
              var a = Math.min(
                  this.labels.p_single_left,
                  this.labels.p_from_left
                ),
                l = this.labels.p_single_left + this.labels.p_single_fake,
                h = this.labels.p_to_left + this.labels.p_to_fake,
                c = Math.max(l, h);
              this.labels.p_from_left + this.labels.p_from_fake >=
              this.labels.p_to_left
                ? ((this.$cache.from[0].style.visibility = "hidden"),
                  (this.$cache.to[0].style.visibility = "hidden"),
                  (this.$cache.single[0].style.visibility = "visible"),
                  this.result.from === this.result.to
                    ? ("from" === this.target
                        ? (this.$cache.from[0].style.visibility = "visible")
                        : "to" === this.target
                        ? (this.$cache.to[0].style.visibility = "visible")
                        : this.target ||
                          (this.$cache.from[0].style.visibility = "visible"),
                      (this.$cache.single[0].style.visibility = "hidden"),
                      (c = h))
                    : ((this.$cache.from[0].style.visibility = "hidden"),
                      (this.$cache.to[0].style.visibility = "hidden"),
                      (this.$cache.single[0].style.visibility = "visible"),
                      (c = Math.max(l, h))))
                : ((this.$cache.from[0].style.visibility = "visible"),
                  (this.$cache.to[0].style.visibility = "visible"),
                  (this.$cache.single[0].style.visibility = "hidden")),
                a < this.labels.p_min + 1
                  ? (this.$cache.min[0].style.visibility = "hidden")
                  : (this.$cache.min[0].style.visibility = "visible"),
                c > 100 - this.labels.p_max - 1
                  ? (this.$cache.max[0].style.visibility = "hidden")
                  : (this.$cache.max[0].style.visibility = "visible");
            }
          }
        }
      },
      drawShadow: function () {
        var t,
          e,
          i,
          s,
          n = this.options,
          o = this.$cache,
          r = "number" == typeof n.from_min && !isNaN(n.from_min),
          a = "number" == typeof n.from_max && !isNaN(n.from_max),
          l = "number" == typeof n.to_min && !isNaN(n.to_min),
          h = "number" == typeof n.to_max && !isNaN(n.to_max);
        "single" === n.type
          ? n.from_shadow && (r || a)
            ? ((t = this.convertToPercent(r ? n.from_min : n.min)),
              (e = this.convertToPercent(a ? n.from_max : n.max) - t),
              (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
              (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
              (t += this.coords.p_handle / 2),
              (o.shad_single[0].style.display = "block"),
              (o.shad_single[0].style.left = t + "%"),
              (o.shad_single[0].style.width = e + "%"))
            : (o.shad_single[0].style.display = "none")
          : (n.from_shadow && (r || a)
              ? ((t = this.convertToPercent(r ? n.from_min : n.min)),
                (e = this.convertToPercent(a ? n.from_max : n.max) - t),
                (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
                (t += this.coords.p_handle / 2),
                (o.shad_from[0].style.display = "block"),
                (o.shad_from[0].style.left = t + "%"),
                (o.shad_from[0].style.width = e + "%"))
              : (o.shad_from[0].style.display = "none"),
            n.to_shadow && (l || h)
              ? ((i = this.convertToPercent(l ? n.to_min : n.min)),
                (s = this.convertToPercent(h ? n.to_max : n.max) - i),
                (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                (s = this.toFixed(s - (this.coords.p_handle / 100) * s)),
                (i += this.coords.p_handle / 2),
                (o.shad_to[0].style.display = "block"),
                (o.shad_to[0].style.left = i + "%"),
                (o.shad_to[0].style.width = s + "%"))
              : (o.shad_to[0].style.display = "none"));
      },
      writeToInput: function () {
        "single" === this.options.type
          ? (this.options.values.length
              ? this.$cache.input.prop("value", this.result.from_value)
              : this.$cache.input.prop("value", this.result.from),
            this.$cache.input.data("from", this.result.from))
          : (this.options.values.length
              ? this.$cache.input.prop(
                  "value",
                  this.result.from_value +
                    this.options.input_values_separator +
                    this.result.to_value
                )
              : this.$cache.input.prop(
                  "value",
                  this.result.from +
                    this.options.input_values_separator +
                    this.result.to
                ),
            this.$cache.input.data("from", this.result.from),
            this.$cache.input.data("to", this.result.to));
      },
      callOnStart: function () {
        this.writeToInput(),
          this.options.onStart &&
            "function" == typeof this.options.onStart &&
            (this.options.scope
              ? this.options.onStart.call(this.options.scope, this.result)
              : this.options.onStart(this.result));
      },
      callOnChange: function () {
        this.writeToInput(),
          this.options.onChange &&
            "function" == typeof this.options.onChange &&
            (this.options.scope
              ? this.options.onChange.call(this.options.scope, this.result)
              : this.options.onChange(this.result));
      },
      callOnFinish: function () {
        this.writeToInput(),
          this.options.onFinish &&
            "function" == typeof this.options.onFinish &&
            (this.options.scope
              ? this.options.onFinish.call(this.options.scope, this.result)
              : this.options.onFinish(this.result));
      },
      callOnUpdate: function () {
        this.writeToInput(),
          this.options.onUpdate &&
            "function" == typeof this.options.onUpdate &&
            (this.options.scope
              ? this.options.onUpdate.call(this.options.scope, this.result)
              : this.options.onUpdate(this.result));
      },
      toggleInput: function () {
        this.$cache.input.toggleClass("irs-hidden-input"),
          this.has_tab_index
            ? this.$cache.input.prop("tabindex", -1)
            : this.$cache.input.removeProp("tabindex"),
          (this.has_tab_index = !this.has_tab_index);
      },
      convertToPercent: function (t, e) {
        var i,
          s,
          n = this.options.max - this.options.min;
        return n
          ? ((s = (i = e ? t : t - this.options.min) / (n / 100)),
            this.toFixed(s))
          : ((this.no_diapason = !0), 0);
      },
      convertToValue: function (t) {
        var e,
          i,
          s = this.options.min,
          n = this.options.max,
          o = s.toString().split(".")[1],
          r = n.toString().split(".")[1],
          a = 0,
          l = 0;
        if (0 === t) return this.options.min;
        if (100 === t) return this.options.max;
        o && (a = e = o.length),
          r && (a = i = r.length),
          e && i && (a = e >= i ? e : i),
          s < 0 &&
            ((l = Math.abs(s)),
            (s = +(s + l).toFixed(a)),
            (n = +(n + l).toFixed(a)));
        var h,
          c = ((n - s) / 100) * t + s,
          d = this.options.step.toString().split(".")[1];
        return (
          d
            ? (c = +c.toFixed(d.length))
            : ((c /= this.options.step),
              (c *= this.options.step),
              (c = +c.toFixed(0))),
          l && (c -= l),
          (h = d ? +c.toFixed(d.length) : this.toFixed(c)) < this.options.min
            ? (h = this.options.min)
            : h > this.options.max && (h = this.options.max),
          h
        );
      },
      calcWithStep: function (t) {
        var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
        return e > 100 && (e = 100), 100 === t && (e = 100), this.toFixed(e);
      },
      checkMinInterval: function (t, e, i) {
        var s,
          n,
          o = this.options;
        return o.min_interval
          ? ((s = this.convertToValue(t)),
            (n = this.convertToValue(e)),
            "from" === i
              ? n - s < o.min_interval && (s = n - o.min_interval)
              : s - n < o.min_interval && (s = n + o.min_interval),
            this.convertToPercent(s))
          : t;
      },
      checkMaxInterval: function (t, e, i) {
        var s,
          n,
          o = this.options;
        return o.max_interval
          ? ((s = this.convertToValue(t)),
            (n = this.convertToValue(e)),
            "from" === i
              ? n - s > o.max_interval && (s = n - o.max_interval)
              : s - n > o.max_interval && (s = n + o.max_interval),
            this.convertToPercent(s))
          : t;
      },
      checkDiapason: function (t, e, i) {
        var s = this.convertToValue(t),
          n = this.options;
        return (
          "number" != typeof e && (e = n.min),
          "number" != typeof i && (i = n.max),
          s < e && (s = e),
          s > i && (s = i),
          this.convertToPercent(s)
        );
      },
      toFixed: function (t) {
        return +(t = t.toFixed(20));
      },
      _prettify: function (t) {
        return this.options.prettify_enabled
          ? this.options.prettify && "function" == typeof this.options.prettify
            ? this.options.prettify(t)
            : this.prettify(t)
          : t;
      },
      prettify: function (t) {
        return t
          .toString()
          .replace(
            /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
            "$1" + this.options.prettify_separator
          );
      },
      checkEdges: function (t, e) {
        return (
          this.options.force_edges &&
            (t < 0 ? (t = 0) : t > 100 - e && (t = 100 - e)),
          this.toFixed(t)
        );
      },
      validate: function () {
        var t,
          e,
          i = this.options,
          s = this.result,
          n = i.values,
          o = n.length;
        if (
          ("string" == typeof i.min && (i.min = +i.min),
          "string" == typeof i.max && (i.max = +i.max),
          "string" == typeof i.from && (i.from = +i.from),
          "string" == typeof i.to && (i.to = +i.to),
          "string" == typeof i.step && (i.step = +i.step),
          "string" == typeof i.from_min && (i.from_min = +i.from_min),
          "string" == typeof i.from_max && (i.from_max = +i.from_max),
          "string" == typeof i.to_min && (i.to_min = +i.to_min),
          "string" == typeof i.to_max && (i.to_max = +i.to_max),
          "string" == typeof i.grid_num && (i.grid_num = +i.grid_num),
          i.max < i.min && (i.max = i.min),
          o)
        )
          for (
            e = 0,
              i.p_values = [],
              i.min = 0,
              i.max = o - 1,
              i.step = 1,
              i.grid_num = i.max,
              i.grid_snap = !0;
            e < o;
            e++
          )
            isNaN((t = +n[e]))
              ? (t = n[e])
              : ((n[e] = t), (t = this._prettify(t))),
              i.p_values.push(t);
        ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min),
          ("number" != typeof i.to || isNaN(i.to)) && (i.to = i.max),
          "single" === i.type
            ? (i.from < i.min && (i.from = i.min),
              i.from > i.max && (i.from = i.max))
            : (i.from < i.min && (i.from = i.min),
              i.from > i.max && (i.from = i.max),
              i.to < i.min && (i.to = i.min),
              i.to > i.max && (i.to = i.max),
              this.update_check.from &&
                (this.update_check.from !== i.from &&
                  i.from > i.to &&
                  (i.from = i.to),
                this.update_check.to !== i.to &&
                  i.to < i.from &&
                  (i.to = i.from)),
              i.from > i.to && (i.from = i.to),
              i.to < i.from && (i.to = i.from)),
          ("number" != typeof i.step ||
            isNaN(i.step) ||
            !i.step ||
            i.step < 0) &&
            (i.step = 1),
          "number" == typeof i.from_min &&
            i.from < i.from_min &&
            (i.from = i.from_min),
          "number" == typeof i.from_max &&
            i.from > i.from_max &&
            (i.from = i.from_max),
          "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min),
          "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max),
          s &&
            (s.min !== i.min && (s.min = i.min),
            s.max !== i.max && (s.max = i.max),
            (s.from < s.min || s.from > s.max) && (s.from = i.from),
            (s.to < s.min || s.to > s.max) && (s.to = i.to)),
          ("number" != typeof i.min_interval ||
            isNaN(i.min_interval) ||
            !i.min_interval ||
            i.min_interval < 0) &&
            (i.min_interval = 0),
          ("number" != typeof i.max_interval ||
            isNaN(i.max_interval) ||
            !i.max_interval ||
            i.max_interval < 0) &&
            (i.max_interval = 0),
          i.min_interval &&
            i.min_interval > i.max - i.min &&
            (i.min_interval = i.max - i.min),
          i.max_interval &&
            i.max_interval > i.max - i.min &&
            (i.max_interval = i.max - i.min);
      },
      decorate: function (t, e) {
        var i = "",
          s = this.options;
        return (
          s.prefix && (i += s.prefix),
          (i += t),
          s.max_postfix &&
            (s.values.length && t === s.p_values[s.max]
              ? ((i += s.max_postfix), s.postfix && (i += " "))
              : e === s.max && ((i += s.max_postfix), s.postfix && (i += " "))),
          s.postfix && (i += s.postfix),
          i
        );
      },
      updateFrom: function () {
        (this.result.from = this.options.from),
          (this.result.from_percent = this.convertToPercent(this.result.from)),
          (this.result.from_pretty = this._prettify(this.result.from)),
          this.options.values &&
            (this.result.from_value = this.options.values[this.result.from]);
      },
      updateTo: function () {
        (this.result.to = this.options.to),
          (this.result.to_percent = this.convertToPercent(this.result.to)),
          (this.result.to_pretty = this._prettify(this.result.to)),
          this.options.values &&
            (this.result.to_value = this.options.values[this.result.to]);
      },
      updateResult: function () {
        (this.result.min = this.options.min),
          (this.result.max = this.options.max),
          this.updateFrom(),
          this.updateTo();
      },
      appendGrid: function () {
        if (this.options.grid) {
          var t,
            e,
            i,
            s,
            n,
            o = this.options,
            r = o.max - o.min,
            a = o.grid_num,
            l = 0,
            h = 0,
            c = 4,
            d = 0,
            u = "";
          for (
            this.calcGridMargin(),
              o.grid_snap
                ? r > 50
                  ? ((a = 50 / o.step), (l = this.toFixed(o.step / 0.5)))
                  : ((a = r / o.step), (l = this.toFixed(o.step / (r / 100))))
                : (l = this.toFixed(100 / a)),
              a > 4 && (c = 3),
              a > 7 && (c = 2),
              a > 14 && (c = 1),
              a > 28 && (c = 0),
              t = 0;
            t < a + 1;
            t++
          ) {
            for (
              i = c,
                (h = this.toFixed(l * t)) > 100 && (h = 100),
                this.coords.big[t] = h,
                s = (h - l * (t - 1)) / (i + 1),
                e = 1;
              e <= i && 0 !== h;
              e++
            )
              u +=
                '<span class="irs-grid-pol small" style="left: ' +
                (d = this.toFixed(h - s * e)) +
                '%"></span>';
            (u +=
              '<span class="irs-grid-pol" style="left: ' + h + '%"></span>'),
              (n = this.convertToValue(h)),
              (u +=
                '<span class="irs-grid-text js-grid-text-' +
                t +
                '" style="left: ' +
                h +
                '%">' +
                (n = o.values.length ? o.p_values[n] : this._prettify(n)) +
                "</span>");
          }
          (this.coords.big_num = Math.ceil(a + 1)),
            this.$cache.cont.addClass("irs-with-grid"),
            this.$cache.grid.html(u),
            this.cacheGridLabels();
        }
      },
      cacheGridLabels: function () {
        var t,
          e,
          i = this.coords.big_num;
        for (e = 0; e < i; e++)
          (t = this.$cache.grid.find(".js-grid-text-" + e)),
            this.$cache.grid_labels.push(t);
        this.calcGridLabels();
      },
      calcGridLabels: function () {
        var t,
          e,
          i = [],
          s = [],
          n = this.coords.big_num;
        for (t = 0; t < n; t++)
          (this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1)),
            (this.coords.big_p[t] = this.toFixed(
              (this.coords.big_w[t] / this.coords.w_rs) * 100
            )),
            (this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2)),
            (i[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t])),
            (s[t] = this.toFixed(i[t] + this.coords.big_p[t]));
        for (
          this.options.force_edges &&
            (i[0] < -this.coords.grid_gap &&
              ((i[0] = -this.coords.grid_gap),
              (s[0] = this.toFixed(i[0] + this.coords.big_p[0])),
              (this.coords.big_x[0] = this.coords.grid_gap)),
            s[n - 1] > 100 + this.coords.grid_gap &&
              ((s[n - 1] = 100 + this.coords.grid_gap),
              (i[n - 1] = this.toFixed(s[n - 1] - this.coords.big_p[n - 1])),
              (this.coords.big_x[n - 1] = this.toFixed(
                this.coords.big_p[n - 1] - this.coords.grid_gap
              )))),
            this.calcGridCollision(2, i, s),
            this.calcGridCollision(4, i, s),
            t = 0;
          t < n;
          t++
        )
          (e = this.$cache.grid_labels[t][0]),
            this.coords.big_x[t] !== Number.POSITIVE_INFINITY &&
              (e.style.marginLeft = -this.coords.big_x[t] + "%");
      },
      calcGridCollision: function (t, e, i) {
        var s,
          n,
          o,
          r = this.coords.big_num;
        for (s = 0; s < r && !((n = s + t / 2) >= r); s += t)
          (o = this.$cache.grid_labels[n][0]),
            i[s] <= e[n]
              ? (o.style.visibility = "visible")
              : (o.style.visibility = "hidden");
      },
      calcGridMargin: function () {
        if (this.options.grid_margin)
          (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
            this.coords.w_rs &&
              ("single" === this.options.type
                ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
                : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
              (this.coords.p_handle = this.toFixed(
                (this.coords.w_handle / this.coords.w_rs) * 100
              )),
              (this.coords.grid_gap = this.toFixed(
                this.coords.p_handle / 2 - 0.1
              )),
              (this.$cache.grid[0].style.width =
                this.toFixed(100 - this.coords.p_handle) + "%"),
              (this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
      },
      update: function (e) {
        this.input &&
          ((this.is_update = !0),
          (this.options.from = this.result.from),
          (this.options.to = this.result.to),
          (this.update_check.from = this.result.from),
          (this.update_check.to = this.result.to),
          (this.options = t.extend(this.options, e)),
          this.validate(),
          this.updateResult(e),
          this.toggleInput(),
          this.remove(),
          this.init(!0));
      },
      reset: function () {
        this.input && (this.updateResult(), this.update());
      },
      destroy: function () {
        this.input &&
          (this.toggleInput(),
          this.$cache.input.prop("readonly", !1),
          t.data(this.input, "ionRangeSlider", null),
          this.remove(),
          (this.input = null),
          (this.options = null));
      },
    }),
      (t.fn.ionRangeSlider = function (e) {
        return this.each(function () {
          t.data(this, "ionRangeSlider") ||
            t.data(this, "ionRangeSlider", new c(this, e, l++));
        });
      }),
      (function () {
        for (
          var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
          s < e.length && !i.requestAnimationFrame;
          ++s
        )
          (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
            (i.cancelAnimationFrame =
              i[e[s] + "CancelAnimationFrame"] ||
              i[e[s] + "CancelRequestAnimationFrame"]);
        i.requestAnimationFrame ||
          (i.requestAnimationFrame = function (e, s) {
            var n = new Date().getTime(),
              o = Math.max(0, 16 - (n - t)),
              r = i.setTimeout(function () {
                e(n + o);
              }, o);
            return (t = n + o), r;
          }),
          i.cancelAnimationFrame ||
            (i.cancelAnimationFrame = function (t) {
              clearTimeout(t);
            });
      })();
  }),
  (function (t) {
    t.fn.footerReveal = function (e) {
      var i = t(this),
        s = i.prev(),
        n = t(window),
        o = t.extend({ shadow: !0, shadowOpacity: 0.8, zIndex: -100 }, e);
      return (
        t.extend(!0, {}, o, e),
        i.outerHeight() <= n.outerHeight() &&
          (i.css({ "z-index": o.zIndex, position: "fixed", bottom: 0 }),
          o.shadow &&
            s.css({
              "-moz-box-shadow":
                "0 20px 30px -20px rgba(0,0,0," + o.shadowOpacity + ")",
              "-webkit-box-shadow":
                "0 20px 30px -20px rgba(0,0,0," + o.shadowOpacity + ")",
              "box-shadow":
                "0 20px 30px -20px rgba(0,0,0," + o.shadowOpacity + ")",
            }),
          n.on("load resize", function () {
            i.css({ width: s.outerWidth() }),
              s.css({ "margin-bottom": i.outerHeight() });
          })),
        this
      );
    };
  })(jQuery),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t("object" == typeof exports ? require("jquery") : jQuery);
  })(function (t) {
    var e = {
      element: "body",
      position: null,
      type: "info",
      allow_dismiss: !0,
      allow_duplicates: !0,
      newest_on_top: !1,
      showProgressbar: !1,
      placement: { from: "top", align: "right" },
      offset: 20,
      spacing: 10,
      z_index: 1031,
      delay: 5e3,
      timer: 1e3,
      url_target: "_blank",
      mouse_over: null,
      animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" },
      onShow: null,
      onShown: null,
      onClose: null,
      onClosed: null,
      onClick: null,
      icon_type: "class",
      template:
        '<div data-notify="container" class="customized_notify alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i><span data-notify="icon"></span></i> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
    };
    function i(i, s, n) {
      var o,
        r,
        a = {
          content: {
            message: "object" == typeof s ? s.message : s,
            title: s.title ? s.title : "",
            icon: s.icon ? s.icon : "",
            url: s.url ? s.url : "#",
            target: s.target ? s.target : "-",
          },
        };
      (n = t.extend(!0, {}, a, n)),
        (this.settings = t.extend(!0, {}, e, n)),
        (this._defaults = e),
        "-" === this.settings.content.target &&
          (this.settings.content.target = this.settings.url_target),
        (this.animations = {
          start:
            "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
          end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend",
        }),
        "number" == typeof this.settings.offset &&
          (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset,
          }),
        (this.settings.allow_duplicates ||
          (!this.settings.allow_duplicates &&
            ((o = this),
            (r = !1),
            t('[data-notify="container"]').each(function (e, i) {
              var s = t(i),
                n = s.find('[data-notify="title"]').html().trim(),
                a = s.find('[data-notify="message"]').html().trim(),
                l =
                  n ===
                  t("<div>" + o.settings.content.title + "</div>")
                    .html()
                    .trim(),
                h =
                  a ===
                  t("<div>" + o.settings.content.message + "</div>")
                    .html()
                    .trim(),
                c = s.hasClass("alert-" + o.settings.type);
              return l && h && c && (r = !0), !r;
            }),
            !r))) &&
          this.init();
    }
    (String.format = function () {
      var t = arguments,
        e = arguments[0];
      return e.replace(/(\{\{\d\}\}|\{\d\})/g, function (e) {
        return "{{" === e.substring(0, 2)
          ? e
          : (0, t[parseInt(e.match(/\d/)[0]) + 1]);
      });
    }),
      t.extend(i.prototype, {
        init: function () {
          var t = this;
          this.buildNotify(),
            this.settings.content.icon && this.setIcon(),
            "#" != this.settings.content.url && this.styleURL(),
            this.styleDismiss(),
            this.placement(),
            this.bind(),
            (this.notify = {
              $ele: this.$ele,
              update: function (e, i) {
                var s = {};
                for (var n in ("string" == typeof e ? (s[e] = i) : (s = e), s))
                  switch (n) {
                    case "type":
                      this.$ele.removeClass("alert-" + t.settings.type),
                        this.$ele
                          .find('[data-notify="progressbar"] > .progress-bar')
                          .removeClass("progress-bar-" + t.settings.type),
                        (t.settings.type = s[n]),
                        this.$ele
                          .addClass("alert-" + s[n])
                          .find('[data-notify="progressbar"] > .progress-bar')
                          .addClass("progress-bar-" + s[n]);
                      break;
                    case "icon":
                      var o = this.$ele.find('[data-notify="icon"]');
                      "class" === t.settings.icon_type.toLowerCase()
                        ? o.removeClass(t.settings.content.icon).addClass(s[n])
                        : (o.is("img") || o.find("img"), o.attr("src", s[n])),
                        (t.settings.content.icon = s[e]);
                      break;
                    case "progress":
                      var r =
                        t.settings.delay - t.settings.delay * (s[n] / 100);
                      this.$ele.data("notify-delay", r),
                        this.$ele
                          .find('[data-notify="progressbar"] > div')
                          .attr("aria-valuenow", s[n])
                          .css("width", s[n] + "%");
                      break;
                    case "url":
                      this.$ele.find('[data-notify="url"]').attr("href", s[n]);
                      break;
                    case "target":
                      this.$ele
                        .find('[data-notify="url"]')
                        .attr("target", s[n]);
                      break;
                    default:
                      this.$ele.find('[data-notify="' + n + '"]').html(s[n]);
                  }
                var a =
                  this.$ele.outerHeight() +
                  parseInt(t.settings.spacing) +
                  parseInt(t.settings.offset.y);
                t.reposition(a);
              },
              close: function () {
                t.close();
              },
            });
        },
        buildNotify: function () {
          var e = this.settings.content;
          (this.$ele = t(
            String.format(
              this.settings.template,
              this.settings.type,
              e.title,
              e.message,
              e.url,
              e.target
            )
          )),
            this.$ele.attr(
              "data-notify-position",
              this.settings.placement.from + "-" + this.settings.placement.align
            ),
            this.settings.allow_dismiss ||
              this.$ele.find('[data-notify="dismiss"]').css("display", "none"),
            ((!(this.settings.delay <= 0) || this.settings.showProgressbar) &&
              this.settings.showProgressbar) ||
              this.$ele.find('[data-notify="progressbar"]').remove();
        },
        setIcon: function () {
          "class" === this.settings.icon_type.toLowerCase()
            ? this.$ele
                .find('[data-notify="icon"]')
                .addClass(this.settings.content.icon)
            : this.$ele.find('[data-notify="icon"]').is("img")
            ? this.$ele
                .find('[data-notify="icon"]')
                .attr("src", this.settings.content.icon)
            : this.$ele
                .find('[data-notify="icon"]')
                .append(
                  '<img src="' +
                    this.settings.content.icon +
                    '" alt="Notify Icon" />'
                );
        },
        styleDismiss: function () {
          this.$ele
            .find('[data-notify="dismiss"]')
            .css({
              position: "absolute",
              right: "10px",
              top: "5px",
              zIndex: this.settings.z_index + 2,
            });
        },
        styleURL: function () {
          this.$ele
            .find('[data-notify="url"]')
            .css({
              backgroundImage:
                "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
              zIndex: this.settings.z_index + 1,
            });
        },
        placement: function () {
          var e = this,
            i = this.settings.offset.y,
            s = {
              display: "inline-block",
              margin: "0px auto",
              position: this.settings.position
                ? this.settings.position
                : "body" === this.settings.element
                ? "fixed"
                : "absolute",
              transition: "all .5s ease-in-out",
              zIndex: this.settings.z_index,
            },
            n = !1,
            o = this.settings;
          switch (
            (t(
              '[data-notify-position="' +
                this.settings.placement.from +
                "-" +
                this.settings.placement.align +
                '"]:not([data-closing="true"])'
            ).each(function () {
              i = Math.max(
                i,
                parseInt(t(this).css(o.placement.from)) +
                  parseInt(t(this).outerHeight()) +
                  parseInt(o.spacing)
              );
            }),
            !0 === this.settings.newest_on_top && (i = this.settings.offset.y),
            (s[this.settings.placement.from] = i + "px"),
            this.settings.placement.align)
          ) {
            case "left":
            case "right":
              s[this.settings.placement.align] = this.settings.offset.x + "px";
              break;
            case "center":
              (s.left = 0), (s.right = 0);
          }
          this.$ele.css(s).addClass(this.settings.animate.enter),
            t.each(["webkit-", "moz-", "o-", "ms-", ""], function (t, i) {
              e.$ele[0].style[i + "AnimationIterationCount"] = 1;
            }),
            t(this.settings.element).append(this.$ele),
            !0 === this.settings.newest_on_top &&
              ((i =
                parseInt(i) +
                parseInt(this.settings.spacing) +
                this.$ele.outerHeight()),
              this.reposition(i)),
            t.isFunction(e.settings.onShow) &&
              e.settings.onShow.call(this.$ele),
            this.$ele
              .one(this.animations.start, function () {
                n = !0;
              })
              .one(this.animations.end, function () {
                e.$ele.removeClass(e.settings.animate.enter),
                  t.isFunction(e.settings.onShown) &&
                    e.settings.onShown.call(this);
              }),
            setTimeout(function () {
              !n &&
                t.isFunction(e.settings.onShown) &&
                e.settings.onShown.call(this);
            }, 600);
        },
        bind: function () {
          var e = this;
          if (
            (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
              e.close();
            }),
            t.isFunction(e.settings.onClick) &&
              this.$ele.on("click", function (t) {
                t.target != e.$ele.find('[data-notify="dismiss"]')[0] &&
                  e.settings.onClick.call(this, t);
              }),
            this.$ele
              .mouseover(function () {
                t(this).data("data-hover", "true");
              })
              .mouseout(function () {
                t(this).data("data-hover", "false");
              }),
            this.$ele.data("data-hover", "false"),
            this.settings.delay > 0)
          ) {
            e.$ele.data("notify-delay", e.settings.delay);
            var i = setInterval(function () {
              var t = parseInt(e.$ele.data("notify-delay")) - e.settings.timer;
              if (
                ("false" === e.$ele.data("data-hover") &&
                  "pause" === e.settings.mouse_over) ||
                "pause" != e.settings.mouse_over
              ) {
                var s = ((e.settings.delay - t) / e.settings.delay) * 100;
                e.$ele.data("notify-delay", t),
                  e.$ele
                    .find('[data-notify="progressbar"] > div')
                    .attr("aria-valuenow", s)
                    .css("width", s + "%");
              }
              t <= -e.settings.timer && (clearInterval(i), e.close());
            }, e.settings.timer);
          }
        },
        close: function () {
          var e = this,
            i = parseInt(this.$ele.css(this.settings.placement.from)),
            s = !1;
          this.$ele
            .attr("data-closing", "true")
            .addClass(this.settings.animate.exit),
            e.reposition(i),
            t.isFunction(e.settings.onClose) &&
              e.settings.onClose.call(this.$ele),
            this.$ele
              .one(this.animations.start, function () {
                s = !0;
              })
              .one(this.animations.end, function () {
                t(this).remove(),
                  t.isFunction(e.settings.onClosed) &&
                    e.settings.onClosed.call(this);
              }),
            setTimeout(function () {
              !s &&
                (e.$ele.remove(),
                e.settings.onClosed && e.settings.onClosed(e.$ele));
            }, 600);
        },
        reposition: function (e) {
          var i = this,
            s =
              '[data-notify-position="' +
              this.settings.placement.from +
              "-" +
              this.settings.placement.align +
              '"]:not([data-closing="true"])',
            n = this.$ele.nextAll(s);
          !0 === this.settings.newest_on_top && (n = this.$ele.prevAll(s)),
            n.each(function () {
              t(this).css(i.settings.placement.from, e),
                (e =
                  parseInt(e) +
                  parseInt(i.settings.spacing) +
                  t(this).outerHeight());
            });
        },
      }),
      (t.notify = function (t, e) {
        return new i(this, t, e).notify;
      }),
      (t.notifyDefaults = function (i) {
        return (e = t.extend(!0, {}, e, i));
      }),
      (t.notifyClose = function (e) {
        void 0 === e || "all" === e
          ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click")
          : "success" === e || "info" === e || "warning" === e || "danger" === e
          ? t(".alert-" + e + "[data-notify]")
              .find('[data-notify="dismiss"]')
              .trigger("click")
          : e
          ? t(e + "[data-notify]")
              .find('[data-notify="dismiss"]')
              .trigger("click")
          : t('[data-notify-position="' + e + '"]')
              .find('[data-notify="dismiss"]')
              .trigger("click");
      }),
      (t.notifyCloseExcept = function (e) {
        "success" === e || "info" === e || "warning" === e || "danger" === e
          ? t("[data-notify]")
              .not(".alert-" + e)
              .find('[data-notify="dismiss"]')
              .trigger("click")
          : t("[data-notify]")
              .not(e)
              .find('[data-notify="dismiss"]')
              .trigger("click");
      });
  }),
  (function (t, e, i, s) {
    function n(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, n.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          n.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          n.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (n.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (n.Type = { Event: "event", State: "state" }),
      (n.Plugins = {}),
      (n.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              i = !this.settings.autoWidth,
              s = this.settings.rtl,
              n = {
                width: "auto",
                "margin-left": s ? e : "",
                "margin-right": s ? "" : e,
              };
            i || this.$stage.children().css(n), (t.css = n);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              i = null,
              s = this._items.length,
              n = !this.settings.autoWidth,
              o = [];
            for (t.items = { merge: !1, width: e }; s--; )
              (i = this._mergers[s]),
                (i =
                  (this.settings.mergeFit &&
                    Math.min(i, this.settings.items)) ||
                  i),
                (t.items.merge = i > 1 || t.items.merge),
                (o[s] = n ? e * i : this._items[s].width());
            this._widths = o;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              i = this._items,
              s = this.settings,
              n = Math.max(2 * s.items, 4),
              o = 2 * Math.ceil(i.length / 2),
              r = s.loop && i.length ? (s.rewind ? n : Math.max(n, o)) : 0,
              a = "",
              l = "";
            for (r /= 2; r > 0; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l),
                (r -= 1);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                s = 0,
                n = 0,
                o = [];
              ++i < e;

            )
              (s = o[i - 1] || 0),
                o.push(
                  s +
                    (n =
                      this._widths[this.relative(i)] + this.settings.margin) *
                      t
                );
            this._coordinates = o;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(i);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              s = this.$stage.children();
            if (i && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  s.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), s.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              i,
              s,
              n = this.settings.rtl ? 1 : -1,
              o = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + o,
              a = r + this.width() * n,
              l = [];
            for (i = 0, s = this._coordinates.length; i < s; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + o * n),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(i);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.$stage.children(".center").removeClass("center"),
              this.settings.center &&
                this.$stage.children().eq(this.current()).addClass("center");
          },
        },
      ]),
      (n.prototype.initializeStage = function () {
        (this.$stage = this.$element.find("." + this.settings.stageClass)),
          !this.$stage.length &&
            (this.$element.addClass(this.options.loadingClass),
            (this.$stage = t("<" + this.settings.stageElement + ">", {
              class: this.settings.stageClass,
            }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
            this.$element.append(this.$stage.parent()));
      }),
      (n.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) {
          (this._items = e.get().map(function (e) {
            return t(e);
          })),
            (this._mergers = this._items.map(function () {
              return 1;
            })),
            this.refresh();
          return;
        }
        this.replace(this.$element.children().not(this.$stage.parent())),
          this.isVisible() ? this.refresh() : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
      }),
      (n.prototype.initialize = function () {
        if (
          (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading"))
        ) {
          var t, e, i;
          (t = this.$element.find("img")),
            (e = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : s),
            (i = this.$element.children(e).width()),
            t.length && i <= 0 && this.preloadAutoWidthImages(t);
        }
        this.initializeStage(),
          this.initializeItems(),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (n.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (n.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          s = -1,
          n = null;
        i
          ? (t.each(i, function (t) {
              t <= e && t > s && (s = Number(t));
            }),
            "function" ==
              typeof (n = t.extend({}, this.options, i[s])).stagePadding &&
              (n.stagePadding = n.stagePadding()),
            delete n.responsive,
            n.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + s
                  )
              ))
          : (n = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: n } }),
          (this._breakpoint = s),
          (this.settings = n),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (n.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (n.prototype.prepare = function (e) {
        var i = this.trigger("prepare", { content: e });
        return (
          i.data ||
            (i.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: i.data }),
          i.data
        );
      }),
      (n.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            s = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            n = {};
          e < i;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, s).length > 0) &&
            this._pipe[e].run(n),
            e++;
        (this._invalidated = {}), this.is("valid") || this.enter("valid");
      }),
      (n.prototype.width = function (t) {
        switch ((t = t || n.Width.Default)) {
          case n.Width.Inner:
          case n.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (n.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (n.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (n.prototype.onResize = function () {
        return (
          !!(
            this._items.length &&
            this._width !== this.$element.width() &&
            this.isVisible()
          ) &&
          ((this.enter("resizing"), this.trigger("resize").isDefaultPrevented())
            ? (this.leave("resizing"), !1)
            : void (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              this.trigger("resized")))
        );
      }),
      (n.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (n.prototype.onDragStart = function (e) {
        var s = null;
        3 !== e.which &&
          (t.support.transform
            ? (s = {
                x: (s = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === s.length ? 12 : 4],
                y: s[16 === s.length ? 13 : 5],
              })
            : ((s = this.$stage.position()),
              (s = {
                x: this.settings.rtl
                  ? s.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : s.left,
                y: s.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(s.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = s),
          (this._drag.stage.current = s),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var s = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                !(Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) &&
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (n.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          s = null,
          n = this.difference(this._drag.pointer, this.pointer(t)),
          o = this.difference(this._drag.stage.start, n);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (o.x = ((((o.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
              (o.x = Math.max(Math.min(o.x, e + s), i + s))),
          (this._drag.stage.current = o),
          this.animate(o.x));
      }),
      (n.prototype.onDragEnd = function (e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
          n = this._drag.stage.current,
          o = (s.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== s.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(n.x, 0 !== s.x ? o : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = o),
            (Math.abs(s.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (n.prototype.closest = function (e, i) {
        var n = -1,
          o = this.width(),
          r = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              r,
              t.proxy(function (t, a) {
                return (
                  "left" === i && e > a - 30 && e < a + 30
                    ? (n = t)
                    : "right" === i && e > a - o - 30 && e < a - o + 30
                    ? (n = t + 1)
                    : this.op(e, "<", a) &&
                      this.op(e, ">", s !== r[t + 1] ? r[t + 1] : a - o) &&
                      (n = "left" === i ? t + 1 : t),
                  -1 === n
                );
              }, this)
            ),
          !this.settings.loop &&
            (this.op(e, ">", r[this.minimum()])
              ? (n = e = this.minimum())
              : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())),
          n
        );
      }),
      (n.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition:
                  this.speed() / 1e3 +
                  "s" +
                  (this.settings.slideTransition
                    ? " " + this.settings.slideTransition
                    : ""),
              })
            : i
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (n.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (n.prototype.current = function (t) {
        if (t === s) return this._current;
        if (0 !== this._items.length) {
          if (((t = this.normalize(t)), this._current !== t)) {
            var e = this.trigger("change", {
              property: { name: "position", value: t },
            });
            s !== e.data && (t = this.normalize(e.data)),
              (this._current = t),
              this.invalidate("position"),
              this.trigger("changed", {
                property: { name: "position", value: this._current },
              });
          }
          return this._current;
        }
      }),
      (n.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (n.prototype.reset = function (t) {
        s !== (t = this.normalize(t)) &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (n.prototype.normalize = function (t, e) {
        var i = this._items.length,
          n = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1
            ? (t = s)
            : (t < 0 || t >= i + n) &&
              (t = ((((t - n / 2) % i) + i) % i) + n / 2),
          t
        );
      }),
      (n.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (n.prototype.maximum = function (t) {
        var e,
          i,
          s,
          n = this.settings,
          o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
          if ((e = this._items.length))
            for (
              i = this._items[--e].width(), s = this.$element.width();
              e-- &&
              !((i += this._items[e].width() + this.settings.margin) > s);

            );
          o = e + 1;
        } else
          o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0);
      }),
      (n.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (n.prototype.items = function (t) {
        return t === s
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (n.prototype.mergers = function (t) {
        return t === s
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (n.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          n = i + this._items.length,
          o = function (t) {
            return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
          };
        return e === s
          ? t.map(this._clones, function (t, e) {
              return o(e);
            })
          : t.map(this._clones, function (t, i) {
              return t === e ? o(i) : null;
            });
      }),
      (n.prototype.speed = function (t) {
        return t !== s && (this._speed = t), this._speed;
      }),
      (n.prototype.coordinates = function (e) {
        var i,
          n = 1,
          o = e - 1;
        return e === s
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((n = -1), (o = e + 1)),
                (i = this._coordinates[e]),
                (i +=
                  ((this.width() - i + (this._coordinates[o] || 0)) / 2) * n))
              : (i = this._coordinates[o] || 0),
            (i = Math.ceil(i)));
      }),
      (n.prototype.duration = function (t, e, i) {
        return 0 === i
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(i || this.settings.smartSpeed);
      }),
      (n.prototype.to = function (t, e) {
        var i = this.current(),
          s = null,
          n = t - this.relative(i),
          o = (n > 0) - (n < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
            (s = (((((t = i + n) - a) % r) + r) % r) + a) !== t &&
              s - n <= l &&
              s - n > 0 &&
              ((i = s - n), (t = s), this.reset(i)))
          : this.settings.rewind
          ? ((l += 1), (t = ((t % l) + l) % l))
          : (t = Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.isVisible() && this.update();
      }),
      (n.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (n.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (n.prototype.onTransitionEnd = function (t) {
        if (
          t !== s &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (n.prototype.viewport = function () {
        var s;
        return (
          this.options.responsiveBaseElement !== e
            ? (s = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (s = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (s = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          s
        );
      }),
      (n.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (n.prototype.add = function (e, i) {
        var n = this.relative(this._current);
        (i = i === s ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: i }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(
                i,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[n] && this.reset(this._items[n].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: i });
      }),
      (n.prototype.remove = function (t) {
        s !== (t = this.normalize(t, !0)) &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (n.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter("pre-loading"),
              (i = t(i)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    i.attr("src", t.target.src),
                      i.css("opacity", 1),
                      this.leave("pre-loading"),
                      this.is("pre-loading") ||
                        this.is("initializing") ||
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  i.attr("src") ||
                    i.attr("data-src") ||
                    i.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (n.prototype.destroy = function () {
        for (var s in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$stage.remove(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (n.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
          case "<":
            return s ? t > i : t < i;
          case ">":
            return s ? t < i : t > i;
          case ">=":
            return s ? t <= i : t >= i;
          case "<=":
            return s ? t >= i : t <= i;
        }
      }),
      (n.prototype.on = function (t, e, i, s) {
        t.addEventListener
          ? t.addEventListener(e, i, s)
          : t.attachEvent && t.attachEvent("on" + e, i);
      }),
      (n.prototype.off = function (t, e, i, s) {
        t.removeEventListener
          ? t.removeEventListener(e, i, s)
          : t.detachEvent && t.detachEvent("on" + e, i);
      }),
      (n.prototype.trigger = function (e, i, s, o, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, s], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          h = t.Event(
            [e, "owl", s || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, i)
          );
        return (
          !this._supress[e] &&
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(h);
            }),
            this.register({ type: n.Type.Event, name: e }),
            this.$element.trigger(h),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, h)),
          h
        );
      }),
      (n.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            s === this._states.current[e] && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (n.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (n.prototype.register = function (e) {
        if (e.type === n.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return i &&
                i.apply &&
                (!t.namespace || -1 === t.namespace.indexOf("owl"))
                ? i.apply(this, arguments)
                : t.namespace && t.namespace.indexOf("owl") > -1;
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === n.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, s) {
                return t.inArray(i, this._states.tags[e.name]) === s;
              }, this)
            )));
      }),
      (n.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (n.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (n.prototype.pointer = function (t) {
        var i = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (n.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (n.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var s = t(this),
            o = s.data("owl.carousel");
          o ||
            ((o = new n(this, "object" == typeof e && e)),
            s.data("owl.carousel", o),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, i) {
                o.register({ type: n.Type.Event, name: i }),
                  o.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                        o[i].apply(this, [].slice.call(arguments, 1)),
                        this.release([i]));
                    }, o)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (n.prototype.watch = function () {
        !this._interval &&
          ((this._visible = this._core.isVisible()),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (n.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (n.prototype.destroy = function () {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              ) {
                var i = this._core.settings,
                  s = (i.center && Math.ceil(i.items / 2)) || i.items,
                  n = (i.center && -1 * s) || 0,
                  o =
                    (e.property && void 0 !== e.property.value
                      ? e.property.value
                      : this._core.current()) + n,
                  r = this._core.clones().length,
                  a = t.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                for (
                  i.lazyLoadEager > 0 &&
                  ((s += i.lazyLoadEager),
                  i.loop && ((o -= i.lazyLoadEager), s++));
                  n++ < s;

                )
                  this.load(r / 2 + this._core.relative(o)),
                    r && t.each(this._core.clones(this._core.relative(o)), a),
                    o++;
              }
            }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (n.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i),
          n = s && s.find(".owl-lazy");
        !(!n || t.inArray(s.get(0), this._loaded) > -1) &&
          (n.each(
            t.proxy(function (i, s) {
              var n,
                o = t(s),
                r =
                  (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                  o.attr("data-src") ||
                  o.attr("data-srcset");
              this._core.trigger("load", { element: o, url: r }, "lazy"),
                o.is("img")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          o.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: o, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : o.is("source")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: o, url: r },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", r)
                  : (((n = new Image()).onload = t.proxy(function () {
                      o.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: o, url: r },
                          "lazy"
                        );
                    }, this)),
                    (n.src = r));
            }, this)
          ),
          this._loaded.push(s.get(0)));
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (i) {
      (this._core = i),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var s = this;
      t(e).on("load", function () {
        s._core.settings.autoHeight && s.update();
      }),
        t(e).resize(function () {
          s._core.settings.autoHeight &&
            (null != s._intervalId && clearTimeout(s._intervalId),
            (s._intervalId = setTimeout(function () {
              s.update();
            }, 250)));
        });
    };
    (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (n.prototype.update = function () {
        var e = this._core._current,
          i = e + this._core.settings.items,
          s = this._core.settings.lazyLoad,
          n = this._core.$stage.children().toArray().slice(e, i),
          o = [],
          r = 0;
        t.each(n, function (e, i) {
          o.push(t(i).height());
        }),
          (r = Math.max.apply(null, o)) <= 1 &&
            s &&
            this._previousHeight &&
            (r = this._previousHeight),
          (this._previousHeight = r),
          this._core.$stage
            .parent()
            .height(r)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (n.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          s =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (r) {
          if (
            (s = r.match(
              /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
            ))[3].indexOf("youtu") > -1
          )
            i = "youtube";
          else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
          else if (s[3].indexOf("vzaar") > -1) i = "vzaar";
          else throw Error("Video URL not supported.");
          s = s[6];
        } else throw Error("Missing video URL.");
        (this._videos[r] = { type: i, id: s, width: n, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (n.prototype.thumbnail = function (e, i) {
        var s,
          n,
          o,
          r =
            i.width && i.height
              ? "width:" + i.width + "px;height:" + i.height + "px;"
              : "",
          a = e.find("img"),
          l = "src",
          h = "",
          c = this._core.settings,
          d = function (i) {
            (n = '<div class="owl-video-play-icon"></div>'),
              (s = c.lazyLoad
                ? t("<div/>", { class: "owl-video-tn " + h, srcType: i })
                : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + i + ")",
                  })),
              e.after(s),
              e.after(n);
          };
        if (
          (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: r })),
          this._core.settings.lazyLoad && ((l = "data-src"), (h = "owl-lazy")),
          a.length)
        )
          return d(a.attr(l)), a.remove(), !1;
        "youtube" === i.type
          ? d((o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"))
          : "vimeo" === i.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                d((o = t[0].thumbnail_large));
              },
            })
          : "vzaar" === i.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                d((o = t.framegrab_url));
              },
            });
      }),
      (n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (n.prototype.play = function (e) {
        var i,
          s,
          n = t(e.target).closest("." + this._core.settings.itemClass),
          o = this._videos[n.attr("data-video")],
          r = o.width || "100%",
          a = o.height || this._core.$stage.height();
        !this._playing &&
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          (i = t(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", a),
          i.attr("width", r),
          "youtube" === o.type
            ? i.attr(
                "src",
                "//www.youtube.com/embed/" +
                  o.id +
                  "?autoplay=1&rel=0&v=" +
                  o.id
              )
            : "vimeo" === o.type
            ? i.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1")
            : "vzaar" === o.type &&
              i.attr(
                "src",
                "//view.vzaar.com/" + o.id + "/player?autoplay=true"
              ),
          (s = t(i)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(n.find(".owl-video"))),
          (this._playing = n.addClass("owl-video-playing")));
      }),
      (n.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, n.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = s),
        (this.next = s),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (n.Defaults = { animateOut: !1, animateIn: !1 }),
      (n.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            s = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              s
                .one(t.support.animation.end, i)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            o &&
              n
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(o));
        }
      }),
      (n.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, n.Defaults, this._core.options));
    };
    (n.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (n.prototype._next = function (s) {
        (this._call = e.setTimeout(
          t.proxy(this._next, this, s),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          !this._core.is("interacting") &&
            !i.hidden &&
            this._core.next(s || this._core.settings.autoplaySpeed);
      }),
      (n.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (n.prototype.play = function (i, s) {
        var n;
        this._core.is("rotating") || this._core.enter("rotating"),
          (i = i || this._core.settings.autoplayTimeout),
          (n = Math.min(this._time % (this._timeout || i), i)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : e.clearTimeout(this._call),
          (this._time += (this.read() % i) - n),
          (this._timeout = i),
          (this._call = e.setTimeout(t.proxy(this._next, this, s), i - n));
      }),
      (n.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          e.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (n.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          e.clearTimeout(this._call));
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    "use strict";
    var n = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (n.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (n.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (
          i.navContainer
            ? t(i.navContainer)
            : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            t('<button role="button">')
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? t(i.dotsContainer)
            : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          t.proxy(function (e) {
            var s = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(s, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (n.prototype.destroy = function () {
        var t, e, i, s, n;
        for (t in ((n = this._core.settings), this._handlers))
          this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && n.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (n.prototype.update = function () {
        var t,
          e,
          i,
          s = this._core.clones().length / 2,
          n = s + this._core.items().length,
          o = this._core.maximum(!0),
          r = this._core.settings,
          a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if (
          ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)),
          r.dots || "page" == r.slideBy)
        )
          for (this._pages = [], t = s, e = 0, i = 0; t < n; t++) {
            if (e >= a || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(o, t - s),
                  end: t - s + a - 1,
                }),
                Math.min(o, t - s) === o)
              )
                break;
              (e = 0), ++i;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (n.prototype.draw = function () {
        var e,
          i = this._core.settings,
          s = this._core.items().length <= i.items,
          n = this._core.relative(this._core.current()),
          o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !o && n <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !o && n >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || s),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (n.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (n.prototype.getPosition = function (e) {
        var i,
          s,
          n = this._core.settings;
        return (
          "page" == n.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (s = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % s) + s) % s].start))
            : ((i = this._core.relative(this._core.current())),
              (s = this._core.items().length),
              e ? (i += n.slideBy) : (i -= n.slideBy)),
          i
        );
      }),
      (n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (n.prototype.to = function (e, i, s) {
        var n;
        !s && this._pages.length
          ? ((n = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % n) + n) % n].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    "use strict";
    var n = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              i && (this._hashes[i] = e.content);
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var s = this._core.items(
                  this._core.relative(this._core.current())
                ),
                n = t
                  .map(this._hashes, function (t, e) {
                    return t === s ? e : null;
                  })
                  .join();
              n && e.location.hash.slice(1) !== n && (e.location.hash = n);
            }
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              s = this._core.$stage.children(),
              n = this._hashes[i] && s.index(this._hashes[i]);
            void 0 !== n &&
              n !== this._core.current() &&
              this._core.to(this._core.relative(n), !1, !0);
          }, this)
        );
    };
    (n.Defaults = { URLhashListener: !1 }),
      (n.prototype.destroy = function () {
        var i, s;
        for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this))
          "function" != typeof this[s] && (this[s] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = t("<support>").get(0).style,
      o = "Webkit Moz O ms".split(" "),
      r = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      a = {
        csstransforms: function () {
          return !!l("transform");
        },
        csstransforms3d: function () {
          return !!l("perspective");
        },
        csstransitions: function () {
          return !!l("transition");
        },
        cssanimations: function () {
          return !!l("animation");
        },
      };
    function l(e, i) {
      var s = !1,
        r = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + o.join(r + " ") + r).split(" "), function (t, e) {
          if (void 0 !== n[e]) return (s = !i || e), !1;
        }),
        s
      );
    }
    function h(t) {
      return l(t, !0);
    }
    a.csstransitions() &&
      ((t.support.transition = new String(h("transition"))),
      (t.support.transition.end = r.transition.end[t.support.transition])),
      a.cssanimations() &&
        ((t.support.animation = new String(h("animation"))),
        (t.support.animation.end = r.animation.end[t.support.animation])),
      a.csstransforms() &&
        ((t.support.transform = new String(h("transform"))),
        (t.support.transform3d = a.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t("object" == typeof exports ? require("jquery") : jQuery);
  })(function (t, e) {
    var i = "plugin_hideShowPassword",
      s = ["show", "innerToggle"],
      n = {
        show: "infer",
        innerToggle: !1,
        enable: (function () {
          var t = document.body,
            e = document.createElement("input"),
            i = !0;
          t || (t = document.createElement("body")), (e = t.appendChild(e));
          try {
            e.setAttribute("type", "text");
          } catch (s) {
            i = !1;
          }
          return t.removeChild(e), i;
        })(),
        triggerOnToggle: !1,
        className: "hideShowPassword-field",
        initEvent: "hideShowPasswordInit",
        changeEvent: "passwordVisibilityChange",
        props: {
          autocapitalize: "off",
          autocomplete: "off",
          autocorrect: "off",
          spellcheck: "false",
        },
        toggle: {
          element: '<button type="button">',
          className: "hideShowPassword-toggle",
          touchSupport:
            "undefined" != typeof Modernizr && Modernizr.touchevents,
          attachToEvent: "click.hideShowPassword",
          attachToTouchEvent:
            "touchstart.hideShowPassword mousedown.hideShowPassword",
          attachToKeyEvent: "keyup",
          attachToKeyCodes: !0,
          styles: { position: "absolute" },
          touchStyles: { pointerEvents: "none" },
          position: "infer",
          verticalAlign: "middle",
          offset: 0,
          attr: {
            role: "button",
            "aria-label": "Show Password",
            title: "Show Password",
            tabIndex: 0,
          },
        },
        wrapper: {
          element: "<div>",
          className: "hideShowPassword-wrapper",
          enforceWidth: !1,
          styles: { position: "relative" },
          inheritStyles: [
            "display",
            "verticalAlign",
            "marginTop",
            "marginRight",
            "marginBottom",
            "marginLeft",
          ],
          innerElementStyles: {
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
          },
        },
        states: {
          shown: {
            className: "hideShowPassword-shown",
            changeEvent: "passwordShown",
            props: { type: "text" },
            toggle: {
              className: "hideShowPassword-toggle-hide",
              content: "Hide",
              attr: { "aria-pressed": "true", title: "Hide Password" },
            },
          },
          hidden: {
            className: "hideShowPassword-hidden",
            changeEvent: "passwordHidden",
            props: { type: "password" },
            toggle: {
              className: "hideShowPassword-toggle-show",
              content: "Show",
              attr: { "aria-pressed": "false", title: "Show Password" },
            },
          },
        },
      };
    function o(e, i) {
      (this.element = t(e)),
        (this.wrapperElement = t()),
        (this.toggleElement = t()),
        this.init(i);
    }
    (o.prototype = {
      init: function (e) {
        this.update(e, n) &&
          (this.element.addClass(this.options.className),
          this.options.innerToggle &&
            (this.wrapElement(this.options.wrapper),
            this.initToggle(this.options.toggle),
            "string" == typeof this.options.innerToggle &&
              (this.toggleElement.hide(),
              this.element.one(
                this.options.innerToggle,
                t.proxy(function () {
                  this.toggleElement.show();
                }, this)
              ))),
          this.element.trigger(this.options.initEvent, [this]));
      },
      update: function (t, e) {
        return (
          (this.options = this.prepareOptions(t, e)),
          this.updateElement() &&
            this.element
              .trigger(this.options.changeEvent, [this])
              .trigger(this.state().changeEvent, [this]),
          this.options.enable
        );
      },
      toggle: function (t) {
        return (t = t || "toggle"), this.update({ show: t });
      },
      prepareOptions: function (e, i) {
        var s,
          n = e || {},
          o = [];
        if (
          ((i = i || this.options),
          (e = t.extend(!0, {}, i, e)),
          n.hasOwnProperty("wrapper") &&
            n.wrapper.hasOwnProperty("inheritStyles") &&
            (e.wrapper.inheritStyles = n.wrapper.inheritStyles),
          e.enable &&
            ("toggle" === e.show
              ? (e.show = this.isType("hidden", e.states))
              : "infer" === e.show && (e.show = this.isType("shown", e.states)),
            "infer" === e.toggle.position &&
              (e.toggle.position =
                "rtl" === this.element.css("text-direction")
                  ? "left"
                  : "right"),
            !t.isArray(e.toggle.attachToKeyCodes)))
        ) {
          if (!0 === e.toggle.attachToKeyCodes)
            switch ((s = t(e.toggle.element)).prop("tagName").toLowerCase()) {
              case "button":
              case "input":
                break;
              case "a":
                if (s.filter("[href]").length) {
                  o.push(32);
                  break;
                }
              default:
                o.push(32, 13);
            }
          e.toggle.attachToKeyCodes = o;
        }
        return e;
      },
      updateElement: function () {
        return (
          !(!this.options.enable || this.isType()) &&
          (this.element
            .prop(t.extend({}, this.options.props, this.state().props))
            .addClass(this.state().className)
            .removeClass(this.otherState().className),
          this.options.triggerOnToggle &&
            this.element.trigger(this.options.triggerOnToggle, [this]),
          this.updateToggle(),
          !0)
        );
      },
      isType: function (t, i) {
        return (
          (i = i || this.options.states)[
            (t = t || this.state(e, e, i).props.type)
          ] && (t = i[t].props.type),
          this.element.prop("type") === t
        );
      },
      state: function (t, i, s) {
        return (
          (s = s || this.options.states),
          t === e && (t = this.options.show),
          "boolean" == typeof t && (t = t ? "shown" : "hidden"),
          i && (t = "shown" === t ? "hidden" : "shown"),
          s[t]
        );
      },
      otherState: function (t) {
        return this.state(t, !0);
      },
      wrapElement: function (e) {
        var i,
          s = e.enforceWidth;
        return (
          this.wrapperElement.length ||
            ((i = this.element.outerWidth()),
            t.each(
              e.inheritStyles,
              t.proxy(function (t, i) {
                e.styles[i] = this.element.css(i);
              }, this)
            ),
            this.element
              .css(e.innerElementStyles)
              .wrap(t(e.element).addClass(e.className).css(e.styles)),
            (this.wrapperElement = this.element.parent()),
            !0 === s && (s = this.wrapperElement.outerWidth() !== i && i),
            !1 !== s && this.wrapperElement.css("width", s)),
          this.wrapperElement
        );
      },
      initToggle: function (e) {
        return (
          !this.toggleElement.length &&
            ((this.toggleElement = t(e.element)
              .attr(e.attr)
              .addClass(e.className)
              .css(e.styles)
              .appendTo(this.wrapperElement)),
            this.updateToggle(),
            this.positionToggle(e.position, e.verticalAlign, e.offset),
            e.touchSupport
              ? (this.toggleElement.css(e.touchStyles),
                this.element.on(
                  e.attachToTouchEvent,
                  t.proxy(this.toggleTouchEvent, this)
                ))
              : this.toggleElement.on(
                  e.attachToEvent,
                  t.proxy(this.toggleEvent, this)
                ),
            e.attachToKeyCodes.length &&
              this.toggleElement.on(
                e.attachToKeyEvent,
                t.proxy(this.toggleKeyEvent, this)
              )),
          this.toggleElement
        );
      },
      positionToggle: function (t, e, i) {
        var s = {};
        switch (((s[t] = i), e)) {
          case "top":
          case "bottom":
            s[e] = i;
            break;
          case "middle":
            (s.top = "50%"),
              (s.marginTop = -(this.toggleElement.outerHeight() / 2));
        }
        return this.toggleElement.css(s);
      },
      updateToggle: function (t, e) {
        var i, s;
        return (
          this.toggleElement.length &&
            ((i = "padding-" + this.options.toggle.position),
            (t = t || this.state().toggle),
            (e = e || this.otherState().toggle),
            this.toggleElement
              .attr(t.attr)
              .addClass(t.className)
              .removeClass(e.className)
              .html(t.content),
            (s =
              this.toggleElement.outerWidth() + 2 * this.options.toggle.offset),
            this.element.css(i) !== s && this.element.css(i, s)),
          this.toggleElement
        );
      },
      toggleEvent: function (t) {
        t.preventDefault(), this.toggle();
      },
      toggleKeyEvent: function (e) {
        t.each(
          this.options.toggle.attachToKeyCodes,
          t.proxy(function (t, i) {
            if (e.which === i) return this.toggleEvent(e), !1;
          }, this)
        );
      },
      toggleTouchEvent: function (t) {
        var e,
          i,
          s,
          n = this.toggleElement.offset().left;
        n &&
          ((e = t.pageX || t.originalEvent.pageX),
          "left" === this.options.toggle.position
            ? ((n += this.toggleElement.outerWidth()), (i = e), (s = n))
            : ((i = n), (s = e)),
          s >= i && this.toggleEvent(t));
      },
    }),
      (t.fn.hideShowPassword = function () {
        var e = {};
        return (
          t.each(arguments, function (i, n) {
            var o = {};
            if ("object" == typeof n) o = n;
            else {
              if (!s[i]) return !1;
              o[s[i]] = n;
            }
            t.extend(!0, e, o);
          }),
          this.each(function () {
            var s = t(this),
              n = s.data(i);
            n ? n.update(e) : s.data(i, new o(this, e));
          })
        );
      }),
      t.each({ show: !0, hide: !1, toggle: "toggle" }, function (e, i) {
        t.fn[e + "Password"] = function (t, e) {
          return this.hideShowPassword(i, t, e);
        };
      });
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.moment = e());
  })(this, function () {
    "use strict";
    function t() {
      return k.apply(null, arguments);
    }
    function e(t) {
      return (
        t instanceof Array ||
        "[object Array]" === Object.prototype.toString.call(t)
      );
    }
    function i(t) {
      return (
        null != t && "[object Object]" === Object.prototype.toString.call(t)
      );
    }
    function s(t) {
      return void 0 === t;
    }
    function n(t) {
      return (
        "number" == typeof t ||
        "[object Number]" === Object.prototype.toString.call(t)
      );
    }
    function o(t) {
      return (
        t instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(t)
      );
    }
    function r(t, e) {
      var i,
        s = [];
      for (i = 0; i < t.length; ++i) s.push(e(t[i], i));
      return s;
    }
    function a(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function l(t, e) {
      for (var i in e) a(e, i) && (t[i] = e[i]);
      return (
        a(e, "toString") && (t.toString = e.toString),
        a(e, "valueOf") && (t.valueOf = e.valueOf),
        t
      );
    }
    function h(t, e, i, s) {
      return ea(t, e, i, s, !0).utc();
    }
    function c(t) {
      return (
        null == t._pf &&
          (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          }),
        t._pf
      );
    }
    function d(t) {
      if (null == t._isValid) {
        var e = c(t),
          i = _.call(e.parsedDateParts, function (t) {
            return null != t;
          }),
          s =
            !isNaN(t._d.getTime()) &&
            e.overflow < 0 &&
            !e.empty &&
            !e.invalidMonth &&
            !e.invalidWeekday &&
            !e.weekdayMismatch &&
            !e.nullInput &&
            !e.invalidFormat &&
            !e.userInvalidated &&
            (!e.meridiem || (e.meridiem && i));
        if (
          (t._strict &&
            (s =
              s &&
              0 === e.charsLeftOver &&
              0 === e.unusedTokens.length &&
              void 0 === e.bigHour),
          null != Object.isFrozen && Object.isFrozen(t))
        )
          return s;
        t._isValid = s;
      }
      return t._isValid;
    }
    function u(t) {
      var e = h(NaN);
      return null != t ? l(c(e), t) : (c(e).userInvalidated = !0), e;
    }
    _ = Array.prototype.some
      ? Array.prototype.some
      : function (t) {
          for (var e = Object(this), i = e.length >>> 0, s = 0; s < i; s++)
            if (s in e && t.call(this, e[s], s, e)) return !0;
          return !1;
        };
    var p = (t.momentProperties = []);
    function f(t, e) {
      var i, n, o;
      if (
        (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
        s(e._i) || (t._i = e._i),
        s(e._f) || (t._f = e._f),
        s(e._l) || (t._l = e._l),
        s(e._strict) || (t._strict = e._strict),
        s(e._tzm) || (t._tzm = e._tzm),
        s(e._isUTC) || (t._isUTC = e._isUTC),
        s(e._offset) || (t._offset = e._offset),
        s(e._pf) || (t._pf = c(e)),
        s(e._locale) || (t._locale = e._locale),
        0 < p.length)
      )
        for (i = 0; i < p.length; i++) s((o = e[(n = p[i])])) || (t[n] = o);
      return t;
    }
    var m = !1;
    function g(e) {
      f(this, e),
        (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === m && ((m = !0), t.updateOffset(this), (m = !1));
    }
    function v(t) {
      return t instanceof g || (null != t && null != t._isAMomentObject);
    }
    function y(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }
    function $(t) {
      var e = +t,
        i = 0;
      return 0 !== e && isFinite(e) && (i = y(e)), i;
    }
    function b(t, e, i) {
      var s,
        n = Math.min(t.length, e.length),
        o = Math.abs(t.length - e.length),
        r = 0;
      for (s = 0; s < n; s++)
        ((i && t[s] !== e[s]) || (!i && $(t[s]) !== $(e[s]))) && r++;
      return r + o;
    }
    function w(e) {
      !1 === t.suppressDeprecationWarnings &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + e);
    }
    function x(e, i) {
      var s = !0;
      return l(function () {
        if (
          (null != t.deprecationHandler && t.deprecationHandler(null, e), s)
        ) {
          for (var n, o = [], r = 0; r < arguments.length; r++) {
            if (((n = ""), "object" == typeof arguments[r])) {
              for (var a in ((n += "\n[" + r + "] "), arguments[0]))
                n += a + ": " + arguments[0][a] + ", ";
              n = n.slice(0, -2);
            } else n = arguments[r];
            o.push(n);
          }
          w(
            e +
              "\nArguments: " +
              Array.prototype.slice.call(o).join("") +
              "\n" +
              Error().stack
          ),
            (s = !1);
        }
        return i.apply(this, arguments);
      }, i);
    }
    var k,
      _,
      C,
      D = {};
    function S(e, i) {
      null != t.deprecationHandler && t.deprecationHandler(e, i),
        D[e] || (w(i), (D[e] = !0));
    }
    function T(t) {
      return (
        t instanceof Function ||
        "[object Function]" === Object.prototype.toString.call(t)
      );
    }
    function M(t, e) {
      var s,
        n = l({}, t);
      for (s in e)
        a(e, s) &&
          (i(t[s]) && i(e[s])
            ? ((n[s] = {}), l(n[s], t[s]), l(n[s], e[s]))
            : null != e[s]
            ? (n[s] = e[s])
            : delete n[s]);
      for (s in t) a(t, s) && !a(e, s) && i(t[s]) && (n[s] = l({}, n[s]));
      return n;
    }
    function E(t) {
      null != t && this.set(t);
    }
    (t.suppressDeprecationWarnings = !1),
      (t.deprecationHandler = null),
      (C = Object.keys
        ? Object.keys
        : function (t) {
            var e,
              i = [];
            for (e in t) a(t, e) && i.push(e);
            return i;
          });
    var P = {};
    function A(t, e) {
      var i = t.toLowerCase();
      P[i] = P[i + "s"] = P[e] = t;
    }
    function O(t) {
      return "string" == typeof t ? P[t] || P[t.toLowerCase()] : void 0;
    }
    function Y(t) {
      var e,
        i,
        s = {};
      for (i in t) a(t, i) && (e = O(i)) && (s[e] = t[i]);
      return s;
    }
    var I = {};
    function L(t, e) {
      I[t] = e;
    }
    function H(t, e, i) {
      var s = "" + Math.abs(t);
      return (
        (0 <= t ? (i ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, e - s.length))
          .toString()
          .substr(1) +
        s
      );
    }
    var W =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      F = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      z = {},
      N = {};
    function R(t, e, i, s) {
      var n = s;
      "string" == typeof s &&
        (n = function () {
          return this[s]();
        }),
        t && (N[t] = n),
        e &&
          (N[e[0]] = function () {
            return H(n.apply(this, arguments), e[1], e[2]);
          }),
        i &&
          (N[i] = function () {
            return this.localeData().ordinal(n.apply(this, arguments), t);
          });
    }
    function j(t, e) {
      return t.isValid()
        ? ((z[(e = B(e, t.localeData()))] =
            z[e] ||
            (function (t) {
              var e,
                i,
                s,
                n = t.match(W);
              for (e = 0, i = n.length; e < i; e++)
                N[n[e]]
                  ? (n[e] = N[n[e]])
                  : (n[e] = (s = n[e]).match(/\[[\s\S]/)
                      ? s.replace(/^\[|\]$/g, "")
                      : s.replace(/\\/g, ""));
              return function (e) {
                var s,
                  o = "";
                for (s = 0; s < i; s++) o += T(n[s]) ? n[s].call(e, t) : n[s];
                return o;
              };
            })(e)),
          z[e](t))
        : t.localeData().invalidDate();
    }
    function B(t, e) {
      var i = 5;
      function s(t) {
        return e.longDateFormat(t) || t;
      }
      for (F.lastIndex = 0; 0 <= i && F.test(t); )
        (t = t.replace(F, s)), (F.lastIndex = 0), (i -= 1);
      return t;
    }
    var U = /\d/,
      V = /\d\d/,
      q = /\d{3}/,
      G = /\d{4}/,
      Z = /[+-]?\d{6}/,
      K = /\d\d?/,
      X = /\d\d\d\d?/,
      Q = /\d\d\d\d\d\d?/,
      J = /\d{1,3}/,
      tt = /\d{1,4}/,
      te = /[+-]?\d{1,6}/,
      ti = /\d+/,
      ts = /[+-]?\d+/,
      tn = /Z|[+-]\d\d:?\d\d/gi,
      to = /Z|[+-]\d\d(?::?\d\d)?/gi,
      tr =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      ta = {};
    function tl(t, e, i) {
      ta[t] = T(e)
        ? e
        : function (t, s) {
            return t && i ? i : e;
          };
    }
    function th(t, e) {
      return a(ta, t)
        ? ta[t](e._strict, e._locale)
        : RegExp(
            tc(
              t
                .replace("\\", "")
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (t, e, i, s, n) {
                    return e || i || s || n;
                  }
                )
            )
          );
    }
    function tc(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var td = {};
    function tu(t, e) {
      var i,
        s = e;
      for (
        "string" == typeof t && (t = [t]),
          n(e) &&
            (s = function (t, i) {
              i[e] = $(t);
            }),
          i = 0;
        i < t.length;
        i++
      )
        td[t[i]] = s;
    }
    function tp(t, e) {
      tu(t, function (t, i, s, n) {
        (s._w = s._w || {}), e(t, s._w, s, n);
      });
    }
    function tf(t) {
      return tm(t) ? 366 : 365;
    }
    function tm(t) {
      return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
    }
    R("Y", 0, 0, function () {
      var t = this.year();
      return t <= 9999 ? "" + t : "+" + t;
    }),
      R(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }),
      R(0, ["YYYY", 4], 0, "year"),
      R(0, ["YYYYY", 5], 0, "year"),
      R(0, ["YYYYYY", 6, !0], 0, "year"),
      A("year", "y"),
      (I.year = 1),
      tl("Y", ts),
      tl("YY", K, V),
      tl("YYYY", tt, G),
      tl("YYYYY", te, Z),
      tl("YYYYYY", te, Z),
      tu(["YYYYY", "YYYYYY"], 0),
      tu("YYYY", function (e, i) {
        i[0] = 2 === e.length ? t.parseTwoDigitYear(e) : $(e);
      }),
      tu("YY", function (e, i) {
        i[0] = t.parseTwoDigitYear(e);
      }),
      tu("Y", function (t, e) {
        e[0] = parseInt(t, 10);
      }),
      (t.parseTwoDigitYear = function (t) {
        return $(t) + (68 < $(t) ? 1900 : 2e3);
      });
    var tg,
      t8 = tv("FullYear", !0);
    function tv(e, i) {
      return function (s) {
        return null != s
          ? (t$(this, e, s), t.updateOffset(this, i), this)
          : ty(this, e);
      };
    }
    function ty(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
    }
    function t$(t, e, i) {
      t.isValid() &&
        !isNaN(i) &&
        ("FullYear" === e && tm(t.year()) && 1 === t.month() && 29 === t.date()
          ? t._d["set" + (t._isUTC ? "UTC" : "") + e](
              i,
              t.month(),
              tb(i, t.month())
            )
          : t._d["set" + (t._isUTC ? "UTC" : "") + e](i));
    }
    function tb(t, e) {
      if (isNaN(t) || isNaN(e)) return NaN;
      var i,
        s = ((e % (i = 12)) + i) % i;
      return (
        (t += (e - s) / 12), 1 === s ? (tm(t) ? 29 : 28) : 31 - ((s % 7) % 2)
      );
    }
    (tg = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (t) {
          var e;
          for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
          return -1;
        }),
      R("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
      }),
      R("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t);
      }),
      R("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t);
      }),
      A("month", "M"),
      (I.month = 8),
      tl("M", K),
      tl("MM", K, V),
      tl("MMM", function (t, e) {
        return e.monthsShortRegex(t);
      }),
      tl("MMMM", function (t, e) {
        return e.monthsRegex(t);
      }),
      tu(["M", "MM"], function (t, e) {
        e[1] = $(t) - 1;
      }),
      tu(["MMM", "MMMM"], function (t, e, i, s) {
        var n = i._locale.monthsParse(t, s, i._strict);
        null != n ? (e[1] = n) : (c(i).invalidMonth = t);
      });
    var tw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      tx =
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      tk = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function t_(t, e) {
      var i;
      if (!t.isValid()) return t;
      if ("string" == typeof e) {
        if (/^\d+$/.test(e)) e = $(e);
        else if (!n((e = t.localeData().monthsParse(e)))) return t;
      }
      return (
        (i = Math.min(t.date(), tb(t.year(), e))),
        t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i),
        t
      );
    }
    function tC(e) {
      return null != e
        ? (t_(this, e), t.updateOffset(this, !0), this)
        : ty(this, "Month");
    }
    var tD = tr,
      tS = tr;
    function tT() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        i,
        s = [],
        n = [],
        o = [];
      for (e = 0; e < 12; e++)
        (i = h([2e3, e])),
          s.push(this.monthsShort(i, "")),
          n.push(this.months(i, "")),
          o.push(this.months(i, "")),
          o.push(this.monthsShort(i, ""));
      for (s.sort(t), n.sort(t), o.sort(t), e = 0; e < 12; e++)
        (s[e] = tc(s[e])), (n[e] = tc(n[e]));
      for (e = 0; e < 24; e++) o[e] = tc(o[e]);
      (this._monthsRegex = RegExp("^(" + o.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = RegExp("^(" + n.join("|") + ")", "i")),
        (this._monthsShortStrictRegex = RegExp("^(" + s.join("|") + ")", "i"));
    }
    function t9(t) {
      var e;
      if (t < 100 && 0 <= t) {
        var i = Array.prototype.slice.call(arguments);
        (i[0] = t + 400),
          (e = new Date(Date.UTC.apply(null, i))),
          isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
      } else e = new Date(Date.UTC.apply(null, arguments));
      return e;
    }
    function tM(t, e, i) {
      var s = 7 + e - i;
      return -((7 + t9(t, 0, s).getUTCDay() - e) % 7) + s - 1;
    }
    function tE(t, e, i, s, n) {
      var o,
        r,
        a = 1 + 7 * (e - 1) + ((7 + i - s) % 7) + tM(t, s, n);
      return (
        (r =
          a <= 0
            ? tf((o = t - 1)) + a
            : a > tf(t)
            ? ((o = t + 1), a - tf(t))
            : ((o = t), a)),
        { year: o, dayOfYear: r }
      );
    }
    function tP(t, e, i) {
      var s,
        n,
        o = tM(t.year(), e, i),
        r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
      return (
        r < 1
          ? (s = r + tA((n = t.year() - 1), e, i))
          : r > tA(t.year(), e, i)
          ? ((s = r - tA(t.year(), e, i)), (n = t.year() + 1))
          : ((n = t.year()), (s = r)),
        { week: s, year: n }
      );
    }
    function tA(t, e, i) {
      var s = tM(t, e, i),
        n = tM(t + 1, e, i);
      return (tf(t) - s + n) / 7;
    }
    function tO(t, e) {
      return t.slice(e, 7).concat(t.slice(0, e));
    }
    R("w", ["ww", 2], "wo", "week"),
      R("W", ["WW", 2], "Wo", "isoWeek"),
      A("week", "w"),
      A("isoWeek", "W"),
      (I.week = 5),
      (I.isoWeek = 5),
      tl("w", K),
      tl("ww", K, V),
      tl("W", K),
      tl("WW", K, V),
      tp(["w", "ww", "W", "WW"], function (t, e, i, s) {
        e[s.substr(0, 1)] = $(t);
      });
    R("d", 0, "do", "day"),
      R("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t);
      }),
      R("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t);
      }),
      R("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t);
      }),
      R("e", 0, 0, "weekday"),
      R("E", 0, 0, "isoWeekday"),
      A("day", "d"),
      A("weekday", "e"),
      A("isoWeekday", "E"),
      (I.day = 11),
      (I.weekday = 11),
      (I.isoWeekday = 11),
      tl("d", K),
      tl("e", K),
      tl("E", K),
      tl("dd", function (t, e) {
        return e.weekdaysMinRegex(t);
      }),
      tl("ddd", function (t, e) {
        return e.weekdaysShortRegex(t);
      }),
      tl("dddd", function (t, e) {
        return e.weekdaysRegex(t);
      }),
      tp(["dd", "ddd", "dddd"], function (t, e, i, s) {
        var n = i._locale.weekdaysParse(t, s, i._strict);
        null != n ? (e.d = n) : (c(i).invalidWeekday = t);
      }),
      tp(["d", "e", "E"], function (t, e, i, s) {
        e[s] = $(t);
      });
    var tY = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      tI = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      tL = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      t0 = tr,
      tH = tr,
      tW = tr;
    function tF() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        i,
        s,
        n,
        o,
        r = [],
        a = [],
        l = [],
        c = [];
      for (e = 0; e < 7; e++)
        (i = h([2e3, 1]).day(e)),
          (s = this.weekdaysMin(i, "")),
          (n = this.weekdaysShort(i, "")),
          (o = this.weekdays(i, "")),
          r.push(s),
          a.push(n),
          l.push(o),
          c.push(s),
          c.push(n),
          c.push(o);
      for (r.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++)
        (a[e] = tc(a[e])), (l[e] = tc(l[e])), (c[e] = tc(c[e]));
      (this._weekdaysRegex = RegExp("^(" + c.join("|") + ")", "i")),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = RegExp("^(" + l.join("|") + ")", "i")),
        (this._weekdaysShortStrictRegex = RegExp(
          "^(" + a.join("|") + ")",
          "i"
        )),
        (this._weekdaysMinStrictRegex = RegExp("^(" + r.join("|") + ")", "i"));
    }
    function tz() {
      return this.hours() % 12 || 12;
    }
    function tN(t, e) {
      R(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), e);
      });
    }
    function tR(t, e) {
      return e._meridiemParse;
    }
    R("H", ["HH", 2], 0, "hour"),
      R("h", ["hh", 2], 0, tz),
      R("k", ["kk", 2], 0, function () {
        return this.hours() || 24;
      }),
      R("hmm", 0, 0, function () {
        return "" + tz.apply(this) + H(this.minutes(), 2);
      }),
      R("hmmss", 0, 0, function () {
        return (
          "" + tz.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
        );
      }),
      R("Hmm", 0, 0, function () {
        return "" + this.hours() + H(this.minutes(), 2);
      }),
      R("Hmmss", 0, 0, function () {
        return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
      }),
      tN("a", !0),
      tN("A", !1),
      A("hour", "h"),
      (I.hour = 13),
      tl("a", tR),
      tl("A", tR),
      tl("H", K),
      tl("h", K),
      tl("k", K),
      tl("HH", K, V),
      tl("hh", K, V),
      tl("kk", K, V),
      tl("hmm", X),
      tl("hmmss", Q),
      tl("Hmm", X),
      tl("Hmmss", Q),
      tu(["H", "HH"], 3),
      tu(["k", "kk"], function (t, e, i) {
        var s = $(t);
        e[3] = 24 === s ? 0 : s;
      }),
      tu(["a", "A"], function (t, e, i) {
        (i._isPm = i._locale.isPM(t)), (i._meridiem = t);
      }),
      tu(["h", "hh"], function (t, e, i) {
        (e[3] = $(t)), (c(i).bigHour = !0);
      }),
      tu("hmm", function (t, e, i) {
        var s = t.length - 2;
        (e[3] = $(t.substr(0, s))),
          (e[4] = $(t.substr(s))),
          (c(i).bigHour = !0);
      }),
      tu("hmmss", function (t, e, i) {
        var s = t.length - 4,
          n = t.length - 2;
        (e[3] = $(t.substr(0, s))),
          (e[4] = $(t.substr(s, 2))),
          (e[5] = $(t.substr(n))),
          (c(i).bigHour = !0);
      }),
      tu("Hmm", function (t, e, i) {
        var s = t.length - 2;
        (e[3] = $(t.substr(0, s))), (e[4] = $(t.substr(s)));
      }),
      tu("Hmmss", function (t, e, i) {
        var s = t.length - 4,
          n = t.length - 2;
        (e[3] = $(t.substr(0, s))),
          (e[4] = $(t.substr(s, 2))),
          (e[5] = $(t.substr(n)));
      });
    var tj,
      tB = tv("Hours", !0),
      t1 = {
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        longDateFormat: {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        months: tx,
        monthsShort: tk,
        week: { dow: 0, doy: 6 },
        weekdays: tY,
        weekdaysMin: tL,
        weekdaysShort: tI,
        meridiemParse: /[ap]\.?m?\.?/i,
      },
      tU = {},
      tV = {};
    function t2(t) {
      return t ? t.toLowerCase().replace("_", "-") : t;
    }
    function t4(t) {
      var e = null;
      if (!tU[t] && "undefined" != typeof module && module && module.exports)
        try {
          (e = tj._abbr), require("./locale/" + t), tq(e);
        } catch (i) {}
      return tU[t];
    }
    function tq(t, e) {
      var i;
      return (
        t &&
          ((i = s(e) ? tG(t) : t3(t, e))
            ? (tj = i)
            : "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "Locale " + t + " not found. Did you forget to load it?"
              )),
        tj._abbr
      );
    }
    function t3(t, e) {
      if (null === e) return delete tU[t], null;
      var i,
        s = t1;
      if (((e.abbr = t), null != tU[t]))
        S(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (s = tU[t]._config);
      else if (null != e.parentLocale) {
        if (null != tU[e.parentLocale]) s = tU[e.parentLocale]._config;
        else {
          if (null == (i = t4(e.parentLocale)))
            return (
              tV[e.parentLocale] || (tV[e.parentLocale] = []),
              tV[e.parentLocale].push({ name: t, config: e }),
              null
            );
          s = i._config;
        }
      }
      return (
        (tU[t] = new E(M(s, e))),
        tV[t] &&
          tV[t].forEach(function (t) {
            t3(t.name, t.config);
          }),
        tq(t),
        tU[t]
      );
    }
    function tG(t) {
      var i;
      if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
        return tj;
      if (!e(t)) {
        if ((i = t4(t))) return i;
        t = [t];
      }
      return (function (t) {
        for (var e, i, s, n, o = 0; o < t.length; ) {
          for (
            e = (n = t2(t[o]).split("-")).length,
              i = (i = t2(t[o + 1])) ? i.split("-") : null;
            0 < e;

          ) {
            if ((s = t4(n.slice(0, e).join("-")))) return s;
            if (i && i.length >= e && b(n, i, !0) >= e - 1) break;
            e--;
          }
          o++;
        }
        return tj;
      })(t);
    }
    function t7(t) {
      var e,
        i = t._a;
      return (
        i &&
          -2 === c(t).overflow &&
          ((e =
            i[1] < 0 || 11 < i[1]
              ? 1
              : i[2] < 1 || i[2] > tb(i[0], i[1])
              ? 2
              : i[3] < 0 ||
                24 < i[3] ||
                (24 === i[3] && (0 !== i[4] || 0 !== i[5] || 0 !== i[6]))
              ? 3
              : i[4] < 0 || 59 < i[4]
              ? 4
              : i[5] < 0 || 59 < i[5]
              ? 5
              : i[6] < 0 || 999 < i[6]
              ? 6
              : -1),
          c(t)._overflowDayOfYear && (e < 0 || 2 < e) && (e = 2),
          c(t)._overflowWeeks && -1 === e && (e = 7),
          c(t)._overflowWeekday && -1 === e && (e = 8),
          (c(t).overflow = e)),
        t
      );
    }
    function t5(t, e, i) {
      return null != t ? t : null != e ? e : i;
    }
    function tZ(e) {
      var i,
        s,
        n,
        o,
        r,
        a,
        l,
        h = [];
      if (!e._d) {
        for (
          i = e,
            s = new Date(t.now()),
            r = i._useUTC
              ? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()]
              : [s.getFullYear(), s.getMonth(), s.getDate()],
            e._w &&
              null == e._a[2] &&
              null == e._a[1] &&
              (function (t) {
                var e, i, s, n, o, r, a, l;
                if (null != (e = t._w).GG || null != e.W || null != e.E)
                  (o = 1),
                    (r = 4),
                    (i = t5(e.GG, t._a[0], tP(el(), 1, 4).year)),
                    (s = t5(e.W, 1)),
                    ((n = t5(e.E, 1)) < 1 || 7 < n) && (l = !0);
                else {
                  (o = t._locale._week.dow), (r = t._locale._week.doy);
                  var h = tP(el(), o, r);
                  (i = t5(e.gg, t._a[0], h.year)),
                    (s = t5(e.w, h.week)),
                    null != e.d
                      ? ((n = e.d) < 0 || 6 < n) && (l = !0)
                      : null != e.e
                      ? ((n = e.e + o), (e.e < 0 || 6 < e.e) && (l = !0))
                      : (n = o);
                }
                s < 1 || s > tA(i, o, r)
                  ? (c(t)._overflowWeeks = !0)
                  : null != l
                  ? (c(t)._overflowWeekday = !0)
                  : ((a = tE(i, s, n, o, r)),
                    (t._a[0] = a.year),
                    (t._dayOfYear = a.dayOfYear));
              })(e),
            null != e._dayOfYear &&
              ((l = t5(e._a[0], r[0])),
              (e._dayOfYear > tf(l) || 0 === e._dayOfYear) &&
                (c(e)._overflowDayOfYear = !0),
              (o = t9(l, 0, e._dayOfYear)),
              (e._a[1] = o.getUTCMonth()),
              (e._a[2] = o.getUTCDate())),
            n = 0;
          n < 3 && null == e._a[n];
          ++n
        )
          e._a[n] = h[n] = r[n];
        for (; n < 7; n++)
          e._a[n] = h[n] = null == e._a[n] ? (2 === n ? 1 : 0) : e._a[n];
        24 === e._a[3] &&
          0 === e._a[4] &&
          0 === e._a[5] &&
          0 === e._a[6] &&
          ((e._nextDay = !0), (e._a[3] = 0)),
          (e._d = (
            e._useUTC
              ? t9
              : function (t, e, i, s, n, o, r) {
                  var a;
                  return (
                    t < 100 && 0 <= t
                      ? isFinite(
                          (a = new Date(
                            t + 400,
                            e,
                            i,
                            s,
                            n,
                            o,
                            r
                          )).getFullYear()
                        ) && a.setFullYear(t)
                      : (a = new Date(t, e, i, s, n, o, r)),
                    a
                  );
                }
          ).apply(null, h)),
          (a = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
          null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          e._nextDay && (e._a[3] = 24),
          e._w &&
            void 0 !== e._w.d &&
            e._w.d !== a &&
            (c(e).weekdayMismatch = !0);
      }
    }
    var tK =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      tX =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      t6 = /Z|[+-]\d\d(?::?\d\d)?/,
      tQ = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
      ],
      tJ = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      et = /^\/?Date\((\-?\d+)/i;
    function ee(t) {
      var e,
        i,
        s,
        n,
        o,
        r,
        a = t._i,
        l = tK.exec(a) || tX.exec(a);
      if (l) {
        for (c(t).iso = !0, e = 0, i = tQ.length; e < i; e++)
          if (tQ[e][1].exec(l[1])) {
            (n = tQ[e][0]), (s = !1 !== tQ[e][2]);
            break;
          }
        if (null == n) return void (t._isValid = !1);
        if (l[3]) {
          for (e = 0, i = tJ.length; e < i; e++)
            if (tJ[e][1].exec(l[3])) {
              o = (l[2] || " ") + tJ[e][0];
              break;
            }
          if (null == o) return void (t._isValid = !1);
        }
        if (!s && null != o) return void (t._isValid = !1);
        if (l[4]) {
          if (!t6.exec(l[4])) return void (t._isValid = !1);
          r = "Z";
        }
        (t._f = n + (o || "") + (r || "")), eo(t);
      } else t._isValid = !1;
    }
    var ei =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      es = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function en(t) {
      var e,
        i,
        s,
        n = ei.exec(
          t._i
            .replace(/\([^)]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "")
        );
      if (n) {
        var o,
          r,
          a,
          l,
          h,
          d,
          u,
          p,
          f,
          m =
            ((o = n[4]),
            (r = n[3]),
            (a = n[2]),
            (l = n[5]),
            (h = n[6]),
            (d = n[7]),
            (f = [
              ((u = o),
              (p = parseInt(u, 10)) <= 49 ? 2e3 + p : p <= 999 ? 1900 + p : p),
              tk.indexOf(r),
              parseInt(a, 10),
              parseInt(l, 10),
              parseInt(h, 10),
            ]),
            d && f.push(parseInt(d, 10)),
            f);
        if (
          ((e = n[1]),
          (i = m),
          (s = t),
          e &&
            tI.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() &&
            ((c(s).weekdayMismatch = !0), (s._isValid = !1), 1))
        )
          return;
        (t._a = m),
          (t._tzm = (function (t, e, i) {
            if (t) return es[t];
            if (e) return 0;
            var s = parseInt(i, 10),
              n = s % 100;
            return ((s - n) / 100) * 60 + n;
          })(n[8], n[9], n[10])),
          (t._d = t9.apply(null, t._a)),
          t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          (c(t).rfc2822 = !0);
      } else t._isValid = !1;
    }
    function eo(e) {
      if (e._f !== t.ISO_8601) {
        if (e._f !== t.RFC_2822) {
          (e._a = []), (c(e).empty = !0);
          var i,
            s,
            n,
            o,
            r,
            l,
            h,
            d,
            u,
            p,
            f,
            m,
            g = "" + e._i,
            v = g.length,
            y = 0;
          for (h = B(e._f, e._locale).match(W) || [], r = 0; r < h.length; r++)
            (d = h[r]),
              (l = (g.match(th(d, e)) || [])[0]) &&
                (0 < (u = g.substr(0, g.indexOf(l))).length &&
                  c(e).unusedInput.push(u),
                (g = g.slice(g.indexOf(l) + l.length)),
                (y += l.length)),
              N[d]
                ? (l ? (c(e).empty = !1) : c(e).unusedTokens.push(d),
                  (p = d),
                  (m = e),
                  null != (f = l) && a(td, p) && td[p](f, m._a, m, p))
                : e._strict && !l && c(e).unusedTokens.push(d);
          (c(e).charsLeftOver = v - y),
            0 < g.length && c(e).unusedInput.push(g),
            e._a[3] <= 12 &&
              !0 === c(e).bigHour &&
              0 < e._a[3] &&
              (c(e).bigHour = void 0),
            (c(e).parsedDateParts = e._a.slice(0)),
            (c(e).meridiem = e._meridiem),
            (e._a[3] =
              ((i = e._locale),
              (s = e._a[3]),
              null == (n = e._meridiem)
                ? s
                : null != i.meridiemHour
                ? i.meridiemHour(s, n)
                : (null != i.isPM &&
                    ((o = i.isPM(n)) && s < 12 && (s += 12),
                    o || 12 !== s || (s = 0)),
                  s))),
            tZ(e),
            t7(e);
        } else en(e);
      } else ee(e);
    }
    function er(a) {
      var h,
        p,
        m,
        y,
        $ = a._i,
        b = a._f;
      return (
        (a._locale = a._locale || tG(a._l)),
        null === $ || (void 0 === b && "" === $)
          ? u({ nullInput: !0 })
          : ("string" == typeof $ && (a._i = $ = a._locale.preparse($)),
            v($)
              ? new g(t7($))
              : (o($)
                  ? (a._d = $)
                  : e(b)
                  ? (function (t) {
                      var e, i, s, n, o;
                      if (0 === t._f.length)
                        return (
                          (c(t).invalidFormat = !0), (t._d = new Date(NaN))
                        );
                      for (n = 0; n < t._f.length; n++)
                        (o = 0),
                          (e = f({}, t)),
                          null != t._useUTC && (e._useUTC = t._useUTC),
                          (e._f = t._f[n]),
                          eo(e),
                          d(e) &&
                            ((o += c(e).charsLeftOver),
                            (o += 10 * c(e).unusedTokens.length),
                            (c(e).score = o),
                            (null == s || o < s) && ((s = o), (i = e)));
                      l(t, i || e);
                    })(a)
                  : b
                  ? eo(a)
                  : s((p = (h = a)._i))
                  ? (h._d = new Date(t.now()))
                  : o(p)
                  ? (h._d = new Date(p.valueOf()))
                  : "string" == typeof p
                  ? ((m = h),
                    null === (y = et.exec(m._i))
                      ? (ee(m),
                        !1 === m._isValid &&
                          (delete m._isValid,
                          en(m),
                          !1 === m._isValid &&
                            (delete m._isValid, t.createFromInputFallback(m))))
                      : (m._d = new Date(+y[1])))
                  : e(p)
                  ? ((h._a = r(p.slice(0), function (t) {
                      return parseInt(t, 10);
                    })),
                    tZ(h))
                  : i(p)
                  ? (function (t) {
                      if (!t._d) {
                        var e = Y(t._i);
                        (t._a = r(
                          [
                            e.year,
                            e.month,
                            e.day || e.date,
                            e.hour,
                            e.minute,
                            e.second,
                            e.millisecond,
                          ],
                          function (t) {
                            return t && parseInt(t, 10);
                          }
                        )),
                          tZ(t);
                      }
                    })(h)
                  : n(p)
                  ? (h._d = new Date(p))
                  : t.createFromInputFallback(h),
                d(a) || (a._d = null),
                a))
      );
    }
    function ea(t, s, n, o, r) {
      var a,
        l = {};
      return (
        (!0 !== n && !1 !== n) || ((o = n), (n = void 0)),
        ((i(t) &&
          (function (t) {
            var e;
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(t).length;
            for (e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
          })(t)) ||
          (e(t) && 0 === t.length)) &&
          (t = void 0),
        (l._isAMomentObject = !0),
        (l._useUTC = l._isUTC = r),
        (l._l = n),
        (l._i = t),
        (l._f = s),
        (l._strict = o),
        (a = new g(t7(er(l))))._nextDay &&
          (a.add(1, "d"), (a._nextDay = void 0)),
        a
      );
    }
    function el(t, e, i, s) {
      return ea(t, e, i, s, !1);
    }
    (t.createFromInputFallback = x(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
      }
    )),
      (t.ISO_8601 = function () {}),
      (t.RFC_2822 = function () {});
    var eh = x(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var t = el.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t < this ? this : t) : u();
        }
      ),
      ec = x(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var t = el.apply(null, arguments);
          return this.isValid() && t.isValid() ? (this < t ? this : t) : u();
        }
      );
    function ed(t, i) {
      var s, n;
      if ((1 === i.length && e(i[0]) && (i = i[0]), !i.length)) return el();
      for (s = i[0], n = 1; n < i.length; ++n)
        (i[n].isValid() && !i[n][t](s)) || (s = i[n]);
      return s;
    }
    var eu = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
    function ep(t) {
      var e = Y(t),
        i = e.year || 0,
        s = e.quarter || 0,
        n = e.month || 0,
        o = e.week || e.isoWeek || 0,
        r = e.day || 0,
        a = e.hour || 0,
        l = e.minute || 0,
        h = e.second || 0,
        c = e.millisecond || 0;
      (this._isValid = (function (t) {
        for (var e in t)
          if (-1 === tg.call(eu, e) || (null != t[e] && isNaN(t[e]))) return !1;
        for (var i = !1, s = 0; s < eu.length; ++s)
          if (t[eu[s]]) {
            if (i) return !1;
            parseFloat(t[eu[s]]) !== $(t[eu[s]]) && (i = !0);
          }
        return !0;
      })(e)),
        (this._milliseconds = +c + 1e3 * h + 6e4 * l + 1e3 * a * 3600),
        (this._days = +r + 7 * o),
        (this._months = +n + 3 * s + 12 * i),
        (this._data = {}),
        (this._locale = tG()),
        this._bubble();
    }
    function ef(t) {
      return t instanceof ep;
    }
    function em(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
    }
    function eg(t, e) {
      R(t, 0, 0, function () {
        var t = this.utcOffset(),
          i = "+";
        return (
          t < 0 && ((t = -t), (i = "-")),
          i + H(~~(t / 60), 2) + e + H(~~t % 60, 2)
        );
      });
    }
    eg("Z", ":"),
      eg("ZZ", ""),
      tl("Z", to),
      tl("ZZ", to),
      tu(["Z", "ZZ"], function (t, e, i) {
        (i._useUTC = !0), (i._tzm = ev(to, t));
      });
    var e8 = /([\+\-]|\d\d)/gi;
    function ev(t, e) {
      var i = (e || "").match(t);
      if (null === i) return null;
      var s = ((i[i.length - 1] || []) + "").match(e8) || ["-", 0, 0],
        n = 60 * s[1] + $(s[2]);
      return 0 === n ? 0 : "+" === s[0] ? n : -n;
    }
    function ey(e, i) {
      var s, n;
      return i._isUTC
        ? ((s = i.clone()),
          (n = (v(e) || o(e) ? e.valueOf() : el(e).valueOf()) - s.valueOf()),
          s._d.setTime(s._d.valueOf() + n),
          t.updateOffset(s, !1),
          s)
        : el(e).local();
    }
    function e$(t) {
      return -(15 * Math.round(t._d.getTimezoneOffset() / 15));
    }
    function eb() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    t.updateOffset = function () {};
    var ew = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      ex =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function ek(t, e) {
      var i,
        s,
        o,
        r,
        l,
        h,
        c = t,
        d = null;
      return (
        ef(t)
          ? (c = { ms: t._milliseconds, d: t._days, M: t._months })
          : n(t)
          ? ((c = {}), e ? (c[e] = t) : (c.milliseconds = t))
          : (d = ew.exec(t))
          ? ((i = "-" === d[1] ? -1 : 1),
            (c = {
              y: 0,
              d: $(d[2]) * i,
              h: $(d[3]) * i,
              m: $(d[4]) * i,
              s: $(d[5]) * i,
              ms: $(em(1e3 * d[6])) * i,
            }))
          : (d = ex.exec(t))
          ? ((i = "-" === d[1] ? -1 : 1),
            (c = {
              y: e_(d[2], i),
              M: e_(d[3], i),
              w: e_(d[4], i),
              d: e_(d[5], i),
              h: e_(d[6], i),
              m: e_(d[7], i),
              s: e_(d[8], i),
            }))
          : null == c
          ? (c = {})
          : "object" == typeof c &&
            ("from" in c || "to" in c) &&
            ((o =
              ((r = el(c.from)),
              (l = el(c.to)),
              r.isValid() && l.isValid()
                ? ((l = ey(l, r)),
                  r.isBefore(l)
                    ? (h = eC(r, l))
                    : (((h = eC(l, r)).milliseconds = -h.milliseconds),
                      (h.months = -h.months)),
                  h)
                : { milliseconds: 0, months: 0 })),
            ((c = {}).ms = o.milliseconds),
            (c.M = o.months)),
        (s = new ep(c)),
        ef(t) && a(t, "_locale") && (s._locale = t._locale),
        s
      );
    }
    function e_(t, e) {
      var i = t && parseFloat(t.replace(",", "."));
      return (isNaN(i) ? 0 : i) * e;
    }
    function eC(t, e) {
      var i = {};
      return (
        (i.months = e.month() - t.month() + 12 * (e.year() - t.year())),
        t.clone().add(i.months, "M").isAfter(e) && --i.months,
        (i.milliseconds = +e - +t.clone().add(i.months, "M")),
        i
      );
    }
    function eD(t, e) {
      return function (i, s) {
        var n;
        return (
          null === s ||
            isNaN(+s) ||
            (S(
              e,
              "moment()." +
                e +
                "(period, number) is deprecated. Please use moment()." +
                e +
                "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            ),
            (n = i),
            (i = s),
            (s = n)),
          eS(this, ek((i = "string" == typeof i ? +i : i), s), t),
          this
        );
      };
    }
    function eS(e, i, s, n) {
      var o = i._milliseconds,
        r = em(i._days),
        a = em(i._months);
      e.isValid() &&
        ((n = null == n || n),
        a && t_(e, ty(e, "Month") + a * s),
        r && t$(e, "Date", ty(e, "Date") + r * s),
        o && e._d.setTime(e._d.valueOf() + o * s),
        n && t.updateOffset(e, r || a));
    }
    (ek.fn = ep.prototype),
      (ek.invalid = function () {
        return ek(NaN);
      });
    var eT = eD(1, "add"),
      e9 = eD(-1, "subtract");
    function eM(t, e) {
      var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        s = t.clone().add(i, "months");
      return (
        -(
          i +
          (e - s < 0
            ? (e - s) / (s - t.clone().add(i - 1, "months"))
            : (e - s) / (t.clone().add(i + 1, "months") - s))
        ) || 0
      );
    }
    function eE(t) {
      var e;
      return void 0 === t
        ? this._locale._abbr
        : (null != (e = tG(t)) && (this._locale = e), this);
    }
    (t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
      (t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var eP = x(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (t) {
        return void 0 === t ? this.localeData() : this.locale(t);
      }
    );
    function eA() {
      return this._locale;
    }
    function eO(t, e) {
      return ((t % e) + e) % e;
    }
    function eY(t, e, i) {
      return t < 100 && 0 <= t
        ? new Date(t + 400, e, i) - 126227808e5
        : new Date(t, e, i).valueOf();
    }
    function eI(t, e, i) {
      return t < 100 && 0 <= t
        ? Date.UTC(t + 400, e, i) - 126227808e5
        : Date.UTC(t, e, i);
    }
    function eL(t, e) {
      R(0, [t, t.length], 0, e);
    }
    function e0(t, e, i, s, n) {
      var o;
      return null == t
        ? tP(this, s, n).year
        : ((o = tA(t, s, n)) < e && (e = o),
          function (t, e, i, s, n) {
            var o = tE(t, e, i, s, n),
              r = t9(o.year, 0, o.dayOfYear);
            return (
              this.year(r.getUTCFullYear()),
              this.month(r.getUTCMonth()),
              this.date(r.getUTCDate()),
              this
            );
          }.call(this, t, e, i, s, n));
    }
    R(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }),
      R(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      eL("gggg", "weekYear"),
      eL("ggggg", "weekYear"),
      eL("GGGG", "isoWeekYear"),
      eL("GGGGG", "isoWeekYear"),
      A("weekYear", "gg"),
      A("isoWeekYear", "GG"),
      (I.weekYear = 1),
      (I.isoWeekYear = 1),
      tl("G", ts),
      tl("g", ts),
      tl("GG", K, V),
      tl("gg", K, V),
      tl("GGGG", tt, G),
      tl("gggg", tt, G),
      tl("GGGGG", te, Z),
      tl("ggggg", te, Z),
      tp(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, s) {
        e[s.substr(0, 2)] = $(t);
      }),
      tp(["gg", "GG"], function (e, i, s, n) {
        i[n] = t.parseTwoDigitYear(e);
      }),
      R("Q", 0, "Qo", "quarter"),
      A("quarter", "Q"),
      (I.quarter = 7),
      tl("Q", U),
      tu("Q", function (t, e) {
        e[1] = 3 * ($(t) - 1);
      }),
      R("D", ["DD", 2], "Do", "date"),
      A("date", "D"),
      (I.date = 9),
      tl("D", K),
      tl("DD", K, V),
      tl("Do", function (t, e) {
        return t
          ? e._dayOfMonthOrdinalParse || e._ordinalParse
          : e._dayOfMonthOrdinalParseLenient;
      }),
      tu(["D", "DD"], 2),
      tu("Do", function (t, e) {
        e[2] = $(t.match(K)[0]);
      });
    var eH = tv("Date", !0);
    R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      A("dayOfYear", "DDD"),
      (I.dayOfYear = 4),
      tl("DDD", J),
      tl("DDDD", q),
      tu(["DDD", "DDDD"], function (t, e, i) {
        i._dayOfYear = $(t);
      }),
      R("m", ["mm", 2], 0, "minute"),
      A("minute", "m"),
      (I.minute = 14),
      tl("m", K),
      tl("mm", K, V),
      tu(["m", "mm"], 4);
    var eW = tv("Minutes", !1);
    R("s", ["ss", 2], 0, "second"),
      A("second", "s"),
      (I.second = 15),
      tl("s", K),
      tl("ss", K, V),
      tu(["s", "ss"], 5);
    var eF,
      ez = tv("Seconds", !1);
    for (
      R("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }),
        R(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }),
        R(0, ["SSS", 3], 0, "millisecond"),
        R(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }),
        R(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }),
        R(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }),
        R(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }),
        R(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }),
        R(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }),
        A("millisecond", "ms"),
        I.millisecond = 16,
        tl("S", J, U),
        tl("SS", J, V),
        tl("SSS", J, q),
        eF = "SSSS";
      eF.length <= 9;
      eF += "S"
    )
      tl(eF, ti);
    function eN(t, e) {
      e[6] = $(1e3 * ("0." + t));
    }
    for (eF = "S"; eF.length <= 9; eF += "S") tu(eF, eN);
    var eR = tv("Milliseconds", !1);
    R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
    var ej = g.prototype;
    function eB(t) {
      return t;
    }
    (ej.add = eT),
      (ej.calendar = function (e, i) {
        var s = e || el(),
          n = ey(s, this).startOf("day"),
          o = t.calendarFormat(this, n) || "sameElse",
          r = i && (T(i[o]) ? i[o].call(this, s) : i[o]);
        return this.format(r || this.localeData().calendar(o, this, el(s)));
      }),
      (ej.clone = function () {
        return new g(this);
      }),
      (ej.diff = function (t, e, i) {
        var s, n, o;
        if (!this.isValid() || !(s = ey(t, this)).isValid()) return NaN;
        switch (((n = 6e4 * (s.utcOffset() - this.utcOffset())), (e = O(e)))) {
          case "year":
            o = eM(this, s) / 12;
            break;
          case "month":
            o = eM(this, s);
            break;
          case "quarter":
            o = eM(this, s) / 3;
            break;
          case "second":
            o = (this - s) / 1e3;
            break;
          case "minute":
            o = (this - s) / 6e4;
            break;
          case "hour":
            o = (this - s) / 36e5;
            break;
          case "day":
            o = (this - s - n) / 864e5;
            break;
          case "week":
            o = (this - s - n) / 6048e5;
            break;
          default:
            o = this - s;
        }
        return i ? o : y(o);
      }),
      (ej.endOf = function (e) {
        if (void 0 === (e = O(e)) || "millisecond" === e || !this.isValid())
          return this;
        var i,
          s = this._isUTC ? eI : eY;
        switch (e) {
          case "year":
            i = s(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            i = s(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            i = s(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            i =
              s(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            i =
              s(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            i = s(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (i = this._d.valueOf()),
              (i +=
                36e5 -
                eO(i + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
                1);
            break;
          case "minute":
            (i = this._d.valueOf()), (i += 6e4 - eO(i, 6e4) - 1);
            break;
          case "second":
            (i = this._d.valueOf()), (i += 1e3 - eO(i, 1e3) - 1);
        }
        return this._d.setTime(i), t.updateOffset(this, !0), this;
      }),
      (ej.format = function (e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = j(this, e);
        return this.localeData().postformat(i);
      }),
      (ej.from = function (t, e) {
        return this.isValid() && ((v(t) && t.isValid()) || el(t).isValid())
          ? ek({ to: this, from: t }).locale(this.locale()).humanize(!e)
          : this.localeData().invalidDate();
      }),
      (ej.fromNow = function (t) {
        return this.from(el(), t);
      }),
      (ej.to = function (t, e) {
        return this.isValid() && ((v(t) && t.isValid()) || el(t).isValid())
          ? ek({ from: this, to: t }).locale(this.locale()).humanize(!e)
          : this.localeData().invalidDate();
      }),
      (ej.toNow = function (t) {
        return this.to(el(), t);
      }),
      (ej.get = function (t) {
        return T(this[(t = O(t))]) ? this[t]() : this;
      }),
      (ej.invalidAt = function () {
        return c(this).overflow;
      }),
      (ej.isAfter = function (t, e) {
        var i = v(t) ? t : el(t);
        return (
          !(!this.isValid() || !i.isValid()) &&
          ("millisecond" === (e = O(e) || "millisecond")
            ? this.valueOf() > i.valueOf()
            : i.valueOf() < this.clone().startOf(e).valueOf())
        );
      }),
      (ej.isBefore = function (t, e) {
        var i = v(t) ? t : el(t);
        return (
          !(!this.isValid() || !i.isValid()) &&
          ("millisecond" === (e = O(e) || "millisecond")
            ? this.valueOf() < i.valueOf()
            : this.clone().endOf(e).valueOf() < i.valueOf())
        );
      }),
      (ej.isBetween = function (t, e, i, s) {
        var n = v(t) ? t : el(t),
          o = v(e) ? e : el(e);
        return (
          !!(this.isValid() && n.isValid() && o.isValid()) &&
          ("(" === (s = s || "()")[0]
            ? this.isAfter(n, i)
            : !this.isBefore(n, i)) &&
          (")" === s[1] ? this.isBefore(o, i) : !this.isAfter(o, i))
        );
      }),
      (ej.isSame = function (t, e) {
        var i,
          s = v(t) ? t : el(t);
        return (
          !(!this.isValid() || !s.isValid()) &&
          ("millisecond" === (e = O(e) || "millisecond")
            ? this.valueOf() === s.valueOf()
            : ((i = s.valueOf()),
              this.clone().startOf(e).valueOf() <= i &&
                i <= this.clone().endOf(e).valueOf()))
        );
      }),
      (ej.isSameOrAfter = function (t, e) {
        return this.isSame(t, e) || this.isAfter(t, e);
      }),
      (ej.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e);
      }),
      (ej.isValid = function () {
        return d(this);
      }),
      (ej.lang = eP),
      (ej.locale = eE),
      (ej.localeData = eA),
      (ej.max = ec),
      (ej.min = eh),
      (ej.parsingFlags = function () {
        return l({}, c(this));
      }),
      (ej.set = function (t, e) {
        if ("object" == typeof t)
          for (
            var i = (function (t) {
                var e = [];
                for (var i in t) e.push({ unit: i, priority: I[i] });
                return (
                  e.sort(function (t, e) {
                    return t.priority - e.priority;
                  }),
                  e
                );
              })((t = Y(t))),
              s = 0;
            s < i.length;
            s++
          )
            this[i[s].unit](t[i[s].unit]);
        else if (T(this[(t = O(t))])) return this[t](e);
        return this;
      }),
      (ej.startOf = function (e) {
        if (void 0 === (e = O(e)) || "millisecond" === e || !this.isValid())
          return this;
        var i,
          s = this._isUTC ? eI : eY;
        switch (e) {
          case "year":
            i = s(this.year(), 0, 1);
            break;
          case "quarter":
            i = s(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            i = s(this.year(), this.month(), 1);
            break;
          case "week":
            i = s(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            i = s(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            i = s(this.year(), this.month(), this.date());
            break;
          case "hour":
            (i = this._d.valueOf()),
              (i -= eO(i + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
            break;
          case "minute":
            (i = this._d.valueOf()), (i -= eO(i, 6e4));
            break;
          case "second":
            (i = this._d.valueOf()), (i -= eO(i, 1e3));
        }
        return this._d.setTime(i), t.updateOffset(this, !0), this;
      }),
      (ej.subtract = e9),
      (ej.toArray = function () {
        return [
          this.year(),
          this.month(),
          this.date(),
          this.hour(),
          this.minute(),
          this.second(),
          this.millisecond(),
        ];
      }),
      (ej.toObject = function () {
        return {
          years: this.year(),
          months: this.month(),
          date: this.date(),
          hours: this.hours(),
          minutes: this.minutes(),
          seconds: this.seconds(),
          milliseconds: this.milliseconds(),
        };
      }),
      (ej.toDate = function () {
        return new Date(this.valueOf());
      }),
      (ej.toISOString = function (t) {
        if (!this.isValid()) return null;
        var e = !0 !== t,
          i = e ? this.clone().utc() : this;
        return 0 > i.year() || 9999 < i.year()
          ? j(
              i,
              e
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : T(Date.prototype.toISOString)
          ? e
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", j(i, "Z"))
          : j(
              i,
              e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }),
      (ej.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment",
          e = "";
        this.isLocal() ||
          ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
          (e = "Z"));
        var i = "[" + t + '("]',
          s = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY",
          n = e + '[")]';
        return this.format(i + s + "-MM-DD[T]HH:mm:ss.SSS" + n);
      }),
      (ej.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }),
      (ej.toString = function () {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }),
      (ej.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }),
      (ej.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }),
      (ej.creationData = function () {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }),
      (ej.year = t8),
      (ej.isLeapYear = function () {
        return tm(this.year());
      }),
      (ej.weekYear = function (t) {
        return e0.call(
          this,
          t,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }),
      (ej.isoWeekYear = function (t) {
        return e0.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
      }),
      (ej.quarter = ej.quarters =
        function (t) {
          return null == t
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (t - 1) + (this.month() % 3));
        }),
      (ej.month = tC),
      (ej.daysInMonth = function () {
        return tb(this.year(), this.month());
      }),
      (ej.week = ej.weeks =
        function (t) {
          var e = this.localeData().week(this);
          return null == t ? e : this.add(7 * (t - e), "d");
        }),
      (ej.isoWeek = ej.isoWeeks =
        function (t) {
          var e = tP(this, 1, 4).week;
          return null == t ? e : this.add(7 * (t - e), "d");
        }),
      (ej.weeksInYear = function () {
        var t = this.localeData()._week;
        return tA(this.year(), t.dow, t.doy);
      }),
      (ej.isoWeeksInYear = function () {
        return tA(this.year(), 1, 4);
      }),
      (ej.date = eH),
      (ej.day = ej.days =
        function (t) {
          if (!this.isValid()) return null != t ? this : NaN;
          var e,
            i,
            s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != t
            ? ((e = t),
              (i = this.localeData()),
              (t =
                "string" != typeof e
                  ? e
                  : isNaN(e)
                  ? "number" == typeof (e = i.weekdaysParse(e))
                    ? e
                    : null
                  : parseInt(e, 10)),
              this.add(t - s, "d"))
            : s;
        }),
      (ej.weekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d");
      }),
      (ej.isoWeekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this.day() || 7;
        var e,
          i,
          s =
            ((e = t),
            (i = this.localeData()),
            "string" == typeof e
              ? i.weekdaysParse(e) % 7 || 7
              : isNaN(e)
              ? null
              : e);
        return this.day(this.day() % 7 ? s : s - 7);
      }),
      (ej.dayOfYear = function (t) {
        var e =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == t ? e : this.add(t - e, "d");
      }),
      (ej.hour = ej.hours = tB),
      (ej.minute = ej.minutes = eW),
      (ej.second = ej.seconds = ez),
      (ej.millisecond = ej.milliseconds = eR),
      (ej.utcOffset = function (e, i, s) {
        var n,
          o = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? o : e$(this);
        if ("string" == typeof e) {
          if (null === (e = ev(to, e))) return this;
        } else 16 > Math.abs(e) && !s && (e *= 60);
        return (
          !this._isUTC && i && (n = e$(this)),
          (this._offset = e),
          (this._isUTC = !0),
          null != n && this.add(n, "m"),
          o !== e &&
            (!i || this._changeInProgress
              ? eS(this, ek(e - o, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                t.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }),
      (ej.utc = function (t) {
        return this.utcOffset(0, t);
      }),
      (ej.local = function (t) {
        return (
          this._isUTC &&
            (this.utcOffset(0, t),
            (this._isUTC = !1),
            t && this.subtract(e$(this), "m")),
          this
        );
      }),
      (ej.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var t = ev(tn, this._i);
          null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
        }
        return this;
      }),
      (ej.hasAlignedHourOffset = function (t) {
        return (
          !!this.isValid() &&
          ((t = t ? el(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
        );
      }),
      (ej.isDST = function () {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }),
      (ej.isLocal = function () {
        return !!this.isValid() && !this._isUTC;
      }),
      (ej.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC;
      }),
      (ej.isUtc = eb),
      (ej.isUTC = eb),
      (ej.zoneAbbr = function () {
        return this._isUTC ? "UTC" : "";
      }),
      (ej.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }),
      (ej.dates = x("dates accessor is deprecated. Use date instead.", eH)),
      (ej.months = x("months accessor is deprecated. Use month instead", tC)),
      (ej.years = x("years accessor is deprecated. Use year instead", t8)),
      (ej.zone = x(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        function (t, e) {
          return null != t
            ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
            : -this.utcOffset();
        }
      )),
      (ej.isDSTShifted = x(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        function () {
          if (!s(this._isDSTShifted)) return this._isDSTShifted;
          var t = {};
          if ((f(t, this), (t = er(t))._a)) {
            var e = t._isUTC ? h(t._a) : el(t._a);
            this._isDSTShifted = this.isValid() && 0 < b(t._a, e.toArray());
          } else this._isDSTShifted = !1;
          return this._isDSTShifted;
        }
      ));
    var e1 = E.prototype;
    function eU(t, e, i, s) {
      var n = tG(),
        o = h().set(s, e);
      return n[i](o, t);
    }
    function eV(t, e, i) {
      if ((n(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
        return eU(t, e, i, "month");
      var s,
        o = [];
      for (s = 0; s < 12; s++) o[s] = eU(t, s, i, "month");
      return o;
    }
    function e2(t, e, i, s) {
      e =
        ("boolean" == typeof t
          ? n(e) && ((i = e), (e = void 0))
          : ((e = t), (t = !1), n((i = e)) && ((i = e), (e = void 0))),
        e || "");
      var o,
        r = tG(),
        a = t ? r._week.dow : 0;
      if (null != i) return eU(e, (i + a) % 7, s, "day");
      var l = [];
      for (o = 0; o < 7; o++) l[o] = eU(e, (o + a) % 7, s, "day");
      return l;
    }
    (e1.calendar = function (t, e, i) {
      var s = this._calendar[t] || this._calendar.sameElse;
      return T(s) ? s.call(e, i) : s;
    }),
      (e1.longDateFormat = function (t) {
        var e = this._longDateFormat[t],
          i = this._longDateFormat[t.toUpperCase()];
        return e || !i
          ? e
          : ((this._longDateFormat[t] = i.replace(
              /MMMM|MM|DD|dddd/g,
              function (t) {
                return t.slice(1);
              }
            )),
            this._longDateFormat[t]);
      }),
      (e1.invalidDate = function () {
        return this._invalidDate;
      }),
      (e1.ordinal = function (t) {
        return this._ordinal.replace("%d", t);
      }),
      (e1.preparse = eB),
      (e1.postformat = eB),
      (e1.relativeTime = function (t, e, i, s) {
        var n = this._relativeTime[i];
        return T(n) ? n(t, e, i, s) : n.replace(/%d/i, t);
      }),
      (e1.pastFuture = function (t, e) {
        var i = this._relativeTime[0 < t ? "future" : "past"];
        return T(i) ? i(e) : i.replace(/%s/i, e);
      }),
      (e1.set = function (t) {
        var e, i;
        for (i in t) T((e = t[i])) ? (this[i] = e) : (this["_" + i] = e);
        (this._config = t),
          (this._dayOfMonthOrdinalParseLenient = RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }),
      (e1.months = function (t, i) {
        return t
          ? e(this._months)
            ? this._months[t.month()]
            : this._months[
                (this._months.isFormat || tw).test(i) ? "format" : "standalone"
              ][t.month()]
          : e(this._months)
          ? this._months
          : this._months.standalone;
      }),
      (e1.monthsShort = function (t, i) {
        return t
          ? e(this._monthsShort)
            ? this._monthsShort[t.month()]
            : this._monthsShort[tw.test(i) ? "format" : "standalone"][t.month()]
          : e(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }),
      (e1.monthsParse = function (t, e, i) {
        var s, n, o;
        if (this._monthsParseExact)
          return function (t, e, i) {
            var s,
              n,
              o,
              r = t.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  s = 0;
                s < 12;
                ++s
              )
                (o = h([2e3, s])),
                  (this._shortMonthsParse[s] = this.monthsShort(
                    o,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[s] = this.months(
                    o,
                    ""
                  ).toLocaleLowerCase());
            return i
              ? "MMM" === e
                ? -1 !== (n = tg.call(this._shortMonthsParse, r))
                  ? n
                  : null
                : -1 !== (n = tg.call(this._longMonthsParse, r))
                ? n
                : null
              : "MMM" === e
              ? -1 !== (n = tg.call(this._shortMonthsParse, r))
                ? n
                : -1 !== (n = tg.call(this._longMonthsParse, r))
                ? n
                : null
              : -1 !== (n = tg.call(this._longMonthsParse, r))
              ? n
              : -1 !== (n = tg.call(this._shortMonthsParse, r))
              ? n
              : null;
          }.call(this, t, e, i);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            s = 0;
          s < 12;
          s++
        )
          if (
            ((n = h([2e3, s])),
            i &&
              !this._longMonthsParse[s] &&
              ((this._longMonthsParse[s] = RegExp(
                "^" + this.months(n, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[s] = RegExp(
                "^" + this.monthsShort(n, "").replace(".", "") + "$",
                "i"
              ))),
            i ||
              this._monthsParse[s] ||
              ((o = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "")),
              (this._monthsParse[s] = RegExp(o.replace(".", ""), "i"))),
            (i && "MMMM" === e && this._longMonthsParse[s].test(t)) ||
              (i && "MMM" === e && this._shortMonthsParse[s].test(t)) ||
              (!i && this._monthsParse[s].test(t)))
          )
            return s;
      }),
      (e1.monthsRegex = function (t) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || tT.call(this),
            t ? this._monthsStrictRegex : this._monthsRegex)
          : (a(this, "_monthsRegex") || (this._monthsRegex = tS),
            this._monthsStrictRegex && t
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }),
      (e1.monthsShortRegex = function (t) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || tT.call(this),
            t ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = tD),
            this._monthsShortStrictRegex && t
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }),
      (e1.week = function (t) {
        return tP(t, this._week.dow, this._week.doy).week;
      }),
      (e1.firstDayOfYear = function () {
        return this._week.doy;
      }),
      (e1.firstDayOfWeek = function () {
        return this._week.dow;
      }),
      (e1.weekdays = function (t, i) {
        var s = e(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              t && !0 !== t && this._weekdays.isFormat.test(i)
                ? "format"
                : "standalone"
            ];
        return !0 === t ? tO(s, this._week.dow) : t ? s[t.day()] : s;
      }),
      (e1.weekdaysMin = function (t) {
        return !0 === t
          ? tO(this._weekdaysMin, this._week.dow)
          : t
          ? this._weekdaysMin[t.day()]
          : this._weekdaysMin;
      }),
      (e1.weekdaysShort = function (t) {
        return !0 === t
          ? tO(this._weekdaysShort, this._week.dow)
          : t
          ? this._weekdaysShort[t.day()]
          : this._weekdaysShort;
      }),
      (e1.weekdaysParse = function (t, e, i) {
        var s, n, o;
        if (this._weekdaysParseExact)
          return function (t, e, i) {
            var s,
              n,
              o,
              r = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  s = 0;
                s < 7;
                ++s
              )
                (o = h([2e3, 1]).day(s)),
                  (this._minWeekdaysParse[s] = this.weekdaysMin(
                    o,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[s] = this.weekdaysShort(
                    o,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[s] = this.weekdays(
                    o,
                    ""
                  ).toLocaleLowerCase());
            return i
              ? "dddd" === e
                ? -1 !== (n = tg.call(this._weekdaysParse, r))
                  ? n
                  : null
                : "ddd" === e
                ? -1 !== (n = tg.call(this._shortWeekdaysParse, r))
                  ? n
                  : null
                : -1 !== (n = tg.call(this._minWeekdaysParse, r))
                ? n
                : null
              : "dddd" === e
              ? -1 !== (n = tg.call(this._weekdaysParse, r))
                ? n
                : -1 !== (n = tg.call(this._shortWeekdaysParse, r))
                ? n
                : -1 !== (n = tg.call(this._minWeekdaysParse, r))
                ? n
                : null
              : "ddd" === e
              ? -1 !== (n = tg.call(this._shortWeekdaysParse, r))
                ? n
                : -1 !== (n = tg.call(this._weekdaysParse, r))
                ? n
                : -1 !== (n = tg.call(this._minWeekdaysParse, r))
                ? n
                : null
              : -1 !== (n = tg.call(this._minWeekdaysParse, r))
              ? n
              : -1 !== (n = tg.call(this._weekdaysParse, r))
              ? n
              : -1 !== (n = tg.call(this._shortWeekdaysParse, r))
              ? n
              : null;
          }.call(this, t, e, i);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            s = 0;
          s < 7;
          s++
        )
          if (
            ((n = h([2e3, 1]).day(s)),
            i &&
              !this._fullWeekdaysParse[s] &&
              ((this._fullWeekdaysParse[s] = RegExp(
                "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[s] = RegExp(
                "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[s] = RegExp(
                "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[s] ||
              ((o =
                "^" +
                this.weekdays(n, "") +
                "|^" +
                this.weekdaysShort(n, "") +
                "|^" +
                this.weekdaysMin(n, "")),
              (this._weekdaysParse[s] = RegExp(o.replace(".", ""), "i"))),
            (i && "dddd" === e && this._fullWeekdaysParse[s].test(t)) ||
              (i && "ddd" === e && this._shortWeekdaysParse[s].test(t)) ||
              (i && "dd" === e && this._minWeekdaysParse[s].test(t)) ||
              (!i && this._weekdaysParse[s].test(t)))
          )
            return s;
      }),
      (e1.weekdaysRegex = function (t) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || tF.call(this),
            t ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = t0),
            this._weekdaysStrictRegex && t
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }),
      (e1.weekdaysShortRegex = function (t) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || tF.call(this),
            t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tH),
            this._weekdaysShortStrictRegex && t
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }),
      (e1.weekdaysMinRegex = function (t) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || tF.call(this),
            t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tW),
            this._weekdaysMinStrictRegex && t
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }),
      (e1.isPM = function (t) {
        return "p" === (t + "").toLowerCase().charAt(0);
      }),
      (e1.meridiem = function (t, e, i) {
        return 11 < t ? (i ? "pm" : "PM") : i ? "am" : "AM";
      }),
      tq("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
          var e = t % 10;
          return (
            t +
            (1 === $((t % 100) / 10)
              ? "th"
              : 1 === e
              ? "st"
              : 2 === e
              ? "nd"
              : 3 === e
              ? "rd"
              : "th")
          );
        },
      }),
      (t.lang = x("moment.lang is deprecated. Use moment.locale instead.", tq)),
      (t.langData = x(
        "moment.langData is deprecated. Use moment.localeData instead.",
        tG
      ));
    var e4 = Math.abs;
    function eq(t, e, i, s) {
      var n = ek(e, i);
      return (
        (t._milliseconds += s * n._milliseconds),
        (t._days += s * n._days),
        (t._months += s * n._months),
        t._bubble()
      );
    }
    function e3(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t);
    }
    function eG(t) {
      return (4800 * t) / 146097;
    }
    function e7(t) {
      return (146097 * t) / 4800;
    }
    function e5(t) {
      return function () {
        return this.as(t);
      };
    }
    var eZ = e5("ms"),
      eK = e5("s"),
      eX = e5("m"),
      e6 = e5("h"),
      eQ = e5("d"),
      eJ = e5("w"),
      it = e5("M"),
      ie = e5("Q"),
      ii = e5("y");
    function is(t) {
      return function () {
        return this.isValid() ? this._data[t] : NaN;
      };
    }
    var io = is("milliseconds"),
      ir = is("seconds"),
      ia = is("minutes"),
      il = is("hours"),
      ih = is("days"),
      ic = is("months"),
      id = is("years"),
      iu = Math.round,
      ip = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      im = Math.abs;
    function ig(t) {
      return (0 < t) - (t < 0) || +t;
    }
    function i8() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t,
        e,
        i = im(this._milliseconds) / 1e3,
        s = im(this._days),
        n = im(this._months);
      (e = y((t = y(i / 60)) / 60)), (i %= 60), (t %= 60);
      var o = y(n / 12),
        r = (n %= 12),
        a = s,
        l = e,
        h = t,
        c = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
      if (!d) return "P0D";
      var u = ig(this._months) !== ig(d) ? "-" : "",
        p = ig(this._days) !== ig(d) ? "-" : "",
        f = ig(this._milliseconds) !== ig(d) ? "-" : "";
      return (
        (d < 0 ? "-" : "") +
        "P" +
        (o ? u + o + "Y" : "") +
        (r ? u + r + "M" : "") +
        (a ? p + a + "D" : "") +
        (l || h || c ? "T" : "") +
        (l ? f + l + "H" : "") +
        (h ? f + h + "M" : "") +
        (c ? f + c + "S" : "")
      );
    }
    var iv = ep.prototype;
    return (
      (iv.isValid = function () {
        return this._isValid;
      }),
      (iv.abs = function () {
        var t = this._data;
        return (
          (this._milliseconds = e4(this._milliseconds)),
          (this._days = e4(this._days)),
          (this._months = e4(this._months)),
          (t.milliseconds = e4(t.milliseconds)),
          (t.seconds = e4(t.seconds)),
          (t.minutes = e4(t.minutes)),
          (t.hours = e4(t.hours)),
          (t.months = e4(t.months)),
          (t.years = e4(t.years)),
          this
        );
      }),
      (iv.add = function (t, e) {
        return eq(this, t, e, 1);
      }),
      (iv.subtract = function (t, e) {
        return eq(this, t, e, -1);
      }),
      (iv.as = function (t) {
        if (!this.isValid()) return NaN;
        var e,
          i,
          s = this._milliseconds;
        if ("month" === (t = O(t)) || "quarter" === t || "year" === t)
          switch (
            ((e = this._days + s / 864e5), (i = this._months + eG(e)), t)
          ) {
            case "month":
              return i;
            case "quarter":
              return i / 3;
            case "year":
              return i / 12;
          }
        else
          switch (((e = this._days + Math.round(e7(this._months))), t)) {
            case "week":
              return e / 7 + s / 6048e5;
            case "day":
              return e + s / 864e5;
            case "hour":
              return 24 * e + s / 36e5;
            case "minute":
              return 1440 * e + s / 6e4;
            case "second":
              return 86400 * e + s / 1e3;
            case "millisecond":
              return Math.floor(864e5 * e) + s;
            default:
              throw Error("Unknown unit " + t);
          }
      }),
      (iv.asMilliseconds = eZ),
      (iv.asSeconds = eK),
      (iv.asMinutes = eX),
      (iv.asHours = e6),
      (iv.asDays = eQ),
      (iv.asWeeks = eJ),
      (iv.asMonths = it),
      (iv.asQuarters = ie),
      (iv.asYears = ii),
      (iv.valueOf = function () {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * $(this._months / 12)
          : NaN;
      }),
      (iv._bubble = function () {
        var t,
          e,
          i,
          s,
          n,
          o = this._milliseconds,
          r = this._days,
          a = this._months,
          l = this._data;
        return (
          (0 <= o && 0 <= r && 0 <= a) ||
            (o <= 0 && r <= 0 && a <= 0) ||
            ((o += 864e5 * e3(e7(a) + r)), (a = r = 0)),
          (l.milliseconds = o % 1e3),
          (t = y(o / 1e3)),
          (l.seconds = t % 60),
          (e = y(t / 60)),
          (l.minutes = e % 60),
          (i = y(e / 60)),
          (l.hours = i % 24),
          (a += n = y(eG((r += y(i / 24))))),
          (r -= e3(e7(n))),
          (s = y(a / 12)),
          (a %= 12),
          (l.days = r),
          (l.months = a),
          (l.years = s),
          this
        );
      }),
      (iv.clone = function () {
        return ek(this);
      }),
      (iv.get = function (t) {
        return (t = O(t)), this.isValid() ? this[t + "s"]() : NaN;
      }),
      (iv.milliseconds = io),
      (iv.seconds = ir),
      (iv.minutes = ia),
      (iv.hours = il),
      (iv.days = ih),
      (iv.weeks = function () {
        return y(this.days() / 7);
      }),
      (iv.months = ic),
      (iv.years = id),
      (iv.humanize = function (t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
          i,
          s,
          n,
          o,
          r,
          a,
          l,
          h,
          c,
          d,
          u = this.localeData(),
          p =
            ((i = !t),
            (s = u),
            (n = ek((e = this)).abs()),
            (o = iu(n.as("s"))),
            (r = iu(n.as("m"))),
            (a = iu(n.as("h"))),
            (l = iu(n.as("d"))),
            (h = iu(n.as("M"))),
            (c = iu(n.as("y"))),
            ((d = (o <= ip.ss && ["s", o]) ||
              (o < ip.s && ["ss", o]) ||
              (r <= 1 && ["m"]) ||
              (r < ip.m && ["mm", r]) ||
              (a <= 1 && ["h"]) ||
              (a < ip.h && ["hh", a]) ||
              (l <= 1 && ["d"]) ||
              (l < ip.d && ["dd", l]) ||
              (h <= 1 && ["M"]) ||
              (h < ip.M && ["MM", h]) ||
              (c <= 1 && ["y"]) || ["yy", c])[2] = i),
            (d[3] = 0 < +e),
            (d[4] = s),
            function (t, e, i, s, n) {
              return n.relativeTime(e || 1, !!i, t, s);
            }.apply(null, d));
        return t && (p = u.pastFuture(+this, p)), u.postformat(p);
      }),
      (iv.toISOString = i8),
      (iv.toString = i8),
      (iv.toJSON = i8),
      (iv.locale = eE),
      (iv.localeData = eA),
      (iv.toIsoString = x(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        i8
      )),
      (iv.lang = eP),
      R("X", 0, 0, "unix"),
      R("x", 0, 0, "valueOf"),
      tl("x", ts),
      tl("X", /[+-]?\d+(\.\d{1,3})?/),
      tu("X", function (t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10));
      }),
      tu("x", function (t, e, i) {
        i._d = new Date($(t));
      }),
      (t.version = "2.24.0"),
      (k = el),
      (t.fn = ej),
      (t.min = function () {
        return ed("isBefore", [].slice.call(arguments, 0));
      }),
      (t.max = function () {
        return ed("isAfter", [].slice.call(arguments, 0));
      }),
      (t.now = function () {
        return Date.now ? Date.now() : +new Date();
      }),
      (t.utc = h),
      (t.unix = function (t) {
        return el(1e3 * t);
      }),
      (t.months = function (t, e) {
        return eV(t, e, "months");
      }),
      (t.isDate = o),
      (t.locale = tq),
      (t.invalid = u),
      (t.duration = ek),
      (t.isMoment = v),
      (t.weekdays = function (t, e, i) {
        return e2(t, e, i, "weekdays");
      }),
      (t.parseZone = function () {
        return el.apply(null, arguments).parseZone();
      }),
      (t.localeData = tG),
      (t.isDuration = ef),
      (t.monthsShort = function (t, e) {
        return eV(t, e, "monthsShort");
      }),
      (t.weekdaysMin = function (t, e, i) {
        return e2(t, e, i, "weekdaysMin");
      }),
      (t.defineLocale = t3),
      (t.updateLocale = function (t, e) {
        if (null != e) {
          var i,
            s,
            n = t1;
          null != (s = t4(t)) && (n = s._config),
            ((i = new E((e = M(n, e)))).parentLocale = tU[t]),
            (tU[t] = i),
            tq(t);
        } else
          null != tU[t] &&
            (null != tU[t].parentLocale
              ? (tU[t] = tU[t].parentLocale)
              : null != tU[t] && delete tU[t]);
        return tU[t];
      }),
      (t.locales = function () {
        return C(tU);
      }),
      (t.weekdaysShort = function (t, e, i) {
        return e2(t, e, i, "weekdaysShort");
      }),
      (t.normalizeUnits = O),
      (t.relativeTimeRounding = function (t) {
        return void 0 === t ? iu : "function" == typeof t && ((iu = t), !0);
      }),
      (t.relativeTimeThreshold = function (t, e) {
        return (
          void 0 !== ip[t] &&
          (void 0 === e
            ? ip[t]
            : ((ip[t] = e), "s" === t && (ip.ss = e - 1), !0))
        );
      }),
      (t.calendarFormat = function (t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6
          ? "sameElse"
          : i < -1
          ? "lastWeek"
          : i < 0
          ? "lastDay"
          : i < 1
          ? "sameDay"
          : i < 2
          ? "nextDay"
          : i < 7
          ? "nextWeek"
          : "sameElse";
      }),
      (t.prototype = ej),
      (t.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM",
      }),
      t
    );
  }),
  (function (t, e) {
    if ("function" == typeof define && define.amd)
      define(["moment", "jquery"], function (t, i) {
        return (
          i.fn || (i.fn = {}),
          "function" != typeof t &&
            t.hasOwnProperty("default") &&
            (t = t.default),
          e(t, i)
        );
      });
    else if ("object" == typeof module && module.exports) {
      var i = "undefined" != typeof window ? window.jQuery : void 0;
      i || (i = require("jquery")).fn || (i.fn = {});
      var s =
        "undefined" != typeof window && void 0 !== window.moment
          ? window.moment
          : require("moment");
      module.exports = e(s, i);
    } else t.daterangepicker = e(t.moment, t.jQuery);
  })("undefined" != typeof window ? window : this, function (t, e) {
    var i = function (i, s, n) {
      if (
        ((this.parentEl = "body"),
        (this.element = e(i)),
        (this.startDate = t().startOf("day")),
        (this.endDate = t().endOf("day")),
        (this.minDate = !1),
        (this.maxDate = !1),
        (this.maxSpan = !1),
        (this.autoApply = !1),
        (this.singleDatePicker = !1),
        (this.showDropdowns = !1),
        (this.minYear = t().subtract(100, "year").format("YYYY")),
        (this.maxYear = t().add(100, "year").format("YYYY")),
        (this.showWeekNumbers = !1),
        (this.showISOWeekNumbers = !1),
        (this.showCustomRangeLabel = !0),
        (this.timePicker = !1),
        (this.timePicker24Hour = !1),
        (this.timePickerIncrement = 1),
        (this.timePickerSeconds = !1),
        (this.linkedCalendars = !0),
        (this.autoUpdateInput = !0),
        (this.alwaysShowCalendars = !1),
        (this.ranges = {}),
        (this.opens = "right"),
        this.element.hasClass("pull-right") && (this.opens = "left"),
        (this.drops = "down"),
        this.element.hasClass("dropup") && (this.drops = "up"),
        (this.buttonClasses = "btn btn-sm"),
        (this.applyButtonClasses = "btn-primary"),
        (this.cancelButtonClasses = "btn-default"),
        (this.locale = {
          direction: "ltr",
          format: t.localeData().longDateFormat("L"),
          separator: " - ",
          applyLabel: "Apply",
          cancelLabel: "Cancel",
          weekLabel: "W",
          customRangeLabel: "Custom Range",
          daysOfWeek: t.weekdaysMin(),
          monthNames: t.monthsShort(),
          firstDay: t.localeData().firstDayOfWeek(),
        }),
        (this.callback = function () {}),
        (this.isShowing = !1),
        (this.leftCalendar = {}),
        (this.rightCalendar = {}),
        ("object" != typeof s || null === s) && (s = {}),
        "string" == typeof (s = e.extend(this.element.data(), s)).template ||
          s.template instanceof e ||
          (s.template =
            '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),
        (this.parentEl =
          s.parentEl && e(s.parentEl).length
            ? e(s.parentEl)
            : e(this.parentEl)),
        (this.container = e(s.template).appendTo(this.parentEl)),
        "object" == typeof s.locale &&
          ("string" == typeof s.locale.direction &&
            (this.locale.direction = s.locale.direction),
          "string" == typeof s.locale.format &&
            (this.locale.format = s.locale.format),
          "string" == typeof s.locale.separator &&
            (this.locale.separator = s.locale.separator),
          "object" == typeof s.locale.daysOfWeek &&
            (this.locale.daysOfWeek = s.locale.daysOfWeek.slice()),
          "object" == typeof s.locale.monthNames &&
            (this.locale.monthNames = s.locale.monthNames.slice()),
          "number" == typeof s.locale.firstDay &&
            (this.locale.firstDay = s.locale.firstDay),
          "string" == typeof s.locale.applyLabel &&
            (this.locale.applyLabel = s.locale.applyLabel),
          "string" == typeof s.locale.cancelLabel &&
            (this.locale.cancelLabel = s.locale.cancelLabel),
          "string" == typeof s.locale.weekLabel &&
            (this.locale.weekLabel = s.locale.weekLabel),
          "string" == typeof s.locale.customRangeLabel))
      ) {
        var o,
          r,
          a,
          l = document.createElement("textarea");
        l.innerHTML = s.locale.customRangeLabel;
        var h = l.value;
        this.locale.customRangeLabel = h;
      }
      if (
        (this.container.addClass(this.locale.direction),
        "string" == typeof s.startDate &&
          (this.startDate = t(s.startDate, this.locale.format)),
        "string" == typeof s.endDate &&
          (this.endDate = t(s.endDate, this.locale.format)),
        "string" == typeof s.minDate &&
          (this.minDate = t(s.minDate, this.locale.format)),
        "string" == typeof s.maxDate &&
          (this.maxDate = t(s.maxDate, this.locale.format)),
        "object" == typeof s.startDate && (this.startDate = t(s.startDate)),
        "object" == typeof s.endDate && (this.endDate = t(s.endDate)),
        "object" == typeof s.minDate && (this.minDate = t(s.minDate)),
        "object" == typeof s.maxDate && (this.maxDate = t(s.maxDate)),
        this.minDate &&
          this.startDate.isBefore(this.minDate) &&
          (this.startDate = this.minDate.clone()),
        this.maxDate &&
          this.endDate.isAfter(this.maxDate) &&
          (this.endDate = this.maxDate.clone()),
        "string" == typeof s.applyButtonClasses &&
          (this.applyButtonClasses = s.applyButtonClasses),
        "string" == typeof s.applyClass &&
          (this.applyButtonClasses = s.applyClass),
        "string" == typeof s.cancelButtonClasses &&
          (this.cancelButtonClasses = s.cancelButtonClasses),
        "string" == typeof s.cancelClass &&
          (this.cancelButtonClasses = s.cancelClass),
        "object" == typeof s.maxSpan && (this.maxSpan = s.maxSpan),
        "object" == typeof s.dateLimit && (this.maxSpan = s.dateLimit),
        "string" == typeof s.opens && (this.opens = s.opens),
        "string" == typeof s.drops && (this.drops = s.drops),
        "boolean" == typeof s.showWeekNumbers &&
          (this.showWeekNumbers = s.showWeekNumbers),
        "boolean" == typeof s.showISOWeekNumbers &&
          (this.showISOWeekNumbers = s.showISOWeekNumbers),
        "string" == typeof s.buttonClasses &&
          (this.buttonClasses = s.buttonClasses),
        "object" == typeof s.buttonClasses &&
          (this.buttonClasses = s.buttonClasses.join(" ")),
        "boolean" == typeof s.showDropdowns &&
          (this.showDropdowns = s.showDropdowns),
        "number" == typeof s.minYear && (this.minYear = s.minYear),
        "number" == typeof s.maxYear && (this.maxYear = s.maxYear),
        "boolean" == typeof s.showCustomRangeLabel &&
          (this.showCustomRangeLabel = s.showCustomRangeLabel),
        "boolean" == typeof s.singleDatePicker &&
          ((this.singleDatePicker = s.singleDatePicker),
          this.singleDatePicker && (this.endDate = this.startDate.clone())),
        "boolean" == typeof s.timePicker && (this.timePicker = s.timePicker),
        "boolean" == typeof s.timePickerSeconds &&
          (this.timePickerSeconds = s.timePickerSeconds),
        "number" == typeof s.timePickerIncrement &&
          (this.timePickerIncrement = s.timePickerIncrement),
        "boolean" == typeof s.timePicker24Hour &&
          (this.timePicker24Hour = s.timePicker24Hour),
        "boolean" == typeof s.autoApply && (this.autoApply = s.autoApply),
        "boolean" == typeof s.autoUpdateInput &&
          (this.autoUpdateInput = s.autoUpdateInput),
        "boolean" == typeof s.linkedCalendars &&
          (this.linkedCalendars = s.linkedCalendars),
        "function" == typeof s.isInvalidDate &&
          (this.isInvalidDate = s.isInvalidDate),
        "function" == typeof s.isCustomDate &&
          (this.isCustomDate = s.isCustomDate),
        "boolean" == typeof s.alwaysShowCalendars &&
          (this.alwaysShowCalendars = s.alwaysShowCalendars),
        0 != this.locale.firstDay)
      )
        for (var c = this.locale.firstDay; c > 0; )
          this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), c--;
      if (
        void 0 === s.startDate &&
        void 0 === s.endDate &&
        e(this.element).is(":text")
      ) {
        var d = e(this.element).val(),
          u = d.split(this.locale.separator);
        (o = r = null),
          2 == u.length
            ? ((o = t(u[0], this.locale.format)),
              (r = t(u[1], this.locale.format)))
            : this.singleDatePicker &&
              "" !== d &&
              ((o = t(d, this.locale.format)), (r = t(d, this.locale.format))),
          null !== o &&
            null !== r &&
            (this.setStartDate(o), this.setEndDate(r));
      }
      if ("object" == typeof s.ranges) {
        for (a in s.ranges) {
          (o =
            "string" == typeof s.ranges[a][0]
              ? t(s.ranges[a][0], this.locale.format)
              : t(s.ranges[a][0])),
            (r =
              "string" == typeof s.ranges[a][1]
                ? t(s.ranges[a][1], this.locale.format)
                : t(s.ranges[a][1])),
            this.minDate &&
              o.isBefore(this.minDate) &&
              (o = this.minDate.clone());
          var p = this.maxDate;
          if (
            (this.maxSpan &&
              p &&
              o.clone().add(this.maxSpan).isAfter(p) &&
              (p = o.clone().add(this.maxSpan)),
            p && r.isAfter(p) && (r = p.clone()),
            !(
              (this.minDate &&
                r.isBefore(this.minDate, this.timepicker ? "minute" : "day")) ||
              (p && o.isAfter(p, this.timepicker ? "minute" : "day"))
            ))
          ) {
            var l = document.createElement("textarea");
            l.innerHTML = a;
            var h = l.value;
            this.ranges[h] = [o, r];
          }
        }
        var f = "<ul>";
        for (a in this.ranges)
          f += '<li data-range-key="' + a + '">' + a + "</li>";
        this.showCustomRangeLabel &&
          (f +=
            '<li data-range-key="' +
            this.locale.customRangeLabel +
            '">' +
            this.locale.customRangeLabel +
            "</li>"),
          (f += "</ul>"),
          this.container.find(".ranges").prepend(f);
      }
      "function" == typeof n && (this.callback = n),
        this.timePicker ||
          ((this.startDate = this.startDate.startOf("day")),
          (this.endDate = this.endDate.endOf("day")),
          this.container.find(".calendar-time").hide()),
        this.timePicker && this.autoApply && (this.autoApply = !1),
        this.autoApply && this.container.addClass("auto-apply"),
        "object" == typeof s.ranges && this.container.addClass("show-ranges"),
        this.singleDatePicker &&
          (this.container.addClass("single"),
          this.container.find(".drp-calendar.left").addClass("single"),
          this.container.find(".drp-calendar.left").show(),
          this.container.find(".drp-calendar.right").hide(),
          !this.timePicker &&
            this.autoApply &&
            this.container.addClass("auto-apply")),
        ((void 0 === s.ranges && !this.singleDatePicker) ||
          this.alwaysShowCalendars) &&
          this.container.addClass("show-calendar"),
        this.container.addClass("opens" + this.opens),
        this.container
          .find(".applyBtn, .cancelBtn")
          .addClass(this.buttonClasses),
        this.applyButtonClasses.length &&
          this.container.find(".applyBtn").addClass(this.applyButtonClasses),
        this.cancelButtonClasses.length &&
          this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),
        this.container.find(".applyBtn").html(this.locale.applyLabel),
        this.container.find(".cancelBtn").html(this.locale.cancelLabel),
        this.container
          .find(".drp-calendar")
          .on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this))
          .on("click.daterangepicker", ".next", e.proxy(this.clickNext, this))
          .on(
            "mousedown.daterangepicker",
            "td.available",
            e.proxy(this.clickDate, this)
          )
          .on(
            "mouseenter.daterangepicker",
            "td.available",
            e.proxy(this.hoverDate, this)
          )
          .on(
            "change.daterangepicker",
            "select.yearselect",
            e.proxy(this.monthOrYearChanged, this)
          )
          .on(
            "change.daterangepicker",
            "select.monthselect",
            e.proxy(this.monthOrYearChanged, this)
          )
          .on(
            "change.daterangepicker",
            "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",
            e.proxy(this.timeChanged, this)
          ),
        this.container
          .find(".ranges")
          .on("click.daterangepicker", "li", e.proxy(this.clickRange, this)),
        this.container
          .find(".drp-buttons")
          .on(
            "click.daterangepicker",
            "button.applyBtn",
            e.proxy(this.clickApply, this)
          )
          .on(
            "click.daterangepicker",
            "button.cancelBtn",
            e.proxy(this.clickCancel, this)
          ),
        this.element.is("input") || this.element.is("button")
          ? this.element.on({
              "click.daterangepicker": e.proxy(this.show, this),
              "focus.daterangepicker": e.proxy(this.show, this),
              "keyup.daterangepicker": e.proxy(this.elementChanged, this),
              "keydown.daterangepicker": e.proxy(this.keydown, this),
            })
          : (this.element.on(
              "click.daterangepicker",
              e.proxy(this.toggle, this)
            ),
            this.element.on(
              "keydown.daterangepicker",
              e.proxy(this.toggle, this)
            )),
        this.updateElement();
    };
    return (
      (i.prototype = {
        constructor: i,
        setStartDate: function (e) {
          "string" == typeof e && (this.startDate = t(e, this.locale.format)),
            "object" == typeof e && (this.startDate = t(e)),
            this.timePicker || (this.startDate = this.startDate.startOf("day")),
            this.timePicker &&
              this.timePickerIncrement &&
              this.startDate.minute(
                Math.round(this.startDate.minute() / this.timePickerIncrement) *
                  this.timePickerIncrement
              ),
            this.minDate &&
              this.startDate.isBefore(this.minDate) &&
              ((this.startDate = this.minDate.clone()),
              this.timePicker &&
                this.timePickerIncrement &&
                this.startDate.minute(
                  Math.round(
                    this.startDate.minute() / this.timePickerIncrement
                  ) * this.timePickerIncrement
                )),
            this.maxDate &&
              this.startDate.isAfter(this.maxDate) &&
              ((this.startDate = this.maxDate.clone()),
              this.timePicker &&
                this.timePickerIncrement &&
                this.startDate.minute(
                  Math.floor(
                    this.startDate.minute() / this.timePickerIncrement
                  ) * this.timePickerIncrement
                )),
            this.isShowing || this.updateElement(),
            this.updateMonthsInView();
        },
        setEndDate: function (e) {
          "string" == typeof e && (this.endDate = t(e, this.locale.format)),
            "object" == typeof e && (this.endDate = t(e)),
            this.timePicker || (this.endDate = this.endDate.endOf("day")),
            this.timePicker &&
              this.timePickerIncrement &&
              this.endDate.minute(
                Math.round(this.endDate.minute() / this.timePickerIncrement) *
                  this.timePickerIncrement
              ),
            this.endDate.isBefore(this.startDate) &&
              (this.endDate = this.startDate.clone()),
            this.maxDate &&
              this.endDate.isAfter(this.maxDate) &&
              (this.endDate = this.maxDate.clone()),
            this.maxSpan &&
              this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) &&
              (this.endDate = this.startDate.clone().add(this.maxSpan)),
            (this.previousRightTime = this.endDate.clone()),
            this.container
              .find(".drp-selected")
              .html(
                this.startDate.format(this.locale.format) +
                  this.locale.separator +
                  this.endDate.format(this.locale.format)
              ),
            this.isShowing || this.updateElement(),
            this.updateMonthsInView();
        },
        isInvalidDate: function () {
          return !1;
        },
        isCustomDate: function () {
          return !1;
        },
        updateView: function () {
          this.timePicker &&
            (this.renderTimePicker("left"),
            this.renderTimePicker("right"),
            this.endDate
              ? this.container
                  .find(".right .calendar-time select")
                  .prop("disabled", !1)
                  .removeClass("disabled")
              : this.container
                  .find(".right .calendar-time select")
                  .prop("disabled", !0)
                  .addClass("disabled")),
            this.endDate &&
              this.container
                .find(".drp-selected")
                .html(
                  this.startDate.format(this.locale.format) +
                    this.locale.separator +
                    this.endDate.format(this.locale.format)
                ),
            this.updateMonthsInView(),
            this.updateCalendars(),
            this.updateFormInputs();
        },
        updateMonthsInView: function () {
          if (this.endDate) {
            if (
              !this.singleDatePicker &&
              this.leftCalendar.month &&
              this.rightCalendar.month &&
              (this.startDate.format("YYYY-MM") ==
                this.leftCalendar.month.format("YYYY-MM") ||
                this.startDate.format("YYYY-MM") ==
                  this.rightCalendar.month.format("YYYY-MM")) &&
              (this.endDate.format("YYYY-MM") ==
                this.leftCalendar.month.format("YYYY-MM") ||
                this.endDate.format("YYYY-MM") ==
                  this.rightCalendar.month.format("YYYY-MM"))
            )
              return;
            (this.leftCalendar.month = this.startDate.clone().date(2)),
              this.linkedCalendars ||
              (this.endDate.month() == this.startDate.month() &&
                this.endDate.year() == this.startDate.year())
                ? (this.rightCalendar.month = this.startDate
                    .clone()
                    .date(2)
                    .add(1, "month"))
                : (this.rightCalendar.month = this.endDate.clone().date(2));
          } else
            this.leftCalendar.month.format("YYYY-MM") !=
              this.startDate.format("YYYY-MM") &&
              this.rightCalendar.month.format("YYYY-MM") !=
                this.startDate.format("YYYY-MM") &&
              ((this.leftCalendar.month = this.startDate.clone().date(2)),
              (this.rightCalendar.month = this.startDate
                .clone()
                .date(2)
                .add(1, "month")));
          this.maxDate &&
            this.linkedCalendars &&
            !this.singleDatePicker &&
            this.rightCalendar.month > this.maxDate &&
            ((this.rightCalendar.month = this.maxDate.clone().date(2)),
            (this.leftCalendar.month = this.maxDate
              .clone()
              .date(2)
              .subtract(1, "month")));
        },
        updateCalendars: function () {
          if (this.timePicker) {
            var t, e, i;
            if (this.endDate) {
              if (
                ((t = parseInt(
                  this.container.find(".left .hourselect").val(),
                  10
                )),
                isNaN(
                  (e = parseInt(
                    this.container.find(".left .minuteselect").val(),
                    10
                  ))
                ) &&
                  (e = parseInt(
                    this.container
                      .find(".left .minuteselect option:last")
                      .val(),
                    10
                  )),
                (i = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".left .secondselect").val(),
                      10
                    )
                  : 0),
                !this.timePicker24Hour)
              ) {
                var s = this.container.find(".left .ampmselect").val();
                "PM" === s && t < 12 && (t += 12),
                  "AM" === s && 12 === t && (t = 0);
              }
            } else if (
              ((t = parseInt(
                this.container.find(".right .hourselect").val(),
                10
              )),
              isNaN(
                (e = parseInt(
                  this.container.find(".right .minuteselect").val(),
                  10
                ))
              ) &&
                (e = parseInt(
                  this.container.find(".right .minuteselect option:last").val(),
                  10
                )),
              (i = this.timePickerSeconds
                ? parseInt(
                    this.container.find(".right .secondselect").val(),
                    10
                  )
                : 0),
              !this.timePicker24Hour)
            ) {
              var s = this.container.find(".right .ampmselect").val();
              "PM" === s && t < 12 && (t += 12),
                "AM" === s && 12 === t && (t = 0);
            }
            this.leftCalendar.month.hour(t).minute(e).second(i),
              this.rightCalendar.month.hour(t).minute(e).second(i);
          }
          this.renderCalendar("left"),
            this.renderCalendar("right"),
            this.container.find(".ranges li").removeClass("active"),
            null != this.endDate && this.calculateChosenLabel();
        },
        renderCalendar: function (i) {
          var s,
            n,
            o = "left" == i ? this.leftCalendar : this.rightCalendar,
            r = o.month.month(),
            a = o.month.year(),
            l = o.month.hour(),
            h = o.month.minute(),
            c = o.month.second(),
            d = t([a, r]).daysInMonth(),
            u = t([a, r, 1]),
            p = t([a, r, d]),
            f = t(u).subtract(1, "month").month(),
            m = t(u).subtract(1, "month").year(),
            g = t([m, f]).daysInMonth(),
            v = u.day(),
            o = [];
          (o.firstDay = u), (o.lastDay = p);
          for (var y = 0; y < 6; y++) o[y] = [];
          var $ = g - v + this.locale.firstDay + 1;
          $ > g && ($ -= 7), v == this.locale.firstDay && ($ = g - 6);
          for (
            var b = t([m, f, $, 12, h, c]), y = 0, s = 0, n = 0;
            y < 42;
            y++, s++, b = t(b).add(24, "hour")
          )
            y > 0 && s % 7 == 0 && ((s = 0), n++),
              (o[n][s] = b.clone().hour(l).minute(h).second(c)),
              b.hour(12),
              this.minDate &&
                o[n][s].format("YYYY-MM-DD") ==
                  this.minDate.format("YYYY-MM-DD") &&
                o[n][s].isBefore(this.minDate) &&
                "left" == i &&
                (o[n][s] = this.minDate.clone()),
              this.maxDate &&
                o[n][s].format("YYYY-MM-DD") ==
                  this.maxDate.format("YYYY-MM-DD") &&
                o[n][s].isAfter(this.maxDate) &&
                "right" == i &&
                (o[n][s] = this.maxDate.clone());
          "left" == i
            ? (this.leftCalendar.calendar = o)
            : (this.rightCalendar.calendar = o);
          var w = "left" == i ? this.minDate : this.startDate,
            x = this.maxDate;
          "left" == i ? this.startDate : this.endDate, this.locale.direction;
          var k = '<table class="table-condensed">';
          (k += "<thead>"),
            (k += "<tr>"),
            (this.showWeekNumbers || this.showISOWeekNumbers) &&
              (k += "<th></th>"),
            (!w || w.isBefore(o.firstDay)) &&
            (!this.linkedCalendars || "left" == i)
              ? (k += '<th class="prev available"><span></span></th>')
              : (k += "<th></th>");
          var _ =
            this.locale.monthNames[o[1][1].month()] + o[1][1].format(" YYYY");
          if (this.showDropdowns) {
            for (
              var C = o[1][1].month(),
                D = o[1][1].year(),
                S = (x && x.year()) || this.maxYear,
                T = (w && w.year()) || this.minYear,
                M = D == T,
                E = D == S,
                P = '<select class="monthselect">',
                A = 0;
              A < 12;
              A++
            )
              (!M || (w && A >= w.month())) && (!E || (x && A <= x.month()))
                ? (P +=
                    "<option value='" +
                    A +
                    "'" +
                    (A === C ? " selected='selected'" : "") +
                    ">" +
                    this.locale.monthNames[A] +
                    "</option>")
                : (P +=
                    "<option value='" +
                    A +
                    "'" +
                    (A === C ? " selected='selected'" : "") +
                    " disabled='disabled'>" +
                    this.locale.monthNames[A] +
                    "</option>");
            P += "</select>";
            for (var O = '<select class="yearselect">', Y = T; Y <= S; Y++)
              O +=
                '<option value="' +
                Y +
                '"' +
                (Y === D ? ' selected="selected"' : "") +
                ">" +
                Y +
                "</option>";
            (O += "</select>"), (_ = P + O);
          }
          if (
            ((k += '<th colspan="5" class="month">' + _ + "</th>"),
            (!x || x.isAfter(o.lastDay)) &&
            (!this.linkedCalendars || "right" == i || this.singleDatePicker)
              ? (k += '<th class="next available"><span></span></th>')
              : (k += "<th></th>"),
            (k += "</tr>"),
            (k += "<tr>"),
            (this.showWeekNumbers || this.showISOWeekNumbers) &&
              (k += '<th class="week">' + this.locale.weekLabel + "</th>"),
            e.each(this.locale.daysOfWeek, function (t, e) {
              k += "<th>" + e + "</th>";
            }),
            (k += "</tr>"),
            (k += "</thead>"),
            (k += "<tbody>"),
            null == this.endDate && this.maxSpan)
          ) {
            var I = this.startDate.clone().add(this.maxSpan).endOf("day");
            (!x || I.isBefore(x)) && (x = I);
          }
          for (var n = 0; n < 6; n++) {
            (k += "<tr>"),
              this.showWeekNumbers
                ? (k += '<td class="week">' + o[n][0].week() + "</td>")
                : this.showISOWeekNumbers &&
                  (k += '<td class="week">' + o[n][0].isoWeek() + "</td>");
            for (var s = 0; s < 7; s++) {
              var L = [];
              o[n][s].isSame(new Date(), "day") && L.push("today"),
                o[n][s].isoWeekday() > 5 && L.push("weekend"),
                o[n][s].month() != o[1][1].month() && L.push("off", "ends"),
                this.minDate &&
                  o[n][s].isBefore(this.minDate, "day") &&
                  L.push("off", "disabled"),
                x && o[n][s].isAfter(x, "day") && L.push("off", "disabled"),
                this.isInvalidDate(o[n][s]) && L.push("off", "disabled"),
                o[n][s].format("YYYY-MM-DD") ==
                  this.startDate.format("YYYY-MM-DD") &&
                  L.push("active", "start-date"),
                null != this.endDate &&
                  o[n][s].format("YYYY-MM-DD") ==
                    this.endDate.format("YYYY-MM-DD") &&
                  L.push("active", "end-date"),
                null != this.endDate &&
                  o[n][s] > this.startDate &&
                  o[n][s] < this.endDate &&
                  L.push("in-range");
              var H = this.isCustomDate(o[n][s]);
              !1 !== H &&
                ("string" == typeof H
                  ? L.push(H)
                  : Array.prototype.push.apply(L, H));
              for (var W = "", F = !1, y = 0; y < L.length; y++)
                (W += L[y] + " "), "disabled" == L[y] && (F = !0);
              F || (W += "available"),
                (k +=
                  '<td class="' +
                  W.replace(/^\s+|\s+$/g, "") +
                  '" data-title="r' +
                  n +
                  "c" +
                  s +
                  '">' +
                  o[n][s].date() +
                  "</td>");
            }
            k += "</tr>";
          }
          (k += "</tbody>"),
            (k += "</table>"),
            this.container
              .find(".drp-calendar." + i + " .calendar-table")
              .html(k);
        },
        renderTimePicker: function (t) {
          if ("right" != t || this.endDate) {
            var e,
              i,
              s,
              n = this.maxDate;
            if (
              (this.maxSpan &&
                (!this.maxDate ||
                  this.startDate
                    .clone()
                    .add(this.maxSpan)
                    .isBefore(this.maxDate)) &&
                (n = this.startDate.clone().add(this.maxSpan)),
              "left" == t)
            )
              (i = this.startDate.clone()), (s = this.minDate);
            else if ("right" == t) {
              (i = this.endDate.clone()), (s = this.startDate);
              var o = this.container.find(".drp-calendar.right .calendar-time");
              if (
                "" != o.html() &&
                (i.hour(
                  isNaN(i.hour())
                    ? o.find(".hourselect option:selected").val()
                    : i.hour()
                ),
                i.minute(
                  isNaN(i.minute())
                    ? o.find(".minuteselect option:selected").val()
                    : i.minute()
                ),
                i.second(
                  isNaN(i.second())
                    ? o.find(".secondselect option:selected").val()
                    : i.second()
                ),
                !this.timePicker24Hour)
              ) {
                var r = o.find(".ampmselect option:selected").val();
                "PM" === r && 12 > i.hour() && i.hour(i.hour() + 12),
                  "AM" === r && 12 === i.hour() && i.hour(0);
              }
              i.isBefore(this.startDate) && (i = this.startDate.clone()),
                n && i.isAfter(n) && (i = n.clone());
            }
            e = '<select class="hourselect">';
            for (
              var a = this.timePicker24Hour ? 0 : 1,
                l = this.timePicker24Hour ? 23 : 12,
                h = a;
              h <= l;
              h++
            ) {
              var c = h;
              this.timePicker24Hour ||
                (c =
                  i.hour() >= 12 ? (12 == h ? 12 : h + 12) : 12 == h ? 0 : h);
              var d = i.clone().hour(c),
                u = !1;
              s && d.minute(59).isBefore(s) && (u = !0),
                n && d.minute(0).isAfter(n) && (u = !0),
                c != i.hour() || u
                  ? u
                    ? (e +=
                        '<option value="' +
                        h +
                        '" disabled="disabled" class="disabled">' +
                        h +
                        "</option>")
                    : (e += '<option value="' + h + '">' + h + "</option>")
                  : (e +=
                      '<option value="' +
                      h +
                      '" selected="selected">' +
                      h +
                      "</option>");
            }
            (e += "</select> "), (e += ': <select class="minuteselect">');
            for (var h = 0; h < 60; h += this.timePickerIncrement) {
              var p = h < 10 ? "0" + h : h,
                d = i.clone().minute(h),
                u = !1;
              s && d.second(59).isBefore(s) && (u = !0),
                n && d.second(0).isAfter(n) && (u = !0),
                i.minute() != h || u
                  ? u
                    ? (e +=
                        '<option value="' +
                        h +
                        '" disabled="disabled" class="disabled">' +
                        p +
                        "</option>")
                    : (e += '<option value="' + h + '">' + p + "</option>")
                  : (e +=
                      '<option value="' +
                      h +
                      '" selected="selected">' +
                      p +
                      "</option>");
            }
            if (((e += "</select> "), this.timePickerSeconds)) {
              e += ': <select class="secondselect">';
              for (var h = 0; h < 60; h++) {
                var p = h < 10 ? "0" + h : h,
                  d = i.clone().second(h),
                  u = !1;
                s && d.isBefore(s) && (u = !0),
                  n && d.isAfter(n) && (u = !0),
                  i.second() != h || u
                    ? u
                      ? (e +=
                          '<option value="' +
                          h +
                          '" disabled="disabled" class="disabled">' +
                          p +
                          "</option>")
                      : (e += '<option value="' + h + '">' + p + "</option>")
                    : (e +=
                        '<option value="' +
                        h +
                        '" selected="selected">' +
                        p +
                        "</option>");
              }
              e += "</select> ";
            }
            if (!this.timePicker24Hour) {
              e += '<select class="ampmselect">';
              var f = "",
                m = "";
              s &&
                i.clone().hour(12).minute(0).second(0).isBefore(s) &&
                (f = ' disabled="disabled" class="disabled"'),
                n &&
                  i.clone().hour(0).minute(0).second(0).isAfter(n) &&
                  (m = ' disabled="disabled" class="disabled"'),
                i.hour() >= 12
                  ? (e +=
                      '<option value="AM"' +
                      f +
                      '>AM</option><option value="PM" selected="selected"' +
                      m +
                      ">PM</option>")
                  : (e +=
                      '<option value="AM" selected="selected"' +
                      f +
                      '>AM</option><option value="PM"' +
                      m +
                      ">PM</option>"),
                (e += "</select>");
            }
            this.container
              .find(".drp-calendar." + t + " .calendar-time")
              .html(e);
          }
        },
        updateFormInputs: function () {
          this.singleDatePicker ||
          (this.endDate &&
            (this.startDate.isBefore(this.endDate) ||
              this.startDate.isSame(this.endDate)))
            ? this.container.find("button.applyBtn").prop("disabled", !1)
            : this.container.find("button.applyBtn").prop("disabled", !0);
        },
        move: function () {
          var t,
            i = { top: 0, left: 0 },
            s = this.drops,
            n = e(window).width();
          switch (
            (this.parentEl.is("body") ||
              ((i = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft(),
              }),
              (n = this.parentEl[0].clientWidth + this.parentEl.offset().left)),
            s)
          ) {
            case "auto":
              (t =
                this.element.offset().top +
                this.element.outerHeight() -
                i.top) +
                this.container.outerHeight() >=
                this.parentEl[0].scrollHeight &&
                ((t =
                  this.element.offset().top -
                  this.container.outerHeight() -
                  i.top),
                (s = "up"));
              break;
            case "up":
              t =
                this.element.offset().top -
                this.container.outerHeight() -
                i.top;
              break;
            default:
              t =
                this.element.offset().top + this.element.outerHeight() - i.top;
          }
          this.container.css({ top: 0, left: 0, right: "auto" });
          var o = this.container.outerWidth();
          if (
            (this.container.toggleClass("drop-up", "up" == s),
            "left" == this.opens)
          ) {
            var r = n - this.element.offset().left - this.element.outerWidth();
            o + r > e(window).width()
              ? this.container.css({ top: t, right: "auto", left: 9 })
              : this.container.css({ top: t, right: r, left: "auto" });
          } else if ("center" == this.opens) {
            var a =
              this.element.offset().left -
              i.left +
              this.element.outerWidth() / 2 -
              o / 2;
            a < 0
              ? this.container.css({ top: t, right: "auto", left: 9 })
              : a + o > e(window).width()
              ? this.container.css({ top: t, left: "auto", right: 0 })
              : this.container.css({ top: t, left: a, right: "auto" });
          } else {
            var a = this.element.offset().left - i.left;
            a + o > e(window).width()
              ? this.container.css({ top: t, left: "auto", right: 0 })
              : this.container.css({ top: t, left: a, right: "auto" });
          }
        },
        show: function (t) {
          this.isShowing ||
            ((this._outsideClickProxy = e.proxy(function (t) {
              this.outsideClick(t);
            }, this)),
            e(document)
              .on("mousedown.daterangepicker", this._outsideClickProxy)
              .on("touchend.daterangepicker", this._outsideClickProxy)
              .on(
                "click.daterangepicker",
                "[data-toggle=dropdown]",
                this._outsideClickProxy
              )
              .on("focusin.daterangepicker", this._outsideClickProxy),
            e(window).on(
              "resize.daterangepicker",
              e.proxy(function (t) {
                this.move(t);
              }, this)
            ),
            (this.oldStartDate = this.startDate.clone()),
            (this.oldEndDate = this.endDate.clone()),
            (this.previousRightTime = this.endDate.clone()),
            this.updateView(),
            this.container.show(),
            this.move(),
            this.element.trigger("show.daterangepicker", this),
            (this.isShowing = !0));
        },
        hide: function (t) {
          this.isShowing &&
            (this.endDate ||
              ((this.startDate = this.oldStartDate.clone()),
              (this.endDate = this.oldEndDate.clone())),
            (this.startDate.isSame(this.oldStartDate) &&
              this.endDate.isSame(this.oldEndDate)) ||
              this.callback(
                this.startDate.clone(),
                this.endDate.clone(),
                this.chosenLabel
              ),
            this.updateElement(),
            e(document).off(".daterangepicker"),
            e(window).off(".daterangepicker"),
            this.container.hide(),
            this.element.trigger("hide.daterangepicker", this),
            (this.isShowing = !1));
        },
        toggle: function (t) {
          this.isShowing ? this.hide() : this.show();
        },
        outsideClick: function (t) {
          var i = e(t.target);
          "focusin" == t.type ||
            i.closest(this.element).length ||
            i.closest(this.container).length ||
            i.closest(".calendar-table").length ||
            (this.hide(),
            this.element.trigger("outsideClick.daterangepicker", this));
        },
        showCalendars: function () {
          this.container.addClass("show-calendar"),
            this.move(),
            this.element.trigger("showCalendar.daterangepicker", this);
        },
        hideCalendars: function () {
          this.container.removeClass("show-calendar"),
            this.element.trigger("hideCalendar.daterangepicker", this);
        },
        clickRange: function (t) {
          var e = t.target.getAttribute("data-range-key");
          if (((this.chosenLabel = e), e == this.locale.customRangeLabel))
            this.showCalendars();
          else {
            var i = this.ranges[e];
            (this.startDate = i[0]),
              (this.endDate = i[1]),
              this.timePicker ||
                (this.startDate.startOf("day"), this.endDate.endOf("day")),
              this.alwaysShowCalendars || this.hideCalendars(),
              this.clickApply();
          }
        },
        clickPrev: function (t) {
          e(t.target).parents(".drp-calendar").hasClass("left")
            ? (this.leftCalendar.month.subtract(1, "month"),
              this.linkedCalendars &&
                this.rightCalendar.month.subtract(1, "month"))
            : this.rightCalendar.month.subtract(1, "month"),
            this.updateCalendars();
        },
        clickNext: function (t) {
          e(t.target).parents(".drp-calendar").hasClass("left")
            ? this.leftCalendar.month.add(1, "month")
            : (this.rightCalendar.month.add(1, "month"),
              this.linkedCalendars && this.leftCalendar.month.add(1, "month")),
            this.updateCalendars();
        },
        hoverDate: function (t) {
          if (e(t.target).hasClass("available")) {
            var i = e(t.target).attr("data-title"),
              s = i.substr(1, 1),
              n = i.substr(3, 1),
              o = e(t.target).parents(".drp-calendar").hasClass("left")
                ? this.leftCalendar.calendar[s][n]
                : this.rightCalendar.calendar[s][n],
              r = this.leftCalendar,
              a = this.rightCalendar,
              l = this.startDate;
            this.endDate ||
              this.container
                .find(".drp-calendar tbody td")
                .each(function (t, i) {
                  if (!e(i).hasClass("week")) {
                    var s = e(i).attr("data-title"),
                      n = s.substr(1, 1),
                      h = s.substr(3, 1),
                      c = e(i).parents(".drp-calendar").hasClass("left")
                        ? r.calendar[n][h]
                        : a.calendar[n][h];
                    (c.isAfter(l) && c.isBefore(o)) || c.isSame(o, "day")
                      ? e(i).addClass("in-range")
                      : e(i).removeClass("in-range");
                  }
                });
          }
        },
        clickDate: function (t) {
          if (e(t.target).hasClass("available")) {
            var i = e(t.target).attr("data-title"),
              s = i.substr(1, 1),
              n = i.substr(3, 1),
              o = e(t.target).parents(".drp-calendar").hasClass("left")
                ? this.leftCalendar.calendar[s][n]
                : this.rightCalendar.calendar[s][n];
            if (this.endDate || o.isBefore(this.startDate, "day")) {
              if (this.timePicker) {
                var r = parseInt(
                  this.container.find(".left .hourselect").val(),
                  10
                );
                if (!this.timePicker24Hour) {
                  var a = this.container.find(".left .ampmselect").val();
                  "PM" === a && r < 12 && (r += 12),
                    "AM" === a && 12 === r && (r = 0);
                }
                var l = parseInt(
                  this.container.find(".left .minuteselect").val(),
                  10
                );
                isNaN(l) &&
                  (l = parseInt(
                    this.container
                      .find(".left .minuteselect option:last")
                      .val(),
                    10
                  ));
                var h = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".left .secondselect").val(),
                      10
                    )
                  : 0;
                o = o.clone().hour(r).minute(l).second(h);
              }
              (this.endDate = null), this.setStartDate(o.clone());
            } else if (!this.endDate && o.isBefore(this.startDate))
              this.setEndDate(this.startDate.clone());
            else {
              if (this.timePicker) {
                var r = parseInt(
                  this.container.find(".right .hourselect").val(),
                  10
                );
                if (!this.timePicker24Hour) {
                  var a = this.container.find(".right .ampmselect").val();
                  "PM" === a && r < 12 && (r += 12),
                    "AM" === a && 12 === r && (r = 0);
                }
                var l = parseInt(
                  this.container.find(".right .minuteselect").val(),
                  10
                );
                isNaN(l) &&
                  (l = parseInt(
                    this.container
                      .find(".right .minuteselect option:last")
                      .val(),
                    10
                  ));
                var h = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".right .secondselect").val(),
                      10
                    )
                  : 0;
                o = o.clone().hour(r).minute(l).second(h);
              }
              this.setEndDate(o.clone()),
                this.autoApply &&
                  (this.calculateChosenLabel(), this.clickApply());
            }
            this.singleDatePicker &&
              (this.setEndDate(this.startDate),
              !this.timePicker && this.autoApply && this.clickApply()),
              this.updateView(),
              t.stopPropagation();
          }
        },
        calculateChosenLabel: function () {
          var t = !0,
            e = 0;
          for (var i in this.ranges) {
            if (this.timePicker) {
              var s = this.timePickerSeconds
                ? "YYYY-MM-DD HH:mm:ss"
                : "YYYY-MM-DD HH:mm";
              if (
                this.startDate.format(s) == this.ranges[i][0].format(s) &&
                this.endDate.format(s) == this.ranges[i][1].format(s)
              ) {
                (t = !1),
                  (this.chosenLabel = this.container
                    .find(".ranges li:eq(" + e + ")")
                    .addClass("active")
                    .attr("data-range-key"));
                break;
              }
            } else if (
              this.startDate.format("YYYY-MM-DD") ==
                this.ranges[i][0].format("YYYY-MM-DD") &&
              this.endDate.format("YYYY-MM-DD") ==
                this.ranges[i][1].format("YYYY-MM-DD")
            ) {
              (t = !1),
                (this.chosenLabel = this.container
                  .find(".ranges li:eq(" + e + ")")
                  .addClass("active")
                  .attr("data-range-key"));
              break;
            }
            e++;
          }
          t &&
            (this.showCustomRangeLabel
              ? (this.chosenLabel = this.container
                  .find(".ranges li:last")
                  .addClass("active")
                  .attr("data-range-key"))
              : (this.chosenLabel = null),
            this.showCalendars());
        },
        clickApply: function (t) {
          this.hide(), this.element.trigger("apply.daterangepicker", this);
        },
        clickCancel: function (t) {
          (this.startDate = this.oldStartDate),
            (this.endDate = this.oldEndDate),
            this.hide(),
            this.element.trigger("cancel.daterangepicker", this);
        },
        monthOrYearChanged: function (t) {
          var i = e(t.target).closest(".drp-calendar").hasClass("left"),
            s = this.container.find(".drp-calendar." + (i ? "left" : "right")),
            n = parseInt(s.find(".monthselect").val(), 10),
            o = s.find(".yearselect").val();
          !i &&
            (o < this.startDate.year() ||
              (o == this.startDate.year() && n < this.startDate.month())) &&
            ((n = this.startDate.month()), (o = this.startDate.year())),
            this.minDate &&
              (o < this.minDate.year() ||
                (o == this.minDate.year() && n < this.minDate.month())) &&
              ((n = this.minDate.month()), (o = this.minDate.year())),
            this.maxDate &&
              (o > this.maxDate.year() ||
                (o == this.maxDate.year() && n > this.maxDate.month())) &&
              ((n = this.maxDate.month()), (o = this.maxDate.year())),
            i
              ? (this.leftCalendar.month.month(n).year(o),
                this.linkedCalendars &&
                  (this.rightCalendar.month = this.leftCalendar.month
                    .clone()
                    .add(1, "month")))
              : (this.rightCalendar.month.month(n).year(o),
                this.linkedCalendars &&
                  (this.leftCalendar.month = this.rightCalendar.month
                    .clone()
                    .subtract(1, "month"))),
            this.updateCalendars();
        },
        timeChanged: function (t) {
          var i = e(t.target).closest(".drp-calendar"),
            s = i.hasClass("left"),
            n = parseInt(i.find(".hourselect").val(), 10),
            o = parseInt(i.find(".minuteselect").val(), 10);
          isNaN(o) &&
            (o = parseInt(i.find(".minuteselect option:last").val(), 10));
          var r = this.timePickerSeconds
            ? parseInt(i.find(".secondselect").val(), 10)
            : 0;
          if (!this.timePicker24Hour) {
            var a = i.find(".ampmselect").val();
            "PM" === a && n < 12 && (n += 12),
              "AM" === a && 12 === n && (n = 0);
          }
          if (s) {
            var l = this.startDate.clone();
            l.hour(n),
              l.minute(o),
              l.second(r),
              this.setStartDate(l),
              this.singleDatePicker
                ? (this.endDate = this.startDate.clone())
                : this.endDate &&
                  this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") &&
                  this.endDate.isBefore(l) &&
                  this.setEndDate(l.clone());
          } else if (this.endDate) {
            var h = this.endDate.clone();
            h.hour(n), h.minute(o), h.second(r), this.setEndDate(h);
          }
          this.updateCalendars(),
            this.updateFormInputs(),
            this.renderTimePicker("left"),
            this.renderTimePicker("right");
        },
        elementChanged: function () {
          if (this.element.is("input") && this.element.val().length) {
            var e = this.element.val().split(this.locale.separator),
              i = null,
              s = null;
            2 === e.length &&
              ((i = t(e[0], this.locale.format)),
              (s = t(e[1], this.locale.format))),
              (this.singleDatePicker || null === i || null === s) &&
                (s = i = t(this.element.val(), this.locale.format)),
              i.isValid() &&
                s.isValid() &&
                (this.setStartDate(i), this.setEndDate(s), this.updateView());
          }
        },
        keydown: function (t) {
          (9 === t.keyCode || 13 === t.keyCode) && this.hide(),
            27 === t.keyCode &&
              (t.preventDefault(), t.stopPropagation(), this.hide());
        },
        updateElement: function () {
          if (this.element.is("input") && this.autoUpdateInput) {
            var t = this.startDate.format(this.locale.format);
            this.singleDatePicker ||
              (t +=
                this.locale.separator +
                this.endDate.format(this.locale.format)),
              t !== this.element.val() && this.element.val(t).trigger("change");
          }
        },
        remove: function () {
          this.container.remove(),
            this.element.off(".daterangepicker"),
            this.element.removeData();
        },
      }),
      (e.fn.daterangepicker = function (t, s) {
        var n = e.extend(!0, {}, e.fn.daterangepicker.defaultOptions, t);
        return (
          this.each(function () {
            var t = e(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(),
              t.data("daterangepicker", new i(t, n, s));
          }),
          this
        );
      }),
      i
    );
  }),
  /*!
   * Timepicker Component for Twitter Bootstrap
   *
   * Copyright 2013 Joris de Wit
   *
   * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors
   *
   * For the full copyright and license information, please view the LICENSE
   * file that was distributed with this source code.
   */ (function (t, e, i, s) {
    "use strict";
    var n = function (e, i) {
      (this.widget = ""),
        (this.$element = t(e)),
        (this.defaultTime = i.defaultTime),
        (this.disableFocus = i.disableFocus),
        (this.disableMousewheel = i.disableMousewheel),
        (this.isOpen = i.isOpen),
        (this.minuteStep = i.minuteStep),
        (this.modalBackdrop = i.modalBackdrop),
        (this.orientation = i.orientation),
        (this.secondStep = i.secondStep),
        (this.showInputs = i.showInputs),
        (this.showMeridian = i.showMeridian),
        (this.showSeconds = i.showSeconds),
        (this.template = i.template),
        (this.appendWidgetTo = i.appendWidgetTo),
        (this.showWidgetOnAddonClick = i.showWidgetOnAddonClick),
        this._init();
    };
    (n.prototype = {
      constructor: n,
      _init: function () {
        var e = this;
        this.showWidgetOnAddonClick &&
        (this.$element.parent().hasClass("input-append") ||
          this.$element.parent().hasClass("input-prepend"))
          ? (this.$element
              .parent(".input-append, .input-prepend")
              .find(".add-on")
              .on({ "click.timepicker": t.proxy(this.showWidget, this) }),
            this.$element.on({
              "focus.timepicker": t.proxy(this.highlightUnit, this),
              "click.timepicker": t.proxy(this.highlightUnit, this),
              "keydown.timepicker": t.proxy(this.elementKeydown, this),
              "blur.timepicker": t.proxy(this.blurElement, this),
              "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(
                this.mousewheel,
                this
              ),
            }))
          : this.template
          ? this.$element.on({
              "focus.timepicker": t.proxy(this.showWidget, this),
              "click.timepicker": t.proxy(this.showWidget, this),
              "blur.timepicker": t.proxy(this.blurElement, this),
              "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(
                this.mousewheel,
                this
              ),
            })
          : this.$element.on({
              "focus.timepicker": t.proxy(this.highlightUnit, this),
              "click.timepicker": t.proxy(this.highlightUnit, this),
              "keydown.timepicker": t.proxy(this.elementKeydown, this),
              "blur.timepicker": t.proxy(this.blurElement, this),
              "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(
                this.mousewheel,
                this
              ),
            }),
          !1 !== this.template
            ? (this.$widget = t(this.getTemplate()).on(
                "click",
                t.proxy(this.widgetClick, this)
              ))
            : (this.$widget = !1),
          this.showInputs &&
            !1 !== this.$widget &&
            this.$widget.find("input").each(function () {
              t(this).on({
                "click.timepicker": function () {
                  t(this).select();
                },
                "keydown.timepicker": t.proxy(e.widgetKeydown, e),
                "keyup.timepicker": t.proxy(e.widgetKeyup, e),
              });
            }),
          this.setDefaultTime(this.defaultTime);
      },
      blurElement: function () {
        (this.highlightedUnit = null), this.updateFromElementVal();
      },
      clear: function () {
        (this.hour = ""),
          (this.minute = ""),
          (this.second = ""),
          (this.meridian = ""),
          this.$element.val("");
      },
      decrementHour: function () {
        if (this.showMeridian) {
          if (1 === this.hour) this.hour = 12;
          else {
            if (12 === this.hour) return this.hour--, this.toggleMeridian();
            if (0 === this.hour) return (this.hour = 11), this.toggleMeridian();
            this.hour--;
          }
        } else this.hour <= 0 ? (this.hour = 23) : this.hour--;
      },
      decrementMinute: function (t) {
        var e;
        (e = t ? this.minute - t : this.minute - this.minuteStep) < 0
          ? (this.decrementHour(), (this.minute = e + 60))
          : (this.minute = e);
      },
      decrementSecond: function () {
        var t = this.second - this.secondStep;
        t < 0
          ? (this.decrementMinute(!0), (this.second = t + 60))
          : (this.second = t);
      },
      elementKeydown: function (t) {
        switch (t.keyCode) {
          case 9:
          case 27:
            this.updateFromElementVal();
            break;
          case 37:
            t.preventDefault(), this.highlightPrevUnit();
            break;
          case 38:
            switch ((t.preventDefault(), this.highlightedUnit)) {
              case "hour":
                this.incrementHour(), this.highlightHour();
                break;
              case "minute":
                this.incrementMinute(), this.highlightMinute();
                break;
              case "second":
                this.incrementSecond(), this.highlightSecond();
                break;
              case "meridian":
                this.toggleMeridian(), this.highlightMeridian();
            }
            this.update();
            break;
          case 39:
            t.preventDefault(), this.highlightNextUnit();
            break;
          case 40:
            switch ((t.preventDefault(), this.highlightedUnit)) {
              case "hour":
                this.decrementHour(), this.highlightHour();
                break;
              case "minute":
                this.decrementMinute(), this.highlightMinute();
                break;
              case "second":
                this.decrementSecond(), this.highlightSecond();
                break;
              case "meridian":
                this.toggleMeridian(), this.highlightMeridian();
            }
            this.update();
        }
      },
      getCursorPosition: function () {
        var t = this.$element.get(0);
        if ("selectionStart" in t) return t.selectionStart;
        if (i.selection) {
          t.focus();
          var e = i.selection.createRange(),
            s = i.selection.createRange().text.length;
          return e.moveStart("character", -t.value.length), e.text.length - s;
        }
      },
      getTemplate: function () {
        var t, e, i, s, n, o;
        switch (
          (this.showInputs
            ? ((e =
                '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>'),
              (i =
                '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>'),
              (s =
                '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>'),
              (n =
                '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>'))
            : ((e = '<span class="bootstrap-timepicker-hour"></span>'),
              (i = '<span class="bootstrap-timepicker-minute"></span>'),
              (s = '<span class="bootstrap-timepicker-second"></span>'),
              (n = '<span class="bootstrap-timepicker-meridian"></span>')),
          (o =
            '<table><tr><td><a href="#" data-action="incrementHour"><i class="icon-up-open-big"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-up-open-big"></i></a></td>' +
            (this.showSeconds
              ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-up-open-big"></i></a></td>'
              : "") +
            (this.showMeridian
              ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-up-open-big"></i></a></td>'
              : "") +
            "</tr><tr><td>" +
            e +
            '</td> <td class="separator">:</td><td>' +
            i +
            "</td> " +
            (this.showSeconds
              ? '<td class="separator">:</td><td>' + s + "</td>"
              : "") +
            (this.showMeridian
              ? '<td class="separator">&nbsp;</td><td>' + n + "</td>"
              : "") +
            '</tr><tr><td><a href="#" data-action="decrementHour"><i class="icon-down-open-big"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="icon-down-open-big"></i></a></td>' +
            (this.showSeconds
              ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-down-open-big"></i></a></td>'
              : "") +
            (this.showMeridian
              ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-down-open-big"></i></a></td>'
              : "") +
            "</tr></table>"),
          this.template)
        ) {
          case "modal":
            t =
              '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' +
              (this.modalBackdrop ? "true" : "false") +
              '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">\xd7</a><h3>Pick a Time</h3></div><div class="modal-content">' +
              o +
              '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
            break;
          case "dropdown":
            t =
              '<div class="bootstrap-timepicker-widget dropdown-menu">' +
              o +
              "</div>";
        }
        return t;
      },
      getTime: function () {
        return "" === this.hour
          ? ""
          : this.hour +
              ":" +
              (1 === this.minute.toString().length
                ? "0" + this.minute
                : this.minute) +
              (this.showSeconds
                ? ":" +
                  (1 === this.second.toString().length
                    ? "0" + this.second
                    : this.second)
                : "") +
              (this.showMeridian ? " " + this.meridian : "");
      },
      hideWidget: function () {
        !1 !== this.isOpen &&
          (this.$element.trigger({
            type: "hide.timepicker",
            time: {
              value: this.getTime(),
              hours: this.hour,
              minutes: this.minute,
              seconds: this.second,
              meridian: this.meridian,
            },
          }),
          "modal" === this.template && this.$widget.modal
            ? this.$widget.modal("hide")
            : this.$widget.removeClass("open"),
          t(i).off("mousedown.timepicker, touchend.timepicker"),
          (this.isOpen = !1),
          this.$widget.detach());
      },
      highlightUnit: function () {
        (this.position = this.getCursorPosition()),
          this.position >= 0 && this.position <= 2
            ? this.highlightHour()
            : this.position >= 3 && this.position <= 5
            ? this.highlightMinute()
            : this.position >= 6 && this.position <= 8
            ? this.showSeconds
              ? this.highlightSecond()
              : this.highlightMeridian()
            : this.position >= 9 &&
              this.position <= 11 &&
              this.highlightMeridian();
      },
      highlightNextUnit: function () {
        switch (this.highlightedUnit) {
          case "hour":
            this.highlightMinute();
            break;
          case "minute":
            this.showSeconds
              ? this.highlightSecond()
              : this.showMeridian
              ? this.highlightMeridian()
              : this.highlightHour();
            break;
          case "second":
            this.showMeridian ? this.highlightMeridian() : this.highlightHour();
            break;
          case "meridian":
            this.highlightHour();
        }
      },
      highlightPrevUnit: function () {
        switch (this.highlightedUnit) {
          case "hour":
            this.showMeridian
              ? this.highlightMeridian()
              : this.showSeconds
              ? this.highlightSecond()
              : this.highlightMinute();
            break;
          case "minute":
            this.highlightHour();
            break;
          case "second":
            this.highlightMinute();
            break;
          case "meridian":
            this.showSeconds ? this.highlightSecond() : this.highlightMinute();
        }
      },
      highlightHour: function () {
        var t = this.$element.get(0),
          e = this;
        (this.highlightedUnit = "hour"),
          t.setSelectionRange &&
            setTimeout(function () {
              e.hour < 10
                ? t.setSelectionRange(0, 1)
                : t.setSelectionRange(0, 2);
            }, 0);
      },
      highlightMinute: function () {
        var t = this.$element.get(0),
          e = this;
        (this.highlightedUnit = "minute"),
          t.setSelectionRange &&
            setTimeout(function () {
              e.hour < 10
                ? t.setSelectionRange(2, 4)
                : t.setSelectionRange(3, 5);
            }, 0);
      },
      highlightSecond: function () {
        var t = this.$element.get(0),
          e = this;
        (this.highlightedUnit = "second"),
          t.setSelectionRange &&
            setTimeout(function () {
              e.hour < 10
                ? t.setSelectionRange(5, 7)
                : t.setSelectionRange(6, 8);
            }, 0);
      },
      highlightMeridian: function () {
        var t = this.$element.get(0),
          e = this;
        (this.highlightedUnit = "meridian"),
          t.setSelectionRange &&
            (this.showSeconds
              ? setTimeout(function () {
                  e.hour < 10
                    ? t.setSelectionRange(8, 10)
                    : t.setSelectionRange(9, 11);
                }, 0)
              : setTimeout(function () {
                  e.hour < 10
                    ? t.setSelectionRange(5, 7)
                    : t.setSelectionRange(6, 8);
                }, 0));
      },
      incrementHour: function () {
        if (this.showMeridian) {
          if (11 === this.hour) return this.hour++, this.toggleMeridian();
          12 === this.hour && (this.hour = 0);
        }
        if (23 === this.hour) {
          this.hour = 0;
          return;
        }
        this.hour++;
      },
      incrementMinute: function (t) {
        var e;
        (e = t
          ? this.minute + t
          : this.minute + this.minuteStep - (this.minute % this.minuteStep)) >
        59
          ? (this.incrementHour(), (this.minute = e - 60))
          : (this.minute = e);
      },
      incrementSecond: function () {
        var t = this.second + this.secondStep - (this.second % this.secondStep);
        t > 59
          ? (this.incrementMinute(!0), (this.second = t - 60))
          : (this.second = t);
      },
      mousewheel: function (e) {
        if (!this.disableMousewheel) {
          e.preventDefault(), e.stopPropagation();
          var i = e.originalEvent.wheelDelta || -e.originalEvent.detail,
            s = null;
          switch (
            ("mousewheel" === e.type
              ? (s = -1 * e.originalEvent.wheelDelta)
              : "DOMMouseScroll" === e.type &&
                (s = 40 * e.originalEvent.detail),
            s &&
              (e.preventDefault(), t(this).scrollTop(s + t(this).scrollTop())),
            this.highlightedUnit)
          ) {
            case "minute":
              i > 0 ? this.incrementMinute() : this.decrementMinute(),
                this.highlightMinute();
              break;
            case "second":
              i > 0 ? this.incrementSecond() : this.decrementSecond(),
                this.highlightSecond();
              break;
            case "meridian":
              this.toggleMeridian(), this.highlightMeridian();
              break;
            default:
              i > 0 ? this.incrementHour() : this.decrementHour(),
                this.highlightHour();
          }
          return !1;
        }
      },
      place: function () {
        if (!this.isInline) {
          var i = this.$widget.outerWidth(),
            s = this.$widget.outerHeight(),
            n = t(e).width(),
            o = t(e).height(),
            r = t(e).scrollTop(),
            a =
              parseInt(
                this.$element
                  .parents()
                  .filter(function () {})
                  .first()
                  .css("z-index"),
                10
              ) + 10,
            l = this.component
              ? this.component.parent().offset()
              : this.$element.offset(),
            h = this.component
              ? this.component.outerHeight(!0)
              : this.$element.outerHeight(!1),
            c = this.component
              ? this.component.outerWidth(!0)
              : this.$element.outerWidth(!1),
            d = l.left,
            u = l.top;
          this.$widget.removeClass(
            "timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"
          ),
            "auto" !== this.orientation.x
              ? (this.picker.addClass(
                  "datepicker-orient-" + this.orientation.x
                ),
                "right" === this.orientation.x && (d -= i - c))
              : (this.$widget.addClass("timepicker-orient-left"),
                l.left < 0
                  ? (d -= l.left - 10)
                  : l.left + i > n && (d = n - i - 10));
          var p,
            f,
            m = this.orientation.y;
          "auto" === m &&
            (m =
              Math.max((p = -r + l.top - s), (f = r + o - (l.top + h + s))) ===
              f
                ? "top"
                : "bottom"),
            this.$widget.addClass("timepicker-orient-" + m),
            "top" === m
              ? "body" != this.appendWidgetTo
                ? ((u = "100%"), (d = "0"))
                : (u += h)
              : "body" != this.appendWidgetTo
              ? ((u = -s), (d = "0"))
              : (u -= s + parseInt(this.$widget.css("padding-top"), 10)),
            this.$widget.css({ top: u, left: d, zIndex: a });
        }
      },
      remove: function () {
        t("document").off(".timepicker"),
          this.$widget && this.$widget.remove(),
          delete this.$element.data().timepicker;
      },
      setDefaultTime: function (t) {
        if (this.$element.val()) this.updateFromElementVal();
        else if ("current" === t) {
          var e = new Date(),
            i = e.getHours(),
            s = e.getMinutes(),
            n = e.getSeconds(),
            o = "AM";
          0 !== n &&
            60 ==
              (n =
                Math.ceil(e.getSeconds() / this.secondStep) *
                this.secondStep) &&
            ((s += 1), (n = 0)),
            0 !== s &&
              60 ==
                (s =
                  Math.ceil(e.getMinutes() / this.minuteStep) *
                  this.minuteStep) &&
              ((i += 1), (s = 0)),
            this.showMeridian &&
              (0 === i
                ? (i = 12)
                : i >= 12
                ? (i > 12 && (i -= 12), (o = "PM"))
                : (o = "AM")),
            (this.hour = i),
            (this.minute = s),
            (this.second = n),
            (this.meridian = o),
            this.update();
        } else
          !1 === t
            ? ((this.hour = 0),
              (this.minute = 0),
              (this.second = 0),
              (this.meridian = "AM"))
            : this.setTime(t);
      },
      setTime: function (t, e) {
        var i, s, n, o, r;
        if (!t) {
          this.clear();
          return;
        }
        "object" == typeof t && t.getMonth
          ? ((s = t.getHours()),
            (n = t.getMinutes()),
            (o = t.getSeconds()),
            this.showMeridian &&
              ((r = "AM"),
              s > 12 && ((r = "PM"), (s %= 12)),
              12 === s && (r = "PM")))
          : ((r = null !== t.match(/p/i) ? "PM" : "AM"),
            (s = (i = (t = t.replace(/[^0-9\:]/g, "")).split(":"))[0]
              ? i[0].toString()
              : i.toString()),
            (n = i[1] ? i[1].toString() : ""),
            (o = i[2] ? i[2].toString() : ""),
            s.length > 4 && (o = s.substr(4, 2)),
            s.length > 2 && ((n = s.substr(2, 2)), (s = s.substr(0, 2))),
            n.length > 2 && ((o = n.substr(2, 2)), (n = n.substr(0, 2))),
            o.length > 2 && (o = o.substr(2, 2)),
            (s = parseInt(s, 10)),
            (n = parseInt(n, 10)),
            (o = parseInt(o, 10)),
            isNaN(s) && (s = 0),
            isNaN(n) && (n = 0),
            isNaN(o) && (o = 0),
            this.showMeridian
              ? s < 1
                ? (s = 1)
                : s > 12 && (s = 12)
              : (s >= 24 ? (s = 23) : s < 0 && (s = 0),
                s < 13 && "PM" === r && (s += 12)),
            n < 0 ? (n = 0) : n >= 60 && (n = 59),
            this.showSeconds &&
              (isNaN(o) ? (o = 0) : o < 0 ? (o = 0) : o >= 60 && (o = 59))),
          (this.hour = s),
          (this.minute = n),
          (this.second = o),
          (this.meridian = r),
          this.update(e);
      },
      showWidget: function () {
        if (!(this.isOpen || this.$element.is(":disabled"))) {
          this.$widget.appendTo(this.appendWidgetTo);
          var e = this;
          t(i).on("mousedown.timepicker, touchend.timepicker", function (t) {
            e.$element.parent().find(t.target).length ||
              e.$widget.is(t.target) ||
              e.$widget.find(t.target).length ||
              e.hideWidget();
          }),
            this.$element.trigger({
              type: "show.timepicker",
              time: {
                value: this.getTime(),
                hours: this.hour,
                minutes: this.minute,
                seconds: this.second,
                meridian: this.meridian,
              },
            }),
            this.place(),
            this.disableFocus && this.$element.blur(),
            "" === this.hour &&
              (this.defaultTime
                ? this.setDefaultTime(this.defaultTime)
                : this.setTime("0:0:0")),
            "modal" === this.template && this.$widget.modal
              ? this.$widget
                  .modal("show")
                  .on("hidden", t.proxy(this.hideWidget, this))
              : !1 === this.isOpen && this.$widget.addClass("open"),
            (this.isOpen = !0);
        }
      },
      toggleMeridian: function () {
        this.meridian = "AM" === this.meridian ? "PM" : "AM";
      },
      update: function (t) {
        this.updateElement(),
          t || this.updateWidget(),
          this.$element.trigger({
            type: "changeTime.timepicker",
            time: {
              value: this.getTime(),
              hours: this.hour,
              minutes: this.minute,
              seconds: this.second,
              meridian: this.meridian,
            },
          });
      },
      updateElement: function () {
        this.$element.val(this.getTime()).change();
      },
      updateFromElementVal: function () {
        this.setTime(this.$element.val());
      },
      updateWidget: function () {
        if (!1 !== this.$widget) {
          var t = this.hour,
            e =
              1 === this.minute.toString().length
                ? "0" + this.minute
                : this.minute,
            i =
              1 === this.second.toString().length
                ? "0" + this.second
                : this.second;
          this.showInputs
            ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t),
              this.$widget.find("input.bootstrap-timepicker-minute").val(e),
              this.showSeconds &&
                this.$widget.find("input.bootstrap-timepicker-second").val(i),
              this.showMeridian &&
                this.$widget
                  .find("input.bootstrap-timepicker-meridian")
                  .val(this.meridian))
            : (this.$widget.find("span.bootstrap-timepicker-hour").text(t),
              this.$widget.find("span.bootstrap-timepicker-minute").text(e),
              this.showSeconds &&
                this.$widget.find("span.bootstrap-timepicker-second").text(i),
              this.showMeridian &&
                this.$widget
                  .find("span.bootstrap-timepicker-meridian")
                  .text(this.meridian));
        }
      },
      updateFromWidgetInputs: function () {
        if (!1 !== this.$widget) {
          var t =
            this.$widget.find("input.bootstrap-timepicker-hour").val() +
            ":" +
            this.$widget.find("input.bootstrap-timepicker-minute").val() +
            (this.showSeconds
              ? ":" +
                this.$widget.find("input.bootstrap-timepicker-second").val()
              : "") +
            (this.showMeridian
              ? this.$widget.find("input.bootstrap-timepicker-meridian").val()
              : "");
          this.setTime(t, !0);
        }
      },
      widgetClick: function (e) {
        e.stopPropagation(), e.preventDefault();
        var i = t(e.target),
          s = i.closest("a").data("action");
        s && this[s](),
          this.update(),
          i.is("input") && i.get(0).setSelectionRange(0, 2);
      },
      widgetKeydown: function (e) {
        var i = t(e.target),
          s = i.attr("class").replace("bootstrap-timepicker-", "");
        switch (e.keyCode) {
          case 9:
            if (
              (this.showMeridian && "meridian" === s) ||
              (this.showSeconds && "second" === s) ||
              (!this.showMeridian && !this.showSeconds && "minute" === s)
            )
              return this.hideWidget();
            break;
          case 27:
            this.hideWidget();
            break;
          case 38:
            switch ((e.preventDefault(), s)) {
              case "hour":
                this.incrementHour();
                break;
              case "minute":
                this.incrementMinute();
                break;
              case "second":
                this.incrementSecond();
                break;
              case "meridian":
                this.toggleMeridian();
            }
            this.setTime(this.getTime()), i.get(0).setSelectionRange(0, 2);
            break;
          case 40:
            switch ((e.preventDefault(), s)) {
              case "hour":
                this.decrementHour();
                break;
              case "minute":
                this.decrementMinute();
                break;
              case "second":
                this.decrementSecond();
                break;
              case "meridian":
                this.toggleMeridian();
            }
            this.setTime(this.getTime()), i.get(0).setSelectionRange(0, 2);
        }
      },
      widgetKeyup: function (t) {
        (65 === t.keyCode ||
          77 === t.keyCode ||
          80 === t.keyCode ||
          46 === t.keyCode ||
          8 === t.keyCode ||
          (t.keyCode >= 46 && t.keyCode <= 57)) &&
          this.updateFromWidgetInputs();
      },
    }),
      (t.fn.timepicker = function (e) {
        var i = Array.apply(null, arguments);
        return (
          i.shift(),
          this.each(function () {
            var s = t(this),
              o = s.data("timepicker");
            o ||
              s.data(
                "timepicker",
                (o = new n(
                  this,
                  t.extend(
                    {},
                    t.fn.timepicker.defaults,
                    "object" == typeof e && e,
                    t(this).data()
                  )
                ))
              ),
              "string" == typeof e && o[e].apply(o, i);
          })
        );
      }),
      (t.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        disableMousewheel: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        orientation: { x: "auto", y: "auto" },
        secondStep: 15,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: "dropdown",
        appendWidgetTo: "body",
        showWidgetOnAddonClick: !0,
      }),
      (t.fn.timepicker.Constructor = n);
  })(jQuery, window, document);
