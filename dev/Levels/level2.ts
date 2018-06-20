class Level2 
{

    artemis:Artemis;

    constructor() 
    {
        this.init();
    }

    init()
    {

        // Add trees
        aod.playground.add.image(530, 300, 'level2-bg').setScale(0.2)
        aod.playground.add.image(1590, 300, 'level2-bg').setScale(0.2)
        // aod.playground.add.image(600, 350, 'tree2').setScale(0.2)
        // aod.playground.add.image(6000, 1270, 'tree3').setScale(0.2)

        // Add artemis and player
        this.artemis = new Artemis();

        // Create new player
        aod.player = new Player();
        aod.player.player.y = 200;
        aod.player.player.x = 200;
        

        // Add platforms
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(650, 650, 'level2-platform').setScale(0.2).refreshBody();
        // aod.platforms.create(800, window.innerHeight + 40, 'ground-1').setScale(0.4).refreshBody();

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(this.artemis.artemisObject, aod.platforms);

        setTimeout(this.start, 1500);
    }

    start()
    {
        aod.player.disableWalking();

        let ape_dialog_1 = new Dialog("Artemis staat daar! Zie je dat?", () => {
            ape_dialog_1.hide();

            let aphrodite_dialog_1 = new Dialog("Artemis:\n\nHe! Ga weg! Dit is mijn bos! >:(", () => {
                aphrodite_dialog_1.hide();
                
                let ape_dialog_2 = new Dialog("Ho, ho ho, die pijl en boog is nergens voor nodig. \n\Ik ben gewoon maar een aapje op zoek naar avontuur!", () => {
                    ape_dialog_2.hide();
                    aod.player.enableWalking();
                    aod.scene.artemis.canShoot = true;
                });
            });
        });
    }

    won()
    {
        aod.player.disableWalking();

        let artemis1 = new Dialog("Artemis:\n\nOke... Ik zal niet meer schieten...\n\nWat wil je van me?", () => {
            artemis1.hide();

            let ape_dialog_1 = new Dialog("Aapje:\n\nIk wil naar Zeus toe, weet jij waar hij is?", () => {
                ape_dialog_1.hide();

                let artemis2 = new Dialog("Artemis:\n\nOh, da's hier doorlopen en dan bij\n\nde 17e boom linksaf. ", () => {
                    artemis2.hide();

                    let ape_dialog_2 = new Dialog("Aapje:\n\nOke, bedankt!", () => {
                        ape_dialog_2.hide();

                        let opacity = 1;

                        let intervalWalk = setInterval(() => {
                            opacity -= 0.03;
                            aod.player.player.setAlpha(opacity);
                            aod.player.player.x += 5;
                        }, 50);

                        setTimeout(() =>{
                            clearInterval(intervalWalk);
                            aod.player.player.setAlpha(1);

                            aod.scene = new Endscene();
                        }, 2000);
                    });
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