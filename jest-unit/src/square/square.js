function square(value) {
	if (value === 0) {
		return 0;
	}

	if (value === 1) {
		return 1;
	}

	return Math.pow(value, 2);
}

module.exports = square;
