import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => {
	return (
		<header>
			<div>
				<NavLink to="/uncontrolled"> Uncontrolled </NavLink>
				<NavLink to="/controlled"> Controlled </NavLink>
				<NavLink to="/user"> User </NavLink>
			</div>
		</header>
	);
};

export default header;
