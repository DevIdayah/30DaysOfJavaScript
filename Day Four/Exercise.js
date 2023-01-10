//This is number one(EXERCISE ONE)
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

let num = parseInt(prompt('enter your number'))
if (num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}