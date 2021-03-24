import { CustomButton } from '@components/Layout/CustomButton/styles';
import { ItemListContainer } from '@components/Layout/ItemListContainer/styles';
import { ListContainer } from '@components/Layout/ListContainer/styles';
import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { ALLDATA_QUERY } from '@graphql/Queries';

import { FilmsTable } from '@components/FilmsTable';
import VehiclesTable from '@components/VehiclesTable';
import { PeopleTable } from '@components/PeopleTable';

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
			<ItemListContainer>
				<CustomButton
					onClick={() => {
						setShowFilmData(!showFilmData);
					}}>
					Films
				</CustomButton>
				{showFilmData && <FilmsTable filmsData={data.allFilms.films} />}
			</ItemListContainer>

			<ItemListContainer>
				<CustomButton
					onClick={() => {
						setShowPeopleData(!showPeopleData);
					}}>
					People
				</CustomButton>
				{showPeopleData && <PeopleTable peopleData={data.allPeople.people} />}
			</ItemListContainer>
			<ItemListContainer>
				<CustomButton
					onClick={() => {
						setShowVehicleData(!showVehicleData);
					}}>
					Vehicles
				</CustomButton>
				{showVehicleData && (
					<VehiclesTable vehiclesData={data.allVehicles.vehicles} />
				)}
			</ItemListContainer>
		</ListContainer>
	);
};

export default AllData;
