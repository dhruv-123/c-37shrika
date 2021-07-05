class Form{
    constructor(){
        this.input = createInput("Enter your name.");
        this.button = createButton("Submit");
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Multi-Player Car Racing Game");
        title.position(225,10);

        
        this.input.position(220,70);
        this.button.position(250,180);
        this.greeting.position(250,180);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            pcount = pcount+1;
            player.index = pcount;
            player.updatepcount(pcount);
            player.updatename();
            this.greeting.html("Hello"+player.name);
        });
        
    }
}