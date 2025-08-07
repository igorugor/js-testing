function delay(callBack, ms) {
	return new Promise((res) => {
		setTimeout(() => {
			res(callBack());
		}, ms);
	});
}

module.exports = delay;
