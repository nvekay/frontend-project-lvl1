import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      return flag;
    }
  }
  return flag;
};

const getAnswer = (num) => {
  let rightAnswer = '';
  for (let i = 2; i < num; i += 1) {
    if (getPrime(num) === false) {
      rightAnswer = 'no';
      break;
    }rightAnswer = 'yes';
  }
  return rightAnswer;
};

const getRound = () => {
  const question = getRandomInt(3, 30);
  const rightAnswer = getAnswer(question);
  return [rightAnswer, question];
};

const playPrimeGame = () => gameStart(description, getRound);
export default playPrimeGame;
