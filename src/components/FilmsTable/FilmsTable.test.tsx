import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import FilmsTable from './index';
import { render } from '@testing-library/react';

const films = [
	{
		id: 'ZmlsbXM6MQ==',
		episodeID: 4,
		title: 'A New Hope',
		openingCrawl:
			"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
		director: 'George Lucas',
		producers: ['Gary Kurtz', 'Rick McCallum'],
		releaseDate: '1977-05-25',
		created: '2014-12-10T14:23:31.880000Z',
		edited: '2014-12-20T19:49:45.256000Z',
	},
	{
		id: 'ZmlsbXM6Mg==',
		episodeID: 5,
		title: 'The Empire Strikes Back',
		openingCrawl:
			'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
		director: 'Irvin Kershner',
		producers: ['Gary Kurtz', 'Rick McCallum'],
		releaseDate: '1980-05-17',
		created: '2014-12-12T11:26:24.656000Z',
		edited: '2014-12-15T13:07:53.386000Z',
	},
	{
		id: 'ZmlsbXM6Mw==',
		episodeID: 6,
		title: 'Return of the Jedi',
		openingCrawl:
			'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
		director: 'Richard Marquand',
		producers: ['Howard G. Kazanjian', 'George Lucas', 'Rick McCallum'],
		releaseDate: '1983-05-25',
		created: '2014-12-18T10:39:33.255000Z',
		edited: '2014-12-20T09:48:37.462000Z',
	},
	{
		id: 'ZmlsbXM6NA==',
		episodeID: 1,
		title: 'The Phantom Menace',
		openingCrawl:
			'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
		director: 'George Lucas',
		producers: ['Rick McCallum'],
		releaseDate: '1999-05-19',
		created: '2014-12-19T16:52:55.740000Z',
		edited: '2014-12-20T10:54:07.216000Z',
	},
	{
		id: 'ZmlsbXM6NQ==',
		episodeID: 2,
		title: 'Attack of the Clones',
		openingCrawl:
			'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
		director: 'George Lucas',
		producers: ['Rick McCallum'],
		releaseDate: '2002-05-16',
		created: '2014-12-20T10:57:57.886000Z',
		edited: '2014-12-20T20:18:48.516000Z',
	},
	{
		id: 'ZmlsbXM6Ng==',
		episodeID: 3,
		title: 'Revenge of the Sith',
		openingCrawl:
			'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
		director: 'George Lucas',
		producers: ['Rick McCallum'],
		releaseDate: '2005-05-19',
		created: '2014-12-20T18:49:38.403000Z',
		edited: '2014-12-20T20:47:52.073000Z',
	},
];

describe('rendering component', () => {
	it('rendering table without crashing, and checking data', () => {
		const wrapper = mount(
			<MockedProvider>
				<FilmsTable filmsData={films} />
			</MockedProvider>
		);
		console.log(wrapper.debug());
	});
});

test('snapshot', () => {
	const wrapper = render(
		<MockedProvider>
			<FilmsTable filmsData={films} />
		</MockedProvider>
	);
	expect(wrapper.container.firstChild).toMatchSnapshot();
});
