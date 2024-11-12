let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(); 
}

function draw() {
  background(220); 
  objJuego.dibujar();
  objJuego.actualizarMama(); // Cambiado de actualizarPescados a actualizarMama
}

function keyPressed() { 
  objJuego.teclaPresionada(keyCode);
  if (keyCode === LEFT_ARROW) {
    objJuego.chicos.moverIzquierda(); // Cambiado de pinocho a chicos
  } else if (keyCode === RIGHT_ARROW) {
    objJuego.chicos.moverDerecha(); // Cambiado de pinocho a chicos
  }
  //apretar "r" para reiniciar :)
  if (key === 'r') {
    objJuego = new Juego();
  }
}
