$(function () {
	// route slider
	$('.route__slider').slick({
		arrows: false,
		waitForAnimate: false,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 1355,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1015,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 695,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.route__slider-prev').on('click', function (e) {
		e.preventDefault()
		$('.route__slider').slick('slickPrev')
	})
	$('.route__slider-next').on('click', function (e) {
		e.preventDefault()
		$('.route__slider').slick('slickNext')
	})

	// team slider
	$('.team__slide-wrapper').slick({
		arrows: false,
		waitForAnimate: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1075,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	$('.team__slide-prev').on('click', function (e) {
		e.preventDefault()
		$('.team__slide-wrapper').slick('slickPrev')
	})
	$('.team__slide-next').on('click', function (e) {
		e.preventDefault()
		$('.team__slide-wrapper').slick('slickNext')
	})
})
