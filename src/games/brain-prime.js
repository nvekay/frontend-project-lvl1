import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => {
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return rightAnswer;
};

const getRound = () => {
  const question = getRandomInt(0, 30);
  const rightAnswer = getAnswer(question);
  return [rightAnswer, question];
};

const playPrimeGame = () => gameStart(description, getRound);
export default playPrimeGame;
