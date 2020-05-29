let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scale:{
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default: 'arcade',
        arcade:{
            debug: true,
            gravity:{
                y: 0,
                x: 0,
            }
        }

    },
    scene:[ Menu, Play, ],
};

let game = new Phaser.Game(config);

//key input read
let keyUp, keyDown, keyLeft, keyRight, keyF, keySpace;

//skill var
let boom, slash, spin;

//value var
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let spawnX  = 1600;
let spawnY  = 1600;

//custom world bounds
let cstBounds;

//tile map
let Gmap, dirt, grass, tree, plants, water, rock;

//tile layer
let dirtLay, grassLay, objLay, obj2Lay;

//player skill key
//let slashKey, bombKey;

//game over var
let gameOver = false;