class Juego{
  constructor(cantidadPescados, vidas){
    this.pinocho = new Pinocho(width * 0.5, 500, vidas);
    this.carga();
    this.pescados = [];
    this.iniciarPescados(5);
    this.actualizarPescados();
    this.estado = 0;
    this.fondo=[];
    this.mipreload();
    this.i=0;

  }
  background(){
    image( this.fondo[this.i], 0, 0, width, height );
  }

  mipreload() {
     for ( this.i = 0; this.i < 4; this.i++ ) {
    this.fondo.push( loadImage('data/fondo'+this.i+'.png') );
    }
  } 
  carga() {
     this.pinocho = new Pinocho(width * 0.5, 500);
  }
  iniciarPescados(cantidad) {
    for (let i = 0; i < cantidad; i++) {
      this.pescados.push(new Pescados());
     }
   }
  
  actualizarPescados() {
    if (this.estado === 1) {
      for (let i = this.pescados.length - 1; i >= 0; i--) {
      this.pescados[i].mover();
      this.pescados[i].dibujar();
      this.pinocho.calcularColision(this.pescados);
    }
      this.perder();
      this.ganar();
    }
   }
  
  dibujar(){
    if ( this.estado == 0 ) {
      image( this.fondo[0], 0, 0 )
      textSize(20);
      fill(255);
      text( "Ayuda a Phineas y Ferb a evitar que sean castigados por su mama \nEsquiva a Linda  y gana\n\nPRESIONA LA TECLA DE ESPACIO PARA INICIAR! ", 50, 40, 550 );
    } else if ( this.estado == 1 ) {
     image(this.fondo[1], 0, 0);      
      this.pinocho.dibujar();
      textSize(15);
      fill (255);
      text ("Vidas: " + this.pinocho.vida, 520, 570);
      text("Puntos: " + this.pinocho.puntos, 20, 570); 
    } else if ( this.estado == 2 ) {
      image( this.fondo[2], 0, 0 )
      fill(255);
      text ("PERDISTE\n\n\Phineas y Ferb quedaran castigados \durante todo el verano", 20, 18, 590);
    } else if ( this.estado == 3 ) {
      image( this.fondo[3], 0, 0 )
      text ("LO LOGRASTE\n Phineas y Ferb disfrutaran de su verano", 20, 20, 580);
    }
  }
//pierde si pinocho se queda sin vidass
   perder() {
    if (this.estado === 1 && this.pinocho.vida <= 0) {
      this.estado = 2; 
    }
  }
// la condicion para ganar es llegar a los 500 puntos
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
