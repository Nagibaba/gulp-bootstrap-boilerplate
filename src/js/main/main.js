'use strict'
////// POPUP
import $ from 'jquery'
import mask from 'jquery-mask-plugin'
import a from './a'
import nav from './nav'
import documentListener from './documentListener'
import slider from './slider'
import shoppingCard from './shoppingCard'
import openPopup from './openPopup'
require("@chenfengyuan/datepicker")


function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(function() {

	nav($)
	documentListener($)
	slider(Swiper)
	shoppingCard($)
	$('[data-toggle="datepicker"]').datepicker({ format: "dd/mm/yyyy" })

	// $.mask.definitions['9'] = '';
	// $.mask.definitions['d'] = '[0-9]';
	$('.jqueryMask').mask(null);
	openPopup($)

})