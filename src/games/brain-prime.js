import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  let rightAnswer = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      rightAnswer = 'no';
      break;
    }rightAnswer = 'yes';
  }
  return rightAnswer;
};

const getRound = () => {
  const question = getRandomInt(3, 30);
  const rightAnswer = getPrime(question);
  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
