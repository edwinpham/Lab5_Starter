// expose.js
window.addEventListener('DOMContentLoaded', init);
const confetti = new JSConfetti();

function init() {
  // TODO
  let soundButton = document.querySelector('button');
  let mainElem = document.querySelector('main');
  let selectHorn = document.getElementById("horn-select");
  let volumeSlider = document.getElementById("volume");

  selectHorn.addEventListener('change', function(event) {
    // the currently selected list option
    let selectedOption = event.target.value;
    let hornImage = document.querySelector('img');
    
    //console.log(hornImage.src);
    hornImage.src = 'assets/images/' + selectedOption + '.svg';
  })

  soundButton.addEventListener('click', function(event) {
    let selectedOption = selectHorn.value;
    let currSound = new Audio('assets/audio/' + selectedOption + '.mp3');
    let volumeLevel = (volumeSlider.value/100);
    console.log(volumeLevel);

    currSound.onerror = function() {
      console.error('yo we got an error lol probably cause nothing is selected');
    }

    currSound.oncanplaythrough = function() {
      currSound.volume = volumeLevel;
      currSound.play();

      if (selectedOption == 'party-horn') {
        confetti.addConfetti();
      }
    }
  })

  volumeSlider.addEventListener('change', function(event) {
    let val = volumeSlider.value;
    let speaker = document.querySelector('div img');

    if (val == 0) {
      speaker.src = 'assets/icons/volume-level-0.svg';
    }
    else if (val < 33) {
      speaker.src = 'assets/icons/volume-level-1.svg';
    }
    else if (val < 67){
      speaker.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      speaker.src = 'assets/icons/volume-level-3.svg';
    }
  })

}