// Get the button:
let mybutton = document.getElementById("toTheTopButton");

// When the user scrolls, check if they have reached the bottom or if they have scrolled up to show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && 
      (window.innerHeight + window.scrollY) < document.body.offsetHeight) {
    // Show button = yes if scroll (20px atleast) = yes but bottom = no
    mybutton.style.display = "block";
  } else {
    // If user is at the bottom or hasn't scrolled down 20px, hide the button
    mybutton.style.display = "none";
  }
}

// To the Top Button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Internet Explorer and Opera
}
