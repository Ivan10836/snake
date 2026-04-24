input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(isConect)) {
        radio.sendString("IMaster")
    }
})
radio.onReceivedString(function (receivedString) {
    //Conect
    if (receivedString == "IMaster" && !isConect) {
        //It not master
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
    if (receivedString == "YouMaster" && !isConect) {
        //It master
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

let v1 = new Vector2Int(1, 1)
SchowVector(v1)

function SchowVector(v: Vector2Int){
    led.plot(v.x, v.y)
}