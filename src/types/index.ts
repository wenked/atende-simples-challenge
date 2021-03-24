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
