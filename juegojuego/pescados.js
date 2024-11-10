class Pescados{
  constructor(posX, posY){
    this.posX = random(width);
    this.posY = random(-100, -10);
    this.velocidad = 1.8;
    this.foto();
  } 
  
  foto() {
    this.pescados=loadImage ('data/pescado.png');
  }
  
  dibujar(){
    imageMode(CORNER);
    image(this.pescados, this.posX, this.posY);
  }  
  
  mover() {
    this.posY += this.velocidad;

    if (this.posY > height) {
      this.posY = random(-100, -10); 
      this.posX = random(width); 
    }
  }
  
  reiniciarPosicion() {
      this.posX = random(width);
      this.posY = random(-100, -10);
    }
  }
