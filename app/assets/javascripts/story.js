$(document).ready(function() {

  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f){setTimeout(f, 1000/60)}

  var first = document.getElementById('first');
  var second = document.getElementById('second');
  var third = document.getElementById('third');
  var fourth = document.getElementById('fourth');
  var fifth = document.getElementById('fifth');
  var sixth = document.getElementById('sixth');
  var seventh = document.getElementById('seventh');
  var eighth = document.getElementById('eighth');

  var walkers = document.getElementById('walkers');

  var scrollheight = document.body.scrollHeight;
  var windowheight = window.innerHeight;

  function parallaxStory() {
    var scrollTop = window.pageYOffset;
    var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 400;
    //walkers
    if (scrollTop > 350 && scrollTop < 3085) {
      walkers.style.top = scrollTop-350  + 'px';
    }
    // first
    if (scrollTop < 620) {
      first.style.left = -10 + scrollAmount + '%';
    }
    // second
    if (scrollTop < 900) {
      second.style.left = 110 - scrollAmount + '%';
    }
    //third
    if (scrollTop < 1100) {
      third.style.left = -30 + scrollAmount + '%';
    }
    // fourth
    if (scrollTop > 900 && scrollTop < 1500) {
      fourth.style.left = 140 - scrollAmount + '%';
    }
    // fifth
    if (scrollTop > 1500 && scrollTop < 1800) {
      fifth.style.left = -50 + scrollAmount/1.15 + '%';
    }
    //sixth
    if (scrollTop > 1800 && scrollTop < 2200) {
      sixth.style.left = 150 - scrollAmount/1.20 + '%';
    }
    // seventh
    if (scrollTop > 1800 && scrollTop < 2400) {
      seventh.style.left = -65 + scrollAmount/1.25 + '%';
    }
    // eighth
    if (scrollTop > 2200 && scrollTop < 2700) {
      eighth.style.left = 170 - scrollAmount/1.20 + '%';
    }

    // if (scrollTop < 1000) {
    //   first.style.left = -10 + scrollAmount + '%';
    //   second.style.left = 110 - scrollAmount + '%';
    //   third.style.left = -30 + scrollAmount + '%';
    // }
  };


  walking = 0;
  function walkingMotion() {
    walking += 1;
    var walkers = document.getElementById('walkers');
    var scrollTop = window.pageYOffset;
    if (walking % 10 === 0 && scrollTop < 3085) {
      if ($(walkers).css('background-image') === "image-url(/assets/nicknmolenewoutfit.png)") {
        $(walkers).css('background-image', "image-url(/assets/nickandmolewalk.png)");
      } else {
        $(walkers).css('background-image', "image-url(/assets/nicknmolenewoutfit.png)");
      }
    } else if (scrollTop >= 3085) {
      $(walkers).css('background-image', "image-url(/assets/nicknmolenewoutfit.png)");
    }
  }
  window.addEventListener('scroll', function() {
    walkingMotion();
    requestAnimationFrame(parallaxStory);
  }, false);

  window.addEventListener('resize', function() {
    var scrollTop = window.pageYOffset;
    var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 400;
    // molly.style.left = -10 + scrollAmount + '%';
    // nick.style.left = 110 - scrollAmount + '%';
  });

});
