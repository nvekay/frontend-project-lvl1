#!/usr/bin/env node
import { gameEngine } from '../index.js'
import { getRandomInt } from '../randomGenerator.js'

const description = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
    let num1 = getRandomInt(1,50);
    let num2 = getRandomInt(1,50);
    const rightAnswerAndQuestion = ['', [num1 +' '+ num2]];
    for (let i = 0; num1 !== num2; i += 1) {
        if (num1 > num2) {
            num1 = num1 - num2;
            rightAnswerAndQuestion[0] = num1;
        } else {
            num2 = num2 - num1;
            rightAnswerAndQuestion[0] = num2;
            }
    }
    return rightAnswerAndQuestion;
};

const game = () => gameEngine(description, gameData);
export default game;