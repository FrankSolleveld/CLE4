class Dialog
{
    callback:Function = function() {};
    text:string = "";

    currentText:string = "";
    amountEnters:integer = 0;

    dialog:object;
    textObject:object;

    // -----
    // HOW TO USE:
    //
    // let dialog = new Dialog("Hallo daar! Dit is een demo tekst, erg lollig om dit te lezen! Als je nog vragen hebt, laat het mij weten!", () => {
    //     alert("Klaar met praten!");
    //     dialog.hide();
    // });
    // 
    // ------

    constructor(text:string, callback:Function)
    {
        this.text = text;
        this.callback = callback;

        // Create new dialog
        this.dialog = aod.playground.add.image(aod.game.config.width / 2, aod.game.config.height - 100, 'dialog');
        this.dialog.setScrollFactor(0);

        // Set dialog scale
        this.dialog.setScale(0.6);

        this.textObject = aod.playground.add.text(this.dialog.x - (this.dialog.width * 0.6 / 2) + 30, this.dialog.y - (this.dialog.height * 0.6 / 2) + 30, "", {
            color: "#000000",
            fontSize: 20,
            align: 'left',
        });

        this.textObject.width = 150;
        this.textObject.setScrollFactor(0);



        // bmpText.maxWidth = 400;


        this.show();
    }

    show()
    {

        let importText = setInterval(() => {
            // this.show();
            if(this.currentText.length === this.text.length) 
            {
                clearInterval(importText);
                
                setTimeout(this.callback, 2000);
                return;
            }
            
            // // Do we need to add an enter?
            // let amountOfCharacters = this.currentText.length - (this.amountEnters * 45);
            // if(amountOfCharacters > 45) 
            // {
            //     this.currentText += "\n\n";
            //     this.amountEnters++;
            // }

            this.currentText += this.text[this.currentText.length - (this.amountEnters * 2)];

            this.textObject.setText(this.currentText);
        }, 75);
    }

    hide()
    {
        this.dialog.visible = false;
        this.textObject.visible = false;
    }
}