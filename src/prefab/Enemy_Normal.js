class Normal extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);

        this.hp = 2;

        this.dead = false;

    }

    update(){

        this.body.setImmovable(true);
        this.body.onCollide = true;
        this.moveTo(this, 1300, 1300, 200);
        
    }

    //moveTo function implemented from Phaser 3 official funtion 
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

    //dmg function for get hit
    getHit(){
        this.hp -= 1;
        if(this.hp == 0){
            this.death();
        }
    }

    //check death function
    death(){
        enemyNorm -= 1;
        enemySum = enemyNorm + enemyFast + enemySlow;
        this.scene.enemyUI.text = 'Enemy: ' + enemySum;
        this.dead = true;
        this.x = -100;
        this.y = -100;
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.setVisible(false);
    }

    reset(){
        rndPt = Phaser.Math.RND.pick([spawn1, spawn2, spawn3, spawn4, spawn5, spawn6, spawn7, spawn8]);
        this.x = rndPt.x;
        this.y = rndPt.y;

    }
}