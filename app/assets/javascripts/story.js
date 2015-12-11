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

  var groom = document.getElementById('groom')
  var walkers = document.getElementById('walkers');

  var scrollheight = document.body.scrollHeight;
  var windowheight = window.innerHeight;

  function parallaxStory() {
    var scrollTop = window.pageYOffset;
    var scrollAmount = (scrollTop / (scrollheight - windowheight)) * 100;
    //walkers
    if (scrollTop > 600 && scrollTop < 3340) {
      walkers.style.top = scrollTop -600  + 'px';
    }
    // first
    if (scrollTop < 810) {
      first.style.left = -30 + scrollAmount * 3.85 + '%';
    }
    // second
    if (scrollTop < 1000) {
      second.style.left = 140 - scrollAmount * 4.75 + '%';
    }
    //third
    if (scrollTop > 700 && scrollTop < 1460) {
      third.style.left = -100 + scrollAmount * 5.35 + '%';
    }
    // fourth
    if (scrollTop > 1400 && scrollTop < 1720) {
      fourth.style.left = 170 - scrollAmount * 4 + '%';
    }
    // fifth
    if (scrollTop > 1700 && scrollTop < 1944) {
      fifth.style.left = -100 + scrollAmount * 4 + '%';
    }
    //sixth
    if (scrollTop >1900 && scrollTop < 2200) {
      sixth.style.left = 170 - scrollAmount* 3.1 + '%';
    }
    // seventh
    if (scrollTop > 2200 && scrollTop < 2500) {
      seventh.style.left = -100 + scrollAmount * 3.1 + '%';
    }
    // eighth
    if (scrollTop > 2400 && scrollTop < 2800) {
      eighth.style.left = 200 - scrollAmount * 3.1 + '%';
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
    if (walking % 4 === 0 && scrollTop < 3085) {
      if ($('#walkers-walk').css('display') === "none") {
        $('#walkers-walk').css('display', 'block');
        $('#walkers-stand').css('display', 'none');
        // $('#walkers').css('background', 'rgba(0,0,0,0)');
      } else {
        $('#walkers-walk').css('display', 'none');
        $('#walkers-stand').css('display', 'block');
      }
      // if ($(walkers).css('background-image') === "url(http://localhost:3000/assets/nicknmolenewoutfit.png)") {
      //   $(walkers).css('background-image', "url(http://localhost:3000/assets/nickandmolewalk.png)");
      // } else {
      //   $(walkers).css('background-image', "url(http://localhost:3000/assets/nicknmolenewoutfit.png)");
      // }
    } else if (scrollTop >= 3085) {
      $('#walkers-walk').css('display', 'none');
      $('#walkers-stand').css('display', 'block');
    }

    if (scrollTop > 3340 && scrollTop < 4200) {
      var doc = document.getElementById('wrap');
      doc.style.bottom = -scrollTop + 3340 + 'px';
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

  $('.camera-link').on("click", function(){
    $(this).parent().css( "z-index", 60);
  })

  $('.storyclose').on("click", function() {
    $(this).parent().parent().parent().css('z-index', 2);
  })
});
