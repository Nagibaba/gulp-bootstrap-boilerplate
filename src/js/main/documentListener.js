const documentListener = ($, cb=null) => {
	$(document).click((e)=>{
		const _this = $(e.target)
		const nav = $('.b-nav')

		if(!_this.closest('.hamburger').length && !_this.closest('.b-nav').length){
			nav.removeClass('b-nav--active'); 
		}
		
	})
}


export default documentListener
