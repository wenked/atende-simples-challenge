import React from 'react';
import { mount } from 'enzyme';

import Home from './index';
import { FilmsTable } from '@components/FilmsTable';
import { MockedProvider } from '@apollo/client/testing';

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

describe('rendering component', () => {
	it('rendering without crashing', () => {
		mount(
			<MockedProvider>
				<Home />
			</MockedProvider>
		);
	});
});

describe('passing props ', () => {
	const FilmsWrapper = mount(<FilmsTable filmsData={filmsDataa} />);
	it('accepts filmsData props', () => {
		expect(FilmsWrapper.props().filmsData).toEqual(filmsDataa);
	});
});
