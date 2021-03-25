import { MockedProvider } from '@apollo/client/testing';
import { mount, shallow } from 'enzyme';
import React from 'react';

import { PEOPLENAMES_QUERY } from '@graphql/Queries';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import People from './index';

const mockss = [
	{
		request: {
			query: PEOPLENAMES_QUERY,
		},
		result: {
			data: {
				allPeople: {
					people: [
						{
							name: 'Luke Skywalker',
							id: 'cGVvcGxlOjE=',
						},
						{
							name: 'C-3PO',
							id: 'cGVvcGxlOjI=',
						},
						{
							name: 'R2-D2',
							id: 'cGVvcGxlOjM=',
						},
						{
							name: 'Darth Vader',
							id: 'cGVvcGxlOjQ=',
						},
					],
				},
			},
		},
	},
];

describe('rendering component', () => {
	it('rendering without crashing', async () => {
		let wrapper = mount(
			<MockedProvider mocks={mockss} addTypename={false}>
				<People />
			</MockedProvider>
		);
		console.log(wrapper.debug());
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});
		wrapper.update();
		console.log(wrapper.debug());

		expect(
			wrapper.contains(<div className='sc-bdfBwQ vBmnt'>Darth Vader</div>)
		).toEqual(true);
	});
});
