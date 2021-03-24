import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { VEHICLESNAMES_QUERY } from '@graphql/Queries';
import { vehicleInterface } from 'src/types';
import { ItemListContainer } from '@components/Layout/ItemListContainer/styles';
import { ListContainer } from '@components/Layout/ListContainer/styles';

const Vehicles: React.FC = () => {
	const { error, loading, data } = useQuery(VEHICLESNAMES_QUERY);
	const [vehicles, setVehicles] = useState<vehicleInterface[]>();

	useEffect(() => {
		if (data) {
			setVehicles(data.allVehicles.vehicles);
		}
	}, [data]);

	return error ? (
		<h2>Failed to fetch data</h2>
	) : loading ? (
		<h2>Loading...</h2>
	) : (
		<ListContainer>
			{vehicles?.map((vehicle) => (
				<ItemListContainer key={vehicle.id}>{vehicle.name}</ItemListContainer>
			))}
		</ListContainer>
	);
};

export default Vehicles;
