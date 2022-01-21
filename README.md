# The Lucky Number Generator (Revisited)
This is a follow-up of [Lucky Number Generator](https://github.com/teochewthunder/cny-luckynumber-generator) in the Year of the Pig. Our objective is to carry out some abstraction so that the existing code can be used for the Year of the Tiger (or any other year).

## Changes

### Legacy
1. All function names and variables that contain references to the word "pig" have been renamed to the more generic "animal".
2. Animation for the pig has been put in an *If* block.
3. Drawing for the pig is still in the *createAnimal()* function, but now the function has a parameter, *animal*. The drawing for the pig is encapsulated in an *If* block for when *animal* is "pig".
4. The caption has been changed to become more generic.

### New
1. The *cny()* function now takes in a numeric argument which is the current year. There is an array containing all the animal names of the zodiac. The argument modulo the length of the array, will give us a pointer into the array that references the appropriate animal. That is the animal that will be drawn.
2. There is another *If* block to draw the tiger.
3. There is another *If* block that takes care of the tiger's animations.
