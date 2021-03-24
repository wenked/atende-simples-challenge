import React from 'react';
import { StyledNavBar, NavLink } from './styles';

const NavBar: React.FC = () => {
	return (
		<StyledNavBar>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/films'>Filmes</NavLink>
			<NavLink to='/people'>Pessoas</NavLink>
			<NavLink to='/vehicles'>Veículos</NavLink>
		</StyledNavBar>
	);
};

export default NavBar;
