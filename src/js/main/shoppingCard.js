
const shoppingCard = ()=> {
	$('.shopping-card').click((e)=>{
		e.preventDefault()
		const _this = $(this)
		const pressClose = $('.pressClose')
		const html = $('html')

		$('.shopping-card').toggleClass('shopping-card--active')
		$('.inputs-wrapper--shopping').toggle()
		
	    $('.b-nav__wrapper').addClass('b-nav__wrapper--active')
	    html.addClass('y-hidden')
	    $('html, body').animate({
            scrollTop: 0
        }, 1000);
		
		pressClose.addClass('pressClose--active')
		// console.log($(this))
	})
}

export default shoppingCard