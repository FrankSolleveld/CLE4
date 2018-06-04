class Level1 {

    startDialog:Dialog;
    aphrodite:Aphrodite;
    talkingToAphrodite:boolean = false;
    part:number = 0;

    constructor() {
        
        // Add background
        aod.playground.add.image(1200, 300, 'background').setScale(0.3);
        
        // Randomize clouds
        new Clouds();
        
        // Add trees to the game (behind the platforms!)
        new Tree(50, 495);
        new Tree(300, 495);
        new Tree(800, 300);
        new Tree(1200, 100);

        // Add platforms
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(150, 700, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(700, 500, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(1200, 300, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(1900, 600, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(2400, 400, 'ground').setScale(0.3).refreshBody();

        new Waterfall(440, 650, 0.5);

        aod.player = new Player();
        aod.aphrodite = new Aphrodite();

        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, aod.platforms);

        aod.playground.physics.add.overlap(aod.aphrodite.aphrodite, aod.player.player, this.hey, null, this);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);

        this.startDialog = new Dialog("Zie je daar Aphrodite? Loop naar haar toe en\n\nzeg haar gedag!");
        
        aod.playground.cameras.main.setBounds(0, 0, 1280 * 2, 720);

        aod.playground.cameras.main.startFollow(aod.player.player, true, 0.05, 0.05);
        //aod.playground.cameras.main.
        //aod.playground.cameras.main.setBounds(0, 0, 3000, 1260);
        
    }

    update() {
        aod.player.movement()  
        if (aod.player.player.x >= 1280 && this.part == 0){
            // aod.player.player.x = 125;
            // aod.player.player.y = 200;
            this.level1Part2()

    }
        if (aod.player.player.y >= 800){
            aod.player.player.x = 125;
            aod.player.player.y = 200;   
        }
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
        //aod.player.disableWalking();

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
    level1Part2(){
        aod.score = new Score();
        this.part = 2;
        aod.aphrodite.delete();
        aod.banaan = new Banaan();
    }
}