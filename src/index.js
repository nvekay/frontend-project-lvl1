import readlineSync, { question } from 'readline-sync';

export const roundCounter = 3;


export const gameEngine = (description, gameData) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log(description);

    for (let i = 0; i < roundCounter; i += 1) {
        const [rightAnswer, question] = gameData();
        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question('Your answer: ')
        

    }
};   