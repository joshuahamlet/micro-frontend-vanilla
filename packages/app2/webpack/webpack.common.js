const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'second',
      filename: 'remoteEntry.js',
      exposes: {
        './App2': './src/App2.tsx',
      },
      // shared: [
      //   {
      //     react: { eager: true, singleton: true },
      //     "react-dom": { eager: true, singleton: true },
      //     "react-router-dom": { eager: true, singleton: true },
      //   },
      // ],
      //shared: ['react', 'react-dom'],
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        // "@mantine/core" : {
        //   singleton: true,
        //   requiredVersion: deps["@mantine/core"]
        // },
        // "@mantine/hooks" : {
        //   singleton: true,
        //   requiredVersion: deps["@mantine/hooks"]
        // }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
}