# Getting Started with Create React App

```sh
cargo install wasm-pack
cargo new wasm-lib --lib
cd wasm-lib/

# --target bundler(default) - for bundlers like Webpack, Parcel, or Rollup.
# --target web - for the web as ECMAScript module.
# --target no-modules - for the web without ECMAScript module.
# --target nodejs - for Node.js
wasm-pack build --target web --out-dir pkg

npm run build:wasm
npm install ./wasm-lib/pkg
npm run start

npm run dev

npm run build
npx serve ./build
```
