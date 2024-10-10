import { ordenarEstreno } from "./data.js";
import { ordenarScore } from "./data.js";
import { ordenarProductores } from "./data.js";
import { ordenarDirectores } from "./data.js";
import { ordenarTitulos } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const buscador = document.querySelector("#buscador");
const boton = document.querySelector("#boton");
const selectTitle = document.querySelector("#select-title");
const inputScore = document.querySelector("#input-score");
const selectDirector = document.querySelector("#select-director");
const selectProducer = document.querySelector("#select-producer");
const selectPremiere = document.querySelector("#select-premiere");
let mostrarPeople = document.querySelector("#mostrar-personajes");
let mostrarLocation = document.querySelector("#mostrar-locacion");
let mostrarVehicles = document.querySelector("#mostrar-vehiculos");


const infoData = data.films;
let main = document.querySelector("main");
const heightHead = document.querySelector("header");
const containerAllCards = document.createElement("div");
containerAllCards.setAttribute("class", "allCards");
const containerCard = document.createElement("div");
containerCard.setAttribute("class", "containerCard");
const cardInfo = (data)=>{
    const template = `
    <div class="cardInfo">
        <figure class="cardInfo__containerImg ">
            <img class="cardInfo__img " src="${data.poster}",
            alt="${data.title}">
        </figure>

        <div class="cardInfo__containerInfo" >
            <h1 class="cardInfo__containerInfo--title">${data.title}</h1>
            <p>${data.description}</p>
            <div class="containerInfo__extra cardSpecsDirector">
                <p><b>Productor:</b>${data.producer}</p>
                <p><b>Director:</b>${data.director}</p>
                <p><b>Fecha de publicación:</b>${data.release_date}</p>
                <p><b>Puntuación:</b>${data.rt_score}</p>
            </div>
        </div>
    </div>
    `
    return template
}
function informationNotFound(sectionInfo) {
    main.innerHTML = `<p class="notFoundSection">
        No se encontró ${sectionInfo}
    </p>`
}

function resizeSpaceBetweenHeaderAndMain(sectionAllPost, heightHead) {
  sectionAllPost.style.top = `${heightHead.clientHeight}px`;
}
resizeSpaceBetweenHeaderAndMain(main, heightHead);

function showAllCards(menuItems) {
    menuItems.forEach((pelicula, indexPelicula) => {
        const allCardsCard = document.createElement("div");
        allCardsCard.setAttribute("class", "allCards__card");
        const template = `

        <img class="allCards__card--img" src="${pelicula.poster}" alt="${pelicula.title}">
        <button class="allCards__card--info" >
            <p>Ver mas sobre ${pelicula.title}</p>
            <img src="img/more.svg"/>
        </button>
        `;
        allCardsCard.innerHTML = template;
        main.append(containerAllCards);
        containerAllCards.append(allCardsCard);
        console.log(allCardsCard)

        const btnsMore = allCardsCard.querySelectorAll(".allCards__card--info")
        btnsMore.forEach(btn =>
            btn.addEventListener("click", (e)=>{
                main.innerHTML =""
                main.innerHTML = cardInfo(infoData[indexPelicula])
            })
        )
        return template;
    });
}
showAllCards(infoData);



const search = () => {
    const enteredText = buscador.value.toLowerCase();
    const arrayOfPartsOfTitle = infoData.map((movie,indexMovie) => {
        return movie.title.split(' ').map(word=>{return word.slice(0, enteredText.length).toLocaleLowerCase()})
    })
    let searchData= []
    arrayOfPartsOfTitle.map((word, wordIndex)=>{
        if(word.includes(enteredText)){
            searchData.push(infoData[wordIndex])
        }
    })
    showMovies(searchData);

};
boton.addEventListener("click", search);


function showMovies(menuItems) {
    let template = "";
    menuItems.forEach((pelicula) => {
        template += cardInfo(pelicula);
    });
    main.innerHTML =template
}

function showMovie(menuItems) {
    console.log(menuItems)
    let template = "";
    menuItems.forEach((pelicula) => {

        if (pelicula.title === selectTitle.value) {
            template += `
            <div class="cardContainer">
                <div action="" id="botonPelicula" class="cardContainer__btnContainer">
                    <button id="mostrar-personajes" class="boton cardContainer__btn"><b class="escritoBtn">People</b></button>
                    <button id="mostrar-vehiculos" class="boton cardContainer__btn"><b class="escritoBtn">Vehicles</b></button>
                    <button id="mostrar-locacion" class="boton cardContainer__btn"><b class="escritoBtn">Locations</b></button>
                </div>`
                template += cardInfo(pelicula)
            template +=`
            </div>`;
        }
    });
    main.innerHTML = template;

    mostrarPeople = document.querySelector("#mostrar-personajes");
    mostrarPeople.addEventListener("click", function () {
        ShowPerson(infoData);
    });

    mostrarLocation = document.querySelector("#mostrar-locacion");
    mostrarLocation.addEventListener("click", function () {
        showLocation(infoData);
    });
    mostrarVehicles = document.querySelector("#mostrar-vehiculos");
    mostrarVehicles.addEventListener("click", function () {
        showVehicles(infoData);
    });
}

function ShowPerson(menuItems) {
    let templatePersonajes = "";
    let personajes = null;
    menuItems.forEach((movie) => {
        if (movie.title === selectTitle.value) {
        personajes = movie.people;
        }
    });

    personajes.forEach((personaje) => {
        templatePersonajes += `
        <article class="cardPeople">
            <figure class="cardPeople__containerCardPeople">
                <img src="${personaje.img}" alt="${personaje.img}" class="cardPeople__img">
            </figure>
            <div class="cardPeople__containerInfo">
                <h2 class="cardPeople__title">${personaje.name}</h2>
                <div class="cardPeople__info">
                    <p><b>Gender:</b>${personaje.gender}</p>
                    <p><b>Age:</b> ${personaje.age}</p>
                    <p><b>Eye color:</b>${personaje.eye_color}</p>
                    <p><b>Specie:</b>${personaje.specie}</p>
                    <p><b>Hair color:</b>${personaje.hair_color}</p>
                </div>
            </div>
        </article>
        `;
    });
    containerCard.innerHTML = templatePersonajes;
    main.innerHTML = ""
    main.append(containerCard)


}

function showLocation(menuItems) {
    let templateLocations = "";
    let locaciones = null;
    menuItems.forEach((movie) => {
        if (movie.title === selectTitle.value) {
        locaciones = movie.locations;
        }
    });
    locaciones.forEach((locacion) => {
        templateLocations += `
            <article class="cardPeople">
                <figure class="cardPeople__containerCardPeople">
                    <img src="${locacion.img}" alt="${locacion.img}" class="cardPeople__img">
                </figure>
                <div class="cardPeople__containerInfo">
                    <h2 class="cardPeople__title">${locacion.name}</h2>
                    <div class="cardPeople__info">
                        <p><b>Clima:</b> ${locacion.climate}</p>
                        <p><b>Terreno:</b> ${locacion.terrain}</p>
                        <p><b>Aguas superficiales:</b> ${locacion.surface_water}</p>`
                    if(locacion.description){
                        templateLocations +=
                        `<p><b>Descripción:</b> ${locacion.description}</p>`
                    }
                    if(locacion.residents.length !== 0){

                        if(typeof locacion.residents[0] == "object"){
                            const residents = locacion.residents.map(resident => resident.name)
                            templateLocations += `
                                    <p><b>Residentes:</b> ${residents.join()}</p>
                                `;
                        }else{
                            templateLocations += `
                                <p><b>Residentes:</b> ${locacion.residents[0]}</p>
                            `;
                        }
                    }
                    templateLocations +=
                    `</div>
                </div>
            </article>`
    });
    if(locaciones.length !== 0){
        containerCard.innerHTML = templateLocations;
        main.innerHTML = ""
        main.append(containerCard)
    }
    else informationNotFound("locaciones")
}

function showVehicles(menuItems) {
    let templateVehiculos = "";
    let vehiculos = null;
    menuItems.forEach((movie) => {
		    if (movie.title === selectTitle.value) {
            vehiculos = movie.vehicles;
        }
    });
    vehiculos.forEach((vehiculo) => {
        templateVehiculos += `
        <article class="cardPeople">
            <figure class="cardPeople__containerCardPeople">
                <img src="${vehiculo.img}" alt="${vehiculo.img}" class="cardPeople__img">
            </figure>
            <div class="cardPeople__containerInfo">
                <h2 class="cardPeople__title">${vehiculo.name}</h2>
                <div class="cardPeople__info">
                    <p><b>Vehiculo:</b> ${vehiculo.name}</p>
                    <p><b>Clase de vehículo:</b> ${vehiculo.vehicle_class}</p>
                    <p><b>Longitud:</b> ${vehiculo.length}</p>
                    <p><b>Nombre del piloto:</b> ${vehiculo.pilot.name}</p>
                    <p><b>Piloto:</b> ${vehiculo.pilot.name}</p>
                    <p><b>Descripción:</b> ${vehiculo.description}</p>
                </div>
            </div>
        </article>
`;
    });
    if(vehiculos.length !== 0){
        containerCard.innerHTML = templateVehiculos;
        main.innerHTML = ""
        main.append(containerCard)
    }
    else informationNotFound("vehiculos")
}

ordenarDirectores(infoData).forEach((director) => {
  let opcion = document.createElement("option");
  opcion.value = director;
  opcion.innerText = director;
  selectDirector.appendChild(opcion);
});
ordenarProductores(infoData).forEach((productor) => {
    let opcion = document.createElement("option");
    opcion.value = productor;
    opcion.innerText = productor;
    selectProducer.appendChild(opcion);
});
ordenarEstreno(infoData).forEach((estreno) => {
    let opcion = document.createElement("option");
    opcion.value = estreno;
    opcion.innerText = estreno;
    selectPremiere.appendChild(opcion);
});
ordenarScore(infoData).forEach((score) => {
    let opcion = document.createElement("option");
    opcion.value = score;
    opcion.innerText = score;
    inputScore.appendChild(opcion);
});
ordenarTitulos(infoData).forEach((titulo) => {
    let opcion = document.createElement("option");
    opcion.value = titulo;
    opcion.innerText = titulo;
    selectTitle.appendChild(opcion);
});

selectTitle.addEventListener("change", function () {
    showMovie(infoData);
});
inputScore.addEventListener("change", function () {
    showCardInfo(infoData,inputScore, "rt_score");
});

selectPremiere.addEventListener("change", function () {
    showCardInfo(infoData, selectPremiere, "release_date");
});

selectProducer.addEventListener("change", function () {
    showCardInfo(infoData, selectProducer, "producer");
});

selectDirector.addEventListener("change", function () {
    showCardInfo(infoData, selectDirector, "director");
});

function findTheType(movie, type) {
    let typeSelect;
    switch (type) {
        case "producer":
            typeSelect = movie.producer
            break;
        case "director":
            typeSelect = movie.director
            break;
        case "release_date":
            typeSelect = movie.release_date
            break;
        case "rt_score":
            typeSelect = movie.rt_score
            break;

        default:
            break;
    }
    return typeSelect
}

function showCardInfo(menuItems, selected,typetxt) {

    let template = "";
    let resultIsFound = false
    menuItems.forEach((pelicula) => {

        const type = findTheType(pelicula, typetxt)

        if (type === selected.value){
            resultIsFound = true
            template += cardInfo(pelicula);
        }

    });
    if(resultIsFound)main.innerHTML = template;
    else informationNotFound(typetxt)

}


