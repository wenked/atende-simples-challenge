import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import NavBar from '@components/Layout/NavBar';
import { render } from '@testing-library/react';

describe('rendering components', () => {
	it('renders App component without crashing', () => {
		shallow(<App />);
	});
	it('renders App component without crashing', () => {
		shallow(<NavBar />);
	});
});
