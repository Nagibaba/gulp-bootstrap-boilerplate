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
		var dot = $('.layered-slider__dot');
		var item = $('.layered-slider__item');
		var arrow = $('.layered-slider__arrow');
		var nextArrow = $('.layered-slider__arrow--next');
		var prevArrow = $('.layered-slider__arrow--prev');
		var count = dot.length;

		dot.click(function () {
			var index = $(this).index();

			item.removeClass('layered-slider__item--active');
			item.eq(index).addClass('layered-slider__item--active');

			dot.removeClass('layered-slider__dot--active');
			dot.eq(index).addClass('layered-slider__dot--active');

			sliderChanged(index);
		});

		nextArrow.click(function () {
			var index = $('.layered-slider__dot--active').index();
			var nextIndex = index + 1;

			item.removeClass('layered-slider__item--active');
			item.eq(nextIndex).addClass('layered-slider__item--active');

			dot.removeClass('layered-slider__dot--active');
			dot.eq(nextIndex).addClass('layered-slider__dot--active');
			sliderChanged(nextIndex);
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
			if (newIndex + 1 == count) {
				// last
				nextArrow.addClass('layered-slider__arrow--hidden');
			} else if (newIndex == 0) {
				prevArrow.addClass('layered-slider__arrow--hidden');
			}
		};
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
		define(['./a', './nav', './windowScrollListener', './documentListener', './slider', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './addMenusToProfileDropdown', './smsVerification', './LayeredSlider'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./slider'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./addMenusToProfileDropdown'), require('./smsVerification'), require('./LayeredSlider'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.slider, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.addMenusToProfileDropdown, global.smsVerification, global.LayeredSlider);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _slider, _shoppingCard, _openPopup, _repeatItem, _closeNav, _lazyload, _addMenusToProfileDropdown, _smsVerification, _LayeredSlider) {
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

	var _slider2 = _interopRequireDefault(_slider);

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
			$('html, body').animate({
				scrollTop: $(".orders-holder").offset().top - 10
			}, 1000);
		});

		//scroll to top
		$(".scroll-to-top").click(function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});

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

},{"./LayeredSlider":1,"./a":2,"./addMenusToProfileDropdown":3,"./closeNav":4,"./documentListener":5,"./lazyload":6,"./nav":8,"./openPopup":9,"./repeatItem":10,"./shoppingCard":11,"./slider":12,"./smsVerification":13,"./windowScrollListener":14}],8:[function(require,module,exports){
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
    global.slider = mod.exports;
  }
})(undefined, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var mySwiper = function mySwiper(Swiper) {
    return new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: false,
      speed: 400,
      spaceBetween: 100,
      slideShadows: true,
      calculateHeight: true,
      shadow: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  };

  exports.default = mySwiper;
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

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9MYXllcmVkU2xpZGVyLmpzIiwic3JjL2pzL21haW4vYS5qcyIsInNyYy9qcy9tYWluL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24uanMiLCJzcmMvanMvbWFpbi9jbG9zZU5hdi5qcyIsInNyYy9qcy9tYWluL2RvY3VtZW50TGlzdGVuZXIuanMiLCJzcmMvanMvbWFpbi9sYXp5bG9hZC5qcyIsInNyYy9qcy9tYWluL21haW4uanMiLCJzcmMvanMvbWFpbi9uYXYuanMiLCJzcmMvanMvbWFpbi9vcGVuUG9wdXAuanMiLCJzcmMvanMvbWFpbi9yZXBlYXRJdGVtLmpzIiwic3JjL2pzL21haW4vc2hvcHBpbmdDYXJkLmpzIiwic3JjL2pzL21haW4vc2xpZGVyLmpzIiwic3JjL2pzL21haW4vc21zVmVyaWZpY2F0aW9uLmpzIiwic3JjL2pzL21haW4vd2luZG93U2Nyb2xsTGlzdGVuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQUs7QUFDMUIsTUFBTSxNQUFNLEVBQVosc0JBQVksQ0FBWjtBQUNBLE1BQU0sT0FBTyxFQUFiLHVCQUFhLENBQWI7QUFDQSxNQUFNLFFBQVEsRUFBZCx3QkFBYyxDQUFkO0FBQ0EsTUFBTSxZQUFZLEVBQWxCLDhCQUFrQixDQUFsQjtBQUNBLE1BQU0sWUFBWSxFQUFsQiw4QkFBa0IsQ0FBbEI7QUFDQSxNQUFNLFFBQVEsSUFBZCxNQUFBOztBQUVBLE1BQUEsS0FBQSxDQUFVLFlBQVU7QUFDbEIsT0FBTSxRQUFRLEVBQUEsSUFBQSxFQUFkLEtBQWMsRUFBZDs7QUFFQSxRQUFBLFdBQUEsQ0FBQSw4QkFBQTtBQUNBLFFBQUEsRUFBQSxDQUFBLEtBQUEsRUFBQSxRQUFBLENBQUEsOEJBQUE7O0FBRUEsT0FBQSxXQUFBLENBQUEsNkJB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QVlBLFFBQUEsS0FBQSxDQUFZLFlBQUk7QUFDZixPQUFHLE1BQUEsR0FBQSxHQUFBLE1BQUEsSUFBSCxTQUFBLEVBQWtDO0FBQ2pDLE1BQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsT0FBQTtBQUNBO0FBSEYsR0FBQTtBQXZCRCxFQUFBOzttQkFnQ0EsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQSxLQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsR0FBTTtBQUNsQztBQUNBLE1BQUksZ0JBQUosQ0FBQTtBQUNBLElBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBaUIsWUFBSTs7QUFFcEIsT0FBTSxZQUFZLEVBQUEsTUFBQSxFQUFsQixTQUFrQixFQUFsQjtBQUNBLE9BQU0sYUFBYSxFQUFuQixpQkFBbUIsQ0FBbkI7QUFDQSxPQUFNLFVBQVUsRUFBaEIsY0FBZ0IsQ0FBaEI7QUFDQSxPQUFNLFNBQVMsRUFBZixhQUFlLENBQWY7QUFDQSxPQUFNLG9CQUFvQixFQUExQixnQkFBMEIsQ0FBMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQUcsWUFBSCxHQUFBLEVBQWtCO0FBQ2pCLHNCQUFBLFFBQUEsQ0FBQSx1QkFBQTtBQURELElBQUEsTUFFTztBQUNOLHNCQUFBLFdBQUEsQ0FBQSx1QkFBQTtBQUNBOztBQUdELG1CQUFBLFNBQUE7QUEvQkQsR0FBQTtBQUhELEVBQUE7O21CQXNDQSxvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBMYXllcmVkU2xpZGVyID0gKCk9PiB7XG5cdGNvbnN0IGRvdCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90Jylcblx0Y29uc3QgaXRlbSA9ICQoJy5sYXllcmVkLXNsaWRlcl9faXRlbScpXG5cdGNvbnN0IGFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdycpXG5cdGNvbnN0IG5leHRBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLW5leHQnKVxuXHRjb25zdCBwcmV2QXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1wcmV2Jylcblx0Y29uc3QgY291bnQgPSBkb3QubGVuZ3RoXG5cblx0ZG90LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmluZGV4KClcblx0ICBcblx0ICBpdGVtLnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBpdGVtLmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgXG5cdCAgZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIGRvdC5lcShpbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgXG5cdCAgc2xpZGVyQ2hhbmdlZChpbmRleClcblx0fSlcblxuXHRuZXh0QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBjb25zdCBpbmRleCA9ICQoJy5sYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKS5pbmRleCgpXG5cdCAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyAxXG5cdCAgXG5cdCAgaXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgaXRlbS5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBcblx0ICBkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgZG90LmVxKG5leHRJbmRleCkuYWRkQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgc2xpZGVyQ2hhbmdlZChuZXh0SW5kZXgpXG5cdH0pXG5cblx0cHJldkFycm93LmNsaWNrKGZ1bmN0aW9uKCl7XG5cdCAgY29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHQgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gMVxuXHQgIFxuXHQgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIGl0ZW0uZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdCAgXG5cdCAgZG90LnJlbW92ZUNsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIGRvdC5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fZG90LS1hY3RpdmUnKVxuXHQgIHNsaWRlckNoYW5nZWQocHJldkluZGV4KVxuXHR9KVxuXG5cdGNvbnN0IHNsaWRlckNoYW5nZWQgPSAobmV3SW5kZXgpID0+IHtcblx0ICBhcnJvdy5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIGlmKG5ld0luZGV4KzE9PWNvdW50KSB7IC8vIGxhc3Rcblx0ICAgIG5leHRBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gZWxzZSBpZihuZXdJbmRleD09MCkge1xuXHQgICAgcHJldkFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBcblx0fVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllcmVkU2xpZGVyIiwiY29uc3QgYSA9ICgpPT4ge1xuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYSIsImNvbnN0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24gPSAoKT0+IHtcblx0JCgnLmItbmF2X190YWItY29udGVudCN0YWItMiAuYi1uYXZfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgbmV3SXRlbSA9ICQodGhpcykuY2xvbmUoKVxuXHRcdG5ld0l0ZW0ucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnZHJvcGRvd24taXRlbScpXG5cdFx0JCgnW2FyaWEtbGFiZWxsZWRieT1cInByb2ZpbGVNZW51c1wiXScpLmFwcGVuZChuZXdJdGVtKVxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duIiwiY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcblxuXHRcblx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb3NlTmF2IiwiaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAoZSk9Pntcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXG5cdFx0XG5cblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5oYW1idXJnZXInKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5iLW5hdicpLmxlbmd0aCl7XG5cdFx0XHRjbG9zZU5hdigpXG5cblx0XHR9XG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zaG9wcGluZy1jYXJkJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykubGVuZ3RoKXtcblx0XHRcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykuaGlkZSgpXG5cdFx0fVxuXHRcdFxuXHR9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50TGlzdGVuZXJcbiIsImNvbnN0IGxhenlsb2FkID0gKCk9PiB7XG5cdHRyeSB7XG5cdFx0JCgnW2ItbGF6eWxvYWRdJykuZWFjaChmdW5jdGlvbihlKXtcblx0XHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdFx0Y29uc3QgbmV3U3JjID0gX3RoaXMuZGF0YSgnc3JjJylcblx0XHRcdF90aGlzLnByb3AoJ3NyYycsIG5ld1NyYylcblxuXHRcdH0pXG5cdH0gY2F0Y2goZSl7XG5cdFx0Y29uc29sZS5lcnJvcignYi1kZWJ1ZycsIGUpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF6eWxvYWQiLCIndXNlIHN0cmljdCdcbi8vLy8vLyBQT1BVUFxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0IG1hc2sgZnJvbSAnanF1ZXJ5LW1hc2stcGx1Z2luJ1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXG5cbi8vIGltcG9ydCAkIGZyb20gJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS0zLjMuMS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9wb3BwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9kYXRlcGlja2VyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LmZvcm0ubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9mb3JtLnZhcmlhYmxlcydcblxuXG4vLyBpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwJ1xuXG5pbXBvcnQgYSBmcm9tICcuL2EnXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IHdpbmRvd1Njcm9sbExpc3RlbmVyIGZyb20gJy4vd2luZG93U2Nyb2xsTGlzdGVuZXInXG5pbXBvcnQgZG9jdW1lbnRMaXN0ZW5lciBmcm9tICcuL2RvY3VtZW50TGlzdGVuZXInXG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuaW1wb3J0IHNob3BwaW5nQ2FyZCBmcm9tICcuL3Nob3BwaW5nQ2FyZCdcbmltcG9ydCBvcGVuUG9wdXAgZnJvbSAnLi9vcGVuUG9wdXAnXG5pbXBvcnQgcmVwZWF0SXRlbSBmcm9tICcuL3JlcGVhdEl0ZW0nXG5pbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcbmltcG9ydCBsYXp5bG9hZCBmcm9tICcuL2xhenlsb2FkJ1xuaW1wb3J0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24gZnJvbSAnLi9hZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duJ1xuaW1wb3J0IHNtc1ZlcmlmaWNhdGlvbiBmcm9tICcuL3Ntc1ZlcmlmaWNhdGlvbidcbmltcG9ydCBMYXllcmVkU2xpZGVyIGZyb20gJy4vTGF5ZXJlZFNsaWRlcidcblxuXG5cbi8vIGltcG9ydCAnYm9vdHN0cmFwJ1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcbi8vIHJlcXVpcmUoXCJAY2hlbmZlbmd5dWFuL2RhdGVwaWNrZXJcIilcblxuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgfVxufVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC12aXNpYmxlLWZpcnN0Jykuc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSdcblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0Ly8gc2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cdHNtc1ZlcmlmaWNhdGlvbigpXG5cdExheWVyZWRTbGlkZXIoKVxuXG5cdCQoJy5wcmVzc0Nsb3NlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0cHJlc3NDbG9zZS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aHRtbC5yZW1vdmVDbGFzcygneS1oaWRkZW4nKX0sIDUwMClcblxuXHRcdGNsb3NlTmF2KClcblx0fSlcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJkYXRlcGlja2VyXCJdJykuZGF0ZXBpY2tlcih7IGZvcm1hdDogXCJkZC9tbS95eXl5XCIgfSlcblxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCB0ID0gJCh0aGlzKVxuXHRcdHQubWFzayh0LmF0dHIoJ2RhdGEtbWFzaycpLCB7XG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cblx0XHR9KVxuXHR9KVxuXG5cdCQoJyNEZWNsYXJhdGlvbnNfbGlua19pZCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdCQoJyNEZWNsYXJhdGlvbnNfbmFtZScpLnRyaWdnZXIoJ2ZvY3VzJylcblx0fSlcblxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJzknXSA9ICcnO1xuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XG5cdC8vICQoJy5qcXVlcnlNYXNrJykubWFzaygnMjIzMScpO1xuXG5cdFxuXHQvLyBDbGlwYm9hcmRcblx0Ly8gbmV3IENsaXBib2FyZCgnLmJ0bi1jbGlwYm9hcmQnKTtcblx0dmFyIHRpbWVvdXQ7XG5cdC8vIGNvbnN0IHRpbWVvdXRcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XG4gICAgfVxuXG4gICBcblxuXHRcblx0Y29uc3QgdG9vbHRpcCA9ICQoJy50b29sdGlwdGV4dCcpXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLmJpbmQoJ2NsaWNrIG9ucHJlc3NzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdFxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0Ly8gY29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHR9KVxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLm1vdXNlb3V0KGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIub3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIC8vc2Nyb2xsIHRvIHRvcFxuICAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbiAoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuXG4gICBcdCQoJy5iLWludm9pY2VfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgZmlsZXMgPSAkKCcuYi1pbnZvaWNlX19pbnB1dCcpWzBdLmZpbGVzXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9ICQoJy5iLWludm9pY2VfX2V4dGVuc2lvbnMnKVxuXHRcdGV4dGVuc2lvbnMudGV4dCgnJykgXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdGNvbnN0IGV4dCA9IGZpbGVzW2ldLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRleHRlbnNpb25zLmFwcGVuZCgkKGA8ZGl2IGNsYXNzPVwiYi1pbnZvaWNlX19leHRcIj4ke2V4dH08L2Rpdj5gKSlcblx0XHR9XG5cdCAgXG5cdH0pXG5cblxuXG4gICAgXG59KSAvLyByZWFkeVxuXG5cblxuLy8gd2luZG93IGxvYWRlZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuXHRcblx0XG5cblx0bGF6eWxvYWQoKVxuXHRhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duKClcbn0pICBcblxuXG4iLCJcbmNvbnN0IG5hdiA9ICgpID0+IHtcblx0JCgnLmhhbWJ1cmdlcicpLmNsaWNrKCgpPT57XG5cdFx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0XHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cdFx0c2V0VGltZW91dCgoKT0+bmF2LmFkZENsYXNzKCdiLW5hdi0tYWN0aXZlJyksIDEwMClcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0JCgnLm5hdi10YWItYnV0dG9uJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdCQoJy5iLW5hdl9fdGFiJykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0dGFyZ2V0LnBhcmVudCgnLmItbmF2X190YWInKS5hZGRDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JyArIGhyZWYpLmFkZENsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cblx0fSlcblxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZcbiIsImNvbnN0IG9wZW5Qb3B1cCA9ICgpPT4ge1xuXHQvLyBjb25zdCBibHVycnlCZyA9ICQoJy5ibHVycnktYmFja2dyb3VuZCcpXG5cdGNvbnN0IHBvcHVwID0gJCgnLmItcG9wdXAnKVxuXHRjb25zdCBiTmF2ID0gJCgnLmItbmF2JykgLy8gcmVzcG9uc2l2ZSBpc3N1ZXNcblx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdCQoJy5vcGVuUG9wdXAnKS5jbGljayhlPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxuXHRcdC8vIGNvbnN0IHRvcCA9IG9mZnNldC50b3Bcblx0XHQvLyBjb25zdCBsZWZ0ID0gb2Zmc2V0LmxlZnRcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHQvLyBibHVycnlCZy5hZGRDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0JCgnLnByZXNzQ2xvc2UnKS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cblx0XHQvLyAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMCwgMCwgMCwgLjIpJylcblx0XHRpZigkKGhyZWYpLmxlbmd0aD4wICl7XG5cdFx0XHQkKGhyZWYpLmFkZENsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3B1cC5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9XG5cblx0XHQvLyBwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXG5cdH0pXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5iLXBvcHVwLCAuY2xvc2UtYi1wb3B1cCcsIChlKT0+e1xuXHRcdGNvbnNvbGUubG9nKCdwb3B1cCBjbGlja2VkJylcblx0XHRcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuYi1wb3B1cC0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0fSwgMzAwKVxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtXG5cblxuY29uc3QgcmVwZWF0TmV3SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHJlcGVhdEl0ZW1CdXR0b24sIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpXG5cdFx0XHRcdHBhcmVudEl0ZW0uYW5pbWF0ZSh7XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0fSwgJ2Zhc3QnLCAnc3dpbmcnLCBcblx0XHRcdFx0XHQoKSA9PiBwYXJlbnRJdGVtLnJlbW92ZSgpXG5cdFx0XHRcdClcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxuXG4iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKCcuc2hvcHBpbmctY2FyZCcpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IG15U3dpcGVyID0gKFN3aXBlcik9PntcbiAgcmV0dXJuIG5ldyBTd2lwZXIgKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzcGFjZUJldHdlZW46IDEwMCxcbiAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgY2FsY3VsYXRlSGVpZ2h0OnRydWUsXG4gICAgc2hhZG93OiB0cnVlLFxuXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcblxuICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXlTd2lwZXIiLCJjb25zdCBzbXNWZXJpZmljYXRpb24gPSAoKT0+IHtcblx0Y29uc3QgaW5wdXQgPSAkKCcuYi12ZXJpZmljYXRpb25fX2lucHV0JykuZXEoMClcblx0Y29uc3QgbWF4TGVuZ3RoID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4bGVuZ3RoJykpXG5cdGNvbnN0IGZvbnRTaXplID0gcGFyc2VJbnQoaW5wdXQuY3NzKCdmb250U2l6ZScpKVxuXHRjb25zdCBkYXNoZXMgPSAkKCcuYi12ZXJpZmljYXRpb25fX2Rhc2hlcycpXG5cdGNvbnN0IHVuZGVybGluZVdpZHRoID0gMzBcblx0Y29uc3QgdW5kZXJsaW5lTWFyZ2luUmlnaHQgPSAyMlxuXHRjb25zdCBob3Jpem9udGFsUGFkZGluZyA9IDNcblxuXHQvLyBjb25zb2xlLmxvZyggbWF4TGVuZ3RoLCBmb250U2l6ZSlcblx0XG5cdGRhc2hlcy5hcHBlbmQoJzxzcGFuPjwvc3Bhbj4nLnJlcGVhdChtYXhMZW5ndGgpKVxuXHRcdC5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKCcuYi12ZXJpZmljYXRpb25fX2lucHV0JykuY3NzKHtcblx0XHRcdCAgd2lkdGg6ICh1bmRlcmxpbmVXaWR0aCAqIChtYXhMZW5ndGggKyAxKSArIHVuZGVybGluZU1hcmdpblJpZ2h0ICogKG1heExlbmd0aCAtIDEpKSArIGhvcml6b250YWxQYWRkaW5nICogMixcblxuXHRcdFx0fSlcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbicpLmNzcyh7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuXHRcdFx0fSlcblx0XHRcdGlucHV0LmZvY3VzKClcblx0XHR9KVxuXHRcblx0aW5wdXQua2V5dXAoKCk9Pntcblx0XHRpZihpbnB1dC52YWwoKS5sZW5ndGg+PW1heExlbmd0aCkge1xuXHRcdFx0JCgnLnZlcmlmaWNhdGlvbkJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcblx0XHR9XG5cdH0pXG5cdFxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgc21zVmVyaWZpY2F0aW9uIiwiY29uc3Qgd2luZG93U2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XG5cdC8vIHNjcm9sbCBsaXN0ZW5lclxuXHRsZXQgbGFzdFNjcm9sbFRvcCA9IDBcblx0JCh3aW5kb3cpLnNjcm9sbCgoKT0+e1xuXHRcdFxuXHRcdGNvbnN0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKVxuXHRcdGNvbnN0IG5hdldyYXBwZXIgPSAkKCcuYi1uYXZfX3dyYXBwZXInKVxuXHRcdGNvbnN0IG5hdk1haW4gPSAkKCcuYi1uYXZfX21haW4nKVxuXHRcdGNvbnN0IHRvcE5hdiA9ICQoJy5iLW5hdl9fdG9wJylcblx0XHRjb25zdCBzY3JvbGxUb1RvcEJ1dHRvbiA9ICQoJy5zY3JvbGwtdG8tdG9wJylcblxuXHRcdC8vIGlmKHNjcm9sbFRvcD43MCkge1xuXHRcdC8vIFx0dG9wTmF2LmFkZENsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5yZW1vdmVDbGFzcygncHktMycpXG5cdFx0Ly8gXHRpZihzY3JvbGxUb3A+bGFzdFNjcm9sbFRvcCl7XG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHRcdFx0XHRcblxuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5hZGRDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHRvcE5hdi5yZW1vdmVDbGFzcygnYi1uYXZfX3RvcC0taGlkZGVuJylcblx0XHQvLyBcdG5hdk1haW4uYWRkQ2xhc3MoJ3B5LTMnKVxuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0aWYoc2Nyb2xsVG9wPjEwMCkge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24uYWRkQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLnJlbW92ZUNsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxuXHRcdH1cblx0XHRcblxuXHRcdGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3Bcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93U2Nyb2xsTGlzdGVuZXJcbiJdfQ==
