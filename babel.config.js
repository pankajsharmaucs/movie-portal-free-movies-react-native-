module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [] // Or just remove the 'plugins' key entirely if empty
  };
};