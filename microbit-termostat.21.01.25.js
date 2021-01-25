// funktion för att visa max-temp om man trycker på A
input.onButtonPressed(Button.A, function () {
    basic.showNumber(max_temperature)
    basic.clearScreen()
})

// funktion för att visa tiden om man trycker på A+B
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.runningTime())
})

// funktion för att visa min-temp om man trycker på B
input.onButtonPressed(Button.B, function () {
    basic.showNumber(min_temperature)
    basic.clearScreen()
})

// Från start är mina variabler neurala
let min_temperature = 0
let max_temperature = 0

// variabel för att rådande temperatur ska vara den avlästa temperaturen av omgivningen
let current_temperature = input.temperature()

// variabler för vilka temperaturer som är tillåtna, max = 12 & min = 5
max_temperature = 12
min_temperature = 5

// funktion som ger utslag på om temperaturen överskrider eller underskrider max & min - temp
basic.forever(function () {
    // visa alltid "."
    basic.showString(".")
    // sett rådande temperatur till den avlästa temperaturen av omgivningen
    current_temperature = input.temperature()
    // om rådande temperatur är mindre än min-temp så skall microbiten spela en ton (440, music.beat(BeatFraction.Whole) och visa LO på skärmen för att indikra på att temperaturen är för låg.
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
     // om rådande temperatur är högre än max-temp så skall microbiten spela en ton (262, music.beat(BeatFraction.Whole) och visa HI på skärmen för att indikra på att temperaturen är för hög.
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
    // Pausa 0,5 sek för att därefter rensa skärmen och köra om programmet igen.
    basic.pause(500)
    basic.clearScreen()
})
