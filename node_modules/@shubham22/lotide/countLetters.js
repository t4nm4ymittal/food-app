//const assertEqual = require('./assertEqual');

const countLetters = function(inputString) {
  const input = inputString.toLowerCase().replaceAll(' ', '');
  let countLetterObject = {};

  for (const element of input) {

    (countLetterObject[element] === undefined) ? countLetterObject[element] = 1 : countLetterObject[element]++;

  }
  return countLetterObject;
};

module.exports = countLetters;

//Test code
/* const result = countLetters("lighthouse in the house");
assertEqual(result['l'], 1);
assertEqual(result['t'], 2);
assertEqual(result[' '], undefined); */