import React from 'react';
import axios from 'axios';
const useAuth = () => {
	async function loadData() {
		const { data } = await axios.get('/api/data');
		return data;
	}

	return {
		loadData,
	};
};

export default useAuth;
