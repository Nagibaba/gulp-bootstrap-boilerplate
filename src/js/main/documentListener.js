import closeNav from './closeNav'
const documentListener = (cb=null) => {
	$(document).click((e)=>{
		const _this = $(e.target)
		

		// if not self clicked
		if(!_this.closest('.hamburger').length && !_this.closest('.b-nav').length){
			closeNav()

		}
		if(!_this.closest('.shopping-card').length && !_this.closest('.inputs-wrapper--shopping').length){
			$('.shopping-card').removeClass('shopping-card--active')
			$('.inputs-wrapper--shopping').hide()
		}
		
	})
}


export default documentListener
