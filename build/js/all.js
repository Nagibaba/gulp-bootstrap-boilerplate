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

},{"./closeNav":4}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['./a', './nav', './windowScrollListener', './documentListener', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './addMenusToProfileDropdown', './smsVerification', './LayeredSlider'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./addMenusToProfileDropdown'), require('./smsVerification'), require('./LayeredSlider'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.addMenusToProfileDropdown, global.smsVerification, global.LayeredSlider);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _shoppingCard, _openPopup, _repeatItem, _closeNav, _lazyload, _addMenusToProfileDropdown, _smsVerification, _LayeredSlider) {
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


	// import slider from './slider'
	function ready(fn) {
		if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

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

		$('.btn-clipboard').bind('click onpressstart', function (e) {
			var target = $(e.target).parent('button');
			var tooltip = target.find('.tooltiptext');
			// const copyText = $( target.data('clipboard-target') )
			// COPY
			var copyText = target.closest('.copy').find('.copy__value').text().trim();

			copyToClipboard(copyText);
			// $(target.data('clipboard-target')).text()

			tooltip.text(tooltip.data('copied'));
			clearTimeout(timeout);
			// copyToClipboard(copyText)
		});
		$('.btn-clipboard').mouseout(function (e) {
			var target = $(e.target);
			var tooltip = target.find('.tooltiptext');
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


		$('.b-invoice__input').change(function () {
			var files = $('.b-invoice__input')[0].files;
			var extensions = $('.b-invoice__extensions');
			extensions.text('');

			for (var i = 0; i < files.length; i++) {
				var ext = files[i].name.split('.').pop().toLowerCase();
				extensions.append($('<div class="b-invoice__ext">' + ext + '</div>'));
			}
		});
	}); // ready


	// window loaded
	window.addEventListener('load', function () {

		(0, _lazyload2.default)();
		(0, _addMenusToProfileDropdown2.default)();
	});
});

},{"./LayeredSlider":1,"./a":2,"./addMenusToProfileDropdown":3,"./closeNav":4,"./documentListener":5,"./lazyload":6,"./nav":8,"./openPopup":9,"./repeatItem":10,"./shoppingCard":11,"./smsVerification":12,"./windowScrollListener":13}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9MYXllcmVkU2xpZGVyLmpzIiwic3JjL2pzL21haW4vYS5qcyIsInNyYy9qcy9tYWluL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24uanMiLCJzcmMvanMvbWFpbi9jbG9zZU5hdi5qcyIsInNyYy9qcy9tYWluL2RvY3VtZW50TGlzdGVuZXIuanMiLCJzcmMvanMvbWFpbi9sYXp5bG9hZC5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQUs7O0FBRTFCLE1BQU0sZ0JBQWdCLEVBQXRCLGlCQUFzQixDQUF0QjtBQUNBLE1BQU0sV0FBVyxFQUFBLHNCQUFBLEVBQUEsS0FBQSxHQUFBLFdBQUEsQ0FBakIsNkJBQWlCLENBQWpCO0FBQ0EsTUFBTSxhQUFhLEVBQW5CLDZCQUFtQixDQUFuQjtBQUNBLE1BQU0sT0FBTyxFQUFiLHVCQUFhLENBQWI7QUFDQSxNQUFNLFFBQVEsRUFBZCx3QkFBYyxDQUFkO0FBQ0EsTUFBTSxZQUFZLEVBQWxCLDhCQUFrQixDQUFsQjtBQUNBLE1BQU0sWUFBWSxFQUFsQiw4QkFBa0IsQ0FBbEI7QUFDQSxNQUFNLFFBQVEsS0FBZCxNQUFBO0FBQ0EsTUFBSSxJQUFKLENBQUE7QUFDQSxTQUFNLElBQU4sS0FBQSxFQUFnQjtBQUNmLGNBQUEsTUFBQSxDQUFrQixTQUFsQixLQUFrQixFQUFs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O0FBREQsSUFBQSxNQUVPO0FBQ04sc0JBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0E7O0FBR0QsbUJBQUEsU0FBQTtBQS9CRCxHQUFBO0FBSEQsRUFBQTs7bUJBc0NBLG9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IExheWVyZWRTbGlkZXIgPSAoKT0+IHtcblxuXHRjb25zdCBsYXllcmVkU2xpZGVyID0gJCgnLmxheWVyZWQtc2xpZGVyJylcblx0Y29uc3QgZG90Q2xvbmUgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdCcpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdGNvbnN0IGluZGljYXRvcnMgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2luZGljYXRvcnMnKVxuXHRjb25zdCBpdGVtID0gJCgnLmxheWVyZWQtc2xpZGVyX19pdGVtJylcblx0Y29uc3QgYXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93Jylcblx0Y29uc3QgbmV4dEFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tbmV4dCcpXG5cdGNvbnN0IHByZXZBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLXByZXYnKVxuXHRjb25zdCBjb3VudCA9IGl0ZW0ubGVuZ3RoXG5cdGxldCBpID0gMVxuXHR3aGlsZShpIDwgY291bnQpe1xuXHRcdGluZGljYXRvcnMuYXBwZW5kKGRvdENsb25lLmNsb25lKCkpXG5cdFx0aSsrXG5cdH1cblxuXG5cblx0Y29uc3QgZG90ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKVxuXHRkb3QuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBjb25zdCBpbmRleCA9ICQodGhpcykuaW5kZXgoKVxuXHQgIFxuXHQgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIGl0ZW0uZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBcblx0ICBkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgZG90LmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBcblx0ICBzbGlkZXJDaGFuZ2VkKGluZGV4KVxuXHR9KVxuXG5cdGNvbnN0IG5leHRBcnJvd0NsaWNrZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHRcdGNvbnN0IG5leHRJbmRleCA9IGluZGV4PGNvdW50LTEgPyBpbmRleCsxIDogMFxuXG5cdFx0aXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdFx0aXRlbS5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblxuXHRcdGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRkb3QuZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRzbGlkZXJDaGFuZ2VkKG5leHRJbmRleClcblx0fVxuXHRuZXh0QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBuZXh0QXJyb3dDbGlja2VkKClcblx0fSlcblxuXHRwcmV2QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdCAgY29uc3QgcHJldkluZGV4ID0gaW5kZXggLSAxXG5cdCAgXG5cdCAgaXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgaXRlbS5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBcblx0ICBkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgZG90LmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgc2xpZGVyQ2hhbmdlZChwcmV2SW5kZXgpXG5cdH0pXG5cblx0Y29uc3Qgc2xpZGVyQ2hhbmdlZCA9IChuZXdJbmRleCkgPT4ge1xuXHQgIGFycm93LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgaWYobmV3SW5kZXgrMT09Y291bnQpIHsgLy8gbGFzdFxuXHQgICAgLy8gbmV4dEFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBlbHNlIGlmKG5ld0luZGV4PT0wKSB7XG5cdCAgICAvLyBwcmV2QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICB9IFxuXHR9XG5cblx0Ly8gaW50ZXJ2YWxcblxuXHRcblx0bGV0IGludGVydmFsID0gbnVsbFxuXG5cdGNvbnN0IHN0YXJ0SW50ZXJ2YWwgPSAoKSA9PiB7XG5cdFx0aW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0QXJyb3dDbGlja2VkLCAzMDAwKVxuXHR9XG5cdHN0YXJ0SW50ZXJ2YWwoKVxuXG5cdGxheWVyZWRTbGlkZXIuaG92ZXIoKCk9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblx0fSwgKCkgPT4gc3RhcnRJbnRlcnZhbCgpIClcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyZWRTbGlkZXJcbiIsImNvbnN0IGEgPSAoKT0+IHtcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGEiLCJjb25zdCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duID0gKCk9PiB7XG5cdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQjdGFiLTIgLmItbmF2X19pdGVtJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IG5ld0l0ZW0gPSAkKHRoaXMpLmNsb25lKClcblx0XHRuZXdJdGVtLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0nKVxuXHRcdCQoJ1thcmlhLWxhYmVsbGVkYnk9XCJwcm9maWxlTWVudXNcIl0nKS5hcHBlbmQobmV3SXRlbSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93biIsImNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XG5cblx0XG5cdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCJjb25zdCBsYXp5bG9hZCA9ICgpPT4ge1xuXHR0cnkge1xuXHRcdCQoJ1tiLWxhenlsb2FkXScpLmVhY2goZnVuY3Rpb24oZSl7XG5cdFx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRcdGNvbnN0IG5ld1NyYyA9IF90aGlzLmRhdGEoJ3NyYycpXG5cdFx0XHRfdGhpcy5wcm9wKCdzcmMnLCBuZXdTcmMpXG5cblx0XHR9KVxuXHR9IGNhdGNoKGUpe1xuXHRcdGNvbnNvbGUuZXJyb3IoJ2ItZGVidWcnLCBlKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhenlsb2FkIiwiJ3VzZSBzdHJpY3QnXG4vLy8vLy8gUE9QVVBcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbi8vIGltcG9ydCBtYXNrIGZyb20gJ2pxdWVyeS1tYXNrLXBsdWdpbidcbi8vIGltcG9ydCBDbGlwYm9hcmQgZnJvbSAnY2xpcGJvYXJkJ1xuXG4vLyBpbXBvcnQgJCBmcm9tICcuLi9jb21waWxlZF9qcy9qcXVlcnktMy4zLjEubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkubWFzaydcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvcG9wcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZGF0ZXBpY2tlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3aXBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC5idW5kbGUubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAtc2VsZWN0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dlZXRhbGVydC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5mb3JtLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZm9ybS52YXJpYWJsZXMnXG5cblxuLy8gaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcCdcblxuaW1wb3J0IGEgZnJvbSAnLi9hJ1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdidcbmltcG9ydCB3aW5kb3dTY3JvbGxMaXN0ZW5lciBmcm9tICcuL3dpbmRvd1Njcm9sbExpc3RlbmVyJ1xuaW1wb3J0IGRvY3VtZW50TGlzdGVuZXIgZnJvbSAnLi9kb2N1bWVudExpc3RlbmVyJ1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcidcbmltcG9ydCBzaG9wcGluZ0NhcmQgZnJvbSAnLi9zaG9wcGluZ0NhcmQnXG5pbXBvcnQgb3BlblBvcHVwIGZyb20gJy4vb3BlblBvcHVwJ1xuaW1wb3J0IHJlcGVhdEl0ZW0gZnJvbSAnLi9yZXBlYXRJdGVtJ1xuaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi9sYXp5bG9hZCdcbmltcG9ydCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duIGZyb20gJy4vYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93bidcbmltcG9ydCBzbXNWZXJpZmljYXRpb24gZnJvbSAnLi9zbXNWZXJpZmljYXRpb24nXG5pbXBvcnQgTGF5ZXJlZFNsaWRlciBmcm9tICcuL0xheWVyZWRTbGlkZXInXG5cblxuXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCdcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnXG4vLyByZXF1aXJlKFwiQGNoZW5mZW5neXVhbi9kYXRlcGlja2VyXCIpXG5cblxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xuICAgIGZuKClcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXG4gIH1cbn1cblxucmVhZHkoZnVuY3Rpb24oKSB7XG5cdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3QtdmlzaWJsZS1maXJzdCcpLnN0eWxlLnZpc2liaWxpdHk9J3Zpc2libGUnXG5cdG5hdigpXG5cdHdpbmRvd1Njcm9sbExpc3RlbmVyKClcblx0ZG9jdW1lbnRMaXN0ZW5lcigpXG5cdC8vIHNsaWRlcihTd2lwZXIpXG5cdHNob3BwaW5nQ2FyZCgpXG5cdG9wZW5Qb3B1cCgpXG5cdHJlcGVhdEl0ZW0oKVxuXHRzbXNWZXJpZmljYXRpb24oKVxuXHRMYXllcmVkU2xpZGVyKClcblxuXG5cdC8vIHNvbHZlIGhhc2ggYnVnIGluIGNocm9tZVxuXHR2YXIgaXNDaHJvbWUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiBpc0Nocm9tZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG5cdCQoJy5wcmVzc0Nsb3NlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0cHJlc3NDbG9zZS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aHRtbC5yZW1vdmVDbGFzcygneS1oaWRkZW4nKX0sIDUwMClcblxuXHRcdGNsb3NlTmF2KClcblx0fSlcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJkYXRlcGlja2VyXCJdJykuZGF0ZXBpY2tlcih7IGZvcm1hdDogXCJkZC9tbS95eXl5XCIgfSlcblxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCB0ID0gJCh0aGlzKVxuXHRcdHQubWFzayh0LmF0dHIoJ2RhdGEtbWFzaycpLCB7XG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cblx0XHR9KVxuXHR9KVxuXG5cdCQoJyNEZWNsYXJhdGlvbnNfbGlua19pZCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdCQoJyNEZWNsYXJhdGlvbnNfbmFtZScpLnRyaWdnZXIoJ2ZvY3VzJylcblx0fSlcblxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJzknXSA9ICcnO1xuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XG5cdC8vICQoJy5qcXVlcnlNYXNrJykubWFzaygnMjIzMScpO1xuXG5cdFxuXHQvLyBDbGlwYm9hcmRcblx0Ly8gbmV3IENsaXBib2FyZCgnLmJ0bi1jbGlwYm9hcmQnKTtcblx0dmFyIHRpbWVvdXQ7XG5cdC8vIGNvbnN0IHRpbWVvdXRcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XG4gICAgfVxuXG4gICBcblxuXHRcblx0Y29uc3QgdG9vbHRpcCA9ICQoJy50b29sdGlwdGV4dCcpXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLmJpbmQoJ2NsaWNrIG9ucHJlc3NzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdFxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0Ly8gY29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHR9KVxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLm1vdXNlb3V0KGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmxlbmd0aD4yKXtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICcvI29yZGVycy1ob2xkZXInXG5cblx0XHR9IGVsc2Uge1xuXG5cdCAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjb3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgfVxuICAgIH0pO1xuXG4gICAgLy9zY3JvbGwgdG8gdG9wXG4gIC8vICAgJChcIi5zY3JvbGwtdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAvLyAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gIC8vICAgICAgIH0sIDEwMDApO1xuICAvLyAgIH0pO1xuXG5cbiAgIFx0JCgnLmItaW52b2ljZV9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0XHRjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcblx0XHRjb25zdCBleHRlbnNpb25zID0gJCgnLmItaW52b2ljZV9fZXh0ZW5zaW9ucycpXG5cdFx0ZXh0ZW5zaW9ucy50ZXh0KCcnKSBcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0Y29uc3QgZXh0ID0gZmlsZXNbaV0ubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKClcblx0XHRcdGV4dGVuc2lvbnMuYXBwZW5kKCQoYDxkaXYgY2xhc3M9XCJiLWludm9pY2VfX2V4dFwiPiR7ZXh0fTwvZGl2PmApKVxuXHRcdH1cblx0ICBcblx0fSlcblxuXG5cbiAgICBcbn0pIC8vIHJlYWR5XG5cblxuXG4vLyB3aW5kb3cgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdFxuXHRcblxuXHRsYXp5bG9hZCgpXG5cdGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24oKVxufSkgIFxuXG5cbiIsIlxuY29uc3QgbmF2ID0gKCkgPT4ge1xuXHQkKCcuaGFtYnVyZ2VyJykuY2xpY2soKCk9Pntcblx0XHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0XHRzZXRUaW1lb3V0KCgpPT5uYXYuYWRkQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKSwgMTAwKVxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0fSlcblxuXHQkKCcubmF2LXRhYi1idXR0b24nKS5jbGljaygoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0JCgnLmItbmF2X190YWInKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHR0YXJnZXQucGFyZW50KCcuYi1uYXZfX3RhYicpLmFkZENsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXHRcdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQnICsgaHJlZikuYWRkQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblxuXHR9KVxuXG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuIiwiY29uc3Qgb3BlblBvcHVwID0gKCk9PiB7XG5cdC8vIGNvbnN0IGJsdXJyeUJnID0gJCgnLmJsdXJyeS1iYWNrZ3JvdW5kJylcblx0Y29uc3QgcG9wdXAgPSAkKCcuYi1wb3B1cCcpXG5cdGNvbnN0IGJOYXYgPSAkKCcuYi1uYXYnKSAvLyByZXNwb25zaXZlIGlzc3Vlc1xuXHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0JCgnLm9wZW5Qb3B1cCcpLmNsaWNrKGU9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdhJylcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdC8vIGNvbnN0IG9mZnNldCA9ICQoZS50YXJnZXQpLm9mZnNldCgpXG5cdFx0Ly8gY29uc3QgdG9wID0gb2Zmc2V0LnRvcFxuXHRcdC8vIGNvbnN0IGxlZnQgPSBvZmZzZXQubGVmdFxuXHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuXHRcdC8vIGJsdXJyeUJnLmFkZENsYXNzKCdibHVycnktYmFja2dyb3VuZC0tYWN0aXZlJylcblx0XHQkKCcucHJlc3NDbG9zZScpLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblxuXHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAncmdiYSgwLCAwLCAwLCAuMiknKVxuXHRcdGlmKCQoaHJlZikubGVuZ3RoPjAgKXtcblx0XHRcdCQoaHJlZikuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvcHVwLmFkZENsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdH1cblxuXHRcdC8vIHBvcHVwLmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0fSlcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAnLmItcG9wdXAsIC5jbG9zZS1iLXBvcHVwJywgKGUpPT57XG5cdFx0Y29uc29sZS5sb2coJ3BvcHVwIGNsaWNrZWQnKVxuXHRcdFxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0aWYodGFyZ2V0LmNsb3Nlc3QoJy5iLXBvcHVwX19pbm5lcicpLmxlbmd0aDw9MCB8fCB0YXJnZXQuY2xvc2VzdCgnLmNsb3NlLWItcG9wdXAnKS5sZW5ndGg+MCl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdC8vIGJsdXJyeUJnLnJlbW92ZUNsYXNzKCdibHVycnktYmFja2dyb3VuZC0tYWN0aXZlJylcblx0XHRcdCQoJy5iLXBvcHVwLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Yk5hdi5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXG5cdFx0XHR9LCAzMDApXG5cdFx0XHQkKCdodG1sLCBib2R5JykucmVtb3ZlQ2xhc3MoJ3ktaGlkZGVuJylcblx0XHRcdCQoJy5wcmVzc0Nsb3NlLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblxuXHRcdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpXG5cblx0XHR9XG5cdH0pXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuUG9wdXBcblxuIiwiY29uc3QgcmVwZWF0SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAkKCdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXScpLmVxKDApXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdHJlcGVhdEl0ZW1CdXR0b24uY2xpY2soKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5yZW1vdmUoKVxuXHRcdFx0fVxuXG5cdFx0fSlcblxuXG5cblxuXHR9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHJlcGVhdEl0ZW1cblxuXG5jb25zdCByZXBlYXROZXdJdGVtID0gKCk9PiB7XG5cdGNvbnN0IHJlcGVhdEl0ZW0gPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMClcblx0Y29uc3QgcmVwZWF0SXRlbVBhcmVudCA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKS5wYXJlbnQoKVxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcblx0Y29uc3QgcmVwZWF0SXRlbUJ1dHRvbiA9ICdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXSdcblx0aWYocmVwZWF0SXRlbSAmJiByZXBlYXRJdGVtQnV0dG9uKSB7XG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgcmVwZWF0SXRlbUJ1dHRvbiwgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0Y29uc3QgcGFyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJylcblx0XHRcdFx0cGFyZW50SXRlbS5hbmltYXRlKHtcblx0XHRcdFx0XHRoZWlnaHQ6ICcwJ1xuXHRcdFx0XHR9LCAnZmFzdCcsICdzd2luZycsIFxuXHRcdFx0XHRcdCgpID0+IHBhcmVudEl0ZW0ucmVtb3ZlKClcblx0XHRcdFx0KVxuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXBlYXROZXdJdGVtXG5cbiIsIlxuY29uc3Qgc2hvcHBpbmdDYXJkID0gKCk9PiB7XG5cdCQoJy5zaG9wcGluZy1jYXJkJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnRvZ2dsZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS50b2dnbGUoKVxuXHRcdFxuXHQgICAgJCgnLmItbmF2X193cmFwcGVyJykuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHQgICAgaHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDEwMDApO1xuXHRcdFxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0Ly8gY29uc29sZS5sb2coJCh0aGlzKSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvcHBpbmdDYXJkIiwiY29uc3Qgc21zVmVyaWZpY2F0aW9uID0gKCk9PiB7XG5cdGNvbnN0IGlucHV0ID0gJCgnLmItdmVyaWZpY2F0aW9uX19pbnB1dCcpLmVxKDApXG5cdGNvbnN0IG1heExlbmd0aCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heGxlbmd0aCcpKVxuXHRjb25zdCBmb250U2l6ZSA9IHBhcnNlSW50KGlucHV0LmNzcygnZm9udFNpemUnKSlcblx0Y29uc3QgZGFzaGVzID0gJCgnLmItdmVyaWZpY2F0aW9uX19kYXNoZXMnKVxuXHRjb25zdCB1bmRlcmxpbmVXaWR0aCA9IDMwXG5cdGNvbnN0IHVuZGVybGluZU1hcmdpblJpZ2h0ID0gMjJcblx0Y29uc3QgaG9yaXpvbnRhbFBhZGRpbmcgPSAzXG5cblx0Ly8gY29uc29sZS5sb2coIG1heExlbmd0aCwgZm9udFNpemUpXG5cdFxuXHRkYXNoZXMuYXBwZW5kKCc8c3Bhbj48L3NwYW4+Jy5yZXBlYXQobWF4TGVuZ3RoKSlcblx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uX19pbnB1dCcpLmNzcyh7XG5cdFx0XHQgIHdpZHRoOiAodW5kZXJsaW5lV2lkdGggKiAobWF4TGVuZ3RoICsgMSkgKyB1bmRlcmxpbmVNYXJnaW5SaWdodCAqIChtYXhMZW5ndGggLSAxKSkgKyBob3Jpem9udGFsUGFkZGluZyAqIDIsXG5cblx0XHRcdH0pXG5cdFx0XHQkKCcuYi12ZXJpZmljYXRpb24nKS5jc3Moe1xuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZSdcblx0XHRcdH0pXG5cdFx0XHRpbnB1dC5mb2N1cygpXG5cdFx0fSlcblx0XG5cdGlucHV0LmtleXVwKCgpPT57XG5cdFx0aWYoaW5wdXQudmFsKCkubGVuZ3RoPj1tYXhMZW5ndGgpIHtcblx0XHRcdCQoJy52ZXJpZmljYXRpb25CdXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG5cdFx0fVxuXHR9KVxuXHRcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNtc1ZlcmlmaWNhdGlvbiIsImNvbnN0IHdpbmRvd1Njcm9sbExpc3RlbmVyID0gKCkgPT4ge1xuXHQvLyBzY3JvbGwgbGlzdGVuZXJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwXG5cdCQod2luZG93KS5zY3JvbGwoKCk9Pntcblx0XHRcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcblx0XHRjb25zdCBuYXZXcmFwcGVyID0gJCgnLmItbmF2X193cmFwcGVyJylcblx0XHRjb25zdCBuYXZNYWluID0gJCgnLmItbmF2X19tYWluJylcblx0XHRjb25zdCB0b3BOYXYgPSAkKCcuYi1uYXZfX3RvcCcpXG5cdFx0Y29uc3Qgc2Nyb2xsVG9Ub3BCdXR0b24gPSAkKCcuc2Nyb2xsLXRvLXRvcCcpXG5cblx0XHQvLyBpZihzY3JvbGxUb3A+NzApIHtcblx0XHQvLyBcdHRvcE5hdi5hZGRDbGFzcygnYi1uYXZfX3RvcC0taGlkZGVuJylcblx0XHQvLyBcdG5hdk1haW4ucmVtb3ZlQ2xhc3MoJ3B5LTMnKVxuXHRcdC8vIFx0aWYoc2Nyb2xsVG9wPmxhc3RTY3JvbGxUb3Ape1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLnJlbW92ZUNsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHRcdFx0XG5cblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHRcdC8vIFx0fVxuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHR0b3BOYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLmFkZENsYXNzKCdweS0zJylcblx0XHRcdFxuXHRcdC8vIH1cblxuXHRcdGlmKHNjcm9sbFRvcD4xMDApIHtcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLmFkZENsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5yZW1vdmVDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9XG5cdFx0XG5cblx0XHRsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1Njcm9sbExpc3RlbmVyXG4iXX0=
