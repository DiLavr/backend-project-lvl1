import randomNumber from '../util.js';
import game from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameRound = () => {
  const num = randomNumber(1, 10);
  const rightAnswer = (isEven(num)) ? 'yes' : 'no';
  return [num, rightAnswer];
};

const evenBrain = () => game(gameRule, gameRound);

export default evenBrain;
