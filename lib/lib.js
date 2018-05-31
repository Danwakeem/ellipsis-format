const calculateLongestSet = (input, min) => {
  if (!Array.isArray(input)) throw { message: 'Invalid input type' };
  const longestSet = input.reduce((a, curr) => {
    const currSize = curr[0].length + curr[1].length;
    return currSize > a ? currSize : a;
  }, 0);

  return longestSet >= min ? longestSet+1 : min;
};

const createOutput = (input, min) => {
  if (!Array.isArray(input)) throw { message: 'Invalid input type' };
  const output = [];
  input.forEach((row) => {
    const currSize = row[0].length + row[1].length;
    const numOfDots = min - currSize;
    const dots = Array.from({ length: numOfDots }, () => '.').join('');
    output.push(`${row[0]}${dots}${row[1]}`);
  });

  return output.join('\n');
}

module.exports = {
  createOutput,
  calculateLongestSet,
};
