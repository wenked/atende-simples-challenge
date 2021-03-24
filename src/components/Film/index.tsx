import { CustomButton } from '@components/Layout/CustomButton/styles';
import React, { useState } from 'react';
import { filmInterface } from 'src/types';
import { Container, InfoContainer } from './styles';

interface filmProps {
	film: filmInterface;
}

const Film: React.FC<filmProps> = ({ film }) => {
	const [showDetail, setShowDetail] = useState(false);

	return (
		<Container>
			<CustomButton onClick={() => setShowDetail(!showDetail)}>
				{film.title}
			</CustomButton>
			{showDetail && (
				<InfoContainer>
					<span>Episode Id: {film.episodeID}</span>
					<span>Opening Crawl: {film.openingCrawl}</span>
					<span>Director :{film.director}</span>
					<span>
						Producers:{' '}
						{film.producers.map((producer) => (
							<span>{producer}</span>
						))}
					</span>
					<span>Release Date: {film.releaseDate}</span>
				</InfoContainer>
			)}
		</Container>
	);
};

export default Film;
