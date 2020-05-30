class Bomb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.setImmovable(true);
        this.body.onCollide = true;
        this.isCreate = false;
    }

    update(){

    }

    reset(){
        this.x = spawnX;
        this.y = spawnY;
        this.isCreate = false;
        this.setVisible(false);
    }

    activate(){
        bombNum -= 1;
        this.scene.bombUI.text = 'Bomb: ' + bombNum;
        this.isCreate = true;
        this.setVisible(true);
    }

}