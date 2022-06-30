#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
export const userName = () => {
    console.log(`Hello, ${name}!`);
};

userName();

const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < roundCounter; i += 1) {
    const randomNumber = getRandomInt(1, 30);    
    console.log('Question:', randomNumber);
    const answerUser = readlineSync.question('Your answer: ');
        
    const answerYes = ((randomNumber % 2 === 0) && (answerUser === 'yes'));
    const answerNo = ((randomNumber % 2 !== 0) && (answerUser === 'no'));

}

gameEngine(description, gameData);