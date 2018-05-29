class Waterfall
{
    waterfall:any;

    constructor(x, y, size)
    {
        this.animation();

        this.waterfall = aod.playground.add.sprite(x, y, 'waterfall');

        this.waterfall.anims.play('waterfall_falling', true);

        if(size)
        {
            this.waterfall.setScale(size);
        }
    }

    animation()
    {
        aod.game.anims.create({
            key:'waterfall_falling',
            frames: aod.game.anims.generateFrameNumbers('waterfall', { start: 0, end: 20}),
            frameRate: 10,
            repeat: -1
        }) 
    }
}