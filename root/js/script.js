$(document).ready(function() {
	$('#mask').css('display', 'none');
	$('#open-btn').click(function(evt) {
		evt.preventDefault();
		$('#side-menu').stop().animate({
			left: '0',
			opacity: '1',
			position: 'fixed',
			display: 'block'
		}, 500,
		function() {
			$('#mask').fadeIn(500,
			function() {
				$('#mask').css({
					display: 'block',
					position: 'fixed'
				});
			});
		});
			$('#close-btn, #mask').click(function(evt) {
			evt.preventDefault();
			$('#side-menu').stop().animate({
				left: '-300px',
				opacity: '0'
			}, 500,
			function() {
				$('#mask').fadeOut(500);
			});
		});				
	});
});