const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.js",
        title: "Text Editor"
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "service-worker.js"
      }),
      new WebpackPwaManifest({
        name: "PWA Text Editor",
        short_name: "Text Editor",
        description: "A PWA Text Editor that works with little to no interner connection!",
        background_color: "#85b0e6",
        theme_color: "#85b0e6",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 265, 384, 512],
            destination: path.join('assests', 'icons')
          }
        ],
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
