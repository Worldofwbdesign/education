
$(document).ready(function() {

    $(".preloader").delay(300).fadeOut(500);
	//Animate.css
	$(".s_advant").waypoint(function(direct){
		$(".adv-item").each(function(index){
			var ths = $(this);
			setTimeout(function(index){
				ths.animated("bounceInRight")
			}, 500 * index);
		});
	}, {offset: '100%'
});
	$("h2").animated("bounceInUp");
	$(".prof-item").animated("fadeInLeft");
	$(".form_wrapp").animated("rotateInUpLeft")
	$(".carousel-wrapp").animated("rollIn");
	$(".s_tizer .button, .map-tabs").animated("fadeInRight");
	$(".main-footer .button").animated("flipInY");
	$(".form_hidden").animated("fadeInUp");

	//Magnific Popups
	$('.form-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		removalDelay: 300,
		mainClass: 'mfp-fade',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = 'name';
				}
			}
		}
	});

	//Parallax
	if ($(window).width() > 768) {
		$.stellar({
			responsive: true,
			horizontalOffset: 50,
			verticalOffset: 80
		});
	};

	// Owl carousel comments
	$(".carousel-wrapp").owlCarousel({
		items : 1,
		nav : true,
		loop: true,
		navText : false,
		autoplay : true,
		autoplayHoverPause: true
	});
	//Equal heights

	//Header height
	function heightDetect() {
		$(".main-head").css("min-height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//Tabs scripts START
	$(".phone .tab_item").not(":first").hide();
	$(".phone .tab").click(function() {
		$(".phone .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".head_descr .tab_item").not(":first").hide();
	$(".head_descr .tab").click(function() {
		$(".head_descr .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".head_descr .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".map-tabs .tab_item").not(":first").hide();
	$(".map_wrapp").not(":first").hide();
	$(".map-tabs .tab").click(function() {
		$(".map-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".map-tabs .tab_item").hide().eq($(this).index()).fadeIn()
		$(".map_wrapp").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".main-footer .tab_item").not(":first").hide();
	$(".main-footer .tab").click(function() {
		$(".main-footer .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".main-footer .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	//Tabs scripts END

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
