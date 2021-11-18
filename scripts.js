let albumArtwork       = document.querySelector("#album-artwork");
let songName           = document.querySelector("#song-name");
let artistName         = document.querySelector("#artist-name");
let musicSource        = document.querySelector("#music-source");
let nextButton         = document.querySelector("#next-button");
let audioElement       = document.querySelector("audio");

function randomSong() {
    // Generate random index number //
    let randomIndex      = Math.floor( Math.random() * musicArray.length );
    // Use that random index number to pick a random song Object from music.js and update the HTML with those properties //
    albumArtwork.setAttribute("src", musicArray[randomIndex].albumArtworkSrc);
    songName.innerText   = musicArray[randomIndex].songName;
    artistName.innerText = musicArray[randomIndex].artistName;
    musicSource.setAttribute("src", musicArray[randomIndex].songFileSrc);
    audioElement.setAttribute("src", musicArray[randomIndex].songFileSrc);
}

nextButton.addEventListener("click", function(){
    randomSong();
});