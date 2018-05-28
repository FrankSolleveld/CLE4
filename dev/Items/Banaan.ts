

class Banaan {
    banaan:object;
    constructor(){
        this.create()

    }
    create(){
        //aod.playground.
        let banaan = aod.playground.physics.add.staticGroup();
        banaan.create(100, 400, 'banaan').setScale(0.3)
        //banaan.create(400, 50, 'banaan').setScale(0.3)
       // banaan.create(100, 100, 'banaan').setScale(0.3)
        this.physics.add.overlap(aod.player, banaan, this.collectBanaan, null, this);
        console.log(banaan)
    }
    collectBanaan(){
        console.log('banaan')
    }
}