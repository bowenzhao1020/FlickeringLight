class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
        //menu art load
        this.load.image('menuArt', "./assets/Menu.png");
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