// tecnologies
export type Tecnology = {
	id?: number;
	category: string;
	clase: string;
};

export type Project = {
	id?: number;
	name: string;
	description: string;
	url: string;
	repo?: string;
	image: string;
	tecnologies: Tecnology[];
	year: string;
	category: string;
};
