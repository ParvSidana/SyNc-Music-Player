// console.log("Welcome to my Music App...");



let songIndex = 0;
let audioElem = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songProgress = document.getElementById('songProgress');
let gif = document.getElementById('gif');
let songDisplay = document.getElementById('songDisplay');

let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Excuses", filePath: "song/1.mp3" , coverPath: "images/c1.jpeg" ,songDuration:"2:56"},
    {songName: "Aasan Nahin Yahan", filePath: "song/2.mp3" , coverPath: "images/aa.jpeg" ,songDuration:"3:34"},
    {songName: "Aisa Des h mera", filePath: "song/3.mp3" , coverPath: "images/vz.jpeg" ,songDuration:"7:07"},
    {songName: "Bhula dena", filePath: "song/4.mp3" , coverPath: "images/aa.jpeg" ,songDuration:"4:00"},
    {songName: "Chahun mai ya naa", filePath: "song/5.mp3" , coverPath: "images/aa.jpeg" ,songDuration:"5:05"},
    {songName: "Do pal", filePath: "song/6.mp3" , coverPath: "images/vz.jpeg" ,songDuration:"4:26"},
    {songName: "Tum hi ho", filePath: "song/7.mp3" , coverPath: "images/aa.jpeg" ,songDuration:"4:22"},
    {songName: "Hum mar jaenge", filePath: "song/8.mp3" , coverPath: "images/aa.jpeg" ,songDuration:"5:06"},
    {songName: "Main yaahan hu", filePath: "song/9.mp3" , coverPath: "images/vz.jpeg" ,songDuration:"4:55"},
    {songName: "Tumhe kitna pyaar krte", filePath: "song/10.mp3" , coverPath: "images/c2.jpeg" ,songDuration:"3:34"},

]

masterPlay.addEventListener('click', ()=>{
    if(audioElem.paused || audioElem.currentTime<=0){
        audioElem.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElem.pause();
        makeAllPlay();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        

    }
})

audioElem.addEventListener('timeupdate',()=>{
    //updating seekbar
    let progress = parseInt((audioElem.currentTime/audioElem.duration) * 100 * 1.0);
    songProgress.value = progress;
})

//seek between the songs
songProgress.addEventListener('change',()=>{
    audioElem.currentTime = (songProgress.value * audioElem.duration)/100;
})


songItems.forEach((element,i) =>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath ;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('timestamp')[0].innerText = songs[i].songDuration;

})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
})
}


const makeAllPause = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element) => {
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        
})
}

const playPause = (e) =>{
    songIndex = parseInt(e.target.id);
    audioElem.src = `song/${songIndex+1}.mp3`;
    songDisplay.innerText = songs[songIndex].songName;
    // console.log(e.target);
    if(e.target.classList.contains('fa-circle-play') ){
        audioElem.play();
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        gif.style.opacity = 1; 
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }   
    else {
        audioElem.pause();
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        

    }
    

} 

Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element) => {
    element.addEventListener('click', playPause )
})

document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElem.src = `song/${songIndex+1}.mp3`;
        audioElem.currentTime = 0;
        audioElem.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; 
        songDisplay.innerText = songs[songIndex].songName;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElem.src = `song/${songIndex+1}.mp3`;
        audioElem.currentTime = 0;
        audioElem.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; 
        songDisplay.innerText = songs[songIndex].songName;

})