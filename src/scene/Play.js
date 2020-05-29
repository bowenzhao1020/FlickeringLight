class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

        this.load.image('player', "./assets/Character.png");
        this.load.image('fast', "./assets/A.png");
        this.load.image('normal', "./assets/B.png");
        this.load.image('bomb', "./assets/C.png");

        //tile map needs
        this.load.image('Dirt',   './assets/Dirt.png');
        this.load.image('Tree',   './assets/Tree.png');
        this.load.image('Grass',  './assets/Grass.png');
        this.load.image('Rock',   './assets/Rock.png');
        this.load.image('Water',  './assets/Water.png');
        this.load.image('Plants', './assets/Plants.png');

        //json file load
        this.load.tilemapTiledJSON('Gmap', './assets/GameMap.json');
        
    }

    create(){

        let bombConfig = {
            fontFamily: 'Arial',
            fontSize: '30px',
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        this.bombUI = this.add.text(centerX - 320, centerY - 370, 'Bomb: ' + bombNum, bombConfig).setOrigin(0.5);

        //key inputs
        keyLeft   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keySpace  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        
        //game world tile
        Gmap = this.add.tilemap('Gmap');

        dirt   = Gmap.addTilesetImage('Dirt');
        grass  = Gmap.addTilesetImage('Grass');
        tree   = Gmap.addTilesetImage('Tree');
        plants = Gmap.addTilesetImage('Plants');
        water  = Gmap.addTilesetImage('Water');
        rock   = Gmap.addTilesetImage('Rock');

        // //layer adding
        dirtLay  = Gmap.createStaticLayer('Dirt',    [dirt, water], 0, 0).setDepth(-1);
        grassLay = Gmap.createStaticLayer('Grass',   [grass], 0, 0).setDepth(-1);
        objLay   = Gmap.createStaticLayer('Object',  [tree, rock, plants], 0, 0).setDepth(-1);
        obj2Lay  = Gmap.createStaticLayer('Object 2', [tree, rock, plants], 0, 0).setDepth(-1);

        //player sprite implement
        this.player = new Player(this, spawnX, spawnY, 'player').setOrigin(0.5);

        //boom obj create
        this.boom0 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom0.reset();
        this.boom1 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom1.reset();
        this.boom2 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom2.reset();
        this.boom3 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom3.reset();
        this.boom4 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom4.reset();
        this.boom5 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom5.reset();
        this.boom6 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom6.reset();
        this.boom7 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom7.reset();
        this.boom8 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom8.reset();
        this.boom9 = new Bomb(this, this.player.x, this.player.y, 'bomb').setOrigin(0.5);
        this.boom9.reset();

        //bomb group create()
        this.bombs = this.physics.add.group();
        //this
        
        //main camera setting
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 3200, 3200);

        //demo used npc sprite
        
        this.enemy = new Normal(this, 400, 400, 'normal').setOrigin(0.5);

        //physics implement
        this.physics.add.existing(this.player);

        //enemy physics
        this.physics.add.existing(this.enemy);

        //bomb physics


        //custom player moving bounds for later tile implement
        cstBounds = new Phaser.Geom.Rectangle(0, 0, 3200, 3200);
        this.player.body.setBoundsRectangle(cstBounds);


    }


    update(){

        //UI display
        this.bombUI.setScrollFactor(0);

        this.player.update();
        if(this.enemy){
            this.enemy.update();
        }



        this.physics.collide(this.player, this.enemy);
        if(this.physics.collide(this.enemy, this.boom0)){
            
            this.boom0.reset();
            console.log('reset boom 0');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom1)){
            
            this.boom1.reset();
            console.log('reset boom 1');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom2)){
            
            this.boom2.reset();
            console.log('reset boom 2');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom3)){
            
            this.boom3.reset();
            console.log('reset boom 3');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom4)){
            
            this.boom4.reset();
            console.log('reset boom 4');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom5)){
            
            this.boom5.reset();
            console.log('reset boom 5');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom6)){
            
            this.boom6.reset();
            console.log('reset boom 6');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom7)){
            
            this.boom7.reset();
            console.log('reset boom 7');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom8)){
            
            this.boom8.reset();
            console.log('reset boom 8');
            //this.enemy.destroy();
        }
        if(this.physics.collide(this.enemy, this.boom9)){
            
            this.boom9.reset();
            console.log('reset boom 9');
            //this.enemy.destroy();
        }
        

        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            if(this.boom0.isCreate == false){
                console.log('boom0');
                this.setBomb(this.boom0);
                this.boom0.activate();
            }
            else if(this.boom1.isCreate == false && this.boom0.isCreate == true){
                console.log('boom1');
                this.setBomb(this.boom1);
                this.boom1.activate();
            }
            else if(this.boom2.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true){
                console.log('boom2');
                this.setBomb(this.boom2);
                this.boom2.activate();
            }
            else if(this.boom3.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true){
                console.log('boom3');
                this.setBomb(this.boom3);
                this.boom3.activate();
            }
            else if(this.boom4.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true 
                                                 && this.boom2.isCreate == true && this.boom3.isCreate == true){
                console.log('boom4');
                this.setBomb(this.boom4);
                this.boom4.activate();
            }
            else if(this.boom5.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                 && this.boom3.isCreate == true && this.boom4.isCreate == true){
                console.log('boom5');
                this.setBomb(this.boom5);
                this.boom5.activate();
            }
            else if(this.boom6.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                 && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true){
                console.log('boom6');
                this.setBomb(this.boom6);
                this.boom6.activate();
            }
            else if(this.boom7.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                 && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true
                                                 && this.boom6.isCreate == true){
                console.log('boom7');
                this.setBomb(this.boom7);
                this.boom7.activate();
            }
            else if(this.boom8.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                 && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true
                                                 && this.boom6.isCreate == true && this.boom7.isCreate == true){
                console.log('boom8');
                this.setBomb(this.boom8);
                this.boom8.activate();
            }
            else if(this.boom9.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                 && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true
                                                 && this.boom6.isCreate == true && this.boom7.isCreate == true && this.boom8.isCreate == true){
                console.log('boom9');
                this.setBomb(this.boom9);
                this.boom9.activate();
            }
        }
        
    }

    setBomb(bomb){
        
        bomb.x = this.player.x;
        bomb.y = this.player.y;
        
    }
}
