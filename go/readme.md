# Go - Web Assembly

## Tutorial Reference
[Wasm By Example](https://wasmbyexample.dev/examples/hello-world/hello-world.go.en-us.html)

## Installation

Using `wsl` on `Windows`

[Install Go](https://go.dev/doc/install)

```
wget https://github.com/tinygo-org/tinygo/releases/download/v0.23.0/tinygo_0.23.0_amd64.deb
sudo dpkg -i tinygo_0.23.0_amd64.deb
```

## Compile

The following script is used to build and copy over the assets to the `wasm-hello` project.  You can run the `build.sh` script to accomplish this.

`build.sh` will create a directory `src/public/scripts/go` in the `wasm-hello` project.

It builds and copies the `main.wasm` file.

```
tinygo build -o ../wasm-hello/src/public/scripts/go/main.wasm -target wasm ./main.go
```

It copies over the `wasm_exec.js` file to the `src/public/scripts/go` directory in the `wasm-hello` project.
```
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js ../wasm-hello/src/public/scripts/go
```

It copies over the `go-hello-world.js` file into the `src/public/scripts/go` directory in the `wasm-hello` project.
```
cp ./scripts/go-hello-world.js ../wasm-hello/src/public/scripts/go
```
