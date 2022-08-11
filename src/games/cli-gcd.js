import randomNumber from '../util.js';
import game from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);
  if (num2 > num1) { const temp = num1; num1 = num2; num2 = temp; }
  for (;;) {
    if (num2 === 0) return num1;
    num1 %= num2;
    if (num1 === 0) return num2;
    num2 %= num1;
  }
};

const gameRound = () => {
  const num1 = randomNumber(1, 20);
  const num2 = randomNumber(1, 20);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));
  return [question, rightAnswer];
};

const evenGcd = () => game(gameRule, gameRound);

export default evenGcd;
