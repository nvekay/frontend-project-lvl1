#!/usr/bin/env node
import { gameEngine } from '../src/index.js'
import { getRandomInt } from '../src/randomGenerator.js'


const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameData = () => {
    const rightAnswerAndQustion = ['', getRandomInt(0, 20)];
    if (rightAnswerAndQustion[1] % 2 === 0) {
      rightAnswerAndQustion[0] = 'yes';
    } else {
      rightAnswerAndQustion[0] = 'no';
    }
    return rightAnswerAndQustion;
};

gameEngine(description, gameData);
