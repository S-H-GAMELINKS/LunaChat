const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './index.js', // entry pointを起点にバンドルしていきます
    output: { // 出力に関して
      filename: 'index.js', // 出力するファイル名    
      path: `${__dirname}/webpack/` // 出力するディレクトリ階層
      // pathは絶対パスで指定、そのため __dirname でディレクトリ階層を取得しています
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
        new VueLoaderPlugin()
      ]
  };