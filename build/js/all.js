(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.offlineMin = mod.exports;
  }
})(undefined, function () {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  };

  /*! offline-js 0.7.13 */
  (function () {
    var a, b, c, d, e, f, g;d = function d(a, b) {
      var c, d, e, f;e = [];for (d in b.prototype) {
        try {
          f = b.prototype[d], null == a[d] && "function" != typeof f ? e.push(a[d] = f) : e.push(void 0);
        } catch (g) {
          c = g;
        }
      }return e;
    }, a = {}, null == a.options && (a.options = {}), c = { checks: { xhr: { url: function url() {
            return "/favicon.ico?_=" + Math.floor(1e9 * Math.random());
          }, timeout: 5e3 }, image: { url: function url() {
            return "/favicon.ico?_=" + Math.floor(1e9 * Math.random());
          } }, active: "xhr" }, checkOnLoad: !1, interceptRequests: !0, reconnect: !0 }, e = function e(a, b) {
      var c, d, e, f, g, h;for (c = a, h = b.split("."), d = e = 0, f = h.length; f > e && (g = h[d], c = c[g], "object" == (typeof c === "undefined" ? "undefined" : _typeof(c))); d = ++e) {}return d === h.length - 1 ? c : void 0;
    }, a.getOption = function (b) {
      var d, f;return f = null != (d = e(a.options, b)) ? d : e(c, b), "function" == typeof f ? f() : f;
    }, "function" == typeof window.addEventListener && window.addEventListener("online", function () {
      return setTimeout(a.confirmUp, 100);
    }, !1), "function" == typeof window.addEventListener && window.addEventListener("offline", function () {
      return a.confirmDown();
    }, !1), a.state = "up", a.markUp = function () {
      return a.trigger("confirmed-up"), "up" !== a.state ? (a.state = "up", a.trigger("up")) : void 0;
    }, a.markDown = function () {
      return a.trigger("confirmed-down"), "down" !== a.state ? (a.state = "down", a.trigger("down")) : void 0;
    }, f = {}, a.on = function (b, c, d) {
      var e, g, h, i, j;if (g = b.split(" "), g.length > 1) {
        for (j = [], h = 0, i = g.length; i > h; h++) {
          e = g[h], j.push(a.on(e, c, d));
        }return j;
      }return null == f[b] && (f[b] = []), f[b].push([d, c]);
    }, a.off = function (a, b) {
      var c, d, e, g, h;if (null != f[a]) {
        if (b) {
          for (e = 0, h = []; e < f[a].length;) {
            g = f[a][e], d = g[0], c = g[1], c === b ? h.push(f[a].splice(e, 1)) : h.push(e++);
          }return h;
        }return f[a] = [];
      }
    }, a.trigger = function (a) {
      var b, c, d, e, g, h, i;if (null != f[a]) {
        for (g = f[a], i = [], d = 0, e = g.length; e > d; d++) {
          h = g[d], b = h[0], c = h[1], i.push(c.call(b));
        }return i;
      }
    }, b = function b(a, _b, c) {
      var d, e, f, g, h;return h = function h() {
        return a.status && a.status < 12e3 ? _b() : c();
      }, null === a.onprogress ? (d = a.onerror, a.onerror = function () {
        return c(), "function" == typeof d ? d.apply(null, arguments) : void 0;
      }, g = a.ontimeout, a.ontimeout = function () {
        return c(), "function" == typeof g ? g.apply(null, arguments) : void 0;
      }, e = a.onload, a.onload = function () {
        return h(), "function" == typeof e ? e.apply(null, arguments) : void 0;
      }) : (f = a.onreadystatechange, a.onreadystatechange = function () {
        return 4 === a.readyState ? h() : 0 === a.readyState && c(), "function" == typeof f ? f.apply(null, arguments) : void 0;
      });
    }, a.checks = {}, a.checks.xhr = function () {
      var c, d;d = new XMLHttpRequest(), d.offline = !1, d.open("HEAD", a.getOption("checks.xhr.url"), !0), null != d.timeout && (d.timeout = a.getOption("checks.xhr.timeout")), b(d, a.markUp, a.markDown);try {
        d.send();
      } catch (e) {
        c = e, a.markDown();
      }return d;
    }, a.checks.image = function () {
      var b;return b = document.createElement("img"), b.onerror = a.markDown, b.onload = a.markUp, void (b.src = a.getOption("checks.image.url"));
    }, a.checks.down = a.markDown, a.checks.up = a.markUp, a.check = function () {
      return a.trigger("checking"), a.checks[a.getOption("checks.active")]();
    }, a.confirmUp = a.confirmDown = a.check, a.onXHR = function (a) {
      var b, c, e;return e = function e(b, c) {
        var d;return d = b.open, b.open = function (e, f, g, h, i) {
          return a({ type: e, url: f, async: g, flags: c, user: h, password: i, xhr: b }), d.apply(b, arguments);
        };
      }, c = window.XMLHttpRequest, window.XMLHttpRequest = function (a) {
        var b, d, f;return f = new c(a), e(f, a), d = f.setRequestHeader, f.headers = {}, f.setRequestHeader = function (a, b) {
          return f.headers[a] = b, d.call(f, a, b);
        }, b = f.overrideMimeType, f.overrideMimeType = function (a) {
          return f.mimeType = a, b.call(f, a);
        }, f;
      }, d(window.XMLHttpRequest, c), null != window.XDomainRequest ? (b = window.XDomainRequest, window.XDomainRequest = function () {
        var a;return a = new b(), e(a), a;
      }, d(window.XDomainRequest, b)) : void 0;
    }, g = function g() {
      return a.getOption("interceptRequests") && a.onXHR(function (c) {
        var d;return d = c.xhr, d.offline !== !1 ? b(d, a.markUp, a.confirmDown) : void 0;
      }), a.getOption("checkOnLoad") ? a.check() : void 0;
    }, setTimeout(g, 0), window.Offline = a;
  }).call(undefined), function () {
    var a, b, c, d, e, f, g, h, i;if (!window.Offline) throw new Error("Offline Reconnect brought in without offline.js");d = Offline.reconnect = {}, f = null, e = function e() {
      var a;return null != d.state && "inactive" !== d.state && Offline.trigger("reconnect:stopped"), d.state = "inactive", d.remaining = d.delay = null != (a = Offline.getOption("reconnect.initialDelay")) ? a : 3;
    }, b = function b() {
      var a, b;return a = null != (b = Offline.getOption("reconnect.delay")) ? b : Math.min(Math.ceil(1.5 * d.delay), 3600), d.remaining = d.delay = a;
    }, g = function g() {
      return "connecting" !== d.state ? (d.remaining -= 1, Offline.trigger("reconnect:tick"), 0 === d.remaining ? h() : void 0) : void 0;
    }, h = function h() {
      return "waiting" === d.state ? (Offline.trigger("reconnect:connecting"), d.state = "connecting", Offline.check()) : void 0;
    }, a = function a() {
      return Offline.getOption("reconnect") ? (e(), d.state = "waiting", Offline.trigger("reconnect:started"), f = setInterval(g, 1e3)) : void 0;
    }, i = function i() {
      return null != f && clearInterval(f), e();
    }, c = function c() {
      return Offline.getOption("reconnect") && "connecting" === d.state ? (Offline.trigger("reconnect:failure"), d.state = "waiting", b()) : void 0;
    }, d.tryNow = h, e(), Offline.on("down", a), Offline.on("confirmed-down", c), Offline.on("up", i);
  }.call(undefined), function () {
    var a, b, c, d, e, f;if (!window.Offline) throw new Error("Requests module brought in without offline.js");c = [], f = !1, d = function d(a) {
      return Offline.trigger("requests:capture"), "down" !== Offline.state && (f = !0), c.push(a);
    }, e = function e(a) {
      var b, c, d, e, f, g, h, i, j;j = a.xhr, g = a.url, f = a.type, h = a.user, d = a.password, b = a.body, j.abort(), j.open(f, g, !0, h, d), e = j.headers;for (c in e) {
        i = e[c], j.setRequestHeader(c, i);
      }return j.mimeType && j.overrideMimeType(j.mimeType), j.send(b);
    }, a = function a() {
      return c = [];
    }, b = function b() {
      var b, d, f, g, h, i;for (Offline.trigger("requests:flush"), h = {}, b = 0, f = c.length; f > b; b++) {
        g = c[b], i = g.url.replace(/(\?|&)_=[0-9]+/, function (a, b) {
          return "?" === b ? b : "";
        }), h[g.type.toUpperCase() + " - " + i] = g;
      }for (d in h) {
        g = h[d], e(g);
      }return a();
    }, setTimeout(function () {
      return Offline.getOption("requests") !== !1 ? (Offline.on("confirmed-up", function () {
        return f ? (f = !1, a()) : void 0;
      }), Offline.on("up", b), Offline.on("down", function () {
        return f = !1;
      }), Offline.onXHR(function (a) {
        var b, c, e, f, g;return g = a.xhr, e = a.async, g.offline !== !1 && (f = function f() {
          return d(a);
        }, c = g.send, g.send = function (b) {
          return a.body = b, c.apply(g, arguments);
        }, e) ? null === g.onprogress ? (g.addEventListener("error", f, !1), g.addEventListener("timeout", f, !1)) : (b = g.onreadystatechange, g.onreadystatechange = function () {
          return 0 === g.readyState ? f() : 4 === g.readyState && (0 === g.status || g.status >= 12e3) && f(), "function" == typeof b ? b.apply(null, arguments) : void 0;
        }) : void 0;
      }), Offline.requests = { flush: b, clear: a }) : void 0;
    }, 0);
  }.call(undefined), function () {
    var a, b, c, d, e;if (!Offline) throw new Error("Offline simulate brought in without offline.js");for (d = ["up", "down"], b = 0, c = d.length; c > b; b++) {
      e = d[b], (document.querySelector("script[data-simulate='" + e + "']") || localStorage.OFFLINE_SIMULATE === e) && (null == Offline.options && (Offline.options = {}), null == (a = Offline.options).checks && (a.checks = {}), Offline.options.checks.active = e);
    }
  }.call(undefined), function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m;if (!window.Offline) throw new Error("Offline UI brought in without offline.js");b = '<div class="offline-ui"><div class="offline-ui-content"></div></div>', a = '<a href class="offline-ui-retry"></a>', f = function f(a) {
      var b;return b = document.createElement("div"), b.innerHTML = a, b.children[0];
    }, g = e = null, d = function d(a) {
      return k(a), g.className += " " + a;
    }, k = function k(a) {
      return g.className = g.className.replace(new RegExp("(^| )" + a.split(" ").join("|") + "( |$)", "gi"), " ");
    }, i = {}, h = function h(a, b) {
      return d(a), null != i[a] && clearTimeout(i[a]), i[a] = setTimeout(function () {
        return k(a), delete i[a];
      }, 1e3 * b);
    }, m = function m(a) {
      var b, c, d, e;d = { day: 86400, hour: 3600, minute: 60, second: 1 };for (c in d) {
        if (b = d[c], a >= b) return e = Math.floor(a / b), [e, c];
      }return ["now", ""];
    }, l = function l() {
      var c, h;return g = f(b), document.body.appendChild(g), null != Offline.reconnect && Offline.getOption("reconnect") && (g.appendChild(f(a)), c = g.querySelector(".offline-ui-retry"), h = function h(a) {
        return a.preventDefault(), Offline.reconnect.tryNow();
      }, null != c.addEventListener ? c.addEventListener("click", h, !1) : c.attachEvent("click", h)), d("offline-ui-" + Offline.state), e = g.querySelector(".offline-ui-content");
    }, j = function j() {
      return l(), Offline.on("up", function () {
        return k("offline-ui-down"), d("offline-ui-up"), h("offline-ui-up-2s", 2), h("offline-ui-up-5s", 5);
      }), Offline.on("down", function () {
        return k("offline-ui-up"), d("offline-ui-down"), h("offline-ui-down-2s", 2), h("offline-ui-down-5s", 5);
      }), Offline.on("reconnect:connecting", function () {
        return d("offline-ui-connecting"), k("offline-ui-waiting");
      }), Offline.on("reconnect:tick", function () {
        var a, b, c;return d("offline-ui-waiting"), k("offline-ui-connecting"), a = m(Offline.reconnect.remaining), b = a[0], c = a[1], e.setAttribute("data-retry-in-value", b), e.setAttribute("data-retry-in-unit", c);
      }), Offline.on("reconnect:stopped", function () {
        return k("offline-ui-connecting offline-ui-waiting"), e.setAttribute("data-retry-in-value", null), e.setAttribute("data-retry-in-unit", null);
      }), Offline.on("reconnect:failure", function () {
        return h("offline-ui-reconnect-failed-2s", 2), h("offline-ui-reconnect-failed-5s", 5);
      }), Offline.on("reconnect:success", function () {
        return h("offline-ui-reconnect-succeeded-2s", 2), h("offline-ui-reconnect-succeeded-5s", 5);
      });
    }, "complete" === document.readyState ? j() : null != document.addEventListener ? document.addEventListener("DOMContentLoaded", j, !1) : (c = document.onreadystatechange, document.onreadystatechange = function () {
      return "complete" === document.readyState && j(), "function" == typeof c ? c.apply(null, arguments) : void 0;
    });
  }.call(undefined);
});

},{}],2:[function(require,module,exports){
"use strict";

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else if (typeof exports !== "undefined") {
		factory();
	} else {
		var mod = {
			exports: {}
		};
		factory();
		global.GetPruductFromUrl = mod.exports;
	}
})(undefined, function () {
	'use strict';

	(function () {
		var searchParams = new URLSearchParams(window.location.search);
		if (searchParams.get('link')) {
			$('#Orders_link').val(searchParams.get('link'));
			$('#Orders_count').val(searchParams.get('count'));
			$('#Orders_price').val(searchParams.get('price'));
			$('#Orders_size_str').val(searchParams.get('size'));
			$('#Orders_color').val(searchParams.get('color'));

			$(window).bind("load", function () {
				searchParams.get('price') && $('#procedure-form #Orders_link').trigger('blur');
				history.replaceState({ page: 1 }, "title 1", "");
			});
		}
	})();
});

},{}],3:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.LayeredSlider = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var LayeredSlider = function LayeredSlider() {

		var layeredSlider = $('.layered-slider');
		var dotClone = $('.layered-slider__dot').clone().removeClass('layered-slider__dot--active');
		var indicators = $('.layered-slider__indicators');
		var item = $('.layered-slider__item');
		var arrow = $('.layered-slider__arrow');
		var nextArrow = $('.layered-slider__arrow--next');
		var prevArrow = $('.layered-slider__arrow--prev');
		var count = item.length;
		var i = 1;
		while (i < count) {
			indicators.append(dotClone.clone());
			i++;
		}

		var dot = $('.layered-slider__dot');
		dot.click(function () {
			var index = $(this).index();

			item.removeClass('layered-slider__item--active');
			item.eq(index).addClass('layered-slider__item--active');

			dot.removeClass('layered-slider__dot--active');
			dot.eq(index).addClass('layered-slider__dot--active');

			sliderChanged(index);
		});

		var nextArrowClicked = function nextArrowClicked() {
			var index = $('.layered-slider__dot--active').index();
			var nextIndex = index < count - 1 ? index + 1 : 0;

			item.removeClass('layered-slider__item--active');
			item.eq(nextIndex).addClass('layered-slider__item--active');

			dot.removeClass('layered-slider__dot--active');
			dot.eq(nextIndex).addClass('layered-slider__dot--active');
			sliderChanged(nextIndex);
		};
		var prevArrowClicked = function prevArrowClicked() {
			clearInterval(interval);
			var index = $('.layered-slider__dot--active').index();
			var prevIndex = index - 1;

			item.removeClass('layered-slider__item--active');
			item.eq(prevIndex).addClass('layered-slider__item--active');

			dot.removeClass('layered-slider__dot--active');
			dot.eq(prevIndex).addClass('layered-slider__dot--active');
			sliderChanged(prevIndex);
		};
		nextArrow.click(function () {
			clearInterval(interval);
			nextArrowClicked();
		});

		prevArrow.click(function () {
			prevArrowClicked();
		});

		var sliderChanged = function sliderChanged(newIndex) {
			arrow.removeClass('layered-slider__arrow--hidden');
			if (newIndex + 1 == count) {// last
				// nextArrow.addClass('layered-slider__arrow--hidden')
			} else if (newIndex == 0) {
				// prevArrow.addClass('layered-slider__arrow--hidden')
			}
		};

		// interval


		var interval = null;

		var startInterval = function startInterval() {
			interval = setInterval(nextArrowClicked, 5000);
		};
		startInterval();

		layeredSlider.hover(function () {
			clearInterval(interval);
		}, function () {
			return startInterval();
		});

		// layeredSlider.on("touchstart", startTouch);
		// layeredSlider.on("touchmove", moveTouch);

		// // Swipe Up / Down / Left / Right
		// let initialX = null;
		// let initialY = null;

		// function startTouch(e) {
		// initialX = e.touches[0].clientX;
		// initialY = e.touches[0].clientY;
		// };

		// function moveTouch(e) {
		// if (initialX === null) {
		//   return;
		// }

		// if (initialY === null) {
		//   return;
		// }

		// let currentX = e.touches[0].clientX;
		// let currentY = e.touches[0].clientY;

		// let diffX = initialX - currentX;
		// let diffY = initialY - currentY;

		// if (Math.abs(diffX) > Math.abs(diffY)) {
		//   // sliding horizontally
		//   if (diffX > 10) {
		//     // swiped left
		//     prevArrowClicked()
		//   } else {
		//     // swiped right
		//     nextArrowClicked()
		//   }  
		// } else {
		//   // sliding vertically
		//   if (diffY > 0) {
		//     // swiped up
		//     // nextArrowClicked()
		//   } else {
		//     // swiped down
		//     // prevArrowClicked()
		//   }  
		// }

		// initialX = null;
		// initialY = null;

		// e.preventDefault();
		// };
	};

	exports.default = LayeredSlider;
	module.exports = exports['default'];
});

},{}],4:[function(require,module,exports){
"use strict";

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./cookies'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('./cookies'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.cookies);
        global.PWA = mod.exports;
    }
})(undefined, function (_cookies) {
    'use strict';

    var deferredPrompt = void 0;

    window.addEventListener('beforeinstallprompt', function (e) {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        var btnAdd = document.getElementById('save-as-app');
        btnAdd.style.display = 'block';

        if (!(0, _cookies.getCookie)('save-as-app')) {
            $('#save-as-app').tooltip('show');
            setTimeout(function () {
                $('#save-as-app').tooltip('hide');
            }, 10000);
            (0, _cookies.setCookie)('save-as-app', 1);
        }

        if (btnAdd) {
            btnAdd.addEventListener('click', function (e) {
                // e.preventDefault()
                // hide our user interface that shows our A2HS button
                btnAdd.style.display = 'none';
                console.log('before prompt');
                // Show the prompt
                deferredPrompt.prompt().then(function (res) {
                    return console.log(res);
                }).catch(function (error) {
                    console.log('----> ' + error);
                });

                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then(function (choiceResult) {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
            });
        }
    });
});

},{"./cookies":7}],5:[function(require,module,exports){
"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.a = mod.exports;
  }
})(undefined, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var a = function a() {};

  exports.default = a;
  module.exports = exports["default"];
});

},{}],6:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.closeNav = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var closeNav = function closeNav() {

		var nav = $('.b-nav');
		nav.removeClass('b-nav--active');
	};

	exports.default = closeNav;
	module.exports = exports['default'];
});

},{}],7:[function(require,module,exports){
"use strict";

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.cookies = mod.exports;
    }
})(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var setCookie = exports.setCookie = function setCookie(name, value) {
        var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        var expires = "";

        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();

        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };
    var getCookie = exports.getCookie = function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    var removeCookie = exports.removeCookie = function removeCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    };

    // setCookie('ppkcookie','testcookie',7);

    // var x = getCookie('ppkcookie');
});

},{}],8:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports', './closeNav'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports, require('./closeNav'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports, global.closeNav);
		global.documentListener = mod.exports;
	}
})(undefined, function (module, exports, _closeNav) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _closeNav2 = _interopRequireDefault(_closeNav);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var documentListener = function documentListener() {
		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		$(document).on('click touchstart', function (e) {
			var _this = $(e.target);

			// if not self clicked
			if (!_this.closest('.hamburger').length && !_this.closest('.b-nav').length) {
				(0, _closeNav2.default)();
			}
			if (!_this.closest('.shopping-card').length && !_this.closest('.inputs-wrapper--shopping').length) {
				$('.shopping-card').removeClass('shopping-card--active');
				$('.inputs-wrapper--shopping').hide();
			}
		});
	};

	exports.default = documentListener;
	module.exports = exports['default'];
});

},{"./closeNav":6}],9:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.lazyload = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var lazyload = function lazyload() {
		try {
			$('[b-lazyload]').each(function (e) {
				var _this = $(this);
				var newSrc = _this.data('src');
				_this.prop('src', newSrc);
			});
		} catch (e) {
			console.error('b-debug', e);
		}
	};

	exports.default = lazyload;
	module.exports = exports['default'];
});

},{}],10:[function(require,module,exports){
"use strict";

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.loadDOM = mod.exports;
    }
})(undefined, function () {
    'use strict';

    fetch('https://fizza.az/site/logInfo').then(function (response) {
        return response.text();
    }).then(function (t) {
        $('#log-info').html(t);
    });
});

},{}],11:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['./a', './nav', './windowScrollListener', './documentListener', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './smsVerification', './LayeredSlider', './PWA', './GetPruductFromUrl', './loadDOM', './cookies', '../compiled_js/offline.min'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./smsVerification'), require('./LayeredSlider'), require('./PWA'), require('./GetPruductFromUrl'), require('./loadDOM'), require('./cookies'), require('../compiled_js/offline.min'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.smsVerification, global.LayeredSlider, global.PWA, global.GetPruductFromUrl, global.loadDOM, global.cookies, global.offline);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _shoppingCard, _openPopup, _repeatItem, _closeNav, _lazyload, _smsVerification, _LayeredSlider, _PWA, _GetPruductFromUrl, _loadDOM, _cookies) {
	'use strict';
	////// POPUP
	// import $ from 'jquery'
	// import mask from 'jquery-mask-plugin'
	// import Clipboard from 'clipboard'

	// import $ from '../compiled_js/jquery-3.3.1.min'
	// import '../compiled_js/jquery.mask'
	// import '../compiled_js/popper.min'
	// import '../compiled_js/datepicker.min'
	// import '../compiled_js/swiper.min'
	// import '../compiled_js/bootstrap.bundle.min'
	// import '../compiled_js/bootstrap-select.min'
	// import '../compiled_js/sweetalert.min'
	// import '../compiled_js/jquery.form.min'
	// import '../compiled_js/form.variables'

	var _a2 = _interopRequireDefault(_a);

	var _nav2 = _interopRequireDefault(_nav);

	var _windowScrollListener2 = _interopRequireDefault(_windowScrollListener);

	var _documentListener2 = _interopRequireDefault(_documentListener);

	var _shoppingCard2 = _interopRequireDefault(_shoppingCard);

	var _openPopup2 = _interopRequireDefault(_openPopup);

	var _repeatItem2 = _interopRequireDefault(_repeatItem);

	var _closeNav2 = _interopRequireDefault(_closeNav);

	var _lazyload2 = _interopRequireDefault(_lazyload);

	var _smsVerification2 = _interopRequireDefault(_smsVerification);

	var _LayeredSlider2 = _interopRequireDefault(_LayeredSlider);

	var _PWA2 = _interopRequireDefault(_PWA);

	var _GetPruductFromUrl2 = _interopRequireDefault(_GetPruductFromUrl);

	var _loadDOM2 = _interopRequireDefault(_loadDOM);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	// import 'bootstrap'
	// import 'bootstrap/js/dist/collapse'
	// require("@chenfengyuan/datepicker")


	// import RandomDeer from './RandomDeer'
	function ready(fn) {
		if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}
	// import slider from './slider'


	// import Tooltip from 'tooltip'


	ready(function () {
		// document.querySelector('.not-visible-first').style.visibility='visible'
		(0, _nav2.default)();
		(0, _windowScrollListener2.default)();
		(0, _documentListener2.default)();
		// slider(Swiper)
		(0, _shoppingCard2.default)();
		(0, _openPopup2.default)();
		(0, _repeatItem2.default)();
		(0, _smsVerification2.default)();
		(0, _LayeredSlider2.default)();

		// solve hash bug in chrome
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		if (window.location.hash && isChrome) {
			setTimeout(function () {
				var hash = window.location.hash;
				window.location.hash = "";
				window.location.hash = hash;
			}, 300);
		}

		$('.pressClose').on('click touchstart', function (e) {
			var html = $('html');
			var pressClose = $('.pressClose');
			pressClose.removeClass('pressClose--active');
			setTimeout(function () {
				html.removeClass('y-hidden');
			}, 500);

			(0, _closeNav2.default)();
		});

		$('[data-toggle="datepicker"]').datepicker({ format: "dd/mm/yyyy" });

		$('.jqueryMask').each(function () {
			var t = $(this);
			t.mask(t.attr('data-mask'), {
				translation: { A: { pattern: /A/, optional: false }, Z: { pattern: /[AZ]/, optional: false }, E: { pattern: /E/, optional: true } }
			});
		});

		$('#Declarations_link_id').change(function () {
			$('#Declarations_name').trigger('focus');
		});

		// $.mask.definitions['9'] = '';
		// $.mask.definitions['d'] = '[0-9]';
		// $('.jqueryMask').mask('2231');


		// Clipboard
		// new Clipboard('.btn-clipboard');
		var timeout;
		// const timeout
		var copyToClipboard = function copyToClipboard(text) {
			var aux = document.createElement("input");
			aux.setAttribute("value", text);
			document.body.appendChild(aux);
			aux.select();
			document.execCommand("copy");
			document.body.removeChild(aux);
		};

		var tooltip = $('.tooltiptext');
		tooltip.text(tooltip.data('copy'));

		$('.btn-clipboard').bind('click touchstart', function (e) {
			var target = $(e.target).parent('button');
			var tooltip = target.find('.tooltiptext');
			// const copyText = $( target.data('clipboard-target') )
			// COPY
			// const copyText = target.closest('.copy').find('.copy__value').text().trim()
			var copyNode = $(target.data('clipboard-target'));
			copyNode.addClass('animated heartBeat');
			var copyText = copyNode.text().trim();
			console.log(copyText);
			copyToClipboard(copyText);
			// $(target.data('clipboard-target')).text()

			tooltip.text(tooltip.data('copied'));
			clearTimeout(timeout);
			setTimeout(function () {
				copyNode.removeClass('animated heartBeat');
			}, 1000);

			// copyToClipboard(copyText)
		});
		$('.btn-clipboard').mouseout(function (e) {
			var target = $(e.target);
			var tooltip = target.find('.tooltiptext');
			// const copyNode = $(target.data('clipboard-target'))
			// const copyText = $( target.data('clipboard-target') )

			timeout = setTimeout(function () {
				tooltip.text(tooltip.data('copy'));
			}, 200);
		});
		$('.selectpicker').selectpicker();

		// we add the modal to the end of body 
		var modal = $('.add-to-the-end-of-body');
		$('body').append(modal.clone());
		modal.remove();

		// scroll to order
		$(document).on("click", ".scroll-to-order", function (e) {
			e.preventDefault();
			console.log(window.location);
			if (window.location.pathname.split('/').length > 2) {
				window.location = '/#orders-holder';
			} else {

				$('html, body').animate({
					scrollTop: $("#orders-holder").offset().top - 10
				}, 1000);
			}
		});

		//scroll to top
		//   $(".scroll-to-top").click(function (e){
		// e.preventDefault()
		//       $('html, body').animate({
		//           scrollTop: 0
		//       }, 1000);
		//   });


		//   	$('.b-invoice__input').change(function(){
		// 	const files = $('.b-invoice__input')[0].files
		// 	const fileInfo = $('.b-invoice__fileinfo')
		// 	fileInfo.text('') 

		// 	for (var i = 0; i < files.length; i++){
		// 		const name = files[i].name
		// 		const size = files[i].size/1024/1024
		// 		fileInfo.append($(`<a class="b-invoice__filename p-1 mr-1">${name}<span class="ml-2" href="">&times;</span></a>`))
		// 	}

		// })
	}); // ready


	$('[data-toggle="tooltip"]').tooltip();

	// window loaded
	window.addEventListener('load', function () {

		(0, _lazyload2.default)();
	});
});

},{"../compiled_js/offline.min":1,"./GetPruductFromUrl":2,"./LayeredSlider":3,"./PWA":4,"./a":5,"./closeNav":6,"./cookies":7,"./documentListener":8,"./lazyload":9,"./loadDOM":10,"./nav":12,"./openPopup":13,"./repeatItem":14,"./shoppingCard":15,"./smsVerification":16,"./windowScrollListener":17}],12:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.nav = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var nav = function nav() {
		$(document).on('click', '.hamburger', function () {
			var nav = $('.b-nav');
			var pressClose = $('.pressClose');
			var html = $('html');
			html.addClass('y-hidden');
			setTimeout(function () {
				return nav.addClass('b-nav--active');
			}, 100);
			pressClose.addClass('pressClose--active');
		});

		$('.nav-tab-button').click(function (e) {
			e.preventDefault();
			var target = $(e.target);
			var href = target.attr('href');
			$('.b-nav__tab').removeClass('b-nav__tab--active');
			target.parent('.b-nav__tab').addClass('b-nav__tab--active');
			$('.b-nav__tab-content').removeClass('b-nav__tab-content--active');
			$('.b-nav__tab-content' + href).addClass('b-nav__tab-content--active');
		});
	};

	exports.default = nav;
	module.exports = exports['default'];
});

},{}],13:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.openPopup = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var openPopup = function openPopup() {
		// const blurryBg = $('.blurry-background')
		var popup = $('.b-popup');
		var bNav = $('.b-nav'); // responsive issues
		var html = $('html');

		$('.openPopup').click(function (e) {
			e.preventDefault();
			var target = $(e.target).closest('a');
			var href = target.attr('href');
			// const offset = $(e.target).offset()
			// const top = offset.top
			// const left = offset.left
			bNav.css('display', 'none');
			// blurryBg.addClass('blurry-background--active')
			$('.pressClose').addClass('pressClose--active');
			html.addClass('y-hidden');

			// $('body').css('background-color', 'rgba(0, 0, 0, .2)')
			if ($(href).length > 0) {
				$(href).addClass('b-popup--active');
			} else {
				popup.addClass('b-popup--active');
			}

			// popup.css('display', 'flex')
		});
		$(document).on('click touchstart', '.b-popup, .close-b-popup', function (e) {
			$('.shopping-card').removeClass('shopping-card--active');
			$('.inputs-wrapper--shopping').hide();
			var target = $(e.target);
			if (target.closest('.b-popup__inner').length <= 0 || target.closest('.close-b-popup').length > 0) {
				e.preventDefault();
				// blurryBg.removeClass('blurry-background--active')
				$('.b-popup--active').removeClass('b-popup--active');
				setTimeout(function () {
					bNav.css('display', 'flex');
				}, 300);
				$('html, body').removeClass('y-hidden');
				$('.pressClose--active').removeClass('pressClose--active');

				// $('body').css('background-color', 'white')
			}
		});
	};

	exports.default = openPopup;
	module.exports = exports['default'];
});

},{}],14:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.repeatItem = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var repeatItem = function repeatItem() {
		var repeatItem = $('[data-repeat-id="item"]').eq(0);
		var repeatItemParent = $('[data-repeat-id="item"]').eq(0).parent();
		var repeatItemClone = repeatItem.clone();
		var repeatItemButton = $('[data-repeat-target="item"]').eq(0);
		if (repeatItem && repeatItemButton) {
			// const closeItemButton = $('.close-additional-item')
			repeatItemButton.click(function (e) {
				e.preventDefault();
				repeatItemParent.append(repeatItemClone.clone());
			});

			$(document).on('click', '.close-additional-item', function (e) {
				e.preventDefault();
				if ($('[data-repeat-id="item"]').length > 1) {
					var target = $(e.target);
					target.closest('[data-repeat-id="item"]').remove();
				}
			});
		}
	};

	// export default repeatItem


	var repeatNewItem = function repeatNewItem() {
		var repeatItem = $('[data-repeat-id="item"]').eq(0);
		var repeatItemParent = $('[data-repeat-id="item"]').eq(0).parent();
		var repeatItemClone = repeatItem.clone();
		var repeatItemButton = '[data-repeat-target="item"]';
		if (repeatItem && repeatItemButton) {
			// const closeItemButton = $('.close-additional-item')
			$(document).on('click', repeatItemButton, function (e) {
				e.preventDefault();
				repeatItemParent.append(repeatItemClone.clone());
			});

			$(document).on('click', '.close-additional-item', function (e) {
				e.preventDefault();
				if ($('[data-repeat-id="item"]').length > 1) {
					var target = $(e.target);
					var parentItem = target.closest('[data-repeat-id="item"]');
					parentItem.animate({
						height: '0'
					}, 'fast', 'swing', function () {
						return parentItem.remove();
					});
				}
			});
		}
	};

	exports.default = repeatNewItem;
	module.exports = exports['default'];
});

},{}],15:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.shoppingCard = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _this2 = undefined;

	var shoppingCard = function shoppingCard() {
		$(document).on('click', '.shopping-card', function (e) {
			e.preventDefault();
			var _this = $(_this2);
			var pressClose = $('.pressClose');
			var html = $('html');

			$('.shopping-card').toggleClass('shopping-card--active');
			$('.inputs-wrapper--shopping').toggle();

			$('.b-nav__wrapper').addClass('b-nav__wrapper--active');
			html.addClass('y-hidden');
			$('html, body').animate({
				scrollTop: 0
			}, 1000);

			pressClose.addClass('pressClose--active');
			// console.log($(this))
		});
	};

	exports.default = shoppingCard;
	module.exports = exports['default'];
});

},{}],16:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.smsVerification = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var smsVerification = function smsVerification() {
		var input = $('.b-verification__input').eq(0);
		var maxLength = parseInt(input.attr('maxlength'));
		var fontSize = parseInt(input.css('fontSize'));
		var dashes = $('.b-verification__dashes');
		var underlineWidth = 30;
		var underlineMarginRight = 22;
		var horizontalPadding = 3;

		// console.log( maxLength, fontSize)

		dashes.append('<span></span>'.repeat(maxLength)).ready(function () {
			$('.b-verification__input').css({
				width: underlineWidth * (maxLength + 1) + underlineMarginRight * (maxLength - 1) + horizontalPadding * 2

			});
			$('.b-verification').css({
				visibility: 'visible'
			});
			input.focus();
		});

		input.keyup(function () {
			if (input.val().length >= maxLength) {
				$('.verificationButton').trigger('click');
			}
		});
	};

	exports.default = smsVerification;
	module.exports = exports['default'];
});

},{}],17:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.windowScrollListener = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var windowScrollListener = function windowScrollListener() {
		// scroll listener
		var lastScrollTop = 0;
		$(window).scroll(function () {

			var scrollTop = $(window).scrollTop();
			var navWrapper = $('.b-nav__wrapper');
			var navMain = $('.b-nav__main');
			var topNav = $('.b-nav__top');
			var scrollToTopButton = $('.scroll-to-top');

			// if(scrollTop>70) {
			// 	topNav.addClass('b-nav__top--hidden')
			// 	navMain.removeClass('py-3')
			// 	if(scrollTop>lastScrollTop){
			// 		navWrapper.removeClass('b-nav__wrapper--active')


			// 	} else {
			// 		navWrapper.addClass('b-nav__wrapper--active')
			// 	}
			// } else {
			// 	topNav.removeClass('b-nav__top--hidden')
			// 	navMain.addClass('py-3')

			// }

			if (scrollTop > 100) {
				scrollToTopButton.addClass('scroll-to-top--active');
			} else {
				scrollToTopButton.removeClass('scroll-to-top--active');
			}

			lastScrollTop = scrollTop;
		});
	};

	exports.default = windowScrollListener;
	module.exports = exports['default'];
});

},{}]},{},[11])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcGlsZWRfanMvb2ZmbGluZS5taW4uanMiLCJzcmMvanMvbWFpbi9HZXRQcnVkdWN0RnJvbVVybC5qcyIsInNyYy9qcy9tYWluL0xheWVyZWRTbGlkZXIuanMiLCJzcmMvanMvbWFpbi9QV0EuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9jb29raWVzLmpzIiwic3JjL2pzL21haW4vZG9jdW1lbnRMaXN0ZW5lci5qcyIsInNyYy9qcy9tYWluL2xhenlsb2FkLmpzIiwic3JjL2pzL21haW4vbG9hZERPTS5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBLEdBQUMsWUFBVTtBQUFDLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFrQixJQUFFLFNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQWE7QUFBQyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBWSxJQUFBLEVBQUEsQ0FBSyxLQUFBLENBQUEsSUFBUyxFQUFULFNBQUEsRUFBQTtBQUFxQixZQUFHO0FBQUMsY0FBRSxFQUFBLFNBQUEsQ0FBRixDQUFFLENBQUYsRUFBaUIsUUFBTSxFQUFOLENBQU0sQ0FBTixJ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b3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiEgb2ZmbGluZS1qcyAwLjcuMTMgKi9cbihmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnO2Q9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZjtlPVtdO2ZvcihkIGluIGIucHJvdG90eXBlKXRyeXtmPWIucHJvdG90eXBlW2RdLG51bGw9PWFbZF0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGY/ZS5wdXNoKGFbZF09Zik6ZS5wdXNoKHZvaWQgMCl9Y2F0Y2goZyl7Yz1nfXJldHVybiBlfSxhPXt9LG51bGw9PWEub3B0aW9ucyYmKGEub3B0aW9ucz17fSksYz17Y2hlY2tzOnt4aHI6e3VybDpmdW5jdGlvbigpe3JldHVyblwiL2Zhdmljb24uaWNvP189XCIrTWF0aC5mbG9vcigxZTkqTWF0aC5yYW5kb20oKSl9LHRpbWVvdXQ6NWUzfSxpbWFnZTp7dXJsOmZ1bmN0aW9uKCl7cmV0dXJuXCIvZmF2aWNvbi5pY28/Xz1cIitNYXRoLmZsb29yKDFlOSpNYXRoLnJhbmRvbSgpKX19LGFjdGl2ZTpcInhoclwifSxjaGVja09uTG9hZDohMSxpbnRlcmNlcHRSZXF1ZXN0czohMCxyZWNvbm5lY3Q6ITB9LGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnLGg7Zm9yKGM9YSxoPWIuc3BsaXQoXCIuXCIpLGQ9ZT0wLGY9aC5sZW5ndGg7Zj5lJiYoZz1oW2RdLGM9Y1tnXSxcIm9iamVjdFwiPT10eXBlb2YgYyk7ZD0rK2UpO3JldHVybiBkPT09aC5sZW5ndGgtMT9jOnZvaWQgMH0sYS5nZXRPcHRpb249ZnVuY3Rpb24oYil7dmFyIGQsZjtyZXR1cm4gZj1udWxsIT0oZD1lKGEub3B0aW9ucyxiKSk/ZDplKGMsYiksXCJmdW5jdGlvblwiPT10eXBlb2YgZj9mKCk6Zn0sXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsZnVuY3Rpb24oKXtyZXR1cm4gc2V0VGltZW91dChhLmNvbmZpcm1VcCwxMDApfSwhMSksXCJmdW5jdGlvblwiPT10eXBlb2Ygd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGEuY29uZmlybURvd24oKX0sITEpLGEuc3RhdGU9XCJ1cFwiLGEubWFya1VwPWZ1bmN0aW9uKCl7cmV0dXJuIGEudHJpZ2dlcihcImNvbmZpcm1lZC11cFwiKSxcInVwXCIhPT1hLnN0YXRlPyhhLnN0YXRlPVwidXBcIixhLnRyaWdnZXIoXCJ1cFwiKSk6dm9pZCAwfSxhLm1hcmtEb3duPWZ1bmN0aW9uKCl7cmV0dXJuIGEudHJpZ2dlcihcImNvbmZpcm1lZC1kb3duXCIpLFwiZG93blwiIT09YS5zdGF0ZT8oYS5zdGF0ZT1cImRvd25cIixhLnRyaWdnZXIoXCJkb3duXCIpKTp2b2lkIDB9LGY9e30sYS5vbj1mdW5jdGlvbihiLGMsZCl7dmFyIGUsZyxoLGksajtpZihnPWIuc3BsaXQoXCIgXCIpLGcubGVuZ3RoPjEpe2ZvcihqPVtdLGg9MCxpPWcubGVuZ3RoO2k+aDtoKyspZT1nW2hdLGoucHVzaChhLm9uKGUsYyxkKSk7cmV0dXJuIGp9cmV0dXJuIG51bGw9PWZbYl0mJihmW2JdPVtdKSxmW2JdLnB1c2goW2QsY10pfSxhLm9mZj1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxnLGg7aWYobnVsbCE9ZlthXSl7aWYoYil7Zm9yKGU9MCxoPVtdO2U8ZlthXS5sZW5ndGg7KWc9ZlthXVtlXSxkPWdbMF0sYz1nWzFdLGM9PT1iP2gucHVzaChmW2FdLnNwbGljZShlLDEpKTpoLnB1c2goZSsrKTtyZXR1cm4gaH1yZXR1cm4gZlthXT1bXX19LGEudHJpZ2dlcj1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxnLGgsaTtpZihudWxsIT1mW2FdKXtmb3IoZz1mW2FdLGk9W10sZD0wLGU9Zy5sZW5ndGg7ZT5kO2QrKyloPWdbZF0sYj1oWzBdLGM9aFsxXSxpLnB1c2goYy5jYWxsKGIpKTtyZXR1cm4gaX19LGI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg7cmV0dXJuIGg9ZnVuY3Rpb24oKXtyZXR1cm4gYS5zdGF0dXMmJmEuc3RhdHVzPDEyZTM/YigpOmMoKX0sbnVsbD09PWEub25wcm9ncmVzcz8oZD1hLm9uZXJyb3IsYS5vbmVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIGMoKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2QuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH0sZz1hLm9udGltZW91dCxhLm9udGltZW91dD1mdW5jdGlvbigpe3JldHVybiBjKCksXCJmdW5jdGlvblwiPT10eXBlb2YgZz9nLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9LGU9YS5vbmxvYWQsYS5vbmxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gaCgpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfSk6KGY9YS5vbnJlYWR5c3RhdGVjaGFuZ2UsYS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gND09PWEucmVhZHlTdGF0ZT9oKCk6MD09PWEucmVhZHlTdGF0ZSYmYygpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGY/Zi5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfSl9LGEuY2hlY2tzPXt9LGEuY2hlY2tzLnhocj1mdW5jdGlvbigpe3ZhciBjLGQ7ZD1uZXcgWE1MSHR0cFJlcXVlc3QsZC5vZmZsaW5lPSExLGQub3BlbihcIkhFQURcIixhLmdldE9wdGlvbihcImNoZWNrcy54aHIudXJsXCIpLCEwKSxudWxsIT1kLnRpbWVvdXQmJihkLnRpbWVvdXQ9YS5nZXRPcHRpb24oXCJjaGVja3MueGhyLnRpbWVvdXRcIikpLGIoZCxhLm1hcmtVcCxhLm1hcmtEb3duKTt0cnl7ZC5zZW5kKCl9Y2F0Y2goZSl7Yz1lLGEubWFya0Rvd24oKX1yZXR1cm4gZH0sYS5jaGVja3MuaW1hZ2U9ZnVuY3Rpb24oKXt2YXIgYjtyZXR1cm4gYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLGIub25lcnJvcj1hLm1hcmtEb3duLGIub25sb2FkPWEubWFya1VwLHZvaWQoYi5zcmM9YS5nZXRPcHRpb24oXCJjaGVja3MuaW1hZ2UudXJsXCIpKX0sYS5jaGVja3MuZG93bj1hLm1hcmtEb3duLGEuY2hlY2tzLnVwPWEubWFya1VwLGEuY2hlY2s9ZnVuY3Rpb24oKXtyZXR1cm4gYS50cmlnZ2VyKFwiY2hlY2tpbmdcIiksYS5jaGVja3NbYS5nZXRPcHRpb24oXCJjaGVja3MuYWN0aXZlXCIpXSgpfSxhLmNvbmZpcm1VcD1hLmNvbmZpcm1Eb3duPWEuY2hlY2ssYS5vblhIUj1mdW5jdGlvbihhKXt2YXIgYixjLGU7cmV0dXJuIGU9ZnVuY3Rpb24oYixjKXt2YXIgZDtyZXR1cm4gZD1iLm9wZW4sYi5vcGVuPWZ1bmN0aW9uKGUsZixnLGgsaSl7cmV0dXJuIGEoe3R5cGU6ZSx1cmw6Zixhc3luYzpnLGZsYWdzOmMsdXNlcjpoLHBhc3N3b3JkOmkseGhyOmJ9KSxkLmFwcGx5KGIsYXJndW1lbnRzKX19LGM9d2luZG93LlhNTEh0dHBSZXF1ZXN0LHdpbmRvdy5YTUxIdHRwUmVxdWVzdD1mdW5jdGlvbihhKXt2YXIgYixkLGY7cmV0dXJuIGY9bmV3IGMoYSksZShmLGEpLGQ9Zi5zZXRSZXF1ZXN0SGVhZGVyLGYuaGVhZGVycz17fSxmLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZi5oZWFkZXJzW2FdPWIsZC5jYWxsKGYsYSxiKX0sYj1mLm92ZXJyaWRlTWltZVR5cGUsZi5vdmVycmlkZU1pbWVUeXBlPWZ1bmN0aW9uKGEpe3JldHVybiBmLm1pbWVUeXBlPWEsYi5jYWxsKGYsYSl9LGZ9LGQod2luZG93LlhNTEh0dHBSZXF1ZXN0LGMpLG51bGwhPXdpbmRvdy5YRG9tYWluUmVxdWVzdD8oYj13aW5kb3cuWERvbWFpblJlcXVlc3Qsd2luZG93LlhEb21haW5SZXF1ZXN0PWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIGE9bmV3IGIsZShhKSxhfSxkKHdpbmRvdy5YRG9tYWluUmVxdWVzdCxiKSk6dm9pZCAwfSxnPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0T3B0aW9uKFwiaW50ZXJjZXB0UmVxdWVzdHNcIikmJmEub25YSFIoZnVuY3Rpb24oYyl7dmFyIGQ7cmV0dXJuIGQ9Yy54aHIsZC5vZmZsaW5lIT09ITE/YihkLGEubWFya1VwLGEuY29uZmlybURvd24pOnZvaWQgMH0pLGEuZ2V0T3B0aW9uKFwiY2hlY2tPbkxvYWRcIik/YS5jaGVjaygpOnZvaWQgMH0sc2V0VGltZW91dChnLDApLHdpbmRvdy5PZmZsaW5lPWF9KS5jYWxsKHRoaXMpLGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGcsaCxpO2lmKCF3aW5kb3cuT2ZmbGluZSl0aHJvdyBuZXcgRXJyb3IoXCJPZmZsaW5lIFJlY29ubmVjdCBicm91Z2h0IGluIHdpdGhvdXQgb2ZmbGluZS5qc1wiKTtkPU9mZmxpbmUucmVjb25uZWN0PXt9LGY9bnVsbCxlPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIG51bGwhPWQuc3RhdGUmJlwiaW5hY3RpdmVcIiE9PWQuc3RhdGUmJk9mZmxpbmUudHJpZ2dlcihcInJlY29ubmVjdDpzdG9wcGVkXCIpLGQuc3RhdGU9XCJpbmFjdGl2ZVwiLGQucmVtYWluaW5nPWQuZGVsYXk9bnVsbCE9KGE9T2ZmbGluZS5nZXRPcHRpb24oXCJyZWNvbm5lY3QuaW5pdGlhbERlbGF5XCIpKT9hOjN9LGI9ZnVuY3Rpb24oKXt2YXIgYSxiO3JldHVybiBhPW51bGwhPShiPU9mZmxpbmUuZ2V0T3B0aW9uKFwicmVjb25uZWN0LmRlbGF5XCIpKT9iOk1hdGgubWluKE1hdGguY2VpbCgxLjUqZC5kZWxheSksMzYwMCksZC5yZW1haW5pbmc9ZC5kZWxheT1hfSxnPWZ1bmN0aW9uKCl7cmV0dXJuXCJjb25uZWN0aW5nXCIhPT1kLnN0YXRlPyhkLnJlbWFpbmluZy09MSxPZmZsaW5lLnRyaWdnZXIoXCJyZWNvbm5lY3Q6dGlja1wiKSwwPT09ZC5yZW1haW5pbmc/aCgpOnZvaWQgMCk6dm9pZCAwfSxoPWZ1bmN0aW9uKCl7cmV0dXJuXCJ3YWl0aW5nXCI9PT1kLnN0YXRlPyhPZmZsaW5lLnRyaWdnZXIoXCJyZWNvbm5lY3Q6Y29ubmVjdGluZ1wiKSxkLnN0YXRlPVwiY29ubmVjdGluZ1wiLE9mZmxpbmUuY2hlY2soKSk6dm9pZCAwfSxhPWZ1bmN0aW9uKCl7cmV0dXJuIE9mZmxpbmUuZ2V0T3B0aW9uKFwicmVjb25uZWN0XCIpPyhlKCksZC5zdGF0ZT1cIndhaXRpbmdcIixPZmZsaW5lLnRyaWdnZXIoXCJyZWNvbm5lY3Q6c3RhcnRlZFwiKSxmPXNldEludGVydmFsKGcsMWUzKSk6dm9pZCAwfSxpPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPWYmJmNsZWFySW50ZXJ2YWwoZiksZSgpfSxjPWZ1bmN0aW9uKCl7cmV0dXJuIE9mZmxpbmUuZ2V0T3B0aW9uKFwicmVjb25uZWN0XCIpJiZcImNvbm5lY3RpbmdcIj09PWQuc3RhdGU/KE9mZmxpbmUudHJpZ2dlcihcInJlY29ubmVjdDpmYWlsdXJlXCIpLGQuc3RhdGU9XCJ3YWl0aW5nXCIsYigpKTp2b2lkIDB9LGQudHJ5Tm93PWgsZSgpLE9mZmxpbmUub24oXCJkb3duXCIsYSksT2ZmbGluZS5vbihcImNvbmZpcm1lZC1kb3duXCIsYyksT2ZmbGluZS5vbihcInVwXCIsaSl9LmNhbGwodGhpcyksZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGY7aWYoIXdpbmRvdy5PZmZsaW5lKXRocm93IG5ldyBFcnJvcihcIlJlcXVlc3RzIG1vZHVsZSBicm91Z2h0IGluIHdpdGhvdXQgb2ZmbGluZS5qc1wiKTtjPVtdLGY9ITEsZD1mdW5jdGlvbihhKXtyZXR1cm4gT2ZmbGluZS50cmlnZ2VyKFwicmVxdWVzdHM6Y2FwdHVyZVwiKSxcImRvd25cIiE9PU9mZmxpbmUuc3RhdGUmJihmPSEwKSxjLnB1c2goYSl9LGU9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqO2o9YS54aHIsZz1hLnVybCxmPWEudHlwZSxoPWEudXNlcixkPWEucGFzc3dvcmQsYj1hLmJvZHksai5hYm9ydCgpLGoub3BlbihmLGcsITAsaCxkKSxlPWouaGVhZGVycztmb3IoYyBpbiBlKWk9ZVtjXSxqLnNldFJlcXVlc3RIZWFkZXIoYyxpKTtyZXR1cm4gai5taW1lVHlwZSYmai5vdmVycmlkZU1pbWVUeXBlKGoubWltZVR5cGUpLGouc2VuZChiKX0sYT1mdW5jdGlvbigpe3JldHVybiBjPVtdfSxiPWZ1bmN0aW9uKCl7dmFyIGIsZCxmLGcsaCxpO2ZvcihPZmZsaW5lLnRyaWdnZXIoXCJyZXF1ZXN0czpmbHVzaFwiKSxoPXt9LGI9MCxmPWMubGVuZ3RoO2Y+YjtiKyspZz1jW2JdLGk9Zy51cmwucmVwbGFjZSgvKFxcP3wmKV89WzAtOV0rLyxmdW5jdGlvbihhLGIpe3JldHVyblwiP1wiPT09Yj9iOlwiXCJ9KSxoW2cudHlwZS50b1VwcGVyQ2FzZSgpK1wiIC0gXCIraV09Zztmb3IoZCBpbiBoKWc9aFtkXSxlKGcpO3JldHVybiBhKCl9LHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gT2ZmbGluZS5nZXRPcHRpb24oXCJyZXF1ZXN0c1wiKSE9PSExPyhPZmZsaW5lLm9uKFwiY29uZmlybWVkLXVwXCIsZnVuY3Rpb24oKXtyZXR1cm4gZj8oZj0hMSxhKCkpOnZvaWQgMH0pLE9mZmxpbmUub24oXCJ1cFwiLGIpLE9mZmxpbmUub24oXCJkb3duXCIsZnVuY3Rpb24oKXtyZXR1cm4gZj0hMX0pLE9mZmxpbmUub25YSFIoZnVuY3Rpb24oYSl7dmFyIGIsYyxlLGYsZztyZXR1cm4gZz1hLnhocixlPWEuYXN5bmMsZy5vZmZsaW5lIT09ITEmJihmPWZ1bmN0aW9uKCl7cmV0dXJuIGQoYSl9LGM9Zy5zZW5kLGcuc2VuZD1mdW5jdGlvbihiKXtyZXR1cm4gYS5ib2R5PWIsYy5hcHBseShnLGFyZ3VtZW50cyl9LGUpP251bGw9PT1nLm9ucHJvZ3Jlc3M/KGcuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZiwhMSksZy5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLGYsITEpKTooYj1nLm9ucmVhZHlzdGF0ZWNoYW5nZSxnLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3JldHVybiAwPT09Zy5yZWFkeVN0YXRlP2YoKTo0PT09Zy5yZWFkeVN0YXRlJiYoMD09PWcuc3RhdHVzfHxnLnN0YXR1cz49MTJlMykmJmYoKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiP2IuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH0pOnZvaWQgMH0pLE9mZmxpbmUucmVxdWVzdHM9e2ZsdXNoOmIsY2xlYXI6YX0pOnZvaWQgMH0sMCl9LmNhbGwodGhpcyksZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlO2lmKCFPZmZsaW5lKXRocm93IG5ldyBFcnJvcihcIk9mZmxpbmUgc2ltdWxhdGUgYnJvdWdodCBpbiB3aXRob3V0IG9mZmxpbmUuanNcIik7Zm9yKGQ9W1widXBcIixcImRvd25cIl0sYj0wLGM9ZC5sZW5ndGg7Yz5iO2IrKyllPWRbYl0sKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzY3JpcHRbZGF0YS1zaW11bGF0ZT0nXCIrZStcIiddXCIpfHxsb2NhbFN0b3JhZ2UuT0ZGTElORV9TSU1VTEFURT09PWUpJiYobnVsbD09T2ZmbGluZS5vcHRpb25zJiYoT2ZmbGluZS5vcHRpb25zPXt9KSxudWxsPT0oYT1PZmZsaW5lLm9wdGlvbnMpLmNoZWNrcyYmKGEuY2hlY2tzPXt9KSxPZmZsaW5lLm9wdGlvbnMuY2hlY2tzLmFjdGl2ZT1lKX0uY2FsbCh0aGlzKSxmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnLGgsaSxqLGssbCxtO2lmKCF3aW5kb3cuT2ZmbGluZSl0aHJvdyBuZXcgRXJyb3IoXCJPZmZsaW5lIFVJIGJyb3VnaHQgaW4gd2l0aG91dCBvZmZsaW5lLmpzXCIpO2I9JzxkaXYgY2xhc3M9XCJvZmZsaW5lLXVpXCI+PGRpdiBjbGFzcz1cIm9mZmxpbmUtdWktY29udGVudFwiPjwvZGl2PjwvZGl2PicsYT0nPGEgaHJlZiBjbGFzcz1cIm9mZmxpbmUtdWktcmV0cnlcIj48L2E+JyxmPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYi5pbm5lckhUTUw9YSxiLmNoaWxkcmVuWzBdfSxnPWU9bnVsbCxkPWZ1bmN0aW9uKGEpe3JldHVybiBrKGEpLGcuY2xhc3NOYW1lKz1cIiBcIithfSxrPWZ1bmN0aW9uKGEpe3JldHVybiBnLmNsYXNzTmFtZT1nLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnwgKVwiK2Euc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKCB8JClcIixcImdpXCIpLFwiIFwiKX0saT17fSxoPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSksbnVsbCE9aVthXSYmY2xlYXJUaW1lb3V0KGlbYV0pLGlbYV09c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBrKGEpLGRlbGV0ZSBpW2FdfSwxZTMqYil9LG09ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU7ZD17ZGF5Ojg2NDAwLGhvdXI6MzYwMCxtaW51dGU6NjAsc2Vjb25kOjF9O2ZvcihjIGluIGQpaWYoYj1kW2NdLGE+PWIpcmV0dXJuIGU9TWF0aC5mbG9vcihhL2IpLFtlLGNdO3JldHVybltcIm5vd1wiLFwiXCJdfSxsPWZ1bmN0aW9uKCl7dmFyIGMsaDtyZXR1cm4gZz1mKGIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZyksbnVsbCE9T2ZmbGluZS5yZWNvbm5lY3QmJk9mZmxpbmUuZ2V0T3B0aW9uKFwicmVjb25uZWN0XCIpJiYoZy5hcHBlbmRDaGlsZChmKGEpKSxjPWcucXVlcnlTZWxlY3RvcihcIi5vZmZsaW5lLXVpLXJldHJ5XCIpLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucHJldmVudERlZmF1bHQoKSxPZmZsaW5lLnJlY29ubmVjdC50cnlOb3coKX0sbnVsbCE9Yy5hZGRFdmVudExpc3RlbmVyP2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaCwhMSk6Yy5hdHRhY2hFdmVudChcImNsaWNrXCIsaCkpLGQoXCJvZmZsaW5lLXVpLVwiK09mZmxpbmUuc3RhdGUpLGU9Zy5xdWVyeVNlbGVjdG9yKFwiLm9mZmxpbmUtdWktY29udGVudFwiKX0saj1mdW5jdGlvbigpe3JldHVybiBsKCksT2ZmbGluZS5vbihcInVwXCIsZnVuY3Rpb24oKXtyZXR1cm4gayhcIm9mZmxpbmUtdWktZG93blwiKSxkKFwib2ZmbGluZS11aS11cFwiKSxoKFwib2ZmbGluZS11aS11cC0yc1wiLDIpLGgoXCJvZmZsaW5lLXVpLXVwLTVzXCIsNSl9KSxPZmZsaW5lLm9uKFwiZG93blwiLGZ1bmN0aW9uKCl7cmV0dXJuIGsoXCJvZmZsaW5lLXVpLXVwXCIpLGQoXCJvZmZsaW5lLXVpLWRvd25cIiksaChcIm9mZmxpbmUtdWktZG93bi0yc1wiLDIpLGgoXCJvZmZsaW5lLXVpLWRvd24tNXNcIiw1KX0pLE9mZmxpbmUub24oXCJyZWNvbm5lY3Q6Y29ubmVjdGluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGQoXCJvZmZsaW5lLXVpLWNvbm5lY3RpbmdcIiksayhcIm9mZmxpbmUtdWktd2FpdGluZ1wiKX0pLE9mZmxpbmUub24oXCJyZWNvbm5lY3Q6dGlja1wiLGZ1bmN0aW9uKCl7dmFyIGEsYixjO3JldHVybiBkKFwib2ZmbGluZS11aS13YWl0aW5nXCIpLGsoXCJvZmZsaW5lLXVpLWNvbm5lY3RpbmdcIiksYT1tKE9mZmxpbmUucmVjb25uZWN0LnJlbWFpbmluZyksYj1hWzBdLGM9YVsxXSxlLnNldEF0dHJpYnV0ZShcImRhdGEtcmV0cnktaW4tdmFsdWVcIixiKSxlLnNldEF0dHJpYnV0ZShcImRhdGEtcmV0cnktaW4tdW5pdFwiLGMpfSksT2ZmbGluZS5vbihcInJlY29ubmVjdDpzdG9wcGVkXCIsZnVuY3Rpb24oKXtyZXR1cm4gayhcIm9mZmxpbmUtdWktY29ubmVjdGluZyBvZmZsaW5lLXVpLXdhaXRpbmdcIiksZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJldHJ5LWluLXZhbHVlXCIsbnVsbCksZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJldHJ5LWluLXVuaXRcIixudWxsKX0pLE9mZmxpbmUub24oXCJyZWNvbm5lY3Q6ZmFpbHVyZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGgoXCJvZmZsaW5lLXVpLXJlY29ubmVjdC1mYWlsZWQtMnNcIiwyKSxoKFwib2ZmbGluZS11aS1yZWNvbm5lY3QtZmFpbGVkLTVzXCIsNSl9KSxPZmZsaW5lLm9uKFwicmVjb25uZWN0OnN1Y2Nlc3NcIixmdW5jdGlvbigpe3JldHVybiBoKFwib2ZmbGluZS11aS1yZWNvbm5lY3Qtc3VjY2VlZGVkLTJzXCIsMiksaChcIm9mZmxpbmUtdWktcmVjb25uZWN0LXN1Y2NlZWRlZC01c1wiLDUpfSl9LFwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/aigpOm51bGwhPWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixqLCExKTooYz1kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UsZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmaigpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGM/Yy5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfSl9LmNhbGwodGhpcyk7IiwiKGZ1bmN0aW9uKCl7XG5cdGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5cdGlmKHNlYXJjaFBhcmFtcy5nZXQoJ2xpbmsnKSl7XG5cdFx0JCgnI09yZGVyc19saW5rJykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ2xpbmsnKSlcblx0XHQkKCcjT3JkZXJzX2NvdW50JykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ2NvdW50JykpXG5cdFx0JCgnI09yZGVyc19wcmljZScpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdwcmljZScpKVxuXHRcdCQoJyNPcmRlcnNfc2l6ZV9zdHInKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnc2l6ZScpKVxuXHRcdCQoJyNPcmRlcnNfY29sb3InKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnY29sb3InKSlcblxuXHRcdCQod2luZG93KS5iaW5kKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlYXJjaFBhcmFtcy5nZXQoJ3ByaWNlJykmJiQoJyNwcm9jZWR1cmUtZm9ybSAjT3JkZXJzX2xpbmsnKS50cmlnZ2VyKCdibHVyJylcblx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKHtwYWdlOiAxfSwgXCJ0aXRsZSAxXCIsIFwiXCIpXG5cdFx0fSlcblxuXHR9XG5cblx0XG59KSgpIiwiY29uc3QgTGF5ZXJlZFNsaWRlciA9ICgpPT4ge1xuXG5cdGNvbnN0IGxheWVyZWRTbGlkZXIgPSAkKCcubGF5ZXJlZC1zbGlkZXInKVxuXHRjb25zdCBkb3RDbG9uZSA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0Y29uc3QgaW5kaWNhdG9ycyA9ICQoJy5sYXllcmVkLXNsaWRlcl9faW5kaWNhdG9ycycpXG5cdGNvbnN0IGl0ZW0gPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2l0ZW0nKVxuXHRjb25zdCBhcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3cnKVxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1uZXh0Jylcblx0Y29uc3QgcHJldkFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tcHJldicpXG5cdGNvbnN0IGNvdW50ID0gaXRlbS5sZW5ndGhcblx0bGV0IGkgPSAxXG5cdHdoaWxlKGkgPCBjb3VudCl7XG5cdFx0aW5kaWNhdG9ycy5hcHBlbmQoZG90Q2xvbmUuY2xvbmUoKSlcblx0XHRpKytcblx0fVxuXG5cblxuXHRjb25zdCBkb3QgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdCcpXG5cdGRvdC5jbGljayhmdW5jdGlvbigpe1xuXHQgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpXG5cdCAgXG5cdCAgaXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgaXRlbS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIFxuXHQgIGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBkb3QuZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIFxuXHQgIHNsaWRlckNoYW5nZWQoaW5kZXgpXG5cdH0pXG5cblx0Y29uc3QgbmV4dEFycm93Q2xpY2tlZCA9ICgpID0+IHtcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdFx0Y29uc3QgbmV4dEluZGV4ID0gaW5kZXg8Y291bnQtMSA/IGluZGV4KzEgOiAwXG5cblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0XHRpdGVtLmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdGRvdC5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdHNsaWRlckNoYW5nZWQobmV4dEluZGV4KVxuXHR9XG5cdGNvbnN0IHByZXZBcnJvd0NsaWNrZWQgPSAoKSA9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdFx0Y29uc3QgcHJldkluZGV4ID0gaW5kZXggLSAxXG5cblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0XHRpdGVtLmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdGRvdC5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdHNsaWRlckNoYW5nZWQocHJldkluZGV4KVxuXHR9XG5cdG5leHRBcnJvdy5jbGljayhmdW5jdGlvbigpe1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0bmV4dEFycm93Q2xpY2tlZCgpXG5cdH0pXG5cblx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0cHJldkFycm93Q2xpY2tlZCgpXG5cdH0pXG5cblx0Y29uc3Qgc2xpZGVyQ2hhbmdlZCA9IChuZXdJbmRleCkgPT4ge1xuXHQgIGFycm93LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgaWYobmV3SW5kZXgrMT09Y291bnQpIHsgLy8gbGFzdFxuXHQgICAgLy8gbmV4dEFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBlbHNlIGlmKG5ld0luZGV4PT0wKSB7XG5cdCAgICAvLyBwcmV2QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICB9IFxuXHR9XG5cblx0Ly8gaW50ZXJ2YWxcblxuXHRcblx0bGV0IGludGVydmFsID0gbnVsbFxuXG5cdGNvbnN0IHN0YXJ0SW50ZXJ2YWwgPSAoKSA9PiB7XG5cdFx0aW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0QXJyb3dDbGlja2VkLCA1MDAwKVxuXHR9XG5cdHN0YXJ0SW50ZXJ2YWwoKVxuXG5cdGxheWVyZWRTbGlkZXIuaG92ZXIoKCk9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0fSwgKCkgPT4gc3RhcnRJbnRlcnZhbCgpIClcblxuXG5cblx0Ly8gbGF5ZXJlZFNsaWRlci5vbihcInRvdWNoc3RhcnRcIiwgc3RhcnRUb3VjaCk7XG5cdC8vIGxheWVyZWRTbGlkZXIub24oXCJ0b3VjaG1vdmVcIiwgbW92ZVRvdWNoKTtcblxuXHQvLyAvLyBTd2lwZSBVcCAvIERvd24gLyBMZWZ0IC8gUmlnaHRcblx0Ly8gbGV0IGluaXRpYWxYID0gbnVsbDtcblx0Ly8gbGV0IGluaXRpYWxZID0gbnVsbDtcblxuXHQvLyBmdW5jdGlvbiBzdGFydFRvdWNoKGUpIHtcblx0Ly8gaW5pdGlhbFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcblx0Ly8gaW5pdGlhbFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcblx0Ly8gfTtcblxuXHQvLyBmdW5jdGlvbiBtb3ZlVG91Y2goZSkge1xuXHQvLyBpZiAoaW5pdGlhbFggPT09IG51bGwpIHtcblx0Ly8gICByZXR1cm47XG5cdC8vIH1cblxuXHQvLyBpZiAoaW5pdGlhbFkgPT09IG51bGwpIHtcblx0Ly8gICByZXR1cm47XG5cdC8vIH1cblxuXHQvLyBsZXQgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcblx0Ly8gbGV0IGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG5cblx0Ly8gbGV0IGRpZmZYID0gaW5pdGlhbFggLSBjdXJyZW50WDtcblx0Ly8gbGV0IGRpZmZZID0gaW5pdGlhbFkgLSBjdXJyZW50WTtcblxuXHQvLyBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XG5cdC8vICAgLy8gc2xpZGluZyBob3Jpem9udGFsbHlcblx0Ly8gICBpZiAoZGlmZlggPiAxMCkge1xuXHQvLyAgICAgLy8gc3dpcGVkIGxlZnRcblx0Ly8gICAgIHByZXZBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICAvLyBzd2lwZWQgcmlnaHRcblx0Ly8gICAgIG5leHRBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gIFxuXHQvLyB9IGVsc2Uge1xuXHQvLyAgIC8vIHNsaWRpbmcgdmVydGljYWxseVxuXHQvLyAgIGlmIChkaWZmWSA+IDApIHtcblx0Ly8gICAgIC8vIHN3aXBlZCB1cFxuXHQvLyAgICAgLy8gbmV4dEFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSBlbHNlIHtcblx0Ly8gICAgIC8vIHN3aXBlZCBkb3duXG5cdC8vICAgICAvLyBwcmV2QXJyb3dDbGlja2VkKClcblx0Ly8gICB9ICBcblx0Ly8gfVxuXG5cdC8vIGluaXRpYWxYID0gbnVsbDtcblx0Ly8gaW5pdGlhbFkgPSBudWxsO1xuXG5cdC8vIGUucHJldmVudERlZmF1bHQoKTtcblx0Ly8gfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllcmVkU2xpZGVyXG4iLCJpbXBvcnQge3NldENvb2tpZSwgZ2V0Q29va2llLCByZW1vdmVDb29raWV9IGZyb20gJy4vY29va2llcydcblxubGV0IGRlZmVycmVkUHJvbXB0O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIChlKSA9PiB7XG4gICAgLy8gUHJldmVudCBDaHJvbWUgNjcgYW5kIGVhcmxpZXIgZnJvbSBhdXRvbWF0aWNhbGx5IHNob3dpbmcgdGhlIHByb21wdFxuICAgIC8vIFN0YXNoIHRoZSBldmVudCBzbyBpdCBjYW4gYmUgdHJpZ2dlcmVkIGxhdGVyLlxuICAgIGRlZmVycmVkUHJvbXB0ID0gZTtcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1hcy1hcHAnKVxuICAgIGJ0bkFkZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGlmKCFnZXRDb29raWUoJ3NhdmUtYXMtYXBwJykpe1xuICAgICAgICAkKCcjc2F2ZS1hcy1hcHAnKS50b29sdGlwKCdzaG93JylcbiAgICAgICAgc2V0VGltZW91dCgoKT0+eyQoJyNzYXZlLWFzLWFwcCcpLnRvb2x0aXAoJ2hpZGUnKX0sIDEwMDAwKVxuICAgICAgICBzZXRDb29raWUoJ3NhdmUtYXMtYXBwJywgMSlcbiAgICB9XG5cbiAgICBpZihidG5BZGQpe1xuICAgICAgICBidG5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAvLyBoaWRlIG91ciB1c2VyIGludGVyZmFjZSB0aGF0IHNob3dzIG91ciBBMkhTIGJ1dHRvblxuICAgICAgICAgICAgYnRuQWRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlIHByb21wdCcpXG4gICAgICAgICAgICAvLyBTaG93IHRoZSBwcm9tcHRcbiAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0LnByb21wdCgpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IGNvbnNvbGUubG9nKGAtLS0tPiAke2Vycm9yfWApIH0pXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSB1c2VyIHRvIHJlc3BvbmQgdG8gdGhlIHByb21wdFxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQudXNlckNob2ljZVxuICAgICAgICAgICAgLnRoZW4oKGNob2ljZVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2hvaWNlUmVzdWx0Lm91dGNvbWUgPT09ICdhY2NlcHRlZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBhY2NlcHRlZCB0aGUgQTJIUyBwcm9tcHQnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBkaXNtaXNzZWQgdGhlIEEySFMgcHJvbXB0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyIsImNvbnN0IGEgPSAoKT0+IHtcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGEiLCJjb25zdCBjbG9zZU5hdiA9ICgpPT4ge1xuXG5cdFxuXHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VOYXYiLCJleHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzID0gMSkgPT4ge1xuICAgIGxldCBleHBpcmVzID0gXCJcIjtcbiAgICBcblx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XG5cdGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICBcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yKGxldCBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKG5hbWUpID0+IHsgICBcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lKyc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87JzsgIFxufVxuXG4vLyBzZXRDb29raWUoJ3Bwa2Nvb2tpZScsJ3Rlc3Rjb29raWUnLDcpO1xuXG4vLyB2YXIgeCA9IGdldENvb2tpZSgncHBrY29va2llJyk7XG4iLCJpbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xuXHRcdGNvbnN0IF90aGlzID0gJChlLnRhcmdldClcblx0XHRcblxuXHRcdC8vIGlmIG5vdCBzZWxmIGNsaWNrZWRcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLmhhbWJ1cmdlcicpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmItbmF2JykubGVuZ3RoKXtcblx0XHRcdGNsb3NlTmF2KClcblxuXHRcdH1cblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNob3BwaW5nLWNhcmQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5sZW5ndGgpe1xuXHRcdFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5oaWRlKClcblx0XHR9XG5cdFx0XG5cdH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRMaXN0ZW5lclxuIiwiY29uc3QgbGF6eWxvYWQgPSAoKT0+IHtcblx0dHJ5IHtcblx0XHQkKCdbYi1sYXp5bG9hZF0nKS5lYWNoKGZ1bmN0aW9uKGUpe1xuXHRcdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXG5cdFx0XHRjb25zdCBuZXdTcmMgPSBfdGhpcy5kYXRhKCdzcmMnKVxuXHRcdFx0X3RoaXMucHJvcCgnc3JjJywgbmV3U3JjKVxuXG5cdFx0fSlcblx0fSBjYXRjaChlKXtcblx0XHRjb25zb2xlLmVycm9yKCdiLWRlYnVnJywgZSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXp5bG9hZCIsImZldGNoKCdodHRwczovL2ZpenphLmF6L3NpdGUvbG9nSW5mbycpLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UudGV4dCgpKS50aGVuKCh0KT0+e1xuICAgICQoJyNsb2ctaW5mbycpLmh0bWwodClcbn0pIiwiJ3VzZSBzdHJpY3QnXG4vLy8vLy8gUE9QVVBcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbi8vIGltcG9ydCBtYXNrIGZyb20gJ2pxdWVyeS1tYXNrLXBsdWdpbidcbi8vIGltcG9ydCBDbGlwYm9hcmQgZnJvbSAnY2xpcGJvYXJkJ1xuXG4vLyBpbXBvcnQgJCBmcm9tICcuLi9jb21waWxlZF9qcy9qcXVlcnktMy4zLjEubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkubWFzaydcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvcG9wcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZGF0ZXBpY2tlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3aXBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC5idW5kbGUubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAtc2VsZWN0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dlZXRhbGVydC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5mb3JtLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZm9ybS52YXJpYWJsZXMnXG5cbmltcG9ydCAnLi4vY29tcGlsZWRfanMvb2ZmbGluZS5taW4nXG5cbi8vIGltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAnXG5pbXBvcnQgYSBmcm9tICcuL2EnXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IHdpbmRvd1Njcm9sbExpc3RlbmVyIGZyb20gJy4vd2luZG93U2Nyb2xsTGlzdGVuZXInXG5pbXBvcnQgZG9jdW1lbnRMaXN0ZW5lciBmcm9tICcuL2RvY3VtZW50TGlzdGVuZXInXG4vLyBpbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuaW1wb3J0IHNob3BwaW5nQ2FyZCBmcm9tICcuL3Nob3BwaW5nQ2FyZCdcbmltcG9ydCBvcGVuUG9wdXAgZnJvbSAnLi9vcGVuUG9wdXAnXG5pbXBvcnQgcmVwZWF0SXRlbSBmcm9tICcuL3JlcGVhdEl0ZW0nXG5pbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcbmltcG9ydCBsYXp5bG9hZCBmcm9tICcuL2xhenlsb2FkJ1xuaW1wb3J0IHNtc1ZlcmlmaWNhdGlvbiBmcm9tICcuL3Ntc1ZlcmlmaWNhdGlvbidcbmltcG9ydCBMYXllcmVkU2xpZGVyIGZyb20gJy4vTGF5ZXJlZFNsaWRlcidcbi8vIGltcG9ydCBSYW5kb21EZWVyIGZyb20gJy4vUmFuZG9tRGVlcidcbmltcG9ydCBQV0EgZnJvbSAnLi9QV0EnXG5pbXBvcnQgR2V0UHJ1ZHVjdEZyb21VcmwgZnJvbSAnLi9HZXRQcnVkdWN0RnJvbVVybCdcbmltcG9ydCBsb2FkRE9NIGZyb20gJy4vbG9hZERPTSdcblxuXG5pbXBvcnQge3NldENvb2tpZSwgZ2V0Q29va2llfSBmcm9tICcuL2Nvb2tpZXMnXG5cblxuXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCdcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnXG4vLyByZXF1aXJlKFwiQGNoZW5mZW5neXVhbi9kYXRlcGlja2VyXCIpXG5cblxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xuICAgIGZuKClcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXG4gIH1cbn1cblxucmVhZHkoZnVuY3Rpb24oKSB7XG5cdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3QtdmlzaWJsZS1maXJzdCcpLnN0eWxlLnZpc2liaWxpdHk9J3Zpc2libGUnXG5cdG5hdigpXG5cdHdpbmRvd1Njcm9sbExpc3RlbmVyKClcblx0ZG9jdW1lbnRMaXN0ZW5lcigpXG5cdC8vIHNsaWRlcihTd2lwZXIpXG5cdHNob3BwaW5nQ2FyZCgpXG5cdG9wZW5Qb3B1cCgpXG5cdHJlcGVhdEl0ZW0oKVxuXHRzbXNWZXJpZmljYXRpb24oKVxuXHRMYXllcmVkU2xpZGVyKClcblxuXG5cblxuXHQvLyBzb2x2ZSBoYXNoIGJ1ZyBpbiBjaHJvbWVcblx0dmFyIGlzQ2hyb21lID0gL0Nocm9tZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAvR29vZ2xlIEluYy8udGVzdChuYXZpZ2F0b3IudmVuZG9yKTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgaXNDaHJvbWUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuXHQkKCcucHJlc3NDbG9zZScpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgZT0+e1xuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblx0XHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRcdHByZXNzQ2xvc2UucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe2h0bWwucmVtb3ZlQ2xhc3MoJ3ktaGlkZGVuJyl9LCA1MDApXG5cblx0XHRjbG9zZU5hdigpXG5cdH0pXG5cblx0JCgnW2RhdGEtdG9nZ2xlPVwiZGF0ZXBpY2tlclwiXScpLmRhdGVwaWNrZXIoeyBmb3JtYXQ6IFwiZGQvbW0veXl5eVwiIH0pXG5cblx0JCgnLmpxdWVyeU1hc2snKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgdCA9ICQodGhpcylcblx0XHR0Lm1hc2sodC5hdHRyKCdkYXRhLW1hc2snKSwge1xuXHRcdFx0dHJhbnNsYXRpb246IHtBOiB7cGF0dGVybjogL0EvLCBvcHRpb25hbDogZmFsc2V9LCBaOiB7cGF0dGVybjogL1tBWl0vLCBvcHRpb25hbDogZmFsc2V9LCBFOiB7cGF0dGVybjogL0UvLCBvcHRpb25hbDogdHJ1ZX19XG5cdFx0fSlcblx0fSlcblxuXHQkKCcjRGVjbGFyYXRpb25zX2xpbmtfaWQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0XHQkKCcjRGVjbGFyYXRpb25zX25hbWUnKS50cmlnZ2VyKCdmb2N1cycpXG5cdH0pXG5cblx0Ly8gJC5tYXNrLmRlZmluaXRpb25zWyc5J10gPSAnJztcblx0Ly8gJC5tYXNrLmRlZmluaXRpb25zWydkJ10gPSAnWzAtOV0nO1xuXHQvLyAkKCcuanF1ZXJ5TWFzaycpLm1hc2soJzIyMzEnKTtcblxuXHRcblx0Ly8gQ2xpcGJvYXJkXG5cdC8vIG5ldyBDbGlwYm9hcmQoJy5idG4tY2xpcGJvYXJkJyk7XG5cdHZhciB0aW1lb3V0O1xuXHQvLyBjb25zdCB0aW1lb3V0XG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgdmFyIGF1eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICBhdXguc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGV4dCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXgpO1xuICAgICAgICAgIGF1eC5zZWxlY3QoKTtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhdXgpO1xuICAgIH1cblxuICAgXG5cblx0XG5cdGNvbnN0IHRvb2x0aXAgPSAkKCcudG9vbHRpcHRleHQnKVxuXHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3B5JykpXG5cblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5iaW5kKCdjbGljayB0b3VjaHN0YXJ0JywgZT0+e1xuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLnBhcmVudCgnYnV0dG9uJylcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcblx0XHQvLyBDT1BZXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSB0YXJnZXQuY2xvc2VzdCgnLmNvcHknKS5maW5kKCcuY29weV9fdmFsdWUnKS50ZXh0KCkudHJpbSgpXG5cdFx0Y29uc3QgY29weU5vZGUgPSAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpXG5cdFx0Y29weU5vZGUuYWRkQ2xhc3MoJ2FuaW1hdGVkIGhlYXJ0QmVhdCcpXG5cdFx0Y29uc3QgY29weVRleHQgPSBjb3B5Tm9kZS50ZXh0KCkudHJpbSgpXG5cdFx0Y29uc29sZS5sb2coY29weVRleHQpXG5cdFx0Y29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHRcdC8vICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSkudGV4dCgpXG5cblx0XHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3BpZWQnKSlcblx0XHRjbGVhclRpbWVvdXQodGltZW91dClcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRjb3B5Tm9kZS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgaGVhcnRCZWF0Jylcblx0XHR9LCAxMDAwKVxuXG5cdFx0Ly8gY29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHR9KVxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLm1vdXNlb3V0KGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5Tm9kZSA9ICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSlcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblx0XHRcdFxuXHRcdFx0XG5cdFx0fSwgMjAwKVxuXHR9KVxuXHQkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKClcblxuXG5cblx0Ly8gd2UgYWRkIHRoZSBtb2RhbCB0byB0aGUgZW5kIG9mIGJvZHkgXG5cdGNvbnN0IG1vZGFsID0gJCgnLmFkZC10by10aGUtZW5kLW9mLWJvZHknKVxuXHQkKCdib2R5JykuYXBwZW5kKG1vZGFsLmNsb25lKCkpXG5cdG1vZGFsLnJlbW92ZSgpXG5cblxuXHRcblxuXG5cdC8vIHNjcm9sbCB0byBvcmRlclxuXHQkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnNjcm9sbC10by1vcmRlclwiLCBmdW5jdGlvbiAoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKVxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmxlbmd0aD4yKXtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICcvI29yZGVycy1ob2xkZXInXG5cblx0XHR9IGVsc2Uge1xuXG5cdCAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjb3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgfVxuICAgIH0pO1xuXG4gICAgLy9zY3JvbGwgdG8gdG9wXG4gIC8vICAgJChcIi5zY3JvbGwtdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAvLyAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gIC8vICAgICAgIH0sIDEwMDApO1xuICAvLyAgIH0pO1xuXG5cbiAvLyAgIFx0JCgnLmItaW52b2ljZV9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0Ly8gXHRjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcblx0Ly8gXHRjb25zdCBmaWxlSW5mbyA9ICQoJy5iLWludm9pY2VfX2ZpbGVpbmZvJylcblx0Ly8gXHRmaWxlSW5mby50ZXh0KCcnKSBcblxuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xuXHQvLyBcdFx0Y29uc3QgbmFtZSA9IGZpbGVzW2ldLm5hbWVcblx0Ly8gXHRcdGNvbnN0IHNpemUgPSBmaWxlc1tpXS5zaXplLzEwMjQvMTAyNFxuXHQvLyBcdFx0ZmlsZUluZm8uYXBwZW5kKCQoYDxhIGNsYXNzPVwiYi1pbnZvaWNlX19maWxlbmFtZSBwLTEgbXItMVwiPiR7bmFtZX08c3BhbiBjbGFzcz1cIm1sLTJcIiBocmVmPVwiXCI+JnRpbWVzOzwvc3Bhbj48L2E+YCkpXG5cdC8vIFx0fVxuXHQgIFxuXHQvLyB9KVxuXG5cblxuICAgIFxufSkgLy8gcmVhZHlcblxuXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG5cblxuXG4vLyB3aW5kb3cgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdFxuXG5cdGxhenlsb2FkKClcbn0pICBcblxuXG4iLCJcbmNvbnN0IG5hdiA9ICgpID0+IHtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYW1idXJnZXInLCAoKT0+e1xuXHRcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHRcdHNldFRpbWVvdXQoKCk9Pm5hdi5hZGRDbGFzcygnYi1uYXYtLWFjdGl2ZScpLCAxMDApXG5cdFx0cHJlc3NDbG9zZS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblxuXHR9KVxuXG5cdCQoJy5uYXYtdGFiLWJ1dHRvbicpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQkKCcuYi1uYXZfX3RhYicpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdHRhcmdldC5wYXJlbnQoJy5iLW5hdl9fdGFiJykuYWRkQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcgKyBocmVmKS5hZGRDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2XG4iLCJjb25zdCBvcGVuUG9wdXAgPSAoKT0+IHtcblx0Ly8gY29uc3QgYmx1cnJ5QmcgPSAkKCcuYmx1cnJ5LWJhY2tncm91bmQnKVxuXHRjb25zdCBwb3B1cCA9ICQoJy5iLXBvcHVwJylcblx0Y29uc3QgYk5hdiA9ICQoJy5iLW5hdicpIC8vIHJlc3BvbnNpdmUgaXNzdWVzXG5cdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblxuXHQkKCcub3BlblBvcHVwJykuY2xpY2soZT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0Ly8gY29uc3Qgb2Zmc2V0ID0gJChlLnRhcmdldCkub2Zmc2V0KClcblx0XHQvLyBjb25zdCB0b3AgPSBvZmZzZXQudG9wXG5cdFx0Ly8gY29uc3QgbGVmdCA9IG9mZnNldC5sZWZ0XG5cdFx0Yk5hdi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0Ly8gYmx1cnJ5QmcuYWRkQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdCQoJy5wcmVzc0Nsb3NlJykuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5oaWRlKClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuYi1wb3B1cC0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0fSwgMzAwKVxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtXG5cblxuY29uc3QgcmVwZWF0TmV3SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHJlcGVhdEl0ZW1CdXR0b24sIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpXG5cdFx0XHRcdHBhcmVudEl0ZW0uYW5pbWF0ZSh7XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0fSwgJ2Zhc3QnLCAnc3dpbmcnLCBcblx0XHRcdFx0XHQoKSA9PiBwYXJlbnRJdGVtLnJlbW92ZSgpXG5cdFx0XHRcdClcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxuXG4iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuc2hvcHBpbmctY2FyZCcsIChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IHNtc1ZlcmlmaWNhdGlvbiA9ICgpPT4ge1xuXHRjb25zdCBpbnB1dCA9ICQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5lcSgwKVxuXHRjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXhsZW5ndGgnKSlcblx0Y29uc3QgZm9udFNpemUgPSBwYXJzZUludChpbnB1dC5jc3MoJ2ZvbnRTaXplJykpXG5cdGNvbnN0IGRhc2hlcyA9ICQoJy5iLXZlcmlmaWNhdGlvbl9fZGFzaGVzJylcblx0Y29uc3QgdW5kZXJsaW5lV2lkdGggPSAzMFxuXHRjb25zdCB1bmRlcmxpbmVNYXJnaW5SaWdodCA9IDIyXG5cdGNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gM1xuXG5cdC8vIGNvbnNvbGUubG9nKCBtYXhMZW5ndGgsIGZvbnRTaXplKVxuXHRcblx0ZGFzaGVzLmFwcGVuZCgnPHNwYW4+PC9zcGFuPicucmVwZWF0KG1heExlbmd0aCkpXG5cdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5jc3Moe1xuXHRcdFx0ICB3aWR0aDogKHVuZGVybGluZVdpZHRoICogKG1heExlbmd0aCArIDEpICsgdW5kZXJsaW5lTWFyZ2luUmlnaHQgKiAobWF4TGVuZ3RoIC0gMSkpICsgaG9yaXpvbnRhbFBhZGRpbmcgKiAyLFxuXG5cdFx0XHR9KVxuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uJykuY3NzKHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0XHR9KVxuXHRcdFx0aW5wdXQuZm9jdXMoKVxuXHRcdH0pXG5cdFxuXHRpbnB1dC5rZXl1cCgoKT0+e1xuXHRcdGlmKGlucHV0LnZhbCgpLmxlbmd0aD49bWF4TGVuZ3RoKSB7XG5cdFx0XHQkKCcudmVyaWZpY2F0aW9uQnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuXHRcdH1cblx0fSlcblx0XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzbXNWZXJpZmljYXRpb24iLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
