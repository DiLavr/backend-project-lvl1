import randomNumber from '../util.js';
import game from '../index.js';

const gameRule = 'What is the result of the expression?';

const chooseExpression = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    default:
      return num1 * num2;
  }
};

const gameRound = () => {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  const question = `${num1} ${arr[rand]} ${num2}`;
  const rightAnswer = String(chooseExpression(num1, num2, arr[rand]));
  return [question, rightAnswer];
};

const evenCalc = () => game(gameRule, gameRound);

export default evenCalc;
