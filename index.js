import { createLeftContainer, createRightContainer } from "./components.js";
import { fetchRequest } from "./fetch.js";

window.addEventListener("DOMContentLoaded", init);
async function init() {
  createRightContainer();
  createAlbumCards();
  createArtistCards();
  createLeftContainer();
}

// creo un array di queries
export let artistQueries = [
  "the%20beatles",
  "queen",
  "michael%20jackson",
  "elton%20john",
  "sfera%20ebbasta",
  "madonna",
  "led%20zeppelin",
  "adele",
  "u2",
  "bruce%20springsteen",
  "acdc",
  "ed%20sheeran",
  "beyonce",
  "rolling%20stones",
  "nirvana",
  "nino%20d%27angelo",
  "jovanotti",
  "david%20bowie",
  "prince",
  "ariana%20grande",
];

async function createAlbumCards() {
  // faccio lo shuffle delle queries e ne seleziono 6
  let shuffleQueries = artistQueries.sort(() => Math.random() - 0.5);
  let selectedQueries = shuffleQueries.slice(0, 6);

  // seleziono e svuoto il div
  const albumsContainer = document.querySelector(".albumsContainer");
  albumsContainer.innerHTML = "";

  // per ogni query faccio una fetch
  const albumPromises = selectedQueries.map(async (query) => {
    const fetchParam = {
      url: "https://striveschool-api.herokuapp.com/api/deezer/search?q=",
      method: "GET",
      query: query,
    };

    // salvo le fetch nella variabile tracks
    let tracks = await fetchRequest(fetchParam);
    // randomizzo le varie fetch
    let shuffleData = tracks.data.sort(() => Math.random() - 0.5);
    // creo un index random tra 0 e 25
    let shuffleIndex = Math.floor(Math.random() * 25);
    // salvo un album e il suo artista randomizzando l'index
    let album = shuffleData[shuffleIndex].album;
    let artist = shuffleData[shuffleIndex].artist;

    // creo le card degli album
    // let albumCard = 
    return `
      <div class="albumCard-container mb-2">
        <a href="./album.html?id=${album.id}" class="text-decoration-none">
          <div id="${album.id}" class="card" >
            <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <img src="${album.cover}" class="rounded-start" alt="cover" style="width: 80px" />
              </div>
              <div class="col-md-8">
                <div class="card-body p-0">
                  <div class=" fw-bold">${album.title}</div>
                  <div class="text-white-50">${artist.name}</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>`;

    // albumsContainer.innerHTML += albumCard;
  });
  // Eseguo tutte le promesse usando Promise.all
  const albumCards = await Promise.all(albumPromises);

  // Aggiungi le carte al container dopo che tutte le promesse sono risolte
  albumsContainer.innerHTML = albumCards.join("");
}

async function createArtistCards() {
  // faccio lo shuffle delle queries e ne seleziono 10
  let shuffleQueries = artistQueries.sort(() => Math.random() - 0.5);
  let selectedQueries = shuffleQueries.slice(0, 10);

  // seleziono e svuoto il div
  const artistsContainer = document.querySelector(".artistsContainer");
  artistsContainer.innerHTML = "";

  // per ogni query eseguo la fetch e creo le cards
  const artistPromises = selectedQueries.map(async (query) => {
    // creo il parametro per la fetch
    let fetchParam = {
      url: "https://striveschool-api.herokuapp.com/api/deezer/search?q=",
      method: "GET",
      query: query,
    };

    let artistArray = await fetchRequest(fetchParam);
    // creo un index random tra 0 e 25
    let shuffleIndex = Math.floor(Math.random() * 25);
    let artistName = artistArray.data[shuffleIndex].artist.name;
    let artistId = artistArray.data[shuffleIndex].artist.id;
    let artistImg = artistArray.data[shuffleIndex].artist.picture;
    let albumId = artistArray.data[shuffleIndex].album.id;

    // artistsContainer.innerHTML += 
    return `
    <a href="./artist.html?id=${artistId}" class="text-decoration-none">
      <div id="${albumId}" class="trackCard-container mb-3 col">
        <div class="card p-2">
          <img src="${artistImg}" class="card-img-top align-self-center" alt="cover">
            <div class="card-body p-2">
              <h6 class="card-title titoli  fw-bold">${artistName}</h6>
            </div>
        </div>
      </div>
    </a>`;
  });
  const artistCards = await Promise.all(artistPromises)
  artistsContainer.innerHTML = artistCards.join("")
}


async function createCarousel() {
  // faccio lo shuffle delle queries e ne seleziono 3
  let shuffleQueries = artistQueries.sort(() => Math.random() - 0.5);
  let selectedQueries = shuffleQueries.slice(0, 3);

  // svuoto il div
  const carouselContainer = document.querySelector(".carousel-inner");
  carouselContainer.innerHTML = ""

  // per ogni query eseguo la fetch e creo le cards
  const artistPromises = selectedQueries.map(async (query) => {
    // creo il parametro per la fetch
    let fetchParam = {
      url: "https://striveschool-api.herokuapp.com/api/deezer/search?q=",
      method: "GET",
      query: query,
    };

    let artistArray = await fetchRequest(fetchParam);
    // creo un index random tra 0 e 25
    let shuffleIndex = Math.floor(Math.random() * 25);
    let artistName = artistArray.data[shuffleIndex].artist.name;
    // let artistId = artistArray.data[shuffleIndex].artist.id;
    let artistImg = artistArray.data[shuffleIndex].artist.picture;
    // let albumId = artistArray.data[shuffleIndex].album;
    // console.log(artistArray.data[shuffleIndex])

    return `<div class="carousel-item">
      <div class="card bg-black">
        <div
          class="card mb-3 bg-black text-white"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${artistImg}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title">
                  ${artistName}
                </h1>
                <p class="card-text">
                  Qui non so che mettere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  })
  const artistItems = await Promise.all(artistPromises)
  carouselContainer.innerHTML = artistItems.join("")

  const firstCarosellItem = document.querySelector(".carousel-item")
  firstCarosellItem.classList.add("active")
}
createCarousel();
