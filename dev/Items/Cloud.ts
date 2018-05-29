class Cloud
{
    cloudObject:any;
    x:integer;
    speed:integer = 4;

    constructor(x:integer, y:integer)
    {
        this.cloudObject = aod.playground.add.image(x, y, 'cloud');

        this.updateCloudPosition();
    }

    setSize(size:number)
    {
        if(isNaN(size))
        {
            console.error("Cloud error: Size is not a number!");
            return;
        }

        // Size too big or too small
        if(size < 0.2 || size > 1)
        {
            console.error("Cloud error: Size too big or too small! Minimal size is 0.4 and maximum size is 1");
            return;
        }

        this.cloudObject.setScale(size);
    }

    setSpeed(speed)
    {
        this.speed = speed;
    }

    updateCloudPosition()
    {
        this.cloudObject.x -= this.speed;

        if(this.cloudObject.x < -125)
        {
            this.cloudObject.x = aod.game.config.width + 150;
        }

        requestAnimationFrame(() => this.updateCloudPosition());
    }
}