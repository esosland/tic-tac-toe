
function Player (name1, name2, mark, spaces) {
  this.name1 = name1;
  this.name2 = name2;
  this.mark = mark;
  this.spaces = [];
}

function Space (mark, boardLocation) {
  this.mark = mark;
  this.boardLocation = boardLocation;
}

function Game (/*player1, player2,*/ turnCount, gameOver){
  this.player1 = player1;
  this.player2 = player2;
  this.turnCount = turnCount;
  this.gameOver = gameOver;
}

var player1 = new Player ("X");
var player2 = new Player ("O");


$(document).ready(function(){


    var gameOver = false;
    var turnCount = 0;
    var newGame = new Game(turnCount, gameOver);


    $("#useNames").click(function(event){
        event.preventDefault();
        nameInput1 = $("#player1Name").val();
        nameInput2 = $("#player2Name").val();
        $("#playerOrder1").text(nameInput1);
        $("#playerOrder2").text(nameInput2);
      });
      $('#game-board').find('td').on('click', function(){
            if (newGame.turnCount % 2 === 0){
              $(this).text('X');
              checkVictory('X');
              $("#playerOrder1").hide();
              $("#playerOrder2").show();
            } else {
           //player 2's turn (O)
              $(this).text('O');
              checkVictory('O');
              $("#playerOrder1").show();
              $("#playerOrder2").hide();
            }
          newGame.turnCount++;

      });



    function checkVictory(player){
       //top row check
        if ($('#game-board').find('#a1').text() !== ''){
            if ($('#game-board').find('#a1').text() == $('#game-board').find('#a2').text()) {
                if ($('#game-board').find('#a1').text() == $('#a3').text()) {
                  if ($('#game-board').find('#a3').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#a3').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
          }

      //left column check

            if ($('#game-board').find('#a1').text() == $('#game-board').find('#b1').text()) {
                if ($('#game-board').find('#a1').text() == $('#c1').text()) {
                  if ($('#game-board').find('#a3').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#a3').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
          }
        //left diagonal check

            if ($('#game-board').find('#a1').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#a1').text() == $('#c3').text()) {
                  if ($('#game-board').find('#c3').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#c3').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
        }


//-------




}
       //middle column check
        if ($('#game-board').find('#a2').text() !== ''){
            if ($('#game-board').find('#a2').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#a2').text() == $('#c2').text()) {
                  if ($('#game-board').find('#c2').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#c2').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
        }
      }

//----------

        //right column check
        if ($('#game-board').find('#a3').text() !== ''){
            if ($('#game-board').find('#a3').text() == $('#game-board').find('#b3').text()) {
                if ($('#game-board').find('#a3').text() == $('#c9').text()) {
                  if ($('#game-board').find('#c9').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#c9').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
          }
            //right diag check

                if ($('#game-board').find('#a3').text() == $('#game-board').find('#b2').text()) {
                    if ($('#game-board').find('#a3').text() == $('#c1').text()) {
                      if ($('#game-board').find('#c1').text() === 'X'){
                        alert('Game over! '+ nameInput1 +' is the winner!');
                        $('#newGame').removeClass('invisible');
                      }
                      if ($('#game-board').find('#c1').text() === 'O'){
                        alert('Game over! '+ nameInput2 +' is the winner!');
                        $('#newGame').removeClass('invisible');
                      }
                }
            }

      }

//---------
        //middle row check

        if ($('#game-board').find('#b1').text() !== ''){
            if ($('#game-board').find('#b1').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#b1').text() == $('#b3').text()) {
                  if ($('#game-board').find('#b3').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#b3').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
        }
      }

//------

        //bottom row check
        if ($('#game-board').find('#c1').text() !== ''){
            if ($('#game-board').find('#c1').text() === $('#game-board').find('#c2').text()) {
                if ($('#game-board').find('#c1').text() === $('#c3').text()) {
                  if ($('#game-board').find('#c3').text() === 'X'){
                    alert('Game over! '+ nameInput1 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
                  if ($('#game-board').find('#c3').text() === 'O'){
                    alert('Game over! '+ nameInput2 +' is the winner!');
                    $('#newGame').removeClass('invisible');
                  }
            }
        }

    }

}


    $('#newGame').on('click',function(){
        $('.box').text('');
    });

});
