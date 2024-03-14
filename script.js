

console.log("Lets wite js");
let play=document.getElementById("master");
let progressbar=document.querySelector(".progress-bar")
let audioElement=new Audio("songs/1.mp3");
let songs=[
    {songName: "tum hi ho", filePath:'songs/1.mp3'},
    {songName: "tum hi ho", filePath:'songs/1.mp3'},
    {songName: "tum hi ho", filePath:'songs/1.mp3'},
    {songName: "tum hi ho", filePath:'songs/1.mp3'},
    {songName: "tum hi ho", filePath:'songs/1.mp3'},
    {songName: "tum hi ho", filePath:'songs/1.mp3'}
];

play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play();
       play.style.opacity=0;
       document.querySelector(".pause").style.display="block"; 
    }
    
})
document.querySelector(".pause").addEventListener('click', ()=>{
    if(audioElement.play || audioElement.currentTime>=0)
    {
        audioElement.pause();
        play.style.opacity=1;
        document.querySelector(".pause").style.display="none"; 


    }
})

audioElement.addEventListener("timeupdate" , ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress
})

progressbar.addEventListener("change", ()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100
})