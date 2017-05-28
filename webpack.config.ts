/// <reference path="./node_modules/@types/node/index.d.ts" />

import * as webpack from 'webpack';
import { Node, Entry, Output, Resolve, Module, Plugin, ExternalsElement } from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

//NOTE: DevServer type is not defined in the server so adding project specific type validation
interface DevServer {
  contentBase: string;
}

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

export const context: string = sourcePath;
export const entry: Entry = {
  main: ['whatwg-fetch', './index.tsx']
};
export const output: Output = {
  path: outPath,
  publicPath: '/',
  filename: 'bundle-dist.js',
};
export const target: string = 'web';
export const resolve: Resolve = {
  extensions: ['.js', '.ts', '.tsx'],
}
export const module: Module = {
  loaders: [
    // .ts, .tsx
    {
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader?module=es6'
    },
    // JSON
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    // css
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    // static assets
    { test: /\.html$/, use: 'html-loader' },
    { test: /\.png$/, use: 'url-loader?limit=10000' },
    { test: /\.jpg$/, use: 'file-loader' },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
  ],
};
export const plugins: Plugin[] = [
  new webpack.ProvidePlugin({
    'Promise': 'es6-promise'
  }),
  new HtmlWebpackPlugin({
    template: 'index.html'
  })
];
export const devServer: DevServer = {
  contentBase: sourcePath,
};

export const node: Node = {
  console: true
}

export const externals: ExternalsElement = {
  'cheerio': 'window',
  'fs': false,
  'net': false,
  'tls': false,
  'child_process': true,
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

export const devtool = '#eval-inline-source-map';