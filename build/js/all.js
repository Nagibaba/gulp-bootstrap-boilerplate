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
			$('#Orders_color').val(searchParams.get('color'));

			$(window).bind("load", function () {
				$('#procedure-form #Orders_link').trigger('blur');
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
        e.preventDefault();
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

},{"./cookies":7}],4:[function(require,module,exports){
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
		global.addMenusToProfileDropdown = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var addMenusToProfileDropdown = function addMenusToProfileDropdown() {
		$('.b-nav__tab-content#tab-2 .b-nav__item').each(function () {
			var newItem = $(this).clone();
			newItem.removeClass().addClass('dropdown-item');
			$('[aria-labelledby="profileMenus"]').append(newItem);
		});
	};

	exports.default = addMenusToProfileDropdown;
	module.exports = exports['default'];
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
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['./a', './nav', './windowScrollListener', './documentListener', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './addMenusToProfileDropdown', './smsVerification', './LayeredSlider', './PWA', './GetPruductFromUrl', './cookies'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./addMenusToProfileDropdown'), require('./smsVerification'), require('./LayeredSlider'), require('./PWA'), require('./GetPruductFromUrl'), require('./cookies'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.addMenusToProfileDropdown, global.smsVerification, global.LayeredSlider, global.PWA, global.GetPruductFromUrl, global.cookies);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _shoppingCard, _openPopup, _repeatItem, _closeNav, _lazyload, _addMenusToProfileDropdown, _smsVerification, _LayeredSlider, _PWA, _GetPruductFromUrl, _cookies) {
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

	var _addMenusToProfileDropdown2 = _interopRequireDefault(_addMenusToProfileDropdown);

	var _smsVerification2 = _interopRequireDefault(_smsVerification);

	var _LayeredSlider2 = _interopRequireDefault(_LayeredSlider);

	var _PWA2 = _interopRequireDefault(_PWA);

	var _GetPruductFromUrl2 = _interopRequireDefault(_GetPruductFromUrl);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	// import 'bootstrap'
	// import 'bootstrap/js/dist/collapse'
	// require("@chenfengyuan/datepicker")


	function ready(fn) {
		if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}
	// import RandomDeer from './RandomDeer'

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
		$(".scroll-to-order").click(function (e) {
			e.preventDefault();

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
		(0, _addMenusToProfileDropdown2.default)();
	});
});

},{"./GetPruductFromUrl":1,"./LayeredSlider":2,"./PWA":3,"./a":4,"./addMenusToProfileDropdown":5,"./closeNav":6,"./cookies":7,"./documentListener":8,"./lazyload":9,"./nav":11,"./openPopup":12,"./repeatItem":13,"./shoppingCard":14,"./smsVerification":15,"./windowScrollListener":16}],11:[function(require,module,exports){
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
		$('.hamburger').click(function () {
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
		$('.shopping-card').click(function (e) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9HZXRQcnVkdWN0RnJvbVVybC5qcyIsInNyYy9qcy9tYWluL0xheWVyZWRTbGlkZXIuanMiLCJzcmMvanMvbWFpbi9QV0EuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93bi5qcyIsInNyYy9qcy9tYWluL2Nsb3NlTmF2LmpzIiwic3JjL2pzL21haW4vY29va2llcy5qcyIsInNyYy9qcy9tYWluL2RvY3VtZW50TGlzdGVuZXIuanMiLCJzcmMvanMvbWFpbi9sYXp5bG9hZC5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEVBQUMsWUFBVTtBQUNWLE1BQUksZUFBZSxJQUFBLGVBQUEsQ0FBb0IsT0FBQSxRQUFBLENBQXZDLE1BQW1CLENBQW5CO0FBQ0EsTUFBRyxhQUFBLEdBQUEsQ0FBSCxNQUFHLENBQUgsRUFBNEI7QUFDM0IsS0FBQSxjQUFBLEVBQUEsR0FBQSxDQUFzQixhQUFBLEdBQUEsQ0FBdEIsTUFBc0IsQ0FBdEI7QUFDQSxLQUFBLGVBQUEsRUFBQSxHQUFBLENBQXVCLGFBQUEsR0FBQSxDQUF2QixPQUF1QixDQUF2QjtBQUNBLEtBQUEsZUFBQSxFQUFBLEdBQUEsQ0FBdUIsYUFBQSxHQUFBLENBQXZCLE9BQXVCLENBQXZCO0FBQ0EsS0FBQSxlQUFBLEVBQUEsR0FBQSxDQUF1QixhQUFBLEdB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Q0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFHLFlBQUgsR0FBQSxFQUFrQjtBQUNqQixzQkFBQSxRQUFBLENBQUEsdUJBQUE7QUFERCxJQUFBLE1BRU87QUFDTixzQkFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQTs7QUFHRCxtQkFBQSxTQUFBO0FBL0JELEdBQUE7QUFIRCxFQUFBOzttQkFzQ0Esb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCl7XG5cdGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5cdGlmKHNlYXJjaFBhcmFtcy5nZXQoJ2xpbmsnKSl7XG5cdFx0JCgnI09yZGVyc19saW5rJykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ2xpbmsnKSlcblx0XHQkKCcjT3JkZXJzX2NvdW50JykudmFsKHNlYXJjaFBhcmFtcy5nZXQoJ2NvdW50JykpXG5cdFx0JCgnI09yZGVyc19wcmljZScpLnZhbChzZWFyY2hQYXJhbXMuZ2V0KCdwcmljZScpKVxuXHRcdCQoJyNPcmRlcnNfY29sb3InKS52YWwoc2VhcmNoUGFyYW1zLmdldCgnY29sb3InKSlcblxuXHRcdCQod2luZG93KS5iaW5kKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoJyNwcm9jZWR1cmUtZm9ybSAjT3JkZXJzX2xpbmsnKS50cmlnZ2VyKCdibHVyJylcblx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKHtwYWdlOiAxfSwgXCJ0aXRsZSAxXCIsIFwiXCIpXG5cdFx0fSlcblxuXHR9XG5cblx0XG59KSgpIiwiY29uc3QgTGF5ZXJlZFNsaWRlciA9ICgpPT4ge1xuXG5cdGNvbnN0IGxheWVyZWRTbGlkZXIgPSAkKCcubGF5ZXJlZC1zbGlkZXInKVxuXHRjb25zdCBkb3RDbG9uZSA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0Y29uc3QgaW5kaWNhdG9ycyA9ICQoJy5sYXllcmVkLXNsaWRlcl9faW5kaWNhdG9ycycpXG5cdGNvbnN0IGl0ZW0gPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2l0ZW0nKVxuXHRjb25zdCBhcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3cnKVxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1uZXh0Jylcblx0Y29uc3QgcHJldkFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tcHJldicpXG5cdGNvbnN0IGNvdW50ID0gaXRlbS5sZW5ndGhcblx0bGV0IGkgPSAxXG5cdHdoaWxlKGkgPCBjb3VudCl7XG5cdFx0aW5kaWNhdG9ycy5hcHBlbmQoZG90Q2xvbmUuY2xvbmUoKSlcblx0XHRpKytcblx0fVxuXG5cblxuXHRjb25zdCBkb3QgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdCcpXG5cdGRvdC5jbGljayhmdW5jdGlvbigpe1xuXHQgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpXG5cdCAgXG5cdCAgaXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgaXRlbS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIFxuXHQgIGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBkb3QuZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIFxuXHQgIHNsaWRlckNoYW5nZWQoaW5kZXgpXG5cdH0pXG5cblx0Y29uc3QgbmV4dEFycm93Q2xpY2tlZCA9ICgpID0+IHtcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdFx0Y29uc3QgbmV4dEluZGV4ID0gaW5kZXg8Y291bnQtMSA/IGluZGV4KzEgOiAwXG5cblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0XHRpdGVtLmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdGRvdC5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdHNsaWRlckNoYW5nZWQobmV4dEluZGV4KVxuXHR9XG5cdGNvbnN0IHByZXZBcnJvd0NsaWNrZWQgPSAoKSA9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdFx0Y29uc3QgcHJldkluZGV4ID0gaW5kZXggLSAxXG5cblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0XHRpdGVtLmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdGRvdC5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdHNsaWRlckNoYW5nZWQocHJldkluZGV4KVxuXHR9XG5cdG5leHRBcnJvdy5jbGljayhmdW5jdGlvbigpe1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0bmV4dEFycm93Q2xpY2tlZCgpXG5cdH0pXG5cblx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0cHJldkFycm93Q2xpY2tlZCgpXG5cdH0pXG5cblx0Y29uc3Qgc2xpZGVyQ2hhbmdlZCA9IChuZXdJbmRleCkgPT4ge1xuXHQgIGFycm93LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgaWYobmV3SW5kZXgrMT09Y291bnQpIHsgLy8gbGFzdFxuXHQgICAgLy8gbmV4dEFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBlbHNlIGlmKG5ld0luZGV4PT0wKSB7XG5cdCAgICAvLyBwcmV2QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICB9IFxuXHR9XG5cblx0Ly8gaW50ZXJ2YWxcblxuXHRcblx0bGV0IGludGVydmFsID0gbnVsbFxuXG5cdGNvbnN0IHN0YXJ0SW50ZXJ2YWwgPSAoKSA9PiB7XG5cdFx0aW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0QXJyb3dDbGlja2VkLCA1MDAwKVxuXHR9XG5cdHN0YXJ0SW50ZXJ2YWwoKVxuXG5cdGxheWVyZWRTbGlkZXIuaG92ZXIoKCk9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0fSwgKCkgPT4gc3RhcnRJbnRlcnZhbCgpIClcblxuXG5cblx0Ly8gbGF5ZXJlZFNsaWRlci5vbihcInRvdWNoc3RhcnRcIiwgc3RhcnRUb3VjaCk7XG5cdC8vIGxheWVyZWRTbGlkZXIub24oXCJ0b3VjaG1vdmVcIiwgbW92ZVRvdWNoKTtcblxuXHQvLyAvLyBTd2lwZSBVcCAvIERvd24gLyBMZWZ0IC8gUmlnaHRcblx0Ly8gbGV0IGluaXRpYWxYID0gbnVsbDtcblx0Ly8gbGV0IGluaXRpYWxZID0gbnVsbDtcblxuXHQvLyBmdW5jdGlvbiBzdGFydFRvdWNoKGUpIHtcblx0Ly8gaW5pdGlhbFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcblx0Ly8gaW5pdGlhbFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcblx0Ly8gfTtcblxuXHQvLyBmdW5jdGlvbiBtb3ZlVG91Y2goZSkge1xuXHQvLyBpZiAoaW5pdGlhbFggPT09IG51bGwpIHtcblx0Ly8gICByZXR1cm47XG5cdC8vIH1cblxuXHQvLyBpZiAoaW5pdGlhbFkgPT09IG51bGwpIHtcblx0Ly8gICByZXR1cm47XG5cdC8vIH1cblxuXHQvLyBsZXQgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcblx0Ly8gbGV0IGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG5cblx0Ly8gbGV0IGRpZmZYID0gaW5pdGlhbFggLSBjdXJyZW50WDtcblx0Ly8gbGV0IGRpZmZZID0gaW5pdGlhbFkgLSBjdXJyZW50WTtcblxuXHQvLyBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XG5cdC8vICAgLy8gc2xpZGluZyBob3Jpem9udGFsbHlcblx0Ly8gICBpZiAoZGlmZlggPiAxMCkge1xuXHQvLyAgICAgLy8gc3dpcGVkIGxlZnRcblx0Ly8gICAgIHByZXZBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICAvLyBzd2lwZWQgcmlnaHRcblx0Ly8gICAgIG5leHRBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gIFxuXHQvLyB9IGVsc2Uge1xuXHQvLyAgIC8vIHNsaWRpbmcgdmVydGljYWxseVxuXHQvLyAgIGlmIChkaWZmWSA+IDApIHtcblx0Ly8gICAgIC8vIHN3aXBlZCB1cFxuXHQvLyAgICAgLy8gbmV4dEFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSBlbHNlIHtcblx0Ly8gICAgIC8vIHN3aXBlZCBkb3duXG5cdC8vICAgICAvLyBwcmV2QXJyb3dDbGlja2VkKClcblx0Ly8gICB9ICBcblx0Ly8gfVxuXG5cdC8vIGluaXRpYWxYID0gbnVsbDtcblx0Ly8gaW5pdGlhbFkgPSBudWxsO1xuXG5cdC8vIGUucHJldmVudERlZmF1bHQoKTtcblx0Ly8gfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllcmVkU2xpZGVyXG4iLCJpbXBvcnQge3NldENvb2tpZSwgZ2V0Q29va2llLCByZW1vdmVDb29raWV9IGZyb20gJy4vY29va2llcydcblxubGV0IGRlZmVycmVkUHJvbXB0O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIChlKSA9PiB7XG4gICAgLy8gUHJldmVudCBDaHJvbWUgNjcgYW5kIGVhcmxpZXIgZnJvbSBhdXRvbWF0aWNhbGx5IHNob3dpbmcgdGhlIHByb21wdFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBTdGFzaCB0aGUgZXZlbnQgc28gaXQgY2FuIGJlIHRyaWdnZXJlZCBsYXRlci5cbiAgICBkZWZlcnJlZFByb21wdCA9IGU7XG4gICAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYXMtYXBwJylcbiAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBpZighZ2V0Q29va2llKCdzYXZlLWFzLWFwcCcpKXtcbiAgICAgICAgJCgnI3NhdmUtYXMtYXBwJykudG9vbHRpcCgnc2hvdycpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PnskKCcjc2F2ZS1hcy1hcHAnKS50b29sdGlwKCdoaWRlJyl9LCAxMDAwMClcbiAgICAgICAgc2V0Q29va2llKCdzYXZlLWFzLWFwcCcsIDEpXG4gICAgfVxuXG4gICAgaWYoYnRuQWRkKXtcbiAgICAgICAgYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgLy8gaGlkZSBvdXIgdXNlciBpbnRlcmZhY2UgdGhhdCBzaG93cyBvdXIgQTJIUyBidXR0b25cbiAgICAgICAgICAgIGJ0bkFkZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBwcm9tcHQnKVxuICAgICAgICAgICAgLy8gU2hvdyB0aGUgcHJvbXB0XG4gICAgICAgICAgICBkZWZlcnJlZFByb21wdC5wcm9tcHQoKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4geyBjb25zb2xlLmxvZyhgLS0tLT4gJHtlcnJvcn1gKSB9KVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgdXNlciB0byByZXNwb25kIHRvIHRoZSBwcm9tcHRcbiAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0LnVzZXJDaG9pY2VcbiAgICAgICAgICAgIC50aGVuKChjaG9pY2VSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNob2ljZVJlc3VsdC5vdXRjb21lID09PSAnYWNjZXB0ZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgYWNjZXB0ZWQgdGhlIEEySFMgcHJvbXB0Jyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGlzbWlzc2VkIHRoZSBBMkhTIHByb21wdCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRlZmVycmVkUHJvbXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCJjb25zdCBhID0gKCk9PiB7XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBhIiwiY29uc3QgYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93biA9ICgpPT4ge1xuXHQkKCcuYi1uYXZfX3RhYi1jb250ZW50I3RhYi0yIC5iLW5hdl9faXRlbScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCBuZXdJdGVtID0gJCh0aGlzKS5jbG9uZSgpXG5cdFx0bmV3SXRlbS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdkcm9wZG93bi1pdGVtJylcblx0XHQkKCdbYXJpYS1sYWJlbGxlZGJ5PVwicHJvZmlsZU1lbnVzXCJdJykuYXBwZW5kKG5ld0l0ZW0pXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24iLCJjb25zdCBjbG9zZU5hdiA9ICgpPT4ge1xuXG5cdFxuXHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VOYXYiLCJleHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzID0gMSkgPT4ge1xuICAgIGxldCBleHBpcmVzID0gXCJcIjtcbiAgICBcblx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XG5cdGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICBcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yKGxldCBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKG5hbWUpID0+IHsgICBcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lKyc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87JzsgIFxufVxuXG4vLyBzZXRDb29raWUoJ3Bwa2Nvb2tpZScsJ3Rlc3Rjb29raWUnLDcpO1xuXG4vLyB2YXIgeCA9IGdldENvb2tpZSgncHBrY29va2llJyk7XG4iLCJpbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xuXHRcdGNvbnN0IF90aGlzID0gJChlLnRhcmdldClcblx0XHRcblxuXHRcdC8vIGlmIG5vdCBzZWxmIGNsaWNrZWRcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLmhhbWJ1cmdlcicpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmItbmF2JykubGVuZ3RoKXtcblx0XHRcdGNsb3NlTmF2KClcblxuXHRcdH1cblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNob3BwaW5nLWNhcmQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5sZW5ndGgpe1xuXHRcdFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5oaWRlKClcblx0XHR9XG5cdFx0XG5cdH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRMaXN0ZW5lclxuIiwiY29uc3QgbGF6eWxvYWQgPSAoKT0+IHtcblx0dHJ5IHtcblx0XHQkKCdbYi1sYXp5bG9hZF0nKS5lYWNoKGZ1bmN0aW9uKGUpe1xuXHRcdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXG5cdFx0XHRjb25zdCBuZXdTcmMgPSBfdGhpcy5kYXRhKCdzcmMnKVxuXHRcdFx0X3RoaXMucHJvcCgnc3JjJywgbmV3U3JjKVxuXG5cdFx0fSlcblx0fSBjYXRjaChlKXtcblx0XHRjb25zb2xlLmVycm9yKCdiLWRlYnVnJywgZSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXp5bG9hZCIsIid1c2Ugc3RyaWN0J1xuLy8vLy8vIFBPUFVQXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXG4vLyBpbXBvcnQgbWFzayBmcm9tICdqcXVlcnktbWFzay1wbHVnaW4nXG4vLyBpbXBvcnQgQ2xpcGJvYXJkIGZyb20gJ2NsaXBib2FyZCdcblxuLy8gaW1wb3J0ICQgZnJvbSAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LTMuMy4xLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5Lm1hc2snXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3BvcHBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2RhdGVwaWNrZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2lwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAuYnVuZGxlLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLXNlbGVjdC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3ZWV0YWxlcnQubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkuZm9ybS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Zvcm0udmFyaWFibGVzJ1xuXG5cbi8vIGltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAnXG5cbmltcG9ydCBhIGZyb20gJy4vYSdcbmltcG9ydCBuYXYgZnJvbSAnLi9uYXYnXG5pbXBvcnQgd2luZG93U2Nyb2xsTGlzdGVuZXIgZnJvbSAnLi93aW5kb3dTY3JvbGxMaXN0ZW5lcidcbmltcG9ydCBkb2N1bWVudExpc3RlbmVyIGZyb20gJy4vZG9jdW1lbnRMaXN0ZW5lcidcbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInXG5pbXBvcnQgc2hvcHBpbmdDYXJkIGZyb20gJy4vc2hvcHBpbmdDYXJkJ1xuaW1wb3J0IG9wZW5Qb3B1cCBmcm9tICcuL29wZW5Qb3B1cCdcbmltcG9ydCByZXBlYXRJdGVtIGZyb20gJy4vcmVwZWF0SXRlbSdcbmltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuaW1wb3J0IGxhenlsb2FkIGZyb20gJy4vbGF6eWxvYWQnXG5pbXBvcnQgYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93biBmcm9tICcuL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24nXG5pbXBvcnQgc21zVmVyaWZpY2F0aW9uIGZyb20gJy4vc21zVmVyaWZpY2F0aW9uJ1xuaW1wb3J0IExheWVyZWRTbGlkZXIgZnJvbSAnLi9MYXllcmVkU2xpZGVyJ1xuLy8gaW1wb3J0IFJhbmRvbURlZXIgZnJvbSAnLi9SYW5kb21EZWVyJ1xuaW1wb3J0IFBXQSBmcm9tICcuL1BXQSdcbmltcG9ydCBHZXRQcnVkdWN0RnJvbVVybCBmcm9tICcuL0dldFBydWR1Y3RGcm9tVXJsJ1xuXG5cbmltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWV9IGZyb20gJy4vY29va2llcydcblxuXG5cbi8vIGltcG9ydCAnYm9vdHN0cmFwJ1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcbi8vIHJlcXVpcmUoXCJAY2hlbmZlbmd5dWFuL2RhdGVwaWNrZXJcIilcblxuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgfVxufVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC12aXNpYmxlLWZpcnN0Jykuc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSdcblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0Ly8gc2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cdHNtc1ZlcmlmaWNhdGlvbigpXG5cdExheWVyZWRTbGlkZXIoKVxuXG5cblxuXG5cdC8vIHNvbHZlIGhhc2ggYnVnIGluIGNocm9tZVxuXHR2YXIgaXNDaHJvbWUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiBpc0Nocm9tZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG5cdCQoJy5wcmVzc0Nsb3NlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0cHJlc3NDbG9zZS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aHRtbC5yZW1vdmVDbGFzcygneS1oaWRkZW4nKX0sIDUwMClcblxuXHRcdGNsb3NlTmF2KClcblx0fSlcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJkYXRlcGlja2VyXCJdJykuZGF0ZXBpY2tlcih7IGZvcm1hdDogXCJkZC9tbS95eXl5XCIgfSlcblxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCB0ID0gJCh0aGlzKVxuXHRcdHQubWFzayh0LmF0dHIoJ2RhdGEtbWFzaycpLCB7XG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cblx0XHR9KVxuXHR9KVxuXG5cdCQoJyNEZWNsYXJhdGlvbnNfbGlua19pZCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdCQoJyNEZWNsYXJhdGlvbnNfbmFtZScpLnRyaWdnZXIoJ2ZvY3VzJylcblx0fSlcblxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJzknXSA9ICcnO1xuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XG5cdC8vICQoJy5qcXVlcnlNYXNrJykubWFzaygnMjIzMScpO1xuXG5cdFxuXHQvLyBDbGlwYm9hcmRcblx0Ly8gbmV3IENsaXBib2FyZCgnLmJ0bi1jbGlwYm9hcmQnKTtcblx0dmFyIHRpbWVvdXQ7XG5cdC8vIGNvbnN0IHRpbWVvdXRcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XG4gICAgfVxuXG4gICBcblxuXHRcblx0Y29uc3QgdG9vbHRpcCA9ICQoJy50b29sdGlwdGV4dCcpXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLmJpbmQoJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkucGFyZW50KCdidXR0b24nKVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXHRcdC8vIENPUFlcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9IHRhcmdldC5jbG9zZXN0KCcuY29weScpLmZpbmQoJy5jb3B5X192YWx1ZScpLnRleHQoKS50cmltKClcblx0XHRjb25zdCBjb3B5Tm9kZSA9ICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSlcblx0XHRjb3B5Tm9kZS5hZGRDbGFzcygnYW5pbWF0ZWQgaGVhcnRCZWF0Jylcblx0XHRjb25zdCBjb3B5VGV4dCA9IGNvcHlOb2RlLnRleHQoKS50cmltKClcblx0XHRjb25zb2xlLmxvZyhjb3B5VGV4dClcblx0XHRjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdFx0Ly8gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKS50ZXh0KClcblxuXHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcGllZCcpKVxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGNvcHlOb2RlLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxuXHRcdH0sIDEwMDApXG5cblx0XHQvLyBjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdH0pXG5cdCQoJy5idG4tY2xpcGJvYXJkJykubW91c2VvdXQoZT0+e1xuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlOb2RlID0gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9LCAyMDApXG5cdH0pXG5cdCQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoKVxuXG5cblxuXHQvLyB3ZSBhZGQgdGhlIG1vZGFsIHRvIHRoZSBlbmQgb2YgYm9keSBcblx0Y29uc3QgbW9kYWwgPSAkKCcuYWRkLXRvLXRoZS1lbmQtb2YtYm9keScpXG5cdCQoJ2JvZHknKS5hcHBlbmQobW9kYWwuY2xvbmUoKSlcblx0bW9kYWwucmVtb3ZlKClcblxuXG5cdFxuXG5cblx0Ly8gc2Nyb2xsIHRvIG9yZGVyXG5cdCQoXCIuc2Nyb2xsLXRvLW9yZGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcblx0XHRpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5sZW5ndGg+Mil7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSAnLyNvcmRlcnMtaG9sZGVyJ1xuXG5cdFx0fSBlbHNlIHtcblxuXHQgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0ICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI29yZGVycy1ob2xkZXJcIikub2Zmc2V0KCkudG9wIC0gMTBcblx0ICAgICAgICB9LCAxMDAwKTtcblx0ICAgIH1cbiAgICB9KTtcblxuICAgIC8vc2Nyb2xsIHRvIHRvcFxuICAvLyAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbiAoZSl7XG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgLy8gICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAvLyAgICAgICB9LCAxMDAwKTtcbiAgLy8gICB9KTtcblxuXG4gLy8gICBcdCQoJy5iLWludm9pY2VfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdC8vIFx0Y29uc3QgZmlsZXMgPSAkKCcuYi1pbnZvaWNlX19pbnB1dCcpWzBdLmZpbGVzXG5cdC8vIFx0Y29uc3QgZmlsZUluZm8gPSAkKCcuYi1pbnZvaWNlX19maWxlaW5mbycpXG5cdC8vIFx0ZmlsZUluZm8udGV4dCgnJykgXG5cblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKXtcblx0Ly8gXHRcdGNvbnN0IG5hbWUgPSBmaWxlc1tpXS5uYW1lXG5cdC8vIFx0XHRjb25zdCBzaXplID0gZmlsZXNbaV0uc2l6ZS8xMDI0LzEwMjRcblx0Ly8gXHRcdGZpbGVJbmZvLmFwcGVuZCgkKGA8YSBjbGFzcz1cImItaW52b2ljZV9fZmlsZW5hbWUgcC0xIG1yLTFcIj4ke25hbWV9PHNwYW4gY2xhc3M9XCJtbC0yXCIgaHJlZj1cIlwiPiZ0aW1lczs8L3NwYW4+PC9hPmApKVxuXHQvLyBcdH1cblx0ICBcblx0Ly8gfSlcblxuXG5cbiAgICBcbn0pIC8vIHJlYWR5XG5cblxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG5cblxuLy8gd2luZG93IGxvYWRlZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuXHRcblxuXHRsYXp5bG9hZCgpXG5cdGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24oKVxufSkgIFxuXG5cbiIsIlxuY29uc3QgbmF2ID0gKCkgPT4ge1xuXHQkKCcuaGFtYnVyZ2VyJykuY2xpY2soKCk9Pntcblx0XHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0XHRzZXRUaW1lb3V0KCgpPT5uYXYuYWRkQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKSwgMTAwKVxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0fSlcblxuXHQkKCcubmF2LXRhYi1idXR0b24nKS5jbGljaygoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0JCgnLmItbmF2X190YWInKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHR0YXJnZXQucGFyZW50KCcuYi1uYXZfX3RhYicpLmFkZENsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnICsgaHJlZikuYWRkQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblxuXHR9KVxuXG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuIiwiY29uc3Qgb3BlblBvcHVwID0gKCk9PiB7XG5cdC8vIGNvbnN0IGJsdXJyeUJnID0gJCgnLmJsdXJyeS1iYWNrZ3JvdW5kJylcblx0Y29uc3QgcG9wdXAgPSAkKCcuYi1wb3B1cCcpXG5cdGNvbnN0IGJOYXYgPSAkKCcuYi1uYXYnKSAvLyByZXNwb25zaXZlIGlzc3Vlc1xuXHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0JCgnLm9wZW5Qb3B1cCcpLmNsaWNrKGU9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdhJylcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdC8vIGNvbnN0IG9mZnNldCA9ICQoZS50YXJnZXQpLm9mZnNldCgpXG5cdFx0Ly8gY29uc3QgdG9wID0gb2Zmc2V0LnRvcFxuXHRcdC8vIGNvbnN0IGxlZnQgPSBvZmZzZXQubGVmdFxuXHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuXHRcdC8vIGJsdXJyeUJnLmFkZENsYXNzKCdibHVycnktYmFja2dyb3VuZC0tYWN0aXZlJylcblx0XHQkKCcucHJlc3NDbG9zZScpLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblxuXHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgwLCAwLCAwLCAuMiknKVxuXHRcdGlmKCQoaHJlZikubGVuZ3RoPjAgKXtcblx0XHRcdCQoaHJlZikuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvcHVwLmFkZENsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdH1cblxuXHRcdC8vIHBvcHVwLmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0fSlcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmItcG9wdXAsIC5jbG9zZS1iLXBvcHVwJywgKGUpPT57XG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuYi1wb3B1cC0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0fSwgMzAwKVxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtXG5cblxuY29uc3QgcmVwZWF0TmV3SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHJlcGVhdEl0ZW1CdXR0b24sIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpXG5cdFx0XHRcdHBhcmVudEl0ZW0uYW5pbWF0ZSh7XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0fSwgJ2Zhc3QnLCAnc3dpbmcnLCBcblx0XHRcdFx0XHQoKSA9PiBwYXJlbnRJdGVtLnJlbW92ZSgpXG5cdFx0XHRcdClcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxuXG4iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKCcuc2hvcHBpbmctY2FyZCcpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IHNtc1ZlcmlmaWNhdGlvbiA9ICgpPT4ge1xuXHRjb25zdCBpbnB1dCA9ICQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5lcSgwKVxuXHRjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXhsZW5ndGgnKSlcblx0Y29uc3QgZm9udFNpemUgPSBwYXJzZUludChpbnB1dC5jc3MoJ2ZvbnRTaXplJykpXG5cdGNvbnN0IGRhc2hlcyA9ICQoJy5iLXZlcmlmaWNhdGlvbl9fZGFzaGVzJylcblx0Y29uc3QgdW5kZXJsaW5lV2lkdGggPSAzMFxuXHRjb25zdCB1bmRlcmxpbmVNYXJnaW5SaWdodCA9IDIyXG5cdGNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gM1xuXG5cdC8vIGNvbnNvbGUubG9nKCBtYXhMZW5ndGgsIGZvbnRTaXplKVxuXHRcblx0ZGFzaGVzLmFwcGVuZCgnPHNwYW4+PC9zcGFuPicucmVwZWF0KG1heExlbmd0aCkpXG5cdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5jc3Moe1xuXHRcdFx0ICB3aWR0aDogKHVuZGVybGluZVdpZHRoICogKG1heExlbmd0aCArIDEpICsgdW5kZXJsaW5lTWFyZ2luUmlnaHQgKiAobWF4TGVuZ3RoIC0gMSkpICsgaG9yaXpvbnRhbFBhZGRpbmcgKiAyLFxuXG5cdFx0XHR9KVxuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uJykuY3NzKHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0XHR9KVxuXHRcdFx0aW5wdXQuZm9jdXMoKVxuXHRcdH0pXG5cdFxuXHRpbnB1dC5rZXl1cCgoKT0+e1xuXHRcdGlmKGlucHV0LnZhbCgpLmxlbmd0aD49bWF4TGVuZ3RoKSB7XG5cdFx0XHQkKCcudmVyaWZpY2F0aW9uQnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuXHRcdH1cblx0fSlcblx0XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzbXNWZXJpZmljYXRpb24iLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
