import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavBar = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #eaf6ff;
	padding: 1rem 2rem;
	font-size: 0.9rem;
	transition: all 0.3s ease-in;
	&:hover {
		color: #009ffd;
	}
	&:active {
		color: #009ffd;
		border-bottom: 1px solid red;
	}
`;
