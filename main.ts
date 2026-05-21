function HideVectorArr (v: any[]) {
    for (let j = 0; j <= v.length - 1; j++) {
        HideVector(v[j])
    }
}
function SchowVectorArr(v: any[]) {
    for (let i = 0; i <= v.length - 1; i++) {
        SchowVector(v[i])
    }
}
function SchowVector(v: Vector2Int) {
    if (isMaster) {
        led.plot(v.x, v.y)
    } else {
        led.plot(v.x - 5, v.y)
    }
}
function HideVector(v: Vector2Int) {
    if (isMaster) {
        led.unplot(v.x, v.y)
    } else {
        led.unplot(v.x - 5, v.y)
    }
}

input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(isConect)) {
        radio.sendString("IMaster")
    } else {
        if(isMaster){
            _input.ButtA()
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (isMaster) {
        _input.ButtB()
    }
})

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
radio.onReceivedNumber(function (receivedNumber) {
    if (apple.NewApplePosTranslateStage != 0 && isConect && !(isMaster)) {
        apple.TakeNewApplePosPackage(receivedNumber)
    }else if(!isMaster && isConect){
        _input.TakeInputPacket(receivedNumber)
    }
})

let isConect = false
let isMaster = false

radio.setGroup(55)

while (!(isConect)) {
    basic.pause(1)
}

basic.pause(2000)

let snake = new Snake()
let apple = new Apple()
let _input = new Input()

basic.pause(1000)

while (true) {
    snake.Tackt(apple, _input);
basic.pause(1000)
}
