const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, segundCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    segundCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath () {
    if(firstCard.dataset.card === segundCard.dataset.card){
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards () {
    firstCard.removeEventListener('click', flipCard);
    segundCard.removeEventListener('click', flipCard)
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        segundCard.classList.remove('flip');
    }, 1500);
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

