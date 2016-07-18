$(document).ready(function(){
	$('.cube').click(function(){
		var color = $(this).css("background-color");
		$('body').css('background', color);
	});
});
	 
