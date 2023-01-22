const { MongoClient } = require('mongodb');
const request = require('supertest');
const createApp = require('../src/app');
const { config } = require('../src/config');
const { generateBook } = require('../src/fakes/book.fake');

const { dbName, dbUrl } = config;

describe('e2e tests', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(dbName);
  });
  afterAll(async () => {
    await database.dropDatabase();
    await server.close();
  });
  describe('test for [GET] /api/v1/books', () => {
    test('should return the list of books', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          ...generateBook(),
          year: 2002,
          author: 'Carlos',
        },
        {
          ...generateBook(),
          year: 2006,
          author: 'Juanito',
        },
      ]);
      console.log(seedData);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
