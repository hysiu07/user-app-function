import React, { useRef } from 'react';
import User from './User';

import './UsersPanel.css';

const UsersPanel = () => {
	let inputRef = useRef(null);
	console.log(inputRef.current);
	return (
		<div className='container'>
			<h3>User name</h3>
			<form>
				<input type='text' ref={inputRef} className='input-name-user' />
				<input type='submit' className='btn' />
			</form>
			<User />
		</div>
	);
};
export default UsersPanel;
