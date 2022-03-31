const modal = document.querySelector("#image-modal");
const modalCloseButton = document.querySelector("#image-modal .close-button");
const modalImage = document.querySelector('#modal-image');
const cards = document.querySelectorAll('.card');


modalCloseButton.addEventListener("click", () => {
    modal.classList.add('hidden');
});

cards.forEach(card=> {
    card.addEventListener('click', () => {
        let imgSrc = card.querySelector('img').src;
        modalImage.src = imgSrc.replace('/thumbnails/', '/fullsize/');
        modal.classList.remove('hidden');
    });
})