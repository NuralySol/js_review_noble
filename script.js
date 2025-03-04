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

//* use filter to find the veggies that only start with c:
const cStringVeggies = veggies.filter(item => item.toLowerCase().startsWith("c"));
console.log("Get only S-string veggies: ", cStringVeggies);

//* Make an array of juices with map: concat the fruits array to make the juices with array:
const juiceArr = fruits.map(item => `${item} juice`);
console.log("JuiceArr: ", juiceArr);

//* Method chaining to get the banana juice in array:
const bananaJuice = fruits.filter(item => item.includes("banana")).map(item => `${item} juice`)[0];
console.log("Get the string of Banana Juice: ", bananaJuice);
console.log(typeof (bananaJuice));

const crunchyVeggies = veggies.filter(item => item.startsWith("c")).map(item => `crunchy ${item}`);
console.log("Crunchy veggies: ", crunchyVeggies);
console.log(typeof (cStringVeggies)); //* an object:

const mixedBag = [3, "5", "apple", "13", "banAnanA", 6];

//! chaining the mixed + makes it a number data type:
const numsSquared = mixedBag.filter(item => +(item = !isNaN(item))).sort((a, b) => a - b).map(num => num * num);
console.log("Nums squared and sorted: ", numsSquared);

//! using the sort on actual numbers of the array:
const numbers = [32, 2, 1000, 20, 5];
numbers.sort((a, b) => a - b);
console.log(numbers.sort((a, b) => a - b));

//! toSorted method gives a new copy..! kind of like map method!
// given this array of Chinese Zodiac animal objects:
let animals = [
    { eng: "chicken", also: 'rooster', chi: "ji", pin: "ji&#772;", year: 2029, tone: 1 },
    { eng: "cow", also: 'ox', chi: "niu", pin: "niu&#769;", year: 2021, tone: 2 },
    { eng: "dog", also: null, chi: "gou", pin: "gou&#780;", year: 2030, tone: 3 },
    { eng: "dragon", also: null, chi: "long", pin: "lo&#769;ng", year: 2024, tone: 2 },
    { eng: "goat", also: 'sheep', chi: "yang", pin: "ya&#769;ng", year: 2027, tone: 2 },
    { eng: "horse", also: null, chi: "ma", pin: "ma&#780;", year: 2026, tone: 3 },
    { eng: "monkey", chi: "hou", also: 'houzi', pin: "ho&#769;uzi", year: 2028, tone: 2 },
    { eng: "pig", also: null, chi: "zhu", pin: "zhu&#772;", year: 2031, tone: 1 },
    { eng: "rabbit", chi: "tu", also: 'tuzi', pin: "tu&#768;zi", year: 2023, tone: 4 },
    { eng: "rat", chi: "shu", also: 'laoshu', pin: "la&#780;oshu&#780;", year: 2020, tone: 3 },
    { eng: "snake", also: null, chi: "she", pin: "she&#769;", year: 2025, tone: 2 },
    { eng: "tiger", chi: "hu", also: 'laohu', pin: "la&#780;ohu&#780;", year: 2022, tone: 3 }
];

//* Descending animals by year property using method sort which expects a callback function argument:
const animalsDesc = animals.sort((a, b) => a.year - b.year);
console.log("Animals descending by year: ", animalsDesc);

//! use the localCompare method on the eng prop to toSort them by alphabetical order:
const animalsName = animals.toSorted((a, b) => a.chi.localeCompare(b.chi));
console.log("Alphabetical order: ", animalsName)

//* an example of usage of the toSorted Method!
//* toSorted method does not modify the original array non-mutataed array stays the same:
const original = [3, 1, 4, 1, 5, 9];
const sortedCopy = original.toSorted((a, b) => a - b);

console.log("Original:", original);
console.log("Sorted Copy:", sortedCopy);
const shuffled = original.sort(() => Math.random() - 0.5);
console.log("shuffled array: ", shuffled);

// ***  ### *** REFACTORING: UBER-CHALLENGE: *** ### ***
// We have done this exercise before (Lab 04.04)/
// Now we will refactor it using map() and =>
// Given the fruits array as well as this array of things (all singlur nouns):
const things = ['city', 'salary', 'porch', 'bunny', 'octopus', 'king', 'car', 'cranberry', 'child', 'hoof', 'ox', 'patch', 'potato', 'trout', 'tornado', 'restaurant', 'canyon', 'dog', 'hammer', 'echo', 'deer', 'chair', 'knife', 'goose', 'cow', 'scarf', 'tomato', 'horse', 'box', 'mouse', 'tooth', 'elephant', 'peron', 'queen', 'point', 'beach', 'floor', 'prince'];
// Concatenate the two arrays into one big array, and then: use the ... synthax:
const nouns = [...things, ...fruits];
console.log("nouns: ", nouns);
// Scramble the nouns:
nouns.sort((a, b) => Math.random() - 0.5);
console.log(nouns);

// use the map to get the plular nouns: 
const pluralNouns = nouns.map(item => {
    if (item.endsWith("y")) {
        return item.slice(0, -1) + "ies";
    } else if (item.endsWith("s") || item.endsWith("x")) {
        return item + "es";
    } else if (["child", "mouse"].includes(item)) {
        return item === "child" ? "children" : "mice";
    } else {
        return item + "s";
    }
});

console.log(pluralNouns);

// Generate a new array of plural nouns, according to these rules:
// - if the word is in this animals array, the singular and plural are the same
const animalsNew = ["deer", "fish", "moose", "sheep", "swine", "bison", "cod", "salmon", "shrimp", "trout"];
// - if the word has an irregular plural, and exists
//   as a key in this irregulars object, use the value as the plural
//   ex: "child" => "children"
const irregulars = { mouse: "mice", knife: "knives", octopus: "octopi", man: "men", woman: "women", person: "people", child: "children", loaf: "loaves", wolf: "wolves", cactus: "cacti", goose: "geese", foot: "feet", criterion: "criteria", fungus: "fungi", index: "indices", hoof: "hooves", ox: "oxen", datum: "data", appendix: "appendices", tooth: "teeth", scarf: "scarves", calf: "calves", leaf: "leaves" };
// - if the word ends in "y", drop the "y" and add "ies"
//   ex: "city" => "cities"   "cherry" => "cherries"
// - if the word ends in "o", "h" or "x", add "es"
//   ex: "mango" => "mangoes"   "echo" => "echoes"  "box" => "boxes"
// - if none of the above apply, it's a simple regular plural, so just add "s":
//   ex: "apple" => "apples"

// array.forEach(function(item))
// The forEach() method is called on an array. 
// It runs a function on each item in an array, one by one. 
// The current item is passed in as the argument of the function.
// The forEach method may be used instead of a for loop to perform an operation on each item of an array.

// 1. Start with an array of numbers, 
// and loop through it, logging each 
// item SQUARED to the console:
const numsAgain = [3, 4, 5, 6, 7, 8, 9];
//! forEach is good to do stuff on and you call forEach and it loops the array: does not return anything:
//! forEach is not subject to strict requirements like map and filter() methods:
for (let i = 0; i < numsAgain.length; i++) {
    console.log(numsAgain[i]);
}
for (let num of numsAgain) {
    console.log(num ** 2)
}

//! using the function:
const gamesInventory = numsAgain.map(function (item) {
    return item ** 2;
    //! the above function expression must return in order to catch the value:
})

console.log("gamesInventory: ", gamesInventory);

//! Ebay sales at the moment:
const ebaySales = numsAgain.map(item => item ** 2);
console.log("ebaySales: ", ebaySales);

//! using the loop: Need an emtpy array to be pushed since the loop is a local scopped: use the method push to get the oddNumArr:
const oddNumArr = []

for (let num of numsAgain) {
    if (num % 2 !== 0) {
        oddNumArr.push(num ** 2)
    }
}

console.log("oddNumArr: ", oddNumArr);

//* odd num squared using filter to map method chaining:
const oddNumSquared = numsAgain.filter(item => item % 2 !== 0).map(item => item ** 2);
console.log("oddNumSquared: ", oddNumSquared);

// Refactor the above using forEach. 
// The method is called on the array and 
// takes a callback that has the current
// array item as its argument
// like map and filter, forEach returns a new array
const forEachSquares = [];
numsAgain.forEach(function (item) {
    if (item % 2 !== 0) {
        forEachSquares.push(item ** 2);
    }
})
//! squaring only the odd numbers using the forEach method on the array:
console.log(forEachSquares);

//* Same as the above but with => function:
const forEachSq = [];

//! Both have to be true using truth: and both have to be true in order to be pushed! forEach works a like and needs a push: chaining the conditions in order to push for the array!

numsAgain.forEach(item => item % 2 !== 0 && forEachSq.push(item ** 2));
console.log("forEachSq: ", forEachSq)

console.log('arrow func squaredNums:');

// add up the value of all numbers in nums array
let sumNums; // store the sum in th sumNums
// [3,4,5,6,7,8,9]

console.log('for loop: sumNums:', sumNums);

// reset var for a fresh count
// nums.forEach(function(e) {
//   sumNums += e;
// });

console.log('arrow func forEach: sumNums:');
// arrow func forEach: sumNums: 42

// find() method
// The find() method serves a narrowly specific role: it find the first item in an array that meets a condition, and it returns that item, only. It does not look for any more items that meet the condition.

// If NO item that satisfies the is found, the find() method returns undefined.
// First, let's emulate the "find" algorithm using a for loop.

// 24. Given this digits array, set up a for loop that iterates over the array:
// Each time through the loop, pass the current item to an if-statement that uses the modulus operator to see if the current number, digits[i], divided by 2 yields a remainder of 1:
// find the first odd number
// If the condition returns true, the number is odd, so return the odd number, which quits the function:
let digits = [30, 54, 72, 89, 110, 137, 189];
let bingoNums = [12, 24, 32, 46, 55, 62, 70];
let evenNums = [12, 24, 32, 46, 62, 70];

const sumOfAll = [...digits, ...bingoNums, ...evenNums];
let sum = 0;
for (let i = 0; i < sumOfAll.length; i++) {
    sum += sumOfAll[i]; // increament the counter += synthax:
}
console.log("sum of all arrays: ", sum);

//? using the reduce method with an accumilator to catch all of the values in the combined array to get the sum of the combined spreaded array:

const divisibleBy7 = sumOfAll.find(item => item % 7 == 0);
console.log("disivible by 7: ", divisibleBy7);

const allMultiplesOf7 = sumOfAll.filter(item => item % 7 == 0);
console.log("getting all of the multiples of the 7: ", allMultiplesOf7);

const indexOfFirstMultipleOf7 = sumOfAll.findIndex(item => item % 7 == 0);
console.log("Getting the index of first occurance of multiple of 7: ", indexOfFirstMultipleOf7);

const greaterThan1000 = sumOfAll.findIndex(item => item > 1000);
console.log("greater than 1000: ", greaterThan1000);

//* to find the lastIndexOf() method to find 


//! find only finds the singular element in the array if no item satisfies the condtion is found: it will return undefined:

//! getting the first odd digit:
let firstOddDigit = digits.find(function (item) {
    return item % 2 == 1;
})
console.log("firstOddDigit using find with regular function: ", firstOddDigit);

//* 1 is truthy and 0 is falsy: you do not have to pass item % 2 == 1 condition:
firstOddDigit = digits.find(item => item % 2);
console.log("firstOddDigit using find: ", firstOddDigit)

//! using the loop to get the odd and even digits:
for (let dig of digits) {
    if (dig % 2 !== 0) {
        console.log(`${dig} is odd`);
    } else {
        console.log(`${dig} is even`);
    }
}

let firstEvenBingoNum = bingoNums.find(item => item % 2 == 0);
console.log('oddBingoNum:', firstEvenBingoNum);

//! finding 32: 
let firstLotteryNum = bingoNums.find(item => item == 32);

//* given the mixed array: use the reduce method to find all instances and count the elements: 
const arr = [5, "5", 3, 7, "5", 5, 8, 3, "3", 9];

const countMap = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
    //? need an empty object initialization for the reduce method to count up all of the occurances of the elements:
}, {});

console.log("countMap using the reduce method: ", countMap);

// find() method instead of for loop
// Now let's use the find() method to hunt for the first odd number:

// let oddN = digits.find(function(e) {
//   return e % 2 == 1;
// });
// let oddN = digits.find(e => {
//   if(e % 2 == 1) {
//     return e;
//   }
// });
// if you don't find it, return negative 1
;
// 'no odd nums');


let odd;
// 'no odd nums');
console.log('odd:', odd);

// Call the find() method on the digits array. Since the method returns a value, set the call equal to a variable to store the return value:

// lastIndexOf()
// To return the index of the first instance of a target value, use findIndex() rather than find().
const fruitsAgain = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];

let index;
console.log('index:', index);


// Use findIndex() to find the position of the first odd number in the digits array:


// Make sure that the findIndex() method returns -1 by changing the digits array values so that there are no odd numbers

//! an example of curried function: nested function!
const add = (a) => {
    return (b) => {
        return a + b;
    }
}
//* log the curried function with arguments:
console.log(add(1)(2));

const list = [
    { id: 1, name: 'Steve', email: 'steve@example.com' },
    { id: 3, name: 'Pamela', email: 'pam@example.com' },
    { id: 4, name: 'Liz', email: 'liz@example.com' }
]

const noJohn = list.filter(item => item.name !== 'John');
console.log(noJohn);


//! currying functions: 
const filterBy = key => value => arr => arr.filter(item => item[key] === value);

const filterByCategory = filterBy("category");
const filterByBrand = filterBy("brand");

const products = [
    { name: "Laptop", category: "Electronics", brand: "Apple" },
    { name: "Phone", category: "Electronics", brand: "Samsung" },
    { name: "Shoes", category: "Fashion", brand: "Nike" }
];

console.log(filterByCategory("Electronics")(products)); // Filters Electronics
console.log(filterByBrand("Nike")(products)); // Filters Nike brand

//! one of each array methods in JS advanced:
//* the below is a shallow copy of the apple with papaya:
console.log(fruits);
const AppleWithPapaya = fruits.with(0, "papaya");
console.log(AppleWithPapaya);


const toReversedFruits = fruits.toReversed();
console.log("toReversed Method: ", toReversedFruits);

//* all array callbacks: using reduce method to get the sum of all of the elements within the array: 
const array1 = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log("sumWithInitial: ", sumWithInitial);

//* Usage of reduce on a complex object in the below case it is an array of objects:
const orders = [
    { item: "Laptop", price: 1000, quantity: 2 },
    { item: "Phone", price: 500, quantity: 4 },
    { item: "Tablet", price: 800, quantity: 1 }
];

const totalPrice = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

console.log(totalPrice);

//* grouping people by age: 
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 }
];

const groupedByAge = people.reduce((acc, person) => {
    (acc[person.age] ||= []).push(person);
    return acc;
}, {});

console.log(groupedByAge);

const costs = [12, 16, 20, 67, 35, 21];
const sumCost = costs.reduce((sum, cost) => sum + cost);
console.log("sum of the costs using reduce method: ", sumCost);


//! need an accumulator let sum1 = 0;
let sum1 = 0;

for (let cost of costs) {
    console.log(cost);
    sum1 += cost;
    console.log(sum1);

};

console.log(sum1);

//* takes in two arguments callback function and the inital value (i.e. current item or index):
// accumilator is the total and the current item is item, 
const sumTotal = costs.reduce((total, item) => total + item, 0);
console.log("sumTotal of the costs using reduce: ", sumTotal);

console.log(veggies);

//! getting total number of chars in the veggies array:
const veggiesReduce = veggies.reduce((sum, item) => (sum + item)).length
console.log("veggies reduce sum: ", veggiesReduce);


let veggiesLoopSum = 0;

for (let veg of veggies) {
    console.log(veg);
    veggiesLoopSum += veg.length
}
console.log("sum of chars in veggies array: ", veggiesLoopSum);

//! total chars in the veggies using forEach() method!
totalveg = 0
veggies.forEach(item => totalveg += item.length);
console.log("forEach() total characters in veggies array:", totalveg);


//* using the reduce method to create an object from the array of veggies:
const vegObj = veggies.reduce((obj, item) => {
    let char1 = item[0].toUpperCase();
    if (obj[char1]) {
        obj[char1].push(item);
    } else {
        obj[char1] = [item];
    }
    return obj
}, {})

//* dynamic creation of the object for the array: 
console.log("Creating {} using reduce method on an Array of veggies: ", vegObj);

//? using the one liner aproach to the above problem: 
const vegObjTer = veggies.reduce((obj, item) => ((obj[item[0].toUpperCase()] ||= []).push(item), obj), {});
console.log("Creating {} with ternary: ", vegObjTer);
console.log(typeof (vegObjTer)); // its an object:

// using the iteration for finding the fibo sequence given the param and argument position for fibo sequence:
const findFibos = (num) => {
    // making sure the num entered not equal to and/or less than 1: (argument must be valid)
    if (num <= 1) return num;
    // a and b are the starter values 0 : 1 for fibo sequence:
    let a = 0;
    let b = 1;
    // temp num holder that will be reasigned to b: 
    let temp;
    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
        
    }
    return b;
}

// call the function and give the argument for a fibo sequence position target length: 
console.log("Provide the positional argument: ", findFibos(10));

//? best performance using iteration:
const fibonacci = n => {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

console.log(fibonacci(10));

//! Using memoization (Optimized recursion!)
const memo = {};
const fibonacciRec = n => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    return (memo[n] = fibonacciRec(n - 1) + fibonacciRec(n - 2));
};

console.log(fibonacciRec(6)); 


//! make consecutive smootihes form this array apple - banana; unique pairs:
console.log(fruits);


