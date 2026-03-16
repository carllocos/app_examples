import {
  digitalWrite,
  pinMode,
  delay,
  interruptOn,
  OUTPUT,
  INPUT_PULLUP,
  CHANGED,
  HIGH,
  LOW,
  disableInterrupts,
} from './arduino';

export const LED: u8 = 10;
const BIG_BTN: u8 = 37;
const SIDE_BTN: u8 = 39;
const LED_ON: u8 = HIGH;
const LED_OFF: u8 = LOW;
const PAUSE: u32 = 1000;
let ledOn = false;

function setupHardware(): void {
  pinMode(LED, OUTPUT);
  pinMode(BIG_BTN, INPUT_PULLUP);
  interruptOn(BIG_BTN, CHANGED, toggleLed);
  pinMode(SIDE_BTN, INPUT_PULLUP);
  interruptOn(SIDE_BTN, CHANGED, deacativateInterruptUse);
}

function toggleLed(topic_start: u32,topic_len: u32,mem_start: u32,payload_len: u32,payload_len2: u32,
): void {
  ledOn = !ledOn;
  digitalWrite(LED, ledOn ? LED_ON : LED_OFF);
}

function deacativateInterruptUse(topic_start: u32,topic_len: u32,mem_start: u32,payload_len: u32,payload_len2: u32,
): void {
  disableInterrupts();
}

export function main(): void {
  setupHardware();
  while (true) {
    delay(PAUSE);
  }
}
