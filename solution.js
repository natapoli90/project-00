$(document).ready(function() {

 var MOVE_AMOUNT = 40;
 var ZERO_CHAR_CODE = 48;
 var ONE_CHAR_CODE = 49;
 var FIVE_CHAR_CODE = 53;

 var p1 = {
   charCode: ONE_CHAR_CODE,
   number: 2,
   position: 0,
   $el: $(".player").eq(1),
   name: "Calvin"
 };
 var p2 = {
   charCode: ZERO_CHAR_CODE,
   number: 1,
   position: 0,
   $el: $(".player").eq(0),
   name: "Hobbes"
 };
 var p3 = {
   charCode: FIVE_CHAR_CODE,
   number: 3,
   position: 0,
   $el: $(".player").eq(2),
   name: "Pinky"
 };

 var players = [p1, p2, p3];

 $(document).on("keyup", evaluateKeypress);

 function move(player){
   player.position++;
   player.$el.css("left", player.position * MOVE_AMOUNT);
 }

 function checkForWinner(player){
   var player_selector = ".player" + player.number;
   if ($(".container").width() <= player.$el.offset().left + player.$el.outerWidth()) {
     $(document).off("keyup");
     $(player_selector + "Wins").show();
   }
 }

 function evaluateKeypress(e){
   players.forEach(function(player){
     if(e.which === player.charCode) {
       move(player);
       checkForWinner(player);
     }
   });
 }

});
