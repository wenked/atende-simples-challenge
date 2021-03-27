import React from 'react';
import { filmInterface } from 'src/types';
import { Cell, Container } from './styles';

interface FilmsTableProps {
	filmsData: filmInterface[];
}

const FilmsTable: React.FC<FilmsTableProps> = ({ filmsData }) => {
	return (
		<Container>
			<Cell id='row-header'>Episode Id</Cell>
			<Cell id='row-header'>ID</Cell>
			<Cell id='row-header'>Title</Cell>
			<Cell id='row-header'>Director</Cell>
			<Cell id='row-header'>Opening Crawl</Cell>
			<Cell id='row-header'>Producers</Cell>
			<Cell id='row-header'>Release Date</Cell>
			{filmsData.map((film, i) => {
				return (
					<React.Fragment key={i}>
						<Cell data-title='Episode ID'>{film.episodeID}</Cell>
						<Cell data-title='ID'>{film.id}</Cell>
						<Cell data-title='Title'>{film.title}</Cell>
						<Cell data-title='Director'>{film.director}</Cell>
						<Cell data-title='Opening Crawl'>{film.openingCrawl}</Cell>
						<Cell data-title='Producers'>
							{film.producers.map((producer, i) => {
								return (
									<React.Fragment key={i}>
										{producer}
										<br />
									</React.Fragment>
								);
							})}
						</Cell>
						<Cell data-title='Release Date'>{film.releaseDate}</Cell>
					</React.Fragment>
				);
			})}
		</Container>
	);
};

export default FilmsTable;
