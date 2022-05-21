# Rust
The purpose of this is test the developer experience in setting up a Hello World `wasm` file using rust.

Following this tutorial: [Rust to Wasm](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)

For context, I'm using `wsl` on a `Windows` environment.

## Installation
Using `PowerShell` run the following command to open `wsl`.

``` powershell
wsl
```

If you don't have `rust` installed on the Windows Subsystem, run the command

``` sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Then run the following `cargo` command.  `cargo` is a package manager similiar to `npm`, `nuget`, etc..

``` sh
cargo install wasm-pack
```

One this is installed, at this directory level run the following command.

```
wasm-pack build --target web --out-dir ../wasm-hello/src/public/scripts/rust
```
