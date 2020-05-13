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

		$('[data-toggle="tooltip"]').tooltip();
	}); // ready

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcGlsZWRfanMvb2ZmbGluZS5taW4uanMiLCJzcmMvanMvbWFpbi9HZXRQcnVkdWN0RnJvbVVybC5qcyIsInNyYy9qcy9tYWluL0xheWVyZWRTbGlkZXIuanMiLCJzcmMvanMvbWFpbi9QV0EuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9jb29raWVzLmpzIiwic3JjL2pzL21haW4vZG9jdW1lbnRMaXN0ZW5lci5qcyIsInNyYy9qcy9tYWluL2xhenlsb2FkLmpzIiwic3JjL2pzL21haW4vbG9hZERPTS5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBLEdBQUMsWUFBVTtBQUFDLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFrQixJQUFFLFNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQWE7QUFBQyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBWSxJQUFBLEVBQUEsQ0FBSyxLQUFBLENBQUEsSUFBUyxFQUFULFNBQUEsRUFBQTtBQUFxQixZQUFHO0FBQUMsY0FBRSxFQUFBLFNBQUEsQ0FBRixDQUFFLENBQUYsRUFBaUIsUUFBTSxFQUFOLENBQU0sQ0FBTixJQUFZLGNBQVksT0FBeEIsQ0FBQSxHQUFpQyxFQUFBLElBQUEsQ0FBTyxFQUFBLENBQUEsSUFBeEMsQ0FBaUMsQ0FBakMsR0FBZ0QsRUFBQSxJQUFBLENBQU8sS0FBeEUsQ0FBaUUsQ0FBakU7QUFBSixTQUFBLENBQW9GLE9BQUEsQ0FBQSxFQUFRO0FBQUMsY0FBQSxDQUFBO0FBQUk7QUFBQSxjQUFBLENBQUE7QUFBdkosS0FBQSxFQUFpSyxJQUFqSyxFQUFBLEVBQXNLLFFBQU0sRUFBTixPQUFBLEtBQWtCLEVBQUEsT0FBQSxHQUF4TCxFQUFzSyxDQUF0SyxFQUFzTSxJQUFFLEVBQUMsUUFBTyxFQUFDLEtBQUksRUFBQyxLQUFJLFNBQUEsR0FBQSxHQUFVO0FBQUMsbUJBQU0sb0JBQWtCLEtBQUEsS0FBQSxDQUFXLE1BQUksS0FBdkMsTUFBdUMsRUFBZixDQUF4QjtBQUFoQixXQUFBLEVBQXVFLFNBQTVFLEdBQUssRUFBTCxFQUF5RixPQUFNLEVBQUMsS0FBSSxTQUFBLEdBQUEsR0FBVTtBQUFDLG1CQUFNLG9CQUFrQixLQUFBLEtBQUEsQ0FBVyxNQUFJLEtBQXZDLE1BQXVDLEVBQWYsQ0FBeEI7QUFBL0csV0FBK0YsRUFBL0YsRUFBdUssUUFBL0ssS0FBUSxFQUFSLEVBQTZMLGFBQVksQ0FBek0sQ0FBQSxFQUE0TSxtQkFBa0IsQ0FBOU4sQ0FBQSxFQUFpTyxXQUFVLENBQW5iLENBQXdNLEVBQXhNLEVBQXViLElBQUUsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBYTtBQUFDLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQWdCLEtBQUksSUFBQSxDQUFBLEVBQUksSUFBRSxFQUFBLEtBQUEsQ0FBTixHQUFNLENBQU4sRUFBbUIsSUFBRSxJQUFyQixDQUFBLEVBQXlCLElBQUUsRUFBL0IsTUFBQSxFQUF3QyxJQUFBLENBQUEsS0FBTSxJQUFFLEVBQUYsQ0FBRSxDQUFGLEVBQU8sSUFBRSxFQUFULENBQVMsQ0FBVCxFQUFjLGFBQUEsT0FBNUQsQ0FBNEQsS0FBQSxXQUFBLEdBQUEsV0FBQSxHQUFBLFFBQTVELENBQTRELENBQUEsQ0FBcEIsQ0FBeEMsRUFBZ0YsSUFBRSxFQUFsRixDQUFBLEVBQUEsQ0FBdUYsUUFBTyxNQUFJLEVBQUEsTUFBQSxHQUFKLENBQUEsR0FBQSxDQUFBLEdBQWlCLEtBQXhCLENBQUE7QUFBOWlCLEtBQUEsRUFBOGtCLEVBQUEsU0FBQSxHQUFZLFVBQUEsQ0FBQSxFQUFXO0FBQUMsVUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFRLE9BQU8sSUFBRSxTQUFPLElBQUUsRUFBRSxFQUFGLE9BQUEsRUFBVCxDQUFTLENBQVQsSUFBQSxDQUFBLEdBQTJCLEVBQUEsQ0FBQSxFQUE3QixDQUE2QixDQUE3QixFQUFvQyxjQUFZLE9BQVosQ0FBQSxHQUFBLEdBQUEsR0FBM0MsQ0FBQTtBQUE5bUIsS0FBQSxFQUFxckIsY0FBWSxPQUFPLE9BQW5CLGdCQUFBLElBQTRDLE9BQUEsZ0JBQUEsQ0FBQSxRQUFBLEVBQWlDLFlBQVU7QUFBQyxhQUFPLFdBQVcsRUFBWCxTQUFBLEVBQVAsR0FBTyxDQUFQO0FBQTVDLEtBQUEsRUFBZ0YsQ0FBanpCLENBQWl1QixDQUFqdUIsRUFBcXpCLGNBQVksT0FBTyxPQUFuQixnQkFBQSxJQUE0QyxPQUFBLGdCQUFBLENBQUEsU0FBQSxFQUFrQyxZQUFVO0FBQUMsYUFBTyxFQUFQLFdBQU8sRUFBUDtBQUE3QyxLQUFBLEVBQXFFLENBQXQ2QixDQUFpMkIsQ0FBajJCLEVBQTA2QixFQUFBLEtBQUEsR0FBMTZCLElBQUEsRUFBdTdCLEVBQUEsTUFBQSxHQUFTLFlBQVU7QUFBQyxhQUFPLEVBQUEsT0FBQSxDQUFBLGNBQUEsR0FBMEIsU0FBTyxFQUFQLEtBQUEsSUFBZ0IsRUFBQSxLQUFBLEdBQUEsSUFBQSxFQUFhLEVBQUEsT0FBQSxDQUE3QixJQUE2QixDQUE3QixJQUE4QyxLQUEvRSxDQUFBO0FBQTM4QixLQUFBLEVBQWtpQyxFQUFBLFFBQUEsR0FBVyxZQUFVO0FBQUMsYUFBTyxFQUFBLE9BQUEsQ0FBQSxnQkFBQSxHQUE0QixXQUFTLEVBQVQsS0FBQSxJQUFrQixFQUFBLEtBQUEsR0FBQSxNQUFBLEVBQWUsRUFBQSxPQUFBLENBQWpDLE1BQWlDLENBQWpDLElBQW9ELEtBQXZGLENBQUE7QUFBeGpDLEtBQUEsRUFBdXBDLElBQXZwQyxFQUFBLEVBQTRwQyxFQUFBLEVBQUEsR0FBSyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFlO0FBQUMsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFjLElBQUcsSUFBRSxFQUFBLEtBQUEsQ0FBRixHQUFFLENBQUYsRUFBZSxFQUFBLE1BQUEsR0FBbEIsQ0FBQSxFQUE2QjtBQUFDLGFBQUksSUFBQSxFQUFBLEVBQUssSUFBTCxDQUFBLEVBQVMsSUFBRSxFQUFmLE1BQUEsRUFBd0IsSUFBeEIsQ0FBQSxFQUFBLEdBQUEsRUFBQTtBQUFnQyxjQUFFLEVBQUYsQ0FBRSxDQUFGLEVBQU8sRUFBQSxJQUFBLENBQU8sRUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBZCxDQUFjLENBQVAsQ0FBUDtBQUEyQixnQkFBQSxDQUFBO0FBQVMsY0FBTyxRQUFNLEVBQU4sQ0FBTSxDQUFOLEtBQWEsRUFBQSxDQUFBLElBQWIsRUFBQSxHQUFzQixFQUFBLENBQUEsRUFBQSxJQUFBLENBQVUsQ0FBQSxDQUFBLEVBQXZDLENBQXVDLENBQVYsQ0FBN0I7QUFBanlDLEtBQUEsRUFBZzFDLEVBQUEsR0FBQSxHQUFNLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBYTtBQUFDLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBYyxJQUFHLFFBQU0sRUFBVCxDQUFTLENBQVQsRUFBYztBQUFDLFlBQUEsQ0FBQSxFQUFLO0FBQUMsZUFBSSxJQUFBLENBQUEsRUFBSSxJQUFSLEVBQUEsRUFBYSxJQUFFLEVBQUEsQ0FBQSxFQUFmLE1BQUEsR0FBQTtBQUE0QixnQkFBRSxFQUFBLENBQUEsRUFBRixDQUFFLENBQUYsRUFBVSxJQUFFLEVBQVosQ0FBWSxDQUFaLEVBQWlCLElBQUUsRUFBbkIsQ0FBbUIsQ0FBbkIsRUFBd0IsTUFBQSxDQUFBLEdBQU0sRUFBQSxJQUFBLENBQU8sRUFBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsRUFBYixDQUFhLENBQVAsQ0FBTixHQUErQixFQUFBLElBQUEsQ0FBdkQsR0FBdUQsQ0FBdkQ7QUFBbUUsa0JBQUEsQ0FBQTtBQUFTLGdCQUFPLEVBQUEsQ0FBQSxJQUFQLEVBQUE7QUFBZTtBQUE5L0MsS0FBQSxFQUFnZ0QsRUFBQSxPQUFBLEdBQVUsVUFBQSxDQUFBLEVBQVc7QUFBQyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBa0IsSUFBRyxRQUFNLEVBQVQsQ0FBUyxDQUFULEVBQWM7QUFBQyxhQUFJLElBQUUsRUFBRixDQUFFLENBQUYsRUFBTyxJQUFQLEVBQUEsRUFBWSxJQUFaLENBQUEsRUFBZ0IsSUFBRSxFQUF0QixNQUFBLEVBQStCLElBQS9CLENBQUEsRUFBQSxHQUFBLEVBQUE7QUFBdUMsY0FBRSxFQUFGLENBQUUsQ0FBRixFQUFPLElBQUUsRUFBVCxDQUFTLENBQVQsRUFBYyxJQUFFLEVBQWhCLENBQWdCLENBQWhCLEVBQXFCLEVBQUEsSUFBQSxDQUFPLEVBQUEsSUFBQSxDQUE1QixDQUE0QixDQUFQLENBQXJCO0FBQXVDLGdCQUFBLENBQUE7QUFBUztBQUE5b0QsS0FBQSxFQUFncEQsSUFBRSxTQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsRUFBZTtBQUFDLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBYyxPQUFPLElBQUUsU0FBQSxDQUFBLEdBQVU7QUFBQyxlQUFPLEVBQUEsTUFBQSxJQUFVLEVBQUEsTUFBQSxHQUFWLElBQUEsR0FBQSxJQUFBLEdBQVAsR0FBQTtBQUFiLE9BQUEsRUFBcUQsU0FBTyxFQUFQLFVBQUEsSUFBcUIsSUFBRSxFQUFGLE9BQUEsRUFBWSxFQUFBLE9BQUEsR0FBVSxZQUFVO0FBQUMsZUFBTyxLQUFJLGNBQVksT0FBWixDQUFBLEdBQXFCLEVBQUEsS0FBQSxDQUFBLElBQUEsRUFBckIsU0FBcUIsQ0FBckIsR0FBNkMsS0FBeEQsQ0FBQTtBQUFqQyxPQUFBLEVBQWlHLElBQUUsRUFBbkcsU0FBQSxFQUErRyxFQUFBLFNBQUEsR0FBWSxZQUFVO0FBQUMsZUFBTyxLQUFJLGNBQVksT0FBWixDQUFBLEdBQXFCLEVBQUEsS0FBQSxDQUFBLElBQUEsRUFBckIsU0FBcUIsQ0FBckIsR0FBNkMsS0FBeEQsQ0FBQTtBQUF0SSxPQUFBLEVBQXNNLElBQUUsRUFBeE0sTUFBQSxFQUFpTixFQUFBLE1BQUEsR0FBUyxZQUFVO0FBQUMsZUFBTyxLQUFJLGNBQVksT0FBWixDQUFBLEdBQXFCLEVBQUEsS0FBQSxDQUFBLElBQUEsRUFBckIsU0FBcUIsQ0FBckIsR0FBNkMsS0FBeEQsQ0FBQTtBQUExUCxPQUFBLEtBQTRULElBQUUsRUFBRixrQkFBQSxFQUF1QixFQUFBLGtCQUFBLEdBQXFCLFlBQVU7QUFBQyxlQUFPLE1BQUksRUFBSixVQUFBLEdBQUEsR0FBQSxHQUFxQixNQUFJLEVBQUosVUFBQSxJQUFyQixHQUFBLEVBQTJDLGNBQVksT0FBWixDQUFBLEdBQXFCLEVBQUEsS0FBQSxDQUFBLElBQUEsRUFBckIsU0FBcUIsQ0FBckIsR0FBNkMsS0FBL0YsQ0FBQTtBQUEvYSxPQUE0RCxDQUE1RDtBQUFockQsS0FBQSxFQUF3c0UsRUFBQSxNQUFBLEdBQXhzRSxFQUFBLEVBQW90RSxFQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQWEsWUFBVTtBQUFDLFVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBUSxJQUFFLElBQUYsY0FBRSxFQUFGLEVBQXFCLEVBQUEsT0FBQSxHQUFVLENBQS9CLENBQUEsRUFBa0MsRUFBQSxJQUFBLENBQUEsTUFBQSxFQUFjLEVBQUEsU0FBQSxDQUFkLGdCQUFjLENBQWQsRUFBNEMsQ0FBOUUsQ0FBa0MsQ0FBbEMsRUFBa0YsUUFBTSxFQUFOLE9BQUEsS0FBa0IsRUFBQSxPQUFBLEdBQVUsRUFBQSxTQUFBLENBQTlHLG9CQUE4RyxDQUE1QixDQUFsRixFQUFpSixFQUFBLENBQUEsRUFBSSxFQUFKLE1BQUEsRUFBYSxFQUE5SixRQUFpSixDQUFqSixDQUEwSyxJQUFHO0FBQUMsVUFBQSxJQUFBO0FBQUosT0FBQSxDQUFhLE9BQUEsQ0FBQSxFQUFRO0FBQUMsWUFBQSxDQUFBLEVBQUksRUFBSixRQUFJLEVBQUo7QUFBaUIsY0FBQSxDQUFBO0FBQXI4RSxLQUFBLEVBQSs4RSxFQUFBLE1BQUEsQ0FBQSxLQUFBLEdBQWUsWUFBVTtBQUFDLFVBQUEsQ0FBQSxDQUFNLE9BQU8sSUFBRSxTQUFBLGFBQUEsQ0FBRixLQUFFLENBQUYsRUFBZ0MsRUFBQSxPQUFBLEdBQVUsRUFBMUMsUUFBQSxFQUFxRCxFQUFBLE1BQUEsR0FBUyxFQUE5RCxNQUFBLEVBQXVFLE1BQUssRUFBQSxHQUFBLEdBQU0sRUFBQSxTQUFBLENBQXpGLGtCQUF5RixDQUFYLENBQTlFO0FBQS8rRSxLQUFBLEVBQTBtRixFQUFBLE1BQUEsQ0FBQSxJQUFBLEdBQWMsRUFBeG5GLFFBQUEsRUFBbW9GLEVBQUEsTUFBQSxDQUFBLEVBQUEsR0FBWSxFQUEvb0YsTUFBQSxFQUF3cEYsRUFBQSxLQUFBLEdBQVEsWUFBVTtBQUFDLGFBQU8sRUFBQSxPQUFBLENBQUEsVUFBQSxHQUFzQixFQUFBLE1BQUEsQ0FBUyxFQUFBLFNBQUEsQ0FBdEMsZUFBc0MsQ0FBVCxHQUE3QjtBQUEzcUYsS0FBQSxFQUFrdkYsRUFBQSxTQUFBLEdBQVksRUFBQSxXQUFBLEdBQWMsRUFBNXdGLEtBQUEsRUFBb3hGLEVBQUEsS0FBQSxHQUFRLFVBQUEsQ0FBQSxFQUFXO0FBQUMsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBVSxPQUFPLElBQUUsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBYTtBQUFDLFlBQUEsQ0FBQSxDQUFNLE9BQU8sSUFBRSxFQUFGLElBQUEsRUFBUyxFQUFBLElBQUEsR0FBTyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQW1CO0FBQUMsaUJBQU8sRUFBRSxFQUFDLE1BQUQsQ0FBQSxFQUFRLEtBQVIsQ0FBQSxFQUFjLE9BQWQsQ0FBQSxFQUFzQixPQUF0QixDQUFBLEVBQThCLE1BQTlCLENBQUEsRUFBcUMsVUFBckMsQ0FBQSxFQUFnRCxLQUFsRCxDQUFFLEVBQUYsR0FBMEQsRUFBQSxLQUFBLENBQUEsQ0FBQSxFQUFqRSxTQUFpRSxDQUFqRTtBQUEzQyxTQUFBO0FBQXRCLE9BQUEsRUFBeUosSUFBRSxPQUEzSixjQUFBLEVBQWlMLE9BQUEsY0FBQSxHQUFzQixVQUFBLENBQUEsRUFBVztBQUFDLFlBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQVUsT0FBTyxJQUFFLElBQUEsQ0FBQSxDQUFGLENBQUUsQ0FBRixFQUFXLEVBQUEsQ0FBQSxFQUFYLENBQVcsQ0FBWCxFQUFrQixJQUFFLEVBQXBCLGdCQUFBLEVBQXVDLEVBQUEsT0FBQSxHQUF2QyxFQUFBLEVBQW9ELEVBQUEsZ0JBQUEsR0FBbUIsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFhO0FBQUMsaUJBQU8sRUFBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBZSxFQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUF0QixDQUFzQixDQUF0QjtBQUFyRixTQUFBLEVBQTBILElBQUUsRUFBNUgsZ0JBQUEsRUFBK0ksRUFBQSxnQkFBQSxHQUFtQixVQUFBLENBQUEsRUFBVztBQUFDLGlCQUFPLEVBQUEsUUFBQSxHQUFBLENBQUEsRUFBYSxFQUFBLElBQUEsQ0FBQSxDQUFBLEVBQXBCLENBQW9CLENBQXBCO0FBQTlLLFNBQUEsRUFBUCxDQUFBO0FBQTdOLE9BQUEsRUFBc2IsRUFBRSxPQUFGLGNBQUEsRUFBdGIsQ0FBc2IsQ0FBdGIsRUFBaWQsUUFBTSxPQUFOLGNBQUEsSUFBNkIsSUFBRSxPQUFGLGNBQUEsRUFBd0IsT0FBQSxjQUFBLEdBQXNCLFlBQVU7QUFBQyxZQUFBLENBQUEsQ0FBTSxPQUFPLElBQUUsSUFBRixDQUFFLEVBQUYsRUFBUSxFQUFSLENBQVEsQ0FBUixFQUFQLENBQUE7QUFBL0QsT0FBQSxFQUFzRixFQUFFLE9BQUYsY0FBQSxFQUFuSCxDQUFtSCxDQUFuSCxJQUErSSxLQUF2bUIsQ0FBQTtBQUFsekYsS0FBQSxFQUFpNkcsSUFBRSxTQUFBLENBQUEsR0FBVTtBQUFDLGFBQU8sRUFBQSxTQUFBLENBQUEsbUJBQUEsS0FBa0MsRUFBQSxLQUFBLENBQVEsVUFBQSxDQUFBLEVBQVc7QUFBQyxZQUFBLENBQUEsQ0FBTSxPQUFPLElBQUUsRUFBRixHQUFBLEVBQVEsRUFBQSxPQUFBLEtBQVksQ0FBWixDQUFBLEdBQWUsRUFBQSxDQUFBLEVBQUksRUFBSixNQUFBLEVBQWEsRUFBNUIsV0FBZSxDQUFmLEdBQTJDLEtBQTFELENBQUE7QUFBNUQsT0FBa0MsQ0FBbEMsRUFBK0gsRUFBQSxTQUFBLENBQUEsYUFBQSxJQUEyQixFQUEzQixLQUEyQixFQUEzQixHQUFxQyxLQUEzSyxDQUFBO0FBQTk2RyxLQUFBLEVBQWltSCxXQUFBLENBQUEsRUFBam1ILENBQWltSCxDQUFqbUgsRUFBaW5ILE9BQUEsT0FBQSxHQUFqbkgsQ0FBQTtBQUE5QixHQUFBLEVBQUEsSUFBQSxDQUFBLFNBQUEsR0FBNnFILFlBQVU7QUFBQyxRQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFzQixJQUFHLENBQUMsT0FBSixPQUFBLEVBQW1CLE1BQU0sSUFBQSxLQUFBLENBQU4saURBQU0sQ0FBTixDQUFtRSxJQUFFLFFBQUEsU0FBQSxHQUFGLEVBQUEsRUFBdUIsSUFBdkIsSUFBQSxFQUE4QixJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsVUFBQSxDQUFBLENBQU0sT0FBTyxRQUFNLEVBQU4sS0FBQSxJQUFlLGVBQWEsRUFBNUIsS0FBQSxJQUFxQyxRQUFBLE9BQUEsQ0FBckMsbUJBQXFDLENBQXJDLEVBQTBFLEVBQUEsS0FBQSxHQUExRSxVQUFBLEVBQTZGLEVBQUEsU0FBQSxHQUFZLEVBQUEsS0FBQSxHQUFRLFNBQU8sSUFBRSxRQUFBLFNBQUEsQ0FBVCx3QkFBUyxDQUFULElBQUEsQ0FBQSxHQUF4SCxDQUFBO0FBQWpELEtBQUEsRUFBb08sSUFBRSxTQUFBLENBQUEsR0FBVTtBQUFDLFVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBUSxPQUFPLElBQUUsU0FBTyxJQUFFLFFBQUEsU0FBQSxDQUFULGlCQUFTLENBQVQsSUFBQSxDQUFBLEdBQWlELEtBQUEsR0FBQSxDQUFTLEtBQUEsSUFBQSxDQUFVLE1BQUksRUFBdkIsS0FBUyxDQUFULEVBQW5ELElBQW1ELENBQW5ELEVBQXlGLEVBQUEsU0FBQSxHQUFZLEVBQUEsS0FBQSxHQUE1RyxDQUFBO0FBQXpQLEtBQUEsRUFBZ1gsSUFBRSxTQUFBLENBQUEsR0FBVTtBQUFDLGFBQU0saUJBQWUsRUFBZixLQUFBLElBQXdCLEVBQUEsU0FBQSxJQUFBLENBQUEsRUFBZSxRQUFBLE9BQUEsQ0FBZixnQkFBZSxDQUFmLEVBQWlELE1BQUksRUFBSixTQUFBLEdBQUEsR0FBQSxHQUFvQixLQUE3RixDQUFBLElBQXFHLEtBQTNHLENBQUE7QUFBN1gsS0FBQSxFQUFnZixJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsYUFBTSxjQUFZLEVBQVosS0FBQSxJQUFxQixRQUFBLE9BQUEsQ0FBQSxzQkFBQSxHQUF3QyxFQUFBLEtBQUEsR0FBeEMsWUFBQSxFQUE2RCxRQUFsRixLQUFrRixFQUFsRixJQUFtRyxLQUF6RyxDQUFBO0FBQTdmLEtBQUEsRUFBOG1CLElBQUUsU0FBQSxDQUFBLEdBQVU7QUFBQyxhQUFPLFFBQUEsU0FBQSxDQUFBLFdBQUEsS0FBZ0MsS0FBSSxFQUFBLEtBQUEsR0FBSixTQUFBLEVBQXNCLFFBQUEsT0FBQSxDQUF0QixtQkFBc0IsQ0FBdEIsRUFBMkQsSUFBRSxZQUFBLENBQUEsRUFBN0YsR0FBNkYsQ0FBN0YsSUFBaUgsS0FBeEgsQ0FBQTtBQUEzbkIsS0FBQSxFQUEydkIsSUFBRSxTQUFBLENBQUEsR0FBVTtBQUFDLGFBQU8sUUFBQSxDQUFBLElBQVMsY0FBVCxDQUFTLENBQVQsRUFBUCxHQUFBO0FBQXh3QixLQUFBLEVBQTh5QixJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsYUFBTyxRQUFBLFNBQUEsQ0FBQSxXQUFBLEtBQWdDLGlCQUFlLEVBQS9DLEtBQUEsSUFBd0QsUUFBQSxPQUFBLENBQUEsbUJBQUEsR0FBcUMsRUFBQSxLQUFBLEdBQXJDLFNBQUEsRUFBeEQsR0FBQSxJQUFvSCxLQUEzSCxDQUFBO0FBQTN6QixLQUFBLEVBQTg3QixFQUFBLE1BQUEsR0FBOTdCLENBQUEsRUFBQSxHQUFBLEVBQTY4QixRQUFBLEVBQUEsQ0FBQSxNQUFBLEVBQTc4QixDQUE2OEIsQ0FBNzhCLEVBQWsrQixRQUFBLEVBQUEsQ0FBQSxnQkFBQSxFQUFsK0IsQ0FBaytCLENBQWwrQixFQUFpZ0MsUUFBQSxFQUFBLENBQUEsSUFBQSxFQUFqZ0MsQ0FBaWdDLENBQWpnQztBQUF2SCxHQUFBLENBQTdxSCxJQUE2cUgsQ0FBN3FILFNBQTZxSCxDQUE3cUgsRUFBbzBKLFlBQVU7QUFBQyxRQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFnQixJQUFHLENBQUMsT0FBSixPQUFBLEVBQW1CLE1BQU0sSUFBQSxLQUFBLENBQU4sK0NBQU0sQ0FBTixDQUFpRSxJQUFBLEVBQUEsRUFBSyxJQUFFLENBQVAsQ0FBQSxFQUFVLElBQUUsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFXO0FBQUMsYUFBTyxRQUFBLE9BQUEsQ0FBQSxrQkFBQSxHQUFvQyxXQUFTLFFBQVQsS0FBQSxLQUF5QixJQUFFLENBQS9ELENBQW9DLENBQXBDLEVBQW1FLEVBQUEsSUFBQSxDQUExRSxDQUEwRSxDQUExRTtBQUF4QixLQUFBLEVBQTZHLElBQUUsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFXO0FBQUMsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBc0IsSUFBRSxFQUFGLEdBQUEsRUFBUSxJQUFFLEVBQVYsR0FBQSxFQUFnQixJQUFFLEVBQWxCLElBQUEsRUFBeUIsSUFBRSxFQUEzQixJQUFBLEVBQWtDLElBQUUsRUFBcEMsUUFBQSxFQUErQyxJQUFFLEVBQWpELElBQUEsRUFBd0QsRUFBeEQsS0FBd0QsRUFBeEQsRUFBa0UsRUFBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBVyxDQUFYLENBQUEsRUFBQSxDQUFBLEVBQWxFLENBQWtFLENBQWxFLEVBQXFGLElBQUUsRUFBdkYsT0FBQSxDQUFpRyxLQUFBLENBQUEsSUFBQSxDQUFBLEVBQUE7QUFBVyxZQUFFLEVBQUYsQ0FBRSxDQUFGLEVBQU8sRUFBQSxnQkFBQSxDQUFBLENBQUEsRUFBUCxDQUFPLENBQVA7QUFBK0IsY0FBTyxFQUFBLFFBQUEsSUFBWSxFQUFBLGdCQUFBLENBQW1CLEVBQS9CLFFBQVksQ0FBWixFQUEyQyxFQUFBLElBQUEsQ0FBbEQsQ0FBa0QsQ0FBbEQ7QUFBNVIsS0FBQSxFQUF5VixJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsYUFBTyxJQUFQLEVBQUE7QUFBdFcsS0FBQSxFQUFtWCxJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBZ0IsS0FBSSxRQUFBLE9BQUEsQ0FBQSxnQkFBQSxHQUFrQyxJQUFsQyxFQUFBLEVBQXVDLElBQXZDLENBQUEsRUFBMkMsSUFBRSxFQUFqRCxNQUFBLEVBQTBELElBQTFELENBQUEsRUFBQSxHQUFBLEVBQUE7QUFBa0UsWUFBRSxFQUFGLENBQUUsQ0FBRixFQUFPLElBQUUsRUFBQSxHQUFBLENBQUEsT0FBQSxDQUFBLGdCQUFBLEVBQStCLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBYTtBQUFDLGlCQUFNLFFBQUEsQ0FBQSxHQUFBLENBQUEsR0FBTixFQUFBO0FBQXRELFNBQVMsQ0FBVCxFQUEyRSxFQUFFLEVBQUEsSUFBQSxDQUFBLFdBQUEsS0FBQSxLQUFBLEdBQUYsQ0FBQSxJQUEzRSxDQUFBO0FBQTZHLFlBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQTtBQUFXLFlBQUUsRUFBRixDQUFFLENBQUYsRUFBTyxFQUFQLENBQU8sQ0FBUDtBQUFZLGNBQUEsR0FBQTtBQUF0bEIsS0FBQSxFQUFrbUIsV0FBVyxZQUFVO0FBQUMsYUFBTyxRQUFBLFNBQUEsQ0FBQSxVQUFBLE1BQWdDLENBQWhDLENBQUEsSUFBb0MsUUFBQSxFQUFBLENBQUEsY0FBQSxFQUEwQixZQUFVO0FBQUMsZUFBTyxLQUFHLElBQUUsQ0FBRixDQUFBLEVBQUgsR0FBQSxJQUFhLEtBQXBCLENBQUE7QUFBckMsT0FBQSxHQUFrRSxRQUFBLEVBQUEsQ0FBQSxJQUFBLEVBQWxFLENBQWtFLENBQWxFLEVBQXFGLFFBQUEsRUFBQSxDQUFBLE1BQUEsRUFBa0IsWUFBVTtBQUFDLGVBQU8sSUFBRSxDQUFULENBQUE7QUFBbEgsT0FBcUYsQ0FBckYsRUFBZ0ksUUFBQSxLQUFBLENBQWMsVUFBQSxDQUFBLEVBQVc7QUFBQyxZQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQWMsT0FBTyxJQUFFLEVBQUYsR0FBQSxFQUFRLElBQUUsRUFBVixLQUFBLEVBQWtCLEVBQUEsT0FBQSxLQUFZLENBQVosQ0FBQSxLQUFpQixJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsaUJBQU8sRUFBUCxDQUFPLENBQVA7QUFBYixTQUFBLEVBQTBCLElBQUUsRUFBNUIsSUFBQSxFQUFtQyxFQUFBLElBQUEsR0FBTyxVQUFBLENBQUEsRUFBVztBQUFDLGlCQUFPLEVBQUEsSUFBQSxHQUFBLENBQUEsRUFBUyxFQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQWhCLFNBQWdCLENBQWhCO0FBQXRELFNBQUEsRUFBakIsQ0FBQSxJQUFnSCxTQUFPLEVBQVAsVUFBQSxJQUFxQixFQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFBLENBQUEsRUFBNkIsQ0FBN0IsQ0FBQSxHQUFpQyxFQUFBLGdCQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsRUFBK0IsQ0FBckYsQ0FBc0QsQ0FBdEQsS0FBMkYsSUFBRSxFQUFGLGtCQUFBLEVBQXVCLEVBQUEsa0JBQUEsR0FBcUIsWUFBVTtBQUFDLGlCQUFPLE1BQUksRUFBSixVQUFBLEdBQUEsR0FBQSxHQUFxQixNQUFJLEVBQUosVUFBQSxLQUFtQixNQUFJLEVBQUosTUFBQSxJQUFjLEVBQUEsTUFBQSxJQUFqQyxJQUFBLEtBQXJCLEdBQUEsRUFBMkUsY0FBWSxPQUFaLENBQUEsR0FBcUIsRUFBQSxLQUFBLENBQUEsSUFBQSxFQUFyQixTQUFxQixDQUFyQixHQUE2QyxLQUEvSCxDQUFBO0FBQWxRLFNBQWdILENBQWhILEdBQTBZLEtBQW5hLENBQUE7QUFBeEssT0FBZ0ksQ0FBaEksRUFBb2xCLFFBQUEsUUFBQSxHQUFpQixFQUFDLE9BQUQsQ0FBQSxFQUFTLE9BQWxwQixDQUF5b0IsRUFBem9CLElBQTRwQixLQUFucUIsQ0FBQTtBQUF0QixLQUFBLEVBQWxtQixDQUFrbUIsQ0FBbG1CO0FBQS9HLEdBQUEsQ0FBcDBKLElBQW8wSixDQUFwMEosU0FBbzBKLENBQXAwSixFQUFxdU0sWUFBVTtBQUFDLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBYyxJQUFHLENBQUgsT0FBQSxFQUFZLE1BQU0sSUFBQSxLQUFBLENBQU4sZ0RBQU0sQ0FBTixDQUFrRSxLQUFJLElBQUUsQ0FBQSxJQUFBLEVBQUYsTUFBRSxDQUFGLEVBQWdCLElBQWhCLENBQUEsRUFBb0IsSUFBRSxFQUExQixNQUFBLEVBQW1DLElBQW5DLENBQUEsRUFBQSxHQUFBLEVBQUE7QUFBMkMsVUFBRSxFQUFGLENBQUUsQ0FBRixFQUFPLENBQUMsU0FBQSxhQUFBLENBQXVCLDJCQUFBLENBQUEsR0FBdkIsSUFBQSxLQUF5RCxhQUFBLGdCQUFBLEtBQTFELENBQUEsTUFBK0YsUUFBTSxRQUFOLE9BQUEsS0FBd0IsUUFBQSxPQUFBLEdBQXhCLEVBQUEsR0FBNEMsUUFBTSxDQUFDLElBQUUsUUFBSCxPQUFBLEVBQU4sTUFBQSxLQUFtQyxFQUFBLE1BQUEsR0FBL0UsRUFBNEMsQ0FBNUMsRUFBNEYsUUFBQSxPQUFBLENBQUEsTUFBQSxDQUFBLE1BQUEsR0FBbE0sQ0FBTyxDQUFQO0FBQTNDO0FBQXZHLEdBQUEsQ0FBcnVNLElBQXF1TSxDQUFydU0sU0FBcXVNLENBQXJ1TSxFQUFzbU4sWUFBVTtBQUFDLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUE4QixJQUFHLENBQUMsT0FBSixPQUFBLEVBQW1CLE1BQU0sSUFBQSxLQUFBLENBQU4sMENBQU0sQ0FBTixDQUE0RCxJQUFBLHNFQUFBLEVBQXlFLElBQXpFLHVDQUFBLEVBQW1ILElBQUUsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFXO0FBQUMsVUFBQSxDQUFBLENBQU0sT0FBTyxJQUFFLFNBQUEsYUFBQSxDQUFGLEtBQUUsQ0FBRixFQUFnQyxFQUFBLFNBQUEsR0FBaEMsQ0FBQSxFQUE4QyxFQUFBLFFBQUEsQ0FBckQsQ0FBcUQsQ0FBckQ7QUFBdkksS0FBQSxFQUEyTSxJQUFFLElBQTdNLElBQUEsRUFBb04sSUFBRSxTQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVc7QUFBQyxhQUFPLEVBQUEsQ0FBQSxHQUFLLEVBQUEsU0FBQSxJQUFhLE1BQXpCLENBQUE7QUFBbE8sS0FBQSxFQUFrUSxJQUFFLFNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBVztBQUFDLGFBQU8sRUFBQSxTQUFBLEdBQVksRUFBQSxTQUFBLENBQUEsT0FBQSxDQUFvQixJQUFBLE1BQUEsQ0FBVyxVQUFRLEVBQUEsS0FBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLENBQVIsR0FBUSxDQUFSLEdBQVgsT0FBQSxFQUFwQixJQUFvQixDQUFwQixFQUFuQixHQUFtQixDQUFuQjtBQUFoUixLQUFBLEVBQXFYLElBQXJYLEVBQUEsRUFBMFgsSUFBRSxTQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFhO0FBQUMsYUFBTyxFQUFBLENBQUEsR0FBSyxRQUFNLEVBQU4sQ0FBTSxDQUFOLElBQVksYUFBYSxFQUE5QixDQUE4QixDQUFiLENBQWpCLEVBQW9DLEVBQUEsQ0FBQSxJQUFLLFdBQVcsWUFBVTtBQUFDLGVBQU8sRUFBQSxDQUFBLEdBQUssT0FBTyxFQUFuQixDQUFtQixDQUFuQjtBQUF0QixPQUFBLEVBQStDLE1BQS9GLENBQWdELENBQWhEO0FBQTFZLEtBQUEsRUFBaWYsSUFBRSxTQUFBLENBQUEsQ0FBQSxDQUFBLEVBQVc7QUFBQyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBWSxJQUFFLEVBQUMsS0FBRCxLQUFBLEVBQVcsTUFBWCxJQUFBLEVBQXFCLFFBQXJCLEVBQUEsRUFBK0IsUUFBakMsQ0FBRSxFQUFGLENBQTJDLEtBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQTtBQUFXLFlBQUcsSUFBRSxFQUFGLENBQUUsQ0FBRixFQUFPLEtBQVYsQ0FBQSxFQUFlLE9BQU8sSUFBRSxLQUFBLEtBQUEsQ0FBVyxJQUFiLENBQUUsQ0FBRixFQUFrQixDQUFBLENBQUEsRUFBekIsQ0FBeUIsQ0FBekI7QUFBK0IsY0FBTSxDQUFBLEtBQUEsRUFBTixFQUFNLENBQU47QUFBL21CLEtBQUEsRUFBaW9CLElBQUUsU0FBQSxDQUFBLEdBQVU7QUFBQyxVQUFBLENBQUEsRUFBQSxDQUFBLENBQVEsT0FBTyxJQUFFLEVBQUYsQ0FBRSxDQUFGLEVBQU8sU0FBQSxJQUFBLENBQUEsV0FBQSxDQUFQLENBQU8sQ0FBUCxFQUFvQyxRQUFNLFFBQU4sU0FBQSxJQUF5QixRQUFBLFNBQUEsQ0FBekIsV0FBeUIsQ0FBekIsS0FBMEQsRUFBQSxXQUFBLENBQWMsRUFBZCxDQUFjLENBQWQsR0FBb0IsSUFBRSxFQUFBLGFBQUEsQ0FBdEIsbUJBQXNCLENBQXRCLEVBQTJELElBQUUsU0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFXO0FBQUMsZUFBTyxFQUFBLGNBQUEsSUFBbUIsUUFBQSxTQUFBLENBQTFCLE1BQTBCLEVBQTFCO0FBQXpFLE9BQUEsRUFBK0gsUUFBTSxFQUFOLGdCQUFBLEdBQXlCLEVBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQUEsQ0FBQSxFQUE2QixDQUF0RCxDQUF5QixDQUF6QixHQUEwRCxFQUFBLFdBQUEsQ0FBQSxPQUFBLEVBQXZSLENBQXVSLENBQW5QLENBQXBDLEVBQWlULEVBQUUsZ0JBQWMsUUFBalUsS0FBaVQsQ0FBalQsRUFBZ1YsSUFBRSxFQUFBLGFBQUEsQ0FBelYscUJBQXlWLENBQXpWO0FBQXRwQixLQUFBLEVBQXVoQyxJQUFFLFNBQUEsQ0FBQSxHQUFVO0FBQUMsYUFBTyxLQUFJLFFBQUEsRUFBQSxDQUFBLElBQUEsRUFBZ0IsWUFBVTtBQUFDLGVBQU8sRUFBQSxpQkFBQSxHQUFxQixFQUFyQixlQUFxQixDQUFyQixFQUF3QyxFQUFBLGtCQUFBLEVBQXhDLENBQXdDLENBQXhDLEVBQWdFLEVBQUEsa0JBQUEsRUFBdkUsQ0FBdUUsQ0FBdkU7QUFBL0IsT0FBSSxDQUFKLEVBQWdJLFFBQUEsRUFBQSxDQUFBLE1BQUEsRUFBa0IsWUFBVTtBQUFDLGVBQU8sRUFBQSxlQUFBLEdBQW1CLEVBQW5CLGlCQUFtQixDQUFuQixFQUF3QyxFQUFBLG9CQUFBLEVBQXhDLENBQXdDLENBQXhDLEVBQWtFLEVBQUEsb0JBQUEsRUFBekUsQ0FBeUUsQ0FBekU7QUFBN0osT0FBZ0ksQ0FBaEksRUFBa1EsUUFBQSxFQUFBLENBQUEsc0JBQUEsRUFBa0MsWUFBVTtBQUFDLGVBQU8sRUFBQSx1QkFBQSxHQUEyQixFQUFsQyxvQkFBa0MsQ0FBbEM7QUFBL1MsT0FBa1EsQ0FBbFEsRUFBMlcsUUFBQSxFQUFBLENBQUEsZ0JBQUEsRUFBNEIsWUFBVTtBQUFDLFlBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQVUsT0FBTyxFQUFBLG9CQUFBLEdBQXdCLEVBQXhCLHVCQUF3QixDQUF4QixFQUFtRCxJQUFFLEVBQUUsUUFBQSxTQUFBLENBQXZELFNBQXFELENBQXJELEVBQW9GLElBQUUsRUFBdEYsQ0FBc0YsQ0FBdEYsRUFBMkYsSUFBRSxFQUE3RixDQUE2RixDQUE3RixFQUFrRyxFQUFBLFlBQUEsQ0FBQSxxQkFBQSxFQUFsRyxDQUFrRyxDQUFsRyxFQUEwSSxFQUFBLFlBQUEsQ0FBQSxvQkFBQSxFQUFqSixDQUFpSixDQUFqSjtBQUE1WixPQUEyVyxDQUEzVyxFQUFzbEIsUUFBQSxFQUFBLENBQUEsbUJBQUEsRUFBK0IsWUFBVTtBQUFDLGVBQU8sRUFBQSwwQ0FBQSxHQUE4QyxFQUFBLFlBQUEsQ0FBQSxxQkFBQSxFQUE5QyxJQUE4QyxDQUE5QyxFQUF5RixFQUFBLFlBQUEsQ0FBQSxvQkFBQSxFQUFoRyxJQUFnRyxDQUFoRztBQUFob0IsT0FBc2xCLENBQXRsQixFQUE0d0IsUUFBQSxFQUFBLENBQUEsbUJBQUEsRUFBK0IsWUFBVTtBQUFDLGVBQU8sRUFBQSxnQ0FBQSxFQUFBLENBQUEsR0FBc0MsRUFBQSxnQ0FBQSxFQUE3QyxDQUE2QyxDQUE3QztBQUF0ekIsT0FBNHdCLENBQTV3QixFQUEyNEIsUUFBQSxFQUFBLENBQUEsbUJBQUEsRUFBK0IsWUFBVTtBQUFDLGVBQU8sRUFBQSxtQ0FBQSxFQUFBLENBQUEsR0FBeUMsRUFBQSxtQ0FBQSxFQUFoRCxDQUFnRCxDQUFoRDtBQUE1N0IsT0FBazVCLENBQWw1QjtBQUFwaUMsS0FBQSxFQUE0akUsZUFBYSxTQUFiLFVBQUEsR0FBQSxHQUFBLEdBQXFDLFFBQU0sU0FBTixnQkFBQSxHQUFnQyxTQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLEVBQStDLENBQS9FLENBQWdDLENBQWhDLElBQW9GLElBQUUsU0FBRixrQkFBQSxFQUE4QixTQUFBLGtCQUFBLEdBQTRCLFlBQVU7QUFBQyxhQUFNLGVBQWEsU0FBYixVQUFBLElBQUEsR0FBQSxFQUFzQyxjQUFZLE9BQVosQ0FBQSxHQUFxQixFQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQXJCLFNBQXFCLENBQXJCLEdBQTZDLEtBQXpGLENBQUE7QUFBMXZFLEtBQWltRSxDQUFqbUU7QUFBeEgsR0FBQSxDQUF0bU4sSUFBc21OLENBQXRtTixTQUFzbU4sQ0FBdG1OOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxFQUFDLFlBQVU7QUFDVixNQUFJLGVBQWUsSUFBQSxlQUFBLENBQW9CLE9BQUEsUUFBQSxDQUF2QyxNQUFtQixDQUFuQjtBQUNBLE1BQUcsYUFBQSxHQUFBLENBQUgsTUFBRyxDQUFILEVBQTRCO0FBQzNCLEtBQUEsY0FBQSxFQUFBLEdBQUEsQ0FBc0IsYUFBQSxHQUFBLENBQXRCLE1BQXNCLENBQXRCO0FBQ0EsS0FBQSxlQUFBLEVBQUEsR0FBQSxDQUF1QixhQUFBLEdBQUEsQ0FBdkIsT0FBdUIsQ0FBdkI7QUFDQSxLQUFBLGVBQUEsRUFBQSxHQUFBLENBQXVCLGFBQUEsR0FBQSxDQUF2QixPQUF1QixDQUF2QjtBQUNBLEtBQUEsa0JBQUEsRUFBQSxHQUFBLENBQTBCLGFBQUEsR0FBQSxDQUExQixNQUEwQixDQUExQjtBQUNBLEtBQUEsZUFBQSxFQUFBLEdBQUEsQ0FBdUIsYUFBQSxHQUFBLENBQXZCLE9BQXVCLENBQXZCOztBQUVBLEtBQUEsTUFBQSxFQUFBLElBQUEsQ0FBQSxNQUFBLEVBQXVCLFlBQVc7QUFDakMsaUJBQUEsR0FBQSxDQUFBLE9BQUEsS0FBMkIsRUFBQSw4QkFBQSxFQUFBLE9BQUEsQ0FBM0IsTUFBMkIsQ0FBM0I7QUFDQSxZQUFBLFlBQUEsQ0FBcUIsRUFBQyxNQUF0QixDQUFxQixFQUFyQixFQUFBLFNBQUEsRUFBQSxFQUFBO0FBRkQsSUFBQTtBQUtBO0FBZEYsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsS0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBSzs7QUFFMUIsTUFBTSxnQkFBZ0IsRUFBdEIsaUJBQXNCLENBQXRCO0FBQ0EsTUFBTSxXQUFXLEVBQUEsc0JBQUEsRUFBQSxLQUFBLEdBQUEsV0FBQSxDQUFqQiw2QkFBaUIsQ0FBakI7QUFDQSxNQUFNLGFBQWEsRUFBbkIsNkJBQW1CLENBQW5CO0FBQ0EsTUFBTSxPQUFPLEVBQWIsdUJBQWEsQ0FBYjtBQUNBLE1BQU0sUUFBUSxFQUFkLHdCQUFjLENBQWQ7QUFDQSxNQUFNLFlBQVksRUFBbEIsOEJBQWtCLENBQWxCO0FBQ0EsTUFBTSxZQUFZLEVBQWxCLDhCQUFrQixDQUFsQjtBQUNBLE1BQU0sUUFBUSxLQUFkLE1BQUE7QUFDQSxNQUFJLElBQUosQ0FBQTtBQUNBLFNBQU0sSUFBTixLQUFBLEVBQWdCO0FBQ2YsY0FBQSxNQUFBLENBQWtCLFNBQWxCLEtBQWtCLEVBQWxCO0FBQ0E7QUFDQTs7QUFJRCxNQUFNLE1BQU0sRUFBWixzQkFBWSxDQUFaO0FBQ0EsTUFBQSxLQUFBLENBQVUsWUFBVTtBQUNsQixPQUFNLFFBQVEsRUFBQSxJQUFBLEVBQWQsS0FBYyxFQUFkOztBQUVBLFFBQUEsV0FBQSxDQUFBLDhCQUFBO0FBQ0EsUUFBQSxFQUFBLENBQUEsS0FBQSxFQUFBLFFBQUEsQ0FBQSw4QkFBQTs7QUFFQSxPQUFBLFdBQUEsQ0FBQSw2QkFBQTtBQUNBLE9BQUEsRUFBQSxDQUFBLEtBQUEsRUFBQSxRQUFBLENBQUEsNkJBQUE7O0FBRUEsaUJBQUEsS0FBQTtBQVRGLEdBQUE7O0FBWUEsTUFBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQU07QUFDOUIsT0FBTSxRQUFRLEVBQUEsOEJBQUEsRUFBZCxLQUFjLEVBQWQ7QUFDQSxPQUFNLFlBQVksUUFBTSxRQUFOLENBQUEsR0FBZ0IsUUFBaEIsQ0FBQSxHQUFsQixDQUFBOztBQUVBLFFBQUEsV0FBQSxDQUFBLDhCQUFBO0FBQ0EsUUFBQSxFQUFBLENBQUEsU0FBQSxFQUFBLFFBQUEsQ0FBQSw4QkFBQTs7QUFFQSxPQUFBLFdBQUEsQ0FBQSw2QkFBQTtBQUNBLE9BQUEsRUFBQSxDQUFBLFNBQUEsRUFBQSxRQUFBLENBQUEsNkJBQUE7QUFDQSxpQkFBQSxTQUFBO0FBVEQsR0FBQTtBQVdBLE1BQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFNO0FBQzlCLGlCQUFBLFFBQUE7QUFDQSxPQUFNLFFBQVEsRUFBQSw4QkFBQSxFQUFkLEtBQWMsRUFBZDtBQUNBLE9BQU0sWUFBWSxRQUFsQixDQUFBOztBQUVBLFFBQUEsV0FBQSxDQUFBLDhCQUFBO0FBQ0EsUUFBQSxFQUFBLENBQUEsU0FBQSxFQUFBLFFBQUEsQ0FBQSw4QkFBQTs7QUFFQSxPQUFBLFdBQUEsQ0FBQSw2QkFBQTtBQUNBLE9BQUEsRUFBQSxDQUFBLFNBQUEsRUFBQSxRQUFBLENBQUEsNkJBQUE7QUFDQSxpQkFBQSxTQUFBO0FBVkQsR0FBQTtBQVlBLFlBQUEsS0FBQSxDQUFnQixZQUFVO0FBQ3pCLGlCQUFBLFFBQUE7QUFDQTtBQUZELEdBQUE7O0FBS0EsWUFBQSxLQUFBLENBQWdCLFlBQVU7QUFDekI7QUFERCxHQUFBOztBQUlBLE1BQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUEsUUFBQSxFQUFjO0FBQ2xDLFNBQUEsV0FBQSxDQUFBLCtCQUFBO0FBQ0EsT0FBRyxXQUFBLENBQUEsSUFBSCxLQUFBLEVBQXNCLENBQUU7QUFDdEI7QUFERixJQUFBLE1BRU8sSUFBRyxZQUFILENBQUEsRUFBZ0I7QUFDckI7QUFDRDtBQU5ILEdBQUE7O0FBU0E7OztBQUdBLE1BQUksV0FBSixJQUFBOztBQUVBLE1BQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQU07QUFDM0IsY0FBVyxZQUFBLGdCQUFBLEVBQVgsSUFBVyxDQUFYO0FBREQsR0FBQTtBQUdBOztBQUVBLGdCQUFBLEtBQUEsQ0FBb0IsWUFBSztBQUN4QixpQkFBQSxRQUFBO0FBREQsR0FBQSxFQUVHLFlBQUE7QUFBQSxVQUZILGVBRUc7QUFGSCxHQUFBOztBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBM0lELEVBQUE7O21CQStJQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0lBLFFBQUEsaUJBQUEsS0FBQSxDQUFBOztBQUVBLFdBQUEsZ0JBQUEsQ0FBQSxxQkFBQSxFQUErQyxVQUFBLENBQUEsRUFBTztBQUNsRDtBQUNBO0FBQ0EseUJBQUEsQ0FBQTtBQUNBLFlBQU0sU0FBUyxTQUFBLGNBQUEsQ0FBZixhQUFlLENBQWY7QUFDQSxlQUFBLEtBQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQTs7QUFFQSxZQUFHLENBQUMsQ0FBQSxHQUFBLFNBQUEsU0FBQSxFQUFKLGFBQUksQ0FBSixFQUE2QjtBQUN6QixjQUFBLGNBQUEsRUFBQSxPQUFBLENBQUEsTUFBQTtBQUNBLHVCQUFXLFlBQUk7QUFBQyxrQkFBQSxjQUFBLEVBQUEsT0FBQSxDQUFBLE1BQUE7QUFBaEIsYUFBQSxFQUFBLEtBQUE7QUFDQSxhQUFBLEdBQUEsU0FBQSxTQUFBLEVBQUEsYUFBQSxFQUFBLENBQUE7QUFDSDs7QUFFRCxZQUFBLE1BQUEsRUFBVTtBQUNOLG1CQUFBLGdCQUFBLENBQUEsT0FBQSxFQUFpQyxVQUFBLENBQUEsRUFBTztBQUNwQztBQUNBO0FBQ0EsdUJBQUEsS0FBQSxDQUFBLE9BQUEsR0FBQSxNQUFBO0FBQ0Esd0JBQUEsR0FBQSxDQUFBLGVBQUE7QUFDQTtBQUNBLCtCQUFBLE1BQUEsR0FBQSxJQUFBLENBQ00sVUFBQSxHQUFBLEVBQUE7QUFBQSwyQkFBTyxRQUFBLEdBQUEsQ0FEYixHQUNhLENBQVA7QUFETixpQkFBQSxFQUFBLEtBQUEsQ0FFTyxVQUFBLEtBQUEsRUFBUztBQUFFLDRCQUFBLEdBQUEsQ0FBQSxXQUFBLEtBQUE7QUFGbEIsaUJBQUE7O0FBTUE7QUFDQSwrQkFBQSxVQUFBLENBQUEsSUFBQSxDQUNNLFVBQUEsWUFBQSxFQUFrQjtBQUN0Qix3QkFBSSxhQUFBLE9BQUEsS0FBSixVQUFBLEVBQXlDO0FBQ3ZDLGdDQUFBLEdBQUEsQ0FBQSwrQkFBQTtBQURGLHFCQUFBLE1BRU87QUFDTCxnQ0FBQSxHQUFBLENBQUEsZ0NBQUE7QUFDRDtBQUNELHFDQUFBLElBQUE7QUFQRixpQkFBQTtBQWJKLGFBQUE7QUF1Qkg7QUFyQ0wsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsTUFBTSxJQUFJLFNBQUosQ0FBSSxHQUFWLENBQUEsQ0FBQTs7b0JBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLEtBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSzs7QUFHckIsTUFBTSxNQUFNLEVBQVosUUFBWSxDQUFaO0FBQ0EsTUFBQSxXQUFBLENBQUEsZUFBQTtBQUpELEVBQUE7O21CQVFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTyxRQUFNLFlBQUEsUUFBQSxTQUFBLEdBQVksU0FBWixTQUFZLENBQUEsSUFBQSxFQUFBLEtBQUEsRUFBMkI7QUFBQSxZQUFiLE9BQWEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxHQUEzQixDQUEyQjs7QUFDaEQsWUFBSSxVQUFKLEVBQUE7O0FBRUgsWUFBSSxPQUFPLElBQVgsSUFBVyxFQUFYO0FBQ0EsYUFBQSxPQUFBLENBQWEsS0FBQSxPQUFBLEtBQWtCLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEdBQS9CLElBQUE7QUFDQSxrQkFBVSxlQUFlLEtBQXpCLFdBQXlCLEVBQXpCOztBQUVHLGlCQUFBLE1BQUEsR0FBa0IsT0FBQSxHQUFBLElBQWMsU0FBZCxFQUFBLElBQUEsT0FBQSxHQUFsQixVQUFBO0FBUEcsS0FBQTtBQVNBLFFBQU0sWUFBQSxRQUFBLFNBQUEsR0FBWSxTQUFaLFNBQVksQ0FBQSxJQUFBLEVBQVU7QUFDL0IsWUFBSSxTQUFTLE9BQWIsR0FBQTtBQUNBLFlBQUksS0FBSyxTQUFBLE1BQUEsQ0FBQSxLQUFBLENBQVQsR0FBUyxDQUFUO0FBQ0EsYUFBSSxJQUFJLElBQVIsQ0FBQSxFQUFZLElBQUksR0FBaEIsTUFBQSxFQUFBLEdBQUEsRUFBK0I7QUFDM0IsZ0JBQUksSUFBSSxHQUFSLENBQVEsQ0FBUjtBQUNBLG1CQUFPLEVBQUEsTUFBQSxDQUFBLENBQUEsS0FBUCxHQUFBLEVBQUE7QUFBeUIsb0JBQUksRUFBQSxTQUFBLENBQUEsQ0FBQSxFQUFjLEVBQWxCLE1BQUksQ0FBSjtBQUN6QixpQkFBSSxFQUFBLE9BQUEsQ0FBQSxNQUFBLEtBQUosQ0FBQSxFQUE0QixPQUFPLEVBQUEsU0FBQSxDQUFZLE9BQVosTUFBQSxFQUEwQixFQUFqQyxNQUFPLENBQVA7QUFDL0I7QUFDRCxlQUFBLElBQUE7QUFSRyxLQUFBO0FBVUEsUUFBTSxlQUFBLFFBQUEsWUFBQSxHQUFlLFNBQWYsWUFBZSxDQUFBLElBQUEsRUFBVTtBQUNsQyxpQkFBQSxNQUFBLEdBQWtCLE9BQWxCLG1EQUFBO0FBREcsS0FBQTs7QUFJUDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFhO0FBQUEsTUFBWixLQUFZLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBYixJQUFhOztBQUNyQyxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBbUMsVUFBQSxDQUFBLEVBQUs7QUFDdkMsT0FBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUdBO0FBQ0EsT0FBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFlBQUEsRUFBRCxNQUFBLElBQXVDLENBQUMsTUFBQSxPQUFBLENBQUEsUUFBQSxFQUEzQyxNQUFBLEVBQTBFO0FBQ3pFLEtBQUEsR0FBQSxXQUFBLE9BQUE7QUFFQTtBQUNELE9BQUcsQ0FBQyxNQUFBLE9BQUEsQ0FBQSxnQkFBQSxFQUFELE1BQUEsSUFBMkMsQ0FBQyxNQUFBLE9BQUEsQ0FBQSwyQkFBQSxFQUEvQyxNQUFBLEVBQWlHO0FBQ2hHLE1BQUEsZ0JBQUEsRUFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQSxNQUFBLDJCQUFBLEVBQUEsSUFBQTtBQUNBO0FBWkYsR0FBQTtBQURELEVBQUE7O21CQW1CQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxLQUFNLFdBQVcsU0FBWCxRQUFXLEdBQUs7QUFDckIsTUFBSTtBQUNILEtBQUEsY0FBQSxFQUFBLElBQUEsQ0FBdUIsVUFBQSxDQUFBLEVBQVc7QUFDakMsUUFBTSxRQUFRLEVBQWQsSUFBYyxDQUFkO0FBQ0EsUUFBTSxTQUFTLE1BQUEsSUFBQSxDQUFmLEtBQWUsQ0FBZjtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBSEQsSUFBQTtBQURELEdBQUEsQ0FPRSxPQUFBLENBQUEsRUFBUTtBQUNULFdBQUEsS0FBQSxDQUFBLFNBQUEsRUFBQSxDQUFBO0FBQ0E7QUFWRixFQUFBOzttQkFhQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsVUFBQSwrQkFBQSxFQUFBLElBQUEsQ0FBNEMsVUFBQSxRQUFBLEVBQUE7QUFBQSxlQUFZLFNBQXhELElBQXdELEVBQVo7QUFBNUMsS0FBQSxFQUFBLElBQUEsQ0FBOEUsVUFBQSxDQUFBLEVBQUs7QUFDL0UsVUFBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLENBQUE7QUFESixLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBOzs7QUFaQTtBQWVBLFVBQUEsS0FBQSxDQUFBLEVBQUEsRUFBbUI7QUFDakIsTUFBSSxTQUFBLFdBQUEsR0FBdUIsU0FBQSxVQUFBLEtBQXZCLFVBQUEsR0FBNEQsU0FBQSxVQUFBLEtBQWhFLFNBQUEsRUFBa0c7QUFDaEc7QUFERixHQUFBLE1BRU87QUFDTCxZQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBQSxFQUFBO0FBQ0Q7QUFDRjtBQTdCRDs7O0FBTEE7OztBQW9DQSxPQUFNLFlBQVc7QUFDaEI7QUFDQSxHQUFBLEdBQUEsTUFBQSxPQUFBO0FBQ0EsR0FBQSxHQUFBLHVCQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsbUJBQUEsT0FBQTtBQUNBO0FBQ0EsR0FBQSxHQUFBLGVBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxZQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsYUFBQSxPQUFBO0FBQ0EsR0FBQSxHQUFBLGtCQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsZ0JBQUEsT0FBQTs7QUFLQTtBQUNBLE1BQUksV0FBVyxTQUFBLElBQUEsQ0FBYyxVQUFkLFNBQUEsS0FBc0MsYUFBQSxJQUFBLENBQWtCLFVBQXZFLE1BQXFELENBQXJEO0FBQ0csTUFBSSxPQUFBLFFBQUEsQ0FBQSxJQUFBLElBQUosUUFBQSxFQUFzQztBQUNsQyxjQUFXLFlBQVk7QUFDbkIsUUFBSSxPQUFPLE9BQUEsUUFBQSxDQUFYLElBQUE7QUFDQSxXQUFBLFFBQUEsQ0FBQSxJQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUEsUUFBQSxDQUFBLElBQUEsR0FBQSxJQUFBO0FBSEosSUFBQSxFQUFBLEdBQUE7QUFLSDs7QUFFSixJQUFBLGFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBd0MsVUFBQSxDQUFBLEVBQUc7QUFDMUMsT0FBTSxPQUFPLEVBQWIsTUFBYSxDQUFiO0FBQ0EsT0FBTSxhQUFhLEVBQW5CLGFBQW1CLENBQW5CO0FBQ0EsY0FBQSxXQUFBLENBQUEsb0JBQUE7QUFDQSxjQUFXLFlBQVU7QUFBQyxTQUFBLFdBQUEsQ0FBQSxVQUFBO0FBQXRCLElBQUEsRUFBQSxHQUFBOztBQUVBLElBQUEsR0FBQSxXQUFBLE9BQUE7QUFORCxHQUFBOztBQVNBLElBQUEsNEJBQUEsRUFBQSxVQUFBLENBQTJDLEVBQUUsUUFBN0MsWUFBMkMsRUFBM0M7O0FBRUEsSUFBQSxhQUFBLEVBQUEsSUFBQSxDQUFzQixZQUFVO0FBQy9CLE9BQU0sSUFBSSxFQUFWLElBQVUsQ0FBVjtBQUNBLEtBQUEsSUFBQSxDQUFPLEVBQUEsSUFBQSxDQUFQLFdBQU8sQ0FBUCxFQUE0QjtBQUMzQixpQkFBYSxFQUFDLEdBQUcsRUFBQyxTQUFELEdBQUEsRUFBZSxVQUFuQixLQUFJLEVBQUosRUFBcUMsR0FBRyxFQUFDLFNBQUQsTUFBQSxFQUFrQixVQUExRCxLQUF3QyxFQUF4QyxFQUE0RSxHQUFHLEVBQUMsU0FBRCxHQUFBLEVBQWUsVUFBOUYsSUFBK0UsRUFBL0U7QUFEYyxJQUE1QjtBQUZELEdBQUE7O0FBT0EsSUFBQSx1QkFBQSxFQUFBLE1BQUEsQ0FBa0MsWUFBVTtBQUMzQyxLQUFBLG9CQUFBLEVBQUEsT0FBQSxDQUFBLE9BQUE7QUFERCxHQUFBOztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE1BQUEsT0FBQTtBQUNBO0FBQ0EsTUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQSxJQUFBLEVBQWdCO0FBQy9CLE9BQUksTUFBTSxTQUFBLGFBQUEsQ0FBVixPQUFVLENBQVY7QUFDQSxPQUFBLFlBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTtBQUNBLFlBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBO0FBQ0EsT0FBQSxNQUFBO0FBQ0EsWUFBQSxXQUFBLENBQUEsTUFBQTtBQUNBLFlBQUEsSUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBO0FBTlQsR0FBQTs7QUFZQSxNQUFNLFVBQVUsRUFBaEIsY0FBZ0IsQ0FBaEI7QUFDQSxVQUFBLElBQUEsQ0FBYSxRQUFBLElBQUEsQ0FBYixNQUFhLENBQWI7O0FBRUEsSUFBQSxnQkFBQSxFQUFBLElBQUEsQ0FBQSxrQkFBQSxFQUE2QyxVQUFBLENBQUEsRUFBRztBQUMvQyxPQUFNLFNBQVMsRUFBRSxFQUFGLE1BQUEsRUFBQSxNQUFBLENBQWYsUUFBZSxDQUFmO0FBQ0EsT0FBTSxVQUFVLE9BQUEsSUFBQSxDQUFoQixjQUFnQixDQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU0sV0FBVyxFQUFFLE9BQUEsSUFBQSxDQUFuQixrQkFBbUIsQ0FBRixDQUFqQjtBQUNBLFlBQUEsUUFBQSxDQUFBLG9CQUFBO0FBQ0EsT0FBTSxXQUFXLFNBQUEsSUFBQSxHQUFqQixJQUFpQixFQUFqQjtBQUNBLFdBQUEsR0FBQSxDQUFBLFFBQUE7QUFDQSxtQkFBQSxRQUFBO0FBQ0E7O0FBRUEsV0FBQSxJQUFBLENBQWEsUUFBQSxJQUFBLENBQWIsUUFBYSxDQUFiO0FBQ0EsZ0JBQUEsT0FBQTtBQUNBLGNBQVcsWUFBVTtBQUNwQixhQUFBLFdBQUEsQ0FBQSxvQkFBQTtBQURELElBQUEsRUFBQSxJQUFBOztBQUlBO0FBbkJELEdBQUE7QUFxQkEsSUFBQSxnQkFBQSxFQUFBLFFBQUEsQ0FBNkIsVUFBQSxDQUFBLEVBQUc7QUFDL0IsT0FBTSxTQUFTLEVBQUUsRUFBakIsTUFBZSxDQUFmO0FBQ0EsT0FBTSxVQUFVLE9BQUEsSUFBQSxDQUFoQixjQUFnQixDQUFoQjtBQUNBO0FBQ0E7O0FBRUEsYUFBVSxXQUFXLFlBQVU7QUFDOUIsWUFBQSxJQUFBLENBQWEsUUFBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBRFMsSUFBQSxFQUFWLEdBQVUsQ0FBVjtBQU5ELEdBQUE7QUFZQSxJQUFBLGVBQUEsRUFBQSxZQUFBOztBQUlBO0FBQ0EsTUFBTSxRQUFRLEVBQWQseUJBQWMsQ0FBZDtBQUNBLElBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBaUIsTUFBakIsS0FBaUIsRUFBakI7QUFDQSxRQUFBLE1BQUE7O0FBTUE7QUFDQSxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLGtCQUFBLEVBQTRDLFVBQUEsQ0FBQSxFQUFZO0FBQ3ZELEtBQUEsY0FBQTtBQUNBLFdBQUEsR0FBQSxDQUFZLE9BQVosUUFBQTtBQUNBLE9BQUcsT0FBQSxRQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxHQUFILENBQUEsRUFBZ0Q7QUFDL0MsV0FBQSxRQUFBLEdBQUEsaUJBQUE7QUFERCxJQUFBLE1BR087O0FBRUEsTUFBQSxZQUFBLEVBQUEsT0FBQSxDQUF3QjtBQUNwQixnQkFBVyxFQUFBLGdCQUFBLEVBQUEsTUFBQSxHQUFBLEdBQUEsR0FBbUM7QUFEMUIsS0FBeEIsRUFBQSxJQUFBO0FBR0g7QUFYTCxHQUFBOztBQWNHO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUEseUJBQUEsRUFBQSxPQUFBO0FBMUpELEVBQUEsRSxDQTZKRzs7QUFFSDtBQUNBLFFBQUEsZ0JBQUEsQ0FBQSxNQUFBLEVBQWdDLFlBQUk7O0FBR25DLEdBQUEsR0FBQSxXQUFBLE9BQUE7QUFIRCxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE5BLEtBQU0sTUFBTSxTQUFOLEdBQU0sR0FBTTtBQUNqQixJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBc0MsWUFBSTtBQUN6QyxPQUFNLE1BQU0sRUFBWixRQUFZLENBQVo7QUFDQSxPQUFNLGFBQWEsRUFBbkIsYUFBbUIsQ0FBbkI7QUFDQSxPQUFNLE9BQU8sRUFBYixNQUFhLENBQWI7QUFDQSxRQUFBLFFBQUEsQ0FBQSxVQUFBO0FBQ0EsY0FBVyxZQUFBO0FBQUEsV0FBSSxJQUFBLFFBQUEsQ0FBZixlQUFlLENBQUo7QUFBWCxJQUFBLEVBQUEsR0FBQTtBQUNBLGNBQUEsUUFBQSxDQUFBLG9CQUFBO0FBTkQsR0FBQTs7QUFVQSxJQUFBLGlCQUFBLEVBQUEsS0FBQSxDQUEyQixVQUFBLENBQUEsRUFBSztBQUMvQixLQUFBLGNBQUE7QUFDQSxPQUFNLFNBQVMsRUFBRSxFQUFqQixNQUFlLENBQWY7QUFDQSxPQUFNLE9BQU8sT0FBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0EsS0FBQSxhQUFBLEVBQUEsV0FBQSxDQUFBLG9CQUFBO0FBQ0EsVUFBQSxNQUFBLENBQUEsYUFBQSxFQUFBLFFBQUEsQ0FBQSxvQkFBQTtBQUNBLEtBQUEscUJBQUEsRUFBQSxXQUFBLENBQUEsNEJBQUE7QUFDQSxLQUFFLHdCQUFGLElBQUEsRUFBQSxRQUFBLENBQUEsNEJBQUE7QUFQRCxHQUFBO0FBWEQsRUFBQTs7bUJBMEJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsS0FBTSxZQUFZLFNBQVosU0FBWSxHQUFLO0FBQ3RCO0FBQ0EsTUFBTSxRQUFRLEVBQWQsVUFBYyxDQUFkO0FBQ0EsTUFBTSxPQUFPLEVBSFMsUUFHVCxDQUFiLENBSHNCLENBR0c7QUFDekIsTUFBTSxPQUFPLEVBQWIsTUFBYSxDQUFiOztBQUVBLElBQUEsWUFBQSxFQUFBLEtBQUEsQ0FBc0IsVUFBQSxDQUFBLEVBQUc7QUFDeEIsS0FBQSxjQUFBO0FBQ0EsT0FBTSxTQUFTLEVBQUUsRUFBRixNQUFBLEVBQUEsT0FBQSxDQUFmLEdBQWUsQ0FBZjtBQUNBLE9BQU0sT0FBTyxPQUFBLElBQUEsQ0FBYixNQUFhLENBQWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFBLEdBQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQTtBQUNBO0FBQ0EsS0FBQSxhQUFBLEVBQUEsUUFBQSxDQUFBLG9CQUFBO0FBQ0EsUUFBQSxRQUFBLENBQUEsVUFBQTs7QUFFQTtBQUNBLE9BQUcsRUFBQSxJQUFBLEVBQUEsTUFBQSxHQUFILENBQUEsRUFBcUI7QUFDcEIsTUFBQSxJQUFBLEVBQUEsUUFBQSxDQUFBLGlCQUFBO0FBREQsSUFBQSxNQUVPO0FBQ04sVUFBQSxRQUFBLENBQUEsaUJBQUE7QUFDQTs7QUFFRDtBQW5CRCxHQUFBO0FBcUJBLElBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxrQkFBQSxFQUFBLDBCQUFBLEVBQStELFVBQUEsQ0FBQSxFQUFLO0FBQ25FLEtBQUEsZ0JBQUEsRUFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQSxLQUFBLDJCQUFBLEVBQUEsSUFBQTtBQUNBLE9BQU0sU0FBUyxFQUFFLEVBQWpCLE1BQWUsQ0FBZjtBQUNBLE9BQUcsT0FBQSxPQUFBLENBQUEsaUJBQUEsRUFBQSxNQUFBLElBQUEsQ0FBQSxJQUErQyxPQUFBLE9BQUEsQ0FBQSxnQkFBQSxFQUFBLE1BQUEsR0FBbEQsQ0FBQSxFQUE0RjtBQUMzRixNQUFBLGNBQUE7QUFDQTtBQUNBLE1BQUEsa0JBQUEsRUFBQSxXQUFBLENBQUEsaUJBQUE7QUFDQSxlQUFXLFlBQVU7QUFDcEIsVUFBQSxHQUFBLENBQUEsU0FBQSxFQUFBLE1BQUE7QUFERCxLQUFBLEVBQUEsR0FBQTtBQUdBLE1BQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSxVQUFBO0FBQ0EsTUFBQSxxQkFBQSxFQUFBLFdBQUEsQ0FBQSxvQkFBQTs7QUFFQTtBQUVBO0FBaEJGLEdBQUE7QUEzQkQsRUFBQTs7bUJBZ0RBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREEsS0FBTSxhQUFhLFNBQUEsVUFBQSxHQUFLO0FBQ3ZCLE1BQU0sYUFBYSxFQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFuQixDQUFtQixDQUFuQjtBQUNBLE1BQU0sbUJBQW1CLEVBQUEseUJBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxFQUF6QixNQUF5QixFQUF6QjtBQUNBLE1BQU0sa0JBQWtCLFdBQXhCLEtBQXdCLEVBQXhCO0FBQ0EsTUFBTSxtQkFBbUIsRUFBQSw2QkFBQSxFQUFBLEVBQUEsQ0FBekIsQ0FBeUIsQ0FBekI7QUFDQSxNQUFHLGNBQUgsZ0JBQUEsRUFBbUM7QUFDbEM7QUFDQSxvQkFBQSxLQUFBLENBQXVCLFVBQUEsQ0FBQSxFQUFLO0FBQzNCLE1BQUEsY0FBQTtBQUNBLHFCQUFBLE1BQUEsQ0FBd0IsZ0JBQXhCLEtBQXdCLEVBQXhCO0FBRkQsSUFBQTs7QUFPQSxLQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLHdCQUFBLEVBQWtELFVBQUEsQ0FBQSxFQUFLO0FBQ3RELE1BQUEsY0FBQTtBQUNBLFFBQUcsRUFBQSx5QkFBQSxFQUFBLE1BQUEsR0FBSCxDQUFBLEVBQXlDO0FBQ3hDLFNBQU0sU0FBUyxFQUFFLEVBQWpCLE1BQWUsQ0FBZjtBQUNBLFlBQUEsT0FBQSxDQUFBLHlCQUFBLEVBQUEsTUFBQTtBQUNBO0FBTEYsSUFBQTtBQVlBO0FBMUJGLEVBQUE7O0FBNkJBOzs7QUFHQSxLQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFLO0FBQzFCLE1BQU0sYUFBYSxFQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFuQixDQUFtQixDQUFuQjtBQUNBLE1BQU0sbUJBQW1CLEVBQUEseUJBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxFQUF6QixNQUF5QixFQUF6QjtBQUNBLE1BQU0sa0JBQWtCLFdBQXhCLEtBQXdCLEVBQXhCO0FBQ0EsTUFBTSxtQkFBTiw2QkFBQTtBQUNBLE1BQUcsY0FBSCxnQkFBQSxFQUFtQztBQUNsQztBQUNBLEtBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQUEsZ0JBQUEsRUFBMEMsVUFBQSxDQUFBLEVBQUs7QUFDOUMsTUFBQSxjQUFBO0FBQ0EscUJBQUEsTUFBQSxDQUF3QixnQkFBeEIsS0FBd0IsRUFBeEI7QUFGRCxJQUFBOztBQU9BLEtBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQUEsd0JBQUEsRUFBa0QsVUFBQSxDQUFBLEVBQUs7QUFDdEQsTUFBQSxjQUFBO0FBQ0EsUUFBRyxFQUFBLHlCQUFBLEVBQUEsTUFBQSxHQUFILENBQUEsRUFBeUM7QUFDeEMsU0FBTSxTQUFTLEVBQUUsRUFBakIsTUFBZSxDQUFmO0FBQ0EsU0FBTSxhQUFhLE9BQUEsT0FBQSxDQUFuQix5QkFBbUIsQ0FBbkI7QUFDQSxnQkFBQSxPQUFBLENBQW1CO0FBQ2xCLGNBQVE7QUFEVSxNQUFuQixFQUFBLE1BQUEsRUFBQSxPQUFBLEVBR0MsWUFBQTtBQUFBLGFBQU0sV0FIUCxNQUdPLEVBQU47QUFIRCxNQUFBO0FBTUE7QUFYRixJQUFBO0FBa0JBO0FBaENGLEVBQUE7O21CQW1DQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUEsS0FBTSxlQUFlLFNBQWYsWUFBZSxHQUFLO0FBQ3pCLElBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQUEsZ0JBQUEsRUFBeUMsVUFBQSxDQUFBLEVBQUs7QUFDN0MsS0FBQSxjQUFBO0FBQ0EsT0FBTSxRQUFRLEVBQWQsTUFBYyxDQUFkO0FBQ0EsT0FBTSxhQUFhLEVBQW5CLGFBQW1CLENBQW5CO0FBQ0EsT0FBTSxPQUFPLEVBQWIsTUFBYSxDQUFiOztBQUVBLEtBQUEsZ0JBQUEsRUFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQSxLQUFBLDJCQUFBLEVBQUEsTUFBQTs7QUFFRyxLQUFBLGlCQUFBLEVBQUEsUUFBQSxDQUFBLHdCQUFBO0FBQ0EsUUFBQSxRQUFBLENBQUEsVUFBQTtBQUNBLEtBQUEsWUFBQSxFQUFBLE9BQUEsQ0FBd0I7QUFDakIsZUFBVztBQURNLElBQXhCLEVBQUEsSUFBQTs7QUFJSCxjQUFBLFFBQUEsQ0FBQSxvQkFBQTtBQUNBO0FBaEJELEdBQUE7QUFERCxFQUFBOzttQkFxQkEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxLQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFLO0FBQzVCLE1BQU0sUUFBUSxFQUFBLHdCQUFBLEVBQUEsRUFBQSxDQUFkLENBQWMsQ0FBZDtBQUNBLE1BQU0sWUFBWSxTQUFTLE1BQUEsSUFBQSxDQUEzQixXQUEyQixDQUFULENBQWxCO0FBQ0EsTUFBTSxXQUFXLFNBQVMsTUFBQSxHQUFBLENBQTFCLFVBQTBCLENBQVQsQ0FBakI7QUFDQSxNQUFNLFNBQVMsRUFBZix5QkFBZSxDQUFmO0FBQ0EsTUFBTSxpQkFBTixFQUFBO0FBQ0EsTUFBTSx1QkFBTixFQUFBO0FBQ0EsTUFBTSxvQkFBTixDQUFBOztBQUVBOztBQUVBLFNBQUEsTUFBQSxDQUFjLGdCQUFBLE1BQUEsQ0FBZCxTQUFjLENBQWQsRUFBQSxLQUFBLENBQ1EsWUFBWTtBQUNsQixLQUFBLHdCQUFBLEVBQUEsR0FBQSxDQUFnQztBQUM5QixXQUFRLGtCQUFrQixZQUFsQixDQUFBLElBQW1DLHdCQUF3QixZQUE1RCxDQUFvQyxDQUFuQyxHQUE2RSxvQkFBb0I7O0FBRDNFLElBQWhDO0FBSUEsS0FBQSxpQkFBQSxFQUFBLEdBQUEsQ0FBeUI7QUFDeEIsZ0JBQVk7QUFEWSxJQUF6QjtBQUdBLFNBQUEsS0FBQTtBQVRGLEdBQUE7O0FBWUEsUUFBQSxLQUFBLENBQVksWUFBSTtBQUNmLE9BQUcsTUFBQSxHQUFBLEdBQUEsTUFBQSxJQUFILFNBQUEsRUFBa0M7QUFDakMsTUFBQSxxQkFBQSxFQUFBLE9BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFIRixHQUFBO0FBdkJELEVBQUE7O21CQWdDQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBLEtBQU0sdUJBQXVCLFNBQXZCLG9CQUF1QixHQUFNO0FBQ2xDO0FBQ0EsTUFBSSxnQkFBSixDQUFBO0FBQ0EsSUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFpQixZQUFJOztBQUVwQixPQUFNLFlBQVksRUFBQSxNQUFBLEVBQWxCLFNBQWtCLEVBQWxCO0FBQ0EsT0FBTSxhQUFhLEVBQW5CLGlCQUFtQixDQUFuQjtBQUNBLE9BQU0sVUFBVSxFQUFoQixjQUFnQixDQUFoQjtBQUNBLE9BQU0sU0FBUyxFQUFmLGFBQWUsQ0FBZjtBQUNBLE9BQU0sb0JBQW9CLEVBQTFCLGdCQUEwQixDQUExQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBRyxZQUFILEdBQUEsRUFBa0I7QUFDakIsc0JBQUEsUUFBQSxDQUFBLHVCQUFBO0FBREQsSUFBQSxNQUVPO0FBQ04sc0JBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0E7O0FBR0QsbUJBQUEsU0FBQTtBQS9CRCxHQUFBO0FBSEQsRUFBQTs7bUJBc0NBLG9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qISBvZmZsaW5lLWpzIDAuNy4xMyAqL1xuKGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc7ZD1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmO2U9W107Zm9yKGQgaW4gYi5wcm90b3R5cGUpdHJ5e2Y9Yi5wcm90b3R5cGVbZF0sbnVsbD09YVtkXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZj9lLnB1c2goYVtkXT1mKTplLnB1c2godm9pZCAwKX1jYXRjaChnKXtjPWd9cmV0dXJuIGV9LGE9e30sbnVsbD09YS5vcHRpb25zJiYoYS5vcHRpb25zPXt9KSxjPXtjaGVja3M6e3hocjp7dXJsOmZ1bmN0aW9uKCl7cmV0dXJuXCIvZmF2aWNvbi5pY28/Xz1cIitNYXRoLmZsb29yKDFlOSpNYXRoLnJhbmRvbSgpKX0sdGltZW91dDo1ZTN9LGltYWdlOnt1cmw6ZnVuY3Rpb24oKXtyZXR1cm5cIi9mYXZpY29uLmljbz9fPVwiK01hdGguZmxvb3IoMWU5Kk1hdGgucmFuZG9tKCkpfX0sYWN0aXZlOlwieGhyXCJ9LGNoZWNrT25Mb2FkOiExLGludGVyY2VwdFJlcXVlc3RzOiEwLHJlY29ubmVjdDohMH0sZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGcsaDtmb3IoYz1hLGg9Yi5zcGxpdChcIi5cIiksZD1lPTAsZj1oLmxlbmd0aDtmPmUmJihnPWhbZF0sYz1jW2ddLFwib2JqZWN0XCI9PXR5cGVvZiBjKTtkPSsrZSk7cmV0dXJuIGQ9PT1oLmxlbmd0aC0xP2M6dm9pZCAwfSxhLmdldE9wdGlvbj1mdW5jdGlvbihiKXt2YXIgZCxmO3JldHVybiBmPW51bGwhPShkPWUoYS5vcHRpb25zLGIpKT9kOmUoYyxiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmP2YoKTpmfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIixmdW5jdGlvbigpe3JldHVybiBzZXRUaW1lb3V0KGEuY29uZmlybVVwLDEwMCl9LCExKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsZnVuY3Rpb24oKXtyZXR1cm4gYS5jb25maXJtRG93bigpfSwhMSksYS5zdGF0ZT1cInVwXCIsYS5tYXJrVXA9ZnVuY3Rpb24oKXtyZXR1cm4gYS50cmlnZ2VyKFwiY29uZmlybWVkLXVwXCIpLFwidXBcIiE9PWEuc3RhdGU/KGEuc3RhdGU9XCJ1cFwiLGEudHJpZ2dlcihcInVwXCIpKTp2b2lkIDB9LGEubWFya0Rvd249ZnVuY3Rpb24oKXtyZXR1cm4gYS50cmlnZ2VyKFwiY29uZmlybWVkLWRvd25cIiksXCJkb3duXCIhPT1hLnN0YXRlPyhhLnN0YXRlPVwiZG93blwiLGEudHJpZ2dlcihcImRvd25cIikpOnZvaWQgMH0sZj17fSxhLm9uPWZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxnLGgsaSxqO2lmKGc9Yi5zcGxpdChcIiBcIiksZy5sZW5ndGg+MSl7Zm9yKGo9W10saD0wLGk9Zy5sZW5ndGg7aT5oO2grKyllPWdbaF0sai5wdXNoKGEub24oZSxjLGQpKTtyZXR1cm4gan1yZXR1cm4gbnVsbD09ZltiXSYmKGZbYl09W10pLGZbYl0ucHVzaChbZCxjXSl9LGEub2ZmPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGcsaDtpZihudWxsIT1mW2FdKXtpZihiKXtmb3IoZT0wLGg9W107ZTxmW2FdLmxlbmd0aDspZz1mW2FdW2VdLGQ9Z1swXSxjPWdbMV0sYz09PWI/aC5wdXNoKGZbYV0uc3BsaWNlKGUsMSkpOmgucHVzaChlKyspO3JldHVybiBofXJldHVybiBmW2FdPVtdfX0sYS50cmlnZ2VyPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGcsaCxpO2lmKG51bGwhPWZbYV0pe2ZvcihnPWZbYV0saT1bXSxkPTAsZT1nLmxlbmd0aDtlPmQ7ZCsrKWg9Z1tkXSxiPWhbMF0sYz1oWzFdLGkucHVzaChjLmNhbGwoYikpO3JldHVybiBpfX0sYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaDtyZXR1cm4gaD1mdW5jdGlvbigpe3JldHVybiBhLnN0YXR1cyYmYS5zdGF0dXM8MTJlMz9iKCk6YygpfSxudWxsPT09YS5vbnByb2dyZXNzPyhkPWEub25lcnJvcixhLm9uZXJyb3I9ZnVuY3Rpb24oKXtyZXR1cm4gYygpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZC5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfSxnPWEub250aW1lb3V0LGEub250aW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIGMoKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBnP2cuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH0sZT1hLm9ubG9hZCxhLm9ubG9hZD1mdW5jdGlvbigpe3JldHVybiBoKCksXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9KTooZj1hLm9ucmVhZHlzdGF0ZWNoYW5nZSxhLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3JldHVybiA0PT09YS5yZWFkeVN0YXRlP2goKTowPT09YS5yZWFkeVN0YXRlJiZjKCksXCJmdW5jdGlvblwiPT10eXBlb2YgZj9mLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9KX0sYS5jaGVja3M9e30sYS5jaGVja3MueGhyPWZ1bmN0aW9uKCl7dmFyIGMsZDtkPW5ldyBYTUxIdHRwUmVxdWVzdCxkLm9mZmxpbmU9ITEsZC5vcGVuKFwiSEVBRFwiLGEuZ2V0T3B0aW9uKFwiY2hlY2tzLnhoci51cmxcIiksITApLG51bGwhPWQudGltZW91dCYmKGQudGltZW91dD1hLmdldE9wdGlvbihcImNoZWNrcy54aHIudGltZW91dFwiKSksYihkLGEubWFya1VwLGEubWFya0Rvd24pO3RyeXtkLnNlbmQoKX1jYXRjaChlKXtjPWUsYS5tYXJrRG93bigpfXJldHVybiBkfSxhLmNoZWNrcy5pbWFnZT1mdW5jdGlvbigpe3ZhciBiO3JldHVybiBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksYi5vbmVycm9yPWEubWFya0Rvd24sYi5vbmxvYWQ9YS5tYXJrVXAsdm9pZChiLnNyYz1hLmdldE9wdGlvbihcImNoZWNrcy5pbWFnZS51cmxcIikpfSxhLmNoZWNrcy5kb3duPWEubWFya0Rvd24sYS5jaGVja3MudXA9YS5tYXJrVXAsYS5jaGVjaz1mdW5jdGlvbigpe3JldHVybiBhLnRyaWdnZXIoXCJjaGVja2luZ1wiKSxhLmNoZWNrc1thLmdldE9wdGlvbihcImNoZWNrcy5hY3RpdmVcIildKCl9LGEuY29uZmlybVVwPWEuY29uZmlybURvd249YS5jaGVjayxhLm9uWEhSPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZTtyZXR1cm4gZT1mdW5jdGlvbihiLGMpe3ZhciBkO3JldHVybiBkPWIub3BlbixiLm9wZW49ZnVuY3Rpb24oZSxmLGcsaCxpKXtyZXR1cm4gYSh7dHlwZTplLHVybDpmLGFzeW5jOmcsZmxhZ3M6Yyx1c2VyOmgscGFzc3dvcmQ6aSx4aHI6Yn0pLGQuYXBwbHkoYixhcmd1bWVudHMpfX0sYz13aW5kb3cuWE1MSHR0cFJlcXVlc3Qsd2luZG93LlhNTEh0dHBSZXF1ZXN0PWZ1bmN0aW9uKGEpe3ZhciBiLGQsZjtyZXR1cm4gZj1uZXcgYyhhKSxlKGYsYSksZD1mLnNldFJlcXVlc3RIZWFkZXIsZi5oZWFkZXJzPXt9LGYuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihhLGIpe3JldHVybiBmLmhlYWRlcnNbYV09YixkLmNhbGwoZixhLGIpfSxiPWYub3ZlcnJpZGVNaW1lVHlwZSxmLm92ZXJyaWRlTWltZVR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGYubWltZVR5cGU9YSxiLmNhbGwoZixhKX0sZn0sZCh3aW5kb3cuWE1MSHR0cFJlcXVlc3QsYyksbnVsbCE9d2luZG93LlhEb21haW5SZXF1ZXN0PyhiPXdpbmRvdy5YRG9tYWluUmVxdWVzdCx3aW5kb3cuWERvbWFpblJlcXVlc3Q9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gYT1uZXcgYixlKGEpLGF9LGQod2luZG93LlhEb21haW5SZXF1ZXN0LGIpKTp2b2lkIDB9LGc9ZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRPcHRpb24oXCJpbnRlcmNlcHRSZXF1ZXN0c1wiKSYmYS5vblhIUihmdW5jdGlvbihjKXt2YXIgZDtyZXR1cm4gZD1jLnhocixkLm9mZmxpbmUhPT0hMT9iKGQsYS5tYXJrVXAsYS5jb25maXJtRG93bik6dm9pZCAwfSksYS5nZXRPcHRpb24oXCJjaGVja09uTG9hZFwiKT9hLmNoZWNrKCk6dm9pZCAwfSxzZXRUaW1lb3V0KGcsMCksd2luZG93Lk9mZmxpbmU9YX0pLmNhbGwodGhpcyksZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZyxoLGk7aWYoIXdpbmRvdy5PZmZsaW5lKXRocm93IG5ldyBFcnJvcihcIk9mZmxpbmUgUmVjb25uZWN0IGJyb3VnaHQgaW4gd2l0aG91dCBvZmZsaW5lLmpzXCIpO2Q9T2ZmbGluZS5yZWNvbm5lY3Q9e30sZj1udWxsLGU9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gbnVsbCE9ZC5zdGF0ZSYmXCJpbmFjdGl2ZVwiIT09ZC5zdGF0ZSYmT2ZmbGluZS50cmlnZ2VyKFwicmVjb25uZWN0OnN0b3BwZWRcIiksZC5zdGF0ZT1cImluYWN0aXZlXCIsZC5yZW1haW5pbmc9ZC5kZWxheT1udWxsIT0oYT1PZmZsaW5lLmdldE9wdGlvbihcInJlY29ubmVjdC5pbml0aWFsRGVsYXlcIikpP2E6M30sYj1mdW5jdGlvbigpe3ZhciBhLGI7cmV0dXJuIGE9bnVsbCE9KGI9T2ZmbGluZS5nZXRPcHRpb24oXCJyZWNvbm5lY3QuZGVsYXlcIikpP2I6TWF0aC5taW4oTWF0aC5jZWlsKDEuNSpkLmRlbGF5KSwzNjAwKSxkLnJlbWFpbmluZz1kLmRlbGF5PWF9LGc9ZnVuY3Rpb24oKXtyZXR1cm5cImNvbm5lY3RpbmdcIiE9PWQuc3RhdGU/KGQucmVtYWluaW5nLT0xLE9mZmxpbmUudHJpZ2dlcihcInJlY29ubmVjdDp0aWNrXCIpLDA9PT1kLnJlbWFpbmluZz9oKCk6dm9pZCAwKTp2b2lkIDB9LGg9ZnVuY3Rpb24oKXtyZXR1cm5cIndhaXRpbmdcIj09PWQuc3RhdGU/KE9mZmxpbmUudHJpZ2dlcihcInJlY29ubmVjdDpjb25uZWN0aW5nXCIpLGQuc3RhdGU9XCJjb25uZWN0aW5nXCIsT2ZmbGluZS5jaGVjaygpKTp2b2lkIDB9LGE9ZnVuY3Rpb24oKXtyZXR1cm4gT2ZmbGluZS5nZXRPcHRpb24oXCJyZWNvbm5lY3RcIik/KGUoKSxkLnN0YXRlPVwid2FpdGluZ1wiLE9mZmxpbmUudHJpZ2dlcihcInJlY29ubmVjdDpzdGFydGVkXCIpLGY9c2V0SW50ZXJ2YWwoZywxZTMpKTp2b2lkIDB9LGk9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9ZiYmY2xlYXJJbnRlcnZhbChmKSxlKCl9LGM9ZnVuY3Rpb24oKXtyZXR1cm4gT2ZmbGluZS5nZXRPcHRpb24oXCJyZWNvbm5lY3RcIikmJlwiY29ubmVjdGluZ1wiPT09ZC5zdGF0ZT8oT2ZmbGluZS50cmlnZ2VyKFwicmVjb25uZWN0OmZhaWx1cmVcIiksZC5zdGF0ZT1cIndhaXRpbmdcIixiKCkpOnZvaWQgMH0sZC50cnlOb3c9aCxlKCksT2ZmbGluZS5vbihcImRvd25cIixhKSxPZmZsaW5lLm9uKFwiY29uZmlybWVkLWRvd25cIixjKSxPZmZsaW5lLm9uKFwidXBcIixpKX0uY2FsbCh0aGlzKSxmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZjtpZighd2luZG93Lk9mZmxpbmUpdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdHMgbW9kdWxlIGJyb3VnaHQgaW4gd2l0aG91dCBvZmZsaW5lLmpzXCIpO2M9W10sZj0hMSxkPWZ1bmN0aW9uKGEpe3JldHVybiBPZmZsaW5lLnRyaWdnZXIoXCJyZXF1ZXN0czpjYXB0dXJlXCIpLFwiZG93blwiIT09T2ZmbGluZS5zdGF0ZSYmKGY9ITApLGMucHVzaChhKX0sZT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGo7aj1hLnhocixnPWEudXJsLGY9YS50eXBlLGg9YS51c2VyLGQ9YS5wYXNzd29yZCxiPWEuYm9keSxqLmFib3J0KCksai5vcGVuKGYsZywhMCxoLGQpLGU9ai5oZWFkZXJzO2ZvcihjIGluIGUpaT1lW2NdLGouc2V0UmVxdWVzdEhlYWRlcihjLGkpO3JldHVybiBqLm1pbWVUeXBlJiZqLm92ZXJyaWRlTWltZVR5cGUoai5taW1lVHlwZSksai5zZW5kKGIpfSxhPWZ1bmN0aW9uKCl7cmV0dXJuIGM9W119LGI9ZnVuY3Rpb24oKXt2YXIgYixkLGYsZyxoLGk7Zm9yKE9mZmxpbmUudHJpZ2dlcihcInJlcXVlc3RzOmZsdXNoXCIpLGg9e30sYj0wLGY9Yy5sZW5ndGg7Zj5iO2IrKylnPWNbYl0saT1nLnVybC5yZXBsYWNlKC8oXFw/fCYpXz1bMC05XSsvLGZ1bmN0aW9uKGEsYil7cmV0dXJuXCI/XCI9PT1iP2I6XCJcIn0pLGhbZy50eXBlLnRvVXBwZXJDYXNlKCkrXCIgLSBcIitpXT1nO2ZvcihkIGluIGgpZz1oW2RdLGUoZyk7cmV0dXJuIGEoKX0sc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBPZmZsaW5lLmdldE9wdGlvbihcInJlcXVlc3RzXCIpIT09ITE/KE9mZmxpbmUub24oXCJjb25maXJtZWQtdXBcIixmdW5jdGlvbigpe3JldHVybiBmPyhmPSExLGEoKSk6dm9pZCAwfSksT2ZmbGluZS5vbihcInVwXCIsYiksT2ZmbGluZS5vbihcImRvd25cIixmdW5jdGlvbigpe3JldHVybiBmPSExfSksT2ZmbGluZS5vblhIUihmdW5jdGlvbihhKXt2YXIgYixjLGUsZixnO3JldHVybiBnPWEueGhyLGU9YS5hc3luYyxnLm9mZmxpbmUhPT0hMSYmKGY9ZnVuY3Rpb24oKXtyZXR1cm4gZChhKX0sYz1nLnNlbmQsZy5zZW5kPWZ1bmN0aW9uKGIpe3JldHVybiBhLmJvZHk9YixjLmFwcGx5KGcsYXJndW1lbnRzKX0sZSk/bnVsbD09PWcub25wcm9ncmVzcz8oZy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmLCExKSxnLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsZiwhMSkpOihiPWcub25yZWFkeXN0YXRlY2hhbmdlLGcub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PT1nLnJlYWR5U3RhdGU/ZigpOjQ9PT1nLnJlYWR5U3RhdGUmJigwPT09Zy5zdGF0dXN8fGcuc3RhdHVzPj0xMmUzKSYmZigpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGI/Yi5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfSk6dm9pZCAwfSksT2ZmbGluZS5yZXF1ZXN0cz17Zmx1c2g6YixjbGVhcjphfSk6dm9pZCAwfSwwKX0uY2FsbCh0aGlzKSxmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGU7aWYoIU9mZmxpbmUpdGhyb3cgbmV3IEVycm9yKFwiT2ZmbGluZSBzaW11bGF0ZSBicm91Z2h0IGluIHdpdGhvdXQgb2ZmbGluZS5qc1wiKTtmb3IoZD1bXCJ1cFwiLFwiZG93blwiXSxiPTAsYz1kLmxlbmd0aDtjPmI7YisrKWU9ZFtiXSwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNjcmlwdFtkYXRhLXNpbXVsYXRlPSdcIitlK1wiJ11cIil8fGxvY2FsU3RvcmFnZS5PRkZMSU5FX1NJTVVMQVRFPT09ZSkmJihudWxsPT1PZmZsaW5lLm9wdGlvbnMmJihPZmZsaW5lLm9wdGlvbnM9e30pLG51bGw9PShhPU9mZmxpbmUub3B0aW9ucykuY2hlY2tzJiYoYS5jaGVja3M9e30pLE9mZmxpbmUub3B0aW9ucy5jaGVja3MuYWN0aXZlPWUpfS5jYWxsKHRoaXMpLGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGcsaCxpLGosayxsLG07aWYoIXdpbmRvdy5PZmZsaW5lKXRocm93IG5ldyBFcnJvcihcIk9mZmxpbmUgVUkgYnJvdWdodCBpbiB3aXRob3V0IG9mZmxpbmUuanNcIik7Yj0nPGRpdiBjbGFzcz1cIm9mZmxpbmUtdWlcIj48ZGl2IGNsYXNzPVwib2ZmbGluZS11aS1jb250ZW50XCI+PC9kaXY+PC9kaXY+JyxhPSc8YSBocmVmIGNsYXNzPVwib2ZmbGluZS11aS1yZXRyeVwiPjwvYT4nLGY9ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxiLmlubmVySFRNTD1hLGIuY2hpbGRyZW5bMF19LGc9ZT1udWxsLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGsoYSksZy5jbGFzc05hbWUrPVwiIFwiK2F9LGs9ZnVuY3Rpb24oYSl7cmV0dXJuIGcuY2xhc3NOYW1lPWcuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefCApXCIrYS5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoIHwkKVwiLFwiZ2lcIiksXCIgXCIpfSxpPXt9LGg9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhKSxudWxsIT1pW2FdJiZjbGVhclRpbWVvdXQoaVthXSksaVthXT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGsoYSksZGVsZXRlIGlbYV19LDFlMypiKX0sbT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZTtkPXtkYXk6ODY0MDAsaG91cjozNjAwLG1pbnV0ZTo2MCxzZWNvbmQ6MX07Zm9yKGMgaW4gZClpZihiPWRbY10sYT49YilyZXR1cm4gZT1NYXRoLmZsb29yKGEvYiksW2UsY107cmV0dXJuW1wibm93XCIsXCJcIl19LGw9ZnVuY3Rpb24oKXt2YXIgYyxoO3JldHVybiBnPWYoYiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnKSxudWxsIT1PZmZsaW5lLnJlY29ubmVjdCYmT2ZmbGluZS5nZXRPcHRpb24oXCJyZWNvbm5lY3RcIikmJihnLmFwcGVuZENoaWxkKGYoYSkpLGM9Zy5xdWVyeVNlbGVjdG9yKFwiLm9mZmxpbmUtdWktcmV0cnlcIiksaD1mdW5jdGlvbihhKXtyZXR1cm4gYS5wcmV2ZW50RGVmYXVsdCgpLE9mZmxpbmUucmVjb25uZWN0LnRyeU5vdygpfSxudWxsIT1jLmFkZEV2ZW50TGlzdGVuZXI/Yy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixoLCExKTpjLmF0dGFjaEV2ZW50KFwiY2xpY2tcIixoKSksZChcIm9mZmxpbmUtdWktXCIrT2ZmbGluZS5zdGF0ZSksZT1nLnF1ZXJ5U2VsZWN0b3IoXCIub2ZmbGluZS11aS1jb250ZW50XCIpfSxqPWZ1bmN0aW9uKCl7cmV0dXJuIGwoKSxPZmZsaW5lLm9uKFwidXBcIixmdW5jdGlvbigpe3JldHVybiBrKFwib2ZmbGluZS11aS1kb3duXCIpLGQoXCJvZmZsaW5lLXVpLXVwXCIpLGgoXCJvZmZsaW5lLXVpLXVwLTJzXCIsMiksaChcIm9mZmxpbmUtdWktdXAtNXNcIiw1KX0pLE9mZmxpbmUub24oXCJkb3duXCIsZnVuY3Rpb24oKXtyZXR1cm4gayhcIm9mZmxpbmUtdWktdXBcIiksZChcIm9mZmxpbmUtdWktZG93blwiKSxoKFwib2ZmbGluZS11aS1kb3duLTJzXCIsMiksaChcIm9mZmxpbmUtdWktZG93bi01c1wiLDUpfSksT2ZmbGluZS5vbihcInJlY29ubmVjdDpjb25uZWN0aW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gZChcIm9mZmxpbmUtdWktY29ubmVjdGluZ1wiKSxrKFwib2ZmbGluZS11aS13YWl0aW5nXCIpfSksT2ZmbGluZS5vbihcInJlY29ubmVjdDp0aWNrXCIsZnVuY3Rpb24oKXt2YXIgYSxiLGM7cmV0dXJuIGQoXCJvZmZsaW5lLXVpLXdhaXRpbmdcIiksayhcIm9mZmxpbmUtdWktY29ubmVjdGluZ1wiKSxhPW0oT2ZmbGluZS5yZWNvbm5lY3QucmVtYWluaW5nKSxiPWFbMF0sYz1hWzFdLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZXRyeS1pbi12YWx1ZVwiLGIpLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZXRyeS1pbi11bml0XCIsYyl9KSxPZmZsaW5lLm9uKFwicmVjb25uZWN0OnN0b3BwZWRcIixmdW5jdGlvbigpe3JldHVybiBrKFwib2ZmbGluZS11aS1jb25uZWN0aW5nIG9mZmxpbmUtdWktd2FpdGluZ1wiKSxlLnNldEF0dHJpYnV0ZShcImRhdGEtcmV0cnktaW4tdmFsdWVcIixudWxsKSxlLnNldEF0dHJpYnV0ZShcImRhdGEtcmV0cnktaW4tdW5pdFwiLG51bGwpfSksT2ZmbGluZS5vbihcInJlY29ubmVjdDpmYWlsdXJlXCIsZnVuY3Rpb24oKXtyZXR1cm4gaChcIm9mZmxpbmUtdWktcmVjb25uZWN0LWZhaWxlZC0yc1wiLDIpLGgoXCJvZmZsaW5lLXVpLXJlY29ubmVjdC1mYWlsZWQtNXNcIiw1KX0pLE9mZmxpbmUub24oXCJyZWNvbm5lY3Q6c3VjY2Vzc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGgoXCJvZmZsaW5lLXVpLXJlY29ubmVjdC1zdWNjZWVkZWQtMnNcIiwyKSxoKFwib2ZmbGluZS11aS1yZWNvbm5lY3Qtc3VjY2VlZGVkLTVzXCIsNSl9KX0sXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9qKCk6bnVsbCE9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGosITEpOihjPWRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSxkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm5cImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlJiZqKCksXCJmdW5jdGlvblwiPT10eXBlb2YgYz9jLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9KX0uY2FsbCh0aGlzKTsiLCIoZnVuY3Rpb24oKXtcblx0bGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcblx0aWYoc2VhcmNoUGFyYW1zLmdldCgnbGluaycpKXtcblx0XHQkKCcjT3JkZXJzX2xpbmsnKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnbGluaycpKVxuXHRcdCQoJyNPcmRlcnNfY291bnQnKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnY291bnQnKSlcblx0XHQkKCcjT3JkZXJzX3ByaWNlJykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ3ByaWNlJykpXG5cdFx0JCgnI09yZGVyc19zaXplX3N0cicpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdzaXplJykpXG5cdFx0JCgnI09yZGVyc19jb2xvcicpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdjb2xvcicpKVxuXG5cdFx0JCh3aW5kb3cpLmJpbmQoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VhcmNoUGFyYW1zLmdldCgncHJpY2UnKSYmJCgnI3Byb2NlZHVyZS1mb3JtICNPcmRlcnNfbGluaycpLnRyaWdnZXIoJ2JsdXInKVxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe3BhZ2U6IDF9LCBcInRpdGxlIDFcIiwgXCJcIilcblx0XHR9KVxuXG5cdH1cblxuXHRcbn0pKCkiLCJjb25zdCBMYXllcmVkU2xpZGVyID0gKCk9PiB7XG5cblx0Y29uc3QgbGF5ZXJlZFNsaWRlciA9ICQoJy5sYXllcmVkLXNsaWRlcicpXG5cdGNvbnN0IGRvdENsb25lID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRjb25zdCBpbmRpY2F0b3JzID0gJCgnLmxheWVyZWQtc2xpZGVyX19pbmRpY2F0b3JzJylcblx0Y29uc3QgaXRlbSA9ICQoJy5sYXllcmVkLXNsaWRlcl9faXRlbScpXG5cdGNvbnN0IGFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdycpXG5cdGNvbnN0IG5leHRBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLW5leHQnKVxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1wcmV2Jylcblx0Y29uc3QgY291bnQgPSBpdGVtLmxlbmd0aFxuXHRsZXQgaSA9IDFcblx0d2hpbGUoaSA8IGNvdW50KXtcblx0XHRpbmRpY2F0b3JzLmFwcGVuZChkb3RDbG9uZS5jbG9uZSgpKVxuXHRcdGkrK1xuXHR9XG5cblxuXG5cdGNvbnN0IGRvdCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90Jylcblx0ZG90LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmluZGV4KClcblx0ICBcblx0ICBpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBpdGVtLmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgXG5cdCAgZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgXG5cdCAgc2xpZGVyQ2hhbmdlZChpbmRleClcblx0fSlcblxuXHRjb25zdCBuZXh0QXJyb3dDbGlja2VkID0gKCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpLmluZGV4KClcblx0XHRjb25zdCBuZXh0SW5kZXggPSBpbmRleDxjb3VudC0xID8gaW5kZXgrMSA6IDBcblxuXHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHRcdGl0ZW0uZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cblx0XHRkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0ZG90LmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0c2xpZGVyQ2hhbmdlZChuZXh0SW5kZXgpXG5cdH1cblx0Y29uc3QgcHJldkFycm93Q2xpY2tlZCA9ICgpID0+IHtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdGNvbnN0IGluZGV4ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpLmluZGV4KClcblx0XHRjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIDFcblxuXHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHRcdGl0ZW0uZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cblx0XHRkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0ZG90LmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0c2xpZGVyQ2hhbmdlZChwcmV2SW5kZXgpXG5cdH1cblx0bmV4dEFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0XHRuZXh0QXJyb3dDbGlja2VkKClcblx0fSlcblxuXHRwcmV2QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRwcmV2QXJyb3dDbGlja2VkKClcblx0fSlcblxuXHRjb25zdCBzbGlkZXJDaGFuZ2VkID0gKG5ld0luZGV4KSA9PiB7XG5cdCAgYXJyb3cucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICBpZihuZXdJbmRleCsxPT1jb3VudCkgeyAvLyBsYXN0XG5cdCAgICAvLyBuZXh0QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICB9IGVsc2UgaWYobmV3SW5kZXg9PTApIHtcblx0ICAgIC8vIHByZXZBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gXG5cdH1cblxuXHQvLyBpbnRlcnZhbFxuXG5cdFxuXHRsZXQgaW50ZXJ2YWwgPSBudWxsXG5cblx0Y29uc3Qgc3RhcnRJbnRlcnZhbCA9ICgpID0+IHtcblx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRBcnJvd0NsaWNrZWQsIDUwMDApXG5cdH1cblx0c3RhcnRJbnRlcnZhbCgpXG5cblx0bGF5ZXJlZFNsaWRlci5ob3ZlcigoKT0+IHtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHR9LCAoKSA9PiBzdGFydEludGVydmFsKCkgKVxuXG5cblxuXHQvLyBsYXllcmVkU2xpZGVyLm9uKFwidG91Y2hzdGFydFwiLCBzdGFydFRvdWNoKTtcblx0Ly8gbGF5ZXJlZFNsaWRlci5vbihcInRvdWNobW92ZVwiLCBtb3ZlVG91Y2gpO1xuXG5cdC8vIC8vIFN3aXBlIFVwIC8gRG93biAvIExlZnQgLyBSaWdodFxuXHQvLyBsZXQgaW5pdGlhbFggPSBudWxsO1xuXHQvLyBsZXQgaW5pdGlhbFkgPSBudWxsO1xuXG5cdC8vIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSkge1xuXHQvLyBpbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXHQvLyBpbml0aWFsWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuXHQvLyB9O1xuXG5cdC8vIGZ1bmN0aW9uIG1vdmVUb3VjaChlKSB7XG5cdC8vIGlmIChpbml0aWFsWCA9PT0gbnVsbCkge1xuXHQvLyAgIHJldHVybjtcblx0Ly8gfVxuXG5cdC8vIGlmIChpbml0aWFsWSA9PT0gbnVsbCkge1xuXHQvLyAgIHJldHVybjtcblx0Ly8gfVxuXG5cdC8vIGxldCBjdXJyZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXHQvLyBsZXQgY3VycmVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcblxuXHQvLyBsZXQgZGlmZlggPSBpbml0aWFsWCAtIGN1cnJlbnRYO1xuXHQvLyBsZXQgZGlmZlkgPSBpbml0aWFsWSAtIGN1cnJlbnRZO1xuXG5cdC8vIGlmIChNYXRoLmFicyhkaWZmWCkgPiBNYXRoLmFicyhkaWZmWSkpIHtcblx0Ly8gICAvLyBzbGlkaW5nIGhvcml6b250YWxseVxuXHQvLyAgIGlmIChkaWZmWCA+IDEwKSB7XG5cdC8vICAgICAvLyBzd2lwZWQgbGVmdFxuXHQvLyAgICAgcHJldkFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSBlbHNlIHtcblx0Ly8gICAgIC8vIHN3aXBlZCByaWdodFxuXHQvLyAgICAgbmV4dEFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSAgXG5cdC8vIH0gZWxzZSB7XG5cdC8vICAgLy8gc2xpZGluZyB2ZXJ0aWNhbGx5XG5cdC8vICAgaWYgKGRpZmZZID4gMCkge1xuXHQvLyAgICAgLy8gc3dpcGVkIHVwXG5cdC8vICAgICAvLyBuZXh0QXJyb3dDbGlja2VkKClcblx0Ly8gICB9IGVsc2Uge1xuXHQvLyAgICAgLy8gc3dpcGVkIGRvd25cblx0Ly8gICAgIC8vIHByZXZBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gIFxuXHQvLyB9XG5cblx0Ly8gaW5pdGlhbFggPSBudWxsO1xuXHQvLyBpbml0aWFsWSA9IG51bGw7XG5cblx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyZWRTbGlkZXJcbiIsImltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWUsIHJlbW92ZUNvb2tpZX0gZnJvbSAnLi9jb29raWVzJ1xuXG5sZXQgZGVmZXJyZWRQcm9tcHQ7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnN0YWxscHJvbXB0JywgKGUpID0+IHtcbiAgICAvLyBQcmV2ZW50IENocm9tZSA2NyBhbmQgZWFybGllciBmcm9tIGF1dG9tYXRpY2FsbHkgc2hvd2luZyB0aGUgcHJvbXB0XG4gICAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXG4gICAgZGVmZXJyZWRQcm9tcHQgPSBlO1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWFzLWFwcCcpXG4gICAgYnRuQWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgaWYoIWdldENvb2tpZSgnc2F2ZS1hcy1hcHAnKSl7XG4gICAgICAgICQoJyNzYXZlLWFzLWFwcCcpLnRvb2x0aXAoJ3Nob3cnKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57JCgnI3NhdmUtYXMtYXBwJykudG9vbHRpcCgnaGlkZScpfSwgMTAwMDApXG4gICAgICAgIHNldENvb2tpZSgnc2F2ZS1hcy1hcHAnLCAxKVxuICAgIH1cblxuICAgIGlmKGJ0bkFkZCl7XG4gICAgICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIC8vIGhpZGUgb3VyIHVzZXIgaW50ZXJmYWNlIHRoYXQgc2hvd3Mgb3VyIEEySFMgYnV0dG9uXG4gICAgICAgICAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgcHJvbXB0JylcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHByb21wdFxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgY29uc29sZS5sb2coYC0tLS0+ICR7ZXJyb3J9YCkgfSlcblxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHVzZXIgdG8gcmVzcG9uZCB0byB0aGUgcHJvbXB0XG4gICAgICAgICAgICBkZWZlcnJlZFByb21wdC51c2VyQ2hvaWNlXG4gICAgICAgICAgICAudGhlbigoY2hvaWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGFjY2VwdGVkIHRoZSBBMkhTIHByb21wdCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRpc21pc3NlZCB0aGUgQTJIUyBwcm9tcHQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiY29uc3QgYSA9ICgpPT4ge1xuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYSIsImNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XG5cblx0XG5cdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMgPSAxKSA9PiB7XG4gICAgbGV0IGV4cGlyZXMgPSBcIlwiO1xuICAgIFxuXHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKTtcblx0ZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIFxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSAgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBsZXQgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IobGV0IGk9MDtpIDwgY2EubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAobmFtZSkgPT4geyAgIFxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUrJz07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7IHBhdGg9LzsnOyAgXG59XG5cbi8vIHNldENvb2tpZSgncHBrY29va2llJywndGVzdGNvb2tpZScsNyk7XG5cbi8vIHZhciB4ID0gZ2V0Q29va2llKCdwcGtjb29raWUnKTtcbiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCJjb25zdCBsYXp5bG9hZCA9ICgpPT4ge1xuXHR0cnkge1xuXHRcdCQoJ1tiLWxhenlsb2FkXScpLmVhY2goZnVuY3Rpb24oZSl7XG5cdFx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRcdGNvbnN0IG5ld1NyYyA9IF90aGlzLmRhdGEoJ3NyYycpXG5cdFx0XHRfdGhpcy5wcm9wKCdzcmMnLCBuZXdTcmMpXG5cblx0XHR9KVxuXHR9IGNhdGNoKGUpe1xuXHRcdGNvbnNvbGUuZXJyb3IoJ2ItZGVidWcnLCBlKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhenlsb2FkIiwiZmV0Y2goJ2h0dHBzOi8vZml6emEuYXovc2l0ZS9sb2dJbmZvJykudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS50ZXh0KCkpLnRoZW4oKHQpPT57XG4gICAgJCgnI2xvZy1pbmZvJykuaHRtbCh0KVxufSkiLCIndXNlIHN0cmljdCdcbi8vLy8vLyBQT1BVUFxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0IG1hc2sgZnJvbSAnanF1ZXJ5LW1hc2stcGx1Z2luJ1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXG5cbi8vIGltcG9ydCAkIGZyb20gJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS0zLjMuMS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9wb3BwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9kYXRlcGlja2VyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LmZvcm0ubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9mb3JtLnZhcmlhYmxlcydcblxuaW1wb3J0ICcuLi9jb21waWxlZF9qcy9vZmZsaW5lLm1pbidcblxuLy8gaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcCdcbmltcG9ydCBhIGZyb20gJy4vYSdcbmltcG9ydCBuYXYgZnJvbSAnLi9uYXYnXG5pbXBvcnQgd2luZG93U2Nyb2xsTGlzdGVuZXIgZnJvbSAnLi93aW5kb3dTY3JvbGxMaXN0ZW5lcidcbmltcG9ydCBkb2N1bWVudExpc3RlbmVyIGZyb20gJy4vZG9jdW1lbnRMaXN0ZW5lcidcbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInXG5pbXBvcnQgc2hvcHBpbmdDYXJkIGZyb20gJy4vc2hvcHBpbmdDYXJkJ1xuaW1wb3J0IG9wZW5Qb3B1cCBmcm9tICcuL29wZW5Qb3B1cCdcbmltcG9ydCByZXBlYXRJdGVtIGZyb20gJy4vcmVwZWF0SXRlbSdcbmltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuaW1wb3J0IGxhenlsb2FkIGZyb20gJy4vbGF6eWxvYWQnXG5pbXBvcnQgc21zVmVyaWZpY2F0aW9uIGZyb20gJy4vc21zVmVyaWZpY2F0aW9uJ1xuaW1wb3J0IExheWVyZWRTbGlkZXIgZnJvbSAnLi9MYXllcmVkU2xpZGVyJ1xuLy8gaW1wb3J0IFJhbmRvbURlZXIgZnJvbSAnLi9SYW5kb21EZWVyJ1xuaW1wb3J0IFBXQSBmcm9tICcuL1BXQSdcbmltcG9ydCBHZXRQcnVkdWN0RnJvbVVybCBmcm9tICcuL0dldFBydWR1Y3RGcm9tVXJsJ1xuaW1wb3J0IGxvYWRET00gZnJvbSAnLi9sb2FkRE9NJ1xuXG5cbmltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWV9IGZyb20gJy4vY29va2llcydcblxuXG5cbi8vIGltcG9ydCAnYm9vdHN0cmFwJ1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcbi8vIHJlcXVpcmUoXCJAY2hlbmZlbmd5dWFuL2RhdGVwaWNrZXJcIilcblxuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgfVxufVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC12aXNpYmxlLWZpcnN0Jykuc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSdcblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0Ly8gc2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cdHNtc1ZlcmlmaWNhdGlvbigpXG5cdExheWVyZWRTbGlkZXIoKVxuXG5cblxuXG5cdC8vIHNvbHZlIGhhc2ggYnVnIGluIGNocm9tZVxuXHR2YXIgaXNDaHJvbWUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiBpc0Nocm9tZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG5cdCQoJy5wcmVzc0Nsb3NlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0cHJlc3NDbG9zZS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aHRtbC5yZW1vdmVDbGFzcygneS1oaWRkZW4nKX0sIDUwMClcblxuXHRcdGNsb3NlTmF2KClcblx0fSlcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJkYXRlcGlja2VyXCJdJykuZGF0ZXBpY2tlcih7IGZvcm1hdDogXCJkZC9tbS95eXl5XCIgfSlcblxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCB0ID0gJCh0aGlzKVxuXHRcdHQubWFzayh0LmF0dHIoJ2RhdGEtbWFzaycpLCB7XG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cblx0XHR9KVxuXHR9KVxuXG5cdCQoJyNEZWNsYXJhdGlvbnNfbGlua19pZCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdCQoJyNEZWNsYXJhdGlvbnNfbmFtZScpLnRyaWdnZXIoJ2ZvY3VzJylcblx0fSlcblxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJzknXSA9ICcnO1xuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XG5cdC8vICQoJy5qcXVlcnlNYXNrJykubWFzaygnMjIzMScpO1xuXG5cdFxuXHQvLyBDbGlwYm9hcmRcblx0Ly8gbmV3IENsaXBib2FyZCgnLmJ0bi1jbGlwYm9hcmQnKTtcblx0dmFyIHRpbWVvdXQ7XG5cdC8vIGNvbnN0IHRpbWVvdXRcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XG4gICAgfVxuXG4gICBcblxuXHRcblx0Y29uc3QgdG9vbHRpcCA9ICQoJy50b29sdGlwdGV4dCcpXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLmJpbmQoJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkucGFyZW50KCdidXR0b24nKVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXHRcdC8vIENPUFlcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9IHRhcmdldC5jbG9zZXN0KCcuY29weScpLmZpbmQoJy5jb3B5X192YWx1ZScpLnRleHQoKS50cmltKClcblx0XHRjb25zdCBjb3B5Tm9kZSA9ICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSlcblx0XHRjb3B5Tm9kZS5hZGRDbGFzcygnYW5pbWF0ZWQgaGVhcnRCZWF0Jylcblx0XHRjb25zdCBjb3B5VGV4dCA9IGNvcHlOb2RlLnRleHQoKS50cmltKClcblx0XHRjb25zb2xlLmxvZyhjb3B5VGV4dClcblx0XHRjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdFx0Ly8gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKS50ZXh0KClcblxuXHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcGllZCcpKVxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGNvcHlOb2RlLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxuXHRcdH0sIDEwMDApXG5cblx0XHQvLyBjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdH0pXG5cdCQoJy5idG4tY2xpcGJvYXJkJykubW91c2VvdXQoZT0+e1xuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlOb2RlID0gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9LCAyMDApXG5cdH0pXG5cdCQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoKVxuXG5cblxuXHQvLyB3ZSBhZGQgdGhlIG1vZGFsIHRvIHRoZSBlbmQgb2YgYm9keSBcblx0Y29uc3QgbW9kYWwgPSAkKCcuYWRkLXRvLXRoZS1lbmQtb2YtYm9keScpXG5cdCQoJ2JvZHknKS5hcHBlbmQobW9kYWwuY2xvbmUoKSlcblx0bW9kYWwucmVtb3ZlKClcblxuXG5cdFxuXG5cblx0Ly8gc2Nyb2xsIHRvIG9yZGVyXG5cdCQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuc2Nyb2xsLXRvLW9yZGVyXCIsIGZ1bmN0aW9uIChlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24pXG5cdFx0aWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykubGVuZ3RoPjIpe1xuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gJy8jb3JkZXJzLWhvbGRlcidcblxuXHRcdH0gZWxzZSB7XG5cblx0ICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdCAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIiNvcmRlcnMtaG9sZGVyXCIpLm9mZnNldCgpLnRvcCAtIDEwXG5cdCAgICAgICAgfSwgMTAwMCk7XG5cdCAgICB9XG4gICAgfSk7XG5cbiAgICAvL3Njcm9sbCB0byB0b3BcbiAgLy8gICAkKFwiLnNjcm9sbC10by10b3BcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdC8vIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gIC8vICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgLy8gICAgICAgfSwgMTAwMCk7XG4gIC8vICAgfSk7XG5cblxuIC8vICAgXHQkKCcuYi1pbnZvaWNlX19pbnB1dCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHQvLyBcdGNvbnN0IGZpbGVzID0gJCgnLmItaW52b2ljZV9faW5wdXQnKVswXS5maWxlc1xuXHQvLyBcdGNvbnN0IGZpbGVJbmZvID0gJCgnLmItaW52b2ljZV9fZmlsZWluZm8nKVxuXHQvLyBcdGZpbGVJbmZvLnRleHQoJycpIFxuXG5cdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKyl7XG5cdC8vIFx0XHRjb25zdCBuYW1lID0gZmlsZXNbaV0ubmFtZVxuXHQvLyBcdFx0Y29uc3Qgc2l6ZSA9IGZpbGVzW2ldLnNpemUvMTAyNC8xMDI0XG5cdC8vIFx0XHRmaWxlSW5mby5hcHBlbmQoJChgPGEgY2xhc3M9XCJiLWludm9pY2VfX2ZpbGVuYW1lIHAtMSBtci0xXCI+JHtuYW1lfTxzcGFuIGNsYXNzPVwibWwtMlwiIGhyZWY9XCJcIj4mdGltZXM7PC9zcGFuPjwvYT5gKSlcblx0Ly8gXHR9XG5cdCAgXG5cdC8vIH0pXG5cblx0JCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG4gICAgXG59KSAvLyByZWFkeVxuXG4vLyB3aW5kb3cgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdFxuXG5cdGxhenlsb2FkKClcbn0pICBcblxuXG4iLCJcbmNvbnN0IG5hdiA9ICgpID0+IHtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYW1idXJnZXInLCAoKT0+e1xuXHRcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHRcdHNldFRpbWVvdXQoKCk9Pm5hdi5hZGRDbGFzcygnYi1uYXYtLWFjdGl2ZScpLCAxMDApXG5cdFx0cHJlc3NDbG9zZS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblxuXHR9KVxuXG5cdCQoJy5uYXYtdGFiLWJ1dHRvbicpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQkKCcuYi1uYXZfX3RhYicpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdHRhcmdldC5wYXJlbnQoJy5iLW5hdl9fdGFiJykuYWRkQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcgKyBocmVmKS5hZGRDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2XG4iLCJjb25zdCBvcGVuUG9wdXAgPSAoKT0+IHtcblx0Ly8gY29uc3QgYmx1cnJ5QmcgPSAkKCcuYmx1cnJ5LWJhY2tncm91bmQnKVxuXHRjb25zdCBwb3B1cCA9ICQoJy5iLXBvcHVwJylcblx0Y29uc3QgYk5hdiA9ICQoJy5iLW5hdicpIC8vIHJlc3BvbnNpdmUgaXNzdWVzXG5cdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblxuXHQkKCcub3BlblBvcHVwJykuY2xpY2soZT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0Ly8gY29uc3Qgb2Zmc2V0ID0gJChlLnRhcmdldCkub2Zmc2V0KClcblx0XHQvLyBjb25zdCB0b3AgPSBvZmZzZXQudG9wXG5cdFx0Ly8gY29uc3QgbGVmdCA9IG9mZnNldC5sZWZ0XG5cdFx0Yk5hdi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0Ly8gYmx1cnJ5QmcuYWRkQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdCQoJy5wcmVzc0Nsb3NlJykuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5oaWRlKClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuYi1wb3B1cC0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0fSwgMzAwKVxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtXG5cblxuY29uc3QgcmVwZWF0TmV3SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHJlcGVhdEl0ZW1CdXR0b24sIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpXG5cdFx0XHRcdHBhcmVudEl0ZW0uYW5pbWF0ZSh7XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0fSwgJ2Zhc3QnLCAnc3dpbmcnLCBcblx0XHRcdFx0XHQoKSA9PiBwYXJlbnRJdGVtLnJlbW92ZSgpXG5cdFx0XHRcdClcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxuXG4iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCcuc2hvcHBpbmctY2FyZCcsIChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IHNtc1ZlcmlmaWNhdGlvbiA9ICgpPT4ge1xuXHRjb25zdCBpbnB1dCA9ICQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5lcSgwKVxuXHRjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXhsZW5ndGgnKSlcblx0Y29uc3QgZm9udFNpemUgPSBwYXJzZUludChpbnB1dC5jc3MoJ2ZvbnRTaXplJykpXG5cdGNvbnN0IGRhc2hlcyA9ICQoJy5iLXZlcmlmaWNhdGlvbl9fZGFzaGVzJylcblx0Y29uc3QgdW5kZXJsaW5lV2lkdGggPSAzMFxuXHRjb25zdCB1bmRlcmxpbmVNYXJnaW5SaWdodCA9IDIyXG5cdGNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gM1xuXG5cdC8vIGNvbnNvbGUubG9nKCBtYXhMZW5ndGgsIGZvbnRTaXplKVxuXHRcblx0ZGFzaGVzLmFwcGVuZCgnPHNwYW4+PC9zcGFuPicucmVwZWF0KG1heExlbmd0aCkpXG5cdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5jc3Moe1xuXHRcdFx0ICB3aWR0aDogKHVuZGVybGluZVdpZHRoICogKG1heExlbmd0aCArIDEpICsgdW5kZXJsaW5lTWFyZ2luUmlnaHQgKiAobWF4TGVuZ3RoIC0gMSkpICsgaG9yaXpvbnRhbFBhZGRpbmcgKiAyLFxuXG5cdFx0XHR9KVxuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uJykuY3NzKHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0XHR9KVxuXHRcdFx0aW5wdXQuZm9jdXMoKVxuXHRcdH0pXG5cdFxuXHRpbnB1dC5rZXl1cCgoKT0+e1xuXHRcdGlmKGlucHV0LnZhbCgpLmxlbmd0aD49bWF4TGVuZ3RoKSB7XG5cdFx0XHQkKCcudmVyaWZpY2F0aW9uQnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuXHRcdH1cblx0fSlcblx0XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzbXNWZXJpZmljYXRpb24iLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
