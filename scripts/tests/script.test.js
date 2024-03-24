/**
 * @jest-environment jsdom
 */

// const { describe } = require('yargs');
const addNums = require('../script.js');

describe("Calculator", () => {
    describe("Addition tests", () => {
        test('should return 20 + 22 = 42', () => {
            expect(addNums(20, 22)).toBe(42);
        });
        test('should return 10 + 22 = 32', () => {
            expect(addNums(10, 22)).toBe(32);
        });

    });

});