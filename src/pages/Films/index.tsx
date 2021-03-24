import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useQuery, gql } from '@apollo/client';
import { FILMS_QUERY } from '@graphql/Queries';
import { filmInterface } from 'src/types';
import Film from '@components/Film';

const Films: React.FC = () => {
	const { error, loading, data } = useQuery(FILMS_QUERY);
	const [films, setFilms] = useState<filmInterface[]>();

	useEffect(() => {
		if (data) {
			console.log(data);
			setFilms(data.allFilms.films);
		}
	}, [data]);

	return loading ? (
		<h2>Loading...</h2>
	) : (
		<Container>
			{films?.map((film) => {
				return <Film film={film} key={film.id} />;
			})}
		</Container>
	);
};

export default Films;
