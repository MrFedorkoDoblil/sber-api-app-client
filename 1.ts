interface Pet {
    name: string;
  };
  let pet: Pet;
  // dog's inferred type is { name: string; owner: string; }
  let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
  pet = dog;
  console.log('%c1.ts line:8 pet.', 'color: #007acc;', pet);