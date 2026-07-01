const pasteles = document.querySelector('.pasteles');

const cakeImages = [
    "cakemama.jpg",
    "plantas.jpg",
    "tresleches.jpg",
]

const cakesHTML = cakeImages.map((img) => {
    return `
        <div class="pastel-card">
            <img src="images/cakes/${img}" alt="Pastel">
        </div>
    `
})
.join('');

pasteles.innerHTML = cakesHTML;
