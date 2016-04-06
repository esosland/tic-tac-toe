$(document).ready(function(){
    var turnCount=0;

      $('#game-board').find('td').on('click', function(){
            if (turnCount % 2 === 0){
              $(this).text('X');
              checkVictory('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              checkVictory('O');
            }
          turnCount++;

      });


    function checkVictory(player){
       //top row check
        if ($('#game-board').find('#a1').text() !== ''){
            if ($('#game-board').find('#a1').text() == $('#game-board').find('#a2').text()) {
                if ($('#game-board').find('#a1').text() == $('#a3').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
      //left column check
            if ($('#game-board').find('#a1').text() == $('#game-board').find('#b1').text()) {
                if ($('#game-board').find('#a1').text() == $('#c1').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        //left diagonal check
            if ($('#game-board').find('#a1').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#a1').text() == $('#c3').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

       //middle column check
        if ($('#game-board').find('#a2').text() !== ''){
            if ($('#game-board').find('#a2').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#a2').text() == $('#c2').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //right column check
        if ($('#game-board').find('#a3').text() !== ''){
            if ($('#game-board').find('#a3').text() == $('#game-board').find('#b3').text()) {
                if ($('#game-board').find('#a3').text() == $('#c9').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
            //right diag check
            if ($('#game-board').find('#a3').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#a3').text() == $('#c1').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //middle row check

        if ($('#game-board').find('#b1').text() !== ''){
            if ($('#game-board').find('#b1').text() == $('#game-board').find('#b2').text()) {
                if ($('#game-board').find('#b1').text() == $('#b3').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //bottom row check
        if ($('#game-board').find('#c1').text() !== ''){
            if ($('#game-board').find('#c1').text() == $('#game-board').find('#c2').text()) {
                if ($('#game-board').find('#c1').text() == $('#c3').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

    }


    $('#newGame').on('click',function(){
        $('.box').text('');
    });

});
