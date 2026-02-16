const NL = serial.delimiters(Delimiters.NewLine)

const DRIVE_SPEED = 55
const TURN_SPEED = 50
const STEP_MS = 450
const TURN_MS = 320

function drive(left: number, right: number, ms: number) {
    cuteBot.motors(left, right)
    basic.pause(ms)
    cuteBot.stopcar()
}

bluetooth.startUartService()
basic.showIcon(IconNames.Yes)

bluetooth.onUartDataReceived(NL, function () {
    let cmd = bluetooth.uartReadUntil(NL)

    if (cmd == "Forward") {
        drive(DRIVE_SPEED, DRIVE_SPEED, STEP_MS)
    } else if (cmd == "Backward") {
        drive(-DRIVE_SPEED, -DRIVE_SPEED, STEP_MS)
    } else if (cmd == "TurnLeft") {
        drive(-TURN_SPEED, TURN_SPEED, TURN_MS)
    } else if (cmd == "TurnRight") {
        drive(TURN_SPEED, -TURN_SPEED, TURN_MS)
    } else if (cmd == "Sound") {
        music.playTone(988, 120)
    } else if (cmd == "Talk") {
        basic.showIcon(IconNames.Happy)
        basic.pause(150)
        basic.clearScreen()
    }
})
