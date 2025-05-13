function texttospeech() {
    let input = document.querySelector('.text');
    if (input) {
        let msg = input.value;
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-IN";
        speech.text = msg;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        speechSynthesis.cancel(); 
        speechSynthesis.speak(speech);
    } else {
        console.error("Element with class 'text' not found.");
    }
}
