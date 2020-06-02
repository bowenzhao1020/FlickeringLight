class LV1 extends Phaser.Scene{
    constructor(){
        super("Lv1");
    }

    preload(){

        this.load.image('player', "./assets/Character.png");
        this.load.image('bomb', "./assets/Bomb.png");
        this.load.spritesheet('Candle', './assets/Candle.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 3});
        this.load.spritesheet('Explosion', './assets/Explosion.png', {frameWidth: 96, frameHeight: 96, startFrame:0, endFrame: 1});
        this.load.spritesheet('spinATK', './assets/SpinATK.png', {frameWidth: 96, frameHeight: 128, startFrame: 0, endFrame: 9});
        this.load.spritesheet('normal', './assets/GhostNorm.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 1});
        this.load.spritesheet('fast', './assets/GhostFast.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 1});

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

        enemyNorm = 15;
        enemySum = enemyNorm + enemyFast + enemySlow;

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
        this.player = new Player(this, spawnX, spawnY, 'spinATK').setOrigin(0.5);

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

        //animations
        this.anims.create({
            key: 'atk',
            frames: this.anims.generateFrameNumbers('spinATK', { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}),
            frameRate: 20,
        });

        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('Explosion', { frames: [0, 1] }),
            frameRate: 10,
        });

        this.anims.create({
            key: 'candle',
            frames: this.anims.generateFrameNumbers('Candle', { frames: [0, 1, 2, 3] }),
            frameRate: 10,
        });

        this.anims.create({
            key: 'normMove',
            frames: this.anims.generateFrameNumbers('normal', { frames: [0, 1] }),
            frameRate: 10,
        });

        this.anims.create({
            key: 'fastMove',
            frames: this.anims.generateFrameNumbers('fast', { frames: [0, 1] }),
            frameRate: 10,
        });
    
        //enemy sprites
        this.enemy0 = new Normal(this, spawn1.x, spawn1.y, 'normal').setOrigin(0.5);
        

        this.enemy1 = new Normal(this, spawn2.x, spawn2.y, 'normal').setOrigin(0.5);
        

        this.enemy2 = new Normal(this, spawn3.x, spawn3.y, 'normal').setOrigin(0.5);
        

        this.enemy3 = new Normal(this, spawn4.x, spawn4.y, 'normal').setOrigin(0.5);
        

        this.enemy4 = new Normal(this, spawn5.x, spawn5.y, 'normal').setOrigin(0.5);
        

        this.enemy5 = new Normal(this, spawn6.x, spawn6.y, 'normal').setOrigin(0.5);
        

        this.enemy6 = new Normal(this, spawn7.x, spawn7.y, 'normal').setOrigin(0.5);
        

        this.enemy7 = new Normal(this, spawn8.x, spawn8.y, 'normal').setOrigin(0.5);
        



        //physics implement
        this.physics.add.existing(this.player);

        //main camera setting
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 3200, 3200);

        //custom player moving bounds for later tile implement
        cstBounds = new Phaser.Geom.Rectangle(0, 0, 3200, 3200);
        this.player.body.setBoundsRectangle(cstBounds);



        //UI display
        this.bombUI  = this.add.text(centerX - 320, centerY - 370, 'Bomb: ' + bombNum, displayConfig).setOrigin(0.5);
        this.enemyUI = this.add.text(centerX + 320, centerY - 370, 'Enemy: ' + enemySum, displayConfig).setOrigin(0.5);
        this.display = this.add.text(centerX, centerY, '', displayConfig).setOrigin(0.5);


    }


    update(){

        //UI display
        this.bombUI.setScrollFactor(0);
        this.enemyUI.setScrollFactor(0);
        this.display.setScrollFactor(0);

        this.enemy0.play('normMove');
        this.enemy1.play('normMove');
        this.enemy2.play('normMove');
        this.enemy3.play('normMove');
        this.enemy4.play('normMove');
        this.enemy5.play('normMove');
        this.enemy6.play('normMove');
        this.enemy7.play('normMove');
        
        

        if(gameOver == false && nextLv == false){

            if(keyF.isDown && this.player.atking == false){
                this.player.body.setVelocityX(0);
                this.player.body.setVelocityY(0);
                this.player.atking = true;
                this.player.play('atk');
                this.player.on('animationcomplete', () => {
                    this.player.setFrame[0];
                    this.player.atking = false;
                });
            }

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
