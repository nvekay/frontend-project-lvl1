import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const getRound = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);

  return [rightAnswer, question];
};

const playGcdGame = () => gameStart(description, getRound);
export default playGcdGame;
