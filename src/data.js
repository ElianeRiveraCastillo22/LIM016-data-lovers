// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// se crea las funciones para que el usuario pueda iteractuar (independientemente del DOM)



export const ordenarEstreno = (arrayData) => {
   let estreno = [];

  arrayData.forEach(pelicula => {
      estreno.push(pelicula.release_date);
     
  })
  //Array.from(new Set(estreno));
  const uniqueSetEstreno = new Set(estreno);
  const uniqueEstreno = [...uniqueSetEstreno];
  uniqueEstreno.sort(function(a,b){return b-a});
  return uniqueEstreno;
};