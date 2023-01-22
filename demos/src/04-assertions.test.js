// matchers

test('test object', () => {
  const data = { name: 'Carlos' };
  data.lastName = 'Vera';
  expect(data).toEqual({ name: 'Carlos', lastName: 'Vera' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test booleans', () => {
  expect(false).toEqual(false);
  expect(true).toEqual(true);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('test strings', () => {
  expect('Randolph').toMatch(/ando/);
});

test('arrays / lists', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(2);
});
