// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// se crea las funciones para que el usuario pueda iteractuar (independientemente del DOM)

const quitarDuplicados = (arrayData) => {
  let uniqueArray = arrayData.filter(function(item, pos) {
    return arrayData.indexOf(item) == pos;
  })
  uniqueArray.sort();
  return uniqueArray;
}


export const ordenarEstreno = (arrayData) => {
   let estreno = [];

  arrayData.forEach(pelicula => {
      estreno.push(pelicula.release_date);
     
  })
  //Array.from(new Set(estreno));
  /*const uniqueSetEstreno = new Set(estreno);
  const uniqueEstreno = [...uniqueSetEstreno];
  uniqueEstreno.sort(function(a,b){return b-a});
  return uniqueEstreno;*/
  return quitarDuplicados(estreno).reverse();
};

// Score de pelicula

export const ordenarScore = (arrayData) => {
  let scoreDePelicula = [];

  arrayData.forEach(pelicula => {
      scoreDePelicula.push(pelicula.rt_score);
   
  })
  //Array.from(new Set(productores));
  /*const uniqueSetScore = new Set(scoreDePelicula);
  const uniqueScore = [...uniqueSetScore];
  uniqueScore.sort(function(a,b){return a-b});*/
  return quitarDuplicados(scoreDePelicula).reverse();
};

// Productores
export const ordenarProductores = (arrayData) => {
  let productores = [];

  arrayData.forEach(pelicula => {
      productores.push(pelicula.producer);
    
  })
  //Array.from(new Set(productores));
  /*const uniqueSetProductores = new Set(productores);
  const uniqueProductores = [...uniqueSetProductores];
  uniqueProductores.sort();*/
  return quitarDuplicados(productores);

}

// Ordenar directores
export const ordenarDirectores = (arrayData) => {
  let directores = [];

  arrayData.forEach(pelicula => {
      directores.push(pelicula.director);
      
  })

  //Array.from(new Set(directores));
  /*const uniqueSetDirectores = new Set(directores);
  const uniqueDirectores = [...uniqueSetDirectores];
  uniqueDirectores.sort();*/
  return quitarDuplicados(directores);

}

// Seleccionar pelicula, imagenes, vehiculos y locaciones

export const ordenarTitulos = (arrayData) => {
  let titulos = [];

  arrayData.forEach(pelicula => {
      titulos.push(pelicula.title);
          
  })
  return titulos.sort();

}