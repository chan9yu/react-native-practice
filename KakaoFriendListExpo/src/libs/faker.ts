import { fakerKO as faker } from '@faker-js/faker';

export type Profile = {
	id: string;
	uri: string;
	name: string;
	introduction: string;
};

export const generateProfile = (): Profile => ({
	id: faker.string.uuid(),
	uri: faker.image.url(),
	name: faker.person.firstName(),
	introduction: faker.word.sample()
});

export const generateProfiles = (count: number): Profile[] => Array.from({ length: count }, generateProfile);
