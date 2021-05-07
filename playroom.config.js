const path = require('path');

module.exports = {
  components: './src/core/index.ts',
  frameComponent: './src/playroom/frame.ts',
  outputPath: './dist',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cwd: path.join(__dirname, '../..'),
              configFile: path.resolve(
                __dirname,
                './node_modules/playroom/.babelrc',
              ),
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.web.js', '.mjs', '.js', '.json', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, './node_modules'), 'node_modules'],
    },
  }),
  exampleCode: `
    <Box>box</Box>
    <Button>button</Button>
  `,
};
