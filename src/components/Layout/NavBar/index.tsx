import React from 'react';
import { StyledNavBar } from './styles';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
	return (
		<StyledNavBar>
			<Link to='/'>Home</Link>
			<Link to='/filmes'>Filmes</Link>
			<Link to='/pessoas'>Pessoas</Link>
			<Link to='/veiculos'>Veículos</Link>
		</StyledNavBar>
	);
};

export default NavBar;
