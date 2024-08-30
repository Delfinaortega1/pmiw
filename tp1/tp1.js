//Delfina ortega 119105/1
//https://youtu.be/N733CkbGh3Q



let obra;
let numero = 10;
let tamaño = 40;
let negro;
let blanco;

function preload() {
  obra = loadImage('data/obra.jpeg');
}

function setup() {
  createCanvas(800, 400);
  negro = color(0);
  blanco = color(255);
}

function draw() {
  image(obra, 0, 0);

  let pantalla = width / 2;
  for (let i = 0; i < numero; i++) {
    for (let j = 0; j < numero; j++) {
      let x = j * tamaño + pantalla;
      let y = i * tamaño;
      dibujarCuadrado(i, j);

      if ((i + j) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, tamaño, tamaño);

      let nuevaOpacidad = calcularOpacidad(x + tamaño / 2, y + tamaño / 2);

      // Dibujar círculo con nueva opacidad
      if ((i + j) % 2 == 0) fill(blanco, nuevaOpacidad);
      else fill(negro, nuevaOpacidad);

      ellipse(x + tamaño / 2, y + tamaño / 2, tamaño / 2.2, tamaño / 2.2);
    }
  }
}

function dibujarCuadrado(i, j) {
  let pantalla = width / 2;
  let x = j * tamaño + pantalla;
  let y = i * tamaño;

  if ((i + j) % 2 == 0) fill(negro);
  else fill(blanco);
  rect(x, y, tamaño, tamaño); 
}

function calcularOpacidad(puntoX, puntoY) {
  let distancia = dist(mouseX, mouseY, puntoX, puntoY);
  let opacidadMapeada = map(distancia, 0, width, 255, 50);
  return opacidadMapeada;
}

function keyPressed() {
  blanco = color(random(255), random(255), random(255));
  negro = color(random(200), random(200), random(200));
}

function mousePressed() {
  setup();
   
    
  tamaño = 40;
  numero = 10;
  negro = color(0);
  blanco = color(255);
}
  loop(); // Reiniciar el bucle de dibujo
