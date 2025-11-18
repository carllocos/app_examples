# Toggle Led

Application that toggles an LED on a press of a button.
Compiled with the following command:

```bash
> rustc --version
rustc 1.91.0

> rustc -C link-self-contained=no -C link-args=--no-entry -C link-args=-zstack-size=32768 --target wasm32-unknown-unknown -g ./src/toggle_led.rs -o ./wasm/toggle_led.wasm

```
