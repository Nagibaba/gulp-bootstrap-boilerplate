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

		// collapse aside in orders page
		console.log($(window).width(), $(window).outerWidth());
		if ($(window).width() <= 991) {
			$('.b-aside__collapse').removeClass('show');
		}
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

	exports.default = repeatItem;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9kb2N1bWVudExpc3RlbmVyLmpzIiwic3JjL2pzL21haW4vbWFpbi5qcyIsInNyYy9qcy9tYWluL25hdi5qcyIsInNyYy9qcy9tYWluL29wZW5Qb3B1cC5qcyIsInNyYy9qcy9tYWluL3JlcGVhdEl0ZW0uanMiLCJzcmMvanMvbWFpbi9zaG9wcGluZ0NhcmQuanMiLCJzcmMvanMvbWFpbi9zbGlkZXIuanMiLCJzcmMvanMvbWFpbi93aW5kb3dTY3JvbGxMaXN0ZW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsTUFBTSxJQUFJLFNBQUosQ0FBSSxHQUFWLENBQUEsQ0FBQTs7b0JBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLEtBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSzs7QUFHckIsTUFBTSxNQUFNLEVBQVosUUFBWSxDQUFaO0FBQ0EsTUFBQSxXQUFBLENBQUEsZUFBQTtBQUpELEVBQUE7O21CQVFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxLQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsR0FBYTtBQUFBLE1BQVosS0FBWSxVQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsVUFBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQWIsSUFBYTs7QUFDckMsSUFBQSxRQUFBLEVBQUEsRUFBQSxDQUFBLGtCQUFBLEVBQW1DLFVBQUEsQ0FBQSxFQUFLO0FBQ3ZDLE9BQU0sUUFBUSxFQUFFLEVBQWhCLE1BQWMsQ0FBZDs7QUFHQTtBQUNBLE9BQUcsQ0FBQyxNQUFBLE9BQUEsQ0FBQSxZQUFBLEVBQUQsTUFBQSxJQUF1QyxDQUFDLE1BQUEsT0FBQSxDQUFBLFFBQUEsRUFB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TUFBQSxFQUFBLE1BQUEsQ0FBaUIsWUFBSTs7QUFFcEIsT0FBTSxZQUFZLEVBQUEsTUFBQSxFQUFsQixTQUFrQixFQUFsQjtBQUNBLE9BQU0sYUFBYSxFQUFuQixpQkFBbUIsQ0FBbkI7QUFDQSxPQUFNLFVBQVUsRUFBaEIsY0FBZ0IsQ0FBaEI7QUFDQSxPQUFNLFNBQVMsRUFBZixhQUFlLENBQWY7QUFDQSxPQUFNLG9CQUFvQixFQUExQixnQkFBMEIsQ0FBMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQUcsWUFBSCxHQUFBLEVBQWtCO0FBQ2pCLHNCQUFBLFFBQUEsQ0FBQSx1QkFBQTtBQURELElBQUEsTUFFTztBQUNOLHNCQUFBLFdBQUEsQ0FBQSx1QkFBQTtBQUNBOztBQUdELG1CQUFBLFNBQUE7QUEvQkQsR0FBQTtBQUhELEVBQUE7O21CQXNDQSxvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhID0gKCk9PiB7XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBhIiwiY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcblxuXHRcblx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb3NlTmF2IiwiaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5jb25zdCBkb2N1bWVudExpc3RlbmVyID0gKGNiPW51bGwpID0+IHtcblx0JChkb2N1bWVudCkub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCAoZSk9Pntcblx0XHRjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpXG5cdFx0XG5cblx0XHQvLyBpZiBub3Qgc2VsZiBjbGlja2VkXG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5oYW1idXJnZXInKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5iLW5hdicpLmxlbmd0aCl7XG5cdFx0XHRjbG9zZU5hdigpXG5cblx0XHR9XG5cdFx0aWYoIV90aGlzLmNsb3Nlc3QoJy5zaG9wcGluZy1jYXJkJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykubGVuZ3RoKXtcblx0XHRcdCQoJy5zaG9wcGluZy1jYXJkJykucmVtb3ZlQ2xhc3MoJ3Nob3BwaW5nLWNhcmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykuaGlkZSgpXG5cdFx0fVxuXHRcdFxuXHR9KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50TGlzdGVuZXJcbiIsIid1c2Ugc3RyaWN0J1xuLy8vLy8vIFBPUFVQXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXG4vLyBpbXBvcnQgbWFzayBmcm9tICdqcXVlcnktbWFzay1wbHVnaW4nXG4vLyBpbXBvcnQgQ2xpcGJvYXJkIGZyb20gJ2NsaXBib2FyZCdcblxuLy8gaW1wb3J0ICQgZnJvbSAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LTMuMy4xLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5Lm1hc2snXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3BvcHBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2RhdGVwaWNrZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2lwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAuYnVuZGxlLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLXNlbGVjdC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3ZWV0YWxlcnQubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkuZm9ybS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Zvcm0udmFyaWFibGVzJ1xuXG5cbi8vIGltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAnXG5cbmltcG9ydCBhIGZyb20gJy4vYSdcbmltcG9ydCBuYXYgZnJvbSAnLi9uYXYnXG5pbXBvcnQgd2luZG93U2Nyb2xsTGlzdGVuZXIgZnJvbSAnLi93aW5kb3dTY3JvbGxMaXN0ZW5lcidcbmltcG9ydCBkb2N1bWVudExpc3RlbmVyIGZyb20gJy4vZG9jdW1lbnRMaXN0ZW5lcidcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInXG5pbXBvcnQgc2hvcHBpbmdDYXJkIGZyb20gJy4vc2hvcHBpbmdDYXJkJ1xuaW1wb3J0IG9wZW5Qb3B1cCBmcm9tICcuL29wZW5Qb3B1cCdcbmltcG9ydCByZXBlYXRJdGVtIGZyb20gJy4vcmVwZWF0SXRlbSdcbmltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCdcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnXG4vLyByZXF1aXJlKFwiQGNoZW5mZW5neXVhbi9kYXRlcGlja2VyXCIpXG5cblxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xuICAgIGZuKClcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXG4gIH1cbn1cblxucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0c2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cblx0JCgnLnByZXNzQ2xvc2UnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRwcmVzc0Nsb3NlLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpfSwgMzAwKVxuXG5cdFx0Y2xvc2VOYXYoKVxuXHR9KVxuXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImRhdGVwaWNrZXJcIl0nKS5kYXRlcGlja2VyKHsgZm9ybWF0OiBcImRkL21tL3l5eXlcIiB9KVxuXG5cdCQoJy5qcXVlcnlNYXNrJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHQgPSAkKHRoaXMpXG5cdFx0dC5tYXNrKHQuYXR0cignZGF0YS1tYXNrJyksIHtcblx0XHRcdHRyYW5zbGF0aW9uOiB7QToge3BhdHRlcm46IC9BLywgb3B0aW9uYWw6IGZhbHNlfSwgWjoge3BhdHRlcm46IC9bQVpdLywgb3B0aW9uYWw6IGZhbHNlfSwgRToge3BhdHRlcm46IC9FLywgb3B0aW9uYWw6IHRydWV9fVxuXHRcdH0pXG5cdH0pXG5cblx0JCgnI0RlY2xhcmF0aW9uc19saW5rX2lkJykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI0RlY2xhcmF0aW9uc19uYW1lJykudHJpZ2dlcignZm9jdXMnKVxuXHR9KVxuXG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snOSddID0gJyc7XG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snZCddID0gJ1swLTldJztcblx0Ly8gJCgnLmpxdWVyeU1hc2snKS5tYXNrKCcyMjMxJyk7XG5cblx0XG5cdC8vIENsaXBib2FyZFxuXHQvLyBuZXcgQ2xpcGJvYXJkKCcuYnRuLWNsaXBib2FyZCcpO1xuXHR2YXIgdGltZW91dDtcblx0Ly8gY29uc3QgdGltZW91dFxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHZhciBhdXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgYXV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV4KTtcbiAgICAgICAgICBhdXguc2VsZWN0KCk7XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcbiAgICB9XG5cbiAgIFxuXG5cdFxuXHRjb25zdCB0b29sdGlwID0gJCgnLnRvb2x0aXB0ZXh0Jylcblx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXG5cdCQoJy5idG4tY2xpcGJvYXJkJykuYmluZCgnY2xpY2sgb25wcmVzc3N0YXJ0JywgZT0+e1xuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLnBhcmVudCgnYnV0dG9uJylcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcblx0XHQvLyBDT1BZXG5cdFx0Y29uc3QgY29weVRleHQgPSB0YXJnZXQuY2xvc2VzdCgnLmNvcHknKS5maW5kKCcuY29weV9fdmFsdWUnKS50ZXh0KCkudHJpbSgpXG5cdFx0XG5cdFx0Y29weVRvQ2xpcGJvYXJkKGNvcHlUZXh0KVxuXHRcdC8vICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSkudGV4dCgpXG5cblx0XHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3BpZWQnKSlcblx0XHRjbGVhclRpbWVvdXQodGltZW91dClcblx0XHQvLyBjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdH0pXG5cdCQoJy5idG4tY2xpcGJvYXJkJykubW91c2VvdXQoZT0+e1xuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXHRcdFx0XG5cdFx0fSwgMjAwKVxuXHR9KVxuXHQkKCcuc2VsZWN0cGlja2VyJykuc2VsZWN0cGlja2VyKClcblxuXG5cblx0Ly8gd2UgYWRkIHRoZSBtb2RhbCB0byB0aGUgZW5kIG9mIGJvZHkgXG5cdGNvbnN0IG1vZGFsID0gJCgnLmFkZC10by10aGUtZW5kLW9mLWJvZHknKVxuXHQkKCdib2R5JykuYXBwZW5kKG1vZGFsLmNsb25lKCkpXG5cdG1vZGFsLnJlbW92ZSgpXG5cblxuXHRcblxuXG5cdC8vIHNjcm9sbCB0byBvcmRlclxuXHQkKFwiLnNjcm9sbC10by1vcmRlclwiKS5jbGljayhmdW5jdGlvbiAoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIi5vcmRlcnMtaG9sZGVyXCIpLm9mZnNldCgpLnRvcCAtIDEwXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgLy9zY3JvbGwgdG8gdG9wXG4gICAgJChcIi5zY3JvbGwtdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgLy8gY29sbGFwc2UgYXNpZGUgaW4gb3JkZXJzIHBhZ2VcbiAgICBjb25zb2xlLmxvZygkKHdpbmRvdykud2lkdGgoKSwgJCh3aW5kb3cpLm91dGVyV2lkdGgoKSlcbiAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDw9IDk5MSApIHtcbiAgICAgICAgJCggJy5iLWFzaWRlX19jb2xsYXBzZScgKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XG4gICAgfVxufSlcblxuXG5cblxuIiwiXG5jb25zdCBuYXYgPSAoKSA9PiB7XG5cdCQoJy5oYW1idXJnZXInKS5jbGljaygoKT0+e1xuXHRcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0XHRuYXYuYWRkQ2xhc3MoJ2ItbmF2LS1hY3RpdmUnKVxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdH0pXG5cblx0JCgnLm5hdi10YWItYnV0dG9uJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdCQoJy5iLW5hdl9fdGFiJykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0dGFyZ2V0LnBhcmVudCgnLmItbmF2X190YWInKS5hZGRDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JyArIGhyZWYpLmFkZENsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cblx0fSlcblxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZcbiIsImNvbnN0IG9wZW5Qb3B1cCA9ICgpPT4ge1xuXHRjb25zdCBibHVycnlCZyA9ICQoJy5ibHVycnktYmFja2dyb3VuZCcpXG5cdGNvbnN0IHBvcHVwID0gJCgnLmItcG9wdXAnKVxuXHRjb25zdCBiTmF2ID0gJCgnLmItbmF2JykgLy8gcmVzcG9uc2l2ZSBpc3N1ZXNcblx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdCQoJy5vcGVuUG9wdXAnKS5jbGljayhlPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxuXHRcdC8vIGNvbnN0IHRvcCA9IG9mZnNldC50b3Bcblx0XHQvLyBjb25zdCBsZWZ0ID0gb2Zmc2V0LmxlZnRcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRibHVycnlCZy5hZGRDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0Ymx1cnJ5QmcucmVtb3ZlQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmItcG9wdXAtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRiTmF2LmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdH0sIDMwMClcblx0XHRcdGh0bWwucmVtb3ZlQ2xhc3MoJ3ktaGlkZGVuJylcblxuXHRcdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpXG5cblx0XHR9XG5cdH0pXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuUG9wdXBcblxuIiwiY29uc3QgcmVwZWF0SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAkKCdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXScpLmVxKDApXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdHJlcGVhdEl0ZW1CdXR0b24uY2xpY2soKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5yZW1vdmUoKVxuXHRcdFx0fVxuXG5cdFx0fSlcblxuXG5cblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGVhdEl0ZW0iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKCcuc2hvcHBpbmctY2FyZCcpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IG15U3dpcGVyID0gKFN3aXBlcik9PntcbiAgcmV0dXJuIG5ldyBTd2lwZXIgKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzcGFjZUJldHdlZW46IDEwMCxcbiAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgY2FsY3VsYXRlSGVpZ2h0OnRydWUsXG4gICAgc2hhZG93OiB0cnVlLFxuXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcblxuICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXlTd2lwZXIiLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
