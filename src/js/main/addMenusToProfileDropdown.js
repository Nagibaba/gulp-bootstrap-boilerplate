const addMenusToProfileDropdown = ()=> {
	$('.b-nav__tab-content#tab-2 .b-nav__item').each(function(){
		const newItem = $(this).clone()
		newItem.removeClass().addClass('dropdown-item')
		$('[aria-labelledby="profileMenus"]').append(newItem)
	})
}

export default addMenusToProfileDropdown