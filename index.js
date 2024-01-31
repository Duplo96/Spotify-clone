import { createLeftContainer, createRightContainer } from "./components.js";
import { fetchRequest } from "./fetch.js";

window.addEventListener("DOMContentLoaded", init);
async function init() {
  createLeftContainer();
  createRightContainer();
  createAlbumCards();
  createTrackCards();
}

async function createAlbumCards() {
  const fetchParam = {
    url: "https://striveschool-api.herokuapp.com/api/deezer/search?q=",
    method: "GET",
    query: "queen",
  };
  let tracks = await fetchRequest(fetchParam);
  let albums = [];
  tracks.data.forEach((track) => {
    albums.push(track.album);
  });
  // seleziono solo 6 album (fare ancora lo shuffle)
  const selectedAlbums = albums.slice(0, 6);

  const albumsContainer = document.querySelector(".albumsContainer");
  albumsContainer.innerHTML = "";
  selectedAlbums.forEach((album) => {
    let albumCard = `
            <div class="albumCard-container mb-2">
                <div id="${album.id}" class="card" >
                    <div class="row g-0 align-items-center">
                        <div class="col-md-4">
                            <img src="${album.cover}" class="rounded-start" alt="cover" style="width: 80px"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-0">
                            <a href="./album.html?id=${album.id}">${album.title}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    albumsContainer.innerHTML += albumCard;
  });
}

async function createTrackCards() {
  const fetchParam = {
    url: "https://striveschool-api.herokuapp.com/api/deezer/search?q=",
    method: "GET",
    query: "queen",
  };
  let tracks = await fetchRequest(fetchParam);
  let selectedTracks = tracks.data.slice(0, 10);
  const trackContainer = document.querySelector(".tracksContainer");
  trackContainer.innerHTML = "";
  selectedTracks.forEach((track) => {
    trackContainer.innerHTML += `
        <div id="${track.id}" class="trackCard-container mb-3 col">
              <div class="card p-2">
                <img src="${track.artist.picture}" class="card-img-top align-self-center" alt="cover">
                <div class="card-body p-2">
                  <h6 class="card-title">${track.title}</h6>
                </div>
              </div>
            </div>`;
  });
}
