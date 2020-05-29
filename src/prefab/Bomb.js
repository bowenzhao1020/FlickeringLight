class Bomb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.setImmovable(true);
        this.body.onCollide = false;

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
        this.isCreate = true;
        this.setVisible(true);
    }

}