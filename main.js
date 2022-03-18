import {ordenarEstreno} from './docs/data.js';
import {ordenarScore} from './docs/data.js';
import {ordenarProductores} from './docs/data.js';
import {ordenarDirectores} from './docs/data.js';
import {ordenarTitulos} from './docs/data.js';
//console.log(example)
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])

/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const selectTitle = document.querySelector("#select-title");
const inputScore = document.querySelector("#input-score");
const selectDirector = document.querySelector("#select-director");
const selectProducer = document.querySelector("#select-producer");
const selectPremiere = document.querySelector("#select-premiere");
let mostrarPeople = document.querySelector("#mostrar-personajes");
let mostrarLocation = document.querySelector("#mostrar-locacion");
let mostrarVehicles = document.querySelector("#mostrar-vehiculos");
//const {films} = data;  
//console.log(films);

const infoData = data.films; //console.log(infoData)
const cards=document.querySelector(".apareceInf");
/* const searchLetterForFilm=document.querySelector(".box"); */
const containerGeneral=document.querySelector(".container__general")

displayMenuItems(infoData);

function displayMenuItems(menuItems){
  /*   let template="" ; */
    menuItems.forEach((pelicula)=>
    {
     // console.log(pelicula)
    const createElement=document.createElement("div")
    createElement.setAttribute("class",'cardPricipal');
    const template = `

            <div class="card__Father">
                <div class="cardLatter">
                    <div class="cardLatter__frond">
                    </div>
                    <img src="${pelicula.poster}" alt="${pelicula.title}">
                    <div class="cardLastter__back">
                    <h4>${pelicula.title}</h4>
                    <p>${pelicula.description}</p>
                    </div>
                </div>
            </div>
   `;
createElement.innerHTML=template;
containerGeneral.appendChild(createElement)

 return template;
})
}
/* window.addEventListener('DOMContentLoaded',function(){
displayMenuItems(infoData);
//displayFilmsButtons();
//movieOptions(infoData)
});

function displayMenuItems(menuItems){
   let template="";
    menuItems.forEach(pelicula=>{
        // console.log(pelicula)
        template += `
        <div class="card__Father">
            <div class="cardLatter">
                <div class="cardLatter__frond">
                </div>
                <img src="${pelicula.poster}" alt="${pelicula.title}">
                <div class="cardLastter__back">
                    <h4>${pelicula.title}</h4>
                    <p>${pelicula.description}</p>
                </div>
            </div>
        </div>
        `;
    }) 
    cards.innerHTML= template;

}  */

// Buscador de pelicula

const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');
//const nombrePelicula = document.querySelector('#nombrePelicula');



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
        template += 
        `
    <div class="boxSeeker">
        <div class="cardDescriptionSeeker__main"> 
            <div class="cardImgSeeker">
                <img class="posterSeeker" src="${pelicula.poster}",
                alt="${pelicula.title}"> 
            </div>
            <div class="cardDecriptionSeeker__poster" >
                <div class="cardTitleSeeker">
                    <h1>${pelicula.title}</h1>
                </div>
                <div class="cardDescriptionSeeker">
                    <p>${pelicula.description}</p>
                </div>
                <div class="cardSpecsSeeker">
                    <p><b>Producer:</b>${pelicula.producer}</p>
                    <p><b>Director:</b> ${pelicula.director}</p>
                    <p><b>Release date:</b>${pelicula.release_date}</p>
                    <p><b>Score:</b>${pelicula.rt_score}</p>
                </div>
            </div>
        </div>
    </div>

         `;        
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
            template =
        `
        <div class="box">
        <div  action="" id="botonPelicula" class="botonPelicula">
            <button id="mostrar-personajes" class="boton"><b class="escritoBtn">People</b></button>
            <button id="mostrar-vehiculos" class="boton"><b class="escritoBtn">Vehicles</b></button>
            <button id="mostrar-locacion" class="boton"><b class="escritoBtn">Locations</b></button>
        </div>

        <div class="cardDescription__main">
            <div class="cardImg">
                <img class="poster" src="${pelicula.poster}"
                alt="${pelicula.title}"> 
            </div>
            <div class="cardDecription__poster" >
                <div class="cardTitle">
                    <h1>${pelicula.title}</h1>
                </div>
                <div class="cardDescription">
                    <p>${pelicula.description} </p>
                </div>
                <div class="cardSpecs">
                    <p><b>Producer:</b>${pelicula.producer}</p>
                    <p><b>Director:</b>${pelicula.director}</p>
                    <p><b>Release date:</b>${pelicula.release_date}</p>
                    <p><b>Score:</b>${pelicula.rt_score}</p>
                </div>
            </div>
        </div>
        </div>`;
        }   
    })       
    cards.innerHTML= template;
    mostrarPeople = document.querySelector("#mostrar-personajes");
    mostrarPeople.addEventListener('click',function(){
        mostrarPersonaje(infoData);    
    });
    
    mostrarLocation = document.querySelector("#mostrar-locacion");
    mostrarLocation.addEventListener('click',function(){
        mostrarLocacion(infoData);
        
    });
    mostrarVehicles = document.querySelector("#mostrar-vehiculos");
    mostrarVehicles.addEventListener('click',function(){
        mostrarVehiculos(infoData);
        
    });
    
}

/*mostrarPeople.addEventListener('click',function(){
    mostrarPersonaje(infoData);
    
});
*/

 function mostrarPersonaje(menuItems){
    let templatePersonajes = "";
    let personajes = null;
    menuItems.forEach(movie => {
        if(movie.title === selectTitle.value) {
            personajes= movie.people;
        }
    }) 

    personajes.forEach(personaje => {
        templatePersonajes += 
            `
        <div class="select__bodyCard">
            <div class="containerPeople">
                <div class="cardPeople">
                    <div class="People">
                        <div class="title">
                            <h2>${personaje.name}</h2>
                        </div>
                        <div class="peopleImg">
                            <img src="${personaje.img}" alt="${personaje.img}" class="imgPeople">
                        </div>
                    </div>
        
                    <div class="infoDescription__people">
                        <div class="qualityOptions">
                            <p><b>Gender:</b>${personaje.gender}</p>
                        </div>
                        <div class="qualityOptions">
                            <p><b>Age:</b> ${personaje.age}</p>
                        </div>
                        <div class="qualityOptions">
                            <p><b>Eye color:</b>${personaje.eye_color}</p>
                        </div>  
                        <div class="qualityOptions">
                            <p><b>Specie:</b>${personaje.specie}</p>
                        </div>
                        <div class="qualityOptions" >
                            <p><b>Hair color:</b>${personaje.hair_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `; 
            
            
    })        
    cards.innerHTML= templatePersonajes;
           
} 
/*mostrarLocation.addEventListener('click',function(){
    mostrarLocacion(infoData);
    
});
*/

function mostrarLocacion(menuItems){
    let templateLocations = "";
    let locaciones = null;
    menuItems.forEach(movie => {
        if(movie.title === selectTitle.value) {
            locaciones = movie.locations;
        }    
    })        
    locaciones.forEach(locacion =>{
        templateLocations += 
         `
        <div class="containerLocations">
            <div class="cardLocations">
                <div class="locations">
                    <div class="titleLocations">
                        <h2>Kusakabe's House</h2>
                    </div>
                    <div class="locationsImg">
                        <img src="${locacion.img}" alt="${locacion.img}" class="imgLocations">
                    </div>
                </div>
    
                <div class="infoDescription__locations">
                    <div class="qualityOptionsLocations">
                        <p><b>climate:</b>${locacion.climate}</p>
                    </div>
                    <div class="qualityOptionsLocations">
                        <p><b>terrain:</b>${locacion.terrain}</p>
                    </div>  
                    <div class="qualityOptionsLocations">
                        <p><b>surface_water:</b>${locacion.surface_water}</p>
                    </div>`
                if("residents" in locacion) {
                    locacion.residents.forEach(residente => {
                        //console.log(typeof(residente))
                        if(typeof(residente) === "object") {
                            if("name" in residente) {
                            templateLocations += `
                             <div class="qualityOptionsLocations"> 
                            <p><b>Residents:</b> ${residente.name}</p>
                            </div>`
                            }
                        }else{
                            templateLocations += `
                            <div class="qualityOptionsLocations">
                            <p><b>Residents:</b> ${residente}</p>
                            </div>`
                        }    
                    })   
                }
                templateLocations +=  `     </div>
                                        </div>
                                    </div>
                                    ` 
    })
    cards.innerHTML= templateLocations;
}
/*mostrarVehicles.addEventListener('click',function(){
    mostrarVehiculos(infoData);

});
*/
function mostrarVehiculos(menuItems){
    let templateVehiculos = "";
    let vehiculos = null;
    menuItems.forEach(movie => {
        if(movie.title === selectTitle.value) {
            vehiculos = movie.vehicles;
        }
    })
    vehiculos.forEach(vehiculo =>{
        templateVehiculos +=
        `<article class="template-director">
            <div class="img-director">
                <img src="${vehiculo.img}" alt="${vehiculo.img}">
            </div>
            <div class="content-director">
                <div class="title-director">
                    <p>Vehiculo ${vehiculo.name}</p>
                    <p>Vehicle class: ${vehiculo.vehicle_class}</p>
                    <p>Length: ${vehiculo.length}</p>
                    <p>Pilot name: ${vehiculo.pilot.name}</p>
                </div>
                <div class="content-description">
                    <p>Description: ${vehiculo.description}</p>
                </div>
            </div>
        </article>`

    })
        cards.innerHTML= templateVehiculos;

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
        if(pelicula.director === selectDirector.value)
        template +=
            `
        <div class="boxDirector">
            <div class="cardDescriptionDirector__main">
                <div class="cardImgDirector">
                    <img class="posterDirector" src="${pelicula.poster}",
                    alt="${pelicula.title}">
                </div>

                <div class="cardDecriptionDirector__poster" >
                    <div class="cardTitleDirector">
                        <h1>${pelicula.title}</h1>
                    </div>
                    <div class="cardDescriptionDirector">
                        <p>${pelicula.description}</p>
                    </div>
                    <div class="cardSpecsDirector">
                        <p><b>Producer:</b>${pelicula.producer}</p>
                        <p><b>Director:</b>${pelicula.director}</p>
                        <p><b>Release date:</b>${pelicula.release_date}</p>
                        <p><b>Score:</b>${pelicula.rt_score}</p>
                    </div>
                </div>
            </div>
        </div>
            `;
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
    template +=
        `
<div class="boxProducer">
    <div class="cardDescriptionProducer__main">
        <div class="cardImgProducer">
            <img class="posterProducer" src="${pelicula.poster}",
            alt="${pelicula.title}">
        </div>
        <div class="cardDecriptionProducer__poster" >
            <div class="cardTitleProducer">
                <h1>${pelicula.title}</h1>
            </div>
            <div class="cardDescriptionProducer">
                <p>:${pelicula.description}</p>
            </div>
            <div class="cardSpecsProducer">
                <p><b>Producer:</b> ${pelicula.producer}</p>
                <p><b>Director:</b>${pelicula.director} </p>
                <p><b>Release date:</b>${pelicula.release_date}</p>
                <p><b>Score:</b>${pelicula.rt_score}</p>
            </div>
        </div>
    </div>
</div>
        `;
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
        template += 
        `
    <div class="boxScore">
        <div class="cardDescriptionScore__main"> 
            <div class="cardImgProducer">
                <img class="posterScore" src="${pelicula.poster}",
                alt="${pelicula.title}"> 
            </div>
            <div class="cardDecriptionScore__poster" >
                <div class="cardTitleScore">
                    <h1>${pelicula.title}</h1>
                </div>
                <div class="cardDescriptionScore">
                    <p>${pelicula.description} </p>
                </div>
                <div class="cardSpecsScore">
                    <p><b>Producer:</b>${pelicula.producer}</p>
                    <p><b>Director:</b>${pelicula.director}</p>
                    <p><b>Release date:</b>${pelicula.release_date}</p>
                    <p><b>Score:</b>${pelicula.rt_score}</p>
                </div>
            </div>
        </div>
    </div>
        `;
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
        template +=
        `
    <div class="boxYear">
        <div class="cardDescriptionYear__main">
            <div class="cardImgYear">
                <img class="posterYear" src="${pelicula.poster}",
                alt="${pelicula.title}">
            </div>
            <div class="cardDecriptionYear__poster" >
                <div class="cardTitleYear">
                    <h1>${pelicula.title}</h1>
                </div>
                <div class="cardDescriptionYear">
                    <p> ${pelicula.description}</p>
                </div>
                <div class="cardSpecsYear">
                    <p><b>Producer:</b>${pelicula.producer}</p>
                    <p><b>Director:</b>${pelicula.director}</p>
                    <p><b>Release date:</b>${pelicula.release_date}</p>
                    <p><b>Score:</b>${pelicula.rt_score}</p>
                </div>
            </div>
        </div>
    </div>
        `;
    })
  cards.innerHTML= template;

}

















