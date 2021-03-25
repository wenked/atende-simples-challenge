import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

describe('rendering components', () => {
	it('renders App component without crashing', () => {
		shallow(
			<MockedProvider>
				<App />
			</MockedProvider>
		);
	});
});
