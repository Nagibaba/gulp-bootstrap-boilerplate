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
		var pressClose = $('.pressClose');
		var html = $('html');
		var nav = $('.b-nav');
		nav.removeClass('b-nav--active');
		pressClose.removeClass('pressClose--active');
		setTimeout(function () {
			html.removeClass('y-hidden');
		}, 300);
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
		define(['./a', './nav', './windowScrollListener', './documentListener', './slider', './shoppingCard', './openPopup', './repeatItem'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./slider'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.slider, global.shoppingCard, global.openPopup, global.repeatItem);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _slider, _shoppingCard, _openPopup, _repeatItem) {
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

},{"./a":1,"./documentListener":3,"./nav":5,"./openPopup":6,"./repeatItem":7,"./shoppingCard":8,"./slider":9,"./windowScrollListener":10}],5:[function(require,module,exports){
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
		global.nav = mod.exports;
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

		$('.pressClose').bind('click, touchstart', function (e) {
			(0, _closeNav2.default)();
		});
	};

	exports.default = nav;
	module.exports = exports['default'];
});

},{"./closeNav":2}],6:[function(require,module,exports){
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
		$('.openPopup').click(function (e) {
			e.preventDefault();
			var target = $(e.target).closest('a');
			var href = target.attr('href');
			// const offset = $(e.target).offset()
			// const top = offset.top
			// const left = offset.left
			bNav.css('display', 'none');
			blurryBg.addClass('blurry-background--active');
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
			$('.shopping-card').toggleClass('shopping-card--active');
			$('.inputs-wrapper--shopping').toggle();

			$('.b-nav__wrapper').addClass('b-nav__wrapper--active');

			$('html, body').animate({
				scrollTop: 0
			}, 1000);

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9hLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9kb2N1bWVudExpc3RlbmVyLmpzIiwic3JjL2pzL21haW4vbWFpbi5qcyIsInNyYy9qcy9tYWluL25hdi5qcyIsInNyYy9qcy9tYWluL29wZW5Qb3B1cC5qcyIsInNyYy9qcy9tYWluL3JlcGVhdEl0ZW0uanMiLCJzcmMvanMvbWFpbi9zaG9wcGluZ0NhcmQuanMiLCJzcmMvanMvbWFpbi9zbGlkZXIuanMiLCJzcmMvanMvbWFpbi93aW5kb3dTY3JvbGxMaXN0ZW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsTUFBTSxJQUFJLFNBQUosQ0FBSSxHQUFWLENBQUEsQ0FBQTs7b0JBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLEtBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSztBQUNyQixNQUFNLGFBQWEsRUFBbkIsYUFBbUIsQ0FBbkI7QUFDQSxNQUFNLE9BQU8sRUFBYixNQUFhLENBQWI7QUFDQSxNQUFNLE1BQU0sRUFBWixRQUFZLENBQVo7QUFDQSxNQUFBLFdBQUEsQ0FBQSxlQUFBO0FBQ0EsYUFBQSxXQUFBLENBQUEsb0JBQUE7QUFDQSxhQUFXLFlBQVU7QUFBQyxRQUFBLFdBQUEsQ0FBQSxVQUFBO0FBQXRCLEdBQUEsRUFBQSxHQUFBO0FBTkQsRUFBQTs7bUJBU0EsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFhO0FBQUEsTUFBWixLQUFZLFVBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsTUFBQSxTQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsR0FBYixJQUFhOztBQUNyQyxJQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEs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QUEwQixDQUExQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBRyxZQUFILEdBQUEsRUFBa0I7QUFDakIsc0JBQUEsUUFBQSxDQUFBLHVCQUFBO0FBREQsSUFBQSxNQUVPO0FBQ04sc0JBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0E7O0FBR0QsbUJBQUEsU0FBQTtBQS9CRCxHQUFBO0FBSEQsRUFBQTs7bUJBc0NBLG9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGEgPSAoKT0+IHtcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGEiLCJjb25zdCBjbG9zZU5hdiA9ICgpPT4ge1xuXHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXG5cdHByZXNzQ2xvc2UucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpfSwgMzAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCIndXNlIHN0cmljdCdcbi8vLy8vLyBQT1BVUFxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuLy8gaW1wb3J0IG1hc2sgZnJvbSAnanF1ZXJ5LW1hc2stcGx1Z2luJ1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tICdjbGlwYm9hcmQnXG5cbi8vIGltcG9ydCAkIGZyb20gJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS0zLjMuMS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5tYXNrJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9wb3BwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9kYXRlcGlja2VyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dpcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2VldGFsZXJ0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LmZvcm0ubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9mb3JtLnZhcmlhYmxlcydcblxuXG4vLyBpbXBvcnQgVG9vbHRpcCBmcm9tICd0b29sdGlwJ1xuXG5pbXBvcnQgYSBmcm9tICcuL2EnXG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IHdpbmRvd1Njcm9sbExpc3RlbmVyIGZyb20gJy4vd2luZG93U2Nyb2xsTGlzdGVuZXInXG5pbXBvcnQgZG9jdW1lbnRMaXN0ZW5lciBmcm9tICcuL2RvY3VtZW50TGlzdGVuZXInXG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuaW1wb3J0IHNob3BwaW5nQ2FyZCBmcm9tICcuL3Nob3BwaW5nQ2FyZCdcbmltcG9ydCBvcGVuUG9wdXAgZnJvbSAnLi9vcGVuUG9wdXAnXG5pbXBvcnQgcmVwZWF0SXRlbSBmcm9tICcuL3JlcGVhdEl0ZW0nXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCdcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnXG4vLyByZXF1aXJlKFwiQGNoZW5mZW5neXVhbi9kYXRlcGlja2VyXCIpXG5cblxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xuICAgIGZuKClcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXG4gIH1cbn1cblxucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0c2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cblx0JCgnW2RhdGEtdG9nZ2xlPVwiZGF0ZXBpY2tlclwiXScpLmRhdGVwaWNrZXIoeyBmb3JtYXQ6IFwiZGQvbW0veXl5eVwiIH0pXG5cblx0JCgnLmpxdWVyeU1hc2snKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgdCA9ICQodGhpcylcblx0XHR0Lm1hc2sodC5hdHRyKCdkYXRhLW1hc2snKSwge1xuXHRcdFx0dHJhbnNsYXRpb246IHtBOiB7cGF0dGVybjogL0EvLCBvcHRpb25hbDogZmFsc2V9LCBaOiB7cGF0dGVybjogL1tBWl0vLCBvcHRpb25hbDogZmFsc2V9LCBFOiB7cGF0dGVybjogL0UvLCBvcHRpb25hbDogdHJ1ZX19XG5cdFx0fSlcblx0fSlcblxuXHQkKCcjRGVjbGFyYXRpb25zX2xpbmtfaWQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0XHQkKCcjRGVjbGFyYXRpb25zX25hbWUnKS50cmlnZ2VyKCdmb2N1cycpXG5cdH0pXG5cblx0Ly8gJC5tYXNrLmRlZmluaXRpb25zWyc5J10gPSAnJztcblx0Ly8gJC5tYXNrLmRlZmluaXRpb25zWydkJ10gPSAnWzAtOV0nO1xuXHQvLyAkKCcuanF1ZXJ5TWFzaycpLm1hc2soJzIyMzEnKTtcblxuXHRcblx0Ly8gQ2xpcGJvYXJkXG5cdC8vIG5ldyBDbGlwYm9hcmQoJy5idG4tY2xpcGJvYXJkJyk7XG5cdHZhciB0aW1lb3V0O1xuXHQvLyBjb25zdCB0aW1lb3V0XG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgdmFyIGF1eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICBhdXguc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGV4dCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXgpO1xuICAgICAgICAgIGF1eC5zZWxlY3QoKTtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhdXgpO1xuICAgIH1cblxuICAgXG5cblx0XG5cdGNvbnN0IHRvb2x0aXAgPSAkKCcudG9vbHRpcHRleHQnKVxuXHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3B5JykpXG5cblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5iaW5kKCdjbGljayBvbnByZXNzc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkucGFyZW50KCdidXR0b24nKVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXHRcdC8vIENPUFlcblx0XHRjb25zdCBjb3B5VGV4dCA9IHRhcmdldC5jbG9zZXN0KCcuY29weScpLmZpbmQoJy5jb3B5X192YWx1ZScpLnRleHQoKS50cmltKClcblx0XHRcblx0XHRjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdFx0Ly8gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKS50ZXh0KClcblxuXHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcGllZCcpKVxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXHRcdC8vIGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0fSlcblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5tb3VzZW91dChlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcblxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3B5JykpXG5cdFx0XHRcblx0XHR9LCAyMDApXG5cdH0pXG5cdCQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoKVxuXG5cblxuXHQvLyB3ZSBhZGQgdGhlIG1vZGFsIHRvIHRoZSBlbmQgb2YgYm9keSBcblx0Y29uc3QgbW9kYWwgPSAkKCcuYWRkLXRvLXRoZS1lbmQtb2YtYm9keScpXG5cdCQoJ2JvZHknKS5hcHBlbmQobW9kYWwuY2xvbmUoKSlcblx0bW9kYWwucmVtb3ZlKClcblxuXG5cdFxuXG5cblx0Ly8gc2Nyb2xsIHRvIG9yZGVyXG5cdCQoXCIuc2Nyb2xsLXRvLW9yZGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiLm9yZGVycy1ob2xkZXJcIikub2Zmc2V0KCkudG9wIC0gMTBcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICAvL3Njcm9sbCB0byB0b3BcbiAgICAkKFwiLnNjcm9sbC10by10b3BcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBjb2xsYXBzZSBhc2lkZSBpbiBvcmRlcnMgcGFnZVxuICAgIGNvbnNvbGUubG9nKCQod2luZG93KS53aWR0aCgpLCAkKHdpbmRvdykub3V0ZXJXaWR0aCgpKVxuICAgIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxICkge1xuICAgICAgICAkKCAnLmItYXNpZGVfX2NvbGxhcHNlJyApLnJlbW92ZUNsYXNzKCAnc2hvdycgKTtcbiAgICB9XG59KVxuXG5cblxuXG4iLCJpbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcblxuY29uc3QgbmF2ID0gKCkgPT4ge1xuXHQkKCcuaGFtYnVyZ2VyJykuY2xpY2soKCk9Pntcblx0XHRjb25zdCBuYXYgPSAkKCcuYi1uYXYnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0bmF2LmFkZENsYXNzKCdiLW5hdi0tYWN0aXZlJylcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblxuXHR9KVxuXG5cdCQoJy5uYXYtdGFiLWJ1dHRvbicpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQkKCcuYi1uYXZfX3RhYicpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdHRhcmdldC5wYXJlbnQoJy5iLW5hdl9fdGFiJykuYWRkQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcgKyBocmVmKS5hZGRDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0JCgnLnByZXNzQ2xvc2UnKS5iaW5kKCdjbGljaywgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjbG9zZU5hdigpXG5cdH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2XG4iLCJjb25zdCBvcGVuUG9wdXAgPSAoKT0+IHtcblx0Y29uc3QgYmx1cnJ5QmcgPSAkKCcuYmx1cnJ5LWJhY2tncm91bmQnKVxuXHRjb25zdCBwb3B1cCA9ICQoJy5iLXBvcHVwJylcblx0Y29uc3QgYk5hdiA9ICQoJy5iLW5hdicpIC8vIHJlc3BvbnNpdmUgaXNzdWVzXG5cdCQoJy5vcGVuUG9wdXAnKS5jbGljayhlPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxuXHRcdC8vIGNvbnN0IHRvcCA9IG9mZnNldC50b3Bcblx0XHQvLyBjb25zdCBsZWZ0ID0gb2Zmc2V0LmxlZnRcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRibHVycnlCZy5hZGRDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0Ymx1cnJ5QmcucmVtb3ZlQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmItcG9wdXAtLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRiTmF2LmNzcygnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdH0sIDMwMClcblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtIiwiXG5jb25zdCBzaG9wcGluZ0NhcmQgPSAoKT0+IHtcblx0JCgnLnNob3BwaW5nLWNhcmQnKS5jbGljaygoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnRvZ2dsZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS50b2dnbGUoKVxuXHRcdFxuXHQgICAgJCgnLmItbmF2X193cmFwcGVyJykuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXG5cdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMTAwMCk7XG5cdFxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IG15U3dpcGVyID0gKFN3aXBlcik9PntcbiAgcmV0dXJuIG5ldyBTd2lwZXIgKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzcGFjZUJldHdlZW46IDEwMCxcbiAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgY2FsY3VsYXRlSGVpZ2h0OnRydWUsXG4gICAgc2hhZG93OiB0cnVlLFxuXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcblxuICAgIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXlTd2lwZXIiLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
