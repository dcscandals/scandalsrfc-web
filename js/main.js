$(function() {
	$('.scroll-disabled').prepend($('<div class="overlay"></div>'));
	$('.scroll-disabled').on("click tap", function() {
		$(this).removeClass('scroll-disabled');
	});
});
