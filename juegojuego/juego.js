class Juego {
  constructor(cantidadMama, vidas) { 
    this.chicos = new Chicos(width * 0.5, 500, vidas); 
    this.mama = []; 
    this.iniciarMama(5);
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
    this.chicos = new Chicos(width * 0.5, 500);
  }

  iniciarMama(cantidad) { 
    for (let i = 0; i < cantidad; i++) {
      this.mama.push(new Mama()); 
    }
  }

  actualizarMama() { 
    if (this.estado === 1) {
      for (let i = this.mama.length - 1; i >= 0; i--) {
        this.mama[i].mover(); 
        this.mama[i].dibujar(); 
        this.chicos.calcularColision(this.mama);
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
      this.chicos.dibujar(); // Cambiado de pinocho.dibujar() a chicos.dibujar()
      textSize(15);
      fill(255);
      text("Vidas: " + this.chicos.vida, 520, 450); // Cambiado de pinocho.vida a chicos.vida
      text("Puntos: " + this.chicos.puntos, 20, 450); // Cambiado de pinocho.puntos a chicos.puntos
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
    if (this.estado === 1 && this.chicos.vida <= 0) { // Cambiado de pinocho.vida a chicos.vida
      this.estado = 2;
    }
  }

  ganar() {
    if (this.estado === 1 && this.chicos.puntos >= 500) { // Cambiado de pinocho.puntos a chicos.puntos
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
