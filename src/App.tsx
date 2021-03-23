import React from 'react';
import GlobalStyle from './styles/global';
import Veiculos from './pages/Veiculos';

const App: React.FC = () => {
	return (
		<div>
			<GlobalStyle />
			<Veiculos />
		</div>
	);
};

export default App;
