const fruits = ["Apple", "Banana", "Cherry", "Blueberry"];

const smoothiesPairs = [];

for (let i = 0; i < fruits.length; i++) {
    console.log(i);
    for (let j = i + 1; j < fruits.length; j++) {
        console.log(j);
        smoothiesPairs.push(`${fruits[j]} ${fruits[i]}`);
    }
}

//* log the smoothies array:
console.log("smoothies menu: ", smoothiesPairs);

//* initialize the empty array of smoothies:
const smoothiesArr = [];

// use loop for iterating in place: 
for (i = 0; i < fruits.length; i++) {
    let smoothies = [...`${fruits[i]}-${fruits[i + 1]}`].join("");
    smoothiesArr.push(smoothies);
}
console.log("Fresh smoothies: ", smoothiesArr);

// use the with method on the string:
let word = 'raindrop';
word = [...word].with(0, word[0].toUpperCase()).join('');
console.log("spreaded operation to keep the data type intact: ", word);

//! Two sum algorithm in Javascript:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

nums = [2, 7, 11, 15]

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

const twoSol = twoSum(nums, 9);
console.log(twoSol);

//* The above solution returns a the positions of the given array nums where the targest equals to 9:
//* function to solve the two sum problem using an emtpy object:
const twoSumRef = (nums, target) => {

    let numObj = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        console.log(`Checking: ${nums[i]}, Complement needed: ${complement}`);
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i]
        }

        numObj[nums[i]] = i;
        console.log(`Updated numObj:`, numObj);
    }
}

console.log(twoSumRef(nums, 9));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {

    let maxProfit = 0; // declaring a maxProfit tracker:
    let minPrice = prices[0]; // Start from an index[0];

    for (let sell = 0; sell < prices.length; sell++) {
        console.log(sell);
        let sellPrice = prices[sell];
        let profit = sellPrice - minPrice;

        // using the Math.max(pass to get the max of each set of numbers);
        maxProfit = Math.max(maxProfit, profit);

        //evaluating if sell price is less than minPrice then sell the item:
        if (sellPrice < minPrice) minPrice = sellPrice;

    }
    return maxProfit
};

console.log(maxProfit(prices))

//? Advanced Algorithms of JS:
//? 5! = 5 * 4 * 3 * 2 * 1: What is the factorial of the num 5:
//! the function iterativeFactorial takes in a num initiates the calculation to get the factorial of a !num argument:
const iterativeFactorial = (num) => {
    //* if an argument is equal to 1 or 0 just return 1:
    if (num === 0 || num === 1) {
        return 1;
    };

    //* if the argument is more than 1 do a loop:
    //* this loop decreaments and does the calculation for the factorial of the argument as long as it is more than 1: 
    for (let i = num - 1; i >= 1; i--) {
        num = num * i;
    };
    //* return the factorial 
    return num;
};

//* Test cases for the factorial function to get the factorial of the num argument:

// Test for num that is 1 or 0:
console.log(iterativeFactorial(1));

// Test for num argument that is more than 1:
console.log(iterativeFactorial(5));
console.log(iterativeFactorial(6));
console.log(iterativeFactorial(3)); // 3 * 2 * 1 = 6:

//? !52 is an impossible number more than atoms in the universe shuffling the deck of cards unique: !52 == impossibly large number:
console.log(iterativeFactorial(52));


//*  Run the function and save it to the variable and log the result and test the result:
const factorialOf5 = iterativeFactorial(5);
// factorial of !5 = 5 * 4 * 3 * 2 * 1 should equal to 120:
// the below function logs 120 which is correct:
console.log("iterative of Factorial 5: ", factorialOf5);

//! lineaer search for the given array as long as it sorted:
//* the function linearSearch takes in 2 params and returns the search value target:
const linearSearch = (arr, item) => {
    //* use the regular loop to find the index position of the target element:
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return `${item} found at index ${i}`;
        }
    }
    return `${item} Not found`;
}
// Given the numArr that is sorted for the linear search example:
const numArr = [5, 10, 15, 20, 25, 30, 35];
//? target the element 10 using the above function of linear search: 
const target10Element = linearSearch(numArr, 10);
console.log("10 elemenent in array: ", target10Element);

//! finding the largest number in a given array:
// the function takes in a single argument to find the largest number in the array:
const findingTheLargestNumber = (arr) => {
    //? set the default largest to the index 0 at the given argumental array of numbers:
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

const numbersArr = [1, 2, 5, 7, 3, 4];
console.log(findingTheLargestNumber(numbersArr));

//* test the function and call the function with the argument of array:
const findTheLargest = findingTheLargestNumber(numArr);

//! Function to check if the number is a prime number of i.e. :  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ... etc:
// cannot be 1: so return 1 if the argument for num is 1:
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(2)); // 2 is a prime number and should return true: 
console.log(isPrime(1)); // 1 is false and the function returns the first return statement of false:
console.log(isPrime(5)); // 5 is a prime number and should be true
console.log(isPrime(8)); // 8 should be false since it is not a prime a number:

const is7Prime = isPrime(7);
console.log("is 7 a Prime number: ", is7Prime);

//! Function to count number of chars in the string:

const countCharacters = (str) => {
    // initialize an empty object to store the count:
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
};

console.log(countCharacters("Hello"));
console.log(countCharacters("apple"));
console.log(countCharacters("banana"));

//! QuickSort is a divide-and-conquer algorithm that chooses a “pivot” element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively:

const quickSort = (arr) => {
    // if the length of the arr is 1 or less than 1 just return it since it already sorted by defintion 
    // as it contains the single element within that argument of array i.e.  arr = [5]; already sorted:
    if (arr.length <= 1) {
        return arr;
    }

    //? choose a pivot the dividve the array into 2 sub-arrays and sort from the pivot:
    const pivot = arr[Math.floor(arr.length / 2)];
    // intialize sub-array to hold the values:
    const left = [];
    const right = [];
    const equal = [];

    // for loop to see where the element lies:
    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    };

    //* Destruct the subarrays and return the completed single array that is sorted:
    // Call in the function in the return statement and destruct the array into 1 sorted array:
    // recursive function quickSort is called on the subArrays left, equal and right and it destructs the objects into a single array 
    return [...quickSort(left), ...equal, ...quickSort(right)];
};

const arrayToBeSorted = [6, 1, 3, 10, 8, 7];
console.log(quickSort(arrayToBeSorted));

//! Summary of the above function of the recursive quickSort algorithm: with a pivot!
//*     Initial array: [6, 1, 3, 10, 8, 7]
// 	1.	Choose Pivot (Middle Element) → pivot = 3
// 	2.	Partition into Three Groups:
// 	•	left = [1]  (Elements < pivot)
// 	•	equal = [3] (Elements == pivot)
// 	•	right = [6, 10, 8, 7] (Elements > pivot)
// 	3.	Recursively sort left and right.
// 	4.	Combine [...quickSort(left), ...equal, ...quickSort(right)].

//! Merge Sort is a divide-and-conquer algorithm that divides an array in two, sorts the two halves, and then merges them back together:
//* takes in a single argument that is the unsorted array of numbers:
const mergeSort = (arr) => {
    // check for the length of the array return it if it less or equal to 1:
    if (arr.length <= 1) {
        return arr;
    };

    //* get the middle of the given array and floor it for for a int value:
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    //* call in another function called merge:
    return merge(mergeSort(left), mergeSort(right));
};

//* second helper function must be a regular function declarion in order to be hoisted:
function merge(left, right) {
    // initialize the empty to hold the result values:
    const result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
};

//! call the array to be sorted again to the test algorithm of merge sort it required a helper function of merge that is called in the main function of the merge sort which divides the array into two and sorts two halves and then merges them together but in a sorted array:
// this is a good algorithm for sorting unsorted arrays using the divie and conquer method akin to quickSort algorithm but uses a different paradigm to do that and in this example this algorithm requires a helper function called merge that is called on two subarrays:
console.log(mergeSort(arrayToBeSorted));

//! Heap Sort is a comparison-based sorting algorithm that builds a heap from the input elements and then repeatedly extracts the maximum element from the heap and places it at the end of the sorted output array: like a heap of a skulls that are built in a pyramid like structure:!

//* the function again takes in a single argument of the object array to be sorted using the heap "method" algorithm:
const heapSort = (array) => {
    /**
     * Helper function to maintain the heap property by ensuring
     * the subtree with root at index `rootIndex` follows the max heap rule.
     */
    function heapify(array, heapSize, rootIndex) {
        let largestIndex = rootIndex; // Assume root is the largest
        let leftChildIndex = 2 * rootIndex + 1; // Left child
        let rightChildIndex = 2 * rootIndex + 2; // Right child

        // Check if left child exists and is greater than root
        if (leftChildIndex < heapSize && array[leftChildIndex] > array[largestIndex]) {
            largestIndex = leftChildIndex;
        }

        // Check if right child exists and is greater than the current largest
        if (rightChildIndex < heapSize && array[rightChildIndex] > array[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        // If the largest value is not the root, swap and continue heapifying
        if (largestIndex !== rootIndex) {
            [array[rootIndex], array[largestIndex]] = [array[largestIndex], array[rootIndex]]; // Swap
            heapify(array, heapSize, largestIndex); // Recursively heapify the affected subtree
        }
    }

    let length = array.length;

    // **Step 1: Build a max heap**
    // Start heapifying from the last non-leaf node down to the root
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    // **Step 2: Perform heap sort**
    // Swap the first (largest) element with the last, then re-heapify
    for (let i = length - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]; // Swap max element to the end
        heapify(array, i, 0); // Heapify the reduced heap
    }

    return array; // Return the sorted array
};

// **Test the function**
const numbers = [1, 6, 2, 13, 5];
console.log("Sorted Array:", heapSort(numbers)); // Output: [1, 2, 5, 6, 13]

//! Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the array being searched, until the target value is found:

//* the function takes in te array, and the target:
const binarySearch = (arr, target) => {
    let low = 0;
    // find the high of the array length:
    let high = arr.length - 1;

    // using the high is less than or equal to high which is the length of the arr.length - 1; 
    while (low <= high) {
        // get the middle of the array given the any n.length of the array:
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] < target) {
            low = mid + 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    // if the target element does not exist in the given array it will return the value of - 1;
    return - 1;
};

//! finding the targest using the binarySearch function to find the index target of element that may exist in the array:
// first argument is the array example that is sorted the second argument is the target of the array to find it:
// the time complexity of binary search is O (log N) which is faster than O(n) which is linear as long as the array is sorted in values:
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6));

// test case if its not in the array: just returns - 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 19));
console.log(binarySearch([1])); // this finds 0 since the length of this given example array is 0: so the target value is at 0 index anyway:

//! a simple example algorithm to find the sum in the array:
const toBeSummed = [1, 2, 3, 4, 5];

// this is a function declaration without assigning the variable to it and it is hoited in the script / you can call this function anywhere in the script (it is global):

function sum(num) {
    let total = 0;
    for (let i = 0; i < toBeSummed.length; i++) {
        console.log(i);
        // sum up all of the values += num[i] values:
        total += num[i];
    }
    // return the total summary of the given array:
    return total;
};

// test the sum function with the given array that contain elements of numbers:
console.log(sum(toBeSummed));

//! the above algorithm can be performed with the reduce method that is called on the array object:
function sumArray(arr) {
    // return the array with the reduce method which takes in a @callback function with 2 arguments accumilator and current:
    return arr.reduce((acc, current) => acc + current, 0);
}
// call the function 
console.log(sumArray(toBeSummed));

//! Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array:

// JavaScript program to find the second largest element in the array
// using one traversal

// function to find the second largest element in the array
function getSecondLargest(arr) {
    const n = arr.length;

    let largest = -1, secondLargest = -1;

    // finding the second largest element
    for (let i = 0; i < n; i++) {

        // If arr[i] > largest, update second largest with
        // largest and largest with arr[i]
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        // If arr[i] < largest and arr[i] > second largest, 
        // update second largest with arr[i]
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// you can also call this function on an unsorted array to test if it is able to sort it first:
console.log(getSecondLargest([1, 5, 2, 7, 8, 11, 6])); //* after being sorted first sort((a, b) a - b) : element 8 is the second largest distinct element in logged array:

//! Three candidates problem in the given number array:

// takes in a single argument of an array object: param for the function is arr:
// Javascript program to find a maximum 
// product of a triplet in array of integers
// using sorting

// Function to find a maximum product of a triplet
// in array of integers of size n
function maxProduct(arr) {
    let n = arr.length;

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Return the maximum of product of last three
    // elements and product of first two elements
    // and last element
    return Math.max(arr[0] * arr[1] * arr[n - 1],
        arr[n - 1] * arr[n - 2] * arr[n - 3]);
}

//Driver code
let arr = [-10, -3, 5, 6, -20];
let max = maxProduct(arr);
console.log(max);

//! Maximum consecutive elements one's and zero's in a binary array: 
// Given an array arr[] consisting of only 0’s and 1’s, the task is to find the count of a maximum number of consecutive 1’s or 0’s present in the array:
// JavaScript program using bit manipulation to find max consecutive 1s or 0s in the array:

const maxConsecutiveCount = (arr) => {
    // initialize the scopped variables:
    let maxCount = 0;
    let count = 0;
    let prev = -1;

    // loop the array that is passed in te argument:
    for (let num of arr) {
        // if the number is the same as the previous one:
        // using the ^ bitwise XOR operator: Operates on the binary representation of numbers
        if ((prev ^ num) === 0) {
            count++;
        } else {
            // update the maxCount and reset count:
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
        prev = num;
    }
    // return the maxCount and count:
    return Math.max(maxCount, count);
}

// log the result:
arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]; // an array of 12 elements:
// max count of the above array should be 4 since 1 apears four times near the end of the array and they are consecutive bitwise:
console.log(maxConsecutiveCount(arr));

//! Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements:

// JavaScript Program to move all zeros to end using one traversal: a much better aproach than the Naive aproach:
// Function to push all of the zeros in the array to the end:
const pushZerosToEnd = (arr) => {
    // pointer to track the position of the next non-zero element:
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // if the current element is non-zero boolean evaluation:
        if (arr[i] !== 0) {
            // swap the current element with 0 at the current index "count":
            [arr[i], arr[count]] = [arr[count], arr[i]];
            // move the 'count' pointer to the next position in the array:
            count++;
        }
    }
    return arr;
}

// an example to push the zeros to end in the array:
arr = [1, 2, 0, 4, 3, 0, 5, 0];
// log the function:
console.log(pushZerosToEnd(arr)) // OUTPUT: [1, 2, 4, 3, 5, 0, 0, 0];

//! Given an array arr[] and an integer k, the task is to reverse every subarray formed by consecutive K elements:
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3 
// Output: 3, 2, 1, 6, 5, 4, 9, 8, 7 ;

// Function to reverse every sub-array
// formed by consecutive k elements 
// takes in two argument the array itself and how many groupings in the argument that is k:
const reverseInGroups = (array, k) => {
    let n = array.length;

    // Iterate in steps of `k`
    for (let start = 0; start < n; start += k) {
        let left = start;
        let right = Math.min(start + k - 1, n - 1); // Handle the last group if it's smaller than k

        // Swap elements within the subarray
        while (left < right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }
    return array;
};

// Test case
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 3;
console.log(reverseInGroups(arr, k)); // Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]

//! Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

// Note: The rightmost element is always a leader.

// Input: arr[] = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2]
// Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
const leaders = (arr) => {
    // initialize the emtpy array and n = length of the array:
    const result = [];
    const n = arr.length;

    // get and start with the most rightmost element of the array:
    let maxRight = arr[n - 1];
    // Rightmost element is always a leader:
    result.push(maxRight);

    // Traverse the array from right to left:
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            // push the indexes to the result where the maxRight where they are located 
            result.push(maxRight);
        }
    }
    // Reverse the result array to maintain
    // original order
    result.reverse();

    // return the result:
    return result;
};
// the expeced output for this array 17 and 5, 2 since they are leaders within their respective sub element groupings:
// last element in the array is always the leader even though the might not have the element to the right:
arr = [16, 17, 4, 3, 5, 2];
console.log(leaders(arr)); // the leaders are 17, 5, 2 because the last element is always the leader as well:

//! Given a non-negative number represented as an array of digits. The is to add 1 to the number (increment the number represented by the digits by 1). The digits are stored such that the most significant digit is the first element of the array.

// Input : [1, 2, 4]
// Output : 125
// Explanation: 124 + 1 = 125 

function addOne(digits) {
    let index = digits.length - 1; // Start from the last digit

    // Loop until we find a digit that isn't 9
    while (index >= 0 && digits[index] === 9) {
        digits[index] = 0; // Set 9 to 0
        index--; // Move to the next digit on the left
    }

    // If all digits were 9, we need to add an extra 1 at the beginning
    if (index < 0) {
        digits.unshift(1);
    } else {
        digits[index]++; // Increment the first non-9 digit
    }

    return digits;
}

// Test cases
const test1 = [9, 9, 9];
const test2 = [1, 2, 3];
const test3 = [4, 5, 9];

console.log(addOne(test1)); // Output: [1, 0, 0, 0]
console.log(addOne(test2)); // Output: [1, 2, 4]
console.log(addOne(test3)); // Output: [4, 6, 0]

//! Given an integer array arr[] and an integer ele the task is to the remove all occurrences of ele from arr[] in-place and return the number of elements which are not equal to ele. If there are k number of elements which are not equal to ele then the input array arr[] should be modified such that the first k elements should contain the elements which are not equal to ele and then the remaining elements.

// Note: The order of first k elements may be changed.
// JavaScript Code to remove all occurrences of an element in an array:

const removeElement = (arr, element) => {
    // initialize the counter for the elements to equal to ele
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // log the passed array in the loop
        // Place the element which is not equal to ele at the kth position
        if (arr[i] !== element) {
            arr[k] = arr[i];
            // increament the count of elements not equal to element:
            k++;
        }
    }
    return k;
};

// driver code to test the function:
arr = [0, 1, 3, 0, 2, 2, 4, 2]; // remove all of the occurances of 2 in the array:
element = 2;
// log the function to test it: 
const removeTwoS = removeElement(arr, element);
console.log("Remove Two's from the array: ", removeTwoS); // Outpute is 5:

//! Asynchronius programming paradigm:
