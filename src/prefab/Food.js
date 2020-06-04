class Food extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.onCollide = true;

    }

    drop(x, y){
        this.x = x;
        this.y = y;
        this.setVisible(true);
    }

    eat(){
        this.reset();
        bombNum += 1
        this.scene.bombUI.text = 'Bomb: ' + bombNum;
    }

    reset(){
        this.x = -400;
        this.y = -400;
        this.setVisible(false);
    }
}