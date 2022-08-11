import randomNumber from '../util.js';
import game from '../index.js';

const gameRule = 'What number is missing in the progression?';

const progression = (num) => {
  const result = [];
  let numbers = 0;
  for (let i = 1; i <= 10; i += 1) {
    numbers += num;
    result.push(numbers);
  }
  return result;
};

const gameRound = () => {
  const step = randomNumber(1, 6);
  const hiddenNum = randomNumber(0, 9);
  const newArray = progression(step);
  const hiddenAnswer = newArray[hiddenNum];
  newArray[hiddenNum] = '..';
  const question = String(newArray.join(' '));
  const rightAnswer = String(hiddenAnswer);
  return [question, rightAnswer];
};

const progressionGame = () => game(gameRule, gameRound);

export default progressionGame;
