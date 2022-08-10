import readlineSync from 'readline-sync';

const game = (gameRule, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < 3; i += 1) {
    let result = '';
    const [task, rightAnswer] = gameRound();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer === rightAnswer) {
      result = 'Correct!';
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \n Let's try again, ${userName}!`);
      return;
    }
    console.log(result);
  }
  console.log(`Congratulations, ${userName}`);
};

export default game;
