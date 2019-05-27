const repeatItem = ()=> {
	const repeatItem = $('[data-repeat-id="item"]').eq(0)
	const repeatItemClone = repeatItem.clone()
	const repeatItemButton = $('[data-repeat-target="item"]').eq(0)
	if(repeatItem && repeatItemButton) {
		// const closeItemButton = $('.close-additional-item')
		repeatItemButton.click((e)=>{
			e.preventDefault()
			repeatItemClone.clone().insertAfter(repeatItem)

		})


		$(document).on('click', '.close-additional-item', (e)=>{
			e.preventDefault()
			const target = $(e.target)
			target.closest('[data-repeat-id="item"]').remove()

		})




	}
}

export default repeatItem