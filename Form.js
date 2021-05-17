class Form{

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.story1 = createElement('h3');
    this.story2 = createElement('h3');
    this.story3 = createElement('h3');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }

  hide(){
    this.story1.hide();
    this.story2.hide();
    this.story3.hide();
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("MY OWN GAME");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("WELCOME  " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.story1.html("You have to save the earth from aliens.");
   this.story1.position(displayWidth/2 - 200, displayHeight/2 );
   this.story2.html("They have aldready attaked our planet you have to stop them from destroying life in our planet.");
   this.story2.position(displayWidth/2 - 200, displayHeight/2+30 );
   this.story3.html("We belive in you.");
   this.story3.position(displayWidth/2 - 200, displayHeight/2+60 );
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}

