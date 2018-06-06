class Level1 {

    startDialog: Dialog;
    aphrodite: Aphrodite;
    talkingToAphrodite: boolean = false;
    part: number = 0;

    constructor() {

        // Add background
        aod.playground.add.image(2444, 832, 'background');

        // Randomize clouds
        new Clouds();

        // Add trees to the game (behind the platforms!)
        new Tree(50, 495);
        new Tree(300, 495);
        new Tree(800, 300);
        new Tree(1200, 100);

        // Add platforms
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(450, 1600, 'ground-1').setScale(0.2).refreshBody();
        aod.platforms.create(1030, 1630, 'ground-1.1').setScale(0.2).refreshBody();
        aod.playground.add.image(1035, 1585, 'ground-1.2').setScale(0.2);
        aod.playground.add.image(1235, 1650, 'ground-2').setScale(0.2);
        aod.platforms.create(1130, 1330, 'ground-3').setScale(0.2).refreshBody();
        aod.platforms.create(1805, 1600, 'ground-4').setScale(0.2).refreshBody();

        // aod.platforms.create(1200, 300, 'ground').setScale(0.3).refreshBody();
        // aod.platforms.create(1900, 600, 'ground').setScale(0.3).refreshBody();
        // aod.platforms.create(2400, 400, 'ground').setScale(0.3).refreshBody();

        new Waterfall(440, 650, 0.5);

        aod.player = new Player();
        aod.aphrodite = new Aphrodite();

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, aod.platforms);

        aod.playground.physics.add.overlap(aod.aphrodite.aphrodite, aod.player.player, this.hey, null, this);
        aod.playground.physics.world.setBounds(0, 0, 11271, 1664);

        this.startDialog = new Dialog("Een mystiek wezen staat\nin de verte op je te wachten.");

        aod.playground.cameras.main.setBounds(0, 0, 11271, 1664);

        aod.playground.cameras.main.startFollow(aod.player.player, true, 0.05, 0.05);
        //aod.playground.cameras.main.
        //aod.playground.cameras.main.setBounds(0, 0, 3000, 1260);

    }

    update() {
        aod.player.movement()
        console.log(aod.player.player.y)
        if (aod.player.player.x >= 1280 && this.part == 0) {
            // aod.player.player.x = 125;
            // aod.player.player.y = 200;
            this.level1Part2()
 
        }
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
    level1Part2() {
        aod.score = new Score();
        this.part = 2;
        aod.aphrodite.delete();
        aod.banaan = new Banaan();
    }
}       