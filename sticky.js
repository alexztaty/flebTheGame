$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#sticky');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      var distance = $(window).width();
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.sticky').css('position', 'fixed');
          $('.sticky').css('top', '0');
       } 
	   if(scroll_start < offset.top) {
          $('.sticky').css('position', 'absolute');
          $('.sticky').css('top', '100vh');
       } 
   });
    }
});
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(250,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(250,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});