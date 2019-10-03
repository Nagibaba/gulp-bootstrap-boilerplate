const lazyload = ()=> {
	try {
		$('[b-lazyload]').each(function(e){
			const _this = $(this)
			const newSrc = _this.data('src')
			_this.prop('src', newSrc)

		})
	} catch(e){
		console.error('b-debug', e)
	}
}

export default lazyload