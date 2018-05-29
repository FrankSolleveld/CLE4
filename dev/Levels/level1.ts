class Level1 {

    startDialog:Dialog;
    aphrodite:Aphrodite;
    talkingToAphrodite:boolean = false;

    constructor() {

        // Add background
        aod.playground.add.image(window.innerWidth / 2, 300, 'background').setScale(1.2);
        
        // Randomize clouds
        new Clouds();
        
        // Add trees to the game (behind the platforms!)
        new Tree(50, 495);
        new Tree(300, 495);
        new Tree(800, 300);
        new Tree(1200, 100);

        // Add platforms
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(50, 700, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(700, 500, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(1200, 300, 'ground').setScale(0.3).refreshBody();
        

        aod.player = new Player();
        this.aphrodite = new Aphrodite();
        aod.banaan = new Banaan();
        

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(this.aphrodite.aphrodite, aod.platforms);

        aod.playground.physics.add.overlap(this.aphrodite.aphrodite, aod.player.player, this.hey, null, this);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);

        this.startDialog = new Dialog("Zie je daar Aphrodite? Loop naar haar toe en\n\nzeg haar gedag!");
    }

    update() {
        aod.player.movement()
    }

    hey() {
        // Already talking to Aphrodite?
        // YES: Do not trigger it again
        if(this.talkingToAphrodite) { return; }

        // Update the object, saying we're talking to Aphrodite
        this.talkingToAphrodite = true;
        
        // Hide start dialog
        this.startDialog.hide();

        // Prevent user from walking
        aod.player.disableWalking();

        // Show talking dialog
        let aphrodite_dialog_1 = new Dialog("Aphrodite:\n\nHoi ..., wat zie jij er leuk uit!", () => {
            aphrodite_dialog_1.hide();

            let ape_dialog_1 = new Dialog("Aapje:\n\nJa hoi! Dit is een stukje storyline!", () => {
                ape_dialog_1.hide();

                let aphrodite_dialog_2 = new Dialog("Aphrodite:\n\nJa dat klopt, leuke invulling!", () => {
                    aphrodite_dialog_2.hide();

                    let ape_dialog_2 = new Dialog("Aapje:\n\nOke ik zal de bananen sparen!", () => {
                        ape_dialog_2.hide();
                        
                        // Let the player walk again
                        aod.player.enableWalking();
                    });
                });
            });
        });
        

    }
}