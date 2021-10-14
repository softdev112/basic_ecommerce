import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home';

it('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree?.children.length).toBe(1);
});
