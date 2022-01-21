# The Lucky Number Generator (Revisited)
This is a follow-up of [Lucky Number Generator](https://github.com/teochewthunder/cny-luckynumber-generator) in the Year of the Pig. Our objective is to carry out some abstraction so that the existing code can be used for the Year of the Tiger (or any other year).

## Changes

### Legacy
1. All function names and variables that contain references to the word "pig" have been renamed to the more generic "animal".
2. Animation for the pig has been put in an *If* block.
3. Drawing for the pig is still in the *createAnimal()* function, but now the function has a parameter, *animal*. The drawing for the pig is encapsulated in an *If* block for when *animal* is "pig".

### New
