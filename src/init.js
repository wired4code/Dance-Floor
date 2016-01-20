$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      (($("body").height() / 2) * Math.random() + 200),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    var pacX;
    var pacY;
    var x;
    var y;
    var distance;
    if (dancer instanceof PacDancer && dancers.length) {
      pacX = dancer.left;
      pacY = dancer.top;
      dancers.forEach(function(item, idx, array) {
        if (item.$node[0].className !== "pacman") {
          x = item.left;
          y = item.top;
          distance = Math.sqrt(Math.pow(pacX - x, 2) + Math.pow(pacY - y, 2));
          if (distance <= 125) {
            item.$node[0].className += ' hidden';
            array.splice(idx, 1);
          }
        }
      });
    }

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    $('.hidden').remove();
  });

  $('.lineup').on("click", function() {
    Dancer.prototype.lineUp();
  });

  $('.clear').on("click", function() {
    $('body > span').remove();
    window.dancers = [];
  });
});
