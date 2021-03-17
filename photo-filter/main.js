const destinationImg = document.querySelector('img');
const controlsCollection = document.querySelector('.filters');
const controls = document.querySelectorAll('.cntrl')
const fullScr = document.querySelector('.fullscreen');
const resetBtn = document.querySelector('.btn-reset');

controlsCollection.addEventListener('input', inputHandler, false);
fullScr.addEventListener('click', fullScrFunc, false);
resetBtn.addEventListener('click', resetHandler, false);

function inputHandler(EO) {
  switch (EO.target.name) {
    case 'blur' : {
      destinationImg.style.setProperty('--blur', EO.target.value+'px');
      EO.target.nextElementSibling.value = EO.target.value;
      break;
    }
    case 'invert' : {
      destinationImg.style.setProperty('--invert', EO.target.value+'%');
      EO.target.nextElementSibling.value = EO.target.value;
      break;
    }
    case 'sepia' : {
      destinationImg.style.setProperty('--sepia', EO.target.value+'%');
      EO.target.nextElementSibling.value = EO.target.value;
      break;
    }
    case 'saturate' : {
      destinationImg.style.setProperty('--saturate', EO.target.value+'%');
      EO.target.nextElementSibling.value = EO.target.value;
      break;
    }
    case 'hue' : {
      destinationImg.style.setProperty('--hue', EO.target.value+'deg');
      EO.target.nextElementSibling.value = EO.target.value;
      break;
    }
  }
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

//RESET HANDLE
function resetHandler() {
  let initProps = {
    '--blur': '0px',
    '--invert': '0%',
    '--sepia': '0%',
    '--saturate': '100%',
    '--hue': '0deg'
  }
  let counter = 0;
  for (prop in initProps) {
    destinationImg.style.setProperty(prop, initProps[prop]);
    if (prop==='--saturate') {
      controls[counter].value = 100;
      controls[counter].nextElementSibling.value = 100;
    }
    else {
      controls[counter].value = 0;
      controls[counter].nextElementSibling.value = 0;
    }
    counter += 1;
  }
  counter = 0;
}