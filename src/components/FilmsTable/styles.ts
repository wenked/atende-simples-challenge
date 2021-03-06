import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1fr 1fr 1fr 6fr 1fr 1fr;
	border-top: 1px solid gray;
	border-right: 1px solid gray;

	#row-header {
		font-weight: bold;
		background-color: #009ffd;
	}

	@media (max-width: 800px) {
		display: block;
	}
`;

export const Cell = styled.div`
	padding: 8px 4px;
	border-left: 1px solid gray;
	border-bottom: 1px solid gray;

	@media (max-width: 800px) {
		&:before {
			margin-bottom: 3px;
			content: attr(data-title);
			min-width: 98px;
			line-height: 10px;
			font-weight: bold;
			text-transform: uppercase;
			color: gray;
			display: block;
		}
	}
`;

Cell.displayName = 'FilmsCell';
