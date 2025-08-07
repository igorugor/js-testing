const axios = require('axios');
const mapArrToStr = require('../mapArrToStr/mapArrToStr');

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');

		const userIds = response.data.map((user) => user.id);

		return mapArrToStr(userIds);
	} catch (e) {
		return [];
	}
};

module.exports = getData;
