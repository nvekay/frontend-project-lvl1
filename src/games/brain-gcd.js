#!/usr/bin/env node
import { gameEngine } from '../index.js'
import { getRandomInt } from '../randomGenerator.js'

const description = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
    let num1 = getRandomInt(1,50);
    let num2 = getRandomInt(1,50);
    const rightAnswerAndQustion = ['', [num1 +' '+ num2]];
    for (let i = 0; num1 !== num2; i += 1) {
        if (num1 > num2) {
            num1 = num1 - num2;
            rightAnswerAndQustion[0] = num1;
        } else {
            num2 = num2 - num1;
            rightAnswerAndQustion[0] = num2;
            }
    }
    return rightAnswerAndQustion;
};

const game = () => gameEngine(description, gameData);
export default game;