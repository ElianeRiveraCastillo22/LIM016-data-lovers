//import { filterDataNombre, ghibliData } from './data.js';
//console.log(example);
import data from './data/ghibli/ghibli.js';/*libera nuestra data*/
//console.log(data.films[0].people[0])
/*  para todo lo que tenga que ver con mostrar los datos en la pantalla(con la interaccion del DOM) */ 
const btnNombre= document.querySelector("#btn-Nombre");
const btnFilmografia = document.querySelector("#btn-filmografia");
const btnDuracion = document.querySelector("#btn-duracion");
const btnDirector = document.querySelector("#btn-director");
const btnPersonajes = document.querySelector("#btn-personajes");

//const {films} = data;
//console.log(films);

const infodata = data.films; //console.log(infodata)
const cards=document.querySelector(".apareceInf");

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(infoData);
});

function displayMenuItems(menuItems) {
    let template = "";
     menuItems.forEach(pelicula=>{
    //console.log(pelicula)
    template += `<article class="template-card">
    <figure class="clase">
    <img src=${pelicula.poster} alt="${pelicula.title}">
    </figure></article>`;
  })
    cards.innerHTML = template;
    console.log(template)
}    
  
  
  
  













































//console.log(films);
 
/*botones.forEach(function(btn) {
    btn.addEventListener('click', e => {
        filterDataNombre(films, e);
        const condition = e.currentTarget.dataset.id;
        peliculas.innerHTML = btnNombre(films, condition);
    })
});

console.log(films);

*/


















/*const arrayNombres = [];
 data.films.forEach(people => {
     arrayNombres.push(people.title)
 });
 console.log(arrayNombres);
*/




















































 /*const {films} = data;
 const arrayNombres = [];
 window.addEventListener("DOMcontentLoaded", function (){
     displayMenuItems(menu);
     displayMenuButtons();
 });

 function displayMenuItems(menuItems) {
     let displayMenu = menuItems.map(function (item){
         //console.log(item);

         return `<article class="menu-item">
             <img src=${item.img} alt=${item.title} class="photo"/>
             <div class="item-info">
              <header>
               <h4>${item.title}</h4>
               <h4 class="price">$${item-price}</h4>
              </header>
              <p class="item-text">${item.desc}</p>
             </div>
         </article>`;
     });
     displayMenu = displayMenu.join('');
     //console.log(displayMenu);

     sectionCenter.innerHTML = displayMenu;
 }
 function displayMenuButtons() {
     const categories = menu.reduce(
         function(values, item) {
             if (!values.includes(item.category)) {
                 values.push(item.category);
             }
             return values;
         },
         ["all"]
     );
     const categoryBtns = categories.map(function(category) {
       return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
     })
     .join("");

     btnContainer.innerHTML = categoryBtns;
     const filterBtns = btnContainer.querySelectorAll(".filter-btn");
     //console.log(filterBtns);

     filterBtns.forEach(function(btn) {
         btn.addEventListener("click", function (e) {
             //console.log(e.currentTarget.dataset);
             const category = e.currentTarget.dataset.id;
             const menuCategory = menu.filter(function(menuItem) {
                 //console.log(menuItem.category);
                 if(menuItem.category === category) {
                     return menuItem;
                 }
             });
             if(category === "all") {
                 displayMenuItems(menu);
             }else {
                 displayMenuItems(menuCategory);
             }
         });
     });
 }

*/

























































































