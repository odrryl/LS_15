function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		dots: true,
		items: 1,
		autoplay: true, // Включає автоматичну прокрутку
        autoplayTimeout: 4500, // Час між прокруткою слайдів (в мілісекундах)
        autoplayHoverPause: true // Призупиняє прокрутку при наведенні миші
	
	});
});


function scrollTo(hash) {
    location.hash = "#" + hash;
	
}

