$(document).ready(function() {
	$('a.btn-1').click(function() {
		if($(this).parents('header').siblings('.wrapper').find('.inner').hasClass('menu')){
			$(this).parents('header').siblings('.wrapper').find('.inner').removeClass('menu');
		} else {
			$(this).parents('header').siblings('.wrapper').find('.inner').addClass('menu');
			$(this).parents('header').siblings('.wrapper').find('.inner').removeClass('more');
		}
		return false;
	});

	$('a.btn-2').click(function() {
		if($(this).parents('header').siblings('.wrapper').find('.inner').hasClass('more')){
			$(this).parents('header').siblings('.wrapper').find('.inner').removeClass('more');
		} else {
			$(this).parents('header').siblings('.wrapper').find('.inner').addClass('more');
			$(this).parents('header').siblings('.wrapper').find('.inner').removeClass('menu');
		}
		return false;
	});
});
