import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  let num1 = getRandomInt(1, 50);
  let num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  let rightAnswer = 0;

  for (let i = 0; num1 !== num2; i += 1) {
    if (num1 > num2) {
      num1 -= num2;
      rightAnswer = num1;
    } else {
      num2 -= num1;
      rightAnswer = num2;
    }
  }rightAnswer = num1;
  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
