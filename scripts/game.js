const game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById('score').innerText = game.score;
}

function addTurn() {
    game.currentGame.push('button1');
}

module.exports = { game, newGame, showScore };