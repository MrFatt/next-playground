module.exports = __NEXT_REGISTER_PAGE("/", function() {
  return {
    page: (window.webpackJsonp = window.webpackJsonp || []).push([
      [4],
      {
        21: function(e, t, n) {
          e.exports = n(89);
        },
        36: function(e, t, n) {
          "use strict";
          n.r(t);
          var r =
            "function" == typeof fetch
              ? fetch.bind()
              : function(e, t) {
                  return (
                    (t = t || {}),
                    new Promise(function(n, r) {
                      var s = new XMLHttpRequest();
                      for (var i in (s.open(t.method || "get", e, !0),
                      t.headers))
                        s.setRequestHeader(i, t.headers[i]);
                      function o() {
                        var e,
                          t = [],
                          n = [],
                          r = {};
                        return (
                          s
                            .getAllResponseHeaders()
                            .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(
                              s,
                              i,
                              o
                            ) {
                              t.push((i = i.toLowerCase())),
                                n.push([i, o]),
                                (e = r[i]),
                                (r[i] = e ? e + "," + o : o);
                            }),
                          {
                            ok: 2 == ((s.status / 100) | 0),
                            status: s.status,
                            statusText: s.statusText,
                            url: s.responseURL,
                            clone: o,
                            text: function() {
                              return Promise.resolve(s.responseText);
                            },
                            json: function() {
                              return Promise.resolve(s.responseText).then(
                                JSON.parse
                              );
                            },
                            blob: function() {
                              return Promise.resolve(new Blob([s.response]));
                            },
                            headers: {
                              keys: function() {
                                return t;
                              },
                              entries: function() {
                                return n;
                              },
                              get: function(e) {
                                return r[e.toLowerCase()];
                              },
                              has: function(e) {
                                return e.toLowerCase() in r;
                              }
                            }
                          }
                        );
                      }
                      (s.withCredentials = "include" == t.credentials),
                        (s.onload = function() {
                          n(o());
                        }),
                        (s.onerror = r),
                        s.send(t.body);
                    })
                  );
                };
          t.default = r;
        },
        38: function(e, t, n) {
          e.exports = window.fetch || (window.fetch = n(36).default || n(36));
        },
        87: function(e, t, n) {
          e.exports = n(88);
        },
        88: function(e, t, n) {
          "use strict";
          n.r(t);
          var r = n(4),
            s = n.n(r),
            i = n(21),
            o = n.n(i),
            u = n(0),
            a = n.n(u),
            c = n(15),
            l = n.n(c),
            h = n(38),
            d = n.n(h),
            f = n(12);
          function p(e, t, n, r, s, i, o) {
            try {
              var u = e[i](o),
                a = u.value;
            } catch (e) {
              return void n(e);
            }
            u.done ? t(a) : Promise.resolve(a).then(r, s);
          }
          var m = function(e) {
              var t = e.show;
              return a.a.createElement(
                "div",
                { className: "jsx-3697373088" },
                a.a.createElement(
                  "li",
                  { className: "jsx-3697373088" },
                  a.a.createElement(
                    l.a,
                    { prefetch: !0, href: "/p/".concat(t.id) },
                    a.a.createElement(
                      "a",
                      { className: "jsx-3697373088" },
                      t.name
                    )
                  )
                ),
                a.a.createElement(o.a, { styleId: "3697373088", css: [] })
              );
            },
            v = function(e) {
              var t = e.shows;
              return a.a.createElement(
                f.a,
                null,
                a.a.createElement(
                  "h1",
                  { className: "jsx-4028648676" },
                  "Batman TV Shows"
                ),
                a.a.createElement(
                  "ul",
                  { className: "jsx-4028648676" },
                  t.map(function(e) {
                    var t = e.show;
                    return a.a.createElement(m, { key: t.id, show: t });
                  })
                ),
                a.a.createElement(o.a, {
                  styleId: "4028648676",
                  css: [
                    'h1,a{font-family:"Arial";}',
                    "ul{padding:0;}",
                    "li{list-style:none;margin:5px 0;}",
                    "a{-webkit-text-decoration:none;text-decoration:none;color:blue;}",
                    "a:hover{opacity:0.6;}"
                  ]
                })
              );
            };
          (v.getInitialProps = (function(e) {
            return function() {
              var t = this,
                n = arguments;
              return new Promise(function(r, s) {
                var i = e.apply(t, n);
                function o(e) {
                  p(i, r, s, o, u, "next", e);
                }
                function u(e) {
                  p(i, r, s, o, u, "throw", e);
                }
                o(void 0);
              });
            };
          })(
            s.a.mark(function e() {
              var t, n;
              return s.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          d()("https://api.tvmaze.com/search/shows?q=batman")
                        );
                      case 2:
                        return (t = e.sent), (e.next = 5), t.json();
                      case 5:
                        return (
                          (n = e.sent),
                          console.log(
                            "show data fetched. Count: ".concat(n.length)
                          ),
                          e.abrupt("return", { shows: n })
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
            (t.default = v);
        },
        89: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          t.flush = function() {
            var e = i.cssRules();
            return i.flush(), e;
          };
          var s = n(0);
          var i = new ((function(e) {
              return e && e.__esModule ? e : { default: e };
            })(n(90))).default(),
            o = (function(e) {
              function t(e) {
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                );
                return "undefined" == typeof window && i.add(n.props), n;
              }
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, s.Component),
                r(
                  t,
                  [
                    {
                      key: "componentDidMount",
                      value: function() {
                        i.add(this.props);
                      }
                    },
                    {
                      key: "shouldComponentUpdate",
                      value: function(e) {
                        return this.props.css !== e.css;
                      }
                    },
                    {
                      key: "componentDidUpdate",
                      value: function(e) {
                        i.update(e, this.props);
                      }
                    },
                    {
                      key: "componentWillUnmount",
                      value: function() {
                        i.remove(this.props);
                      }
                    },
                    {
                      key: "render",
                      value: function() {
                        return null;
                      }
                    }
                  ],
                  [
                    {
                      key: "dynamic",
                      value: function(e) {
                        return e
                          .map(function(e) {
                            var t = e[0],
                              n = e[1];
                            return i.computeId(t, n);
                          })
                          .join(" ");
                      }
                    }
                  ]
                ),
                t
              );
            })();
          t.default = o;
        },
        90: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            s = o(n(91)),
            i = o(n(92));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = (function() {
            function e() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.styleSheet,
                r = void 0 === n ? null : n,
                s = t.optimizeForSpeed,
                o = void 0 !== s && s,
                u = t.isBrowser,
                a = void 0 === u ? "undefined" != typeof window : u;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this._sheet =
                  r ||
                  new i.default({ name: "styled-jsx", optimizeForSpeed: o })),
                this._sheet.inject(),
                r &&
                  "boolean" == typeof o &&
                  (this._sheet.setOptimizeForSpeed(o),
                  (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                (this._isBrowser = a),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {}),
                (this.computeId = this.createComputeId()),
                (this.computeSelector = this.createComputeSelector());
            }
            return (
              r(e, [
                {
                  key: "add",
                  value: function(e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed &&
                      ((this._optimizeForSpeed = Array.isArray(e.css)),
                      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                      (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                      this._isBrowser &&
                        !this._fromServer &&
                        ((this._fromServer = this.selectFromServer()),
                        (this._instancesCounts = Object.keys(
                          this._fromServer
                        ).reduce(function(e, t) {
                          return (e[t] = 0), e;
                        }, {})));
                    var n = this.getIdAndRules(e),
                      r = n.styleId,
                      s = n.rules;
                    if (r in this._instancesCounts)
                      this._instancesCounts[r] += 1;
                    else {
                      var i = s
                        .map(function(e) {
                          return t._sheet.insertRule(e);
                        })
                        .filter(function(e) {
                          return -1 !== e;
                        });
                      i.length > 0 &&
                        ((this._indices[r] = i),
                        (this._instancesCounts[r] = 1));
                    }
                  }
                },
                {
                  key: "remove",
                  value: function(e) {
                    var t = this,
                      n = this.getIdAndRules(e).styleId;
                    if (
                      ((function(e, t) {
                        if (!e)
                          throw new Error("StyleSheetRegistry: " + t + ".");
                      })(
                        n in this._instancesCounts,
                        "styleId: `" + n + "` not found"
                      ),
                      (this._instancesCounts[n] -= 1),
                      this._instancesCounts[n] < 1)
                    ) {
                      var r = this._fromServer && this._fromServer[n];
                      r
                        ? (r.parentNode.removeChild(r),
                          delete this._fromServer[n])
                        : (this._indices[n].forEach(function(e) {
                            return t._sheet.deleteRule(e);
                          }),
                          delete this._indices[n]),
                        delete this._instancesCounts[n];
                    }
                  }
                },
                {
                  key: "update",
                  value: function(e, t) {
                    this.add(t), this.remove(e);
                  }
                },
                {
                  key: "flush",
                  value: function() {
                    this._sheet.flush(),
                      this._sheet.inject(),
                      (this._fromServer = void 0),
                      (this._indices = {}),
                      (this._instancesCounts = {}),
                      (this.computeId = this.createComputeId()),
                      (this.computeSelector = this.createComputeSelector());
                  }
                },
                {
                  key: "cssRules",
                  value: function() {
                    var e = this,
                      t = this._fromServer
                        ? Object.keys(this._fromServer).map(function(t) {
                            return [t, e._fromServer[t]];
                          })
                        : [],
                      n = this._sheet.cssRules();
                    return t.concat(
                      Object.keys(this._indices).map(function(t) {
                        return [
                          t,
                          e._indices[t]
                            .map(function(e) {
                              return n[e].cssText;
                            })
                            .join("\n")
                        ];
                      })
                    );
                  }
                },
                {
                  key: "createComputeId",
                  value: function() {
                    var e = {};
                    return function(t, n) {
                      if (!n) return "jsx-" + t;
                      var r = String(n),
                        i = t + r;
                      return (
                        e[i] || (e[i] = "jsx-" + (0, s.default)(t + "-" + r)),
                        e[i]
                      );
                    };
                  }
                },
                {
                  key: "createComputeSelector",
                  value: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : /__jsx-style-dynamic-selector/g,
                      t = {};
                    return function(n, r) {
                      this._isBrowser ||
                        (r = (function(e) {
                          return e.replace(/\/style/gi, "\\/style");
                        })(r));
                      var s = n + r;
                      return t[s] || (t[s] = r.replace(e, n)), t[s];
                    };
                  }
                },
                {
                  key: "getIdAndRules",
                  value: function(e) {
                    var t = this;
                    if (e.dynamic) {
                      var n = this.computeId(e.styleId, e.dynamic);
                      return {
                        styleId: n,
                        rules: Array.isArray(e.css)
                          ? e.css.map(function(e) {
                              return t.computeSelector(n, e);
                            })
                          : [this.computeSelector(n, e.css)]
                      };
                    }
                    return {
                      styleId: this.computeId(e.styleId),
                      rules: Array.isArray(e.css) ? e.css : [e.css]
                    };
                  }
                },
                {
                  key: "selectFromServer",
                  value: function() {
                    return Array.prototype.slice
                      .call(document.querySelectorAll('[id^="__jsx-"]'))
                      .reduce(function(e, t) {
                        return (e[t.id.slice(2)] = t), e;
                      }, {});
                  }
                }
              ]),
              e
            );
          })();
          t.default = u;
        },
        91: function(e, t, n) {
          "use strict";
          e.exports = function(e) {
            for (var t = 5381, n = e.length; n; )
              t = (33 * t) ^ e.charCodeAt(--n);
            return t >>> 0;
          };
        },
        92: function(e, t, n) {
          "use strict";
          (function(e) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
            var r = e.env && !0,
              s = function(e) {
                return "[object String]" === Object.prototype.toString.call(e);
              },
              i = (function() {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.name,
                    i = void 0 === n ? "stylesheet" : n,
                    u = t.optimizeForSpeed,
                    a = void 0 === u ? r : u,
                    c = t.isBrowser,
                    l = void 0 === c ? "undefined" != typeof window : c;
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    o(s(i), "`name` must be a string"),
                    (this._name = i),
                    (this._deletedRulePlaceholder =
                      "#" + i + "-deleted-rule____{}"),
                    o(
                      "boolean" == typeof a,
                      "`optimizeForSpeed` must be a boolean"
                    ),
                    (this._optimizeForSpeed = a),
                    (this._isBrowser = l),
                    (this._serverSheet = void 0),
                    (this._tags = []),
                    (this._injected = !1),
                    (this._rulesCount = 0);
                }
                return (
                  n(e, [
                    {
                      key: "setOptimizeForSpeed",
                      value: function(e) {
                        o(
                          "boolean" == typeof e,
                          "`setOptimizeForSpeed` accepts a boolean"
                        ),
                          o(
                            0 === this._rulesCount,
                            "optimizeForSpeed cannot be when rules have already been inserted"
                          ),
                          this.flush(),
                          (this._optimizeForSpeed = e),
                          this.inject();
                      }
                    },
                    {
                      key: "isOptimizeForSpeed",
                      value: function() {
                        return this._optimizeForSpeed;
                      }
                    },
                    {
                      key: "inject",
                      value: function() {
                        var e = this;
                        if (
                          (o(!this._injected, "sheet already injected"),
                          (this._injected = !0),
                          this._isBrowser && this._optimizeForSpeed)
                        )
                          return (
                            (this._tags[0] = this.makeStyleTag(this._name)),
                            (this._optimizeForSpeed =
                              "insertRule" in this.getSheet()),
                            void (
                              this._optimizeForSpeed ||
                              (r ||
                                console.warn(
                                  "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                                ),
                              this.flush(),
                              (this._injected = !0))
                            )
                          );
                        this._serverSheet = {
                          cssRules: [],
                          insertRule: function(t, n) {
                            return (
                              "number" == typeof n
                                ? (e._serverSheet.cssRules[n] = { cssText: t })
                                : e._serverSheet.cssRules.push({ cssText: t }),
                              n
                            );
                          },
                          deleteRule: function(t) {
                            e._serverSheet.cssRules[t] = null;
                          }
                        };
                      }
                    },
                    {
                      key: "getSheetForTag",
                      value: function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                          if (document.styleSheets[t].ownerNode === e)
                            return document.styleSheets[t];
                      }
                    },
                    {
                      key: "getSheet",
                      value: function() {
                        return this.getSheetForTag(
                          this._tags[this._tags.length - 1]
                        );
                      }
                    },
                    {
                      key: "insertRule",
                      value: function(e, t) {
                        if (
                          (o(s(e), "`insertRule` accepts only strings"),
                          !this._isBrowser)
                        )
                          return (
                            "number" != typeof t &&
                              (t = this._serverSheet.cssRules.length),
                            this._serverSheet.insertRule(e, t),
                            this._rulesCount++
                          );
                        if (this._optimizeForSpeed) {
                          var n = this.getSheet();
                          "number" != typeof t && (t = n.cssRules.length);
                          try {
                            n.insertRule(e, t);
                          } catch (t) {
                            return (
                              r ||
                                console.warn(
                                  "StyleSheet: illegal rule: \n\n" +
                                    e +
                                    "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                                ),
                              -1
                            );
                          }
                        } else {
                          var i = this._tags[t];
                          this._tags.push(this.makeStyleTag(this._name, e, i));
                        }
                        return this._rulesCount++;
                      }
                    },
                    {
                      key: "replaceRule",
                      value: function(e, t) {
                        if (this._optimizeForSpeed || !this._isBrowser) {
                          var n = this._isBrowser
                            ? this.getSheet()
                            : this._serverSheet;
                          if (
                            (t.trim() || (t = this._deletedRulePlaceholder),
                            !n.cssRules[e])
                          )
                            return e;
                          n.deleteRule(e);
                          try {
                            n.insertRule(t, e);
                          } catch (s) {
                            r ||
                              console.warn(
                                "StyleSheet: illegal rule: \n\n" +
                                  t +
                                  "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                              ),
                              n.insertRule(this._deletedRulePlaceholder, e);
                          }
                        } else {
                          var s = this._tags[e];
                          o(s, "old rule at index `" + e + "` not found"),
                            (s.textContent = t);
                        }
                        return e;
                      }
                    },
                    {
                      key: "deleteRule",
                      value: function(e) {
                        if (this._isBrowser)
                          if (this._optimizeForSpeed) this.replaceRule(e, "");
                          else {
                            var t = this._tags[e];
                            o(t, "rule at index `" + e + "` not found"),
                              t.parentNode.removeChild(t),
                              (this._tags[e] = null);
                          }
                        else this._serverSheet.deleteRule(e);
                      }
                    },
                    {
                      key: "flush",
                      value: function() {
                        (this._injected = !1),
                          (this._rulesCount = 0),
                          this._isBrowser
                            ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e);
                              }),
                              (this._tags = []))
                            : (this._serverSheet.cssRules = []);
                      }
                    },
                    {
                      key: "cssRules",
                      value: function() {
                        var e = this;
                        return this._isBrowser
                          ? this._tags.reduce(function(t, n) {
                              return (
                                n
                                  ? (t = t.concat(
                                      e
                                        .getSheetForTag(n)
                                        .cssRules.map(function(t) {
                                          return t.cssText ===
                                            e._deletedRulePlaceholder
                                            ? null
                                            : t;
                                        })
                                    ))
                                  : t.push(null),
                                t
                              );
                            }, [])
                          : this._serverSheet.cssRules;
                      }
                    },
                    {
                      key: "makeStyleTag",
                      value: function(e, t, n) {
                        t &&
                          o(
                            s(t),
                            "makeStyleTag acceps only strings as second parameter"
                          );
                        var r = document.createElement("style");
                        (r.type = "text/css"),
                          r.setAttribute("data-" + e, ""),
                          t && r.appendChild(document.createTextNode(t));
                        var i =
                          document.head ||
                          document.getElementsByTagName("head")[0];
                        return n ? i.insertBefore(r, n) : i.appendChild(r), r;
                      }
                    },
                    {
                      key: "length",
                      get: function() {
                        return this._rulesCount;
                      }
                    }
                  ]),
                  e
                );
              })();
            function o(e, t) {
              if (!e) throw new Error("StyleSheet: " + t + ".");
            }
            t.default = i;
          }.call(this, n(29)));
        }
      },
      [[87, 1, 0]]
    ]).default
  };
});
