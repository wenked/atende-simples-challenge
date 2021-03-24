import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavBar from '@components/Layout/NavBar';

const App: React.FC = () => {
	return (
		<Router>
			<NavBar />
			<Routes />
			<GlobalStyle />
		</Router>
	);
};

export default App;
