import cakeImages from "./cakes.js";
import postreImages from "./postres.js";

const pasteles = document.querySelector(".pasteles");
const postres = document.querySelector(".postres");


if (pasteles) {
    const cakesHTML = cakeImages.map(img => `
        <div class="pastel-card">
            <img src="images/cakes/${img}" alt="Pastel">
        </div>
    `).join("");

    pasteles.innerHTML = cakesHTML;
}

if (postres) {
    const postresHTML = postreImages.map(img => `
        <div class="postre-card">
            <img src="images/postres/${img}" alt="Postre">
        </div>
    `).join("");

    postres.innerHTML = postresHTML;
}

//map
const map = L.map('map').setView([13.692572, -88.942970], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([13.692572, -88.942970])
    .addTo(map)
    .bindPopup('DeliMundo')
    .openPopup();