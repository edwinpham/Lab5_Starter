// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // -grab voices put it in list
  // -on click grab text from box and play it in the accent
  // by scrolling through voices list
  // -when speaking make its lil mouth open.

  const synth = window.speechSynthesis;
  const inputTextArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  let smileyFace = document.querySelector('img');

  // list of different voices/accents
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      // if (voices[i].default) {
      //   option.text += " - DEFAULT";
      // }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function smileSpeak(){
    const utterThis = new SpeechSynthesisUtterance(inputTextArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        // setting the voice for the text
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

    utterThis.addEventListener('start', function() {
      smileyFace.src = 'assets/images/smiling-open.png';
    })
  
    utterThis.addEventListener('end', function() {
      smileyFace.src = 'assets/images/smiling.png';
    })
  }
  
  talkButton.addEventListener('click', smileSpeak);
}