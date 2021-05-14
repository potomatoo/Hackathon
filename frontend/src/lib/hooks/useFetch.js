import { useState, useEffect } from 'react';
export default function useFetch(url, option = { method: 'GET' }) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState('');
	const fetchInitialData = async () => {
		const response = await fetch(url, option);
		const result = await response.json();
		setData(result.data);
		console.log(data);
		setLoading(false);
	};
	useEffect(() => {
		fetchInitialData();
	}, []);
	return [data, loading];
}
