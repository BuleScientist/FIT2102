/* 
Complete the following table when you submit this file:

Surname     | Firstname | email | Contribution% | Any issues?
=============================================================
Person 1... |           |       | 25%           |
Person 2... |           |       | 25%           |
Person 3... |           |       | 25%           |
Person 4... |           |       | 25%           |

complete Worksheet 1 by entering code in the places marked below...

For full instructions and tests open the file worksheetChecklist.html
in Chrome browser.  Keep it open side-by-side with your editor window.
You will edit this file (main.js), save it, and reload the 
browser window to run the test. 
*/

/**
    Exercise 1
 */

const myObj = {
    aProperty: "ABCDEF",
    anotherProperty: 123456
};

/**
    Exercise 2
 */

// Assigning functions to variable names, two possible syntaxes:
//     const operationOnTwoNumbers = function (someFunction) { ... };
//     const operationOnTwoNumbers = someFunction => ... 
const operationOnTwoNumbers = f => x => y => f(x,y); // Your code here


/**
    Exercise 3
 */

const callEach = array => array.forEach(element => element()) // Your code here


/**
    Exercise 4 - Pure Methods on Array
 */
const addN = (n, array) => array.map(element => element + n)

const getEvens = (array) => array.filter(element => element % 2 === 0)

const multiplyArray = (array) => array.filter(element => element != 0).reduce((a,b) => a*b)

/**
 * Exercise 5 - Range
 */

const range = (n, array = []) => n === 0 ? array : range(n-1, [n-1].concat(array)) // Your code here

 /**
 * Exercise 6 - Euler Problem 1
 */
const Euler1 = (n=1000) => range(n).filter(value => (value%3 === 0 || value%5 === 0)).reduce((a,b) => a+b) // Your code here

  /**
 * Exercise 7 - Infinite Series Calculator
 */

 const infinite_series_calculator =  (n, transform, predicate, accumulate) => range(n).map(value => transform(value)).filter(value => predicate(value)).reduce((a,b) => accumulate(a)(b))
 // Your code here
/**
 * Exercise 8 - Calculate Pi
 */
const calculatePiTerm = (n) => (4 *(n**2))/(4 *(n**2)-1)
const skipZero = (n) => n != 0
const productAccumulate = a => b => operationOnTwoNumbers((x,y) => x*y)(a)(b)
const calculatePi = () => 2 * infinite_series_calculator(1000, calculatePiTerm, skipZero, productAccumulate)

 /**
 * Exercise 9 - Calculate e
 */

function factorial (n) {
    if (n < 0) {
      return false;
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial (n - 1);
    }
  }
  
const calculateETerm = (num) => (num + 1) / factorial(2*num + 1)
const alwaysTrue = (num) => true 
const sumAccumulate = a => b => operationOnTwoNumbers((x,y) => x+y)(a)(b)
const calculateE = () => 2 * infinite_series_calculator(1000, calculateETerm, alwaysTrue, sumAccumulate)
/**
 * Exercise 10 - Calculate sin(x)
 */

// const calculateSin = (x) =>  (num) => ((-1)**(num))*(x**(2*num+1)) / factorial(2*num + 1)
function calculateSin(x){
    return function(num){
        return ((-1)**(num))*(x**(2*num+1)) / factorial(2*num + 1)
    }
}

const sin = (x) => infinite_series_calculator(100, calculateSin(x), alwaysTrue, sumAccumulate)





