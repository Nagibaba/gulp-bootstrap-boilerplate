const nav = ($) => {
	$('.hamburger').click(()=>{
		const nav = $('.b-nav')
		const pressClose = $('.pressClose')
		const body = $('body')

		nav.addClass('b-nav--active')
		pressClose.addClass('pressClose--active')
		body.addClass('y-hidden')
	})

	$('.nav-tab-button').click((e)=>{
		e.preventDefault()
		const target = $(e.target)
		const href = target.attr('href')
		$('.b-nav__tab').removeClass('b-nav__tab--active')
		target.parent('.b-nav__tab').addClass('b-nav__tab--active')
		$('.tab-content').hide()
		$('.tab-content' + href).css('display','inherit')

	})
}


export default nav
