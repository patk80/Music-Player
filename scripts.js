let albumArtwork = document.querySelector("#album-artwork");
let songName     = document.querySelector("#song-name");
let artistName   = document.querySelector("#artist-name");

function randomSong() {
    let randomIndex      = Math.floor( Math.random() * musicArray.length );
    albumArtwork.setAttribute("src", musicArray[randomIndex].albumArtworkSrc);
    songName.innerText   = musicArray[randomIndex].songName;
    artistName.innerText = musicArray[randomIndex].artistName;
}
