import { CustomButton } from '@components/Layout/CustomButton/styles';
import React, { useState } from 'react';
import { vehicleInterface } from 'src/types';
import { Container } from './styles';

interface vehicleProps {
	vehicle: vehicleInterface;
}

const Vehicle: React.FC<vehicleProps> = ({ vehicle }) => {
	const [showDetail, setShowDetail] = useState(false);
	return (
		<Container>
			<CustomButton onClick={() => setShowDetail(!showDetail)}>
				{vehicle.name}
			</CustomButton>
		</Container>
	);
};

export default Vehicle;
