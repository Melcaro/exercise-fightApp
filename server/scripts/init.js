const UsersStore = require('../store/UsersStore');

const fighters = [
  {
    name: 'Mario',
    score: 0,
    totalMatches: 0,
    wonMatches: 0,
    lostMatches: 0,
    image: '/images/fighter1.png',
  },
  {
    name: 'Byleth',
    score: 0,
    totalMatches: 0,
    wonMatches: 0,
    lostMatches: 0,
    image: '/images/fighter2.png',
  },
  {
    name: 'Link',
    score: 0,
    totalMatches: 0,
    wonMatches: 0,
    lostMatches: 0,
    image: '/images/fighter3.png',
  },
  {
    name: 'Lucina',
    score: 0,
    totalMatches: 0,
    wonMatches: 0,
    lostMatches: 0,
    image: '/images/fighter4.png',
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
