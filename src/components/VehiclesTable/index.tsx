import React from 'react';
import { vehicleInterface } from 'src/types';
import { Cell, Container } from './styles';

interface VehiclesTableProps {
	vehiclesData: vehicleInterface[];
}

const VehiclesTable: React.FC<VehiclesTableProps> = ({ vehiclesData }) => {
	return (
		<Container>
			<Cell id='row-header'>ID</Cell>
			<Cell id='row-header'>Name</Cell>
			<Cell id='row-header'>Model</Cell>
			<Cell id='row-header'>Vehicle Class</Cell>
			<Cell id='row-header'>Manufactures</Cell>
			<Cell id='row-header'>Cost in Credits</Cell>
			<Cell id='row-header'>Length</Cell>
			<Cell id='row-header'>Crew</Cell>
			<Cell id='row-header'>Passengers</Cell>
			<Cell id='row-header'>Max Atm Speed</Cell>
			<Cell id='row-header'>Cargo Capacity</Cell>
			<Cell id='row-header'>Consumables</Cell>
			{vehiclesData.map((vehicle, i) => {
				return (
					<React.Fragment key={i}>
						<Cell data-title='ID'>{vehicle.id}</Cell>
						<Cell data-title='Name'>{vehicle.name}</Cell>
						<Cell data-title='Model'>{vehicle.model}</Cell>
						<Cell data-title='Vehicle Class'>{vehicle.vehicleClass}</Cell>
						<Cell data-title='Manufacturer'>
							{vehicle.manufacturers.map((manufacturer) => manufacturer)}
						</Cell>
						<Cell data-title='Cost in Credits'>{vehicle.costInCredits}</Cell>
						<Cell data-title='Length'>{vehicle.length}</Cell>
						<Cell data-title='Crew'>{vehicle.crew}</Cell>
						<Cell data-title='Passengers'>{vehicle.passengers}</Cell>
						<Cell data-title='Max atm speed'>
							{vehicle.maxAtmospheringSpeed}
						</Cell>
						<Cell data-title='Cargo Capacity'>{vehicle.cargoCapacity}</Cell>
						<Cell data-title='Consumables'>{vehicle.consumables}</Cell>
					</React.Fragment>
				);
			})}
		</Container>
	);
};

export default VehiclesTable;
