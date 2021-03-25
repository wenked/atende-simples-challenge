import { MockedProvider } from '@apollo/client/testing';
import { mount, shallow } from 'enzyme';
import React from 'react';
import Films from './index';
import { FILMSTITLES_QUERY } from '@graphql/Queries';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const mockss = [
	{
		request: {
			query: FILMSTITLES_QUERY,
		},
		result: {
			data: {
				allFilms: {
					films: [
						{
							id: 'ZmlsbXM6MQ==',
							title: 'A New Hope',
						},
						{
							id: 'ZmlsbXM6Mg==',
							title: 'The Empire Strikes Back',
						},
						{
							id: 'ZmlsbXM6Mw==',
							title: 'Return of the Jedi',
						},
						{
							id: 'ZmlsbXM6NA==',
							title: 'The Phantom Menace',
						},
						{
							id: 'ZmlsbXM6NQ==',
							title: 'Attack of the Clones',
						},
						{
							id: 'ZmlsbXM6Ng==',
							title: 'Revenge of the Sith',
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
				<Films />
			</MockedProvider>
		);
		console.log(wrapper.debug());
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});
		wrapper.update();
		console.log(wrapper.debug());

		expect(
			wrapper.contains(
				<div className='sc-bdfBwQ vBmnt'>Attack of the Clones</div>
			)
		).toEqual(true);
	});
});
