import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavMenuProps {
	click: boolean;
}

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	height: 100%;
	text-decoration: none;
	color: #eaf6ff;
	font-size: 0.9rem;
	transition: all 0.3s ease-in;
	&:hover {
		color: #009ffd;
	}
	&:active {
		color: #009ffd;
		border-bottom: 1px solid red;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		transition: all 0.3s ease;
	}
`;

export const Nav = styled.nav`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const NavBarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	margin-left: 10px;
`;

export const MobileIcon = styled.div`
	display: none;
	@media (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		background-coler: red;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul<NavMenuProps>`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${(props) => (props.click ? 0 : '-100%')};
		opacity: 1;
		transition: all 0.5s ease;
		background: #232528;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	@media (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;
