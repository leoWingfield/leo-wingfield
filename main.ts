namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a a a a a a a a a 
a a b a b a b a a b a b a b a a 
a b a b a b a b b a b a b a b a 
a a b a b a b a a b a b a b a a 
a b a b a b a b b a b a b a b a 
a a b a b a b a a b a b a b a a 
a b a b a b a b b a b a b a b a 
a a b a b a b a a b a b a b a a 
a a b a b a b a a b a b a b a a 
a b a b a b a b b a b a b a b a 
a a b a b a b a a b a b a b a a 
a b a b a b a b b a b a b a b a 
a a b a b a b a a b a b a b a a 
a b a b a b a b b a b a b a b a 
a a b a b a b a a b a b a b a a 
a a a a a a a a a a a a a a a a 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 4 4 5 5 . . . . . 
. . . . 5 5 4 4 4 4 5 5 . . . . 
. . . 5 5 4 4 3 3 4 4 5 5 . . . 
5 5 5 4 4 4 3 3 3 3 4 4 4 5 5 5 
. 5 5 4 4 3 3 a a 3 3 4 4 5 5 . 
. . 5 5 4 4 3 3 3 3 4 4 5 5 . . 
. . 5 5 5 4 4 3 3 4 4 5 5 . . . 
. . . 5 5 5 4 4 4 4 5 5 . . . . 
. . . . . 5 5 4 4 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function level () {
    duck = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. b b d d d 5 5 5 5 5 5 5 b . . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
c b 5 5 b c d d 5 5 5 5 5 5 b . 
b b c c c d d d 5 5 5 5 5 d b . 
. . . . c c d d d 5 5 5 b b . . 
. . . . . . c c c c c b b . . . 
`, SpriteKind.Player)
    controller.moveSprite(duck, 100, 0)
    scene.setBackgroundColor(9)
    duck.ay = 200
    duck.setFlag(SpriteFlag.StayInScreen, true)
    scene.cameraFollowSprite(duck)
    levels = 0
    tiles.setTilemap(tiles.createTilemap(
            hex`100008000000000000000000000000000000000300000000000000000001010101010101000000000000000000000000000000000101010101010101010000000000000000000000000000000000000000000000000000000000000101010101010101010000000000000000000000000000000001010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    current_level = 0
    levels = 0
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (duck.vy == 0) {
        duck.vy = -150
    }
})
let current_level = 0
let levels = 0
let duck: Sprite = null
level()
