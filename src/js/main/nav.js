import closeNav from './closeNav'

const nav = () => {
	$('.hamburger').click(()=>{
		const nav = $('.b-nav')
		const pressClose = $('.pressClose')
		const html = $('html')

		nav.addClass('b-nav--active')
		pressClose.addClass('pressClose--active')
		html.addClass('y-hidden')

	})

	$('.nav-tab-button').click((e)=>{
		e.preventDefault()
		const target = $(e.target)
		const href = target.attr('href')
		$('.b-nav__tab').removeClass('b-nav__tab--active')
		target.parent('.b-nav__tab').addClass('b-nav__tab--active')
		$('.b-nav__tab-content').removeClass('b-nav__tab-content--active')
		$('.b-nav__tab-content' + href).addClass('b-nav__tab-content--active')

	})

	$('.pressClose').bind('click, touchstart', e=>{
		closeNav()
	})
}


export default nav
