class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
<<<<<<< HEAD
        //load bgm
        this.load.audio('playBgm', './assets/BGM.mp3');

=======
        //menu art load
        this.load.image('menuArt', "./assets/Menu.png");
>>>>>>> 3bf0ff5a683947c69363559cc579ac471377a41c
    }

    create(){
        //menu art implement
        this.add.tileSprite(centerX, centerY, 800, 800, 'menuArt').setOrigin(0.5);

        // information display
        let infoConfig = {
            fontFamily: 'Arial',
            fontSize: '25px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

<<<<<<< HEAD
=======
<<<<<<< HEAD
        this.playBgm = this.sound.add('playBgm', {
            mute: false,
            volume: 0.5,
            rate: 1,
            loop: true
        });
        this.playBgm.play();

=======
        //this.add.text(centerX, centerY - 300, 'Flickering Light', menuConfig).setOrigin(0.5);
>>>>>>> 3bf0ff5a683947c69363559cc579ac471377a41c
>>>>>>> 0eb438ca1a01ebd822cf74018086e4eb9812f584
        this.add.text(centerX, centerY + 300, 'Press SPACE bar To Start', infoConfig).setOrigin(0.5);

        //F key scene change
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        // play scene change
        if(this.key.isDown){
            this.scene.start("instruScene");
        }
    }
}