const smsVerification = ()=> {
	const input = $('.b-verification__input').eq(0)
	const maxLength = parseInt(input.attr('maxlength'))
	const fontSize = parseInt(input.css('fontSize'))
	const dashes = $('.b-verification__dashes')
	const underlineWidth = 30
	const underlineMarginRight = 22
	const horizontalPadding = 3

	// console.log( maxLength, fontSize)
	
	dashes.append('<span></span>'.repeat(maxLength))
		.ready(function () {
			$('.b-verification__input').css({
			  width: (underlineWidth * (maxLength + 1) + underlineMarginRight * (maxLength - 1)) + horizontalPadding * 2,

			})
			$('.b-verification').css({
				visibility: 'visible'
			})
			input.focus()
		})
	
	input.keyup(()=>{
		if(input.val().length>=maxLength) {
			$('.verificationButton').trigger('click')
		}
	})
	
	
}

export default smsVerification