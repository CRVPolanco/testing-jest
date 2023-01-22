const multiply = (a, b) => a * b;

const division = (a, b) => {
  if (b === 0) return null;
  return a / b;
};

module.exports = {
  multiply,
  division,
};
