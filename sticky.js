// Function to check if an element is partially in the viewport with a buffer
function isElementPartiallyInViewport(element, buffer = 100) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 0 - buffer &&
    rect.right >= 0 - buffer &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) + buffer
  );
}

// Function to handle the scroll event
function handleScroll() {
  const fadeElements = document.querySelectorAll('.fade');

  fadeElements.forEach((element) => {
    if (isElementPartiallyInViewport(element, 100)) {
      element.classList.add('fade-in');
    }
  });
}

// Add a scroll event listener to trigger the fading effect
window.addEventListener('scroll', handleScroll);

// Initially check if "fade" elements are in the viewport on page load
handleScroll();
