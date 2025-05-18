//  potato = 0
//  def on_received_number(receivedNumber):
//      global potato
//      potato = receivedNumber
//  radio.on_received_number(on_received_number)
//  def on_gesture_shake():
//      global potato
//      if potato > 0:
//          radio.send_number(potato)
//          potato = -1
//  input.on_gesture(Gesture.SHAKE, on_gesture_shake)
//  def on_button_pressed_ab():
//      global potato
//      potato = randint(10, 20)
//  input.on_button_pressed(Button.AB, on_button_pressed_ab)
//  radio.set_group(1)
//  potato = -1
//  def on_forever():
//      global potato
//      if potato == 0:
//          basic.show_icon(IconNames.SKULL)
//      if potato < 0:
//          basic.clear_screen()
//      if potato > 0:
//          basic.show_icon(IconNames.CHESSBOARD)
//          potato += -1
//  basic.forever(on_forever)
// #########################
// #########################
// #########################
let POTATO_CLEAR = -2
let POTATO_INIT = -1
let POTATO_DEAD = 0
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    potato = randint(10, 20)
    led.stopAnimation()
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
    
    if (potato == POTATO_DEAD) {
        basic.showIcon(IconNames.Skull)
    }
    
    if (potato == POTATO_INIT) {
        basic.showString("Press A+B")
    }
    
    if (potato <= POTATO_CLEAR) {
        basic.clearScreen()
    }
    
    if (potato > 0) {
        basic.showIcon(IconNames.Chessboard)
        potato += -1
    }
    
})
