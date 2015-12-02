$(document).ready(function() {

  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}

  var molly = document.getElementById('molly');

  var scrollheight = document.body.scrollHeight;
  var windowheight = window.innerHeight;

  function parallaxMolly() {
    var scrollTop = window.pageYOffset;
    var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 400;
    if (scrollTop < 1000) {
      molly.style.left = -10 + scrollAmount + '%';
    }
  };


  window.addEventListener('scroll', function() {
    requestAnimationFrame(parallaxMolly);
  }, false);

  window.addEventListener('resize', function() {
    var scrollTop = window.pageYOffset;
    var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 400;
    molly.style.left = -10 + scrollAmount + '%';
  });

});
