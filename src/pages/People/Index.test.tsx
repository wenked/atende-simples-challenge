import { MockedProvider } from '@apollo/client/testing';
import { mount, shallow } from 'enzyme';
import React from 'react';
import People from './index';

describe('rendering component', () => {
	it('rendering without crashing', () => {
		shallow(
			<MockedProvider>
				<People />
			</MockedProvider>
		);
	});
});
