$(document).ready(function () {
	$('.menu__burger').click(function (event) {
		$('.menu__burger, .menu__burger-list').toggleClass('active');
		//- Есле lock-скрола нужен, то в css + body.lock{overflow:hidden;}
		$('body').toggleClass('lock');
	});
	$('.menu__burger-list').click(function (event) {
		$('.menu__burger,.menu__burger-list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});