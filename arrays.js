// Check if all elements satisfy a condition (every)
const arrEvery = [1, 2, 3, 4, 5, 6];
console.log(arrEvery.every(value => value % 2 === 0)); // false, not all elements are even

// Check if any element satisfies a condition (some)
const arrSome = [1, 2, 3, 4, 5, 6];
console.log(arrSome.some(value => value % 2 === 0)); // true, at least one element is even

// Filter elements that satisfy a condition (filter)
const arrFilter = [1, 2, 3, 4, 5, 6];
console.log(arrFilter.filter(value => value % 2 === 0)); // [2, 4, 6], even numbers

// Iterate over elements and perform an action (forEach)
const arrForEach = [1, 2, 3, 4, 5, 6];
arrForEach.forEach((value, index) => {
    console.log(`${index} : ${value}`);
});

// Combine elements into a single value starting from the right (reduceRight)
const arrReduceRight = [1, 2, 3, 4, 5, 6];
console.log(arrReduceRight.reduceRight((acc, current) => acc + current, 0)); // 21

// Merge two arrays (concat)
const arrConcatOne = [1, 2, 3];
const arrConcatTwo = [4, 5, 6];
console.log(arrConcatOne.concat(arrConcatTwo)); // [1, 2, 3, 4, 5, 6]

// Check if an element exists (includes)
const arrIncludes = [1, 2, 3, 4, 5, 6];
console.log(arrIncludes.includes(5)); // true

// Find the first index of an element (indexOf)
console.log(arrIncludes.indexOf(5)); // 4

// Find the last index of an element (lastIndexOf)
console.log(arrIncludes.lastIndexOf(5)); // 4

// Get array keys (keys)
const arrKeys = arrIncludes.keys();
for (let key of arrKeys) {
    console.log(key); // 0, 1, 2, 3, 4, 5
}

// Get array values (values)
const arrValues = arrIncludes.values();
for (let value of arrValues) {
    console.log(value); // 1, 2, 3, 4, 5, 6
}

// Get key-value pairs (entries)
const arrEntries = arrIncludes.entries();
for (let entry of arrEntries) {
    console.log(entry); // [0, 1], [1, 2], etc.
}

// Fill part of an array with a static value (fill)
console.log(arrIncludes.fill(0, 2, 4)); // [1, 2, 0, 0, 5, 6]

// Copy part of an array to another location (copyWithin)
console.log(arrIncludes.copyWithin(0, 3, 5)); // [0, 0, 0, 0, 5, 6]

// Create an array from a string (from)
console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']

// Create an array from arguments (of)
console.log(Array.of(7, 8, 9)); // [7, 8, 9]

// Flatten nested arrays (flat)
const arrNested = [1, [2, 3], [4, [5, 6]]];
console.log(arrNested.flat(2)); // [1, 2, 3, 4, 5, 6]

// Map and flatten (flatMap)
const arrFlatMap = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(arrFlatMap); // [1, 2, 2, 4, 3, 6]

// Remove and return the last element (pop)
const arrPop = [1, 2, 3];
console.log(arrPop.pop()); // 3
console.log(arrPop); // [1, 2]

// Add one or more elements to the end (push)
console.log(arrPop.push(4)); // 3 (new length)
console.log(arrPop); // [1, 2, 4]

// Remove and return the first element (shift)
console.log(arrPop.shift()); // 1
console.log(arrPop); // [2, 4]

// Add one or more elements to the start (unshift)
console.log(arrPop.unshift(0)); // 3 (new length)
console.log(arrPop); // [0, 2, 4]

// Reverse the order of elements (reverse)
console.log(arrPop.reverse()); // [4, 2, 0]

// Sort elements (sort)
console.log(arrPop.sort((a, b) => a - b)); // [0, 2, 4]

// Create a shallow copy and reverse (toReversed)
console.log(arrPop.toReversed ? arrPop.toReversed() : arrPop.slice().reverse());

// Transform elements with a function (map)
console.log(arrPop.map(x => x * 2)); // [0, 4, 8]

// Find index of the first element satisfying a condition (findIndex)
console.log(arrPop.findIndex(x => x === 2)); // 1

// Find the first element satisfying a condition (find)
console.log(arrPop.find(x => x === 2)); // 2

// Remove or replace elements (splice)
console.log(arrPop.splice(1, 1)); // [2]
console.log(arrPop); // [0, 4]

// Create a shallow copy (slice)
console.log(arrPop.slice(0, 2)); // [0, 4]

// Join elements into a string (join)
console.log(arrPop.join('-')); // "0-4"

// Combine elements into a single value (reduce)
console.log(arrPop.reduce((acc, x) => acc + x, 0)); // 4

// Convert array to string (toString)
console.log(arrPop.toString()); // "0,4"

// Get localized string representation (toLocaleString)
console.log(arrPop.toLocaleString()); // "0,4"

// Check length of array
console.log(arrPop.length); // 2
