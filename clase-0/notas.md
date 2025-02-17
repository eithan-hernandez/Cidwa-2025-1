---
marp: true
paginate: true
---

# Introducción a JavaScript

JavaScript es el lenguaje de programación que da vida a las páginas web.

## Objetivos de la clase
- Aprender los fundamentos de JavaScript.
- Usar la consola del navegador para experimentar con el código.
- Prepararnos para el desarrollo web moderno.

---

# 1. Variables y Tipos de Datos

Las variables en JavaScript pueden declararse con `let`, `const` y `var`. Se recomienda usar `let` y `const` para evitar problemas de alcance.

```js
let nombre = "Juan";
const edad = 25;
var ciudad = "México";

console.log(nombre, edad, ciudad);
```

Tipos de datos en JavaScript:
- `string` (cadenas de texto)
- `number` (números)
- `boolean` (valores verdaderos o falsos)
- `object` (objetos)
- `null` (valor nulo)
- `undefined` (valor no asignado)

---

# 2. Operadores y Expresiones

Los operadores permiten realizar cálculos y comparaciones.

```js
let a = 10, b = 5;
console.log(a + b, a - b, a * b, a / b);
console.log(a > b, a === b, a !== b);
```

Tipos de operadores:
- **Aritméticos:** `+`, `-`, `*`, `/`, `%`
- **Comparación:** `===`, `!==`, `>`, `<`, `>=`, `<=`
- **Lógicos:** `&&`, `||`, `!`

---

# 3. Condicionales y Bucles

Las estructuras condicionales permiten tomar decisiones en el código.

```js
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

Los bucles permiten repetir código varias veces.

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteración", i);
}
```

---

# 4. Funciones

Las funciones permiten reutilizar código.

```js
function suma(a, b) {
  return a + b;
}

console.log(suma(5, 3));
```

También pueden escribirse con funciones de flecha.

```js
const resta = (a, b) => a - b;
console.log(resta(10, 4));
```

---

# 5. Arrays y Métodos

Un array es una colección de elementos.

```js
let frutas = ["manzana", "pera", "plátano"];
console.log(frutas.length);
console.log(frutas.includes("pera"));
frutas.push("naranja");
console.log(frutas);
```

---

# 6. Objetos

Los objetos almacenan datos en pares clave-valor.

```js
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

console.log(persona.nombre, persona.edad);
```

---

# 7. Deconstrucción de Objetos

Permite extraer valores de un objeto de manera rápida.

```js
const usuario = { nombre: "Carlos", edad: 28 };
const { nombre, edad } = usuario;
console.log(nombre, edad);
```

---

# 8. Copiado de Objetos

Para copiar un objeto sin modificar el original, usamos `Object.assign()` o el operador spread.

```js
let original = { a: 1, b: 2 };
let copia = { ...original };
copia.a = 10;
console.log(original, copia);
```

---

# 9. JSON (JavaScript Object Notation)

JSON es un formato de datos ligero.

```js
let jsonString = '{"nombre": "Laura", "edad": 25}';
let obj = JSON.parse(jsonString);
console.log(obj.nombre);

let nuevoJson = JSON.stringify(obj);
console.log(nuevoJson);
```

---

# 10. Manipulación del DOM

El DOM (Document Object Model) permite modificar elementos HTML.

```js
document.body.style.backgroundColor = "lightblue";
```

```js
let titulo = document.createElement("h1");
titulo.textContent = "Hola, DOM!";
document.body.appendChild(titulo);
```

---

# 11. Eventos

Los eventos permiten capturar acciones del usuario.

```js
document.addEventListener("click", () => {
  alert("¡Hiciste clic!");
});
```

---

# 12. Promesas y async/await

Las promesas permiten manejar operaciones asíncronas.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data));
```

Con `async/await` es más fácil de leer.

```js
async function obtenerDatos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}

obtenerDatos();
```

---

# 13. Almacenamiento Local

Permite guardar datos en el navegador.

```js
localStorage.setItem("nombre", "Carlos");
console.log(localStorage.getItem("nombre"));
```

```js
sessionStorage.setItem("sesion", "Activa");
console.log(sessionStorage.getItem("sesion"));
```

---

# 14. Módulos en JavaScript

Los módulos permiten organizar el código en archivos separados.

```js
// archivo.js
export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
```

```js
// main.js
import { saludar } from "./archivo.js";
console.log(saludar("Juan"));
```

---

# Conclusión

- Aprendimos los fundamentos de JavaScript.
- Practicamos con la consola del navegador.
- Estamos listos para avanzar a Node.js 🚀.

Gracias por su atención 🎉
