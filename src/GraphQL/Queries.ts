import { gql } from '@apollo/client';

export const VEHICLESNAMES_QUERY = gql`
	query {
		allVehicles {
			vehicles {
				name
				id
			}
		}
	}
`;

export const FILMSTITLES_QUERY = gql`
	query {
		allFilms {
			films {
				title
				id
			}
		}
	}
`;

export const PEOPLENAMES_QUERY = gql`
	query {
		allPeople {
			people {
				id
				name
			}
		}
	}
`;

export const ALLDATA_QUERY = gql`
	query {
		allFilms {
			films {
				episodeID
				title
				openingCrawl
				director
				producers
				releaseDate
				id
			}
		}
		allPeople {
			people {
				id
				name
				birthYear
				eyeColor
				gender
				hairColor
				height
				mass
				skinColor
				homeworld {
					name
				}
				species {
					name
				}
				created
			}
		}
		allVehicles {
			vehicles {
				id
				name
				model
				vehicleClass
				manufacturers
				costInCredits
				length
				crew
				passengers
				maxAtmospheringSpeed
				cargoCapacity
				consumables
			}
		}
	}
`;

export const FILMS_QUERY = gql`
	query {
		allFilms {
			films {
				episodeID
				title
				openingCrawl
				director
				producers
				releaseDate
				created
				edited
				id
			}
		}
	}
`;

export const PEOPLE_QUERY = gql`
	query {
		allPeople {
			people {
				id
				name
				birthYear
				eyeColor
				gender
				hairColor
				height
				mass
				skinColor
				homeworld {
					name
				}
				species {
					name
				}
				created
			}
		}
	}
`;

export const VEHICLES_QUERY = gql`
	query {
		allVehicles {
			vehicles {
				id
				name
				model
				vehicleClass
				manufacturers
				costInCredits
				length
				crew
				passengers
				maxAtmospheringSpeed
				cargoCapacity
				consumables
			}
		}
	}
`;
