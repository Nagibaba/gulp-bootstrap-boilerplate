'use strict'
////// POPUP
// import $ from 'jquery'
// import mask from 'jquery-mask-plugin'
import Clipboard from 'clipboard'
// import Tooltip from 'tooltip'

import a from './a'
import nav from './nav'
import documentListener from './documentListener'
import slider from './slider'
import shoppingCard from './shoppingCard'
import openPopup from './openPopup'
import repeatItem from './repeatItem'
// import 'bootstrap'
// import 'bootstrap/js/dist/collapse'
// require("@chenfengyuan/datepicker")


function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(function() {

	nav()
	documentListener()
	slider(Swiper)
	shoppingCard()
	openPopup()
	repeatItem()

	$('[data-toggle="datepicker"]').datepicker({ format: "dd/mm/yyyy" })

	// $.mask.definitions['9'] = '';
	// $.mask.definitions['d'] = '[0-9]';
	// $('.jqueryMask').mask('2231');

	
	// Clipboard
	// new Clipboard('.btn-clipboard');
	var timeout;
	// const timeout
	const copyToClipboard = function (text) {
          var aux = document.createElement("input");
          aux.setAttribute("value", text);
          document.body.appendChild(aux);
          aux.select();
          document.execCommand("copy");
          document.body.removeChild(aux);
    }

   

	
	const tooltip = $('.tooltiptext')
	tooltip.text(tooltip.data('copy'))

	$('.btn-clipboard').bind('click onpressstart', e=>{
		const target = $(e.target).parent('button')
		const tooltip = target.find('.tooltiptext')
		// const copyText = $( target.data('clipboard-target') )
		// COPY
		const copyText = target.closest('.copy').find('.copy__value').text().trim()
		
		copyToClipboard(copyText)
		// $(target.data('clipboard-target')).text()

		tooltip.text(tooltip.data('copied'))
		clearTimeout(timeout)
		// copyToClipboard(copyText)
	})
	$('.btn-clipboard').mouseout(e=>{
		const target = $(e.target)
		const tooltip = target.find('.tooltiptext')
		// const copyText = $( target.data('clipboard-target') )

		timeout = setTimeout(function(){
			tooltip.text(tooltip.data('copy'))
			
		}, 200)
	})
	$('.selectpicker').selectpicker()



	// we add the modal to the end of body 
	const modal = $('.add-to-the-end-of-body')
	$('body').append(modal.clone())
	modal.remove()
})