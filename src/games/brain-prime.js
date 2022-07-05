import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const question = getRandomInt(3, 30);
  let rightAnswer = '';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      rightAnswer = 'no';
      break;
    }rightAnswer = 'yes';
  }
  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
