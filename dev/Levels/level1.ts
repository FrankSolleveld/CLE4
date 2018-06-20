class Level1 {

    startDialog: Dialog;
    aphrodite: Aphrodite;
    talkingToAphrodite: boolean = false;
    score: Score;


    constructor() {

        // Add background
        aod.playground.add.image(2444, 832, 'background');
        aod.playground.add.image(7044, 832, 'background');

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
        aod.platforms.create(450, 1600, 'ground-1').setScale(0.2).refreshBody();
        aod.platforms.create(1030, 1630, 'ground-1.1').setScale(0.2).refreshBody();
        aod.playground.add.image(1035, 1585, 'ground-1.2').setScale(0.2);
        aod.playground.add.image(1235, 1650, 'ground-2').setScale(0.2);
        aod.platforms.create(1130, 1330, 'ground-3').setScale(0.2).refreshBody();
        aod.platforms.create(1805, 1600, 'ground-4').setScale(0.2).refreshBody();
        aod.platforms.create(2380, 1650, 'ground-5').setScale(0.2).refreshBody();
        aod.platforms.create(2850, 1600, 'ground-6').setScale(0.2).refreshBody();
        aod.platforms.create(3250, 1550, 'ground-6.2').setScale(0.2).refreshBody();
        aod.platforms.create(3465, 1650, 'ground-7').setScale(0.2).refreshBody();
        aod.platforms.create(3730, 1600, 'ground-9').setScale(0.2).refreshBody();
        aod.platforms.create(4200, 1350, 'ground-10').setScale(0.2).refreshBody();
        aod.platforms.create(3800, 1350, 'ground-8').setScale(0.15).refreshBody();
        aod.platforms.create(3550, 1080, 'ground-8').setScale(0.15).refreshBody();
        aod.platforms.create(3900, 900, 'ground-8').setScale(0.15).refreshBody();
        aod.platforms.create(4470, 1400, 'ground-10.2').setScale(0.2).refreshBody();
        aod.platforms.create(4745, 1660, 'ground-11').setScale(0.15).refreshBody();
        aod.platforms.create(5248, 1625, 'ground-12').setScale(0.15).refreshBody();
        aod.platforms.create(4825, 1350, 'ground-8').setScale(0.15).refreshBody();        
        aod.platforms.create(5662, 1660, 'ground-13').setScale(0.15).refreshBody();
        aod.platforms.create(5975, 1625, 'ground-14').setScale(0.15).refreshBody();

        //add objects

        new Waterfall(2800, 1730, 0.8);
        new Waterfall(4200, 1070, 0.5);

        aod.player = new Player();
        aod.aphrodite = new Aphrodite();

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, aod.platforms);

        // Dialogue starts when player hits Aphrodite.
        aod.playground.physics.add.overlap(aod.aphrodite.aphrodite, aod.player.player, this.hey, null, this);
        aod.playground.physics.world.setBounds(0, 0, 6271, 1664);

        this.startDialog = new Dialog("Een mystiek wezen staat\nin de verte op je te wachten.");

        aod.playground.cameras.main.setBounds(0, 0, 6100, 1664);

        aod.playground.cameras.main.startFollow(aod.player.player, true, 0.05, 0.05);
        //aod.playground.cameras.main.
        //aod.playground.cameras.main.setBounds(0, 0, 3000, 1260);
        new Banaan(1000, 1500);
        new Banaan(1100, 1200);
        new Banaan(2525, 1500);
        new Banaan(3250, 1200);
        new Banaan(3525, 1000);
        new Banaan(3900, 1500);
        new Banaan(4425, 1000);
        new Banaan(4820, 1000);
        new Banaan(5250, 1000);
        new Banaan(58250, 1000);
        aod.score = new Score();
    }

    update() {
        aod.player.movement()
            console.log(aod.player.player.x)
        // if (aod.player.player.y >= 800) {
        //     aod.player.player.x = 125;
        //     aod.player.player.y = 200;
        // }
    }

    hey() {
        // Already talking to Aphrodite?
        // YES: Do not trigger it again
        if (this.talkingToAphrodite) { return; }

        // Update the object, saying we're talking to Aphrodite
        this.talkingToAphrodite = true;

        // Hide start dialog
        this.startDialog.hide();

        // Prevent user from walking
        //aod.player.disableWalking();

        // Show talking dialog
        let ape_dialog_1 = new Dialog("Aapje:\n\nWow, wie ben jij?", () => {
            ape_dialog_1.hide();

            let aphrodite_dialog_1 = new Dialog("Aphrodite:\n\nIk ben Aphrodite, Griekse godin van de\nverleiding. Kijk uit of je zal mij ook niet\nkunnen weerstaan. ", () => {
                aphrodite_dialog_1.hide();

                let ape_dialog_2 = new Dialog("Aapje:\n\nDat zal moeilijk worden met al\ndie bananen om je heen.", () => {
                    ape_dialog_2.hide();

                    let aphrodite_dialog_2 = new Dialog("Aphrodite:\n\nAls jij mij echt kan weerstaan zal je dat\nmoeten bewijzen door al de bananen te\nverzamelen.", () => {
                        aphrodite_dialog_2.hide();

                        let ape_dialog_3 = new Dialog("Aapje:\n\nKlinkt als een uitdaging.", () => {
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