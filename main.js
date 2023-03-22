var speechRecognition = window.webkitSpeechRecognition;
var recognition= new speechRecognition();
var textbox=document.getElementById("frase");

function selfiar(){
    textbox.innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var texto=event.results[0][0].transcript;
    textbox.innerHTML=texto;
    console.log(texto);
    if(texto=="tire minha selfie"){
        aldio();
    }
}
function aldio(){
    var speech=window.speechSynthesis;
    speechdata="Tirando sua selfie em: 5,4,3,2,1";
    var speak1=new SpeechSynthesisUtterance(speechdata);
    speech.speak(speak1);
    Webcam.attach(camera);
    setTimeout(function(){
        selfizap();
        saveimage();
    },5000)

}
camera=document.getElementById("camera");
Webcam.set({
    width:360,heigth:250,image_format:'jpeg',jpeg_quality:90 
})

function selfizap(){
    Webcam.snap(function(data_uri){
        document.getElementById("foto").innerHTML="<img src='"+data_uri+"' id='selfie'>";
    })
}
function saveimage(){
        link=document.getElementById("a");
        imagem=document.getElementById("selfie").src;
        link.href=imagem;
        link.click();

}                                          