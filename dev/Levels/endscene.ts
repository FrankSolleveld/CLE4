class Endscene {

    zeus: Zeus;

    constructor() {

        // Add background
        aod.playground.add.image(2444, 832, 'background');

        // Randomize clouds
        new Clouds();

        // // Add trees to the game (behind the platforms!)
        aod.playground.add.image(440, 1225, 'tree1').setScale(0.2)
        aod.playground.add.image(1850, 1235, 'tree2').setScale(0.2)
        aod.playground.add.image(5260, 1225, 'tree2').setScale(0.2)
        aod.playground.add.image(6000, 1270, 'tree3').setScale(0.2)
        aod.playground.add.image(2800, 1320, 'statue')


        // Add platforms
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(450, 700, 'ground-1').setScale(0.2).refreshBody();
        aod.platforms.create(1030, 1630, 'ground-1.1').setScale(0.2).refreshBody();
        aod.playground.add.image(1035, 1585, 'ground-1.2').setScale(0.2);
        aod.playground.add.image(1235, 1650, 'ground-2').setScale(0.2);
        aod.platforms.create(1130, 1330, 'ground-3').setScale(0.2).refreshBody();
        aod.platforms.create(1805, 1600, 'ground-4').setScale(0.2).refreshBody();
        aod.platforms.create(2380, 1650, 'ground-5').setScale(0.2).refreshBody();

        //add objects

        aod.player = new Player();

        // Wordt Zeus
        aod.zeus = new Zeus();

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(aod.zeus.zeus, aod.platforms);

        aod.playground.physics.world.setBounds(0, 0, 6271, 1664);

        aod.playground.cameras.main.setBounds(0, 0, 6100, 1664);

        this.hey()
    }

    update() {
        aod.player.movement()
        console.log(aod.player.player.y)
        // if (aod.player.player.y >= 800) {
        //     aod.player.player.x = 125;
        //     aod.player.player.y = 200;
        // }
    }

    hey() {
        // Prevent user from walking
        aod.player.disableWalking();

        // Show talking dialog
        let ape_dialog_1 = new Dialog("Aapje:\n\n En wie ben jij?", () => {
            ape_dialog_1.hide();

            let zeus_dialog_1 = new Dialog("Zeus:\n\nIk ben Zeus, Oppergod.\nIk ben hier om jou\nte belonen. ", () => {
                zeus_dialog_1.hide();

                let ape_dialog_2 = new Dialog("Aapje:\n\nBeloning is altijd goed.", () => {
                    ape_dialog_2.hide();

                    let zeus_dialog_2 = new Dialog("Zeus:\n\nJe hebt alle proeven doorstaan.\nDat heb je goed gedaan.", () => {
                        zeus_dialog_2.hide();

                        let ape_dialog_3 = new Dialog("Aapje:\n\nBedankt joe.", () => {
                            ape_dialog_3.hide();

                            // Let the player walk again
                            aod.player.enableWalking();

                        });
                    });
                });
            });
        });


    }
}       