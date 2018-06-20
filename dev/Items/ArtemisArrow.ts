class ArtemisArrow
{
    object:any;

    upspeed:number = 100;
    angle:number = 0;
    speed:number = 0;

    constructor()
    {
        this.object = aod.playground.physics.add.image(0, 0, "artemis-arrow");
        this.object.body.allowGravity = false;
        this.object.body.immovable = true;

    }

    init()
    {
        aod.playground.physics.add.collider(this.object, aod.player.player);

        aod.playground.physics.add.overlap(this.object, aod.player.player, () => this.hit(), null, aod.game);
    }

    remove()
    {
        this.object.destroy();
    }

    setAngle(angle:number)
    {
        this.upspeed = (angle < 10 ? 10 : (angle > 20 ? 20 : angle));

        if(angle > -150)
        {
            this.angle = -150;
        }else{
            this.angle = angle;
        }
    }

    setSpeed(speed:number)
    {
        this.speed = -speed;
    }

    update()
    {
        if(this.upspeed > -10) 
        {
            this.upspeed -= 0.2;

            this.object.y -= this.upspeed;
        }else{
            this.object.y += this.upspeed;
        }

        // if(this.angle > 40)
        // {
            this.angle += 3;
        // }
        
        this.object.angle = this.angle* -0.2;
        this.object.x -= this.speed;
    }

    hit()
    {
        this.remove();

        let speeches = ["AU! Dat doet pijn!", "He pas je op?!", "AU!!!"];

        let ape_dialog_1 = new Dialog("Aapje:\n\n" + speeches[Math.floor(Math.random() * speeches.length)], () => {
            ape_dialog_1.hide();
        });

        aod.player.player.setAlpha(0.7);

        setTimeout(() => {
            aod.player.player.setAlpha(1);
            
            setTimeout(() => {
                aod.player.player.setAlpha(0.7);

                setTimeout(() => {
                    aod.player.player.setAlpha(1);
        
                    setTimeout(() => {
                        aod.player.player.setAlpha(0.7);
        
                        setTimeout(() => {
                            aod.player.player.setAlpha(1);

                            setTimeout(() => {
                                aod.player.player.setAlpha(0.7);
                
                                setTimeout(() => {
                                    aod.player.player.setAlpha(1);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);

        let forceBack = setInterval(() => {
            aod.player.player.x -= 6;
        }, 20);

        setTimeout(() => {
            clearInterval(forceBack);
        }, 500);
    }
}