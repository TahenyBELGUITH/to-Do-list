import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const devServer = {
  static: './dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: 'to-Do-List',
  }),
];
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
  publicPath: '/',
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(csv|tsv)$/i,
      use: ['csv-loader'],
    },
    {
      test: /\.xml$/i,
      use: ['xml-loader'],
    },
  ],
};