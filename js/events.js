function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.key === 'G') {
      alert('You pressed G')
    }
  })
}



$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
 
});
