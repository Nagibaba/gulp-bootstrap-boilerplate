const documentListener = ($, cb=null) => {
	$(document).click((e)=>{
		const _this = $(e.target)
		const nav = $('.b-nav')

		// if not self clicked
		if(!_this.closest('.hamburger').length && !_this.closest('.b-nav').length){
			const pressClose = $('.pressClose')
			const body = $('body')

			nav.removeClass('b-nav--active')
			pressClose.removeClass('pressClose--active')
			setTimeout(function(){body.removeClass('y-hidden')}, 300)

		}
		if(!_this.closest('.shopping-card').length && !_this.closest('.inputs-wrapper--shopping').length){
			$('.shopping-card').removeClass('shopping-card--active')
			$('.inputs-wrapper--shopping').hide()
		}
		
	})
}


export default documentListener
