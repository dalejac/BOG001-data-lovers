import { orderSort, pokemonTypes } from '../src/data.js';


describe('Check the order of the property', () => {
  const dataSet = data.pokemon 
  it('returns an objet ordered by letters', () => {
    expect(orderSort({a},{z},{m},{c})).toBe({a},{c},{m},{c});
  });

  it('returns an object ordered by numbers', () => {
    expect(orderSort()).toBe('example');
  });
});


describe('Check the filter for types', () => {
  it('returns Poison Pokemons', () => {
    expect(pokemonTypes()).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(pokemonTypes()).toBe('OMG');
  });
});
