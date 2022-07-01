import { gameEngine } from '../index.js'
import { getRandomInt } from '../randomGenerator.js'


const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const gameData = () => {
    const rightAnswerAndQuestion = ['', getRandomInt(1, 40)];
    if (rightAnswerAndQuestion[1] % 2 === 0) {
      rightAnswerAndQuestion[0] = 'yes';
    } else {
      rightAnswerAndQuestion[0] = 'no';
    }
    return rightAnswerAndQuestion;
};

const game = () => gameEngine(description, gameData);
export default game;