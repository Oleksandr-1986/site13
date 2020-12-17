//burgerMenu

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header-top__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.video__icon').click(function () {
	$(this).hide();
	$('.video-yt').attr('src', 'https://www.youtube.com/embed/AWKzr6n0ea0?autoplay=1');
});
//topBtn

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.topBtn').fadeIn();
		} else {
			$('.topBtn').fadeOut();
		}
	});
	$('.topBtn').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 2000);
	});
});