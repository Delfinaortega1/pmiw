class Juego {
  constructor(cantidadMama, vidas) { // Cambiado de cantidadPescados a cantidadMama
    this.pinocho = new Pinocho(width * 0.5, 500, vidas);
    this.carga();
    this.mama = []; // Cambiado de pescados a mama
    this.iniciarMama(5); // Cambiado de iniciarPescados a iniciarMama
    this.actualizarMama(); // Cambiado de actualizarPescados a actualizarMama
    this.estado = 0;
    this.fondo = [];
    this.mipreload();
    this.i = 0;
  }

  background() {
    image(this.fondo[this.i], 0, 0, width, height);
  }

  mipreload() {
    for (this.i = 0; this.i < 4; this.i++) {
      this.fondo.push(loadImage('data/fondo' + this.i + '.png'));
    }
  }

  carga() {
    this.pinocho = new Pinocho(width * 0.5, 500);
  }

  iniciarMama(cantidad) { // Cambiado de iniciarPescados a iniciarMama
    for (let i = 0; i < cantidad; i++) {
      this.mama.push(new Mama()); // Cambiado de pescados.push a mama.push
    }
  }

  actualizarMama() { // Cambiado de actualizarPescados a actualizarMama
    if (this.estado === 1) {
      for (let i = this.mama.length - 1; i >= 0; i--) { // Cambiado de pescados a mama
        this.mama[i].mover(); // Cambiado de pescados a mama
        this.mama[i].dibujar(); // Cambiado de pescados a mama
        this.pinocho.calcularColision(this.mama); // Cambiado de pescados a mama
      }
      this.perder();
      this.ganar();
    }
  }

  dibujar() {
    if (this.estado == 0) {
      image(this.fondo[0], 0, 0);
      textSize(20);
      fill(255);
      text("Ayuda a Phineas y Ferb a evitar que sean castigados por su mama \nEsquiva a Linda y gana\n\nPRESIONA LA TECLA DE ESPACIO PARA INICIAR! ", 50, 40, 550);
    } else if (this.estado == 1) {
      image(this.fondo[1], 0, 0);
      this.pinocho.dibujar();
      textSize(15);
      fill(255);
      text("Vidas: " + this.pinocho.vida, 520, 450);
      text("Puntos: " + this.pinocho.puntos, 20, 450);
    } else if (this.estado == 2) {
      image(this.fondo[2], 0, 0);
      fill(255);
      text("PERDISTE\n\nPhineas y Ferb quedarán castigados durante todo el verano", 20, 18, 590);
    } else if (this.estado == 3) {
      image(this.fondo[3], 0, 0);
      text("LO LOGRASTE\nPhineas y Ferb disfrutarán de su verano", 20, 20, 580);
    }
  }

  perder() {
    if (this.estado === 1 && this.pinocho.vida <= 0) {
      this.estado = 2;
    }
  }

  ganar() {
    if (this.estado === 1 && this.pinocho.puntos >= 500) {
      this.estado = 3;
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode === 32) {
      if (this.estado === 0) {
        this.estado = 1;
      }
    }
  }
}
