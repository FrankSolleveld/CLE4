class Shell
{
    shellObject:any;
    maxJump:number = 200;
    jumpingNow:number = 0;
    goingUp:boolean = true;

    y:number = null;

    constructor(x:integer, y:integer)
    {
        this.animation();

        this.y = y;

        // Shell object
        // this.shellObject = aod.playground.add.sprite(x, y, 'shell');
        this.shellObject = aod.playground.physics.add.sprite(x, y, 'shell');
        this.shellObject.anims.play('shell_animated');
        this.shellObject.setScale(0.3);
        this.shellObject.body.allowGravity = false;
        this.shellObject.body.immovable = true;
        
        aod.playground.physics.add.collider(this.shellObject, aod.player.player,aod.player.dead;

        aod.playground.physics.add.overlap(this.shellObject, aod.player.player, aod.player.dead, null, aod.game);


        this.updateShell();
    }

    animation()
    {
        aod.game.anims.create({
            key:'shell_animated',
            frames: aod.game.anims.generateFrameNumbers('shell', { start:0, end: 3}),
            frameRate: 10,
            repeat : -1,
            yoyo : true
        });
    }

    updateShell()
    {
        if(this.goingUp)
        {
            this.shellObject.y -= 2;
            this.jumpingNow += 2;

            if(this.jumpingNow > this.maxJump)
            {
                this.goingUp = false;
            }
        }else{
            this.shellObject.y += 3;
            this.jumpingNow -= 3;

            if(this.jumpingNow < 0)
            {
                this.goingUp = true;
            }
        }

        requestAnimationFrame(() => this.updateShell());
    }

    dead()
    {
        console.log("Collision");
        aod.player.disableWalking();
    }
}