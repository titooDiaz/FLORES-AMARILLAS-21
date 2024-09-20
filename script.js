const heart = document.getElementById("heart");
let xPos = 0;
let yPos = 0;
let xSpeed = 3;
let ySpeed = 3;
let heartWidth = heart.offsetWidth;
let heartHeight = heart.offsetHeight;

function bounceHeart() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Mover el corazón
  xPos += xSpeed;
  yPos += ySpeed;

  // Detectar colisiones con los bordes de la pantalla
  if (xPos + heartWidth >= windowWidth || xPos <= 0) {
    xSpeed = -xSpeed; // Invertir dirección en el eje X
  }
  if (yPos + heartHeight >= windowHeight || yPos <= 0) {
    ySpeed = -ySpeed; // Invertir dirección en el eje Y
  }

  // Aplicar las nuevas posiciones al corazón
  heart.style.transform = `translate(${xPos}px, ${yPos}px)`;

  // Repetir la animación
  requestAnimationFrame(bounceHeart);
}

// Iniciar la animación
bounceHeart();
