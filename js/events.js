function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
    $('img').css({border-style:solid; border-color: red; border-width: medium})
  })
}



$(document).ready(function(){

  getIt()
  frameIt()

});
