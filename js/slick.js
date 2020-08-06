$(document).ready(function () {
	// Слайдер!!!
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		easing: 'ease-in-out',
		touchThreshold: 30,
		waitForAnimate: true,
		centerMode: true,
		variableWidth: true,
		initialSlide: 1,

		autoplay: true,
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
					centerMode: false,
				}
			}
		]
	});
});
