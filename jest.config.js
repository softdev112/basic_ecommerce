module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
};
