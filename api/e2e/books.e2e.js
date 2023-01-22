const mockGetAll = jest.fn();

const request = require('supertest');
const createApp = require('../src/app');
const { generateBook } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('tests for endpoints', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('tests for [GET] /api/v1/books ', () => {
    test('should return books list', async () => {
      const books = generateBook();
      mockGetAll.mockResolvedValue([books]);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(1);
        });
    });
  });
});
