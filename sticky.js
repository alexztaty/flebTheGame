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
