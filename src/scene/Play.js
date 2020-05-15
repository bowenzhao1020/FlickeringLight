class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){

        this.load.image('player', "./assets/player.png");
        this.load.image('A', "./assets/A.png");
        this.load.image('B', "./assets/B.png");
        this.load.image('C', "./assets/C.png");
        
    }

    create(){
        
        this.player = this.physics.add.sprite(centerX, centerY, 'player').setOrigin(0.5, 0.5);

        this.A = this.physics.add.sprite(centerX - 200, centerY + 100, 'A').setOrigin(0.5, 0.5);
        this.B = this.physics.add.sprite(centerX, centerY - 200 , 'B').setOrigin(0.5, 0.5);
        this.C = this.physics.add.sprite(centerX + 200, centerY + 150, 'C').setOrigin(0.5, 0.5);

        this.cameras.main.startFollow(this.player);

        //physics implement
        this.physics.add.existing(this.player);
        this.physics.add.existing(this.A);
        this.physics.add.existing(this.B);
        this.physics.add.existing(this.C);

        this.player.body.collideWorldBounds = true;

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
    }

    update(){
        if(keyLeft.isDown){
            this.player.body.setVelocityX(-150);
        }
        else if(keyRight.isDown){
            this.player.body.setVelocityX(150);
        }
        else{
            this.player.body.setVelocityX(0);
        }

        if(keyUp.isDown){
            this.player.body.setVelocityY(-150);
        }
        else if(keyDown.isDown){
            this.player.body.setVelocityY(150);
        }
        else{
            this.player.body.setVelocityY(0);
        }

        this.physics.collide(this.A, this.player);
        this.physics.collide(this.B, this.player);
        this.physics.collide(this.C, this.player);

        if(Phaser.Input.Keyboard.JustDown(keyF)){
            console.log('touched');
            this.A.setVisible(false);
        }
    }
}