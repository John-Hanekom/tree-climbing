#Setting variables
def on_b_pressed():
    game.game_over(True)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global Random1to3, isMovingAllowed
    Random1to3 = randint(1, 3)
    # Checking which tree was selected then using the random number to determine if it was a 'good' tree.
    if tree1.x == 80 and Random1to3 == 1:
        # Prevents movement of the tree selection temporarily to prevent bugs.
        isMovingAllowed = 0
        # Sprite shenanigans.
        for index in range(3):
            tree1.set_position(320, 240)
            pause(250)
            tree1.set_position(80, 60)
            pause(250)
        # Increasing the score and allowing movement.
        info.change_score_by(1)
        isMovingAllowed = 1
    elif tree2.x == 80 and Random1to3 == 1:
        # Prevents movement of the tree selection temporarily to prevent bugs.
        isMovingAllowed = 0
        # Sprite shenanigans.
        for index2 in range(3):
            tree2.set_position(320, 240)
            pause(250)
            tree2.set_position(80, 60)
            pause(250)
        # Increasing the score and allowing movement.
        info.change_score_by(1)
        isMovingAllowed = 1
    elif tree3.x == 80 and Random1to3 == 1:
        # Prevents movement of the tree selection temporarily to prevent bugs.
        isMovingAllowed = 0
        # Sprite shenanigans.
        for index3 in range(3):
            tree3.set_position(320, 240)
            pause(250)
            tree3.set_position(80, 60)
        # Increasing the score and allowing movement.
        info.change_score_by(1)
        isMovingAllowed = 1
    else:
        # If you dont get a 'good' tree then your score is set to 0 and you lose.
        info.set_score(0)
        game.over(False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    if isMovingAllowed == 1:
        if tree1.x == 80:
            tree1.set_position(320, 240)
            tree3.set_position(80, 60)
        elif tree2.x == 80:
            tree2.set_position(320, 240)
            tree1.set_position(80, 60)
        elif tree3.x == 80:
            tree3.set_position(320, 240)
            tree2.set_position(80, 60)
        else:
            game.splash("Stop breaking my game!")
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

# Moving the tree using sprite shenanigans.

def on_right_pressed():
    if isMovingAllowed == 1:
        if tree1.x == 80:
            tree1.set_position(320, 240)
            tree2.set_position(80, 60)
        elif tree2.x == 80:
            tree2.set_position(320, 240)
            tree3.set_position(80, 60)
        elif tree3.x == 80:
            tree3.set_position(320, 240)
            tree1.set_position(80, 60)
        else:
            game.splash("Stop breaking my game!")
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

Random1to3 = 0
tree3: Sprite = None
tree2: Sprite = None
tree1: Sprite = None
isMovingAllowed = 0
isMovingAllowed = 1
scene.set_background_image(assets.image("""
    background
"""))
tree1 = sprites.create(assets.image("""
    tree1
"""), SpriteKind.player)
tree1.set_position(80, 60)
tree2 = sprites.create(assets.image("""
    tree2
"""), SpriteKind.player)
tree2.set_position(360, 240)
tree3 = sprites.create(assets.image("""
    tree3
"""), SpriteKind.player)
tree3.set_position(320, 240)