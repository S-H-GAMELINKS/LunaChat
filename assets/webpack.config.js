const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './index.js', 
    output: { 
      filename: 'main.js',   
      path: `${__dirname}/` 
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // ...
        new VueLoaderPlugin(),
        new Dotenv()
      ]
  };