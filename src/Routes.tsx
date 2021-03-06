import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Vehicles from './pages/Vehicles';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/films' component={Films} />
			<Route path='/people' component={People} />
			<Route path='/vehicles' component={Vehicles} />
			<Route path='/' component={Home} />
		</Switch>
	);
};

export default Routes;
