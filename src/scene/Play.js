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

        //key inputs
        keyLeft   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keySpace  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //dialogue config
        let chatConfig = {
            fontFamily: 'Arial',
            fontSize: '25px',
            color: '#FFFFFF',
            align: 'Left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        //game world tile
        Gmap = this.add.tilemap('Gmap');

        dirt   = Gmap.addTilesetImage('Dirt');
        grass  = Gmap.addTilesetImage('Grass');
        tree   = Gmap.addTilesetImage('Tree');
        plants = Gmap.addTilesetImage('Plants');
        water  = Gmap.addTilesetImage('Water');
        rock   = Gmap.addTilesetImage('Rock');

        // //layer adding
        dirtLay  = Gmap.createStaticLayer('Dirt',    [dirt, water], 0, 0);
        grassLay = Gmap.createStaticLayer('Grass',   [grass], 0, 0);
        objLay   = Gmap.createStaticLayer('Object',  [tree, rock, plants], 0, 0);
        obj2Lay  = Gmap.createStaticLayer('Object 2', [tree, rock, plants], 0, 0);

        //player sprite implement
        this.player = new Player(this, 1600, 1600, 'player').setOrigin(0.5);

        //main camera setting
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 3200, 3200);

        //demo used npc sprite
        this.bomb = this.physics.add.sprite('bomb').setOrigin(0.5, 0.5);
        this.enemy = new Normal(this, 400, 400, 'normal').setOrigin(0.5);

        //physics implement
        this.physics.add.existing(this.player);
        this.physics.add.existing(this.enemy);
        // this.enemy = this.physics.add.group();
        // this.enemy.add(this.A);
        // this.enemy.add(this.B);
        // this.physics.add.existing(this.bomb);

        //custom player moving bounds for later tile implement
        cstBounds = new Phaser.Geom.Rectangle(0, 0, 3200, 3200);
        this.player.body.setBoundsRectangle(cstBounds);



        //NPC sprite physics
        // this.bomb.body.setImmovable(true);

        // this.A.body.onCollide = true;
        // this.B.body.onCollide = true;
        // this.bomb.body.onCollide = true;


    }


    update(){

        this.player.update();

        this.enemy.update();

        this.physics.collide(this.player, this.enemy);
        //player collision with NPC sprite
        // this.physics.collide(this.A, this.player);
        // this.physics.collide(this.B, this.player);
        // this.physics.collide(this.bomb, this.B);
        

        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            this.bomb = this.physics.add.sprite(this.player.x, this.player.y, 'bomb').setOrigin(0.5);
            // if(this.physics.collide(this.bomb, this.B)){
            //     this.B.destroy();
            //     this.bomb.destroy();
            // }
        }


        //UI follow camera
        
    }
}
