
// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element
let lastIndex = ages.length - 1; // Get the index of the last element dynamically
let difference = ages[lastIndex] - ages[0];
console.log("Difference between last and first age:", difference);

// Add a new age to the array and repeat the subtraction
ages.push(30); // Adding a new age
lastIndex = ages.length - 1; // Update the index of the last element
difference = ages[lastIndex] - ages[0]; // Subtract again
console.log("Difference after adding a new age:", difference);

// Calculate the average age using a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);

// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLettersPerName = totalLetters / names.length;
console.log("Average number of letters per name:", averageLettersPerName);

// Concatenate all the names together
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}
console.log("Concatenated names:", concatenatedNames);

// How do you access the last element of any array?
// You can access the last element of an array using arrayName[arrayName.length - 1]

// How do you access the first element of any array?
// You can access the first element of an array using arrayName[0]

// Create a new array called nameLengths and calculate the lengths of names
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Lengths of names:", nameLengths);

// Calculate the sum of all elements in the nameLengths array
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumOfNameLengths);

// Write a function to concatenate a word to itself n times
function concatenateWord(word, n) {
    return word.repeat(n);
}

// Write a function to return a full name
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Write a function to check if the sum of numbers in an array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}

// Write a function to calculate the average of numbers in an array
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Write a function to compare the average of two arrays
function compareAverages(array1, array2) {
    let average1 = calculateAverage(array1);
    let average2 = calculateAverage(array2);
    return average1 > average2;
}

// Write a function to determine if a person will buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Create a function to count the number of vowels in a string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Example usage:
let word = "Hello";
let n = 3;
console.log(concatenateWord(word, n)); // Output: "HelloHelloHello"

let firstName = "John";
let lastName = "Doe";
console.log(fullName(firstName, lastName)); // Output: "John Doe"

let numbersArray = [20, 30, 50, 25];
console.log(isSumGreaterThan100(numbersArray)); // Output: true

console.log(calculateAverage(numbersArray)); // Output: 31.25

let array1 = [10, 20, 30];
let array2 = [15, 25, 35];
console.log(compareAverages(array1, array2)); // Output: false

console.log(willBuyDrink(true, 15)); // Output: true

console.log(countVowels("Hello World")); // Output: 3
