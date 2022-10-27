const letterPositions = function(sentence) {
  const input = sentence.toLowerCase().replaceAll(' ', '');
  const results = {};
  for (const index in input) {

    (results[input[index]] === undefined) ? results[input[index]] = [Number(index)] : results[input[index]].push(Number(index));

  }
  return results;
};

module.exports = letterPositions;