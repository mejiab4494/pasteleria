const fs = require("fs");

const files = fs.readdirSync("images/postres")
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

console.log(JSON.stringify(files, null, 4));