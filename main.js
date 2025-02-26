//! JavaScript review for the class Noble.

// Given the array of some elements here in the below case, the array of 4 items fruits:
const fruits =["Apple", "Banana", "Cherry", "Blueberry"];
console.log(fruits);

// Loop with delay using the forEach method on the array: here it takes two arguments (fruit, index):
// The method .forEach is called on the fruits object Array:
fruits.forEach((fruit, index) => {
    setTimeout(() => {
        console.log(fruit); // Log each fruit with delay
    }, index * 1000); // first delay is 0, 1000, 2000, 3000 miliseconds:
});

// Using the set interval to loop through an array with 1 second delay:
// Need a counter to index so that it can start:
let index = 0;

const interval = setInterval(() => {
    if (index < fruits.length) {
        console.log(fruits[index]); // Log the current fruit right now!
        index++; // increament and move on to the next index i.e. fruit
    } else {
        clearInterval(interval); 
        console.log("All fruits displayed!");
    }
}, 1000); // adding an interal of 1 second and loops through an array of fruits:

//! 
