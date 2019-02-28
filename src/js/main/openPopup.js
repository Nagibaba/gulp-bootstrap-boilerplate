const openPopup = ($)=> {
	const blurryBg = $('.blurry-background')
	const popup = $('.b-popup')
	const bNav = $('.b-nav') // responsive issues
	$('.openPopup').click(e=>{
		e.preventDefault()
		const offset = $(e.target).offset()
		const top = offset.top
		const left = offset.left
		bNav.css('display', 'none')
		blurryBg.addClass('blurry-background--active')
		// $('body').css('background-color', 'rgba(0, 0, 0, .2)')
		popup.addClass('b-popup--active')
		// popup.css('display', 'flex')
	})
	popup.click(e=>{
		const target = $(e.target)
		if(target.closest('.b-popup__inner').length<=0){
			blurryBg.removeClass('blurry-background--active')
			popup.removeClass('b-popup--active')
			setTimeout(function(){
				bNav.css('display', 'flex')
			}, 300)
			// $('body').css('background-color', 'white')

		}
	})
	
}

export default openPopup

