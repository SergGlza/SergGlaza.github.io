const defaultVideo = './src/video/Oceana - Cry Cry [Official Video] HD.mp4';
let videos_ = [defaultVideo];
let i = 0;

const sound = document.querySelector('.sound');
const soundButton = document.querySelector('.soundButton');
const nextVideoBack = document.querySelector('.nextVideoBack');
const soundButtonForward = document.querySelector('.soundButtonForward');
const video = document.querySelector('video');

function previewFile() {
    var preview = document.querySelector('video');
    var file    = document.querySelector('input[type=file]').files[0];

    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
   
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
    videos_.push(file); 
  }

  function forward(){
 
    i++;
   
    if(i>=videos_.length){    
     
        i=videos_.length-1;
     if(i===0){
      video.src = defaultVideo;
     }else{
      render( videos_[i]);
     }
        
    }
    if(videos_.length===1){
      video.src = defaultVideo;
    }else{     
    
        render( videos_[i]);           
    }      
  
  }

  function back(){
    
    --i;
   
   if(i<0){
       i=0;
   }

    if(i===0){
        document.querySelector('video').src = defaultVideo;    
    }else{          
        render( videos_[i]);     
    }
  }

function mute(elem){
    var video = document.getElementById(elem);
    if (video.muted){
      video.muted = false;
      document.querySelector('.sound').src ='./src/img/1486485571-198high-loud-music-on-sound-speaker-volume_81180.png';
    } else{
      video.muted = true;
     
      document.querySelector('.sound').src ='./src/img/external-Stories-social-media-bearicons-glyph-bearicons.png';
    }
  }

  function render( videos_){
    let reader  = new FileReader();
  
    reader.onloadend = function () {
      video.src = reader.result;
    }
  
    if ( videos_) {
      reader.readAsDataURL( videos_);
    } else {
      video.src = "";
    }
  }



  soundButton.onclick = function() {
    mute('video');
  }
  nextVideoBack.onclick = function() {
    back();
  }
  soundButtonForward.onclick = function() {
    forward();
  }