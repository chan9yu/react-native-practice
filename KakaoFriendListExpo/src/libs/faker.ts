import { fakerKO as faker } from '@faker-js/faker';

export type Profile = {
	id: string;
	uri: string;
	name: string;
	introduction: string;
};

export const generateProfile = (): Profile => ({
	id: faker.string.uuid(),
	uri: faker.image.url({ width: 150, height: 150 }),
	name: faker.person.firstName(),
	introduction: Math.random() < 0.5 ? '' : faker.lorem.sentence(5)
});

export const generateProfiles = (count: number): Profile[] => Array.from({ length: count }, generateProfile);
