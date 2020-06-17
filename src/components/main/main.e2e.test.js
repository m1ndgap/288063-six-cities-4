import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

const descriptions = [`test string`, `test string 2`, `test string 3`];

describe(`Main component`, () => {
  it(`Clicking on headers`, () => {
    const headerClick = jest.fn();

    const main = shallow(
      <Main
        places = {666}
        descriptions={descriptions}
        onHeaderClick={headerClick}
      />
    );

    const header = main.find(`a.header__logo-link`);

    header.simulate(`click`);

    expect(headerClick).toHaveBeenCalledTimes(1);
  });
});
