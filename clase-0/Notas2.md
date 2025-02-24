---
marp: true
---

# Promesas y Async/Await en JavaScript

---

## Que es una Promesa?
- Una promesa es un objeto que representa la eventual finalizacion o falla de una operacion asincrona.
- Tiene tres estados posibles:
  - **Pending (Pendiente):** Estado inicial, ni cumplida ni rechazada.
  - **Fulfilled (Cumplida):** La operacion se completo exitosamente.
  - **Rejected (Rechazada):** La operacion fallo.

---

## Creacion de una Promesa
```js
const miPromesa = new Promise((resolve, reject) => {
  let exito = true;

  if (exito) {
    resolve('Operacion exitosa');
  } else {
    reject('Ocurrio un error');
  }
});
```

---

## Consumo de una Promesa con `.then()` y `.catch()`
```js
miPromesa
  .then(resultado => {
    console.log(resultado); // 'Operacion exitosa'
  })
  .catch(error => {
    console.error(error); // 'Ocurrio un error'
  });
```

- `.then()` se ejecuta si la promesa se cumple.
- `.catch()` se ejecuta si la promesa es rechazada.

---

## Que es `async/await`?
- `async` convierte una funcion en asincrona y automaticamente devuelve una promesa.
- `await` pausa la ejecucion de la funcion hasta que la promesa se resuelva.

```js
async function obtenerResultado() {
  try {
    const resultado = await miPromesa;
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

obtenerResultado();
```

---

## Ventajas de `async/await`
- Codigo mas legible y limpio.
- Facilita la gestion de errores con `try-catch`.
- Evita el anidamiento excesivo de callbacks.

---

## Ejemplo Practico: Peticion a una API
```js
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

obtenerDatos();
```

---

## Conclusion
- Las promesas y `async/await` son fundamentales para manejar operaciones asincronas en JavaScript.
- El uso de `async/await` hace que el codigo sea mas sencillo y legible.
- Practica usando ambos enfoques para comprender sus ventajas y situaciones de uso.

---

## Fin de la Presentacion
Gracias por tu atencion!
