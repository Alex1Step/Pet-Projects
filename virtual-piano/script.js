const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key')
const fullScr = document.querySelector('.fullscreen')
const toggleBtn = document.querySelectorAll('.btn')

//APPLICATION START DEPEND ON GLOBAL EVENT "LOAD"
window.addEventListener("load", documentReady, false);

function documentReady() {
  //mouse events
  piano.addEventListener('mousedown', mouseDownHandler, false);
  //keybord events
  document.addEventListener('keydown', keyDownHandler, false);
  //fullscreen toogle event
  fullScr.addEventListener('click', fullScrFunc, false);
  //toggle notes/letters view
  toggleBtn[0].addEventListener('click', toggleNotesLetters, false);
  toggleBtn[1].addEventListener('click', toggleNotesLetters, false);
}
//KEYBOARD EVENTS HANDLER
function keyDownHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  if (EO.repeat) return;
  const keyObj = { 'KeyD': 'c', 'KeyF': 'd', 'KeyG': 'e', 'KeyH': 'f', 'KeyJ': 'g', 'KeyK': 'a', 'KeyL': 'b', 'KeyR': 'c♯', 'KeyT': 'd♯', 'KeyU': 'f♯', 'KeyI': 'g♯', 'KeyO': 'a♯' }
  const keyTempArray = Object.keys(keyObj);
  let currKey;
  for (let key of pianoKeys) {
    if (key.dataset.letter === EO.code.slice(-1)) { currKey = key }
  }
  if (keyTempArray.indexOf(EO.code) !== -1) {
    playAudio(`./assets/audio/${keyObj[EO.code]}.mp3`)
    currKey.classList.add('piano-key-active');
  }
  document.addEventListener('keyup', (EO) => { if (currKey) currKey.classList.remove('piano-key-active'); })
}
//MOUSE EVENTS HANDLERS
function mouseDownHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  playAudio(`./assets/audio/${EO.target.dataset.note}.mp3`);
  EO.target.classList.add('piano-key-active');
  for (let pianoK of pianoKeys) {
    pianoK.addEventListener('mouseenter', enterHandler, false)
    pianoK.addEventListener('mouseleave', leaveHandler, false)
  }
  piano.addEventListener('mouseleave', mouseUpHandler, false)
  piano.addEventListener('mouseup', mouseUpHandler, false);
}

function enterHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  playAudio(`./assets/audio/${EO.target.dataset.note}.mp3`);
  EO.target.classList.add('piano-key-active');
}

function leaveHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  EO.target.classList.remove('piano-key-active');
}

function mouseUpHandler(EO) {
  var EO = EO || window.event;
  EO.preventDefault();
  EO.target.classList.remove('piano-key-active');
  for (let pianoK of pianoKeys) {
    pianoK.removeEventListener('mouseenter', enterHandler)
    pianoK.removeEventListener('mouseleave', leaveHandler)
  }
  piano.removeEventListener('mouseleave', mouseUpHandler)
  piano.removeEventListener('mouseup', mouseUpHandler);
}
//PLAY SOUND
function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.loop = false;
  audio.currentTime = 0;
  audio.play();
}

//FULLSCREEN EVENT
function fullScrFunc(EO) {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

//TOGGLE LETTERS AND NOTES VIEWS
function toggleNotesLetters() {
  toggleBtn[0].classList.toggle('btn-active');
  toggleBtn[1].classList.toggle('btn-active');
  pianoKeys.forEach(elem => elem.classList.toggle('letter'))
}