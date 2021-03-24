import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Filmes from './pages/Filmes';
import Pessoas from './pages/Pessoas';
import Veiculos from './pages/Veiculos';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/filmes' component={Filmes} />
			<Route path='/pessoas' component={Pessoas} />
			<Route path='/veiculos' component={Veiculos} />
		</Switch>
	);
};

export default Routes;
