$(document).ready(function(){
	$('.title').typeIt({
     typeSpeed: 60,
     breakLines: false,
     lifeLike: true
	});
	$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#body-two").offset().top
    }, 2000);
});
})