class Chicos { // Cambiado de Pinocho a Chicos
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = 400;
    this.velocidad = 20;
    this.foto();
    this.vida = 2;
    this.puntos = 0;
  }

  foto() {
    this.chicos = loadImage('data/chicos.png'); // Cambiado de pinocho a chicos
  }

  dibujar() {
    imageMode(CENTER);
    image(this.chicos, this.posX, this.posY); // Cambiado de pinocho a chicos
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    this.posX += this.velocidad;
  }

  moverIzquierda() {
    this.posX -= this.velocidad;
  }

  calcularColision(mama) { // Cambiado de pescados a mama
    if (this.vida > 0) {
      let colision = false;

      for (let i = 0; i < mama.length; i++) { // Cambiado de pescados a mama
        let distanciaChicosMama = dist( // Cambiado de pescados a mama
          this.posX,
          this.posY,
          mama[i].posX, // Cambiado de pescados a mama
          mama[i].posY // Cambiado de pescados a mama
        );

        print(mama[i].posY); // Cambiado de pescados a mama
        if (int(mama[i].posY) == 400) { // Cambiado de pescados a mama
          if (distanciaChicosMama > 70) { // Cambiado de pescados a mama
            this.puntos += 10;
          }
        }

        if (distanciaChicosMama < 50) { // Cambiado de pescados a mama
          colision = true;
          mama[i].reiniciarPosicion(); // Cambiado de pescados a mama
        }
      }

      if (colision) {
        this.vida--; // Resta una vida
        if (this.vida > 0) {
          this.posX = width * 1;
          this.posY = 400; // Reinicia la posición de Chicos
        }
      }

      if (this.puntos >= 50) { // Cambiado de pinocho.puntos a chicos.puntos
        this.juegoGanado = true;
      }
    }
  }
}
