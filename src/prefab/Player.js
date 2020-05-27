// js file for player object
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

    }

    update(){

        this.body.collideWorldBounds = true;

        //player movement setting
        if(keyLeft.isDown){
            this.setFlipX(false);
            this.body.setVelocityX(-500);
        }
        else if(keyRight.isDown){
            this.setFlipX(true);
            this.body.setVelocityX(500);
        }
        else{
            this.body.setVelocityX(0);
        }

        if(keyUp.isDown){
            this.body.setVelocityY(-500);
        }
        else if(keyDown.isDown){
            this.body.setVelocityY(500);
        }
        else{
            this.body.setVelocityY(0);
        }

        
    }

}