import { gameEngine } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const randomNumber = getRandomInt(3, 30);
  const rightAnswerAndQuestion = ['', randomNumber];
  for (let i = 2; i < randomNumber; i += 1) {
    if (rightAnswerAndQuestion[1] % i === 0) {
      rightAnswerAndQuestion[0] = 'no';
      break;
    }rightAnswerAndQuestion[0] = 'yes';
  }
  return rightAnswerAndQuestion;
};

const game = () => gameEngine(description, gameData);
export default game;
