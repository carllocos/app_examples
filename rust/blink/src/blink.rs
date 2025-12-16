#![no_std]
#![no_main]

use core::panic::PanicInfo;
mod arduino;
use arduino as env;

#[panic_handler]
fn panic(_info: &PanicInfo) -> ! {
    loop {}
}

#[no_mangle]
pub fn main() {
    const LED: u8 = 10;
    const PAUSE: u32 = 1000;

    env::pin_mode(LED, env::OUTPUT);

    loop {
        env::digital_write(LED, env::HIGH);
        env::delay(PAUSE);
        env::digital_write(LED, env::LOW);
        env::delay(PAUSE);
    }
}
