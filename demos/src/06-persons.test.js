const { Persons } = require('./06-person');

// AAA
describe('Tests for persons', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Persons('Carlos', 52, 1.75);
  });
  test('should return weight down', () => {
    // Arrange
    person.weight = 52;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });
  test('should return weight normal', () => {
    // Arrange
    person.weight = 58;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('normal');
  });
});
