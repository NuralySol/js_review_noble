// Lesson 07.01 - START

// array.map()

// 4. Declare an array so that we can try out the **map()** method:
const fruits = ['apple', 'banana', 'blueberry', 'cherry', 'lemon', 'peach'];

// comparing map() to a for-loop

// 5. Declare a new empty array called **pies**
const pies = [];

// CHALLENGE: fill pies array w fruit pies:
// result: ['apple pie','banana pie','blueberry pie','cherry pie','lemon pie','peach pie']

// 6. Set up a for-loop that runs once for each item in the array:
for (i = 0; i < fruits.length; i++) {
    pies.push(fruits[i] + " pie");
}
console.log('for of loop pies:', pies);

// OR: use a for of loop:
const piez = [];
for (fru of fruits) {
    piez.push(fru + " pie");
}
console.log('for of loop piez:', piez);

// 7. Each time the loop runs, concatenate and push the new pie into the array:
// 9. Below the loop, log **pies** to the console:

// 10. Call the map() method on the **fruits** array, setting it equal to a 
//     new array, muffins, which will receive the return value of the map() method:
// 11. Pass a callback function to the **map()** method. The callback takes an 
//     argument of its own, fru, which represents the current array item ('apple', etc.):
// 12. Inside the function curly braces, concatenate and return the muffin, all in one line. 
//     The return statement accumulates the results into the new array.
//     The result is a new array of same length as the original, but with transformed items.

// 13. Log the new array to verify that it worked:
const muffins = fruits.map(function (fru) {
    return `${fru} muffin`;
});

console.log('mapped muffins:', muffins);
// ['apple muffin', 'banana muffin', 'blueberry muffin', 'cherry muffin', 'lemon muffin', 'peach muffin']

// calling the argument something besides e
// The callback function argument is e by default, but we could call it anything. 

// 14. Run map() again, saving the return value to a new variable and with fruit as the callback argument, instead of e. It works exactly the same as before:

// ['apple pie', 'blueberry pie', 'cherry pie']

// two arguments: e and i
// In addition to the current item as **e**, the current array item's **index** is available as **i**. 

// 15. Run map() again, saving the return value to a new variable and with the fruit pies numbered. The concatenation is getting longer, so switch to string interpolation. Start numbering at 1 by adding 1 to the index:
const numberedPies = fruits.map(function (e, i) {
    return `${i + 1}. ${e} pie`;
});
console.log('numberedPies (e,i):', numberedPies);
// ['1. apple pie', '2. blueberry pie', '3. cherry pie']

// array.filter()

// Let's save to the new array only the five-letter fruits. First, we'll do it with a loop:

// 16. Declare a new array called fruitsArr that includes several five-letter items. Also declare a new, empty array to hold the output:
const fruitsArr = ['apple', 'banana', 'cherry', 'grape', 'lemon', 'lime', 'mango', 'papaya', 'peach', 'orange'];
const fiveLetterFruits = [];

// 17. CHALLENGE: iterate the fruitsArr with a for loop, saving to the fiveLetterFruits array only those items with length of 5:

// Loop the array:
for (fru of fruitsArr) {
    // 18. With each iteration, check if the length of the current string equals 5:
    if (fru.length <= 5) {
        // 19. If the condition is true, push the fruit into the **fiveLetterFruits** array:
        fiveLetterFruits.push(fru);
    }
}

// 20. Log the **fiveLetterFruits** array:
console.log(fiveLetterFruits);
// ['apple', 'grape', 'lemon', 'lime', 'mango', 'peach'];

// Now to get five-character items using **filter()**, instead of a for loop:

// 21. Call filter() on fruitsArr, set equal to a variable to "catch" the return value: 

const filtered5Fruits = fruitsArr.filter(function (e) {
    return e.length <= 5; // only kept if it's true
})

console.log('filtered5Fruits:', filtered5Fruits);

// 22. Log the result:

// chaining methods: filter() into map()

// Suppose we want jellies of only five-letter fruits. This requires filter() to save the five-letter fruits, and then map() to add "jelly" to the string. We can run the two methods one right after another, with the second method called diretly on the first. This technique is called "chaining".

// 24. Declare an array called fiveLetterJellies and set it equal to the filter part:
// 25. Chain the map() method onto the end of the filter() method:
const fiveLetterJellies = fruitsArr.filter(function (e) {
    return e.length == 5;
}).map(function (e) {
    return `${e} jelly`;
});

// 26. Log the resulting **fiveLetterJellies** array. It should be just 5-letter fruits:
console.log('fiveLetterJellies:', fiveLetterJellies);
// ['apple jelly', 'grape jelly', 'lemon jelly', 'mango jelly', 'peach jelly']


// CHALLENGES => Homework
// map(), filter() and map().filter() challenges

const nums = [12, 15, 18, 20, 25, 27, 28, 34, 37, 41, 45, 48];

// map takes in function argument 

// 1. nums.map()
// do a map that stores the squares of each number
// in a new array called numsSq
// to warm up and get the logic working, you may first
// do this with a for loop
const numsSq = nums.map(num => num ** 2);
console.log("NumsSq: ", numsSq);

// 2. nums.map() with index
// do a map that stores the product of each number times its index
// in a new array called numsSq
// to warm up and get the logic working, you may first
// do this with a for loop
const numsTimesIndex = nums.map((num, index) => num * index);
console.log("numsTimesIndex: ", numsTimesIndex);

// 3. nums.filter()
// do a filter that saves all the odd numbers to a new array 
// called oddNums (hint: %)
const numsFilterOdd = nums.filter(num => num % 2 !== 0);
console.log("numsFilter: ", numsFilterOdd)

// 4. nums.filter().map()
// do a filter into map chaining that saves the square of all the 
// odd numbers into a new array called oddSquares
//! chaining the methods of filter to get the odd nums first and then squaring them and saving the result:
const oddSquared = nums.filter(num => num % 2 !== 0).map(num => num ** 2)
console.log("oddSquared: ", oddSquared);

// In addition to the current item e and the current index i, there is a third argument available, and that is a, the array itself. 
//? const fruits = ['apple', 'banana', 'blueberry', 'cherry', 'lemon', 'peach']; reference array for the exercise:

// In this next example, we will use **map()** with all three arguments to make strings of consecutive items joined by a hyphen ('apple-banana', etc.). These will be saved to a new **smoothies** array.

// 27. Call map() on the array, setting it equal to a new array, smoothies
// 28. Pass in the callback function with all three arguments: **(e, i, a)**:

//! the below code takes in 3 arguments to get the non-repeating smoothies array which creates a new array to store the values:
//* .map() method on array, 
const smoothiesArr = fruits.map((item, index, arr) => {
    return index < arr.length - 1 ? `${item}-${arr[index + 1]}` : null;
}).filter(item => item !== null);

console.log("Complete smoothies Arr: ", smoothiesArr);


// 29. Inside the map function, concatenate and return the hyphenated, consecutive words combos

// 30. Console log the result:

// ['apple-banana', 'banana-kiwi', 'kiwi-mango', 'mango-orange', 'orange-papaya', 'papaya-peach', 'peach-undefined']

// filter() by object property

// Given an array of objects, each a food menu item:
const entrees = [
    { name: 'Chicken with Waffles', vegetarian: false, price: 18, cals: 1200 },
    { name: 'Tofuburger', vegetarian: true, price: 8, cals: 480 },
    { name: 'T-Bone Steak', vegetarian: false, price: 24, cals: 1180 },
    { name: 'Quinoa Casserole', vegetarian: true, price: 14, cals: 560 },
    { name: 'Lobster', vegetarian: false, price: 36, cals: 750 },
    { name: 'NY Strip Steak', vegetarian: false, price: 42, cals: 1320 },
    { name: 'Banon Cheeseburger', vegetarian: false, price: 14, cals: 1400 },
    { name: 'Shrimp Scampi', vegetarian: false, price: 23, cals: 1060 },
    { name: 'Quinoa Burger Deluxe', vegetarian: true, price: 16, cals: 630 },
    { name: 'Chicken Salad Supreme', vegetarian: false, price: 13, cals: 710 },
    { name: 'Salmon Steak', vegetarian: false, price: 22, cals: 680 },
    { name: 'Pork Chop', vegetarian: false, price: 18, cals: 800 },
];

const nonVegMin15 = entrees.filter((item) => {
    return item.vegetarian == false && item.price >= 15;
});
//getting a non vegitems using double conditions with drilling in place:
console.log("nonVegMin15: ", nonVegMin15);

// We will use filter() to save to a new array all **non-vegetarian** entrees with a minimum **price** of 15.

// 31. Call filter() with its callback and set that equal to a new array:


// && (AND) operator for filtering with two conditions**
// 32. Use the && operator with filter() to return non-vegetarian items with a minimum price of 15:

// 32 Challenge: Use the && operator with filter() to return non-vegetarian items under 1000 calories:
const nonVegUnder1000Cal = entrees.filter((item) => {
    return item.vegetarian == false && item.cals <= 1000
})

console.log(nonVegUnder1000Cal)
// END: Lesson 07.02
// NEXT: Lesson 07.03

// 33. UBER CHALLENGE: filter().map() chaining:
// continuing from 32 filter challenge, chain on a map()
// where you add a new propery called ppCal, the value of which is the calories divided by the price / 100

//! chaining method of .filter().map() to add a new property called ppCall
const nonVegMin15ppCal = entrees
    .filter(item => item.vegetarian == false && item.cals <= 1000)
    .map(item => ({
        ...item,
        ppCal: parseFloat((item.cals / (item.price / 100)).toFixed(2)) //? this will limit the decimals to 2 convert it to the Number with parseFloat Method
    }));

// logging the price per calory:
console.log("Price per calory: ", nonVegMin15ppCal);

//! Lab: 07.01: Array Methods map and filter!

// 1. Given an array of vegetables, use **map()** to make new array of fresh veggies: ['fresh beet', 'fresh carrot', etc]
const veggies = ['beet', 'carrot', 'celery', 'cucumber', 'broccoli', 'cauliflower', 'lettuce'];

const freshVeggies = veggies.map((item) => {
    return `fresh ${item}`;
})

//! log the array of fresh veggies:
console.log("Mapped freshVeggies: ", freshVeggies); // ['fresh beet', 'fresh carrot', 'fresh celery', 'fresh cucumber', 'fresh broccoli', 'fresh cauliflower', 'fresh lettuce'];

// 2. Use **filter()**, make a new array containing only the veggies that start with the letter 'c':

const C_veggies = veggies.filter((item) => {
    return item.toLowerCase().startsWith("c");
})

console.log('C_veggies', C_veggies); //  ['carrot', 'celery', 'cucumber', 'cauliflower']


// 3. Using filter-into-map chaining, get just the veggies that start with 'c', but with the word 'crunchy' before each veggie:

const crunchyVeg = veggies.filter((item) => {
    return item.toLowerCase().startsWith("c");
}).map((item) => {
    return `crunchy ${item}`;
})

console.log('crunchyVeg', crunchyVeg); //  ['crunchy carrot', 'crunchy celery', 'crunchy cucumber', 'crunchy cauliflower']

// 4. Given two arrays, **furniture** and **woods**, use map to generate a new **woodFurniture** array, having all ten pieces of furniture, each with a random wood types:

//! Need to use Math.random() object to randomize the output of woods array to the length of that array (more dynamic):
const furniture = ["Desk", "Chair", "Bed", "Table", "Sofa", "Card Table", "Tea Table", "Chest", "Dresser", "Sideboard"];

const woods = ["Oak", "Walnut", "Mahogany", "Maple"];

const woodFurniture = furniture.map((item) => {
    const randomWood = woods[Math.floor(Math.random() * woods.length)]; //? pick a random wood between 1 - 4 (length of the array of woods)
    return `${randomWood} ${item}`;
})

console.log("Random Wood furniture: ", woodFurniture);
// HINT: inside the function, generate a random number in the range of the woodTypes array and use that number to get a random wood

// **assigning apartment numbers**
// **using map to make a 2D array from a 1D array**

// 5. An apartment building has four apartments on each of six floors. The floors and apt letters are provided:
//! given the mixed array types of floors and letter combine them to create six floors with each floor having 4 - apartments:
const floors = [1, 2, 3, 4, 5, 6];
const letters = ['A', 'B', 'C', 'D'];

// Using map, generate all 24 apartment units and save them to a nested array, consisting of 6 items, each an array of 4 items.
const aptUnits = floors.map(floor => letters.map(letter => `${floor}${letter}`));
console.log("2D data frame aptUnits: ", aptUnits);

// Desired output:
// [ ['1A', '1B', '1C', '1D'], ['2A', '2B', '2C', '2D'], ['3A', '3B', '3C', '3D'], ['4A', '4B', '4C', '4D'], ['4A', '4B', '4C', '4D'], ['6A', '6B', '6C', '6D']]

//! do the above a nested loop:
const aptUnitsLoop = [];

for (let floor of floors) {
    const row = [];
    console.log(floor);
    for (let letter of letters) {
        console.log(letter);
        row.push(`${floor}${letter}`)
    }
    aptUnitsLoop.push(row);
};

console.log("aptUnitsLoop: ", aptUnitsLoop);

// the above can be done using the nested map method to map into 2 D array which contains all of the 24 apartments: 0 - 5 objects!

//! Arrow functions review lesson:
// the below is a simple regular function:
function greetUser(user) {
    return `Welcome back ${user} !`;
}
// function are a block of reusable code: this function is hoisted and can be run above the function!
let greeting = greetUser("Nuraly");
console.log(greeting);

//* Convert the above to function expression: (it is not hoisted)!
const greetMember = function (user) {
    return `Welcome Back again ${user};`
};

// calling the function expression:
greeting = greetMember(`Bob`);
console.log(greeting);

//! Turn the above code into an arrow function: Arrow function is not hoisted! 
// If there is only one line of logic {} and return can be ommited:
// => fat arrow is the directional flow input output machine => showing the flow! if there is only one param () may be ommitted!
const greetPlayer = (user) => `Welcome Back Player ${user}`;
greeting = greetPlayer('Maha');
console.log(greeting);

//! arrow function versions of the stuff previosly done:
// Drill:
const entreNames = entrees.map(item => item.name);
console.log("Just the names: ", entreNames);

const sides = ['salad', 'soup', 'potato', 'mac and cheese', 'beans'];

const vegEntrees = entrees
    .filter((item) => item.vegetarian === true)
    .map((item) => {
        let newItem = { ...item }; // Avoid modifying the original array in order to avoid modifying the original array
        newItem.price = parseFloat((newItem.price * 0.8).toFixed(2)); // Discount price by 20%
        newItem.side = sides[Math.floor(Math.random() * sides.length)]; // Assign random side
        return newItem;
    });

console.log("Vegetarian items:", vegEntrees);
console.log("Original entrees:", entrees); 

//! Challenge: use filter with arrow function with a filter with a ternary!
const meatPricyEntrees = entrees.filter(item => !item.vegetarian && item.price >= 15);

console.log("meatPriceyEntrees: ", meatPricyEntrees);

//* Getting meats that are less than 1000 calories from the object that is the array of objects: 
const meat1000Cal = entrees.filter(item => !item.vegetarian && item.cals <= 1000);
console.log("Meats less than 1000 calories: ", meat1000Cal);

