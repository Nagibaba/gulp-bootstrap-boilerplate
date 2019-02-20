const nav = ($) => {
	$('.hamburger').click(()=>{
		const nav = $('.b-nav')
		nav.addClass('b-nav--active')
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
