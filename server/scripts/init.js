const UsersStore = require('../store/UsersStore');

const fighters = [
  {
    name: 'fighterA',
    score: 0,
    image: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png',
  },
  {
    name: 'fighterB',
    score: 0,
    image: 'https://www.smashbros.com/assets_v2/img/fighter/byleth/main.png',
  },
  {
    name: 'fighterC',
    score: 0,
    image: 'https://www.smashbros.com/assets_v2/img/fighter/link/main.png',
  },
  {
    name: 'fighterD',
    score: 0,
    image: 'https://www.smashbros.com/assets_v2/img/fighter/lucina/main.png',
  },
];

async function initialize() {
  await UsersStore.initializeDB();
  await UsersStore.removeDB();
  await UsersStore.addUsers(fighters);
}

try {
  initialize();
} catch (e) {
  console.log(e);
}
