import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (number) => number % 2 === 0;
  const chooseAnswer = (num) => (num === true ? 'yes' : 'no');

  for (let i = 0; i < 3; i += 1) {
    let result = '';
    const randomNumber = Math.floor(Math.random() * 101);
    const rightAnswer = chooseAnswer(isEven(randomNumber));
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer === rightAnswer) {
      result = 'Correct!';
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${chooseAnswer(isEven(randomNumber))}'. \n Let's try again, ${userName}!`);
      return;
    }
    console.log(result);
  }
  console.log(`Congratulations, ${userName}`);
};

export default evenGame;
