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
		blurryBg.removeClass('blurry-background--active')
		popup.removeClass('b-popup--active')
		// popup.css('display', 'none')
	})
	
}

export default openPopup

