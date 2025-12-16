# Blink Led

Application that Blinks an LED on a M5StickC.
Compiled with the following command:

```bash
> rustc --version
rustc 1.93.0-nightly (1be6b13be 2025-11-26)

> rustc -C link-self-contained=no -C link-args=--no-entry -C link-args=-zstack-size=32768 --target wasm32-unknown-unknown -g ./src/blink.rs -o ./wasm/blink.wasm

```
