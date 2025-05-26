/*
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
*/

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  let sentence = arr.join(" ");
  console.log(sentence);
}

printOutString();

//Complete the function to print out the string: This is a sentence.

/*

Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/
let arrayNumbers = [1, 2, 3, 4, 5];

let doubleNumbersArray = {
  doubledNumbers: arrayNumbers.map(function (arrayNumbers) {
    return arrayNumbers * 2;
  }),
};

console.log(doubleNumbersArray);
/*
let outputArray = Array.from(arrayNumbers, x => x *2)

 console.log(outputArray)  
*/

//---Exercise #3 (sugerencia reduce() )---
/*
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let sumAndPorductArray = [2, 7, 4, 5, 6];

let sum = 0;
for (let i = 0; i < sumAndPorductArray.length; i++) {
  sum += sumAndPorductArray[i];
}
console.log(sum);

let product = 1;
for (let i = 0; i < sumAndPorductArray.length; i++) {
  product *= sumAndPorductArray[i];
}

console.log(product);

//------- Exercise #4 (sugerencia filter() e includes() )  --------

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function obtenerElementosSimilares(student1Courses, student2Courses) {
  // Usar filter para obtener los elementos que están en ambos arrays
  const elementosSimilares = student1Courses.filter((elemento) =>
    student2Courses.includes(elemento)
  );
  return elementosSimilares;
}

const similares = obtenerElementosSimilares(student1Courses, student2Courses);
console.log(similares);

/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// 1. Print all people in the list
console.log(people);
// 2. Remove "Dani" from the array
people.splice(people.indexOf("Dani"), 1);
// 3. Remove "Juan" from the array
people.splice(people.indexOf("Juan"), 1);
// 4. Move "Luis" to the front of the array
people.splice(0, 0, people.splice(people.indexOf("Luis"), 1)[0]);
// 5. Add your name to the end of the array
people.push("YourName"); // Replace "YourName" with your actual name
// 6. Iterate through the array and exit after "Maria"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break; // Exit the loop after logging "Maria"
  }
}
// 7. Get the index of "Maria"
let indexOfMaria = people.indexOf("Maria");
console.log("Index of Maria:", indexOfMaria);
// At the end of the exercise, there should be 4 people in the array
console.log("Final people array:", people); // Should show 4 people in the array
// Final output of the people array
console.log(people); // Should show the final array with 4 people
// Final output of the people array

console.log("Final people array:", people); // Should show the final array with 4 people
// Final output of the people array

/*Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
const arrayDesordenado = [3, 6, 12, 5, 100, 1];
function bubbleSort(arrayBurbuja) {
  const numero = arrayBurbuja.length;
  for (let i = 0; i < numero - 1; i++) {
    for (let j = 0; j < numero - i - 1; j++) {
      if (arrayBurbuja[j] > arrayBurbuja[j + 1]) {
        let temporal = arrayBurbuja[j];
        arrayBurbuja[j] = arrayBurbuja[j + 1];
        arrayBurbuja[j + 1] = temporal;
      }
    }
  }
  return arrayBurbuja;
}
let arrayArreglado = bubbleSort(arrayDesordenado);
console.log(arrayArreglado);
