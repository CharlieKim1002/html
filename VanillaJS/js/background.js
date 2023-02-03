const images = ["seoul01.jpg", "seoul02.jpg", "seoul03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `source/img/${chosenImage}`;
bgImage.style.width = '100%';
bgImage.style.height = '100vh';
bgImage.style.margin = '0';
bgImage.style.all = '0';
document.body.appendChild(bgImage);