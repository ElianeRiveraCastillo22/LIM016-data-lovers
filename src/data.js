// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// se crea las funciones para que el usuario pueda iteractuar (independientemente del DOM)

 export const infoDirector = (data, category) => {
  const director = data.filter(menuItems => {
    if (menuItems.director === category) {
      return menuItems;
    }
  });  
    if (category == 'all') {
      return infoData(data);
    } else {
      return infoData(director);
    }
  
};
