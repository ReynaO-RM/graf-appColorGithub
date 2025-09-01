// Sliders
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

// Inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Color box y códigos
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");

// Input color picker
const colorPicker = document.getElementById("colorPicker");

// Función: actualizar desde sliders
function updateColor() {
  let r = parseInt(redRange.value);
  let g = parseInt(greenRange.value);
  let b = parseInt(blueRange.value);

  // Sincronizar inputs numéricos
  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Cambiar color box
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Convertir a hex
  let hex = "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  hexCode.textContent = hex.toUpperCase();
  rgbCode.textContent = `rgb(${r}, ${g}, ${b})`;

  colorPicker.value = hex; // sincronizar picker
}

// Función: actualizar desde inputs numéricos
function updateFromInputs() {
  let r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
  let g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
  let b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

  // Sincronizar sliders
  redRange.value = r;
  greenRange.value = g;
  blueRange.value = b;

  updateColor();
}

// Función: actualizar desde picker
function updateFromPicker() {
  let hex = colorPicker.value;

  // Convertir HEX → RGB
  let r = parseInt(hex.substr(1, 2), 16);
  let g = parseInt(hex.substr(3, 2), 16);
  let b = parseInt(hex.substr(5, 2), 16);

  // Actualizar sliders e inputs
  redRange.value = r;
  greenRange.value = g;
  blueRange.value = b;

  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Actualizar box y códigos
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  hexCode.textContent = hex.toUpperCase();
  rgbCode.textContent = `rgb(${r}, ${g}, ${b})`;
}

// Eventos
redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

redInput.addEventListener("input", updateFromInputs);
greenInput.addEventListener("input", updateFromInputs);
blueInput.addEventListener("input", updateFromInputs);

colorPicker.addEventListener("input", updateFromPicker);

// Inicializar
updateColor();
