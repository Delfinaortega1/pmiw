let objJuego;
let fondos = [];
let sonido;

function preload() {
  // Cargar las imágenes del fondo antes de iniciar el juego
  for (let i = 0; i < 4; i++) {
    fondos.push(loadImage('data/fondo' + i + '.png'));
    soundFormats ('mp3');
  sonido = loadSound ("data/sonido.mp3");
    
  }
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(fondos); // Crear una nueva instancia de Juego con los fondos
}

function draw() {
  background(220);
  objJuego.dibujar(); // Llamar a la función dibujar del juego para dibujar los elementos en la pantalla
  objJuego.actualizarMama(); // Llamar para actualizar las mamas (si el estado lo permite)
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode); // Detecta la tecla presionada
  
  if (keyCode === LEFT_ARROW) {
    objJuego.chicos.moverIzquierda();
  } else if (keyCode === RIGHT_ARROW) {
    objJuego.chicos.moverDerecha();
  }

  // Presionar "r" para reiniciar el juego
  if (key === 'r') {
    objJuego = new Juego(fondos); // Reinicia el juego
  }
}

function mousePressed() {
  // Detecta los clics en los botones de la pantalla inicial
  if (objJuego.estado === 0) { // Solo permite interactuar con los botones si estamos en el estado 0 (pantalla de inicio)
    if (detectarBoton(450, 360, 100, 50)) {
      objJuego.estado = 4 ; // Cambia el estado a "instrucciones"
    } else if (detectarBoton(450, 420, 100, 50)) {
      objJuego.estado = 5; // Cambia el estado a "creditos"
    }
  }
}

// Función para dibujar botones
function dibujarBoton(x, y, w, h, texto) {
  fill(50, 220, 50);
  rect(x, y, w, h);
  textSize(20);
  fill(50);
  text(texto, x + 10, y + 30); 
}

// Función para detectar si el mouse está sobre un botón
function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
