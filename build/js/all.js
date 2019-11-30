(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
		nextArrow.click(function () {
			nextArrowClicked();
		});

		prevArrow.click(function () {
			var index = $('.layered-slider__dot--active').index();
			var prevIndex = index - 1;

			item.removeClass('layered-slider__item--active');
			item.eq(prevIndex).addClass('layered-slider__item--active');

			dot.removeClass('layered-slider__dot--active');
			dot.eq(prevIndex).addClass('layered-slider__dot--active');
			sliderChanged(prevIndex);
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
			interval = setInterval(nextArrowClicked, 3000);
		};
		startInterval();

		layeredSlider.hover(function () {
			clearInterval(interval);
		}, function () {
			return startInterval();
		});
	};

	exports.default = LayeredSlider;
	module.exports = exports['default'];
});

},{}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
        document.cookie = name + '=; Max-Age=-99999999;';
    };

    // setCookie('ppkcookie','testcookie',7);

    // var x = getCookie('ppkcookie');
});

},{}],6:[function(require,module,exports){
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

},{"./closeNav":4}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['./a', './nav', './windowScrollListener', './documentListener', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './addMenusToProfileDropdown', './smsVerification', './LayeredSlider', './cookies'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./addMenusToProfileDropdown'), require('./smsVerification'), require('./LayeredSlider'), require('./cookies'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.addMenusToProfileDropdown, global.smsVerification, global.LayeredSlider, global.cookies);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _shoppingCard, _openPopup, _repeatItem, _closeNav, _lazyload, _addMenusToProfileDropdown, _smsVerification, _LayeredSlider, _cookies) {
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

		btnAdd.addEventListener('click', function (e) {
			e.preventDefault();
			// hide our user interface that shows our A2HS button
			btnAdd.style.display = 'none';
			// Show the prompt
			deferredPrompt.prompt();
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
	});

	// window loaded
	window.addEventListener('load', function () {

		(0, _lazyload2.default)();
		(0, _addMenusToProfileDropdown2.default)();
	});
});

},{"./LayeredSlider":1,"./a":2,"./addMenusToProfileDropdown":3,"./closeNav":4,"./cookies":5,"./documentListener":6,"./lazyload":7,"./nav":9,"./openPopup":10,"./repeatItem":11,"./shoppingCard":12,"./smsVerification":13,"./windowScrollListener":14}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
			console.log('popup clicked');

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

},{}],11:[function(require,module,exports){
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

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9MYXllcmVkU2xpZGVyLmpzIiwic3JjL2pzL21haW4vYS5qcyIsInNyYy9qcy9tYWluL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24uanMiLCJzcmMvanMvbWFpbi9jbG9zZU5hdi5qcyIsInNyYy9qcy9tYWluL2Nvb2tpZXMuanMiLCJzcmMvanMvbWFpbi9kb2N1bWVudExpc3RlbmVyLmpzIiwic3JjL2pzL21haW4vbGF6eWxvYWQuanMiLCJzcmMvanMvbWFpbi9tYWluLmpzIiwic3JjL2pzL21haW4vbmF2LmpzIiwic3JjL2pzL21haW4vb3BlblBvcHVwLmpzIiwic3JjL2pzL21haW4vcmVwZWF0SXRlbS5qcyIsInNyYy9qcy9tYWluL3Nob3BwaW5nQ2FyZC5qcyIsInNyYy9qcy9tYWluL3Ntc1ZlcmlmaWNhdGlvbi5qcyIsInNyYy9qcy9tYWluL3dpbmRvd1Njcm9sbExpc3RlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxLQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFLOztBQUUxQixNQUFNLGdCQUFnQixFQUF0QixpQkFBc0IsQ0FBdEI7QUFDQSxNQUFNLFdBQVcsRUFBQSxzQkFBQSxFQUFBLEtBQUEsR0FBQSxXQUFBLENBQWpCLDZCQUFpQixDQUFqQjtBQUNBLE1BQU0sYUFBYSxFQUFuQiw2QkFBbUIsQ0FBbkI7QUFDQSxNQUFNLE9BQU8sRUFBYix1QkFBYSxDQUFiO0FBQ0EsTUFBTSxRQUFRLEVBQWQsd0JBQWMsQ0FBZDtBQUNBLE1BQU0sWUFBWSxFQUFsQiw4QkFBa0IsQ0FBbEI7QUFDQSxNQUFNLFlBQVksRUFBbEIsOEJBQWtCLENBQWxCO0FBQ0EsTUFBTSxRQUFRLEtBQWQsTUFBQTtBQUNBLE1BQUksSUFBSixDQUFBO0FBQ0EsU0FBTSxJQUFOLEtBQUEsRUFBZ0I7QUFDZixjQUFBLE1B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QkFBa0IsWUFBbEIsQ0FBQSxJQUFtQyx3QkFBd0IsWUFBNUQsQ0FBb0MsQ0FBbkMsR0FBNkUsb0JBQW9COztBQUQzRSxJQUFoQztBQUlBLEtBQUEsaUJBQUEsRUFBQSxHQUFBLENBQXlCO0FBQ3hCLGdCQUFZO0FBRFksSUFBekI7QUFHQSxTQUFBLEtBQUE7QUFURixHQUFBOztBQVlBLFFBQUEsS0FBQSxDQUFZLFlBQUk7QUFDZixPQUFHLE1BQUEsR0FBQSxHQUFBLE1BQUEsSUFBSCxTQUFBLEVBQWtDO0FBQ2pDLE1BQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsT0FBQTtBQUNBO0FBSEYsR0FBQTtBQXZCRCxFQUFBOzttQkFnQ0EsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQSxLQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsR0FBTTtBQUNsQztBQUNBLE1BQUksZ0JBQUosQ0FBQTtBQUNBLElBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBaUIsWUFBSTs7QUFFcEIsT0FBTSxZQUFZLEVBQUEsTUFBQSxFQUFsQixTQUFrQixFQUFsQjtBQUNBLE9BQU0sYUFBYSxFQUFuQixpQkFBbUIsQ0FBbkI7QUFDQSxPQUFNLFVBQVUsRUFBaEIsY0FBZ0IsQ0FBaEI7QUFDQSxPQUFNLFNBQVMsRUFBZixhQUFlLENBQWY7QUFDQSxPQUFNLG9CQUFvQixFQUExQixnQkFBMEIsQ0FBMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQUcsWUFBSCxHQUFBLEVBQWtCO0FBQ2pCLHNCQUFBLFFBQUEsQ0FBQSx1QkFBQTtBQURELElBQUEsTUFFTztBQUNOLHNCQUFBLFdBQUEsQ0FBQSx1QkFBQTtBQUNBOztBQUdELG1CQUFBLFNBQUE7QUEvQkQsR0FBQTtBQUhELEVBQUE7O21CQXNDQSxvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBMYXllcmVkU2xpZGVyID0gKCk9PiB7XG5cblx0Y29uc3QgbGF5ZXJlZFNsaWRlciA9ICQoJy5sYXllcmVkLXNsaWRlcicpXG5cdGNvbnN0IGRvdENsb25lID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRjb25zdCBpbmRpY2F0b3JzID0gJCgnLmxheWVyZWQtc2xpZGVyX19pbmRpY2F0b3JzJylcblx0Y29uc3QgaXRlbSA9ICQoJy5sYXllcmVkLXNsaWRlcl9faXRlbScpXG5cdGNvbnN0IGFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdycpXG5cdGNvbnN0IG5leHRBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLW5leHQnKVxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1wcmV2Jylcblx0Y29uc3QgY291bnQgPSBpdGVtLmxlbmd0aFxuXHRsZXQgaSA9IDFcblx0d2hpbGUoaSA8IGNvdW50KXtcblx0XHRpbmRpY2F0b3JzLmFwcGVuZChkb3RDbG9uZS5jbG9uZSgpKVxuXHRcdGkrK1xuXHR9XG5cblxuXG5cdGNvbnN0IGRvdCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90Jylcblx0ZG90LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmluZGV4KClcblx0ICBcblx0ICBpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBpdGVtLmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgXG5cdCAgZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgXG5cdCAgc2xpZGVyQ2hhbmdlZChpbmRleClcblx0fSlcblxuXHRjb25zdCBuZXh0QXJyb3dDbGlja2VkID0gKCkgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpLmluZGV4KClcblx0XHRjb25zdCBuZXh0SW5kZXggPSBpbmRleDxjb3VudC0xID8gaW5kZXgrMSA6IDBcblxuXHRcdGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHRcdGl0ZW0uZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cblx0XHRkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0ZG90LmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdFx0c2xpZGVyQ2hhbmdlZChuZXh0SW5kZXgpXG5cdH1cblx0bmV4dEFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgbmV4dEFycm93Q2xpY2tlZCgpXG5cdH0pXG5cblx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgY29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHQgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gMVxuXHQgIFxuXHQgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIGl0ZW0uZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgXG5cdCAgZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIGRvdC5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIHNsaWRlckNoYW5nZWQocHJldkluZGV4KVxuXHR9KVxuXG5cdGNvbnN0IHNsaWRlckNoYW5nZWQgPSAobmV3SW5kZXgpID0+IHtcblx0ICBhcnJvdy5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIGlmKG5ld0luZGV4KzE9PWNvdW50KSB7IC8vIGxhc3Rcblx0ICAgIC8vIG5leHRBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gZWxzZSBpZihuZXdJbmRleD09MCkge1xuXHQgICAgLy8gcHJldkFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBcblx0fVxuXG5cdC8vIGludGVydmFsXG5cblx0XG5cdGxldCBpbnRlcnZhbCA9IG51bGxcblxuXHRjb25zdCBzdGFydEludGVydmFsID0gKCkgPT4ge1xuXHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dEFycm93Q2xpY2tlZCwgMzAwMClcblx0fVxuXHRzdGFydEludGVydmFsKClcblxuXHRsYXllcmVkU2xpZGVyLmhvdmVyKCgpPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdH0sICgpID0+IHN0YXJ0SW50ZXJ2YWwoKSApXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllcmVkU2xpZGVyXG4iLCJjb25zdCBhID0gKCk9PiB7XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBhIiwiY29uc3QgYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93biA9ICgpPT4ge1xuXHQkKCcuYi1uYXZfX3RhYi1jb250ZW50I3RhYi0yIC5iLW5hdl9faXRlbScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCBuZXdJdGVtID0gJCh0aGlzKS5jbG9uZSgpXG5cdFx0bmV3SXRlbS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdkcm9wZG93bi1pdGVtJylcblx0XHQkKCdbYXJpYS1sYWJlbGxlZGJ5PVwicHJvZmlsZU1lbnVzXCJdJykuYXBwZW5kKG5ld0l0ZW0pXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24iLCJjb25zdCBjbG9zZU5hdiA9ICgpPT4ge1xuXG5cdFxuXHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRuYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VOYXYiLCJleHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzID0gMSkgPT4ge1xuICAgIGxldCBleHBpcmVzID0gXCJcIjtcbiAgICBcblx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XG5cdGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICBcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbn1cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yKGxldCBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKG5hbWUpID0+IHsgICBcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lKyc9OyBNYXgtQWdlPS05OTk5OTk5OTsnOyAgXG59XG5cbi8vIHNldENvb2tpZSgncHBrY29va2llJywndGVzdGNvb2tpZScsNyk7XG5cbi8vIHZhciB4ID0gZ2V0Q29va2llKCdwcGtjb29raWUnKTtcbiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCJjb25zdCBsYXp5bG9hZCA9ICgpPT4ge1xuXHR0cnkge1xuXHRcdCQoJ1tiLWxhenlsb2FkXScpLmVhY2goZnVuY3Rpb24oZSl7XG5cdFx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRcdGNvbnN0IG5ld1NyYyA9IF90aGlzLmRhdGEoJ3NyYycpXG5cdFx0XHRfdGhpcy5wcm9wKCdzcmMnLCBuZXdTcmMpXG5cblx0XHR9KVxuXHR9IGNhdGNoKGUpe1xuXHRcdGNvbnNvbGUuZXJyb3IoJ2ItZGVidWcnLCBlKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhenlsb2FkIiwiJ3VzZSBzdHJpY3QnXG4vLy8vLy8gUE9QVVBcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbi8vIGltcG9ydCBtYXNrIGZyb20gJ2pxdWVyeS1tYXNrLXBsdWdpbidcbi8vIGltcG9ydCBDbGlwYm9hcmQgZnJvbSAnY2xpcGJvYXJkJ1xuXG4vLyBpbXBvcnQgJCBmcm9tICcuLi9jb21waWxlZF9qcy9qcXVlcnktMy4zLjEubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkubWFzaydcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvcG9wcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZGF0ZXBpY2tlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3aXBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC5idW5kbGUubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAtc2VsZWN0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dlZXRhbGVydC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5mb3JtLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZm9ybS52YXJpYWJsZXMnXG5cblxuLy8gaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcCdcblxuaW1wb3J0IGEgZnJvbSAnLi9hJ1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdidcbmltcG9ydCB3aW5kb3dTY3JvbGxMaXN0ZW5lciBmcm9tICcuL3dpbmRvd1Njcm9sbExpc3RlbmVyJ1xuaW1wb3J0IGRvY3VtZW50TGlzdGVuZXIgZnJvbSAnLi9kb2N1bWVudExpc3RlbmVyJ1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcidcbmltcG9ydCBzaG9wcGluZ0NhcmQgZnJvbSAnLi9zaG9wcGluZ0NhcmQnXG5pbXBvcnQgb3BlblBvcHVwIGZyb20gJy4vb3BlblBvcHVwJ1xuaW1wb3J0IHJlcGVhdEl0ZW0gZnJvbSAnLi9yZXBlYXRJdGVtJ1xuaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi9sYXp5bG9hZCdcbmltcG9ydCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duIGZyb20gJy4vYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93bidcbmltcG9ydCBzbXNWZXJpZmljYXRpb24gZnJvbSAnLi9zbXNWZXJpZmljYXRpb24nXG5pbXBvcnQgTGF5ZXJlZFNsaWRlciBmcm9tICcuL0xheWVyZWRTbGlkZXInXG5cbmltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWV9IGZyb20gJy4vY29va2llcydcblxuXG5cbi8vIGltcG9ydCAnYm9vdHN0cmFwJ1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcbi8vIHJlcXVpcmUoXCJAY2hlbmZlbmd5dWFuL2RhdGVwaWNrZXJcIilcblxuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgfVxufVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC12aXNpYmxlLWZpcnN0Jykuc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSdcblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0Ly8gc2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cdHNtc1ZlcmlmaWNhdGlvbigpXG5cdExheWVyZWRTbGlkZXIoKVxuXG5cblx0Ly8gc29sdmUgaGFzaCBidWcgaW4gY2hyb21lXG5cdHZhciBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIGlzQ2hyb21lKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cblx0JCgnLnByZXNzQ2xvc2UnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRwcmVzc0Nsb3NlLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpfSwgNTAwKVxuXG5cdFx0Y2xvc2VOYXYoKVxuXHR9KVxuXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImRhdGVwaWNrZXJcIl0nKS5kYXRlcGlja2VyKHsgZm9ybWF0OiBcImRkL21tL3l5eXlcIiB9KVxuXG5cdCQoJy5qcXVlcnlNYXNrJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHQgPSAkKHRoaXMpXG5cdFx0dC5tYXNrKHQuYXR0cignZGF0YS1tYXNrJyksIHtcblx0XHRcdHRyYW5zbGF0aW9uOiB7QToge3BhdHRlcm46IC9BLywgb3B0aW9uYWw6IGZhbHNlfSwgWjoge3BhdHRlcm46IC9bQVpdLywgb3B0aW9uYWw6IGZhbHNlfSwgRToge3BhdHRlcm46IC9FLywgb3B0aW9uYWw6IHRydWV9fVxuXHRcdH0pXG5cdH0pXG5cblx0JCgnI0RlY2xhcmF0aW9uc19saW5rX2lkJykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI0RlY2xhcmF0aW9uc19uYW1lJykudHJpZ2dlcignZm9jdXMnKVxuXHR9KVxuXG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snOSddID0gJyc7XG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snZCddID0gJ1swLTldJztcblx0Ly8gJCgnLmpxdWVyeU1hc2snKS5tYXNrKCcyMjMxJyk7XG5cblx0XG5cdC8vIENsaXBib2FyZFxuXHQvLyBuZXcgQ2xpcGJvYXJkKCcuYnRuLWNsaXBib2FyZCcpO1xuXHR2YXIgdGltZW91dDtcblx0Ly8gY29uc3QgdGltZW91dFxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHZhciBhdXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgYXV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV4KTtcbiAgICAgICAgICBhdXguc2VsZWN0KCk7XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcbiAgICB9XG5cbiAgIFxuXG5cdFxuXHRjb25zdCB0b29sdGlwID0gJCgnLnRvb2x0aXB0ZXh0Jylcblx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXG5cdCQoJy5idG4tY2xpcGJvYXJkJykuYmluZCgnY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdGNvbnN0IGNvcHlOb2RlID0gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKVxuXHRcdGNvcHlOb2RlLmFkZENsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gY29weU5vZGUudGV4dCgpLnRyaW0oKVxuXHRcdGNvbnNvbGUubG9nKGNvcHlUZXh0KVxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0Y29weU5vZGUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGhlYXJ0QmVhdCcpXG5cdFx0fSwgMTAwMClcblxuXHRcdC8vIGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0fSlcblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5tb3VzZW91dChlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXG5cdFx0Ly8gY29uc3QgY29weU5vZGUgPSAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcblxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3B5JykpXG5cdFx0XHRcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmxlbmd0aD4yKXtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICcvI29yZGVycy1ob2xkZXInXG5cblx0XHR9IGVsc2Uge1xuXG5cdCAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjb3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgfVxuICAgIH0pO1xuXG4gICAgLy9zY3JvbGwgdG8gdG9wXG4gIC8vICAgJChcIi5zY3JvbGwtdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAvLyAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gIC8vICAgICAgIH0sIDEwMDApO1xuICAvLyAgIH0pO1xuXG5cbiAvLyAgIFx0JCgnLmItaW52b2ljZV9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0Ly8gXHRjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcblx0Ly8gXHRjb25zdCBmaWxlSW5mbyA9ICQoJy5iLWludm9pY2VfX2ZpbGVpbmZvJylcblx0Ly8gXHRmaWxlSW5mby50ZXh0KCcnKSBcblxuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xuXHQvLyBcdFx0Y29uc3QgbmFtZSA9IGZpbGVzW2ldLm5hbWVcblx0Ly8gXHRcdGNvbnN0IHNpemUgPSBmaWxlc1tpXS5zaXplLzEwMjQvMTAyNFxuXHQvLyBcdFx0ZmlsZUluZm8uYXBwZW5kKCQoYDxhIGNsYXNzPVwiYi1pbnZvaWNlX19maWxlbmFtZSBwLTEgbXItMVwiPiR7bmFtZX08c3BhbiBjbGFzcz1cIm1sLTJcIiBocmVmPVwiXCI+JnRpbWVzOzwvc3Bhbj48L2E+YCkpXG5cdC8vIFx0fVxuXHQgIFxuXHQvLyB9KVxuXG5cblxuICAgIFxufSkgLy8gcmVhZHlcblxuXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG5cbmxldCBkZWZlcnJlZFByb21wdDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCAoZSkgPT4ge1xuICAgIC8vIFByZXZlbnQgQ2hyb21lIDY3IGFuZCBlYXJsaWVyIGZyb20gYXV0b21hdGljYWxseSBzaG93aW5nIHRoZSBwcm9tcHRcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXG4gICAgZGVmZXJyZWRQcm9tcHQgPSBlO1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWFzLWFwcCcpXG4gICAgYnRuQWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgaWYoIWdldENvb2tpZSgnc2F2ZS1hcy1hcHAnKSl7XG5cdFx0JCgnI3NhdmUtYXMtYXBwJykudG9vbHRpcCgnc2hvdycpXG5cdFx0c2V0VGltZW91dCgoKT0+eyQoJyNzYXZlLWFzLWFwcCcpLnRvb2x0aXAoJ2hpZGUnKX0sIDEwMDAwKVxuXHRcdHNldENvb2tpZSgnc2F2ZS1hcy1hcHAnLCAxKVxuXHR9XG5cblxuICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBoaWRlIG91ciB1c2VyIGludGVyZmFjZSB0aGF0IHNob3dzIG91ciBBMkhTIGJ1dHRvblxuICAgICAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gU2hvdyB0aGUgcHJvbXB0XG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnByb21wdCgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgdXNlciB0byByZXNwb25kIHRvIHRoZSBwcm9tcHRcbiAgICAgICAgZGVmZXJyZWRQcm9tcHQudXNlckNob2ljZVxuICAgICAgICAudGhlbigoY2hvaWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKGNob2ljZVJlc3VsdC5vdXRjb21lID09PSAnYWNjZXB0ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBhY2NlcHRlZCB0aGUgQTJIUyBwcm9tcHQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGlzbWlzc2VkIHRoZSBBMkhTIHByb21wdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIHdpbmRvdyBsb2FkZWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9Pntcblx0XG5cblx0bGF6eWxvYWQoKVxuXHRhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duKClcbn0pICBcblxuXG4iLCJcbmNvbnN0IG5hdiA9ICgpID0+IHtcblx0JCgnLmhhbWJ1cmdlcicpLmNsaWNrKCgpPT57XG5cdFx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0XHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cdFx0c2V0VGltZW91dCgoKT0+bmF2LmFkZENsYXNzKCdiLW5hdi0tYWN0aXZlJyksIDEwMClcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0JCgnLm5hdi10YWItYnV0dG9uJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdCQoJy5iLW5hdl9fdGFiJykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0dGFyZ2V0LnBhcmVudCgnLmItbmF2X190YWInKS5hZGRDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JyArIGhyZWYpLmFkZENsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cblx0fSlcblxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZcbiIsImNvbnN0IG9wZW5Qb3B1cCA9ICgpPT4ge1xuXHQvLyBjb25zdCBibHVycnlCZyA9ICQoJy5ibHVycnktYmFja2dyb3VuZCcpXG5cdGNvbnN0IHBvcHVwID0gJCgnLmItcG9wdXAnKVxuXHRjb25zdCBiTmF2ID0gJCgnLmItbmF2JykgLy8gcmVzcG9uc2l2ZSBpc3N1ZXNcblx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdCQoJy5vcGVuUG9wdXAnKS5jbGljayhlPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxuXHRcdC8vIGNvbnN0IHRvcCA9IG9mZnNldC50b3Bcblx0XHQvLyBjb25zdCBsZWZ0ID0gb2Zmc2V0LmxlZnRcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHQvLyBibHVycnlCZy5hZGRDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0JCgnLnByZXNzQ2xvc2UnKS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cblx0XHQvLyAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMCwgMCwgMCwgLjIpJylcblx0XHRpZigkKGhyZWYpLmxlbmd0aD4wICl7XG5cdFx0XHQkKGhyZWYpLmFkZENsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3B1cC5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9XG5cblx0XHQvLyBwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXG5cdH0pXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5iLXBvcHVwLCAuY2xvc2UtYi1wb3B1cCcsIChlKT0+e1xuXHRcdGNvbnNvbGUubG9nKCdwb3B1cCBjbGlja2VkJylcblx0XHRcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuYi1wb3B1cC0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0fSwgMzAwKVxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtXG5cblxuY29uc3QgcmVwZWF0TmV3SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHJlcGVhdEl0ZW1CdXR0b24sIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpXG5cdFx0XHRcdHBhcmVudEl0ZW0uYW5pbWF0ZSh7XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0fSwgJ2Zhc3QnLCAnc3dpbmcnLCBcblx0XHRcdFx0XHQoKSA9PiBwYXJlbnRJdGVtLnJlbW92ZSgpXG5cdFx0XHRcdClcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxuXG4iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKCcuc2hvcHBpbmctY2FyZCcpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IHNtc1ZlcmlmaWNhdGlvbiA9ICgpPT4ge1xuXHRjb25zdCBpbnB1dCA9ICQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5lcSgwKVxuXHRjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXhsZW5ndGgnKSlcblx0Y29uc3QgZm9udFNpemUgPSBwYXJzZUludChpbnB1dC5jc3MoJ2ZvbnRTaXplJykpXG5cdGNvbnN0IGRhc2hlcyA9ICQoJy5iLXZlcmlmaWNhdGlvbl9fZGFzaGVzJylcblx0Y29uc3QgdW5kZXJsaW5lV2lkdGggPSAzMFxuXHRjb25zdCB1bmRlcmxpbmVNYXJnaW5SaWdodCA9IDIyXG5cdGNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gM1xuXG5cdC8vIGNvbnNvbGUubG9nKCBtYXhMZW5ndGgsIGZvbnRTaXplKVxuXHRcblx0ZGFzaGVzLmFwcGVuZCgnPHNwYW4+PC9zcGFuPicucmVwZWF0KG1heExlbmd0aCkpXG5cdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5jc3Moe1xuXHRcdFx0ICB3aWR0aDogKHVuZGVybGluZVdpZHRoICogKG1heExlbmd0aCArIDEpICsgdW5kZXJsaW5lTWFyZ2luUmlnaHQgKiAobWF4TGVuZ3RoIC0gMSkpICsgaG9yaXpvbnRhbFBhZGRpbmcgKiAyLFxuXG5cdFx0XHR9KVxuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uJykuY3NzKHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0XHR9KVxuXHRcdFx0aW5wdXQuZm9jdXMoKVxuXHRcdH0pXG5cdFxuXHRpbnB1dC5rZXl1cCgoKT0+e1xuXHRcdGlmKGlucHV0LnZhbCgpLmxlbmd0aD49bWF4TGVuZ3RoKSB7XG5cdFx0XHQkKCcudmVyaWZpY2F0aW9uQnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuXHRcdH1cblx0fSlcblx0XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzbXNWZXJpZmljYXRpb24iLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
