const closeNav = ()=> {
	const pressClose = $('.pressClose')
	const html = $('html')
	const nav = $('.b-nav')
	nav.removeClass('b-nav--active')
	pressClose.removeClass('pressClose--active')
	setTimeout(function(){html.removeClass('y-hidden')}, 300)
}

export default closeNav