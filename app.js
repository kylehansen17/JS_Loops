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

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}