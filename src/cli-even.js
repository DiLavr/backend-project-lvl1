import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  const isEven = (number) => number % 2 === 0;
  const chooseAnswer = (num) => (num === true ? 'yes' : 'no');

  for (let i = 0; i < 3; i += 1) {
    let result = '';
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Answer: ');

    if (userAnswer === chooseAnswer(isEven(randomNumber))) {
      result = 'Correct!';
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}!`);
      return;
    }
    console.log(result);
  }
  console.log(`Congratulations, ${userName}`);
};

export default evenGame;
