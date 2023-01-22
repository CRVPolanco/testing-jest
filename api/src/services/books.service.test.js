const { generateBook, generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('tests for bookservice', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('tests', () => {
    test('should return a list of books', async () => {
      mockSpyGetAll.mockResolvedValue(generateManyBooks(10));
      const books = await service.getBooks({});

      expect(books.length).toEqual(10);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should return the name of the first book', async () => {
      mockSpyGetAll.mockResolvedValue([generateBook()]);
      const books = await service.getBooks({});

      expect(books.length).toEqual(1);
    });
  });
});
