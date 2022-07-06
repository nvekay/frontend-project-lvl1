import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => {
  let rightAnswer = '';
  if (isEven(num) === true) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const getRound = () => {
  const question = getRandomInt(1, 40);
  const rightAnswer = getAnswer(question);
  return [rightAnswer, question];
};

const playEvenGame = () => gameStart(description, getRound);
export default playEvenGame;
