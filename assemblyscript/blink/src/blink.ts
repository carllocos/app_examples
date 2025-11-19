import {
  digitalWrite,
  pinMode,
  delay,
  HIGH,
  LOW,
} from './arduino';

export function main(): void {
    const LED: u8 = 10;
    const PAUSE: u32 = 1000;
    const OUTPUT: u8 = 2;
    const ON: u8 = HIGH;
    const OFF: u8 = LOW;

    pinMode(LED, OUTPUT);

    while (true) {
        digitalWrite(LED, ON);
        delay(PAUSE);
        digitalWrite(LED, OFF);
        delay(PAUSE);
    }
}
