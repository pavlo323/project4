$(function() {
	$(window).scroll(function() {
    $('.skill-free').each(function(){
        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	                $(this).addClass("fadeInUp");
	        }          
	    });    
	});    
	$(window).scroll(function() {
    $('#learn .section-title').each(function(){
        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	                $(this).addClass("fadeInLeft");
	        }          
	    });    
	});    
})


