import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const descriptions = [`test string`, `test string 2`, `test string 3`];

describe(`App tests`, () => {
  it(`Renders App`, () => {
    const tree = renderer
      .create(
          <App
            places = {322}
            descriptions={descriptions}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

