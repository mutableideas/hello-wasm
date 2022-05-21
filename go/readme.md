# Go - Web Assembly

## Installation

Using `wsl` on `Windows`

[Install Go](https://go.dev/doc/install)

```
wget https://github.com/tinygo-org/tinygo/releases/download/v0.23.0/tinygo_0.23.0_amd64.deb
sudo dpkg -i tinygo_0.23.0_amd64.deb
```

## Compile

```
tinygo build -o main.wasm -target wasm ./main.go
```

The `wasm_exec.js` must be added to use `Go wasm modules` in the browser.

```
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js .
```
