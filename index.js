function calculateOddSum(arr) {
    return arr.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function containsPrime(arr) {
    return arr.some(isPrime);
}

function getPrimeNumbers(arr) {
    return arr.filter(isPrime);
}

function calculateAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function reverseArray(arr) {
    return arr.slice().reverse();
}

function performOperations(numbers) {
    // Calculate the sum of all odd numbers
    let sumOfOddNumbers = calculateOddSum(numbers);
    console.log("Sum of odd numbers:", sumOfOddNumbers);

    // Check if the array contains any prime numbers
    let hasPrimes = containsPrime(numbers);
    console.log("Contains prime numbers:", hasPrimes);

    // Create a new array with only prime numbers if any primes are found
    let primeNumbers = [];
    if (hasPrimes) {
        primeNumbers = getPrimeNumbers(numbers);
        console.log("Prime numbers:", primeNumbers);
    }

    // Calculate the average of all numbers
    let average = calculateAverage(numbers);
    console.log("Average of numbers:", average);

    // Find the maximum and minimum numbers in the array
    let maxNumber = findMax(numbers);
    let minNumber = findMin(numbers);
    console.log("Maximum number:", maxNumber);
    console.log("Minimum number:", minNumber);

    // Sort the array in ascending order
    let sortedArray = sortArray(numbers);
    console.log("Sorted array:", sortedArray);

    // Reverse the sorted array
    let reversedArray = reverseArray(sortedArray);
    console.log("Reversed array:", reversedArray);
}

let numbers = [3, 8, 5, 12, 7, 14, 11];
performOperations(numbers);
