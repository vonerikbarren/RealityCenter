class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);


class Pokemon {
  constructor(pokename, type, health, attacks) {
    this.pokename = pokename;
    this.type = type;
    this.health = health;
    this.attacks = attacks;
  }
}

let pokeball_1 = new Pokemon("Pikachu", "electric", 25, ["spark", "shock"]);
let pokeball_2 = new Pokemon("Charmander", "Fire", 50, ["ember", "tail whip"]);

let charmanderAttacks = pokeball_2.attacks;
let pikachuAttacks = pokeball_1.attacks;
let attacks;

for (attacks of charmanderAttacks) {
  console.log(attacks);
}

for (attacks of pikachuAttacks) {
  console.log(attacks);
}