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
});
