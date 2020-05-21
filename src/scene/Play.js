class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

        this.load.image('player', "./assets/player.png");
        this.load.image('A', "./assets/A.png");
        this.load.image('B', "./assets/B.png");
        this.load.image('C', "./assets/C.png");
        this.load.image('txt', './assets/Textbox.png');

        //tile map needs
        this.load.image('dirt', './assets/Dirt.png');
        this.load.image('tree', './assets/Tree.png');
        this.load.image('grass', './assets/Grass.png');

        //json file load
        this.load.tilemapTiledJSON('map', './assets/Tilemap.json');
        
    }

    create(){
        
        //game world tile


        //player sprite implement
        this.player = this.physics.add.sprite(centerX, centerY, 'player').setOrigin(0.5, 0.5);

        //demo used npc sprite
        this.A = this.physics.add.sprite(centerX - 200, centerY + 100, 'A').setOrigin(0.5, 0.5);
        this.B = this.physics.add.sprite(centerX, centerY - 200 , 'B').setOrigin(0.5, 0.5);
        this.C = this.physics.add.sprite(centerX + 200, centerY + 150, 'C').setOrigin(0.5, 0.5);


        //txt box sprite
        this.txtTop = this.add.sprite(402.5, 150, 'txt').setOrigin(0.5);
        this.txtTop.setVisible(false);

        //this.txtBot = this.add.sprite(402.5, 650, 'txt').setOrigin(0.5);
        //this.txtBot.setVisible(false);

        //main camera setting
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 3200, 3200);

        //physics implement
        this.physics.add.existing(this.player);
        this.physics.add.existing(this.A);
        this.physics.add.existing(this.B);
        this.physics.add.existing(this.C);

        //custom player moving bounds for later tile implement
        cstBounds = new Phaser.Geom.Rectangle(0, 0, 3200, 3200);
        this.player.body.collideWorldBounds = true;
        this.player.body.setBoundsRectangle(cstBounds);

        //NPC sprite physics
        this.A.body.setImmovable(true);
        this.B.body.setImmovable(true);
        this.C.body.setImmovable(true);

        this.A.body.onCollide = true;
        this.B.body.onCollide = true;
        this.C.body.onCollide = true;



        //key inputs
        keyLeft   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    
        // map = this.add.tilemap('map');

        // dirt = map.addTilesetImage('Tree', 'tree');
        // grass =  map.addTilesetImage('Dirt', 'dirt');
        // tree = map.addTilesetImage('Grass', 'grass');

        // //layer adding
        // dirtLay = map.createStaticLayer('Dirt', [dirt], 0, 0);
        // grassLay = map.createStaticLayer('Grass', [grass], 0, 0);
        // treeLay = map.createStaticLayer('Tree', [tree], 0, 0);



    }


    update(){

        //player movement setting
        if(keyLeft.isDown){
            this.player.body.setVelocityX(-500);
        }
        else if(keyRight.isDown){
            this.player.body.setVelocityX(500);
        }
        else{
            this.player.body.setVelocityX(0);
        }

        if(keyUp.isDown){
            this.player.body.setVelocityY(-500);
        }
        else if(keyDown.isDown){
            this.player.body.setVelocityY(500);
        }
        else{
            this.player.body.setVelocityY(0);
        }

        //player collision with NPC sprite
        this.physics.collide(this.A, this.player);
        this.physics.collide(this.B, this.player);
        this.physics.collide(this.C, this.player);

        //text box alpha change
        // NPC A
        if(Phaser.Input.Keyboard.JustDown(keyF) && Math.abs(this.player.x - this.A.x) <= 75 && Math.abs(this.player.y - this.A.y) <= 75){
            this.txtTop.setVisible(true);
        }
        else if((Math.abs(this.player.x - this.A.x) > 75 || Math.abs(this.player.y - this.A.y) > 75)){
            this.txtTop.setVisible(false);
        }

        //NPC B
        // if(Phaser.Input.Keyboard.JustDown(keyF) && Math.abs(this.player.x - this.B.x) <= 75 && Math.abs(this.player.y - this.B.y) <= 75){
        //     this.txtBot.setVisible(true);
        // }
        // else if((Math.abs(this.player.x - this.B.x) > 75 || Math.abs(this.player.y - this.B.y) > 75)){
        //     this.txtBot.setVisible(false);
        // }
        
        //NPC C
        // if(Phaser.Input.Keyboard.JustDown(keyF) && (Math.abs(this.player.x - this.C.x) <= 75 && Math.abs(this.player.y - this.C.y) <= 75)){
        //     this.txtTop.setVisible(true);
        // }
        // else if((Math.abs(this.player.x - this.C.x) > 75 || Math.abs(this.player.y - this.C.y) > 75)){
        //     this.txtTop.setVisible(false);
        // }

        //text box follow camera
        this.txtTop.setScrollFactor(0);
        //this.txtBot.setScrollFactor(0);
        
    }
}
