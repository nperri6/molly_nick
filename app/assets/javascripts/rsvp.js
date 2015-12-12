$(document).ready(function(){
  guestsAdded = 0
  $(".add-new-guest").on("click", function(event){
    guestsAdded +=1;
    event.preventDefault();
    $.ajax({
      method: 'get',
      url: 'guests/new',
      data: {guests: guestsAdded }
    })
    .done(function(data){
      $('.additional-guests').append(data);
    })
  });

  // var cards = document.querySelectorAll(".card.effect__click");
  // for ( var i  = 0, len = cards.length; i < len; i++ ) {
  //   var card = cards[i];
  //   clickListener( card );
  // }

  $('#rsvpButton').on('click', function(action){
    action.preventDefault();
    $('.card__front').addClass('flipped');
    $('.card__back').addClass('flipped-back');
    curdata = $(this).parent().parent().serialize()
    $.ajax({
      method: 'post',
      url: '/guests/create',
      data: curdata
    })
    .done(function(data){})
  })
  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
});
