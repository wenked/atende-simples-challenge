import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { PEOPLENAMES_QUERY } from '@graphql/Queries';
import { peopleInterface } from 'src/types';
import { ItemListContainer } from '@components/Layout/ItemListContainer/styles';
import { ListContainer } from '@components/Layout/ListContainer/styles';

const People: React.FC = () => {
	const { loading, error, data } = useQuery(PEOPLENAMES_QUERY);
	const [people, setPeople] = useState<peopleInterface[]>();

	useEffect(() => {
		if (data) {
			if (data) {
				setPeople(data.allPeople.people);
			}
		}
	}, [data]);

	return error ? (
		<h2>Failed to fetch data</h2>
	) : loading ? (
		<h2>Loading...</h2>
	) : (
		<ListContainer>
			{people?.map((person) => {
				return (
					<ItemListContainer key={person.id}>{person.name}</ItemListContainer>
				);
			})}
		</ListContainer>
	);
};

export default People;
