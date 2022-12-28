const logo=Array.from(document.querySelectorAll('.logo img'))
window.addEventListener("keydown" , function(e){
    const audio=document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key=document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio)return;
    audio.play()
    audio.currentTime=0
    key.classList.add('playing');
    this.setTimeout(function(){key.classList.remove('playing')},300);
    const random=Math.round(Math.random()*4)
    logo[random].classList.add('mulai')
    this.setTimeout(function(){logo[random].classList.remove('mulai')},1000)
    console.log(random)
})
window.addEventListener("keydown" , function(e){
    const audio=document.querySelector(`audio[data-key='${e.keyCode}']`);
    const keyHitam=document.querySelector(`.key-hitam[data-key='${e.keyCode}']`)
    if(!audio)return;
    audio.play()
    audio.currentTime=0
    keyHitam.classList.add('playingHitam');
    this.setTimeout(function(){keyHitam.classList.remove('playingHitam')},300);
})
const key =document.getElementsByClassName('key')
const keyHitam=document.getElementsByClassName('key-hitam')
for(let i=0; i<key.length; i++){
    key[i].addEventListener("click",function(e){
        const audio=document.querySelectorAll(`audio`)[i];
        audio.play()
        audio.currentTime=0
    })
}
for(let i=0; i<keyHitam.length; i++){
    keyHitam[i].addEventListener("click",function(e){
        const audio=document.querySelectorAll(`audio`)[i];
        audio.play()
        audio.currentTime=0
    })
}
