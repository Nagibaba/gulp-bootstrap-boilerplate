
const shoppingCard = ()=> {
	$('.shopping-card').click((e)=>{
		e.preventDefault()
		const _this = $(this)
		$('.shopping-card').toggleClass('shopping-card--active')
		$('.inputs-wrapper--shopping').toggle()
		
	    $('.b-nav__wrapper').addClass('b-nav__wrapper--active')

	    $('html, body').animate({
            scrollTop: 0
        }, 1000);
	
		// console.log($(this))
	})
}

export default shoppingCard