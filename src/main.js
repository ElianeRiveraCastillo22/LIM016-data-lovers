/* eslint-disable no-undef */
import {ordenarEstreno} from './data.js';
//console.log(example)
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])

/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const btnTitle = document.querySelector("#btn-title");
const btnFilmografia = document.querySelector("#btn-filmografia");
const btnScore = document.querySelector("#btn-duracion");
//const btnDirector = document.querySelector("#btn-director");
const btnPersonajes = document.querySelector("#btn-personajes");
const btnContainer = document.querySelector(".botones");
const btnDirector = document.querySelector("#btn-director");
const btnProductor = document.querySelector("#btn-productor");
const btnEstreno = document.querySelector("#btn-estreno");

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



// prueba Seleccionar pelicula colocar imagenes; vehiculos y locaciones

let titulos = [];

infoData.forEach(pelicula => {
    titulos.push(pelicula.title);
        
})
titulos.sort();
titulos.forEach(titulo => {
    let opcion =  document.createElement('option');
    opcion.value = titulo;
    opcion.innerText = titulo;
    btnTitle.appendChild(opcion); 
})
// Despliegue de pelicula

btnTitle.addEventListener('change',function(){
    mostrarPelicula(infoData);
    
});

function mostrarPelicula(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
        if(pelicula.title === btnTitle.value) {
            let templatePersonajes = "";
            pelicula.people.forEach(personaje => {
                templatePersonajes += `<figure class="clase">
                <img src="${personaje.img}" alt="${personaje.img}">
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
                    templateLocations += `<figure class="clase">
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
                    templateVehiculos += `<figure class="clase">
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
            template = `<article class="template-card">
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
            ${templatePersonajes}
            ${templateLocations}
            ${templateVehiculos}
            </article>`;
                
        }    
            
    })  
    
    cards.innerHTML= template;
    //console.log(template)
} 




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

// Duracion de pelicula

let scoreDePelicula = [];

infoData.forEach(pelicula => {
    scoreDePelicula.push(pelicula.rt_score);
   
})
//Array.from(new Set(productores));
const uniqueSetScore = new Set(scoreDePelicula);
const uniqueScore = [...uniqueSetScore];
uniqueScore.sort(function(a,b){return a-b});
uniqueScore.forEach(score => {
    let opcion =  document.createElement('option');
    opcion.value = score;
    /* opcion.innerText = score; */
    btnScore.appendChild(opcion); 
})

// Despliegue de score de peliculas

btnScore.addEventListener('change',function(){
    mostrarScorePelicula(infoData);
    
    });

function mostrarScorePelicula(menuItems){
    let template="";
     menuItems.forEach(pelicula=>{
    // console.log(pelicula)
    if(pelicula.rt_score === btnScore.value)
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

// Personajes

/*let dataPersonajes = [];
let personajes = [];

infoData.forEach(pelicula => {
    dataPersonajes.push(pelicula.people);
    pelicula.people.forEach(people => {
        personajes.push(people.name);
    
    })
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
*/
// Despliegue de personajes

/*btnPersonajes.addEventListener('change',function(){
    mostrarPersonaje(infoData);
    
});

function mostrarPersonaje(menuItems){
    let template="";
    menuItems.forEach(pelicula=>{
        pelicula.people.forEach(personaje => {
            if(personaje.name === btnPersonajes.value) {
                template += `<article class="template-card">
                <figure class="clase">
                <img src="${personaje.img}" alt="${personaje.img}">
                </figure>
                <div>
                <h2>Name: ${personaje.name}</h2>
                <h2>Gender: ${personaje.gender}</h2>
                <h2>Age: ${personaje.age}</h2>
                <h2>Eye color: ${personaje.eye_color}</h2>
                <h2>Specie: ${personaje.specie}</h2>
                </div>
                </article>`;
            }
        })
    
    }) 
    cards.innerHTML= template;

}
*/
/*function mostrarEstreno(menuItems){
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

*/

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

/*para ocultar el menu side*/
const checkbox=document.getElementById("menu-toogle")
checkbox.addEventListener('click',myCheckbox())

function myCheckbox(){
    let containerMenu=document.querySelector(".container-menu");
    
    console.log(containerMenu.display)
    if(containerMenu.display ==="none"){
        containerMenu.display="block";
    } else {
        containerMenu.display="none";
    }
    
}













