import { ordenarEstreno, ordenarScore, ordenarProductores, ordenarDirectores, ordenarTitulos } from '../src/data.js';
/* import { anotherExample } from '../src/data.js'; */

const movies = [
  {
    release_date: 2010,
    rt_score: 95,
    producer: "Toru Hara",
    director: "Isao Takahata",
    title: "Castle in the Sky"
  },
  {
    release_date: 2014,
    rt_score: 97,
    producer: "Toshio Suzuki",
    director: "Hayao Miyazaki",
    title: "Grave of the Fireflies"
  }
]

const uniqueEstreno = [2014,2010];
const uniqueScore = [97,95];
const uniqueProductores = ["Toru Hara","Toshio Suzuki"];
const uniqueDirectores = ["Hayao Miyazaki","Isao Takahata"];
const uniqueTitulos = ["Castle in the Sky","Grave of the Fireflies"];


// Estreno
describe('ordenarEstreno', () => {
  it('is a function', () => {
    expect(typeof ordenarEstreno).toBe('function');
  });

  it('returns `ordenarEstreno`', () => {
    expect(ordenarEstreno(movies)).toStrictEqual(uniqueEstreno);
  });
});

// Ejemplo
/* describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

// Score

describe('ordenarScore', () => {
  it('is a function', () => {
    expect(typeof ordenarScore).toBe('function');
  });

  it('returns `ordenarScore`', () => {
    expect(ordenarScore(movies)).toStrictEqual(uniqueScore);
  });
});

//productores

describe('ordenarProductores', () => {
  it('is a function', () => {
    expect(typeof ordenarProductores).toBe('function');
  });

  it('returns `ordenarProductores`', () => {
    expect(ordenarProductores(movies)).toStrictEqual(uniqueProductores);
  });
});

// Directores

describe('ordenarDirectores', () => {
  it('is a function', () => {
    expect(typeof ordenarDirectores).toBe('function');
  });

  it('returns `ordenarDirectores`', () => {
    expect(ordenarDirectores(movies)).toStrictEqual(uniqueDirectores);
  });
});

// Titulos

describe('ordenarTitulos', () => {
  it('is a function', () => {
    expect(typeof  ordenarTitulos).toBe('function');
  });

  it('returns `ordenarTitulos`', () => {
    expect( ordenarTitulos(movies)).toStrictEqual(uniqueTitulos);
  });
});
