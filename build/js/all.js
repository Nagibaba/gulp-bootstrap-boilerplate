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

},{"./cookies":7}],3:[function(require,module,exports){
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
		global.RandomDeer = mod.exports;
	}
})(undefined, function (_cookies) {
	'use strict';

	var bell = $('#sound');
	var bellIcon = bell.find('.fa');
	var bellRing = new Audio('/sounds/sleigh_bell_sms.mp3');
	var jingle = new Audio('/sounds/jingle-bells-sms.mp3');

	if (!(0, _cookies.getCookie)('mute') && !(0, _cookies.getCookie)('jinglePlayed')) {

		var promise = jingle.play();
		if (promise !== undefined) {
			promise.then(function (_) {
				// Autoplay started!
				(0, _cookies.setCookie)('jinglePlayed', 1, 1 / 700);
			}).catch(function (error) {
				// Autoplay was prevented.
				// Show a "Play" button so that user can start playback.
				console.log('autoplay error');
			});
		}
	}

	if ((0, _cookies.getCookie)('mute')) {

		bellIcon.addClass('fa-volume-off');
	} else {
		bellIcon.addClass('fa-volume-up');
	}

	if (!(0, _cookies.getCookie)('soundTooltipDisplayed')) {
		bell.tooltip('show');
		setTimeout(function () {
			bell.tooltip('hide');
		}, 10000);
		(0, _cookies.setCookie)('soundTooltipDisplayed', 1);
	}

	$('button').click(function () {
		var timeout = 2000;
		var d = $('<img src="/img/deer.svg">');

		if (!(0, _cookies.getCookie)('mute')) {

			bellRing.play();
		}

		d.css({ position: 'fixed', left: 0, top: Math.random() * 100 + 'vh', width: '70px', zIndex: 2000 });
		$('body').append(d);
		d.animate({ left: '100vw', top: Math.random() * 100 + 'vh' }, timeout);
		setTimeout(function () {
			return d.remove();
		}, timeout);
	});

	bell.click(function (e) {
		e.preventDefault();

		if ((0, _cookies.getCookie)('mute')) {
			(0, _cookies.removeCookie)('mute');
		} else {
			(0, _cookies.setCookie)('mute', 'yes', 7);
		}

		bellIcon.toggleClass('fa-volume-up');
		bellIcon.toggleClass('fa-volume-off');
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
		define(['./a', './nav', './windowScrollListener', './documentListener', './shoppingCard', './openPopup', './repeatItem', './closeNav', './lazyload', './addMenusToProfileDropdown', './smsVerification', './LayeredSlider', './RandomDeer', './PWA', './cookies'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('./a'), require('./nav'), require('./windowScrollListener'), require('./documentListener'), require('./shoppingCard'), require('./openPopup'), require('./repeatItem'), require('./closeNav'), require('./lazyload'), require('./addMenusToProfileDropdown'), require('./smsVerification'), require('./LayeredSlider'), require('./RandomDeer'), require('./PWA'), require('./cookies'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.a, global.nav, global.windowScrollListener, global.documentListener, global.shoppingCard, global.openPopup, global.repeatItem, global.closeNav, global.lazyload, global.addMenusToProfileDropdown, global.smsVerification, global.LayeredSlider, global.RandomDeer, global.PWA, global.cookies);
		global.main = mod.exports;
	}
})(undefined, function (_a, _nav, _windowScrollListener, _documentListener, _shoppingCard, _openPopup, _repeatItem, _closeNav, _lazyload, _addMenusToProfileDropdown, _smsVerification, _LayeredSlider, _RandomDeer, _PWA, _cookies) {
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

	var _RandomDeer2 = _interopRequireDefault(_RandomDeer);

	var _PWA2 = _interopRequireDefault(_PWA);

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

	// window loaded
	window.addEventListener('load', function () {

		(0, _lazyload2.default)();
		(0, _addMenusToProfileDropdown2.default)();
	});
});

},{"./LayeredSlider":1,"./PWA":2,"./RandomDeer":3,"./a":4,"./addMenusToProfileDropdown":5,"./closeNav":6,"./cookies":7,"./documentListener":8,"./lazyload":9,"./nav":11,"./openPopup":12,"./repeatItem":13,"./shoppingCard":14,"./smsVerification":15,"./windowScrollListener":16}],11:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi9MYXllcmVkU2xpZGVyLmpzIiwic3JjL2pzL21haW4vUFdBLmpzIiwic3JjL2pzL21haW4vUmFuZG9tRGVlci5qcyIsInNyYy9qcy9tYWluL2EuanMiLCJzcmMvanMvbWFpbi9hZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duLmpzIiwic3JjL2pzL21haW4vY2xvc2VOYXYuanMiLCJzcmMvanMvbWFpbi9jb29raWVzLmpzIiwic3JjL2pzL21haW4vZG9jdW1lbnRMaXN0ZW5lci5qcyIsInNyYy9qcy9tYWluL2xhenlsb2FkLmpzIiwic3JjL2pzL21haW4vbWFpbi5qcyIsInNyYy9qcy9tYWluL25hdi5qcyIsInNyYy9qcy9tYWluL29wZW5Qb3B1cC5qcyIsInNyYy9qcy9tYWluL3JlcGVhdEl0ZW0uanMiLCJzcmMvanMvbWFpbi9zaG9wcGluZ0NhcmQuanMiLCJzcmMvanMvbWFpbi9zbXNWZXJpZmljYXRpb24uanMiLCJzcmMvanMvbWFpbi93aW5kb3dTY3JvbGxMaXN0ZW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsS0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBSzs7QUFFMUIsTUFBTSxnQkFBZ0IsRUFBdEIsaUJBQXNCLENBQXRCO0FBQ0EsTUFBTSxXQUFXLEVBQUEsc0JBQUEsRUFBQSxLQUFBLEdBQUEsV0FBQSxDQUFqQiw2QkFBaUIsQ0FBakI7QUFDQSxNQUFNLGFBQWEsRUFBbkIsNkJBQW1CLENBQW5CO0FBQ0EsTUFBTSxPQUFPLEVBQWIsdUJBQWEsQ0FBYjtBQUNBLE1BQU0sUUFBUSxFQUFkLHdCQUFjLENBQWQ7QUFDQSxNQUFNLFlBQVksRUFBbEIsOEJBQWtCLENBQWxCO0FBQ0EsTUFBTSxZQUFZLEVBQWxCLDhCQUFrQixDQUFsQjtBQUNBLE1BQU0sUUFBUSxLQUFkLE1BQUE7QUFDQSxNQUFJ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O0FBQ0EsT0FBTSxhQUFhLEVBQW5CLGlCQUFtQixDQUFuQjtBQUNBLE9BQU0sVUFBVSxFQUFoQixjQUFnQixDQUFoQjtBQUNBLE9BQU0sU0FBUyxFQUFmLGFBQWUsQ0FBZjtBQUNBLE9BQU0sb0JBQW9CLEVBQTFCLGdCQUEwQixDQUExQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBRyxZQUFILEdBQUEsRUFBa0I7QUFDakIsc0JBQUEsUUFBQSxDQUFBLHVCQUFBO0FBREQsSUFBQSxNQUVPO0FBQ04sc0JBQUEsV0FBQSxDQUFBLHVCQUFBO0FBQ0E7O0FBR0QsbUJBQUEsU0FBQTtBQS9CRCxHQUFBO0FBSEQsRUFBQTs7bUJBc0NBLG9CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IExheWVyZWRTbGlkZXIgPSAoKT0+IHtcblxuXHRjb25zdCBsYXllcmVkU2xpZGVyID0gJCgnLmxheWVyZWQtc2xpZGVyJylcblx0Y29uc3QgZG90Q2xvbmUgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdCcpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdGNvbnN0IGluZGljYXRvcnMgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2luZGljYXRvcnMnKVxuXHRjb25zdCBpdGVtID0gJCgnLmxheWVyZWQtc2xpZGVyX19pdGVtJylcblx0Y29uc3QgYXJyb3cgPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2Fycm93Jylcblx0Y29uc3QgbmV4dEFycm93ID0gJCgnLmxheWVyZWQtc2xpZGVyX19hcnJvdy0tbmV4dCcpXG5cdGNvbnN0IHByZXZBcnJvdyA9ICQoJy5sYXllcmVkLXNsaWRlcl9fYXJyb3ctLXByZXYnKVxuXHRjb25zdCBjb3VudCA9IGl0ZW0ubGVuZ3RoXG5cdGxldCBpID0gMVxuXHR3aGlsZShpIDwgY291bnQpe1xuXHRcdGluZGljYXRvcnMuYXBwZW5kKGRvdENsb25lLmNsb25lKCkpXG5cdFx0aSsrXG5cdH1cblxuXG5cblx0Y29uc3QgZG90ID0gJCgnLmxheWVyZWQtc2xpZGVyX19kb3QnKVxuXHRkb3QuY2xpY2soZnVuY3Rpb24oKXtcblx0ICBjb25zdCBpbmRleCA9ICQodGhpcykuaW5kZXgoKVxuXHQgIFxuXHQgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19pdGVtLS1hY3RpdmUnKVxuXHQgIGl0ZW0uZXEoaW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblx0ICBcblx0ICBkb3QucmVtb3ZlQ2xhc3MoJ2xheWVyZWQtc2xpZGVyX19kb3QtLWFjdGl2ZScpXG5cdCAgZG90LmVxKGluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0ICBcblx0ICBzbGlkZXJDaGFuZ2VkKGluZGV4KVxuXHR9KVxuXG5cdGNvbnN0IG5leHRBcnJvd0NsaWNrZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHRcdGNvbnN0IG5leHRJbmRleCA9IGluZGV4PGNvdW50LTEgPyBpbmRleCsxIDogMFxuXG5cdFx0aXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdFx0aXRlbS5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblxuXHRcdGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRkb3QuZXEobmV4dEluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRzbGlkZXJDaGFuZ2VkKG5leHRJbmRleClcblx0fVxuXHRjb25zdCBwcmV2QXJyb3dDbGlja2VkID0gKCkgPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdFx0Y29uc3QgaW5kZXggPSAkKCcubGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJykuaW5kZXgoKVxuXHRcdGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gMVxuXG5cdFx0aXRlbS5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2l0ZW0tLWFjdGl2ZScpXG5cdFx0aXRlbS5lcShwcmV2SW5kZXgpLmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9faXRlbS0tYWN0aXZlJylcblxuXHRcdGRvdC5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRkb3QuZXEocHJldkluZGV4KS5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2RvdC0tYWN0aXZlJylcblx0XHRzbGlkZXJDaGFuZ2VkKHByZXZJbmRleClcblx0fVxuXHRuZXh0QXJyb3cuY2xpY2soZnVuY3Rpb24oKXtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKVxuXHRcdG5leHRBcnJvd0NsaWNrZWQoKVxuXHR9KVxuXG5cdHByZXZBcnJvdy5jbGljayhmdW5jdGlvbigpe1xuXHRcdHByZXZBcnJvd0NsaWNrZWQoKVxuXHR9KVxuXG5cdGNvbnN0IHNsaWRlckNoYW5nZWQgPSAobmV3SW5kZXgpID0+IHtcblx0ICBhcnJvdy5yZW1vdmVDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIGlmKG5ld0luZGV4KzE9PWNvdW50KSB7IC8vIGxhc3Rcblx0ICAgIC8vIG5leHRBcnJvdy5hZGRDbGFzcygnbGF5ZXJlZC1zbGlkZXJfX2Fycm93LS1oaWRkZW4nKVxuXHQgIH0gZWxzZSBpZihuZXdJbmRleD09MCkge1xuXHQgICAgLy8gcHJldkFycm93LmFkZENsYXNzKCdsYXllcmVkLXNsaWRlcl9fYXJyb3ctLWhpZGRlbicpXG5cdCAgfSBcblx0fVxuXG5cdC8vIGludGVydmFsXG5cblx0XG5cdGxldCBpbnRlcnZhbCA9IG51bGxcblxuXHRjb25zdCBzdGFydEludGVydmFsID0gKCkgPT4ge1xuXHRcdGludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dEFycm93Q2xpY2tlZCwgNTAwMClcblx0fVxuXHRzdGFydEludGVydmFsKClcblxuXHRsYXllcmVkU2xpZGVyLmhvdmVyKCgpPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG5cdH0sICgpID0+IHN0YXJ0SW50ZXJ2YWwoKSApXG5cblxuXG5cdC8vIGxheWVyZWRTbGlkZXIub24oXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0VG91Y2gpO1xuXHQvLyBsYXllcmVkU2xpZGVyLm9uKFwidG91Y2htb3ZlXCIsIG1vdmVUb3VjaCk7XG5cblx0Ly8gLy8gU3dpcGUgVXAgLyBEb3duIC8gTGVmdCAvIFJpZ2h0XG5cdC8vIGxldCBpbml0aWFsWCA9IG51bGw7XG5cdC8vIGxldCBpbml0aWFsWSA9IG51bGw7XG5cblx0Ly8gZnVuY3Rpb24gc3RhcnRUb3VjaChlKSB7XG5cdC8vIGluaXRpYWxYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG5cdC8vIGluaXRpYWxZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG5cdC8vIH07XG5cblx0Ly8gZnVuY3Rpb24gbW92ZVRvdWNoKGUpIHtcblx0Ly8gaWYgKGluaXRpYWxYID09PSBudWxsKSB7XG5cdC8vICAgcmV0dXJuO1xuXHQvLyB9XG5cblx0Ly8gaWYgKGluaXRpYWxZID09PSBudWxsKSB7XG5cdC8vICAgcmV0dXJuO1xuXHQvLyB9XG5cblx0Ly8gbGV0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG5cdC8vIGxldCBjdXJyZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuXG5cdC8vIGxldCBkaWZmWCA9IGluaXRpYWxYIC0gY3VycmVudFg7XG5cdC8vIGxldCBkaWZmWSA9IGluaXRpYWxZIC0gY3VycmVudFk7XG5cblx0Ly8gaWYgKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkge1xuXHQvLyAgIC8vIHNsaWRpbmcgaG9yaXpvbnRhbGx5XG5cdC8vICAgaWYgKGRpZmZYID4gMTApIHtcblx0Ly8gICAgIC8vIHN3aXBlZCBsZWZ0XG5cdC8vICAgICBwcmV2QXJyb3dDbGlja2VkKClcblx0Ly8gICB9IGVsc2Uge1xuXHQvLyAgICAgLy8gc3dpcGVkIHJpZ2h0XG5cdC8vICAgICBuZXh0QXJyb3dDbGlja2VkKClcblx0Ly8gICB9ICBcblx0Ly8gfSBlbHNlIHtcblx0Ly8gICAvLyBzbGlkaW5nIHZlcnRpY2FsbHlcblx0Ly8gICBpZiAoZGlmZlkgPiAwKSB7XG5cdC8vICAgICAvLyBzd2lwZWQgdXBcblx0Ly8gICAgIC8vIG5leHRBcnJvd0NsaWNrZWQoKVxuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICAvLyBzd2lwZWQgZG93blxuXHQvLyAgICAgLy8gcHJldkFycm93Q2xpY2tlZCgpXG5cdC8vICAgfSAgXG5cdC8vIH1cblxuXHQvLyBpbml0aWFsWCA9IG51bGw7XG5cdC8vIGluaXRpYWxZID0gbnVsbDtcblxuXHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIH07XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJlZFNsaWRlclxuIiwiaW1wb3J0IHtzZXRDb29raWUsIGdldENvb2tpZSwgcmVtb3ZlQ29va2llfSBmcm9tICcuL2Nvb2tpZXMnXG5cbmxldCBkZWZlcnJlZFByb21wdDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWluc3RhbGxwcm9tcHQnLCAoZSkgPT4ge1xuICAgIC8vIFByZXZlbnQgQ2hyb21lIDY3IGFuZCBlYXJsaWVyIGZyb20gYXV0b21hdGljYWxseSBzaG93aW5nIHRoZSBwcm9tcHRcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU3Rhc2ggdGhlIGV2ZW50IHNvIGl0IGNhbiBiZSB0cmlnZ2VyZWQgbGF0ZXIuXG4gICAgZGVmZXJyZWRQcm9tcHQgPSBlO1xuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWFzLWFwcCcpXG4gICAgYnRuQWRkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgaWYoIWdldENvb2tpZSgnc2F2ZS1hcy1hcHAnKSl7XG4gICAgICAgICQoJyNzYXZlLWFzLWFwcCcpLnRvb2x0aXAoJ3Nob3cnKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57JCgnI3NhdmUtYXMtYXBwJykudG9vbHRpcCgnaGlkZScpfSwgMTAwMDApXG4gICAgICAgIHNldENvb2tpZSgnc2F2ZS1hcy1hcHAnLCAxKVxuICAgIH1cblxuICAgIGlmKGJ0bkFkZCl7XG4gICAgICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIC8vIGhpZGUgb3VyIHVzZXIgaW50ZXJmYWNlIHRoYXQgc2hvd3Mgb3VyIEEySFMgYnV0dG9uXG4gICAgICAgICAgICBidG5BZGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgcHJvbXB0JylcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHByb21wdFxuICAgICAgICAgICAgZGVmZXJyZWRQcm9tcHQucHJvbXB0KClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgY29uc29sZS5sb2coYC0tLS0+ICR7ZXJyb3J9YCkgfSlcblxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHVzZXIgdG8gcmVzcG9uZCB0byB0aGUgcHJvbXB0XG4gICAgICAgICAgICBkZWZlcnJlZFByb21wdC51c2VyQ2hvaWNlXG4gICAgICAgICAgICAudGhlbigoY2hvaWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjaG9pY2VSZXN1bHQub3V0Y29tZSA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGFjY2VwdGVkIHRoZSBBMkhTIHByb21wdCcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRpc21pc3NlZCB0aGUgQTJIUyBwcm9tcHQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZlcnJlZFByb21wdCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiaW1wb3J0IHtzZXRDb29raWUsIGdldENvb2tpZSwgcmVtb3ZlQ29va2llfSBmcm9tICcuL2Nvb2tpZXMnXG5cbmNvbnN0IGJlbGwgPSAkKCcjc291bmQnKVxuY29uc3QgYmVsbEljb24gPSBiZWxsLmZpbmQoJy5mYScpXG5jb25zdCBiZWxsUmluZyA9IG5ldyBBdWRpbygnL3NvdW5kcy9zbGVpZ2hfYmVsbF9zbXMubXAzJylcbmNvbnN0IGppbmdsZSA9IG5ldyBBdWRpbygnL3NvdW5kcy9qaW5nbGUtYmVsbHMtc21zLm1wMycpXG5cblxuaWYoIWdldENvb2tpZSgnbXV0ZScpICYmICFnZXRDb29raWUoJ2ppbmdsZVBsYXllZCcpKXtcblxuXHRjb25zdCBwcm9taXNlID0gamluZ2xlLnBsYXkoKVxuXHRpZiAocHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG5cdCAgcHJvbWlzZS50aGVuKF8gPT4ge1xuXHQgICAgLy8gQXV0b3BsYXkgc3RhcnRlZCFcblx0ICAgIHNldENvb2tpZSgnamluZ2xlUGxheWVkJywgMSwgMS83MDApXG5cdCAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuXHQgICAgLy8gQXV0b3BsYXkgd2FzIHByZXZlbnRlZC5cblx0ICAgIC8vIFNob3cgYSBcIlBsYXlcIiBidXR0b24gc28gdGhhdCB1c2VyIGNhbiBzdGFydCBwbGF5YmFjay5cblx0ICAgIGNvbnNvbGUubG9nKCdhdXRvcGxheSBlcnJvcicpXG5cdCAgfSk7XG5cdH1cblx0XG59XG5cbmlmKGdldENvb2tpZSgnbXV0ZScpKXtcblxuXHRiZWxsSWNvbi5hZGRDbGFzcygnZmEtdm9sdW1lLW9mZicpXG59IGVsc2Uge1xuXHRiZWxsSWNvbi5hZGRDbGFzcygnZmEtdm9sdW1lLXVwJylcbn1cblxuaWYoIWdldENvb2tpZSgnc291bmRUb29sdGlwRGlzcGxheWVkJykpe1xuICAgIGJlbGwudG9vbHRpcCgnc2hvdycpXG4gICAgc2V0VGltZW91dCgoKT0+e2JlbGwudG9vbHRpcCgnaGlkZScpfSwgMTAwMDApXG4gICAgc2V0Q29va2llKCdzb3VuZFRvb2x0aXBEaXNwbGF5ZWQnLCAxKVxufVxuXG5cbiQoJ2J1dHRvbicpLmNsaWNrKCgpPT57XG5cdGNvbnN0IHRpbWVvdXQgPSAyMDAwXG5cdGNvbnN0IGQgPSAkKCc8aW1nIHNyYz1cIi9pbWcvZGVlci5zdmdcIj4nKVxuXG5cdGlmKCFnZXRDb29raWUoJ211dGUnKSl7XG5cblx0XHRiZWxsUmluZy5wbGF5KClcblx0fVxuXHRcblx0ZC5jc3Moe3Bvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCB0b3A6IE1hdGgucmFuZG9tKCkgKiAxMDAgKyAndmgnLCB3aWR0aDogJzcwcHgnLCB6SW5kZXg6IDIwMDB9KVxuXHQkKCdib2R5JykuYXBwZW5kKGQpXG5cdGQuYW5pbWF0ZSh7bGVmdDogJzEwMHZ3JywgdG9wOiBNYXRoLnJhbmRvbSgpICogMTAwICsgJ3ZoJ30sIHRpbWVvdXQpXG5cdHNldFRpbWVvdXQoKCk9PmQucmVtb3ZlKCksIHRpbWVvdXQpXG5cdFxufSlcblxuXG5iZWxsLmNsaWNrKGU9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICBpZihnZXRDb29raWUoJ211dGUnKSl7XG4gICAgXHRyZW1vdmVDb29raWUoJ211dGUnKVxuXG4gICAgfSBlbHNlIHtcbiAgICBcdHNldENvb2tpZSgnbXV0ZScsICd5ZXMnLCA3KVxuXG4gICAgfVxuXG4gICAgYmVsbEljb24udG9nZ2xlQ2xhc3MoJ2ZhLXZvbHVtZS11cCcpXG4gICAgYmVsbEljb24udG9nZ2xlQ2xhc3MoJ2ZhLXZvbHVtZS1vZmYnKVxufSlcbiIsImNvbnN0IGEgPSAoKT0+IHtcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGEiLCJjb25zdCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duID0gKCk9PiB7XG5cdCQoJy5iLW5hdl9fdGFiLWNvbnRlbnQjdGFiLTIgLmItbmF2X19pdGVtJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IG5ld0l0ZW0gPSAkKHRoaXMpLmNsb25lKClcblx0XHRuZXdJdGVtLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0nKVxuXHRcdCQoJ1thcmlhLWxhYmVsbGVkYnk9XCJwcm9maWxlTWVudXNcIl0nKS5hcHBlbmQobmV3SXRlbSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93biIsImNvbnN0IGNsb3NlTmF2ID0gKCk9PiB7XG5cblx0XG5cdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdG5hdi5yZW1vdmVDbGFzcygnYi1uYXYtLWFjdGl2ZScpXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZU5hdiIsImV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMgPSAxKSA9PiB7XG4gICAgbGV0IGV4cGlyZXMgPSBcIlwiO1xuICAgIFxuXHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKTtcblx0ZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIFxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSAgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xufVxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICBsZXQgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IobGV0IGk9MDtpIDwgY2EubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSAobmFtZSkgPT4geyAgIFxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUrJz07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7IHBhdGg9LzsnOyAgXG59XG5cbi8vIHNldENvb2tpZSgncHBrY29va2llJywndGVzdGNvb2tpZScsNyk7XG5cbi8vIHZhciB4ID0gZ2V0Q29va2llKCdwcGtjb29raWUnKTtcbiIsImltcG9ydCBjbG9zZU5hdiBmcm9tICcuL2Nsb3NlTmF2J1xuY29uc3QgZG9jdW1lbnRMaXN0ZW5lciA9IChjYj1udWxsKSA9PiB7XG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgKGUpPT57XG5cdFx0Y29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KVxuXHRcdFxuXG5cdFx0Ly8gaWYgbm90IHNlbGYgY2xpY2tlZFxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuaGFtYnVyZ2VyJykubGVuZ3RoICYmICFfdGhpcy5jbG9zZXN0KCcuYi1uYXYnKS5sZW5ndGgpe1xuXHRcdFx0Y2xvc2VOYXYoKVxuXG5cdFx0fVxuXHRcdGlmKCFfdGhpcy5jbG9zZXN0KCcuc2hvcHBpbmctY2FyZCcpLmxlbmd0aCAmJiAhX3RoaXMuY2xvc2VzdCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmxlbmd0aCl7XG5cdFx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdFx0JCgnLmlucHV0cy13cmFwcGVyLS1zaG9wcGluZycpLmhpZGUoKVxuXHRcdH1cblx0XHRcblx0fSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudExpc3RlbmVyXG4iLCJjb25zdCBsYXp5bG9hZCA9ICgpPT4ge1xuXHR0cnkge1xuXHRcdCQoJ1tiLWxhenlsb2FkXScpLmVhY2goZnVuY3Rpb24oZSl7XG5cdFx0XHRjb25zdCBfdGhpcyA9ICQodGhpcylcblx0XHRcdGNvbnN0IG5ld1NyYyA9IF90aGlzLmRhdGEoJ3NyYycpXG5cdFx0XHRfdGhpcy5wcm9wKCdzcmMnLCBuZXdTcmMpXG5cblx0XHR9KVxuXHR9IGNhdGNoKGUpe1xuXHRcdGNvbnNvbGUuZXJyb3IoJ2ItZGVidWcnLCBlKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhenlsb2FkIiwiJ3VzZSBzdHJpY3QnXG4vLy8vLy8gUE9QVVBcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbi8vIGltcG9ydCBtYXNrIGZyb20gJ2pxdWVyeS1tYXNrLXBsdWdpbidcbi8vIGltcG9ydCBDbGlwYm9hcmQgZnJvbSAnY2xpcGJvYXJkJ1xuXG4vLyBpbXBvcnQgJCBmcm9tICcuLi9jb21waWxlZF9qcy9qcXVlcnktMy4zLjEubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9qcXVlcnkubWFzaydcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvcG9wcGVyLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZGF0ZXBpY2tlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL3N3aXBlci5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2Jvb3RzdHJhcC5idW5kbGUubWluJ1xuLy8gaW1wb3J0ICcuLi9jb21waWxlZF9qcy9ib290c3RyYXAtc2VsZWN0Lm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvc3dlZXRhbGVydC5taW4nXG4vLyBpbXBvcnQgJy4uL2NvbXBpbGVkX2pzL2pxdWVyeS5mb3JtLm1pbidcbi8vIGltcG9ydCAnLi4vY29tcGlsZWRfanMvZm9ybS52YXJpYWJsZXMnXG5cblxuLy8gaW1wb3J0IFRvb2x0aXAgZnJvbSAndG9vbHRpcCdcblxuaW1wb3J0IGEgZnJvbSAnLi9hJ1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdidcbmltcG9ydCB3aW5kb3dTY3JvbGxMaXN0ZW5lciBmcm9tICcuL3dpbmRvd1Njcm9sbExpc3RlbmVyJ1xuaW1wb3J0IGRvY3VtZW50TGlzdGVuZXIgZnJvbSAnLi9kb2N1bWVudExpc3RlbmVyJ1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcidcbmltcG9ydCBzaG9wcGluZ0NhcmQgZnJvbSAnLi9zaG9wcGluZ0NhcmQnXG5pbXBvcnQgb3BlblBvcHVwIGZyb20gJy4vb3BlblBvcHVwJ1xuaW1wb3J0IHJlcGVhdEl0ZW0gZnJvbSAnLi9yZXBlYXRJdGVtJ1xuaW1wb3J0IGNsb3NlTmF2IGZyb20gJy4vY2xvc2VOYXYnXG5pbXBvcnQgbGF6eWxvYWQgZnJvbSAnLi9sYXp5bG9hZCdcbmltcG9ydCBhZGRNZW51c1RvUHJvZmlsZURyb3Bkb3duIGZyb20gJy4vYWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93bidcbmltcG9ydCBzbXNWZXJpZmljYXRpb24gZnJvbSAnLi9zbXNWZXJpZmljYXRpb24nXG5pbXBvcnQgTGF5ZXJlZFNsaWRlciBmcm9tICcuL0xheWVyZWRTbGlkZXInXG5pbXBvcnQgUmFuZG9tRGVlciBmcm9tICcuL1JhbmRvbURlZXInXG5pbXBvcnQgUFdBIGZyb20gJy4vUFdBJ1xuXG5cbmltcG9ydCB7c2V0Q29va2llLCBnZXRDb29raWV9IGZyb20gJy4vY29va2llcydcblxuXG5cbi8vIGltcG9ydCAnYm9vdHN0cmFwJ1xuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSdcbi8vIHJlcXVpcmUoXCJAY2hlbmZlbmd5dWFuL2RhdGVwaWNrZXJcIilcblxuXG5mdW5jdGlvbiByZWFkeShmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbilcbiAgfVxufVxuXG5yZWFkeShmdW5jdGlvbigpIHtcblx0Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC12aXNpYmxlLWZpcnN0Jykuc3R5bGUudmlzaWJpbGl0eT0ndmlzaWJsZSdcblx0bmF2KClcblx0d2luZG93U2Nyb2xsTGlzdGVuZXIoKVxuXHRkb2N1bWVudExpc3RlbmVyKClcblx0Ly8gc2xpZGVyKFN3aXBlcilcblx0c2hvcHBpbmdDYXJkKClcblx0b3BlblBvcHVwKClcblx0cmVwZWF0SXRlbSgpXG5cdHNtc1ZlcmlmaWNhdGlvbigpXG5cdExheWVyZWRTbGlkZXIoKVxuXG5cblx0Ly8gc29sdmUgaGFzaCBidWcgaW4gY2hyb21lXG5cdHZhciBpc0Nocm9tZSA9IC9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0dvb2dsZSBJbmMvLnRlc3QobmF2aWdhdG9yLnZlbmRvcik7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIGlzQ2hyb21lKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cblx0JCgnLnByZXNzQ2xvc2UnKS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRwcmVzc0Nsb3NlLnJlbW92ZUNsYXNzKCdwcmVzc0Nsb3NlLS1hY3RpdmUnKVxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNsYXNzKCd5LWhpZGRlbicpfSwgNTAwKVxuXG5cdFx0Y2xvc2VOYXYoKVxuXHR9KVxuXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cImRhdGVwaWNrZXJcIl0nKS5kYXRlcGlja2VyKHsgZm9ybWF0OiBcImRkL21tL3l5eXlcIiB9KVxuXG5cdCQoJy5qcXVlcnlNYXNrJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHQgPSAkKHRoaXMpXG5cdFx0dC5tYXNrKHQuYXR0cignZGF0YS1tYXNrJyksIHtcblx0XHRcdHRyYW5zbGF0aW9uOiB7QToge3BhdHRlcm46IC9BLywgb3B0aW9uYWw6IGZhbHNlfSwgWjoge3BhdHRlcm46IC9bQVpdLywgb3B0aW9uYWw6IGZhbHNlfSwgRToge3BhdHRlcm46IC9FLywgb3B0aW9uYWw6IHRydWV9fVxuXHRcdH0pXG5cdH0pXG5cblx0JCgnI0RlY2xhcmF0aW9uc19saW5rX2lkJykuY2hhbmdlKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI0RlY2xhcmF0aW9uc19uYW1lJykudHJpZ2dlcignZm9jdXMnKVxuXHR9KVxuXG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snOSddID0gJyc7XG5cdC8vICQubWFzay5kZWZpbml0aW9uc1snZCddID0gJ1swLTldJztcblx0Ly8gJCgnLmpxdWVyeU1hc2snKS5tYXNrKCcyMjMxJyk7XG5cblx0XG5cdC8vIENsaXBib2FyZFxuXHQvLyBuZXcgQ2xpcGJvYXJkKCcuYnRuLWNsaXBib2FyZCcpO1xuXHR2YXIgdGltZW91dDtcblx0Ly8gY29uc3QgdGltZW91dFxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgIHZhciBhdXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgYXV4LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV4KTtcbiAgICAgICAgICBhdXguc2VsZWN0KCk7XG4gICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcbiAgICB9XG5cbiAgIFxuXG5cdFxuXHRjb25zdCB0b29sdGlwID0gJCgnLnRvb2x0aXB0ZXh0Jylcblx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29weScpKVxuXG5cdCQoJy5idG4tY2xpcGJvYXJkJykuYmluZCgnY2xpY2sgdG91Y2hzdGFydCcsIGU9Pntcblx0XHRjb25zdCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5wYXJlbnQoJ2J1dHRvbicpXG5cdFx0Y29uc3QgdG9vbHRpcCA9IHRhcmdldC5maW5kKCcudG9vbHRpcHRleHQnKVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gJCggdGFyZ2V0LmRhdGEoJ2NsaXBib2FyZC10YXJnZXQnKSApXG5cdFx0Ly8gQ09QWVxuXHRcdC8vIGNvbnN0IGNvcHlUZXh0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5jb3B5JykuZmluZCgnLmNvcHlfX3ZhbHVlJykudGV4dCgpLnRyaW0oKVxuXHRcdGNvbnN0IGNvcHlOb2RlID0gJCh0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpKVxuXHRcdGNvcHlOb2RlLmFkZENsYXNzKCdhbmltYXRlZCBoZWFydEJlYXQnKVxuXHRcdGNvbnN0IGNvcHlUZXh0ID0gY29weU5vZGUudGV4dCgpLnRyaW0oKVxuXHRcdGNvbnNvbGUubG9nKGNvcHlUZXh0KVxuXHRcdGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0XHQvLyAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpLnRleHQoKVxuXG5cdFx0dG9vbHRpcC50ZXh0KHRvb2x0aXAuZGF0YSgnY29waWVkJykpXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0Y29weU5vZGUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGhlYXJ0QmVhdCcpXG5cdFx0fSwgMTAwMClcblxuXHRcdC8vIGNvcHlUb0NsaXBib2FyZChjb3B5VGV4dClcblx0fSlcblx0JCgnLmJ0bi1jbGlwYm9hcmQnKS5tb3VzZW91dChlPT57XG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRjb25zdCB0b29sdGlwID0gdGFyZ2V0LmZpbmQoJy50b29sdGlwdGV4dCcpXG5cdFx0Ly8gY29uc3QgY29weU5vZGUgPSAkKHRhcmdldC5kYXRhKCdjbGlwYm9hcmQtdGFyZ2V0JykpXG5cdFx0Ly8gY29uc3QgY29weVRleHQgPSAkKCB0YXJnZXQuZGF0YSgnY2xpcGJvYXJkLXRhcmdldCcpIClcblxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHR0b29sdGlwLnRleHQodG9vbHRpcC5kYXRhKCdjb3B5JykpXG5cdFx0XHRcblx0XHRcdFxuXHRcdH0sIDIwMClcblx0fSlcblx0JCgnLnNlbGVjdHBpY2tlcicpLnNlbGVjdHBpY2tlcigpXG5cblxuXG5cdC8vIHdlIGFkZCB0aGUgbW9kYWwgdG8gdGhlIGVuZCBvZiBib2R5IFxuXHRjb25zdCBtb2RhbCA9ICQoJy5hZGQtdG8tdGhlLWVuZC1vZi1ib2R5Jylcblx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5jbG9uZSgpKVxuXHRtb2RhbC5yZW1vdmUoKVxuXG5cblx0XG5cblxuXHQvLyBzY3JvbGwgdG8gb3JkZXJcblx0JChcIi5zY3JvbGwtdG8tb3JkZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmxlbmd0aD4yKXtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICcvI29yZGVycy1ob2xkZXInXG5cblx0XHR9IGVsc2Uge1xuXG5cdCAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjb3JkZXJzLWhvbGRlclwiKS5vZmZzZXQoKS50b3AgLSAxMFxuXHQgICAgICAgIH0sIDEwMDApO1xuXHQgICAgfVxuICAgIH0pO1xuXG4gICAgLy9zY3JvbGwgdG8gdG9wXG4gIC8vICAgJChcIi5zY3JvbGwtdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uIChlKXtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAvLyAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gIC8vICAgICAgIH0sIDEwMDApO1xuICAvLyAgIH0pO1xuXG5cbiAvLyAgIFx0JCgnLmItaW52b2ljZV9faW5wdXQnKS5jaGFuZ2UoZnVuY3Rpb24oKXtcblx0Ly8gXHRjb25zdCBmaWxlcyA9ICQoJy5iLWludm9pY2VfX2lucHV0JylbMF0uZmlsZXNcblx0Ly8gXHRjb25zdCBmaWxlSW5mbyA9ICQoJy5iLWludm9pY2VfX2ZpbGVpbmZvJylcblx0Ly8gXHRmaWxlSW5mby50ZXh0KCcnKSBcblxuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspe1xuXHQvLyBcdFx0Y29uc3QgbmFtZSA9IGZpbGVzW2ldLm5hbWVcblx0Ly8gXHRcdGNvbnN0IHNpemUgPSBmaWxlc1tpXS5zaXplLzEwMjQvMTAyNFxuXHQvLyBcdFx0ZmlsZUluZm8uYXBwZW5kKCQoYDxhIGNsYXNzPVwiYi1pbnZvaWNlX19maWxlbmFtZSBwLTEgbXItMVwiPiR7bmFtZX08c3BhbiBjbGFzcz1cIm1sLTJcIiBocmVmPVwiXCI+JnRpbWVzOzwvc3Bhbj48L2E+YCkpXG5cdC8vIFx0fVxuXHQgIFxuXHQvLyB9KVxuXG5cblxuICAgIFxufSkgLy8gcmVhZHlcblxuXG4kKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG5cblxuXG4vLyB3aW5kb3cgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG5cdFxuXG5cdGxhenlsb2FkKClcblx0YWRkTWVudXNUb1Byb2ZpbGVEcm9wZG93bigpXG59KSAgXG5cblxuIiwiXG5jb25zdCBuYXYgPSAoKSA9PiB7XG5cdCQoJy5oYW1idXJnZXInKS5jbGljaygoKT0+e1xuXHRcdGNvbnN0IG5hdiA9ICQoJy5iLW5hdicpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHRcdHNldFRpbWVvdXQoKCk9Pm5hdi5hZGRDbGFzcygnYi1uYXYtLWFjdGl2ZScpLCAxMDApXG5cdFx0cHJlc3NDbG9zZS5hZGRDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblxuXHR9KVxuXG5cdCQoJy5uYXYtdGFiLWJ1dHRvbicpLmNsaWNrKChlKT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgaHJlZiA9IHRhcmdldC5hdHRyKCdocmVmJylcblx0XHQkKCcuYi1uYXZfX3RhYicpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLS1hY3RpdmUnKVxuXHRcdHRhcmdldC5wYXJlbnQoJy5iLW5hdl9fdGFiJykuYWRkQ2xhc3MoJ2ItbmF2X190YWItLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdiLW5hdl9fdGFiLWNvbnRlbnQtLWFjdGl2ZScpXG5cdFx0JCgnLmItbmF2X190YWItY29udGVudCcgKyBocmVmKS5hZGRDbGFzcygnYi1uYXZfX3RhYi1jb250ZW50LS1hY3RpdmUnKVxuXG5cdH0pXG5cblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2XG4iLCJjb25zdCBvcGVuUG9wdXAgPSAoKT0+IHtcblx0Ly8gY29uc3QgYmx1cnJ5QmcgPSAkKCcuYmx1cnJ5LWJhY2tncm91bmQnKVxuXHRjb25zdCBwb3B1cCA9ICQoJy5iLXBvcHVwJylcblx0Y29uc3QgYk5hdiA9ICQoJy5iLW5hdicpIC8vIHJlc3BvbnNpdmUgaXNzdWVzXG5cdGNvbnN0IGh0bWwgPSAkKCdodG1sJylcblxuXHQkKCcub3BlblBvcHVwJykuY2xpY2soZT0+e1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKVxuXHRcdGNvbnN0IGhyZWYgPSB0YXJnZXQuYXR0cignaHJlZicpXG5cdFx0Ly8gY29uc3Qgb2Zmc2V0ID0gJChlLnRhcmdldCkub2Zmc2V0KClcblx0XHQvLyBjb25zdCB0b3AgPSBvZmZzZXQudG9wXG5cdFx0Ly8gY29uc3QgbGVmdCA9IG9mZnNldC5sZWZ0XG5cdFx0Yk5hdi5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0Ly8gYmx1cnJ5QmcuYWRkQ2xhc3MoJ2JsdXJyeS1iYWNrZ3JvdW5kLS1hY3RpdmUnKVxuXHRcdCQoJy5wcmVzc0Nsb3NlJykuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0aHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXG5cdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDAsIDAsIC4yKScpXG5cdFx0aWYoJChocmVmKS5sZW5ndGg+MCApe1xuXHRcdFx0JChocmVmKS5hZGRDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9wdXAuYWRkQ2xhc3MoJ2ItcG9wdXAtLWFjdGl2ZScpXG5cdFx0fVxuXG5cdFx0Ly8gcG9wdXAuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKVxuXHR9KVxuXHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsICcuYi1wb3B1cCwgLmNsb3NlLWItcG9wdXAnLCAoZSk9Pntcblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnJlbW92ZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpXG5cdFx0aWYodGFyZ2V0LmNsb3Nlc3QoJy5iLXBvcHVwX19pbm5lcicpLmxlbmd0aDw9MCB8fCB0YXJnZXQuY2xvc2VzdCgnLmNsb3NlLWItcG9wdXAnKS5sZW5ndGg+MCl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdC8vIGJsdXJyeUJnLnJlbW92ZUNsYXNzKCdibHVycnktYmFja2dyb3VuZC0tYWN0aXZlJylcblx0XHRcdCQoJy5iLXBvcHVwLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnYi1wb3B1cC0tYWN0aXZlJylcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Yk5hdi5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpXG5cdFx0XHR9LCAzMDApXG5cdFx0XHQkKCdodG1sLCBib2R5JykucmVtb3ZlQ2xhc3MoJ3ktaGlkZGVuJylcblx0XHRcdCQoJy5wcmVzc0Nsb3NlLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygncHJlc3NDbG9zZS0tYWN0aXZlJylcblxuXHRcdFx0Ly8gJCgnYm9keScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpXG5cblx0XHR9XG5cdH0pXG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVuUG9wdXBcblxuIiwiY29uc3QgcmVwZWF0SXRlbSA9ICgpPT4ge1xuXHRjb25zdCByZXBlYXRJdGVtID0gJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmVxKDApXG5cdGNvbnN0IHJlcGVhdEl0ZW1QYXJlbnQgPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMCkucGFyZW50KClcblx0Y29uc3QgcmVwZWF0SXRlbUNsb25lID0gcmVwZWF0SXRlbS5jbG9uZSgpXG5cdGNvbnN0IHJlcGVhdEl0ZW1CdXR0b24gPSAkKCdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXScpLmVxKDApXG5cdGlmKHJlcGVhdEl0ZW0gJiYgcmVwZWF0SXRlbUJ1dHRvbikge1xuXHRcdC8vIGNvbnN0IGNsb3NlSXRlbUJ1dHRvbiA9ICQoJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nKVxuXHRcdHJlcGVhdEl0ZW1CdXR0b24uY2xpY2soKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5yZW1vdmUoKVxuXHRcdFx0fVxuXG5cdFx0fSlcblxuXG5cblxuXHR9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHJlcGVhdEl0ZW1cblxuXG5jb25zdCByZXBlYXROZXdJdGVtID0gKCk9PiB7XG5cdGNvbnN0IHJlcGVhdEl0ZW0gPSAkKCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJykuZXEoMClcblx0Y29uc3QgcmVwZWF0SXRlbVBhcmVudCA9ICQoJ1tkYXRhLXJlcGVhdC1pZD1cIml0ZW1cIl0nKS5lcSgwKS5wYXJlbnQoKVxuXHRjb25zdCByZXBlYXRJdGVtQ2xvbmUgPSByZXBlYXRJdGVtLmNsb25lKClcblx0Y29uc3QgcmVwZWF0SXRlbUJ1dHRvbiA9ICdbZGF0YS1yZXBlYXQtdGFyZ2V0PVwiaXRlbVwiXSdcblx0aWYocmVwZWF0SXRlbSAmJiByZXBlYXRJdGVtQnV0dG9uKSB7XG5cdFx0Ly8gY29uc3QgY2xvc2VJdGVtQnV0dG9uID0gJCgnLmNsb3NlLWFkZGl0aW9uYWwtaXRlbScpXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgcmVwZWF0SXRlbUJ1dHRvbiwgKGUpPT57XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdHJlcGVhdEl0ZW1QYXJlbnQuYXBwZW5kKHJlcGVhdEl0ZW1DbG9uZS5jbG9uZSgpKVxuXG5cdFx0fSlcblxuXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1hZGRpdGlvbmFsLWl0ZW0nLCAoZSk9Pntcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYoJCgnW2RhdGEtcmVwZWF0LWlkPVwiaXRlbVwiXScpLmxlbmd0aD4xKXtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gJChlLnRhcmdldClcblx0XHRcdFx0Y29uc3QgcGFyZW50SXRlbSA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1yZXBlYXQtaWQ9XCJpdGVtXCJdJylcblx0XHRcdFx0cGFyZW50SXRlbS5hbmltYXRlKHtcblx0XHRcdFx0XHRoZWlnaHQ6ICcwJ1xuXHRcdFx0XHR9LCAnZmFzdCcsICdzd2luZycsIFxuXHRcdFx0XHRcdCgpID0+IHBhcmVudEl0ZW0ucmVtb3ZlKClcblx0XHRcdFx0KVxuXHRcdFx0XHRcblx0XHRcdH1cblxuXHRcdH0pXG5cblxuXG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXBlYXROZXdJdGVtXG5cbiIsIlxuY29uc3Qgc2hvcHBpbmdDYXJkID0gKCk9PiB7XG5cdCQoJy5zaG9wcGluZy1jYXJkJykuY2xpY2soKGUpPT57XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgX3RoaXMgPSAkKHRoaXMpXG5cdFx0Y29uc3QgcHJlc3NDbG9zZSA9ICQoJy5wcmVzc0Nsb3NlJylcblx0XHRjb25zdCBodG1sID0gJCgnaHRtbCcpXG5cblx0XHQkKCcuc2hvcHBpbmctY2FyZCcpLnRvZ2dsZUNsYXNzKCdzaG9wcGluZy1jYXJkLS1hY3RpdmUnKVxuXHRcdCQoJy5pbnB1dHMtd3JhcHBlci0tc2hvcHBpbmcnKS50b2dnbGUoKVxuXHRcdFxuXHQgICAgJCgnLmItbmF2X193cmFwcGVyJykuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHQgICAgaHRtbC5hZGRDbGFzcygneS1oaWRkZW4nKVxuXHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDEwMDApO1xuXHRcdFxuXHRcdHByZXNzQ2xvc2UuYWRkQ2xhc3MoJ3ByZXNzQ2xvc2UtLWFjdGl2ZScpXG5cdFx0Ly8gY29uc29sZS5sb2coJCh0aGlzKSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvcHBpbmdDYXJkIiwiY29uc3Qgc21zVmVyaWZpY2F0aW9uID0gKCk9PiB7XG5cdGNvbnN0IGlucHV0ID0gJCgnLmItdmVyaWZpY2F0aW9uX19pbnB1dCcpLmVxKDApXG5cdGNvbnN0IG1heExlbmd0aCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heGxlbmd0aCcpKVxuXHRjb25zdCBmb250U2l6ZSA9IHBhcnNlSW50KGlucHV0LmNzcygnZm9udFNpemUnKSlcblx0Y29uc3QgZGFzaGVzID0gJCgnLmItdmVyaWZpY2F0aW9uX19kYXNoZXMnKVxuXHRjb25zdCB1bmRlcmxpbmVXaWR0aCA9IDMwXG5cdGNvbnN0IHVuZGVybGluZU1hcmdpblJpZ2h0ID0gMjJcblx0Y29uc3QgaG9yaXpvbnRhbFBhZGRpbmcgPSAzXG5cblx0Ly8gY29uc29sZS5sb2coIG1heExlbmd0aCwgZm9udFNpemUpXG5cdFxuXHRkYXNoZXMuYXBwZW5kKCc8c3Bhbj48L3NwYW4+Jy5yZXBlYXQobWF4TGVuZ3RoKSlcblx0XHQucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0JCgnLmItdmVyaWZpY2F0aW9uX19pbnB1dCcpLmNzcyh7XG5cdFx0XHQgIHdpZHRoOiAodW5kZXJsaW5lV2lkdGggKiAobWF4TGVuZ3RoICsgMSkgKyB1bmRlcmxpbmVNYXJnaW5SaWdodCAqIChtYXhMZW5ndGggLSAxKSkgKyBob3Jpem9udGFsUGFkZGluZyAqIDIsXG5cblx0XHRcdH0pXG5cdFx0XHQkKCcuYi12ZXJpZmljYXRpb24nKS5jc3Moe1xuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZSdcblx0XHRcdH0pXG5cdFx0XHRpbnB1dC5mb2N1cygpXG5cdFx0fSlcblx0XG5cdGlucHV0LmtleXVwKCgpPT57XG5cdFx0aWYoaW5wdXQudmFsKCkubGVuZ3RoPj1tYXhMZW5ndGgpIHtcblx0XHRcdCQoJy52ZXJpZmljYXRpb25CdXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG5cdFx0fVxuXHR9KVxuXHRcblx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNtc1ZlcmlmaWNhdGlvbiIsImNvbnN0IHdpbmRvd1Njcm9sbExpc3RlbmVyID0gKCkgPT4ge1xuXHQvLyBzY3JvbGwgbGlzdGVuZXJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwXG5cdCQod2luZG93KS5zY3JvbGwoKCk9Pntcblx0XHRcblx0XHRjb25zdCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcblx0XHRjb25zdCBuYXZXcmFwcGVyID0gJCgnLmItbmF2X193cmFwcGVyJylcblx0XHRjb25zdCBuYXZNYWluID0gJCgnLmItbmF2X19tYWluJylcblx0XHRjb25zdCB0b3BOYXYgPSAkKCcuYi1uYXZfX3RvcCcpXG5cdFx0Y29uc3Qgc2Nyb2xsVG9Ub3BCdXR0b24gPSAkKCcuc2Nyb2xsLXRvLXRvcCcpXG5cblx0XHQvLyBpZihzY3JvbGxUb3A+NzApIHtcblx0XHQvLyBcdHRvcE5hdi5hZGRDbGFzcygnYi1uYXZfX3RvcC0taGlkZGVuJylcblx0XHQvLyBcdG5hdk1haW4ucmVtb3ZlQ2xhc3MoJ3B5LTMnKVxuXHRcdC8vIFx0aWYoc2Nyb2xsVG9wPmxhc3RTY3JvbGxUb3Ape1xuXHRcdC8vIFx0XHRuYXZXcmFwcGVyLnJlbW92ZUNsYXNzKCdiLW5hdl9fd3JhcHBlci0tYWN0aXZlJylcblx0XHRcdFx0XG5cblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdG5hdldyYXBwZXIuYWRkQ2xhc3MoJ2ItbmF2X193cmFwcGVyLS1hY3RpdmUnKVxuXHRcdC8vIFx0fVxuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHR0b3BOYXYucmVtb3ZlQ2xhc3MoJ2ItbmF2X190b3AtLWhpZGRlbicpXG5cdFx0Ly8gXHRuYXZNYWluLmFkZENsYXNzKCdweS0zJylcblx0XHRcdFxuXHRcdC8vIH1cblxuXHRcdGlmKHNjcm9sbFRvcD4xMDApIHtcblx0XHRcdHNjcm9sbFRvVG9wQnV0dG9uLmFkZENsYXNzKCdzY3JvbGwtdG8tdG9wLS1hY3RpdmUnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzY3JvbGxUb1RvcEJ1dHRvbi5yZW1vdmVDbGFzcygnc2Nyb2xsLXRvLXRvcC0tYWN0aXZlJylcblx0XHR9XG5cdFx0XG5cblx0XHRsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1Njcm9sbExpc3RlbmVyXG4iXX0=
