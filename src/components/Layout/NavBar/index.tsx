import React from 'react';
import { StyledNavBar, NavLink } from './styles';

const NavBar: React.FC = () => {
	return (
		<StyledNavBar>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/films'>Films</NavLink>
			<NavLink to='/people'>People</NavLink>
			<NavLink to='/vehicles'>Vehicles</NavLink>
		</StyledNavBar>
	);
};

export default NavBar;
