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

// export default repeatItem


const repeatNewItem = ()=> {
	const repeatItem = $('[data-repeat-id="item"]').eq(0)
	const repeatItemParent = $('[data-repeat-id="item"]').eq(0).parent()
	const repeatItemClone = repeatItem.clone()
	const repeatItemButton = '[data-repeat-target="item"]'
	if(repeatItem && repeatItemButton) {
		// const closeItemButton = $('.close-additional-item')
		$(document).on('click', repeatItemButton, (e)=>{
			e.preventDefault()
			repeatItemParent.append(repeatItemClone.clone())

		})


		$(document).on('click', '.close-additional-item', (e)=>{
			e.preventDefault()
			if($('[data-repeat-id="item"]').length>1){
				const target = $(e.target)
				const parentItem = target.closest('[data-repeat-id="item"]')
				parentItem.animate({
					height: '0'
				}, 'fast', 'swing', 
					() => parentItem.remove()
				)
				
			}

		})




	}
}

export default repeatNewItem

