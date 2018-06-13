

class Zeus {
    zeus:object;
    constructor(){
        this.create();
 
       // this.aphrodite.disableBody(true, true)
    }
    delete(){
        this.zeus.destroy()
    }
    create()
    {
        this.animations()
        this.zeus = aod.playground.physics.add.sprite(700, 400, 'zeus')
        this.zeus.setScale(1.5);
        this.zeus.anims.play('zeus');
        this.zeus.flipX = true

        this.zeus.body.allowGravity = false;
        this.zeus.body.immovable = true;

    }
    animations(){
        aod.game.anims.create({
            key:'zeus',
            frames: aod.game.anims.generateFrameNumbers('zeus', { start:0, end: 6}),
            frameRate: 3,
            repeat : -1,
           });
    }

    }