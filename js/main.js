// RELLENAR:

/* Convierte nodelist en array con spread */
const starsList = document.getElementsByName("star");
const starsArray = [...starsList];

/* Lanza evento al clickar en cada icono */
starsArray.forEach(element => {
  element.addEventListener("click", selectStars);
});

/* Encuentra index clickado y comprueba si está rellenado */
function selectStars(event) {
  let star = event.currentTarget;
  let starFind = starsArray.findIndex(element => element === star);
  if (starsArray[starFind].classList.contains('fill')) {
    emptyStars(starFind);
  } else {
    fillStars(starFind);
  }
}

/* Rellena iconos de derecha a izquierda */
function fillStars(index) {
  for (var i = 4; i >= index; i--) {
    starsArray[i].classList.add('fill');
  }
}

/* Vacía iconos de izquierda a derecha */
function emptyStars(index) {
  for (var i = 0; i < index; i++) {
    starsArray[i].classList.remove('fill');
  }
}

// LIMPIAR:

/* Crea variable usada para limpiar iconos */
const starBox = document.getElementById("starsRatingBox");

/* Compara el div con los iconos seleccionadas al clickar fuera */
window.addEventListener("click", function (event) {
  if (starBox == event.target) {
    cleanStars();
  }
});

/* Limpia todos los iconos rellenados del div */
function cleanStars() {
  for (var i = 0; i <= 4; i++) {
    starsArray[i].classList.remove('fill');
  }
}