const btn=document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = [ 
    'Im good you little piece of shit',
    'Im am tired of you asking me stupid questions',
    'please keep quite'
];
const weather = ['How does it matter you are not even going to go out you lazy Bastard'];

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart= function(){
    console.log('Voice is activated,Speak up you jack ASS!!!!');
};
recognition.onresult= function(event){
    const current = event.resultIndex;
    const transcript=event.results[current][0].transcript;
    content.textContent=transcript;
};


btn.addEventListener('click',()=>{
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance(message);
     speech.text="Shut up and Stop Bugging me";
      if(message.includes('how are you')){
         const finalText= greetings[Math.floor(Math.random()*greetings.length)];
      speech.text=finalText;
     }
    speech.volume= 1;
    speech.rate= 1;
    speech.pitch= 1;
    speechSynthesis.speak(speech);

}
