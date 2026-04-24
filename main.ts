function HideVectorArr (v: any[]) {
    for (let j = 0; j <= v.length - 1; j++) {
        HideVector(v[j])
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(isConect)) {
        radio.sendString("IMaster")
    }
})
function SchowVectorArr (v: any[]) {
    for (let i = 0; i <= v.length - 1; i++) {
        SchowVector(v[i])
    }
}
radio.onReceivedString(function (receivedString) {
    // Conect
    if (receivedString == "IMaster" && !(isConect)) {
        // It not master
        isMaster = false
        isConect = true
        radio.sendString("YouMaster")
        basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "YouMaster" && !(isConect)) {
        // It master
        isConect = true
        isMaster = true
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let isMaster = false
let isConect = false
radio.setGroup(55)

function SchowVector(v: Vector2Int){
    led.plot(v.x, v.y)
}
function HideVector(v: Vector2Int) {
    led.unplot(v.x, v.y)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    _input.ButtA()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    _input.ButtB()
})

let snake = new Snake()
let apple = new Apple()
let _input = new Input()

basic.pause(1000)
while(true){
    snake.Tackt(apple, _input);
    basic.pause(1000)
}

