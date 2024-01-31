import { createLeftContainer, createHero } from "./components.js";
import { fetchRequest } from "./fetch.js";
const heroSection = document.querySelector(".container-hero ");
const buttonSection = document.querySelector(".container-button");
const tracklistSection = document.querySelector(".container-tracklist ");
const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;
const URLTRACKLIST = `https://striveschool-api.herokuapp.com/api/deezer/album/`;
const URLALBUM = `https://striveschool-api.herokuapp.com/api/deezer/album/212377`;

// const formatHTMLCard = (artist) => {
//   const card = document.createElement("div");
//   card.classList.add("card", "col-lg-2", "bg-dark");

//   const img = document.createElement("img");
//   img.classList.add("card-img-top", "w-100", "h-100");
//   img.src = `${artist.album.cover};`
//   card.appendChild(img);

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   card.appendChild(cardBody);

//   const title = document.createElement("h5");
//   title.classList.add("card-title");
//   title.textContent = `${artist.title};`
//   title.style.color = "white";
//   cardBody.appendChild(title);

//   const paragraph = document.createElement("p");
//   paragraph.classList.add("card-text");
//   paragraph.textContent = `${artist.title_short};`
//   paragraph.style.color = "white";
//   cardBody.appendChild(paragraph);

//   const button = document.createElement("a");
//   button.classList.add("btn");
//   cardBody.appendChild(button);

//   return card;

// }
createLeftContainer();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const fetchAlbum = async () => {
  const json = await fetchRequest({
    url: URLTRACKLIST,
    id: id,
    method: "GET",
  });
  console.log(json);
  return json;
};
const albumInfo = await fetchAlbum();

const { cover } = albumInfo;
console.log(cover);
heroSection.appendChild(createHero(albumInfo));

const displayTracklist = () => {
  const { tracks } = albumInfo;
  console.log(tracks);
  tracks.data.map((track) => {
    console.log(track);
  });
};
displayTracklist();
