import readlineSync from 'readline-sync';
export const username = () => {
console.log("Welcome to the Brain Games!");
    var name  = readlineSync.question('May I have your name? ');
console.log('Hi ' + name + '!');
}