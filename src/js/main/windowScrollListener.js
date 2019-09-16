const windowScrollListener = () => {
	// scroll listener
	let lastScrollTop = 0
	$(window).scroll(()=>{
		
		const scrollTop = $(window).scrollTop()
		const navWrapper = $('.b-nav__wrapper')
		const navMain = $('.b-nav__main')
		const topNav = $('.b-nav__top')
		const scrollToTopButton = $('.scroll-to-top')

		// if(scrollTop>70) {
		// 	topNav.addClass('b-nav__top--hidden')
		// 	navMain.removeClass('py-3')
		// 	if(scrollTop>lastScrollTop){
		// 		navWrapper.removeClass('b-nav__wrapper--active')
				

		// 	} else {
		// 		navWrapper.addClass('b-nav__wrapper--active')
		// 	}
		// } else {
		// 	topNav.removeClass('b-nav__top--hidden')
		// 	navMain.addClass('py-3')
			
		// }

		if(scrollTop>100) {
			scrollToTopButton.addClass('scroll-to-top--active')
		} else {
			scrollToTopButton.removeClass('scroll-to-top--active')
		}
		

		lastScrollTop = scrollTop
	})
}

export default windowScrollListener
