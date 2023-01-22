const { faker } = require('@faker-js/faker');

const generateBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});
const generateManyBooks = (size) => {
  const limit = size ?? 20;
  const booksArray = [];
  for (let i = 0; i < limit; i += 1) {
    booksArray.push(generateBook);
  }
  return [...booksArray];
};

module.exports = { generateBook, generateManyBooks };
