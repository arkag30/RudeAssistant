const btn=document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = [ 
    'Im good you little piece of shit',
    'Im tired of you asking me stupid questions',
    'please keep quite'
];
const weather = ['How does it matter you are not even going to go out you lazy Bastard'];
const hi=['hello you little goofball'];
//const pro=['get a room','you are soooo lonely','i hate you'];
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart= function(){
    console.log('Voice is activated,Speak up you jack ASS!!!!');
};
recognition.onresult= function(event){
    const current = event.resultIndex;
    const transcript=event.results[current][0].transcript;
    content.textContent=transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click',()=>{
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance(message);
      if(message.includes('how are you')||message.includes('what up')){
         const finalText= greetings[Math.floor(Math.random()*greetings.length)];
      speech.text=finalText;
     }
     else if(message.includes('weather')){
        const finalText= weather;
     speech.text=finalText;
    }
    else if(message.includes('hello')||message.includes('hi')){
        const finalText= hi;
     speech.text=finalText;
    }
    else if(message.includes('love')){
     speech.text="I Hate You So Much";
    }
    else{speech.text="Shut up and Stop Bugging me";}
    speech.volume= 1;
    speech.rate= 1;
    speech.pitch= 1;
    speechSynthesis.speak(speech);

}
