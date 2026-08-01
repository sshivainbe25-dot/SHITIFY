console.log("Welcome to SHITIFY");


let songIndex = 0;
let audioElement = document.getElementById("audioElement");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myprogressbar");

let songs = [
    { songName: "Haan Main Galat", filePath: "songs/1.mp3" },
    { songName: "Mehrema", filePath: "songs/2.mp3" },
    { songName: "ESPRESSO", filePath: "songs/3.mp3" },
    { songName: "Tum Se Hi", filePath: "songs/4.mp3" },
    { songName: "Shayad", filePath: "songs/5.mp4" },
    { songName: "RUBIA", filePath: "songs/6.mp3" },
    { songName: "DOORIYAN", filePath: "songs/7.mp4" },
    { songName: "CUFM HEART", filePath: "songs/8.mp3" },
        { songName: "ADCH", filePath: "songs/9.mp3" },

    
];


let smallPlayBtns = document.querySelectorAll(
    ".songlistplay i, .songlistplay2 i, .songllistplay3 i, .songlistplay4 i, .songlistplay5 i, .songlistplay6 i, .songlistplay7 i, .songlistplay8 i,.songlistplay10 i"
);


function resetAllPlays() {
    smallPlayBtns.forEach(btn => {
        btn.classList.remove("fa-pause");
        btn.classList.add("fa-play");
    });
}


smallPlayBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {

       
        if (songIndex === index && !audioElement.paused) {
            audioElement.pause();
            btn.classList.remove("fa-pause");
            btn.classList.add("fa-play");

            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
        } 
       
        else {
            resetAllPlays();
            songIndex = index;

            audioElement.src = songs[songIndex].filePath;
            audioElement.currentTime = 0;
            audioElement.play();

            btn.classList.remove("fa-play");
            btn.classList.add("fa-pause");

            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }
    });
});


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");

        smallPlayBtns[songIndex]?.classList.remove("fa-play");
        smallPlayBtns[songIndex]?.classList.add("fa-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        resetAllPlays();
    }
});


audioElement.addEventListener("timeupdate", () => {
    if (!isNaN(audioElement.duration)) {
        myProgressBar.value =
            (audioElement.currentTime / audioElement.duration) * 100;
    }
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
        (myProgressBar.value * audioElement.duration) / 100;
});
















