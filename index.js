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