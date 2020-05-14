let config = {
    type: Phaser.AUTO,
    width: 600,
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
let keyUp, keyDown, keyLeft, keyRight, keyF;

//value var
let centerX = game.config.width/2;
let centerY = game.config.height/2;

//game over var
let gameOver = false;