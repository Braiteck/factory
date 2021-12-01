$(() => {
	// Основной слайдер на главной
	if ($('.first_section .swiper-container').length) {
		new Swiper('.first_section .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			}
		})
	}


	// Фильтр
	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})

	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 200000,
		from: 3000,
		to: 150000,
		step: 100,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val().replace(/\s+/g, '')),
			to: parseFloat($('.filter .price_range input.to').val().replace(/\s+/g, ''))
		})
	})


	$areaRange = $('.filter #area_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 18000,
		from: 19,
		to: 18000,
		step: 1,
		onChange: data => {
			$('.filter .area_range input.from').val(data.from.toLocaleString())
			$('.filter .area_range input.to').val(data.to.toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.filter .area_range .input').keyup(function () {
		$areaRange.update({
			from: parseFloat($('.filter .area_range input.from').val().replace(/\s+/g, '')),
			to: parseFloat($('.filter .area_range input.to').val().replace(/\s+/g, ''))
		})
	})


	// Галерея
	if ($('.gallery .swiper-container').length) {
		let sliders = []

		$('.gallery .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 24,
							slidesPerView: 1
						},
						768: {
							spaceBetween: 32,
							slidesPerView: 2
						},
						1024: {
							spaceBetween: 32,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 52,
							slidesPerView: 3
						},
						1440: {
							spaceBetween: 80,
							slidesPerView: 3
						},
						1900: {
							spaceBetween: 124,
							slidesPerView: 3
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Наши объекты
	if ($('.mfc_our_objects .swiper-container').length) {
		let sliders = []

		$('.mfc_our_objects .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 24,
							slidesPerView: 1
						},
						768: {
							spaceBetween: 32,
							slidesPerView: 2
						},
						1024: {
							spaceBetween: 32,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 44,
							slidesPerView: 3
						},
						1440: {
							spaceBetween: 44,
							slidesPerView: 4
						},
						1900: {
							spaceBetween: 64,
							slidesPerView: 4
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Из истории МФЦ Fабрика
	if ($('.mfc_history .swiper-container').length) {
		$('.mfc_history .swiper-container').each(function (i) {
			let this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					spaceBetween: 0,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							slidesPerView: 1
						},
						480: {
							slidesPerView: 2
						},
						768: {
							slidesPerView: 3
						},
						1024: {
							slidesPerView: 3
						},
						1280: {
							slidesPerView: 4
						},
						1900: {
							slidesPerView: 5
						}
					},
					on: {
						init: swiper => {
							setTimeout(() => {
								setHeight($(swiper.$el).find('.item'))
							})
						},
						resize: swiper => {
							setTimeout(() => {
								$(swiper.$el).find('.item').height('auto')
								setHeight($(swiper.$el).find('.item'))
							})
						}
					}
				}

			new Swiper('#' + this_ID, options)
		})
	}


	// Акции и новости
	if ($('.articles .swiper-container').length) {
		let sliders = []

		$('.articles .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 24,
							slidesPerView: 1
						},
						768: {
							spaceBetween: 32,
							slidesPerView: 2
						},
						1024: {
							spaceBetween: 32,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 52,
							slidesPerView: 3
						},
						1440: {
							spaceBetween: 80,
							slidesPerView: 3
						},
						1900: {
							spaceBetween: 184,
							slidesPerView: 3
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Страница помещения
	if ($('.premises_info .images').length) {
		const courseSaleThumbs = new Swiper('.premises_info .images .thumbs .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.thumbs-swiper-button-next',
				prevEl: '.thumbs-swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 3
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 12,
					slidesPerView: 4
				},
				1440: {
					spaceBetween: 20,
					slidesPerView: 4
				}
			}
		})

		new Swiper('.premises_info .images .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			thumbs: {
				swiper: courseSaleThumbs
			}
		})
	}


	// Пересчет цифр
	const options = {
		useEasing: true,
		useGrouping: true,
		separator: ' ',
		decimal: '.',
		prefix: '',
		suffix: ''
	}

	if ($('.countUp').length) {
		inView('.countUp')
			.on('enter', function (el) {
				let numAnim = new countUp($(el).data('span'), 0, $(el).data('value'), 0, 3, options)

				numAnim.start()
			})
	}


	// Моб. меню
	$('header .menu_btn').click(e => {
		e.preventDefault()

		!$('header .menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(200)

		$('header .menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('#menu').toggleClass('show')
	})


	$('#menu .close_btn').click(e => {
		e.preventDefault()

		$('header .menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('#menu').toggleClass('show')
		$('.overlay').fadeOut(200)
	})


	$('#menu .links > div > a.sub_link').click(function (e) {
		e.preventDefault()

		let subLinks = $(this).data('sub')

		$('#menu .sub_links').hide()
		$('#menu .sub_links' + subLinks).show()

		$('#menu .links_wrap').addClass('open')
	})

	$('#menu .sub_links .head .back_btn').click((e) => {
		e.preventDefault()

		$('#menu .links_wrap').removeClass('open')

		setTimeout(() => {
			$('#menu .sub_links').hide()
		}, 250)
	})


	// Анимация блока запускается когда блок в видимой части на >10% от высоты экрана
	inView.offset($(window).innerHeight() * 0.15)

	// Появление блоков
	if ($('.uniqueness').length) {
		inView('.uniqueness')
			.on('enter', function (el) {
				let delay = 400

				$(el).find('.data .item').each(function () {
					var _self = $(this)

					setTimeout(function () {
						_self.addClass('animate__animated animate__fadeInUp')
					}, delay)

					delay = delay + 200
				})

				setTimeout(function () {
					$(el).find('.image').addClass('animate__animated animate__fadeInRight')
				})
			})
	}

	if ($('.stock').length) {
		inView('.stock')
			.on('enter', function (el) {
				let delay = 400

				$(el).find('.data > *').each(function () {
					var _self = $(this)

					setTimeout(function () {
						_self.addClass('animate__animated animate__fadeInUp')
					}, delay)

					delay = delay + 200
				})

				setTimeout(function () {
					$(el).find('.image').addClass('animate__animated animate__fadeInLeft')
				})
			})
	}
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header:not(.absolute)').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



$(window).resize(() => {
	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()

		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > 0
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})