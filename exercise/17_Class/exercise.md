1. Buat sebuah Class Superpower
2. Buat Sebuah Class Animal dengan constructnya (numLegs: number, isWarmBlooded = blood)
3. Buat Sebuah Class Bat dan Chicken dengan inheritance dari Class Animal
4. Expektasinya akan bisa melakukan hal seperti ini

```
// Instances
let newAnimalInstance     = new Animal,
    newBatInstance        = new Bat(2, false),
    newChickenInstance    = new Chicken(2, true),
    newChimpanzeeInstance = new Chimpanzee(2, true),
    newFoxInstance        = new Fox(4, false),
    newFrogInstance       = new Frog(2, true);

console.log('newAnimalInstance');
console.log(newAnimalInstance.superPower.useLaserVision());
console.log('----------------------------------------------');

console.log('newBatInstance');
console.log(newBatInstance);
console.log('----------------------------------------------');

console.log('newChickenInstance');
console.log(newChickenInstance.superPower.beInvisible());
console.log('----------------------------------------------');

console.log('newChimpanzeeInstance');
console.log(newChimpanzeeInstance.superPower.useLaserVision());
console.log('----------------------------------------------');

console.log('newFoxInstance');
console.log(newFoxInstance);
console.log('----------------------------------------------');

console.log('newFrogInstance');
console.log(newFrogInstance);
console.log('----------------------------------------------');
```