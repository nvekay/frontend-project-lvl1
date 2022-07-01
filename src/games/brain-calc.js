#!/usr/bin/env node

import { gameEngine } from '../index.js'
import { getRandomInt } from '../randomGenerator.js'

const description = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const gameData = () => {
const number1 = getRandomInt(50, 100);
const number2 = getRandomInt(1, 49);   
const randomSign = signs[Math.floor(Math.random() * signs.length)]; 
const rightAnswerAndQustion = ['', [`${number1} ${randomSign} ${number2}`]];
switch (randomSign) {
    case '+':
        rightAnswerAndQustion[0] = number1 + number2;
        break;
    case '-':
        rightAnswerAndQustion[0] = number1 - number2;
        break;
    case '*':
        rightAnswerAndQustion[0] = number1 * number2;
        break;
    default:

    }
    return rightAnswerAndQustion;    
}

gameEngine(description, gameData);
