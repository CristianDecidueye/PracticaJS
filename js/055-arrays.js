// crear un array vacio

const listaProductos = [];

// crear un array con datos siempre usar una S al final, que de a entender que hay varias listas separados por coma

const juegos = ['Stardew valley','fifa', 'league of legends', true, 2024, 'fornite',];
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