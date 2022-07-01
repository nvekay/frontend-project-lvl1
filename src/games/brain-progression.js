import { gameEngine } from '../index.js';
import getRandomInt from '../randomGenerator.js';

const description = 'What number is missing in the progression?';

const gameData = () => {
  const stepOfProgression = getRandomInt(3, 8);
  const lengthOfProgression = 10;
  let startOfProgression = getRandomInt(1, 10);
  const randomNum = getRandomInt(1, 9);
  const question = [];
  const rightAnswerAndQuestion = ['', []];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    startOfProgression += stepOfProgression;
    question.push(startOfProgression);
  }
  question[randomNum] = '..';
  const rightAnswer = question[randomNum - 1] + stepOfProgression;
  rightAnswerAndQuestion[0] = rightAnswer;
  rightAnswerAndQuestion[1] = question.join(' ');
  return rightAnswerAndQuestion;
};

const game = () => gameEngine(description, gameData);
export default game;
