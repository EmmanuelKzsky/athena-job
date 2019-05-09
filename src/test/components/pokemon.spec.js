import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PokemonItem }  from '../../Components/Pokemon/PokemonItem';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    pokemon: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"},

  };
  const enzymeWrapper = shallow(<PokemonItem {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Pokemon component', () => {
    it('should render ', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('div').hasClass('pokemon-item')).toBe(true);

      expect(enzymeWrapper.find('label').text()).toBe('bulbasaur');

    });

  });
});
