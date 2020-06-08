class LV1 extends Phaser.Scene{
    constructor(){
        super("Lv1");
    }

    preload(){

        //image and sprite sheet load
        this.load.image('player', "./assets/Character.png");
        this.load.image('bomb', "./assets/Bomb.png");
        this.load.spritesheet('Candle', './assets/Candle.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 3});
        this.load.spritesheet('Food', './assets/Food.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 1});
        this.load.spritesheet('Explosion', './assets/Explosion.png', {frameWidth: 96, frameHeight: 96, startFrame:0, endFrame: 1});
        this.load.spritesheet('spinATK', './assets/SpinATK.png', {frameWidth: 96, frameHeight: 128, startFrame: 0, endFrame: 9});
        this.load.spritesheet('normal', './assets/GhostNorm.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 1});
        this.load.spritesheet('fast', './assets/GhostFast.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 1});
        

        //tile map needs
        this.load.image('Tree',   './assets/Tree.png');
        this.load.image('Grass',  './assets/Grass.png');
        this.load.image('Rock',   './assets/Rock.png');
        //this.load.image('Water',  './assets/Water.png');
        this.load.image('Plant', './assets/Plant.png');

        //json file load
        this.load.tilemapTiledJSON('Gmap', './assets/GameMap.json');
        
    }

    create(){

        //game over setting
        gameOver = false;

        //display config
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

        //candle HP for game over check
        candleHP = 8;

        //amount of enemy number
        enemyNorm = 15;
        enemySum = enemyNorm + enemyFast + enemySlow;

        //key inputs
        keyLeft   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyF      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyG      = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keySpace  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //game world tile
        Gmap = this.add.tilemap('Gmap');

        //dirt   = Gmap.addTilesetImage('Dirt');
        grass  = Gmap.addTilesetImage('Grass');
        tree   = Gmap.addTilesetImage('Tree');
        plant = Gmap.addTilesetImage('Plant');
        //water  = Gmap.addTilesetImage('Water');
        rock   = Gmap.addTilesetImage('Rock');

        // //layer adding
        grassLay = Gmap.createStaticLayer('Grass',    [grass], 0, 0).setDepth(-1);
        plantLay   = Gmap.createStaticLayer('PlantGround',   [rock, plant], 0, 0).setDepth(-1);
        treeLay  = Gmap.createStaticLayer('TreeGround', [tree], 0, 0).setDepth(-1);

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
            frames: this.anims.generateFrameNumbers('spinATK', { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }),
            frameRate: 20,
        });

        this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('Explosion', { frames: [0, 1] }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: 'candleLight',
            frames: this.anims.generateFrameNumbers('Candle', { frames: [0, 1, 2, 3] }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: 'apple',
            frames: this.anims.generateFrameNumbers('Food', { frames: [0, 1] }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'normMove',
            frames: this.anims.generateFrameNumbers('normal', { frames: [0, 1] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'fastMove',
            frames: this.anims.generateFrameNumbers('fast', { frames: [0, 1] }),
            frameRate: 10,
            repeat: -1
        });

        //food sprite animation
        this.food0 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food0.reset();
        this.food1 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food1.reset();
        this.food2 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food2.reset();
        this.food3 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food3.reset();
        this.food4 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food4.reset();
        this.food5 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food5.reset();
        this.food6 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food6.reset();
        this.food7 = new Food(this, -400, -400, 'Food').play('apple').setOrigin(0.5);
        this.food7.reset();

        //enemy sprites animation
        this.enemy0 = new Normal(this, spawn1.x, spawn1.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy1 = new Normal(this, spawn2.x, spawn2.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy2 = new Normal(this, spawn3.x, spawn3.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy3 = new Normal(this, spawn4.x, spawn4.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy4 = new Normal(this, spawn5.x, spawn5.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy5 = new Normal(this, spawn6.x, spawn6.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy6 = new Normal(this, spawn7.x, spawn7.y, 'normal').play('normMove').setOrigin(0.5);
        this.enemy7 = new Normal(this, spawn8.x, spawn8.y, 'normal').play('normMove').setOrigin(0.5);

        

        //explosion sprite and animation
        this.bombHB0 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB0.reset();
        this.bombHB1 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB1.reset();
        this.bombHB2 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB2.reset();
        this.bombHB3 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB3.reset();
        this.bombHB4 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB4.reset();
        this.bombHB5 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB5.reset();
        this.bombHB6 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB6.reset();
        this.bombHB7 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB7.reset();
        this.bombHB8 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB8.reset();
        this.bombHB9 = new BombHB(this, -300, -300, 'Explosion').play('explosion').setOrigin(0.5);
        this.bombHB9.reset();

        //candle sprite and animation
        this.candle = new Candle(this, spawnX, spawnY, 'Candle').play('candleLight').setOrigin(0.5);

        //main camera setting
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 3200, 3200);

        //custom player moving bounds for later tile implement
        cstBounds = new Phaser.Geom.Rectangle(0, 0, 3200, 3200);
        this.player.body.setBoundsRectangle(cstBounds);


        //UI display
        this.bombUI  = this.add.text(centerX - 320, centerY - 370, 'Bomb: ' + bombNum, displayConfig).setOrigin(0.5);
        this.enemyUI = this.add.text(centerX + 320, centerY - 370, 'Enemy: ' + enemySum, displayConfig).setOrigin(0.5);
        this.HPUI    = this.add.text(centerX      , centerY - 370, 'HP Remain: ' + candleHP, displayConfig).setOrigin(0.5);
        this.display = this.add.text(centerX      , centerY + 300, '', displayConfig).setOrigin(0.5);

    }


    update(){


        //UI display
        this.bombUI.setScrollFactor(0);
        this.enemyUI.setScrollFactor(0);
        this.HPUI.setScrollFactor(0);
        this.display.setScrollFactor(0);

        //player collision with enemies
        this.physics.overlap(this.player, this.enemy0);
        this.physics.overlap(this.player, this.enemy1);
        this.physics.overlap(this.player, this.enemy2);
        this.physics.overlap(this.player, this.enemy3);
        this.physics.overlap(this.player, this.enemy4);
        this.physics.overlap(this.player, this.enemy5);
        this.physics.overlap(this.player, this.enemy6);
        this.physics.overlap(this.player, this.enemy7);

        //player collision with candle
        this.physics.collide(this.player, this.candle);

        //enemies damage candle
        this.dmgCandle();
        if(candleHP == 0){
            gameOver = true;
        }

        //updates for game not over
        if(gameOver == false){

            //attack checking when spin
            if(keyF.isDown && this.player.atking == false){
                this.player.body.setVelocityX(0);
                this.player.body.setVelocityY(0);
                this.player.atking = true;
                this.player.play('atk');
                this.chkAttack(this.food0, this.enemy0);
                this.chkAttack(this.food1, this.enemy1);
                this.chkAttack(this.food2, this.enemy2);
                this.chkAttack(this.food3, this.enemy3);
                this.chkAttack(this.food4, this.enemy4);
                this.chkAttack(this.food5, this.enemy5);
                this.chkAttack(this.food6, this.enemy6);
                this.chkAttack(this.food7, this.enemy7);
                this.player.on('animationcomplete', () => {
                    this.player.setFrame[0];
                    this.player.atking = false;
                    this.hitReset();
                });
            }

            //player update
            this.player.update();

            //enemy updates for level not over
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

            //bomb overLap check with enemy sprites
            this.bombReset(this.enemy0);
            this.bombReset(this.enemy1);
            this.bombReset(this.enemy2);
            this.bombReset(this.enemy3);
            this.bombReset(this.enemy4);
            this.bombReset(this.enemy5);
            this.bombReset(this.enemy6);
            this.bombReset(this.enemy7);

            //explosion animation check with enemies
            this.expCheck(this.bombHB0);
            this.expCheck(this.bombHB1);
            this.expCheck(this.bombHB2);
            this.expCheck(this.bombHB3);
            this.expCheck(this.bombHB4);
            this.expCheck(this.bombHB5);
            this.expCheck(this.bombHB6);
            this.expCheck(this.bombHB7);
            this.expCheck(this.bombHB8);
            this.expCheck(this.bombHB9);

            //order of bomb planting
            this.bombOrder();

            //food consuming
            this.eatFood();
            
        }
        //level change condition
        if(enemySum == 0){

            //enemies disappear upon level complete
            this.enemy0.death();
            this.enemy1.death();
            this.enemy2.death();
            this.enemy3.death();
            this.enemy4.death();
            this.enemy5.death();
            this.enemy6.death();
            this.enemy7.death();

            //text display for level complete
            this.display.text = 'You have survived tonight \n collect your food and have a rest \npress SPACE to continue to the next night';
            if(keySpace.isDown){
                this.scene.start('Lv2');
            }
        }
        //game over condition
        if(gameOver == true){

            this.player.stop();
            //enemies disappear upon game over
            this.enemy0.death();
            this.enemy1.death();
            this.enemy2.death();
            this.enemy3.death();
            this.enemy4.death();
            this.enemy5.death();
            this.enemy6.death();
            this.enemy7.death();

            //text display for game over
            this.display.text = 'The lights has been blew off \nyou are dragged into the endless darkness \n press SPACE to restart this level';
            if(keySpace.isDown){
                this.scene.start('Lv1');
            }
        }
        
    }

    //bomb planting teleportation
    setBomb(bomb){
        
        bomb.x = this.player.x;
        bomb.y = this.player.y;
        
    }

    //bomb explosion gif teleportation
    bombExp(bombHB, bomb){

        bombHB.x = bomb.x;
        bombHB.y = bomb.y;
        bombHB.activate();

    }

    //function to use for random valuie include max
    random(min, max){
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }

    //check collision of enemy collide with each bomb and bomb resets
    bombReset(enemy){
        if(this.physics.overlap(enemy, this.boom0) && this.boom0.isOL == false){
            this.boom0.isOL = true;
            this.bombExp(this.bombHB0, this.boom0);
            this.time.delayedCall(1000, () => {this.bombHB0.reset();});
            this.boom0.reset();
        }
        if(this.physics.overlap(enemy, this.boom1) && this.boom1.isOL == false){
            this.boom1.isOL = true;
            this.bombExp(this.bombHB1, this.boom1);
            this.time.delayedCall(1000, () => {this.bombHB1.reset();});
            this.boom1.reset();
        }
        if(this.physics.overlap(enemy, this.boom2) && this.boom2.isOL == false){
            this.boom2.isOL = true;
            this.bombExp(this.bombHB2, this.boom2);
            this.time.delayedCall(1000, () => {this.bombHB2.reset();});
            this.boom2.reset();
        }
        if(this.physics.overlap(enemy, this.boom3) && this.boom3.isOL == false){
            this.boom3.isOL = true;
            this.bombExp(this.bombHB3, this.boom3);
            this.time.delayedCall(1000, () => {this.bombHB3.reset();});
            this.boom3.reset();
        }
        if(this.physics.overlap(enemy, this.boom4) && this.boom4.isOL == false){
            this.boom4.isOL = true;
            this.bombExp(this.bombHB4, this.boom4);
            this.time.delayedCall(1000, () => {this.bombHB4.reset();});
            this.boom4.reset();
        }
        if(this.physics.overlap(enemy, this.boom5) && this.boom5.isOL == false){
            this.boom5.isOL = true;
            this.bombExp(this.bombHB5, this.boom5);
            this.time.delayedCall(1000, () => {this.bombHB5.reset();});
            this.boom5.reset();
        }
        if(this.physics.overlap(enemy, this.boom6) && this.boom6.isOL == false){
            this.boom6.isOL = true;
            this.bombExp(this.bombHB6, this.boom6);
            this.time.delayedCall(1000, () => {this.bombHB6.reset();});
            this.boom6.reset();
        }
        if(this.physics.overlap(enemy, this.boom7) && this.boom7.isOL == false){
            this.boom7.isOL = true;
            this.bombExp(this.bombHB7, this.boom7);
            this.time.delayedCall(1000, () => {this.bombHB7.reset();});
            this.boom7.reset();
        }
        if(this.physics.overlap(enemy, this.boom8) && this.boom8.isOL == false){
            this.boom8.isOL = true;
            this.bombExp(this.bombHB8, this.boom8);
            this.time.delayedCall(1000, () => {this.bombHB8.reset();});
            this.boom8.reset();
        }
        if(this.physics.overlap(enemy, this.boom9) && this.boom9.isOL == false){
            this.boom9.isOL = true;
            this.bombExp(this.bombHB9, this.boom9);
            this.time.delayedCall(1000, () => {this.bombHB9.reset();});
            this.boom9.reset();
        }
    }

    //explosion gif overLap check
    expCheck(hitbox){
        if(enemySum > 0){

            if(this.physics.overlap(this.enemy0, hitbox)){
                this.enemy0.resetKill(this.food0, this.enemy0);
            }
            if(this.physics.overlap(this.enemy1, hitbox)){
                this.enemy1.resetKill(this.food1, this.enemy1);
            }
            if(this.physics.overlap(this.enemy2, hitbox)){
                this.enemy2.resetKill(this.food2, this.enemy2);
            }
            if(this.physics.overlap(this.enemy3, hitbox)){
                this.enemy3.resetKill(this.food3, this.enemy3);
            }
            if(this.physics.overlap(this.enemy4, hitbox)){
                this.enemy4.resetKill(this.food4, this.enemy4);
            }
            if(this.physics.overlap(this.enemy5, hitbox)){
                this.enemy5.resetKill(this.food5, this.enemy5);
            }
            if(this.physics.overlap(this.enemy6, hitbox)){
                this.enemy6.resetKill(this.food6, this.enemy6);
            }
            if(this.physics.overlap(this.enemy7, hitbox)){
                this.enemy7.resetKill(this.food7, this.enemy7);
            }
        }
        
    }

    //candle HP
    dmgCandle(){
        if(this.physics.overlap(this.enemy0, this.candle)){
            this.enemy0.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy1, this.candle)){
            this.enemy1.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy2, this.candle)){
            this.enemy2.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy3, this.candle)){
            this.enemy3.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy4, this.candle)){
            this.enemy4.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy5, this.candle)){
            this.enemy5.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy6, this.candle)){
            this.enemy6.resetCandle();
            this.candle.dmg();
        }
        if(this.physics.overlap(this.enemy7, this.candle)){
            this.enemy7.resetCandle();
            this.candle.dmg();
        }
    }

    //food drop upon enemy death
    foodDrop(food, enemy){
        if(this.random(1,100) <= 50)
            {
                food.drop(enemy.x, enemy.y);
            }
    }

    //food consume for bomb 
    eatFood(){
        if(bombNum < 10){

            if(this.physics.overlap(this.food0, this.player)){
                this.food0.eat();
            }
            if(this.physics.overlap(this.food1, this.player)){
                this.food1.eat();
            }
            if(this.physics.overlap(this.food2, this.player)){
                this.food2.eat();
            }
            if(this.physics.overlap(this.food3, this.player)){
                this.food3.eat();
            }
            if(this.physics.overlap(this.food4, this.player)){
                this.food4.eat();
            }
            if(this.physics.overlap(this.food5, this.player)){
                this.food5.eat();
            }
            if(this.physics.overlap(this.food6, this.player)){
                this.food6.eat();
            }
            if(this.physics.overlap(this.food7, this.player)){
                this.food7.eat();
            }

        }
    }

    //check spin attack
    chkAttack(food, enemy){

        if(this.physics.overlap(this.player, enemy) && enemy.isHurt == false){
            enemy.getHit(food, enemy);
        }

    }

    //reset getHit status for enemies
    hitReset(){

        this.enemy0.isHurt = false;
        this.enemy1.isHurt = false;
        this.enemy2.isHurt = false;
        this.enemy3.isHurt = false;
        this.enemy4.isHurt = false;
        this.enemy5.isHurt = false;
        this.enemy6.isHurt = false;
        this.enemy7.isHurt = false;

    }

    //order of bomb creation
    bombOrder(){
        if(Phaser.Input.Keyboard.JustDown(keyG) && bombNum > 0){
            if(this.boom0.isCreate == false){
                this.setBomb(this.boom0);
                this.boom0.activate();
            }
            else if(this.boom1.isCreate == false && this.boom0.isCreate == true){
                this.setBomb(this.boom1);
                this.boom1.activate();
            }
            else if(this.boom2.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true){
                this.setBomb(this.boom2);
                this.boom2.activate();
            }
            else if(this.boom3.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true){
                this.setBomb(this.boom3);
                this.boom3.activate();
            }
            else if(this.boom4.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true 
                                                && this.boom2.isCreate == true && this.boom3.isCreate == true){
                this.setBomb(this.boom4);
                this.boom4.activate();
            }
            else if(this.boom5.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                && this.boom3.isCreate == true && this.boom4.isCreate == true){
                this.setBomb(this.boom5);
                this.boom5.activate();
            }
            else if(this.boom6.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true){
                this.setBomb(this.boom6);
                this.boom6.activate();
            }
            else if(this.boom7.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true
                                                && this.boom6.isCreate == true){
                this.setBomb(this.boom7);
                this.boom7.activate();
            }
            else if(this.boom8.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true
                                                && this.boom6.isCreate == true && this.boom7.isCreate == true){
                this.setBomb(this.boom8);
                this.boom8.activate();
            }
            else if(this.boom9.isCreate == false && this.boom0.isCreate == true && this.boom1.isCreate == true && this.boom2.isCreate == true
                                                && this.boom3.isCreate == true && this.boom4.isCreate == true && this.boom5.isCreate == true
                                                && this.boom6.isCreate == true && this.boom7.isCreate == true && this.boom8.isCreate == true){
                this.setBomb(this.boom9);
                this.boom9.activate();
            }
        }
    }

    
}
