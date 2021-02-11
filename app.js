// for (
//     [initalExpression];
//     [condition];
//     [incrementExpression]
// )


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }


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

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }


// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }


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


const subreddits = ['cringe', 'books', 'chickens', 'funny'];
for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}
