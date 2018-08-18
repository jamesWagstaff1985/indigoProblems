/*
* Find the largest palindrome made from the product of two 3-digit numbers which is less
* than N.
*/
let input = `2
101110
800000`

// Prepare input and output
let inputArray = input.match(/(\d+)/g)
let outputArray = [];

// function to check if is palindrome
isPalindrome = (input) => {
  return [...input.toString()].reverse().join('') == input;
}

largestPalindromeProduct = (input) => {
  for(let j = input; j > 100000; j--){
    for(let i = 999; i > 99; i--){
      if(j / i < 1000 && j % i === 0 && isPalindrome(j)) return j
    }
  }
}

for(let i = 1; i<inputArray.length;i++){
  outputArray.push(largestPalindromeProduct(inputArray[i]))
}

console.log(outputArray)
