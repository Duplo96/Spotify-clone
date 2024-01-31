import {
  createLeftContainer,
  createHero,
  formatList,
  createRightContainer,
} from "./components.js";
import { fetchRequest } from "./fetch.js";
const heroSection = document.querySelector(".container-hero ");
const tracklistSection = document.querySelector("#tracklist");
export const URLALBUM = `https://striveschool-api.herokuapp.com/api/deezer/album/`;
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
createRightContainer();
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

export const fetchAlbum = async () => {
  const json = await fetchRequest({
    url: URLALBUM,
    id: id,
    method: "GET",
  });
  console.log(json);
  return json;
};
export const albumInfo = await fetchAlbum();

const { cover } = albumInfo;
console.log(cover);
heroSection.appendChild(createHero(albumInfo));

const displayTracklist = () => {
  const { tracks } = albumInfo;
  console.log(tracks);
  let index = 1;
  tracks.data.forEach((track) => {
    console.log(track);
    tracklistSection.appendChild(formatList(track, index));
    index++;
  });
};
displayTracklist();
