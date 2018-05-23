

class Banaan {
    banaan:object;
    constructor(){
        this.create()

    }
    create(){
        //aod.playground.
        let banaan = this.physics.add.staticGroup();
        banaan.create(100, 400, 'banaan').setScale(0.3)
        banaan.create(, 50, 'banaan').setScale(0.3)
        banaan.create(100, 100, 'banaan').setScale(0.3)
    }

}