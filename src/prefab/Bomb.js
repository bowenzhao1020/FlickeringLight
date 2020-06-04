class Bomb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.onCollide = true;
        this.isCreate = false;
        this.isOL = false;
    }

    update(){

    }

    reset(){
        this.x = -200;
        this.y = -200;
        this.isCreate = false;
        this.isOL = false;
        this.setVisible(false);
    }

    activate(){
        bombNum -= 1;
        this.scene.bombUI.text = 'Bomb: ' + bombNum;
        this.isCreate = true;
        this.setVisible(true);
    }

}