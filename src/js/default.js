import WebFont from 'webfontloader';

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Montserrat:300,400,500,600,700,900']
  }
});

var video = document.getElementById('demo');
var button = document.getElementById('play');

function playVideo () {
   if (video.paused) {
      video.play();
      button.classList.add('play');
   } else {
      video.pause();
      button.classList.remove('play');
   }
}

button.addEventListener('click', playVideo);