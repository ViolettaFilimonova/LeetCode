//https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript
// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a,b){
    if(a < b){
        const numbers = []
        for (let i = a; i <= b; i++) {
            numbers.push(i)
            
        }
       console.log(numbers);
    }
}
between(1,4)
between(4,1)
between(2,9)