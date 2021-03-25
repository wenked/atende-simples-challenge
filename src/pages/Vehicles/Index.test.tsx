import { MockedProvider } from '@apollo/client/testing';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Vehicles from './index';

describe('rendering component', () => {
	it('rendering without crashing', () => {
		shallow(
			<MockedProvider>
				<Vehicles />
			</MockedProvider>
		);
	});
});
