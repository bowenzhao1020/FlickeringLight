class LV1 extends Phaser.Scene{
    constructor(){
        super("Lv1");
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

        let displayConfig = {
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

        enemyNorm = 2;
        enemySum = enemyNorm + enemyFast + enemySlow;
        
        this.bombUI = this.add.text(centerX - 320, centerY - 370, 'Bomb: ' + bombNum, displayConfig).setOrigin(0.5);
        this.enemyUI = this.add.text(centerX + 320, centerY - 370, 'Enemy: ' + enemySum, displayConfig).setOrigin(0.5);
        this.display = this.add.text(centerX, centerY, '', displayConfig).setOrigin(0.5);


        //key inputs
        keyLeft   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyG      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);

        
        //game world tile
        Gmap = this.add.tilemap('Gmap');

        dirt   = Gmap.addTilesetImage('Dirt');
        grass  = Gmap.addTilesetImage('Grass');
        tree   = Gmap.addTilesetImage('Tree');
        plants = Gmap.addTilesetImage('Plants');
        water  = Gmap.addTilesetImage('Water');
        rock   = Gmap.addTilesetImage('Rock');

        // //layer adding
        dirtLay  = Gmap.createStaticLayer('Dirt',     [dirt, water], 0, 0).setDepth(-1);
        grassLay = Gmap.createStaticLayer('Grass',    [grass], 0, 0).setDepth(-1);
        objLay   = Gmap.createStaticLayer('Object',   [tree, rock, plants], 0, 0).setDepth(-1);
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

        //enemy sprites
        this.enemy0 = new Normal(this, spawn1.x, spawn1.y, 'normal').setOrigin(0.5);
        // rndPt = Phaser.Math.RND.pick([spawn1, spawn2, spawn3, spawn4, spawn5, spawn6, spawn7, spawn8]);
        // while(rndPt.x == this.enemy0.x && rndPt.y == this.enemy0.y){
        //     rndPt = Phaser.Math.RND.pick([spawn1, spawn2, spawn3, spawn4, spawn5, spawn6, spawn7, spawn8]);
        // }
        // console.log(spawn1.x);
        // console.log(spawn1.y);
        this.enemy1 = new Normal(this, spawn2.x, spawn2.y, 'normal').setOrigin(0.5);
        // console.log(spawn2.x);
        // console.log(spawn2.y);
        this.enemy2 = new Normal(this, spawn3.x, spawn3.y, 'normal').setOrigin(0.5);
        // console.log(spawn3.x);
        // console.log(spawn3.y);
        this.enemy3 = new Normal(this, spawn4.x, spawn4.y, 'normal').setOrigin(0.5);
        // console.log(spawn4.x);
        // console.log(spawn4.y);
        this.enemy4 = new Normal(this, spawn5.x, spawn5.y, 'normal').setOrigin(0.5);
        // console.log(spawn5.x);
        // console.log(spawn5.y);
        this.enemy5 = new Normal(this, spawn6.x, spawn6.y, 'normal').setOrigin(0.5);
        // console.log(spawn6.x);
        // console.log(spawn6.y);
        this.enemy6 = new Normal(this, spawn7.x, spawn7.y, 'normal').setOrigin(0.5);
        // console.log(spawn7.x);
        // console.log(spawn7.y);
        this.enemy7 = new Normal(this, spawn8.x, spawn8.y, 'normal').setOrigin(0.5);
        // console.log(spawn8.x);
        // console.log(spawn8.y);

        //main camera setting
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 3200, 3200);



        //physics implement
        this.physics.add.existing(this.player);

        //enemy group
        this.enemies = this.physics.add.group({ classType: Normal,});

        //bomb physics
        this.bombs = this.physics.add.group( {classType: Bomb} );

        //collider
        this.physics.add.collider(this.enemies, this.bombs, function(enemy, bomb){
            enemy.death();
            bomb.reset();
        })

        //custom player moving bounds for later tile implement
        cstBounds = new Phaser.Geom.Rectangle(0, 0, 3200, 3200);
        this.player.body.setBoundsRectangle(cstBounds);


    }


    update(){

        //UI display
        this.bombUI.setScrollFactor(0);
        this.enemyUI.setScrollFactor(0);
        this.display.setScrollFactor(0);

        if(gameOver == false && nextLv == false){
                //player update
            this.player.update();
            if(enemySum > 0)
            {
                if(!this.enemy0.dead){
                    this.enemy0.update();
                }
                if(!this.enemy1.dead){
                    this.enemy1.update();
                }
                if(!this.enemy2.dead){
                    this.enemy2.update();
                }
                if(!this.enemy3.dead){
                    this.enemy3.update();
                }
                if(!this.enemy4.dead){
                    this.enemy4.update();
                }
                if(!this.enemy5.dead){
                    this.enemy5.update();
                }
                if(!this.enemy6.dead){
                    this.enemy6.update();
                }
                if(!this.enemy7.dead){
                    this.enemy7.update();
                }
            }

            this.physics.overlap(this.player, this.enemy0);
            this.physics.overlap(this.player, this.enemy1);
            this.physics.overlap(this.player, this.enemy2);
            this.physics.overlap(this.player, this.enemy3);
            this.physics.overlap(this.player, this.enemy4);
            this.physics.overlap(this.player, this.enemy5);
            this.physics.overlap(this.player, this.enemy6);
            this.physics.overlap(this.player, this.enemy7);
            
            if(this.physics.overlap(this.enemy0, this.boom0)){
                
                this.boom0.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom1)){
                
                this.boom1.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom2)){
                
                this.boom2.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom3)){
                
                this.boom3.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom4)){
                
                this.boom4.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom5)){
                
                this.boom5.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom6)){
                
                this.boom6.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom7)){
                
                this.boom7.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom8)){
                
                this.boom8.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }
            if(this.physics.overlap(this.enemy0, this.boom9)){
                
                this.boom9.reset();
                if(enemySum > 0)
                {
                    this.enemy0.reset();
                }
                else{
                    this.enemy0.death();
                }
            }


            

            if(Phaser.Input.Keyboard.JustDown(keyG) && bombNum > 0){
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
        if(enemySum == 0){
            this.display.text = 'You have survived tonight \n press F to continue to the next night';
            if(keyF.isDown){
                this.scene.start('Lv2');
            }
        }
        if(gameOver == true){
            this.display.text = 'The lights has been blew off, \nyou are dragged into the endless darkness \n press F to restart this level';
            if(keyF.isDown){
                this.scene.start('Lv1');
            }
        }
        
    }

    setBomb(bomb){
        
        bomb.x = this.player.x;
        bomb.y = this.player.y;
        
    }

    bombExp(bombExp){

        this.bombHB.x = bomb.x;
        this.bombHB.y = bomb.y;

    }

    random(min, max){
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }
}
