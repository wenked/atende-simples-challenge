import React from 'react';
import { StyledNavBar } from './styles';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
	return (
		<StyledNavBar>
			<Link to='/'>Home</Link>
			<Link to='/films'>Filmes</Link>
			<Link to='/people'>Pessoas</Link>
			<Link to='/vehicles'>Veículos</Link>
		</StyledNavBar>
	);
};

export default NavBar;
