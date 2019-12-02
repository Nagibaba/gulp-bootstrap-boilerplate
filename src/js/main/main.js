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
// import slider from './slider'
import shoppingCard from './shoppingCard'
import openPopup from './openPopup'
import repeatItem from './repeatItem'
import closeNav from './closeNav'
import lazyload from './lazyload'
import addMenusToProfileDropdown from './addMenusToProfileDropdown'
import smsVerification from './smsVerification'
import LayeredSlider from './LayeredSlider'

import {setCookie, getCookie} from './cookies'



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
	LayeredSlider()


	// solve hash bug in chrome
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (window.location.hash && isChrome) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
        }, 300);
    }

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

	$('.btn-clipboard').bind('click touchstart', e=>{
		const target = $(e.target).parent('button')
		const tooltip = target.find('.tooltiptext')
		// const copyText = $( target.data('clipboard-target') )
		// COPY
		// const copyText = target.closest('.copy').find('.copy__value').text().trim()
		const copyNode = $(target.data('clipboard-target'))
		copyNode.addClass('animated heartBeat')
		const copyText = copyNode.text().trim()
		console.log(copyText)
		copyToClipboard(copyText)
		// $(target.data('clipboard-target')).text()

		tooltip.text(tooltip.data('copied'))
		clearTimeout(timeout)
		setTimeout(function(){
			copyNode.removeClass('animated heartBeat')
		}, 1000)

		// copyToClipboard(copyText)
	})
	$('.btn-clipboard').mouseout(e=>{
		const target = $(e.target)
		const tooltip = target.find('.tooltiptext')
		// const copyNode = $(target.data('clipboard-target'))
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
		
		if(window.location.pathname.split('/').length>2){
			window.location = '/#orders-holder'

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



    
}) // ready


$('[data-toggle="tooltip"]').tooltip()

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    const btnAdd = document.getElementById('save-as-app')
    btnAdd.style.display = 'block';

    if(!getCookie('save-as-app2')){
		$('#save-as-app').tooltip('show')
		setTimeout(()=>{$('#save-as-app').tooltip('hide')}, 10000)
		setCookie('save-as-app2', 1)
	}


    btnAdd.addEventListener('click', (e) => {
        e.preventDefault()
        // hide our user interface that shows our A2HS button
        btnAdd.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice
        .then((choiceResult) => {
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
window.addEventListener('load', ()=>{
	

	lazyload()
	addMenusToProfileDropdown()
})  


