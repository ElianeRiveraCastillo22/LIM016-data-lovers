<<<<<<< HEAD
import{infoDirector} from './data.js';
=======
import {ordenarEstreno} from './data.js';
>>>>>>> 1e96b7bee7a7feb44904c57db0f2732a79dad2e0
//console.log(example)
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])

/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const btnTitle = document.querySelector("#btn-title");
const btnFilmografia = document.querySelector("#btn-filmografia");
const btnDuracion = document.querySelector("#btn-duracion");
<<<<<<< HEAD

const btnPersonajes = document.querySelector("#btn-personajes");
const btnContainer= document.querySelector(".botones")
const btnDirector = document.querySelector("#btn-director");
const btnProductor= document.querySelector("#btn-productor");
const btnEstreno= document.querySelector("btn-estreno")
=======
//const btnDirector = document.querySelector("#btn-director");
const btnPersonajes = document.querySelector("#btn-personajes");
const btnContainer = document.querySelector(".botones");
const btnDirector = document.querySelector("#btn-director");
const btnProductor = document.querySelector("#btn-productor");
const btnEstreno = document.querySelector("#btn-estreno");
>>>>>>> 1e96b7bee7a7feb44904c57db0f2732a79dad2e0

//const {films} = data;
//console.log(films);

const infoData = data.films; //console.log(infoData)
const cards=document.querySelector(".apareceInf");

window.addEventListener('DOMContentLoaded',function(){
<<<<<<< HEAD
displayMenuItems(infoData)
=======
displayMenuItems(infoData);
>>>>>>> 1e96b7bee7a7feb44904c57db0f2732a79dad2e0
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
<<<<<<< HEAD
}) ;
cards.innerHTML= template;
//console.log(template)
} 

 //despliegue de pelicula{}

btnTitle.addEventListener('change',function(){
    mostrarPelicula(infoData);

=======
}) 
 cards.innerHTML= template;
//console.log(template)
} 

// Despliegue de pelicula

btnTitle.addEventListener('change',function(){
    mostrarPelicula(infoData);
    
>>>>>>> 1e96b7bee7a7feb44904c57db0f2732a79dad2e0
});

function mostrarPelicula(menuItems){
    let template="";
<<<<<<< HEAD
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

    
=======
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.title === btnTitle.value)
    template = `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>${pelicula.title}</h2>
     <h2>${pelicula.director}</h2>
     <h2>${pelicula.producer}</h2>
     <h2>${pelicula.release_date}</h2>
     <h2>${pelicula.rt_score}</h2>
     <h2>${pelicula.description}</h2>
    </article>`;
 }) 
  cards.innerHTML= template;
 //console.log(template)
 } 
//Seleccionar pelicula
let titulos = [];

infoData.forEach(pelicula => {
    titulos.push(pelicula.title);
    /*let opcion =  document.createElement('option');
    opcion.value = pelicula.title;
    opcion.innerText = pelicula.title;
    btnTitle.appendChild(opcion);*/
})
titulos.sort();
titulos.forEach(titulo => {
    let opcion =  document.createElement('option');
    opcion.value = titulo;
    opcion.innerText = titulo;
    btnTitle.appendChild(opcion); 
})

let directores = [];

infoData.forEach(pelicula => {
    directores.push(pelicula.director);
    
})

//Array.from(new Set(directores));
const uniqueSetDirectores = new Set(directores);
const uniqueDirectores = [...uniqueSetDirectores];
uniqueDirectores.sort();
uniqueDirectores.forEach(director => {
    let opcion =  document.createElement('option');
    opcion.value = director;
    opcion.innerText = director;
    btnDirector.appendChild(opcion); 
})

// Despliegue de directores

btnDirector.addEventListener('change',function(){
    mostrarDirector(infoData);
    
    });

function mostrarDirector(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.director === btnDirector.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>${pelicula.title}</h2>
     <h2>${pelicula.director}</h2>
     <h2>${pelicula.producer}</h2>
     <h2>${pelicula.release_date}</h2>
     <h2>${pelicula.rt_score}</h2>
     <h2>${pelicula.description}</h2>
    </article>`;
 }) 
  cards.innerHTML= template;

}

// Productores

let productores = [];

infoData.forEach(pelicula => {
    productores.push(pelicula.producer);
   
})
//Array.from(new Set(productores));
const uniqueSetProductores = new Set(productores);
const uniqueProductores = [...uniqueSetProductores];
uniqueProductores.sort();
uniqueProductores.forEach(productor => {
    let opcion =  document.createElement('option');
    opcion.value = productor;
    opcion.innerText = productor;
    btnProductor.appendChild(opcion); 
})

// Despliegue de productores

btnProductor.addEventListener('change',function(){
    mostrarProductor(infoData);
    
    });

function mostrarProductor(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.producer === btnProductor.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>${pelicula.title}</h2>
     <h2>${pelicula.director}</h2>
     <h2>${pelicula.producer}</h2>
     <h2>${pelicula.release_date}</h2>
     <h2>${pelicula.rt_score}</h2>
     <h2>${pelicula.description}</h2>
    </article>`;
 }) 
  cards.innerHTML= template;

}

// Duracion de pelicula

let duracionDePelicula = [];

infoData.forEach(pelicula => {
    duracionDePelicula.push(pelicula.rt_score);
   
})
//Array.from(new Set(productores));
const uniqueSetDuracion = new Set(duracionDePelicula);
const uniqueDuracion = [...uniqueSetDuracion];
uniqueDuracion.sort(function(a,b){return a-b});
uniqueDuracion.forEach(duracion => {
    let opcion =  document.createElement('option');
    opcion.value = duracion;
    opcion.innerText = duracion;
    btnDuracion.appendChild(opcion); 
})

// Despliegue de duracion de peliculas

btnDuracion.addEventListener('change',function(){
    mostrarDuracionPelicula(infoData);
    
    });

function mostrarDuracionPelicula(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.rt_score === btnDuracion.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>${pelicula.title}</h2>
     <h2>${pelicula.director}</h2>
     <h2>${pelicula.producer}</h2>
     <h2>${pelicula.release_date}</h2>
     <h2>${pelicula.rt_score}</h2>
     <h2>${pelicula.description}</h2>
    </article>`;
 }) 
  cards.innerHTML= template;

}

// Estreno

/*let estreno = [];

infoData.forEach(pelicula => {
    estreno.push(pelicula.release_date);
   
})
//Array.from(new Set(estreno));
const uniqueSetEstreno = new Set(estreno);
const uniqueEstreno = [...uniqueSetEstreno];
uniqueEstreno.sort(function(a,b){return b-a});*/
ordenarEstreno(infoData).forEach(estreno => {
    let opcion =  document.createElement('option');
    opcion.value = estreno;
    opcion.innerText = estreno;
    btnEstreno.appendChild(opcion); 
})



// Despliegue de estrenos

btnEstreno.addEventListener('change',function(){
    mostrarEstreno(infoData);
    
    });

function mostrarEstreno(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.release_date === btnEstreno.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>${pelicula.title}</h2>
     <h2>${pelicula.director}</h2>
     <h2>${pelicula.producer}</h2>
     <h2>${pelicula.release_date}</h2>
     <h2>${pelicula.rt_score}</h2>
     <h2>${pelicula.description}</h2>
    </article>`;
 }) 
  cards.innerHTML= template;

}

// Personajes

let personajes = [];

infoData.forEach(pelicula => {
    personajes.push(pelicula.people);
    
   
})
//Array.from(new Set(personajes));
const uniqueSetPersonajes = new Set(personajes);
const uniquePersonajes = [...uniqueSetPersonajes];
uniquePersonajes.sort();
uniquePersonajes.forEach(personaje => {
    let opcion =  document.createElement('option');
    opcion.value = personaje;
    opcion.innerText = personaje;
    btnPersonajes.appendChild(opcion); 
})








/*for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    btnTitle.appendChild(opcion);
  
}
*/



//ejemplo internet

/*const {films} = data;
window.addEventListener('DOMcontentLoaded', () => {
    cards.innerHTML = infoData(films)
})
*/
/*const filterDataDirector = (data, condition) => {
    const movieDirector = Data.filter(menuItems => {
        if(menuItems.director === condition) {
            return menuItems;
        }
    
     })
     if(condition == 'all') {
         return infoData(data);
     }else{
         return infoData(movieDirector);
     }
     
};
*/    

/*const filterBtns = document.querySelectorAll(".btnOpciones");
    //console.log(filterBtns);

filterBtns.forEach((btn) => {
    btn.addEventListener('click', e => {
        const condition = e.currentTarget.dataset.id;
        cards.innerHTML = filterDataDirector(films,condition);
    })

    
});

*/






/*const btnDirector = document.querySelectorAll("#btn-director");
btnDirector.forEach((btn) => {
    btn.addEventListener('click', e => {
        const category = e.currentTarget.dataset.id;
        cards.innerHTML = infoDirector(films,category);
    })
});

*/






















//ejemplo video
/*function displayFilmsButtons() {
    const categories= infoData.reduce(function(values, item) {
        if(!values.includes(item.director)) {
            values.push(item.director);
        }
        return values;
     },
     ["all"]
    );
    const categoryBtn = categories.map(function(director) {
        return `<button type="button" class="btnOpciones" data.id=${director}>${director}</button>`;
    })
    .join("");

    btnContainer.innerHTML = categoryBtn;

    const filterBtns = btnContainer.querySelectorAll(".btnOpciones");
    //console.log(filterBtns);

    filterBtns.forEach( function(btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const infoDirector = infoData.filter(function(menuItems) {
          if (menuItems.director === category) {
            return menuItems;
          }
        });  
          if (category == 'all') {
            return infoData(data);
          } else {
            return infoData(director);
          }
        
      }

},

*/








>>>>>>> 1e96b7bee7a7feb44904c57db0f2732a79dad2e0








<<<<<<< HEAD
 
=======
>>>>>>> 1e96b7bee7a7feb44904c57db0f2732a79dad2e0


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
console.log(nombreDeArticulos)  

*/

























































