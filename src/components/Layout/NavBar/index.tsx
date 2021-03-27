import React, { useState } from 'react';
import {
	NavLink,
	MobileIcon,
	Nav,
	NavBarContainer,
	NavMenu,
	NavItem,
} from './styles';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavBar: React.FC = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<IconContext.Provider value={{ color: 'white' }}>
			<Nav>
				<NavBarContainer>
					<MobileIcon onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MobileIcon>
					<NavMenu onClick={handleClick} click={click}>
						<NavItem>
							<NavLink to='/'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/films'>Films</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/people'>People</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/vehicles'>Vehicles</NavLink>
						</NavItem>
					</NavMenu>
				</NavBarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default NavBar;
