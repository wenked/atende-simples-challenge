import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FILMSTITLES_QUERY } from '@graphql/Queries';
import { filmInterface } from 'src/types';
import { ItemListContainer } from '@components/Layout/ItemListContainer/styles';
import { ListContainer } from '@components/Layout/ListContainer/styles';
import { LoadingContainer } from '@components/Layout/LoadingContainer/styles';

const Films: React.FC = () => {
	const { error, loading, data } = useQuery(FILMSTITLES_QUERY);
	const [films, setFilms] = useState<filmInterface[]>();

	useEffect(() => {
		if (data) {
			setFilms(data.allFilms.films);
		}
	}, [data]);

	return error ? (
		<LoadingContainer>Failed to fetch data</LoadingContainer>
	) : loading ? (
		<LoadingContainer>Loading...</LoadingContainer>
	) : (
		<ListContainer>
			{films?.map((film) => {
				return (
					<ItemListContainer key={film.id}>{film.title}</ItemListContainer>
				);
			})}
		</ListContainer>
	);
};

export default Films;
