module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // reanimated must be listed last
    plugins: ['react-native-reanimated/plugin'],
  };
};
