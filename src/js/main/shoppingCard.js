
const shoppingCard = ()=> {
	$('.shopping-card').click(()=>{
		$('.shopping-card').toggleClass('shopping-card--active')
		$('.inputs-wrapper--shopping').toggle()
		// console.log($(this))
	})
}

export default shoppingCard