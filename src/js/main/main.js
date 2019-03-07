'use strict'
////// POPUP
import $ from 'jquery'
import mask from 'jquery-mask-plugin'
import Clipboard from 'clipboard'
// import Tooltip from 'tooltip'

import a from './a'
import nav from './nav'
import documentListener from './documentListener'
import slider from './slider'
import shoppingCard from './shoppingCard'
import openPopup from './openPopup'
import 'bootstrap/js/dist/collapse'
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

	
	// Clipboard
	new Clipboard('.btn-clipboard');
	var timeout;
	// const timeout
	$('.btn-clipboard').click(e=>{
		const target = $(e.target).parent('button')
		const tooltip = target.find('.tooltiptext')
		// const copyText = $( target.data('clipboard-target') )
		tooltip.text('Kopiyaladı')
		clearTimeout(timeout)
		// copyToClipboard(copyText)
	})
	$('.btn-clipboard').mouseout(e=>{
		const target = $(e.target)
		const tooltip = target.find('.tooltiptext')
		// const copyText = $( target.data('clipboard-target') )

		timeout = setTimeout(function(){
			tooltip.text('Kopiyala')
			
		}, 200)
	})

	// function copyToClipboard(element) {
	//     var $temp = $("<input>");
	//     $("body").append($temp);
	//     $temp.val(element.text()).select();
	//     document.execCommand("copy");
	//     $temp.remove();
	// }
	// function myFunction() {
	//   var copyText = document.getElementById("myInput");
	//   copyText.select();
	//   document.execCommand("copy");
	  
	//   var tooltip = document.getElementById("myTooltip");
	//   tooltip.innerHTML = "Copied: " + copyText.value;
	// }

	// function outFunc() {
	//   var tooltip = document.getElementById("myTooltip");
	//   tooltip.innerHTML = "Copy to clipboard";
	// }

	// tooltips
	// $('[data-toggle="tooltip"]').tooltip()


	// new Tooltip($('.btn-clipboard'), {
	//     placement: 'top', // or bottom, left, right, and variations
	//     title: "Top"
	// });
})