//Primitive data type
let word = 'javascript'
word[0] = 'y'
console.log(word)

//Comparing the primitive
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) //true

let firstName = 'hidayat'
let lastName = 'Zakariyah'
console.log(firstName == lastName) //false

//Non-primitive 
let nums = [2, 3, 4, 5]
console.log(nums)
console.log(nums[5])
nums[5] = 20
console.log(nums[5])
console.log(nums)

//comparing the non-primitive
let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
console.log(userOne == userTwo) //false

let numbers = [1, 2, 3, 4, 5]
let num = numbers
console.log(numbers == num) //true

let userOnes = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
let oneUsers = userOnes
console.log(userOnes == oneUsers) //true

let age = 54
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14
const boilingPoint = 100
const bodyTemp = 37
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)

/*
let space = ' '
let myName = 'Hidayat'
let FathersName = 'Zakariyah'
let myAge = 23
let myPlace = 'Sango'
console.log(myName + space + FathersName + space + 'i am' + space + myAge + space + 'years old' + space + 'i live in' + space + myPlace)
*/

let space = ' '
let myName = 'Hidayat'
let FathersName = 'Zakariyah'
let myAge = 23
let myPlace = 'Sango'
let personInfo = myName + space + FathersName + space + "i am" + space + myAge + space + "years old" + space + "i live in" + space + myPlace
let personInfoOne = 'Alate Zakariyah'
console.log(personInfo + space + personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

let a = 2
let b = 3
//console.log(`the sum of ${a} and ${b} is ${a + b}`)
console.log(`${a} is greater than ${b}: ${a > b}`)

//length
let come = 'javascript'
let id = "My name"
console.log(id.length)
console.log(come.length)

//Accessing characters in a string
let string = 'javascript'
let firstLetter = string[0]
let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]
let lastIndex = string.length - 1
console.log(string[5])
console.log(lastIndex)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.substring(0, 6))
console.log(string.substring(6))

let country = 'finland'
console.log(country.substr(0, 2))
console.log(country.substr(2))
console.log(country.substr(2, 5))

let stringg = '30 Days Of JavaScript'
let me = 'hidayat'
let index = stringg.length - 1
console.log(stringg)
console.log(stringg.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(stringg.split(' '))
console.log(me.split())
console.log(me.split(''))
console.log(stringg.trim())
console.log(me.trim())
console.log(stringg.includes('home'))
console.log(stringg.includes('Days'))
console.log(stringg.includes('days'))
console.log(stringg.replace('JavaScript', 'Python'))
console.log(stringg.charAt(index))
console.log(stringg.charAt(6))
console.log(stringg.indexOf('a'))
console.log(stringg.indexOf('Javascript'))
console.log(stringg.indexOf('Script'))
console.log(stringg.indexOf('my mum'))

//let myString = 'I Love JavaScript So much'
let myString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(myString.lastIndexOf('Script'))
console.log(myString.lastIndexOf('love'))
console.log(myString.lastIndexOf('You'))
console.log(myString.lastIndexOf('JavaScript'))
console.log(myString.startsWith('You'))
console.log(myString.startsWith('I'))

let strings = 'love'
let patternOne = /love/
let patternTwo = /love/gi 