module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '_assets': './src/Assets',
            '_icons': './src/Assets/icons',
            '_images': './src/Assets/images',
            '_router': './src/Router',
            '_common_components': './src/Components',
            '_screens': './src/Screens',
            '_constants': './src/Constants',
          },
        },
      ],
    ],
  };
};
