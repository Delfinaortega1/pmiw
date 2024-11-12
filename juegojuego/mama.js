class Mama { 
  constructor(posX, posY) {
    this.posX = random(width);
    this.posY = random(-100, -10);
    this.velocidad = 3,5;
    this.foto();
  }

  foto() {
    this.mama = loadImage('data/mama.png'); // 
  }

  dibujar() {
    imageMode(CORNER);
    image(this.mama, this.posX, this.posY); // 
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
