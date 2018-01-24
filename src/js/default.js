// Default JavaScript Functions and Initiations

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Montserrat:300,400,500,600,700']
  }
});


function vidplay () {
   var video = document.getElementById('demo');
   var button = document.getElementById('play');
   if (video.paused) {
      video.play();
      button.classList.add('play');
   } else {
      video.pause();
      button.classList.remove('play');
   }
}