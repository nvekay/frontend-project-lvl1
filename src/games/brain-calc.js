import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'What is the result of the expression?';

const calcRightAnswer = (number1, number2, randomSign) => {
  switch (randomSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const signs = ['+', '-', '*'];

const getRound = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);
  const randomSign = signs[getRandomInt(0, 3)];
  const question = `${number1} ${randomSign} ${number2}`;
  const rightAnswer = calcRightAnswer(number1, number2, randomSign);
  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
