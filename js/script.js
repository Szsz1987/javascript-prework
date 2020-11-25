// ruch komputera
let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: ' + randomFraction);
let calculation = randomFraction * 3 + 1;
printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);
let roundNumber = Math.floor(calculation);
printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

if(roundNumber == '1'){
    computerMove = 'kamień';
}
else if (roundNumber == '2'){
    computerMove = 'papier';
}
else if (roundNumber == '3'){
    computerMove = 'nożyczki';
}
printMessage('Komputera ruch to: ' + computerMove);

// ruch gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
    playerMove = 'kamień';
}
else if (playerInput == '2'){
    playerMove = 'papier';
}
else if (playerInput == '3'){
    playerMove = 'nożyczki';
}
printMessage('Twój ruch to: ' + playerMove);