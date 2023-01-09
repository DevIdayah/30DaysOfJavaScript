//IF STATEMENT
let rain = true
if (rain) {
    console.log(`you need a rain coat`)
}
else {
    console.log(`you don\'t need a rain coat`)
}

//IF ELSE STATEMENT
let myAge = 25
if (myAge <= 23) {
    console.log(`you are still a small girl`)
} else {
    console.log(`you are an adult`)
}

let isMarried = true
if (isMarried == false) {
    console.log(`she is still single and searching`)
} else {
    console.log(`congratulations darling`)
}

//IF ELSE IF ELSE STATEMENT
let a = 0
if (a > 0) {
    console.log(`${a} is a positive number`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}

let age = 23
if (age > 23) {
    console.log(`age is greater than ${age}`)
} else if (age < 23) {
    console.log(`age is less than ${age}`)
} else if (age <= 23) {
    console.log(`${age} is my age`)
} else {
    console.log(`she is underage`)
}

//SWITCH STATEMENT
let names = 'firstBorn'
switch (names) {
    case 'firstBorn':
        console.log(`Her name is MARIAM`)
        break
    case 'secondBorn':
        console.log(`Her name is HIDAYAT`)
        break
    case 'thirdBorn':
        console.log(`Her name is MAZEEDAH`)
        break
    case 'fourthBorn':
        console.log(`Her name is FAREEDAH`)
        break
    case 'fifthBorn':
        console.log(`Her name is HALEEMAH`)
        break
    default:
        console.log(`His name is AL-AMEEN`)
}

let weather = 'rainy'
switch (weather) {
    case 'cloudy':
        console.log(`It might be cold, you need a jacket.`)
        break
    case 'rainy':
        console.log(`You need a rain coat.`)
        break
    case 'sunny':
        console.log(`You can go out freely`)
        break
    default:
        console.log(`You don\'t need a rain coat`)
}

let namess = prompt('ENTER YOUR POSITION')
let enter = namess
switch (namess) {
    case 'firstBorn':
        console.log(`Her name is MARIAM`)
        break
    case 'secondBorn':
        console.log(`Her name is HIDAYAT`)
        break
    case 'thirdBorn':
        console.log(`Her name is MAZEEDAH`)
        break
    case 'fourthBorn':
        console.log(`Her name is FAREEDAH`)
        break
    case 'fifthBorn':
        console.log(`Her name is HALEEMAH`)
        break
    default:
        console.log(`His name is AL-AMEEN`)
}

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}