class Candle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add to existing, displayList, updateList
        scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.onCollide = true;

    }

    dmg(){
        candleHP -= 1;
        this.scene.HPUI.text = 'HP remain: ' + candleHP;
    }
}