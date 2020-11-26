/* Function */

function getMoveName(argMoveId){
    if (argMoveId == 1){
        return 'kamień';
    }
    else if (argMoveId == 2){
        return 'papier';
    }    
    else if (argMoveId == 3){
        return 'nożyczki';
    }    
    else {
        return 'nieznany ruch';
    }
  }

  let randomNumber = Math.floor (Math.random () * 3 + 1 );
  console.log ('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber) 
  printMessage('Mój ruch to: ' + argComputerMove);


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
printMessage('Ruch przeciwnika to: ' + computerMove);
*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput) 

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
  }

