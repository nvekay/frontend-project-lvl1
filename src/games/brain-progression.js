import { gameStart } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'What number is missing in the progression?';

const getProgresion = (progressionLength, stepProgression) => {
  const progression = [];
  let num = stepProgression;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(num);
    num += stepProgression;
  }
  return progression;
};

const getRound = () => {
  const stepProgression = getRandomInt(1, 7);
  const progressionLength = getRandomInt(7, 10);
  const progression = getProgresion(progressionLength, stepProgression);
  const randomNum = getRandomInt(0, progressionLength - 1);
  const rightAnswer = (progression[randomNum]);
  progression[randomNum] = '..';
  return [rightAnswer, progression.join(' ')];
};

const playProgressionGame = () => gameStart(description, getRound);
export default playProgressionGame;
