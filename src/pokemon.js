class Pokemon {
  static allPokemon = [];

  #health = 100;

  #level = 1;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  changeHealth(num) {
    this.#health += num;
  }

  get level() {
    return this.#level;
  }

  levelUp() {
    this.#level++;
    this.changeHealth(10);
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  isFainted() {
    return this.health <= 0;
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((poke) => poke.name === name);
  }

  attack(pokemon) {
    pokemon.changeHealth(-10 * this.level);
  }
}

// TEST YOUR CODE HERE
const charizard = new Pokemon('Charizard', 'Fire');
const squirtle = new Pokemon('Squirtle', 'Water');

// 1. Checking instance properties
console.log(charizard); // Pokemon { name: "Charizard", type: "Fire" }
console.log(squirtle); // Pokemon { name: "Squirtle", type: "Water" }

// 2. Leveling up a Pokemon
squirtle.levelUp(); // Squirtle leveled up to level 2!
squirtle.levelUp(); // Squirtle leveled up to level 3!
squirtle.levelUp(); // Squirtle leveled up to level 4!

// 3. Checking the level
// console.log(squirtle.getLevel); // 4
// OR if you use the get syntax
console.log(squirtle.level); // 4

// 4. Checking on health
// console.log(squirtle.getHealth);   // Should be 130
// OR if you use the get syntax
console.log(squirtle.health); // Should be 130

// 5. Attacking until one faints
while (!charizard.isFainted()) {
  squirtle.attack(charizard);
}
console.log('charizard has fainted!');

// 6. Finding a Pokemon instance
console.log(Pokemon.findByName('Charizard')); // Pokemon { name: "Charizard", type: "Fire" }

// 7. Viewing count of all Pokemon
console.log('Total Pokemon:', Pokemon.getTotalPokemon()); // 2
// DO NOT REMOVE
module.exports = { Pokemon };
