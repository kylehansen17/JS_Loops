// for (
//     [initalExpression];
//     [condition];
//     [incrementExpression]
// )


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// Prints out 1-10 on separate lines

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
// Prints out even numbers on separate lines

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }
// Count down from 100 by 10


// Pretending there is an animal array with 200+ animals
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i]);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`);
//     }
// }
// OUTPUT
// 1(i)
// 1(j)
// 2(j)
// 3(j)
// 2(i)
// 1(j)
// 2(j)
// 3(j)
// 3(i)
// 4(i)
// 5(i)


// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }
// Same thing but using For Of
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }
// OUTPUT
// ROW #1
// Kristen
// Erik
// Namita
// ROW #2
// Geoffrey
// Juanita
// Anotonio
// Kevin
// ROW #3
// Yuma
// Sakura
// Jack
// Erika


// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }
// Prints 1-10 on separate lines


// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!")


// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me")
//         break;
// }
// console.log("OK YOU WIN!")


// GUESSING GAME
// let maximum = paresInt(prompt("Enter the maximum number"));
// while (!maximum) {
//     maximum = paresInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = paresInt(prompt("Enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high. Enter new guess");
//     } else {
//         guess = prompt("Too low. Enter new guess");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log(`You got it! It took you ${attempts} guesses`)
// }


// For Of Loop
const subreddits = ['cringe', 'books', 'chickens', 'funny'];
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}
// Same thing but with For Of
for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}


for (let char of "hello world") {
    console.log(char);
}
// OUTPUT
// h
// e
// l
// l
// o
// 
// w
// o
// r
// l
// d


// Iterating Over Objects
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
// Output
// keenan scored 80
// damon scored 67
// kim scored 89

// Makes an array out of the object values so you can use For Of instead of For In
Object.values
Object.keys
Object.entries

for (let score of Object.values(testScores)) {
    console.log(score);
}
// Output
// 80
// 67
// 89

// Finding the average of scores
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)