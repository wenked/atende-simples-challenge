import { MockedProvider } from '@apollo/client/testing';
import { mount, shallow } from 'enzyme';
import React from 'react';
import VehiclesTable from './index';

const vehicles = [
	{
		id: 'sdasdasd',
		name: 'asdasd',
		model: 'sdasdasd',
		vehicleClass: 'asdfasdas',
		manufacturers: ['adfasdasd'],
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
		const wrapper = mount(
			<MockedProvider>
				<VehiclesTable vehiclesData={vehicles} />
			</MockedProvider>
		);
		console.log(wrapper.debug());
		expect(wrapper.find('Cell').text()).toEqual('Name');
	});
});
