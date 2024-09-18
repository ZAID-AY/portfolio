var kS = Object.defineProperty;
var PS = (e, t, n) =>
  t in e
    ? kS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ui = (e, t, n) => PS(e, typeof t != "symbol" ? t + "" : t, n);
function ES(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function E0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function TS(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var T0 = { exports: {} },
  wl = {},
  R0 = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bs = Symbol.for("react.element"),
  RS = Symbol.for("react.portal"),
  MS = Symbol.for("react.fragment"),
  jS = Symbol.for("react.strict_mode"),
  AS = Symbol.for("react.profiler"),
  IS = Symbol.for("react.provider"),
  OS = Symbol.for("react.context"),
  LS = Symbol.for("react.forward_ref"),
  $S = Symbol.for("react.suspense"),
  DS = Symbol.for("react.memo"),
  FS = Symbol.for("react.lazy"),
  hh = Symbol.iterator;
function _S(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hh && e[hh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var M0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  j0 = Object.assign,
  A0 = {};
function qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = A0),
    (this.updater = n || M0);
}
qo.prototype.isReactComponent = {};
qo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function I0() {}
I0.prototype = qo.prototype;
function rf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = A0),
    (this.updater = n || M0);
}
var of = (rf.prototype = new I0());
of.constructor = rf;
j0(of, qo.prototype);
of.isPureReactComponent = !0;
var mh = Array.isArray,
  O0 = Object.prototype.hasOwnProperty,
  sf = { current: null },
  L0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      O0.call(t, r) && !L0.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: bs,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: sf.current,
  };
}
function NS(e, t) {
  return {
    $$typeof: bs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function af(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bs;
}
function zS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gh = /\/+/g;
function Mu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zS("" + e.key)
    : t.toString(36);
}
function fa(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bs:
          case RS:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Mu(s, 0) : r),
      mh(o)
        ? ((n = ""),
          e != null && (n = e.replace(gh, "$&/") + "/"),
          fa(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (af(o) &&
            (o = NS(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(gh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), mh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Mu(i, a);
      s += fa(i, t, n, l, o);
    }
  else if (((l = _S(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Mu(i, a++)), (s += fa(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ns(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    fa(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function VS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xt = { current: null },
  pa = { transition: null },
  BS = {
    ReactCurrentDispatcher: xt,
    ReactCurrentBatchConfig: pa,
    ReactCurrentOwner: sf,
  };
function D0() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Ns,
  forEach: function (e, t, n) {
    Ns(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ns(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ns(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!af(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = qo;
J.Fragment = MS;
J.Profiler = AS;
J.PureComponent = rf;
J.StrictMode = jS;
J.Suspense = $S;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BS;
J.act = D0;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = j0({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = sf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      O0.call(t, l) &&
        !L0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: bs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: OS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: IS, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = $0;
J.createFactory = function (e) {
  var t = $0.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: LS, render: e };
};
J.isValidElement = af;
J.lazy = function (e) {
  return { $$typeof: FS, _payload: { _status: -1, _result: e }, _init: VS };
};
J.memo = function (e, t) {
  return { $$typeof: DS, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = pa.transition;
  pa.transition = {};
  try {
    e();
  } finally {
    pa.transition = t;
  }
};
J.unstable_act = D0;
J.useCallback = function (e, t) {
  return xt.current.useCallback(e, t);
};
J.useContext = function (e) {
  return xt.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return xt.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return xt.current.useEffect(e, t);
};
J.useId = function () {
  return xt.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return xt.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return xt.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return xt.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return xt.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return xt.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return xt.current.useRef(e);
};
J.useState = function (e) {
  return xt.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return xt.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return xt.current.useTransition();
};
J.version = "18.3.1";
R0.exports = J;
var C = R0.exports;
const Pn = E0(C),
  kc = ES({ __proto__: null, default: Pn }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var US = C,
  WS = Symbol.for("react.element"),
  HS = Symbol.for("react.fragment"),
  KS = Object.prototype.hasOwnProperty,
  GS = US.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  XS = { key: !0, ref: !0, __self: !0, __source: !0 };
function F0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) KS.call(t, r) && !XS.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: WS,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: GS.current,
  };
}
wl.Fragment = HS;
wl.jsx = F0;
wl.jsxs = F0;
T0.exports = wl;
var h = T0.exports,
  _0 = { exports: {} },
  Ft = {},
  N0 = { exports: {} },
  z0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, D) {
    var U = M.length;
    M.push(D);
    e: for (; 0 < U; ) {
      var X = (U - 1) >>> 1,
        ee = M[X];
      if (0 < o(ee, D)) (M[X] = D), (M[U] = ee), (U = X);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var D = M[0],
      U = M.pop();
    if (U !== D) {
      M[0] = U;
      e: for (var X = 0, ee = M.length, Z = ee >>> 1; X < Z; ) {
        var Y = 2 * (X + 1) - 1,
          xe = M[Y],
          Se = Y + 1,
          Be = M[Se];
        if (0 > o(xe, U))
          Se < ee && 0 > o(Be, xe)
            ? ((M[X] = Be), (M[Se] = U), (X = Se))
            : ((M[X] = xe), (M[Y] = U), (X = Y));
        else if (Se < ee && 0 > o(Be, U)) (M[X] = Be), (M[Se] = U), (X = Se);
        else break e;
      }
    }
    return D;
  }
  function o(M, D) {
    var U = M.sortIndex - D.sortIndex;
    return U !== 0 ? U : M.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    y = !1,
    v = !1,
    S = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= M)
        r(u), (D.sortIndex = D.expirationTime), t(l, D);
      else break;
      D = n(u);
    }
  }
  function w(M) {
    if (((S = !1), p(M), !v))
      if (n(l) !== null) (v = !0), L(k);
      else {
        var D = n(u);
        D !== null && z(w, D.startTime - M);
      }
  }
  function k(M, D) {
    (v = !1), S && ((S = !1), m(R), (R = -1)), (y = !0);
    var U = f;
    try {
      for (
        p(D), c = n(l);
        c !== null && (!(c.expirationTime > D) || (M && !A()));

      ) {
        var X = c.callback;
        if (typeof X == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var ee = X(c.expirationTime <= D);
          (D = e.unstable_now()),
            typeof ee == "function" ? (c.callback = ee) : c === n(l) && r(l),
            p(D);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var Z = !0;
      else {
        var Y = n(u);
        Y !== null && z(w, Y.startTime - D), (Z = !1);
      }
      return Z;
    } finally {
      (c = null), (f = U), (y = !1);
    }
  }
  var P = !1,
    E = null,
    R = -1,
    x = 5,
    T = -1;
  function A() {
    return !(e.unstable_now() - T < x);
  }
  function $() {
    if (E !== null) {
      var M = e.unstable_now();
      T = M;
      var D = !0;
      try {
        D = E(!0, M);
      } finally {
        D ? V() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var V;
  if (typeof g == "function")
    V = function () {
      g($);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      O = N.port2;
    (N.port1.onmessage = $),
      (V = function () {
        O.postMessage(null);
      });
  } else
    V = function () {
      b($, 0);
    };
  function L(M) {
    (E = M), P || ((P = !0), V());
  }
  function z(M, D) {
    R = b(function () {
      M(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), L(k));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (x = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var U = f;
      f = D;
      try {
        return M();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, D) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var U = f;
      f = M;
      try {
        return D();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (M, D, U) {
      var X = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? X + U : X))
          : (U = X),
        M)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = U + ee),
        (M = {
          id: d++,
          callback: D,
          priorityLevel: M,
          startTime: U,
          expirationTime: ee,
          sortIndex: -1,
        }),
        U > X
          ? ((M.sortIndex = U),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (S ? (m(R), (R = -1)) : (S = !0), z(w, U - X)))
          : ((M.sortIndex = ee), t(l, M), v || y || ((v = !0), L(k))),
        M
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (M) {
      var D = f;
      return function () {
        var U = f;
        f = D;
        try {
          return M.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(z0);
N0.exports = z0;
var QS = N0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var YS = C,
  $t = QS;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var V0 = new Set(),
  Qi = {};
function eo(e, t) {
  No(e, t), No(e + "Capture", t);
}
function No(e, t) {
  for (Qi[e] = t, e = 0; e < t.length; e++) V0.add(t[e]);
}
var Kn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pc = Object.prototype.hasOwnProperty,
  qS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yh = {},
  vh = {};
function ZS(e) {
  return Pc.call(vh, e)
    ? !0
    : Pc.call(yh, e)
    ? !1
    : qS.test(e)
    ? (vh[e] = !0)
    : ((yh[e] = !0), !1);
}
function JS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ew(e, t, n, r) {
  if (t === null || typeof t > "u" || JS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function St(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    st[e] = new St(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  st[t] = new St(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  st[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  st[e] = new St(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    st[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  st[e] = new St(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  st[e] = new St(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  st[e] = new St(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  st[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lf = /[\-:]([a-z])/g;
function uf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lf, uf);
    st[t] = new St(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lf, uf);
    st[t] = new St(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lf, uf);
  st[t] = new St(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  st[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
st.xlinkHref = new St(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  st[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cf(e, t, n, r) {
  var o = st.hasOwnProperty(t) ? st[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ew(t, n, o, r) && (n = null),
    r || o === null
      ? ZS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var er = YS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zs = Symbol.for("react.element"),
  ho = Symbol.for("react.portal"),
  mo = Symbol.for("react.fragment"),
  df = Symbol.for("react.strict_mode"),
  Ec = Symbol.for("react.profiler"),
  B0 = Symbol.for("react.provider"),
  U0 = Symbol.for("react.context"),
  ff = Symbol.for("react.forward_ref"),
  Tc = Symbol.for("react.suspense"),
  Rc = Symbol.for("react.suspense_list"),
  pf = Symbol.for("react.memo"),
  sr = Symbol.for("react.lazy"),
  W0 = Symbol.for("react.offscreen"),
  xh = Symbol.iterator;
function ci(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xh && e[xh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ie = Object.assign,
  ju;
function ki(e) {
  if (ju === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ju = (t && t[1]) || "";
    }
  return (
    `
` +
    ju +
    e
  );
}
var Au = !1;
function Iu(e, t) {
  if (!e || Au) return "";
  Au = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Au = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ki(e) : "";
}
function tw(e) {
  switch (e.tag) {
    case 5:
      return ki(e.type);
    case 16:
      return ki("Lazy");
    case 13:
      return ki("Suspense");
    case 19:
      return ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Iu(e.type, !1)), e;
    case 11:
      return (e = Iu(e.type.render, !1)), e;
    case 1:
      return (e = Iu(e.type, !0)), e;
    default:
      return "";
  }
}
function Mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mo:
      return "Fragment";
    case ho:
      return "Portal";
    case Ec:
      return "Profiler";
    case df:
      return "StrictMode";
    case Tc:
      return "Suspense";
    case Rc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case U0:
        return (e.displayName || "Context") + ".Consumer";
      case B0:
        return (e._context.displayName || "Context") + ".Provider";
      case ff:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pf:
        return (
          (t = e.displayName || null), t !== null ? t : Mc(e.type) || "Memo"
        );
      case sr:
        (t = e._payload), (e = e._init);
        try {
          return Mc(e(t));
        } catch {}
    }
  return null;
}
function nw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mc(t);
    case 8:
      return t === df ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Sr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function H0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rw(e) {
  var t = H0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vs(e) {
  e._valueTracker || (e._valueTracker = rw(e));
}
function K0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = H0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ia(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jc(e, t) {
  var n = t.checked;
  return Ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Sh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function G0(e, t) {
  (t = t.checked), t != null && cf(e, "checked", t, !1);
}
function Ac(e, t) {
  G0(e, t);
  var n = Sr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ic(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ic(e, t.type, Sr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ic(e, t, n) {
  (t !== "number" || Ia(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pi = Array.isArray;
function Ao(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Oc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ch(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (Pi(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sr(n) };
}
function X0(e, t) {
  var n = Sr(t.value),
    r = Sr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Q0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Q0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Bs,
  Y0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Bs = Bs || document.createElement("div"),
          Bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Bs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Oi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ow = ["Webkit", "ms", "Moz", "O"];
Object.keys(Oi).forEach(function (e) {
  ow.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Oi[t] = Oi[e]);
  });
});
function q0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Oi.hasOwnProperty(e) && Oi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Z0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = q0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var iw = Ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function $c(e, t) {
  if (t) {
    if (iw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Dc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Fc = null;
function hf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _c = null,
  Io = null,
  Oo = null;
function kh(e) {
  if ((e = Es(e))) {
    if (typeof _c != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = El(t)), _c(e.stateNode, e.type, t));
  }
}
function J0(e) {
  Io ? (Oo ? Oo.push(e) : (Oo = [e])) : (Io = e);
}
function ey() {
  if (Io) {
    var e = Io,
      t = Oo;
    if (((Oo = Io = null), kh(e), t)) for (e = 0; e < t.length; e++) kh(t[e]);
  }
}
function ty(e, t) {
  return e(t);
}
function ny() {}
var Ou = !1;
function ry(e, t, n) {
  if (Ou) return e(t, n);
  Ou = !0;
  try {
    return ty(e, t, n);
  } finally {
    (Ou = !1), (Io !== null || Oo !== null) && (ny(), ey());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = El(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Nc = !1;
if (Kn)
  try {
    var di = {};
    Object.defineProperty(di, "passive", {
      get: function () {
        Nc = !0;
      },
    }),
      window.addEventListener("test", di, di),
      window.removeEventListener("test", di, di);
  } catch {
    Nc = !1;
  }
function sw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Li = !1,
  Oa = null,
  La = !1,
  zc = null,
  aw = {
    onError: function (e) {
      (Li = !0), (Oa = e);
    },
  };
function lw(e, t, n, r, o, i, s, a, l) {
  (Li = !1), (Oa = null), sw.apply(aw, arguments);
}
function uw(e, t, n, r, o, i, s, a, l) {
  if ((lw.apply(this, arguments), Li)) {
    if (Li) {
      var u = Oa;
      (Li = !1), (Oa = null);
    } else throw Error(I(198));
    La || ((La = !0), (zc = u));
  }
}
function to(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function oy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ph(e) {
  if (to(e) !== e) throw Error(I(188));
}
function cw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = to(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ph(o), e;
        if (i === r) return Ph(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function iy(e) {
  return (e = cw(e)), e !== null ? sy(e) : null;
}
function sy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ay = $t.unstable_scheduleCallback,
  Eh = $t.unstable_cancelCallback,
  dw = $t.unstable_shouldYield,
  fw = $t.unstable_requestPaint,
  ze = $t.unstable_now,
  pw = $t.unstable_getCurrentPriorityLevel,
  mf = $t.unstable_ImmediatePriority,
  ly = $t.unstable_UserBlockingPriority,
  $a = $t.unstable_NormalPriority,
  hw = $t.unstable_LowPriority,
  uy = $t.unstable_IdlePriority,
  Cl = null,
  En = null;
function mw(e) {
  if (En && typeof En.onCommitFiberRoot == "function")
    try {
      En.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var fn = Math.clz32 ? Math.clz32 : vw,
  gw = Math.log,
  yw = Math.LN2;
function vw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gw(e) / yw) | 0)) | 0;
}
var Us = 64,
  Ws = 4194304;
function Ei(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Da(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Ei(a)) : ((i &= s), i !== 0 && (r = Ei(i)));
  } else (s = n & ~o), s !== 0 ? (r = Ei(s)) : i !== 0 && (r = Ei(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - fn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function xw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - fn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = xw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Vc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cy() {
  var e = Us;
  return (Us <<= 1), !(Us & 4194240) && (Us = 64), e;
}
function Lu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ks(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - fn(t)),
    (e[t] = n);
}
function ww(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - fn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function gf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - fn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function dy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fy,
  yf,
  py,
  hy,
  my,
  Bc = !1,
  Hs = [],
  fr = null,
  pr = null,
  hr = null,
  Zi = new Map(),
  Ji = new Map(),
  lr = [],
  Cw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Th(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fr = null;
      break;
    case "dragenter":
    case "dragleave":
      pr = null;
      break;
    case "mouseover":
    case "mouseout":
      hr = null;
      break;
    case "pointerover":
    case "pointerout":
      Zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ji.delete(t.pointerId);
  }
}
function fi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Es(t)), t !== null && yf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function bw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (fr = fi(fr, e, t, n, r, o)), !0;
    case "dragenter":
      return (pr = fi(pr, e, t, n, r, o)), !0;
    case "mouseover":
      return (hr = fi(hr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Zi.set(i, fi(Zi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ji.set(i, fi(Ji.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function gy(e) {
  var t = zr(e.target);
  if (t !== null) {
    var n = to(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = oy(n)), t !== null)) {
          (e.blockedOn = t),
            my(e.priority, function () {
              py(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ha(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fc = r), n.target.dispatchEvent(r), (Fc = null);
    } else return (t = Es(n)), t !== null && yf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Rh(e, t, n) {
  ha(e) && n.delete(t);
}
function kw() {
  (Bc = !1),
    fr !== null && ha(fr) && (fr = null),
    pr !== null && ha(pr) && (pr = null),
    hr !== null && ha(hr) && (hr = null),
    Zi.forEach(Rh),
    Ji.forEach(Rh);
}
function pi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bc ||
      ((Bc = !0),
      $t.unstable_scheduleCallback($t.unstable_NormalPriority, kw)));
}
function es(e) {
  function t(o) {
    return pi(o, e);
  }
  if (0 < Hs.length) {
    pi(Hs[0], e);
    for (var n = 1; n < Hs.length; n++) {
      var r = Hs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fr !== null && pi(fr, e),
      pr !== null && pi(pr, e),
      hr !== null && pi(hr, e),
      Zi.forEach(t),
      Ji.forEach(t),
      n = 0;
    n < lr.length;
    n++
  )
    (r = lr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lr.length && ((n = lr[0]), n.blockedOn === null); )
    gy(n), n.blockedOn === null && lr.shift();
}
var Lo = er.ReactCurrentBatchConfig,
  Fa = !0;
function Pw(e, t, n, r) {
  var o = ue,
    i = Lo.transition;
  Lo.transition = null;
  try {
    (ue = 1), vf(e, t, n, r);
  } finally {
    (ue = o), (Lo.transition = i);
  }
}
function Ew(e, t, n, r) {
  var o = ue,
    i = Lo.transition;
  Lo.transition = null;
  try {
    (ue = 4), vf(e, t, n, r);
  } finally {
    (ue = o), (Lo.transition = i);
  }
}
function vf(e, t, n, r) {
  if (Fa) {
    var o = Uc(e, t, n, r);
    if (o === null) Wu(e, t, r, _a, n), Th(e, r);
    else if (bw(o, e, t, n, r)) r.stopPropagation();
    else if ((Th(e, r), t & 4 && -1 < Cw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Es(o);
        if (
          (i !== null && fy(i),
          (i = Uc(e, t, n, r)),
          i === null && Wu(e, t, r, _a, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Wu(e, t, r, null, n);
  }
}
var _a = null;
function Uc(e, t, n, r) {
  if (((_a = null), (e = hf(r)), (e = zr(e)), e !== null))
    if (((t = to(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = oy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (_a = e), null;
}
function yy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pw()) {
        case mf:
          return 1;
        case ly:
          return 4;
        case $a:
        case hw:
          return 16;
        case uy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cr = null,
  xf = null,
  ma = null;
function vy() {
  if (ma) return ma;
  var e,
    t = xf,
    n = t.length,
    r,
    o = "value" in cr ? cr.value : cr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ma = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ga(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ks() {
  return !0;
}
function Mh() {
  return !1;
}
function _t(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ks
        : Mh),
      (this.isPropagationStopped = Mh),
      this
    );
  }
  return (
    Ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ks));
      },
      persist: function () {},
      isPersistent: Ks,
    }),
    t
  );
}
var Zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Sf = _t(Zo),
  Ps = Ie({}, Zo, { view: 0, detail: 0 }),
  Tw = _t(Ps),
  $u,
  Du,
  hi,
  bl = Ie({}, Ps, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hi &&
            (hi && e.type === "mousemove"
              ? (($u = e.screenX - hi.screenX), (Du = e.screenY - hi.screenY))
              : (Du = $u = 0),
            (hi = e)),
          $u);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Du;
    },
  }),
  jh = _t(bl),
  Rw = Ie({}, bl, { dataTransfer: 0 }),
  Mw = _t(Rw),
  jw = Ie({}, Ps, { relatedTarget: 0 }),
  Fu = _t(jw),
  Aw = Ie({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Iw = _t(Aw),
  Ow = Ie({}, Zo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Lw = _t(Ow),
  $w = Ie({}, Zo, { data: 0 }),
  Ah = _t($w),
  Dw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Fw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _w = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _w[e]) ? !!t[e] : !1;
}
function wf() {
  return Nw;
}
var zw = Ie({}, Ps, {
    key: function (e) {
      if (e.key) {
        var t = Dw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ga(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wf,
    charCode: function (e) {
      return e.type === "keypress" ? ga(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ga(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Vw = _t(zw),
  Bw = Ie({}, bl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ih = _t(Bw),
  Uw = Ie({}, Ps, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wf,
  }),
  Ww = _t(Uw),
  Hw = Ie({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kw = _t(Hw),
  Gw = Ie({}, bl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xw = _t(Gw),
  Qw = [9, 13, 27, 32],
  Cf = Kn && "CompositionEvent" in window,
  $i = null;
Kn && "documentMode" in document && ($i = document.documentMode);
var Yw = Kn && "TextEvent" in window && !$i,
  xy = Kn && (!Cf || ($i && 8 < $i && 11 >= $i)),
  Oh = " ",
  Lh = !1;
function Sy(e, t) {
  switch (e) {
    case "keyup":
      return Qw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function wy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var go = !1;
function qw(e, t) {
  switch (e) {
    case "compositionend":
      return wy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Lh = !0), Oh);
    case "textInput":
      return (e = t.data), e === Oh && Lh ? null : e;
    default:
      return null;
  }
}
function Zw(e, t) {
  if (go)
    return e === "compositionend" || (!Cf && Sy(e, t))
      ? ((e = vy()), (ma = xf = cr = null), (go = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return xy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $h(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jw[e.type] : t === "textarea";
}
function Cy(e, t, n, r) {
  J0(r),
    (t = Na(t, "onChange")),
    0 < t.length &&
      ((n = new Sf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Di = null,
  ts = null;
function e2(e) {
  Oy(e, 0);
}
function kl(e) {
  var t = xo(e);
  if (K0(t)) return e;
}
function t2(e, t) {
  if (e === "change") return t;
}
var by = !1;
if (Kn) {
  var _u;
  if (Kn) {
    var Nu = "oninput" in document;
    if (!Nu) {
      var Dh = document.createElement("div");
      Dh.setAttribute("oninput", "return;"),
        (Nu = typeof Dh.oninput == "function");
    }
    _u = Nu;
  } else _u = !1;
  by = _u && (!document.documentMode || 9 < document.documentMode);
}
function Fh() {
  Di && (Di.detachEvent("onpropertychange", ky), (ts = Di = null));
}
function ky(e) {
  if (e.propertyName === "value" && kl(ts)) {
    var t = [];
    Cy(t, ts, e, hf(e)), ry(e2, t);
  }
}
function n2(e, t, n) {
  e === "focusin"
    ? (Fh(), (Di = t), (ts = n), Di.attachEvent("onpropertychange", ky))
    : e === "focusout" && Fh();
}
function r2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(ts);
}
function o2(e, t) {
  if (e === "click") return kl(t);
}
function i2(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function s2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var hn = typeof Object.is == "function" ? Object.is : s2;
function ns(e, t) {
  if (hn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pc.call(t, o) || !hn(e[o], t[o])) return !1;
  }
  return !0;
}
function _h(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nh(e, t) {
  var n = _h(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _h(n);
  }
}
function Py(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Py(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ey() {
  for (var e = window, t = Ia(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ia(e.document);
  }
  return t;
}
function bf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function a2(e) {
  var t = Ey(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Py(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Nh(n, i));
        var s = Nh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var l2 = Kn && "documentMode" in document && 11 >= document.documentMode,
  yo = null,
  Wc = null,
  Fi = null,
  Hc = !1;
function zh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hc ||
    yo == null ||
    yo !== Ia(r) ||
    ((r = yo),
    "selectionStart" in r && bf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fi && ns(Fi, r)) ||
      ((Fi = r),
      (r = Na(Wc, "onSelect")),
      0 < r.length &&
        ((t = new Sf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yo))));
}
function Gs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vo = {
    animationend: Gs("Animation", "AnimationEnd"),
    animationiteration: Gs("Animation", "AnimationIteration"),
    animationstart: Gs("Animation", "AnimationStart"),
    transitionend: Gs("Transition", "TransitionEnd"),
  },
  zu = {},
  Ty = {};
Kn &&
  ((Ty = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vo.animationend.animation,
    delete vo.animationiteration.animation,
    delete vo.animationstart.animation),
  "TransitionEvent" in window || delete vo.transitionend.transition);
function Pl(e) {
  if (zu[e]) return zu[e];
  if (!vo[e]) return e;
  var t = vo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ty) return (zu[e] = t[n]);
  return e;
}
var Ry = Pl("animationend"),
  My = Pl("animationiteration"),
  jy = Pl("animationstart"),
  Ay = Pl("transitionend"),
  Iy = new Map(),
  Vh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Er(e, t) {
  Iy.set(e, t), eo(t, [e]);
}
for (var Vu = 0; Vu < Vh.length; Vu++) {
  var Bu = Vh[Vu],
    u2 = Bu.toLowerCase(),
    c2 = Bu[0].toUpperCase() + Bu.slice(1);
  Er(u2, "on" + c2);
}
Er(Ry, "onAnimationEnd");
Er(My, "onAnimationIteration");
Er(jy, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(Ay, "onTransitionEnd");
No("onMouseEnter", ["mouseout", "mouseover"]);
No("onMouseLeave", ["mouseout", "mouseover"]);
No("onPointerEnter", ["pointerout", "pointerover"]);
No("onPointerLeave", ["pointerout", "pointerover"]);
eo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
eo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
eo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
eo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
eo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ti =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  d2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));
function Bh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uw(r, t, void 0, e), (e.currentTarget = null);
}
function Oy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Bh(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Bh(o, a, u), (i = l);
        }
    }
  }
  if (La) throw ((e = zc), (La = !1), (zc = null), e);
}
function be(e, t) {
  var n = t[Yc];
  n === void 0 && (n = t[Yc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ly(t, e, 2, !1), n.add(r));
}
function Uu(e, t, n) {
  var r = 0;
  t && (r |= 4), Ly(n, e, r, t);
}
var Xs = "_reactListening" + Math.random().toString(36).slice(2);
function rs(e) {
  if (!e[Xs]) {
    (e[Xs] = !0),
      V0.forEach(function (n) {
        n !== "selectionchange" && (d2.has(n) || Uu(n, !1, e), Uu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xs] || ((t[Xs] = !0), Uu("selectionchange", !1, t));
  }
}
function Ly(e, t, n, r) {
  switch (yy(t)) {
    case 1:
      var o = Pw;
      break;
    case 4:
      o = Ew;
      break;
    default:
      o = vf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Nc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Wu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = zr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ry(function () {
    var u = i,
      d = hf(n),
      c = [];
    e: {
      var f = Iy.get(e);
      if (f !== void 0) {
        var y = Sf,
          v = e;
        switch (e) {
          case "keypress":
            if (ga(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Vw;
            break;
          case "focusin":
            (v = "focus"), (y = Fu);
            break;
          case "focusout":
            (v = "blur"), (y = Fu);
            break;
          case "beforeblur":
          case "afterblur":
            y = Fu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = jh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Mw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ww;
            break;
          case Ry:
          case My:
          case jy:
            y = Iw;
            break;
          case Ay:
            y = Kw;
            break;
          case "scroll":
            y = Tw;
            break;
          case "wheel":
            y = Xw;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Lw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ih;
        }
        var S = (t & 4) !== 0,
          b = !S && e === "scroll",
          m = S ? (f !== null ? f + "Capture" : null) : f;
        S = [];
        for (var g = u, p; g !== null; ) {
          p = g;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              m !== null && ((w = qi(g, m)), w != null && S.push(os(g, w, p)))),
            b)
          )
            break;
          g = g.return;
        }
        0 < S.length &&
          ((f = new y(f, v, null, n, d)), c.push({ event: f, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Fc &&
            (v = n.relatedTarget || n.fromElement) &&
            (zr(v) || v[Gn]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? zr(v) : null),
              v !== null &&
                ((b = to(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((S = jh),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Ih),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (b = y == null ? f : xo(y)),
            (p = v == null ? f : xo(v)),
            (f = new S(w, g + "leave", y, n, d)),
            (f.target = b),
            (f.relatedTarget = p),
            (w = null),
            zr(d) === u &&
              ((S = new S(m, g + "enter", v, n, d)),
              (S.target = p),
              (S.relatedTarget = b),
              (w = S)),
            (b = w),
            y && v)
          )
            t: {
              for (S = y, m = v, g = 0, p = S; p; p = oo(p)) g++;
              for (p = 0, w = m; w; w = oo(w)) p++;
              for (; 0 < g - p; ) (S = oo(S)), g--;
              for (; 0 < p - g; ) (m = oo(m)), p--;
              for (; g--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = oo(S)), (m = oo(m));
              }
              S = null;
            }
          else S = null;
          y !== null && Uh(c, f, y, S, !1),
            v !== null && b !== null && Uh(c, b, v, S, !0);
        }
      }
      e: {
        if (
          ((f = u ? xo(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var k = t2;
        else if ($h(f))
          if (by) k = i2;
          else {
            k = r2;
            var P = n2;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = o2);
        if (k && (k = k(e, u))) {
          Cy(c, k, n, d);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            Ic(f, "number", f.value);
      }
      switch (((P = u ? xo(u) : window), e)) {
        case "focusin":
          ($h(P) || P.contentEditable === "true") &&
            ((yo = P), (Wc = u), (Fi = null));
          break;
        case "focusout":
          Fi = Wc = yo = null;
          break;
        case "mousedown":
          Hc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hc = !1), zh(c, n, d);
          break;
        case "selectionchange":
          if (l2) break;
        case "keydown":
        case "keyup":
          zh(c, n, d);
      }
      var E;
      if (Cf)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        go
          ? Sy(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (xy &&
          n.locale !== "ko" &&
          (go || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && go && (E = vy())
            : ((cr = d),
              (xf = "value" in cr ? cr.value : cr.textContent),
              (go = !0))),
        (P = Na(u, R)),
        0 < P.length &&
          ((R = new Ah(R, e, null, n, d)),
          c.push({ event: R, listeners: P }),
          E ? (R.data = E) : ((E = wy(n)), E !== null && (R.data = E)))),
        (E = Yw ? qw(e, n) : Zw(e, n)) &&
          ((u = Na(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ah("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = E)));
    }
    Oy(c, t);
  });
}
function os(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Na(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = qi(e, n)),
      i != null && r.unshift(os(e, i, o)),
      (i = qi(e, t)),
      i != null && r.push(os(e, i, o))),
      (e = e.return);
  }
  return r;
}
function oo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uh(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = qi(n, i)), l != null && s.unshift(os(n, l, a)))
        : o || ((l = qi(n, i)), l != null && s.push(os(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var f2 = /\r\n?/g,
  p2 = /\u0000|\uFFFD/g;
function Wh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      f2,
      `
`
    )
    .replace(p2, "");
}
function Qs(e, t, n) {
  if (((t = Wh(t)), Wh(e) !== t && n)) throw Error(I(425));
}
function za() {}
var Kc = null,
  Gc = null;
function Xc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qc = typeof setTimeout == "function" ? setTimeout : void 0,
  h2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hh = typeof Promise == "function" ? Promise : void 0,
  m2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hh < "u"
      ? function (e) {
          return Hh.resolve(null).then(e).catch(g2);
        }
      : Qc;
function g2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), es(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  es(t);
}
function mr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Kh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Jo = Math.random().toString(36).slice(2),
  bn = "__reactFiber$" + Jo,
  is = "__reactProps$" + Jo,
  Gn = "__reactContainer$" + Jo,
  Yc = "__reactEvents$" + Jo,
  y2 = "__reactListeners$" + Jo,
  v2 = "__reactHandles$" + Jo;
function zr(e) {
  var t = e[bn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Gn] || n[bn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Kh(e); e !== null; ) {
          if ((n = e[bn])) return n;
          e = Kh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Es(e) {
  return (
    (e = e[bn] || e[Gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function El(e) {
  return e[is] || null;
}
var qc = [],
  So = -1;
function Tr(e) {
  return { current: e };
}
function ke(e) {
  0 > So || ((e.current = qc[So]), (qc[So] = null), So--);
}
function ve(e, t) {
  So++, (qc[So] = e.current), (e.current = t);
}
var wr = {},
  gt = Tr(wr),
  Pt = Tr(!1),
  Qr = wr;
function zo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Et(e) {
  return (e = e.childContextTypes), e != null;
}
function Va() {
  ke(Pt), ke(gt);
}
function Gh(e, t, n) {
  if (gt.current !== wr) throw Error(I(168));
  ve(gt, t), ve(Pt, n);
}
function $y(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(I(108, nw(e) || "Unknown", o));
  return Ie({}, n, r);
}
function Ba(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wr),
    (Qr = gt.current),
    ve(gt, e),
    ve(Pt, Pt.current),
    !0
  );
}
function Xh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = $y(e, t, Qr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(Pt),
      ke(gt),
      ve(gt, e))
    : ke(Pt),
    ve(Pt, n);
}
var Dn = null,
  Tl = !1,
  Ku = !1;
function Dy(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function x2(e) {
  (Tl = !0), Dy(e);
}
function Rr() {
  if (!Ku && Dn !== null) {
    Ku = !0;
    var e = 0,
      t = ue;
    try {
      var n = Dn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dn = null), (Tl = !1);
    } catch (o) {
      throw (Dn !== null && (Dn = Dn.slice(e + 1)), ay(mf, Rr), o);
    } finally {
      (ue = t), (Ku = !1);
    }
  }
  return null;
}
var wo = [],
  Co = 0,
  Ua = null,
  Wa = 0,
  Yt = [],
  qt = 0,
  Yr = null,
  Fn = 1,
  _n = "";
function Lr(e, t) {
  (wo[Co++] = Wa), (wo[Co++] = Ua), (Ua = e), (Wa = t);
}
function Fy(e, t, n) {
  (Yt[qt++] = Fn), (Yt[qt++] = _n), (Yt[qt++] = Yr), (Yr = e);
  var r = Fn;
  e = _n;
  var o = 32 - fn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - fn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Fn = (1 << (32 - fn(t) + o)) | (n << o) | r),
      (_n = i + e);
  } else (Fn = (1 << i) | (n << o) | r), (_n = e);
}
function kf(e) {
  e.return !== null && (Lr(e, 1), Fy(e, 1, 0));
}
function Pf(e) {
  for (; e === Ua; )
    (Ua = wo[--Co]), (wo[Co] = null), (Wa = wo[--Co]), (wo[Co] = null);
  for (; e === Yr; )
    (Yr = Yt[--qt]),
      (Yt[qt] = null),
      (_n = Yt[--qt]),
      (Yt[qt] = null),
      (Fn = Yt[--qt]),
      (Yt[qt] = null);
}
var Ot = null,
  It = null,
  Re = !1,
  cn = null;
function _y(e, t) {
  var n = en(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ot = e), (It = mr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (It = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yr !== null ? { id: Fn, overflow: _n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = en(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ot = e),
            (It = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jc(e) {
  if (Re) {
    var t = It;
    if (t) {
      var n = t;
      if (!Qh(e, t)) {
        if (Zc(e)) throw Error(I(418));
        t = mr(n.nextSibling);
        var r = Ot;
        t && Qh(e, t)
          ? _y(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (Ot = e));
      }
    } else {
      if (Zc(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (Ot = e);
    }
  }
}
function Yh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ot = e;
}
function Ys(e) {
  if (e !== Ot) return !1;
  if (!Re) return Yh(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xc(e.type, e.memoizedProps))),
    t && (t = It))
  ) {
    if (Zc(e)) throw (Ny(), Error(I(418)));
    for (; t; ) _y(e, t), (t = mr(t.nextSibling));
  }
  if ((Yh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              It = mr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      It = null;
    }
  } else It = Ot ? mr(e.stateNode.nextSibling) : null;
  return !0;
}
function Ny() {
  for (var e = It; e; ) e = mr(e.nextSibling);
}
function Vo() {
  (It = Ot = null), (Re = !1);
}
function Ef(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
var S2 = er.ReactCurrentBatchConfig;
function mi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function qs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qh(e) {
  var t = e._init;
  return t(e._payload);
}
function zy(e) {
  function t(m, g) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [g]), (m.flags |= 16)) : p.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), (g = g.sibling);
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
    return m;
  }
  function o(m, g) {
    return (m = xr(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, g, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < g ? ((m.flags |= 2), g) : p)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, g, p, w) {
    return g === null || g.tag !== 6
      ? ((g = Ju(p, m.mode, w)), (g.return = m), g)
      : ((g = o(g, p)), (g.return = m), g);
  }
  function l(m, g, p, w) {
    var k = p.type;
    return k === mo
      ? d(m, g, p.props.children, w, p.key)
      : g !== null &&
        (g.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === sr &&
            qh(k) === g.type))
      ? ((w = o(g, p.props)), (w.ref = mi(m, g, p)), (w.return = m), w)
      : ((w = ba(p.type, p.key, p.props, null, m.mode, w)),
        (w.ref = mi(m, g, p)),
        (w.return = m),
        w);
  }
  function u(m, g, p, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== p.containerInfo ||
      g.stateNode.implementation !== p.implementation
      ? ((g = ec(p, m.mode, w)), (g.return = m), g)
      : ((g = o(g, p.children || [])), (g.return = m), g);
  }
  function d(m, g, p, w, k) {
    return g === null || g.tag !== 7
      ? ((g = Gr(p, m.mode, w, k)), (g.return = m), g)
      : ((g = o(g, p)), (g.return = m), g);
  }
  function c(m, g, p) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Ju("" + g, m.mode, p)), (g.return = m), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case zs:
          return (
            (p = ba(g.type, g.key, g.props, null, m.mode, p)),
            (p.ref = mi(m, null, g)),
            (p.return = m),
            p
          );
        case ho:
          return (g = ec(g, m.mode, p)), (g.return = m), g;
        case sr:
          var w = g._init;
          return c(m, w(g._payload), p);
      }
      if (Pi(g) || ci(g))
        return (g = Gr(g, m.mode, p, null)), (g.return = m), g;
      qs(m, g);
    }
    return null;
  }
  function f(m, g, p, w) {
    var k = g !== null ? g.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : a(m, g, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zs:
          return p.key === k ? l(m, g, p, w) : null;
        case ho:
          return p.key === k ? u(m, g, p, w) : null;
        case sr:
          return (k = p._init), f(m, g, k(p._payload), w);
      }
      if (Pi(p) || ci(p)) return k !== null ? null : d(m, g, p, w, null);
      qs(m, p);
    }
    return null;
  }
  function y(m, g, p, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(p) || null), a(g, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case zs:
          return (m = m.get(w.key === null ? p : w.key) || null), l(g, m, w, k);
        case ho:
          return (m = m.get(w.key === null ? p : w.key) || null), u(g, m, w, k);
        case sr:
          var P = w._init;
          return y(m, g, p, P(w._payload), k);
      }
      if (Pi(w) || ci(w)) return (m = m.get(p) || null), d(g, m, w, k, null);
      qs(g, w);
    }
    return null;
  }
  function v(m, g, p, w) {
    for (
      var k = null, P = null, E = g, R = (g = 0), x = null;
      E !== null && R < p.length;
      R++
    ) {
      E.index > R ? ((x = E), (E = null)) : (x = E.sibling);
      var T = f(m, E, p[R], w);
      if (T === null) {
        E === null && (E = x);
        break;
      }
      e && E && T.alternate === null && t(m, E),
        (g = i(T, g, R)),
        P === null ? (k = T) : (P.sibling = T),
        (P = T),
        (E = x);
    }
    if (R === p.length) return n(m, E), Re && Lr(m, R), k;
    if (E === null) {
      for (; R < p.length; R++)
        (E = c(m, p[R], w)),
          E !== null &&
            ((g = i(E, g, R)), P === null ? (k = E) : (P.sibling = E), (P = E));
      return Re && Lr(m, R), k;
    }
    for (E = r(m, E); R < p.length; R++)
      (x = y(E, m, R, p[R], w)),
        x !== null &&
          (e && x.alternate !== null && E.delete(x.key === null ? R : x.key),
          (g = i(x, g, R)),
          P === null ? (k = x) : (P.sibling = x),
          (P = x));
    return (
      e &&
        E.forEach(function (A) {
          return t(m, A);
        }),
      Re && Lr(m, R),
      k
    );
  }
  function S(m, g, p, w) {
    var k = ci(p);
    if (typeof k != "function") throw Error(I(150));
    if (((p = k.call(p)), p == null)) throw Error(I(151));
    for (
      var P = (k = null), E = g, R = (g = 0), x = null, T = p.next();
      E !== null && !T.done;
      R++, T = p.next()
    ) {
      E.index > R ? ((x = E), (E = null)) : (x = E.sibling);
      var A = f(m, E, T.value, w);
      if (A === null) {
        E === null && (E = x);
        break;
      }
      e && E && A.alternate === null && t(m, E),
        (g = i(A, g, R)),
        P === null ? (k = A) : (P.sibling = A),
        (P = A),
        (E = x);
    }
    if (T.done) return n(m, E), Re && Lr(m, R), k;
    if (E === null) {
      for (; !T.done; R++, T = p.next())
        (T = c(m, T.value, w)),
          T !== null &&
            ((g = i(T, g, R)), P === null ? (k = T) : (P.sibling = T), (P = T));
      return Re && Lr(m, R), k;
    }
    for (E = r(m, E); !T.done; R++, T = p.next())
      (T = y(E, m, R, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? R : T.key),
          (g = i(T, g, R)),
          P === null ? (k = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        E.forEach(function ($) {
          return t(m, $);
        }),
      Re && Lr(m, R),
      k
    );
  }
  function b(m, g, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === mo &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case zs:
          e: {
            for (var k = p.key, P = g; P !== null; ) {
              if (P.key === k) {
                if (((k = p.type), k === mo)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (g = o(P, p.props.children)),
                      (g.return = m),
                      (m = g);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === sr &&
                    qh(k) === P.type)
                ) {
                  n(m, P.sibling),
                    (g = o(P, p.props)),
                    (g.ref = mi(m, P, p)),
                    (g.return = m),
                    (m = g);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            p.type === mo
              ? ((g = Gr(p.props.children, m.mode, w, p.key)),
                (g.return = m),
                (m = g))
              : ((w = ba(p.type, p.key, p.props, null, m.mode, w)),
                (w.ref = mi(m, g, p)),
                (w.return = m),
                (m = w));
          }
          return s(m);
        case ho:
          e: {
            for (P = p.key; g !== null; ) {
              if (g.key === P)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === p.containerInfo &&
                  g.stateNode.implementation === p.implementation
                ) {
                  n(m, g.sibling),
                    (g = o(g, p.children || [])),
                    (g.return = m),
                    (m = g);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            (g = ec(p, m.mode, w)), (g.return = m), (m = g);
          }
          return s(m);
        case sr:
          return (P = p._init), b(m, g, P(p._payload), w);
      }
      if (Pi(p)) return v(m, g, p, w);
      if (ci(p)) return S(m, g, p, w);
      qs(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = o(g, p)), (g.return = m), (m = g))
          : (n(m, g), (g = Ju(p, m.mode, w)), (g.return = m), (m = g)),
        s(m))
      : n(m, g);
  }
  return b;
}
var Bo = zy(!0),
  Vy = zy(!1),
  Ha = Tr(null),
  Ka = null,
  bo = null,
  Tf = null;
function Rf() {
  Tf = bo = Ka = null;
}
function Mf(e) {
  var t = Ha.current;
  ke(Ha), (e._currentValue = t);
}
function ed(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $o(e, t) {
  (Ka = e),
    (Tf = bo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (kt = !0), (e.firstContext = null));
}
function nn(e) {
  var t = e._currentValue;
  if (Tf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bo === null)) {
      if (Ka === null) throw Error(I(308));
      (bo = e), (Ka.dependencies = { lanes: 0, firstContext: e });
    } else bo = bo.next = e;
  return t;
}
var Vr = null;
function jf(e) {
  Vr === null ? (Vr = [e]) : Vr.push(e);
}
function By(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), jf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Xn(e, r)
  );
}
function Xn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ar = !1;
function Af(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function zn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Xn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), jf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Xn(e, n)
  );
}
function ya(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gf(e, n);
  }
}
function Zh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ga(e, t, n, r) {
  var o = e.updateQueue;
  ar = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var c = o.baseState;
    (s = 0), (d = u = l = null), (a = i);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            S = a;
          switch (((f = t), (y = n), S.tag)) {
            case 1:
              if (((v = S.payload), typeof v == "function")) {
                c = v.call(y, c, f);
                break e;
              }
              c = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = S.payload),
                (f = typeof v == "function" ? v.call(y, c, f) : v),
                f == null)
              )
                break e;
              c = Ie({}, c, f);
              break e;
            case 2:
              ar = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (l = c)) : (d = d.next = y),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = c),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Zr |= s), (e.lanes = s), (e.memoizedState = c);
  }
}
function Jh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var Ts = {},
  Tn = Tr(Ts),
  ss = Tr(Ts),
  as = Tr(Ts);
function Br(e) {
  if (e === Ts) throw Error(I(174));
  return e;
}
function If(e, t) {
  switch ((ve(as, t), ve(ss, e), ve(Tn, Ts), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Lc(t, e));
  }
  ke(Tn), ve(Tn, t);
}
function Uo() {
  ke(Tn), ke(ss), ke(as);
}
function Wy(e) {
  Br(as.current);
  var t = Br(Tn.current),
    n = Lc(t, e.type);
  t !== n && (ve(ss, e), ve(Tn, n));
}
function Of(e) {
  ss.current === e && (ke(Tn), ke(ss));
}
var Me = Tr(0);
function Xa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gu = [];
function Lf() {
  for (var e = 0; e < Gu.length; e++)
    Gu[e]._workInProgressVersionPrimary = null;
  Gu.length = 0;
}
var va = er.ReactCurrentDispatcher,
  Xu = er.ReactCurrentBatchConfig,
  qr = 0,
  Ae = null,
  He = null,
  Xe = null,
  Qa = !1,
  _i = !1,
  ls = 0,
  w2 = 0;
function lt() {
  throw Error(I(321));
}
function $f(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!hn(e[n], t[n])) return !1;
  return !0;
}
function Df(e, t, n, r, o, i) {
  if (
    ((qr = i),
    (Ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (va.current = e === null || e.memoizedState === null ? P2 : E2),
    (e = n(r, o)),
    _i)
  ) {
    i = 0;
    do {
      if (((_i = !1), (ls = 0), 25 <= i)) throw Error(I(301));
      (i += 1),
        (Xe = He = null),
        (t.updateQueue = null),
        (va.current = T2),
        (e = n(r, o));
    } while (_i);
  }
  if (
    ((va.current = Ya),
    (t = He !== null && He.next !== null),
    (qr = 0),
    (Xe = He = Ae = null),
    (Qa = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Ff() {
  var e = ls !== 0;
  return (ls = 0), e;
}
function Sn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Xe === null ? (Ae.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
}
function rn() {
  if (He === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = He.next;
  var t = Xe === null ? Ae.memoizedState : Xe.next;
  if (t !== null) (Xe = t), (He = e);
  else {
    if (e === null) throw Error(I(310));
    (He = e),
      (e = {
        memoizedState: He.memoizedState,
        baseState: He.baseState,
        baseQueue: He.baseQueue,
        queue: He.queue,
        next: null,
      }),
      Xe === null ? (Ae.memoizedState = Xe = e) : (Xe = Xe.next = e);
  }
  return Xe;
}
function us(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qu(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = He,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((qr & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (s = r)) : (l = l.next = c),
          (Ae.lanes |= d),
          (Zr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      hn(r, t.memoizedState) || (kt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ae.lanes |= i), (Zr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yu(e) {
  var t = rn(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    hn(i, t.memoizedState) || (kt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Hy() {}
function Ky(e, t) {
  var n = Ae,
    r = rn(),
    o = t(),
    i = !hn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (kt = !0)),
    (r = r.queue),
    _f(Qy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Xe !== null && Xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cs(9, Xy.bind(null, n, r, o, t), void 0, null),
      Qe === null)
    )
      throw Error(I(349));
    qr & 30 || Gy(n, t, o);
  }
  return o;
}
function Gy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yy(t) && qy(e);
}
function Qy(e, t, n) {
  return n(function () {
    Yy(t) && qy(e);
  });
}
function Yy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !hn(e, n);
  } catch {
    return !0;
  }
}
function qy(e) {
  var t = Xn(e, 1);
  t !== null && pn(t, e, 1, -1);
}
function em(e) {
  var t = Sn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: us,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = k2.bind(null, Ae, e)),
    [t.memoizedState, e]
  );
}
function cs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zy() {
  return rn().memoizedState;
}
function xa(e, t, n, r) {
  var o = Sn();
  (Ae.flags |= e),
    (o.memoizedState = cs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rl(e, t, n, r) {
  var o = rn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (He !== null) {
    var s = He.memoizedState;
    if (((i = s.destroy), r !== null && $f(r, s.deps))) {
      o.memoizedState = cs(t, n, i, r);
      return;
    }
  }
  (Ae.flags |= e), (o.memoizedState = cs(1 | t, n, i, r));
}
function tm(e, t) {
  return xa(8390656, 8, e, t);
}
function _f(e, t) {
  return Rl(2048, 8, e, t);
}
function Jy(e, t) {
  return Rl(4, 2, e, t);
}
function ev(e, t) {
  return Rl(4, 4, e, t);
}
function tv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rl(4, 4, tv.bind(null, t, e), n)
  );
}
function Nf() {}
function rv(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $f(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ov(e, t) {
  var n = rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $f(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function iv(e, t, n) {
  return qr & 21
    ? (hn(n, t) || ((n = cy()), (Ae.lanes |= n), (Zr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = n));
}
function C2(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xu.transition;
  Xu.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (Xu.transition = r);
  }
}
function sv() {
  return rn().memoizedState;
}
function b2(e, t, n) {
  var r = vr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    av(e))
  )
    lv(t, n);
  else if (((n = By(e, t, n, r)), n !== null)) {
    var o = vt();
    pn(n, e, r, o), uv(n, t, r);
  }
}
function k2(e, t, n) {
  var r = vr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (av(e)) lv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), hn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), jf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = By(e, t, o, r)),
      n !== null && ((o = vt()), pn(n, e, r, o), uv(n, t, r));
  }
}
function av(e) {
  var t = e.alternate;
  return e === Ae || (t !== null && t === Ae);
}
function lv(e, t) {
  _i = Qa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function uv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gf(e, n);
  }
}
var Ya = {
    readContext: nn,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  P2 = {
    readContext: nn,
    useCallback: function (e, t) {
      return (Sn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nn,
    useEffect: tm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xa(4194308, 4, tv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Sn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Sn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = b2.bind(null, Ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Sn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: em,
    useDebugValue: Nf,
    useDeferredValue: function (e) {
      return (Sn().memoizedState = e);
    },
    useTransition: function () {
      var e = em(!1),
        t = e[0];
      return (e = C2.bind(null, e[1])), (Sn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ae,
        o = Sn();
      if (Re) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Qe === null)) throw Error(I(349));
        qr & 30 || Gy(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        tm(Qy.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        cs(9, Xy.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Sn(),
        t = Qe.identifierPrefix;
      if (Re) {
        var n = _n,
          r = Fn;
        (n = (r & ~(1 << (32 - fn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ls++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = w2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  E2 = {
    readContext: nn,
    useCallback: rv,
    useContext: nn,
    useEffect: _f,
    useImperativeHandle: nv,
    useInsertionEffect: Jy,
    useLayoutEffect: ev,
    useMemo: ov,
    useReducer: Qu,
    useRef: Zy,
    useState: function () {
      return Qu(us);
    },
    useDebugValue: Nf,
    useDeferredValue: function (e) {
      var t = rn();
      return iv(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Qu(us)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: Hy,
    useSyncExternalStore: Ky,
    useId: sv,
    unstable_isNewReconciler: !1,
  },
  T2 = {
    readContext: nn,
    useCallback: rv,
    useContext: nn,
    useEffect: _f,
    useImperativeHandle: nv,
    useInsertionEffect: Jy,
    useLayoutEffect: ev,
    useMemo: ov,
    useReducer: Yu,
    useRef: Zy,
    useState: function () {
      return Yu(us);
    },
    useDebugValue: Nf,
    useDeferredValue: function (e) {
      var t = rn();
      return He === null ? (t.memoizedState = e) : iv(t, He.memoizedState, e);
    },
    useTransition: function () {
      var e = Yu(us)[0],
        t = rn().memoizedState;
      return [e, t];
    },
    useMutableSource: Hy,
    useSyncExternalStore: Ky,
    useId: sv,
    unstable_isNewReconciler: !1,
  };
function ln(e, t) {
  if (e && e.defaultProps) {
    (t = Ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function td(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? to(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = vt(),
      o = vr(e),
      i = zn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = gr(e, i, o)),
      t !== null && (pn(t, e, o, r), ya(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = vt(),
      o = vr(e),
      i = zn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = gr(e, i, o)),
      t !== null && (pn(t, e, o, r), ya(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = vt(),
      r = vr(e),
      o = zn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = gr(e, o, r)),
      t !== null && (pn(t, e, r, n), ya(t, e, r));
  },
};
function nm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ns(n, r) || !ns(o, i)
      : !0
  );
}
function cv(e, t, n) {
  var r = !1,
    o = wr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = nn(i))
      : ((o = Et(t) ? Qr : gt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? zo(e, o) : wr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function rm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ml.enqueueReplaceState(t, t.state, null);
}
function nd(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Af(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = nn(i))
    : ((i = Et(t) ? Qr : gt.current), (o.context = zo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (td(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ml.enqueueReplaceState(o, o.state, null),
      Ga(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += tw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function qu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var R2 = typeof WeakMap == "function" ? WeakMap : Map;
function dv(e, t, n) {
  (n = zn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Za || ((Za = !0), (pd = r)), rd(e, t);
    }),
    n
  );
}
function fv(e, t, n) {
  (n = zn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        rd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        rd(e, t),
          typeof r != "function" &&
            (yr === null ? (yr = new Set([this])) : yr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function om(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new R2();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = B2.bind(null, e, t, n)), t.then(e, e));
}
function im(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = zn(-1, 1)), (t.tag = 2), gr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var M2 = er.ReactCurrentOwner,
  kt = !1;
function yt(e, t, n, r) {
  t.child = e === null ? Vy(t, null, n, r) : Bo(t, e.child, n, r);
}
function am(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    $o(t, o),
    (r = Df(e, t, n, r, i, o)),
    (n = Ff()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qn(e, t, o))
      : (Re && n && kf(t), (t.flags |= 1), yt(e, t, r, o), t.child)
  );
}
function lm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Gf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), pv(e, t, i, r, o))
      : ((e = ba(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ns), n(s, r) && e.ref === t.ref)
    )
      return Qn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = xr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ns(i, r) && e.ref === t.ref)
      if (((kt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (kt = !0);
      else return (t.lanes = e.lanes), Qn(e, t, o);
  }
  return od(e, t, n, r, o);
}
function hv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(Po, jt),
        (jt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(Po, jt),
          (jt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ve(Po, jt),
        (jt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(Po, jt),
      (jt |= r);
  return yt(e, t, o, n), t.child;
}
function mv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function od(e, t, n, r, o) {
  var i = Et(n) ? Qr : gt.current;
  return (
    (i = zo(t, i)),
    $o(t, o),
    (n = Df(e, t, n, r, i, o)),
    (r = Ff()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qn(e, t, o))
      : (Re && r && kf(t), (t.flags |= 1), yt(e, t, n, o), t.child)
  );
}
function um(e, t, n, r, o) {
  if (Et(n)) {
    var i = !0;
    Ba(t);
  } else i = !1;
  if (($o(t, o), t.stateNode === null))
    Sa(e, t), cv(t, n, r), nd(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nn(u))
      : ((u = Et(n) ? Qr : gt.current), (u = zo(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && rm(t, s, r, u)),
      (ar = !1);
    var f = t.memoizedState;
    (s.state = f),
      Ga(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Pt.current || ar
        ? (typeof d == "function" && (td(t, n, d, r), (l = t.memoizedState)),
          (a = ar || nm(t, n, a, r, f, l, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Uy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ln(t.type, a)),
      (s.props = u),
      (c = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = nn(l))
        : ((l = Et(n) ? Qr : gt.current), (l = zo(t, l)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== c || f !== l) && rm(t, s, r, l)),
      (ar = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ga(t, r, s, o);
    var v = t.memoizedState;
    a !== c || f !== v || Pt.current || ar
      ? (typeof y == "function" && (td(t, n, y, r), (v = t.memoizedState)),
        (u = ar || nm(t, n, u, r, f, v, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return id(e, t, n, r, i, o);
}
function id(e, t, n, r, o, i) {
  mv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Xh(t, n, !1), Qn(e, t, i);
  (r = t.stateNode), (M2.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Bo(t, e.child, null, i)), (t.child = Bo(t, null, a, i)))
      : yt(e, t, a, i),
    (t.memoizedState = r.state),
    o && Xh(t, n, !0),
    t.child
  );
}
function gv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gh(e, t.context, !1),
    If(e, t.containerInfo);
}
function cm(e, t, n, r, o) {
  return Vo(), Ef(o), (t.flags |= 256), yt(e, t, n, r), t.child;
}
var sd = { dehydrated: null, treeContext: null, retryLane: 0 };
function ad(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yv(e, t, n) {
  var r = t.pendingProps,
    o = Me.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ve(Me, o & 1),
    e === null)
  )
    return (
      Jc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Il(s, r, 0, null)),
              (e = Gr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ad(n)),
              (t.memoizedState = sd),
              e)
            : zf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return j2(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = xr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = xr(a, i)) : ((i = Gr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ad(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = sd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = xr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function zf(e, t) {
  return (
    (t = Il({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zs(e, t, n, r) {
  return (
    r !== null && Ef(r),
    Bo(t, e.child, null, n),
    (e = zf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function j2(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = qu(Error(I(422)))), Zs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Il({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Gr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Bo(t, e.child, null, s),
        (t.child.memoizedState = ad(s)),
        (t.memoizedState = sd),
        i);
  if (!(t.mode & 1)) return Zs(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(I(419))), (r = qu(i, r, void 0)), Zs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), kt || a)) {
    if (((r = Qe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Xn(e, o), pn(r, e, o, -1));
    }
    return Kf(), (r = qu(Error(I(421)))), Zs(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = U2.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (It = mr(o.nextSibling)),
      (Ot = t),
      (Re = !0),
      (cn = null),
      e !== null &&
        ((Yt[qt++] = Fn),
        (Yt[qt++] = _n),
        (Yt[qt++] = Yr),
        (Fn = e.id),
        (_n = e.overflow),
        (Yr = t)),
      (t = zf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function dm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ed(e.return, t, n);
}
function Zu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function vv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((yt(e, t, r.children, n), (r = Me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dm(e, n, t);
        else if (e.tag === 19) dm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ve(Me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Xa(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Zu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Xa(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Zu(t, !0, n, null, i);
        break;
      case "together":
        Zu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Sa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function A2(e, t, n) {
  switch (t.tag) {
    case 3:
      gv(t), Vo();
      break;
    case 5:
      Wy(t);
      break;
    case 1:
      Et(t.type) && Ba(t);
      break;
    case 4:
      If(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ve(Ha, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(Me, Me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yv(e, t, n)
          : (ve(Me, Me.current & 1),
            (e = Qn(e, t, n)),
            e !== null ? e.sibling : null);
      ve(Me, Me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ve(Me, Me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hv(e, t, n);
  }
  return Qn(e, t, n);
}
var xv, ld, Sv, wv;
xv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ld = function () {};
Sv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Br(Tn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = jc(e, o)), (r = jc(e, r)), (i = []);
        break;
      case "select":
        (o = Ie({}, o, { value: void 0 })),
          (r = Ie({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Oc(e, o)), (r = Oc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = za);
    }
    $c(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && be("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gi(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ut(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function I2(e, t, n) {
  var r = t.pendingProps;
  switch ((Pf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ut(t), null;
    case 1:
      return Et(t.type) && Va(), ut(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Uo(),
        ke(Pt),
        ke(gt),
        Lf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ys(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), cn !== null && (gd(cn), (cn = null)))),
        ld(e, t),
        ut(t),
        null
      );
    case 5:
      Of(t);
      var o = Br(as.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return ut(t), null;
        }
        if (((e = Br(Tn.current)), Ys(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[bn] = t), (r[is] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              be("cancel", r), be("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              be("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ti.length; o++) be(Ti[o], r);
              break;
            case "source":
              be("error", r);
              break;
            case "img":
            case "image":
            case "link":
              be("error", r), be("load", r);
              break;
            case "details":
              be("toggle", r);
              break;
            case "input":
              Sh(r, i), be("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                be("invalid", r);
              break;
            case "textarea":
              Ch(r, i), be("invalid", r);
          }
          $c(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qs(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qs(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Qi.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  be("scroll", r);
            }
          switch (n) {
            case "input":
              Vs(r), wh(r, i, !0);
              break;
            case "textarea":
              Vs(r), bh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = za);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Q0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[bn] = t),
            (e[is] = r),
            xv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Dc(n, r)), n)) {
              case "dialog":
                be("cancel", e), be("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                be("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ti.length; o++) be(Ti[o], e);
                o = r;
                break;
              case "source":
                be("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                be("error", e), be("load", e), (o = r);
                break;
              case "details":
                be("toggle", e), (o = r);
                break;
              case "input":
                Sh(e, r), (o = jc(e, r)), be("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ie({}, r, { value: void 0 })),
                  be("invalid", e);
                break;
              case "textarea":
                Ch(e, r), (o = Oc(e, r)), be("invalid", e);
                break;
              default:
                o = r;
            }
            $c(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Z0(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Y0(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Yi(e, l)
                    : typeof l == "number" && Yi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && be("scroll", e)
                      : l != null && cf(e, i, l, s));
              }
            switch (n) {
              case "input":
                Vs(e), wh(e, r, !1);
                break;
              case "textarea":
                Vs(e), bh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ao(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ao(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = za);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ut(t), null;
    case 6:
      if (e && t.stateNode != null) wv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Br(as.current)), Br(Tn.current), Ys(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bn] = t),
            (i = r.nodeValue !== n) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bn] = t),
            (t.stateNode = r);
      }
      return ut(t), null;
    case 13:
      if (
        (ke(Me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && It !== null && t.mode & 1 && !(t.flags & 128))
          Ny(), Vo(), (t.flags |= 98560), (i = !1);
        else if (((i = Ys(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(I(317));
            i[bn] = t;
          } else
            Vo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ut(t), (i = !1);
        } else cn !== null && (gd(cn), (cn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Me.current & 1 ? Ke === 0 && (Ke = 3) : Kf())),
          t.updateQueue !== null && (t.flags |= 4),
          ut(t),
          null);
    case 4:
      return (
        Uo(), ld(e, t), e === null && rs(t.stateNode.containerInfo), ut(t), null
      );
    case 10:
      return Mf(t.type._context), ut(t), null;
    case 17:
      return Et(t.type) && Va(), ut(t), null;
    case 19:
      if ((ke(Me), (i = t.memoizedState), i === null)) return ut(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) gi(i, !1);
        else {
          if (Ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Xa(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    gi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ve(Me, (Me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ze() > Ho &&
            ((t.flags |= 128), (r = !0), gi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xa(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Re)
            )
              return ut(t), null;
          } else
            2 * ze() - i.renderingStartTime > Ho &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ze()),
          (t.sibling = null),
          (n = Me.current),
          ve(Me, r ? (n & 1) | 2 : n & 1),
          t)
        : (ut(t), null);
    case 22:
    case 23:
      return (
        Hf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? jt & 1073741824 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ut(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function O2(e, t) {
  switch ((Pf(t), t.tag)) {
    case 1:
      return (
        Et(t.type) && Va(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Uo(),
        ke(Pt),
        ke(gt),
        Lf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Of(t), null;
    case 13:
      if (
        (ke(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Vo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ke(Me), null;
    case 4:
      return Uo(), null;
    case 10:
      return Mf(t.type._context), null;
    case 22:
    case 23:
      return Hf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Js = !1,
  ft = !1,
  L2 = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function ko(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        De(e, t, r);
      }
    else n.current = null;
}
function ud(e, t, n) {
  try {
    n();
  } catch (r) {
    De(e, t, r);
  }
}
var fm = !1;
function $2(e, t) {
  if (((Kc = Fa), (e = Ey()), bf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (l = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (y = c.firstChild) !== null;

            )
              (f = c), (c = y);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++d === r && (l = s),
                (y = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gc = { focusedElem: e, selectionRange: n }, Fa = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var S = v.memoizedProps,
                    b = v.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ln(t.type, S),
                      b
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (w) {
          De(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (v = fm), (fm = !1), v;
}
function Ni(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ud(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bn], delete t[is], delete t[Yc], delete t[y2], delete t[v2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function dd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = za));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dd(e, t, n), e = e.sibling; e !== null; ) dd(e, t, n), (e = e.sibling);
}
function fd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fd(e, t, n), e = e.sibling; e !== null; ) fd(e, t, n), (e = e.sibling);
}
var nt = null,
  un = !1;
function nr(e, t, n) {
  for (n = n.child; n !== null; ) kv(e, t, n), (n = n.sibling);
}
function kv(e, t, n) {
  if (En && typeof En.onCommitFiberUnmount == "function")
    try {
      En.onCommitFiberUnmount(Cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ft || ko(n, t);
    case 6:
      var r = nt,
        o = un;
      (nt = null),
        nr(e, t, n),
        (nt = r),
        (un = o),
        nt !== null &&
          (un
            ? ((e = nt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : nt.removeChild(n.stateNode));
      break;
    case 18:
      nt !== null &&
        (un
          ? ((e = nt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hu(e.parentNode, n)
              : e.nodeType === 1 && Hu(e, n),
            es(e))
          : Hu(nt, n.stateNode));
      break;
    case 4:
      (r = nt),
        (o = un),
        (nt = n.stateNode.containerInfo),
        (un = !0),
        nr(e, t, n),
        (nt = r),
        (un = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ft &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && ud(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      nr(e, t, n);
      break;
    case 1:
      if (
        !ft &&
        (ko(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          De(n, t, a);
        }
      nr(e, t, n);
      break;
    case 21:
      nr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ft = (r = ft) || n.memoizedState !== null), nr(e, t, n), (ft = r))
        : nr(e, t, n);
      break;
    default:
      nr(e, t, n);
  }
}
function hm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new L2()),
      t.forEach(function (r) {
        var o = W2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function an(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (nt = a.stateNode), (un = !1);
              break e;
            case 3:
              (nt = a.stateNode.containerInfo), (un = !0);
              break e;
            case 4:
              (nt = a.stateNode.containerInfo), (un = !0);
              break e;
          }
          a = a.return;
        }
        if (nt === null) throw Error(I(160));
        kv(i, s, o), (nt = null), (un = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        De(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pv(t, e), (t = t.sibling);
}
function Pv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((an(t, e), yn(e), r & 4)) {
        try {
          Ni(3, e, e.return), jl(3, e);
        } catch (S) {
          De(e, e.return, S);
        }
        try {
          Ni(5, e, e.return);
        } catch (S) {
          De(e, e.return, S);
        }
      }
      break;
    case 1:
      an(t, e), yn(e), r & 512 && n !== null && ko(n, n.return);
      break;
    case 5:
      if (
        (an(t, e),
        yn(e),
        r & 512 && n !== null && ko(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yi(o, "");
        } catch (S) {
          De(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && G0(o, i),
              Dc(a, s);
            var u = Dc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                c = l[s + 1];
              d === "style"
                ? Z0(o, c)
                : d === "dangerouslySetInnerHTML"
                ? Y0(o, c)
                : d === "children"
                ? Yi(o, c)
                : cf(o, d, c, u);
            }
            switch (a) {
              case "input":
                Ac(o, i);
                break;
              case "textarea":
                X0(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Ao(o, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ao(o, !!i.multiple, i.defaultValue, !0)
                      : Ao(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[is] = i;
          } catch (S) {
            De(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((an(t, e), yn(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (S) {
          De(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (an(t, e), yn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          es(t.containerInfo);
        } catch (S) {
          De(e, e.return, S);
        }
      break;
    case 4:
      an(t, e), yn(e);
      break;
    case 13:
      an(t, e),
        yn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Uf = ze())),
        r & 4 && hm(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ft = (u = ft) || d), an(t, e), (ft = u)) : an(t, e),
        yn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (B = e, d = e.child; d !== null; ) {
            for (c = B = d; B !== null; ) {
              switch (((f = B), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ni(4, f, f.return);
                  break;
                case 1:
                  ko(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (S) {
                      De(r, n, S);
                    }
                  }
                  break;
                case 5:
                  ko(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    gm(c);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (B = y)) : gm(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = q0("display", s)));
              } catch (S) {
                De(e, e.return, S);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (S) {
                De(e, e.return, S);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      an(t, e), yn(e), r & 4 && hm(e);
      break;
    case 21:
      break;
    default:
      an(t, e), yn(e);
  }
}
function yn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yi(o, ""), (r.flags &= -33));
          var i = pm(e);
          fd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = pm(e);
          dd(e, a, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      De(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function D2(e, t, n) {
  (B = e), Ev(e);
}
function Ev(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Js;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || ft;
        a = Js;
        var u = ft;
        if (((Js = s), (ft = l) && !u))
          for (B = o; B !== null; )
            (s = B),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ym(o)
                : l !== null
                ? ((l.return = s), (B = l))
                : ym(o);
        for (; i !== null; ) (B = i), Ev(i), (i = i.sibling);
        (B = o), (Js = a), (ft = u);
      }
      mm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (B = i)) : mm(e);
  }
}
function mm(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ft || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ft)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ln(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Jh(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Jh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && es(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        ft || (t.flags & 512 && cd(t));
      } catch (f) {
        De(t, t.return, f);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function gm(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function ym(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (l) {
            De(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              De(t, o, l);
            }
          }
          var i = t.return;
          try {
            cd(t);
          } catch (l) {
            De(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            cd(t);
          } catch (l) {
            De(t, s, l);
          }
      }
    } catch (l) {
      De(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (B = a);
      break;
    }
    B = t.return;
  }
}
var F2 = Math.ceil,
  qa = er.ReactCurrentDispatcher,
  Vf = er.ReactCurrentOwner,
  tn = er.ReactCurrentBatchConfig,
  re = 0,
  Qe = null,
  We = null,
  it = 0,
  jt = 0,
  Po = Tr(0),
  Ke = 0,
  ds = null,
  Zr = 0,
  Al = 0,
  Bf = 0,
  zi = null,
  Ct = null,
  Uf = 0,
  Ho = 1 / 0,
  $n = null,
  Za = !1,
  pd = null,
  yr = null,
  ea = !1,
  dr = null,
  Ja = 0,
  Vi = 0,
  hd = null,
  wa = -1,
  Ca = 0;
function vt() {
  return re & 6 ? ze() : wa !== -1 ? wa : (wa = ze());
}
function vr(e) {
  return e.mode & 1
    ? re & 2 && it !== 0
      ? it & -it
      : S2.transition !== null
      ? (Ca === 0 && (Ca = cy()), Ca)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yy(e.type))),
        e)
    : 1;
}
function pn(e, t, n, r) {
  if (50 < Vi) throw ((Vi = 0), (hd = null), Error(I(185)));
  ks(e, n, r),
    (!(re & 2) || e !== Qe) &&
      (e === Qe && (!(re & 2) && (Al |= n), Ke === 4 && ur(e, it)),
      Tt(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((Ho = ze() + 500), Tl && Rr()));
}
function Tt(e, t) {
  var n = e.callbackNode;
  Sw(e, t);
  var r = Da(e, e === Qe ? it : 0);
  if (r === 0)
    n !== null && Eh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eh(n), t === 1))
      e.tag === 0 ? x2(vm.bind(null, e)) : Dy(vm.bind(null, e)),
        m2(function () {
          !(re & 6) && Rr();
        }),
        (n = null);
    else {
      switch (dy(r)) {
        case 1:
          n = mf;
          break;
        case 4:
          n = ly;
          break;
        case 16:
          n = $a;
          break;
        case 536870912:
          n = uy;
          break;
        default:
          n = $a;
      }
      n = Lv(n, Tv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Tv(e, t) {
  if (((wa = -1), (Ca = 0), re & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Do() && e.callbackNode !== n) return null;
  var r = Da(e, e === Qe ? it : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = Mv();
    (Qe !== e || it !== t) && (($n = null), (Ho = ze() + 500), Kr(e, t));
    do
      try {
        z2();
        break;
      } catch (a) {
        Rv(e, a);
      }
    while (!0);
    Rf(),
      (qa.current = i),
      (re = o),
      We !== null ? (t = 0) : ((Qe = null), (it = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Vc(e)), o !== 0 && ((r = o), (t = md(e, o)))), t === 1)
    )
      throw ((n = ds), Kr(e, 0), ur(e, r), Tt(e, ze()), n);
    if (t === 6) ur(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !_2(o) &&
          ((t = el(e, r)),
          t === 2 && ((i = Vc(e)), i !== 0 && ((r = i), (t = md(e, i)))),
          t === 1))
      )
        throw ((n = ds), Kr(e, 0), ur(e, r), Tt(e, ze()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          $r(e, Ct, $n);
          break;
        case 3:
          if (
            (ur(e, r), (r & 130023424) === r && ((t = Uf + 500 - ze()), 10 < t))
          ) {
            if (Da(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              vt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Qc($r.bind(null, e, Ct, $n), t);
            break;
          }
          $r(e, Ct, $n);
          break;
        case 4:
          if ((ur(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - fn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ze() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * F2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qc($r.bind(null, e, Ct, $n), r);
            break;
          }
          $r(e, Ct, $n);
          break;
        case 5:
          $r(e, Ct, $n);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Tt(e, ze()), e.callbackNode === n ? Tv.bind(null, e) : null;
}
function md(e, t) {
  var n = zi;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = el(e, t)),
    e !== 2 && ((t = Ct), (Ct = n), t !== null && gd(t)),
    e
  );
}
function gd(e) {
  Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
}
function _2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!hn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ur(e, t) {
  for (
    t &= ~Bf,
      t &= ~Al,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - fn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vm(e) {
  if (re & 6) throw Error(I(327));
  Do();
  var t = Da(e, 0);
  if (!(t & 1)) return Tt(e, ze()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vc(e);
    r !== 0 && ((t = r), (n = md(e, r)));
  }
  if (n === 1) throw ((n = ds), Kr(e, 0), ur(e, t), Tt(e, ze()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $r(e, Ct, $n),
    Tt(e, ze()),
    null
  );
}
function Wf(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    (re = n), re === 0 && ((Ho = ze() + 500), Tl && Rr());
  }
}
function Jr(e) {
  dr !== null && dr.tag === 0 && !(re & 6) && Do();
  var t = re;
  re |= 1;
  var n = tn.transition,
    r = ue;
  try {
    if (((tn.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (tn.transition = n), (re = t), !(re & 6) && Rr();
  }
}
function Hf() {
  (jt = Po.current), ke(Po);
}
function Kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), h2(n)), We !== null))
    for (n = We.return; n !== null; ) {
      var r = n;
      switch ((Pf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Va();
          break;
        case 3:
          Uo(), ke(Pt), ke(gt), Lf();
          break;
        case 5:
          Of(r);
          break;
        case 4:
          Uo();
          break;
        case 13:
          ke(Me);
          break;
        case 19:
          ke(Me);
          break;
        case 10:
          Mf(r.type._context);
          break;
        case 22:
        case 23:
          Hf();
      }
      n = n.return;
    }
  if (
    ((Qe = e),
    (We = e = xr(e.current, null)),
    (it = jt = t),
    (Ke = 0),
    (ds = null),
    (Bf = Al = Zr = 0),
    (Ct = zi = null),
    Vr !== null)
  ) {
    for (t = 0; t < Vr.length; t++)
      if (((n = Vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Vr = null;
  }
  return e;
}
function Rv(e, t) {
  do {
    var n = We;
    try {
      if ((Rf(), (va.current = Ya), Qa)) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Qa = !1;
      }
      if (
        ((qr = 0),
        (Xe = He = Ae = null),
        (_i = !1),
        (ls = 0),
        (Vf.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (ds = t), (We = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = it),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = im(s);
          if (y !== null) {
            (y.flags &= -257),
              sm(y, s, a, i, t),
              y.mode & 1 && om(i, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var S = new Set();
              S.add(l), (t.updateQueue = S);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              om(i, u, t), Kf();
              break e;
            }
            l = Error(I(426));
          }
        } else if (Re && a.mode & 1) {
          var b = im(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              sm(b, s, a, i, t),
              Ef(Wo(l, a));
            break e;
          }
        }
        (i = l = Wo(l, a)),
          Ke !== 4 && (Ke = 2),
          zi === null ? (zi = [i]) : zi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = dv(i, l, t);
              Zh(i, m);
              break e;
            case 1:
              a = l;
              var g = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (yr === null || !yr.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = fv(i, a, t);
                Zh(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Av(n);
    } catch (k) {
      (t = k), We === n && n !== null && (We = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mv() {
  var e = qa.current;
  return (qa.current = Ya), e === null ? Ya : e;
}
function Kf() {
  (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
    Qe === null || (!(Zr & 268435455) && !(Al & 268435455)) || ur(Qe, it);
}
function el(e, t) {
  var n = re;
  re |= 2;
  var r = Mv();
  (Qe !== e || it !== t) && (($n = null), Kr(e, t));
  do
    try {
      N2();
      break;
    } catch (o) {
      Rv(e, o);
    }
  while (!0);
  if ((Rf(), (re = n), (qa.current = r), We !== null)) throw Error(I(261));
  return (Qe = null), (it = 0), Ke;
}
function N2() {
  for (; We !== null; ) jv(We);
}
function z2() {
  for (; We !== null && !dw(); ) jv(We);
}
function jv(e) {
  var t = Ov(e.alternate, e, jt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Av(e) : (We = t),
    (Vf.current = null);
}
function Av(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = O2(n, t)), n !== null)) {
        (n.flags &= 32767), (We = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ke = 6), (We = null);
        return;
      }
    } else if (((n = I2(n, t, jt)), n !== null)) {
      We = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      We = t;
      return;
    }
    We = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function $r(e, t, n) {
  var r = ue,
    o = tn.transition;
  try {
    (tn.transition = null), (ue = 1), V2(e, t, n, r);
  } finally {
    (tn.transition = o), (ue = r);
  }
  return null;
}
function V2(e, t, n, r) {
  do Do();
  while (dr !== null);
  if (re & 6) throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ww(e, i),
    e === Qe && ((We = Qe = null), (it = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ea ||
      ((ea = !0),
      Lv($a, function () {
        return Do(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = tn.transition), (tn.transition = null);
    var s = ue;
    ue = 1;
    var a = re;
    (re |= 4),
      (Vf.current = null),
      $2(e, n),
      Pv(n, e),
      a2(Gc),
      (Fa = !!Kc),
      (Gc = Kc = null),
      (e.current = n),
      D2(n),
      fw(),
      (re = a),
      (ue = s),
      (tn.transition = i);
  } else e.current = n;
  if (
    (ea && ((ea = !1), (dr = e), (Ja = o)),
    (i = e.pendingLanes),
    i === 0 && (yr = null),
    mw(n.stateNode),
    Tt(e, ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Za) throw ((Za = !1), (e = pd), (pd = null), e);
  return (
    Ja & 1 && e.tag !== 0 && Do(),
    (i = e.pendingLanes),
    i & 1 ? (e === hd ? Vi++ : ((Vi = 0), (hd = e))) : (Vi = 0),
    Rr(),
    null
  );
}
function Do() {
  if (dr !== null) {
    var e = dy(Ja),
      t = tn.transition,
      n = ue;
    try {
      if (((tn.transition = null), (ue = 16 > e ? 16 : e), dr === null))
        var r = !1;
      else {
        if (((e = dr), (dr = null), (Ja = 0), re & 6)) throw Error(I(331));
        var o = re;
        for (re |= 4, B = e.current; B !== null; ) {
          var i = B,
            s = i.child;
          if (B.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (B = u; B !== null; ) {
                  var d = B;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ni(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (B = c);
                  else
                    for (; B !== null; ) {
                      d = B;
                      var f = d.sibling,
                        y = d.return;
                      if ((Cv(d), d === u)) {
                        B = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (B = f);
                        break;
                      }
                      B = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var b = S.sibling;
                    (S.sibling = null), (S = b);
                  } while (S !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (B = s);
          else
            e: for (; B !== null; ) {
              if (((i = B), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ni(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (B = m);
                break e;
              }
              B = i.return;
            }
        }
        var g = e.current;
        for (B = g; B !== null; ) {
          s = B;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (B = p);
          else
            e: for (s = g; B !== null; ) {
              if (((a = B), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, a);
                  }
                } catch (k) {
                  De(a, a.return, k);
                }
              if (a === s) {
                B = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (B = w);
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((re = o), Rr(), En && typeof En.onPostCommitFiberRoot == "function")
        )
          try {
            En.onPostCommitFiberRoot(Cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (tn.transition = t);
    }
  }
  return !1;
}
function xm(e, t, n) {
  (t = Wo(n, t)),
    (t = dv(e, t, 1)),
    (e = gr(e, t, 1)),
    (t = vt()),
    e !== null && (ks(e, 1, t), Tt(e, t));
}
function De(e, t, n) {
  if (e.tag === 3) xm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yr === null || !yr.has(r)))
        ) {
          (e = Wo(n, e)),
            (e = fv(t, e, 1)),
            (t = gr(t, e, 1)),
            (e = vt()),
            t !== null && (ks(t, 1, e), Tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function B2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = vt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Qe === e &&
      (it & n) === n &&
      (Ke === 4 || (Ke === 3 && (it & 130023424) === it && 500 > ze() - Uf)
        ? Kr(e, 0)
        : (Bf |= n)),
    Tt(e, t);
}
function Iv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ws), (Ws <<= 1), !(Ws & 130023424) && (Ws = 4194304))
      : (t = 1));
  var n = vt();
  (e = Xn(e, t)), e !== null && (ks(e, t, n), Tt(e, n));
}
function U2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Iv(e, n);
}
function W2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Iv(e, n);
}
var Ov;
Ov = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (kt = !1), A2(e, t, n);
      kt = !!(e.flags & 131072);
    }
  else (kt = !1), Re && t.flags & 1048576 && Fy(t, Wa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Sa(e, t), (e = t.pendingProps);
      var o = zo(t, gt.current);
      $o(t, n), (o = Df(null, t, r, e, o, n));
      var i = Ff();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Et(r) ? ((i = !0), Ba(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Af(t),
            (o.updater = Ml),
            (t.stateNode = o),
            (o._reactInternals = t),
            nd(t, r, e, n),
            (t = id(null, t, r, !0, i, n)))
          : ((t.tag = 0), Re && i && kf(t), yt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Sa(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = K2(r)),
          (e = ln(r, e)),
          o)
        ) {
          case 0:
            t = od(null, t, r, e, n);
            break e;
          case 1:
            t = um(null, t, r, e, n);
            break e;
          case 11:
            t = am(null, t, r, e, n);
            break e;
          case 14:
            t = lm(null, t, r, ln(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        od(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        um(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((gv(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Uy(e, t),
          Ga(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wo(Error(I(423)), t)), (t = cm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Wo(Error(I(424)), t)), (t = cm(e, t, r, n, o));
            break e;
          } else
            for (
              It = mr(t.stateNode.containerInfo.firstChild),
                Ot = t,
                Re = !0,
                cn = null,
                n = Vy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Vo(), r === o)) {
            t = Qn(e, t, n);
            break e;
          }
          yt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wy(t),
        e === null && Jc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Xc(r, o) ? (s = null) : i !== null && Xc(r, i) && (t.flags |= 32),
        mv(e, t),
        yt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Jc(t), null;
    case 13:
      return yv(e, t, n);
    case 4:
      return (
        If(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bo(t, null, r, n)) : yt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        am(e, t, r, o, n)
      );
    case 7:
      return yt(e, t, t.pendingProps, n), t.child;
    case 8:
      return yt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return yt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ve(Ha, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (hn(i.value, s)) {
            if (i.children === o.children && !Pt.current) {
              t = Qn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = zn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      ed(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(I(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ed(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        yt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $o(t, n),
        (o = nn(o)),
        (r = r(o)),
        (t.flags |= 1),
        yt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ln(r, t.pendingProps)),
        (o = ln(r.type, o)),
        lm(e, t, r, o, n)
      );
    case 15:
      return pv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ln(r, o)),
        Sa(e, t),
        (t.tag = 1),
        Et(r) ? ((e = !0), Ba(t)) : (e = !1),
        $o(t, n),
        cv(t, r, o),
        nd(t, r, o, n),
        id(null, t, r, !0, e, n)
      );
    case 19:
      return vv(e, t, n);
    case 22:
      return hv(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Lv(e, t) {
  return ay(e, t);
}
function H2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function en(e, t, n, r) {
  return new H2(e, t, n, r);
}
function Gf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K2(e) {
  if (typeof e == "function") return Gf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ff)) return 11;
    if (e === pf) return 14;
  }
  return 2;
}
function xr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = en(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ba(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Gf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case mo:
        return Gr(n.children, o, i, t);
      case df:
        (s = 8), (o |= 8);
        break;
      case Ec:
        return (
          (e = en(12, n, t, o | 2)), (e.elementType = Ec), (e.lanes = i), e
        );
      case Tc:
        return (e = en(13, n, t, o)), (e.elementType = Tc), (e.lanes = i), e;
      case Rc:
        return (e = en(19, n, t, o)), (e.elementType = Rc), (e.lanes = i), e;
      case W0:
        return Il(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case B0:
              s = 10;
              break e;
            case U0:
              s = 9;
              break e;
            case ff:
              s = 11;
              break e;
            case pf:
              s = 14;
              break e;
            case sr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = en(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Gr(e, t, n, r) {
  return (e = en(7, e, r, t)), (e.lanes = n), e;
}
function Il(e, t, n, r) {
  return (
    (e = en(22, e, r, t)),
    (e.elementType = W0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ju(e, t, n) {
  return (e = en(6, e, null, t)), (e.lanes = n), e;
}
function ec(e, t, n) {
  return (
    (t = en(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function G2(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Lu(0)),
    (this.expirationTimes = Lu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Lu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Xf(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new G2(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = en(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Af(i),
    e
  );
}
function X2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $v(e) {
  if (!e) return wr;
  e = e._reactInternals;
  e: {
    if (to(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Et(n)) return $y(e, n, t);
  }
  return t;
}
function Dv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Xf(n, r, !0, e, o, i, s, a, l)),
    (e.context = $v(null)),
    (n = e.current),
    (r = vt()),
    (o = vr(n)),
    (i = zn(r, o)),
    (i.callback = t ?? null),
    gr(n, i, o),
    (e.current.lanes = o),
    ks(e, o, r),
    Tt(e, r),
    e
  );
}
function Ol(e, t, n, r) {
  var o = t.current,
    i = vt(),
    s = vr(o);
  return (
    (n = $v(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = zn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gr(o, t, s)),
    e !== null && (pn(e, o, s, i), ya(e, o, s)),
    s
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qf(e, t) {
  Sm(e, t), (e = e.alternate) && Sm(e, t);
}
function Q2() {
  return null;
}
var Fv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yf(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Yf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Ol(e, t, null, null);
};
Ll.prototype.unmount = Yf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jr(function () {
      Ol(null, e, null, null);
    }),
      (t[Gn] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lr.length && t !== 0 && t < lr[n].priority; n++);
    lr.splice(n, 0, e), n === 0 && gy(e);
  }
};
function qf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wm() {}
function Y2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = tl(s);
        i.call(u);
      };
    }
    var s = Dv(t, r, e, 0, null, !1, !1, "", wm);
    return (
      (e._reactRootContainer = s),
      (e[Gn] = s.current),
      rs(e.nodeType === 8 ? e.parentNode : e),
      Jr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = tl(l);
      a.call(u);
    };
  }
  var l = Xf(e, 0, !1, null, null, !1, !1, "", wm);
  return (
    (e._reactRootContainer = l),
    (e[Gn] = l.current),
    rs(e.nodeType === 8 ? e.parentNode : e),
    Jr(function () {
      Ol(t, l, n, r);
    }),
    l
  );
}
function Dl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = tl(s);
        a.call(l);
      };
    }
    Ol(t, s, e, o);
  } else s = Y2(n, t, e, o, r);
  return tl(s);
}
fy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ei(t.pendingLanes);
        n !== 0 &&
          (gf(t, n | 1), Tt(t, ze()), !(re & 6) && ((Ho = ze() + 500), Rr()));
      }
      break;
    case 13:
      Jr(function () {
        var r = Xn(e, 1);
        if (r !== null) {
          var o = vt();
          pn(r, e, 1, o);
        }
      }),
        Qf(e, 1);
  }
};
yf = function (e) {
  if (e.tag === 13) {
    var t = Xn(e, 134217728);
    if (t !== null) {
      var n = vt();
      pn(t, e, 134217728, n);
    }
    Qf(e, 134217728);
  }
};
py = function (e) {
  if (e.tag === 13) {
    var t = vr(e),
      n = Xn(e, t);
    if (n !== null) {
      var r = vt();
      pn(n, e, t, r);
    }
    Qf(e, t);
  }
};
hy = function () {
  return ue;
};
my = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
_c = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ac(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = El(r);
            if (!o) throw Error(I(90));
            K0(r), Ac(r, o);
          }
        }
      }
      break;
    case "textarea":
      X0(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ao(e, !!n.multiple, t, !1);
  }
};
ty = Wf;
ny = Jr;
var q2 = { usingClientEntryPoint: !1, Events: [Es, xo, El, J0, ey, Wf] },
  yi = {
    findFiberByHostInstance: zr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Z2 = {
    bundleType: yi.bundleType,
    version: yi.version,
    rendererPackageName: yi.rendererPackageName,
    rendererConfig: yi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: er.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = iy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yi.findFiberByHostInstance || Q2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ta.isDisabled && ta.supportsFiber)
    try {
      (Cl = ta.inject(Z2)), (En = ta);
    } catch {}
}
Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q2;
Ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qf(t)) throw Error(I(200));
  return X2(e, t, null, n);
};
Ft.createRoot = function (e, t) {
  if (!qf(e)) throw Error(I(299));
  var n = !1,
    r = "",
    o = Fv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Xf(e, 1, !1, null, null, n, !1, r, o)),
    (e[Gn] = t.current),
    rs(e.nodeType === 8 ? e.parentNode : e),
    new Yf(t)
  );
};
Ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = iy(t)), (e = e === null ? null : e.stateNode), e;
};
Ft.flushSync = function (e) {
  return Jr(e);
};
Ft.hydrate = function (e, t, n) {
  if (!$l(t)) throw Error(I(200));
  return Dl(null, e, t, !0, n);
};
Ft.hydrateRoot = function (e, t, n) {
  if (!qf(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Fv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Dv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Gn] = t.current),
    rs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ll(t);
};
Ft.render = function (e, t, n) {
  if (!$l(t)) throw Error(I(200));
  return Dl(null, e, t, !1, n);
};
Ft.unmountComponentAtNode = function (e) {
  if (!$l(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Jr(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Gn] = null);
        });
      }),
      !0)
    : !1;
};
Ft.unstable_batchedUpdates = Wf;
Ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$l(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Dl(e, t, n, !1, r);
};
Ft.version = "18.3.1-next-f1338f8080-20240426";
function _v() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v);
    } catch (e) {
      console.error(e);
    }
}
_v(), (_0.exports = Ft);
var Zf = _0.exports;
const na = E0(Zf);
var Nv,
  Cm = Zf;
(Nv = Cm.createRoot), Cm.hydrateRoot;
const fs = { black: "#000", white: "#fff" },
  io = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  so = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  ao = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  lo = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  uo = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  vi = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  J2 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function Yn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Rs = "$$material";
function nl() {
  return (
    (nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nl.apply(null, arguments)
  );
}
function zv(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var eC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  tC = zv(function (e) {
    return (
      eC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  nC = !1;
function rC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function oC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var iC = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !nC : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(oC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = rC(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ct = "-ms-",
  rl = "-moz-",
  ie = "-webkit-",
  Vv = "comm",
  Jf = "rule",
  ep = "decl",
  sC = "@import",
  Bv = "@keyframes",
  aC = "@layer",
  lC = Math.abs,
  Fl = String.fromCharCode,
  uC = Object.assign;
function cC(e, t) {
  return ot(e, 0) ^ 45
    ? (((((((t << 2) ^ ot(e, 0)) << 2) ^ ot(e, 1)) << 2) ^ ot(e, 2)) << 2) ^
        ot(e, 3)
    : 0;
}
function Uv(e) {
  return e.trim();
}
function dC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, n) {
  return e.replace(t, n);
}
function yd(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function ps(e, t, n) {
  return e.slice(t, n);
}
function wn(e) {
  return e.length;
}
function tp(e) {
  return e.length;
}
function ra(e, t) {
  return t.push(e), e;
}
function fC(e, t) {
  return e.map(t).join("");
}
var _l = 1,
  Ko = 1,
  Wv = 0,
  Mt = 0,
  Ue = 0,
  ei = "";
function Nl(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: _l,
    column: Ko,
    length: s,
    return: "",
  };
}
function xi(e, t) {
  return uC(Nl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function pC() {
  return Ue;
}
function hC() {
  return (
    (Ue = Mt > 0 ? ot(ei, --Mt) : 0), Ko--, Ue === 10 && ((Ko = 1), _l--), Ue
  );
}
function Lt() {
  return (
    (Ue = Mt < Wv ? ot(ei, Mt++) : 0), Ko++, Ue === 10 && ((Ko = 1), _l++), Ue
  );
}
function Rn() {
  return ot(ei, Mt);
}
function ka() {
  return Mt;
}
function Ms(e, t) {
  return ps(ei, e, t);
}
function hs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hv(e) {
  return (_l = Ko = 1), (Wv = wn((ei = e))), (Mt = 0), [];
}
function Kv(e) {
  return (ei = ""), e;
}
function Pa(e) {
  return Uv(Ms(Mt - 1, vd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mC(e) {
  for (; (Ue = Rn()) && Ue < 33; ) Lt();
  return hs(e) > 2 || hs(Ue) > 3 ? "" : " ";
}
function gC(e, t) {
  for (
    ;
    --t &&
    Lt() &&
    !(Ue < 48 || Ue > 102 || (Ue > 57 && Ue < 65) || (Ue > 70 && Ue < 97));

  );
  return Ms(e, ka() + (t < 6 && Rn() == 32 && Lt() == 32));
}
function vd(e) {
  for (; Lt(); )
    switch (Ue) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vd(Ue);
        break;
      case 40:
        e === 41 && vd(e);
        break;
      case 92:
        Lt();
        break;
    }
  return Mt;
}
function yC(e, t) {
  for (; Lt() && e + Ue !== 57; ) if (e + Ue === 84 && Rn() === 47) break;
  return "/*" + Ms(t, Mt - 1) + "*" + Fl(e === 47 ? e : Lt());
}
function vC(e) {
  for (; !hs(Rn()); ) Lt();
  return Ms(e, Mt);
}
function xC(e) {
  return Kv(Ea("", null, null, null, [""], (e = Hv(e)), 0, [0], e));
}
function Ea(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      d = 0,
      c = s,
      f = 0,
      y = 0,
      v = 0,
      S = 1,
      b = 1,
      m = 1,
      g = 0,
      p = "",
      w = o,
      k = i,
      P = r,
      E = p;
    b;

  )
    switch (((v = g), (g = Lt()))) {
      case 40:
        if (v != 108 && ot(E, c - 1) == 58) {
          yd((E += se(Pa(g), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Pa(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += mC(v);
        break;
      case 92:
        E += gC(ka() - 1, 7);
        continue;
      case 47:
        switch (Rn()) {
          case 42:
          case 47:
            ra(SC(yC(Lt(), ka()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * S:
        a[u++] = wn(E) * m;
      case 125 * S:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            m == -1 && (E = se(E, /\f/g, "")),
              y > 0 &&
                wn(E) - c &&
                ra(
                  y > 32
                    ? km(E + ";", r, n, c - 1)
                    : km(se(E, " ", "") + ";", r, n, c - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (ra((P = bm(E, t, n, u, d, o, a, p, (w = []), (k = []), c)), i),
              g === 123)
            )
              if (d === 0) Ea(E, t, P, P, w, i, c, a, k);
              else
                switch (f === 99 && ot(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ea(
                      e,
                      P,
                      P,
                      r && ra(bm(e, P, P, 0, 0, o, a, p, o, (w = []), c), k),
                      o,
                      k,
                      c,
                      a,
                      r ? w : k
                    );
                    break;
                  default:
                    Ea(E, P, P, P, [""], k, 0, a, k);
                }
        }
        (u = d = y = 0), (S = m = 1), (p = E = ""), (c = s);
        break;
      case 58:
        (c = 1 + wn(E)), (y = v);
      default:
        if (S < 1) {
          if (g == 123) --S;
          else if (g == 125 && S++ == 0 && hC() == 125) continue;
        }
        switch (((E += Fl(g)), g * S)) {
          case 38:
            m = d > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (wn(E) - 1) * m), (m = 1);
            break;
          case 64:
            Rn() === 45 && (E += Pa(Lt())),
              (f = Rn()),
              (d = c = wn((p = E += vC(ka())))),
              g++;
            break;
          case 45:
            v === 45 && wn(E) == 2 && (S = 0);
        }
    }
  return i;
}
function bm(e, t, n, r, o, i, s, a, l, u, d) {
  for (
    var c = o - 1, f = o === 0 ? i : [""], y = tp(f), v = 0, S = 0, b = 0;
    v < r;
    ++v
  )
    for (var m = 0, g = ps(e, c + 1, (c = lC((S = s[v])))), p = e; m < y; ++m)
      (p = Uv(S > 0 ? f[m] + " " + g : se(g, /&\f/g, f[m]))) && (l[b++] = p);
  return Nl(e, t, n, o === 0 ? Jf : a, l, u, d);
}
function SC(e, t, n) {
  return Nl(e, t, n, Vv, Fl(pC()), ps(e, 2, -2), 0);
}
function km(e, t, n, r) {
  return Nl(e, t, n, ep, ps(e, 0, r), ps(e, r + 1, -1), r);
}
function Fo(e, t) {
  for (var n = "", r = tp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function wC(e, t, n, r) {
  switch (e.type) {
    case aC:
      if (e.children.length) break;
    case sC:
    case ep:
      return (e.return = e.return || e.value);
    case Vv:
      return "";
    case Bv:
      return (e.return = e.value + "{" + Fo(e.children, r) + "}");
    case Jf:
      e.value = e.props.join(",");
  }
  return wn((n = Fo(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function CC(e) {
  var t = tp(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function bC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var kC = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Rn()), o === 38 && i === 12 && (n[r] = 1), !hs(i);

    )
      Lt();
    return Ms(t, Mt);
  },
  PC = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (hs(o)) {
        case 0:
          o === 38 && Rn() === 12 && (n[r] = 1), (t[r] += kC(Mt - 1, n, r));
          break;
        case 2:
          t[r] += Pa(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Rn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Fl(o);
      }
    while ((o = Lt()));
    return t;
  },
  EC = function (t, n) {
    return Kv(PC(Hv(t), n));
  },
  Pm = new WeakMap(),
  TC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Pm.get(r)) &&
        !o
      ) {
        Pm.set(t, !0);
        for (
          var i = [], s = EC(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var d = 0; d < a.length; d++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l];
      }
    }
  },
  RC = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Gv(e, t) {
  switch (cC(e, t)) {
    case 5103:
      return ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e + rl + e + ct + e + e;
    case 6828:
    case 4268:
      return ie + e + ct + e + e;
    case 6165:
      return ie + e + ct + "flex-" + e + e;
    case 5187:
      return (
        ie + e + se(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + ct + "flex-$1$2") + e
      );
    case 5443:
      return ie + e + ct + "flex-item-" + se(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        ie +
        e +
        ct +
        "flex-line-pack" +
        se(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return ie + e + ct + se(e, "shrink", "negative") + e;
    case 5292:
      return ie + e + ct + se(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ie +
        "box-" +
        se(e, "-grow", "") +
        ie +
        e +
        ct +
        se(e, "grow", "positive") +
        e
      );
    case 4554:
      return ie + se(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
    case 6187:
      return (
        se(
          se(se(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return (
        se(
          se(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + ct + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ie +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (wn(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45) break;
          case 102:
            return (
              se(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ie +
                  "$2-$3$1" +
                  rl +
                  (ot(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~yd(e, "stretch")
              ? Gv(se(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115) break;
    case 6444:
      switch (ot(e, wn(e) - 3 - (~yd(e, "!important") && 10))) {
        case 107:
          return se(e, ":", ":" + ie) + e;
        case 101:
          return (
            se(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ie +
                (ot(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ie +
                "$2$3$1" +
                ct +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return ie + e + ct + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ie + e + ct + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ie + e + ct + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ie + e + ct + e + e;
  }
  return e;
}
var MC = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case ep:
          t.return = Gv(t.value, t.length);
          break;
        case Bv:
          return Fo([xi(t, { value: se(t.value, "@", "@" + ie) })], o);
        case Jf:
          if (t.length)
            return fC(t.props, function (i) {
              switch (dC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Fo(
                    [xi(t, { props: [se(i, /:(read-\w+)/, ":" + rl + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Fo(
                    [
                      xi(t, {
                        props: [se(i, /:(plac\w+)/, ":" + ie + "input-$1")],
                      }),
                      xi(t, { props: [se(i, /:(plac\w+)/, ":" + rl + "$1")] }),
                      xi(t, { props: [se(i, /:(plac\w+)/, ct + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  jC = [MC],
  AC = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (S) {
        var b = S.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(S), S.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || jC,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (S) {
          for (
            var b = S.getAttribute("data-emotion").split(" "), m = 1;
            m < b.length;
            m++
          )
            i[b[m]] = !0;
          a.push(S);
        }
      );
    var l,
      u = [TC, RC];
    {
      var d,
        c = [
          wC,
          bC(function (S) {
            d.insert(S);
          }),
        ],
        f = CC(u.concat(o, c)),
        y = function (b) {
          return Fo(xC(b), f);
        };
      l = function (b, m, g, p) {
        (d = g),
          y(b ? b + "{" + m.styles + "}" : m.styles),
          p && (v.inserted[m.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new iC({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return v.sheet.hydrate(a), v;
  },
  Xv = { exports: {} },
  ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ye = typeof Symbol == "function" && Symbol.for,
  np = Ye ? Symbol.for("react.element") : 60103,
  rp = Ye ? Symbol.for("react.portal") : 60106,
  zl = Ye ? Symbol.for("react.fragment") : 60107,
  Vl = Ye ? Symbol.for("react.strict_mode") : 60108,
  Bl = Ye ? Symbol.for("react.profiler") : 60114,
  Ul = Ye ? Symbol.for("react.provider") : 60109,
  Wl = Ye ? Symbol.for("react.context") : 60110,
  op = Ye ? Symbol.for("react.async_mode") : 60111,
  Hl = Ye ? Symbol.for("react.concurrent_mode") : 60111,
  Kl = Ye ? Symbol.for("react.forward_ref") : 60112,
  Gl = Ye ? Symbol.for("react.suspense") : 60113,
  IC = Ye ? Symbol.for("react.suspense_list") : 60120,
  Xl = Ye ? Symbol.for("react.memo") : 60115,
  Ql = Ye ? Symbol.for("react.lazy") : 60116,
  OC = Ye ? Symbol.for("react.block") : 60121,
  LC = Ye ? Symbol.for("react.fundamental") : 60117,
  $C = Ye ? Symbol.for("react.responder") : 60118,
  DC = Ye ? Symbol.for("react.scope") : 60119;
function Nt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case np:
        switch (((e = e.type), e)) {
          case op:
          case Hl:
          case zl:
          case Bl:
          case Vl:
          case Gl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Wl:
              case Kl:
              case Ql:
              case Xl:
              case Ul:
                return e;
              default:
                return t;
            }
        }
      case rp:
        return t;
    }
  }
}
function Qv(e) {
  return Nt(e) === Hl;
}
ce.AsyncMode = op;
ce.ConcurrentMode = Hl;
ce.ContextConsumer = Wl;
ce.ContextProvider = Ul;
ce.Element = np;
ce.ForwardRef = Kl;
ce.Fragment = zl;
ce.Lazy = Ql;
ce.Memo = Xl;
ce.Portal = rp;
ce.Profiler = Bl;
ce.StrictMode = Vl;
ce.Suspense = Gl;
ce.isAsyncMode = function (e) {
  return Qv(e) || Nt(e) === op;
};
ce.isConcurrentMode = Qv;
ce.isContextConsumer = function (e) {
  return Nt(e) === Wl;
};
ce.isContextProvider = function (e) {
  return Nt(e) === Ul;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === np;
};
ce.isForwardRef = function (e) {
  return Nt(e) === Kl;
};
ce.isFragment = function (e) {
  return Nt(e) === zl;
};
ce.isLazy = function (e) {
  return Nt(e) === Ql;
};
ce.isMemo = function (e) {
  return Nt(e) === Xl;
};
ce.isPortal = function (e) {
  return Nt(e) === rp;
};
ce.isProfiler = function (e) {
  return Nt(e) === Bl;
};
ce.isStrictMode = function (e) {
  return Nt(e) === Vl;
};
ce.isSuspense = function (e) {
  return Nt(e) === Gl;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === zl ||
    e === Hl ||
    e === Bl ||
    e === Vl ||
    e === Gl ||
    e === IC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ql ||
        e.$$typeof === Xl ||
        e.$$typeof === Ul ||
        e.$$typeof === Wl ||
        e.$$typeof === Kl ||
        e.$$typeof === LC ||
        e.$$typeof === $C ||
        e.$$typeof === DC ||
        e.$$typeof === OC))
  );
};
ce.typeOf = Nt;
Xv.exports = ce;
var FC = Xv.exports,
  Yv = FC,
  _C = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  NC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  qv = {};
qv[Yv.ForwardRef] = _C;
qv[Yv.Memo] = NC;
var zC = !0;
function VC(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Zv = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || zC === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Jv = function (t, n, r) {
    Zv(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function BC(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var UC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  WC = !1,
  HC = /[A-Z]|^ms/g,
  KC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  e1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Em = function (t) {
    return t != null && typeof t != "boolean";
  },
  tc = zv(function (e) {
    return e1(e) ? e : e.replace(HC, "-$&").toLowerCase();
  }),
  Tm = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(KC, function (r, o, i) {
            return (Cn = { name: o, styles: i, next: Cn }), o;
          });
    }
    return UC[t] !== 1 && !e1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  GC =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ms(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return (Cn = { name: o.name, styles: o.styles, next: Cn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (Cn = { name: s.name, styles: s.styles, next: Cn }), (s = s.next);
        var a = i.styles + ";";
        return a;
      }
      return XC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Cn,
          u = n(e);
        return (Cn = l), ms(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null) return d;
  var c = t[d];
  return c !== void 0 ? c : d;
}
function XC(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ms(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : Em(a) && (r += tc(i) + ":" + Tm(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && WC) throw new Error(GC);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            Em(s[l]) && (r += tc(i) + ":" + Tm(i, s[l]) + ";");
        else {
          var u = ms(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += tc(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Rm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Cn;
function ip(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  Cn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += ms(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += ms(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  Rm.lastIndex = 0;
  for (var u = "", d; (d = Rm.exec(o)) !== null; ) u += "-" + d[1];
  var c = BC(o) + u;
  return { name: c, styles: o, next: Cn };
}
var QC = function (t) {
    return t();
  },
  t1 = kc.useInsertionEffect ? kc.useInsertionEffect : !1,
  YC = t1 || QC,
  Mm = t1 || C.useLayoutEffect,
  n1 = C.createContext(typeof HTMLElement < "u" ? AC({ key: "css" }) : null);
n1.Provider;
var r1 = function (t) {
    return C.forwardRef(function (n, r) {
      var o = C.useContext(n1);
      return t(n, o, r);
    });
  },
  sp = C.createContext({}),
  qC = r1(function (e, t) {
    var n = e.styles,
      r = ip([n], void 0, C.useContext(sp)),
      o = C.useRef();
    return (
      Mm(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      Mm(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && Jv(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function ap() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ip(t);
}
var js = function () {
    var t = ap.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  ZC = tC,
  JC = function (t) {
    return t !== "theme";
  },
  jm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? ZC : JC;
  },
  Am = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  eb = !1,
  tb = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Zv(n, r, o),
      YC(function () {
        return Jv(n, r, o);
      }),
      null
    );
  },
  nb = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Am(t, n, r),
      l = a || jm(o),
      u = !l("as");
    return function () {
      var d = arguments,
        c =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && c.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        c.push.apply(c, d);
      else {
        c.push(d[0][0]);
        for (var f = d.length, y = 1; y < f; y++) c.push(d[y], d[0][y]);
      }
      var v = r1(function (S, b, m) {
        var g = (u && S.as) || o,
          p = "",
          w = [],
          k = S;
        if (S.theme == null) {
          k = {};
          for (var P in S) k[P] = S[P];
          k.theme = C.useContext(sp);
        }
        typeof S.className == "string"
          ? (p = VC(b.registered, w, S.className))
          : S.className != null && (p = S.className + " ");
        var E = ip(c.concat(w), b.registered, k);
        (p += b.key + "-" + E.name), s !== void 0 && (p += " " + s);
        var R = u && a === void 0 ? jm(g) : l,
          x = {};
        for (var T in S) (u && T === "as") || (R(T) && (x[T] = S[T]));
        return (
          (x.className = p),
          m && (x.ref = m),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(tb, {
              cache: b,
              serialized: E,
              isStringTag: typeof g == "string",
            }),
            C.createElement(g, x)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = c),
        (v.__emotion_forwardProp = a),
        Object.defineProperty(v, "toString", {
          value: function () {
            return s === void 0 && eb ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (v.withComponent = function (S, b) {
          return e(S, nl({}, n, b, { shouldForwardProp: Am(v, b, !0) })).apply(
            void 0,
            c
          );
        }),
        v
      );
    };
  },
  rb = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  xd = nb.bind();
rb.forEach(function (e) {
  xd[e] = xd(e);
});
function ob(e) {
  return e == null || Object.keys(e).length === 0;
}
function ib(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(ob(o) ? n : o) : t;
  return h.jsx(qC, { styles: r });
}
/**
 * @mui/styled-engine v6.0.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function o1(e, t) {
  return xd(e, t);
}
const sb = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function kn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function i1(e) {
  if (!kn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = i1(e[n]);
    }),
    t
  );
}
function ht(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e;
  return (
    kn(e) &&
      kn(t) &&
      Object.keys(t).forEach((o) => {
        kn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && kn(e[o])
          ? (r[o] = ht(e[o], t[o], n))
          : n.clone
          ? (r[o] = kn(t[o]) ? i1(t[o]) : t[o])
          : (r[o] = t[o]);
      }),
    r
  );
}
const ab = (e) => {
  const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
  return (
    t.sort((n, r) => n.val - r.val),
    t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
  );
};
function lb(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
      ...o
    } = e,
    i = ab(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, y) {
    const v = s.indexOf(y);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : y) - r / 100
    }${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function c(f) {
    const y = s.indexOf(f);
    return y === 0
      ? a(s[1])
      : y === s.length - 1
      ? l(s[y])
      : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: d,
    not: c,
    unit: n,
    ...o,
  };
}
function ub(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t)
    .filter((r) => r.startsWith("@container"))
    .sort((r, o) => {
      var s, a;
      const i = /min-width:\s*([0-9.]+)/;
      return (
        +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) -
        +(((a = o.match(i)) == null ? void 0 : a[1]) || 0)
      );
    });
  return n.length
    ? n.reduce(
        (r, o) => {
          const i = t[o];
          return delete r[o], (r[o] = i), r;
        },
        { ...t }
      )
    : t;
}
function cb(e, t) {
  return (
    t === "@" ||
    (t.startsWith("@") &&
      (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
  );
}
function db(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n,
    i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function fb(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    (i.up = (...a) => t(e.breakpoints.up(...a), s)),
      (i.down = (...a) => t(e.breakpoints.down(...a), s)),
      (i.between = (...a) => t(e.breakpoints.between(...a), s)),
      (i.only = (...a) => t(e.breakpoints.only(...a), s)),
      (i.not = (...a) => {
        const l = t(e.breakpoints.not(...a), s);
        return l.includes("not all and")
          ? l
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : l;
      });
  }
  const r = {},
    o = (i) => (n(r, i), r);
  return n(o), { ...e, containerQueries: o };
}
const pb = { borderRadius: 4 };
function Bi(e, t) {
  return t ? ht(e, t, { clone: !1 }) : e;
}
const Yl = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Im = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Yl[e]}px)`,
  },
  hb = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == "number" ? t : Yl[t] || t;
        return (
          typeof n == "number" && (n = `${n}px`),
          e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        );
      },
    }),
  };
function qn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Im;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Im;
    return Object.keys(t).reduce((s, a) => {
      if (cb(i.keys, a)) {
        const l = db(r.containerQueries ? r : hb, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(i.values || Yl).includes(a)) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function mb(e = {}) {
  var n;
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function gb(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Q(e) {
  if (typeof e != "string") throw new Error(Yn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Go(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ol(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Go(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Ve(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Go(l, r) || {};
      return qn(s, a, (c) => {
        let f = ol(u, o, c);
        return (
          c === f &&
            typeof c == "string" &&
            (f = ol(u, o, `${t}${c === "default" ? "" : Q(c)}`, c)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function yb(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const vb = { m: "margin", p: "padding" },
  xb = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Om = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Sb = yb((e) => {
    if (e.length > 2)
      if (Om[e]) e = Om[e];
      else return [e];
    const [t, n] = e.split(""),
      r = vb[t],
      o = xb[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  lp = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  up = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...lp, ...up];
function As(e, t, n, r) {
  const o = Go(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string"
    ? (i) =>
        typeof i == "string"
          ? i
          : typeof o == "string"
          ? `calc(${i} * ${o})`
          : o * i
    : Array.isArray(o)
    ? (i) => {
        if (typeof i == "string") return i;
        const s = Math.abs(i),
          a = o[s];
        return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
      }
    : typeof o == "function"
    ? o
    : () => {};
}
function cp(e) {
  return As(e, "spacing", 8);
}
function Is(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function wb(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Is(t, n)), r), {});
}
function Cb(e, t, n, r) {
  if (!t.includes(n)) return null;
  const o = Sb(n),
    i = wb(o, r),
    s = e[n];
  return qn(e, s, i);
}
function s1(e, t) {
  const n = cp(e.theme);
  return Object.keys(e)
    .map((r) => Cb(e, t, r, n))
    .reduce(Bi, {});
}
function Le(e) {
  return s1(e, lp);
}
Le.propTypes = {};
Le.filterProps = lp;
function $e(e) {
  return s1(e, up);
}
$e.propTypes = {};
$e.filterProps = up;
function a1(e = 8, t = cp({ spacing: e })) {
  if (e.mui) return e;
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((i) => {
        const s = t(i);
        return typeof s == "number" ? `${s}px` : s;
      })
      .join(" ");
  return (n.mui = !0), n;
}
function ql(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Bi(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Zt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function on(e, t) {
  return Ve({ prop: e, themeKey: "borders", transform: t });
}
const bb = on("border", Zt),
  kb = on("borderTop", Zt),
  Pb = on("borderRight", Zt),
  Eb = on("borderBottom", Zt),
  Tb = on("borderLeft", Zt),
  Rb = on("borderColor"),
  Mb = on("borderTopColor"),
  jb = on("borderRightColor"),
  Ab = on("borderBottomColor"),
  Ib = on("borderLeftColor"),
  Ob = on("outline", Zt),
  Lb = on("outlineColor"),
  Zl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = As(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Is(t, r) });
      return qn(e, e.borderRadius, n);
    }
    return null;
  };
Zl.propTypes = {};
Zl.filterProps = ["borderRadius"];
ql(bb, kb, Pb, Eb, Tb, Rb, Mb, jb, Ab, Ib, Zl, Ob, Lb);
const Jl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = As(e.theme, "spacing", 8),
      n = (r) => ({ gap: Is(t, r) });
    return qn(e, e.gap, n);
  }
  return null;
};
Jl.propTypes = {};
Jl.filterProps = ["gap"];
const eu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = As(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Is(t, r) });
    return qn(e, e.columnGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ["columnGap"];
const tu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = As(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Is(t, r) });
    return qn(e, e.rowGap, n);
  }
  return null;
};
tu.propTypes = {};
tu.filterProps = ["rowGap"];
const $b = Ve({ prop: "gridColumn" }),
  Db = Ve({ prop: "gridRow" }),
  Fb = Ve({ prop: "gridAutoFlow" }),
  _b = Ve({ prop: "gridAutoColumns" }),
  Nb = Ve({ prop: "gridAutoRows" }),
  zb = Ve({ prop: "gridTemplateColumns" }),
  Vb = Ve({ prop: "gridTemplateRows" }),
  Bb = Ve({ prop: "gridTemplateAreas" }),
  Ub = Ve({ prop: "gridArea" });
ql(Jl, eu, tu, $b, Db, Fb, _b, Nb, zb, Vb, Bb, Ub);
function _o(e, t) {
  return t === "grey" ? t : e;
}
const Wb = Ve({ prop: "color", themeKey: "palette", transform: _o }),
  Hb = Ve({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: _o,
  }),
  Kb = Ve({ prop: "backgroundColor", themeKey: "palette", transform: _o });
ql(Wb, Hb, Kb);
function At(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Gb = Ve({ prop: "width", transform: At }),
  dp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var o, i, s, a, l;
        const r =
          ((s =
            (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null
              ? void 0
              : i.values) == null
            ? void 0
            : s[n]) || Yl[n];
        return r
          ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null
              ? void 0
              : l.unit) !== "px"
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: At(n) };
      };
      return qn(e, e.maxWidth, t);
    }
    return null;
  };
dp.filterProps = ["maxWidth"];
const Xb = Ve({ prop: "minWidth", transform: At }),
  Qb = Ve({ prop: "height", transform: At }),
  Yb = Ve({ prop: "maxHeight", transform: At }),
  qb = Ve({ prop: "minHeight", transform: At });
Ve({ prop: "size", cssProperty: "width", transform: At });
Ve({ prop: "size", cssProperty: "height", transform: At });
const Zb = Ve({ prop: "boxSizing" });
ql(Gb, dp, Xb, Qb, Yb, qb, Zb);
const Os = {
  border: { themeKey: "borders", transform: Zt },
  borderTop: { themeKey: "borders", transform: Zt },
  borderRight: { themeKey: "borders", transform: Zt },
  borderBottom: { themeKey: "borders", transform: Zt },
  borderLeft: { themeKey: "borders", transform: Zt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Zt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Zl },
  color: { themeKey: "palette", transform: _o },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: _o,
  },
  backgroundColor: { themeKey: "palette", transform: _o },
  p: { style: $e },
  pt: { style: $e },
  pr: { style: $e },
  pb: { style: $e },
  pl: { style: $e },
  px: { style: $e },
  py: { style: $e },
  padding: { style: $e },
  paddingTop: { style: $e },
  paddingRight: { style: $e },
  paddingBottom: { style: $e },
  paddingLeft: { style: $e },
  paddingX: { style: $e },
  paddingY: { style: $e },
  paddingInline: { style: $e },
  paddingInlineStart: { style: $e },
  paddingInlineEnd: { style: $e },
  paddingBlock: { style: $e },
  paddingBlockStart: { style: $e },
  paddingBlockEnd: { style: $e },
  m: { style: Le },
  mt: { style: Le },
  mr: { style: Le },
  mb: { style: Le },
  ml: { style: Le },
  mx: { style: Le },
  my: { style: Le },
  margin: { style: Le },
  marginTop: { style: Le },
  marginRight: { style: Le },
  marginBottom: { style: Le },
  marginLeft: { style: Le },
  marginX: { style: Le },
  marginY: { style: Le },
  marginInline: { style: Le },
  marginInlineStart: { style: Le },
  marginInlineEnd: { style: Le },
  marginBlock: { style: Le },
  marginBlockStart: { style: Le },
  marginBlockEnd: { style: Le },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Jl },
  rowGap: { style: tu },
  columnGap: { style: eu },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: At },
  maxWidth: { style: dp },
  minWidth: { transform: At },
  height: { transform: At },
  maxHeight: { transform: At },
  minHeight: { transform: At },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function Jb(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ek(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tk() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: d, style: c } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = Go(o, u) || {};
    return c
      ? c(s)
      : qn(s, r, (v) => {
          let S = ol(f, d, v);
          return (
            v === S &&
              typeof v == "string" &&
              (S = ol(f, d, `${n}${v === "default" ? "" : Q(v)}`, v)),
            l === !1 ? S : { [l]: S }
          );
        });
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? Os;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(o);
      else if (typeof a != "object") return a;
      if (!l) return null;
      const u = mb(o.breakpoints),
        d = Object.keys(u);
      let c = u;
      return (
        Object.keys(l).forEach((f) => {
          const y = ek(l[f], o);
          if (y != null)
            if (typeof y == "object")
              if (i[f]) c = Bi(c, e(f, y, o, i));
              else {
                const v = qn({ theme: o }, y, (S) => ({ [f]: S }));
                Jb(v, y) ? (c[f] = t({ sx: y, theme: o })) : (c = Bi(c, v));
              }
            else c = Bi(c, e(f, y, o, i));
        }),
        ub(o, gb(d, c))
      );
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const ti = tk();
ti.filterProps = ["sx"];
function nk(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (
      !((r = n.colorSchemes) != null && r[e]) ||
      typeof n.getColorSchemeSelector != "function"
    )
      return {};
    let o = n.getColorSchemeSelector(e);
    return (
      (o.includes("data-") || o.includes(".")) &&
        (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
      { [o]: t }
    );
  }
  return n.palette.mode === e ? t : {};
}
function nu(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: o,
      shape: i = {},
      ...s
    } = e,
    a = lb(n),
    l = a1(o);
  let u = ht(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...r },
      spacing: l,
      shape: { ...pb, ...i },
    },
    s
  );
  return (
    (u = fb(u)),
    (u.applyStyles = nk),
    (u = t.reduce((d, c) => ht(d, c), u)),
    (u.unstable_sxConfig = {
      ...Os,
      ...(s == null ? void 0 : s.unstable_sxConfig),
    }),
    (u.unstable_sx = function (c) {
      return ti({ sx: c, theme: this });
    }),
    u
  );
}
function rk(e) {
  return Object.keys(e).length === 0;
}
function l1(e = null) {
  const t = C.useContext(sp);
  return !t || rk(t) ? e : t;
}
const ok = nu();
function ru(e = ok) {
  return l1(e);
}
function ik({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = ru(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return h.jsx(ib, { styles: o });
}
const sk = (e) => {
  var r;
  const t = { systemProps: {}, otherProps: {} },
    n =
      ((r = e == null ? void 0 : e.theme) == null
        ? void 0
        : r.unstable_sxConfig) ?? Os;
  return (
    Object.keys(e).forEach((o) => {
      n[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o]);
    }),
    t
  );
};
function u1(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: o } = sk(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return kn(a) ? { ...r, ...a } : r;
        })
      : (i = { ...r, ...t }),
    { ...o, sx: i }
  );
}
const Lm = (e) => e,
  ak = () => {
    let e = Lm;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Lm;
      },
    };
  },
  fp = ak();
function c1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = c1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function q() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = c1(e)) && (r && (r += " "), (r += t));
  return r;
}
function lk(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = o1("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(ti);
  return C.forwardRef(function (l, u) {
    const d = ru(n),
      { className: c, component: f = "div", ...y } = u1(l);
    return h.jsx(i, {
      as: f,
      ref: u,
      className: q(c, o ? o(r) : r),
      theme: (t && d[t]) || d,
      ...y,
    });
  });
}
const uk = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function de(e, t, n = "Mui") {
  const r = uk[t];
  return r ? `${n}-${r}` : `${fp.generate(e)}-${t}`;
}
function fe(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = de(e, o, n);
    }),
    r
  );
}
var pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp = Symbol.for("react.element"),
  hp = Symbol.for("react.portal"),
  ou = Symbol.for("react.fragment"),
  iu = Symbol.for("react.strict_mode"),
  su = Symbol.for("react.profiler"),
  au = Symbol.for("react.provider"),
  lu = Symbol.for("react.context"),
  ck = Symbol.for("react.server_context"),
  uu = Symbol.for("react.forward_ref"),
  cu = Symbol.for("react.suspense"),
  du = Symbol.for("react.suspense_list"),
  fu = Symbol.for("react.memo"),
  pu = Symbol.for("react.lazy"),
  dk = Symbol.for("react.offscreen"),
  d1;
d1 = Symbol.for("react.module.reference");
function sn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case pp:
        switch (((e = e.type), e)) {
          case ou:
          case su:
          case iu:
          case cu:
          case du:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ck:
              case lu:
              case uu:
              case pu:
              case fu:
              case au:
                return e;
              default:
                return t;
            }
        }
      case hp:
        return t;
    }
  }
}
pe.ContextConsumer = lu;
pe.ContextProvider = au;
pe.Element = pp;
pe.ForwardRef = uu;
pe.Fragment = ou;
pe.Lazy = pu;
pe.Memo = fu;
pe.Portal = hp;
pe.Profiler = su;
pe.StrictMode = iu;
pe.Suspense = cu;
pe.SuspenseList = du;
pe.isAsyncMode = function () {
  return !1;
};
pe.isConcurrentMode = function () {
  return !1;
};
pe.isContextConsumer = function (e) {
  return sn(e) === lu;
};
pe.isContextProvider = function (e) {
  return sn(e) === au;
};
pe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === pp;
};
pe.isForwardRef = function (e) {
  return sn(e) === uu;
};
pe.isFragment = function (e) {
  return sn(e) === ou;
};
pe.isLazy = function (e) {
  return sn(e) === pu;
};
pe.isMemo = function (e) {
  return sn(e) === fu;
};
pe.isPortal = function (e) {
  return sn(e) === hp;
};
pe.isProfiler = function (e) {
  return sn(e) === su;
};
pe.isStrictMode = function (e) {
  return sn(e) === iu;
};
pe.isSuspense = function (e) {
  return sn(e) === cu;
};
pe.isSuspenseList = function (e) {
  return sn(e) === du;
};
pe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ou ||
    e === su ||
    e === iu ||
    e === cu ||
    e === du ||
    e === dk ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === pu ||
        e.$$typeof === fu ||
        e.$$typeof === au ||
        e.$$typeof === lu ||
        e.$$typeof === uu ||
        e.$$typeof === d1 ||
        e.getModuleId !== void 0))
  );
};
pe.typeOf = sn;
const fk = nu();
function nc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Sd(e, t, n) {
  return hk(t) ? n : t[e] || t;
}
const oa = Symbol("mui.processed_props");
function ia(e, t, n) {
  if (oa in e) return e[oa];
  const r = { ...e, theme: Sd(t, e.theme, n) };
  return (e[oa] = r), (r[oa] = r), r;
}
function pk(e) {
  return e ? (t, n) => n[e] : null;
}
function Ta(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n)) return n.flatMap((o) => Ta(o, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const { variants: o, ...i } = n;
    let s = i,
      a;
    e: for (let l = 0; l < o.length; l += 1) {
      const u = o[l];
      if (typeof u.props == "function") {
        if (
          (a ?? (a = { ...t, ...t.ownerState, ownerState: t.ownerState }),
          !u.props(a))
        )
          continue;
      } else
        for (const d in u.props)
          if (
            t[d] !== u.props[d] &&
            ((r = t.ownerState) == null ? void 0 : r[d]) !== u.props[d]
          )
            continue e;
      Array.isArray(s) || (s = [s]),
        typeof u.style == "function"
          ? (a ?? (a = { ...t, ...t.ownerState, ownerState: t.ownerState }),
            s.push(u.style(a)))
          : s.push(u.style);
    }
    return s;
  }
  return n;
}
function f1(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = fk,
      rootShouldForwardProp: r = nc,
      slotShouldForwardProp: o = nc,
    } = e,
    i = (a) => ti(ia(a, t, n));
  return (
    (i.__mui_systemSx = !0),
    (a, l = {}) => {
      sb(a, (P) => P.filter((E) => !(E != null && E.__mui_systemSx)));
      const {
          name: u,
          slot: d,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: y = pk(gk(d)),
          ...v
        } = l,
        S = c !== void 0 ? c : (d && d !== "Root" && d !== "root") || !1,
        b = f || !1;
      let m,
        g = nc;
      d === "Root" || d === "root"
        ? (g = r)
        : d
        ? (g = o)
        : mk(a) && (g = void 0);
      const p = o1(a, { shouldForwardProp: g, label: m, ...v }),
        w = (P) =>
          (typeof P == "function" && P.__emotion_real !== P) || kn(P)
            ? (E) => Ta(P, ia(E, t, n))
            : P,
        k = (P, ...E) => {
          let R = w(P);
          const x = E ? E.map(w) : [];
          u &&
            y &&
            x.push(($) => {
              const V = Sd(t, $.theme, n);
              if (
                !V.components ||
                !V.components[u] ||
                !V.components[u].styleOverrides
              )
                return null;
              const N = V.components[u].styleOverrides,
                O = {},
                L = ia($, t, n);
              for (const z in N) O[z] = Ta(N[z], L);
              return y($, O);
            }),
            u &&
              !S &&
              x.push(($) => {
                var O, L;
                const V = Sd(t, $.theme, n),
                  N =
                    (L =
                      (O = V == null ? void 0 : V.components) == null
                        ? void 0
                        : O[u]) == null
                      ? void 0
                      : L.variants;
                return N ? Ta({ variants: N }, ia($, t, n)) : null;
              }),
            b || x.push(i);
          const T = x.length - E.length;
          if (Array.isArray(P) && T > 0) {
            const $ = new Array(T).fill("");
            (R = [...P, ...$]), (R.raw = [...P.raw, ...$]);
          }
          const A = p(R, ...x);
          return a.muiName && (A.muiName = a.muiName), A;
        };
      return p.withConfig && (k.withConfig = p.withConfig), k;
    }
  );
}
function hk(e) {
  for (const t in e) return !1;
  return !0;
}
function mk(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function gk(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const yk = f1();
function gs(e, t) {
  const n = { ...t };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots") n[o] = { ...e[o], ...n[o] };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o],
          s = t[o];
        if (!s) n[o] = i || {};
        else if (!i) n[o] = s;
        else {
          n[o] = { ...s };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const l = a;
              n[o][l] = gs(i[l], s[l]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function p1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : gs(t.components[n].defaultProps, r);
}
function h1({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = ru(n);
  return r && (o = o[r] || o), p1({ theme: o, name: t, props: e });
}
const Zn = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function vk(e, t, n, r, o) {
  const [i, s] = C.useState(() =>
    o && n ? n(e).matches : r ? r(e).matches : t
  );
  return (
    Zn(() => {
      if (!n) return;
      const a = n(e),
        l = () => {
          s(a.matches);
        };
      return (
        l(),
        a.addEventListener("change", l),
        () => {
          a.removeEventListener("change", l);
        }
      );
    }, [e, n]),
    i
  );
}
const m1 = C.useSyncExternalStore;
function xk(e, t, n, r, o) {
  const i = C.useCallback(() => t, [t]),
    s = C.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: d } = r(e);
        return () => d;
      }
      return i;
    }, [i, e, r, o, n]),
    [a, l] = C.useMemo(() => {
      if (n === null) return [i, () => () => {}];
      const d = n(e);
      return [
        () => d.matches,
        (c) => (
          d.addEventListener("change", c),
          () => {
            d.removeEventListener("change", c);
          }
        ),
      ];
    }, [i, n, e]);
  return m1(l, a, s);
}
function jn(e, t = {}) {
  const n = l1(),
    r = typeof window < "u" && typeof window.matchMedia < "u",
    {
      defaultMatches: o = !1,
      matchMedia: i = r ? window.matchMedia : null,
      ssrMatchMedia: s = null,
      noSsr: a = !1,
    } = p1({ name: "MuiUseMediaQuery", props: t, theme: n });
  let l = typeof e == "function" ? e(n) : e;
  return (
    (l = l.replace(/^@media( ?)/m, "")),
    (m1 !== void 0 ? xk : vk)(l, o, i, s, a)
  );
}
function Sk(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function mp(e, t = 0, n = 1) {
  return Sk(e, t, n);
}
function wk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Cr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Cr(wk(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Yn(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        o
      ))
    )
      throw new Error(Yn(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const Ck = (e) => {
    const t = Cr(e);
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
      .join(" ");
  },
  Ri = (e, t) => {
    try {
      return Ck(e);
    } catch {
      return e;
    }
  };
function hu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.includes("rgb")
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes("color") ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function g1(e) {
  e = Cr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), hu({ type: a, values: l })
  );
}
function wd(e) {
  e = Cr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Cr(g1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function bk(e, t) {
  const n = wd(e),
    r = wd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Jt(e, t) {
  return (
    (e = Cr(e)),
    (t = mp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    hu(e)
  );
}
function sa(e, t, n) {
  try {
    return Jt(e, t);
  } catch {
    return e;
  }
}
function gp(e, t) {
  if (((e = Cr(e)), (t = mp(t)), e.type.includes("hsl"))) e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return hu(e);
}
function me(e, t, n) {
  try {
    return gp(e, t);
  } catch {
    return e;
  }
}
function yp(e, t) {
  if (((e = Cr(e)), (t = mp(t)), e.type.includes("hsl")))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return hu(e);
}
function ge(e, t, n) {
  try {
    return yp(e, t);
  } catch {
    return e;
  }
}
function kk(e, t = 0.15) {
  return wd(e) > 0.5 ? gp(e, t) : yp(e, t);
}
function aa(e, t, n) {
  try {
    return kk(e, t);
  } catch {
    return e;
  }
}
function Cd(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function vp(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function Pk(e, t) {
  return () => null;
}
function Ra(e, t) {
  var n, r, o;
  return (
    C.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((o =
          (r = (n = e.type) == null ? void 0 : n._payload) == null
            ? void 0
            : r.value) == null
          ? void 0
          : o.muiName)
    ) !== -1
  );
}
function Rt(e) {
  return (e && e.ownerDocument) || document;
}
function br(e) {
  return Rt(e).defaultView || window;
}
function Ek(e, t) {
  return () => null;
}
function il(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let $m = 0;
function Tk(e) {
  const [t, n] = C.useState(e),
    r = e || t;
  return (
    C.useEffect(() => {
      t == null && (($m += 1), n(`mui-${$m}`));
    }, [t]),
    r
  );
}
const Dm = kc.useId;
function xp(e) {
  if (Dm !== void 0) {
    const t = Dm();
    return e ?? t;
  }
  return Tk(e);
}
function Rk(e, t, n, r, o) {
  return null;
}
function bd({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = C.useRef(e !== void 0),
    [i, s] = C.useState(t),
    a = o ? e : i,
    l = C.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function Ur(e) {
  const t = C.useRef(e);
  return (
    Zn(() => {
      t.current = e;
    }),
    C.useRef((...n) => (0, t.current)(...n)).current
  );
}
function at(...e) {
  return C.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              il(n, t);
            });
          },
    e
  );
}
const Fm = {};
function y1(e, t) {
  const n = C.useRef(Fm);
  return n.current === Fm && (n.current = e(t)), n;
}
const Mk = [];
function jk(e) {
  C.useEffect(e, Mk);
}
class Sp {
  constructor() {
    ui(this, "currentId", null);
    ui(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    ui(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Sp();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function v1() {
  const e = y1(Sp.create).current;
  return jk(e.disposeEffect), e;
}
function sl(e) {
  try {
    return e.matches(":focus-visible");
  } catch {}
  return !1;
}
function x1(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ye(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "",
      a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u &&
        ((s += (a === !0 ? "" : " ") + t(u)),
        (a = !1),
        n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function Ak(e) {
  return typeof e == "string";
}
function S1(e, t, n) {
  return e === void 0 || Ak(e)
    ? t
    : { ...t, ownerState: { ...t.ownerState, ...n } };
}
function w1(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function _m(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function C1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const y = q(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      v = {
        ...(n == null ? void 0 : n.style),
        ...(o == null ? void 0 : o.style),
        ...(r == null ? void 0 : r.style),
      },
      S = { ...n, ...o, ...r };
    return (
      y.length > 0 && (S.className = y),
      Object.keys(v).length > 0 && (S.style = v),
      { props: S, internalRef: void 0 }
    );
  }
  const s = w1({ ...o, ...r }),
    a = _m(r),
    l = _m(o),
    u = t(s),
    d = q(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    c = {
      ...(u == null ? void 0 : u.style),
      ...(n == null ? void 0 : n.style),
      ...(o == null ? void 0 : o.style),
      ...(r == null ? void 0 : r.style),
    },
    f = { ...u, ...n, ...l, ...a };
  return (
    d.length > 0 && (f.className = d),
    Object.keys(c).length > 0 && (f.style = c),
    { props: f, internalRef: u.ref }
  );
}
function b1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Nm(e) {
  var c;
  const {
      elementType: t,
      externalSlotProps: n,
      ownerState: r,
      skipResolvingSlotProps: o = !1,
      ...i
    } = e,
    s = o ? {} : b1(n, r),
    { props: a, internalRef: l } = C1({ ...i, externalSlotProps: s }),
    u = at(
      l,
      s == null ? void 0 : s.ref,
      (c = e.additionalProps) == null ? void 0 : c.ref
    );
  return S1(t, { ...a, ref: u }, r);
}
function Ls(e) {
  return !e || !C.isValidElement(e)
    ? null
    : e.props.propertyIsEnumerable("ref")
    ? e.props.ref
    : e.ref;
}
const Ik = C.createContext(),
  Ok = () => C.useContext(Ik) ?? !1,
  Lk = C.createContext(void 0);
function $k(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps
    ? gs(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
    ? gs(o, r)
    : r;
}
function Dk({ props: e, name: t }) {
  const n = C.useContext(Lk);
  return $k({ props: e, name: t, theme: { components: n } });
}
function Fk(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})`
      : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const zm = (e, t, n, r = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == "object" && (o[i] = n)
        : o &&
          typeof o == "object" &&
          (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]));
    });
  },
  _k = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([a, l]) => {
        (!n || (n && !n([...i, a]))) &&
          l != null &&
          (typeof l == "object" && Object.keys(l).length > 0
            ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s)
            : t([...i, a], l, s));
      });
    }
    r(e);
  },
  Nk = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r)
        ) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
        ? t
        : `${t}px`
      : t;
function rc(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    s = {};
  return (
    _k(
      e,
      (a, l, u) => {
        if (
          (typeof l == "string" || typeof l == "number") &&
          (!r || !r(a, l))
        ) {
          const d = `--${n ? `${n}-` : ""}${a.join("-")}`,
            c = Nk(a, l);
          Object.assign(o, { [d]: c }),
            zm(i, a, `var(${d})`, u),
            zm(s, a, `var(${d}, ${c})`, u);
        }
      },
      (a) => a[0] === "vars"
    ),
    { css: o, vars: i, varsWithDefaults: s }
  );
}
function zk(e, t = {}) {
  const {
      getSelector: n = b,
      disableCssColorScheme: r,
      colorSchemeSelector: o,
    } = t,
    {
      colorSchemes: i = {},
      components: s,
      defaultColorScheme: a = "light",
      ...l
    } = e,
    { vars: u, css: d, varsWithDefaults: c } = rc(l, t);
  let f = c;
  const y = {},
    { [a]: v, ...S } = i;
  if (
    (Object.entries(S || {}).forEach(([p, w]) => {
      const { vars: k, css: P, varsWithDefaults: E } = rc(w, t);
      (f = ht(f, E)), (y[p] = { css: P, vars: k });
    }),
    v)
  ) {
    const { css: p, vars: w, varsWithDefaults: k } = rc(v, t);
    (f = ht(f, k)), (y[a] = { css: p, vars: w });
  }
  function b(p, w) {
    var P, E;
    let k = o;
    if (
      (o === "class" && (k = ".%s"),
      o === "data" && (k = "[data-%s]"),
      o != null &&
        o.startsWith("data-") &&
        !o.includes("%s") &&
        (k = `[${o}="%s"]`),
      p)
    ) {
      if (k === "media")
        return e.defaultColorScheme === p
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((E = (P = i[p]) == null ? void 0 : P.palette) == null
                  ? void 0
                  : E.mode) || p
              })`]: { ":root": w },
            };
      if (k)
        return e.defaultColorScheme === p
          ? `:root, ${k.replace("%s", String(p))}`
          : k.replace("%s", String(p));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let p = { ...u };
      return (
        Object.entries(y).forEach(([, { vars: w }]) => {
          p = ht(p, w);
        }),
        p
      );
    },
    generateStyleSheets: () => {
      var R, x;
      const p = [],
        w = e.defaultColorScheme || "light";
      function k(T, A) {
        Object.keys(A).length &&
          p.push(typeof T == "string" ? { [T]: { ...A } } : T);
      }
      k(n(void 0, { ...d }), d);
      const { [w]: P, ...E } = y;
      if (P) {
        const { css: T } = P,
          A =
            (x = (R = i[w]) == null ? void 0 : R.palette) == null
              ? void 0
              : x.mode,
          $ = !r && A ? { colorScheme: A, ...T } : { ...T };
        k(n(w, { ...$ }), $);
      }
      return (
        Object.entries(E).forEach(([T, { css: A }]) => {
          var N, O;
          const $ =
              (O = (N = i[T]) == null ? void 0 : N.palette) == null
                ? void 0
                : O.mode,
            V = !r && $ ? { colorScheme: $, ...A } : { ...A };
          k(n(T, { ...V }), V);
        }),
        p
      );
    },
  };
}
function Vk(e) {
  return function (n) {
    return e === "media"
      ? `@media (prefers-color-scheme: ${n})`
      : e
      ? e.startsWith("data-") && !e.includes("%s")
        ? `[${e}="${n}"] &`
        : e === "class"
        ? `.${n} &`
        : e === "data"
        ? `[data-${n}] &`
        : `${e.replace("%s", n)} &`
      : "&";
  };
}
const Bk = nu(),
  Uk = yk("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${Q(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  Wk = (e) => h1({ props: e, name: "MuiContainer", defaultTheme: Bk }),
  Hk = (e, t) => {
    const n = (l) => de(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${Q(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return ye(a, n, r);
  };
function Kk(e = {}) {
  const {
      createStyledComponent: t = Uk,
      useThemeProps: n = Wk,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!a.disableGutters && {
          paddingLeft: s.spacing(2),
          paddingRight: s.spacing(2),
          [s.breakpoints.up("sm")]: {
            paddingLeft: s.spacing(3),
            paddingRight: s.spacing(3),
          },
        }),
      }),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const d = u,
            c = s.breakpoints.values[d];
          return (
            c !== 0 &&
              (l[s.breakpoints.up(d)] = {
                maxWidth: `${c}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) => ({
        ...(a.maxWidth === "xs" && {
          [s.breakpoints.up("xs")]: {
            maxWidth: Math.max(s.breakpoints.values.xs, 444),
          },
        }),
        ...(a.maxWidth &&
          a.maxWidth !== "xs" && {
            [s.breakpoints.up(a.maxWidth)]: {
              maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                s.breakpoints.unit
              }`,
            },
          }),
      })
    );
  return C.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: d,
        component: c = "div",
        disableGutters: f = !1,
        fixed: y = !1,
        maxWidth: v = "lg",
        classes: S,
        ...b
      } = u,
      m = { ...u, component: c, disableGutters: f, fixed: y, maxWidth: v },
      g = Hk(m, r);
    return h.jsx(o, {
      as: c,
      ownerState: m,
      className: q(g.root, d),
      ref: l,
      ...b,
    });
  });
}
const Vm = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: fs.white, default: fs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  oc = {
    text: {
      primary: fs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: fs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Bm(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = yp(e.main, o))
      : t === "dark" && (e.dark = gp(e.main, i)));
}
function Gk(e = "light") {
  return e === "dark"
    ? { main: ao[200], light: ao[50], dark: ao[400] }
    : { main: ao[700], light: ao[400], dark: ao[800] };
}
function Xk(e = "light") {
  return e === "dark"
    ? { main: so[200], light: so[50], dark: so[400] }
    : { main: so[500], light: so[300], dark: so[700] };
}
function Qk(e = "light") {
  return e === "dark"
    ? { main: io[500], light: io[300], dark: io[700] }
    : { main: io[700], light: io[400], dark: io[800] };
}
function Yk(e = "light") {
  return e === "dark"
    ? { main: lo[400], light: lo[300], dark: lo[700] }
    : { main: lo[700], light: lo[500], dark: lo[900] };
}
function qk(e = "light") {
  return e === "dark"
    ? { main: uo[400], light: uo[300], dark: uo[700] }
    : { main: uo[800], light: uo[500], dark: uo[900] };
}
function Zk(e = "light") {
  return e === "dark"
    ? { main: vi[400], light: vi[300], dark: vi[700] }
    : { main: "#ed6c02", light: vi[500], dark: vi[900] };
}
function wp(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
      ...o
    } = e,
    i = e.primary || Gk(t),
    s = e.secondary || Xk(t),
    a = e.error || Qk(t),
    l = e.info || Yk(t),
    u = e.success || qk(t),
    d = e.warning || Zk(t);
  function c(S) {
    return bk(S, oc.text.primary) >= n ? oc.text.primary : Vm.text.primary;
  }
  const f = ({
      color: S,
      name: b,
      mainShade: m = 500,
      lightShade: g = 300,
      darkShade: p = 700,
    }) => {
      if (
        ((S = { ...S }),
        !S.main && S[m] && (S.main = S[m]),
        !S.hasOwnProperty("main"))
      )
        throw new Error(Yn(11, b ? ` (${b})` : "", m));
      if (typeof S.main != "string")
        throw new Error(Yn(12, b ? ` (${b})` : "", JSON.stringify(S.main)));
      return (
        Bm(S, "light", g, r),
        Bm(S, "dark", p, r),
        S.contrastText || (S.contrastText = c(S.main)),
        S
      );
    },
    y = { dark: oc, light: Vm };
  return ht(
    {
      common: { ...fs },
      mode: t,
      primary: f({ color: i, name: "primary" }),
      secondary: f({
        color: s,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700",
      }),
      error: f({ color: a, name: "error" }),
      warning: f({ color: d, name: "warning" }),
      info: f({ color: l, name: "info" }),
      success: f({ color: u, name: "success" }),
      grey: J2,
      contrastThreshold: n,
      getContrastText: c,
      augmentColor: f,
      tonalOffset: r,
      ...y[t],
    },
    o
  );
}
function Jk(e) {
  const t = {};
  return (
    Object.entries(e).forEach((r) => {
      const [o, i] = r;
      typeof i == "object" &&
        (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${
          i.fontVariant ? `${i.fontVariant} ` : ""
        }${i.fontWeight ? `${i.fontWeight} ` : ""}${
          i.fontStretch ? `${i.fontStretch} ` : ""
        }${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${
          i.fontFamily || ""
        }`);
    }),
    t
  );
}
function eP(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [e.up("sm")]: { minHeight: 64 },
    },
    ...t,
  };
}
function tP(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Um = { textTransform: "uppercase" },
  Wm = '"Roboto", "Helvetica", "Arial", sans-serif';
function nP(e, t) {
  const {
      fontFamily: n = Wm,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: u,
      pxToRem: d,
      ...c
    } = typeof t == "function" ? t(e) : t,
    f = r / 14,
    y = d || ((b) => `${(b / l) * f}rem`),
    v = (b, m, g, p, w) => ({
      fontFamily: n,
      fontWeight: b,
      fontSize: y(m),
      lineHeight: g,
      ...(n === Wm ? { letterSpacing: `${tP(p / m)}em` } : {}),
      ...w,
      ...u,
    }),
    S = {
      h1: v(o, 96, 1.167, -1.5),
      h2: v(o, 60, 1.2, -0.5),
      h3: v(i, 48, 1.167, 0),
      h4: v(i, 34, 1.235, 0.25),
      h5: v(i, 24, 1.334, 0),
      h6: v(s, 20, 1.6, 0.15),
      subtitle1: v(i, 16, 1.75, 0.15),
      subtitle2: v(s, 14, 1.57, 0.1),
      body1: v(i, 16, 1.5, 0.15),
      body2: v(i, 14, 1.43, 0.15),
      button: v(s, 14, 1.75, 0.4, Um),
      caption: v(i, 12, 1.66, 0.4),
      overline: v(i, 12, 2.66, 1, Um),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return ht(
    {
      htmlFontSize: l,
      pxToRem: y,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: a,
      ...S,
    },
    c,
    { clone: !1 }
  );
}
const rP = 0.2,
  oP = 0.14,
  iP = 0.12;
function Te(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rP})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${oP})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${iP})`,
  ].join(",");
}
const sP = [
    "none",
    Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  aP = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  lP = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Hm(e) {
  return `${Math.round(e)}ms`;
}
function uP(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function cP(e) {
  const t = { ...aP, ...e.easing },
    n = { ...lP, ...e.duration };
  return {
    getAutoHeightDuration: uP,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      return (Array.isArray(o) ? o : [o])
        .map(
          (d) =>
            `${d} ${typeof s == "string" ? s : Hm(s)} ${a} ${
              typeof l == "string" ? l : Hm(l)
            }`
        )
        .join(",");
    },
    ...e,
    easing: t,
    duration: n,
  };
}
const dP = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function kd(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars) throw new Error(Yn(20));
  const d = wp(i),
    c = nu(e);
  let f = ht(c, {
    mixins: eP(c.breakpoints, r),
    palette: d,
    shadows: sP.slice(),
    typography: nP(d, a),
    transitions: cP(s),
    zIndex: { ...dP },
  });
  return (
    (f = ht(f, u)),
    (f = t.reduce((y, v) => ht(y, v), f)),
    (f.unstable_sxConfig = {
      ...Os,
      ...(u == null ? void 0 : u.unstable_sxConfig),
    }),
    (f.unstable_sx = function (v) {
      return ti({ sx: v, theme: this });
    }),
    f
  );
}
function Pd(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const fP = [...Array(25)].map((e, t) => {
  if (t === 0) return;
  const n = Pd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function k1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38,
  };
}
function P1(e) {
  return e === "dark" ? fP : [];
}
function pP(e) {
  const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e,
    i = wp(t);
  return {
    palette: i,
    opacity: { ...k1(i.mode), ...n },
    overlays: r || P1(i.mode),
    ...o,
  };
}
function hP(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const mP = (e) => [
    ...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`),
    `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
  ],
  gP = (e) => (t, n) => {
    const r = e.colorSchemeSelector;
    let o = r;
    if (
      (r === "class" && (o = ".%s"),
      r === "data" && (o = "[data-%s]"),
      r != null &&
        r.startsWith("data-") &&
        !r.includes("%s") &&
        (o = `[${r}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === "dark") {
        const i = {};
        return (
          mP(e.cssVarPrefix).forEach((s) => {
            (i[s] = n[s]), delete n[s];
          }),
          o === "media"
            ? {
                ":root": n,
                "@media (prefers-color-scheme: dark)": { ":root": i },
              }
            : o
            ? { [o.replace("%s", t)]: i, [`:root, ${o.replace("%s", t)}`]: n }
            : { ":root": { ...n, ...i } }
        );
      }
      if (o && o !== "media") return `:root, ${o.replace("%s", String(t))}`;
    } else if (t) {
      if (o === "media")
        return {
          [`@media (prefers-color-scheme: ${String(t)})`]: { ":root": n },
        };
      if (o) return o.replace("%s", String(t));
    }
    return ":root";
  };
function yP(e) {
  return (
    kn(e) ||
    typeof e > "u" ||
    typeof e == "string" ||
    typeof e == "boolean" ||
    typeof e == "number" ||
    Array.isArray(e)
  );
}
function vP(e = {}) {
  const t = { ...e };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !yP(a) || s.startsWith("unstable_")
        ? delete r[s]
        : kn(a) && ((r[s] = { ...a }), n(r[s]));
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function xP(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function j(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Mi(e) {
  return !e || !e.startsWith("hsl") ? e : g1(e);
}
function Ln(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = Ri(
      Mi(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function SP(e) {
  return typeof e == "number"
    ? `${e}px`
    : typeof e == "string" || typeof e == "function" || Array.isArray(e)
    ? e
    : "8px";
}
const vn = (e) => {
    try {
      return e();
    } catch {}
  },
  wP = (e = "mui") => Fk(e);
function ic(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = pP({
      ...t,
      palette: { mode: o, ...(t == null ? void 0 : t.palette) },
    });
    return;
  }
  const { palette: i, ...s } = kd({
    ...n,
    palette: { mode: o, ...(t == null ? void 0 : t.palette) },
  });
  return (
    (e[r] = {
      ...t,
      palette: i,
      opacity: { ...k1(o), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || P1(o),
    }),
    s
  );
}
function CP(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = "mui",
      shouldSkipGeneratingVar: s = hP,
      colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
      ...l
    } = e,
    u = Object.keys(n)[0],
    d = r || (n.light && u !== "light" ? "light" : u),
    c = wP(i),
    { [d]: f, light: y, dark: v, ...S } = n,
    b = { ...S };
  let m = f;
  if (
    (((d === "dark" && !("dark" in n)) || (d === "light" && !("light" in n))) &&
      (m = !0),
    !m)
  )
    throw new Error(Yn(21, d));
  const g = ic(b, m, l, d);
  y && !b.light && ic(b, y, void 0, "light"),
    v && !b.dark && ic(b, v, void 0, "dark");
  let p = {
    defaultColorScheme: d,
    ...g,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    getCssVar: c,
    colorSchemes: b,
    font: { ...Jk(g.typography), ...g.font },
    spacing: SP(l.spacing),
  };
  Object.keys(p.colorSchemes).forEach((R) => {
    const x = p.colorSchemes[R].palette,
      T = (A) => {
        const $ = A.split("-"),
          V = $[1],
          N = $[2];
        return c(A, x[V][N]);
      };
    if (
      (x.mode === "light" &&
        (j(x.common, "background", "#fff"),
        j(x.common, "onBackground", "#000")),
      x.mode === "dark" &&
        (j(x.common, "background", "#000"),
        j(x.common, "onBackground", "#fff")),
      xP(x, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      x.mode === "light")
    ) {
      j(x.Alert, "errorColor", me(x.error.light, 0.6)),
        j(x.Alert, "infoColor", me(x.info.light, 0.6)),
        j(x.Alert, "successColor", me(x.success.light, 0.6)),
        j(x.Alert, "warningColor", me(x.warning.light, 0.6)),
        j(x.Alert, "errorFilledBg", T("palette-error-main")),
        j(x.Alert, "infoFilledBg", T("palette-info-main")),
        j(x.Alert, "successFilledBg", T("palette-success-main")),
        j(x.Alert, "warningFilledBg", T("palette-warning-main")),
        j(
          x.Alert,
          "errorFilledColor",
          vn(() => x.getContrastText(x.error.main))
        ),
        j(
          x.Alert,
          "infoFilledColor",
          vn(() => x.getContrastText(x.info.main))
        ),
        j(
          x.Alert,
          "successFilledColor",
          vn(() => x.getContrastText(x.success.main))
        ),
        j(
          x.Alert,
          "warningFilledColor",
          vn(() => x.getContrastText(x.warning.main))
        ),
        j(x.Alert, "errorStandardBg", ge(x.error.light, 0.9)),
        j(x.Alert, "infoStandardBg", ge(x.info.light, 0.9)),
        j(x.Alert, "successStandardBg", ge(x.success.light, 0.9)),
        j(x.Alert, "warningStandardBg", ge(x.warning.light, 0.9)),
        j(x.Alert, "errorIconColor", T("palette-error-main")),
        j(x.Alert, "infoIconColor", T("palette-info-main")),
        j(x.Alert, "successIconColor", T("palette-success-main")),
        j(x.Alert, "warningIconColor", T("palette-warning-main")),
        j(x.AppBar, "defaultBg", T("palette-grey-100")),
        j(x.Avatar, "defaultBg", T("palette-grey-400")),
        j(x.Button, "inheritContainedBg", T("palette-grey-300")),
        j(x.Button, "inheritContainedHoverBg", T("palette-grey-A100")),
        j(x.Chip, "defaultBorder", T("palette-grey-400")),
        j(x.Chip, "defaultAvatarColor", T("palette-grey-700")),
        j(x.Chip, "defaultIconColor", T("palette-grey-700")),
        j(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        j(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        j(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        j(x.LinearProgress, "primaryBg", ge(x.primary.main, 0.62)),
        j(x.LinearProgress, "secondaryBg", ge(x.secondary.main, 0.62)),
        j(x.LinearProgress, "errorBg", ge(x.error.main, 0.62)),
        j(x.LinearProgress, "infoBg", ge(x.info.main, 0.62)),
        j(x.LinearProgress, "successBg", ge(x.success.main, 0.62)),
        j(x.LinearProgress, "warningBg", ge(x.warning.main, 0.62)),
        j(x.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`),
        j(x.Slider, "primaryTrack", ge(x.primary.main, 0.62)),
        j(x.Slider, "secondaryTrack", ge(x.secondary.main, 0.62)),
        j(x.Slider, "errorTrack", ge(x.error.main, 0.62)),
        j(x.Slider, "infoTrack", ge(x.info.main, 0.62)),
        j(x.Slider, "successTrack", ge(x.success.main, 0.62)),
        j(x.Slider, "warningTrack", ge(x.warning.main, 0.62));
      const A = aa(x.background.default, 0.8);
      j(x.SnackbarContent, "bg", A),
        j(
          x.SnackbarContent,
          "color",
          vn(() => x.getContrastText(A))
        ),
        j(x.SpeedDialAction, "fabHoverBg", aa(x.background.paper, 0.15)),
        j(x.StepConnector, "border", T("palette-grey-400")),
        j(x.StepContent, "border", T("palette-grey-400")),
        j(x.Switch, "defaultColor", T("palette-common-white")),
        j(x.Switch, "defaultDisabledColor", T("palette-grey-100")),
        j(x.Switch, "primaryDisabledColor", ge(x.primary.main, 0.62)),
        j(x.Switch, "secondaryDisabledColor", ge(x.secondary.main, 0.62)),
        j(x.Switch, "errorDisabledColor", ge(x.error.main, 0.62)),
        j(x.Switch, "infoDisabledColor", ge(x.info.main, 0.62)),
        j(x.Switch, "successDisabledColor", ge(x.success.main, 0.62)),
        j(x.Switch, "warningDisabledColor", ge(x.warning.main, 0.62)),
        j(x.TableCell, "border", ge(sa(x.divider, 1), 0.88)),
        j(x.Tooltip, "bg", sa(x.grey[700], 0.92));
    }
    if (x.mode === "dark") {
      j(x.Alert, "errorColor", ge(x.error.light, 0.6)),
        j(x.Alert, "infoColor", ge(x.info.light, 0.6)),
        j(x.Alert, "successColor", ge(x.success.light, 0.6)),
        j(x.Alert, "warningColor", ge(x.warning.light, 0.6)),
        j(x.Alert, "errorFilledBg", T("palette-error-dark")),
        j(x.Alert, "infoFilledBg", T("palette-info-dark")),
        j(x.Alert, "successFilledBg", T("palette-success-dark")),
        j(x.Alert, "warningFilledBg", T("palette-warning-dark")),
        j(
          x.Alert,
          "errorFilledColor",
          vn(() => x.getContrastText(x.error.dark))
        ),
        j(
          x.Alert,
          "infoFilledColor",
          vn(() => x.getContrastText(x.info.dark))
        ),
        j(
          x.Alert,
          "successFilledColor",
          vn(() => x.getContrastText(x.success.dark))
        ),
        j(
          x.Alert,
          "warningFilledColor",
          vn(() => x.getContrastText(x.warning.dark))
        ),
        j(x.Alert, "errorStandardBg", me(x.error.light, 0.9)),
        j(x.Alert, "infoStandardBg", me(x.info.light, 0.9)),
        j(x.Alert, "successStandardBg", me(x.success.light, 0.9)),
        j(x.Alert, "warningStandardBg", me(x.warning.light, 0.9)),
        j(x.Alert, "errorIconColor", T("palette-error-main")),
        j(x.Alert, "infoIconColor", T("palette-info-main")),
        j(x.Alert, "successIconColor", T("palette-success-main")),
        j(x.Alert, "warningIconColor", T("palette-warning-main")),
        j(x.AppBar, "defaultBg", T("palette-grey-900")),
        j(x.AppBar, "darkBg", T("palette-background-paper")),
        j(x.AppBar, "darkColor", T("palette-text-primary")),
        j(x.Avatar, "defaultBg", T("palette-grey-600")),
        j(x.Button, "inheritContainedBg", T("palette-grey-800")),
        j(x.Button, "inheritContainedHoverBg", T("palette-grey-700")),
        j(x.Chip, "defaultBorder", T("palette-grey-700")),
        j(x.Chip, "defaultAvatarColor", T("palette-grey-300")),
        j(x.Chip, "defaultIconColor", T("palette-grey-300")),
        j(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        j(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        j(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        j(x.LinearProgress, "primaryBg", me(x.primary.main, 0.5)),
        j(x.LinearProgress, "secondaryBg", me(x.secondary.main, 0.5)),
        j(x.LinearProgress, "errorBg", me(x.error.main, 0.5)),
        j(x.LinearProgress, "infoBg", me(x.info.main, 0.5)),
        j(x.LinearProgress, "successBg", me(x.success.main, 0.5)),
        j(x.LinearProgress, "warningBg", me(x.warning.main, 0.5)),
        j(x.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`),
        j(x.Slider, "primaryTrack", me(x.primary.main, 0.5)),
        j(x.Slider, "secondaryTrack", me(x.secondary.main, 0.5)),
        j(x.Slider, "errorTrack", me(x.error.main, 0.5)),
        j(x.Slider, "infoTrack", me(x.info.main, 0.5)),
        j(x.Slider, "successTrack", me(x.success.main, 0.5)),
        j(x.Slider, "warningTrack", me(x.warning.main, 0.5));
      const A = aa(x.background.default, 0.98);
      j(x.SnackbarContent, "bg", A),
        j(
          x.SnackbarContent,
          "color",
          vn(() => x.getContrastText(A))
        ),
        j(x.SpeedDialAction, "fabHoverBg", aa(x.background.paper, 0.15)),
        j(x.StepConnector, "border", T("palette-grey-600")),
        j(x.StepContent, "border", T("palette-grey-600")),
        j(x.Switch, "defaultColor", T("palette-grey-300")),
        j(x.Switch, "defaultDisabledColor", T("palette-grey-600")),
        j(x.Switch, "primaryDisabledColor", me(x.primary.main, 0.55)),
        j(x.Switch, "secondaryDisabledColor", me(x.secondary.main, 0.55)),
        j(x.Switch, "errorDisabledColor", me(x.error.main, 0.55)),
        j(x.Switch, "infoDisabledColor", me(x.info.main, 0.55)),
        j(x.Switch, "successDisabledColor", me(x.success.main, 0.55)),
        j(x.Switch, "warningDisabledColor", me(x.warning.main, 0.55)),
        j(x.TableCell, "border", me(sa(x.divider, 1), 0.68)),
        j(x.Tooltip, "bg", sa(x.grey[700], 0.92));
    }
    Ln(x.background, "default"),
      Ln(x.background, "paper"),
      Ln(x.common, "background"),
      Ln(x.common, "onBackground"),
      Ln(x, "divider"),
      Object.keys(x).forEach((A) => {
        const $ = x[A];
        $ &&
          typeof $ == "object" &&
          ($.main && j(x[A], "mainChannel", Ri(Mi($.main))),
          $.light && j(x[A], "lightChannel", Ri(Mi($.light))),
          $.dark && j(x[A], "darkChannel", Ri(Mi($.dark))),
          $.contrastText &&
            j(x[A], "contrastTextChannel", Ri(Mi($.contrastText))),
          A === "text" && (Ln(x[A], "primary"), Ln(x[A], "secondary")),
          A === "action" &&
            ($.active && Ln(x[A], "active"),
            $.selected && Ln(x[A], "selected")));
      });
  }),
    (p = t.reduce((R, x) => ht(R, x), p));
  const w = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: s,
      getSelector: gP(p),
    },
    { vars: k, generateThemeVars: P, generateStyleSheets: E } = zk(p, w);
  return (
    (p.vars = k),
    Object.entries(p.colorSchemes[p.defaultColorScheme]).forEach(([R, x]) => {
      p[R] = x;
    }),
    (p.generateThemeVars = P),
    (p.generateStyleSheets = E),
    (p.generateSpacing = function () {
      return a1(l.spacing, cp(this));
    }),
    (p.getColorSchemeSelector = Vk(a)),
    (p.spacing = p.generateSpacing()),
    (p.shouldSkipGeneratingVar = s),
    (p.unstable_sxConfig = {
      ...Os,
      ...(l == null ? void 0 : l.unstable_sxConfig),
    }),
    (p.unstable_sx = function (x) {
      return ti({ sx: x, theme: this });
    }),
    (p.toRuntimeSource = vP),
    p
  );
}
function Km(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = {
      ...(n !== !0 && n),
      palette: wp({ ...(n === !0 ? {} : n.palette), mode: t }),
    });
}
function E1(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: o = n ? void 0 : { light: !0 },
      defaultColorScheme: i = n == null ? void 0 : n.mode,
      ...s
    } = e,
    a = i || "light",
    l = o == null ? void 0 : o[a],
    u = {
      ...o,
      ...(n
        ? { [a]: { ...(typeof l != "boolean" && l), palette: n } }
        : void 0),
    };
  if (r === !1) {
    if (!("colorSchemes" in e)) return kd(e, ...t);
    let d = n;
    "palette" in e ||
      (u[a] &&
        (u[a] !== !0
          ? (d = u[a].palette)
          : a === "dark" && (d = { mode: "dark" })));
    const c = kd({ ...e, palette: d }, ...t);
    return (
      (c.defaultColorScheme = a),
      (c.colorSchemes = u),
      c.palette.mode === "light" &&
        ((c.colorSchemes.light = {
          ...(u.light !== !0 && u.light),
          palette: c.palette,
        }),
        Km(c, "dark", u.dark)),
      c.palette.mode === "dark" &&
        ((c.colorSchemes.dark = {
          ...(u.dark !== !0 && u.dark),
          palette: c.palette,
        }),
        Km(c, "light", u.light)),
      c
    );
  }
  return (
    !n && !("light" in u) && a === "light" && (u.light = !0),
    CP(
      {
        ...s,
        colorSchemes: u,
        defaultColorScheme: a,
        ...(typeof r != "boolean" && r),
      },
      ...t
    )
  );
}
const mu = E1();
function gu() {
  const e = ru(mu);
  return e[Rs] || e;
}
function T1({ props: e, name: t }) {
  return h1({ props: e, name: t, defaultTheme: mu, themeId: Rs });
}
function R1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const mn = (e) => R1(e) && e !== "classes",
  W = f1({ themeId: Rs, defaultTheme: mu, rootShouldForwardProp: mn });
function bP(e) {
  return h.jsx(ik, { ...e, defaultTheme: mu, themeId: Rs });
}
function kP(e) {
  return function (n) {
    return h.jsx(bP, {
      styles: typeof e == "function" ? (r) => e({ theme: r, ...n }) : e,
    });
  };
}
function PP() {
  return u1;
}
const Gm = { theme: void 0 };
function Fe(e) {
  let t, n;
  return (r) => {
    let o = t;
    return (
      (o === void 0 || r.theme !== n) &&
        ((Gm.theme = r.theme), (o = e(Gm)), (t = o), (n = r.theme)),
      o
    );
  };
}
function Pe(e) {
  return Dk(e);
}
function EP(e) {
  return de("MuiSvgIcon", e);
}
fe("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const TP = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${Q(t)}`, `fontSize${Q(n)}`],
      };
    return ye(o, EP, r);
  },
  RP = W("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${Q(n.color)}`],
        t[`fontSize${Q(n.fontSize)}`],
      ];
    },
  })(
    Fe(({ theme: e }) => {
      var t, n, r, o, i, s, a, l, u, d, c, f, y, v;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, "fill", {
                duration:
                  (r =
                    (n = (e.vars ?? e).transitions) == null
                      ? void 0
                      : n.duration) == null
                    ? void 0
                    : r.shorter,
              }),
        variants: [
          { props: (S) => !S.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                  ? void 0
                  : s.call(i, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null
                  ? void 0
                  : l.call(a, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : d.call(u, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, S]) => S && S.main)
            .map(([S]) => {
              var b, m;
              return {
                props: { color: S },
                style: {
                  color:
                    (m = (b = (e.vars ?? e).palette) == null ? void 0 : b[S]) ==
                    null
                      ? void 0
                      : m.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (f = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) ==
                null
                  ? void 0
                  : f.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (v = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) ==
                null
                  ? void 0
                  : v.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  al = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: c,
        viewBox: f = "0 0 24 24",
        ...y
      } = r,
      v = C.isValidElement(o) && o.type === "svg",
      S = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: f,
        hasSvgAsChild: v,
      },
      b = {};
    d || (b.viewBox = f);
    const m = TP(S);
    return h.jsxs(RP, {
      as: a,
      className: q(m.root, i),
      focusable: "false",
      color: u,
      "aria-hidden": c ? void 0 : !0,
      role: c ? "img" : void 0,
      ref: n,
      ...b,
      ...y,
      ...(v && o.props),
      ownerState: S,
      children: [
        v ? o.props.children : o,
        c ? h.jsx("title", { children: c }) : null,
      ],
    });
  });
al && (al.muiName = "SvgIcon");
function M1(e, t) {
  function n(r, o) {
    return h.jsx(al, { "data-testid": `${t}Icon`, ref: o, ...r, children: e });
  }
  return (n.muiName = al.muiName), C.memo(C.forwardRef(n));
}
const MP = {
    configure: (e) => {
      fp.configure(e);
    },
  },
  jP = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: Q,
        createChainedFunction: Cd,
        createSvgIcon: M1,
        debounce: vp,
        deprecatedPropType: Pk,
        isMuiElement: Ra,
        ownerDocument: Rt,
        ownerWindow: br,
        requirePropFactory: Ek,
        setRef: il,
        unstable_ClassNameGenerator: MP,
        unstable_memoTheme: Fe,
        unstable_useEnhancedEffect: Zn,
        unstable_useId: xp,
        unsupportedProp: Rk,
        useControlled: bd,
        useEventCallback: Ur,
        useForkRef: at,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function j1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function Ed(e, t) {
  return (
    (Ed = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Ed(e, t)
  );
}
function A1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ed(e, t);
}
const Xm = { disabled: !1 },
  ll = Pn.createContext(null);
var AP = function (t) {
    return t.scrollTop;
  },
  ji = "unmounted",
  Dr = "exited",
  Fr = "entering",
  po = "entered",
  Td = "exiting",
  An = (function (e) {
    A1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = Dr), (i.appearStatus = Fr))
            : (l = po)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = ji)
          : (l = Dr),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === ji ? { status: Dr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Fr && s !== po && (i = Fr)
            : (s === Fr || s === po) && (i = Td);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Fr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : na.findDOMNode(this);
              s && AP(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Dr &&
            this.setState({ status: ji });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [na.findDOMNode(this), a],
          u = l[0],
          d = l[1],
          c = this.getTimeouts(),
          f = a ? c.appear : c.enter;
        if ((!o && !s) || Xm.disabled) {
          this.safeSetState({ status: po }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: Fr }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: po }, function () {
                  i.props.onEntered(u, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : na.findDOMNode(this);
        if (!i || Xm.disabled) {
          this.safeSetState({ status: Dr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Td }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Dr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : na.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            d = l[1];
          this.props.addEndListener(u, d);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ji) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = j1(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Pn.createElement(
          ll.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : Pn.cloneElement(Pn.Children.only(s), a)
        );
      }),
      t
    );
  })(Pn.Component);
An.contextType = ll;
An.propTypes = {};
function co() {}
An.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: co,
  onEntering: co,
  onEntered: co,
  onExit: co,
  onExiting: co,
  onExited: co,
};
An.UNMOUNTED = ji;
An.EXITED = Dr;
An.ENTERING = Fr;
An.ENTERED = po;
An.EXITING = Td;
function IP(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Cp(e, t) {
  var n = function (i) {
      return t && C.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      C.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function OP(e, t) {
  (e = e || {}), (t = t || {});
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function Wr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function LP(e, t) {
  return Cp(e.children, function (n) {
    return C.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Wr(n, "appear", e),
      enter: Wr(n, "enter", e),
      exit: Wr(n, "exit", e),
    });
  });
}
function $P(e, t, n) {
  var r = Cp(e.children),
    o = OP(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (C.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          d = C.isValidElement(u) && !u.props.in;
        l && (!a || d)
          ? (o[i] = C.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Wr(s, "exit", e),
              enter: Wr(s, "enter", e),
            }))
          : !l && a && !d
          ? (o[i] = C.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            C.isValidElement(u) &&
            (o[i] = C.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: Wr(s, "exit", e),
              enter: Wr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var DP =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  FP = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  bp = (function (e) {
    A1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(IP(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? LP(o, a) : $P(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Cp(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = nl({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = j1(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = DP(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? Pn.createElement(ll.Provider, { value: l }, u)
            : Pn.createElement(
                ll.Provider,
                { value: l },
                Pn.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(Pn.Component);
bp.propTypes = {};
bp.defaultProps = FP;
const I1 = (e) => e.scrollTop;
function ul(e, t) {
  const { timeout: n, easing: r, style: o = {} } = e;
  return {
    duration:
      o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing:
      o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay,
  };
}
function _P(e) {
  return de("MuiPaper", e);
}
fe("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const NP = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return ye(i, _P, o);
  },
  zP = W("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(
    Fe(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: t }) => !t.square,
          style: { borderRadius: e.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  O1 = C.forwardRef(function (t, n) {
    var y;
    const r = Pe({ props: t, name: "MuiPaper" }),
      o = gu(),
      {
        className: i,
        component: s = "div",
        elevation: a = 1,
        square: l = !1,
        variant: u = "elevation",
        ...d
      } = r,
      c = { ...r, component: s, elevation: a, square: l, variant: u },
      f = NP(c);
    return h.jsx(zP, {
      as: s,
      ownerState: c,
      className: q(f.root, i),
      ref: n,
      ...d,
      style: {
        ...(u === "elevation" && {
          "--Paper-shadow": (o.vars || o).shadows[a],
          ...(o.vars && {
            "--Paper-overlay": (y = o.vars.overlays) == null ? void 0 : y[a],
          }),
          ...(!o.vars &&
            o.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${Jt("#fff", Pd(a))}, ${Jt(
                "#fff",
                Pd(a)
              )})`,
            }),
        }),
        ...d.style,
      },
    });
  });
function dn(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a,
      ...l
    } = t,
    {
      component: u,
      slots: d = { [e]: void 0 },
      slotProps: c = { [e]: void 0 },
      ...f
    } = i,
    y = d[e] || r,
    v = b1(c[e], o),
    {
      props: { component: S, ...b },
      internalRef: m,
    } = C1({
      className: n,
      ...l,
      externalForwardedProps: e === "root" ? f : void 0,
      externalSlotProps: v,
    }),
    g = at(m, v == null ? void 0 : v.ref, t.ref),
    p = s ? s(b) : {},
    w = { ...o, ...p },
    k = e === "root" ? S || u : S,
    P = S1(
      y,
      {
        ...(e === "root" && !u && !d[e] && a),
        ...(e !== "root" && !d[e] && a),
        ...b,
        ...(k && { as: k }),
        ref: g,
      },
      w
    );
  return (
    Object.keys(p).forEach((E) => {
      delete P[E];
    }),
    [y, P]
  );
}
class cl {
  constructor() {
    ui(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new cl();
  }
  static use() {
    const t = y1(cl.create).current,
      [n, r] = C.useState(!1);
    return (
      (t.shouldMount = n),
      (t.setShouldMount = r),
      C.useEffect(t.mountEffect, [n]),
      t
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = BP()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function VP() {
  return cl.use();
}
function BP() {
  let e, t;
  const n = new Promise((r, o) => {
    (e = r), (t = o);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function UP(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [d, c] = C.useState(!1),
    f = q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    v = q(n.child, d && n.childLeaving, r && n.childPulsate);
  return (
    !a && !d && c(!0),
    C.useEffect(() => {
      if (!a && l != null) {
        const S = setTimeout(l, u);
        return () => {
          clearTimeout(S);
        };
      }
    }, [l, a, u]),
    h.jsx("span", {
      className: f,
      style: y,
      children: h.jsx("span", { className: v }),
    })
  );
}
const Qt = fe("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Rd = 550,
  WP = 80,
  HP = js`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  KP = js`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  GP = js`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  XP = W("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  QP = W(UP, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Qt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${HP};
    animation-duration: ${Rd}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${Qt.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Qt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Qt.childLeaving} {
    opacity: 0;
    animation-name: ${KP};
    animation-duration: ${Rd}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${Qt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${GP};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  YP = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s, ...a } = r,
      [l, u] = C.useState([]),
      d = C.useRef(0),
      c = C.useRef(null);
    C.useEffect(() => {
      c.current && (c.current(), (c.current = null));
    }, [l]);
    const f = C.useRef(!1),
      y = v1(),
      v = C.useRef(null),
      S = C.useRef(null),
      b = C.useCallback(
        (w) => {
          const {
            pulsate: k,
            rippleX: P,
            rippleY: E,
            rippleSize: R,
            cb: x,
          } = w;
          u((T) => [
            ...T,
            h.jsx(
              QP,
              {
                classes: {
                  ripple: q(i.ripple, Qt.ripple),
                  rippleVisible: q(i.rippleVisible, Qt.rippleVisible),
                  ripplePulsate: q(i.ripplePulsate, Qt.ripplePulsate),
                  child: q(i.child, Qt.child),
                  childLeaving: q(i.childLeaving, Qt.childLeaving),
                  childPulsate: q(i.childPulsate, Qt.childPulsate),
                },
                timeout: Rd,
                pulsate: k,
                rippleX: P,
                rippleY: E,
                rippleSize: R,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (c.current = x);
        },
        [i]
      ),
      m = C.useCallback(
        (w = {}, k = {}, P = () => {}) => {
          const {
            pulsate: E = !1,
            center: R = o || k.pulsate,
            fakeElement: x = !1,
          } = k;
          if ((w == null ? void 0 : w.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (w == null ? void 0 : w.type) === "touchstart" && (f.current = !0);
          const T = x ? null : S.current,
            A = T
              ? T.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let $, V, N;
          if (
            R ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            ($ = Math.round(A.width / 2)), (V = Math.round(A.height / 2));
          else {
            const { clientX: O, clientY: L } =
              w.touches && w.touches.length > 0 ? w.touches[0] : w;
            ($ = Math.round(O - A.left)), (V = Math.round(L - A.top));
          }
          if (R)
            (N = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              N % 2 === 0 && (N += 1);
          else {
            const O =
                Math.max(Math.abs((T ? T.clientWidth : 0) - $), $) * 2 + 2,
              L = Math.max(Math.abs((T ? T.clientHeight : 0) - V), V) * 2 + 2;
            N = Math.sqrt(O ** 2 + L ** 2);
          }
          w != null && w.touches
            ? v.current === null &&
              ((v.current = () => {
                b({ pulsate: E, rippleX: $, rippleY: V, rippleSize: N, cb: P });
              }),
              y.start(WP, () => {
                v.current && (v.current(), (v.current = null));
              }))
            : b({ pulsate: E, rippleX: $, rippleY: V, rippleSize: N, cb: P });
        },
        [o, b, y]
      ),
      g = C.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      p = C.useCallback(
        (w, k) => {
          if (
            (y.clear(),
            (w == null ? void 0 : w.type) === "touchend" && v.current)
          ) {
            v.current(),
              (v.current = null),
              y.start(0, () => {
                p(w, k);
              });
            return;
          }
          (v.current = null),
            u((P) => (P.length > 0 ? P.slice(1) : P)),
            (c.current = k);
        },
        [y]
      );
    return (
      C.useImperativeHandle(n, () => ({ pulsate: g, start: m, stop: p }), [
        g,
        m,
        p,
      ]),
      h.jsx(XP, {
        className: q(Qt.root, i.root, s),
        ref: S,
        ...a,
        children: h.jsx(bp, { component: null, exit: !0, children: l }),
      })
    );
  });
function qP(e) {
  return de("MuiButtonBase", e);
}
const ZP = fe("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  JP = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = ye({ root: ["root", t && "disabled", n && "focusVisible"] }, qP, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  eE = W("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${ZP.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  tE = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: c = !1,
        focusRipple: f = !1,
        focusVisibleClassName: y,
        LinkComponent: v = "a",
        onBlur: S,
        onClick: b,
        onContextMenu: m,
        onDragLeave: g,
        onFocus: p,
        onFocusVisible: w,
        onKeyDown: k,
        onKeyUp: P,
        onMouseDown: E,
        onMouseLeave: R,
        onMouseUp: x,
        onTouchEnd: T,
        onTouchMove: A,
        onTouchStart: $,
        tabIndex: V = 0,
        TouchRippleProps: N,
        touchRippleRef: O,
        type: L,
        ...z
      } = r,
      M = C.useRef(null),
      D = VP(),
      U = at(D.ref, O),
      [X, ee] = C.useState(!1);
    u && X && ee(!1),
      C.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ee(!0), M.current.focus();
          },
        }),
        []
      );
    const Z = D.shouldMount && !d && !u;
    C.useEffect(() => {
      X && f && !d && D.pulsate();
    }, [d, f, X, D]);
    function Y(H, et, ii = c) {
      return Ur((On) => (et && et(On), ii || D[H](On), !0));
    }
    const xe = Y("start", E),
      Se = Y("stop", m),
      Be = Y("stop", g),
      wt = Y("stop", x),
      _e = Y("stop", (H) => {
        X && H.preventDefault(), R && R(H);
      }),
      te = Y("start", $),
      ae = Y("stop", T),
      ne = Y("stop", A),
      qe = Y(
        "stop",
        (H) => {
          sl(H.target) || ee(!1), S && S(H);
        },
        !1
      ),
      oe = Ur((H) => {
        M.current || (M.current = H.currentTarget),
          sl(H.target) && (ee(!0), w && w(H)),
          p && p(H);
      }),
      he = () => {
        const H = M.current;
        return l && l !== "button" && !(H.tagName === "A" && H.href);
      },
      Bt = Ur((H) => {
        f &&
          !H.repeat &&
          X &&
          H.key === " " &&
          D.stop(H, () => {
            D.start(H);
          }),
          H.target === H.currentTarget &&
            he() &&
            H.key === " " &&
            H.preventDefault(),
          k && k(H),
          H.target === H.currentTarget &&
            he() &&
            H.key === "Enter" &&
            !u &&
            (H.preventDefault(), b && b(H));
      }),
      Ut = Ur((H) => {
        f &&
          H.key === " " &&
          X &&
          !H.defaultPrevented &&
          D.stop(H, () => {
            D.pulsate(H);
          }),
          P && P(H),
          b &&
            H.target === H.currentTarget &&
            he() &&
            H.key === " " &&
            !H.defaultPrevented &&
            b(H);
      });
    let Ze = l;
    Ze === "button" && (z.href || z.to) && (Ze = v);
    const Je = {};
    Ze === "button"
      ? ((Je.type = L === void 0 ? "button" : L), (Je.disabled = u))
      : (!z.href && !z.to && (Je.role = "button"),
        u && (Je["aria-disabled"] = u));
    const gn = at(n, M),
      we = {
        ...r,
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: c,
        focusRipple: f,
        tabIndex: V,
        focusVisible: X,
      },
      In = JP(we);
    return h.jsxs(eE, {
      as: Ze,
      className: q(In.root, a),
      ownerState: we,
      onBlur: qe,
      onClick: b,
      onContextMenu: Se,
      onFocus: oe,
      onKeyDown: Bt,
      onKeyUp: Ut,
      onMouseDown: xe,
      onMouseLeave: _e,
      onMouseUp: wt,
      onDragLeave: Be,
      onTouchEnd: ae,
      onTouchMove: ne,
      onTouchStart: te,
      ref: gn,
      tabIndex: u ? -1 : V,
      type: L,
      ...Je,
      ...z,
      children: [s, Z ? h.jsx(YP, { ref: U, center: i, ...N }) : null],
    });
  });
function nE(e) {
  return de("MuiTypography", e);
}
fe("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const rE = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  oE = PP(),
  iE = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${Q(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return ye(a, nE, s);
  },
  sE = W("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${Q(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(
    Fe(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== "inherit" && r && typeof r == "object")
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(([, n]) => n && n.main)
            .map(([n]) => ({
              props: { color: n },
              style: { color: (e.vars || e).palette[n].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == "string")
            .map(([n]) => ({
              props: { color: `text${Q(n)}` },
              style: { color: (e.vars || e).palette.text[n] },
            })),
          {
            props: ({ ownerState: n }) => n.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: n }) => n.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: n }) => n.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  Qm = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  _ = C.forwardRef(function (t, n) {
    const { color: r, ...o } = Pe({ props: t, name: "MuiTypography" }),
      i = !rE[r],
      s = oE({ ...o, ...(i && { color: r }) }),
      {
        align: a = "inherit",
        className: l,
        component: u,
        gutterBottom: d = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: y = "body1",
        variantMapping: v = Qm,
        ...S
      } = s,
      b = {
        ...s,
        align: a,
        color: r,
        className: l,
        component: u,
        gutterBottom: d,
        noWrap: c,
        paragraph: f,
        variant: y,
        variantMapping: v,
      },
      m = u || (f ? "p" : v[y] || Qm[y]) || "span",
      g = iE(b);
    return h.jsx(sE, {
      as: m,
      ref: n,
      className: q(g.root, l),
      ...S,
      ownerState: b,
      style: {
        ...(a !== "inherit" && { "--Typography-textAlign": a }),
        ...S.style,
      },
    });
  });
function aE(e) {
  return typeof e == "function" ? e() : e;
}
const lE = C.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = C.useState(null),
    l = at(Ls(r), n);
  if (
    (Zn(() => {
      i || a(aE(o) || document.body);
    }, [o, i]),
    Zn(() => {
      if (s && !i)
        return (
          il(n, s),
          () => {
            il(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (C.isValidElement(r)) {
      const u = { ref: l };
      return C.cloneElement(r, u);
    }
    return h.jsx(C.Fragment, { children: r });
  }
  return h.jsx(C.Fragment, { children: s && Zf.createPortal(r, s) });
});
function la(e) {
  return parseInt(e, 10) || 0;
}
const uE = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function cE(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const dE = C.forwardRef(function (t, n) {
  const {
      onChange: r,
      maxRows: o,
      minRows: i = 1,
      style: s,
      value: a,
      ...l
    } = t,
    { current: u } = C.useRef(a != null),
    d = C.useRef(null),
    c = at(n, d),
    f = C.useRef(null),
    y = C.useRef(null),
    v = C.useCallback(() => {
      const m = d.current,
        p = br(m).getComputedStyle(m);
      if (p.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const w = y.current;
      (w.style.width = p.width),
        (w.value = m.value || t.placeholder || "x"),
        w.value.slice(-1) ===
          `
` && (w.value += " ");
      const k = p.boxSizing,
        P = la(p.paddingBottom) + la(p.paddingTop),
        E = la(p.borderBottomWidth) + la(p.borderTopWidth),
        R = w.scrollHeight;
      w.value = "x";
      const x = w.scrollHeight;
      let T = R;
      i && (T = Math.max(Number(i) * x, T)),
        o && (T = Math.min(Number(o) * x, T)),
        (T = Math.max(T, x));
      const A = T + (k === "border-box" ? P + E : 0),
        $ = Math.abs(T - R) <= 1;
      return { outerHeightStyle: A, overflowing: $ };
    }, [o, i, t.placeholder]),
    S = C.useCallback(() => {
      const m = v();
      if (cE(m)) return;
      const g = m.outerHeightStyle,
        p = d.current;
      f.current !== g && ((f.current = g), (p.style.height = `${g}px`)),
        (p.style.overflow = m.overflowing ? "hidden" : "");
    }, [v]);
  Zn(() => {
    const m = () => {
      S();
    };
    let g;
    const p = vp(m),
      w = d.current,
      k = br(w);
    k.addEventListener("resize", p);
    let P;
    return (
      typeof ResizeObserver < "u" &&
        ((P = new ResizeObserver(m)), P.observe(w)),
      () => {
        p.clear(),
          cancelAnimationFrame(g),
          k.removeEventListener("resize", p),
          P && P.disconnect();
      }
    );
  }, [v, S]),
    Zn(() => {
      S();
    });
  const b = (m) => {
    u || S(), r && r(m);
  };
  return h.jsxs(C.Fragment, {
    children: [
      h.jsx("textarea", {
        value: a,
        onChange: b,
        ref: c,
        rows: i,
        style: s,
        ...l,
      }),
      h.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: y,
        tabIndex: -1,
        style: { ...uE.shadow, ...s, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Md(e) {
  return typeof e == "string";
}
function ni({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const kp = C.createContext(void 0);
function ri() {
  return C.useContext(kp);
}
function Ym(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function dl(e, t = !1) {
  return (
    e &&
    ((Ym(e.value) && e.value !== "") ||
      (t && Ym(e.defaultValue) && e.defaultValue !== ""))
  );
}
function fE(e) {
  return e.startAdornment;
}
function pE(e) {
  return de("MuiInputBase", e);
}
const Xo = fe("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var qm;
const yu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${Q(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  vu = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  hE = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: d,
        readOnly: c,
        size: f,
        startAdornment: y,
        type: v,
      } = e,
      S = {
        root: [
          "root",
          `color${Q(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          f && f !== "medium" && `size${Q(f)}`,
          d && "multiline",
          y && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          c && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          v === "search" && "inputTypeSearch",
          d && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          y && "inputAdornedStart",
          i && "inputAdornedEnd",
          c && "readOnly",
        ],
      };
    return ye(S, pE, t);
  },
  xu = W("div", { name: "MuiInputBase", slot: "Root", overridesResolver: yu })(
    Fe(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${Xo.disabled}`]: {
        color: (e.vars || e).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: t, size: n }) => t.multiline && n === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  Su = W("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: vu,
  })(
    Fe(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = {
          color: "currentColor",
          ...(e.vars
            ? { opacity: e.vars.opacity.inputPlaceholder }
            : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        },
        r = { opacity: "0 !important" },
        o = e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: t ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": n,
        "&::-moz-placeholder": n,
        "&::-ms-input-placeholder": n,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Xo.formControl} &`]: {
          "&::-webkit-input-placeholder": r,
          "&::-moz-placeholder": r,
          "&::-ms-input-placeholder": r,
          "&:focus::-webkit-input-placeholder": o,
          "&:focus::-moz-placeholder": o,
          "&:focus::-ms-input-placeholder": o,
        },
        [`&.${Xo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    })
  ),
  Zm = kP({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  mE = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": o,
        autoComplete: i,
        autoFocus: s,
        className: a,
        color: l,
        components: u = {},
        componentsProps: d = {},
        defaultValue: c,
        disabled: f,
        disableInjectingGlobalStyles: y,
        endAdornment: v,
        error: S,
        fullWidth: b = !1,
        id: m,
        inputComponent: g = "input",
        inputProps: p = {},
        inputRef: w,
        margin: k,
        maxRows: P,
        minRows: E,
        multiline: R = !1,
        name: x,
        onBlur: T,
        onChange: A,
        onClick: $,
        onFocus: V,
        onKeyDown: N,
        onKeyUp: O,
        placeholder: L,
        readOnly: z,
        renderSuffix: M,
        rows: D,
        size: U,
        slotProps: X = {},
        slots: ee = {},
        startAdornment: Z,
        type: Y = "text",
        value: xe,
        ...Se
      } = r,
      Be = p.value != null ? p.value : xe,
      { current: wt } = C.useRef(Be != null),
      _e = C.useRef(),
      te = C.useCallback((Ee) => {}, []),
      ae = at(_e, w, p.ref, te),
      [ne, qe] = C.useState(!1),
      oe = ri(),
      he = ni({
        props: r,
        muiFormControl: oe,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (he.focused = oe ? oe.focused : ne),
      C.useEffect(() => {
        !oe && f && ne && (qe(!1), T && T());
      }, [oe, f, ne, T]);
    const Bt = oe && oe.onFilled,
      Ut = oe && oe.onEmpty,
      Ze = C.useCallback(
        (Ee) => {
          dl(Ee) ? Bt && Bt() : Ut && Ut();
        },
        [Bt, Ut]
      );
    Zn(() => {
      wt && Ze({ value: Be });
    }, [Be, Ze, wt]);
    const Je = (Ee) => {
        V && V(Ee),
          p.onFocus && p.onFocus(Ee),
          oe && oe.onFocus ? oe.onFocus(Ee) : qe(!0);
      },
      gn = (Ee) => {
        T && T(Ee),
          p.onBlur && p.onBlur(Ee),
          oe && oe.onBlur ? oe.onBlur(Ee) : qe(!1);
      },
      we = (Ee, ...ai) => {
        if (!wt) {
          const li = Ee.target || _e.current;
          if (li == null) throw new Error(Yn(1));
          Ze({ value: li.value });
        }
        p.onChange && p.onChange(Ee, ...ai), A && A(Ee, ...ai);
      };
    C.useEffect(() => {
      Ze(_e.current);
    }, []);
    const In = (Ee) => {
      _e.current && Ee.currentTarget === Ee.target && _e.current.focus(),
        $ && $(Ee);
    };
    let H = g,
      et = p;
    R &&
      H === "input" &&
      (D
        ? (et = { type: void 0, minRows: D, maxRows: D, ...et })
        : (et = { type: void 0, maxRows: P, minRows: E, ...et }),
      (H = dE));
    const ii = (Ee) => {
      Ze(
        Ee.animationName === "mui-auto-fill-cancel"
          ? _e.current
          : { value: "x" }
      );
    };
    C.useEffect(() => {
      oe && oe.setAdornedStart(!!Z);
    }, [oe, Z]);
    const On = {
        ...r,
        color: he.color || "primary",
        disabled: he.disabled,
        endAdornment: v,
        error: he.error,
        focused: he.focused,
        formControl: oe,
        fullWidth: b,
        hiddenLabel: he.hiddenLabel,
        multiline: R,
        size: he.size,
        startAdornment: Z,
        type: Y,
      },
      Ar = hE(On),
      si = ee.root || u.Root || xu,
      tr = X.root || d.root || {},
      no = ee.input || u.Input || Su;
    return (
      (et = { ...et, ...(X.input ?? d.input) }),
      h.jsxs(C.Fragment, {
        children: [
          !y && typeof Zm == "function" && (qm || (qm = h.jsx(Zm, {}))),
          h.jsxs(si, {
            ...tr,
            ref: n,
            onClick: In,
            ...Se,
            ...(!Md(si) && { ownerState: { ...On, ...tr.ownerState } }),
            className: q(
              Ar.root,
              tr.className,
              a,
              z && "MuiInputBase-readOnly"
            ),
            children: [
              Z,
              h.jsx(kp.Provider, {
                value: null,
                children: h.jsx(no, {
                  "aria-invalid": he.error,
                  "aria-describedby": o,
                  autoComplete: i,
                  autoFocus: s,
                  defaultValue: c,
                  disabled: he.disabled,
                  id: m,
                  onAnimationStart: ii,
                  name: x,
                  placeholder: L,
                  readOnly: z,
                  required: he.required,
                  rows: D,
                  value: Be,
                  onKeyDown: N,
                  onKeyUp: O,
                  type: Y,
                  ...et,
                  ...(!Md(no) && {
                    as: H,
                    ownerState: { ...On, ...et.ownerState },
                  }),
                  ref: ae,
                  className: q(
                    Ar.input,
                    et.className,
                    z && "MuiInputBase-readOnly"
                  ),
                  onBlur: gn,
                  onChange: we,
                  onFocus: Je,
                }),
              }),
              v,
              M ? M({ ...he, startAdornment: Z }) : null,
            ],
          }),
        ],
      })
    );
  }),
  Pp = mE;
function gE(e) {
  return de("MuiInput", e);
}
const Si = { ...Xo, ...fe("MuiInput", ["root", "underline", "input"]) };
function yE(e) {
  return de("MuiOutlinedInput", e);
}
const xn = {
  ...Xo,
  ...fe("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function vE(e) {
  return de("MuiFilledInput", e);
}
const Ir = {
    ...Xo,
    ...fe("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  xE = M1(h.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  SE = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  wE = C.forwardRef(function (t, n) {
    const r = gu(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: d,
        onEntered: c,
        onEntering: f,
        onExit: y,
        onExited: v,
        onExiting: S,
        style: b,
        timeout: m = o,
        TransitionComponent: g = An,
        ...p
      } = t,
      w = C.useRef(null),
      k = at(w, Ls(a), n),
      P = (N) => (O) => {
        if (N) {
          const L = w.current;
          O === void 0 ? N(L) : N(L, O);
        }
      },
      E = P(f),
      R = P((N, O) => {
        I1(N);
        const L = ul({ style: b, timeout: m, easing: l }, { mode: "enter" });
        (N.style.webkitTransition = r.transitions.create("opacity", L)),
          (N.style.transition = r.transitions.create("opacity", L)),
          d && d(N, O);
      }),
      x = P(c),
      T = P(S),
      A = P((N) => {
        const O = ul({ style: b, timeout: m, easing: l }, { mode: "exit" });
        (N.style.webkitTransition = r.transitions.create("opacity", O)),
          (N.style.transition = r.transitions.create("opacity", O)),
          y && y(N);
      }),
      $ = P(v),
      V = (N) => {
        i && i(w.current, N);
      };
    return h.jsx(g, {
      appear: s,
      in: u,
      nodeRef: w,
      onEnter: R,
      onEntered: x,
      onEntering: E,
      onExit: A,
      onExited: $,
      onExiting: T,
      addEndListener: V,
      timeout: m,
      ...p,
      children: (N, O) =>
        C.cloneElement(a, {
          style: {
            opacity: 0,
            visibility: N === "exited" && !u ? "hidden" : void 0,
            ...SE[N],
            ...b,
            ...a.props.style,
          },
          ref: k,
          ...O,
        }),
    });
  });
function CE(e) {
  return de("MuiBackdrop", e);
}
fe("MuiBackdrop", ["root", "invisible"]);
const bE = (e) => {
    const { classes: t, invisible: n } = e;
    return ye({ root: ["root", n && "invisible"] }, CE, t);
  },
  kE = W("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  PE = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiBackdrop" }),
      {
        children: o,
        className: i,
        component: s = "div",
        invisible: a = !1,
        open: l,
        components: u = {},
        componentsProps: d = {},
        slotProps: c = {},
        slots: f = {},
        TransitionComponent: y,
        transitionDuration: v,
        ...S
      } = r,
      b = { ...r, component: s, invisible: a },
      m = bE(b),
      g = { transition: y, root: u.Root, ...f },
      p = { ...d, ...c },
      w = { slots: g, slotProps: p },
      [k, P] = dn("root", {
        elementType: kE,
        externalForwardedProps: w,
        className: q(m.root, i),
        ownerState: b,
      }),
      [E, R] = dn("transition", {
        elementType: wE,
        externalForwardedProps: w,
        ownerState: b,
      });
    return (
      delete R.ownerState,
      h.jsx(E, {
        in: l,
        timeout: v,
        ...S,
        ...R,
        children: h.jsx(k, {
          "aria-hidden": !0,
          ...P,
          classes: m,
          ref: n,
          children: o,
        }),
      })
    );
  }),
  EE = fe("MuiBox", ["root"]),
  TE = E1(),
  F = lk({
    themeId: Rs,
    defaultTheme: TE,
    defaultClassName: EE.root,
    generateClassName: fp.generate,
  });
function RE(e) {
  return de("MuiButton", e);
}
const fo = fe("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  ME = C.createContext({}),
  jE = C.createContext(void 0),
  AE = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${Q(t)}`,
          `size${Q(o)}`,
          `${i}Size${Q(o)}`,
          `color${Q(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${Q(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${Q(o)}`],
      },
      l = ye(a, RE, s);
    return { ...s, ...l };
  },
  L1 = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  IE = W(tE, {
    shouldForwardProp: (e) => mn(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${Q(n.color)}`],
        t[`size${Q(n.size)}`],
        t[`${n.variant}Size${Q(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    Fe(({ theme: e }) => {
      var r, o;
      const t =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        n =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: e.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${fo.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (e.vars || e).shadows[2],
              "&:hover": {
                boxShadow: (e.vars || e).shadows[4],
                "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] },
              },
              "&:active": { boxShadow: (e.vars || e).shadows[8] },
              [`&.${fo.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${fo.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${fo.disabled}`]: {
                border: `1px solid ${
                  (e.vars || e).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(e.palette)
            .filter(([, i]) => i && i.main && i.dark && i.contrastText)
            .map(([i]) => ({
              props: { color: i },
              style: {
                "--variant-textColor": (e.vars || e).palette[i].main,
                "--variant-outlinedColor": (e.vars || e).palette[i].main,
                "--variant-outlinedBorder": e.vars
                  ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)`
                  : Jt(e.palette[i].main, 0.5),
                "--variant-containedColor": (e.vars || e).palette[i]
                  .contrastText,
                "--variant-containedBg": (e.vars || e).palette[i].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (e.vars || e).palette[i].dark,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Jt(e.palette[i].main, e.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (e.vars || e).palette[i].main,
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : Jt(e.palette[i].main, e.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              "--variant-containedColor": e.vars
                ? e.vars.palette.text.primary
                : (o = (r = e.palette).getContrastText) == null
                ? void 0
                : o.call(r, t),
              "--variant-containedBg": e.vars
                ? e.vars.palette.Button.inheritContainedBg
                : t,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : n,
                  "--variant-textBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Jt(e.palette.text.primary, e.palette.action.hoverOpacity),
                  "--variant-outlinedBg": e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Jt(e.palette.text.primary, e.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${fo.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${fo.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
        ],
      };
    })
  ),
  OE = W("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${Q(n.size)}`]];
    },
  })({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, ...L1],
  }),
  LE = W("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${Q(n.size)}`]];
    },
  })({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, ...L1],
  }),
  ys = C.forwardRef(function (t, n) {
    const r = C.useContext(ME),
      o = C.useContext(jE),
      i = gs(r, t),
      s = Pe({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: d,
        disabled: c = !1,
        disableElevation: f = !1,
        disableFocusRipple: y = !1,
        endIcon: v,
        focusVisibleClassName: S,
        fullWidth: b = !1,
        size: m = "medium",
        startIcon: g,
        type: p,
        variant: w = "text",
        ...k
      } = s,
      P = {
        ...s,
        color: l,
        component: u,
        disabled: c,
        disableElevation: f,
        disableFocusRipple: y,
        fullWidth: b,
        size: m,
        type: p,
        variant: w,
      },
      E = AE(P),
      R =
        g && h.jsx(OE, { className: E.startIcon, ownerState: P, children: g }),
      x = v && h.jsx(LE, { className: E.endIcon, ownerState: P, children: v }),
      T = o || "";
    return h.jsxs(IE, {
      ownerState: P,
      className: q(r.className, E.root, d, T),
      component: u,
      disabled: c,
      focusRipple: !y,
      focusVisibleClassName: q(E.focusVisible, S),
      ref: n,
      type: p,
      ...k,
      classes: E,
      children: [R, a, x],
    });
  });
function $E(e) {
  return de("MuiCard", e);
}
fe("MuiCard", ["root"]);
const DE = (e) => {
    const { classes: t } = e;
    return ye({ root: ["root"] }, $E, t);
  },
  FE = W(O1, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ overflow: "hidden" }),
  Wt = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1, ...s } = r,
      a = { ...r, raised: i },
      l = DE(a);
    return h.jsx(FE, {
      className: q(l.root, o),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: a,
      ...s,
    });
  });
function _E(e) {
  return de("MuiCardContent", e);
}
fe("MuiCardContent", ["root"]);
const NE = (e) => {
    const { classes: t } = e;
    return ye({ root: ["root"] }, _E, t);
  },
  zE = W("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
  Ht = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div", ...s } = r,
      a = { ...r, component: i },
      l = NE(a);
    return h.jsx(zE, {
      as: i,
      className: q(l.root, o),
      ownerState: a,
      ref: n,
      ...s,
    });
  });
function VE(e) {
  return de("MuiCardMedia", e);
}
fe("MuiCardMedia", ["root", "media", "img"]);
const BE = (e) => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e;
    return ye({ root: ["root", n && "media", r && "img"] }, VE, t);
  },
  UE = W("div", {
    name: "MuiCardMedia",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { isMediaComponent: r, isImageComponent: o } = n;
      return [t.root, r && t.media, o && t.img];
    },
  })({
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    variants: [
      { props: { isMediaComponent: !0 }, style: { width: "100%" } },
      { props: { isImageComponent: !0 }, style: { objectFit: "cover" } },
    ],
  }),
  WE = ["video", "audio", "picture", "iframe", "img"],
  HE = ["picture", "img"],
  Kt = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiCardMedia" }),
      {
        children: o,
        className: i,
        component: s = "div",
        image: a,
        src: l,
        style: u,
        ...d
      } = r,
      c = WE.includes(s),
      f = !c && a ? { backgroundImage: `url("${a}")`, ...u } : u,
      y = {
        ...r,
        component: s,
        isMediaComponent: c,
        isImageComponent: HE.includes(s),
      },
      v = BE(y);
    return h.jsx(UE, {
      className: q(v.root, i),
      as: s,
      role: !c && a ? "img" : void 0,
      ref: n,
      style: f,
      ownerState: y,
      src: c ? a || l : void 0,
      ...d,
      children: o,
    });
  });
function KE(e) {
  return de("MuiCircularProgress", e);
}
fe("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const rr = 44,
  jd = js`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Ad = js`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,
  GE =
    typeof jd != "string"
      ? ap`
        animation: ${jd} 1.4s linear infinite;
      `
      : null,
  XE =
    typeof Ad != "string"
      ? ap`
        animation: ${Ad} 1.4s ease-in-out infinite;
      `
      : null,
  QE = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${Q(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${Q(n)}`, o && "circleDisableShrink"],
      };
    return ye(i, KE, t);
  },
  YE = W("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${Q(n.color)}`]];
    },
  })(
    Fe(({ theme: e }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: GE || { animation: `${jd} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main)
          .map(([t]) => ({
            props: { color: t },
            style: { color: (e.vars || e).palette[t].main },
          })),
      ],
    }))
  ),
  qE = W("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  ZE = W("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${Q(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    Fe(({ theme: e }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: e.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) =>
            t.variant === "indeterminate" && !t.disableShrink,
          style: XE || { animation: `${Ad} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  Oe = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: d = 0,
        variant: c = "indeterminate",
        ...f
      } = r,
      y = {
        ...r,
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: d,
        variant: c,
      },
      v = QE(y),
      S = {},
      b = {},
      m = {};
    if (c === "determinate") {
      const g = 2 * Math.PI * ((rr - u) / 2);
      (S.strokeDasharray = g.toFixed(3)),
        (m["aria-valuenow"] = Math.round(d)),
        (S.strokeDashoffset = `${(((100 - d) / 100) * g).toFixed(3)}px`),
        (b.transform = "rotate(-90deg)");
    }
    return h.jsx(YE, {
      className: q(v.root, o),
      style: { width: a, height: a, ...b, ...l },
      ownerState: y,
      ref: n,
      role: "progressbar",
      ...m,
      ...f,
      children: h.jsx(qE, {
        className: v.svg,
        ownerState: y,
        viewBox: `${rr / 2} ${rr / 2} ${rr} ${rr}`,
        children: h.jsx(ZE, {
          className: v.circle,
          style: S,
          ownerState: y,
          cx: rr,
          cy: rr,
          r: (rr - u) / 2,
          fill: "none",
          strokeWidth: u,
        }),
      }),
    });
  }),
  $1 = Kk({
    createStyledComponent: W("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${Q(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => T1({ props: e, name: "MuiContainer" }),
  });
function JE(e) {
  const t = Rt(e);
  return t.body === e
    ? br(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function Ui(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Jm(e) {
  return parseInt(br(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function eT(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function eg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !eT(s);
    a && l && Ui(s, o);
  });
}
function sc(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function tT(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (JE(r)) {
      const s = x1(Rt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Jm(r) + s}px`);
      const a = Rt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Jm(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Rt(r).body;
    else {
      const s = r.parentElement,
        a = br(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function nT(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class rT {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && Ui(t.modalRef, !1);
    const o = nT(n);
    eg(n, t.mount, t.modalRef, o, !0);
    const i = sc(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = sc(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = tT(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = sc(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && Ui(t.modalRef, n),
        eg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ui(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const oT = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function iT(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function sT(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function aT(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    sT(e)
  );
}
function lT(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(oT)).forEach((r, o) => {
      const i = iT(r);
      i === -1 ||
        !aT(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function uT() {
  return !0;
}
function cT(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = lT,
      isEnabled: s = uT,
      open: a,
    } = e,
    l = C.useRef(!1),
    u = C.useRef(null),
    d = C.useRef(null),
    c = C.useRef(null),
    f = C.useRef(null),
    y = C.useRef(!1),
    v = C.useRef(null),
    S = at(Ls(t), v),
    b = C.useRef(null);
  C.useEffect(() => {
    !a || !v.current || (y.current = !n);
  }, [n, a]),
    C.useEffect(() => {
      if (!a || !v.current) return;
      const p = Rt(v.current);
      return (
        v.current.contains(p.activeElement) ||
          (v.current.hasAttribute("tabIndex") ||
            v.current.setAttribute("tabIndex", "-1"),
          y.current && v.current.focus()),
        () => {
          o ||
            (c.current &&
              c.current.focus &&
              ((l.current = !0), c.current.focus()),
            (c.current = null));
        }
      );
    }, [a]),
    C.useEffect(() => {
      if (!a || !v.current) return;
      const p = Rt(v.current),
        w = (E) => {
          (b.current = E),
            !(r || !s() || E.key !== "Tab") &&
              p.activeElement === v.current &&
              E.shiftKey &&
              ((l.current = !0), d.current && d.current.focus());
        },
        k = () => {
          var x, T;
          const E = v.current;
          if (E === null) return;
          if (!p.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            E.contains(p.activeElement) ||
            (r &&
              p.activeElement !== u.current &&
              p.activeElement !== d.current)
          )
            return;
          if (p.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!y.current) return;
          let R = [];
          if (
            ((p.activeElement === u.current || p.activeElement === d.current) &&
              (R = i(v.current)),
            R.length > 0)
          ) {
            const A = !!(
                (x = b.current) != null &&
                x.shiftKey &&
                ((T = b.current) == null ? void 0 : T.key) === "Tab"
              ),
              $ = R[0],
              V = R[R.length - 1];
            typeof $ != "string" &&
              typeof V != "string" &&
              (A ? V.focus() : $.focus());
          } else E.focus();
        };
      p.addEventListener("focusin", k), p.addEventListener("keydown", w, !0);
      const P = setInterval(() => {
        p.activeElement && p.activeElement.tagName === "BODY" && k();
      }, 50);
      return () => {
        clearInterval(P),
          p.removeEventListener("focusin", k),
          p.removeEventListener("keydown", w, !0);
      };
    }, [n, r, o, s, a, i]);
  const m = (p) => {
      c.current === null && (c.current = p.relatedTarget),
        (y.current = !0),
        (f.current = p.target);
      const w = t.props.onFocus;
      w && w(p);
    },
    g = (p) => {
      c.current === null && (c.current = p.relatedTarget), (y.current = !0);
    };
  return h.jsxs(C.Fragment, {
    children: [
      h.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: g,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      C.cloneElement(t, { ref: S, onFocus: m }),
      h.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: g,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function dT(e) {
  return typeof e == "function" ? e() : e;
}
function fT(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const pT = new rT();
function hT(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = pT,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: d,
      rootRef: c,
    } = e,
    f = C.useRef({}),
    y = C.useRef(null),
    v = C.useRef(null),
    S = at(v, c),
    [b, m] = C.useState(!d),
    g = fT(l);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const w = () => Rt(y.current),
    k = () => (
      (f.current.modalRef = v.current), (f.current.mount = y.current), f.current
    ),
    P = () => {
      o.mount(k(), { disableScrollLock: r }),
        v.current && (v.current.scrollTop = 0);
    },
    E = Ur(() => {
      const L = dT(t) || w().body;
      o.add(k(), L), v.current && P();
    }),
    R = C.useCallback(() => o.isTopModal(k()), [o]),
    x = Ur((L) => {
      (y.current = L), L && (d && R() ? P() : v.current && Ui(v.current, p));
    }),
    T = C.useCallback(() => {
      o.remove(k(), p);
    }, [p, o]);
  C.useEffect(
    () => () => {
      T();
    },
    [T]
  ),
    C.useEffect(() => {
      d ? E() : (!g || !i) && T();
    }, [d, T, g, i, E]);
  const A = (L) => (z) => {
      var M;
      (M = L.onKeyDown) == null || M.call(L, z),
        !(z.key !== "Escape" || z.which === 229 || !R()) &&
          (n || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
    },
    $ = (L) => (z) => {
      var M;
      (M = L.onClick) == null || M.call(L, z),
        z.target === z.currentTarget && u && u(z, "backdropClick");
    };
  return {
    getRootProps: (L = {}) => {
      const z = w1(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const M = { ...z, ...L };
      return { role: "presentation", ...M, onKeyDown: A(M), ref: S };
    },
    getBackdropProps: (L = {}) => {
      const z = L;
      return { "aria-hidden": !0, ...z, onClick: $(z), open: d };
    },
    getTransitionProps: () => {
      const L = () => {
          m(!1), s && s();
        },
        z = () => {
          m(!0), a && a(), i && T();
        };
      return {
        onEnter: Cd(L, l == null ? void 0 : l.props.onEnter),
        onExited: Cd(z, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: S,
    portalRef: x,
    isTopModal: R,
    exited: b,
    hasTransition: g,
  };
}
function mT(e) {
  return de("MuiModal", e);
}
fe("MuiModal", ["root", "hidden", "backdrop"]);
const gT = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return ye(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      mT,
      r
    );
  },
  yT = W("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(
    Fe(({ theme: e }) => ({
      position: "fixed",
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: t }) => !t.open && t.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  vT = W(PE, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  xT = C.forwardRef(function (t, n) {
    const r = Pe({ name: "MuiModal", props: t }),
      {
        BackdropComponent: o = vT,
        BackdropProps: i,
        classes: s,
        className: a,
        closeAfterTransition: l = !1,
        children: u,
        container: d,
        component: c,
        components: f = {},
        componentsProps: y = {},
        disableAutoFocus: v = !1,
        disableEnforceFocus: S = !1,
        disableEscapeKeyDown: b = !1,
        disablePortal: m = !1,
        disableRestoreFocus: g = !1,
        disableScrollLock: p = !1,
        hideBackdrop: w = !1,
        keepMounted: k = !1,
        onBackdropClick: P,
        onClose: E,
        onTransitionEnter: R,
        onTransitionExited: x,
        open: T,
        slotProps: A = {},
        slots: $ = {},
        theme: V,
        ...N
      } = r,
      O = {
        ...r,
        closeAfterTransition: l,
        disableAutoFocus: v,
        disableEnforceFocus: S,
        disableEscapeKeyDown: b,
        disablePortal: m,
        disableRestoreFocus: g,
        disableScrollLock: p,
        hideBackdrop: w,
        keepMounted: k,
      },
      {
        getRootProps: L,
        getBackdropProps: z,
        getTransitionProps: M,
        portalRef: D,
        isTopModal: U,
        exited: X,
        hasTransition: ee,
      } = hT({ ...O, rootRef: n }),
      Z = { ...O, exited: X },
      Y = gT(Z),
      xe = {};
    if ((u.props.tabIndex === void 0 && (xe.tabIndex = "-1"), ee)) {
      const { onEnter: ne, onExited: qe } = M();
      (xe.onEnter = ne), (xe.onExited = qe);
    }
    const Se = {
        slots: { root: f.Root, backdrop: f.Backdrop, ...$ },
        slotProps: { ...y, ...A },
      },
      [Be, wt] = dn("root", {
        elementType: yT,
        externalForwardedProps: Se,
        getSlotProps: L,
        additionalProps: { ref: n, as: c },
        ownerState: Z,
        className: q(
          a,
          Y == null ? void 0 : Y.root,
          !Z.open && Z.exited && (Y == null ? void 0 : Y.hidden)
        ),
      }),
      [_e, te] = dn("backdrop", {
        elementType: o,
        externalForwardedProps: Se,
        additionalProps: i,
        getSlotProps: (ne) =>
          z({
            ...ne,
            onClick: (qe) => {
              P && P(qe), ne != null && ne.onClick && ne.onClick(qe);
            },
          }),
        className: q(
          i == null ? void 0 : i.className,
          Y == null ? void 0 : Y.backdrop
        ),
        ownerState: Z,
      }),
      ae = at(i == null ? void 0 : i.ref, te.ref);
    return !k && !T && (!ee || X)
      ? null
      : h.jsx(lE, {
          ref: D,
          container: d,
          disablePortal: m,
          children: h.jsxs(Be, {
            ...wt,
            ...N,
            children: [
              !w && o ? h.jsx(_e, { ...te, ref: ae }) : null,
              h.jsx(cT, {
                disableEnforceFocus: S,
                disableAutoFocus: v,
                disableRestoreFocus: g,
                isEnabled: U,
                open: T,
                children: C.cloneElement(u, xe),
              }),
            ],
          }),
        });
  }),
  ST = (e) => {
    const {
        classes: t,
        disableUnderline: n,
        startAdornment: r,
        endAdornment: o,
        size: i,
        hiddenLabel: s,
        multiline: a,
      } = e,
      l = {
        root: [
          "root",
          !n && "underline",
          r && "adornedStart",
          o && "adornedEnd",
          i === "small" && `size${Q(i)}`,
          s && "hiddenLabel",
          a && "multiline",
        ],
        input: ["input"],
      },
      u = ye(l, vE, t);
    return { ...t, ...u };
  },
  wT = W(xu, {
    shouldForwardProp: (e) => mn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...yu(e, t), !n.disableUnderline && t.underline];
    },
  })(
    Fe(({ theme: e }) => {
      const t = e.palette.mode === "light",
        n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
          },
        },
        [`&.${Ir.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        },
        [`&.${Ir.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i,
        },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: e.transitions.create("transform", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Ir.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Ir.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (e.vars || e).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${
                  e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                    : n
                }`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: e.transitions.create("border-bottom-color", {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Ir.disabled}, .${Ir.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${Ir.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(e.palette)
            .filter(([, s]) => s && s.main)
            .map(([s]) => {
              var a;
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${
                      (a = (e.vars || e).palette[s]) == null ? void 0 : a.main
                    }`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: s }) => s.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: s }) => s.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: s }) => s.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: s, size: a }) => s.multiline && a === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: s }) =>
              s.multiline && s.hiddenLabel && s.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    })
  ),
  CT = W(Su, { name: "MuiFilledInput", slot: "Input", overridesResolver: vu })(
    Fe(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    }))
  ),
  fl = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiFilledInput" }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        hiddenLabel: l,
        inputComponent: u = "input",
        multiline: d = !1,
        slotProps: c,
        slots: f = {},
        type: y = "text",
        ...v
      } = r,
      S = {
        ...r,
        disableUnderline: o,
        fullWidth: a,
        inputComponent: u,
        multiline: d,
        type: y,
      },
      b = ST(r),
      m = { root: { ownerState: S }, input: { ownerState: S } },
      g = c ?? s ? ht(m, c ?? s) : m,
      p = f.root ?? i.Root ?? wT,
      w = f.input ?? i.Input ?? CT;
    return h.jsx(Pp, {
      slots: { root: p, input: w },
      componentsProps: g,
      fullWidth: a,
      inputComponent: u,
      multiline: d,
      ref: n,
      type: y,
      ...v,
      classes: b,
    });
  });
fl && (fl.muiName = "Input");
function bT(e) {
  return de("MuiFormControl", e);
}
fe("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const kT = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${Q(n)}`, r && "fullWidth"] };
    return ye(o, bT, t);
  },
  PT = W("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...t[`margin${Q(e.margin)}`],
      ...(e.fullWidth && t.fullWidth),
    }),
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  ET = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: d,
        fullWidth: c = !1,
        hiddenLabel: f = !1,
        margin: y = "none",
        required: v = !1,
        size: S = "medium",
        variant: b = "outlined",
        ...m
      } = r,
      g = {
        ...r,
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: c,
        hiddenLabel: f,
        margin: y,
        required: v,
        size: S,
        variant: b,
      },
      p = kT(g),
      [w, k] = C.useState(() => {
        let V = !1;
        return (
          o &&
            C.Children.forEach(o, (N) => {
              if (!Ra(N, ["Input", "Select"])) return;
              const O = Ra(N, ["Select"]) ? N.props.input : N;
              O && fE(O.props) && (V = !0);
            }),
          V
        );
      }),
      [P, E] = C.useState(() => {
        let V = !1;
        return (
          o &&
            C.Children.forEach(o, (N) => {
              Ra(N, ["Input", "Select"]) &&
                (dl(N.props, !0) || dl(N.props.inputProps, !0)) &&
                (V = !0);
            }),
          V
        );
      }),
      [R, x] = C.useState(!1);
    l && R && x(!1);
    const T = d !== void 0 && !l ? d : R;
    let A;
    const $ = C.useMemo(
      () => ({
        adornedStart: w,
        setAdornedStart: k,
        color: s,
        disabled: l,
        error: u,
        filled: P,
        focused: T,
        fullWidth: c,
        hiddenLabel: f,
        size: S,
        onBlur: () => {
          x(!1);
        },
        onEmpty: () => {
          E(!1);
        },
        onFilled: () => {
          E(!0);
        },
        onFocus: () => {
          x(!0);
        },
        registerEffect: A,
        required: v,
        variant: b,
      }),
      [w, s, l, u, P, T, c, f, A, v, S, b]
    );
    return h.jsx(kp.Provider, {
      value: $,
      children: h.jsx(PT, {
        as: a,
        ownerState: g,
        className: q(p.root, i),
        ref: n,
        ...m,
        children: o,
      }),
    });
  });
function TT(e) {
  return de("MuiFormHelperText", e);
}
const tg = fe("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var ng;
const RT = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${Q(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return ye(u, TT, t);
  },
  MT = W("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${Q(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(
    Fe(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${tg.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${tg.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: t }) => t.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    }))
  ),
  jT = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiFormHelperText" }),
      {
        children: o,
        className: i,
        component: s = "p",
        disabled: a,
        error: l,
        filled: u,
        focused: d,
        margin: c,
        required: f,
        variant: y,
        ...v
      } = r,
      S = ri(),
      b = ni({
        props: r,
        muiFormControl: S,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      m = {
        ...r,
        component: s,
        contained: b.variant === "filled" || b.variant === "outlined",
        variant: b.variant,
        size: b.size,
        disabled: b.disabled,
        error: b.error,
        filled: b.filled,
        focused: b.focused,
        required: b.required,
      };
    delete m.ownerState;
    const g = RT(m);
    return h.jsx(MT, {
      as: s,
      className: q(g.root, i),
      ref: n,
      ...v,
      ownerState: m,
      children:
        o === " "
          ? ng ||
            (ng = h.jsx("span", { className: "notranslate", children: "​" }))
          : o,
    });
  });
function AT(e) {
  return de("MuiFormLabel", e);
}
const Wi = fe("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  IT = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${Q(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return ye(l, AT, t);
  },
  OT = W("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...(e.color === "secondary" && t.colorSecondary),
      ...(e.filled && t.filled),
    }),
  })(
    Fe(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main)
          .map(([t]) => ({
            props: { color: t },
            style: {
              [`&.${Wi.focused}`]: { color: (e.vars || e).palette[t].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${Wi.disabled}`]: {
              color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Wi.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    }))
  ),
  LT = W("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(
    Fe(({ theme: e }) => ({
      [`&.${Wi.error}`]: { color: (e.vars || e).palette.error.main },
    }))
  ),
  $T = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiFormLabel" }),
      {
        children: o,
        className: i,
        color: s,
        component: a = "label",
        disabled: l,
        error: u,
        filled: d,
        focused: c,
        required: f,
        ...y
      } = r,
      v = ri(),
      S = ni({
        props: r,
        muiFormControl: v,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      b = {
        ...r,
        color: S.color || "primary",
        component: a,
        disabled: S.disabled,
        error: S.error,
        filled: S.filled,
        focused: S.focused,
        required: S.required,
      },
      m = IT(b);
    return h.jsxs(OT, {
      as: a,
      ownerState: b,
      className: q(m.root, i),
      ref: n,
      ...y,
      children: [
        o,
        S.required &&
          h.jsxs(LT, {
            ownerState: b,
            "aria-hidden": !0,
            className: m.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  });
function Id(e) {
  return `scale(${e}, ${e ** 2})`;
}
const DT = {
    entering: { opacity: 1, transform: Id(1) },
    entered: { opacity: 1, transform: "none" },
  },
  ac =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Od = C.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: d,
        onExit: c,
        onExited: f,
        onExiting: y,
        style: v,
        timeout: S = "auto",
        TransitionComponent: b = An,
        ...m
      } = t,
      g = v1(),
      p = C.useRef(),
      w = gu(),
      k = C.useRef(null),
      P = at(k, Ls(i), n),
      E = (O) => (L) => {
        if (O) {
          const z = k.current;
          L === void 0 ? O(z) : O(z, L);
        }
      },
      R = E(d),
      x = E((O, L) => {
        I1(O);
        const {
          duration: z,
          delay: M,
          easing: D,
        } = ul({ style: v, timeout: S, easing: s }, { mode: "enter" });
        let U;
        S === "auto"
          ? ((U = w.transitions.getAutoHeightDuration(O.clientHeight)),
            (p.current = U))
          : (U = z),
          (O.style.transition = [
            w.transitions.create("opacity", { duration: U, delay: M }),
            w.transitions.create("transform", {
              duration: ac ? U : U * 0.666,
              delay: M,
              easing: D,
            }),
          ].join(",")),
          l && l(O, L);
      }),
      T = E(u),
      A = E(y),
      $ = E((O) => {
        const {
          duration: L,
          delay: z,
          easing: M,
        } = ul({ style: v, timeout: S, easing: s }, { mode: "exit" });
        let D;
        S === "auto"
          ? ((D = w.transitions.getAutoHeightDuration(O.clientHeight)),
            (p.current = D))
          : (D = L),
          (O.style.transition = [
            w.transitions.create("opacity", { duration: D, delay: z }),
            w.transitions.create("transform", {
              duration: ac ? D : D * 0.666,
              delay: ac ? z : z || D * 0.333,
              easing: M,
            }),
          ].join(",")),
          (O.style.opacity = 0),
          (O.style.transform = Id(0.75)),
          c && c(O);
      }),
      V = E(f),
      N = (O) => {
        S === "auto" && g.start(p.current || 0, O), r && r(k.current, O);
      };
    return h.jsx(b, {
      appear: o,
      in: a,
      nodeRef: k,
      onEnter: x,
      onEntered: T,
      onEntering: R,
      onExit: $,
      onExited: V,
      onExiting: A,
      addEndListener: N,
      timeout: S === "auto" ? null : S,
      ...m,
      children: (O, L) =>
        C.cloneElement(i, {
          style: {
            opacity: 0,
            transform: Id(0.75),
            visibility: O === "exited" && !a ? "hidden" : void 0,
            ...DT[O],
            ...v,
            ...i.props.style,
          },
          ref: P,
          ...L,
        }),
    });
  });
Od && (Od.muiSupportAuto = !0);
const FT = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ye({ root: ["root", !n && "underline"], input: ["input"] }, gE, t);
    return { ...t, ...o };
  },
  _T = W(xu, {
    shouldForwardProp: (e) => mn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...yu(e, t), !n.disableUnderline && t.underline];
    },
  })(
    Fe(({ theme: e }) => {
      let n =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        e.vars &&
          (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: r }) => r.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: r }) => !r.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${Si.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${Si.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (e.vars || e).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${n}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${Si.disabled}, .${Si.error}):before`]: {
                  borderBottom: `2px solid ${
                    (e.vars || e).palette.text.primary
                  }`,
                  "@media (hover: none)": { borderBottom: `1px solid ${n}` },
                },
                [`&.${Si.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(e.palette)
              .filter(([, r]) => r && r.main)
              .map(([r]) => ({
                props: { color: r, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(e.vars || e).palette[r].main}`,
                  },
                },
              })),
          ],
        }
      );
    })
  ),
  NT = W(Su, { name: "MuiInput", slot: "Input", overridesResolver: vu })({}),
  pl = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiInput" }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: a = !1,
        inputComponent: l = "input",
        multiline: u = !1,
        slotProps: d,
        slots: c = {},
        type: f = "text",
        ...y
      } = r,
      v = FT(r),
      b = { root: { ownerState: { disableUnderline: o } } },
      m = d ?? s ? ht(d ?? s, b) : b,
      g = c.root ?? i.Root ?? _T,
      p = c.input ?? i.Input ?? NT;
    return h.jsx(Pp, {
      slots: { root: g, input: p },
      slotProps: m,
      fullWidth: a,
      inputComponent: l,
      multiline: u,
      ref: n,
      type: f,
      ...y,
      classes: v,
    });
  });
pl && (pl.muiName = "Input");
function zT(e) {
  return de("MuiInputLabel", e);
}
fe("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const VT = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${Q(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = ye(l, zT, t);
    return { ...t, ...u };
  },
  BT = W($T, {
    shouldForwardProp: (e) => mn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Wi.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(
    Fe(({ theme: e }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut,
              }
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) => t === "filled" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: t, ownerState: n, size: r }) =>
            t === "filled" && n.shrink && r === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: t, ownerState: n }) =>
            t === "outlined" && n.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    }))
  ),
  UT = C.forwardRef(function (t, n) {
    const r = Pe({ name: "MuiInputLabel", props: t }),
      {
        disableAnimation: o = !1,
        margin: i,
        shrink: s,
        variant: a,
        className: l,
        ...u
      } = r,
      d = ri();
    let c = s;
    typeof c > "u" && d && (c = d.filled || d.focused || d.adornedStart);
    const f = ni({
        props: r,
        muiFormControl: d,
        states: ["size", "variant", "required", "focused"],
      }),
      y = {
        ...r,
        disableAnimation: o,
        formControl: d,
        shrink: c,
        size: f.size,
        variant: f.variant,
        required: f.required,
        focused: f.focused,
      },
      v = VT(y);
    return h.jsx(BT, {
      "data-shrink": c,
      ref: n,
      className: q(v.root, l),
      ...u,
      ownerState: y,
      classes: v,
    });
  });
function WT(e) {
  return de("MuiLink", e);
}
const HT = fe("MuiLink", [
    "root",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "button",
    "focusVisible",
  ]),
  KT = ({ theme: e, ownerState: t }) => {
    const n = t.color,
      r = Go(e, `palette.${n}`, !1) || t.color,
      o = Go(e, `palette.${n}Channel`);
    return "vars" in e && o ? `rgba(${o} / 0.4)` : Jt(r, 0.4);
  },
  rg = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  GT = (e) => {
    const { classes: t, component: n, focusVisible: r, underline: o } = e,
      i = {
        root: [
          "root",
          `underline${Q(o)}`,
          n === "button" && "button",
          r && "focusVisible",
        ],
      };
    return ye(i, WT, t);
  },
  XT = W(_, {
    name: "MuiLink",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`underline${Q(n.underline)}`],
        n.component === "button" && t.button,
      ];
    },
  })(
    Fe(({ theme: e }) => ({
      variants: [
        { props: { underline: "none" }, style: { textDecoration: "none" } },
        {
          props: { underline: "hover" },
          style: {
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          },
        },
        {
          props: { underline: "always" },
          style: {
            textDecoration: "underline",
            "&:hover": { textDecorationColor: "inherit" },
          },
        },
        {
          props: ({ underline: t, ownerState: n }) =>
            t === "always" && n.color !== "inherit",
          style: { textDecorationColor: "var(--Link-underlineColor)" },
        },
        ...Object.entries(e.palette)
          .filter(([, t]) => t && t.main)
          .map(([t]) => ({
            props: { underline: "always", color: t },
            style: {
              "--Link-underlineColor": e.vars
                ? `rgba(${e.vars.palette[t].mainChannel} / 0.4)`
                : Jt(e.palette[t].main, 0.4),
            },
          })),
        {
          props: { underline: "always", color: "textPrimary" },
          style: {
            "--Link-underlineColor": e.vars
              ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
              : Jt(e.palette.text.primary, 0.4),
          },
        },
        {
          props: { underline: "always", color: "textSecondary" },
          style: {
            "--Link-underlineColor": e.vars
              ? `rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`
              : Jt(e.palette.text.secondary, 0.4),
          },
        },
        {
          props: { underline: "always", color: "textDisabled" },
          style: {
            "--Link-underlineColor": (e.vars || e).palette.text.disabled,
          },
        },
        {
          props: { component: "button" },
          style: {
            position: "relative",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            MozAppearance: "none",
            WebkitAppearance: "none",
            "&::-moz-focus-inner": { borderStyle: "none" },
            [`&.${HT.focusVisible}`]: { outline: "auto" },
          },
        },
      ],
    }))
  ),
  Ge = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiLink" }),
      o = gu(),
      {
        className: i,
        color: s = "primary",
        component: a = "a",
        onBlur: l,
        onFocus: u,
        TypographyClasses: d,
        underline: c = "always",
        variant: f = "inherit",
        sx: y,
        ...v
      } = r,
      [S, b] = C.useState(!1),
      m = (k) => {
        sl(k.target) || b(!1), l && l(k);
      },
      g = (k) => {
        sl(k.target) && b(!0), u && u(k);
      },
      p = {
        ...r,
        color: s,
        component: a,
        focusVisible: S,
        underline: c,
        variant: f,
      },
      w = GT(p);
    return h.jsx(XT, {
      color: s,
      className: q(w.root, i),
      classes: d,
      component: a,
      onBlur: m,
      onFocus: g,
      ref: n,
      ownerState: p,
      variant: f,
      ...v,
      sx: [
        ...(rg[s] === void 0 ? [{ color: s }] : []),
        ...(Array.isArray(y) ? y : [y]),
      ],
      style: {
        ...v.style,
        ...(c === "always" &&
          s !== "inherit" &&
          !rg[s] && {
            "--Link-underlineColor": KT({ theme: o, ownerState: p }),
          }),
      },
    });
  }),
  QT = C.createContext({});
function YT(e) {
  return de("MuiList", e);
}
fe("MuiList", ["root", "padding", "dense", "subheader"]);
const qT = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return ye(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      YT,
      t
    );
  },
  ZT = W("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  JT = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
        ...d
      } = r,
      c = C.useMemo(() => ({ dense: a }), [a]),
      f = { ...r, component: s, dense: a, disablePadding: l },
      y = qT(f);
    return h.jsx(QT.Provider, {
      value: c,
      children: h.jsxs(ZT, {
        as: s,
        className: q(y.root, i),
        ref: n,
        ownerState: f,
        ...d,
        children: [u, o],
      }),
    });
  });
function lc(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function og(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function D1(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.startsWith(t.keys.join(""))
  );
}
function wi(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !D1(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const e5 = C.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: u = !1,
      onKeyDown: d,
      variant: c = "selectedMenu",
      ...f
    } = t,
    y = C.useRef(null),
    v = C.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  Zn(() => {
    o && y.current.focus();
  }, [o]),
    C.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (p, { direction: w }) => {
          const k = !y.current.style.width;
          if (p.clientHeight < y.current.clientHeight && k) {
            const P = `${x1(Rt(p))}px`;
            (y.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = P),
              (y.current.style.width = `calc(100% + ${P})`);
          }
          return y.current;
        },
      }),
      []
    );
  const S = (p) => {
      const w = y.current,
        k = p.key;
      if (p.ctrlKey || p.metaKey || p.altKey) {
        d && d(p);
        return;
      }
      const E = Rt(w).activeElement;
      if (k === "ArrowDown") p.preventDefault(), wi(w, E, u, l, lc);
      else if (k === "ArrowUp") p.preventDefault(), wi(w, E, u, l, og);
      else if (k === "Home") p.preventDefault(), wi(w, null, u, l, lc);
      else if (k === "End") p.preventDefault(), wi(w, null, u, l, og);
      else if (k.length === 1) {
        const R = v.current,
          x = k.toLowerCase(),
          T = performance.now();
        R.keys.length > 0 &&
          (T - R.lastTime > 500
            ? ((R.keys = []), (R.repeating = !0), (R.previousKeyMatched = !0))
            : R.repeating && x !== R.keys[0] && (R.repeating = !1)),
          (R.lastTime = T),
          R.keys.push(x);
        const A = E && !R.repeating && D1(E, R);
        R.previousKeyMatched && (A || wi(w, E, !1, l, lc, R))
          ? p.preventDefault()
          : (R.previousKeyMatched = !1);
      }
      d && d(p);
    },
    b = at(y, n);
  let m = -1;
  C.Children.forEach(s, (p, w) => {
    if (!C.isValidElement(p)) {
      m === w && ((m += 1), m >= s.length && (m = -1));
      return;
    }
    p.props.disabled ||
      (((c === "selectedMenu" && p.props.selected) || m === -1) && (m = w)),
      m === w &&
        (p.props.disabled ||
          p.props.muiSkipListHighlight ||
          p.type.muiSkipListHighlight) &&
        ((m += 1), m >= s.length && (m = -1));
  });
  const g = C.Children.map(s, (p, w) => {
    if (w === m) {
      const k = {};
      return (
        i && (k.autoFocus = !0),
        p.props.tabIndex === void 0 && c === "selectedMenu" && (k.tabIndex = 0),
        C.cloneElement(p, k)
      );
    }
    return p;
  });
  return h.jsx(JT, {
    role: "menu",
    ref: b,
    className: a,
    onKeyDown: S,
    tabIndex: o ? 0 : -1,
    ...f,
    children: g,
  });
});
function t5(e) {
  return de("MuiPopover", e);
}
fe("MuiPopover", ["root", "paper"]);
function ig(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function sg(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function ag(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function uc(e) {
  return typeof e == "function" ? e() : e;
}
const n5 = (e) => {
    const { classes: t } = e;
    return ye({ root: ["root"], paper: ["paper"] }, t5, t);
  },
  r5 = W(xT, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  F1 = W(O1, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  o5 = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiPopover" }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: "top", horizontal: "left" },
        anchorPosition: a,
        anchorReference: l = "anchorEl",
        children: u,
        className: d,
        container: c,
        elevation: f = 8,
        marginThreshold: y = 16,
        open: v,
        PaperProps: S = {},
        slots: b = {},
        slotProps: m = {},
        transformOrigin: g = { vertical: "top", horizontal: "left" },
        TransitionComponent: p = Od,
        transitionDuration: w = "auto",
        TransitionProps: { onEntering: k, ...P } = {},
        disableScrollLock: E = !1,
        ...R
      } = r,
      x = (m == null ? void 0 : m.paper) ?? S,
      T = C.useRef(),
      A = {
        ...r,
        anchorOrigin: s,
        anchorReference: l,
        elevation: f,
        marginThreshold: y,
        externalPaperSlotProps: x,
        transformOrigin: g,
        TransitionComponent: p,
        transitionDuration: w,
        TransitionProps: P,
      },
      $ = n5(A),
      V = C.useCallback(() => {
        if (l === "anchorPosition") return a;
        const te = uc(i),
          ne = (
            te && te.nodeType === 1 ? te : Rt(T.current).body
          ).getBoundingClientRect();
        return {
          top: ne.top + ig(ne, s.vertical),
          left: ne.left + sg(ne, s.horizontal),
        };
      }, [i, s.horizontal, s.vertical, a, l]),
      N = C.useCallback(
        (te) => ({
          vertical: ig(te, g.vertical),
          horizontal: sg(te, g.horizontal),
        }),
        [g.horizontal, g.vertical]
      ),
      O = C.useCallback(
        (te) => {
          const ae = { width: te.offsetWidth, height: te.offsetHeight },
            ne = N(ae);
          if (l === "none")
            return { top: null, left: null, transformOrigin: ag(ne) };
          const qe = V();
          let oe = qe.top - ne.vertical,
            he = qe.left - ne.horizontal;
          const Bt = oe + ae.height,
            Ut = he + ae.width,
            Ze = br(uc(i)),
            Je = Ze.innerHeight - y,
            gn = Ze.innerWidth - y;
          if (y !== null && oe < y) {
            const we = oe - y;
            (oe -= we), (ne.vertical += we);
          } else if (y !== null && Bt > Je) {
            const we = Bt - Je;
            (oe -= we), (ne.vertical += we);
          }
          if (y !== null && he < y) {
            const we = he - y;
            (he -= we), (ne.horizontal += we);
          } else if (Ut > gn) {
            const we = Ut - gn;
            (he -= we), (ne.horizontal += we);
          }
          return {
            top: `${Math.round(oe)}px`,
            left: `${Math.round(he)}px`,
            transformOrigin: ag(ne),
          };
        },
        [i, l, V, N, y]
      ),
      [L, z] = C.useState(v),
      M = C.useCallback(() => {
        const te = T.current;
        if (!te) return;
        const ae = O(te);
        ae.top !== null && (te.style.top = ae.top),
          ae.left !== null && (te.style.left = ae.left),
          (te.style.transformOrigin = ae.transformOrigin),
          z(!0);
      }, [O]);
    C.useEffect(
      () => (
        E && window.addEventListener("scroll", M),
        () => window.removeEventListener("scroll", M)
      ),
      [i, E, M]
    );
    const D = (te, ae) => {
        k && k(te, ae), M();
      },
      U = () => {
        z(!1);
      };
    C.useEffect(() => {
      v && M();
    }),
      C.useImperativeHandle(
        o,
        () =>
          v
            ? {
                updatePosition: () => {
                  M();
                },
              }
            : null,
        [v, M]
      ),
      C.useEffect(() => {
        if (!v) return;
        const te = vp(() => {
            M();
          }),
          ae = br(i);
        return (
          ae.addEventListener("resize", te),
          () => {
            te.clear(), ae.removeEventListener("resize", te);
          }
        );
      }, [i, v, M]);
    let X = w;
    w === "auto" && !p.muiSupportAuto && (X = void 0);
    const ee = c || (i ? Rt(uc(i)).body : void 0),
      Z = { slots: b, slotProps: { ...m, paper: x } },
      [Y, xe] = dn("paper", {
        elementType: F1,
        externalForwardedProps: Z,
        additionalProps: {
          elevation: f,
          className: q($.paper, x == null ? void 0 : x.className),
          style: L ? x.style : { ...x.style, opacity: 0 },
        },
        ownerState: A,
      }),
      [Se, { slotProps: Be, ...wt }] = dn("root", {
        elementType: r5,
        externalForwardedProps: Z,
        additionalProps: {
          slotProps: { backdrop: { invisible: !0 } },
          container: ee,
          open: v,
        },
        ownerState: A,
        className: q($.root, d),
      }),
      _e = at(T, xe.ref);
    return h.jsx(Se, {
      ...wt,
      ...(!Md(Se) && { slotProps: Be, disableScrollLock: E }),
      ...R,
      ref: n,
      children: h.jsx(p, {
        appear: !0,
        in: v,
        onEntering: D,
        onExited: U,
        timeout: X,
        ...P,
        children: h.jsx(Y, { ...xe, ref: _e, children: u }),
      }),
    });
  });
function i5(e) {
  return de("MuiMenu", e);
}
fe("MuiMenu", ["root", "paper", "list"]);
const s5 = { vertical: "top", horizontal: "right" },
  a5 = { vertical: "top", horizontal: "left" },
  l5 = (e) => {
    const { classes: t } = e;
    return ye({ root: ["root"], paper: ["paper"], list: ["list"] }, i5, t);
  },
  u5 = W(o5, {
    shouldForwardProp: (e) => mn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  c5 = W(F1, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  d5 = W(e5, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  f5 = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiMenu" }),
      {
        autoFocus: o = !0,
        children: i,
        className: s,
        disableAutoFocusItem: a = !1,
        MenuListProps: l = {},
        onClose: u,
        open: d,
        PaperProps: c = {},
        PopoverClasses: f,
        transitionDuration: y = "auto",
        TransitionProps: { onEntering: v, ...S } = {},
        variant: b = "selectedMenu",
        slots: m = {},
        slotProps: g = {},
        ...p
      } = r,
      w = Ok(),
      k = {
        ...r,
        autoFocus: o,
        disableAutoFocusItem: a,
        MenuListProps: l,
        onEntering: v,
        PaperProps: c,
        transitionDuration: y,
        TransitionProps: S,
        variant: b,
      },
      P = l5(k),
      E = o && !a && d,
      R = C.useRef(null),
      x = (L, z) => {
        R.current &&
          R.current.adjustStyleForScrollbar(L, {
            direction: w ? "rtl" : "ltr",
          }),
          v && v(L, z);
      },
      T = (L) => {
        L.key === "Tab" && (L.preventDefault(), u && u(L, "tabKeyDown"));
      };
    let A = -1;
    C.Children.map(i, (L, z) => {
      C.isValidElement(L) &&
        (L.props.disabled ||
          (((b === "selectedMenu" && L.props.selected) || A === -1) &&
            (A = z)));
    });
    const $ = m.paper ?? c5,
      V = g.paper ?? c,
      N = Nm({
        elementType: m.root,
        externalSlotProps: g.root,
        ownerState: k,
        className: [P.root, s],
      }),
      O = Nm({
        elementType: $,
        externalSlotProps: V,
        ownerState: k,
        className: P.paper,
      });
    return h.jsx(u5, {
      onClose: u,
      anchorOrigin: { vertical: "bottom", horizontal: w ? "right" : "left" },
      transformOrigin: w ? s5 : a5,
      slots: { paper: $, root: m.root },
      slotProps: { root: N, paper: O },
      open: d,
      ref: n,
      transitionDuration: y,
      TransitionProps: { onEntering: x, ...S },
      ownerState: k,
      ...p,
      classes: f,
      children: h.jsx(d5, {
        onKeyDown: T,
        actions: R,
        autoFocus: o && (A === -1 || a),
        autoFocusItem: E,
        variant: b,
        ...l,
        className: q(P.list, l.className),
        children: i,
      }),
    });
  });
function p5(e) {
  return de("MuiNativeSelect", e);
}
const Ep = fe("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  h5 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${Q(n)}`, i && "iconOpen", r && "disabled"],
      };
    return ye(a, p5, t);
  },
  _1 = W("select")(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${Ep.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) =>
          t.variant !== "filled" && t.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": { borderRadius: (e.vars || e).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  m5 = W(_1, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: mn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${Ep.multiple}`]: t.multiple },
      ];
    },
  })({}),
  N1 = W("svg")(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${Ep.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  g5 = W(N1, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${Q(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  y5 = C.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
        ...u
      } = t,
      d = { ...t, disabled: o, variant: l, error: i },
      c = h5(d);
    return h.jsxs(C.Fragment, {
      children: [
        h.jsx(m5, {
          ownerState: d,
          className: q(c.select, r),
          disabled: o,
          ref: a || n,
          ...u,
        }),
        t.multiple
          ? null
          : h.jsx(g5, { as: s, ownerState: d, className: c.icon }),
      ],
    });
  });
var lg;
const v5 = W("fieldset", { shouldForwardProp: mn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  x5 = W("legend", { shouldForwardProp: mn })(
    Fe(({ theme: e }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: e.transitions.create("width", {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: e.transitions.create("max-width", {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: "100%",
            transition: e.transitions.create("max-width", {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  );
function S5(e) {
  const {
      children: t,
      classes: n,
      className: r,
      label: o,
      notched: i,
      ...s
    } = e,
    a = o != null && o !== "",
    l = { ...e, notched: i, withLabel: a };
  return h.jsx(v5, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: h.jsx(x5, {
      ownerState: l,
      children: a
        ? h.jsx("span", { children: o })
        : lg ||
          (lg = h.jsx("span", { className: "notranslate", children: "​" })),
    }),
  });
}
const w5 = (e) => {
    const { classes: t } = e,
      r = ye(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        yE,
        t
      );
    return { ...t, ...r };
  },
  C5 = W(xu, {
    shouldForwardProp: (e) => mn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: yu,
  })(
    Fe(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${xn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        [`&.${xn.focused} .${xn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(([, n]) => n && n.main)
            .map(([n]) => ({
              props: { color: n },
              style: {
                [`&.${xn.focused} .${xn.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[n].main,
                },
              },
            })),
          {
            props: {},
            style: {
              "@media (hover: none)": {
                [`&:hover .${xn.notchedOutline}`]: {
                  borderColor: e.vars
                    ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                    : t,
                },
              },
              [`&.${xn.error} .${xn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${xn.disabled} .${xn.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: n }) => n.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: n }) => n.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: n }) => n.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: n, size: r }) => n.multiline && r === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    })
  ),
  b5 = W(S5, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(
    Fe(({ theme: e }) => {
      const t =
        e.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: e.vars
          ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
          : t,
      };
    })
  ),
  k5 = W(Su, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: vu,
  })(
    Fe(({ theme: e }) => ({
      padding: "16.5px 14px",
      ...(!e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: t }) => t.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: t }) => t.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    }))
  ),
  hl = C.forwardRef(function (t, n) {
    var r;
    const o = Pe({ props: t, name: "MuiOutlinedInput" }),
      {
        components: i = {},
        fullWidth: s = !1,
        inputComponent: a = "input",
        label: l,
        multiline: u = !1,
        notched: d,
        slots: c = {},
        type: f = "text",
        ...y
      } = o,
      v = w5(o),
      S = ri(),
      b = ni({
        props: o,
        muiFormControl: S,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      m = {
        ...o,
        color: b.color || "primary",
        disabled: b.disabled,
        error: b.error,
        focused: b.focused,
        formControl: S,
        fullWidth: s,
        hiddenLabel: b.hiddenLabel,
        multiline: u,
        size: b.size,
        type: f,
      },
      g = c.root ?? i.Root ?? C5,
      p = c.input ?? i.Input ?? k5;
    return h.jsx(Pp, {
      slots: { root: g, input: p },
      renderSuffix: (w) =>
        h.jsx(b5, {
          ownerState: m,
          className: v.notchedOutline,
          label:
            l != null && l !== "" && b.required
              ? r || (r = h.jsxs(C.Fragment, { children: [l, " ", "*"] }))
              : l,
          notched:
            typeof d < "u" ? d : !!(w.startAdornment || w.filled || w.focused),
        }),
      fullWidth: s,
      inputComponent: a,
      multiline: u,
      ref: n,
      type: f,
      ...y,
      classes: { ...v, notchedOutline: null },
    });
  });
hl && (hl.muiName = "Input");
function P5(e) {
  return de("MuiSelect", e);
}
const Ci = fe("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var ug;
const E5 = W(_1, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Ci.select}`]: t.select },
        { [`&.${Ci.select}`]: t[n.variant] },
        { [`&.${Ci.error}`]: t.error },
        { [`&.${Ci.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${Ci.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  T5 = W(N1, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${Q(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })({}),
  R5 = W("input", {
    shouldForwardProp: (e) => R1(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function cg(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function M5(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const j5 = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${Q(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return ye(a, P5, t);
  },
  A5 = C.forwardRef(function (t, n) {
    var li;
    const {
        "aria-describedby": r,
        "aria-label": o,
        autoFocus: i,
        autoWidth: s,
        children: a,
        className: l,
        defaultOpen: u,
        defaultValue: d,
        disabled: c,
        displayEmpty: f,
        error: y = !1,
        IconComponent: v,
        inputRef: S,
        labelId: b,
        MenuProps: m = {},
        multiple: g,
        name: p,
        onBlur: w,
        onChange: k,
        onClose: P,
        onFocus: E,
        onOpen: R,
        open: x,
        readOnly: T,
        renderValue: A,
        SelectDisplayProps: $ = {},
        tabIndex: V,
        type: N,
        value: O,
        variant: L = "standard",
        ...z
      } = t,
      [M, D] = bd({ controlled: O, default: d, name: "Select" }),
      [U, X] = bd({ controlled: x, default: u, name: "Select" }),
      ee = C.useRef(null),
      Z = C.useRef(null),
      [Y, xe] = C.useState(null),
      { current: Se } = C.useRef(x != null),
      [Be, wt] = C.useState(),
      _e = at(n, S),
      te = C.useCallback((G) => {
        (Z.current = G), G && xe(G);
      }, []),
      ae = Y == null ? void 0 : Y.parentNode;
    C.useImperativeHandle(
      _e,
      () => ({
        focus: () => {
          Z.current.focus();
        },
        node: ee.current,
        value: M,
      }),
      [M]
    ),
      C.useEffect(() => {
        u &&
          U &&
          Y &&
          !Se &&
          (wt(s ? null : ae.clientWidth), Z.current.focus());
      }, [Y, s]),
      C.useEffect(() => {
        i && Z.current.focus();
      }, [i]),
      C.useEffect(() => {
        if (!b) return;
        const G = Rt(Z.current).getElementById(b);
        if (G) {
          const Ce = () => {
            getSelection().isCollapsed && Z.current.focus();
          };
          return (
            G.addEventListener("click", Ce),
            () => {
              G.removeEventListener("click", Ce);
            }
          );
        }
      }, [b]);
    const ne = (G, Ce) => {
        G ? R && R(Ce) : P && P(Ce),
          Se || (wt(s ? null : ae.clientWidth), X(G));
      },
      qe = (G) => {
        G.button === 0 && (G.preventDefault(), Z.current.focus(), ne(!0, G));
      },
      oe = (G) => {
        ne(!1, G);
      },
      he = C.Children.toArray(a),
      Bt = (G) => {
        const Ce = he.find((tt) => tt.props.value === G.target.value);
        Ce !== void 0 && (D(Ce.props.value), k && k(G, Ce));
      },
      Ut = (G) => (Ce) => {
        let tt;
        if (Ce.currentTarget.hasAttribute("tabindex")) {
          if (g) {
            tt = Array.isArray(M) ? M.slice() : [];
            const ro = M.indexOf(G.props.value);
            ro === -1 ? tt.push(G.props.value) : tt.splice(ro, 1);
          } else tt = G.props.value;
          if (
            (G.props.onClick && G.props.onClick(Ce), M !== tt && (D(tt), k))
          ) {
            const ro = Ce.nativeEvent || Ce,
              ph = new ro.constructor(ro.type, ro);
            Object.defineProperty(ph, "target", {
              writable: !0,
              value: { value: tt, name: p },
            }),
              k(ph, G);
          }
          g || ne(!1, Ce);
        }
      },
      Ze = (G) => {
        T ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(G.key) &&
            (G.preventDefault(), ne(!0, G)));
      },
      Je = Y !== null && U,
      gn = (G) => {
        !Je &&
          w &&
          (Object.defineProperty(G, "target", {
            writable: !0,
            value: { value: M, name: p },
          }),
          w(G));
      };
    delete z["aria-invalid"];
    let we, In;
    const H = [];
    let et = !1;
    (dl({ value: M }) || f) && (A ? (we = A(M)) : (et = !0));
    const ii = he.map((G) => {
      if (!C.isValidElement(G)) return null;
      let Ce;
      if (g) {
        if (!Array.isArray(M)) throw new Error(Yn(2));
        (Ce = M.some((tt) => cg(tt, G.props.value))),
          Ce && et && H.push(G.props.children);
      } else (Ce = cg(M, G.props.value)), Ce && et && (In = G.props.children);
      return C.cloneElement(G, {
        "aria-selected": Ce ? "true" : "false",
        onClick: Ut(G),
        onKeyUp: (tt) => {
          tt.key === " " && tt.preventDefault(),
            G.props.onKeyUp && G.props.onKeyUp(tt);
        },
        role: "option",
        selected: Ce,
        value: void 0,
        "data-value": G.props.value,
      });
    });
    et &&
      (g
        ? H.length === 0
          ? (we = null)
          : (we = H.reduce(
              (G, Ce, tt) => (G.push(Ce), tt < H.length - 1 && G.push(", "), G),
              []
            ))
        : (we = In));
    let On = Be;
    !s && Se && Y && (On = ae.clientWidth);
    let Ar;
    typeof V < "u" ? (Ar = V) : (Ar = c ? null : 0);
    const si = $.id || (p ? `mui-component-select-${p}` : void 0),
      tr = { ...t, variant: L, value: M, open: Je, error: y },
      no = j5(tr),
      Ee = {
        ...m.PaperProps,
        ...((li = m.slotProps) == null ? void 0 : li.paper),
      },
      ai = xp();
    return h.jsxs(C.Fragment, {
      children: [
        h.jsx(E5, {
          as: "div",
          ref: te,
          tabIndex: Ar,
          role: "combobox",
          "aria-controls": ai,
          "aria-disabled": c ? "true" : void 0,
          "aria-expanded": Je ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": o,
          "aria-labelledby": [b, si].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          onKeyDown: Ze,
          onMouseDown: c || T ? null : qe,
          onBlur: gn,
          onFocus: E,
          ...$,
          ownerState: tr,
          className: q($.className, no.select, l),
          id: si,
          children: M5(we)
            ? ug ||
              (ug = h.jsx("span", { className: "notranslate", children: "​" }))
            : we,
        }),
        h.jsx(R5, {
          "aria-invalid": y,
          value: Array.isArray(M) ? M.join(",") : M,
          name: p,
          ref: ee,
          "aria-hidden": !0,
          onChange: Bt,
          tabIndex: -1,
          disabled: c,
          className: no.nativeInput,
          autoFocus: i,
          ...z,
          ownerState: tr,
        }),
        h.jsx(T5, { as: v, className: no.icon, ownerState: tr }),
        h.jsx(f5, {
          id: `menu-${p || ""}`,
          anchorEl: ae,
          open: Je,
          onClose: oe,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...m,
          MenuListProps: {
            "aria-labelledby": b,
            role: "listbox",
            "aria-multiselectable": g ? "true" : void 0,
            disableListWrap: !0,
            id: ai,
            ...m.MenuListProps,
          },
          slotProps: {
            ...m.slotProps,
            paper: {
              ...Ee,
              style: { minWidth: On, ...(Ee != null ? Ee.style : null) },
            },
          },
          children: ii,
        }),
      ],
    });
  }),
  I5 = (e) => {
    const { classes: t } = e;
    return t;
  },
  Tp = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => mn(e) && e !== "variant",
    slot: "Root",
  },
  O5 = W(pl, Tp)(""),
  L5 = W(hl, Tp)(""),
  $5 = W(fl, Tp)(""),
  z1 = C.forwardRef(function (t, n) {
    const r = T1({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: d = xE,
        id: c,
        input: f,
        inputProps: y,
        label: v,
        labelId: S,
        MenuProps: b,
        multiple: m = !1,
        native: g = !1,
        onClose: p,
        onOpen: w,
        open: k,
        renderValue: P,
        SelectDisplayProps: E,
        variant: R = "outlined",
        ...x
      } = r,
      T = g ? y5 : A5,
      A = ri(),
      $ = ni({ props: r, muiFormControl: A, states: ["variant", "error"] }),
      V = $.variant || R,
      N = { ...r, variant: V, classes: s },
      O = I5(N),
      { root: L, ...z } = O,
      M =
        f ||
        {
          standard: h.jsx(O5, { ownerState: N }),
          outlined: h.jsx(L5, { label: v, ownerState: N }),
          filled: h.jsx($5, { ownerState: N }),
        }[V],
      D = at(n, Ls(M));
    return h.jsx(C.Fragment, {
      children: C.cloneElement(M, {
        inputComponent: T,
        inputProps: {
          children: i,
          error: $.error,
          IconComponent: d,
          variant: V,
          type: void 0,
          multiple: m,
          ...(g
            ? { id: c }
            : {
                autoWidth: o,
                defaultOpen: l,
                displayEmpty: u,
                labelId: S,
                MenuProps: b,
                onClose: p,
                onOpen: w,
                open: k,
                renderValue: P,
                SelectDisplayProps: { id: c, ...E },
              }),
          ...y,
          classes: y ? ht(z, y.classes) : z,
          ...(f ? f.props.inputProps : {}),
        },
        ...(((m && g) || u) && V === "outlined" ? { notched: !0 } : {}),
        ref: D,
        className: q(M.props.className, a, O.root),
        ...(!f && { variant: V }),
        ...x,
      }),
    });
  });
z1.muiName = "Select";
function D5(e) {
  return de("MuiTextField", e);
}
fe("MuiTextField", ["root"]);
const F5 = { standard: pl, filled: fl, outlined: hl },
  _5 = (e) => {
    const { classes: t } = e;
    return ye({ root: ["root"] }, D5, t);
  },
  N5 = W(ET, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  or = C.forwardRef(function (t, n) {
    const r = Pe({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: d = !1,
        error: c = !1,
        FormHelperTextProps: f,
        fullWidth: y = !1,
        helperText: v,
        id: S,
        InputLabelProps: b,
        inputProps: m,
        InputProps: g,
        inputRef: p,
        label: w,
        maxRows: k,
        minRows: P,
        multiline: E = !1,
        name: R,
        onBlur: x,
        onChange: T,
        onFocus: A,
        placeholder: $,
        required: V = !1,
        rows: N,
        select: O = !1,
        SelectProps: L,
        slots: z = {},
        slotProps: M = {},
        type: D,
        value: U,
        variant: X = "outlined",
        ...ee
      } = r,
      Z = {
        ...r,
        autoFocus: i,
        color: l,
        disabled: d,
        error: c,
        fullWidth: y,
        multiline: E,
        required: V,
        select: O,
        variant: X,
      },
      Y = _5(Z),
      xe = xp(S),
      Se = v && xe ? `${xe}-helper-text` : void 0,
      Be = w && xe ? `${xe}-label` : void 0,
      wt = F5[X],
      _e = {
        slots: z,
        slotProps: {
          input: g,
          inputLabel: b,
          htmlInput: m,
          formHelperText: f,
          select: L,
          ...M,
        },
      },
      te = {},
      ae = _e.slotProps.inputLabel;
    X === "outlined" &&
      (ae && typeof ae.shrink < "u" && (te.notched = ae.shrink),
      (te.label = w)),
      O &&
        ((!L || !L.native) && (te.id = void 0),
        (te["aria-describedby"] = void 0));
    const [ne, qe] = dn("input", {
        elementType: wt,
        externalForwardedProps: _e,
        additionalProps: te,
        ownerState: Z,
      }),
      [oe, he] = dn("inputLabel", {
        elementType: UT,
        externalForwardedProps: _e,
        ownerState: Z,
      }),
      [Bt, Ut] = dn("htmlInput", {
        elementType: "input",
        externalForwardedProps: _e,
        ownerState: Z,
      }),
      [Ze, Je] = dn("formHelperText", {
        elementType: jT,
        externalForwardedProps: _e,
        ownerState: Z,
      }),
      [gn, we] = dn("select", {
        elementType: z1,
        externalForwardedProps: _e,
        ownerState: Z,
      }),
      In = h.jsx(ne, {
        "aria-describedby": Se,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: y,
        multiline: E,
        name: R,
        rows: N,
        maxRows: k,
        minRows: P,
        type: D,
        value: U,
        id: xe,
        inputRef: p,
        onBlur: x,
        onChange: T,
        onFocus: A,
        placeholder: $,
        inputProps: Ut,
        slots: { input: z.htmlInput ? Bt : void 0 },
        ...qe,
      });
    return h.jsxs(N5, {
      className: q(Y.root, a),
      disabled: d,
      error: c,
      fullWidth: y,
      ref: n,
      required: V,
      color: l,
      variant: X,
      ownerState: Z,
      ...ee,
      children: [
        w != null &&
          w !== "" &&
          h.jsx(oe, { htmlFor: xe, id: Be, ...he, children: w }),
        O
          ? h.jsx(gn, {
              "aria-describedby": Se,
              id: xe,
              labelId: Be,
              value: U,
              input: In,
              ...we,
              children: s,
            })
          : In,
        v && h.jsx(Ze, { id: Se, ...Je, children: v }),
      ],
    });
  });
var Rp = {},
  V1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(V1);
var zt = V1.exports,
  cc = {};
const z5 = TS(jP);
var dg;
function Vt() {
  return (
    dg ||
      ((dg = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = z5;
      })(cc)),
    cc
  );
}
var V5 = zt;
Object.defineProperty(Rp, "__esModule", { value: !0 });
var Ld = (Rp.default = void 0),
  B5 = V5(Vt()),
  U5 = h;
Ld = Rp.default = (0, B5.default)(
  (0, U5.jsx)("path", {
    d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z",
  }),
  "Computer"
);
const W5 = () =>
  h.jsxs($1, {
    children: [
      jn("(min-width:1024px)") &&
        h.jsxs(F, {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 3,
          mb: 3,
          children: [
            h.jsxs(F, {
              display: "flex",
              alignItems: "center",
              gap: 1,
              children: [
                h.jsx(Ld, { sx: { color: "#1D1E20" } }),
                h.jsx(_, {
                  sx: {
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1D1E20",
                    fontFamily: "SUSE",
                  },
                  children: "ZAID",
                }),
              ],
            }),
            h.jsxs(F, {
              display: "flex",
              gap: 3,
              children: [
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  href: "#",
                  children: "Home",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  href: "#about",
                  children: "About",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  href: "#skills",
                  children: "Skills",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  href: "#projects",
                  children: "Projects",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "black", "&:hover": { cursor: "pointer" } },
                  href: "#contact",
                  children: "Contact",
                }),
              ],
            }),
          ],
        }),
      jn("(min-width:480px)") &&
        h.jsxs(F, {
          display: "none",
          mt: 2,
          children: [
            h.jsxs(F, {
              display: "flex",
              alignItems: "center",
              gap: 1,
              children: [
                h.jsx(Ld, { sx: { color: "#1D1E20" } }),
                h.jsx(_, {
                  sx: {
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1D1E20",
                    fontFamily: "SUSE",
                  },
                  children: "ZAID",
                }),
              ],
            }),
            h.jsxs(F, {
              display: "flex",
              gap: 3,
              children: [
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  children: "Home",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  children: "About",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  children: "Skills",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "#0d1321", "&:hover": { cursor: "pointer" } },
                  children: "Projects",
                }),
                h.jsx(Ge, {
                  underline: "none",
                  sx: { color: "black", "&:hover": { cursor: "pointer" } },
                  children: "Contact",
                }),
              ],
            }),
          ],
        }),
    ],
  });
var Mp = {},
  H5 = zt;
Object.defineProperty(Mp, "__esModule", { value: !0 });
var $d = (Mp.default = void 0);
X5(C);
var K5 = H5(Vt()),
  G5 = h;
function B1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (B1 = function (r) {
    return r ? n : t;
  })(e);
}
function X5(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = B1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && {}.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
$d = Mp.default = (0, K5.default)(
  (0, G5.jsx)("path", {
    d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z",
  }),
  "Facebook"
);
var jp = {},
  Q5 = zt;
Object.defineProperty(jp, "__esModule", { value: !0 });
var Dd = (jp.default = void 0);
Z5(C);
var Y5 = Q5(Vt()),
  q5 = h;
function U1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (U1 = function (r) {
    return r ? n : t;
  })(e);
}
function Z5(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = U1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && {}.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
Dd = jp.default = (0, Y5.default)(
  (0, q5.jsx)("path", {
    d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27",
  }),
  "GitHub"
);
var Ap = {},
  J5 = zt;
Object.defineProperty(Ap, "__esModule", { value: !0 });
var Fd = (Ap.default = void 0);
nR(C);
var eR = J5(Vt()),
  tR = h;
function W1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (W1 = function (r) {
    return r ? n : t;
  })(e);
}
function nR(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = W1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && {}.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
Fd = Ap.default = (0, eR.default)(
  (0, tR.jsx)("path", {
    d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z",
  }),
  "WhatsApp"
);
var Ip = {},
  rR = zt;
Object.defineProperty(Ip, "__esModule", { value: !0 });
var _d = (Ip.default = void 0);
sR(C);
var oR = rR(Vt()),
  iR = h;
function H1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (H1 = function (r) {
    return r ? n : t;
  })(e);
}
function sR(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = H1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && {}.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
_d = Ip.default = (0, oR.default)(
  (0, iR.jsx)("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  }),
  "LinkedIn"
);
function aR(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
function vs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Nd = (e) => Array.isArray(e);
function K1(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function xs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function fg(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Op(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = fg(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = fg(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function wu(e, t, n) {
  const r = e.getProps();
  return Op(r, t, n !== void 0 ? n : r.custom, e);
}
const Lp = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  $p = ["initial", ...Lp],
  $s = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Mr = new Set($s),
  Vn = (e) => e * 1e3,
  Bn = (e) => e / 1e3,
  lR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  uR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  cR = { type: "keyframes", duration: 0.8 },
  dR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  fR = (e, { keyframes: t }) =>
    t.length > 2
      ? cR
      : Mr.has(e)
      ? e.startsWith("scale")
        ? uR(t[1])
        : lR
      : dR;
function pR({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
function Dp(e, t) {
  return e[t] || e.default || e;
}
const hR = { skipAnimations: !1, useManualTiming: !1 },
  mR = (e) => e !== null;
function Cu(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(mR),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const mt = (e) => e;
function gR(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    i.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, d = !1, c = !1) => {
      const y = c && r ? t : n;
      return d && i.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const ua = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  yR = 40;
function G1(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = ua.reduce((m, g) => ((m[g] = gR(i)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: d,
      render: c,
      postRender: f,
    } = s,
    y = () => {
      const m = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, yR), 1)),
        (o.timestamp = m),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        d.process(o),
        c.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), o.isProcessing || e(y);
    };
  return {
    schedule: ua.reduce((m, g) => {
      const p = s[g];
      return (m[g] = (w, k = !1, P = !1) => (n || v(), p.schedule(w, k, P))), m;
    }, {}),
    cancel: (m) => {
      for (let g = 0; g < ua.length; g++) s[ua[g]].cancel(m);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: le,
    cancel: Jn,
    state: rt,
    steps: dc,
  } = G1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : mt, !0),
  X1 = (e) => /^0[^.\s]+$/u.test(e);
function vR(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || X1(e)
    : !0;
}
let zd = mt;
const Q1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Y1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  q1 = Y1("--"),
  xR = Y1("var(--"),
  Fp = (e) => (xR(e) ? SR.test(e.split("/*")[0].trim()) : !1),
  SR =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  wR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function CR(e) {
  const t = wR.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Z1(e, t, n = 1) {
  const [r, o] = CR(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Q1(s) ? parseFloat(s) : s;
  }
  return Fp(o) ? Z1(o, t, n + 1) : o;
}
const kr = (e, t, n) => (n > t ? t : n < e ? e : n),
  oi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Hi = { ...oi, transform: (e) => kr(0, 1, e) },
  ca = { ...oi, default: 1 },
  Ki = (e) => Math.round(e * 1e5) / 1e5,
  _p = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  bR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  kR =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ds(e) {
  return typeof e == "string";
}
function PR(e) {
  return e == null;
}
const Fs = (e) => ({
    test: (t) => Ds(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  ir = Fs("deg"),
  Mn = Fs("%"),
  K = Fs("px"),
  ER = Fs("vh"),
  TR = Fs("vw"),
  pg = {
    ...Mn,
    parse: (e) => Mn.parse(e) / 100,
    transform: (e) => Mn.transform(e * 100),
  },
  RR = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  hg = (e) => e === oi || e === K,
  mg = (e, t) => parseFloat(e.split(", ")[t]),
  gg =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return mg(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? mg(i[1], e) : 0;
      }
    },
  MR = new Set(["x", "y", "z"]),
  jR = $s.filter((e) => !MR.has(e));
function AR(e) {
  const t = [];
  return (
    jR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Qo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: gg(4, 13),
  y: gg(5, 14),
};
Qo.translateX = Qo.x;
Qo.translateY = Qo.y;
const J1 = (e) => (t) => t.test(e),
  IR = { test: (e) => e === "auto", parse: (e) => e },
  ex = [oi, K, Mn, ir, TR, ER, IR],
  yg = (e) => ex.find(J1(e)),
  Xr = new Set();
let Vd = !1,
  Bd = !1;
function tx() {
  if (Bd) {
    const e = Array.from(Xr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = AR(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Bd = !1), (Vd = !1), Xr.forEach((e) => e.complete()), Xr.clear();
}
function nx() {
  Xr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Bd = !0);
  });
}
function OR() {
  nx(), tx();
}
class Np {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Xr.add(this),
          Vd || ((Vd = !0), le.read(nx), le.resolveKeyframes(tx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Xr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Xr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const zp = (e, t) => (n) =>
    !!(
      (Ds(n) && kR.test(n) && n.startsWith(e)) ||
      (t && !PR(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  rx = (e, t, n) => (r) => {
    if (!Ds(r)) return r;
    const [o, i, s, a] = r.match(_p);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  LR = (e) => kr(0, 255, e),
  fc = { ...oi, transform: (e) => Math.round(LR(e)) },
  Hr = {
    test: zp("rgb", "red"),
    parse: rx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      fc.transform(e) +
      ", " +
      fc.transform(t) +
      ", " +
      fc.transform(n) +
      ", " +
      Ki(Hi.transform(r)) +
      ")",
  };
function $R(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Ud = { test: zp("#"), parse: $R, transform: Hr.transform },
  Eo = {
    test: zp("hsl", "hue"),
    parse: rx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Mn.transform(Ki(t)) +
      ", " +
      Mn.transform(Ki(n)) +
      ", " +
      Ki(Hi.transform(r)) +
      ")",
  },
  dt = {
    test: (e) => Hr.test(e) || Ud.test(e) || Eo.test(e),
    parse: (e) =>
      Hr.test(e) ? Hr.parse(e) : Eo.test(e) ? Eo.parse(e) : Ud.parse(e),
    transform: (e) =>
      Ds(e) ? e : e.hasOwnProperty("red") ? Hr.transform(e) : Eo.transform(e),
  };
function DR(e) {
  var t, n;
  return (
    isNaN(e) &&
    Ds(e) &&
    (((t = e.match(_p)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(bR)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ox = "number",
  ix = "color",
  FR = "var",
  _R = "var(",
  vg = "${}",
  NR =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ss(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      NR,
      (l) => (
        dt.test(l)
          ? (r.color.push(i), o.push(ix), n.push(dt.parse(l)))
          : l.startsWith(_R)
          ? (r.var.push(i), o.push(FR), n.push(l))
          : (r.number.push(i), o.push(ox), n.push(parseFloat(l))),
        ++i,
        vg
      )
    )
    .split(vg);
  return { values: n, split: a, indexes: r, types: o };
}
function sx(e) {
  return Ss(e).values;
}
function ax(e) {
  const { split: t, types: n } = Ss(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === ox
          ? (i += Ki(o[s]))
          : a === ix
          ? (i += dt.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const zR = (e) => (typeof e == "number" ? 0 : e);
function VR(e) {
  const t = sx(e);
  return ax(e)(t.map(zR));
}
const Pr = {
    test: DR,
    parse: sx,
    createTransformer: ax,
    getAnimatableNone: VR,
  },
  BR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function UR(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(_p) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = BR.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const WR = /\b([a-z-]*)\(.*?\)/gu,
  Wd = {
    ...Pr,
    getAnimatableNone: (e) => {
      const t = e.match(WR);
      return t ? t.map(UR).join(" ") : e;
    },
  },
  xg = { ...oi, transform: Math.round },
  Vp = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    size: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    rotate: ir,
    rotateX: ir,
    rotateY: ir,
    rotateZ: ir,
    scale: ca,
    scaleX: ca,
    scaleY: ca,
    scaleZ: ca,
    skew: ir,
    skewX: ir,
    skewY: ir,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: Hi,
    originX: pg,
    originY: pg,
    originZ: K,
    zIndex: xg,
    backgroundPositionX: K,
    backgroundPositionY: K,
    fillOpacity: Hi,
    strokeOpacity: Hi,
    numOctaves: xg,
  },
  HR = {
    ...Vp,
    color: dt,
    backgroundColor: dt,
    outlineColor: dt,
    fill: dt,
    stroke: dt,
    borderColor: dt,
    borderTopColor: dt,
    borderRightColor: dt,
    borderBottomColor: dt,
    borderLeftColor: dt,
    filter: Wd,
    WebkitFilter: Wd,
  },
  Bp = (e) => HR[e];
function lx(e, t) {
  let n = Bp(e);
  return (
    n !== Wd && (n = Pr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const KR = new Set(["auto", "none", "0"]);
function GR(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !KR.has(i) && Ss(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = lx(n, o);
}
class ux extends Np {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Fp(u))) {
        const d = Z1(u, n.current);
        d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !RR.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = yg(o),
      a = yg(i);
    if (s !== a)
      if (hg(s) && hg(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) vR(t[o]) && r.push(o);
    r.length && GR(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Qo[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = Qo[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function cx(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let Ma;
function XR() {
  Ma = void 0;
}
const Un = {
    now: () => (
      Ma === void 0 &&
        Un.set(
          rt.isProcessing || hR.useManualTiming
            ? rt.timestamp
            : performance.now()
        ),
      Ma
    ),
    set: (e) => {
      (Ma = e), queueMicrotask(XR);
    },
  },
  Sg = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Pr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function QR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function YR(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = Sg(o, t),
    a = Sg(i, t);
  return !s || !a ? !1 : QR(e) || (n === "spring" && r);
}
const qR = 40;
class dx {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Un.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > qR
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && OR(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Un.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !YR(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Cu(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...d }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function fx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ZR = 5;
function px(e, t, n) {
  const r = Math.max(t - ZR, 0);
  return fx(n - e(r), t - r);
}
const pc = 0.001,
  JR = 0.01,
  eM = 10,
  tM = 0.05,
  nM = 1;
function rM({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = kr(tM, nM, s)),
    (e = kr(JR, eM, Bn(e))),
    s < 1
      ? ((o = (u) => {
          const d = u * s,
            c = d * e,
            f = d - n,
            y = Hd(u, s),
            v = Math.exp(-c);
          return pc - (f / y) * v;
        }),
        (i = (u) => {
          const c = u * s * e,
            f = c * n + n,
            y = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-c),
            S = Hd(Math.pow(u, 2), s);
          return ((-o(u) + pc > 0 ? -1 : 1) * ((f - y) * v)) / S;
        }))
      : ((o = (u) => {
          const d = Math.exp(-u * e),
            c = (u - n) * e + 1;
          return -pc + d * c;
        }),
        (i = (u) => {
          const d = Math.exp(-u * e),
            c = (n - u) * (e * e);
          return d * c;
        }));
  const a = 5 / e,
    l = iM(o, i, a);
  if (((e = Vn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const oM = 12;
function iM(e, t, n) {
  let r = n;
  for (let o = 1; o < oM; o++) r = r - e(r) / t(r);
  return r;
}
function Hd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sM = ["duration", "bounce"],
  aM = ["stiffness", "damping", "mass"];
function wg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lM(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!wg(e, aM) && wg(e, sM)) {
    const n = rM(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function hx({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: d,
      velocity: c,
      isResolvedFromDuration: f,
    } = lM({ ...r, velocity: -Bn(r.velocity || 0) }),
    y = c || 0,
    v = l / (2 * Math.sqrt(a * u)),
    S = i - o,
    b = Bn(Math.sqrt(a / u)),
    m = Math.abs(S) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let g;
  if (v < 1) {
    const p = Hd(b, v);
    g = (w) => {
      const k = Math.exp(-v * b * w);
      return (
        i - k * (((y + v * b * S) / p) * Math.sin(p * w) + S * Math.cos(p * w))
      );
    };
  } else if (v === 1) g = (p) => i - Math.exp(-b * p) * (S + (y + b * S) * p);
  else {
    const p = b * Math.sqrt(v * v - 1);
    g = (w) => {
      const k = Math.exp(-v * b * w),
        P = Math.min(p * w, 300);
      return (
        i - (k * ((y + v * b * S) * Math.sinh(P) + p * S * Math.cosh(P))) / p
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (p) => {
      const w = g(p);
      if (f) s.done = p >= d;
      else {
        let k = 0;
        v < 1 && (k = p === 0 ? Vn(y) : px(g, p, w));
        const P = Math.abs(k) <= n,
          E = Math.abs(i - w) <= t;
        s.done = P && E;
      }
      return (s.value = s.done ? i : w), s;
    },
  };
}
function Cg({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const c = e[0],
    f = { done: !1, value: c },
    y = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    v = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
        ? a
        : l;
  let S = n * t;
  const b = c + S,
    m = s === void 0 ? b : s(b);
  m !== b && (S = m - c);
  const g = (R) => -S * Math.exp(-R / r),
    p = (R) => m + g(R),
    w = (R) => {
      const x = g(R),
        T = p(R);
      (f.done = Math.abs(x) <= u), (f.value = f.done ? m : T);
    };
  let k, P;
  const E = (R) => {
    y(f.value) &&
      ((k = R),
      (P = hx({
        keyframes: [f.value, v(f.value)],
        velocity: px(p, R, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let x = !1;
        return (
          !P && k === void 0 && ((x = !0), w(R), E(R)),
          k !== void 0 && R >= k ? P.next(R - k) : (!x && w(R), f)
        );
      },
    }
  );
}
const mx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  uM = 1e-7,
  cM = 12;
function dM(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = mx(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > uM && ++a < cM);
  return s;
}
function _s(e, t, n, r) {
  if (e === t && n === r) return mt;
  const o = (i) => dM(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : mx(o(i), t, r));
}
const fM = _s(0.42, 0, 1, 1),
  pM = _s(0, 0, 0.58, 1),
  gx = _s(0.42, 0, 0.58, 1),
  hM = (e) => Array.isArray(e) && typeof e[0] != "number",
  yx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  vx = (e) => (t) => 1 - e(1 - t),
  Up = (e) => 1 - Math.sin(Math.acos(e)),
  xx = vx(Up),
  mM = yx(Up),
  Sx = _s(0.33, 1.53, 0.69, 0.99),
  Wp = vx(Sx),
  gM = yx(Wp),
  yM = (e) =>
    (e *= 2) < 1 ? 0.5 * Wp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  bg = {
    linear: mt,
    easeIn: fM,
    easeInOut: gx,
    easeOut: pM,
    circIn: Up,
    circInOut: mM,
    circOut: xx,
    backIn: Wp,
    backInOut: gM,
    backOut: Sx,
    anticipate: yM,
  },
  kg = (e) => {
    if (Array.isArray(e)) {
      zd(e.length === 4);
      const [t, n, r, o] = e;
      return _s(t, n, r, o);
    } else if (typeof e == "string") return zd(bg[e] !== void 0), bg[e];
    return e;
  },
  vM = (e, t) => (n) => t(e(n)),
  Wn = (...e) => e.reduce(vM),
  ws = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  je = (e, t, n) => e + (t - e) * n;
function hc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function xM({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = hc(l, a, e + 1 / 3)), (i = hc(l, a, e)), (s = hc(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ml(e, t) {
  return (n) => (n > 0 ? t : e);
}
const mc = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  SM = [Ud, Hr, Eo],
  wM = (e) => SM.find((t) => t.test(e));
function Pg(e) {
  const t = wM(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Eo && (n = xM(n)), n;
}
const Eg = (e, t) => {
    const n = Pg(e),
      r = Pg(t);
    if (!n || !r) return ml(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = mc(n.red, r.red, i)),
      (o.green = mc(n.green, r.green, i)),
      (o.blue = mc(n.blue, r.blue, i)),
      (o.alpha = je(n.alpha, r.alpha, i)),
      Hr.transform(o)
    );
  },
  Kd = new Set(["none", "hidden"]);
function CM(e, t) {
  return Kd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function bM(e, t) {
  return (n) => je(e, t, n);
}
function Hp(e) {
  return typeof e == "number"
    ? bM
    : typeof e == "string"
    ? Fp(e)
      ? ml
      : dt.test(e)
      ? Eg
      : EM
    : Array.isArray(e)
    ? wx
    : typeof e == "object"
    ? dt.test(e)
      ? Eg
      : kM
    : ml;
}
function wx(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => Hp(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function kM(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Hp(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function PM(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const EM = (e, t) => {
  const n = Pr.createTransformer(t),
    r = Ss(e),
    o = Ss(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Kd.has(e) && !o.values.length) || (Kd.has(t) && !r.values.length)
      ? CM(e, t)
      : Wn(wx(PM(r, o), o.values), n)
    : ml(e, t);
};
function Cx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? je(e, t, n)
    : Hp(e)(e, t);
}
function TM(e, t, n) {
  const r = [],
    o = n || Cx,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || mt : t;
      a = Wn(l, a);
    }
    r.push(a);
  }
  return r;
}
function RM(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((zd(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = TM(t, r, o),
    a = s.length,
    l = (u) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const c = ws(e[d], e[d + 1], u);
      return s[d](c);
    };
  return n ? (u) => l(kr(e[0], e[i - 1], u)) : l;
}
function MM(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = ws(0, t, r);
    e.push(je(n, 1, o));
  }
}
function jM(e) {
  const t = [0];
  return MM(t, e.length - 1), t;
}
function AM(e, t) {
  return e.map((n) => n * t);
}
function IM(e, t) {
  return e.map(() => t || gx).splice(0, e.length - 1);
}
function gl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = hM(r) ? r.map(kg) : kg(r),
    i = { done: !1, value: t[0] },
    s = AM(n && n.length === t.length ? n : jM(t), e),
    a = RM(s, t, { ease: Array.isArray(o) ? o : IM(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const Tg = 2e4;
function OM(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Tg; ) (t += n), (r = e.next(t));
  return t >= Tg ? 1 / 0 : t;
}
const LM = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => le.update(t, !0),
      stop: () => Jn(t),
      now: () => (rt.isProcessing ? rt.timestamp : Un.now()),
    };
  },
  $M = { decay: Cg, inertia: Cg, tween: gl, keyframes: gl, spring: hx },
  DM = (e) => e / 100;
class Kp extends dx {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || Np,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = $M[n] || gl;
    let l, u;
    a !== gl &&
      typeof t[0] != "number" &&
      ((l = Wn(DM, Cx(t[0], t[1]))), (t = [0, 100]));
    const d = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      d.calculatedDuration === null && (d.calculatedDuration = OM(d));
    const { calculatedDuration: c } = d,
      f = c + o,
      y = f * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: c,
      resolvedDuration: f,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: d,
      resolvedDuration: c,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: v,
      repeatDelay: S,
      onUpdate: b,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      g = this.speed >= 0 ? m < 0 : m > d;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d);
    let p = this.currentTime,
      w = i;
    if (y) {
      const R = Math.min(this.currentTime, d) / c;
      let x = Math.floor(R),
        T = R % 1;
      !T && R >= 1 && (T = 1),
        T === 1 && x--,
        (x = Math.min(x, y + 1)),
        !!(x % 2) &&
          (v === "reverse"
            ? ((T = 1 - T), S && (T -= S / c))
            : v === "mirror" && (w = s)),
        (p = kr(0, 1, T) * c);
    }
    const k = g ? { done: !1, value: l[0] } : w.next(p);
    a && (k.value = a(k.value));
    let { done: P } = k;
    !g &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      E && o !== void 0 && (k.value = Cu(l, this.options, o)),
      b && b(k.value),
      E && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Bn(t.calculatedDuration) : 0;
  }
  get time() {
    return Bn(this.currentTime);
  }
  set time(t) {
    (t = Vn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Bn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = LM, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const bx = new Set(["opacity", "clipPath", "filter", "transform"]),
  kx = (e) => Array.isArray(e) && typeof e[0] == "number";
function Px(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Gp) ||
    kx(e) ||
    (Array.isArray(e) && e.every(Px))
  );
}
const Ai = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Gp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ai([0, 0.65, 0.55, 1]),
    circOut: Ai([0.55, 0, 1, 0.45]),
    backIn: Ai([0.31, 0.01, 0.66, -0.59]),
    backOut: Ai([0.33, 1.53, 0.69, 0.99]),
  };
function FM(e) {
  return Ex(e) || Gp.easeOut;
}
function Ex(e) {
  if (e) return kx(e) ? Ai(e) : Array.isArray(e) ? e.map(FM) : Gp[e];
}
function _M(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const d = Ex(a);
  return (
    Array.isArray(d) && (u.easing = d),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const NM = cx(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  yl = 10,
  zM = 2e4;
function VM(e) {
  return e.type === "spring" || !Px(e.ease);
}
function BM(e, t) {
  const n = new Kp({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < zM; ) (r = n.sample(i)), o.push(r.value), (i += yl);
  return { times: void 0, keyframes: o, duration: i - yl, ease: "linear" };
}
class Rg extends dx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new ux(
      i,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: d,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (VM(this.options)) {
      const {
          onComplete: f,
          onUpdate: y,
          motionValue: v,
          element: S,
          ...b
        } = this.options,
        m = BM(t, b);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = m.duration),
        (i = m.times),
        (s = m.ease),
        (a = "keyframes");
    }
    const c = _M(l.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (c.startTime = d ?? this.calcStartTime()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(Cu(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Bn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Bn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Vn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return mt;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return mt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: d,
          onComplete: c,
          element: f,
          ...y
        } = this.options,
        v = new Kp({
          ...y,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        S = Vn(this.time);
      u.setWithVelocity(v.sample(S - yl).value, v.sample(S).value, yl);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    return (
      NM() &&
      r &&
      bx.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
function UM(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t,
      s = (o === null ? 0 : o.value) / 100;
    n !== s && e(s), (n = s);
  };
  return le.update(r, !0), () => Jn(r);
}
const WM = cx(() => window.ScrollTimeline !== void 0);
class HM {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (WM() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          UM((o) => {
            r.time = r.duration * o;
          }, t)
        );
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Xp =
    (e, t, n, r = {}, o, i, s) =>
    (a) => {
      const l = Dp(r, e) || {},
        u = l.delay || r.delay || 0;
      let { elapsed: d = 0 } = r;
      d = d - Vn(u);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -d,
        onUpdate: (y) => {
          t.set(y), l.onUpdate && l.onUpdate(y);
        },
        onComplete: () => {
          a(), l.onComplete && l.onComplete(), s && s();
        },
        onStop: s,
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      pR(l) || (c = { ...c, ...fR(e, c) }),
        c.duration && (c.duration = Vn(c.duration)),
        c.repeatDelay && (c.repeatDelay = Vn(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !i && t.get() !== void 0)
      ) {
        const y = Cu(c.keyframes, l);
        if (y !== void 0)
          return (
            le.update(() => {
              c.onUpdate(y), c.onComplete();
            }),
            new HM([])
          );
      }
      return !i && Rg.supports(c) ? new Rg(c) : new Kp(c);
    },
  KM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  GM = (e) => (Nd(e) ? e[e.length - 1] || 0 : e);
function bu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ku(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Qp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return bu(this.subscriptions, t), () => ku(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Mg = 30,
  XM = (e) => !isNaN(parseFloat(e));
class Tx {
  constructor(t, n = {}) {
    (this.version = "11.5.4"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Un.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Un.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = XM(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Qp());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            le.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Un.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Mg
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Mg);
    return fx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Cs(e, t) {
  return new Tx(e, t);
}
function QM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Cs(n));
}
function YM(e, t) {
  const n = wu(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = GM(i[s]);
    QM(e, s, a);
  }
}
const Pu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  qM = "framerAppearId",
  Rx = "data-" + Pu(qM);
function Mx(e) {
  return e.props[Rx];
}
function jx(e) {
  if (Mr.has(e)) return "transform";
  if (bx.has(e)) return Pu(e);
}
class ZM extends Tx {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = jx(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o) return;
      o = !0;
      const i = this.counts.get(n) - 1;
      this.counts.set(n, i), i === 0 && (ku(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const pt = (e) => !!(e && e.getVelocity);
function JM(e) {
  return !!(pt(e) && e.add);
}
function Gd(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new ZM("auto")), e.addValue("willChange", r)),
    JM(r))
  )
    return r.add(t);
}
function ej({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Ax(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    d = o && e.animationState && e.animationState.getState()[o];
  for (const c in l) {
    const f = e.getValue(
        c,
        (i = e.latestValues[c]) !== null && i !== void 0 ? i : null
      ),
      y = l[c];
    if (y === void 0 || (d && ej(d, c))) continue;
    const v = { delay: n, ...Dp(s || {}, c) };
    let S = !1;
    if (window.MotionHandoffAnimation) {
      const m = Mx(e);
      if (m) {
        const g = window.MotionHandoffAnimation(m, c, le);
        g !== null && ((v.startTime = g), (S = !0));
      }
    }
    f.start(
      Xp(
        c,
        f,
        y,
        e.shouldReduceMotion && Mr.has(c) ? { type: !1 } : v,
        e,
        S,
        Gd(e, c)
      )
    );
    const b = f.animation;
    b && u.push(b);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        le.update(() => {
          a && YM(e, a);
        });
      }),
    u
  );
}
function Xd(e, t, n = {}) {
  var r;
  const o = wu(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(Ax(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return tj(e, t, d + u, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, d] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => d());
  } else return Promise.all([s(), a(n.delay)]);
}
function tj(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(nj)
      .forEach((u, d) => {
        u.notify("AnimationStart", t),
          s.push(
            Xd(u, t, { ...i, delay: n + l(d) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function nj(e, t) {
  return e.sortNodePosition(t);
}
function rj(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Xd(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Xd(e, t, n);
  else {
    const o = typeof t == "function" ? wu(e, t, n.custom) : t;
    r = Promise.all(Ax(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const oj = [...Lp].reverse(),
  ij = Lp.length;
function sj(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => rj(e, n, r)));
}
function aj(e) {
  let t = sj(e),
    n = jg(),
    r = !0;
  const o = (l) => (u, d) => {
    var c;
    const f = wu(
      e,
      d,
      l === "exit"
        ? (c = e.presenceContext) === null || c === void 0
          ? void 0
          : c.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: v, ...S } = f;
      u = { ...u, ...S, ...v };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const u = e.getProps(),
      d = e.getVariantContext(!0) || {},
      c = [],
      f = new Set();
    let y = {},
      v = 1 / 0;
    for (let b = 0; b < ij; b++) {
      const m = oj[b],
        g = n[m],
        p = u[m] !== void 0 ? u[m] : d[m],
        w = xs(p),
        k = m === l ? g.isActive : null;
      k === !1 && (v = b);
      let P = p === d[m] && p !== u[m] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (g.protectedKeys = { ...y }),
        (!g.isActive && k === null) ||
          (!p && !g.prevProp) ||
          vs(p) ||
          typeof p == "boolean")
      )
        continue;
      let R =
          lj(g.prevProp, p) ||
          (m === l && g.isActive && !P && w) ||
          (b > v && w),
        x = !1;
      const T = Array.isArray(p) ? p : [p];
      let A = T.reduce(o(m), {});
      k === !1 && (A = {});
      const { prevResolvedValues: $ = {} } = g,
        V = { ...$, ...A },
        N = (O) => {
          (R = !0),
            f.has(O) && ((x = !0), f.delete(O)),
            (g.needsAnimating[O] = !0);
          const L = e.getValue(O);
          L && (L.liveStyle = !1);
        };
      for (const O in V) {
        const L = A[O],
          z = $[O];
        if (y.hasOwnProperty(O)) continue;
        let M = !1;
        Nd(L) && Nd(z) ? (M = !K1(L, z)) : (M = L !== z),
          M
            ? L != null
              ? N(O)
              : f.add(O)
            : L !== void 0 && f.has(O)
            ? N(O)
            : (g.protectedKeys[O] = !0);
      }
      (g.prevProp = p),
        (g.prevResolvedValues = A),
        g.isActive && (y = { ...y, ...A }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!P || x) &&
          c.push(...T.map((O) => ({ animation: O, options: { type: m } })));
    }
    if (f.size) {
      const b = {};
      f.forEach((m) => {
        const g = e.getBaseTarget(m),
          p = e.getValue(m);
        p && (p.liveStyle = !0), (b[m] = g ?? null);
      }),
        c.push({ animation: b });
    }
    let S = !!c.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (r = !1),
      S ? t(c) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const c = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = jg()), (r = !0);
    },
  };
}
function lj(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !K1(t, e) : !1;
}
function Or(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function jg() {
  return {
    animate: Or(!0),
    whileInView: Or(),
    whileHover: Or(),
    whileTap: Or(),
    whileDrag: Or(),
    whileFocus: Or(),
    exit: Or(),
  };
}
class jr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class uj extends jr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = aj(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    vs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let cj = 0;
class dj extends jr {
  constructor() {
    super(...arguments), (this.id = cj++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const fj = { animation: { Feature: uj }, exit: { Feature: dj } },
  Ix = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Eu(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const pj = (e) => (t) => Ix(t) && e(t, Eu(t));
function Nn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Hn(e, t, n, r) {
  return Nn(e, t, pj(n), r);
}
const Ag = (e, t) => Math.abs(e - t);
function hj(e, t) {
  const n = Ag(e.x, t.x),
    r = Ag(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ox {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const c = yc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = hj(c.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: v } = c,
          { timestamp: S } = rt;
        this.history.push({ ...v, timestamp: S });
        const { onStart: b, onMove: m } = this.handlers;
        f ||
          (b && b(this.lastMoveEvent, c),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, c);
      }),
      (this.handlePointerMove = (c, f) => {
        (this.lastMoveEvent = c),
          (this.lastMoveEventInfo = gc(f, this.transformPagePoint)),
          le.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (c, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: S } = this.handlers;
        if (
          (this.dragSnapToOrigin && S && S(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const b = yc(
          c.type === "pointercancel"
            ? this.lastMoveEventInfo
            : gc(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(c, b), v && v(c, b);
      }),
      !Ix(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = Eu(t),
      a = gc(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = rt;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, yc(a, this.history)),
      (this.removeListeners = Wn(
        Hn(this.contextWindow, "pointermove", this.handlePointerMove),
        Hn(this.contextWindow, "pointerup", this.handlePointerUp),
        Hn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Jn(this.updatePoint);
  }
}
function gc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ig(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yc({ point: e }, t) {
  return {
    point: e,
    delta: Ig(e, Lx(t)),
    offset: Ig(e, mj(t)),
    velocity: gj(t, 0.1),
  };
}
function mj(e) {
  return e[0];
}
function Lx(e) {
  return e[e.length - 1];
}
function gj(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Lx(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Vn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Bn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function $x(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Og = $x("dragHorizontal"),
  Lg = $x("dragVertical");
function Dx(e) {
  let t = !1;
  if (e === "y") t = Lg();
  else if (e === "x") t = Og();
  else {
    const n = Og(),
      r = Lg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Fx() {
  const e = Dx(!0);
  return e ? (e(), !1) : !0;
}
function To(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const _x = 1e-4,
  yj = 1 - _x,
  vj = 1 + _x,
  Nx = 0.01,
  xj = 0 - Nx,
  Sj = 0 + Nx;
function Dt(e) {
  return e.max - e.min;
}
function wj(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $g(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = je(t.min, t.max, e.origin)),
    (e.scale = Dt(n) / Dt(t)),
    (e.translate = je(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= yj && e.scale <= vj) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= xj && e.translate <= Sj) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Gi(e, t, n, r) {
  $g(e.x, t.x, n.x, r ? r.originX : void 0),
    $g(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Dg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Dt(t));
}
function Cj(e, t, n) {
  Dg(e.x, t.x, n.x), Dg(e.y, t.y, n.y);
}
function Fg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Dt(t));
}
function Xi(e, t, n) {
  Fg(e.x, t.x, n.x), Fg(e.y, t.y, n.y);
}
function bj(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? je(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? je(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function _g(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function kj(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: _g(e.x, n, o), y: _g(e.y, t, r) };
}
function Ng(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Pj(e, t) {
  return { x: Ng(e.x, t.x), y: Ng(e.y, t.y) };
}
function Ej(e, t) {
  let n = 0.5;
  const r = Dt(e),
    o = Dt(t);
  return (
    o > r
      ? (n = ws(t.min, t.max - r, e.min))
      : r > o && (n = ws(e.min, e.max - o, t.min)),
    kr(0, 1, n)
  );
}
function Tj(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Qd = 0.35;
function Rj(e = Qd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Qd),
    { x: zg(e, "left", "right"), y: zg(e, "top", "bottom") }
  );
}
function zg(e, t, n) {
  return { min: Vg(e, t), max: Vg(e, n) };
}
function Vg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ro = () => ({ x: Bg(), y: Bg() }),
  Ug = () => ({ min: 0, max: 0 }),
  Ne = () => ({ x: Ug(), y: Ug() });
function Xt(e) {
  return [e("x"), e("y")];
}
function zx({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Mj({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function jj(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function vc(e) {
  return e === void 0 || e === 1;
}
function Yd({ scale: e, scaleX: t, scaleY: n }) {
  return !vc(e) || !vc(t) || !vc(n);
}
function _r(e) {
  return (
    Yd(e) ||
    Vx(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Vx(e) {
  return Wg(e.x) || Wg(e.y);
}
function Wg(e) {
  return e && e !== "0%";
}
function vl(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Hg(e, t, n, r, o) {
  return o !== void 0 && (e = vl(e, o, r)), vl(e, n, r) + t;
}
function qd(e, t = 0, n = 1, r, o) {
  (e.min = Hg(e.min, t, n, r, o)), (e.max = Hg(e.max, t, n, r, o));
}
function Bx(e, { x: t, y: n }) {
  qd(e.x, t.translate, t.scale, t.originPoint),
    qd(e.y, n.translate, n.scale, n.originPoint);
}
const Kg = 0.999999999999,
  Gg = 1.0000000000001;
function Aj(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        jo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Bx(e, s)),
      r && _r(i.latestValues) && jo(e, i.latestValues));
  }
  t.x < Gg && t.x > Kg && (t.x = 1), t.y < Gg && t.y > Kg && (t.y = 1);
}
function Mo(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Xg(e, t, n, r, o = 0.5) {
  const i = je(e.min, e.max, o);
  qd(e, t, n, i, r);
}
function jo(e, t) {
  Xg(e.x, t.x, t.scaleX, t.scale, t.originX),
    Xg(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Ux(e, t) {
  return zx(jj(e.getBoundingClientRect(), t));
}
function Ij(e, t, n) {
  const r = Ux(e, n),
    { scroll: o } = t;
  return o && (Mo(r.x, o.offset.x), Mo(r.y, o.offset.y)), r;
}
const Wx = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Oj = new WeakMap();
class Lj {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ne()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (d) => {
        const { dragSnapToOrigin: c } = this.getProps();
        c ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Eu(d, "page").point);
      },
      i = (d, c) => {
        var f;
        const { drag: y, dragPropagation: v, onDragStart: S } = this.getProps();
        if (
          y &&
          !v &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Dx(y)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Xt((m) => {
            let g = this.getAxisMotionValue(m).get() || 0;
            if (Mn.test(g)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const w = p.layout.layoutBox[m];
                w && (g = Dt(w) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[m] = g;
          }),
          S && le.postRender(() => S(d, c)),
          (f = this.removeWillChange) === null || f === void 0 || f.call(this),
          (this.removeWillChange = Gd(this.visualElement, "transform"));
        const { animationState: b } = this.visualElement;
        b && b.setActive("whileDrag", !0);
      },
      s = (d, c) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: S,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: b } = c;
        if (y && this.currentDirection === null) {
          (this.currentDirection = $j(b)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", c.point, b),
          this.updateAxis("y", c.point, b),
          this.visualElement.render(),
          S && S(d, c);
      },
      a = (d, c) => this.stop(d, c),
      l = () =>
        Xt((d) => {
          var c;
          return (
            this.getAnimationState(d) === "paused" &&
            ((c = this.getAxisMotionValue(d).animation) === null || c === void 0
              ? void 0
              : c.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Ox(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Wx(this.visualElement),
      }
    );
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const o = this.isDragging;
    if ((this.cancel(), !o)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && le.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !da(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = bj(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && To(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = kj(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Rj(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Xt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = Tj(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !To(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = Ij(r, o.root, this.visualElement.getTransformPagePoint());
    let s = Pj(o.layout.layoutBox, i);
    if (n) {
      const a = n(Mj(s));
      (this.hasMutatedConstraints = !!a), a && (s = zx(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Xt((d) => {
        if (!da(d, n, this.currentDirection)) return;
        let c = (l && l[d]) || {};
        s && (c = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          y = o ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...c,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(
      Xp(t, r, 0, n, this.visualElement, !1, Gd(this.visualElement, t))
    );
  }
  stopAnimation() {
    Xt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Xt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Xt((n) => {
      const { drag: r } = this.getProps();
      if (!da(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - je(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!To(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Xt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = Ej({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Xt((s) => {
        if (!da(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(je(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Oj.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Hn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        To(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      le.read(r);
    const s = Nn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Xt((d) => {
              const c = this.getAxisMotionValue(d);
              c &&
                ((this.originPoint[d] += l[d].translate),
                c.set(c.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Qd,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function da(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $j(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Dj extends jr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = mt),
      (this.removeListeners = mt),
      (this.controls = new Lj(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || mt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qg = (e) => (t, n) => {
  e && le.postRender(() => e(t, n));
};
class Fj extends jr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = mt);
  }
  onPointerDown(t) {
    this.session = new Ox(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Qg(t),
      onStart: Qg(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && le.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Hn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Yp = C.createContext(null);
function _j() {
  const e = C.useContext(Yp);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = C.useId();
  C.useEffect(() => r(o), []);
  const i = C.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const Hx = C.createContext({}),
  Kx = C.createContext({}),
  ja = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Yg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const bi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      const n = Yg(e, t.target.x),
        r = Yg(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Nj = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Pr.parse(e);
      if (o.length > 5) return r;
      const i = Pr.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = je(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  },
  xl = {};
function zj(e) {
  Object.assign(xl, e);
}
const { schedule: qp, cancel: s3 } = G1(queueMicrotask, !1);
class Vj extends C.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    zj(Bj),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ja.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              le.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      qp.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Gx(e) {
  const [t, n] = _j(),
    r = C.useContext(Hx);
  return h.jsx(Vj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext(Kx),
    isPresent: t,
    safeToRemove: n,
  });
}
const Bj = {
    borderRadius: {
      ...bi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: bi,
    borderTopRightRadius: bi,
    borderBottomLeftRadius: bi,
    borderBottomRightRadius: bi,
    boxShadow: Nj,
  },
  Xx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Uj = Xx.length,
  qg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Zg = (e) => typeof e == "number" || K.test(e);
function Wj(e, t, n, r, o, i) {
  o
    ? ((e.opacity = je(0, n.opacity !== void 0 ? n.opacity : 1, Hj(r))),
      (e.opacityExit = je(t.opacity !== void 0 ? t.opacity : 1, 0, Kj(r))))
    : i &&
      (e.opacity = je(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Uj; s++) {
    const a = `border${Xx[s]}Radius`;
    let l = Jg(t, a),
      u = Jg(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Zg(l) === Zg(u)
        ? ((e[a] = Math.max(je(qg(l), qg(u), r), 0)),
          (Mn.test(u) || Mn.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = je(t.rotate || 0, n.rotate || 0, r));
}
function Jg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Hj = Qx(0, 0.5, xx),
  Kj = Qx(0.5, 0.95, mt);
function Qx(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ws(e, t, r)));
}
function e0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Gt(e, t) {
  e0(e.x, t.x), e0(e.y, t.y);
}
function t0(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function n0(e, t, n, r, o) {
  return (
    (e -= t), (e = vl(e, 1 / n, r)), o !== void 0 && (e = vl(e, 1 / o, r)), e
  );
}
function Gj(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Mn.test(t) &&
      ((t = parseFloat(t)), (t = je(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = je(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = n0(e.min, t, n, a, o)),
    (e.max = n0(e.max, t, n, a, o));
}
function r0(e, t, [n, r, o], i, s) {
  Gj(e, t[n], t[r], t[o], t.scale, i, s);
}
const Xj = ["x", "scaleX", "originX"],
  Qj = ["y", "scaleY", "originY"];
function o0(e, t, n, r) {
  r0(e.x, t, Xj, n ? n.x : void 0, r ? r.x : void 0),
    r0(e.y, t, Qj, n ? n.y : void 0, r ? r.y : void 0);
}
function i0(e) {
  return e.translate === 0 && e.scale === 1;
}
function Yx(e) {
  return i0(e.x) && i0(e.y);
}
function s0(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Yj(e, t) {
  return s0(e.x, t.x) && s0(e.y, t.y);
}
function a0(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function qx(e, t) {
  return a0(e.x, t.x) && a0(e.y, t.y);
}
function l0(e) {
  return Dt(e.x) / Dt(e.y);
}
function u0(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class qj {
  constructor() {
    this.members = [];
  }
  add(t) {
    bu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ku(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Zj(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: d,
      rotateX: c,
      rotateY: f,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      c && (r += `rotateX(${c}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Jj = (e, t) => e.depth - t.depth;
class e4 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    bu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ku(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Jj),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Aa(e) {
  const t = pt(e) ? e.get() : e;
  return KM(t) ? t.toValue() : t;
}
function t4(e, t) {
  const n = Un.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Jn(r), e(i - t));
    };
  return le.read(r, !0), () => Jn(r);
}
function n4(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function r4(e, t, n) {
  const r = pt(e) ? e : Cs(e);
  return r.start(Xp("", r, t, n)), r.animation;
}
const Nr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ii = typeof window < "u" && window.MotionDebug !== void 0,
  xc = ["", "X", "Y", "Z"],
  o4 = { visibility: "hidden" },
  c0 = 1e3;
let i4 = 0;
function Sc(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Zx(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Mx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", le, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Zx(r);
}
function Jx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = i4++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Ii &&
              (Nr.totalNodes =
                Nr.resolvedTargetDeltas =
                Nr.recalculatedProjection =
                  0),
            this.nodes.forEach(l4),
            this.nodes.forEach(p4),
            this.nodes.forEach(h4),
            this.nodes.forEach(u4),
            Ii && window.MotionDebug.record(Nr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new e4());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Qp()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = n4(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            c && c(),
            (c = t4(f, 250)),
            ja.hasAnimatedSinceResize &&
              ((ja.hasAnimatedSinceResize = !1), this.nodes.forEach(f0));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const S =
                  this.options.transition || d.getDefaultTransition() || x4,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: m } =
                  d.getProps(),
                g = !this.targetLayout || !qx(this.targetLayout, v) || y,
                p = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(c, p);
                const w = { ...Dp(S, "layout"), onPlay: b, onComplete: m };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                f || f0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Jn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(m4),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Zx(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const c = this.path[d];
        (c.shouldResetTransform = !0),
          c.updateScroll("snapshot"),
          c.options.layoutRoot && c.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(d0);
        return;
      }
      this.isUpdating || this.nodes.forEach(d4),
        (this.isUpdating = !1),
        this.nodes.forEach(f4),
        this.nodes.forEach(s4),
        this.nodes.forEach(a4),
        this.clearAllSnapshots();
      const a = Un.now();
      (rt.delta = kr(0, 1e3 / 60, a - rt.timestamp)),
        (rt.timestamp = a),
        (rt.isProcessing = !0),
        dc.update.process(rt),
        dc.preRender.process(rt),
        dc.render.process(rt),
        (rt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), qp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(c4), this.sharedNodes.forEach(g4);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Yx(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      s &&
        (a || _r(this.latestValues) || d) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        S4(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return Ne();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(w4)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Mo(l.x, d.offset.x), Mo(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = Ne();
      if (
        (Gt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u],
          { scroll: c, options: f } = d;
        d !== this.root &&
          c &&
          f.layoutScroll &&
          (c.wasRoot && Gt(l, s), Mo(l.x, c.offset.x), Mo(l.y, c.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = Ne();
      Gt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          jo(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          _r(d.latestValues) && jo(l, d.latestValues);
      }
      return _r(this.latestValues) && jo(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ne();
      Gt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !_r(u.latestValues)) continue;
        Yd(u.latestValues) && u.updateSnapshot();
        const d = Ne(),
          c = u.measurePageBox();
        Gt(d, c),
          o0(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return _r(this.latestValues) && o0(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== rt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (
          ((this.resolvedRelativeTargetAt = rt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ne()),
              (this.relativeTargetOrigin = Ne()),
              Xi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Gt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ne()), (this.targetWithTransforms = Ne())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Cj(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Gt(this.target, this.layout.layoutBox),
                Bx(this.target, this.targetDelta))
              : Gt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ne()),
                (this.relativeTargetOrigin = Ne()),
                Xi(this.relativeTargetOrigin, this.target, y.target),
                Gt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ii && Nr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yd(this.parent.latestValues) ||
          Vx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === rt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: d, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || c))
      )
        return;
      Gt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      Aj(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ne()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (t0(this.prevProjectionDelta.x, this.projectionDelta.x),
          t0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Gi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== y ||
          !u0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !u0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Ii && Nr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ro()),
        (this.projectionDelta = Ro()),
        (this.projectionDeltaWithTransform = Ro());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        d = { ...this.latestValues },
        c = Ro();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ne(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        S = y !== v,
        b = this.getStack(),
        m = !b || b.members.length <= 1,
        g = !!(S && !m && this.options.crossfade === !0 && !this.path.some(v4));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        p0(c.x, s.x, k),
          p0(c.y, s.y, k),
          this.setTargetDelta(c),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Xi(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            y4(this.relativeTarget, this.relativeTargetOrigin, f, k),
            p && Yj(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = Ne()),
            Gt(p, this.relativeTarget)),
          S &&
            ((this.animationValues = d), Wj(d, u, this.latestValues, k, g, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Jn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = le.update(() => {
          (ja.hasAnimatedSinceResize = !0),
            (this.currentAnimation = r4(0, c0, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(c0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: d,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          eS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ne();
          const c = Dt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + c);
          const f = Dt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Gt(a, l),
          jo(a, d),
          Gi(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new qj()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Sc("z", s, u, this.animationValues);
      for (let d = 0; d < xc.length; d++)
        Sc(`rotate${xc[d]}`, s, u, this.animationValues),
          Sc(`skew${xc[d]}`, s, u, this.animationValues);
      s.render();
      for (const d in u)
        s.setStaticValue(d, u[d]),
          this.animationValues && (this.animationValues[d] = u[d]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return o4;
      const u = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Aa(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = d ? d(this.latestValues, "") : "none"),
          u
        );
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        const S = {};
        return (
          this.options.layoutId &&
            ((S.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (S.pointerEvents = Aa(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !_r(this.latestValues) &&
            ((S.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          S
        );
      }
      const f = c.animationValues || c.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Zj(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        d && (u.transform = d(f, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        c.animationValues
          ? (u.opacity =
              c === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              c === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const S in xl) {
        if (f[S] === void 0) continue;
        const { correct: b, applyTo: m } = xl[S],
          g = u.transform === "none" ? f[S] : b(f[S], c);
        if (m) {
          const p = m.length;
          for (let w = 0; w < p; w++) u[m[w]] = g;
        } else u[S] = g;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            c === this
              ? Aa(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(d0),
        this.root.sharedNodes.clear();
    }
  };
}
function s4(e) {
  e.updateLayout();
}
function a4(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? Xt((c) => {
          const f = s ? n.measuredBox[c] : n.layoutBox[c],
            y = Dt(f);
          (f.min = r[c].min), (f.max = f.min + y);
        })
      : eS(i, n.layoutBox, r) &&
        Xt((c) => {
          const f = s ? n.measuredBox[c] : n.layoutBox[c],
            y = Dt(r[c]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[c].max = e.relativeTarget[c].min + y));
        });
    const a = Ro();
    Gi(a, r, n.layoutBox);
    const l = Ro();
    s ? Gi(l, e.applyTransform(o, !0), n.measuredBox) : Gi(l, r, n.layoutBox);
    const u = !Yx(a);
    let d = !1;
    if (!e.resumeFrom) {
      const c = e.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: f, layout: y } = c;
        if (f && y) {
          const v = Ne();
          Xi(v, n.layoutBox, f.layoutBox);
          const S = Ne();
          Xi(S, r, y.layoutBox),
            qx(v, S) || (d = !0),
            c.options.layoutRoot &&
              ((e.relativeTarget = S),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = c));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function l4(e) {
  Ii && Nr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function u4(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function c4(e) {
  e.clearSnapshot();
}
function d0(e) {
  e.clearMeasurements();
}
function d4(e) {
  e.isLayoutDirty = !1;
}
function f4(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function f0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function p4(e) {
  e.resolveTargetDelta();
}
function h4(e) {
  e.calcProjection();
}
function m4(e) {
  e.resetSkewAndRotation();
}
function g4(e) {
  e.removeLeadSnapshot();
}
function p0(e, t, n) {
  (e.translate = je(t.translate, 0, n)),
    (e.scale = je(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function h0(e, t, n, r) {
  (e.min = je(t.min, n.min, r)), (e.max = je(t.max, n.max, r));
}
function y4(e, t, n, r) {
  h0(e.x, t.x, n.x, r), h0(e.y, t.y, n.y, r);
}
function v4(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const x4 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  m0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  g0 = m0("applewebkit/") && !m0("chrome/") ? Math.round : mt;
function y0(e) {
  (e.min = g0(e.min)), (e.max = g0(e.max));
}
function S4(e) {
  y0(e.x), y0(e.y);
}
function eS(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !wj(l0(t), l0(n), 0.2))
  );
}
function w4(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const C4 = Jx({
    attachResizeListener: (e, t) => Nn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  wc = { current: void 0 },
  tS = Jx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!wc.current) {
        const e = new C4({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (wc.current = e);
      }
      return wc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  b4 = {
    pan: { Feature: Fj },
    drag: { Feature: Dj, ProjectionNode: tS, MeasureLayout: Gx },
  };
function v0(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, s) => {
      if (i.pointerType === "touch" || Fx()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && le.postRender(() => l(i, s));
    };
  return Hn(e.current, n, o, { passive: !e.getProps()[r] });
}
class k4 extends jr {
  mount() {
    this.unmount = Wn(v0(this.node, !0), v0(this.node, !1));
  }
  unmount() {}
}
class P4 extends jr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Wn(
      Nn(this.node.current, "focus", () => this.onFocus()),
      Nn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const nS = (e, t) => (t ? (e === t ? !0 : nS(e, t.parentElement)) : !1);
function Cc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Eu(n));
}
class E4 extends jr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = mt),
      (this.removeEndListeners = mt),
      (this.removeAccessibleListeners = mt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Hn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: d,
                  globalTapTarget: c,
                } = this.node.getProps(),
                f = !c && !nS(this.node.current, a.target) ? d : u;
              f && le.update(() => f(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Hn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Wn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Cc("up", (l, u) => {
                  const { onTap: d } = this.node.getProps();
                  d && le.postRender(() => d(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Nn(this.node.current, "keyup", s)),
              Cc("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Nn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Cc("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Nn(this.node.current, "blur", r);
        this.removeAccessibleListeners = Wn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && le.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Fx()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && le.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Hn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Nn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Wn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Zd = new WeakMap(),
  bc = new WeakMap(),
  T4 = (e) => {
    const t = Zd.get(e.target);
    t && t(e);
  },
  R4 = (e) => {
    e.forEach(T4);
  };
function M4({ root: e, ...t }) {
  const n = e || document;
  bc.has(n) || bc.set(n, {});
  const r = bc.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(R4, { root: e, ...t })), r[o];
}
function j4(e, t, n) {
  const r = M4(t);
  return (
    Zd.set(e, n),
    r.observe(e),
    () => {
      Zd.delete(e), r.unobserve(e);
    }
  );
}
const A4 = { some: 0, all: 1 };
class I4 extends jr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : A4[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: d, onViewportLeave: c } = this.node.getProps(),
          f = u ? d : c;
        f && f(l);
      };
    return j4(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(O4(t, n)) && this.startObserver();
  }
  unmount() {}
}
function O4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const L4 = {
    inView: { Feature: I4 },
    tap: { Feature: E4 },
    focus: { Feature: P4 },
    hover: { Feature: k4 },
  },
  $4 = { layout: { ProjectionNode: tS, MeasureLayout: Gx } },
  rS = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Tu = C.createContext({}),
  Zp = typeof window < "u",
  D4 = Zp ? C.useLayoutEffect : C.useEffect,
  oS = C.createContext({ strict: !1 });
let x0 = !1;
function F4(e, t, n, r, o) {
  var i;
  const { visualElement: s } = C.useContext(Tu),
    a = C.useContext(oS),
    l = C.useContext(Yp),
    u = C.useContext(rS).reducedMotion,
    d = C.useRef();
  (r = r || a.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const c = d.current,
    f = C.useContext(Kx);
  c &&
    !c.projection &&
    o &&
    (c.type === "html" || c.type === "svg") &&
    N4(d.current, n, o, f),
    C.useInsertionEffect(() => {
      c && c.update(n, l);
    });
  const y = n[Rx],
    v = C.useRef(
      !!y &&
        !window.MotionHandoffIsComplete &&
        ((i = window.MotionHasOptimisedAnimation) === null || i === void 0
          ? void 0
          : i.call(window, y))
    );
  return (
    D4(() => {
      c &&
        (c.updateFeatures(),
        qp.render(c.render),
        v.current && c.animationState && c.animationState.animateChanges());
    }),
    C.useEffect(() => {
      c &&
        (!v.current && c.animationState && c.animationState.animateChanges(),
        (v.current = !1),
        x0 || ((x0 = !0), queueMicrotask(_4)));
    }),
    c
  );
}
function _4() {
  window.MotionHandoffIsComplete = !0;
}
function N4(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : iS(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && To(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function iS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : iS(e.parent);
}
function z4(e, t, n) {
  return C.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : To(n) && (n.current = r));
    },
    [t]
  );
}
function Ru(e) {
  return vs(e.animate) || $p.some((t) => xs(e[t]));
}
function sS(e) {
  return !!(Ru(e) || e.variants);
}
function V4(e, t) {
  if (Ru(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || xs(n) ? n : void 0,
      animate: xs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function B4(e) {
  const { initial: t, animate: n } = V4(e, C.useContext(Tu));
  return C.useMemo(() => ({ initial: t, animate: n }), [S0(t), S0(n)]);
}
function S0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const w0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Yo = {};
for (const e in w0) Yo[e] = { isEnabled: (t) => w0[e].some((n) => !!t[n]) };
function U4(e) {
  for (const t in e) Yo[t] = { ...Yo[t], ...e[t] };
}
const W4 = Symbol.for("motionComponentSymbol");
function H4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && U4(e);
  function i(a, l) {
    let u;
    const d = { ...C.useContext(rS), ...a, layoutId: K4(a) },
      { isStatic: c } = d,
      f = B4(a),
      y = r(a, c);
    if (!c && Zp) {
      G4();
      const v = X4(d);
      (u = v.MeasureLayout),
        (f.visualElement = F4(o, y, d, t, v.ProjectionNode));
    }
    return h.jsxs(Tu.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? h.jsx(u, { visualElement: f.visualElement, ...d })
          : null,
        n(o, a, z4(y, f.visualElement, l), y, c, f.visualElement),
      ],
    });
  }
  const s = C.forwardRef(i);
  return (s[W4] = o), s;
}
function K4({ layoutId: e }) {
  const t = C.useContext(Hx).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function G4(e, t) {
  C.useContext(oS).strict;
}
function X4(e) {
  const { drag: t, layout: n } = Yo;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Q4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Jp(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Q4.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function aS(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const lS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function uS(e, t, n, r) {
  aS(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(lS.has(o) ? o : Pu(o), t.attrs[o]);
}
function cS(e, { layout: t, layoutId: n }) {
  return (
    Mr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!xl[e] || e === "opacity"))
  );
}
function eh(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (pt(o[s]) ||
      (t.style && pt(t.style[s])) ||
      cS(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return (
    n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i
  );
}
function dS(e, t, n) {
  const r = eh(e, t, n);
  for (const o in e)
    if (pt(e[o]) || pt(t[o])) {
      const i =
        $s.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function Y4(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function q4(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  o,
  i,
  s,
  a
) {
  const l = { latestValues: J4(o, i, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const fS = (e) => (t, n) => {
  const r = C.useContext(Tu),
    o = C.useContext(Yp),
    i = () => q4(e, t, r, o, n);
  return n ? i() : Y4(i);
};
function Z4(e, t) {
  const n = jx(t);
  n && bu(e, n);
}
function C0(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = Op(e, r[o]);
    if (i) {
      const { transitionEnd: s, transition: a, ...l } = i;
      n(l, s);
    }
  }
}
function J4(e, t, n, r, o) {
  var i;
  const s = {},
    a = [],
    l =
      r &&
      ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) ===
        void 0,
    u = o(e, {});
  for (const b in u) s[b] = Aa(u[b]);
  let { initial: d, animate: c } = e;
  const f = Ru(e),
    y = sS(e);
  t &&
    y &&
    !f &&
    e.inherit !== !1 &&
    (d === void 0 && (d = t.initial), c === void 0 && (c = t.animate));
  let v = n ? n.initial === !1 : !1;
  v = v || d === !1;
  const S = v ? c : d;
  return (
    S &&
      typeof S != "boolean" &&
      !vs(S) &&
      C0(e, S, (b, m) => {
        for (const g in b) {
          let p = b[g];
          if (Array.isArray(p)) {
            const w = v ? p.length - 1 : 0;
            p = p[w];
          }
          p !== null && (s[g] = p);
        }
        for (const g in m) s[g] = m[g];
      }),
    l &&
      (c &&
        d !== !1 &&
        !vs(c) &&
        C0(e, c, (b) => {
          for (const m in b) Z4(a, m);
        }),
      a.length && (s.willChange = a.join(","))),
    s
  );
}
const th = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  pS = () => ({ ...th(), attrs: {} }),
  hS = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  eA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  tA = $s.length;
function nA(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < tA; i++) {
    const s = $s[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = hS(a, Vp[s]);
      if (!l) {
        o = !1;
        const d = eA[s] || s;
        r += `${d}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function nh(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Mr.has(l)) {
      s = !0;
      continue;
    } else if (q1(l)) {
      o[l] = u;
      continue;
    } else {
      const d = hS(u, Vp[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = nA(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${l} ${u} ${d}`;
  }
}
function b0(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function rA(e, t, n) {
  const r = b0(t, e.x, e.width),
    o = b0(n, e.y, e.height);
  return `${r} ${o}`;
}
const oA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  iA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sA(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? oA : iA;
  e[i.offset] = K.transform(-r);
  const s = K.transform(t),
    a = K.transform(n);
  e[i.array] = `${s} ${a}`;
}
function rh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  d,
  c
) {
  if ((nh(e, u, c), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: y, dimensions: v } = e;
  f.transform && (v && (y.transform = f.transform), delete f.transform),
    v &&
      (o !== void 0 || i !== void 0 || y.transform) &&
      (y.transformOrigin = rA(
        v,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && sA(f, s, a, l, !1);
}
const oh = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  aA = {
    useVisualState: fS({
      scrapeMotionValuesFromProps: dS,
      createRenderState: pS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        le.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          le.render(() => {
            rh(n, r, oh(t.tagName), e.transformTemplate), uS(t, n);
          });
      },
    }),
  },
  lA = {
    useVisualState: fS({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: eh,
      createRenderState: th,
    }),
  };
function mS(e, t, n) {
  for (const r in t) !pt(t[r]) && !cS(r, n) && (e[r] = t[r]);
}
function uA({ transformTemplate: e }, t) {
  return C.useMemo(() => {
    const n = th();
    return nh(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function cA(e, t) {
  const n = e.style || {},
    r = {};
  return mS(r, n, e), Object.assign(r, uA(e, t)), r;
}
function dA(e, t) {
  const n = {},
    r = cA(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const fA = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Sl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    fA.has(e)
  );
}
let gS = (e) => !Sl(e);
function pA(e) {
  e && (gS = (t) => (t.startsWith("on") ? !Sl(t) : e(t)));
}
try {
  pA(require("@emotion/is-prop-valid").default);
} catch {}
function hA(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((gS(o) ||
        (n === !0 && Sl(o)) ||
        (!t && !Sl(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function mA(e, t, n, r) {
  const o = C.useMemo(() => {
    const i = pS();
    return (
      rh(i, t, oh(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    mS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function gA(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Jp(n) ? mA : dA)(r, i, s, n),
      u = hA(r, typeof n == "string", e),
      d = n !== C.Fragment ? { ...u, ...l, ref: o } : {},
      { children: c } = r,
      f = C.useMemo(() => (pt(c) ? c.get() : c), [c]);
    return C.createElement(n, { ...d, children: f });
  };
}
function yA(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Jp(r) ? aA : lA),
      preloadedFeatures: e,
      useRender: gA(o),
      createVisualElement: t,
      Component: r,
    };
    return H4(s);
  };
}
const Jd = { current: null },
  yS = { current: !1 };
function vA() {
  if (((yS.current = !0), !!Zp))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Jd.current = e.matches);
      e.addListener(t), t();
    } else Jd.current = !1;
}
function xA(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (pt(o)) e.addValue(r, o);
    else if (pt(i)) e.addValue(r, Cs(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Cs(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const k0 = new WeakMap(),
  SA = [...ex, dt, Pr],
  wA = (e) => SA.find(J1(e)),
  P0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  CA = $p.length;
class bA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Np),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), le.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Ru(n)),
      (this.isVariantNode = sS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...c } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in c) {
      const y = c[f];
      l[f] !== void 0 && pt(y) && y.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      k0.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      yS.current || vA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Jd.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    k0.delete(this.current),
      this.projection && this.projection.unmount(),
      Jn(this.notifyUpdate),
      Jn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Mr.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && le.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Yo) {
      const n = Yo[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < P0.length; r++) {
      const o = P0[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = xA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < CA; r++) {
      const o = $p[r],
        i = this.props[o];
      (xs(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Cs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (Q1(o) || X1(o))
          ? (o = parseFloat(o))
          : !wA(o) && Pr.test(n) && (o = lx(t, n)),
        this.setBaseTarget(t, pt(o) ? o.get() : o)),
      pt(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Op(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !pt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Qp()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class vS extends bA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = ux);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function kA(e) {
  return window.getComputedStyle(e);
}
class PA extends vS {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = aS);
  }
  readValueFromInstance(t, n) {
    if (Mr.has(n)) {
      const r = Bp(n);
      return (r && r.default) || 0;
    } else {
      const r = kA(t),
        o = (q1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ux(t, n);
  }
  build(t, n, r) {
    nh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return eh(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class EA extends vS {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ne);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Mr.has(n)) {
      const r = Bp(n);
      return (r && r.default) || 0;
    }
    return (n = lS.has(n) ? n : Pu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return dS(t, n, r);
  }
  build(t, n, r) {
    rh(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    uS(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = oh(t.tagName)), super.mount(t);
  }
}
const TA = (e, t) =>
    Jp(e) ? new EA(t) : new PA(t, { allowProjection: e !== C.Fragment }),
  RA = yA({ ...fj, ...L4, ...b4, ...$4 }, TA),
  bt = aR(RA),
  MA = () =>
    h.jsxs(F, {
      children: [
        jn("(max-width:470px)") &&
          h.jsx(F, {
            sx: { bgcolor: "rgb(38 35 52)" },
            children: h.jsxs(F, {
              sx: { width: "50%", p: "40px", mt: "60px", ml: "50px" },
              children: [
                h.jsxs(F, {
                  children: [
                    h.jsx(_, {
                      sx: {
                        fontFamily: "SUSE",
                        fontSize: "29px",
                        color: "rgb(255 255 222)",
                        fontWeight: "600",
                      },
                      children: "AYOUB ZAID",
                    }),
                    h.jsx(_, {
                      sx: {
                        fontSize: "20px",
                        color: "rgb(255 255 222)",
                        fontWeight: "700",
                        fontFamily: "SUSE",
                      },
                      children: "Web Developer & UI/UI designer...",
                    }),
                  ],
                }),
                h.jsx(_, {
                  sx: {
                    fontFamily: "SUSE",
                    color: "rgb(255 255 222)",
                    fontSize: "14px",
                    textAlign: "justify",
                  },
                  children:
                    "Hi, I'm a passionate web developer and UI/UX designer. With a keen eye for detail and a love for creating beautiful, responsive websites, I specialize in crafting seamless user experiences. Let's build something amazing together.",
                }),
                h.jsxs(F, {
                  p: "20px",
                  display: "flex",
                  gap: 1,
                  children: [
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx($d, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx(Dd, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx(Fd, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx(_d, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        jn("(min-width:1024px)") &&
          h.jsx(F, {
            sx: { bgcolor: "rgb(38 35 52)" },
            children: h.jsxs(F, {
              sx: { width: "50%", p: "40px", mt: "60px", ml: "50px" },
              children: [
                h.jsx(F, {
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, x: -100 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(_, {
                        sx: {
                          fontFamily: "SUSE",
                          fontSize: "29px",
                          color: "rgb(255 255 222)",
                          fontWeight: "600",
                        },
                        children: "AYOUB ZAID",
                      }),
                      h.jsx(_, {
                        sx: {
                          fontSize: "20px",
                          color: "rgb(255 255 222)",
                          fontWeight: "700",
                          fontFamily: "SUSE",
                        },
                        children: "Web Developer & UI/UI designer...",
                      }),
                    ],
                  }),
                }),
                h.jsx(bt.div, {
                  initial: { opacity: 0, x: 300 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.8 },
                  children: h.jsx(_, {
                    sx: {
                      fontFamily: "SUSE",
                      color: "rgb(255 255 222)",
                      fontSize: "14px",
                      textAlign: "justify",
                    },
                    children:
                      "I'm a passionate web developer and UI/UX designer. With a keen eye or detail and a love for creating beautiful, responsive websites, I pecialize in crafting seamless user experiences. Let's build something mazing together. ypography",
                  }),
                }),
                h.jsxs(F, {
                  p: "20px",
                  display: "flex",
                  gap: 1,
                  children: [
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx($d, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx(Dd, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx(Fd, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                    h.jsx(Ge, {
                      href: "#",
                      children: h.jsx(_d, {
                        sx: {
                          color: "rgb(255 255 222)",
                          fontSize: "30px",
                          "&:hover": { color: "rgb(165 111 252);" },
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
var ih = {},
  jA = zt;
Object.defineProperty(ih, "__esModule", { value: !0 });
var xS = (ih.default = void 0),
  AA = jA(Vt()),
  IA = h;
xS = ih.default = (0, AA.default)(
  (0, IA.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z",
  }),
  "Info"
);
function OA() {
  return h.jsxs($1, {
    id: "about",
    children: [
      h.jsxs(F, {
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: "60px",
        children: [
          h.jsx(xS, { sx: { fontSize: "40px", color: "rgb(38 35 52)" } }),
          h.jsx(_, {
            sx: { fontSize: "28px", color: "#0d1321", fontFamily: "SUSE" },
            children: "About Me",
          }),
        ],
      }),
      h.jsxs(F, {
        sx: { p: 2, mt: 4 },
        className: "box",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        children: [
          h.jsx(_, {
            sx: { textAlign: "justify", fontFamily: "SUSE" },
            children:
              "I am a passionate web developer and UI/UX designer with a keen eye for detail and a love for creating beautiful, responsive websites. Specializing in crafting seamless user experiences, I use HTML, CSS (with frameworks like Bootstrap and Tailwind), and JavaScript. My technical skills extend to SQL, PHP, and a bit of React JS. As a designer, I excel in using Figma and Adobe XD to bring creative visions to life. Proficient with Git and GitHub, I ensure efficient version control and collaboration throughout the development process.",
          }),
          h.jsx(ys, {
            sx: {
              fontFamily: "SUSE",
              mt: 4,
              color: "#000",
              border: "2px solid #000",
              borderRadius: "25px",
              "&:hover": { background: "#000", color: "#fff" },
            },
            children: "Download Resumé",
          }),
        ],
      }),
    ],
  });
}
var sh = {},
  LA = zt;
Object.defineProperty(sh, "__esModule", { value: !0 });
var ef = (sh.default = void 0),
  $A = LA(Vt()),
  DA = h;
ef = sh.default = (0, $A.default)(
  (0, DA.jsx)("path", {
    d: "M23 11.01 18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99M23 20h-5v-7h5zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2m-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9z",
  }),
  "ImportantDevices"
);
function FA() {
  return h.jsx(F, {
    id: "skills",
    children: h.jsxs(F, {
      children: [
        jn("(max-width:470px)") &&
          h.jsxs(F, {
            sx: { bgcolor: "#eff1f7", p: "20px" },
            children: [
              h.jsxs(F, {
                display: "flex",
                alignItems: "center",
                gap: 1,
                m: "10px",
                children: [
                  h.jsx(ef, {
                    sx: { fontSize: "40px", color: "#rgb(38 35 52)" },
                  }),
                  h.jsx(_, {
                    sx: { fontSize: "28px", color: "#0d1321" },
                    children: "Skills",
                  }),
                ],
              }),
              h.jsxs(F, {
                children: [
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    sx: { p: 2, mt: 4 },
                    className: "box",
                    gap: 2,
                    children: [
                      h.jsx(_, {
                        sx: { fontFamily: "SUSE", fontSize: "24px" },
                        children: "Front-End",
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "HTML",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 95,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "CSS",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 85,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "JS",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 55,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "TAILWIND/BOOTSTRAP",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 65,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "REACT/MATERIAL UI",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 35,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    sx: { p: 2, mt: 4 },
                    flexDirection: "column",
                    justifyContent: "space-between",
                    className: "box",
                    gap: 2,
                    children: [
                      h.jsx(_, {
                        sx: { fontFamily: "SUSE", fontSize: "24px" },
                        children: "Back-End",
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "SQL SERVER",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 65,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "MySQL",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 65,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "MongoDB",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 10,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    sx: { p: 2, mt: 4 },
                    flexDirection: "column",
                    justifyContent: "space-between",
                    className: "box",
                    gap: 2,
                    children: [
                      h.jsx(_, {
                        sx: { fontFamily: "SUSE", fontSize: "24px" },
                        children: "UI/UX",
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "Figma",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 75,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                      h.jsxs(F, {
                        textAlign: "center",
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "Adobe XD",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 75,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    sx: { p: 2, mt: 4 },
                    flexDirection: "column",
                    justifyContent: "space-between",
                    className: "box",
                    gap: 2,
                    children: [
                      h.jsx(_, {
                        sx: { fontFamily: "SUSE", fontSize: "24px" },
                        children: "Others",
                      }),
                      h.jsxs(F, {
                        children: [
                          h.jsx(_, {
                            sx: { fontFamily: "SUSE", fontSize: "13px" },
                            children: "Git & Github",
                          }),
                          h.jsx(Oe, {
                            variant: "determinate",
                            value: 35,
                            sx: { color: "#1d2d44", mt: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        jn("(min-width:1024px)") &&
          h.jsxs(F, {
            sx: { bgcolor: "#eff1f7", p: "100px" },
            mt: "60px",
            children: [
              h.jsxs(F, {
                display: "flex",
                alignItems: "center",
                gap: 1,
                children: [
                  h.jsx(ef, {
                    sx: { fontSize: "40px", color: "#rgb(38 35 52)" },
                  }),
                  h.jsx(_, {
                    sx: { fontSize: "28px", color: "#0d1321" },
                    children: "Skills",
                  }),
                ],
              }),
              h.jsxs(F, {
                children: [
                  h.jsx(bt.div, {
                    initial: { opacity: 0, x: -100 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 },
                    children: h.jsxs(F, {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      sx: { p: 2, mt: 4 },
                      className: "box",
                      children: [
                        h.jsx(_, {
                          sx: { fontFamily: "SUSE", fontSize: "18px" },
                          children: "Front-End",
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "HTML",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 95,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "CSS",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 85,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "JS",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 55,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "TAILWIND/BOOTSTRAP",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 65,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "REACT/MATERIAL UI",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 35,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsx(bt.div, {
                    initial: { opacity: 0, x: 100 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 },
                    children: h.jsxs(F, {
                      display: "flex",
                      alignItems: "center",
                      sx: { p: 2, mt: 4 },
                      justifyContent: "space-around",
                      className: "box",
                      children: [
                        h.jsx(_, {
                          sx: {
                            fontFamily: "SUSE",
                            fontSize: "18px",
                            ml: "-63px",
                          },
                          children: "Back-End",
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "SQL SERVER",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 65,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "MySQL",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 65,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "MongoDB",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 10,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsx(bt.div, {
                    initial: { opacity: 0, x: -100 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 },
                    children: h.jsxs(F, {
                      display: "flex",
                      alignItems: "center",
                      sx: { p: 2, mt: 4 },
                      justifyContent: "space-around",
                      className: "box",
                      children: [
                        h.jsx(_, {
                          sx: {
                            fontFamily: "SUSE",
                            fontSize: "18px",
                            ml: "-136px",
                          },
                          children: "UI/UX",
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "Figma",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 75,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                        h.jsxs(F, {
                          textAlign: "center",
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "Adobe XD",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 75,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  h.jsx(bt.div, {
                    initial: { opacity: 0, x: 100 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 },
                    children: h.jsxs(F, {
                      display: "flex",
                      alignItems: "center",
                      sx: { p: 2, mt: 4 },
                      justifyContent: "space-around",
                      className: "box",
                      children: [
                        h.jsx(_, {
                          sx: {
                            fontFamily: "SUSE",
                            fontSize: "18px",
                            ml: "-261px",
                          },
                          children: "Others",
                        }),
                        h.jsxs(F, {
                          children: [
                            h.jsx(_, {
                              sx: { fontFamily: "SUSE", fontSize: "20px" },
                              children: "Git & Github",
                            }),
                            h.jsx(Oe, {
                              variant: "determinate",
                              value: 35,
                              sx: { color: "#1d2d44", mt: 1 },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
var ah = {},
  _A = zt;
Object.defineProperty(ah, "__esModule", { value: !0 });
var tf = (ah.default = void 0),
  NA = _A(Vt()),
  zA = h;
tf = ah.default = (0, NA.default)(
  (0, zA.jsx)("path", {
    d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z",
  }),
  "Terminal"
);
function VA() {
  return h.jsxs(F, {
    id: "projects",
    children: [
      jn("(max-width:470px)") &&
        h.jsxs(F, {
          sx: { p: "20px" },
          children: [
            h.jsxs(F, {
              display: "flex",
              alignItems: "center",
              gap: 1,
              m: "10px",
              children: [
                h.jsx(tf, { sx: { fontSize: "40px", color: "rgb(38 35 52)" } }),
                h.jsx(_, {
                  sx: {
                    fontSize: "28px",
                    fontFamily: "SUSE",
                    color: "#0d1321",
                  },
                  children: "Projects",
                }),
              ],
            }),
            h.jsxs(F, {
              sx: { p: 1, mt: 4 },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
              children: [
                h.jsxs(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: [
                    h.jsx(Kt, {
                      sx: { height: 140, borderRadius: "15px 0  15px 0" },
                      image: "./src/images/project1.jpg",
                    }),
                    h.jsxs(Ht, {
                      children: [
                        h.jsx(_, {
                          gutterBottom: !0,
                          variant: "h4",
                          sx: { fontFamily: "SUSE" },
                          children: "Project 1",
                        }),
                        h.jsx(_, {
                          sx: { color: "text.secondary" },
                          children:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: [
                    h.jsx(Kt, {
                      sx: { height: 140, borderRadius: "15px 0  15px 0" },
                      image: "./src/images/project1.jpg",
                    }),
                    h.jsxs(Ht, {
                      children: [
                        h.jsx(_, {
                          gutterBottom: !0,
                          variant: "h4",
                          sx: { fontFamily: "SUSE" },
                          children: "Project 2",
                        }),
                        h.jsx(_, {
                          variant: "body2",
                          sx: { color: "text.secondary" },
                          children:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: [
                    h.jsx(Kt, {
                      sx: { height: 140, borderRadius: "15px 0  15px 0" },
                      image: "./src/images/project1.jpg",
                    }),
                    h.jsxs(Ht, {
                      children: [
                        h.jsx(_, {
                          gutterBottom: !0,
                          variant: "h4",
                          sx: { fontFamily: "SUSE" },
                          children: "Project 3",
                        }),
                        h.jsx(_, {
                          variant: "body2",
                          sx: { color: "text.secondary" },
                          children:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h.jsxs(F, {
              sx: { p: 1, mt: 4 },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
              children: [
                h.jsxs(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: [
                    h.jsx(Kt, {
                      sx: { height: 140, borderRadius: "15px 0  15px 0" },
                      image: "./src/images/project1.jpg",
                    }),
                    h.jsxs(Ht, {
                      children: [
                        h.jsx(_, {
                          gutterBottom: !0,
                          variant: "h4",
                          sx: { fontFamily: "SUSE" },
                          children: "Project 4",
                        }),
                        h.jsx(_, {
                          variant: "body2",
                          sx: { color: "text.secondary" },
                          children:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: [
                    h.jsx(Kt, {
                      sx: { height: 140, borderRadius: "15px 0  15px 0" },
                      image: "./src/images/project1.jpg",
                    }),
                    h.jsxs(Ht, {
                      children: [
                        h.jsx(_, {
                          gutterBottom: !0,
                          variant: "h4",
                          sx: { fontFamily: "SUSE" },
                          children: "Project 5",
                        }),
                        h.jsx(_, {
                          variant: "body2",
                          sx: { color: "text.secondary" },
                          children:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: [
                    h.jsx(Kt, {
                      sx: { height: 140, borderRadius: "15px 0  15px 0" },
                      image: "./src/images/project1.jpg",
                    }),
                    h.jsxs(Ht, {
                      children: [
                        h.jsx(_, {
                          gutterBottom: !0,
                          variant: "h4",
                          sx: { fontFamily: "SUSE" },
                          children: "Project 6",
                        }),
                        h.jsx(_, {
                          variant: "body2",
                          sx: { color: "text.secondary" },
                          children:
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h.jsx(F, {
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              children: h.jsx(ys, {
                sx: {
                  fontFamily: "SUSE",
                  mt: 2,
                  color: "#000",
                  border: "2px solid #000",
                  borderRadius: "25px",
                  "&:hover": { background: "#000", color: "#fff" },
                },
                children: "Visit my GitHub",
              }),
            }),
          ],
        }),
      jn("(min-width:1024px)") &&
        h.jsxs(F, {
          sx: { bgcolor: "", p: "100px" },
          children: [
            h.jsxs(F, {
              display: "flex",
              alignItems: "center",
              gap: 1,
              children: [
                h.jsx(tf, { sx: { fontSize: "40px", color: "rgb(38 35 52)" } }),
                h.jsx(_, {
                  sx: {
                    fontSize: "28px",
                    fontFamily: "SUSE",
                    color: "#0d1321",
                  },
                  children: "Projects",
                }),
              ],
            }),
            h.jsxs(F, {
              sx: { p: 2, mt: 4, ml: 4 },
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 3,
              children: [
                h.jsx(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, y: -200 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(Kt, {
                        sx: { height: 140, borderRadius: "15px 0  15px 0" },
                        image: "./src/images/project1.jpg",
                      }),
                      h.jsxs(Ht, {
                        children: [
                          h.jsx(_, {
                            gutterBottom: !0,
                            variant: "h4",
                            sx: { fontFamily: "SUSE" },
                            children: "Project 1",
                          }),
                          h.jsx(_, {
                            sx: { color: "text.secondary" },
                            children:
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                          }),
                        ],
                      }),
                      " ",
                    ],
                  }),
                }),
                h.jsx(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, y: 100 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(Kt, {
                        sx: { height: 140, borderRadius: "15px 0  15px 0" },
                        image: "./src/images/project1.jpg",
                      }),
                      h.jsxs(Ht, {
                        children: [
                          h.jsx(_, {
                            gutterBottom: !0,
                            variant: "h4",
                            sx: { fontFamily: "SUSE" },
                            children: "Project 2",
                          }),
                          h.jsx(_, {
                            variant: "body2",
                            sx: { color: "text.secondary" },
                            children:
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                h.jsx(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, y: -200 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(Kt, {
                        sx: { height: 140, borderRadius: "15px 0  15px 0" },
                        image: "./src/images/project1.jpg",
                      }),
                      h.jsxs(Ht, {
                        children: [
                          h.jsx(_, {
                            gutterBottom: !0,
                            variant: "h4",
                            sx: { fontFamily: "SUSE" },
                            children: "Project 3",
                          }),
                          h.jsx(_, {
                            variant: "body2",
                            sx: { color: "text.secondary" },
                            children:
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            h.jsxs(F, {
              sx: { p: 2, mt: 4, ml: 4 },
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 3,
              children: [
                h.jsx(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, y: 100 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(Kt, {
                        sx: { height: 140, borderRadius: "15px 0  15px 0" },
                        image: "./src/images/project1.jpg",
                      }),
                      h.jsxs(Ht, {
                        children: [
                          h.jsx(_, {
                            gutterBottom: !0,
                            variant: "h4",
                            sx: { fontFamily: "SUSE" },
                            children: "Project 4",
                          }),
                          h.jsx(_, {
                            variant: "body2",
                            sx: { color: "text.secondary" },
                            children:
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                h.jsx(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, y: -200 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(Kt, {
                        sx: { height: 140, borderRadius: "15px 0  15px 0" },
                        image: "./src/images/project1.jpg",
                      }),
                      h.jsxs(Ht, {
                        children: [
                          h.jsx(_, {
                            gutterBottom: !0,
                            variant: "h4",
                            sx: { fontFamily: "SUSE" },
                            children: "Project 5",
                          }),
                          h.jsx(_, {
                            variant: "body2",
                            sx: { color: "text.secondary" },
                            children:
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                h.jsx(Wt, {
                  sx: { maxWidth: 345 },
                  className: "box",
                  children: h.jsxs(bt.div, {
                    initial: { opacity: 0, y: 100 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8 },
                    children: [
                      h.jsx(Kt, {
                        sx: { height: 140, borderRadius: "15px 0  15px 0" },
                        image: "./src/images/project1.jpg",
                      }),
                      h.jsxs(Ht, {
                        children: [
                          h.jsx(_, {
                            gutterBottom: !0,
                            variant: "h4",
                            sx: { fontFamily: "SUSE" },
                            children: "Project 6",
                          }),
                          h.jsx(_, {
                            variant: "body2",
                            sx: { color: "text.secondary" },
                            children:
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, laboriosam!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            h.jsx(F, {
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              children: h.jsx(ys, {
                sx: {
                  fontFamily: "SUSE",
                  mt: 2,
                  color: "#000",
                  border: "2px solid #000",
                  borderRadius: "25px",
                  "&:hover": { background: "#000", color: "#fff" },
                },
                children: "Visit my GitHub",
              }),
            }),
          ],
        }),
    ],
  });
}
var lh = {},
  BA = zt;
Object.defineProperty(lh, "__esModule", { value: !0 });
var SS = (lh.default = void 0),
  UA = BA(Vt()),
  WA = h;
SS = lh.default = (0, UA.default)(
  (0, WA.jsx)("path", {
    d: "M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5",
  }),
  "ConnectWithoutContact"
);
var uh = {},
  HA = zt;
Object.defineProperty(uh, "__esModule", { value: !0 });
var wS = (uh.default = void 0),
  KA = HA(Vt()),
  GA = h;
wS = uh.default = (0, KA.default)(
  (0, GA.jsx)("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z",
  }),
  "Email"
);
var ch = {},
  XA = zt;
Object.defineProperty(ch, "__esModule", { value: !0 });
var CS = (ch.default = void 0),
  QA = XA(Vt()),
  YA = h;
CS = ch.default = (0, QA.default)(
  (0, YA.jsx)("path", {
    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z",
  }),
  "Phone"
);
var dh = {},
  qA = zt;
Object.defineProperty(dh, "__esModule", { value: !0 });
var bS = (dh.default = void 0),
  ZA = qA(Vt()),
  JA = h;
bS = dh.default = (0, ZA.default)(
  (0, JA.jsx)("path", {
    d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7",
  }),
  "MyLocation"
);
var fh = {},
  e3 = zt;
Object.defineProperty(fh, "__esModule", { value: !0 });
var nf = (fh.default = void 0),
  t3 = e3(Vt()),
  n3 = h;
nf = fh.default = (0, t3.default)(
  (0, n3.jsx)("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" }),
  "Send"
);
function r3() {
  return h.jsxs(F, {
    children: [
      jn("(max-width:470px)") &&
        h.jsx(F, {
          sx: { bgcolor: "#eff1f7" },
          id: "contact",
          children: h.jsxs(F, {
            sx: { p: "20px" },
            children: [
              h.jsxs(F, {
                display: "flex",
                alignItems: "center",
                gap: 1,
                m: "10px",
                children: [
                  h.jsx(SS, {
                    sx: { fontSize: "40px", color: "#rgb(38 35 52)" },
                  }),
                  h.jsx(_, {
                    sx: {
                      fontSize: "28px",
                      color: "#0d1321",
                      fontFamily: "SUSE",
                    },
                    children: "Contact Me",
                  }),
                ],
              }),
              h.jsxs(F, {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                children: [
                  h.jsx(or, {
                    id: "filled-basic",
                    label: "Full Name",
                    variant: "filled",
                    type: "text",
                    sx: { width: "50vh" },
                  }),
                  h.jsx(or, {
                    id: "filled-basic",
                    label: "Phone Number",
                    variant: "filled",
                    type: "text",
                    sx: { width: "50vh" },
                  }),
                  h.jsx(or, {
                    id: "filled-basic",
                    label: "Email",
                    variant: "filled",
                    type: "email",
                    sx: { width: "50vh" },
                  }),
                  h.jsx(or, {
                    id: "filled-multiline-flexible",
                    label: "Message",
                    multiline: !0,
                    rows: 4,
                    variant: "filled",
                    sx: { width: "50vh" },
                  }),
                  h.jsxs(ys, {
                    sx: {
                      fontFamily: "SUSE",
                      mt: 2,
                      color: "#000",
                      border: "2px solid #000",
                      borderRadius: "25px",
                      "&:hover": { background: "#000", color: "#fff" },
                    },
                    children: ["Send", h.jsx(nf, {})],
                  }),
                ],
              }),
            ],
          }),
        }),
      jn("(min-width:1024px)") &&
        h.jsxs(F, {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          className: "box",
          children: [
            h.jsx(bt.div, {
              initial: { opacity: 0, x: -200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              children: h.jsxs(F, {
                children: [
                  h.jsx(_, {
                    sx: {
                      color: "#000",
                      fontSize: "20px",
                      fontFamily: "SUSE",
                      p: "30px",
                    },
                    children: "Feel Free To Contact Me",
                  }),
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    ml: 5,
                    children: [
                      h.jsx(wS, { sx: { color: "#rgb(38 35 52)" } }),
                      h.jsx(_, {
                        sx: {
                          color: "#000",
                          fontSize: "16px",
                          fontFamily: "SUSE",
                          p: "20px",
                        },
                        children: "zaidayoub045@gmail.com",
                      }),
                    ],
                  }),
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    ml: 5,
                    children: [
                      h.jsx(CS, { sx: { color: "#rgb(38 35 52)" } }),
                      h.jsx(_, {
                        sx: {
                          color: "#000",
                          fontSize: "16px",
                          fontFamily: "SUSE",
                          p: "20px",
                        },
                        children: "+212 629362762",
                      }),
                    ],
                  }),
                  h.jsxs(F, {
                    display: "flex",
                    alignItems: "center",
                    ml: 5,
                    children: [
                      h.jsx(bS, { sx: { color: "#rgb(38 35 52)" } }),
                      h.jsx(_, {
                        sx: {
                          color: "#000",
                          fontSize: "16px",
                          fontFamily: "SUSE",
                          p: "20px",
                        },
                        children: "Casablanca",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            h.jsx(bt.div, {
              initial: { opacity: 0, x: 200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              children: h.jsxs(F, {
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                children: [
                  h.jsx(or, {
                    id: "filled-basic",
                    label: "Full Name",
                    variant: "filled",
                    type: "text",
                    sx: { width: "50vh" },
                  }),
                  h.jsx(or, {
                    id: "filled-basic",
                    label: "Phone Number",
                    variant: "filled",
                    type: "text",
                    sx: { width: "50vh" },
                  }),
                  h.jsx(or, {
                    id: "filled-basic",
                    label: "Email",
                    variant: "filled",
                    type: "email",
                    sx: { width: "50vh" },
                  }),
                  h.jsx(or, {
                    id: "filled-multiline-flexible",
                    label: "Message",
                    multiline: !0,
                    rows: 4,
                    variant: "filled",
                    sx: { width: "50vh" },
                  }),
                  h.jsxs(ys, {
                    sx: {
                      fontFamily: "SUSE",
                      mt: 2,
                      color: "#000",
                      border: "2px solid #000",
                      borderRadius: "25px",
                      "&:hover": { background: "#000", color: "#fff" },
                    },
                    children: ["Send", h.jsx(nf, {})],
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function o3() {
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(W5, {}),
      h.jsx(MA, {}),
      h.jsx(OA, {}),
      h.jsx(FA, {}),
      h.jsx(VA, {}),
      h.jsx(r3, {}),
    ],
  });
}
Nv(document.getElementById("root")).render(
  h.jsx(C.StrictMode, { children: h.jsx(o3, {}) })
);
