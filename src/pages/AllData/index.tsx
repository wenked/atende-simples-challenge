import { CustomButton } from '@components/Layout/CustomButton/styles';

import { ListContainer } from '@components/Layout/ListContainer/styles';
import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { ALLDATA_QUERY } from '@graphql/Queries';

import { FilmsTable } from '@components/FilmsTable';
import VehiclesTable from '@components/VehiclesTable';
import { PeopleTable } from '@components/PeopleTable';
import { Container } from './style';

const AllData: React.FC = () => {
	const { loading, error, data } = useQuery(ALLDATA_QUERY);
	const [showFilmData, setShowFilmData] = useState(false);
	const [showVehicleData, setShowVehicleData] = useState(false);
	const [showPeopleData, setShowPeopleData] = useState(false);

	return error ? (
		<h2>Failed to fetch data</h2>
	) : loading ? (
		<h2>Loading...</h2>
	) : (
		<ListContainer>
			<Container>
				<CustomButton
					onClick={() => {
						setShowFilmData(!showFilmData);
					}}>
					Films
				</CustomButton>
				{showFilmData && <FilmsTable filmsData={data.allFilms.films} />}
			</Container>

			<Container>
				<CustomButton
					onClick={() => {
						setShowPeopleData(!showPeopleData);
					}}>
					People
				</CustomButton>
				{showPeopleData && <PeopleTable peopleData={data.allPeople.people} />}
			</Container>
			<Container>
				<CustomButton
					onClick={() => {
						setShowVehicleData(!showVehicleData);
					}}>
					Vehicles
				</CustomButton>
				{showVehicleData && (
					<VehiclesTable vehiclesData={data.allVehicles.vehicles} />
				)}
			</Container>
		</ListContainer>
	);
};

export default AllData;
