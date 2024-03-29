/************************************************************************************************/

//game:            Flickering Light

//main programmer: Bowen Zhao

//main artist:     Elvis Nguyen


/************************************************************************************************/

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
            //debug: true,
            gravity:{
                y: 0,
                x: 0,
            }
        }

    },
    scene:[ Menu, Instru, LV1, LV2, LV3, LV4, LV5, Over, Credit ],
};

let game = new Phaser.Game(config);

//key input read
let keyUp, keyDown, keyLeft, keyRight, keyF, keyG, keySpace;

//skill var

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
let grassLay, plantLay, treeLay;

//player skill key
let bombNum = 10;

//enemy spawn count
let enemyNorm = 0, enemyFast = 0, enemySlow = 0, enemySum = enemyNorm + enemyFast + enemySlow;

//spawn point set
let spawn1 = {x: 500, y: 500},  spawn2 = {x: 1500, y: 500},  spawn3 = {x: 2500, y: 500}, 
    spawn4 = {x: 500, y: 1500},                              spawn5 = {x: 2500, y: 1500}, 
    spawn6 = {x: 500, y: 2500}, spawn7 = {x: 1500, y: 2500}, spawn8 = {x: 2500, y: 2500};

let spawnPt = [spawn1, spawn2, spawn3, spawn4, spawn5, spawn6, spawn7, spawn8];

let rndPt;

//candle HP
let candleHP;

//game over var
let gameOver = false, nextLv = false;