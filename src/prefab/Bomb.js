class Bomb extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        //basic physics properties
        this.scene.physics.add.existing(this);
        this.body.onCollide = true;
        //check if already in the field
        this.isCreate = false;
        //check if overlap
        this.isOL = false;
    }

    //reset after collide with enemy
    reset(){
        this.x = -200;
        this.y = -200;
        this.isCreate = false;
        this.isOL = false;
        this.setVisible(false);
    }

    //show up uopon key pressed for summon
    activate(){
        bombNum -= 1;
        this.scene.bombUI.text = 'Bomb: ' + bombNum;
        this.isCreate = true;
        this.setVisible(true);
    }

}