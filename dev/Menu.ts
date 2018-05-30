class Menu {
    
    enableToStart = true;
    backgroundObject:any;

    constructor() {

        this.init();

    }

    init() {
        this.backgroundObject = aod.playground.add.image(window.innerWidth / 2, window.innerHeight, 'retro-game-bg').setScale(2);

        aod.playground.gameTitle = aod.playground.add.text((aod.game.canvas.width / 2) - 338, aod.game.canvas.height / 2 - 150, "Ape of Divinity", {
            align: 'center',
            fontSize: '60px'
        });

        aod.playground.gameTitle.setShadow(3, 3, 'rgba(10, 10, 0, 0.5)', 5);

        aod.playground.pressEnter = aod.playground.add.text((aod.game.canvas.width / 2) - 269, aod.game.canvas.height / 2 + 20, "Klik <ENTER> om het spel\n\nte starten!", {
            align: 'center',
            fontSize: '30px',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        });


        aod.playground.pressEnter.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

        

        // FONT WORDT LATER AANGEPAST
        // aod.playground.titleText = aod.playground.add.bitmapText(aod.playground, 50, 50, 'arcadeclassic', 'Ape of Divinity', 50, 'center'); 
        // aod.playground.titleText.anchor.set(0.5);

        // aod.playground.optionCount = 1;
    }

    clickable() {
        // let Ekey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    create() {
        // if (Ekey.isDown) {
        //     // Zodra er op Enter is gedrukt, wordt je naar level 1 gebracht.
        //     this.scene = new Level1()
        // }

    }


    update() {
        if(this.enableToStart) {

            let Ekey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

            if (Ekey.isDown) {
                this.enableToStart = false;
                // Zodra er op Enter is gedrukt, wordt je naar level 1 gebracht.
                aod.scene = new Level1()
            }
        }
    }


}
