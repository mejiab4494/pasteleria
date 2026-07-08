const pasteles = document.querySelector(".pasteles");
const postres = document.querySelector(".postres");

const cakeImages = [
    "cakemama.jpg",
    "plantas.jpg",
    "tresLeches.jpg",
    "pasteles1.jpg",
    "pasteles2.jpg",
    "pasteles3.jpg",
];

const postreImages = [
    "cheesecake.jpg",
    "chocoflan.jpg",
    "cupbakes.jpg",
];

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