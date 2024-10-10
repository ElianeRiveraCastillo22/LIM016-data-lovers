
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

  return quitarDuplicados(estreno).reverse();
};



export const ordenarScore = (arrayData) => {
  let scoreDePelicula = [];

  arrayData.forEach(pelicula => {
      scoreDePelicula.push(pelicula.rt_score);

  })

  return quitarDuplicados(scoreDePelicula).reverse();
};

export const ordenarProductores = (arrayData) => {
  let productores = [];

  arrayData.forEach(pelicula => {
      productores.push(pelicula.producer);

  })

  return quitarDuplicados(productores);

}

export const ordenarDirectores = (arrayData) => {
  let directores = [];

  arrayData.forEach(pelicula => {
      directores.push(pelicula.director);

  })

  return quitarDuplicados(directores);

}

export const ordenarTitulos = (arrayData) => {
  let titulos = [];

  arrayData.forEach(pelicula => {
      titulos.push(pelicula.title);

  })
  return titulos.sort();

}
