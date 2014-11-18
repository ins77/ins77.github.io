$('.js-account-modal').on('click', function(event) {
	event.preventDefault();
    $('.modal').fadeIn();
    $('.modal').on('click', '.form-exit', function() {
    	$('.modal').fadeOut();
	});
});

