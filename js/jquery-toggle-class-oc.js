$(document).ready(function() {
	$('a.btn').click(function() {
		if($(this).parents('.wrapper').siblings('nav').hasClass('open')){
			$(this).parents('.wrapper').siblings('nav').removeClass('open');
		} else {
			$(this).parents('.wrapper').siblings('nav').addClass('open');
		}
		return false;
	});

	$('a.close').click(function() {
		if($(this).parent('nav').hasClass('open')){
			$(this).parent('nav').removeClass('open');
		}
		return false;
	});
});
