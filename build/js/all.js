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

		if (!(0, _cookies.getCookie)('save-as-app2')) {
			$('#save-as-app').tooltip('show');
			setTimeout(function () {
				$('#save-as-app').tooltip('hide');
			}, 10000);
			(0, _cookies.setCookie)('save-as-app2', 1);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9MYXllcmVkU2xpZGVyLmpzIiwic3JjL2pzL21haW4vYS5qcyIsInNyYy9qcy9tYWluL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24uanMiLCJzcmMvanMvbWFpbi9jbG9zZU5hdi5qcyIsInNyYy9qcy9tYWluL2Nvb2tpZXMuanMiLCJzcmMvanMvbWFpbi9kb2N1bWVudExpc3RlbmVyLmpzIiwic3JjL2pzL21haW4vbGF6eWxvYWQuanMiLCJzcmMvanMvbWFpbi9tYWluLmpzIiwic3JjL2pzL21haW4vbmF2LmpzIiwic3JjL2pzL21haW4vb3BlblBvcHVwLmpzIiwic3JjL2pzL21haW4vcmVwZWF0SXRlbS5qcyIsInNyYy9qcy9tYWluL3Nob3BwaW5nQ2FyZC5qcyIsInNyYy9qcy9tYWluL3Ntc1ZlcmlmaWNhdGlvbi5qcyIsInNyYy9qcy9tYWluL3dpbmRvd1Njcm9sbExpc3RlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxLQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFLOztBQUUxQixNQUFNLGdCQUFnQixFQUF0QixpQkFBc0IsQ0FBdEI7QUFDQSxNQUFNLFdBQVcsRUFBQSxzQkFBQSxFQUFBLEtBQUEsR0FBQSxXQUFBLENBQWpCLDZCQUFpQixDQUFqQjtBQUNBLE1BQU0sYUFBYSxFQUFuQiw2QkFBbUIsQ0FBbkI7QUFDQSxNQUFNLE9BQU8sRUFBYix1QkFBYSxDQUFiO0FBQ0EsTUFBTSxRQUFRLEVBQWQsd0JBQWMsQ0FBZDtBQUNBLE1BQU0sWUFBWSxFQUFsQiw4QkFBa0IsQ0FBbEI7QUFDQSxNQUFNLFlBQVksRUFBbEIsOEJBQWtCLENBQWxCO0FBQ0EsTUFBTSxRQUFRLEtBQWQsTUFBQTtBQUNBLE1BQUksSUFBSixDQUFBO0FBQ0EsU0FBTSxJQUFOLEtBQUEsRUFBZ0I7QUFDZixjQUFBLE1B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QixDQUExQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBRyxZQUFILEdBQUEsRUFBa0I7QUFDakIsc0JBQUEsUUFBQSxDQUFBLHVCQUFBO0FBREQsSUFBQSxNQUVPO0FBQ04sc0JBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0E7O0FBR0QsbUJBQUEsU0FBQTtBQS9CRCxHQUFBO0FBSEQsRUFBQTs7bUJBc0NBLG9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IExheWVyZWRTbGlkZXIgPSAoKT0+IHtcblxuXHRjb25zdCBsYXllcmVkU2xpZGVyID0gJCgnLmxheWVyZWQtc2xpZGVyJylcblx0Y29uc3QgZG90Q2xvbmUgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdCcpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdGNvbnN0IGluZGljYXRvcnMgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2luZGljYXRvcnMnKVxuXHRjb25zdCBpdGVtID0gJCgnLmxheWVyZWQtc2xpZGVyX19pdGVtJylcblx0Y29uc3QgYXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93Jylcblx0Y29uc3QgbmV4dEFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tbmV4dCcpXG5cdGNvbnN0IHByZXZBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLXByZXYnKVxuXHRjb25zdCBjb3VudCA9IGl0ZW0ubGVuZ3RoXG5cdGxldCBpID0gMVxuXHR3aGlsZShpIDwgY291bnQpe1xuXHRcdGluZGljYXRvcnMuYXBwZW5kKGRvdENsb25lLmNsb25lKCkpXG5cdFx0aSsrXG5cdH1cblxuXG5cblx0Y29uc3QgZG90ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKVxuXHRkb3QuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBjb25zdCBpbmRleCA9ICQodGhpcykuaW5kZXgoKVxuXHQgIFxuXHQgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIGl0ZW0uZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBcblx0ICBkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgZG90LmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBcblx0ICBzbGlkZXJDaGFuZ2VkKGluZGV4KVxuXHR9KVxuXG5cdGNvbnN0IG5leHRBcnJvd0NsaWNrZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHRcdGNvbnN0IG5leHRJbmRleCA9IGluZGV4PGNvdW50LTEgPyBpbmRleCsxIDogMFxuXG5cdFx0aXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdFx0aXRlbS5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblxuXHRcdGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRkb3QuZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRzbGlkZXJDaGFuZ2VkKG5leHRJbmRleClcblx0fVxuXHRjb25zdCBwcmV2QXJyb3dDbGlja2VkID0gKCkgPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0Y29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHRcdGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gMVxuXG5cdFx0aXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdFx0aXRlbS5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblxuXHRcdGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRkb3QuZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRzbGlkZXJDaGFuZ2VkKHByZXZJbmRleClcblx0fVxuXHRuZXh0QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdG5leHRBcnJvd0NsaWNrZWQoKVxuXHR9KVxuXG5cdHByZXZBcnJvdy5jbGljayhmdW5jdGlvbigpe1xuXHRcdHByZXZBcnJvd0NsaWNrZWQoKVxuXHR9KVxuXG5cdGNvbnN0IHNsaWRlckNoYW5nZWQgPSAobmV3SW5kZXgpID0+IHtcblx0ICBhcnJvdy5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIGlmKG5ld0luZGV4KzE9PWNvdW50KSB7IC8vIGxhc3Rcblx0ICAgIC8vIG5leHRBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gZWxzZSBpZihuZXdJbmRleD09MCkge1xuXHQgICAgLy8gcHJldkFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBcblx0fVxuXG5cdC8vIGludGVydmFsXG5cblx0XG5cdGxldCBpbnRlcnZhbCA9IG51bGxcblxuXHRjb25zdCBzdGFydEludGVydmFsID0gKCkgPT4ge1xuXHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dEFycm93Q2xpY2tlZCwgNTAwMClcblx0fVxuXHRzdGFydEludGVydmFsKClcblxuXHRsYXllcmVkU2xpZGVyLmhvdmVyKCgpPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdH0sICgpID0+IHN0YXJ0SW50ZXJ2YWwoKSApXG5cblxuXG5cdC8vIGxheWVyZWRTbGlkZXIub24oXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0VG91Y2gpO1xuXHQvLyBsYXllcmVkU2xpZGVyLm9uKFwidG91Y2htb3ZlXCIsIG1vdmVUb3VjaCk7XG5cblx0Ly8gLy8gU3dpcGUgVXAgLyBEb3duIC8gTGVmdCAvIFJpZ2h0XG5cdC8vIGxldCBpbml0aWFsWCA9IG51bGw7XG5cdC8vIGxldCBpbml0aWFsWSA9IG51bGw7XG5cblx0Ly8gZnVuY3Rpb24gc3RhcnRUb3VjaChlKSB7XG5cdC8vIGluaXRpYWxYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG5cdC8vIGluaXRpYWxZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG5cdC8vIH07XG5cblx0Ly8gZnVuY3Rpb24gbW92ZVRvdWNoKGUpIHtcblx0Ly8gaWYgKGluaXRpYWxYID09PSBudWxsKSB7XG5cdC8vICAgcmV0dXJuO1xuXHQvLyB9XG5cblx0Ly8gaWYgKGluaXRpYWxZID09PSBudWxsKSB7XG5cdC8vICAgcmV0dXJuO1xuXHQvLyB9XG5cblx0Ly8gbGV0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG5cdC8vIGxldCBjdXJyZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuXG5cdC8vIGxldCBkaWZmWCA9IGluaXRpYWxYIC0gY3VycmVudFg7XG5cdC8vIGxldCBkaWZmWSA9IGluaXRpYWxZIC0gY3VycmVudFk7XG5cblx0Ly8gaWYgKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkge1xuXHQvLyAgIC8vIHNsaWRpbmcgaG9yaXpvbnRhbGx5XG5cdC8vICAgaWYgKGRpZmZYID4gMTApIHtcblx0Ly8gICAgIC8vIHN3aXBlZCBsZWZ0XG5cdC8vICAgICBwcmV2QXJyb3dDbGlja2VkKClcblx0Ly8gICB9IGVsc2Uge1xuXHQvLyAgICAgLy8gc3dpcGVkIHJpZ2h0XG5cdC8vICAgICBuZXh0QXJyb3dDbGlja2VkKClcblx0Ly8gICB9ICBcblx0Ly8gfSBlbHNlIHtcblx0Ly8gICAvLyBzbGlkaW5nIHZlcnRpY2FsbHlcblx0Ly8gICBpZiAoZGlmZlkgPiAwKSB7XG5cdC8vICAgICAvLyBzd2lwZWQgdXBcblx0Ly8gICAgIC8vIG5leHRBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICAvLyBzd2lwZWQgZG93blxuXHQvLyAgICAgLy8gcHJldkFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSAgXG5cdC8vIH1cblxuXHQvLyBpbml0aWFsWCA9IG51bGw7XG5cdC8vIGluaXRpYWxZID0gbnVsbDtcblxuXHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIH07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJlZFNsaWRlclxuIiwiY29uc3QgYSA9ICgpPT4ge1xuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYSIsImNvbnN0IGFkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24gPSAoKT0+IHtcblx0JCgnLmItbmF2X190YWItY29udGVudCN0YWItMiAuYi1uYXZfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgbmV3SXRlbSA9ICQodGhpcykuY2xvbmUoKVxuXHRcdG5ld0l0ZW0ucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnZHJvcGRvd24taXRlbScpXG5cdFx0JCgnW2FyaWEtbGFiZWxsZWRieT1cInByb2ZpbGVNZW51c1wiXScpLmFwcGVuZChuZXdJdGVtKVxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duIiwiY29uc3QgY2xvc2VOYXYgPSAoKT0+IHtcblxuXHRcblx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0bmF2LnJlbW92ZUNsYXNzKCdiLW5hdi0tYWN0aXZlJylcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb3NlTmF2IiwiZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWx1ZSwgZGF5cyA9IDEpID0+IHtcbiAgICBsZXQgZXhwaXJlcyA9IFwiXCI7XG4gICAgXG5cdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuXHRleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG59XG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKG5hbWUpID0+IHtcbiAgICBsZXQgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIGxldCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvcihsZXQgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChuYW1lKSA9PiB7ICAgXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSsnPTsgTWF4LUFnZT0tOTk5OTk5OTk7JzsgIFxufVxuXG4vLyBzZXRDb29raWUoJ3Bwa2Nvb2tpZScsJ3Rlc3Rjb29raWUnLDcpO1xuXG4vLyB2YXIgeCA9IGdldENvb2tpZSgncHBrY29va2llJyk7XG4iLCJpbXBvcnQgY2xvc2VOYXYgZnJvbSAnLi9jbG9zZU5hdidcbmNvbnN0IGRvY3VtZW50TGlzdGVuZXIgPSAoY2I9bnVsbCkgPT4ge1xuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIChlKT0+e1xuXHRcdGNvbnN0IF90aGlzID0gJChlLnRhcmdldClcblx0XHRcblxuXHRcdC8vIGlmIG5vdCBzZWxmIGNsaWNrZWRcblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLmhhbWJ1cmdlcicpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmItbmF2JykubGVuZ3RoKXtcblx0XHRcdGNsb3NlTmF2KClcblxuXHRcdH1cblx0XHRpZighX3RoaXMuY2xvc2VzdCgnLnNob3BwaW5nLWNhcmQnKS5sZW5ndGggJiYgIV90aGlzLmNsb3Nlc3QoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5sZW5ndGgpe1xuXHRcdFx0JCgnLnNob3BwaW5nLWNhcmQnKS5yZW1vdmVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS5oaWRlKClcblx0XHR9XG5cdFx0XG5cdH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRMaXN0ZW5lclxuIiwiY29uc3QgbGF6eWxvYWQgPSAoKT0+IHtcblx0dHJ5IHtcblx0XHQkKCdbYi1sYXp5bG9hZF0nKS5lYWNoKGZ1bmN0aW9uKGUpe1xuXHRcdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXG5cdFx0XHRjb25zdCBuZXdTcmMgPSBfdGhpcy5kYXRhKCdzcmMnKVxuXHRcdFx0X3RoaXMucHJvcCgnc3JjJywgbmV3U3JjKVxuXG5cdFx0fSlcblx0fSBjYXRjaChlKXtcblx0XHRjb25zb2xlLmVycm9yKCdiLWRlYnVnJywgZSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBsYXp5bG9hZCIsIid1c2Ugc3RyaWN0J1xuLy8vLy8vIFBPUFVQXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXG4vLyBpbXBvcnQgbWFzayBmcm9tICdqcXVlcnktbWFzay1wbHVnaW4nXG4vLyBpbXBvcnQgQ2xpcGJvYXJkIGZyb20gJ2NsaXBib2FyZCdcblxuLy8gaW1wb3J0ICQgZnJvbSAnLi4vY29tcGlsZWRfanMvanF1ZXJ5LTMuMy4xLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvanF1ZXJ5Lm1hc2snXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3BvcHBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2RhdGVwaWNrZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9zd2lwZXIubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAuYnVuZGxlLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvYm9vdHN0cmFwLXNlbGVjdC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3ZWV0YWxlcnQubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkuZm9ybS5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Zvcm0udmFyaWFibGVzJ1xuXG5cbi8vIGltcG9ydCBUb29sdGlwIGZyb20gJ3Rvb2x0aXAnXG5cbmltcG9ydCBhIGZyb20gJy4vYSdcbmltcG9ydCBuYXYgZnJvbSAnLi9uYXYnXG5pbXBvcnQgd2luZG93U2Nyb2xsTGlzdGVuZXIgZnJvbSAnLi93aW5kb3dTY3JvbGxMaXN0ZW5lcidcbmltcG9ydCBkb2N1bWVudExpc3RlbmVyIGZyb20gJy4vZG9jdW1lbnRMaXN0ZW5lcidcbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInXG5pbXBvcnQgc2hvcHBpbmdDYXJkIGZyb20gJy4vc2hvcHBpbmdDYXJkJ1xuaW1wb3J0IG9wZW5Qb3B1cCBmcm9tICcuL29wZW5Qb3B1cCdcbmltcG9ydCByZXBlYXRJdGVtIGZyb20gJy4vcmVwZWF0SXRlbSdcbmltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuaW1wb3J0IGxhenlsb2FkIGZyb20gJy4vbGF6eWxvYWQnXG5pbXBvcnQgYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93biBmcm9tICcuL2FkZE1lbnVzVG9Qcm9maWxlRHJvcGRvd24nXG5pbXBvcnQgc21zVmVyaWZpY2F0aW9uIGZyb20gJy4vc21zVmVyaWZpY2F0aW9uJ1xuaW1wb3J0IExheWVyZWRTbGlkZXIgZnJvbSAnLi9MYXllcmVkU2xpZGVyJ1xuXG5pbXBvcnQge3NldENvb2tpZSwgZ2V0Q29va2llfSBmcm9tICcuL2Nvb2tpZXMnXG5cblxuXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCdcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnXG4vLyByZXF1aXJlKFwiQGNoZW5mZW5neXVhbi9kYXRlcGlja2VyXCIpXG5cblxuZnVuY3Rpb24gcmVhZHkoZm4pIHtcbiAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xuICAgIGZuKClcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pXG4gIH1cbn1cblxucmVhZHkoZnVuY3Rpb24oKSB7XG5cdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3QtdmlzaWJsZS1maXJzdCcpLnN0eWxlLnZpc2liaWxpdHk9J3Zpc2libGUnXG5cdG5hdigpXG5cdHdpbmRvd1Njcm9sbExpc3RlbmVyKClcblx0ZG9jdW1lbnRMaXN0ZW5lcigpXG5cdC8vIHNsaWRlcihTd2lwZXIpXG5cdHNob3BwaW5nQ2FyZCgpXG5cdG9wZW5Qb3B1cCgpXG5cdHJlcGVhdEl0ZW0oKVxuXHRzbXNWZXJpZmljYXRpb24oKVxuXHRMYXllcmVkU2xpZGVyKClcblxuXG5cdC8vIHNvbHZlIGhhc2ggYnVnIGluIGNocm9tZVxuXHR2YXIgaXNDaHJvbWUgPSAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiBpc0Nocm9tZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG5cdCQoJy5wcmVzc0Nsb3NlJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0cHJlc3NDbG9zZS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aHRtbC5yZW1vdmVDbGFzcygneS1oaWRkZW4nKX0sIDUwMClcblxuXHRcdGNsb3NlTmF2KClcblx0fSlcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJkYXRlcGlja2VyXCJdJykuZGF0ZXBpY2tlcih7IGZvcm1hdDogXCJkZC9tbS95eXl5XCIgfSlcblxuXHQkKCcuanF1ZXJ5TWFzaycpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRjb25zdCB0ID0gJCh0aGlzKVxuXHRcdHQubWFzayh0LmF0dHIoJ2RhdGEtbWFzaycpLCB7XG5cdFx0XHR0cmFuc2xhdGlvbjoge0E6IHtwYXR0ZXJuOiAvQS8sIG9wdGlvbmFsOiBmYWxzZX0sIFo6IHtwYXR0ZXJuOiAvW0FaXS8sIG9wdGlvbmFsOiBmYWxzZX0sIEU6IHtwYXR0ZXJuOiAvRS8sIG9wdGlvbmFsOiB0cnVlfX1cblx0XHR9KVxuXHR9KVxuXG5cdCQoJyNEZWNsYXJhdGlvbnNfbGlua19pZCcpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdCQoJyNEZWNsYXJhdGlvbnNfbmFtZScpLnRyaWdnZXIoJ2ZvY3VzJylcblx0fSlcblxuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJzknXSA9ICcnO1xuXHQvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ2QnXSA9ICdbMC05XSc7XG5cdC8vICQoJy5qcXVlcnlNYXNrJykubWFzaygnMjIzMScpO1xuXG5cdFxuXHQvLyBDbGlwYm9hcmRcblx0Ly8gbmV3IENsaXBib2FyZCgnLmJ0bi1jbGlwYm9hcmQnKTtcblx0dmFyIHRpbWVvdXQ7XG5cdC8vIGNvbnN0IHRpbWVvdXRcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0ZXh0KTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XG4gICAgICAgICAgYXV4LnNlbGVjdCgpO1xuICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XG4gICAgfVxuXG4gICBcblxuXHRcblx0Y29uc3QgdG9vbHRpcCA9ICQoJy50b29sdGlwdGV4dCcpXG5cdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcHknKSlcblxuXHQkKCcuYnRuLWNsaXBib2FyZCcpLmJpbmQoJ2NsaWNrIHRvdWNoc3RhcnQnLCBlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkucGFyZW50KCdidXR0b24nKVxuXHRcdGNvbnN0IHRvb2x0aXAgPSB0YXJnZXQuZmluZCgnLnRvb2x0aXB0ZXh0Jylcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9ICQoIHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykgKVxuXHRcdC8vIENPUFlcblx0XHQvLyBjb25zdCBjb3B5VGV4dCA9IHRhcmdldC5jbG9zZXN0KCcuY29weScpLmZpbmQoJy5jb3B5X192YWx1ZScpLnRleHQoKS50cmltKClcblx0XHRjb25zdCBjb3B5Tm9kZSA9ICQodGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSlcblx0XHRjb3B5Tm9kZS5hZGRDbGFzcygnYW5pbWF0ZWQgaGVhcnRCZWF0Jylcblx0XHRjb25zdCBjb3B5VGV4dCA9IGNvcHlOb2RlLnRleHQoKS50cmltKClcblx0XHRjb25zb2xlLmxvZyhjb3B5VGV4dClcblx0XHRjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdFx0Ly8gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKS50ZXh0KClcblxuXHRcdHRvb2x0aXAudGV4dCh0b29sdGlwLmRhdGEoJ2NvcGllZCcpKVxuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGNvcHlOb2RlLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxuXHRcdH0sIDEwMDApXG5cblx0XHQvLyBjb3B5VG9DbGlwYm9hcmQoY29weVRleHQpXG5cdH0pXG5cdCQoJy5idG4tY2xpcGJvYXJkJykubW91c2VvdXQoZT0+e1xuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlOb2RlID0gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXHRcdFx0XG5cdFx0XHRcblx0XHR9LCAyMDApXG5cdH0pXG5cdCQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoKVxuXG5cblxuXHQvLyB3ZSBhZGQgdGhlIG1vZGFsIHRvIHRoZSBlbmQgb2YgYm9keSBcblx0Y29uc3QgbW9kYWwgPSAkKCcuYWRkLXRvLXRoZS1lbmQtb2YtYm9keScpXG5cdCQoJ2JvZHknKS5hcHBlbmQobW9kYWwuY2xvbmUoKSlcblx0bW9kYWwucmVtb3ZlKClcblxuXG5cdFxuXG5cblx0Ly8gc2Nyb2xsIHRvIG9yZGVyXG5cdCQoXCIuc2Nyb2xsLXRvLW9yZGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcblx0XHRpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5sZW5ndGg+Mil7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSAnLyNvcmRlcnMtaG9sZGVyJ1xuXG5cdFx0fSBlbHNlIHtcblxuXHQgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0ICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiI29yZGVycy1ob2xkZXJcIikub2Zmc2V0KCkudG9wIC0gMTBcblx0ICAgICAgICB9LCAxMDAwKTtcblx0ICAgIH1cbiAgICB9KTtcblxuICAgIC8vc2Nyb2xsIHRvIHRvcFxuICAvLyAgICQoXCIuc2Nyb2xsLXRvLXRvcFwiKS5jbGljayhmdW5jdGlvbiAoZSl7XG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgLy8gICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAvLyAgICAgICB9LCAxMDAwKTtcbiAgLy8gICB9KTtcblxuXG4gLy8gICBcdCQoJy5iLWludm9pY2VfX2lucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdC8vIFx0Y29uc3QgZmlsZXMgPSAkKCcuYi1pbnZvaWNlX19pbnB1dCcpWzBdLmZpbGVzXG5cdC8vIFx0Y29uc3QgZmlsZUluZm8gPSAkKCcuYi1pbnZvaWNlX19maWxlaW5mbycpXG5cdC8vIFx0ZmlsZUluZm8udGV4dCgnJykgXG5cblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKXtcblx0Ly8gXHRcdGNvbnN0IG5hbWUgPSBmaWxlc1tpXS5uYW1lXG5cdC8vIFx0XHRjb25zdCBzaXplID0gZmlsZXNbaV0uc2l6ZS8xMDI0LzEwMjRcblx0Ly8gXHRcdGZpbGVJbmZvLmFwcGVuZCgkKGA8YSBjbGFzcz1cImItaW52b2ljZV9fZmlsZW5hbWUgcC0xIG1yLTFcIj4ke25hbWV9PHNwYW4gY2xhc3M9XCJtbC0yXCIgaHJlZj1cIlwiPiZ0aW1lczs8L3NwYW4+PC9hPmApKVxuXHQvLyBcdH1cblx0ICBcblx0Ly8gfSlcblxuXG5cbiAgICBcbn0pIC8vIHJlYWR5XG5cblxuJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuXG5sZXQgZGVmZXJyZWRQcm9tcHQ7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnN0YWxscHJvbXB0JywgKGUpID0+IHtcbiAgICAvLyBQcmV2ZW50IENocm9tZSA2NyBhbmQgZWFybGllciBmcm9tIGF1dG9tYXRpY2FsbHkgc2hvd2luZyB0aGUgcHJvbXB0XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFN0YXNoIHRoZSBldmVudCBzbyBpdCBjYW4gYmUgdHJpZ2dlcmVkIGxhdGVyLlxuICAgIGRlZmVycmVkUHJvbXB0ID0gZTtcbiAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1hcy1hcHAnKVxuICAgIGJ0bkFkZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGlmKCFnZXRDb29raWUoJ3NhdmUtYXMtYXBwMicpKXtcblx0XHQkKCcjc2F2ZS1hcy1hcHAnKS50b29sdGlwKCdzaG93Jylcblx0XHRzZXRUaW1lb3V0KCgpPT57JCgnI3NhdmUtYXMtYXBwJykudG9vbHRpcCgnaGlkZScpfSwgMTAwMDApXG5cdFx0c2V0Q29va2llKCdzYXZlLWFzLWFwcDInLCAxKVxuXHR9XG5cblxuICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBoaWRlIG91ciB1c2VyIGludGVyZmFjZSB0aGF0IHNob3dzIG91ciBBMkhTIGJ1dHRvblxuICAgICAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gU2hvdyB0aGUgcHJvbXB0XG4gICAgICAgIGRlZmVycmVkUHJvbXB0LnByb21wdCgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgdXNlciB0byByZXNwb25kIHRvIHRoZSBwcm9tcHRcbiAgICAgICAgZGVmZXJyZWRQcm9tcHQudXNlckNob2ljZVxuICAgICAgICAudGhlbigoY2hvaWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKGNob2ljZVJlc3VsdC5vdXRjb21lID09PSAnYWNjZXB0ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBhY2NlcHRlZCB0aGUgQTJIUyBwcm9tcHQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGlzbWlzc2VkIHRoZSBBMkhTIHByb21wdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbi8vIHdpbmRvdyBsb2FkZWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9Pntcblx0XG5cblx0bGF6eWxvYWQoKVxuXHRhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duKClcbn0pICBcblxuXG4iLCJcbmNvbnN0IG5hdiA9ICgpID0+IHtcblx0JCgnLmhhbWJ1cmdlcicpLmNsaWNrKCgpPT57XG5cdFx0Y29uc3QgbmF2ID0gJCgnLmItbmF2Jylcblx0XHRjb25zdCBwcmVzc0Nsb3NlID0gJCgnLnByZXNzQ2xvc2UnKVxuXHRcdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cdFx0c2V0VGltZW91dCgoKT0+bmF2LmFkZENsYXNzKCdiLW5hdi0tYWN0aXZlJyksIDEwMClcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0JCgnLm5hdi10YWItYnV0dG9uJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCBocmVmID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKVxuXHRcdCQoJy5iLW5hdl9fdGFiJykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0dGFyZ2V0LnBhcmVudCgnLmItbmF2X190YWInKS5hZGRDbGFzcygnYi1uYXZfX3RhYi0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ItbmF2X190YWItY29udGVudC0tYWN0aXZlJylcblx0XHQkKCcuYi1uYXZfX3RhYi1jb250ZW50JyArIGhyZWYpLmFkZENsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cblx0fSlcblxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZcbiIsImNvbnN0IG9wZW5Qb3B1cCA9ICgpPT4ge1xuXHQvLyBjb25zdCBibHVycnlCZyA9ICQoJy5ibHVycnktYmFja2dyb3VuZCcpXG5cdGNvbnN0IHBvcHVwID0gJCgnLmItcG9wdXAnKVxuXHRjb25zdCBiTmF2ID0gJCgnLmItbmF2JykgLy8gcmVzcG9uc2l2ZSBpc3N1ZXNcblx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdCQoJy5vcGVuUG9wdXAnKS5jbGljayhlPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQvLyBjb25zdCBvZmZzZXQgPSAkKGUudGFyZ2V0KS5vZmZzZXQoKVxuXHRcdC8vIGNvbnN0IHRvcCA9IG9mZnNldC50b3Bcblx0XHQvLyBjb25zdCBsZWZ0ID0gb2Zmc2V0LmxlZnRcblx0XHRiTmF2LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHQvLyBibHVycnlCZy5hZGRDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0JCgnLnByZXNzQ2xvc2UnKS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblx0XHRodG1sLmFkZENsYXNzKCd5LWhpZGRlbicpXG5cblx0XHQvLyAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMCwgMCwgMCwgLjIpJylcblx0XHRpZigkKGhyZWYpLmxlbmd0aD4wICl7XG5cdFx0XHQkKGhyZWYpLmFkZENsYXNzKCdiLXBvcHVwLS1hY3RpdmUnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3B1cC5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9XG5cblx0XHQvLyBwb3B1cC5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXG5cdH0pXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgJy5iLXBvcHVwLCAuY2xvc2UtYi1wb3B1cCcsIChlKT0+e1xuXHRcdGNvbnNvbGUubG9nKCdwb3B1cCBjbGlja2VkJylcblx0XHRcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KVxuXHRcdGlmKHRhcmdldC5jbG9zZXN0KCcuYi1wb3B1cF9faW5uZXInKS5sZW5ndGg8PTAgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1iLXBvcHVwJykubGVuZ3RoPjApe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQvLyBibHVycnlCZy5yZW1vdmVDbGFzcygnYmx1cnJ5LWJhY2tncm91bmQtLWFjdGl2ZScpXG5cdFx0XHQkKCcuYi1wb3B1cC0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGJOYXYuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0fSwgMzAwKVxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpXG5cdFx0XHQkKCcucHJlc3NDbG9zZS0tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cblx0XHRcdC8vICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKVxuXG5cdFx0fVxuXHR9KVxuXHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3BlblBvcHVwXG5cbiIsImNvbnN0IHJlcGVhdEl0ZW0gPSAoKT0+IHtcblx0Y29uc3QgcmVwZWF0SXRlbSA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRjb25zdCByZXBlYXRJdGVtUGFyZW50ID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApLnBhcmVudCgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1DbG9uZSA9IHJlcGVhdEl0ZW0uY2xvbmUoKVxuXHRjb25zdCByZXBlYXRJdGVtQnV0dG9uID0gJCgnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nKS5lcSgwKVxuXHRpZihyZXBlYXRJdGVtICYmIHJlcGVhdEl0ZW1CdXR0b24pIHtcblx0XHQvLyBjb25zdCBjbG9zZUl0ZW1CdXR0b24gPSAkKCcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJylcblx0XHRyZXBlYXRJdGVtQnV0dG9uLmNsaWNrKChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykucmVtb3ZlKClcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCByZXBlYXRJdGVtXG5cblxuY29uc3QgcmVwZWF0TmV3SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAnW2RhdGEtcmVwZWF0LXRhcmdldD1cIml0ZW1cIl0nXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHJlcGVhdEl0ZW1CdXR0b24sIChlKT0+e1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRyZXBlYXRJdGVtUGFyZW50LmFwcGVuZChyZXBlYXRJdGVtQ2xvbmUuY2xvbmUoKSlcblxuXHRcdH0pXG5cblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtYWRkaXRpb25hbC1pdGVtJywgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmKCQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5sZW5ndGg+MSl7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0XHRcdGNvbnN0IHBhcmVudEl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpXG5cdFx0XHRcdHBhcmVudEl0ZW0uYW5pbWF0ZSh7XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMCdcblx0XHRcdFx0fSwgJ2Zhc3QnLCAnc3dpbmcnLCBcblx0XHRcdFx0XHQoKSA9PiBwYXJlbnRJdGVtLnJlbW92ZSgpXG5cdFx0XHRcdClcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cblxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVwZWF0TmV3SXRlbVxuXG4iLCJcbmNvbnN0IHNob3BwaW5nQ2FyZCA9ICgpPT4ge1xuXHQkKCcuc2hvcHBpbmctY2FyZCcpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxuXHRcdGNvbnN0IHByZXNzQ2xvc2UgPSAkKCcucHJlc3NDbG9zZScpXG5cdFx0Y29uc3QgaHRtbCA9ICQoJ2h0bWwnKVxuXG5cdFx0JCgnLnNob3BwaW5nLWNhcmQnKS50b2dnbGVDbGFzcygnc2hvcHBpbmctY2FyZC0tYWN0aXZlJylcblx0XHQkKCcuaW5wdXRzLXdyYXBwZXItLXNob3BwaW5nJykudG9nZ2xlKClcblx0XHRcblx0ICAgICQoJy5iLW5hdl9fd3JhcHBlcicpLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0ICAgIGh0bWwuYWRkQ2xhc3MoJ3ktaGlkZGVuJylcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAxMDAwKTtcblx0XHRcblx0XHRwcmVzc0Nsb3NlLmFkZENsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdC8vIGNvbnNvbGUubG9nKCQodGhpcykpXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BwaW5nQ2FyZCIsImNvbnN0IHNtc1ZlcmlmaWNhdGlvbiA9ICgpPT4ge1xuXHRjb25zdCBpbnB1dCA9ICQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5lcSgwKVxuXHRjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXhsZW5ndGgnKSlcblx0Y29uc3QgZm9udFNpemUgPSBwYXJzZUludChpbnB1dC5jc3MoJ2ZvbnRTaXplJykpXG5cdGNvbnN0IGRhc2hlcyA9ICQoJy5iLXZlcmlmaWNhdGlvbl9fZGFzaGVzJylcblx0Y29uc3QgdW5kZXJsaW5lV2lkdGggPSAzMFxuXHRjb25zdCB1bmRlcmxpbmVNYXJnaW5SaWdodCA9IDIyXG5cdGNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gM1xuXG5cdC8vIGNvbnNvbGUubG9nKCBtYXhMZW5ndGgsIGZvbnRTaXplKVxuXHRcblx0ZGFzaGVzLmFwcGVuZCgnPHNwYW4+PC9zcGFuPicucmVwZWF0KG1heExlbmd0aCkpXG5cdFx0LnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdCQoJy5iLXZlcmlmaWNhdGlvbl9faW5wdXQnKS5jc3Moe1xuXHRcdFx0ICB3aWR0aDogKHVuZGVybGluZVdpZHRoICogKG1heExlbmd0aCArIDEpICsgdW5kZXJsaW5lTWFyZ2luUmlnaHQgKiAobWF4TGVuZ3RoIC0gMSkpICsgaG9yaXpvbnRhbFBhZGRpbmcgKiAyLFxuXG5cdFx0XHR9KVxuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uJykuY3NzKHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnXG5cdFx0XHR9KVxuXHRcdFx0aW5wdXQuZm9jdXMoKVxuXHRcdH0pXG5cdFxuXHRpbnB1dC5rZXl1cCgoKT0+e1xuXHRcdGlmKGlucHV0LnZhbCgpLmxlbmd0aD49bWF4TGVuZ3RoKSB7XG5cdFx0XHQkKCcudmVyaWZpY2F0aW9uQnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuXHRcdH1cblx0fSlcblx0XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzbXNWZXJpZmljYXRpb24iLCJjb25zdCB3aW5kb3dTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcblx0Ly8gc2Nyb2xsIGxpc3RlbmVyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMFxuXHQkKHdpbmRvdykuc2Nyb2xsKCgpPT57XG5cdFx0XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG5cdFx0Y29uc3QgbmF2V3JhcHBlciA9ICQoJy5iLW5hdl9fd3JhcHBlcicpXG5cdFx0Y29uc3QgbmF2TWFpbiA9ICQoJy5iLW5hdl9fbWFpbicpXG5cdFx0Y29uc3QgdG9wTmF2ID0gJCgnLmItbmF2X190b3AnKVxuXHRcdGNvbnN0IHNjcm9sbFRvVG9wQnV0dG9uID0gJCgnLnNjcm9sbC10by10b3AnKVxuXG5cdFx0Ly8gaWYoc2Nyb2xsVG9wPjcwKSB7XG5cdFx0Ly8gXHR0b3BOYXYuYWRkQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLnJlbW92ZUNsYXNzKCdweS0zJylcblx0XHQvLyBcdGlmKHNjcm9sbFRvcD5sYXN0U2Nyb2xsVG9wKXtcblx0XHQvLyBcdFx0bmF2V3JhcHBlci5yZW1vdmVDbGFzcygnYi1uYXZfX3dyYXBwZXItLWFjdGl2ZScpXG5cdFx0XHRcdFxuXG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLmFkZENsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHQvLyBcdH1cblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0dG9wTmF2LnJlbW92ZUNsYXNzKCdiLW5hdl9fdG9wLS1oaWRkZW4nKVxuXHRcdC8vIFx0bmF2TWFpbi5hZGRDbGFzcygncHktMycpXG5cdFx0XHRcblx0XHQvLyB9XG5cblx0XHRpZihzY3JvbGxUb3A+MTAwKSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2Nyb2xsVG9Ub3BCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbC10by10b3AtLWFjdGl2ZScpXG5cdFx0fVxuXHRcdFxuXG5cdFx0bGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuXHR9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTY3JvbGxMaXN0ZW5lclxuIl19
