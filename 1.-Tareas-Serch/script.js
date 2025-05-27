//---------- EJERCICIO 1 -------------
let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  let sentence = arr.join(" ");
  console.log(sentence);
}
printOutString();

//---------- EJERCICIO 2 -------------
let arrayNumbers = [1, 2, 3, 4, 5];

let doubleNumbersArray = {
  doubledNumbers: arrayNumbers.map(function (arrayNumbers) {
    return arrayNumbers * 2;
  }),
};

console.log(doubleNumbersArray);

//---------- EJERCICIO 3 -------------
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

//---------- EJERCICIO 4 -------------
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function obtenerElementosSimilares(student1Courses, student2Courses) {
  const elementosSimilares = student1Courses.filter((elemento) =>
    student2Courses.includes(elemento)
  );
  return elementosSimilares;
}

const similares = obtenerElementosSimilares(student1Courses, student2Courses);
console.log(similares);

//---------- EJERCICIO 5 -------------
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);
people.splice(0, 0, people.splice(people.indexOf("Luis"), 1)[0]);
people.push("YourName");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

let indexOfMaria = people.indexOf("Maria");
console.log("Index of Maria:", indexOfMaria);
console.log("Final people array:", people);

//---------- EJERCICIO 6 -------------
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



//Conexión al HTML

// Ejercicio 1
let sentence = arr.join(" ");
document.getElementById("ej1").innerText = sentence;

// Ejercicio 2
let doubled = arrayNumbers.map(function (num) {
  return num * 2;
});
document.getElementById("ej2").innerText = "Doblado: " + doubled.join(", ");

// Ejercicio 3
let suma = sum;
let producto = product;
document.getElementById("ej3").innerText = `Suma: ${suma}, Producto: ${producto}`;

// Ejercicio 4
let comunes = similares;
document.getElementById("ej4").innerText = "Cursos comunes: " + comunes.join(", ");

// Ejercicio 5
document.getElementById("ej5").innerText = "Personas: " + people.join(", ");

// Ejercicio 6
let sentence6 = arrayArreglado.join(", ");
document.getElementById("ej6").innerText = "Ordenado: " + sentence6;
