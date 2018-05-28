class Dialog
{
    callback:Function = function() {};
    text:string = "";

    currentText:string = "";

    // new Dialog("Hello!", () => {
    //     alert("DONE!");
    // });

    constructor(text:string, callback:Function)
    {
        this.text = text;
        this.callback = callback;

        this.show();
    }

    show()
    {
        
    }
}