let albumArtwork = document.querySelector("#album-artwork");
let songName     = document.querySelector("#song-name");
let artistName   = document.querySelector("#artist-name");
let previous     = document.querySelector("#previous-button");
let play         = document.querySelector("#play-button");
let next         = document.querySelector("#next-button");
let playState    = false;

function randomSong() {
    let randomIndex      = Math.floor( Math.random() * musicArray.length );
    albumArtwork.setAttribute("src", musicArray[randomIndex].albumArtworkSrc);
    songName.innerText   = musicArray[randomIndex].songName;
    artistName.innerText = musicArray[randomIndex].artistName;
}

function playSong() {
    if(playState === true){

    }
}

function pauseSong() {
    if(playState === false){
        
    }
}