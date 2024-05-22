$(document).ready(function () {
	AOS.init({
		duration: 800,
		easing: 'slide'
	});

	(function ($) {

		"use strict";

		$(window).stellar({
			responsive: true,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});


		var fullHeight = function () {

			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});

		};
		fullHeight();

		// loader
		var loader = function () {
			setTimeout(function () {
				if ($('#ftco-loader').length > 0) {
					$('#ftco-loader').removeClass('show');
				}
			}, 1);
		};
		loader();

		// Scrollax
		$.Scrollax();



		// Burger Menu
		var burgerMenu = function () {

			$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

				event.preventDefault();

				if ($('#ftco-nav').is(':visible')) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}



			});

		};
		burgerMenu();


		var onePageClick = function () {


			$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
				event.preventDefault();

				var href = $.attr(this, 'href');

				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top - 70
				}, 500, function () {
					// window.location.hash = href;
				});
			});

		};

		onePageClick();


		var carousel = function () {
			$('.home-slider').owlCarousel({
				loop: true,
				autoplay: true,
				margin: 0,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				nav: false,
				autoplayHoverPause: false,
				items: 1,
				navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});
		};
		carousel();

		$('nav .dropdown').hover(function () {
			var $this = $(this);
			// 	 timer;
			// clearTimeout(timer);
			$this.addClass('show');
			$this.find('> a').attr('aria-expanded', true);
			// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').addClass('show');
		}, function () {
			var $this = $(this);
			// timer;
			// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
			// }, 100);
		});


		$('#dropdown04').on('show.bs.dropdown', function () {
			console.log('show');
		});

		// scroll
		var scrollWindow = function () {
			$(window).scroll(function () {
				var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

				if (st > 150) {
					if (!navbar.hasClass('scrolled')) {
						navbar.addClass('scrolled');
					}
				}
				if (st < 150) {
					if (navbar.hasClass('scrolled')) {
						navbar.removeClass('scrolled sleep');
					}
				}
				if (st > 350) {
					if (!navbar.hasClass('awake')) {
						navbar.addClass('awake');
					}

					if (sd.length > 0) {
						sd.addClass('sleep');
					}
				}
				if (st < 350) {
					if (navbar.hasClass('awake')) {
						navbar.removeClass('awake');
						navbar.addClass('sleep');
					}
					if (sd.length > 0) {
						sd.removeClass('sleep');
					}
				}
			});
		};
		scrollWindow();



		var counter = function () {

			$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
					$('.number').each(function () {
						var $this = $(this),
							num = $this.data('number');
						console.log(num);
						$this.animateNumber(
							{
								number: num,
								numberStep: comma_separator_number_step
							}, 7000
						);
					});

				}

			}, { offset: '95%' });

		}
		counter();


		var contentWayPoint = function () {
			var i = 0;
			$('.ftco-animate').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function () {

						$('body .ftco-animate.item-animate').each(function (k) {
							var el = $(this);
							setTimeout(function () {
								var effect = el.data('animate-effect');
								if (effect === 'fadeIn') {
									el.addClass('fadeIn ftco-animated');
								} else if (effect === 'fadeInLeft') {
									el.addClass('fadeInLeft ftco-animated');
								} else if (effect === 'fadeInRight') {
									el.addClass('fadeInRight ftco-animated');
								} else {
									el.addClass('fadeInUp ftco-animated');
								}
								el.removeClass('item-animate');
							}, k * 50, 'easeInOutExpo');
						});

					}, 100);

				}

			}, { offset: '95%' });
		};
		contentWayPoint();

		// magnific popup
		$('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});


	})(jQuery);

	$(".project-box").slice(0, 1).show();
	$("body").on('click touchstart', '.load-more', function (e) {
		e.preventDefault();
		$(".project-box:hidden").slice(0, 1).slideDown();
		if ($(".project-box:hidden").length == 0) {
			$(".load-more").css('visibility', 'hidden');
		}
	});




	/* Please ❤ this if you like it! */



	(function ($) {
		"use strict";

		//Switch dark/light

		$(".switch").on('click', function () {
			if ($("body").hasClass("light")) {
				$("body").removeClass("light");
				$(".switch").removeClass("switched");
			}
			else {
				$("body").addClass("light");
				$(".switch").addClass("switched");
			}
		});

		$(document).ready(function () {
			"use strict";

			//Scroll back to top

			var progressPath = document.querySelector('.progress-wrap path');
			var pathLength = progressPath.getTotalLength();
			progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
			progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
			progressPath.style.strokeDashoffset = pathLength;
			progressPath.getBoundingClientRect();
			progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
			var updateProgress = function () {
				var scroll = $(window).scrollTop();
				var height = $(document).height() - $(window).height();
				var progress = pathLength - (scroll * pathLength / height);
				progressPath.style.strokeDashoffset = progress;
			}
			updateProgress();
			$(window).scroll(updateProgress);
			var offset = 50;
			var duration = 550;
			jQuery(window).on('scroll', function () {
				if (jQuery(this).scrollTop() > offset) {
					jQuery('.progress-wrap').addClass('active-progress');
				} else {
					jQuery('.progress-wrap').removeClass('active-progress');
				}
			});
			jQuery('.progress-wrap').on('click', function (event) {
				event.preventDefault();
				jQuery('html, body').animate({ scrollTop: 0 }, duration);
				return false;
			})


		});

	})(jQuery);


	var $bubbles = $('.bubbles');

	function bubbles() {

		// Settings
		var min_bubble_count = 20, // Minimum number of bubbles
			max_bubble_count = 60, // Maximum number of bubbles
			min_bubble_size = 3, // Smallest possible bubble diameter (px)
			max_bubble_size = 12; // Maximum bubble blur amount (px)

		// Calculate a random number of bubbles based on our min/max
		var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

		// Create the bubbles
		for (var i = 0; i < bubbleCount; i++) {
			$bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
		}

		// Now randomise the various bubble elements
		$bubbles.find('.bubble-container').each(function () {

			// Randomise the bubble positions (0 - 100%)
			var pos_rand = Math.floor(Math.random() * 101);

			// Randomise their size
			var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

			// Randomise the time they start rising (0-15s)
			var delay_rand = Math.floor(Math.random() * 16);

			// Randomise their speed (3-8s)
			var speed_rand = 3 + Math.floor(Math.random() * 9);

			// Random blur
			var blur_rand = Math.floor(Math.random() * 3);

			// Cache the this selector
			var $this = $(this);

			// Apply the new styles
			$this.css({
				'left': pos_rand + '%',

				'-webkit-animation-duration': speed_rand + 's',
				'-moz-animation-duration': speed_rand + 's',
				'-ms-animation-duration': speed_rand + 's',
				'animation-duration': speed_rand + 's',

				'-webkit-animation-delay': delay_rand + 's',
				'-moz-animation-delay': delay_rand + 's',
				'-ms-animation-delay': delay_rand + 's',
				'animation-delay': delay_rand + 's',

				'-webkit-filter': 'blur(' + blur_rand + 'px)',
				'-moz-filter': 'blur(' + blur_rand + 'px)',
				'-ms-filter': 'blur(' + blur_rand + 'px)',
				'filter': 'blur(' + blur_rand + 'px)',
			});

			$this.children('.bubble').css({
				'width': size_rand + 'px',
				'height': size_rand + 'px'
			});

		});
	}

	// In case users value their laptop battery life
	// Allow them to turn the bubbles off
	$('.bubble-toggle').click(function () {
		if ($bubbles.is(':empty')) {
			bubbles();
			$bubbles.show();
			$(this).text('Bubbles Off');
		} else {
			$bubbles.fadeOut(function () {
				$(this).empty();
			});
			$(this).text('Bubbles On');
		}

		return false;
	});

	bubbles();


// SOCIAL PANEL JS
$(document).ready(function() {
    const $floating_btn = $('.floating-btn');
    const $close_btn = $('.close-btn');
    const $social_panel_container = $('.social-panel-container');

    $floating_btn.on('click', function(event) {
        event.stopPropagation();
        $social_panel_container.toggleClass('visible');
    });

    $close_btn.on('click', function(event) {
        event.stopPropagation();
        $social_panel_container.removeClass('visible');
    });

    $('body').on('click', function() {
        $social_panel_container.removeClass('visible');
    });

    $social_panel_container.on('click', function(event) {
        event.stopPropagation();
    });
});
// document.onkeydown = function(e) {
// 	if (e.ctrlKey && 
// 		(e.keyCode === 67 || 
// 		 e.keyCode === 86 || 
// 		 e.keyCode === 85 || 
// 		 e.keyCode === 117)) {
// 		alert('not allowed');
// 		return false;
// 	} else {
// 		return true;
// 	}
// };

document.addEventListener('DOMContentLoaded', function() {
    // Disable right-clicking on the entire page
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || // Ctrl+C
         e.keyCode === 86 || // Ctrl+V
         e.keyCode === 85 || // Ctrl+U
         (e.ctrlKey && e.shiftKey && e.keyCode === 73))) { // Ctrl+Shift+I
        alert('Never Give Up');
        e.preventDefault(); // Prevent the default action
    }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) { // F12 key code
        e.preventDefault(); // Prevent default action
        alert('I am Coder');
    }
});



});


var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
	visitCount = Number(visitCount) + 1;
	localStorage.setItem("page_view", visitCount);
} else {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
	counterContainer.innerHTML = visitCount;
});

