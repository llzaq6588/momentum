const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jfif",
    "4.jfif",
    "5.jfif",
    "6.jfif"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgimg";

document.body.appendChild(bgImage);
