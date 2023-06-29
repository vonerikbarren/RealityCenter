class Pokemon {
  constructor(
    initialHealth,
    initialAttackStrength,
    initialDefenseStrength,
    initialSpeed,
    counterHealth,
    counterAttackStrength,
    counterDefenseStrength,
    counterSpeed,
    pokemonKO = 0,
    initialPokemonName,
    counterPokemonName,
    initPokeAttack1,
    initPokeAttack2,
    initPokeAttack3,
    initPokeAttack4,
    counterPokeAttack1,
    counterPokeAttack2,
    counterPokeAttack3,
    counterPokeAttack4,
  ) {
    this.initialHealth = initialHealth;
    this.initialAttackStrength = initialAttackStrength;
    this.initialDefenseStrength = initialDefenseStrength;
    this.initialSpeed = initialSpeed;
    this.counterHealth = counterHealth;
    this.counterAttackStrength = counterAttackStrength;
    this.counterDefenseStrength = counterDefenseStrength;
    this.counterSpeed = counterSpeed;
    this.pokemonKO = 0;
    this.initialPokemonName = initialPokemonName;
    this.counterPokemonName = counterPokemonName;
    this.initPokeAttack1 = initPokeAttack1;
    this.initPokeAttack2 = initPokeAttack2;
    this.initPokeAttack3 = initPokeAttack3;
    this.initPokeAttack4 = initPokeAttack4;
    this.counterPokeAttack1 = counterPokeAttack1;
    this.counterPokeAttack2 = counterPokeAttack2;
    this.counterPokeAttack3 = counterPokeAttack3;
    this.counterPokeAttack4 = counterPokeAttack4;

  }

  initialPokemonNameChange = (initialPokemonName) => {
    this.initialPokemonName = initialPokemonName;
    console.log(initialPokemonName);
  }

  counterPokemonNameChange = (counterPokemonName) => {
    this.counterPokemonName = counterPokemonName;
    console.log(counterPokemonName);
  }

  initialPokemonStatsInit = (initialHealth, initialAttackStrength, initialDefenseStrength, initialSpeed) => {
    this.initialHealth = initialHealth;
    this.initialAttackStrength = initialAttackStrength;
    this.initialDefenseStrength = initialDefenseStrength;
    this.initialSpeed = initialSpeed;
    console.log(`${this.initialPokemonName}...has the following stats:`);
    console.log(`${this.initialPokemonName}'s health = ${initialHealth}`);
    console.log(`${this.initialPokemonName}'s attack = ${initialAttackStrength}`);
    console.log(`${this.initialPokemonName}'s defense = ${initialDefenseStrength}`);
    console.log(`${this.initialPokemonName}'s speed = ${initialSpeed}`);
  }

  counterPokemonStatsInit = (counterHealth, counterAttackStrength, counterDefenseStrength, counterSpeed) => {
    this.counterHealth = counterHealth;
    this.counterAttackStrength = counterAttackStrength;
    this.counterDefenseStrength = counterDefenseStrength;
    this.counterSpeed = counterSpeed;
    console.log(`${this.counterPokemonName}...has the following stats:`);
    console.log(`${this.counterPokemonName}'s health = ${counterHealth}`);
    console.log(`${this.counterPokemonName}'s attack = ${counterAttackStrength}`);
    console.log(`${this.counterPokemonName}'s defense = ${counterDefenseStrength}`);
    console.log(`${this.counterPokemonName}'s speed = ${counterSpeed}`);
  }

  initialPokemonAttackNames = (initPokeAttack1, initPokeAttack2, initPokeAttack3, initPokeAttack4) => {
    this.initPokeAttack1 = initPokeAttack1;
    this.initPokeAttack2 = initPokeAttack2;
    this.initPokeAttack3 = initPokeAttack3;
    this.initPokeAttack4 = initPokeAttack4;
    console.log(`${this.initialPokemonName}... has the following attacks:`);
    console.log(`Attack1: ${initPokeAttack1} `);
    console.log(`Attack2: ${initPokeAttack2} `);
    console.log(`Attack3: ${initPokeAttack3} `);
    console.log(`Attack1: ${initPokeAttack4} `);
  }

  counterPokemonAttackNames = (counterPokeAttack1, counterPokeAttack2, counterPokeAttack3, counterPokeAttack4) => {
    this.counterPokeAttack1 = counterPokeAttack1;
    this.counterPokeAttack2 = counterPokeAttack2;
    this.counterPokeAttack3 = counterPokeAttack3;
    this.counterPokeAttack4 = counterPokeAttack4;
    console.log(`${this.counterPokemonName}... has the following attacks:`);
    console.log(`Attack1: ${counterPokeAttack1} `);
    console.log(`Attack2: ${counterPokeAttack2} `);
    console.log(`Attack3: ${counterPokeAttack3} `);
    console.log(`Attack1: ${counterPokeAttack4} `);
  }






}

var pikachu = new Pokemon()

pikachu.initialPokemonNameChange("Pikachu");
pikachu.counterPokemonNameChange("Squirtle");
pikachu.initialPokemonStatsInit(20, 10, 10, 10);
pikachu.counterPokemonStatsInit(20, 10, 10, 10);
pikachu.initialPokemonAttackNames("Quick Attack", "Spark", "Tackle", "Tail Whip");
pikachu.counterPokemonAttackNames("Tackle", "Defense Curl", "Tail Whip", "Water Gun");