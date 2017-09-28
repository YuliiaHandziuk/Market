$(function() {
	var options = {
		$AutoPlaySteps: 1,
		$SlideWidth: 200,
		$Cols: 3,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$Steps: 1
		}
	};
	var slider = new $JssorSlider$("slider_custom", options);

	function ScaleSlider() {
		var refSize = slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 809);
			slider.$ScaleWidth(refSize);
		}
		else 
		{
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
});


	$('.dl-trigger').click(function() {
		var dropdown = $('div.menu-links');
		if(dropdown.hasClass('active')) {
			dropdown.hide();
			dropdown.removeClass('active');
		} else {
			dropdown.show();
			dropdown.addClass('active');
		}
	});


