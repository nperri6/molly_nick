$(document).ready(function() {

  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}
  var home = document.getElementById('home');
  var wrap= document.getElementById('wrap');

  var scrollheight = document.body.scrollHeight;
  var windowheight = window.innerHeight;

  function parallaxHome() {
    var scrollTop = window.pageYOffset;
    var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 400;
      home.style.bottom = -scrollTop + 'px';
      // wrap.style.top = -scrollTop + 'px';
  };


  window.addEventListener('scroll', function() {
    requestAnimationFrame(parallaxHome);
  }, false);

  // window.addEventListener('resize', function() {
  //   var scrollTop = window.pageYOffset;
  //   var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 400;
  //   molly.style.left = -10 + scrollAmount + '%';
  // });

});

