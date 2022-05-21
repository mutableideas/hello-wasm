if [ ! -d "../wasm-hello/src/public/scripts/go" ]; then
  echo "Creating Go Directory"
  mkdir ../wasm-hello/src/public/scripts/go
fi

tinygo build -o ../wasm-hello/src/public/scripts/go/main.wasm -target wasm ./main.go
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js ../wasm-hello/src/public/scripts/go/wasm_exec.js
cp ./scripts/go-hello-world.js ../wasm-hello/src/public/scripts/go/go-hello-world.js