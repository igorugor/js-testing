const square = require('./square');

describe('square', () => {
	test('Корректное значение', () => {
		expect(square(2)).toEqual(4);
		expect(square(0)).toEqual(0);
		expect(square(1)).toEqual(1);
		expect(square(4)).toBeLessThan(17);
		expect(square(4)).toBeGreaterThan(15);
		expect(square(4)).not.toEqual(8);
		expect(square(4)).not.toBeUndefined();

		const spyOnMath = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyOnMath).toHaveBeenCalledTimes(1);
	});

	test('Call times', () => {
		const spyOnMath = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyOnMath).toHaveBeenCalledTimes(0);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
