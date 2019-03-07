import $ from 'jquery'
const closeNav = ()=> {
	const pressClose = $('.pressClose')
	const body = $('body')
	const nav = $('.b-nav')
	nav.removeClass('b-nav--active')
	pressClose.removeClass('pressClose--active')
	setTimeout(function(){body.removeClass('y-hidden')}, 300)
}

export default closeNav