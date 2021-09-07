import { ble } from "./data/ble.js";
import { ive } from "./data/ive.js";
const iveble = () => {
  const self = "https://iveble.art";
  const randomive = ive[Math.floor(Math.random() * ive.length)];
  const randomable = ble[Math.floor(Math.random() * ble.length)];
  const output = `${randomive}<br/>and<br/>${randomable}`;
  const tweetText = `i'm ${randomive} and ${randomable}🥺`;
  document.querySelector("#content").innerHTML = output;
  document.querySelector(".twitter-btn").addEventListener("click", (event) => {
    event.preventDefault();
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${self}`, "_blank");
  });
};

document.addEventListener("DOMContentLoaded", (event) => {
  iveble();
  document.querySelector("#newplsuwu").addEventListener("click", (event) => {
    event.preventDefault();
    iveble();
  });
});
