import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllData from './pages/AllData';
import Films from './pages/Films';
import People from './pages/People';
import Vehicles from './pages/Vehicles';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path='/films' component={Films} />
			<Route path='/people' component={People} />
			<Route path='/vehicles' component={Vehicles} />
			<Route path='/' component={AllData} />
		</Switch>
	);
};

export default Routes;
