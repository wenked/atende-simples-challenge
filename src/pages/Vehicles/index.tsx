import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { useQuery } from '@apollo/client';
import { VEHICLES_QUERY } from '@graphql/Queries';
import { vehicleInterface } from 'src/types';
import Vehicle from '@components/Vehicle';

const Vehicles: React.FC = () => {
	const { error, loading, data } = useQuery(VEHICLES_QUERY);
	const [vehicles, setVehicles] = useState<vehicleInterface[]>();

	useEffect(() => {
		if (data) {
			console.log(data);
			setVehicles(data.allVehicles.vehicles);
		}
	}, [data]);

	return loading ? (
		<h2>Loading...</h2>
	) : (
		<Container>
			{vehicles?.map((vehicle) => (
				<Vehicle key={vehicle.id} vehicle={vehicle} />
			))}
		</Container>
	);
};

export default Vehicles;
