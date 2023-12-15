module.exports = {
  createRandomNumber: () => {
    const min = 100_000;
    const max = 999_999;
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
  },
};
