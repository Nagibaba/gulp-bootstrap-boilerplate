const openPopup = ()=> {
	const blurryBg = $('.blurry-background')
	const popup = $('.b-popup')
	const bNav = $('.b-nav') // responsive issues
	$('.openPopup').click(e=>{
		e.preventDefault()
		const target = $(e.target).closest('a')
		const href = target.attr('href')
		// const offset = $(e.target).offset()
		// const top = offset.top
		// const left = offset.left
		bNav.css('display', 'none')
		blurryBg.addClass('blurry-background--active')
		// $('body').css('background-color', 'rgba(0, 0, 0, .2)')
		if($(href).length>0 ){
			$(href).addClass('b-popup--active')
		} else {
			popup.addClass('b-popup--active')
		}

		// popup.css('display', 'flex')
	})
	$(document).on('click', '.b-popup', (e)=>{
		const target = $(e.target)
		if(target.closest('.b-popup__inner').length<=0){
			blurryBg.removeClass('blurry-background--active')
			target.removeClass('b-popup--active')
			setTimeout(function(){
				bNav.css('display', 'flex')
			}, 300)
			// $('body').css('background-color', 'white')

		}
	})
	
}

export default openPopup

