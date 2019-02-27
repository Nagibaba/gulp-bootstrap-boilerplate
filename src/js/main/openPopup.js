const openPopup = ($)=> {
	const blurryBg = $('.blurry-background')
	const popup = $('.b-popup')
	$('.openPopup').click(e=>{
		e.preventDefault()
		const offset = $(e.target).offset()
		const top = offset.top
		const left = offset.left
		
		blurryBg.addClass('blurry-background--active')
		popup.addClass('b-popup--active')
		// popup.css('display', 'flex')
	})
	popup.click(e=>{
		const target = $(e.target)
		if(target.closest('.b-popup__inner').length<=0){
			blurryBg.removeClass('blurry-background--active')
			popup.removeClass('b-popup--active')
		}
	})
	
}

export default openPopup

