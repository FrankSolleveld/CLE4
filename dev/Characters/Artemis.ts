
class Artemis
{
    artemisObject:any;
    artemisBow:any;
    canShoot:boolean = false;
    currentArrow:ArtemisArrow;
    arrowAngle:number = 0;

    constructor()
    {
        this.artemisObject = aod.playground.physics.add.sprite(window.innerWidth - 250, window.innerHeight - 250, 'artemis');
        this.animation();
        this.artemisObject.anims.play('artemis', true);

        this.artemisBow = aod.playground.add.image(this.artemisObject.x, this.artemisObject.y, "artemis-bow");
        this.currentArrow = new ArtemisArrow();

        setInterval(() => this.shootArrow(), 1000);
        
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
        if(!this.canShoot) { return; }

        // this.currentArrow.shoot();

        this.canShoot = false;

        setTimeout(() => {
            this.canShoot = true;
            this.currentArrow.remove();
            this.currentArrow = new ArtemisArrow();
        }, 3000);
    }

    update()
    {
        let playerY = aod.player.player.y - this.artemisBow.y;

        this.artemisBow.angle = playerY * -0.2;

        this.artemisBow.x = this.artemisObject.x - 30;
        this.artemisBow.y = this.artemisObject.y - 7 - (playerY * -0.08);
        
        if(this.canShoot) {
            this.currentArrow.object.y = this.artemisBow.y - (playerY * -0.02);
            this.currentArrow.object.x = this.artemisBow.x - 10;
            this.currentArrow.object.angle = playerY * -0.2;
            this.arrowAngle = playerY;
        }else{
            this.currentArrow.object.y -= this.arrowAngle * 0.2;
            this.currentArrow.object.angle = this.arrowAngle * -0.2;
            this.currentArrow.object.x -= 4;
        }

    }
}