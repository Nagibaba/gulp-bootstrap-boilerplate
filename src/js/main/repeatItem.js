const repeatItem = ()=> {
	const repeatItem = $('[data-repeat-id="item"]').eq(0)
	const repeatItemParent = $('[data-repeat-id="item"]').eq(0).parent()
	const repeatItemClone = repeatItem.clone()
	const repeatItemButton = $('[data-repeat-target="item"]').eq(0)
	if(repeatItem && repeatItemButton) {
		// const closeItemButton = $('.close-additional-item')
		repeatItemButton.click((e)=>{
			e.preventDefault()
			repeatItemParent.append(repeatItemClone.clone())

		})


		$(document).on('click', '.close-additional-item', (e)=>{
			e.preventDefault()
			if($('[data-repeat-id="item"]').length>1){
				const target = $(e.target)
				target.closest('[data-repeat-id="item"]').remove()
			}

		})




	}
}

export default repeatItem