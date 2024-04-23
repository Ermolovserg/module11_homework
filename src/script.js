function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number') {
        return 'Ошибка';
    }
    return (percent / 100) * number;
}

module.exports = getPercents;