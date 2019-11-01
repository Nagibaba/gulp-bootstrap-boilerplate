const LayeredSlider = ()=> {

	const layeredSlider = $('.layered-slider')
	const dotClone = $('.layered-slider__dot').clone().removeClass('layered-slider__dot--active')
	const indicators = $('.layered-slider__indicators')
	const item = $('.layered-slider__item')
	const arrow = $('.layered-slider__arrow')
	const nextArrow = $('.layered-slider__arrow--next')
	const prevArrow = $('.layered-slider__arrow--prev')
	const count = item.length
	let i = 1
	while(i < count){
		indicators.append(dotClone.clone())
		i++
	}



	const dot = $('.layered-slider__dot')
	dot.click(function(){
	  const index = $(this).index()
	  
	  item.removeClass('layered-slider__item--active')
	  item.eq(index).addClass('layered-slider__item--active')
	  
	  dot.removeClass('layered-slider__dot--active')
	  dot.eq(index).addClass('layered-slider__dot--active')
	  
	  sliderChanged(index)
	})

	const nextArrowClicked = () => {
		const index = $('.layered-slider__dot--active').index()
		const nextIndex = index<count-1 ? index+1 : 0

		item.removeClass('layered-slider__item--active')
		item.eq(nextIndex).addClass('layered-slider__item--active')

		dot.removeClass('layered-slider__dot--active')
		dot.eq(nextIndex).addClass('layered-slider__dot--active')
		sliderChanged(nextIndex)
	}
	nextArrow.click(function(){
	  nextArrowClicked()
	})

	prevArrow.click(function(){
	  const index = $('.layered-slider__dot--active').index()
	  const prevIndex = index - 1
	  
	  item.removeClass('layered-slider__item--active')
	  item.eq(prevIndex).addClass('layered-slider__item--active')
	  
	  dot.removeClass('layered-slider__dot--active')
	  dot.eq(prevIndex).addClass('layered-slider__dot--active')
	  sliderChanged(prevIndex)
	})

	const sliderChanged = (newIndex) => {
	  arrow.removeClass('layered-slider__arrow--hidden')
	  if(newIndex+1==count) { // last
	    // nextArrow.addClass('layered-slider__arrow--hidden')
	  } else if(newIndex==0) {
	    // prevArrow.addClass('layered-slider__arrow--hidden')
	  } 
	}

	// interval

	
	let interval = null

	const startInterval = () => {
		interval = setInterval(nextArrowClicked, 3000)
	}
	startInterval()

	layeredSlider.hover(()=> {
		clearInterval(interval)
	}, () => startInterval() )


}

export default LayeredSlider
