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
	

	$("#scroll-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#body-two").offset().top
    }, 2000);
	});
	

	$("#scroll-nav-resume").click(function() {
    $('html, body').animate({
        scrollTop: $("#body-three").offset().top
    }, 2000);
	});	
})			