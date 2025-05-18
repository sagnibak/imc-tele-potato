# potato = 0

# def on_received_number(receivedNumber):
#     global potato
#     potato = receivedNumber
# radio.on_received_number(on_received_number)

# def on_gesture_shake():
#     global potato
#     if potato > 0:
#         radio.send_number(potato)
#         potato = -1
# input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# def on_button_pressed_ab():
#     global potato
#     potato = randint(10, 20)
# input.on_button_pressed(Button.AB, on_button_pressed_ab)

# radio.set_group(1)
# potato = -1

# def on_forever():
#     global potato
#     if potato == 0:
#         basic.show_icon(IconNames.SKULL)
#     if potato < 0:
#         basic.clear_screen()
#     if potato > 0:
#         basic.show_icon(IconNames.CHESSBOARD)
#         potato += -1
# basic.forever(on_forever)

##########################
##########################
##########################

POTATO_CLEAR = -2
POTATO_INIT = -1
POTATO_DEAD = 0

def on_button_pressed_ab():
    global potato
    potato = randint(10, 20)
    led.stop_animation()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    global potato
    if potato > 0:
        radio.send_number(potato)
        potato = POTATO_CLEAR
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_received_number(receivedNumber):
    global potato
    potato = receivedNumber
radio.on_received_number(on_received_number)

potato = POTATO_INIT
radio.set_group(1)

def on_forever():
    global potato
    if potato == POTATO_DEAD:
        basic.show_icon(IconNames.SKULL)
    if potato == POTATO_INIT:
        basic.show_string("Press A+B")
    if potato <= POTATO_CLEAR:
        basic.clear_screen()
    if potato > 0:
        basic.show_icon(IconNames.CHESSBOARD)
        potato += -1
basic.forever(on_forever)
