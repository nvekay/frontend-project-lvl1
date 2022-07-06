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
      throw new Error(`Unknown operator: '${randomSign}'!`);
  }
};

const signs = ['+', '-', '*'];

const getRound = () => {
  const number1 = getRandomInt(1, 20);
  const number2 = getRandomInt(1, 20);
  const getRandomSign = signs[getRandomInt(0, signs.length - 1)];
  const question = `${number1} ${getRandomSign} ${number2}`;
  const rightAnswer = calcRightAnswer(number1, number2, getRandomSign);
  return [rightAnswer, question];
};

const playCalcGame = () => gameStart(description, getRound);
export default playCalcGame;
