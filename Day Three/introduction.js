let firstName
console.log(firstName)

let empty = null
console.log(empty)

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf)

let radius = 3
const PI = 3.14
let answer = radius * PI
console.log(answer)

const check = 4 > 3 || 10 > 5
const checck = 4 > 3 || 10 < 5
const checkk = 4 < 3 || 10 < 5
console.log(check, checck, checkk)

//increment operator
let count = 3
console.log(++count)
console.log(count)
console.log(count++)
console.log(count)

//Ternary operator
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
isRaining = false

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

/*Windows alert method
alert('Welcome to 30DaysOfJavaScript')

//Windows prompt method
let number = prompt('Enter number', 'number goes here')
console.log(number)

//Windows confirm method
const agree = confirm('Are you sure you like to delete? ')
console.log(agree)
*/


//DATE
/*
const now = new Date()
console.log(now)
console.log(now.getFullYear)
console.log(now.getMonth)
console.log(now.getDate)
console.log(now.getHours)
console.log(now.getMinutes)
console.log(now.getSeconds)
*/

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

let me = alert('im not happy')
console.log(me)