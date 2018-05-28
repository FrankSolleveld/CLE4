

class Banaan {
    
    constructor(){
        this.create()

    }
    create(){
        
        let banaan = aod.playground.physics.add.staticGroup();
        banaan.create(250, 650, 'banaan').setScale(0.3)
        banaan.create(450, 50, 'banaan').setScale(0.3)
        banaan.create(100, 100, 'banaan').setScale(0.3)
    }

}