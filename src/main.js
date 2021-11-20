
//console.log(example)
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])

/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const btnTitle = document.querySelector("#btn-title");
const btnFilmografia = document.querySelector("#btn-filmografia");
const btnDuracion = document.querySelector("#btn-duracion");
const btnDirector = document.querySelector("#btn-director");
const btnPersonajes = document.querySelector("#btn-personajes");

//const {films} = data;
//console.log(films);

const infoData = data.films; //console.log(infoData)
const cards=document.querySelector(".apareceInf");

window.addEventListener('DOMContentLoaded',function(){
displayMenuItems(infoData)
//movieOptions(infoData)
});

function displayMenuItems(menuItems){
   let template="";
    menuItems.forEach(pelicula=>{
   // console.log(pelicula)
   template += `<article class="template-card">
   <figure class="clase">
   <img src="${pelicula.poster}" alt="${pelicula.title}">
   </figure></article>`;
}) 
cards.innerHTML= template;
//console.log(template)
} 


 /* function movieOptions(movieObj){ 
        for(let i=0; i<movieObj.length ;i++){
            const optiontag=document.createElement('option');
            optiontag.value=movieObj[i].title
            optiontag.innerText=movieObj[i].title
            btnTitle.appendChild(optiontag)

        }
console.log(movieOp(movieObj))
 }
 */

/* const template=document.getElementById("template-card");
const fragmento=document.createDocumentFragment();  */
 /*   infoData.forEach(elemento=>{console.log(elemento)
});  

/* // trae la lista
 infoData.forEach(function(articulo){
console.log(articulo.title)
})  */

/* //para llamar a una cosa en espesifico
let encuentraArtculo=infoData.find(function(articulo){
    return articulo.title ==="Castle in the Sky"
})
console.log(encuentraArtculo) */

/*  let nombreDeArticulos=infoData.map(function(nombre){
return nombre.title
})
console.log(nombreDeArticulos)  */





























































