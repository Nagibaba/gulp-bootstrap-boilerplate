(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./closeNav":2}],4:[function(require,module,exports){
'use strict';

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['./a', './nav', './windowScrollListener', './documentListener', './slider', './shoppingCard', './openPopup', './repeatItem', './closeNav'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./slider'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.slider, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _slider, _shoppingCard, _openPopup, _repeatItem, _closeNav) {
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

		(0, _nav2.default)();
		(0, _windowScrollListener2.default)();
		(0, _documentListener2.default)();
		(0, _slider2.default)(Swiper);
		(0, _shoppingCard2.default)();
		(0, _openPopup2.default)();
		(0, _repeatItem2.default)();

		$('.pressClose').on('click touchstart', function (e) {
			var html = $('html');
			var pressClose = $('.pressClose');
			pressClose.removeClass('pressClose--active');
			setTimeout(function () {
				html.removeClass('y-hidden');
			}, 300);

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
	});
});

},{"./a":1,"./closeNav":2,"./documentListener":3,"./nav":5,"./openPopup":6,"./repeatItem":7,"./shoppingCard":8,"./slider":9,"./windowScrollListener":10}],5:[function(require,module,exports){
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

			nav.addClass('b-nav--active');
			pressClose.addClass('pressClose--active');
			html.addClass('y-hidden');
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
		global.openPopup = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var openPopup = function openPopup() {
		var blurryBg = $('.blurry-background');
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
			blurryBg.addClass('blurry-background--active');
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
			e.preventDefault();
			var target = $(e.target);
			if (target.closest('.b-popup__inner').length <= 0 || target.closest('.close-b-popup').length > 0) {
				blurryBg.removeClass('blurry-background--active');
				$('.b-popup--active').removeClass('b-popup--active');
				setTimeout(function () {
					bNav.css('display', 'flex');
				}, 300);
				html.removeClass('y-hidden');

				// $('body').css('background-color', 'white')
			}
		});
	};

	exports.default = openPopup;
	module.exports = exports['default'];
});

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9kb2N1bWVudExpc3RlbmVyLmpzIiwic3JjL2pzL21haW4vbWFpbi5qcyIsInNyYy9qcy9tYWluL25hdi5qcyIsInNyYy9qcy9tYWluL29wZW5Qb3B1cC5qcyIsInNyYy9qcy9tYWluL3JlcGVhdEl0ZW0uanMiLCJzcmMvanMvbWFpbi9zaG9wcGluZ0NhcmQuanMiLCJzcmMvanMvbWFpbi9zbGlkZXIuanMiLCJzcmMvanMvbWFpbi93aW5kb3dTY3JvbGxMaXN0ZW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsTUFBTSxJQUFJLFNBQUosQ0FBSSxHQUFWLENBQUEsQ0FBQTs7b0JBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLEtBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSzs7QUFHckIsTUFBTSxNQUFNLEVBQVosUUFBWSxDQUFaO0FBQ0EsTUFBQSxXQUFBLENBQUEsZUFBQTtBQUpELEVBQUE7O21CQVFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxLQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsR0FBYTtBQUFBLE1BQVosS0FBWSxVQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsVUFBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQWIsSUFBYTs7QUFDckMsSUFBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLGtCQUFBLEVBQW1DLFVBQUEsQ0FBQSxFQUFLO0FBQ3ZDLE9BQU0sUUFBUSxFQUFFLEVBQWhCLE1BQWMsQ0FBZDs7QUFHQTtBQUNBLE9BQUcsQ0FBQyxNQUFBLE9BQUEsQ0FBQSxZQUFBLEVBQUQsTUFBQSxJQUF1QyxDQUFDLE1BQUEsT0FBQSxDQUFBLFFBQUEsRUFB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LE1BRU87QUFDTixzQkFBQSxXQUFBLENBQUEsdUJBQUE7QUFDQTs7QUFHRCxtQkFBQSxTQUFBO0FBL0JELEdBQUE7QUFIRCxFQUFBOzttQkFzQ0Esb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgYSA9ICgpPT4ge1xuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYSIsImNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XG5cblx0XG5cdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCIndXNlIHN0cmljdCdcbi8vLy8vLyBQT1BVUFxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0IG1hc2sgZnJvbSAnanF1ZXJ5LW1hc2stcGx1Z2luJ1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXG5cbi8vIGltcG9ydCAkIGZyb20gJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS0zLjMuMS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9wb3BwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9kYXRlcGlja2VyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LmZvcm0ubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9mb3JtLnZhcmlhYmxlcydcblxuXG4vLyBpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwJ1xuXG5pbXBvcnQgYSBmcm9tICcuL2EnXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IHdpbmRvd1Njcm9sbExpc3RlbmVyIGZyb20gJy4vd2luZG93U2Nyb2xsTGlzdGVuZXInXG5pbXBvcnQgZG9jdW1lbnRMaXN0ZW5lciBmcm9tICcuL2RvY3VtZW50TGlzdGVuZXInXG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuaW1wb3J0IHNob3BwaW5nQ2FyZCBmcm9tICcuL3Nob3BwaW5nQ2FyZCdcbmltcG9ydCBvcGVuUG9wdXAgZnJvbSAnLi9vcGVuUG9wdXAnXG5pbXBvcnQgcmVwZWF0SXRlbSBmcm9tICcuL3JlcGVhdEl0ZW0nXG5pbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcblxuLy8gaW1wb3J0ICdib290c3RyYXAnXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJ1xuLy8gcmVxdWlyZShcIkBjaGVuZmVuZ3l1YW4vZGF0ZXBpY2tlclwiKVxuXG5cbmZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcbiAgICBmbigpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKVxuICB9XG59XG5cbnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cdG5hdigpXG5cdHdpbmRvd1Njcm9sbExpc3RlbmVyKClcblx0ZG9jdW1lbnRMaXN0ZW5lcigpXG5cdHNsaWRlcihTd2lwZXIpXG5cdHNob3BwaW5nQ2FyZCgpXG5cdG9wZW5Qb3B1cCgpXG5cdHJlcGVhdEl0ZW0oKVxuXG5cdCQoJy5wcmVzc0Nsb3NlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0cHJlc3NDbG9zZS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aHRtbC5yZW1vdmVDbGFzcygneS1oaWRkZW4nKX0sIDMwMClcblxuXHRcdGNsb3NlTmF2KClcblx0fSlcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJkYXRlcGlja2VyXCJdJykuZGF0ZXBpY2tlcih7IGZvcm1hdDogXCJkZC9tbS95eXl5XCIgfSlcblxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCB0ID0gJCh0aGlzKVxuXHRcdHQubWFzayh0LmF0dHIoJ2RhdGEtbWFzaycpLCB7XG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cblx0XHR9KVxuXHR9KVxuXG5cdCQoJyNEZWNsYXJhdGlvbnNfbGlua19pZCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdCQoJyNEZWNsYXJhdGlvbnNfbmFtZScpLnRyaWdnZXIoJ2ZvY3VzJylcblx0fSlcblxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJzknXSA9ICcnO1xuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XG5cdC8vICQoJy5qcXVlcnlNYXNrJykubWFzaygnMjIzMScpO1xuXG5cdFxuXHQvLyBDbGlwYm9hcmRcblx0Ly8gbmV3IENsaXBib2FyZCgnLmJ0bi1jbGlwYm9hcmQnKTtcblx0dmFyIHRpbWVvdXQ7XG5cdC8vIGNvbnN0IHRpbWVvdXRcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XG4gICAgfVxuXG4gICBcblxuXHRcblx0Y29uc3QgdG9vbHRpcCA9ICQoJy50b29sdGlwdGV4dCcpXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLmJpbmQoJ2NsaWNrIG9ucHJlc3NzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdFxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0Ly8gY29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHR9KVxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLm1vdXNlb3V0KGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIub3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIC8vc2Nyb2xsIHRvIHRvcFxuICAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbiAoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIFxufSlcblxuXG5cblxuIiwiXG5jb25zdCBuYXYgPSAoKSA9PiB7XG5cdCQoJy5oYW1idXJnZXInKS5jbGljaygoKT0+e1xuXHRcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0XHRuYXYuYWRkQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdH0pXG5cblx0JCgnLm5hdi10YWItYnV0dG9uJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdCQoJy5iLW5hdl9fdGFiJykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0dGFyZ2V0LnBhcmVudCgnLmItbmF2X190YWInKS5hZGRDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JyArIGhyZWYpLmFkZENsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cblx0fSlcblxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZcbiIsImNvbnN0IG9wZW5Qb3B1cCA9ICgpPT4ge1xuXHRjb25zdCBibHVycnlCZyA9ICQoJy5ibHVycnktYmFja2dyb3VuZCcpXG5cdGNvbnN0IHBvcHVwID0gJCgnLmItcG9wdXAnKVxuXHRjb25zdCBiTmF2ID0gJCgnLmItbmF2JykgLy8gcmVzcG9uc2l2ZSBpc3N1ZXNcblx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdCQoJy5vcGVuUG9wdXAnKS5jbGljayhlPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxuXHRcdC8vIGNvbnN0IHRvcCA9IG9mZnNldC50b3Bcblx0XHQvLyBjb25zdCBsZWZ0ID0gb2Zmc2V0LmxlZnRcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRibHVycnlCZy5hZGRDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0Ymx1cnJ5QmcucmVtb3ZlQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmItcG9wdXAtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRiTmF2LmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdH0sIDMwMClcblx0XHRcdGh0bWwucmVtb3ZlQ2xhc3MoJ3ktaGlkZGVuJylcblxuXHRcdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpXG5cblx0XHR9XG5cdH0pXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuUG9wdXBcblxuIiwiY29uc3QgcmVwZWF0SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAkKCdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXScpLmVxKDApXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdHJlcGVhdEl0ZW1CdXR0b24uY2xpY2soKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5yZW1vdmUoKVxuXHRcdFx0fVxuXG5cdFx0fSlcblxuXG5cblxuXHR9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHJlcGVhdEl0ZW1cblxuXG5jb25zdCByZXBlYXROZXdJdGVtID0gKCk9PiB7XG5cdGNvbnN0IHJlcGVhdEl0ZW0gPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMClcblx0Y29uc3QgcmVwZWF0SXRlbVBhcmVudCA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKS5wYXJlbnQoKVxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcblx0Y29uc3QgcmVwZWF0SXRlbUJ1dHRvbiA9ICdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXSdcblx0aWYocmVwZWF0SXRlbSAmJiByZXBlYXRJdGVtQnV0dG9uKSB7XG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgcmVwZWF0SXRlbUJ1dHRvbiwgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0Y29uc3QgcGFyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJylcblx0XHRcdFx0cGFyZW50SXRlbS5hbmltYXRlKHtcblx0XHRcdFx0XHRoZWlnaHQ6ICcwJ1xuXHRcdFx0XHR9LCAnZmFzdCcsICdzd2luZycsIFxuXHRcdFx0XHRcdCgpID0+IHBhcmVudEl0ZW0ucmVtb3ZlKClcblx0XHRcdFx0KVxuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXBlYXROZXdJdGVtXG5cbiIsIlxuY29uc3Qgc2hvcHBpbmdDYXJkID0gKCk9PiB7XG5cdCQoJy5zaG9wcGluZy1jYXJkJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnRvZ2dsZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS50b2dnbGUoKVxuXHRcdFxuXHQgICAgJCgnLmItbmF2X193cmFwcGVyJykuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHQgICAgaHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDEwMDApO1xuXHRcdFxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0Ly8gY29uc29sZS5sb2coJCh0aGlzKSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvcHBpbmdDYXJkIiwiY29uc3QgbXlTd2lwZXIgPSAoU3dpcGVyKT0+e1xuICByZXR1cm4gbmV3IFN3aXBlciAoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBsb29wOiB0cnVlLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNwYWNlQmV0d2VlbjogMTAwLFxuICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICBjYWxjdWxhdGVIZWlnaHQ6dHJ1ZSxcbiAgICBzaGFkb3c6IHRydWUsXG5cbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgfSxcblxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuXG4gICAgLy8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBteVN3aXBlciIsImNvbnN0IHdpbmRvd1Njcm9sbExpc3RlbmVyID0gKCkgPT4ge1xuXHQvLyBzY3JvbGwgbGlzdGVuZXJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwXG5cdCQod2luZG93KS5zY3JvbGwoKCk9Pntcblx0XHRcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcblx0XHRjb25zdCBuYXZXcmFwcGVyID0gJCgnLmItbmF2X193cmFwcGVyJylcblx0XHRjb25zdCBuYXZNYWluID0gJCgnLmItbmF2X19tYWluJylcblx0XHRjb25zdCB0b3BOYXYgPSAkKCcuYi1uYXZfX3RvcCcpXG5cdFx0Y29uc3Qgc2Nyb2xsVG9Ub3BCdXR0b24gPSAkKCcuc2Nyb2xsLXRvLXRvcCcpXG5cblx0XHQvLyBpZihzY3JvbGxUb3A+NzApIHtcblx0XHQvLyBcdHRvcE5hdi5hZGRDbGFzcygnYi1uYXZfX3RvcC0taGlkZGVuJylcblx0XHQvLyBcdG5hdk1haW4ucmVtb3ZlQ2xhc3MoJ3B5LTMnKVxuXHRcdC8vIFx0aWYoc2Nyb2xsVG9wPmxhc3RTY3JvbGxUb3Ape1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLnJlbW92ZUNsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHRcdFx0XG5cblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHRcdC8vIFx0fVxuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHR0b3BOYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLmFkZENsYXNzKCdweS0zJylcblx0XHRcdFxuXHRcdC8vIH1cblxuXHRcdGlmKHNjcm9sbFRvcD4xMDApIHtcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLmFkZENsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5yZW1vdmVDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9XG5cdFx0XG5cblx0XHRsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1Njcm9sbExpc3RlbmVyXG4iXX0=
