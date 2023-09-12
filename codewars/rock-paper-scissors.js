/**
 Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */
const rps = (p1, p2) => {
    const game = {
        scissors: 1,
        paper: 2,
        rock: 3
    }
    const sum = game[p1] + game[p2]
    if(game[p1] === game[p2]) {
        return 'Draw!'
    //если сумма равна 3, нужно понять, только кто из двух (ножницы или бумага) победитель
    // если цифра 1 - ножницы, если цифра 2 бумага, ножницы всегда побеждают бумагу.
    } else if(sum === 3 && game[p1] === 1) { //цифра 1 - ножницы
        return "Player 1 won!"
    } else if(sum === 3 && game[p1] === 2) { //цифра 2 - бумагу
        return "Player 2 won!"
    //сумма из 4 это ножницы или камень, тут всегда побеждает камень
    } else if(sum === 4 && game[p1] === 1) { //цифра 1 означает ножницы
        return "Player 2 won!"
    } else if(sum === 4 && game[p1] === 3) { // цифра 3 означает камень
        return "Player 1 won!"
    //сумма из 5 это бумага и камень, тут всегда побеждает бумага
    } else if(sum === 5 && game[p1] === 2) { // цифра 2 означает бумагу
        return "Player 1 won!"
    } else if(sum === 5 && game[p1] === 3) { // цифра 3 означает камень
        return "Player 2 won!"
    }
};
console.log(rps('rock', 'paper'))