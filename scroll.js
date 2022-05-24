var header = document.getElementById('header');
function fadeOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  if (scrollTop > distanceToTop) {
    if (1 - 1.5* (scrollTop - distanceToTop) / elementHeight > 0) {
		opacity = 1 - 1.5* (scrollTop - distanceToTop) / elementHeight	;
	} else {
		opacity = 0
	}
  }
  if (opacity >= 0) {
	document.getElementById('crest').style.opacity = opacity; 
  }
}
function scrollHandler() {
  fadeOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);