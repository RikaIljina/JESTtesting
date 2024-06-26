/**
 * @jest-environment jsdom
 */

beforeAll(() => {
    let fs = require("fs"); // node standard file system library
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})

const { game, newGame, showScore, addTurn, showTurns, lightsOn } = require('../game');

describe("game object contains correct keys", () => {
    test('score key exists', () => {
        expect('score' in game).toBe(true);
    });
    test('currentGame key exists', () => {
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves key exists', () => {
        expect('playerMoves' in game).toBe(true);
    });
    test('choices key exists', () => {
        expect('choices' in game).toBe(true);
    });
    test('choices contain correct ids', () => {
        expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
    });

});

describe('newGame works correctly', () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = [1,2];
        game.playerMoves = [1,2,3];
        document.getElementById('score').innerText = '42';
        newGame();
    });
    test('should reset game score to 0', () =>  {
        expect(game.score).toBe(0);
    });
    test("should be one move in computer's game array", () =>  {
        expect(game.currentGame.length).toEqual(1);
    });
    test('should reset playerMoves to []', () =>  {
        expect(game.playerMoves).toEqual([]);
    });
    test('should show 0 for element with ID score', () =>  {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});

describe('gameplay works correctly', () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test('addTurn adds a new turn to the game', () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
        }
    );
    test('should add correct class to light up the buttons', () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain('light');
    });
    test.each([[1, 2], [2, 4]])(
        'double(%d)',
        (input, expected) => {
            expect(input*2).toBe(expected);
        }
    );
    test('showTurns should update game.turnNumber', () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0);
    });
    
});


