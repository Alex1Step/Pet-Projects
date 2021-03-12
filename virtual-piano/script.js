const piano = document.querySelector('.piano');

window.addEventListener("load", documentReady, false);

function documentReady() {
  piano.addEventListener('mousedown', mouseDownHandler, false);
  document.addEventListener('keydown', keyDownHandler, false);
}

function keyDownHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  const keyObj = { 'KeyD': 'c', 'KeyF': 'd', 'KeyG': 'e', 'KeyH': 'f', 'KeyJ': 'g', 'KeyK': 'a', 'KeyL': 'b', 'KeyR': 'c♯', 'KeyT': 'd♯', 'KeyU': 'f♯', 'KeyI': 'g♯', 'KeyO': 'a♯' }
  const keyTempArray = Object.keys(keyObj);
  if (keyTempArray.indexOf(EO.code) !== -1) playAudio(`./assets/audio/${keyObj[EO.code]}.mp3`)
}

function mouseDownHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  let currentNote = EO.target.dataset.note;
  playAudio(`./assets/audio/${currentNote}.mp3`)
  piano.addEventListener('mouseup', mouseUpHandler, false);
}

function mouseUpHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  piano.removeEventListener('mouseup', mouseUpHandler);
}

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}