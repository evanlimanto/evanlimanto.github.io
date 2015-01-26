function stickyNav() {
  var nav = document.getElementById('nav-links');
  if(window.pageYOffset > 30) {
    nav.className = "fixed-top";
  }
  else {
    nav.className = "";
  }
}
function animateUp() {
  $("html, body").animate({ scrollTop: 0 }, 500);
}