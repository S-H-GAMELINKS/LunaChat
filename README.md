# LunaChat
## 概要

This is SPA ChatApp sample.

Using C++ Web FrameWork：[Luna](https://github.com/DEGoodmanWilson/luna) &[Vue.js](https://github.com/vuejs/vue) & [Webpack](https://github.com/webpack/webpack) & [FireBase](https://firebase.google.com)

## ビルド

### Set Luna environment

[Show here](https://luna.goodman-wilson.com/using.html) 

### Other Settting

Create environment Node.js & Install yarn


### Set up This App

First, git clone 

```
git clone https://github.com/S-H-GAMELINKS/LunaChat.git
```

Move to LunaChat.

```
cd LunaChat
```

Using Conan for build.

```
conan install .
conan build .
```

Using Vue.js and compile it! 

```
cd assets
yarn install
yarn build
```

Finaly, this command run!

```
cd .. && ./bin/awesomesauce
```

## LICENSE
[MIT](./LICENSE)
