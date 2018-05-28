class Dialog
{
    callback:Function = function() {};
    text:string = "";

    currentText:string = "";

    dialog:object;
    textObject:object;

    dialogPhase = 1;

    // -----
    // HOW TO USE:
    //
    // \n\n = 1 enter
    //
    // let dialog = new Dialog("Hallo daar! Dit is een demo tekst, erg lollig\n\nom dit te lezen! Als je nog vragen hebt, laat\n\nhet mij weten!", () => {
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

        // Set dialog scale
        this.dialog.setScale(0.6);

        this.textObject = aod.playground.add.text(this.dialog.x - (this.dialog.width * 0.6 / 2) + 30, this.dialog.y - (this.dialog.height * 0.6 / 2) + 30, "Tekst blabla", {
            color: "#000000",
            fontSize: 20,
            align: 'left',
        });

        this.textObject.width = 150;


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

            this.currentText += this.text[this.currentText.length];

            this.textObject.setText(this.currentText);
            
        }, 25);
    }

    hide()
    {
        this.dialog.visible = false;
        this.textObject.visible = false;
    }
}