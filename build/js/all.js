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

		$('.btn-clipboard').bind('click touchstart', function (e) {
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
			var fileInfo = $('.b-invoice__fileinfo');
			fileInfo.text('');

			for (var i = 0; i < files.length; i++) {
				var name = files[i].name;
				var size = files[i].size / 1024 / 1024;
				fileInfo.append($('<a class="b-invoice__filename p-1 mr-1">' + name + '<span class="ml-2" href="">&times;</span></a>'));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9MYXllcmVkU2xpZGVyLmpzIiwic3JjL2pzL21haW4vYS5qcyIsInNyYy9qcy9tYWluL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24uanMiLCJzcmMvanMvbWFpbi9jbG9zZU5hdi5qcyIsInNyYy9qcy9tYWluL2RvY3VtZW50TGlzdGVuZXIuanMiLCJzcmMvanMvbWFpbi9sYXp5bG9hZC5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQUs7O0FBRTFCLE1BQU0sZ0JBQWdCLEVBQXRCLGlCQUFzQixDQUF0QjtBQUNBLE1BQU0sV0FBVyxFQUFBLHNCQUFBLEVBQUEsS0FBQSxHQUFBLFdBQUEsQ0FBakIsNkJBQWlCLENBQWpCO0FBQ0EsTUFBTSxhQUFhLEVBQW5CLDZCQUFtQixDQUFuQjtBQUNBLE1BQU0sT0FBTyxFQUFiLHVCQUFhLENBQWI7QUFDQSxNQUFNLFFBQVEsRUFBZCx3QkFBYyxDQUFkO0FBQ0EsTUFBTSxZQUFZLEVBQWxCLDhCQUFrQixDQUFsQjtBQUNBLE1BQU0sWUFBWSxFQUFsQiw4QkFBa0IsQ0FBbEI7QUFDQSxNQUFNLFFBQVEsS0FBZCxNQUFBO0FBQ0EsTUFBSSxJQUFKLENBQUE7QUFDQSxTQUFNLElBQU4sS0FBQSxFQUFnQjtBQUNmLGNBQUEsTUFBQSxDQUFrQixTQUFsQixLQUFrQixFQUFsQjtBQUNBO0FBQ0E7O0FBSUQsTUFBTSxNQUFNLEVBQVosc0JBQVksQ0FBWjtBQUNBLE1BQUEsS0FBQSxDQUFVLFlBQVU7QUFDbEIsT0FBTSxRQUFRLEVBQUEsSUFBQSxFQUFkLEtBQWMsRUFBZDs7QUFFQSxRQUFBLFdBQUEsQ0FBQSw4QkFBQTtBQUNBLFFBQUEsRUFBQSxDQUFBLEtBQUEsRUFBQSxRQUFBLENBQUEsOEJBQUE7O0FBRUEsT0FBQSxXQUFBLENBQUEsNkJBQUE7QUFDQSxPQUFBLEVBQUEsQ0FBQSxLQUFBLEVBQUEsUUFBQSxDQUFBLDZCQUFBOztBQUVBLGlCQUFBLEtBQUE7QUFURixHQUFBOztBQVlBLE1BQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFNO0FBQzlCLE9BQU0sUUFBUSxFQUFBLDhCQUFBLEVBQWQsS0FBYyxFQUFkO0FBQ0EsT0FBTSxZQUFZLFFBQU0sUUFBTixDQUFBLEdBQWdCLFFBQWhCLENBQUEsR0FBbEIsQ0FBQTs7QUFFQSxRQUFBLFdBQUEsQ0FBQSw4QkFBQTtBQUNBLFFBQUEsRUFBQSxDQUFBLFNBQUEsRUFBQSxRQUFBLENBQUEsOEJBQUE7O0FBRUEsT0FBQSxXQUFBLENBQUEsNkJBQUE7QUFDQSxPQUFBLEVBQUEsQ0FBQSxTQUFBLEVBQUEsUUFBQSxDQUFBLDZCQUFBO0FBQ0EsaUJBQUEsU0FBQTtBQVRELEdBQUE7QUFXQSxZQUFBLEtBQUEsQ0FBZ0IsWUFBVTtBQUN4QjtBQURGLEdBQUE7O0FBSUEsWUFBQSxLQUFBLENBQWdCLFlBQVU7QUFDeEIsT0FBTSxRQUFRLEVBQUEsOEJBQUEsRUFBZCxLQUFjLEVBQWQ7QUFDQSxPQUFNLFlBQVksUUFBbEIsQ0FBQTs7QUFFQSxRQUFBLFdBQUEsQ0FBQSw4QkFBQTtBQUNBLFFBQUEsRUFBQSxDQUFBLFNBQUEsRUFBQSxRQUFBLENBQUEsOEJBQUE7O0FBRUEsT0FBQSxXQUFBLENBQUEsNkJBQUE7QUFDQSxPQUFBLEVBQUEsQ0FBQSxTQUFBLEVBQUEsUUFBQSxDQUFBLDZCQUFBO0FBQ0EsaUJBQUEsU0FBQTtBQVRGLEdBQUE7O0FBWUEsTUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQSxRQUFBLEVBQWM7QUFDbEMsU0FBQSxXQUFBLENBQUEsK0JBQUE7QUFDQSxPQUFHLFdBQUEsQ0FBQSxJQUFILEtBQUEsRUFBc0IsQ0FBRTtBQUN0QjtBQURGLElBQUEsTUFFTyxJQUFHLFlBQUgsQ0FBQSxFQUFnQjtBQUNyQjtBQUNEO0FBTkgsR0FBQTs7QUFTQTs7O0FBR0EsTUFBSSxXQUFKLElBQUE7O0FBRUEsTUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBTTtBQUMzQixjQUFXLFlBQUEsZ0JBQUEsRUFBWCxJQUFXLENBQVg7QUFERCxHQUFBO0FBR0E7O0FBRUEsZ0JBQUEsS0FBQSxDQUFvQixZQUFLO0FBQ3hCLGlCQUFBLFFBQUE7QUFERCxHQUFBLEVBRUcsWUFBQTtBQUFBLFVBRkgsZUFFRztBQUZILEdBQUE7QUE3RUQsRUFBQTs7bUJBb0ZBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkEsTUFBTSxJQUFJLFNBQUosQ0FBSSxHQUFWLENBQUEsQ0FBQTs7b0JBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLEtBQU0sNEJBQTRCLFNBQTVCLHlCQUE0QixHQUFLO0FBQ3RDLElBQUEsd0NBQUEsRUFBQSxJQUFBLENBQWlELFlBQVU7QUFDMUQsT0FBTSxVQUFVLEVBQUEsSUFBQSxFQUFoQixLQUFnQixFQUFoQjtBQUNBLFdBQUEsV0FBQSxHQUFBLFFBQUEsQ0FBQSxlQUFBO0FBQ0EsS0FBQSxrQ0FBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBO0FBSEQsR0FBQTtBQURELEVBQUE7O21CQVFBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsS0FBTSxXQUFXLFNBQVgsUUFBVyxHQUFLOztBQUdyQixNQUFNLE1BQU0sRUFBWixRQUFZLENBQVo7QUFDQSxNQUFBLFdBQUEsQ0FBQSxlQUFBO0FBSkQsRUFBQTs7bUJBUUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFhO0FBQUEsTUFBWixLQUFZLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBYixJQUFhOztBQUNyQyxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFBbUMsVUFBQSxDQUFBLEVBQUs7QUFDdkMsT0FBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUdBO0FBQ0EsT0FBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFlBQUEsRUFBRCxNQUFBLElBQXVDLENBQUMsTUFBQSxPQUFBLENBQUEsUUFBQSxFQUEzQyxNQUFBLEVBQTBFO0FBQ3pFLEtBQUEsR0FBQSxXQUFBLE9BQUE7QUFFQTtBQUNELE9BQUcsQ0FBQyxNQUFBLE9BQUEsQ0FBQSxnQkFBQSxFQUFELE1BQUEsSUFBMkMsQ0FBQyxNQUFBLE9BQUEsQ0FBQSwyQkFBQSxFQUEvQyxNQUFBLEVBQWlHO0FBQ2hHLE1BQUEsZ0JBQUEsRUFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQSxNQUFBLDJCQUFBLEVBQUEsSUFBQTtBQUNBO0FBWkYsR0FBQTtBQURELEVBQUE7O21CQW1CQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxLQUFNLFdBQVcsU0FBWCxRQUFXLEdBQUs7QUFDckIsTUFBSTtBQUNILEtBQUEsY0FBQSxFQUFBLElBQUEsQ0FBdUIsVUFBQSxDQUFBLEVBQVc7QUFDakMsUUFBTSxRQUFRLEVBQWQsSUFBYyxDQUFkO0FBQ0EsUUFBTSxTQUFTLE1BQUEsSUFBQSxDQUFmLEtBQWUsQ0FBZjtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBSEQsSUFBQTtBQURELEdBQUEsQ0FPRSxPQUFBLENBQUEsRUFBUTtBQUNULFdBQUEsS0FBQSxDQUFBLFNBQUEsRUFBQSxDQUFBO0FBQ0E7QUFWRixFQUFBOzttQkFhQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTs7O0FBZEE7QUFpQkEsVUFBQSxLQUFBLENBQUEsRUFBQSxFQUFtQjtBQUNqQixNQUFJLFNBQUEsV0FBQSxHQUF1QixTQUFBLFVBQUEsS0FBdkIsVUFBQSxHQUE0RCxTQUFBLFVBQUEsS0FBaEUsU0FBQSxFQUFrRztBQUNoRztBQURGLEdBQUEsTUFFTztBQUNMLFlBQUEsZ0JBQUEsQ0FBQSxrQkFBQSxFQUFBLEVBQUE7QUFDRDtBQUNGOztBQUVELE9BQU0sWUFBVztBQUNoQjtBQUNBLEdBQUEsR0FBQSxNQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsdUJBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxtQkFBQSxPQUFBO0FBQ0E7QUFDQSxHQUFBLEdBQUEsZUFBQSxPQUFBO0FBQ0EsR0FBQSxHQUFBLFlBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxhQUFBLE9BQUE7QUFDQSxHQUFBLEdBQUEsa0JBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSxnQkFBQSxPQUFBOztBQUdBO0FBQ0EsTUFBSSxXQUFXLFNBQUEsSUFBQSxDQUFjLFVBQWQsU0FBQSxLQUFzQyxhQUFBLElBQUEsQ0FBa0IsVUFBdkUsTUFBcUQsQ0FBckQ7QUFDRyxNQUFJLE9BQUEsUUFBQSxDQUFBLElBQUEsSUFBSixRQUFBLEVBQXNDO0FBQ2xDLGNBQVcsWUFBWTtBQUNuQixRQUFJLE9BQU8sT0FBQSxRQUFBLENBQVgsSUFBQTtBQUNBLFdBQUEsUUFBQSxDQUFBLElBQUEsR0FBQSxFQUFBO0FBQ0EsV0FBQSxRQUFBLENBQUEsSUFBQSxHQUFBLElBQUE7QUFISixJQUFBLEVBQUEsR0FBQTtBQUtIOztBQUVKLElBQUEsYUFBQSxFQUFBLEVBQUEsQ0FBQSxrQkFBQSxFQUF3QyxVQUFBLENBQUEsRUFBRztBQUMxQyxPQUFNLE9BQU8sRUFBYixNQUFhLENBQWI7QUFDQSxPQUFNLGFBQWEsRUFBbkIsYUFBbUIsQ0FBbkI7QUFDQSxjQUFBLFdBQUEsQ0FBQSxvQkFBQTtBQUNBLGNBQVcsWUFBVTtBQUFDLFNBQUEsV0FBQSxDQUFBLFVBQUE7QUFBdEIsSUFBQSxFQUFBLEdBQUE7O0FBRUEsSUFBQSxHQUFBLFdBQUEsT0FBQTtBQU5ELEdBQUE7O0FBU0EsSUFBQSw0QkFBQSxFQUFBLFVBQUEsQ0FBMkMsRUFBRSxRQUE3QyxZQUEyQyxFQUEzQzs7QUFFQSxJQUFBLGFBQUEsRUFBQSxJQUFBLENBQXNCLFlBQVU7QUFDL0IsT0FBTSxJQUFJLEVBQVYsSUFBVSxDQUFWO0FBQ0EsS0FBQSxJQUFBLENBQU8sRUFBQSxJQUFBLENBQVAsV0FBTyxDQUFQLEVBQTRCO0FBQzNCLGlCQUFhLEVBQUMsR0FBRyxFQUFDLFNBQUQsR0FBQSxFQUFlLFVBQW5CLEtBQUksRUFBSixFQUFxQyxHQUFHLEVBQUMsU0FBRCxNQUFBLEVBQWtCLFVBQTFELEtBQXdDLEVBQXhDLEVBQTRFLEdBQUcsRUFBQyxTQUFELEdBQUEsRUFBZSxVQUE5RixJQUErRSxFQUEvRTtBQURjLElBQTVCO0FBRkQsR0FBQTs7QUFPQSxJQUFBLHVCQUFBLEVBQUEsTUFBQSxDQUFrQyxZQUFVO0FBQzNDLEtBQUEsb0JBQUEsRUFBQSxPQUFBLENBQUEsT0FBQTtBQURELEdBQUE7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsTUFBQSxPQUFBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQixTQUFsQixlQUFrQixDQUFBLElBQUEsRUFBZ0I7QUFDL0IsT0FBSSxNQUFNLFNBQUEsYUFBQSxDQUFWLE9BQVUsQ0FBVjtBQUNBLE9BQUEsWUFBQSxDQUFBLE9BQUEsRUFBQSxJQUFBO0FBQ0EsWUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLEdBQUE7QUFDQSxPQUFBLE1BQUE7QUFDQSxZQUFBLFdBQUEsQ0FBQSxNQUFBO0FBQ0EsWUFBQSxJQUFBLENBQUEsV0FBQSxDQUFBLEdBQUE7QUFOVCxHQUFBOztBQVlBLE1BQU0sVUFBVSxFQUFoQixjQUFnQixDQUFoQjtBQUNBLFVBQUEsSUFBQSxDQUFhLFFBQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjs7QUFFQSxJQUFBLGdCQUFBLEVBQUEsSUFBQSxDQUFBLGtCQUFBLEVBQTZDLFVBQUEsQ0FBQSxFQUFHO0FBQy9DLE9BQU0sU0FBUyxFQUFFLEVBQUYsTUFBQSxFQUFBLE1BQUEsQ0FBZixRQUFlLENBQWY7QUFDQSxPQUFNLFVBQVUsT0FBQSxJQUFBLENBQWhCLGNBQWdCLENBQWhCO0FBQ0E7QUFDQTtBQUNBLE9BQU0sV0FBVyxPQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLGNBQUEsRUFBQSxJQUFBLEdBQWpCLElBQWlCLEVBQWpCOztBQUVBLG1CQUFBLFFBQUE7QUFDQTs7QUFFQSxXQUFBLElBQUEsQ0FBYSxRQUFBLElBQUEsQ0FBYixRQUFhLENBQWI7QUFDQSxnQkFBQSxPQUFBO0FBQ0E7QUFaRCxHQUFBO0FBY0EsSUFBQSxnQkFBQSxFQUFBLFFBQUEsQ0FBNkIsVUFBQSxDQUFBLEVBQUc7QUFDL0IsT0FBTSxTQUFTLEVBQUUsRUFBakIsTUFBZSxDQUFmO0FBQ0EsT0FBTSxVQUFVLE9BQUEsSUFBQSxDQUFoQixjQUFnQixDQUFoQjtBQUNBOztBQUVBLGFBQVUsV0FBVyxZQUFVO0FBQzlCLFlBQUEsSUFBQSxDQUFhLFFBQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjtBQURTLElBQUEsRUFBVixHQUFVLENBQVY7QUFMRCxHQUFBO0FBVUEsSUFBQSxlQUFBLEVBQUEsWUFBQTs7QUFJQTtBQUNBLE1BQU0sUUFBUSxFQUFkLHlCQUFjLENBQWQ7QUFDQSxJQUFBLE1BQUEsRUFBQSxNQUFBLENBQWlCLE1BQWpCLEtBQWlCLEVBQWpCO0FBQ0EsUUFBQSxNQUFBOztBQU1BO0FBQ0EsSUFBQSxrQkFBQSxFQUFBLEtBQUEsQ0FBNEIsVUFBQSxDQUFBLEVBQVk7QUFDdkMsS0FBQSxjQUFBOztBQUVBLE9BQUcsT0FBQSxRQUFBLENBQUEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxHQUFILENBQUEsRUFBZ0Q7QUFDL0MsV0FBQSxRQUFBLEdBQUEsaUJBQUE7QUFERCxJQUFBLE1BR087O0FBRUEsTUFBQSxZQUFBLEVBQUEsT0FBQSxDQUF3QjtBQUNwQixnQkFBVyxFQUFBLGdCQUFBLEVBQUEsTUFBQSxHQUFBLEdBQUEsR0FBbUM7QUFEMUIsS0FBeEIsRUFBQSxJQUFBO0FBR0g7QUFYTCxHQUFBOztBQWNHO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRSxJQUFBLG1CQUFBLEVBQUEsTUFBQSxDQUE4QixZQUFVO0FBQzFDLE9BQU0sUUFBUSxFQUFBLG1CQUFBLEVBQUEsQ0FBQSxFQUFkLEtBQUE7QUFDQSxPQUFNLFdBQVcsRUFBakIsc0JBQWlCLENBQWpCO0FBQ0EsWUFBQSxJQUFBLENBQUEsRUFBQTs7QUFFQSxRQUFLLElBQUksSUFBVCxDQUFBLEVBQWdCLElBQUksTUFBcEIsTUFBQSxFQUFBLEdBQUEsRUFBc0M7QUFDckMsUUFBTSxPQUFPLE1BQUEsQ0FBQSxFQUFiLElBQUE7QUFDQSxRQUFNLE9BQU8sTUFBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsR0FBYixJQUFBO0FBQ0EsYUFBQSxNQUFBLENBQWdCLEVBQUEsNkNBQWhCLElBQWdCLEdBQWhCLCtDQUFnQixDQUFoQjtBQUNBO0FBVEMsR0FBQTtBQWxJSixFQUFBLEUsQ0FrSkc7OztBQUlIO0FBQ0EsUUFBQSxnQkFBQSxDQUFBLE1BQUEsRUFBZ0MsWUFBSTs7QUFJbkMsR0FBQSxHQUFBLFdBQUEsT0FBQTtBQUNBLEdBQUEsR0FBQSw0QkFBQSxPQUFBO0FBTEQsRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZNQSxLQUFNLE1BQU0sU0FBTixHQUFNLEdBQU07QUFDakIsSUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFJO0FBQ3pCLE9BQU0sTUFBTSxFQUFaLFFBQVksQ0FBWjtBQUNBLE9BQU0sYUFBYSxFQUFuQixhQUFtQixDQUFuQjtBQUNBLE9BQU0sT0FBTyxFQUFiLE1BQWEsQ0FBYjtBQUNBLFFBQUEsUUFBQSxDQUFBLFVBQUE7QUFDQSxjQUFXLFlBQUE7QUFBQSxXQUFJLElBQUEsUUFBQSxDQUFmLGVBQWUsQ0FBSjtBQUFYLElBQUEsRUFBQSxHQUFBO0FBQ0EsY0FBQSxRQUFBLENBQUEsb0JBQUE7QUFORCxHQUFBOztBQVVBLElBQUEsaUJBQUEsRUFBQSxLQUFBLENBQTJCLFVBQUEsQ0FBQSxFQUFLO0FBQy9CLEtBQUEsY0FBQTtBQUNBLE9BQU0sU0FBUyxFQUFFLEVBQWpCLE1BQWUsQ0FBZjtBQUNBLE9BQU0sT0FBTyxPQUFBLElBQUEsQ0FBYixNQUFhLENBQWI7QUFDQSxLQUFBLGFBQUEsRUFBQSxXQUFBLENBQUEsb0JBQUE7QUFDQSxVQUFBLE1BQUEsQ0FBQSxhQUFBLEVBQUEsUUFBQSxDQUFBLG9CQUFBO0FBQ0EsS0FBQSxxQkFBQSxFQUFBLFdBQUEsQ0FBQSw0QkFBQTtBQUNBLEtBQUUsd0JBQUYsSUFBQSxFQUFBLFFBQUEsQ0FBQSw0QkFBQTtBQVBELEdBQUE7QUFYRCxFQUFBOzttQkEwQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQSxLQUFNLFlBQVksU0FBWixTQUFZLEdBQUs7QUFDdEI7QUFDQSxNQUFNLFFBQVEsRUFBZCxVQUFjLENBQWQ7QUFDQSxNQUFNLE9BQU8sRUFIUyxRQUdULENBQWIsQ0FIc0IsQ0FHRztBQUN6QixNQUFNLE9BQU8sRUFBYixNQUFhLENBQWI7O0FBRUEsSUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixVQUFBLENBQUEsRUFBRztBQUN4QixLQUFBLGNBQUE7QUFDQSxPQUFNLFNBQVMsRUFBRSxFQUFGLE1BQUEsRUFBQSxPQUFBLENBQWYsR0FBZSxDQUFmO0FBQ0EsT0FBTSxPQUFPLE9BQUEsSUFBQSxDQUFiLE1BQWEsQ0FBYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUEsR0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBO0FBQ0E7QUFDQSxLQUFBLGFBQUEsRUFBQSxRQUFBLENBQUEsb0JBQUE7QUFDQSxRQUFBLFFBQUEsQ0FBQSxVQUFBOztBQUVBO0FBQ0EsT0FBRyxFQUFBLElBQUEsRUFBQSxNQUFBLEdBQUgsQ0FBQSxFQUFxQjtBQUNwQixNQUFBLElBQUEsRUFBQSxRQUFBLENBQUEsaUJBQUE7QUFERCxJQUFBLE1BRU87QUFDTixVQUFBLFFBQUEsQ0FBQSxpQkFBQTtBQUNBOztBQUVEO0FBbkJELEdBQUE7QUFxQkEsSUFBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLGtCQUFBLEVBQUEsMEJBQUEsRUFBK0QsVUFBQSxDQUFBLEVBQUs7QUFDbkUsV0FBQSxHQUFBLENBQUEsZUFBQTs7QUFFQSxPQUFNLFNBQVMsRUFBRSxFQUFqQixNQUFlLENBQWY7QUFDQSxPQUFHLE9BQUEsT0FBQSxDQUFBLGlCQUFBLEVBQUEsTUFBQSxJQUFBLENBQUEsSUFBK0MsT0FBQSxPQUFBLENBQUEsZ0JBQUEsRUFBQSxNQUFBLEdBQWxELENBQUEsRUFBNEY7QUFDM0YsTUFBQSxjQUFBO0FBQ0E7QUFDQSxNQUFBLGtCQUFBLEVBQUEsV0FBQSxDQUFBLGlCQUFBO0FBQ0EsZUFBVyxZQUFVO0FBQ3BCLFVBQUEsR0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBO0FBREQsS0FBQSxFQUFBLEdBQUE7QUFHQSxNQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsVUFBQTtBQUNBLE1BQUEscUJBQUEsRUFBQSxXQUFBLENBQUEsb0JBQUE7O0FBRUE7QUFFQTtBQWhCRixHQUFBO0FBM0JELEVBQUE7O21CQWdEQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBLEtBQU0sYUFBYSxTQUFBLFVBQUEsR0FBSztBQUN2QixNQUFNLGFBQWEsRUFBQSx5QkFBQSxFQUFBLEVBQUEsQ0FBbkIsQ0FBbUIsQ0FBbkI7QUFDQSxNQUFNLG1CQUFtQixFQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsRUFBekIsTUFBeUIsRUFBekI7QUFDQSxNQUFNLGtCQUFrQixXQUF4QixLQUF3QixFQUF4QjtBQUNBLE1BQU0sbUJBQW1CLEVBQUEsNkJBQUEsRUFBQSxFQUFBLENBQXpCLENBQXlCLENBQXpCO0FBQ0EsTUFBRyxjQUFILGdCQUFBLEVBQW1DO0FBQ2xDO0FBQ0Esb0JBQUEsS0FBQSxDQUF1QixVQUFBLENBQUEsRUFBSztBQUMzQixNQUFBLGNBQUE7QUFDQSxxQkFBQSxNQUFBLENBQXdCLGdCQUF4QixLQUF3QixFQUF4QjtBQUZELElBQUE7O0FBT0EsS0FBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLE9BQUEsRUFBQSx3QkFBQSxFQUFrRCxVQUFBLENBQUEsRUFBSztBQUN0RCxNQUFBLGNBQUE7QUFDQSxRQUFHLEVBQUEseUJBQUEsRUFBQSxNQUFBLEdBQUgsQ0FBQSxFQUF5QztBQUN4QyxTQUFNLFNBQVMsRUFBRSxFQUFqQixNQUFlLENBQWY7QUFDQSxZQUFBLE9BQUEsQ0FBQSx5QkFBQSxFQUFBLE1BQUE7QUFDQTtBQUxGLElBQUE7QUFZQTtBQTFCRixFQUFBOztBQTZCQTs7O0FBR0EsS0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBSztBQUMxQixNQUFNLGFBQWEsRUFBQSx5QkFBQSxFQUFBLEVBQUEsQ0FBbkIsQ0FBbUIsQ0FBbkI7QUFDQSxNQUFNLG1CQUFtQixFQUFBLHlCQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsRUFBekIsTUFBeUIsRUFBekI7QUFDQSxNQUFNLGtCQUFrQixXQUF4QixLQUF3QixFQUF4QjtBQUNBLE1BQU0sbUJBQU4sNkJBQUE7QUFDQSxNQUFHLGNBQUgsZ0JBQUEsRUFBbUM7QUFDbEM7QUFDQSxLQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLGdCQUFBLEVBQTBDLFVBQUEsQ0FBQSxFQUFLO0FBQzlDLE1BQUEsY0FBQTtBQUNBLHFCQUFBLE1BQUEsQ0FBd0IsZ0JBQXhCLEtBQXdCLEVBQXhCO0FBRkQsSUFBQTs7QUFPQSxLQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsT0FBQSxFQUFBLHdCQUFBLEVBQWtELFVBQUEsQ0FBQSxFQUFLO0FBQ3RELE1BQUEsY0FBQTtBQUNBLFFBQUcsRUFBQSx5QkFBQSxFQUFBLE1BQUEsR0FBSCxDQUFBLEVBQXlDO0FBQ3hDLFNBQU0sU0FBUyxFQUFFLEVBQWpCLE1BQWUsQ0FBZjtBQUNBLFNBQU0sYUFBYSxPQUFBLE9BQUEsQ0FBbkIseUJBQW1CLENBQW5CO0FBQ0EsZ0JBQUEsT0FBQSxDQUFtQjtBQUNsQixjQUFRO0FBRFUsTUFBbkIsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUdDLFlBQUE7QUFBQSxhQUFNLFdBSFAsTUFHTyxFQUFOO0FBSEQsTUFBQTtBQU1BO0FBWEYsSUFBQTtBQWtCQTtBQWhDRixFQUFBOzttQkFtQ0EsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBLEtBQU0sZUFBZSxTQUFmLFlBQWUsR0FBSztBQUN6QixJQUFBLGdCQUFBLEVBQUEsS0FBQSxDQUEwQixVQUFBLENBQUEsRUFBSztBQUM5QixLQUFBLGNBQUE7QUFDQSxPQUFNLFFBQVEsRUFBZCxNQUFjLENBQWQ7QUFDQSxPQUFNLGFBQWEsRUFBbkIsYUFBbUIsQ0FBbkI7QUFDQSxPQUFNLE9BQU8sRUFBYixNQUFhLENBQWI7O0FBRUEsS0FBQSxnQkFBQSxFQUFBLFdBQUEsQ0FBQSx1QkFBQTtBQUNBLEtBQUEsMkJBQUEsRUFBQSxNQUFBOztBQUVHLEtBQUEsaUJBQUEsRUFBQSxRQUFBLENBQUEsd0JBQUE7QUFDQSxRQUFBLFFBQUEsQ0FBQSxVQUFBO0FBQ0EsS0FBQSxZQUFBLEVBQUEsT0FBQSxDQUF3QjtBQUNqQixlQUFXO0FBRE0sSUFBeEIsRUFBQSxJQUFBOztBQUlILGNBQUEsUUFBQSxDQUFBLG9CQUFBO0FBQ0E7QUFoQkQsR0FBQTtBQURELEVBQUE7O21CQXFCQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLEtBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQUs7QUFDNUIsTUFBTSxRQUFRLEVBQUEsd0JBQUEsRUFBQSxFQUFBLENBQWQsQ0FBYyxDQUFkO0FBQ0EsTUFBTSxZQUFZLFNBQVMsTUFBQSxJQUFBLENBQTNCLFdBQTJCLENBQVQsQ0FBbEI7QUFDQSxNQUFNLFdBQVcsU0FBUyxNQUFBLEdBQUEsQ0FBMUIsVUFBMEIsQ0FBVCxDQUFqQjtBQUNBLE1BQU0sU0FBUyxFQUFmLHlCQUFlLENBQWY7QUFDQSxNQUFNLGlCQUFOLEVBQUE7QUFDQSxNQUFNLHVCQUFOLEVBQUE7QUFDQSxNQUFNLG9CQUFOLENBQUE7O0FBRUE7O0FBRUEsU0FBQSxNQUFBLENBQWMsZ0JBQUEsTUFBQSxDQUFkLFNBQWMsQ0FBZCxFQUFBLEtBQUEsQ0FDUSxZQUFZO0FBQ2xCLEtBQUEsd0JBQUEsRUFBQSxHQUFBLENBQWdDO0FBQzlCLFdBQVEsa0JBQWtCLFlBQWxCLENBQUEsSUFBbUMsd0JBQXdCLFlBQTVELENBQW9DLENBQW5DLEdBQTZFLG9CQUFvQjs7QUFEM0UsSUFBaEM7QUFJQSxLQUFBLGlCQUFBLEVBQUEsR0FBQSxDQUF5QjtBQUN4QixnQkFBWTtBQURZLElBQXpCO0FBR0EsU0FBQSxLQUFBO0FBVEYsR0FBQTs7QUFZQSxRQUFBLEtBQUEsQ0FBWSxZQUFJO0FBQ2YsT0FBRyxNQUFBLEdBQUEsR0FBQSxNQUFBLElBQUgsU0FBQSxFQUFrQztBQUNqQyxNQUFBLHFCQUFBLEVBQUEsT0FBQSxDQUFBLE9BQUE7QUFDQTtBQUhGLEdBQUE7QUF2QkQsRUFBQTs7bUJBZ0NBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0EsS0FBTSx1QkFBdUIsU0FBdkIsb0JBQXVCLEdBQU07QUFDbEM7QUFDQSxNQUFJLGdCQUFKLENBQUE7QUFDQSxJQUFBLE1BQUEsRUFBQSxNQUFBLENBQWlCLFlBQUk7O0FBRXBCLE9BQU0sWUFBWSxFQUFBLE1BQUEsRUFBbEIsU0FBa0IsRUFBbEI7QUFDQSxPQUFNLGFBQWEsRUFBbkIsaUJBQW1CLENBQW5CO0FBQ0EsT0FBTSxVQUFVLEVBQWhCLGNBQWdCLENBQWhCO0FBQ0EsT0FBTSxTQUFTLEVBQWYsYUFBZSxDQUFmO0FBQ0EsT0FBTSxvQkFBb0IsRUFBMUIsZ0JBQTBCLENBQTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFHLFlBQUgsR0FBQSxFQUFrQjtBQUNqQixzQkFBQSxRQUFBLENBQUEsdUJBQUE7QUFERCxJQUFBLE1BRU87QUFDTixzQkFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQTs7QUFHRCxtQkFBQSxTQUFBO0FBL0JELEdBQUE7QUFIRCxFQUFBOzttQkFzQ0Esb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgTGF5ZXJlZFNsaWRlciA9ICgpPT4ge1xuXG5cdGNvbnN0IGxheWVyZWRTbGlkZXIgPSAkKCcubGF5ZXJlZC1zbGlkZXInKVxuXHRjb25zdCBkb3RDbG9uZSA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0Y29uc3QgaW5kaWNhdG9ycyA9ICQoJy5sYXllcmVkLXNsaWRlcl9faW5kaWNhdG9ycycpXG5cdGNvbnN0IGl0ZW0gPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2l0ZW0nKVxuXHRjb25zdCBhcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3cnKVxuXHRjb25zdCBuZXh0QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1uZXh0Jylcblx0Y29uc3QgcHJldkFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tcHJldicpXG5cdGNvbnN0IGNvdW50ID0gaXRlbS5sZW5ndGhcblx0bGV0IGkgPSAxXG5cdHdoaWxlKGkgPCBjb3VudCl7XG5cdFx0aW5kaWNhdG9ycy5hcHBlbmQoZG90Q2xvbmUuY2xvbmUoKSlcblx0XHRpKytcblx0fVxuXG5cblxuXHRjb25zdCBkb3QgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdCcpXG5cdGRvdC5jbGljayhmdW5jdGlvbigpe1xuXHQgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpXG5cdCAgXG5cdCAgaXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgaXRlbS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIFxuXHQgIGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBkb3QuZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIFxuXHQgIHNsaWRlckNoYW5nZWQoaW5kZXgpXG5cdH0pXG5cblx0Y29uc3QgbmV4dEFycm93Q2xpY2tlZCA9ICgpID0+IHtcblx0XHRjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdFx0Y29uc3QgbmV4dEluZGV4ID0gaW5kZXg8Y291bnQtMSA/IGluZGV4KzEgOiAwXG5cblx0XHRpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0XHRpdGVtLmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXG5cdFx0ZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdGRvdC5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHRcdHNsaWRlckNoYW5nZWQobmV4dEluZGV4KVxuXHR9XG5cdG5leHRBcnJvdy5jbGljayhmdW5jdGlvbigpe1xuXHQgIG5leHRBcnJvd0NsaWNrZWQoKVxuXHR9KVxuXG5cdHByZXZBcnJvdy5jbGljayhmdW5jdGlvbigpe1xuXHQgIGNvbnN0IGluZGV4ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpLmluZGV4KClcblx0ICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIDFcblx0ICBcblx0ICBpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBpdGVtLmVxKHByZXZJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIFxuXHQgIGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBkb3QuZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBzbGlkZXJDaGFuZ2VkKHByZXZJbmRleClcblx0fSlcblxuXHRjb25zdCBzbGlkZXJDaGFuZ2VkID0gKG5ld0luZGV4KSA9PiB7XG5cdCAgYXJyb3cucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICBpZihuZXdJbmRleCsxPT1jb3VudCkgeyAvLyBsYXN0XG5cdCAgICAvLyBuZXh0QXJyb3cuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19hcnJvdy0taGlkZGVuJylcblx0ICB9IGVsc2UgaWYobmV3SW5kZXg9PTApIHtcblx0ICAgIC8vIHByZXZBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gXG5cdH1cblxuXHQvLyBpbnRlcnZhbFxuXG5cdFxuXHRsZXQgaW50ZXJ2YWwgPSBudWxsXG5cblx0Y29uc3Qgc3RhcnRJbnRlcnZhbCA9ICgpID0+IHtcblx0XHRpbnRlcnZhbCA9IHNldEludGVydmFsKG5leHRBcnJvd0NsaWNrZWQsIDMwMDApXG5cdH1cblx0c3RhcnRJbnRlcnZhbCgpXG5cblx0bGF5ZXJlZFNsaWRlci5ob3ZlcigoKT0+IHtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHR9LCAoKSA9PiBzdGFydEludGVydmFsKCkgKVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJlZFNsaWRlclxuIiwiY29uc3QgYSA9ICgpPT4ge1xuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYSIsImNvbnN0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24gPSAoKT0+IHtcblx0JCgnLmItbmF2X190YWItY29udGVudCN0YWItMiAuYi1uYXZfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgbmV3SXRlbSA9ICQodGhpcykuY2xvbmUoKVxuXHRcdG5ld0l0ZW0ucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnZHJvcGRvd24taXRlbScpXG5cdFx0JCgnW2FyaWEtbGFiZWxsZWRieT1cInByb2ZpbGVNZW51c1wiXScpLmFwcGVuZChuZXdJdGVtKVxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duIiwiY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcblxuXHRcblx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb3NlTmF2IiwiaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAoZSk9Pntcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXG5cdFx0XG5cblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5oYW1idXJnZXInKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5iLW5hdicpLmxlbmd0aCl7XG5cdFx0XHRjbG9zZU5hdigpXG5cblx0XHR9XG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zaG9wcGluZy1jYXJkJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykubGVuZ3RoKXtcblx0XHRcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykuaGlkZSgpXG5cdFx0fVxuXHRcdFxuXHR9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50TGlzdGVuZXJcbiIsImNvbnN0IGxhenlsb2FkID0gKCk9PiB7XG5cdHRyeSB7XG5cdFx0JCgnW2ItbGF6eWxvYWRdJykuZWFjaChmdW5jdGlvbihlKXtcblx0XHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdFx0Y29uc3QgbmV3U3JjID0gX3RoaXMuZGF0YSgnc3JjJylcblx0XHRcdF90aGlzLnByb3AoJ3NyYycsIG5ld1NyYylcblxuXHRcdH0pXG5cdH0gY2F0Y2goZSl7XG5cdFx0Y29uc29sZS5lcnJvcignYi1kZWJ1ZycsIGUpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF6eWxvYWQiLCIndXNlIHN0cmljdCdcbi8vLy8vLyBQT1BVUFxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0IG1hc2sgZnJvbSAnanF1ZXJ5LW1hc2stcGx1Z2luJ1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXG5cbi8vIGltcG9ydCAkIGZyb20gJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS0zLjMuMS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9wb3BwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9kYXRlcGlja2VyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LmZvcm0ubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9mb3JtLnZhcmlhYmxlcydcblxuXG4vLyBpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwJ1xuXG5pbXBvcnQgYSBmcm9tICcuL2EnXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IHdpbmRvd1Njcm9sbExpc3RlbmVyIGZyb20gJy4vd2luZG93U2Nyb2xsTGlzdGVuZXInXG5pbXBvcnQgZG9jdW1lbnRMaXN0ZW5lciBmcm9tICcuL2RvY3VtZW50TGlzdGVuZXInXG4vLyBpbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuaW1wb3J0IHNob3BwaW5nQ2FyZCBmcm9tICcuL3Nob3BwaW5nQ2FyZCdcbmltcG9ydCBvcGVuUG9wdXAgZnJvbSAnLi9vcGVuUG9wdXAnXG5pbXBvcnQgcmVwZWF0SXRlbSBmcm9tICcuL3JlcGVhdEl0ZW0nXG5pbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcbmltcG9ydCBsYXp5bG9hZCBmcm9tICcuL2xhenlsb2FkJ1xuaW1wb3J0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24gZnJvbSAnLi9hZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duJ1xuaW1wb3J0IHNtc1ZlcmlmaWNhdGlvbiBmcm9tICcuL3Ntc1ZlcmlmaWNhdGlvbidcbmltcG9ydCBMYXllcmVkU2xpZGVyIGZyb20gJy4vTGF5ZXJlZFNsaWRlcidcblxuXG5cbi8vIGltcG9ydCAnYm9vdHN0cmFwJ1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcbi8vIHJlcXVpcmUoXCJAY2hlbmZlbmd5dWFuL2RhdGVwaWNrZXJcIilcblxuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgfVxufVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC12aXNpYmxlLWZpcnN0Jykuc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSdcblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0Ly8gc2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cdHNtc1ZlcmlmaWNhdGlvbigpXG5cdExheWVyZWRTbGlkZXIoKVxuXG5cblx0Ly8gc29sdmUgaGFzaCBidWcgaW4gY2hyb21lXG5cdHZhciBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIGlzQ2hyb21lKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cblx0JCgnLnByZXNzQ2xvc2UnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRwcmVzc0Nsb3NlLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpfSwgNTAwKVxuXG5cdFx0Y2xvc2VOYXYoKVxuXHR9KVxuXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImRhdGVwaWNrZXJcIl0nKS5kYXRlcGlja2VyKHsgZm9ybWF0OiBcImRkL21tL3l5eXlcIiB9KVxuXG5cdCQoJy5qcXVlcnlNYXNrJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHQgPSAkKHRoaXMpXG5cdFx0dC5tYXNrKHQuYXR0cignZGF0YS1tYXNrJyksIHtcblx0XHRcdHRyYW5zbGF0aW9uOiB7QToge3BhdHRlcm46IC9BLywgb3B0aW9uYWw6IGZhbHNlfSwgWjoge3BhdHRlcm46IC9bQVpdLywgb3B0aW9uYWw6IGZhbHNlfSwgRToge3BhdHRlcm46IC9FLywgb3B0aW9uYWw6IHRydWV9fVxuXHRcdH0pXG5cdH0pXG5cblx0JCgnI0RlY2xhcmF0aW9uc19saW5rX2lkJykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI0RlY2xhcmF0aW9uc19uYW1lJykudHJpZ2dlcignZm9jdXMnKVxuXHR9KVxuXG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snOSddID0gJyc7XG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snZCddID0gJ1swLTldJztcblx0Ly8gJCgnLmpxdWVyeU1hc2snKS5tYXNrKCcyMjMxJyk7XG5cblx0XG5cdC8vIENsaXBib2FyZFxuXHQvLyBuZXcgQ2xpcGJvYXJkKCcuYnRuLWNsaXBib2FyZCcpO1xuXHR2YXIgdGltZW91dDtcblx0Ly8gY29uc3QgdGltZW91dFxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHZhciBhdXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgYXV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV4KTtcbiAgICAgICAgICBhdXguc2VsZWN0KCk7XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcbiAgICB9XG5cbiAgIFxuXG5cdFxuXHRjb25zdCB0b29sdGlwID0gJCgnLnRvb2x0aXB0ZXh0Jylcblx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXG5cdCQoJy5idG4tY2xpcGJvYXJkJykuYmluZCgnY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdFxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0Ly8gY29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHR9KVxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLm1vdXNlb3V0KGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmxlbmd0aD4yKXtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICcvI29yZGVycy1ob2xkZXInXG5cblx0XHR9IGVsc2Uge1xuXG5cdCAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjb3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgfVxuICAgIH0pO1xuXG4gICAgLy9zY3JvbGwgdG8gdG9wXG4gIC8vICAgJChcIi5zY3JvbGwtdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAvLyAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gIC8vICAgICAgIH0sIDEwMDApO1xuICAvLyAgIH0pO1xuXG5cbiAgIFx0JCgnLmItaW52b2ljZV9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0XHRjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcblx0XHRjb25zdCBmaWxlSW5mbyA9ICQoJy5iLWludm9pY2VfX2ZpbGVpbmZvJylcblx0XHRmaWxlSW5mby50ZXh0KCcnKSBcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0Y29uc3QgbmFtZSA9IGZpbGVzW2ldLm5hbWVcblx0XHRcdGNvbnN0IHNpemUgPSBmaWxlc1tpXS5zaXplLzEwMjQvMTAyNFxuXHRcdFx0ZmlsZUluZm8uYXBwZW5kKCQoYDxhIGNsYXNzPVwiYi1pbnZvaWNlX19maWxlbmFtZSBwLTEgbXItMVwiPiR7bmFtZX08c3BhbiBjbGFzcz1cIm1sLTJcIiBocmVmPVwiXCI+JnRpbWVzOzwvc3Bhbj48L2E+YCkpXG5cdFx0fVxuXHQgIFxuXHR9KVxuXG5cblxuICAgIFxufSkgLy8gcmVhZHlcblxuXG5cbi8vIHdpbmRvdyBsb2FkZWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9Pntcblx0XG5cdFxuXG5cdGxhenlsb2FkKClcblx0YWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93bigpXG59KSAgXG5cblxuIiwiXG5jb25zdCBuYXYgPSAoKSA9PiB7XG5cdCQoJy5oYW1idXJnZXInKS5jbGljaygoKT0+e1xuXHRcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHRcdHNldFRpbWVvdXQoKCk9Pm5hdi5hZGRDbGFzcygnYi1uYXYtLWFjdGl2ZScpLCAxMDApXG5cdFx0cHJlc3NDbG9zZS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblxuXHR9KVxuXG5cdCQoJy5uYXYtdGFiLWJ1dHRvbicpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQkKCcuYi1uYXZfX3RhYicpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdHRhcmdldC5wYXJlbnQoJy5iLW5hdl9fdGFiJykuYWRkQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcgKyBocmVmKS5hZGRDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2XG4iLCJjb25zdCBvcGVuUG9wdXAgPSAoKT0+IHtcblx0Ly8gY29uc3QgYmx1cnJ5QmcgPSAkKCcuYmx1cnJ5LWJhY2tncm91bmQnKVxuXHRjb25zdCBwb3B1cCA9ICQoJy5iLXBvcHVwJylcblx0Y29uc3QgYk5hdiA9ICQoJy5iLW5hdicpIC8vIHJlc3BvbnNpdmUgaXNzdWVzXG5cdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblxuXHQkKCcub3BlblBvcHVwJykuY2xpY2soZT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0Ly8gY29uc3Qgb2Zmc2V0ID0gJChlLnRhcmdldCkub2Zmc2V0KClcblx0XHQvLyBjb25zdCB0b3AgPSBvZmZzZXQudG9wXG5cdFx0Ly8gY29uc3QgbGVmdCA9IG9mZnNldC5sZWZ0XG5cdFx0Yk5hdi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0Ly8gYmx1cnJ5QmcuYWRkQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdCQoJy5wcmVzc0Nsb3NlJykuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHRjb25zb2xlLmxvZygncG9wdXAgY2xpY2tlZCcpXG5cdFx0XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRpZih0YXJnZXQuY2xvc2VzdCgnLmItcG9wdXBfX2lubmVyJykubGVuZ3RoPD0wIHx8IHRhcmdldC5jbG9zZXN0KCcuY2xvc2UtYi1wb3B1cCcpLmxlbmd0aD4wKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0Ly8gYmx1cnJ5QmcucmVtb3ZlQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmItcG9wdXAtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRiTmF2LmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdH0sIDMwMClcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5yZW1vdmVDbGFzcygneS1oaWRkZW4nKVxuXHRcdFx0JCgnLnByZXNzQ2xvc2UtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXG5cdFx0XHQvLyAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJylcblxuXHRcdH1cblx0fSlcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5Qb3B1cFxuXG4iLCJjb25zdCByZXBlYXRJdGVtID0gKCk9PiB7XG5cdGNvbnN0IHJlcGVhdEl0ZW0gPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMClcblx0Y29uc3QgcmVwZWF0SXRlbVBhcmVudCA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKS5wYXJlbnQoKVxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcblx0Y29uc3QgcmVwZWF0SXRlbUJ1dHRvbiA9ICQoJ1tkYXRhLXJlcGVhdC10YXJnZXQ9XCJpdGVtXCJdJykuZXEoMClcblx0aWYocmVwZWF0SXRlbSAmJiByZXBlYXRJdGVtQnV0dG9uKSB7XG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXG5cdFx0cmVwZWF0SXRlbUJ1dHRvbi5jbGljaygoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0cmVwZWF0SXRlbVBhcmVudC5hcHBlbmQocmVwZWF0SXRlbUNsb25lLmNsb25lKCkpXG5cblx0XHR9KVxuXG5cblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScsIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRpZigkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykubGVuZ3RoPjEpe1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdFx0XHR0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLnJlbW92ZSgpXG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgcmVwZWF0SXRlbVxuXG5cbmNvbnN0IHJlcGVhdE5ld0l0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJ1tkYXRhLXJlcGVhdC10YXJnZXQ9XCJpdGVtXCJdJ1xuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCByZXBlYXRJdGVtQnV0dG9uLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0cmVwZWF0SXRlbVBhcmVudC5hcHBlbmQocmVwZWF0SXRlbUNsb25lLmNsb25lKCkpXG5cblx0XHR9KVxuXG5cblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScsIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRpZigkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykubGVuZ3RoPjEpe1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdFx0XHRjb25zdCBwYXJlbnRJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKVxuXHRcdFx0XHRwYXJlbnRJdGVtLmFuaW1hdGUoe1xuXHRcdFx0XHRcdGhlaWdodDogJzAnXG5cdFx0XHRcdH0sICdmYXN0JywgJ3N3aW5nJywgXG5cdFx0XHRcdFx0KCkgPT4gcGFyZW50SXRlbS5yZW1vdmUoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0fSlcblxuXG5cblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGVhdE5ld0l0ZW1cblxuIiwiXG5jb25zdCBzaG9wcGluZ0NhcmQgPSAoKT0+IHtcblx0JCgnLnNob3BwaW5nLWNhcmQnKS5jbGljaygoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblxuXHRcdCQoJy5zaG9wcGluZy1jYXJkJykudG9nZ2xlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXG5cdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLnRvZ2dsZSgpXG5cdFx0XG5cdCAgICAkKCcuYi1uYXZfX3dyYXBwZXInKS5hZGRDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdCAgICBodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMTAwMCk7XG5cdFx0XG5cdFx0cHJlc3NDbG9zZS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHQvLyBjb25zb2xlLmxvZygkKHRoaXMpKVxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG9wcGluZ0NhcmQiLCJjb25zdCBzbXNWZXJpZmljYXRpb24gPSAoKT0+IHtcblx0Y29uc3QgaW5wdXQgPSAkKCcuYi12ZXJpZmljYXRpb25fX2lucHV0JykuZXEoMClcblx0Y29uc3QgbWF4TGVuZ3RoID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4bGVuZ3RoJykpXG5cdGNvbnN0IGZvbnRTaXplID0gcGFyc2VJbnQoaW5wdXQuY3NzKCdmb250U2l6ZScpKVxuXHRjb25zdCBkYXNoZXMgPSAkKCcuYi12ZXJpZmljYXRpb25fX2Rhc2hlcycpXG5cdGNvbnN0IHVuZGVybGluZVdpZHRoID0gMzBcblx0Y29uc3QgdW5kZXJsaW5lTWFyZ2luUmlnaHQgPSAyMlxuXHRjb25zdCBob3Jpem9udGFsUGFkZGluZyA9IDNcblxuXHQvLyBjb25zb2xlLmxvZyggbWF4TGVuZ3RoLCBmb250U2l6ZSlcblx0XG5cdGRhc2hlcy5hcHBlbmQoJzxzcGFuPjwvc3Bhbj4nLnJlcGVhdChtYXhMZW5ndGgpKVxuXHRcdC5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKCcuYi12ZXJpZmljYXRpb25fX2lucHV0JykuY3NzKHtcblx0XHRcdCAgd2lkdGg6ICh1bmRlcmxpbmVXaWR0aCAqIChtYXhMZW5ndGggKyAxKSArIHVuZGVybGluZU1hcmdpblJpZ2h0ICogKG1heExlbmd0aCAtIDEpKSArIGhvcml6b250YWxQYWRkaW5nICogMixcblxuXHRcdFx0fSlcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbicpLmNzcyh7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuXHRcdFx0fSlcblx0XHRcdGlucHV0LmZvY3VzKClcblx0XHR9KVxuXHRcblx0aW5wdXQua2V5dXAoKCk9Pntcblx0XHRpZihpbnB1dC52YWwoKS5sZW5ndGg+PW1heExlbmd0aCkge1xuXHRcdFx0JCgnLnZlcmlmaWNhdGlvbkJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcblx0XHR9XG5cdH0pXG5cdFxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgc21zVmVyaWZpY2F0aW9uIiwiY29uc3Qgd2luZG93U2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XG5cdC8vIHNjcm9sbCBsaXN0ZW5lclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDBcblx0JCh3aW5kb3cpLnNjcm9sbCgoKT0+e1xuXHRcdFxuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKVxuXHRcdGNvbnN0IG5hdldyYXBwZXIgPSAkKCcuYi1uYXZfX3dyYXBwZXInKVxuXHRcdGNvbnN0IG5hdk1haW4gPSAkKCcuYi1uYXZfX21haW4nKVxuXHRcdGNvbnN0IHRvcE5hdiA9ICQoJy5iLW5hdl9fdG9wJylcblx0XHRjb25zdCBzY3JvbGxUb1RvcEJ1dHRvbiA9ICQoJy5zY3JvbGwtdG8tdG9wJylcblxuXHRcdC8vIGlmKHNjcm9sbFRvcD43MCkge1xuXHRcdC8vIFx0dG9wTmF2LmFkZENsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5yZW1vdmVDbGFzcygncHktMycpXG5cdFx0Ly8gXHRpZihzY3JvbGxUb3A+bGFzdFNjcm9sbFRvcCl7XG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHRcdFx0XHRcblxuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5hZGRDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHRvcE5hdi5yZW1vdmVDbGFzcygnYi1uYXZfX3RvcC0taGlkZGVuJylcblx0XHQvLyBcdG5hdk1haW4uYWRkQ2xhc3MoJ3B5LTMnKVxuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0aWYoc2Nyb2xsVG9wPjEwMCkge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24uYWRkQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLnJlbW92ZUNsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxuXHRcdH1cblx0XHRcblxuXHRcdGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3Bcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93U2Nyb2xsTGlzdGVuZXJcbiJdfQ==
