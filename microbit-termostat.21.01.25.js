input.onButtonPressed(Button.A, function () {
    basic.showNumber(max_temperature)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.runningTime())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(min_temperature)
    basic.clearScreen()
})
let min_temperature = 0
let max_temperature = 0
let current_temperature = input.temperature()
max_temperature = 12
min_temperature = 5
basic.forever(function () {
    basic.showString(".")
    current_temperature = input.temperature()
    if (current_temperature < min_temperature) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . . # .
            # . # . #
            # . # . #
            # . # . #
            # # . # .
            `)
    }
    if (max_temperature < current_temperature) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # . #
            # . # . #
            # . # . #
            `)
    }
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
