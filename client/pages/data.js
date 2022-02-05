import React from 'react';
import Link from 'next/link';
const data = () => {
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
