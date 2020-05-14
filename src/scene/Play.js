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

        //key inputs
        keyLeft   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp     = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown   = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update(){
        if(keyLeft.isDown){
            this.player.body.setVelocityX(-100);
        }
        else if(keyRight.isDown){
            this.player.body.setVelocityX(100);
        }
        else{
            this.player.body.setVelocityX(0);
        }

        if(keyUp.isDown){
            this.player.body.setVelocityY(-100);
        }
        else if(keyDown.isDown){
            this.player.body.setVelocityY(100);
        }
        else{
            this.player.body.setVelocityY(0);
        }
    }
}