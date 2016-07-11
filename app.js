
// Document ready statement
$(document).on("ready", function() {
    console.log("JS is loaded & ready");

// function for starting game & reset after button is clicked
    function startGame() {
        $(document).off("keypress", handleKeyPress);
        $(document).on("keypress", handleKeyPress);
        $("#brunette").css("left", "0px");
        $("#blonde").css("left", "0px");
    }


    $("#reset").on("click", function() {
       $('#board').hide();
        startGame();
    });
    function boardMsg(x){
       $('#board').show();
        return $("#board").text(x);
    }
    // Generate a generic method to move each of the two swimmers
    function moveGirl(id) {
        var $girl = $(id);
        var currentPosition = $girl.css("left");
        var currentPositionNumber = currentPosition.split("px")[0];
        var newPositionNumber = Number.parseFloat(currentPositionNumber) + 20;

        var containerWidth = $("#field").width() - 65;
        if (newPositionNumber >= containerWidth) {
            $girl.css("left", containerWidth + "px");
            var winMessage = $girl.attr("data-win");
            boardMsg(winMessage);
            $(document).off("keypress", handleKeyPress);
        } else {
            $girl.css("left", newPositionNumber + "px");
        }
    }

    // Generate a function to handle the KeyPress event. Add "preventDefault()"
    function handleKeyPress(event) {
        event.preventDefault();
        if (event.keyCode === 113) {
            moveGirl("#brunette");
        } else if (event.keyCode === 112) {
              moveGirl("#blonde");
          }
          return false;
      }
      $(document).on("keypress", handleKeyPress);
  });
