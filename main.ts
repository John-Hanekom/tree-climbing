// Setting variables
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    Random1to3 = randint(1, 3)
    //  Checking which tree was selected then using the random number to determine if it was a 'good' tree.
    if (tree1.x == 80 && Random1to3 == 1) {
        //  Prevents movement of the tree selection temporarily to prevent bugs.
        isMovingAllowed = 0
        //  Sprite shenanigans.
        for (let index = 0; index < 3; index++) {
            tree1.setPosition(320, 240)
            pause(250)
            tree1.setPosition(80, 60)
            pause(250)
        }
        //  Increasing the score and allowing movement.
        info.changeScoreBy(1)
        isMovingAllowed = 1
    } else if (tree2.x == 80 && Random1to3 == 1) {
        //  Prevents movement of the tree selection temporarily to prevent bugs.
        isMovingAllowed = 0
        //  Sprite shenanigans.
        for (let index2 = 0; index2 < 3; index2++) {
            tree2.setPosition(320, 240)
            pause(250)
            tree2.setPosition(80, 60)
            pause(250)
        }
        //  Increasing the score and allowing movement.
        info.changeScoreBy(1)
        isMovingAllowed = 1
    } else if (tree3.x == 80 && Random1to3 == 1) {
        //  Prevents movement of the tree selection temporarily to prevent bugs.
        isMovingAllowed = 0
        //  Sprite shenanigans.
        for (let index3 = 0; index3 < 3; index3++) {
            tree3.setPosition(320, 240)
            pause(250)
            tree3.setPosition(80, 60)
        }
        //  Increasing the score and allowing movement.
        info.changeScoreBy(1)
        isMovingAllowed = 1
    } else {
        //  If you dont get a 'good' tree then your score is set to 0 and you lose.
        info.setScore(0)
        game.over(false)
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    if (isMovingAllowed == 1) {
        if (tree1.x == 80) {
            tree1.setPosition(320, 240)
            tree3.setPosition(80, 60)
        } else if (tree2.x == 80) {
            tree2.setPosition(320, 240)
            tree1.setPosition(80, 60)
        } else if (tree3.x == 80) {
            tree3.setPosition(320, 240)
            tree2.setPosition(80, 60)
        } else {
            game.splash("Stop breaking my game!")
        }
        
    }
    
})
//  Moving the tree using sprite shenanigans.
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    if (isMovingAllowed == 1) {
        if (tree1.x == 80) {
            tree1.setPosition(320, 240)
            tree2.setPosition(80, 60)
        } else if (tree2.x == 80) {
            tree2.setPosition(320, 240)
            tree3.setPosition(80, 60)
        } else if (tree3.x == 80) {
            tree3.setPosition(320, 240)
            tree1.setPosition(80, 60)
        } else {
            game.splash("Stop breaking my game!")
        }
        
    }
    
})
let Random1to3 = 0
let tree3 : Sprite = null
let tree2 : Sprite = null
let tree1 : Sprite = null
let isMovingAllowed = 0
isMovingAllowed = 1
scene.setBackgroundImage(assets.image`
    background
`)
tree1 = sprites.create(assets.image`
    tree1
`, SpriteKind.Player)
tree1.setPosition(80, 60)
tree2 = sprites.create(assets.image`
    tree2
`, SpriteKind.Player)
tree2.setPosition(360, 240)
tree3 = sprites.create(assets.image`
    tree3
`, SpriteKind.Player)
tree3.setPosition(320, 240)
