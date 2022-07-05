import readlineSync from 'readline-sync';

export const roundCounter = 3;

export const gameStart = (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < roundCounter; i += 1) {
    const [rightAnswer, question] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(rightAnswer) !== userAnswer) {
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
