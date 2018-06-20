class ArtemisArrow
{
    object:any;

    constructor()
    {
        this.object = aod.playground.add.image(0, 0, "artemis-arrow");
    }

    remove()
    {
        this.object.destroy();
    }
}