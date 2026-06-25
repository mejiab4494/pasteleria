const pasteles = document.querySelector('.pasteles');

const cakeImages = [
    "cake1.jpg",
    "cake2.jpg",
    "cake3.jpg",
    "cake4.jpg",
    "cake5.jpg",
    "cake6.jpg",
    "cake7.jpg",
    "cake8.jpg",
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
