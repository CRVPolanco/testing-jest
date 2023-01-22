const request = require('supertest');

const createApp = require('../src/app');

describe('Test for the principal endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] / ', () => {
    test('should return hello world response', () => request(app)
      .get('/')
      .expect(200)
      .then((r) => expect(r.text).toEqual('Hello World!')));
  });
});
