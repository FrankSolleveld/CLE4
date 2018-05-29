class Clouds
{
    cloudObjects:any;

    constructor()
    {
        for(let i = 0; i < 3; i++)
        {
            let x = Math.floor(Math.random() * aod.game.config.width);

            let y = Math.floor(Math.random() * 300);
            
            let cloud = new Cloud(x, y);

            cloud.setSize(Math.random() + 0.2);

            cloud.setSpeed(Math.random());
        }
    }
}