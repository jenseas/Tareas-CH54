// Ejercicio 1
let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  let sentence = arr.join(" ");
  console.log(sentence);
  document.getElementById("ej1").innerText = sentence;
}

printOutString();

// Ejercicio 2
let arrayNumbers = [1, 2, 3, 4, 5];
let doubled = arrayNumbers.map(n => n * 2);
console.log({ doubled });
document.getElementById("ej2").innerText = "Doblado: " + doubled.join(", ");

// Ejercicio 3
let sumAndPorductArray = [2, 7, 4, 5, 6];
let suma = sumAndPorductArray.reduce((acc, num) => acc + num, 0);
let producto = sumAndPorductArray.reduce((acc, num) => acc * num, 1);
console.log("Suma:", suma, "Producto:", producto);
document.getElementById("ej3").innerText = `Suma: ${suma}, Producto: ${producto}`;

// Ejercicio 4
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

function obtenerElementosSimilares(a, b) {
  return a.filter(el => b.includes(el));
}

let comunes = obtenerElementosSimilares(student1Courses, student2Courses);
console.log(comunes);
document.getElementById("ej4").innerText = "Cursos comunes: " + comunes.join(", ");

// Ejercicio 5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);
people.splice(0, 0, people.splice(people.indexOf("Luis"), 1)[0]);
people.push("Ketzali"); // Reemplaza por tu nombre si gustas

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") break;
}

let indexOfMaria = people.indexOf("Maria");
console.log("Index of Maria:", indexOfMaria);
console.log("Final people array:", people);
document.getElementById("ej5").innerText = "Personas: " + people.join(", ");

// Ejercicio 6
const arrayDesordenado = [3, 6, 12, 5, 100, 1];

function bubbleSort(arrayBurbuja) {
  const n = arrayBurbuja.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arrayBurbuja[j] > arrayBurbuja[j + 1]) {
        let temp = arrayBurbuja[j];
        arrayBurbuja[j] = arrayBurbuja[j + 1];
        arrayBurbuja[j + 1] = temp;
      }
    }
  }
  return arrayBurbuja;
}

let arrayArreglado = bubbleSort(arrayDesordenado);
console.log(arrayArreglado);
document.getElementById("ej6").innerText = "Ordenado: " + arrayArreglado.join(", ");
