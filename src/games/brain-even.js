import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => {
  let rightAnswer = '';
  if (question % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const getRound = () => {
  const question = getRandomInt(1, 40);
  const rightAnswer = isEven(question);
  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
