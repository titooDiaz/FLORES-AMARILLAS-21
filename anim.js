// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "...", time: 0 },
  { text: "El la estaba esperando con una flor amarillaaaa", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 25 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 33 },
  { text: "Lo sentia tan cercano", time: 40 },
  { text: "Lo sentia desde niñaaa", time: 42 },
  { text: "Ella sabia que el sabia que algun dia pasaria", time: 48 },
  { text: "Que vendria a buscarla con sus flores amarillaaass", time: 51 },
  { text: "No te apures, no detengas", time: 60 },
  { text: "El instante del encuentro", time: 62 },
  { text: "Esta dicho que es un hecho", time: 64 },
  { text: "No la pierdas, no hay derecho", time: 65 },
  { text: "No te olvides que la vida casi nunca esta dormida...", time: 68 },
  { text: "Te amito wiwiwi", time: 75 },
  { text: "...", time: 80 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find((line, index) => {
    var nextLineTime = lyricsData[index + 1] ? lyricsData[index + 1].time : Infinity;
    return time >= line.time && time < nextLineTime;
  });

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Llama a la función updateLyrics cada 100 ms para actualizar la letra
setInterval(updateLyrics, 100);


//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);