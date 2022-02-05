import React, { useEffect } from 'react';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
const data = () => {
	const { loadData } = useAuth();

	useEffect(async () => {
		const data = await loadData();
		console.log(data);
	}, []);

	return (
		<div>
			<h1>Data</h1>
			<h1>
				{' '}
				<Link href='/' passHref>
					Back
				</Link>{' '}
			</h1>
		</div>
	);
};

export default data;
