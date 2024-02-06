// crear un array vacio

const listaProductos = [];

// crear un array con datos siempre usar una S al final, que de a entender que hay varias listas separados por coma

const juegos = ['Stardew valley','fifa', 1, 'league of legends', true, 2024, 'fornite',];
// mostrar un array
console.log(listaProductos);
document.write(juegos);

const posicion = 0;

document.write(`<p>El array juegos tiene ${juegos.length} cantidad de elementos</p>`)
document.write(`<p>El juego numero 3 es ${juegos[1]}</p>`)
document.write(`<p>El juego numero 1 es ${juegos[posicion]}</p>`)
document.write(`<p>El juego numero 20 es ${juegos[20]}</p>`)

document.write('<h2>Array de juegos🎮</h2>')

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

//agregar elementos en el array
//unshift es siempre al princio del array
juegos.unshift('Dark soul', 'Dota')
document.write(`<h2>Nuevo juego al principio del array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

//agregar elementos al final

juegos.push('Mario Bros')
document.write(`<h2>Nuevo juego al final del array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)


// agregar elemento al medio splice tambien borra, agregar 0 para no borrar

juegos.splice(5,0,'Terraria');
document.write(`<h2>Nuevo juego al medio posicion 5 del array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)


//modificar elementos del array

juegos[3] = 'Dont starve'
// juegos = 'Dont starve' Este codigo es incorrecto no puedo cambiar el contenido total del array por otro valor;

document.write(`<h2>Modificamos el juego de la posicion 2 array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

// Accion para eliminar elementos del array
juegos.shift();
document.write(`<h2>Borramos el primer elemento del array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)

//Accion para eliminar elementos del medio del array

juegos.splice(3,1)
// juegos.splice(3,2) // borramos desde la posicion 3, la cantidad de 2 elementos
// juegos.splice(3) borramos desde la posicion 3 el resto de los elemtnos del array
document.write(`<h2>Borramos el elemento de la posicion 3 del array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)


// eliminar el  ultimo +elemento es pop LOS ARRAY SIEMPRE CON ()

juegos.pop();
document.write(`<h2>Borramos el ultimo elemento del array🎮(${juegos.length})</h2>`)

document.write(`<ul>`)
for(let posicion=0; posicion < juegos.length; posicion++){
document.write(`<li>${juegos[posicion]}</li>`)
}
document.write(`</ul>`)
