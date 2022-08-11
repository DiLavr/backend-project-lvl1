import randomNumber from '../util.js';
import game from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const gameRound = () => {
  const num = randomNumber(1, 10);
  const rightAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [num, rightAnswer];
};

const primeGame = () => game(gameRule, gameRound);

export default primeGame;
