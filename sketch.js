
	var bubbleX = 70;
	var bubbleY = 20;
	var speed = 7;
	var bg ="blue";

	function setup() {
		createCanvas(windowWidth, windowHeight);
	}

	function draw() {
		background(bg);

		if (bubbleX < mouseX){
			bubbleX +=speed;
		}

		if (bubbleX > mouseX){
			bubbleX-=speed;
		}


		if (bubbleY < mouseY){
			bubbleY+=speed;
		}

		if (bubbleY > mouseY){
			bubbleY-=speed;
		}

		fill(100,100,100);
		ellipse(bubbleX, bubbleY,25,28);


		fill("magenta");
		ellipse(mouseX, mouseY,35,38);


		fill("magenta");
		text("Use mouse to move your ellipse & press SHIFT to change the background from night to day",500,30);


		if(bg == "blue"){
			fill(200,200,200);
			ellipse(100+random(-2,2),100+random(-1,1),48,50);
			ellipse(250+random(-2,2),175+random(-1,1),40,35);
			ellipse(100+random(-2,2),300+random(-1,1),37,30);
			ellipse(150+random(-2,2),350+random(-1,1),80,74);
      ellipse(300+random(-2,2),400+random(-1,1),64,70);
			ellipse(350+random(-2,2),375+random(-1,1),70,67);
			ellipse(400+random(-2,2),200+random(-1,1),56,50);
			ellipse(550+random(-2,2),150+random(-1,1),60,65);
      ellipse(100+random(-2,2),800+random(-1,1),48,50);
			ellipse(250+random(-2,2),775+random(-1,1),40,35);
			ellipse(100+random(-2,2),600+random(-1,1),37,30);
			ellipse(150+random(-2,2),550+random(-1,1),80,74);
      ellipse(300+random(-2,2),400+random(-1,1),64,70);
			ellipse(350+random(-2,2),375+random(-1,1),70,67);
			ellipse(400+random(-2,2),200+random(-1,1),56,50);
			ellipse(550+random(-2,2),150+random(-1,1),60,65);
      ellipse(700+random(-2,2),100+random(-1,1),48,50);
      ellipse(750+random(-2,2),175+random(-1,1),40,35);
      ellipse(600+random(-2,2),300+random(-1,1),37,30);
      ellipse(550+random(-2,2),350+random(-1,1),80,74);
      ellipse(800+random(-2,2),400+random(-1,1),64,70);
      ellipse(950+random(-2,2),375+random(-1,1),70,67);
      ellipse(700+random(-2,2),200+random(-1,1),56,50);
      ellipse(650+random(-2,2),150+random(-1,1),60,65);
      ellipse(400+random(-2,2),800+random(-1,1),48,50);
      ellipse(850+random(-2,2),775+random(-1,1),40,35);
      ellipse(900+random(-2,2),600+random(-1,1),37,30);
      ellipse(650+random(-2,2),550+random(-1,1),80,74);
      ellipse(500+random(-2,2),400+random(-1,1),64,70);
      ellipse(450+random(-2,2),375+random(-1,1),70,67);
      ellipse(300+random(-2,2),200+random(-1,1),56,50);
      ellipse(750+random(-2,2),150+random(-1,1),60,65);
		}
	}

	function keyPressed() {

	  if(keyCode === SHIFT){

	  	if(bg == "blue"){
	  		bg = "yellow";
	  	} else if (bg=="yellow"){
	  		bg = "blue";
	  	}
	  }

	}
