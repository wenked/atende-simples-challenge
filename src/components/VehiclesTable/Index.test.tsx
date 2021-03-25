import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import VehiclesTable from './index';

const vehicles = [
	{
		id: 'xcvvxcggh',
		name: 'John',
		model: 'sdasdasd',
		vehicleClass: 'asdfasdasxd',
		manufacturers: ['adfasdaxasqqsd'],
		costInCredits: 123,
		length: 123,
		crew: '2323',
		passengers: '213123',
		maxAtmospheringSpeed: 2323,
		cargoCapacity: 3232,
		consumables: 'dasds',
	},
];

describe('rendering component', () => {
	it('rendering without crashing', () => {
		const wrapper = render(
			<MockedProvider>
				<VehiclesTable vehiclesData={vehicles} />
			</MockedProvider>
		);
		console.log(wrapper.debug());
		expect(wrapper.container.innerHTML).toMatch('Name');
		expect(wrapper.container.innerHTML).toMatch('John');
	});
});
