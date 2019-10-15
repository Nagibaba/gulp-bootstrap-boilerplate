'use strict'
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

import a from './a'
import nav from './nav'
import windowScrollListener from './windowScrollListener'
import documentListener from './documentListener'
import slider from './slider'
import shoppingCard from './shoppingCard'
import openPopup from './openPopup'
import repeatItem from './repeatItem'
import closeNav from './closeNav'
import lazyload from './lazyload'
import addMenusToProfileDropdown from './addMenusToProfileDropdown'
import smsVerification from './smsVerification'



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
	// document.querySelector('.not-visible-first').style.visibility='visible'
	nav()
	windowScrollListener()
	documentListener()
	// slider(Swiper)
	shoppingCard()
	openPopup()
	repeatItem()
	smsVerification()

	$('.pressClose').on('click touchstart', e=>{
		const html = $('html')
		const pressClose = $('.pressClose')
		pressClose.removeClass('pressClose--active')
		setTimeout(function(){html.removeClass('y-hidden')}, 500)

		closeNav()
	})

	$('[data-toggle="datepicker"]').datepicker({ format: "dd/mm/yyyy" })

	$('.jqueryMask').each(function(){
		const t = $(this)
		t.mask(t.attr('data-mask'), {
			translation: {A: {pattern: /A/, optional: false}, Z: {pattern: /[AZ]/, optional: false}, E: {pattern: /E/, optional: true}}
		})
	})

	$('#Declarations_link_id').change(function(){
		$('#Declarations_name').trigger('focus')
	})

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


	


	// scroll to order
	$(".scroll-to-order").click(function (e){
		e.preventDefault()
        $('html, body').animate({
            scrollTop: $(".orders-holder").offset().top - 10
        }, 1000);
    });

    //scroll to top
    $(".scroll-to-top").click(function (e){
		e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


   	$('.b-invoice__input').change(function(){
		const files = $('.b-invoice__input')[0].files
		const extensions = $('.b-invoice__extensions')
		extensions.text('') 

		for (var i = 0; i < files.length; i++){
			const ext = files[i].name.split('.').pop().toLowerCase()
			extensions.append($(`<div class="b-invoice__ext">${ext}</div>`))
		}
	  
	})



    
}) // ready



// window loaded
window.addEventListener('load', ()=>{
	
	

	lazyload()
	addMenusToProfileDropdown()
})  


