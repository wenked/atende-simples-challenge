import React from 'react';
import { mount } from 'enzyme';
import Home from './index';
import { FilmsTable } from '@components/FilmsTable';
import { MockedProvider } from '@apollo/client/testing';
import { ALLDATA_QUERY } from '@graphql/Queries';
import { act } from 'react-dom/test-utils';
import {
	fireEvent,
	getByAltText,
	getByTestId,
	render,
} from '@testing-library/react';

const filmsDataa = [
	{
		episodeID: 1,
		title: 'sdsds',
		openingCrawl: 'adadasd',
		director: 'asdasdasdasd',
		producers: ['saddasd'],
		releaseDate: 'string',
		id: 'assdasdfasd',
	},
];

const mocks = {
	request: {
		query: ALLDATA_QUERY,
	},
	result: {
		data: {
			allFilms: {
				films: [
					{
						episodeID: 4,
						title: 'A New Hope',
						openingCrawl:
							"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
						director: 'George Lucas',
						producers: ['Gary Kurtz', 'Rick McCallum'],
						releaseDate: '1977-05-25',
						id: 'ZmlsbXM6MQ==',
					},
				],
			},
			allPeople: {
				people: [
					{
						id: 1,
						name: 'Luke Skywalker',
						birthYear: '19BBY',
						eyeColor: 'blue',
						gender: 'male',
						hairColor: 'blond',
						height: 172,
						mass: 77,
						skinColor: 'fair',
						homeworld: {
							name: 'Tatooine',
						},
						species: null,
						created: '2014-12-09T13:50:51.644000Z',
					},
				],
			},
			allVehicles: {
				vehicles: [
					{
						id: 'dmVoaWNsZXM6NA==',
						name: 'Sand Crawler',
						model: 'Digger Crawler',
						vehicleClass: 'wheeled',
						manufacturers: ['Corellia Mining Corporation'],
						costInCredits: 150000,
						length: 36.8,
						crew: '46',
						passengers: '30',
						maxAtmospheringSpeed: 30,
						cargoCapacity: 50000,
						consumables: '2 months',
					},
				],
			},
		},
	},
};

describe('rendering component', () => {
	it('rendering  without crashing, testing buttons,rendering table', async () => {
		let wrapper = mount(
			<MockedProvider
				mocks={[mocks]}
				addTypename={false}
				defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}>
				<Home />
			</MockedProvider>
		);

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
		});

		wrapper.update();

		console.log(wrapper.debug());
		wrapper.find('CustomButton').first().simulate('click');
		console.log(wrapper.debug());

		expect(wrapper.find('FilmsCell').first().text()).toBe('Episode Id');

		wrapper.find('CustomButton').at(1).simulate('click');
		expect(wrapper.find('PeopleCell').first().text()).toBe('ID');
		console.log(wrapper.debug());

		wrapper.find('CustomButton').at(2).simulate('click');
		console.log(wrapper.debug());
		expect(wrapper.find('VehicleCell').at(1).text()).toBe('Name');
	});
});

test('snapshot', async () => {
	const { container } = render(
		<MockedProvider
			mocks={[mocks]}
			addTypename={false}
			defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}>
			<Home />
		</MockedProvider>
	);

	await act(async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	});

	expect(container.firstChild).toMatchSnapshot();
});

describe('passing props ', () => {
	const FilmsWrapper = mount(<FilmsTable filmsData={filmsDataa} />);
	it('accepts filmsData props', () => {
		expect(FilmsWrapper.props().filmsData).toEqual(filmsDataa);
	});
});
