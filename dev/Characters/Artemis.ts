
class Artemis
{
    artemisObject:any;
    artemisBow:any;
    canShoot:boolean = false;
    currentArrow:ArtemisArrow;
    arrowAngle:number = 0;

    artemisWon:boolean = false;

    constructor()
    {
        this.artemisObject = aod.playground.physics.add.sprite(window.innerWidth - 250, 200, 'artemis');
        this.animation();
        this.artemisObject.anims.play('artemis', true);

        this.artemisBow = aod.playground.add.image(this.artemisObject.x, this.artemisObject.y, "artemis-bow");
        this.currentArrow = new ArtemisArrow();

        setInterval(() => this.shootArrow(), 1000);

        setTimeout(() => {
            this.currentArrow.init();
        }, 400);
        
    }

    animation()
    {
        aod.game.anims.create({
            key:'artemis',
            frames: aod.game.anims.generateFrameNumbers('artemis', { start: 0, end: 4}),
            frameRate: 4,
            repeat: -1
        }) 
    }

    follow()
    {

    }

    shootArrow()
    {
        if(!this.canShoot || this.artemisWon) { return; }

        // this.currentArrow.shoot();

        this.canShoot = false;

        setTimeout(() => {
            this.canShoot = true;
            this.currentArrow.remove();
            this.currentArrow = new ArtemisArrow();
            this.currentArrow.init();
        }, 3000);
    }

    update()
    {
        if(this.artemisWon) { return; }

        let playerY = aod.player.player.y - this.artemisBow.y;
        let playerDistance = aod.player.player.x - this.artemisBow.x;

        if((this.artemisBow.x - aod.player.player.x) < 100)
        {
            this.canShoot = false;
            this.artemisWon = true;

            aod.scene.won();

            return;
        }

        this.artemisBow.angle = playerY * -0.2;

        this.artemisBow.x = this.artemisObject.x - 30;
        this.artemisBow.y = this.artemisObject.y - 7 - (playerY * -0.08);
        
        if(this.canShoot) {
            this.currentArrow.object.y = this.artemisBow.y - (playerY * -0.02);
            this.currentArrow.object.x = this.artemisBow.x - 10;
            this.currentArrow.object.angle = playerY * -0.2;
            
            this.currentArrow.setAngle(playerY);
            this.currentArrow.setSpeed(playerDistance / 100);
        }else{
            this.currentArrow.update();
        }
    }
}