namespace SpriteKind {
    export const direction = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Fight = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacterImage == 1) {
        playerCharacter.setImage(assets.image`characterBack`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`tutorial2`)
    tiles.placeOnTile(playerCharacter, tiles.getTileLocation(1, 1))
    monster = sprites.create(assets.image`slime`, SpriteKind.Enemy)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacter.overlapsWith(monster)) {
        scene.cameraShake(4, 500)
        tiles.setCurrentTilemap(tilemap`battle`)
        sprites.destroy(pressA)
        sprites.destroy(monster)
        sprites.destroy(playerCharacter)
        fightCursor = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . b e 6 b . . . . . . 
            . . . . . b b e 6 b b . . . . . 
            . . . . . b e 5 5 6 b . . . . . 
            . . . . b b e 5 5 6 b b . . . . 
            . . . . b e 5 5 5 5 6 b . . . . 
            . . . b b e 5 5 5 5 6 b b . . . 
            . . . b e 5 5 5 5 5 5 6 b . . . 
            . . b b e 5 5 5 5 5 5 6 b b . . 
            . . b e 5 5 5 5 5 5 5 5 6 b . . 
            . b b 6 6 6 6 5 5 6 6 6 6 b b . 
            . b b b b b b e 6 b b b b b b . 
            . . . . . . b e 6 b . . . . . . 
            . . . . . . b 6 6 b . . . . . . 
            . . . . . . b b b b . . . . . . 
            `, SpriteKind.Player)
        playerCharacterImage = 2
        fightCursor.setPosition(80, 95)
        monsterFight = sprites.create(assets.image`slime`, SpriteKind.Fight)
        monsterFight.setPosition(80, 45)
        pause(500)
        buttonAtk = sprites.create(assets.image`buttonAtk`, SpriteKind.Button)
        buttonAtk.setPosition(30, 80)
        scene.cameraShake(4, 500)
        pause(500)
        buttonInv = sprites.create(assets.image`buttonInv`, SpriteKind.Button)
        buttonInv.setPosition(80, 80)
        scene.cameraShake(4, 500)
        pause(500)
        buttonRun = sprites.create(assets.image`buttonRun`, SpriteKind.Button)
        buttonRun.setPosition(130, 80)
        scene.cameraShake(4, 500)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacterImage == 1) {
        playerCharacter.setImage(assets.image`characterLeft`)
    } else {
        if (playerCharacterImage == 2 && fightCursor.x > 30) {
            fightCursor.x += -50
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacterImage == 1) {
        playerCharacter.setImage(assets.image`characterRight`)
    } else {
        if (playerCharacterImage == 2 && fightCursor.x < 130) {
            fightCursor.x += 50
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacterImage == 1) {
        playerCharacter.setImage(assets.image`characterFront`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pressA = sprites.create(assets.image`myImage`, SpriteKind.direction)
    pressA.setPosition(monster.x, monster.y)
    for (let index = 0; index < 99999999; index++) {
        pause(5000)
    }
})
let buttonRun: Sprite = null
let buttonInv: Sprite = null
let buttonAtk: Sprite = null
let monsterFight: Sprite = null
let fightCursor: Sprite = null
let pressA: Sprite = null
let monster: Sprite = null
let playerCharacterImage = 0
let playerCharacter: Sprite = null
playerCharacter = sprites.create(assets.image`characterFront`, SpriteKind.Player)
playerCharacterImage = 1
playerCharacter.setPosition(80, 60)
tiles.setCurrentTilemap(tilemap`tutorial1`)
tiles.placeOnTile(playerCharacter, tiles.getTileLocation(4, 4))
forever(function () {
    if (playerCharacterImage == 1) {
        controller.moveSprite(playerCharacter)
        scene.cameraFollowSprite(playerCharacter)
    }
})
