import {ordenarEstreno} from './data.js';
import {ordenarScore} from './data.js';
import {ordenarProductores} from './data.js';
import {ordenarDirectores} from './data.js';
import {ordenarTitulos} from './data.js';
//console.log(example)
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])

/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const selectTitle = document.querySelector("#select-title");
const inputScore = document.querySelector("#input-score");
const selectDirector = document.querySelector("#select-director");
const selectProducer = document.querySelector("#select-producer");
const selectPremiere = document.querySelector("#select-premiere");

//const {films} = data;  
//console.log(films);

const infoData = data.films; //console.log(infoData)
const cards=document.querySelector(".apareceInf");

window.addEventListener('DOMContentLoaded',function(){
displayMenuItems(infoData);
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
}) 
 cards.innerHTML= template;

} 

// Buscador de pelicula

const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');


const search = () => {
    const write = buscador.value.toLowerCase();
    const searchData = [];

    infoData.forEach((pelicula) => {
        let tituloFilms = pelicula.title.toLowerCase();

        if(tituloFilms.includes(write)){
            searchData.push(pelicula)
        }
    })
    buscadorMostrarPelicula(searchData)

}
boton.addEventListener('click', search)

// Buscador mostrar pelicula

function buscadorMostrarPelicula(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)   
        template += `<article class="template-card">
        <figure class="clase">
        <img src="${pelicula.poster}" alt="${pelicula.title}">
        </figure>
        <div>
        <h2>Title: ${pelicula.title}</h2>
        <h2>Director: ${pelicula.director}</h2>
        <h2>Producer: ${pelicula.producer}</h2>
        <h2>Release date: ${pelicula.release_date}</h2>
        <h2>Rt score: ${pelicula.rt_score}</h2>
        <h2>Description:${pelicula.description}</h2>
        </article>`;        
    })  
    
    cards.innerHTML= template;
    //console.log(template)
} 



// Seleccionar pelicula, imagenes, vehiculos y locaciones

/*let titulos = [];

infoData.forEach(pelicula => {
    titulos.push(pelicula.title);
        
})
titulos.sort();*/
ordenarTitulos(infoData).forEach(titulo => {
    let opcion =  document.createElement('option');
    opcion.value = titulo;
    opcion.innerText = titulo;
    selectTitle.appendChild(opcion); 
})
// Despliegue de pelicula

selectTitle.addEventListener('change',function(){
    mostrarPelicula(infoData);
    
});

function mostrarPelicula(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
        if(pelicula.title === selectTitle.value) {
            let templatePersonajes = "";
            pelicula.people.forEach(personaje => {
                templatePersonajes += `<article class="template-card">
                <figure class="clase">
                <img src="${personaje.img}" class="img-personaje">
                </figure>
                <div>
                <h2>Name: ${personaje.name}</h2>
                <h2>Gender: ${personaje.gender}</h2>
                <h2>Age: ${personaje.age}</h2>
                <h2>Eye color: ${personaje.eye_color}</h2>
                <h2>Specie: ${personaje.specie}</h2>
                </div>`   
            })

            let templateLocations = "";
            //if("locations" in pelicula) {
                pelicula.locations.forEach(locacion => {
                    //console.log(locacion)
                    templateLocations += `<article class="template-card">
                    <figure class="clase">
                    <img src="${locacion.img}" alt="${locacion.img}">
                    </figure>
                    <div>
                    <h2>Name: ${locacion.name}</h2>
                    <h2>Gender: ${locacion.climate}</h2>
                    <h2>Age: ${locacion.terrain}</h2>
                    <h2>Eye color: ${locacion.surface_water}</h2>
                    `
                    if("residents" in locacion) {
                        locacion.residents.forEach(residente => {
                           //console.log(typeof(residente))
                           if(typeof(residente) === "object") {
                            if("name" in residente) {
                                templateLocations += `<h2>Residente: ${residente.name}</h2>`
                            }
                           }else{
                                templateLocations += `<h2>Residente: ${residente}</h2>`
                            }
                            
                        })
                    }

                    templateLocations += `</div>`

                });
            //} 



            let templateVehiculos = "";
            //if("vehicles" in pelicula) {
                pelicula.vehicles.forEach(vehiculo => {
                    templateVehiculos += `<article class="template-card">
                    <figure class="clase">
                    <img src="${vehiculo.img}" alt="${vehiculo.img}">
                    </figure>
                    <div>
                    <h2>Name: ${vehiculo.name}</h2>
                    <h2>Gender: ${vehiculo.description}</h2>
                    <h2>Age: ${vehiculo.vehicle_class}</h2>
                    <h2>Eye color: ${vehiculo.length}</h2>
                    <h2>Specie: ${vehiculo.pilot.name}</h2>
                    </div>`   
                })
            //}
            template = 
            `<article class="template-card">
                <div class="clase">
                    <img src="${pelicula.poster}" class="pelicula-poster">
                    <div class="content">
                        <div class="title">
                            <h2>Title: ${pelicula.title}</h2>
                        </div>
                        <div class="content-info">
                            <h2>Director: ${pelicula.director}</h2>
                            <h2>Producer: ${pelicula.producer}</h2>
                            <h2>Release date: ${pelicula.release_date}</h2>
                            <h2>Rt score: ${pelicula.rt_score}</h2>
                        </div>
                        <div class="content-description">
                            <h2>Description:${pelicula.description}</h2>
                        </div>
                        ${templatePersonajes}
                        ${templateLocations}
                        ${templateVehiculos}    
                    </div>        
                </div>        
            </article>`;
                
        }    
            
    })  
    
    cards.innerHTML= template;
    //console.log(template)
} 


// Ordenar directores

/*let directores = [];

infoData.forEach(pelicula => {
    directores.push(pelicula.director);
    
})

//Array.from(new Set(directores));
const uniqueSetDirectores = new Set(directores);
const uniqueDirectores = [...uniqueSetDirectores];
uniqueDirectores.sort();*/
ordenarDirectores(infoData).forEach(director => {
    let opcion =  document.createElement('option');
    opcion.value = director;
    opcion.innerText = director;
    selectDirector.appendChild(opcion); 
})

// Despliegue de directores

selectDirector.addEventListener('change',function(){
    mostrarDirector(infoData);
    
});

function mostrarDirector(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
        // console.log(pelicula)
        if(pelicula.director === selectDirector.value)
        template += `<article class="template-card">
        <figure class="clase">
        <img src="${pelicula.poster}" alt="${pelicula.title}">
        </figure>
        <div>
        <h2>Title: ${pelicula.title}</h2>
        <h2>Director: ${pelicula.director}</h2>
        <h2>Producer: ${pelicula.producer}</h2>
        <h2>Release date: ${pelicula.release_date}</h2>
        <h2>Rt score: ${pelicula.rt_score}</h2>
        <h2>Description: ${pelicula.description}</h2>
        </article>`;
    }) 
    cards.innerHTML= template;

}

// Productores

/*let productores = [];

infoData.forEach(pelicula => {
    productores.push(pelicula.producer);
   
})
//Array.from(new Set(productores));
const uniqueSetProductores = new Set(productores);
const uniqueProductores = [...uniqueSetProductores];
uniqueProductores.sort();*/
ordenarProductores(infoData).forEach(productor => {
    let opcion =  document.createElement('option');
    opcion.value = productor;
    opcion.innerText = productor;
    selectProducer.appendChild(opcion); 
})

// Despliegue de productores

selectProducer.addEventListener('change',function(){
    mostrarProductor(infoData);
    
    });

function mostrarProductor(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.producer === selectProducer.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>Title: ${pelicula.title}</h2>
     <h2>Director: ${pelicula.director}</h2>
     <h2>Producer: ${pelicula.producer}</h2>
     <h2>Release date: ${pelicula.release_date}</h2>
     <h2>Rt score: ${pelicula.rt_score}</h2>
     <h2>Description: ${pelicula.description}</h2>
    </article>`;
 }) 
  cards.innerHTML= template;

}

// Score de pelicula

/*let scoreDePelicula = [];

infoData.forEach(pelicula => {
    scoreDePelicula.push(pelicula.rt_score);
   
})
//Array.from(new Set(productores));
const uniqueSetScore = new Set(scoreDePelicula);
const uniqueScore = [...uniqueSetScore];
uniqueScore.sort(function(a,b){return a-b});*/
ordenarScore(infoData).forEach(score => {
    let opcion =  document.createElement('option');
    opcion.value = score;
    opcion.innerText = score;
    inputScore.appendChild(opcion); 
})

// Despliegue de score de peliculas

inputScore.addEventListener('change',function(){
    mostrarScorePelicula(infoData);
    
    });

function mostrarScorePelicula(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.rt_score === inputScore.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>Title: ${pelicula.title}</h2>
     <h2>Director: ${pelicula.director}</h2>
     <h2>Producer: ${pelicula.producer}</h2>
     <h2>Release date: ${pelicula.release_date}</h2>
     <h2>Rt score: ${pelicula.rt_score}</h2>
     <h2>Description: ${pelicula.description}</h2>
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
    selectPremiere.appendChild(opcion); 
})



// Despliegue de estrenos

selectPremiere.addEventListener('change',function(){
    mostrarEstreno(infoData);
    
});

function mostrarEstreno(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.release_date === selectPremiere.value)
    template += `<article class="template-card">
    <figure class="clase">
    <img src="${pelicula.poster}" alt="${pelicula.title}">
    </figure>
    <div>
     <h2>Title: ${pelicula.title}</h2>
     <h2>Director: ${pelicula.director}</h2>
     <h2>Producer: ${pelicula.producer}</h2>
     <h2>Release date: ${pelicula.release_date}</h2>
     <h2>Rt score: ${pelicula.rt_score}</h2>
     <h2>Description: ${pelicula.description}</h2>
     </div>
    </article>`;
    }) 
  cards.innerHTML= template;

}

























































