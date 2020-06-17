import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const descriptions = [`test string`, `test string 2`, `test string 3`];

describe(`Main tests`, () => {
  it(`Main rendering`, () => {
    const tree = renderer.
    create(
        <Main
          places = {666}
          descriptions = {descriptions}
          onHeaderClick={() => {}}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
