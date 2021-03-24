import styled from 'styled-components';

export const CustomButton = styled.button`
	text-decoration: none;
	cursor: pointer;
	border: none;
	background: none;
	color: inherit;
	font-weight: 600;
	transition: all 0.3s ease-in;
	padding: 10px;
	margin: 10px;
	font-size: large;
	&:hover {
		color: #009ffd;
	}
`;
