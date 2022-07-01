
import { gameEngine } from '../index.js'
import { getRandomInt } from '../randomGenerator.js'


const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameData = () => {
    const rightAnswerAndQustion = ['', getRandomInt(1, 40)];
    if (rightAnswerAndQustion[1] % 2 === 0) {
      rightAnswerAndQustion[0] = 'yes';
    } else {
      rightAnswerAndQustion[0] = 'no';
    }
    return rightAnswerAndQustion;
};

const game = () => gameEngine(description, gameData);
export default game;