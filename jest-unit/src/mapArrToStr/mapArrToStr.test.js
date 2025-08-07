const mapArrToStr = require('./mapArrToStr');

describe('mapArrToStr', () => {
	test('Корректное значение', () => {
		expect(mapArrToStr([1, 2, 3])).toStrictEqual(['1', '2', '3']);
	});

	test('Мешанина вернёт числа в виде строки', () => {
		expect(mapArrToStr([1, 2, 3, null, undefined, '@if9829e4u29'])).toStrictEqual(['1', '2', '3']);
	});

	test('Пустой массив', () => {
		expect(mapArrToStr([])).toStrictEqual([]);
	});

	test('Массив без чисел', () => {
		expect(mapArrToStr([null, undefined, '@if9829e4u29'])).toStrictEqual([]);
	});

	test('Отрицание', () => {
		expect(mapArrToStr([1, 2, 3, 5])).not.toStrictEqual([1, 2, 3, 5]);
	});
});
