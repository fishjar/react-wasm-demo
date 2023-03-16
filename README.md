# Getting Started with Create React App

```sh
cargo install wasm-pack
cargo new wasm-lib --lib
cd wasm-lib/
wasm-pack build --target web --out-dir pkg

yarn build:wasm
yarn add ./wasm-lib/pkg
yarn start
yarn build
```
