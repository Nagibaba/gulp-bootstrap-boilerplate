const repeatItem = ()=> {
	const repeatItem = $('[data-repeat-id="item"]').eq(0)
	const repeatItemClone = repeatItem.clone()
	const repeatItemButton = $('[data-repeat-target="item"]').eq(0)
	if(repeatItem && repeatItemButton) {
		repeatItemButton.click((e)=>{
			e.preventDefault()
			repeatItemClone.clone().insertAfter(repeatItem)

		})
	}
}

export default repeatItem