class Level2 
{

    artemis:Artemis;

    constructor() 
    {
        aod.playground.add.image(150, 300, 'background').setScale(0.7);
        this.init();
    }

    init()
    {

        // Add trees
        aod.playground.add.image(270, 350, 'tree1').setScale(0.2)
        aod.playground.add.image(1300, 350, 'tree2').setScale(0.2)
        aod.playground.add.image(600, 350, 'tree2').setScale(0.2)
        // aod.playground.add.image(6000, 1270, 'tree3').setScale(0.2)

        // Add artemis and player
        this.artemis = new Artemis();
        aod.player = new Player();

        // Add platforms
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(0, window.innerHeight + 40, 'ground-1').setScale(0.4).refreshBody();
        aod.platforms.create(800, window.innerHeight + 40, 'ground-1').setScale(0.4).refreshBody();

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(this.artemis.artemisObject, aod.platforms);

        setTimeout(this.start, 1500);
    }

    start()
    {
        // aod.player.disableWalking();

        let ape_dialog_1 = new Dialog("Artemis staat daar! Zie je dat?", () => {
            ape_dialog_1.hide();

            aod.scene.artemis.canShoot = true;

            let aphrodite_dialog_1 = new Dialog("Artemis:\n\nHé ga weg! Dit is mijn bos! >:(", () => {
                aphrodite_dialog_1.hide();

                let ape_dialog_2 = new Dialog("Artemis lijkt boos, ontwijk zijn pijlen!", () => {
                    ape_dialog_2.hide();
                    aod.player.enableWalking();
                });
            });
        });
    }


    update()
    {
        aod.player.movement()

        this.artemis.update();
    }
}