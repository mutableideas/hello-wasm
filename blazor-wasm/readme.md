# Blazor 

## Tutorial

[Web Assembly Native](https://docs.microsoft.com/en-us/aspnet/core/blazor/webassembly-native-dependencies?view=aspnetcore-6.0)

## .NET WebAssembly Build Tools

Run the following command to get the build tools

``` bash
dotnet workload install wasm-tools
```

After the tools have been installed, run the following command:

``` bash
dotnet run
```

Then navigate to the `counter` page.

The file exposing a function via `wasm` can be found in the `wasm/test.c` file.

In the `Counter.razor`, the `fact` function is exposed via a `DllImport` attribute.
