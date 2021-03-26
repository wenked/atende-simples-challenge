import React from 'react';
import { peopleInterface } from 'src/types';
import { Cell, Container } from './styles';

interface PeopleTableProps {
	peopleData: peopleInterface[];
}

const PeopleTable: React.FC<PeopleTableProps> = ({ peopleData }) => {
	return (
		<Container>
			<Cell id='row-header'>ID</Cell>
			<Cell id='row-header'>Name</Cell>
			<Cell id='row-header'>BirCell Year</Cell>
			<Cell id='row-header'>Eye Color</Cell>
			<Cell id='row-header'>Gender</Cell>
			<Cell id='row-header'>Hair Color</Cell>
			<Cell id='row-header'>Height</Cell>
			<Cell id='row-header'>Mass</Cell>
			<Cell id='row-header'>Skin Color</Cell>
			<Cell id='row-header'>Homeworld</Cell>
			<Cell id='row-header'>Species</Cell>

			{peopleData.map((people, i) => {
				return (
					<React.Fragment key={i}>
						<Cell data-title='ID'>{people.id}</Cell>
						<Cell data-title='Name'>{people.name}</Cell>
						<Cell data-title='Birth year'>{people.birthYear}</Cell>
						<Cell data-title='Eye Color'>{people.eyeColor}</Cell>
						<Cell data-title='Gender'>{people.gender}</Cell>
						<Cell data-title='Hair Color'>{people.hairColor}</Cell>
						<Cell data-title='Height'>{people.height}</Cell>
						<Cell data-title='Mass'>{people.mass}</Cell>
						<Cell data-title='Skin Color'>{people.skinColor}</Cell>
						<Cell data-title='Homeworld'>{people.homeworld.name}</Cell>
						<Cell data-title='Species'>
							{people.species === null ? 'null' : people.species.name}
						</Cell>
					</React.Fragment>
				);
			})}
		</Container>
	);
};

export default PeopleTable;
