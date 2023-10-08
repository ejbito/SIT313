import { faker } from "@faker-js/faker";

const developers = [
  {
    name: faker.person.firstName(),
    description: "example text",
    rating: 4.7,
    img: faker.image.avatarLegacy(),
  },
  {
    name: faker.person.firstName(),
    description: "example text",
    rating: 4.4,
    img: faker.image.avatarLegacy(),
  },
  {
    name: faker.person.firstName(),
    description: "example text",
    rating: 4.2,
    img: faker.image.avatarLegacy(),
  },
];

export default developers;
