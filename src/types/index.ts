export interface filmInterface {
	episodeID: number;
	title: string;
	openingCrawl: string;
	director: string;
	producers: string[];
	releaseDate: string;
	id: string;
}

export interface vehicleInterface {
	id: string;
	name: string;
	model: string;
	vehicleClass: string;
	manufacturers: string[];
	costInCredits: number;
	length: number;
	crew: string;
	passengers: String;
	maxAtmospheringSpeed: number;
	cargoCapacity: number;
	consumables: string;
}

export interface peopleInterface {
	id: string;
	name: string;
	birthYear: string;
	eyeColor: string;
	gender: string;
	hairColor: string;
	height: number;
	mass: number;
	skinColor: string;
	homeworld: {
		name: string;
	};
	species: {
		name: string;
	};
}

export interface allDataInterface {}
