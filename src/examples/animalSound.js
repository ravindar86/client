const animalSounds = {cat : 'meow', dog: 'bark'};
const animal = 'lion';
const sound = 'roar';
console.log({...animalSounds, [animal] : sound});