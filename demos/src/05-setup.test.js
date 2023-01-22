describe('Set', () => {
  beforeAll(() => {
    console.log('before all');
  });
  afterAll(() => {
    console.log('after all');
  });
  beforeEach(() => {
    console.log('beforeeach');
  });
  afterEach(() => {
    console.log('aftereach');
  });

  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(2 * 5).toBe(10);
  });

  describe('Other group', () => {
    afterAll(() => {
      console.log('after all');
    });

    test('Case 3', () => {
      console.log('Case 3');
      expect(8 + 3).toBe(11);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect(1 + 3).toEqual(4);
    });
  });
});
