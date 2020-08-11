import { orderSort, pokemonTypes } from '../src/data.js';


describe('Check the order of the property', () => {
  it('returns an objet ordered by letters', () => {
    expect(orderSort()).toBe('function');
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
