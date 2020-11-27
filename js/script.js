{
/* Function */
    function playGame(playerInput){
    function clearMessages();
    
    function getMoveName(argMoveId){
        if (argMoveId == 1) {
            return 'kamień';
        }
        else if (argMoveId == 2) {
            return 'papier';
        }    
        else if (argMoveId == 3) {
            return 'nożyczki';
        }    
        else {
            return 'nieznany ruch';
        }
        }
      const randomNumber = Math.floor (Math.random () * 3 + 1 );
      console.log ('Wylosowana liczba to: ' + randomNumber);
    
        const ComputerMove = getMoveName(randomNumber) 
        printMessage('Mój ruch to: ' + ComputerMove);
    
    /*
    if(roundNumber == '1'){
        computerMove = 'kamień';
    }
    else if (roundNumber == '2'){
        computerMove = 'papier';
    }
    else if (roundNumber == '3'){
        computerMove = 'nożyczki';
    }
    else {
        computerMove = 'nieznany ruch';
    }

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    /* player */
    const playerMove = getMoveName(playerInput) 
    printMessage('Twój ruch to: ' + playerMove);

    /*
    if(playerInput == '1'){
    playerMove = 'kamień';
    }
    else if (playerInput == '2'){
    playerMove = 'papier';
    }
    else if (playerInput == '3'){
    playerMove = 'nożyczki';
    }
    else {
    playerMove = 'nieznany ruch';
    }
    printMessage('Twój ruch to: ' + playerMove);
    */

   function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem' + argComputerMove + ', a ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
      }
    else if ( argComputerMove == 'nożyczki' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
      }
    else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyczki'){
        return 'Ty wygrywasz!';
    }  
    else if( argComputerMove == argPlayerMove ){
        return 'Remis!';
      }
    else if( argPlayerMove == 'nieznany ruch'){
        return 'Nieznany ruch!';
      }  
    else {
        return 'Przegrałeś:('
    } 
    
    displayResult (computerMove, playerMove);
    }
    document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
    });
    document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
    });
}}