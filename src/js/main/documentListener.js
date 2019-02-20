const documentListener = ($, cb=null) => {
	$(document).click((e)=>{
		const _this = $(e.target)
		const nav = $('.b-nav')

		// if not self clicked
		if(!_this.closest('.hamburger').length && !_this.closest('.b-nav').length){
			nav.removeClass('b-nav--active'); 
		}
		if(!_this.closest('.shopping-card').length && !_this.closest('.inputs-wrapper--shopping').length){
			$('.shopping-card').removeClass('shopping-card--active')
			$('.inputs-wrapper--shopping').hide()
		}
		
	})
}


export default documentListener
