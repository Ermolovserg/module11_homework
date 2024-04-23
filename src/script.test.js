const getPercents = require('./script');

test('Процент равен нулю', () => {
    expect(getPercents(0, 100)).toBe(0);
  });


