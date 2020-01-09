import {setCookie, getCookie, removeCookie} from './cookies'

const bell = $('#sound')
const bellIcon = bell.find('.fa')
const bellRing = new Audio('/sounds/sleigh_bell_sms.mp3')
const jingle = new Audio('/sounds/jingle-bells-sms.mp3')


if(!getCookie('mute') && !getCookie('jinglePlayed')){

	const promise = jingle.play()
	if (promise !== undefined) {
	  promise.then(_ => {
	    // Autoplay started!
	    setCookie('jinglePlayed', 1, 1/700)
	  }).catch(error => {
	    // Autoplay was prevented.
	    // Show a "Play" button so that user can start playback.
	    console.log('autoplay error')
	  });
	}
	
}

if(getCookie('mute')){

	bellIcon.addClass('fa-volume-off')
} else {
	bellIcon.addClass('fa-volume-up')
}

if(!getCookie('soundTooltipDisplayed')){
    bell.tooltip('show')
    setTimeout(()=>{bell.tooltip('hide')}, 10000)
    setCookie('soundTooltipDisplayed', 1)
}


$('button').click(()=>{
	const timeout = 2000
	const d = $('<img src="/img/deer.svg">')

	if(!getCookie('mute')){

		bellRing.play()
	}
	
	d.css({position: 'fixed', left: 0, top: Math.random() * 100 + 'vh', width: '70px', zIndex: 2000})
	$('body').append(d)
	d.animate({left: '100vw', top: Math.random() * 100 + 'vh'}, timeout)
	setTimeout(()=>d.remove(), timeout)
	
})


bell.click(e=>{
    e.preventDefault()
    
    if(getCookie('mute')){
    	removeCookie('mute')

    } else {
    	setCookie('mute', 'yes', 7)

    }

    bellIcon.toggleClass('fa-volume-up')
    bellIcon.toggleClass('fa-volume-off')
})
