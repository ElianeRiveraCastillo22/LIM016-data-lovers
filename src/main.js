import{infoDirector} from './data.js';
//console.log(example)
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])

/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const btnTitle = document.querySelector("#btn-title");
const btnFilmografia = document.querySelector("#btn-filmografia");
const btnDuracion = document.querySelector("#btn-duracion");

const btnPersonajes = document.querySelector("#btn-personajes");
const btnContainer= document.querySelector(".botones")
const btnDirector = document.querySelector("#btn-director");
const btnProductor= document.querySelector("#btn-productor");
const btnEstreno= document.querySelector("btn-estreno")

//const {films} = data;
//console.log(films);

const infoData = data.films; //console.log(infoData)
const cards=document.querySelector(".apareceInf");

window.addEventListener('DOMContentLoaded',function(){
displayMenuItems(infoData)
//displayFilmsButtons();
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
}) ;
cards.innerHTML= template;
//console.log(template)
} 

 //despliegue de pelicula{}

btnTitle.addEventListener('change',function(){
    mostrarPelicula(infoData);

});

function mostrarPelicula(menuItems){
    let template="";
    menuItems.forEach(pelicula=>{
        //console.log(pelicula)
        if(pelicula.title===btnTitle.value)
        template = `<article class="template-card">
        <figure class="clase">
        <img src="${pelicula.poster}" alt="${pelicula.title}"
        </figure>
        <div>
        <h2>${pelicula.title}</h2>
        <h2>${pelicula.director}</h2>
        <h2>${pelicula.producer}</h2>
        <h2>${pelicula.release_date}</h2>
        <h2>${pelicula.rt_score}</h2>
        <h2>${pelicula.description}</h2>
        </div>`;
    })
    cards.innerHTML=template
    //console.log(template)
}
    //seleccionar pelicula
let titulos =[];

infoData.forEach(pelicula=>{
    titulos.push(pelicula.title);
    /* let option=ducument.createElement('option');
    option.value=pelicula.title;
    option.innerText=pelicula.title;
    btnTitle.appendChild(option); 
})
title.sort

    








 


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





























































