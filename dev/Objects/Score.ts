
class Score

{ 
    tekst1:any
    huidigeBanaan:any = 0
    constructor(){ 
        this.tekst1 = aod.playground.add.text(1050, 50, this.huidigeBanaan + "/8", {
            color: "#000000",
            fontSize: 50});
        this.tekst1.setScrollFactor(0);



   //eerstTekst = aod.playground.add.text(50, 50, '1/10', {
   //    color: "#000000",
   //     fontSize: 50}
    
}


update(aantalBanaan){  
    this.tekst1.setText( aantalBanaan + "/8");

}

}
