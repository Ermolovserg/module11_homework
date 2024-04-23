const getPercents = require('./script');

test('Вычисление процента от числа', () => {
    expect(getPercents(50, 200)).toBe(100);
});

test('Строка', () => {
    expect(getPercents('50', 200)).toBe('Ошибка');
});

test('Массив', () => {
    expect(getPercents([50], 200)).toBe('Ошибка');
});