
const nav = () => {
	$(document).on('click', '.hamburger', ()=>{
		const nav = $('.b-nav')
		const pressClose = $('.pressClose')
		const html = $('html')
		html.addClass('y-hidden')
		setTimeout(()=>nav.addClass('b-nav--active'), 100)
		pressClose.addClass('pressClose--active')

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

	
}


export default nav
