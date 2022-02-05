import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import {
	AppstoreOutlined,
	CoffeeOutlined,
	LoginOutlined,
	LogoutOutlined,
	UserAddOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
	const [current, setCurrent] = useState('');

	const user = null;

	const router = useRouter();

	useEffect(() => {
		process.browser && setCurrent(window.location.pathname);
	}, [process.browser && window.location.pathname]);

	const logout = async () => {
		router.push('/login');
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand' href='#'>
				Navbar
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='#'>
							<Link href='/' passHref>
								Home
							</Link>
						</a>
					</li>
					<li className='nav-item'>
						<Link href='/login' passHref>
							Login
						</Link>
					</li>
					<li className='nav-item'>
						<Link href='/register' passHref>
							Registration
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default TopNav;
