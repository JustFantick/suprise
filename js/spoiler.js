$(document).ready(function () {
	// Спойлер!!!
	$('.spoiler__title').click(function (event) {
		// Когда у родителя есть класс "one", то открытым может быть только 1 слайд (предыдущий закроется)
		if ($('.spoiler').hasClass('one')) {
			$('.spoiler__title').not($(this)).removeClass('open');
			$('.spoiler__title').not($(this)).next().slideUp(300);
		}
		$(this).toggleClass('open').next().slideToggle(300);
	});
	// Спойлер последний :)
	$('.columns__title').click(function (event) {
		if ($('.columns').hasClass('one')) {
			$('.columns__title').not($(this)).removeClass('open');
			$('.columns__title').not($(this)).next().slideUp(300);
		}
		$(this).toggleClass('open').next().slideToggle(300);
	});
	//==================================================

	//Активация тумблера!!!
	$('.tumbler__company').click(function (event) {
		if ($('.tumbler__individual').hasClass('choosen')) {
			$(this).addClass('choosen');
			$('.tumbler__individual').removeClass('choosen');
		}
	});
	$('.tumbler__individual').click(function (event) {
		if ($('.tumbler__company').hasClass('choosen')) {
			$(this).addClass('choosen');
			$('.tumbler__company').removeClass('choosen');
		}
	});
	//==================================================
	//Активация карточек!!!
	$('.cards__item').click(function (event) {
		$(this).parents('.cards').find('.cards__item').removeClass('active');
		$(this).parents('.cards').find('.cards__item active').prop('active', false);
		$(this).toggleClass('active');
		return false;
	})
});
