const generateRandomNumber = require('./index');

test('generates a random number between 0 and 50', () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(50);
});