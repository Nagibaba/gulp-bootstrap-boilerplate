(function(){
	let searchParams = new URLSearchParams(window.location.search)
	if(searchParams.get('link')){
		$('#Orders_link').val(searchParams.get('link'))
		$('#Orders_count').val(searchParams.get('count'))
		$('#Orders_price').val(searchParams.get('price'))
		$('#Orders_color').val(searchParams.get('color'))

		$(window).bind("load", function() {
			$('#procedure-form #Orders_link').trigger('blur')
			history.replaceState({page: 1}, "title 1", "")
		})

	}

	
})()