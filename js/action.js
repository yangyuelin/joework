/*========== parallax =========*/
$(function() {
	$('.button-collapse').sideNav();
	$('.parallax').parallax();


  // Materialize.toast(message, displayLength, className, completeCallback);
  Materialize.toast('文字藍色底線有外連至官網哦!', 3400) // 4000 is the duration of the toast
});


/*-------------------------------------------------------------------------------
	PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function() {
	$('.preloader').fadeOut(500); // set duration in brackets
});




/*========== Scroll =========*/
$('.body').click(function() {
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $('#body').offset().top
	}, 800);
});
$('.content').click(function() {
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $('#content').offset().top
	}, 800);
});
$('.work').click(function() {
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $('#work').offset().top
	}, 800);
});
$('.experience').click(function() {
	event.preventDefault();
	$('html,body').animate({
		scrollTop: $('#experience').offset().top
	}, 800);
});

/*========== Wookmark =========*/
$('#tiles').imagesLoaded(function() {
	// Prepare layout options.
	var options = {

		autoResize: true, // This will auto-update the layout when the browser window is resized.
		container: $('#main'), // Optional, used for some extra CSS styling
		offset: 5, // Optional, the distance between grid items
		itemWidth: 250, // Optional, the width of a grid item
		fillEmptySpace: true, // Optional, fill the bottom of each column with widths of flexible height
		ignoreInactiveItems: true,

	};

	var handler = $('#tiles li'),
		filters = $('#filters a');

	handler.wookmark(options);


	var onClickFilter = function(e) {
		var $item = $(e.currentTarget),
			activeFilters = [],
			filterType = $item.data('filter');

		if (!$item.hasClass('active')) {
			filters.removeClass('active');
		};
		$item.toggleClass('active');

		if ($item.hasClass('active')) {
			activeFilters.push($(this).data('filter'));

		};

		handler.wookmarkInstance.filter(activeFilters);
	}

	$('#filters').on('click.wookmark-filter', 'a', onClickFilter);
});

/*========== Go Top =========*/
if ($('#back-to-top').length) {
	var scrollTrigger = 100, // px
		backToTop = function() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}
		};
	backToTop();
	$(window).on('scroll', function() {
		backToTop();
	});
	$('#back-to-top').on('click', function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});
}

/*========== Nav =========*/
// $(window).scroll(function() {
// 	if ($(window).scrollTop() >= 20) {
// 		$("nav").addClass('black-off');
// 	} else {
// 		$("nav").removeClass('black');
// 	};
// });

// $(window).scroll(function() {
// 	if ($(window).scrollTop() >= 300) {
// 		$("nav").fadeIn(300).addClass('black2');
// 	} else {
// 		$("nav").removeClass('black2');
// 	};
// });



