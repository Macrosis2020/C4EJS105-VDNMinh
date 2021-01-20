let songDatabase = [];
let albumDatabase = [];
function changeDisplay() {
    document.getElementById("content-disp").innerHTML = "";
    if (document.getElementById("type-selection").value=='song') {
        displaySongContent();
        document.getElementById("header").textContent = "Itunes top songs";
    } else {
        displayAlbumContent();
        document.getElementById("header").textContent = "Itunes top albums";
    }
}
document.getElementById("type-selection").addEventListener("change", changeDisplay);
displaySongContent();
function displaySongContent() {
    async function getSongData() {
        let fetchPromise = await fetch('https://itunes.apple.com/us/rss/topsongs/all/limit=15/json');
        return fetchPromise.json();
    }
    getSongData().then(
        result => {
            console.log(result);
            function loadSongContent() {
                songDatabase.splice(0, songDatabase.length);
                for (i = 0; i < Number(document.getElementById("quantity-selection").value); i++) {
                    let newSong = {
                        image: String(result.feed.entry[i]["im:image"][2].label),
                        name: String(result.feed.entry[i]["im:name"].label),
                        artist: String(result.feed.entry[i]["im:artist"].label),
                    }
                    songDatabase.push(newSong);
                    document.getElementById("content-disp").insertAdjacentHTML("beforeend", `
                <div class="content-box">
                <img class="content-img" src="${songDatabase[i].image}" alt="img not found">
                <p class="content-info">
                <div class="label">${songDatabase[i].name}</div>
                <div class="artist">${songDatabase[i].artist}</div>
                </p>
                </div>`
                    )
                }
            }
            loadSongContent();
            function resetContent() {
                document.getElementById("content-disp").innerHTML = "";
                if (document.getElementById("type-selection").value == 'song') {
                    loadSongContent();
                }
            }
            document.getElementById("quantity-selection").addEventListener("change", resetContent);
        }
    )
}
function displayAlbumContent() {
    async function getAlbumData() {
        let fetchPromise = await fetch('https://itunes.apple.com/us/rss/topalbums/all/limit=15/json');
        return fetchPromise.json();
    }
    getAlbumData().then(
        result => {
            console.log(result);
            function loadAlbumContent() {
                albumDatabase.splice(0, albumDatabase.length);
                for (i = 0; i < Number(document.getElementById("quantity-selection").value); i++) {
                    let newAlbum = {
                        image: String(result.feed.entry[i]["im:image"][2].label),
                        name: String(result.feed.entry[i]["im:name"].label),
                        artist: String(result.feed.entry[i]["im:artist"].label),
                    }
                    albumDatabase.push(newAlbum);
                    document.getElementById("content-disp").insertAdjacentHTML("beforeend", `
            <div class="content-box">
            <img class="content-img" src="${albumDatabase[i].image}" alt="img not found">
            <p class="content-info">
            <div class="label">${albumDatabase[i].name}</div>
            <div class="artist">${albumDatabase[i].artist}</div>
            </p>
            </div>`)
                }
            }
            loadAlbumContent();
            function resetContent() {
                document.getElementById("content-disp").innerHTML = "";
                if (document.getElementById("type-selection").value == 'album') {
                    loadAlbumContent();
                }
            }
            document.getElementById("quantity-selection").addEventListener("change", resetContent);
        }
    )
}