
		var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
		rotate: 50,
		stretch:0,
		depth: 90,
		modifier: 5	,
		slideShadows : true,
		},
		pagination: {
		el: '.swiper-pagination',
		},
		});
