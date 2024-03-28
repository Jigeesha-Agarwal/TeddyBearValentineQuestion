const teddyBear = document.getElementById('teddyBear');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');

const teddyBearImages = [
    'https://via.placeholder.com/200/FF0000',
    'https://via.placeholder.com/200/00FF00',
    'https://via.placeholder.com/200/0000FF'
];

let currentImageIndex = 0;

yesButton.addEventListener('click', () => {
    changeTeddyBearImage();
    question.innerText = "Thank you for choosing me!!";
    yesButton.remove();
    noButton.remove();
});

noButton.addEventListener('click', () => {
    increaseButtonSize();
});

function changeTeddyBearImage() {
    currentImageIndex = (currentImageIndex + 1) % teddyBearImages.length;
    teddyBear.src = teddyBearImages[currentImageIndex];
}

function increaseButtonSize() {
    yesButton.style.fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) * 2 + 'px';
}