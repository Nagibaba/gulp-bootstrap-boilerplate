(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
				searchParams.get('price') || $('#procedure-form #Orders_link').trigger('blur');
				history.replaceState({ page: 1 }, "title 1", "");
			});
		}
	})();
});

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./cookies":6}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"./closeNav":5}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['./a', './nav', './windowScrollListener', './documentListener', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './smsVerification', './LayeredSlider', './PWA', './GetPruductFromUrl', './loadDOM', './cookies'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./smsVerification'), require('./LayeredSlider'), require('./PWA'), require('./GetPruductFromUrl'), require('./loadDOM'), require('./cookies'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.smsVerification, global.LayeredSlider, global.PWA, global.GetPruductFromUrl, global.loadDOM, global.cookies);
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


	// import Tooltip from 'tooltip'

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
		$(document).on("click", ".scroll-to-order").click(function (e) {
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

},{"./GetPruductFromUrl":1,"./LayeredSlider":2,"./PWA":3,"./a":4,"./closeNav":5,"./cookies":6,"./documentListener":7,"./lazyload":8,"./loadDOM":9,"./nav":11,"./openPopup":12,"./repeatItem":13,"./shoppingCard":14,"./smsVerification":15,"./windowScrollListener":16}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9HZXRQcnVkdWN0RnJvbVVybC5qcyIsInNyYy9qcy9tYWluL0xheWVyZWRTbGlkZXIuanMiLCJzcmMvanMvbWFpbi9QV0EuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9jb29raWVzLmpzIiwic3JjL2pzL21haW4vZG9jdW1lbnRMaXN0ZW5lci5qcyIsInNyYy9qcy9tYWluL2xhenlsb2FkLmpzIiwic3JjL2pzL21haW4vbG9hZERPTS5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEVBQUMsWUFBVTtBQUNWLE1BQUksZUFBZSxJQUFBLGVBQUEsQ0FBb0IsT0FBQSxRQUFBLENBQXZDLE1BQW1CLENBQW5CO0FBQ0EsTUFBRyxhQUFBLEdBQUEsQ0FBSCxNQUFHLENBQUgsRUFBNEI7QUFDM0IsS0FBQSxjQUFBLEVBQUEsR0FBQSxDQUFzQixhQUFBLEdBQUEsQ0FBdEIsTUFBc0IsQ0FBdEI7QUFDQSxLQUFBLGVBQUEsRUFBQSxHQUFBLENBQXVCLGFBQUEsR0FBQSxDQUF2QixPQUF1QixDQUF2QjtBQUNBLEtBQUEsZUFBQSxFQUFBLEdBQUEsQ0FBdUIsYUFBQSxHQUFBLENBQXZCLE9BQXVCLENBQXZCO0FBQ0EsS0FBQSxrQkFBQSxFQUFBLEdBQUEsQ0FBMEIsYUFBQSxHQUFBLENBQTFCLE1BQTBCLENBQTFCO0FBQ0EsS0FBQSxlQUFBLEVBQUEsR0FBQSxDQUF1QixhQUFBLEdBQUEsQ0FBdkIsT0FBdUIsQ0FBdkI7O0FBRUEsS0FBQSxNQUFBLEVBQUEsSUFBQSxDQUFBLE1BQUEsRUFBdUIsWUFBVztBQUNqQyxpQkFBQSxHQUFBLENBQUEsT0FBQSxLQUEyQixFQUFBLDhCQUFBLEVBQUEsT0FBQSxDQUEzQixNQUEyQixDQUEzQjtBQUNBLFlBQUEsWUFBQSxDQUFxQixFQUFDLE1BQXRCLENBQXFCLEVBQXJCLEVBQUEsU0FBQSxFQUFBLEVBQUE7QUFGRCxJQUFBO0FBS0E7QUFkRixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxLQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFLOztBQUUxQixNQUFNLGdCQUFnQixFQUF0QixpQkFBc0IsQ0FBdEI7QUFDQSxNQUFNLFdBQVcsRUFBQSxzQkFBQSxFQUFBLEtBQUEsR0FBQSxXQUFBLENBQWpCLDZCQUFpQixDQUFqQjtBQUNBLE1BQU0sYUFBYSxFQUFuQiw2QkFBbUIsQ0FBbkI7QUFDQSxNQUFNLE9BQU8sRUFBYix1QkFBYSxDQUFiO0FBQ0EsTUFBTSxRQUFRLEVBQWQsd0JBQWMsQ0FBZDtBQUNBLE1BQU0sWUFBWSxFQUFsQiw4QkFBa0IsQ0FBbEI7QUFDQSxNQUFNLFlBQVksRUFBbEIsOEJBQWtCLENBQWxCO0FBQ0EsTUFBTSxRQUFRLEtBQWQsTUFBQTtBQUNBLE1BQUksSUFBSixDQUFBO0FBQ0EsU0FBTSxJQUFOLEtBQUEsRUFBZ0I7QUFDZixjQUFBLE1BQUEsQ0FBa0IsU0FBbEIsS0FBa0IsRUFBbEI7QUFDQTtBQUNBOztBQUlELE1BQU0sTUFBTSxFQUFaLHNCQUFZLENBQVo7QUFDQSxNQUFBLEtBQUEsQ0FBVSxZQUFVO0FBQ2xCLE9BQU0sUUFBUSxFQUFBLElBQUEsRUFBZCxLQUFjLEVBQWQ7O0FBRUEsUUFBQSxXQUFBLENBQUEsOEJBQUE7QUFDQSxRQUFBLEVBQUEsQ0FBQSxLQUFBLEVBQUEsUUFBQSxDQUFBLDhCQUFBOztBQUVBLE9BQUEsV0FBQSxDQUFBLDZCQUFBO0FBQ0EsT0FBQSxFQUFBLENBQUEsS0FBQSxFQUFBLFFBQUEsQ0FBQSw2QkFBQTs7QUFFQSxpQkFBQSxLQUFBO0FBVEYsR0FBQTs7QUFZQSxNQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsR0FBTTtBQUM5QixPQUFNLFFBQVEsRUFBQSw4QkFBQSxFQUFkLEtBQWMsRUFBZDtBQUNBLE9BQU0sWUFBWSxRQUFNLFFBQU4sQ0FBQSxHQUFnQixRQUFoQixDQUFBLEdBQWxCLENBQUE7O0FBRUEsUUFBQSxXQUFBLENBQUEsOEJBQUE7QUFDQSxRQUFBLEVBQUEsQ0FBQSxTQUFBLEVBQUEsUUFBQSxDQUFBLDhCQUFBOztBQUVBLE9BQUEsV0FBQSxDQUFBLDZCQUFBO0FBQ0EsT0FBQSxFQUFBLENBQUEsU0FBQSxFQUFBLFFBQUEsQ0FBQSw2QkFBQTtBQUNBLGlCQUFBLFNBQUE7QUFURCxHQUFBO0FBV0EsTUFBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQU07QUFDOUIsaUJBQUEsUUFBQTtBQUNBLE9BQU0sUUFBUSxFQUFBLDhCQUFBLEVBQWQsS0FBYyxFQUFkO0FBQ0EsT0FBTSxZQUFZLFFBQWxCLENBQUE7O0FBRUEsUUFBQSxXQUFBLENBQUEsOEJBQUE7QUFDQSxRQUFBLEVBQUEsQ0FBQSxTQUFBLEVBQUEsUUFBQSxDQUFBLDhCQUFBOztBQUVBLE9BQUEsV0FBQSxDQUFBLDZCQUFBO0FBQ0EsT0FBQSxFQUFBLENBQUEsU0FBQSxFQUFBLFFBQUEsQ0FBQSw2QkFBQTtBQUNBLGlCQUFBLFNBQUE7QUFWRCxHQUFBO0FBWUEsWUFBQSxLQUFBLENBQWdCLFlBQVU7QUFDekIsaUJBQUEsUUFBQTtBQUNBO0FBRkQsR0FBQTs7QUFLQSxZQUFBLEtBQUEsQ0FBZ0IsWUFBVTtBQUN6QjtBQURELEdBQUE7O0FBSUEsTUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQSxRQUFBLEVBQWM7QUFDbEMsU0FBQSxXQUFBLENBQUEsK0JBQUE7QUFDQSxPQUFHLFdBQUEsQ0FBQSxJQUFILEtBQUEsRUFBc0IsQ0FBRTtBQUN0QjtBQURGLElBQUEsTUFFTyxJQUFHLFlBQUgsQ0FBQSxFQUFnQjtBQUNyQjtBQUNEO0FBTkgsR0FBQTs7QUFTQTs7O0FBR0EsTUFBSSxXQUFKLElBQUE7O0FBRUEsTUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBTTtBQUMzQixjQUFXLFlBQUEsZ0JBQUEsRUFBWCxJQUFXLENBQVg7QUFERCxHQUFBO0FBR0E7O0FBRUEsZ0JBQUEsS0FBQSxDQUFvQixZQUFLO0FBQ3hCLGlCQUFBLFFBQUE7QUFERCxHQUFBLEVBRUcsWUFBQTtBQUFBLFVBRkgsZUFFRztBQUZILEdBQUE7O0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUEzSUQsRUFBQTs7bUJBK0lBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUEsUUFBQSxpQkFBQSxLQUFBLENBQUE7O0FBRUEsV0FBQSxnQkFBQSxDQUFBLHFCQUFBLEVBQStDLFVBQUEsQ0FBQSxFQUFPO0FBQ2xEO0FBQ0E7QUFDQSx5QkFBQSxDQUFBO0FBQ0EsWUFBTSxTQUFTLFNBQUEsY0FBQSxDQUFmLGFBQWUsQ0FBZjtBQUNBLGVBQUEsS0FBQSxDQUFBLE9BQUEsR0FBQSxPQUFBOztBQUVBLFlBQUcsQ0FBQyxDQUFBLEdBQUEsU0FBQSxTQUFBLEVBQUosYUFBSSxDQUFKLEVBQTZCO0FBQ3pCLGNBQUEsY0FBQSxFQUFBLE9BQUEsQ0FBQSxNQUFBO0FBQ0EsdUJBQVcsWUFBSTtBQUFDLGtCQUFBLGNBQUEsRUFBQSxPQUFBLENBQUEsTUFBQTtBQUFoQixhQUFBLEVBQUEsS0FBQTtBQUNBLGFBQUEsR0FBQSxTQUFBLFNBQUEsRUFBQSxhQUFBLEVBQUEsQ0FBQTtBQUNIOztBQUVELFlBQUEsTUFBQSxFQUFVO0FBQ04sbUJBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQWlDLFVBQUEsQ0FBQSxFQUFPO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBQSxLQUFBLENBQUEsT0FBQSxHQUFBLE1BQUE7QUFDQSx3QkFBQSxHQUFBLENBQUEsZUFBQTtBQUNBO0FBQ0EsK0JBQUEsTUFBQSxHQUFBLElBQUEsQ0FDTSxVQUFBLEdBQUEsRUFBQTtBQUFBLDJCQUFPLFFBQUEsR0FBQSxDQURiLEdBQ2EsQ0FBUDtBQUROLGlCQUFBLEVBQUEsS0FBQSxDQUVPLFVBQUEsS0FBQSxFQUFTO0FBQUUsNEJBQUEsR0FBQSxDQUFBLFdBQUEsS0FBQTtBQUZsQixpQkFBQTs7QUFNQTtBQUNBLCtCQUFBLFVBQUEsQ0FBQSxJQUFBLENBQ00sVUFBQSxZQUFBLEVBQWtCO0FBQ3RCLHdCQUFJLGFBQUEsT0FBQSxLQUFKLFVBQUEsRUFBeUM7QUFDdkMsZ0NBQUEsR0FBQSxDQUFBLCtCQUFBO0FBREYscUJBQUEsTUFFTztBQUNMLGdDQUFBLEdBQUEsQ0FBQSxnQ0FBQTtBQUNEO0FBQ0QscUNBQUEsSUFBQTtBQVBGLGlCQUFBO0FBYkosYUFBQTtBQXVCSDtBQXJDTCxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNLElBQUksU0FBSixDQUFJLEdBQVYsQ0FBQSxDQUFBOztvQkFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsS0FBTSxXQUFXLFNBQVgsUUFBVyxHQUFLOztBQUdyQixNQUFNLE1BQU0sRUFBWixRQUFZLENBQVo7QUFDQSxNQUFBLFdBQUEsQ0FBQSxlQUFBO0FBSkQsRUFBQTs7bUJBUUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JPLFFBQU0sWUFBQSxRQUFBLFNBQUEsR0FBWSxTQUFaLFNBQVksQ0FBQSxJQUFBLEVBQUEsS0FBQSxFQUEyQjtBQUFBLFlBQWIsT0FBYSxVQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsVUFBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQTNCLENBQTJCOztBQUNoRCxZQUFJLFVBQUosRUFBQTs7QUFFSCxZQUFJLE9BQU8sSUFBWCxJQUFXLEVBQVg7QUFDQSxhQUFBLE9BQUEsQ0FBYSxLQUFBLE9BQUEsS0FBa0IsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBL0IsSUFBQTtBQUNBLGtCQUFVLGVBQWUsS0FBekIsV0FBeUIsRUFBekI7O0FBRUcsaUJBQUEsTUFBQSxHQUFrQixPQUFBLEdBQUEsSUFBYyxTQUFkLEVBQUEsSUFBQSxPQUFBLEdBQWxCLFVBQUE7QUFQRyxLQUFBO0FBU0EsUUFBTSxZQUFBLFFBQUEsU0FBQSxHQUFZLFNBQVosU0FBWSxDQUFBLElBQUEsRUFBVTtBQUMvQixZQUFJLFNBQVMsT0FBYixHQUFBO0FBQ0EsWUFBSSxLQUFLLFNBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBVCxHQUFTLENBQVQ7QUFDQSxhQUFJLElBQUksSUFBUixDQUFBLEVBQVksSUFBSSxHQUFoQixNQUFBLEVBQUEsR0FBQSxFQUErQjtBQUMzQixnQkFBSSxJQUFJLEdBQVIsQ0FBUSxDQUFSO0FBQ0EsbUJBQU8sRUFBQSxNQUFBLENBQUEsQ0FBQSxLQUFQLEdBQUEsRUFBQTtBQUF5QixvQkFBSSxFQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQWMsRUFBbEIsTUFBSSxDQUFKO0FBQ3pCLGlCQUFJLEVBQUEsT0FBQSxDQUFBLE1BQUEsS0FBSixDQUFBLEVBQTRCLE9BQU8sRUFBQSxTQUFBLENBQVksT0FBWixNQUFBLEVBQTBCLEVBQWpDLE1BQU8sQ0FBUDtBQUMvQjtBQUNELGVBQUEsSUFBQTtBQVJHLEtBQUE7QUFVQSxRQUFNLGVBQUEsUUFBQSxZQUFBLEdBQWUsU0FBZixZQUFlLENBQUEsSUFBQSxFQUFVO0FBQ2xDLGlCQUFBLE1BQUEsR0FBa0IsT0FBbEIsbURBQUE7QUFERyxLQUFBOztBQUlQOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsS0FBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQWE7QUFBQSxNQUFaLEtBQVksVUFBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxHQUFiLElBQWE7O0FBQ3JDLElBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxrQkFBQSxFQUFtQyxVQUFBLENBQUEsRUFBSztBQUN2QyxPQUFNLFFBQVEsRUFBRSxFQUFoQixNQUFjLENBQWQ7O0FBR0E7QUFDQSxPQUFHLENBQUMsTUFBQSxPQUFBLENBQUEsWUFBQSxFQUFELE1BQUEsSUFBdUMsQ0FBQyxNQUFBLE9BQUEsQ0FBQSxRQUFBLEVBQTNDLE1BQUEsRUFBMEU7QUFDekUsS0FBQSxHQUFBLFdBQUEsT0FBQTtBQUVBO0FBQ0QsT0FBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLGdCQUFBLEVBQUQsTUFBQSxJQUEyQyxDQUFDLE1BQUEsT0FBQSxDQUFBLDJCQUFBLEVBQS9DLE1BQUEsRUFBaUc7QUFDaEcsTUFBQSxnQkFBQSxFQUFBLFdBQUEsQ0FBQSx1QkFBQTtBQUNBLE1BQUEsMkJBQUEsRUFBQSxJQUFBO0FBQ0E7QUFaRixHQUFBO0FBREQsRUFBQTs7bUJBbUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLEtBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSztBQUNyQixNQUFJO0FBQ0gsS0FBQSxjQUFBLEVBQUEsSUFBQSxDQUF1QixVQUFBLENBQUEsRUFBVztBQUNqQyxRQUFNLFFBQVEsRUFBZCxJQUFjLENBQWQ7QUFDQSxRQUFNLFNBQVMsTUFBQSxJQUFBLENBQWYsS0FBZSxDQUFmO0FBQ0EsVUFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7QUFIRCxJQUFBO0FBREQsR0FBQSxDQU9FLE9BQUEsQ0FBQSxFQUFRO0FBQ1QsV0FBQSxLQUFBLENBQUEsU0FBQSxFQUFBLENBQUE7QUFDQTtBQVZGLEVBQUE7O21CQWFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSxVQUFBLCtCQUFBLEVBQUEsSUFBQSxDQUE0QyxVQUFBLFFBQUEsRUFBQTtBQUFBLGVBQVksU0FBeEQsSUFBd0QsRUFBWjtBQUE1QyxLQUFBLEVBQUEsSUFBQSxDQUE4RSxVQUFBLENBQUEsRUFBSztBQUMvRSxVQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtBQURKLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBOzs7QUFaQTtBQWVBLFVBQUEsS0FBQSxDQUFBLEVBQUEsRUFBbUI7QUFDakIsTUFBSSxTQUFBLFdBQUEsR0FBdUIsU0FBQSxVQUFBLEtBQXZCLFVBQUEsR0FBNEQsU0FBQSxVQUFBLEtBQWhFLFNBQUEsRUFBa0c7QUFDaEc7QUFERixHQUFBLE1BRU87QUFDTCxZQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBQSxFQUFBO0FBQ0Q7QUFDRjtBQTdCRDs7O0FBK0JBLE9BQU0sWUFBVztBQUNoQjtBQUNBLEdBQUEsR0FBQSxNQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsdUJBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxtQkFBQSxPQUFBO0FBQ0E7QUFDQSxHQUFBLEdBQUEsZUFBQSxPQUFBO0FBQ0EsR0FBQSxHQUFBLFlBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxhQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsa0JBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxnQkFBQSxPQUFBOztBQUtBO0FBQ0EsTUFBSSxXQUFXLFNBQUEsSUFBQSxDQUFjLFVBQWQsU0FBQSxLQUFzQyxhQUFBLElBQUEsQ0FBa0IsVUFBdkUsTUFBcUQsQ0FBckQ7QUFDRyxNQUFJLE9BQUEsUUFBQSxDQUFBLElBQUEsSUFBSixRQUFBLEVBQXNDO0FBQ2xDLGNBQVcsWUFBWTtBQUNuQixRQUFJLE9BQU8sT0FBQSxRQUFBLENBQVgsSUFBQTtBQUNBLFdBQUEsUUFBQSxDQUFBLElBQUEsR0FBQSxFQUFBO0FBQ0EsV0FBQSxRQUFBLENBQUEsSUFBQSxHQUFBLElBQUE7QUFISixJQUFBLEVBQUEsR0FBQTtBQUtIOztBQUVKLElBQUEsYUFBQSxFQUFBLEVBQUEsQ0FBQSxrQkFBQSxFQUF3QyxVQUFBLENBQUEsRUFBRztBQUMxQyxPQUFNLE9BQU8sRUFBYixNQUFhLENBQWI7QUFDQSxPQUFNLGFBQWEsRUFBbkIsYUFBbUIsQ0FBbkI7QUFDQSxjQUFBLFdBQUEsQ0FBQSxvQkFBQTtBQUNBLGNBQVcsWUFBVTtBQUFDLFNBQUEsV0FBQSxDQUFBLFVBQUE7QUFBdEIsSUFBQSxFQUFBLEdBQUE7O0FBRUEsSUFBQSxHQUFBLFdBQUEsT0FBQTtBQU5ELEdBQUE7O0FBU0EsSUFBQSw0QkFBQSxFQUFBLFVBQUEsQ0FBMkMsRUFBRSxRQUE3QyxZQUEyQyxFQUEzQzs7QUFFQSxJQUFBLGFBQUEsRUFBQSxJQUFBLENBQXNCLFlBQVU7QUFDL0IsT0FBTSxJQUFJLEVBQVYsSUFBVSxDQUFWO0FBQ0EsS0FBQSxJQUFBLENBQU8sRUFBQSxJQUFBLENBQVAsV0FBTyxDQUFQLEVBQTRCO0FBQzNCLGlCQUFhLEVBQUMsR0FBRyxFQUFDLFNBQUQsR0FBQSxFQUFlLFVBQW5CLEtBQUksRUFBSixFQUFxQyxHQUFHLEVBQUMsU0FBRCxNQUFBLEVBQWtCLFVBQTFELEtBQXdDLEVBQXhDLEVBQTRFLEdBQUcsRUFBQyxTQUFELEdBQUEsRUFBZSxVQUE5RixJQUErRSxFQUEvRTtBQURjLElBQTVCO0FBRkQsR0FBQTs7QUFPQSxJQUFBLHVCQUFBLEVBQUEsTUFBQSxDQUFrQyxZQUFVO0FBQzNDLEtBQUEsb0JBQUEsRUFBQSxPQUFBLENBQUEsT0FBQTtBQURELEdBQUE7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsTUFBQSxPQUFBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFBLElBQUEsRUFBZ0I7QUFDL0IsT0FBSSxNQUFNLFNBQUEsYUFBQSxDQUFWLE9BQVUsQ0FBVjtBQUNBLE9BQUEsWUFBQSxDQUFBLE9BQUEsRUFBQSxJQUFBO0FBQ0EsWUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLEdBQUE7QUFDQSxPQUFBLE1BQUE7QUFDQSxZQUFBLFdBQUEsQ0FBQSxNQUFBO0FBQ0EsWUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLEdBQUE7QUFOVCxHQUFBOztBQVlBLE1BQU0sVUFBVSxFQUFoQixjQUFnQixDQUFoQjtBQUNBLFVBQUEsSUFBQSxDQUFhLFFBQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjs7QUFFQSxJQUFBLGdCQUFBLEVBQUEsSUFBQSxDQUFBLGtCQUFBLEVBQTZDLFVBQUEsQ0FBQSxFQUFHO0FBQy9DLE9BQU0sU0FBUyxFQUFFLEVBQUYsTUFBQSxFQUFBLE1BQUEsQ0FBZixRQUFlLENBQWY7QUFDQSxPQUFNLFVBQVUsT0FBQSxJQUFBLENBQWhCLGNBQWdCLENBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTSxXQUFXLEVBQUUsT0FBQSxJQUFBLENBQW5CLGtCQUFtQixDQUFGLENBQWpCO0FBQ0EsWUFBQSxRQUFBLENBQUEsb0JBQUE7QUFDQSxPQUFNLFdBQVcsU0FBQSxJQUFBLEdBQWpCLElBQWlCLEVBQWpCO0FBQ0EsV0FBQSxHQUFBLENBQUEsUUFBQTtBQUNBLG1CQUFBLFFBQUE7QUFDQTs7QUFFQSxXQUFBLElBQUEsQ0FBYSxRQUFBLElBQUEsQ0FBYixRQUFhLENBQWI7QUFDQSxnQkFBQSxPQUFBO0FBQ0EsY0FBVyxZQUFVO0FBQ3BCLGFBQUEsV0FBQSxDQUFBLG9CQUFBO0FBREQsSUFBQSxFQUFBLElBQUE7O0FBSUE7QUFuQkQsR0FBQTtBQXFCQSxJQUFBLGdCQUFBLEVBQUEsUUFBQSxDQUE2QixVQUFBLENBQUEsRUFBRztBQUMvQixPQUFNLFNBQVMsRUFBRSxFQUFqQixNQUFlLENBQWY7QUFDQSxPQUFNLFVBQVUsT0FBQSxJQUFBLENBQWhCLGNBQWdCLENBQWhCO0FBQ0E7QUFDQTs7QUFFQSxhQUFVLFdBQVcsWUFBVTtBQUM5QixZQUFBLElBQUEsQ0FBYSxRQUFBLElBQUEsQ0FBYixNQUFhLENBQWI7QUFEUyxJQUFBLEVBQVYsR0FBVSxDQUFWO0FBTkQsR0FBQTtBQVlBLElBQUEsZUFBQSxFQUFBLFlBQUE7O0FBSUE7QUFDQSxNQUFNLFFBQVEsRUFBZCx5QkFBYyxDQUFkO0FBQ0EsSUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFpQixNQUFqQixLQUFpQixFQUFqQjtBQUNBLFFBQUEsTUFBQTs7QUFNQTtBQUNBLElBQUEsUUFBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQUEsa0JBQUEsRUFBQSxLQUFBLENBQWtELFVBQUEsQ0FBQSxFQUFZO0FBQzdELEtBQUEsY0FBQTtBQUNBLFdBQUEsR0FBQSxDQUFZLE9BQVosUUFBQTtBQUNBLE9BQUcsT0FBQSxRQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxHQUFILENBQUEsRUFBZ0Q7QUFDL0MsV0FBQSxRQUFBLEdBQUEsaUJBQUE7QUFERCxJQUFBLE1BR087O0FBRUEsTUFBQSxZQUFBLEVBQUEsT0FBQSxDQUF3QjtBQUNwQixnQkFBVyxFQUFBLGdCQUFBLEVBQUEsTUFBQSxHQUFBLEdBQUEsR0FBbUM7QUFEMUIsS0FBeEIsRUFBQSxJQUFBO0FBR0g7QUFYTCxHQUFBOztBQWNHO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBeEpELEVBQUEsRSxDQTZKRzs7O0FBR0gsR0FBQSx5QkFBQSxFQUFBLE9BQUE7O0FBSUE7QUFDQSxRQUFBLGdCQUFBLENBQUEsTUFBQSxFQUFnQyxZQUFJOztBQUduQyxHQUFBLEdBQUEsV0FBQSxPQUFBO0FBSEQsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOQSxLQUFNLE1BQU0sU0FBTixHQUFNLEdBQU07QUFDakIsSUFBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQXNDLFlBQUk7QUFDekMsT0FBTSxNQUFNLEVBQVosUUFBWSxDQUFaO0FBQ0EsT0FBTSxhQUFhLEVBQW5CLGFBQW1CLENBQW5CO0FBQ0EsT0FBTSxPQUFPLEVBQWIsTUFBYSxDQUFiO0FBQ0EsUUFBQSxRQUFBLENBQUEsVUFBQTtBQUNBLGNBQVcsWUFBQTtBQUFBLFdBQUksSUFBQSxRQUFBLENBQWYsZUFBZSxDQUFKO0FBQVgsSUFBQSxFQUFBLEdBQUE7QUFDQSxjQUFBLFFBQUEsQ0FBQSxvQkFBQTtBQU5ELEdBQUE7O0FBVUEsSUFBQSxpQkFBQSxFQUFBLEtBQUEsQ0FBMkIsVUFBQSxDQUFBLEVBQUs7QUFDL0IsS0FBQSxjQUFBO0FBQ0EsT0FBTSxTQUFTLEVBQUUsRUFBakIsTUFBZSxDQUFmO0FBQ0EsT0FBTSxPQUFPLE9BQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjtBQUNBLEtBQUEsYUFBQSxFQUFBLFdBQUEsQ0FBQSxvQkFBQTtBQUNBLFVBQUEsTUFBQSxDQUFBLGFBQUEsRUFBQSxRQUFBLENBQUEsb0JBQUE7QUFDQSxLQUFBLHFCQUFBLEVBQUEsV0FBQSxDQUFBLDRCQUFBO0FBQ0EsS0FBRSx3QkFBRixJQUFBLEVBQUEsUUFBQSxDQUFBLDRCQUFBO0FBUEQsR0FBQTtBQVhELEVBQUE7O21CQTBCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLEtBQU0sWUFBWSxTQUFaLFNBQVksR0FBSztBQUN0QjtBQUNBLE1BQU0sUUFBUSxFQUFkLFVBQWMsQ0FBZDtBQUNBLE1BQU0sT0FBTyxFQUhTLFFBR1QsQ0FBYixDQUhzQixDQUdHO0FBQ3pCLE1BQU0sT0FBTyxFQUFiLE1BQWEsQ0FBYjs7QUFFQSxJQUFBLFlBQUEsRUFBQSxLQUFBLENBQXNCLFVBQUEsQ0FBQSxFQUFHO0FBQ3hCLEtBQUEsY0FBQTtBQUNBLE9BQU0sU0FBUyxFQUFFLEVBQUYsTUFBQSxFQUFBLE9BQUEsQ0FBZixHQUFlLENBQWY7QUFDQSxPQUFNLE9BQU8sT0FBQSxJQUFBLENBQWIsTUFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBQSxHQUFBLENBQUEsU0FBQSxFQUFBLE1BQUE7QUFDQTtBQUNBLEtBQUEsYUFBQSxFQUFBLFFBQUEsQ0FBQSxvQkFBQTtBQUNBLFFBQUEsUUFBQSxDQUFBLFVBQUE7O0FBRUE7QUFDQSxPQUFHLEVBQUEsSUFBQSxFQUFBLE1BQUEsR0FBSCxDQUFBLEVBQXFCO0FBQ3BCLE1BQUEsSUFBQSxFQUFBLFFBQUEsQ0FBQSxpQkFBQTtBQURELElBQUEsTUFFTztBQUNOLFVBQUEsUUFBQSxDQUFBLGlCQUFBO0FBQ0E7O0FBRUQ7QUFuQkQsR0FBQTtBQXFCQSxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBQSwwQkFBQSxFQUErRCxVQUFBLENBQUEsRUFBSztBQUNuRSxLQUFBLGdCQUFBLEVBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0EsS0FBQSwyQkFBQSxFQUFBLElBQUE7QUFDQSxPQUFNLFNBQVMsRUFBRSxFQUFqQixNQUFlLENBQWY7QUFDQSxPQUFHLE9BQUEsT0FBQSxDQUFBLGlCQUFBLEVBQUEsTUFBQSxJQUFBLENBQUEsSUFBK0MsT0FBQSxPQUFBLENBQUEsZ0JBQUEsRUFBQSxNQUFBLEdBQWxELENBQUEsRUFBNEY7QUFDM0YsTUFBQSxjQUFBO0FBQ0E7QUFDQSxNQUFBLGtCQUFBLEVBQUEsV0FBQSxDQUFBLGlCQUFBO0FBQ0EsZUFBVyxZQUFVO0FBQ3BCLFVBQUEsR0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBO0FBREQsS0FBQSxFQUFBLEdBQUE7QUFHQSxNQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsVUFBQTtBQUNBLE1BQUEscUJBQUEsRUFBQSxXQUFBLENBQUEsb0JBQUE7O0FBRUE7QUFFQTtBQWhCRixHQUFBO0FBM0JELEVBQUE7O21CQWdEQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBLEtBQU0sYUFBYSxTQUFBLFVBQUEsR0FBSztBQUN2QixNQUFNLGFBQWEsRUFBQSx5QkFBQSxFQUFBLEVBQUEsQ0FBbkIsQ0FBbUIsQ0FBbkI7QUFDQSxNQUFNLG1CQUFtQixFQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsRUFBekIsTUFBeUIsRUFBekI7QUFDQSxNQUFNLGtCQUFrQixXQUF4QixLQUF3QixFQUF4QjtBQUNBLE1BQU0sbUJBQW1CLEVBQUEsNkJBQUEsRUFBQSxFQUFBLENBQXpCLENBQXlCLENBQXpCO0FBQ0EsTUFBRyxjQUFILGdCQUFBLEVBQW1DO0FBQ2xDO0FBQ0Esb0JBQUEsS0FBQSxDQUF1QixVQUFBLENBQUEsRUFBSztBQUMzQixNQUFBLGNBQUE7QUFDQSxxQkFBQSxNQUFBLENBQXdCLGdCQUF4QixLQUF3QixFQUF4QjtBQUZELElBQUE7O0FBT0EsS0FBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLE9BQUEsRUFBQSx3QkFBQSxFQUFrRCxVQUFBLENBQUEsRUFBSztBQUN0RCxNQUFBLGNBQUE7QUFDQSxRQUFHLEVBQUEseUJBQUEsRUFBQSxNQUFBLEdBQUgsQ0FBQSxFQUF5QztBQUN4QyxTQUFNLFNBQVMsRUFBRSxFQUFqQixNQUFlLENBQWY7QUFDQSxZQUFBLE9BQUEsQ0FBQSx5QkFBQSxFQUFBLE1BQUE7QUFDQTtBQUxGLElBQUE7QUFZQTtBQTFCRixFQUFBOztBQTZCQTs7O0FBR0EsS0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBSztBQUMxQixNQUFNLGFBQWEsRUFBQSx5QkFBQSxFQUFBLEVBQUEsQ0FBbkIsQ0FBbUIsQ0FBbkI7QUFDQSxNQUFNLG1CQUFtQixFQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsRUFBekIsTUFBeUIsRUFBekI7QUFDQSxNQUFNLGtCQUFrQixXQUF4QixLQUF3QixFQUF4QjtBQUNBLE1BQU0sbUJBQU4sNkJBQUE7QUFDQSxNQUFHLGNBQUgsZ0JBQUEsRUFBbUM7QUFDbEM7QUFDQSxLQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLGdCQUFBLEVBQTBDLFVBQUEsQ0FBQSxFQUFLO0FBQzlDLE1BQUEsY0FBQTtBQUNBLHFCQUFBLE1BQUEsQ0FBd0IsZ0JBQXhCLEtBQXdCLEVBQXhCO0FBRkQsSUFBQTs7QUFPQSxLQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLHdCQUFBLEVBQWtELFVBQUEsQ0FBQSxFQUFLO0FBQ3RELE1BQUEsY0FBQTtBQUNBLFFBQUcsRUFBQSx5QkFBQSxFQUFBLE1BQUEsR0FBSCxDQUFBLEVBQXlDO0FBQ3hDLFNBQU0sU0FBUyxFQUFFLEVBQWpCLE1BQWUsQ0FBZjtBQUNBLFNBQU0sYUFBYSxPQUFBLE9BQUEsQ0FBbkIseUJBQW1CLENBQW5CO0FBQ0EsZ0JBQUEsT0FBQSxDQUFtQjtBQUNsQixjQUFRO0FBRFUsTUFBbkIsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUdDLFlBQUE7QUFBQSxhQUFNLFdBSFAsTUFHTyxFQUFOO0FBSEQsTUFBQTtBQU1BO0FBWEYsSUFBQTtBQWtCQTtBQWhDRixFQUFBOzttQkFtQ0EsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBLEtBQU0sZUFBZSxTQUFmLFlBQWUsR0FBSztBQUN6QixJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLGdCQUFBLEVBQXlDLFVBQUEsQ0FBQSxFQUFLO0FBQzdDLEtBQUEsY0FBQTtBQUNBLE9BQU0sUUFBUSxFQUFkLE1BQWMsQ0FBZDtBQUNBLE9BQU0sYUFBYSxFQUFuQixhQUFtQixDQUFuQjtBQUNBLE9BQU0sT0FBTyxFQUFiLE1BQWEsQ0FBYjs7QUFFQSxLQUFBLGdCQUFBLEVBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0EsS0FBQSwyQkFBQSxFQUFBLE1BQUE7O0FBRUcsS0FBQSxpQkFBQSxFQUFBLFFBQUEsQ0FBQSx3QkFBQTtBQUNBLFFBQUEsUUFBQSxDQUFBLFVBQUE7QUFDQSxLQUFBLFlBQUEsRUFBQSxPQUFBLENBQXdCO0FBQ2pCLGVBQVc7QUFETSxJQUF4QixFQUFBLElBQUE7O0FBSUgsY0FBQSxRQUFBLENBQUEsb0JBQUE7QUFDQTtBQWhCRCxHQUFBO0FBREQsRUFBQTs7bUJBcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsS0FBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBSztBQUM1QixNQUFNLFFBQVEsRUFBQSx3QkFBQSxFQUFBLEVBQUEsQ0FBZCxDQUFjLENBQWQ7QUFDQSxNQUFNLFlBQVksU0FBUyxNQUFBLElBQUEsQ0FBM0IsV0FBMkIsQ0FBVCxDQUFsQjtBQUNBLE1BQU0sV0FBVyxTQUFTLE1BQUEsR0FBQSxDQUExQixVQUEwQixDQUFULENBQWpCO0FBQ0EsTUFBTSxTQUFTLEVBQWYseUJBQWUsQ0FBZjtBQUNBLE1BQU0saUJBQU4sRUFBQTtBQUNBLE1BQU0sdUJBQU4sRUFBQTtBQUNBLE1BQU0sb0JBQU4sQ0FBQTs7QUFFQTs7QUFFQSxTQUFBLE1BQUEsQ0FBYyxnQkFBQSxNQUFBLENBQWQsU0FBYyxDQUFkLEVBQUEsS0FBQSxDQUNRLFlBQVk7QUFDbEIsS0FBQSx3QkFBQSxFQUFBLEdBQUEsQ0FBZ0M7QUFDOUIsV0FBUSxrQkFBa0IsWUFBbEIsQ0FBQSxJQUFtQyx3QkFBd0IsWUFBNUQsQ0FBb0MsQ0FBbkMsR0FBNkUsb0JBQW9COztBQUQzRSxJQUFoQztBQUlBLEtBQUEsaUJBQUEsRUFBQSxHQUFBLENBQXlCO0FBQ3hCLGdCQUFZO0FBRFksSUFBekI7QUFHQSxTQUFBLEtBQUE7QUFURixHQUFBOztBQVlBLFFBQUEsS0FBQSxDQUFZLFlBQUk7QUFDZixPQUFHLE1BQUEsR0FBQSxHQUFBLE1BQUEsSUFBSCxTQUFBLEVBQWtDO0FBQ2pDLE1BQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsT0FBQTtBQUNBO0FBSEYsR0FBQTtBQXZCRCxFQUFBOzttQkFnQ0EsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQSxLQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsR0FBTTtBQUNsQztBQUNBLE1BQUksZ0JBQUosQ0FBQTtBQUNBLElBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBaUIsWUFBSTs7QUFFcEIsT0FBTSxZQUFZLEVBQUEsTUFBQSxFQUFsQixTQUFrQixFQUFsQjtBQUNBLE9BQU0sYUFBYSxFQUFuQixpQkFBbUIsQ0FBbkI7QUFDQSxPQUFNLFVBQVUsRUFBaEIsY0FBZ0IsQ0FBaEI7QUFDQSxPQUFNLFNBQVMsRUFBZixhQUFlLENBQWY7QUFDQSxPQUFNLG9CQUFvQixFQUExQixnQkFBMEIsQ0FBMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQUcsWUFBSCxHQUFBLEVBQWtCO0FBQ2pCLHNCQUFBLFFBQUEsQ0FBQSx1QkFBQTtBQURELElBQUEsTUFFTztBQUNOLHNCQUFBLFdBQUEsQ0FBQSx1QkFBQTtBQUNBOztBQUdELG1CQUFBLFNBQUE7QUEvQkQsR0FBQTtBQUhELEVBQUE7O21CQXNDQSxvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKXtcblx0bGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcblx0aWYoc2VhcmNoUGFyYW1zLmdldCgnbGluaycpKXtcblx0XHQkKCcjT3JkZXJzX2xpbmsnKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnbGluaycpKVxuXHRcdCQoJyNPcmRlcnNfY291bnQnKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnY291bnQnKSlcblx0XHQkKCcjT3JkZXJzX3ByaWNlJykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ3ByaWNlJykpXG5cdFx0JCgnI09yZGVyc19zaXplX3N0cicpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdzaXplJykpXG5cdFx0JCgnI09yZGVyc19jb2xvcicpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdjb2xvcicpKVxuXG5cdFx0JCh3aW5kb3cpLmJpbmQoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VhcmNoUGFyYW1zLmdldCgncHJpY2UnKXx8JCgnI3Byb2NlZHVyZS1mb3JtICNPcmRlcnNfbGluaycpLnRyaWdnZXIoJ2JsdXInKVxuXHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe3BhZ2U6IDF9LCBcInRpdGxlIDFcIiwgXCJcIilcblx0XHR9KVxuXG5cdH1cblxuXHRcbn0pKCkiLCJjb25zdCBMYXllcmVkU2xpZGVyID0gKCk9PiB7XG5cblx0Y29uc3QgbGF5ZXJlZFNsaWRlciA9ICQoJy5sYXllcmVkLXNsaWRlcicpXG5cdGNvbnN0IGRvdENsb25lID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRjb25zdCBpbmRpY2F0b3JzID0gJCgnLmxheWVyZWQtc2xpZGVyX19pbmRpY2F0b3JzJylcblx0Y29uc3QgaXRlbSA9ICQoJy5sYXllcmVkLXNsaWRlcl9faXRlbScpXG5cdGNvbnN0IGFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdycpXG5cdGNvbnN0IG5leHRBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLW5leHQnKVxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1wcmV2Jylcblx0Y29uc3QgY291bnQgPSBpdGVtLmxlbmd0aFxuXHRsZXQgaSA9IDFcblx0d2hpbGUoaSA8IGNvdW50KXtcblx0XHRpbmRpY2F0b3JzLmFwcGVuZChkb3RDbG9uZS5jbG9uZSgpKVxuXHRcdGkrK1xuXHR9XG5cblxuXG5cdGNvbnN0IGRvdCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90Jylcblx0ZG90LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmluZGV4KClcblx0ICBcblx0ICBpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBpdGVtLmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgXG5cdCAgZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgXG5cdCAgc2xpZGVyQ2hhbmdlZChpbmRleClcblx0fSlcblxuXHRjb25zdCBuZXh0QXJyb3dDbGlja2VkID0gKCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpLmluZGV4KClcblx0XHRjb25zdCBuZXh0SW5kZXggPSBpbmRleDxjb3VudC0xID8gaW5kZXgrMSA6IDBcblxuXHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHRcdGl0ZW0uZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cblx0XHRkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0ZG90LmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0c2xpZGVyQ2hhbmdlZChuZXh0SW5kZXgpXG5cdH1cblx0Y29uc3QgcHJldkFycm93Q2xpY2tlZCA9ICgpID0+IHtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdGNvbnN0IGluZGV4ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpLmluZGV4KClcblx0XHRjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIDFcblxuXHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHRcdGl0ZW0uZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cblx0XHRkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0ZG90LmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0c2xpZGVyQ2hhbmdlZChwcmV2SW5kZXgpXG5cdH1cblx0bmV4dEFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0XHRuZXh0QXJyb3dDbGlja2VkKClcblx0fSlcblxuXHRwcmV2QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRwcmV2QXJyb3dDbGlja2VkKClcblx0fSlcblxuXHRjb25zdCBzbGlkZXJDaGFuZ2VkID0gKG5ld0luZGV4KSA9PiB7XG5cdCAgYXJyb3cucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICBpZihuZXdJbmRleCsxPT1jb3VudCkgeyAvLyBsYXN0XG5cdCAgICAvLyBuZXh0QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICB9IGVsc2UgaWYobmV3SW5kZXg9PTApIHtcblx0ICAgIC8vIHByZXZBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gXG5cdH1cblxuXHQvLyBpbnRlcnZhbFxuXG5cdFxuXHRsZXQgaW50ZXJ2YWwgPSBudWxsXG5cblx0Y29uc3Qgc3RhcnRJbnRlcnZhbCA9ICgpID0+IHtcblx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRBcnJvd0NsaWNrZWQsIDUwMDApXG5cdH1cblx0c3RhcnRJbnRlcnZhbCgpXG5cblx0bGF5ZXJlZFNsaWRlci5ob3ZlcigoKT0+IHtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHR9LCAoKSA9PiBzdGFydEludGVydmFsKCkgKVxuXG5cblxuXHQvLyBsYXllcmVkU2xpZGVyLm9uKFwidG91Y2hzdGFydFwiLCBzdGFydFRvdWNoKTtcblx0Ly8gbGF5ZXJlZFNsaWRlci5vbihcInRvdWNobW92ZVwiLCBtb3ZlVG91Y2gpO1xuXG5cdC8vIC8vIFN3aXBlIFVwIC8gRG93biAvIExlZnQgLyBSaWdodFxuXHQvLyBsZXQgaW5pdGlhbFggPSBudWxsO1xuXHQvLyBsZXQgaW5pdGlhbFkgPSBudWxsO1xuXG5cdC8vIGZ1bmN0aW9uIHN0YXJ0VG91Y2goZSkge1xuXHQvLyBpbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXHQvLyBpbml0aWFsWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuXHQvLyB9O1xuXG5cdC8vIGZ1bmN0aW9uIG1vdmVUb3VjaChlKSB7XG5cdC8vIGlmIChpbml0aWFsWCA9PT0gbnVsbCkge1xuXHQvLyAgIHJldHVybjtcblx0Ly8gfVxuXG5cdC8vIGlmIChpbml0aWFsWSA9PT0gbnVsbCkge1xuXHQvLyAgIHJldHVybjtcblx0Ly8gfVxuXG5cdC8vIGxldCBjdXJyZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXHQvLyBsZXQgY3VycmVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcblxuXHQvLyBsZXQgZGlmZlggPSBpbml0aWFsWCAtIGN1cnJlbnRYO1xuXHQvLyBsZXQgZGlmZlkgPSBpbml0aWFsWSAtIGN1cnJlbnRZO1xuXG5cdC8vIGlmIChNYXRoLmFicyhkaWZmWCkgPiBNYXRoLmFicyhkaWZmWSkpIHtcblx0Ly8gICAvLyBzbGlkaW5nIGhvcml6b250YWxseVxuXHQvLyAgIGlmIChkaWZmWCA+IDEwKSB7XG5cdC8vICAgICAvLyBzd2lwZWQgbGVmdFxuXHQvLyAgICAgcHJldkFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSBlbHNlIHtcblx0Ly8gICAgIC8vIHN3aXBlZCByaWdodFxuXHQvLyAgICAgbmV4dEFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSAgXG5cdC8vIH0gZWxzZSB7XG5cdC8vICAgLy8gc2xpZGluZyB2ZXJ0aWNhbGx5XG5cdC8vICAgaWYgKGRpZmZZID4gMCkge1xuXHQvLyAgICAgLy8gc3dpcGVkIHVwXG5cdC8vICAgICAvLyBuZXh0QXJyb3dDbGlja2VkKClcblx0Ly8gICB9IGVsc2Uge1xuXHQvLyAgICAgLy8gc3dpcGVkIGRvd25cblx0Ly8gICAgIC8vIHByZXZBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gIFxuXHQvLyB9XG5cblx0Ly8gaW5pdGlhbFggPSBudWxsO1xuXHQvLyBpbml0aWFsWSA9IG51bGw7XG5cblx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyB9O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyZWRTbGlkZXJcbiIsImltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWUsIHJlbW92ZUNvb2tpZX0gZnJvbSAnLi9jb29raWVzJ1xuXG5sZXQgZGVmZXJyZWRQcm9tcHQ7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnN0YWxscHJvbXB0JywgKGUpID0+IHtcbiAgICAvLyBQcmV2ZW50IENocm9tZSA2NyBhbmQgZWFybGllciBmcm9tIGF1dG9tYXRpY2FsbHkgc2hvd2luZyB0aGUgcHJvbXB0XG4gICAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXG4gICAgZGVmZXJyZWRQcm9tcHQgPSBlO1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWFzLWFwcCcpXG4gICAgYnRuQWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgaWYoIWdldENvb2tpZSgnc2F2ZS1hcy1hcHAnKSl7XG4gICAgICAgICQoJyNzYXZlLWFzLWFwcCcpLnRvb2x0aXAoJ3Nob3cnKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57JCgnI3NhdmUtYXMtYXBwJykudG9vbHRpcCgnaGlkZScpfSwgMTAwMDApXG4gICAgICAgIHNldENvb2tpZSgnc2F2ZS1hcy1hcHAnLCAxKVxuICAgIH1cblxuICAgIGlmKGJ0bkFkZCl7XG4gICAgICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIC8vIGhpZGUgb3VyIHVzZXIgaW50ZXJmYWNlIHRoYXQgc2hvd3Mgb3VyIEEySFMgYnV0dG9uXG4gICAgICAgICAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgcHJvbXB0JylcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHByb21wdFxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgY29uc29sZS5sb2coYC0tLS0+ICR7ZXJyb3J9YCkgfSlcblxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHVzZXIgdG8gcmVzcG9uZCB0byB0aGUgcHJvbXB0XG4gICAgICAgICAgICBkZWZlcnJlZFByb21wdC51c2VyQ2hvaWNlXG4gICAgICAgICAgICAudGhlbigoY2hvaWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGFjY2VwdGVkIHRoZSBBMkhTIHByb21wdCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRpc21pc3NlZCB0aGUgQTJIUyBwcm9tcHQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiY29uc3QgYSA9ICgpPT4ge1xuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYSIsImNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XG5cblx0XG5cdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMgPSAxKSA9PiB7XG4gICAgbGV0IGV4cGlyZXMgPSBcIlwiO1xuICAgIFxuXHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKTtcblx0ZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIFxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSAgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBsZXQgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IobGV0IGk9MDtpIDwgY2EubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAobmFtZSkgPT4geyAgIFxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUrJz07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7IHBhdGg9LzsnOyAgXG59XG5cbi8vIHNldENvb2tpZSgncHBrY29va2llJywndGVzdGNvb2tpZScsNyk7XG5cbi8vIHZhciB4ID0gZ2V0Q29va2llKCdwcGtjb29raWUnKTtcbiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCJjb25zdCBsYXp5bG9hZCA9ICgpPT4ge1xuXHR0cnkge1xuXHRcdCQoJ1tiLWxhenlsb2FkXScpLmVhY2goZnVuY3Rpb24oZSl7XG5cdFx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRcdGNvbnN0IG5ld1NyYyA9IF90aGlzLmRhdGEoJ3NyYycpXG5cdFx0XHRfdGhpcy5wcm9wKCdzcmMnLCBuZXdTcmMpXG5cblx0XHR9KVxuXHR9IGNhdGNoKGUpe1xuXHRcdGNvbnNvbGUuZXJyb3IoJ2ItZGVidWcnLCBlKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhenlsb2FkIiwiZmV0Y2goJ2h0dHBzOi8vZml6emEuYXovc2l0ZS9sb2dJbmZvJykudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS50ZXh0KCkpLnRoZW4oKHQpPT57XG4gICAgJCgnI2xvZy1pbmZvJykuaHRtbCh0KVxufSkiLCIndXNlIHN0cmljdCdcbi8vLy8vLyBQT1BVUFxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0IG1hc2sgZnJvbSAnanF1ZXJ5LW1hc2stcGx1Z2luJ1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXG5cbi8vIGltcG9ydCAkIGZyb20gJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS0zLjMuMS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9wb3BwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9kYXRlcGlja2VyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LmZvcm0ubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9mb3JtLnZhcmlhYmxlcydcblxuXG4vLyBpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwJ1xuaW1wb3J0IGEgZnJvbSAnLi9hJ1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdidcbmltcG9ydCB3aW5kb3dTY3JvbGxMaXN0ZW5lciBmcm9tICcuL3dpbmRvd1Njcm9sbExpc3RlbmVyJ1xuaW1wb3J0IGRvY3VtZW50TGlzdGVuZXIgZnJvbSAnLi9kb2N1bWVudExpc3RlbmVyJ1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcidcbmltcG9ydCBzaG9wcGluZ0NhcmQgZnJvbSAnLi9zaG9wcGluZ0NhcmQnXG5pbXBvcnQgb3BlblBvcHVwIGZyb20gJy4vb3BlblBvcHVwJ1xuaW1wb3J0IHJlcGVhdEl0ZW0gZnJvbSAnLi9yZXBlYXRJdGVtJ1xuaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi9sYXp5bG9hZCdcbmltcG9ydCBzbXNWZXJpZmljYXRpb24gZnJvbSAnLi9zbXNWZXJpZmljYXRpb24nXG5pbXBvcnQgTGF5ZXJlZFNsaWRlciBmcm9tICcuL0xheWVyZWRTbGlkZXInXG4vLyBpbXBvcnQgUmFuZG9tRGVlciBmcm9tICcuL1JhbmRvbURlZXInXG5pbXBvcnQgUFdBIGZyb20gJy4vUFdBJ1xuaW1wb3J0IEdldFBydWR1Y3RGcm9tVXJsIGZyb20gJy4vR2V0UHJ1ZHVjdEZyb21VcmwnXG5pbXBvcnQgbG9hZERPTSBmcm9tICcuL2xvYWRET00nXG5cblxuaW1wb3J0IHtzZXRDb29raWUsIGdldENvb2tpZX0gZnJvbSAnLi9jb29raWVzJ1xuXG5cblxuLy8gaW1wb3J0ICdib290c3RyYXAnXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJ1xuLy8gcmVxdWlyZShcIkBjaGVuZmVuZ3l1YW4vZGF0ZXBpY2tlclwiKVxuXG5cbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcbiAgICBmbigpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKVxuICB9XG59XG5cbnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90LXZpc2libGUtZmlyc3QnKS5zdHlsZS52aXNpYmlsaXR5PSd2aXNpYmxlJ1xuXHRuYXYoKVxuXHR3aW5kb3dTY3JvbGxMaXN0ZW5lcigpXG5cdGRvY3VtZW50TGlzdGVuZXIoKVxuXHQvLyBzbGlkZXIoU3dpcGVyKVxuXHRzaG9wcGluZ0NhcmQoKVxuXHRvcGVuUG9wdXAoKVxuXHRyZXBlYXRJdGVtKClcblx0c21zVmVyaWZpY2F0aW9uKClcblx0TGF5ZXJlZFNsaWRlcigpXG5cblxuXG5cblx0Ly8gc29sdmUgaGFzaCBidWcgaW4gY2hyb21lXG5cdHZhciBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIGlzQ2hyb21lKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cblx0JCgnLnByZXNzQ2xvc2UnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRwcmVzc0Nsb3NlLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpfSwgNTAwKVxuXG5cdFx0Y2xvc2VOYXYoKVxuXHR9KVxuXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImRhdGVwaWNrZXJcIl0nKS5kYXRlcGlja2VyKHsgZm9ybWF0OiBcImRkL21tL3l5eXlcIiB9KVxuXG5cdCQoJy5qcXVlcnlNYXNrJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHQgPSAkKHRoaXMpXG5cdFx0dC5tYXNrKHQuYXR0cignZGF0YS1tYXNrJyksIHtcblx0XHRcdHRyYW5zbGF0aW9uOiB7QToge3BhdHRlcm46IC9BLywgb3B0aW9uYWw6IGZhbHNlfSwgWjoge3BhdHRlcm46IC9bQVpdLywgb3B0aW9uYWw6IGZhbHNlfSwgRToge3BhdHRlcm46IC9FLywgb3B0aW9uYWw6IHRydWV9fVxuXHRcdH0pXG5cdH0pXG5cblx0JCgnI0RlY2xhcmF0aW9uc19saW5rX2lkJykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI0RlY2xhcmF0aW9uc19uYW1lJykudHJpZ2dlcignZm9jdXMnKVxuXHR9KVxuXG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snOSddID0gJyc7XG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snZCddID0gJ1swLTldJztcblx0Ly8gJCgnLmpxdWVyeU1hc2snKS5tYXNrKCcyMjMxJyk7XG5cblx0XG5cdC8vIENsaXBib2FyZFxuXHQvLyBuZXcgQ2xpcGJvYXJkKCcuYnRuLWNsaXBib2FyZCcpO1xuXHR2YXIgdGltZW91dDtcblx0Ly8gY29uc3QgdGltZW91dFxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHZhciBhdXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgYXV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV4KTtcbiAgICAgICAgICBhdXguc2VsZWN0KCk7XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcbiAgICB9XG5cbiAgIFxuXG5cdFxuXHRjb25zdCB0b29sdGlwID0gJCgnLnRvb2x0aXB0ZXh0Jylcblx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXG5cdCQoJy5idG4tY2xpcGJvYXJkJykuYmluZCgnY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdGNvbnN0IGNvcHlOb2RlID0gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKVxuXHRcdGNvcHlOb2RlLmFkZENsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gY29weU5vZGUudGV4dCgpLnRyaW0oKVxuXHRcdGNvbnNvbGUubG9nKGNvcHlUZXh0KVxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0Y29weU5vZGUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGhlYXJ0QmVhdCcpXG5cdFx0fSwgMTAwMClcblxuXHRcdC8vIGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0fSlcblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5tb3VzZW91dChlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXG5cdFx0Ly8gY29uc3QgY29weU5vZGUgPSAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcblxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3B5JykpXG5cdFx0XHRcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbilcblx0XHRpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5sZW5ndGg+Mil7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSAnLyNvcmRlcnMtaG9sZGVyJ1xuXG5cdFx0fSBlbHNlIHtcblxuXHQgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0ICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI29yZGVycy1ob2xkZXJcIikub2Zmc2V0KCkudG9wIC0gMTBcblx0ICAgICAgICB9LCAxMDAwKTtcblx0ICAgIH1cbiAgICB9KTtcblxuICAgIC8vc2Nyb2xsIHRvIHRvcFxuICAvLyAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbiAoZSl7XG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgLy8gICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAvLyAgICAgICB9LCAxMDAwKTtcbiAgLy8gICB9KTtcblxuXG4gLy8gICBcdCQoJy5iLWludm9pY2VfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdC8vIFx0Y29uc3QgZmlsZXMgPSAkKCcuYi1pbnZvaWNlX19pbnB1dCcpWzBdLmZpbGVzXG5cdC8vIFx0Y29uc3QgZmlsZUluZm8gPSAkKCcuYi1pbnZvaWNlX19maWxlaW5mbycpXG5cdC8vIFx0ZmlsZUluZm8udGV4dCgnJykgXG5cblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKXtcblx0Ly8gXHRcdGNvbnN0IG5hbWUgPSBmaWxlc1tpXS5uYW1lXG5cdC8vIFx0XHRjb25zdCBzaXplID0gZmlsZXNbaV0uc2l6ZS8xMDI0LzEwMjRcblx0Ly8gXHRcdGZpbGVJbmZvLmFwcGVuZCgkKGA8YSBjbGFzcz1cImItaW52b2ljZV9fZmlsZW5hbWUgcC0xIG1yLTFcIj4ke25hbWV9PHNwYW4gY2xhc3M9XCJtbC0yXCIgaHJlZj1cIlwiPiZ0aW1lczs8L3NwYW4+PC9hPmApKVxuXHQvLyBcdH1cblx0ICBcblx0Ly8gfSlcblxuXG5cbiAgICBcbn0pIC8vIHJlYWR5XG5cblxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG5cblxuLy8gd2luZG93IGxvYWRlZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuXHRcblxuXHRsYXp5bG9hZCgpXG59KSAgXG5cblxuIiwiXG5jb25zdCBuYXYgPSAoKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFtYnVyZ2VyJywgKCk9Pntcblx0XHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0XHRzZXRUaW1lb3V0KCgpPT5uYXYuYWRkQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKSwgMTAwKVxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0fSlcblxuXHQkKCcubmF2LXRhYi1idXR0b24nKS5jbGljaygoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0JCgnLmItbmF2X190YWInKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHR0YXJnZXQucGFyZW50KCcuYi1uYXZfX3RhYicpLmFkZENsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnICsgaHJlZikuYWRkQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblxuXHR9KVxuXG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuIiwiY29uc3Qgb3BlblBvcHVwID0gKCk9PiB7XG5cdC8vIGNvbnN0IGJsdXJyeUJnID0gJCgnLmJsdXJyeS1iYWNrZ3JvdW5kJylcblx0Y29uc3QgcG9wdXAgPSAkKCcuYi1wb3B1cCcpXG5cdGNvbnN0IGJOYXYgPSAkKCcuYi1uYXYnKSAvLyByZXNwb25zaXZlIGlzc3Vlc1xuXHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0JCgnLm9wZW5Qb3B1cCcpLmNsaWNrKGU9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdhJylcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdC8vIGNvbnN0IG9mZnNldCA9ICQoZS50YXJnZXQpLm9mZnNldCgpXG5cdFx0Ly8gY29uc3QgdG9wID0gb2Zmc2V0LnRvcFxuXHRcdC8vIGNvbnN0IGxlZnQgPSBvZmZzZXQubGVmdFxuXHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuXHRcdC8vIGJsdXJyeUJnLmFkZENsYXNzKCdibHVycnktYmFja2dyb3VuZC0tYWN0aXZlJylcblx0XHQkKCcucHJlc3NDbG9zZScpLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblxuXHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgwLCAwLCAwLCAuMiknKVxuXHRcdGlmKCQoaHJlZikubGVuZ3RoPjAgKXtcblx0XHRcdCQoaHJlZikuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvcHVwLmFkZENsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdH1cblxuXHRcdC8vIHBvcHVwLmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0fSlcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmItcG9wdXAsIC5jbG9zZS1iLXBvcHVwJywgKGUpPT57XG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykuaGlkZSgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRpZih0YXJnZXQuY2xvc2VzdCgnLmItcG9wdXBfX2lubmVyJykubGVuZ3RoPD0wIHx8IHRhcmdldC5jbG9zZXN0KCcuY2xvc2UtYi1wb3B1cCcpLmxlbmd0aD4wKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0Ly8gYmx1cnJ5QmcucmVtb3ZlQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmItcG9wdXAtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRiTmF2LmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdH0sIDMwMClcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5yZW1vdmVDbGFzcygneS1oaWRkZW4nKVxuXHRcdFx0JCgnLnByZXNzQ2xvc2UtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXG5cdFx0XHQvLyAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJylcblxuXHRcdH1cblx0fSlcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5Qb3B1cFxuXG4iLCJjb25zdCByZXBlYXRJdGVtID0gKCk9PiB7XG5cdGNvbnN0IHJlcGVhdEl0ZW0gPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMClcblx0Y29uc3QgcmVwZWF0SXRlbVBhcmVudCA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKS5wYXJlbnQoKVxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcblx0Y29uc3QgcmVwZWF0SXRlbUJ1dHRvbiA9ICQoJ1tkYXRhLXJlcGVhdC10YXJnZXQ9XCJpdGVtXCJdJykuZXEoMClcblx0aWYocmVwZWF0SXRlbSAmJiByZXBlYXRJdGVtQnV0dG9uKSB7XG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXG5cdFx0cmVwZWF0SXRlbUJ1dHRvbi5jbGljaygoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0cmVwZWF0SXRlbVBhcmVudC5hcHBlbmQocmVwZWF0SXRlbUNsb25lLmNsb25lKCkpXG5cblx0XHR9KVxuXG5cblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScsIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRpZigkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykubGVuZ3RoPjEpe1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdFx0XHR0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLnJlbW92ZSgpXG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgcmVwZWF0SXRlbVxuXG5cbmNvbnN0IHJlcGVhdE5ld0l0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJ1tkYXRhLXJlcGVhdC10YXJnZXQ9XCJpdGVtXCJdJ1xuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCByZXBlYXRJdGVtQnV0dG9uLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0cmVwZWF0SXRlbVBhcmVudC5hcHBlbmQocmVwZWF0SXRlbUNsb25lLmNsb25lKCkpXG5cblx0XHR9KVxuXG5cblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScsIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRpZigkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykubGVuZ3RoPjEpe1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdFx0XHRjb25zdCBwYXJlbnRJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKVxuXHRcdFx0XHRwYXJlbnRJdGVtLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGhlaWdodDogJzAnXG5cdFx0XHRcdH0sICdmYXN0JywgJ3N3aW5nJywgXG5cdFx0XHRcdFx0KCkgPT4gcGFyZW50SXRlbS5yZW1vdmUoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0fSlcblxuXG5cblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGVhdE5ld0l0ZW1cblxuIiwiXG5jb25zdCBzaG9wcGluZ0NhcmQgPSAoKT0+IHtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywnLnNob3BwaW5nLWNhcmQnLCAoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblxuXHRcdCQoJy5zaG9wcGluZy1jYXJkJykudG9nZ2xlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXG5cdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLnRvZ2dsZSgpXG5cdFx0XG5cdCAgICAkKCcuYi1uYXZfX3dyYXBwZXInKS5hZGRDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdCAgICBodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMTAwMCk7XG5cdFx0XG5cdFx0cHJlc3NDbG9zZS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHQvLyBjb25zb2xlLmxvZygkKHRoaXMpKVxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG9wcGluZ0NhcmQiLCJjb25zdCBzbXNWZXJpZmljYXRpb24gPSAoKT0+IHtcblx0Y29uc3QgaW5wdXQgPSAkKCcuYi12ZXJpZmljYXRpb25fX2lucHV0JykuZXEoMClcblx0Y29uc3QgbWF4TGVuZ3RoID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4bGVuZ3RoJykpXG5cdGNvbnN0IGZvbnRTaXplID0gcGFyc2VJbnQoaW5wdXQuY3NzKCdmb250U2l6ZScpKVxuXHRjb25zdCBkYXNoZXMgPSAkKCcuYi12ZXJpZmljYXRpb25fX2Rhc2hlcycpXG5cdGNvbnN0IHVuZGVybGluZVdpZHRoID0gMzBcblx0Y29uc3QgdW5kZXJsaW5lTWFyZ2luUmlnaHQgPSAyMlxuXHRjb25zdCBob3Jpem9udGFsUGFkZGluZyA9IDNcblxuXHQvLyBjb25zb2xlLmxvZyggbWF4TGVuZ3RoLCBmb250U2l6ZSlcblx0XG5cdGRhc2hlcy5hcHBlbmQoJzxzcGFuPjwvc3Bhbj4nLnJlcGVhdChtYXhMZW5ndGgpKVxuXHRcdC5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKCcuYi12ZXJpZmljYXRpb25fX2lucHV0JykuY3NzKHtcblx0XHRcdCAgd2lkdGg6ICh1bmRlcmxpbmVXaWR0aCAqIChtYXhMZW5ndGggKyAxKSArIHVuZGVybGluZU1hcmdpblJpZ2h0ICogKG1heExlbmd0aCAtIDEpKSArIGhvcml6b250YWxQYWRkaW5nICogMixcblxuXHRcdFx0fSlcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbicpLmNzcyh7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuXHRcdFx0fSlcblx0XHRcdGlucHV0LmZvY3VzKClcblx0XHR9KVxuXHRcblx0aW5wdXQua2V5dXAoKCk9Pntcblx0XHRpZihpbnB1dC52YWwoKS5sZW5ndGg+PW1heExlbmd0aCkge1xuXHRcdFx0JCgnLnZlcmlmaWNhdGlvbkJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcblx0XHR9XG5cdH0pXG5cdFxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgc21zVmVyaWZpY2F0aW9uIiwiY29uc3Qgd2luZG93U2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XG5cdC8vIHNjcm9sbCBsaXN0ZW5lclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDBcblx0JCh3aW5kb3cpLnNjcm9sbCgoKT0+e1xuXHRcdFxuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKVxuXHRcdGNvbnN0IG5hdldyYXBwZXIgPSAkKCcuYi1uYXZfX3dyYXBwZXInKVxuXHRcdGNvbnN0IG5hdk1haW4gPSAkKCcuYi1uYXZfX21haW4nKVxuXHRcdGNvbnN0IHRvcE5hdiA9ICQoJy5iLW5hdl9fdG9wJylcblx0XHRjb25zdCBzY3JvbGxUb1RvcEJ1dHRvbiA9ICQoJy5zY3JvbGwtdG8tdG9wJylcblxuXHRcdC8vIGlmKHNjcm9sbFRvcD43MCkge1xuXHRcdC8vIFx0dG9wTmF2LmFkZENsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5yZW1vdmVDbGFzcygncHktMycpXG5cdFx0Ly8gXHRpZihzY3JvbGxUb3A+bGFzdFNjcm9sbFRvcCl7XG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHRcdFx0XHRcblxuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5hZGRDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHRvcE5hdi5yZW1vdmVDbGFzcygnYi1uYXZfX3RvcC0taGlkZGVuJylcblx0XHQvLyBcdG5hdk1haW4uYWRkQ2xhc3MoJ3B5LTMnKVxuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0aWYoc2Nyb2xsVG9wPjEwMCkge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24uYWRkQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLnJlbW92ZUNsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxuXHRcdH1cblx0XHRcblxuXHRcdGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3Bcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93U2Nyb2xsTGlzdGVuZXJcbiJdfQ==
