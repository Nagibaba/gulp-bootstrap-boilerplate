'use strict'
////// POPUP
import $ from 'jquery'
import a from './a'
import nav from './nav'
import documentListener from './documentListener'
import slider from './slider'
import shoppingCard from './shoppingCard'

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
	
})