
const shoppingCard = ($)=> {
	$('.shopping-card').click(()=>{
		$('.shopping-card').toggleClass('shopping-card--active')
		// console.log($(this))
	})
}

export default shoppingCard