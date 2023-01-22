const { multiply, division } = require('./02-math');

describe('Tests for math', () => {
  describe('multiplication math tests', () => {
    test('multiplication', () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
  describe('division math tests', () => {
    test('division 1', () => {
      expect(division(6, 2)).toBe(3);
    });
    test('division 2', () => {
      expect(division(1, 0)).toBeNull();
    });
  });
});
