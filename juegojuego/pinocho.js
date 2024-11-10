class Pinocho{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 20;
    this.foto();
    this.vida = 2;
    this.puntos = 0;
  }
  
  foto() {
    this.pinocho=loadImage ('data/pinocho.png');
  }
  
  dibujar(){
    imageMode(CENTER);
    image(this.pinocho, this.posX, this.posY);
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

calcularColision(pescados) {
  if (this.vida > 0) {
    let colision = false; 

    for (let i = 0; i < pescados.length; i++) {
      let distanciaPinochoPescado = dist(
        this.posX,
        this.posY,
        pescados[i].posX,
        pescados[i].posY
      );

      print(pescados[i].posY);
      if(int(pescados[i].posY) == 450){   //evalua si al llegar a la altura de pinocho la distancia es menor a 70 y suma 
        if (distanciaPinochoPescado > 70) {
          this.puntos += 10;
        }
        }

      if (distanciaPinochoPescado < 50) {
        colision = true;
        pescados[i].reiniciarPosicion(); 
      }

    }

    if (colision) {
      this.vida--; // Resta una vida
      if (this.vida > 0) {
        this.posX = width * 1;
        this.posY = 300; // Reinicia la posicion de pincohcho
      }
    }

    if (this.puntos >= 50) {
      this.juegoGanado = true;
   }
  }
 }
}
