let POTATO_CLEAR = -2
let POTATO_INIT = -1
let POTATO_DEAD = 0
let PLAYED_DEATH_MUSIC = false
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    potato = randint(10, 20)
    led.stopAnimation()
    let PLAYED_DEATH_MUSIC = false
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = POTATO_CLEAR
    }
    
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    potato = receivedNumber
})
let potato = POTATO_INIT
radio.setGroup(1)
basic.forever(function on_forever() {
    let PLAYED_DEATH_MUSIC: boolean;
    
    if (potato == POTATO_DEAD) {
        basic.showIcon(IconNames.Skull)
        if (!PLAYED_DEATH_MUSIC) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        }
        
    }
    
    if (potato == POTATO_INIT) {
        basic.showString("Press A+B")
        PLAYED_DEATH_MUSIC = false
    }
    
    if (potato <= POTATO_CLEAR) {
        basic.clearScreen()
    }
    
    if (potato > 0) {
        basic.showIcon(IconNames.Chessboard)
        potato += -1
    }
    
})
