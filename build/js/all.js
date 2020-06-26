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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxjb21waWxlZF9qc1xcb2ZmbGluZS5taW4uanMiLCJzcmNcXGpzXFxtYWluXFxHZXRQcnVkdWN0RnJvbVVybC5qcyIsInNyY1xcanNcXG1haW5cXExheWVyZWRTbGlkZXIuanMiLCJzcmNcXGpzXFxtYWluXFxQV0EuanMiLCJzcmNcXGpzXFxtYWluXFxhLmpzIiwic3JjXFxqc1xcbWFpblxcY2xvc2VOYXYuanMiLCJzcmNcXGpzXFxtYWluXFxjb29raWVzLmpzIiwic3JjXFxqc1xcbWFpblxcZG9jdW1lbnRMaXN0ZW5lci5qcyIsInNyY1xcanNcXG1haW5cXGxhenlsb2FkLmpzIiwic3JjXFxqc1xcbWFpblxcbG9hZERPTS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiLCJzcmNcXGpzXFxtYWluXFxuYXYuanMiLCJzcmNcXGpzXFxtYWluXFxvcGVuUG9wdXAuanMiLCJzcmNcXGpzXFxtYWluXFxyZXBlYXRJdGVtLmpzIiwic3JjXFxqc1xcbWFpblxcc2hvcHBpbmdDYXJkLmpzIiwic3JjXFxqc1xcbWFpblxcc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjXFxqc1xcbWFpblxcd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBLEdBQUMsWUFBVTtBQUFDLFFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFrQixJQUFFLFNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQWE7QUFBQyxVQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBWSxJQUFBLEVBQUEsQ0FBSyxLQUFBLENBQUEsSUFBUyxFQUFULFNBQUEsRUFBQTtBQUFxQixZQUFHO0FBQUMsY0FBRSxF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QUFBO0FBSEQsRUFBQTs7bUJBc0NBLG9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qISBvZmZsaW5lLWpzIDAuNy4xMyAqL1xyXG4oZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZztkPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY7ZT1bXTtmb3IoZCBpbiBiLnByb3RvdHlwZSl0cnl7Zj1iLnByb3RvdHlwZVtkXSxudWxsPT1hW2RdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBmP2UucHVzaChhW2RdPWYpOmUucHVzaCh2b2lkIDApfWNhdGNoKGcpe2M9Z31yZXR1cm4gZX0sYT17fSxudWxsPT1hLm9wdGlvbnMmJihhLm9wdGlvbnM9e30pLGM9e2NoZWNrczp7eGhyOnt1cmw6ZnVuY3Rpb24oKXtyZXR1cm5cIi9mYXZpY29uLmljbz9fPVwiK01hdGguZmxvb3IoMWU5Kk1hdGgucmFuZG9tKCkpfSx0aW1lb3V0OjVlM30saW1hZ2U6e3VybDpmdW5jdGlvbigpe3JldHVyblwiL2Zhdmljb24uaWNvP189XCIrTWF0aC5mbG9vcigxZTkqTWF0aC5yYW5kb20oKSl9fSxhY3RpdmU6XCJ4aHJcIn0sY2hlY2tPbkxvYWQ6ITEsaW50ZXJjZXB0UmVxdWVzdHM6ITAscmVjb25uZWN0OiEwfSxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoO2ZvcihjPWEsaD1iLnNwbGl0KFwiLlwiKSxkPWU9MCxmPWgubGVuZ3RoO2Y+ZSYmKGc9aFtkXSxjPWNbZ10sXCJvYmplY3RcIj09dHlwZW9mIGMpO2Q9KytlKTtyZXR1cm4gZD09PWgubGVuZ3RoLTE/Yzp2b2lkIDB9LGEuZ2V0T3B0aW9uPWZ1bmN0aW9uKGIpe3ZhciBkLGY7cmV0dXJuIGY9bnVsbCE9KGQ9ZShhLm9wdGlvbnMsYikpP2Q6ZShjLGIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGY/ZigpOmZ9LFwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHNldFRpbWVvdXQoYS5jb25maXJtVXAsMTAwKX0sITEpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIixmdW5jdGlvbigpe3JldHVybiBhLmNvbmZpcm1Eb3duKCl9LCExKSxhLnN0YXRlPVwidXBcIixhLm1hcmtVcD1mdW5jdGlvbigpe3JldHVybiBhLnRyaWdnZXIoXCJjb25maXJtZWQtdXBcIiksXCJ1cFwiIT09YS5zdGF0ZT8oYS5zdGF0ZT1cInVwXCIsYS50cmlnZ2VyKFwidXBcIikpOnZvaWQgMH0sYS5tYXJrRG93bj1mdW5jdGlvbigpe3JldHVybiBhLnRyaWdnZXIoXCJjb25maXJtZWQtZG93blwiKSxcImRvd25cIiE9PWEuc3RhdGU/KGEuc3RhdGU9XCJkb3duXCIsYS50cmlnZ2VyKFwiZG93blwiKSk6dm9pZCAwfSxmPXt9LGEub249ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGcsaCxpLGo7aWYoZz1iLnNwbGl0KFwiIFwiKSxnLmxlbmd0aD4xKXtmb3Ioaj1bXSxoPTAsaT1nLmxlbmd0aDtpPmg7aCsrKWU9Z1toXSxqLnB1c2goYS5vbihlLGMsZCkpO3JldHVybiBqfXJldHVybiBudWxsPT1mW2JdJiYoZltiXT1bXSksZltiXS5wdXNoKFtkLGNdKX0sYS5vZmY9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZyxoO2lmKG51bGwhPWZbYV0pe2lmKGIpe2ZvcihlPTAsaD1bXTtlPGZbYV0ubGVuZ3RoOylnPWZbYV1bZV0sZD1nWzBdLGM9Z1sxXSxjPT09Yj9oLnB1c2goZlthXS5zcGxpY2UoZSwxKSk6aC5wdXNoKGUrKyk7cmV0dXJuIGh9cmV0dXJuIGZbYV09W119fSxhLnRyaWdnZXI9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZyxoLGk7aWYobnVsbCE9ZlthXSl7Zm9yKGc9ZlthXSxpPVtdLGQ9MCxlPWcubGVuZ3RoO2U+ZDtkKyspaD1nW2RdLGI9aFswXSxjPWhbMV0saS5wdXNoKGMuY2FsbChiKSk7cmV0dXJuIGl9fSxiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoO3JldHVybiBoPWZ1bmN0aW9uKCl7cmV0dXJuIGEuc3RhdHVzJiZhLnN0YXR1czwxMmUzP2IoKTpjKCl9LG51bGw9PT1hLm9ucHJvZ3Jlc3M/KGQ9YS5vbmVycm9yLGEub25lcnJvcj1mdW5jdGlvbigpe3JldHVybiBjKCksXCJmdW5jdGlvblwiPT10eXBlb2YgZD9kLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9LGc9YS5vbnRpbWVvdXQsYS5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gYygpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGc/Zy5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfSxlPWEub25sb2FkLGEub25sb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIGgoKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH0pOihmPWEub25yZWFkeXN0YXRlY2hhbmdlLGEub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuIDQ9PT1hLnJlYWR5U3RhdGU/aCgpOjA9PT1hLnJlYWR5U3RhdGUmJmMoKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmP2YuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH0pfSxhLmNoZWNrcz17fSxhLmNoZWNrcy54aHI9ZnVuY3Rpb24oKXt2YXIgYyxkO2Q9bmV3IFhNTEh0dHBSZXF1ZXN0LGQub2ZmbGluZT0hMSxkLm9wZW4oXCJIRUFEXCIsYS5nZXRPcHRpb24oXCJjaGVja3MueGhyLnVybFwiKSwhMCksbnVsbCE9ZC50aW1lb3V0JiYoZC50aW1lb3V0PWEuZ2V0T3B0aW9uKFwiY2hlY2tzLnhoci50aW1lb3V0XCIpKSxiKGQsYS5tYXJrVXAsYS5tYXJrRG93bik7dHJ5e2Quc2VuZCgpfWNhdGNoKGUpe2M9ZSxhLm1hcmtEb3duKCl9cmV0dXJuIGR9LGEuY2hlY2tzLmltYWdlPWZ1bmN0aW9uKCl7dmFyIGI7cmV0dXJuIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSxiLm9uZXJyb3I9YS5tYXJrRG93bixiLm9ubG9hZD1hLm1hcmtVcCx2b2lkKGIuc3JjPWEuZ2V0T3B0aW9uKFwiY2hlY2tzLmltYWdlLnVybFwiKSl9LGEuY2hlY2tzLmRvd249YS5tYXJrRG93bixhLmNoZWNrcy51cD1hLm1hcmtVcCxhLmNoZWNrPWZ1bmN0aW9uKCl7cmV0dXJuIGEudHJpZ2dlcihcImNoZWNraW5nXCIpLGEuY2hlY2tzW2EuZ2V0T3B0aW9uKFwiY2hlY2tzLmFjdGl2ZVwiKV0oKX0sYS5jb25maXJtVXA9YS5jb25maXJtRG93bj1hLmNoZWNrLGEub25YSFI9ZnVuY3Rpb24oYSl7dmFyIGIsYyxlO3JldHVybiBlPWZ1bmN0aW9uKGIsYyl7dmFyIGQ7cmV0dXJuIGQ9Yi5vcGVuLGIub3Blbj1mdW5jdGlvbihlLGYsZyxoLGkpe3JldHVybiBhKHt0eXBlOmUsdXJsOmYsYXN5bmM6ZyxmbGFnczpjLHVzZXI6aCxwYXNzd29yZDppLHhocjpifSksZC5hcHBseShiLGFyZ3VtZW50cyl9fSxjPXdpbmRvdy5YTUxIdHRwUmVxdWVzdCx3aW5kb3cuWE1MSHR0cFJlcXVlc3Q9ZnVuY3Rpb24oYSl7dmFyIGIsZCxmO3JldHVybiBmPW5ldyBjKGEpLGUoZixhKSxkPWYuc2V0UmVxdWVzdEhlYWRlcixmLmhlYWRlcnM9e30sZi5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGYuaGVhZGVyc1thXT1iLGQuY2FsbChmLGEsYil9LGI9Zi5vdmVycmlkZU1pbWVUeXBlLGYub3ZlcnJpZGVNaW1lVHlwZT1mdW5jdGlvbihhKXtyZXR1cm4gZi5taW1lVHlwZT1hLGIuY2FsbChmLGEpfSxmfSxkKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCxjKSxudWxsIT13aW5kb3cuWERvbWFpblJlcXVlc3Q/KGI9d2luZG93LlhEb21haW5SZXF1ZXN0LHdpbmRvdy5YRG9tYWluUmVxdWVzdD1mdW5jdGlvbigpe3ZhciBhO3JldHVybiBhPW5ldyBiLGUoYSksYX0sZCh3aW5kb3cuWERvbWFpblJlcXVlc3QsYikpOnZvaWQgMH0sZz1mdW5jdGlvbigpe3JldHVybiBhLmdldE9wdGlvbihcImludGVyY2VwdFJlcXVlc3RzXCIpJiZhLm9uWEhSKGZ1bmN0aW9uKGMpe3ZhciBkO3JldHVybiBkPWMueGhyLGQub2ZmbGluZSE9PSExP2IoZCxhLm1hcmtVcCxhLmNvbmZpcm1Eb3duKTp2b2lkIDB9KSxhLmdldE9wdGlvbihcImNoZWNrT25Mb2FkXCIpP2EuY2hlY2soKTp2b2lkIDB9LHNldFRpbWVvdXQoZywwKSx3aW5kb3cuT2ZmbGluZT1hfSkuY2FsbCh0aGlzKSxmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnLGgsaTtpZighd2luZG93Lk9mZmxpbmUpdGhyb3cgbmV3IEVycm9yKFwiT2ZmbGluZSBSZWNvbm5lY3QgYnJvdWdodCBpbiB3aXRob3V0IG9mZmxpbmUuanNcIik7ZD1PZmZsaW5lLnJlY29ubmVjdD17fSxmPW51bGwsZT1mdW5jdGlvbigpe3ZhciBhO3JldHVybiBudWxsIT1kLnN0YXRlJiZcImluYWN0aXZlXCIhPT1kLnN0YXRlJiZPZmZsaW5lLnRyaWdnZXIoXCJyZWNvbm5lY3Q6c3RvcHBlZFwiKSxkLnN0YXRlPVwiaW5hY3RpdmVcIixkLnJlbWFpbmluZz1kLmRlbGF5PW51bGwhPShhPU9mZmxpbmUuZ2V0T3B0aW9uKFwicmVjb25uZWN0LmluaXRpYWxEZWxheVwiKSk/YTozfSxiPWZ1bmN0aW9uKCl7dmFyIGEsYjtyZXR1cm4gYT1udWxsIT0oYj1PZmZsaW5lLmdldE9wdGlvbihcInJlY29ubmVjdC5kZWxheVwiKSk/YjpNYXRoLm1pbihNYXRoLmNlaWwoMS41KmQuZGVsYXkpLDM2MDApLGQucmVtYWluaW5nPWQuZGVsYXk9YX0sZz1mdW5jdGlvbigpe3JldHVyblwiY29ubmVjdGluZ1wiIT09ZC5zdGF0ZT8oZC5yZW1haW5pbmctPTEsT2ZmbGluZS50cmlnZ2VyKFwicmVjb25uZWN0OnRpY2tcIiksMD09PWQucmVtYWluaW5nP2goKTp2b2lkIDApOnZvaWQgMH0saD1mdW5jdGlvbigpe3JldHVyblwid2FpdGluZ1wiPT09ZC5zdGF0ZT8oT2ZmbGluZS50cmlnZ2VyKFwicmVjb25uZWN0OmNvbm5lY3RpbmdcIiksZC5zdGF0ZT1cImNvbm5lY3RpbmdcIixPZmZsaW5lLmNoZWNrKCkpOnZvaWQgMH0sYT1mdW5jdGlvbigpe3JldHVybiBPZmZsaW5lLmdldE9wdGlvbihcInJlY29ubmVjdFwiKT8oZSgpLGQuc3RhdGU9XCJ3YWl0aW5nXCIsT2ZmbGluZS50cmlnZ2VyKFwicmVjb25uZWN0OnN0YXJ0ZWRcIiksZj1zZXRJbnRlcnZhbChnLDFlMykpOnZvaWQgMH0saT1mdW5jdGlvbigpe3JldHVybiBudWxsIT1mJiZjbGVhckludGVydmFsKGYpLGUoKX0sYz1mdW5jdGlvbigpe3JldHVybiBPZmZsaW5lLmdldE9wdGlvbihcInJlY29ubmVjdFwiKSYmXCJjb25uZWN0aW5nXCI9PT1kLnN0YXRlPyhPZmZsaW5lLnRyaWdnZXIoXCJyZWNvbm5lY3Q6ZmFpbHVyZVwiKSxkLnN0YXRlPVwid2FpdGluZ1wiLGIoKSk6dm9pZCAwfSxkLnRyeU5vdz1oLGUoKSxPZmZsaW5lLm9uKFwiZG93blwiLGEpLE9mZmxpbmUub24oXCJjb25maXJtZWQtZG93blwiLGMpLE9mZmxpbmUub24oXCJ1cFwiLGkpfS5jYWxsKHRoaXMpLGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmO2lmKCF3aW5kb3cuT2ZmbGluZSl0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0cyBtb2R1bGUgYnJvdWdodCBpbiB3aXRob3V0IG9mZmxpbmUuanNcIik7Yz1bXSxmPSExLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIE9mZmxpbmUudHJpZ2dlcihcInJlcXVlc3RzOmNhcHR1cmVcIiksXCJkb3duXCIhPT1PZmZsaW5lLnN0YXRlJiYoZj0hMCksYy5wdXNoKGEpfSxlPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksajtqPWEueGhyLGc9YS51cmwsZj1hLnR5cGUsaD1hLnVzZXIsZD1hLnBhc3N3b3JkLGI9YS5ib2R5LGouYWJvcnQoKSxqLm9wZW4oZixnLCEwLGgsZCksZT1qLmhlYWRlcnM7Zm9yKGMgaW4gZSlpPWVbY10sai5zZXRSZXF1ZXN0SGVhZGVyKGMsaSk7cmV0dXJuIGoubWltZVR5cGUmJmoub3ZlcnJpZGVNaW1lVHlwZShqLm1pbWVUeXBlKSxqLnNlbmQoYil9LGE9ZnVuY3Rpb24oKXtyZXR1cm4gYz1bXX0sYj1mdW5jdGlvbigpe3ZhciBiLGQsZixnLGgsaTtmb3IoT2ZmbGluZS50cmlnZ2VyKFwicmVxdWVzdHM6Zmx1c2hcIiksaD17fSxiPTAsZj1jLmxlbmd0aDtmPmI7YisrKWc9Y1tiXSxpPWcudXJsLnJlcGxhY2UoLyhcXD98JilfPVswLTldKy8sZnVuY3Rpb24oYSxiKXtyZXR1cm5cIj9cIj09PWI/YjpcIlwifSksaFtnLnR5cGUudG9VcHBlckNhc2UoKStcIiAtIFwiK2ldPWc7Zm9yKGQgaW4gaClnPWhbZF0sZShnKTtyZXR1cm4gYSgpfSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIE9mZmxpbmUuZ2V0T3B0aW9uKFwicmVxdWVzdHNcIikhPT0hMT8oT2ZmbGluZS5vbihcImNvbmZpcm1lZC11cFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGY/KGY9ITEsYSgpKTp2b2lkIDB9KSxPZmZsaW5lLm9uKFwidXBcIixiKSxPZmZsaW5lLm9uKFwiZG93blwiLGZ1bmN0aW9uKCl7cmV0dXJuIGY9ITF9KSxPZmZsaW5lLm9uWEhSKGZ1bmN0aW9uKGEpe3ZhciBiLGMsZSxmLGc7cmV0dXJuIGc9YS54aHIsZT1hLmFzeW5jLGcub2ZmbGluZSE9PSExJiYoZj1mdW5jdGlvbigpe3JldHVybiBkKGEpfSxjPWcuc2VuZCxnLnNlbmQ9ZnVuY3Rpb24oYil7cmV0dXJuIGEuYm9keT1iLGMuYXBwbHkoZyxhcmd1bWVudHMpfSxlKT9udWxsPT09Zy5vbnByb2dyZXNzPyhnLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGYsITEpLGcuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWVvdXRcIixmLCExKSk6KGI9Zy5vbnJlYWR5c3RhdGVjaGFuZ2UsZy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gMD09PWcucmVhZHlTdGF0ZT9mKCk6ND09PWcucmVhZHlTdGF0ZSYmKDA9PT1nLnN0YXR1c3x8Zy5zdGF0dXM+PTEyZTMpJiZmKCksXCJmdW5jdGlvblwiPT10eXBlb2YgYj9iLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9KTp2b2lkIDB9KSxPZmZsaW5lLnJlcXVlc3RzPXtmbHVzaDpiLGNsZWFyOmF9KTp2b2lkIDB9LDApfS5jYWxsKHRoaXMpLGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZTtpZighT2ZmbGluZSl0aHJvdyBuZXcgRXJyb3IoXCJPZmZsaW5lIHNpbXVsYXRlIGJyb3VnaHQgaW4gd2l0aG91dCBvZmZsaW5lLmpzXCIpO2ZvcihkPVtcInVwXCIsXCJkb3duXCJdLGI9MCxjPWQubGVuZ3RoO2M+YjtiKyspZT1kW2JdLChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0W2RhdGEtc2ltdWxhdGU9J1wiK2UrXCInXVwiKXx8bG9jYWxTdG9yYWdlLk9GRkxJTkVfU0lNVUxBVEU9PT1lKSYmKG51bGw9PU9mZmxpbmUub3B0aW9ucyYmKE9mZmxpbmUub3B0aW9ucz17fSksbnVsbD09KGE9T2ZmbGluZS5vcHRpb25zKS5jaGVja3MmJihhLmNoZWNrcz17fSksT2ZmbGluZS5vcHRpb25zLmNoZWNrcy5hY3RpdmU9ZSl9LmNhbGwodGhpcyksZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZyxoLGksaixrLGwsbTtpZighd2luZG93Lk9mZmxpbmUpdGhyb3cgbmV3IEVycm9yKFwiT2ZmbGluZSBVSSBicm91Z2h0IGluIHdpdGhvdXQgb2ZmbGluZS5qc1wiKTtiPSc8ZGl2IGNsYXNzPVwib2ZmbGluZS11aVwiPjxkaXYgY2xhc3M9XCJvZmZsaW5lLXVpLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nLGE9JzxhIGhyZWYgY2xhc3M9XCJvZmZsaW5lLXVpLXJldHJ5XCI+PC9hPicsZj1mdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuaW5uZXJIVE1MPWEsYi5jaGlsZHJlblswXX0sZz1lPW51bGwsZD1mdW5jdGlvbihhKXtyZXR1cm4gayhhKSxnLmNsYXNzTmFtZSs9XCIgXCIrYX0saz1mdW5jdGlvbihhKXtyZXR1cm4gZy5jbGFzc05hbWU9Zy5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58IClcIithLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIiggfCQpXCIsXCJnaVwiKSxcIiBcIil9LGk9e30saD1mdW5jdGlvbihhLGIpe3JldHVybiBkKGEpLG51bGwhPWlbYV0mJmNsZWFyVGltZW91dChpW2FdKSxpW2FdPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gayhhKSxkZWxldGUgaVthXX0sMWUzKmIpfSxtPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlO2Q9e2RheTo4NjQwMCxob3VyOjM2MDAsbWludXRlOjYwLHNlY29uZDoxfTtmb3IoYyBpbiBkKWlmKGI9ZFtjXSxhPj1iKXJldHVybiBlPU1hdGguZmxvb3IoYS9iKSxbZSxjXTtyZXR1cm5bXCJub3dcIixcIlwiXX0sbD1mdW5jdGlvbigpe3ZhciBjLGg7cmV0dXJuIGc9ZihiKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGcpLG51bGwhPU9mZmxpbmUucmVjb25uZWN0JiZPZmZsaW5lLmdldE9wdGlvbihcInJlY29ubmVjdFwiKSYmKGcuYXBwZW5kQ2hpbGQoZihhKSksYz1nLnF1ZXJ5U2VsZWN0b3IoXCIub2ZmbGluZS11aS1yZXRyeVwiKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBhLnByZXZlbnREZWZhdWx0KCksT2ZmbGluZS5yZWNvbm5lY3QudHJ5Tm93KCl9LG51bGwhPWMuYWRkRXZlbnRMaXN0ZW5lcj9jLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGgsITEpOmMuYXR0YWNoRXZlbnQoXCJjbGlja1wiLGgpKSxkKFwib2ZmbGluZS11aS1cIitPZmZsaW5lLnN0YXRlKSxlPWcucXVlcnlTZWxlY3RvcihcIi5vZmZsaW5lLXVpLWNvbnRlbnRcIil9LGo9ZnVuY3Rpb24oKXtyZXR1cm4gbCgpLE9mZmxpbmUub24oXCJ1cFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGsoXCJvZmZsaW5lLXVpLWRvd25cIiksZChcIm9mZmxpbmUtdWktdXBcIiksaChcIm9mZmxpbmUtdWktdXAtMnNcIiwyKSxoKFwib2ZmbGluZS11aS11cC01c1wiLDUpfSksT2ZmbGluZS5vbihcImRvd25cIixmdW5jdGlvbigpe3JldHVybiBrKFwib2ZmbGluZS11aS11cFwiKSxkKFwib2ZmbGluZS11aS1kb3duXCIpLGgoXCJvZmZsaW5lLXVpLWRvd24tMnNcIiwyKSxoKFwib2ZmbGluZS11aS1kb3duLTVzXCIsNSl9KSxPZmZsaW5lLm9uKFwicmVjb25uZWN0OmNvbm5lY3RpbmdcIixmdW5jdGlvbigpe3JldHVybiBkKFwib2ZmbGluZS11aS1jb25uZWN0aW5nXCIpLGsoXCJvZmZsaW5lLXVpLXdhaXRpbmdcIil9KSxPZmZsaW5lLm9uKFwicmVjb25uZWN0OnRpY2tcIixmdW5jdGlvbigpe3ZhciBhLGIsYztyZXR1cm4gZChcIm9mZmxpbmUtdWktd2FpdGluZ1wiKSxrKFwib2ZmbGluZS11aS1jb25uZWN0aW5nXCIpLGE9bShPZmZsaW5lLnJlY29ubmVjdC5yZW1haW5pbmcpLGI9YVswXSxjPWFbMV0sZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJldHJ5LWluLXZhbHVlXCIsYiksZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJldHJ5LWluLXVuaXRcIixjKX0pLE9mZmxpbmUub24oXCJyZWNvbm5lY3Q6c3RvcHBlZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGsoXCJvZmZsaW5lLXVpLWNvbm5lY3Rpbmcgb2ZmbGluZS11aS13YWl0aW5nXCIpLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZXRyeS1pbi12YWx1ZVwiLG51bGwpLGUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZXRyeS1pbi11bml0XCIsbnVsbCl9KSxPZmZsaW5lLm9uKFwicmVjb25uZWN0OmZhaWx1cmVcIixmdW5jdGlvbigpe3JldHVybiBoKFwib2ZmbGluZS11aS1yZWNvbm5lY3QtZmFpbGVkLTJzXCIsMiksaChcIm9mZmxpbmUtdWktcmVjb25uZWN0LWZhaWxlZC01c1wiLDUpfSksT2ZmbGluZS5vbihcInJlY29ubmVjdDpzdWNjZXNzXCIsZnVuY3Rpb24oKXtyZXR1cm4gaChcIm9mZmxpbmUtdWktcmVjb25uZWN0LXN1Y2NlZWRlZC0yc1wiLDIpLGgoXCJvZmZsaW5lLXVpLXJlY29ubmVjdC1zdWNjZWVkZWQtNXNcIiw1KX0pfSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP2ooKTpudWxsIT1kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsaiwhMSk6KGM9ZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlLGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3JldHVyblwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmooKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjP2MuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH0pfS5jYWxsKHRoaXMpOyIsIihmdW5jdGlvbigpe1xyXG5cdGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXHJcblx0aWYoc2VhcmNoUGFyYW1zLmdldCgnbGluaycpKXtcclxuXHRcdCQoJyNPcmRlcnNfbGluaycpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdsaW5rJykpXHJcblx0XHQkKCcjT3JkZXJzX2NvdW50JykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ2NvdW50JykpXHJcblx0XHQkKCcjT3JkZXJzX3ByaWNlJykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ3ByaWNlJykpXHJcblx0XHQkKCcjT3JkZXJzX3NpemVfc3RyJykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ3NpemUnKSlcclxuXHRcdCQoJyNPcmRlcnNfY29sb3InKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnY29sb3InKSlcclxuXHJcblx0XHQkKHdpbmRvdykuYmluZChcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlYXJjaFBhcmFtcy5nZXQoJ3ByaWNlJykmJiQoJyNwcm9jZWR1cmUtZm9ybSAjT3JkZXJzX2xpbmsnKS50cmlnZ2VyKCdibHVyJylcclxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe3BhZ2U6IDF9LCBcInRpdGxlIDFcIiwgXCJcIilcclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcblx0XHJcbn0pKCkiLCJjb25zdCBMYXllcmVkU2xpZGVyID0gKCk9PiB7XHJcblxyXG5cdGNvbnN0IGxheWVyZWRTbGlkZXIgPSAkKCcubGF5ZXJlZC1zbGlkZXInKVxyXG5cdGNvbnN0IGRvdENsb25lID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxyXG5cdGNvbnN0IGluZGljYXRvcnMgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2luZGljYXRvcnMnKVxyXG5cdGNvbnN0IGl0ZW0gPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2l0ZW0nKVxyXG5cdGNvbnN0IGFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdycpXHJcblx0Y29uc3QgbmV4dEFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tbmV4dCcpXHJcblx0Y29uc3QgcHJldkFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tcHJldicpXHJcblx0Y29uc3QgY291bnQgPSBpdGVtLmxlbmd0aFxyXG5cdGxldCBpID0gMVxyXG5cdHdoaWxlKGkgPCBjb3VudCl7XHJcblx0XHRpbmRpY2F0b3JzLmFwcGVuZChkb3RDbG9uZS5jbG9uZSgpKVxyXG5cdFx0aSsrXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0IGRvdCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90JylcclxuXHRkb3QuY2xpY2soZnVuY3Rpb24oKXtcclxuXHQgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpXHJcblx0ICBcclxuXHQgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxyXG5cdCAgaXRlbS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxyXG5cdCAgXHJcblx0ICBkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXHJcblx0ICBkb3QuZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxyXG5cdCAgXHJcblx0ICBzbGlkZXJDaGFuZ2VkKGluZGV4KVxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IG5leHRBcnJvd0NsaWNrZWQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXHJcblx0XHRjb25zdCBuZXh0SW5kZXggPSBpbmRleDxjb3VudC0xID8gaW5kZXgrMSA6IDBcclxuXHJcblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcclxuXHRcdGl0ZW0uZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXHJcblxyXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxyXG5cdFx0ZG90LmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXHJcblx0XHRzbGlkZXJDaGFuZ2VkKG5leHRJbmRleClcclxuXHR9XHJcblx0Y29uc3QgcHJldkFycm93Q2xpY2tlZCA9ICgpID0+IHtcclxuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXHJcblx0XHRjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIDFcclxuXHJcblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcclxuXHRcdGl0ZW0uZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXHJcblxyXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxyXG5cdFx0ZG90LmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXHJcblx0XHRzbGlkZXJDaGFuZ2VkKHByZXZJbmRleClcclxuXHR9XHJcblx0bmV4dEFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxyXG5cdFx0bmV4dEFycm93Q2xpY2tlZCgpXHJcblx0fSlcclxuXHJcblx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRwcmV2QXJyb3dDbGlja2VkKClcclxuXHR9KVxyXG5cclxuXHRjb25zdCBzbGlkZXJDaGFuZ2VkID0gKG5ld0luZGV4KSA9PiB7XHJcblx0ICBhcnJvdy5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxyXG5cdCAgaWYobmV3SW5kZXgrMT09Y291bnQpIHsgLy8gbGFzdFxyXG5cdCAgICAvLyBuZXh0QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcclxuXHQgIH0gZWxzZSBpZihuZXdJbmRleD09MCkge1xyXG5cdCAgICAvLyBwcmV2QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcclxuXHQgIH0gXHJcblx0fVxyXG5cclxuXHQvLyBpbnRlcnZhbFxyXG5cclxuXHRcclxuXHRsZXQgaW50ZXJ2YWwgPSBudWxsXHJcblxyXG5cdGNvbnN0IHN0YXJ0SW50ZXJ2YWwgPSAoKSA9PiB7XHJcblx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRBcnJvd0NsaWNrZWQsIDUwMDApXHJcblx0fVxyXG5cdHN0YXJ0SW50ZXJ2YWwoKVxyXG5cclxuXHRsYXllcmVkU2xpZGVyLmhvdmVyKCgpPT4ge1xyXG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuXHR9LCAoKSA9PiBzdGFydEludGVydmFsKCkgKVxyXG5cclxuXHJcblxyXG5cdC8vIGxheWVyZWRTbGlkZXIub24oXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0VG91Y2gpO1xyXG5cdC8vIGxheWVyZWRTbGlkZXIub24oXCJ0b3VjaG1vdmVcIiwgbW92ZVRvdWNoKTtcclxuXHJcblx0Ly8gLy8gU3dpcGUgVXAgLyBEb3duIC8gTGVmdCAvIFJpZ2h0XHJcblx0Ly8gbGV0IGluaXRpYWxYID0gbnVsbDtcclxuXHQvLyBsZXQgaW5pdGlhbFkgPSBudWxsO1xyXG5cclxuXHQvLyBmdW5jdGlvbiBzdGFydFRvdWNoKGUpIHtcclxuXHQvLyBpbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG5cdC8vIGluaXRpYWxZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gZnVuY3Rpb24gbW92ZVRvdWNoKGUpIHtcclxuXHQvLyBpZiAoaW5pdGlhbFggPT09IG51bGwpIHtcclxuXHQvLyAgIHJldHVybjtcclxuXHQvLyB9XHJcblxyXG5cdC8vIGlmIChpbml0aWFsWSA9PT0gbnVsbCkge1xyXG5cdC8vICAgcmV0dXJuO1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gbGV0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcblx0Ly8gbGV0IGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblxyXG5cdC8vIGxldCBkaWZmWCA9IGluaXRpYWxYIC0gY3VycmVudFg7XHJcblx0Ly8gbGV0IGRpZmZZID0gaW5pdGlhbFkgLSBjdXJyZW50WTtcclxuXHJcblx0Ly8gaWYgKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkge1xyXG5cdC8vICAgLy8gc2xpZGluZyBob3Jpem9udGFsbHlcclxuXHQvLyAgIGlmIChkaWZmWCA+IDEwKSB7XHJcblx0Ly8gICAgIC8vIHN3aXBlZCBsZWZ0XHJcblx0Ly8gICAgIHByZXZBcnJvd0NsaWNrZWQoKVxyXG5cdC8vICAgfSBlbHNlIHtcclxuXHQvLyAgICAgLy8gc3dpcGVkIHJpZ2h0XHJcblx0Ly8gICAgIG5leHRBcnJvd0NsaWNrZWQoKVxyXG5cdC8vICAgfSAgXHJcblx0Ly8gfSBlbHNlIHtcclxuXHQvLyAgIC8vIHNsaWRpbmcgdmVydGljYWxseVxyXG5cdC8vICAgaWYgKGRpZmZZID4gMCkge1xyXG5cdC8vICAgICAvLyBzd2lwZWQgdXBcclxuXHQvLyAgICAgLy8gbmV4dEFycm93Q2xpY2tlZCgpXHJcblx0Ly8gICB9IGVsc2Uge1xyXG5cdC8vICAgICAvLyBzd2lwZWQgZG93blxyXG5cdC8vICAgICAvLyBwcmV2QXJyb3dDbGlja2VkKClcclxuXHQvLyAgIH0gIFxyXG5cdC8vIH1cclxuXHJcblx0Ly8gaW5pdGlhbFggPSBudWxsO1xyXG5cdC8vIGluaXRpYWxZID0gbnVsbDtcclxuXHJcblx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdC8vIH07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllcmVkU2xpZGVyXHJcbiIsImltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWUsIHJlbW92ZUNvb2tpZX0gZnJvbSAnLi9jb29raWVzJ1xyXG5cclxubGV0IGRlZmVycmVkUHJvbXB0O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCAoZSkgPT4ge1xyXG4gICAgLy8gUHJldmVudCBDaHJvbWUgNjcgYW5kIGVhcmxpZXIgZnJvbSBhdXRvbWF0aWNhbGx5IHNob3dpbmcgdGhlIHByb21wdFxyXG4gICAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXHJcbiAgICBkZWZlcnJlZFByb21wdCA9IGU7XHJcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1hcy1hcHAnKVxyXG4gICAgYnRuQWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIGlmKCFnZXRDb29raWUoJ3NhdmUtYXMtYXBwJykpe1xyXG4gICAgICAgICQoJyNzYXZlLWFzLWFwcCcpLnRvb2x0aXAoJ3Nob3cnKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PnskKCcjc2F2ZS1hcy1hcHAnKS50b29sdGlwKCdoaWRlJyl9LCAxMDAwMClcclxuICAgICAgICBzZXRDb29raWUoJ3NhdmUtYXMtYXBwJywgMSlcclxuICAgIH1cclxuXHJcbiAgICBpZihidG5BZGQpe1xyXG4gICAgICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAvLyBoaWRlIG91ciB1c2VyIGludGVyZmFjZSB0aGF0IHNob3dzIG91ciBBMkhTIGJ1dHRvblxyXG4gICAgICAgICAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBwcm9tcHQnKVxyXG4gICAgICAgICAgICAvLyBTaG93IHRoZSBwcm9tcHRcclxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IGNvbnNvbGUubG9nKGAtLS0tPiAke2Vycm9yfWApIH0pXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHVzZXIgdG8gcmVzcG9uZCB0byB0aGUgcHJvbXB0XHJcbiAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0LnVzZXJDaG9pY2VcclxuICAgICAgICAgICAgLnRoZW4oKGNob2ljZVJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gJ2FjY2VwdGVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgYWNjZXB0ZWQgdGhlIEEySFMgcHJvbXB0Jyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRpc21pc3NlZCB0aGUgQTJIUyBwcm9tcHQnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQgPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7IiwiY29uc3QgYSA9ICgpPT4ge1xyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhIiwiY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcclxuXHJcblx0XHJcblx0Y29uc3QgbmF2ID0gJCgnLmItbmF2JylcclxuXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMgPSAxKSA9PiB7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcbiAgICBcclxuXHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG5cdGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xyXG4gICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IobGV0IGk9MDtpIDwgY2EubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjID0gY2FbaV07XHJcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcclxuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PiB7ICAgXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lKyc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87JzsgIFxyXG59XHJcblxyXG4vLyBzZXRDb29raWUoJ3Bwa2Nvb2tpZScsJ3Rlc3Rjb29raWUnLDcpO1xyXG5cclxuLy8gdmFyIHggPSBnZXRDb29raWUoJ3Bwa2Nvb2tpZScpO1xyXG4iLCJpbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcclxuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAoZSk9PntcclxuXHRcdGNvbnN0IF90aGlzID0gJChlLnRhcmdldClcclxuXHRcdFxyXG5cclxuXHRcdC8vIGlmIG5vdCBzZWxmIGNsaWNrZWRcclxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xyXG5cdFx0XHRjbG9zZU5hdigpXHJcblxyXG5cdFx0fVxyXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zaG9wcGluZy1jYXJkJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykubGVuZ3RoKXtcclxuXHRcdFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcclxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50TGlzdGVuZXJcclxuIiwiY29uc3QgbGF6eWxvYWQgPSAoKT0+IHtcclxuXHR0cnkge1xyXG5cdFx0JCgnW2ItbGF6eWxvYWRdJykuZWFjaChmdW5jdGlvbihlKXtcclxuXHRcdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXHJcblx0XHRcdGNvbnN0IG5ld1NyYyA9IF90aGlzLmRhdGEoJ3NyYycpXHJcblx0XHRcdF90aGlzLnByb3AoJ3NyYycsIG5ld1NyYylcclxuXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2goZSl7XHJcblx0XHRjb25zb2xlLmVycm9yKCdiLWRlYnVnJywgZSlcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhenlsb2FkIiwiZmV0Y2goJ2h0dHBzOi8vZml6emEuYXovc2l0ZS9sb2dJbmZvJykudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS50ZXh0KCkpLnRoZW4oKHQpPT57XHJcbiAgICAkKCcjbG9nLWluZm8nKS5odG1sKHQpXHJcbn0pIiwiJ3VzZSBzdHJpY3QnXHJcbi8vLy8vLyBQT1BVUFxyXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbi8vIGltcG9ydCBtYXNrIGZyb20gJ2pxdWVyeS1tYXNrLXBsdWdpbidcclxuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXHJcblxyXG4vLyBpbXBvcnQgJCBmcm9tICcuLi9jb21waWxlZF9qcy9qcXVlcnktMy4zLjEubWluJ1xyXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xyXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3BvcHBlci5taW4nXHJcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZGF0ZXBpY2tlci5taW4nXHJcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcclxuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAuYnVuZGxlLm1pbidcclxuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAtc2VsZWN0Lm1pbidcclxuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcclxuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkuZm9ybS5taW4nXHJcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZm9ybS52YXJpYWJsZXMnXHJcblxyXG5pbXBvcnQgJy4uL2NvbXBpbGVkX2pzL29mZmxpbmUubWluJ1xyXG5cclxuLy8gaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcCdcclxuaW1wb3J0IGEgZnJvbSAnLi9hJ1xyXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xyXG5pbXBvcnQgd2luZG93U2Nyb2xsTGlzdGVuZXIgZnJvbSAnLi93aW5kb3dTY3JvbGxMaXN0ZW5lcidcclxuaW1wb3J0IGRvY3VtZW50TGlzdGVuZXIgZnJvbSAnLi9kb2N1bWVudExpc3RlbmVyJ1xyXG4vLyBpbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xyXG5pbXBvcnQgc2hvcHBpbmdDYXJkIGZyb20gJy4vc2hvcHBpbmdDYXJkJ1xyXG5pbXBvcnQgb3BlblBvcHVwIGZyb20gJy4vb3BlblBvcHVwJ1xyXG5pbXBvcnQgcmVwZWF0SXRlbSBmcm9tICcuL3JlcGVhdEl0ZW0nXHJcbmltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xyXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi9sYXp5bG9hZCdcclxuaW1wb3J0IHNtc1ZlcmlmaWNhdGlvbiBmcm9tICcuL3Ntc1ZlcmlmaWNhdGlvbidcclxuaW1wb3J0IExheWVyZWRTbGlkZXIgZnJvbSAnLi9MYXllcmVkU2xpZGVyJ1xyXG4vLyBpbXBvcnQgUmFuZG9tRGVlciBmcm9tICcuL1JhbmRvbURlZXInXHJcbmltcG9ydCBQV0EgZnJvbSAnLi9QV0EnXHJcbmltcG9ydCBHZXRQcnVkdWN0RnJvbVVybCBmcm9tICcuL0dldFBydWR1Y3RGcm9tVXJsJ1xyXG5pbXBvcnQgbG9hZERPTSBmcm9tICcuL2xvYWRET00nXHJcblxyXG5cclxuaW1wb3J0IHtzZXRDb29raWUsIGdldENvb2tpZX0gZnJvbSAnLi9jb29raWVzJ1xyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCdcclxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcclxuLy8gcmVxdWlyZShcIkBjaGVuZmVuZ3l1YW4vZGF0ZXBpY2tlclwiKVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XHJcbiAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgZm4oKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXHJcbiAgfVxyXG59XHJcblxyXG5yZWFkeShmdW5jdGlvbigpIHtcclxuXHQvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90LXZpc2libGUtZmlyc3QnKS5zdHlsZS52aXNpYmlsaXR5PSd2aXNpYmxlJ1xyXG5cdG5hdigpXHJcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxyXG5cdGRvY3VtZW50TGlzdGVuZXIoKVxyXG5cdC8vIHNsaWRlcihTd2lwZXIpXHJcblx0c2hvcHBpbmdDYXJkKClcclxuXHRvcGVuUG9wdXAoKVxyXG5cdHJlcGVhdEl0ZW0oKVxyXG5cdHNtc1ZlcmlmaWNhdGlvbigpXHJcblx0TGF5ZXJlZFNsaWRlcigpXHJcblxyXG5cclxuXHJcblxyXG5cdC8vIHNvbHZlIGhhc2ggYnVnIGluIGNocm9tZVxyXG5cdHZhciBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgaXNDaHJvbWUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuXHJcblx0JCgnLnByZXNzQ2xvc2UnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGU9PntcclxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcclxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXHJcblx0XHRwcmVzc0Nsb3NlLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe2h0bWwucmVtb3ZlQ2xhc3MoJ3ktaGlkZGVuJyl9LCA1MDApXHJcblxyXG5cdFx0Y2xvc2VOYXYoKVxyXG5cdH0pXHJcblxyXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImRhdGVwaWNrZXJcIl0nKS5kYXRlcGlja2VyKHsgZm9ybWF0OiBcImRkL21tL3l5eXlcIiB9KVxyXG5cclxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdGNvbnN0IHQgPSAkKHRoaXMpXHJcblx0XHR0Lm1hc2sodC5hdHRyKCdkYXRhLW1hc2snKSwge1xyXG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0JCgnI0RlY2xhcmF0aW9uc19saW5rX2lkJykuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcjRGVjbGFyYXRpb25zX25hbWUnKS50cmlnZ2VyKCdmb2N1cycpXHJcblx0fSlcclxuXHJcblx0Ly8gJC5tYXNrLmRlZmluaXRpb25zWyc5J10gPSAnJztcclxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XHJcblx0Ly8gJCgnLmpxdWVyeU1hc2snKS5tYXNrKCcyMjMxJyk7XHJcblxyXG5cdFxyXG5cdC8vIENsaXBib2FyZFxyXG5cdC8vIG5ldyBDbGlwYm9hcmQoJy5idG4tY2xpcGJvYXJkJyk7XHJcblx0dmFyIHRpbWVvdXQ7XHJcblx0Ly8gY29uc3QgdGltZW91dFxyXG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgYXV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXgpO1xyXG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhdXgpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG5cdFxyXG5cdGNvbnN0IHRvb2x0aXAgPSAkKCcudG9vbHRpcHRleHQnKVxyXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcclxuXHJcblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5iaW5kKCdjbGljayB0b3VjaHN0YXJ0JywgZT0+e1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkucGFyZW50KCdidXR0b24nKVxyXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxyXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcclxuXHRcdC8vIENPUFlcclxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxyXG5cdFx0Y29uc3QgY29weU5vZGUgPSAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpXHJcblx0XHRjb3B5Tm9kZS5hZGRDbGFzcygnYW5pbWF0ZWQgaGVhcnRCZWF0JylcclxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gY29weU5vZGUudGV4dCgpLnRyaW0oKVxyXG5cdFx0Y29uc29sZS5sb2coY29weVRleHQpXHJcblx0XHRjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXHJcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxyXG5cclxuXHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcGllZCcpKVxyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNvcHlOb2RlLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxyXG5cdFx0fSwgMTAwMClcclxuXHJcblx0XHQvLyBjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXHJcblx0fSlcclxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLm1vdXNlb3V0KGU9PntcclxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXHJcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXHJcblx0XHQvLyBjb25zdCBjb3B5Tm9kZSA9ICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSlcclxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXHJcblxyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LCAyMDApXHJcblx0fSlcclxuXHQkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKClcclxuXHJcblxyXG5cclxuXHQvLyB3ZSBhZGQgdGhlIG1vZGFsIHRvIHRoZSBlbmQgb2YgYm9keSBcclxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5JylcclxuXHQkKCdib2R5JykuYXBwZW5kKG1vZGFsLmNsb25lKCkpXHJcblx0bW9kYWwucmVtb3ZlKClcclxuXHJcblxyXG5cdFxyXG5cclxuXHJcblx0Ly8gc2Nyb2xsIHRvIG9yZGVyXHJcblx0JChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5zY3JvbGwtdG8tb3JkZXJcIiwgZnVuY3Rpb24gKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24pXHJcblx0XHRpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5sZW5ndGg+Mil7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICcvI29yZGVycy1ob2xkZXInXHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0ICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0ICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI29yZGVycy1ob2xkZXJcIikub2Zmc2V0KCkudG9wIC0gMTBcclxuXHQgICAgICAgIH0sIDEwMDApO1xyXG5cdCAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Njcm9sbCB0byB0b3BcclxuICAvLyAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbiAoZSl7XHJcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KClcclxuICAvLyAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgLy8gICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gIC8vICAgICAgIH0sIDEwMDApO1xyXG4gIC8vICAgfSk7XHJcblxyXG5cclxuIC8vICAgXHQkKCcuYi1pbnZvaWNlX19pbnB1dCcpLmNoYW5nZShmdW5jdGlvbigpe1xyXG5cdC8vIFx0Y29uc3QgZmlsZXMgPSAkKCcuYi1pbnZvaWNlX19pbnB1dCcpWzBdLmZpbGVzXHJcblx0Ly8gXHRjb25zdCBmaWxlSW5mbyA9ICQoJy5iLWludm9pY2VfX2ZpbGVpbmZvJylcclxuXHQvLyBcdGZpbGVJbmZvLnRleHQoJycpIFxyXG5cclxuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xyXG5cdC8vIFx0XHRjb25zdCBuYW1lID0gZmlsZXNbaV0ubmFtZVxyXG5cdC8vIFx0XHRjb25zdCBzaXplID0gZmlsZXNbaV0uc2l6ZS8xMDI0LzEwMjRcclxuXHQvLyBcdFx0ZmlsZUluZm8uYXBwZW5kKCQoYDxhIGNsYXNzPVwiYi1pbnZvaWNlX19maWxlbmFtZSBwLTEgbXItMVwiPiR7bmFtZX08c3BhbiBjbGFzcz1cIm1sLTJcIiBocmVmPVwiXCI+JnRpbWVzOzwvc3Bhbj48L2E+YCkpXHJcblx0Ly8gXHR9XHJcblx0ICBcclxuXHQvLyB9KVxyXG5cclxuXHQkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXHJcblxyXG4gICAgXHJcbn0pIC8vIHJlYWR5XHJcblxyXG4vLyB3aW5kb3cgbG9hZGVkXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuXHRcclxuXHJcblx0bGF6eWxvYWQoKVxyXG59KSAgXHJcblxyXG5cclxuIiwiXHJcbmNvbnN0IG5hdiA9ICgpID0+IHtcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbWJ1cmdlcicsICgpPT57XHJcblx0XHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxyXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcclxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcclxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcclxuXHRcdHNldFRpbWVvdXQoKCk9Pm5hdi5hZGRDbGFzcygnYi1uYXYtLWFjdGl2ZScpLCAxMDApXHJcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxyXG5cclxuXHR9KVxyXG5cclxuXHQkKCcubmF2LXRhYi1idXR0b24nKS5jbGljaygoZSk9PntcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcclxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXHJcblx0XHQkKCcuYi1uYXZfX3RhYicpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxyXG5cdFx0dGFyZ2V0LnBhcmVudCgnLmItbmF2X190YWInKS5hZGRDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcclxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxyXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcgKyBocmVmKS5hZGRDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxyXG5cclxuXHR9KVxyXG5cclxuXHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdlxyXG4iLCJjb25zdCBvcGVuUG9wdXAgPSAoKT0+IHtcclxuXHQvLyBjb25zdCBibHVycnlCZyA9ICQoJy5ibHVycnktYmFja2dyb3VuZCcpXHJcblx0Y29uc3QgcG9wdXAgPSAkKCcuYi1wb3B1cCcpXHJcblx0Y29uc3QgYk5hdiA9ICQoJy5iLW5hdicpIC8vIHJlc3BvbnNpdmUgaXNzdWVzXHJcblx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxyXG5cclxuXHQkKCcub3BlblBvcHVwJykuY2xpY2soZT0+e1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdhJylcclxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXHJcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxyXG5cdFx0Ly8gY29uc3QgdG9wID0gb2Zmc2V0LnRvcFxyXG5cdFx0Ly8gY29uc3QgbGVmdCA9IG9mZnNldC5sZWZ0XHJcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcclxuXHRcdC8vIGJsdXJyeUJnLmFkZENsYXNzKCdibHVycnktYmFja2dyb3VuZC0tYWN0aXZlJylcclxuXHRcdCQoJy5wcmVzc0Nsb3NlJykuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXHJcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXHJcblxyXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXHJcblx0XHRpZigkKGhyZWYpLmxlbmd0aD4wICl7XHJcblx0XHRcdCQoaHJlZikuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwb3B1cC5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXHJcblx0fSlcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9PntcclxuXHRcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXHJcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykuaGlkZSgpXHJcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxyXG5cdFx0aWYodGFyZ2V0LmNsb3Nlc3QoJy5iLXBvcHVwX19pbm5lcicpLmxlbmd0aDw9MCB8fCB0YXJnZXQuY2xvc2VzdCgnLmNsb3NlLWItcG9wdXAnKS5sZW5ndGg+MCl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXHJcblx0XHRcdCQoJy5iLXBvcHVwLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG5cdFx0XHR9LCAzMDApXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5yZW1vdmVDbGFzcygneS1oaWRkZW4nKVxyXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXHJcblxyXG5cdFx0XHQvLyAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJylcclxuXHJcblx0XHR9XHJcblx0fSlcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXHJcblxyXG4iLCJjb25zdCByZXBlYXRJdGVtID0gKCk9PiB7XHJcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxyXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcclxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcclxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxyXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xyXG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXHJcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0cmVwZWF0SXRlbVBhcmVudC5hcHBlbmQocmVwZWF0SXRlbUNsb25lLmNsb25lKCkpXHJcblxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9PntcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcclxuXHRcdFx0XHR0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLnJlbW92ZSgpXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KVxyXG5cclxuXHJcblxyXG5cclxuXHR9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHJlcGVhdEl0ZW1cclxuXHJcblxyXG5jb25zdCByZXBlYXROZXdJdGVtID0gKCk9PiB7XHJcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxyXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcclxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcclxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJ1tkYXRhLXJlcGVhdC10YXJnZXQ9XCJpdGVtXCJdJ1xyXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xyXG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCByZXBlYXRJdGVtQnV0dG9uLCAoZSk9PntcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxyXG5cclxuXHRcdH0pXHJcblxyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRpZigkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykubGVuZ3RoPjEpe1xyXG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXHJcblx0XHRcdFx0Y29uc3QgcGFyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJylcclxuXHRcdFx0XHRwYXJlbnRJdGVtLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcclxuXHRcdFx0XHR9LCAnZmFzdCcsICdzd2luZycsIFxyXG5cdFx0XHRcdFx0KCkgPT4gcGFyZW50SXRlbS5yZW1vdmUoKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pXHJcblxyXG5cclxuXHJcblxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxyXG5cclxuIiwiXHJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xyXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5zaG9wcGluZy1jYXJkJywgKGUpPT57XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxyXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcclxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcclxuXHJcblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnRvZ2dsZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxyXG5cdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLnRvZ2dsZSgpXHJcblx0XHRcclxuXHQgICAgJCgnLmItbmF2X193cmFwcGVyJykuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxyXG5cdCAgICBodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXHJcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblx0XHRcclxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXHJcblx0XHQvLyBjb25zb2xlLmxvZygkKHRoaXMpKVxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IHNtc1ZlcmlmaWNhdGlvbiA9ICgpPT4ge1xyXG5cdGNvbnN0IGlucHV0ID0gJCgnLmItdmVyaWZpY2F0aW9uX19pbnB1dCcpLmVxKDApXHJcblx0Y29uc3QgbWF4TGVuZ3RoID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4bGVuZ3RoJykpXHJcblx0Y29uc3QgZm9udFNpemUgPSBwYXJzZUludChpbnB1dC5jc3MoJ2ZvbnRTaXplJykpXHJcblx0Y29uc3QgZGFzaGVzID0gJCgnLmItdmVyaWZpY2F0aW9uX19kYXNoZXMnKVxyXG5cdGNvbnN0IHVuZGVybGluZVdpZHRoID0gMzBcclxuXHRjb25zdCB1bmRlcmxpbmVNYXJnaW5SaWdodCA9IDIyXHJcblx0Y29uc3QgaG9yaXpvbnRhbFBhZGRpbmcgPSAzXHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKCBtYXhMZW5ndGgsIGZvbnRTaXplKVxyXG5cdFxyXG5cdGRhc2hlcy5hcHBlbmQoJzxzcGFuPjwvc3Bhbj4nLnJlcGVhdChtYXhMZW5ndGgpKVxyXG5cdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uX19pbnB1dCcpLmNzcyh7XHJcblx0XHRcdCAgd2lkdGg6ICh1bmRlcmxpbmVXaWR0aCAqIChtYXhMZW5ndGggKyAxKSArIHVuZGVybGluZU1hcmdpblJpZ2h0ICogKG1heExlbmd0aCAtIDEpKSArIGhvcml6b250YWxQYWRkaW5nICogMixcclxuXHJcblx0XHRcdH0pXHJcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbicpLmNzcyh7XHJcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXHJcblx0XHRcdH0pXHJcblx0XHRcdGlucHV0LmZvY3VzKClcclxuXHRcdH0pXHJcblx0XHJcblx0aW5wdXQua2V5dXAoKCk9PntcclxuXHRcdGlmKGlucHV0LnZhbCgpLmxlbmd0aD49bWF4TGVuZ3RoKSB7XHJcblx0XHRcdCQoJy52ZXJpZmljYXRpb25CdXR0b24nKS50cmlnZ2VyKCdjbGljaycpXHJcblx0XHR9XHJcblx0fSlcclxuXHRcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc21zVmVyaWZpY2F0aW9uIiwiY29uc3Qgd2luZG93U2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XHJcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwXHJcblx0JCh3aW5kb3cpLnNjcm9sbCgoKT0+e1xyXG5cdFx0XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcclxuXHRcdGNvbnN0IG5hdldyYXBwZXIgPSAkKCcuYi1uYXZfX3dyYXBwZXInKVxyXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXHJcblx0XHRjb25zdCB0b3BOYXYgPSAkKCcuYi1uYXZfX3RvcCcpXHJcblx0XHRjb25zdCBzY3JvbGxUb1RvcEJ1dHRvbiA9ICQoJy5zY3JvbGwtdG8tdG9wJylcclxuXHJcblx0XHQvLyBpZihzY3JvbGxUb3A+NzApIHtcclxuXHRcdC8vIFx0dG9wTmF2LmFkZENsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxyXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcclxuXHRcdC8vIFx0aWYoc2Nyb2xsVG9wPmxhc3RTY3JvbGxUb3Ape1xyXG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxyXG5cdFx0Ly8gXHRuYXZNYWluLmFkZENsYXNzKCdweS0zJylcclxuXHRcdFx0XHJcblx0XHQvLyB9XHJcblxyXG5cdFx0aWYoc2Nyb2xsVG9wPjEwMCkge1xyXG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLnJlbW92ZUNsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxyXG5cdFx0fVxyXG5cdFx0XHJcblxyXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1Njcm9sbExpc3RlbmVyXHJcbiJdfQ==
