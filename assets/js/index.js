$(document).ready(function () {
	$("li.active").removeClass("active");
	$('a[href="' + location.pathname + '"]')
		.closest("li")
		.addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('navbar-active');
	} else {
		nav.classList.remove('navbar-active');
	}
}

var owl = $('#owl-one');
owl.owlCarousel({
	items: 4,
	loop: true,
	margin: 10,
	arrows: true,
	autoplay: true,
	dots: false,
	autoplayTimeout: 10000,
	autoplayHoverPause: true,
	nav: true,
	navText: ["<div class='prev'><i class='fas fa-chevron-left'></i></div>",
		"<div class='next'><i class='fas fa-chevron-right'></i></div>"
	],
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,

		},
		1000: {
			items: 4,

		}
	}
});
$('.play').on('click', function () {
	owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
	owl.trigger('stop.owl.autoplay')
})

var owl = $('#owl-two');
owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	arrows: true,
	autoplay: true,
	dots: false,
	autoplayTimeout: 10000,
	autoplayHoverPause: true,
	nav: true,
	navText: ["<div class='prev'><i class='fas fa-chevron-left'></i></div>",
		"<div class='next'><i class='fas fa-chevron-right'></i></div>"
	],
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,

		},
		1000: {
			items: 1,

		}
	}
});
$('.play').on('click', function () {
	owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
	owl.trigger('stop.owl.autoplay')
})



let links = document.querySelectorAll(".link-gal");
let images = document.querySelectorAll(".wrap-items a");

function displayImage(imgs, link) {
	imgs.forEach((img) => {
		if (img.dataset.album === link) {
			img.classList.remove("hide");
			img.classList.add("upgalary");
			// img.classList.add("appear");
		} else {
			img.classList.add("hide");
		}
	});
}
var click;
var click1;
var click2;


links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		for(let i = 0; i < links.length; i++) links[i].classList.remove("active");
		switch (link.dataset.exp) { 
			case "nuisibles":
				displayImage(images, "nuisibles");
				click = true;
				click1 = false;
				click2 = false;
				click
					? link.classList.add("active")
					: link.classList.remove("active");
				console.log(click + " -1 " + click1 + " -2" + click2);

				break;
			case "Ramonages":
				displayImage(images, "Ramonages");
				click = false;
				click2 = false;
				click1 = true;
				click1
					? link.classList.add("active")
					: link.classList.remove("active");
				console.log(click + " -1 " + click1 + " -2" + click2);

				break;
			case "Demoussage":
				displayImage(images, "Demoussage");
				click = false;
				click1 = false;
				click2 = true;
				click2
					? link.classList.add("active")
					: link.classList.remove("active");
				console.log(click + " -1 " + click1 + " -2" + click2);

				break;
		}
	});
});