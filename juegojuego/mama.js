class Mama { // Cambiado de Pescados a Mama
  constructor(posX, posY) {
    this.posX = random(width);
    this.posY = random(-100, -10);
    this.velocidad = 1.8;
    this.foto();
  }

  foto() {
    this.mama = loadImage('data/pescado.png'); // Cambiado de this.pescados a this.mama
  }

  dibujar() {
    imageMode(CORNER);
    image(this.mama, this.posX, this.posY); // Cambiado de this.pescados a this.mama
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
