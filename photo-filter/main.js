const destinationImg = document.querySelector('img');
const controlsCollection = document.querySelector('.filters');
const controls = document.querySelectorAll('.cntrl')
const fullScr = document.querySelector('.fullscreen');
const resetBtn = document.querySelector('.btn-reset');
const nextImg = document.querySelector('.btn-next');

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const timeOfDay = ['day/', 'night/', 'morning/', 'evening/']
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

controlsCollection.addEventListener('input', inputHandler, false);
fullScr.addEventListener('click', fullScrFunc, false);
resetBtn.addEventListener('click', resetHandler, false);
nextImg.addEventListener('click', nextLinkHandler, false);

//CONTROLS HANDLER
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