# Application Examples

This repository contains several application examples that can be deployed on the [WARDuino](https://github.com/carllocos/WARDuino) Wasm VM.

The examples are organised per language.
Each example contains at least the following files:
- at least one source file (e.g., `blink.rs`)
- a Wasm module with `wasm` extension
- a `mappings.json`, which contains the source mappings (or *.debug_lines* in DWARF terminology) between the wasm module and source file(s). Keeping this file in the directory eases the use of the debugger.

## Adding Examples
It is possible to add new examples in any language that compiles to WebAssembly.
For inspiration on structuring the example, consider other examples already present in this repository. However, the following requirements are important to keep in mind when adding an example:
- Ensure that the produced Wasm module only uses WebAssembly version 1. This is because currently WARDuino only supports Wasm version 1.
- As the Wasm module runs on an MCU, the compiler should be configured to minimise the use of memory. Among others, limit the use of memory pages to at most 1 memory page, minimise the stack size, and so on.
- Add in the directory of the example a `readme.md` describing the used compiler version and the command executed to produce the Wasm module.
- generate a `mappings.json` file. See TODO for instructions on how to do this.
- add a source file to access primitives such as `digital_write` and `subscribe_interrupt` (see [Importing WARDuino Primitives](#warduino-primitives))


### Importing WARDuino Primitives

For an application to access WARDuino's primitives, such as `digital_write` and `subscribe_interrupt`, a source file needs to be added to the application example directory.
Examples of such source file for each language can be found in each example directory.

> [!WARNING]\
> Some example applications do not provide the glue code as a separate source file but instead implement access to the WARDuino primitives within the main source file.

For instance, the source file `assemblyscript/blink/arduino.ts` implements the access of the WARDuino primitives from within AssemblyScript examples.

When adding an example for a language listed in this repository, it suffices to copy the existing glue code (e.g., `blink/arduino.ts`) from other examples of the same language.

When adding an example for a language not yet part of this repository.
You can manually implement the glue code by looking at other examples of other languages.
A list of all supported primitives can be found in [arduino.cpp](https://github.com/carllocos/WARDuino/blob/main/src/Primitives/arduino.cpp). Search for all `def_prim` macros.

> [!WARNING]\
> Most of the provided examples do not implement access to all supported primitives by WARDuino. Access to these primitives is added when needed. For a list of all supported primitives, search for `def_prim` macros in [arduino.cpp](https://github.com/carllocos/WARDuino/blob/main/src/Primitives/arduino.cpp)


## Deploy An Application

For a tutorial on how to deploy an application to an MCU see [deploy a Wasm module](deploy_wasm.md)

