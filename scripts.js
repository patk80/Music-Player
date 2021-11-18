let albumArtwork       = document.querySelector("#album-artwork");
let songName           = document.querySelector("#song-name");
let artistName         = document.querySelector("#artist-name");
let musicSource        = document.querySelector("#music-source");
let nextButton         = document.querySelector("#next-button");
let audioElement       = document.querySelector("audio");

function randomSong() {
    let randomIndex      = Math.floor( Math.random() * musicArray.length );
    albumArtwork.setAttribute("src", musicArray[randomIndex].albumArtworkSrc);
    songName.innerText   = musicArray[randomIndex].songName;
    artistName.innerText = musicArray[randomIndex].artistName;
    musicSource.setAttribute("src", musicArray[randomIndex].songFileSrc);
    audioElement.setAttribute("src", musicArray[randomIndex].songFileSrc);
}

nextButton.addEventListener("click", function(){
    randomSong();
});