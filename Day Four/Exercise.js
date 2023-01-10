/*
//This is number one(LEVEL ONE)
let agee = parseInt(prompt('ENTER YOUR AGE'))
if (agee >= 18) {
    console.log('you are old enough to drive')
} else {
    console.log(`you have to wait for ${18 - agee} years to be eligible to drive`)
}

//This is number two
let myAgee = parseInt(prompt('ENTER myAGE'))
let yourAgee = parseInt(prompt('ENTER yourAGE'))
if (myAgee > yourAgee) {
    console.log(`i\'m ${myAgee - yourAgee} years older than you`)
} else {
    console.log(`you\'re ${yourAgee - myAgee} years older than me`)
}

//this is number three
let javascript = 4
let tailwind = 3
if (javascript > tailwind) {
    console.log(`${javascript} is greater than ${tailwind}`)
} else {
    console.log(`${javascript} is less than ${tailwind}`)
}
let ternary = (4 > 3)
ternary
    ? console.log('4 is greater than 3')
    : console.log('4 is less than 3')

//This is number four
let num = parseInt(prompt('enter your number'))
if (num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

//This is number one(LEVEL TWO)
let grade = parseInt(prompt('enter your grade'))
if (grade >= 80 && grade <= 100) {
    console.log('GRADE A')
} else if (grade >= 70 && grade <= 89) {
    console.log('GRADE B')
} else if (grade >= 60 && grade <= 69) {
    console.log('GRADE C')
} else if (grade >= 50 && grade <= 59) {
    console.log('GRADE D')
} else if (grade >= 0 && grade <= 49) {
    console.log('GRADE F')
} else {
    console.log('invalid result')
}
*/

//This is number two
let season = prompt('enter month')
switch (season) {
    case 'January ':
        console.log(` the season is Winter.`)
        break;
    case 'February':
        console.log(` the season is Winter.`)
        break;
    case 'March':
        console.log(` the season is Spring.`)
        break;
    case 'April':
        console.log(` the season is Spring.`)
        break;
    case 'May':
        console.log(` the season is Spring.`)
        break;
    case 'June':
        console.log(` the season is Summer.`)
        break;
    case 'July':
        console.log(` the season is Summer.`)
        break;
    case 'August':
        console.log(` the season is Summer.`)
        break;
    case 'September':
        console.log(` the season is Autumn`)
        break;
    case 'October ':
        console.log(` the season is Autumn`)
        break;
    case ' November':
        console.log(` the season is Autumn`)
        break;
    case 'December':
        console.log(` the season is Winter.`)
        break;
    default:
        console.log('invalid month')
}

let days = prompt('What is the day today')
switch (days) {
    case 'Monday':
        console.log('Monday is a working day')
        break;
    case 'Tuesday':
        console.log('Tuesday is a working day')
        break;
    case 'Wednesday':
        console.log('Wednesday is a working day')
        break;
    case 'Thursday':
        console.log('Thursday is a working day')
        break;
    case 'Friday':
        console.log('Friday is a working day')
        break;
    case 'Saturday':
        console.log('Saturday is a weekend')
        break;
    case 'Sunday':
        console.log('Sunday is a weekend')
        break;
    default:
        console.log('invalid day')
}