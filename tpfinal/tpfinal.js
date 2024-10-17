let imagenes = [];
let texto = [];
let estado, index;
let sonido; 

function preload() {
  for (let i = 0; i < 17; i++) {
    imagenes[i] = loadImage("data/foto" + i + ".jpeg");
  }
  texto = loadStrings("data/cuento.txt");
  soundFormats('mp3');
  sonido = loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 17; i++) {
    imagenes[i].resize(640, 480);
  }
  index = 0;
  estado = "portada";
}

function draw() {
  background(0);

  if (estado === "portada") {
    image(imagenes[0], 0, 0);
    botones(450, 360, 100, 50);
    textSize(20);
    fill(50);
    text("siguiente", 460, 390);
    botones(450, 420, 100, 50);
    text("créditos", 460, 450);
    
    // Detener el sonido si está reproduciéndose
    if (sonido.isPlaying()) {
      sonido.stop();
    }
  } else if (estado === "creditos") {
    background(50);
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text("Créditos", width / 2, height / 2 - 40);
    text("Delfina Ortega", width / 2, height / 2);
    text("Manuela Luca", width / 2, height / 2 + 40);
    
    botones(250, 400, 140, 50);
    textSize(20);
    fill(50);
    text("Volver", 280, 430);
    
    // Reproducir el sonido solo en créditos
    if (!sonido.isPlaying()) {
      sonido.play();
    }
  } else {
    // Detener el sonido en otros estados
    if (sonido.isPlaying()) {
      sonido.stop();
    }

    // Manejar los otros estados
    if (estado === "img1") {
      image(imagenes[1], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img2") {
      image(imagenes[2], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img3") {
      image(imagenes[3], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img4") {
      image(imagenes[4], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img5") {
      image(imagenes[5], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img6") {
      image(imagenes[6], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img7") {
      image(imagenes[7], 0, 0);
      botones(80, 360, 120, 50);
      textSize(15);
      fill(50);
      text("Logra detenerlo", 85, 390);
      botones(450, 360, 150, 50);
      textSize(15);
      fill(50);
      text("No logra detenerlo", 460, 390);
    } else if (estado === "img8") {
      image(imagenes[8], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img9") {
      image(imagenes[9], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img10") {
      image(imagenes[10], 0, 0);
      botones(450, 360, 170, 50);
      textSize(20);
      fill(50);
      text("Volver a empezar", 460, 390);
    } else if (estado === "img11") {
      image(imagenes[11], 0, 0);
      botones(80, 360, 100, 50);
      textSize(15);
      fill(50);
      text("opción 1", 85, 390);
      botones(450, 360, 100, 50);
      textSize(15);
      fill(50);
      text("opción 2", 460, 390);
    } else if (estado === "img12") {
      image(imagenes[12], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img13") {
      image(imagenes[13], 0, 0);
      botones(450, 360, 170, 50);
      textSize(20);
      fill(50);
      text("Volver a empezar", 460, 390);
    } else if (estado === "img14") {
      image(imagenes[14], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img15") {
      image(imagenes[15], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    } else if (estado === "img16") {
      image(imagenes[16], 0, 0);
      botones(450, 360, 170, 50);
      textSize(20);
      fill(50);
      text("Volver a empezar", 460, 390);
    } else if (estado === "img17") {
      image(imagenes[17], 0, 0);
      botones(450, 360, 100, 50);
      textSize(20);
      fill(50);
      text("siguiente", 460, 390);
    }
  }

  cuento();
}

function cuento() {
  if (index >= 1) {
    textSize(15);
    noStroke();
    fill(200, 50, 50);
    rect(45, 10, 500, 80);
    fill(250);
    text(texto[index], 50, 20, 500);
  }
}

function botones(x, y, an, al) {
  fill(50, 200, 50);
  rect(x, y, an, al);
}

function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

function mousePressed() {
  if (estado === "portada") {
    if (detectarBoton(450, 360, 100, 50)) {
      estado = "img1";
      index++;
    }
    if (detectarBoton(450, 420, 100, 50)) {
      estado = "creditos";
      index = 0; // Reinicia el índice si es necesario
    }
  } else if (estado === "creditos") {
    if (detectarBoton(250, 400, 140, 50)) {
      estado = "portada"; // Cambia al estado de portada
      index = 0; // Reinicia el índice si es necesario
    }
  } else if (estado === "img1") {
    if (detectarBoton(450, 360, 100, 50)) {
      estado = "img2";
    }
  } else if (estado === "img2") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img3";
   
    }


  } else if (estado === "img2") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img3";
    } else if (detectarBoton(80, 360, 100, 50)) {
      estado = "portada";
      index = 0;
    }
  } else if (estado === "img3") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img4";
    }
  } else if (estado === "img4") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img5";
    }
  } else if (estado === "img5") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img6";
    }
  } else if (estado === "img6") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img7";
    }
  } else if (estado === "img7") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img8";
    } else if (detectarBoton(80, 360, 120, 50)) {
      estado = "img11";
    }
  } else if (estado === "img8") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img9";
    }
  } else if (estado === "img9") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img10";
    }
  } else if (estado === "img10") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "portada";
      index = 0;
    }
  } else if (estado === "img11") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img12";
    } else if (detectarBoton(80, 360, 120, 50)) {
      estado = "img14";
    }
  } else if (estado === "img12") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img13";
    }
  } else if (estado === "img13") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "portada";
      index = 0;
    }
  } else if (estado === "img14") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img15";
    }
  } else if (estado === "img15") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "img16";
    }
  } else if (estado === "img16") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado = "portada";
      index = 0;
    }
  }


  if (!sonido.isPlaying()) {
    sonido.play();
  } else {
    sonido.stop();
  }
}
