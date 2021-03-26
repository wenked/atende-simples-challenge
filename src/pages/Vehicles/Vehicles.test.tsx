import { MockedProvider } from '@apollo/client/testing';
import { VEHICLESNAMES_QUERY } from '@graphql/Queries';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Vehicles from './index';

const mocks = [
	{
		request: {
			query: VEHICLESNAMES_QUERY,
		},
		result: {
			data: {
				allVehicles: {
					vehicles: [
						{
							id: 'dmVoaWNsZXM6NA==',
							name: 'Sand Crawler',
						},
						{
							id: 'dmVoaWNsZXM6Ng==',
							name: 'T-16 skyhopper',
						},
						{
							id: 'dmVoaWNsZXM6Nw==',
							name: 'X-34 landspeeder',
						},
						{
							id: 'dmVoaWNsZXM6OA==',
							name: 'TIE/LN starfighter',
						},
						{
							id: 'dmVoaWNsZXM6MTQ=',
							name: 'Snowspeeder',
						},
					],
				},
			},
		},
	},
];

describe('rendering component', () => {
	it('rendering without crashing', async () => {
		const wrapper = mount(
			<MockedProvider
				mocks={mocks}
				addTypename={false}
				defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}>
				<Vehicles />
			</MockedProvider>
		);

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
		});
		wrapper.update();
		expect(wrapper.find('ItemListContainer').first().text()).toBe(
			'Sand Crawler'
		);
		console.log(wrapper.debug());
	});
});

test('snapshot', async () => {
	const { container } = render(
		<MockedProvider
			mocks={mocks}
			addTypename={false}
			defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}>
			<Vehicles />
		</MockedProvider>
	);

	await act(async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	});

	expect(container.firstChild).toMatchSnapshot();
});
