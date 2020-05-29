class Normal extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.hp = 2;

        

    }

    update(){

        this.body.setImmovable(true);
        this.body.onCollide = true;
        this.moveTo(this, 1300, 1300, 200);
        
    }

    //move to function implemented
    moveTo (gameObject, x, y, speed, maxTime)
    {
        if (speed === undefined) { speed = 60; }
        if (maxTime === undefined) { maxTime = 0; }

        var angle = Math.atan2(y - gameObject.y, x - gameObject.x);

        if (maxTime > 0)
        {
            //  We know how many pixels we need to move, but how fast?
            speed = DistanceBetween(gameObject.x, gameObject.y, x, y) / (maxTime / 1000);
        }

        gameObject.body.velocity.setToPolar(angle, speed);

        return angle;
    }

    getHit(){
        this.hp -= 1;
        if(this.hp == 0){
            this.destroy();
        }
    }

    death(){
        this.destroy();
    }
}