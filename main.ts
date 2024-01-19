let flashes_remaining = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (flashes_remaining > 0) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 40) {
        led.plot(0, 0)
        flashes_remaining = 5
    } else {
        led.unplot(0, 0)
    }
})
basic.forever(function () {
    while (flashes_remaining > 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        flashes_remaining += -1
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
