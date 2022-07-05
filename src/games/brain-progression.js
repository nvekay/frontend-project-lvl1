import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'What number is missing in the progression?';

const getRound = () => {
  const stepOfProgression = getRandomInt(3, 8);
  const lengthOfProgression = 10;
  let startOfProgression = getRandomInt(1, 10);
  const randomNum = getRandomInt(1, 9);
  const progressionQuestion = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    startOfProgression += stepOfProgression;
    progressionQuestion.push(startOfProgression);
  }
  progressionQuestion[randomNum] = '..';
  const rightAnswer = progressionQuestion[randomNum - 1] + stepOfProgression;
  const question = progressionQuestion.join(' ');
  return [rightAnswer, question];
};

const playSomeGame = () => gameStart(description, getRound);
export default playSomeGame;
