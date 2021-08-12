module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './app/assets',
          views: './app/views',
          data: './app/data',
        },
        root: ['./app'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
