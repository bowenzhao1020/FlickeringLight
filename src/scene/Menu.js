class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){

    }

    create(){
        //menu display
        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '50px',
            color: '#FFFFFF',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

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

        this.add.text(centerX, centerY - 300, 'Unknown', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + 300, 'Press F Key To Start', infoConfig).setOrigin(0.5);

        //F key scene change
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    }

    update(){
        // play scene change
        if(this.key.isDown){
            this.scene.start("Lv1");
        }
    }
}