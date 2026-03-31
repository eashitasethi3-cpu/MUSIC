
let songs = [
    {
        name: "HIM",
        image: "images/karan aujla.jpg",
        audio: "songs/HIM.mp3"
    },
    {
        name: "Khat",
        image: "images/khat.jpg",
        audio: "songs/Khat.mp3"
    },
    {
        name: "Ram Siya Ram",
        image: "images/RamSiyaRam.jpg",
        audio: "songs/Ram Siya Ram.mp3"
    },
    {
        name: "Shree Hanuman Chalisa",
        image: "images/Hanumna Ji.webp",
        audio: "songs/Shree Hanuman Chalisa.mp3"
    },

];


let allSongs = document.getElementById("all-songs");
let left = document.querySelector(".left");
let play = document.getElementById("play");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");


let audio = new Audio();
let current = 0;
let playing = false;


songs.forEach((song, index) => {
    let div = document.createElement("div");
    div.className = "song-card";

    div.innerHTML = `
        <div class="part1">
            <img src="${song.image}">
            <h2>${song.name}</h2>
        </div>
    `;

    div.onclick = () => {
        current = index;
        audio.src = song.audio;
        audio.play();
        left.style.backgroundImage = `url(${song.image})`;
        playing = true;
    };

    allSongs.appendChild(div);
});



play.onclick = () => {
    if (!playing) {
        audio.play();
        playing = true;
    } else {
        audio.pause();
        playing = false;
    }
};



forward.onclick = () => {
    current = (current + 1) % songs.length;
    audio.src = songs[current].audio;
    audio.play();
    left.style.backgroundImage = `url(${songs[current].image})`;
    playing = true;
};



backward.onclick = () => {
    current = (current - 1 + songs.length) % songs.length;
    audio.src = songs[current].audio;
    audio.play();
    left.style.backgroundImage = `url(${songs[current].image})`;
    playing = true;
};