import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  let rightAnswer = 1;
  for (let i = 0; num1 !== num2; i += 1) {
    if (num1 > num2) {
      num1 -= num2;
      rightAnswer = num1;
    } else {
      num2 -= num1;
      rightAnswer = num2;
    }
  }rightAnswer = num1;
  return rightAnswer;
};

const getRound = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);

  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
