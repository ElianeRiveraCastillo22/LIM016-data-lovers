import { example } from './data.js';
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example)
/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 

const btnNombre = document.querySelector("#btn-Nombre");
const btnFilmografia = document.querySelector("#btn-filmografia");
const btnDuracion = document.querySelector("#btn-duracion");
const btnDirector = document.querySelector("#btn-director");
const btnPersonajes = document.querySelector("#btn-personajes");

//const {films} = data;
//console.log(films);

const infoData = data.films;
console.log(infoData); 
/*const arrayNombres = Array.map(data.films.name);
console.log(arrayNombres);
*/
