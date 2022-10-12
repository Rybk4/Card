 
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let cout=0;
let lockBoard = false;
let lb = document.createElement('label');
document.body.append(lb);
 
 
function flipCard() {
    this.classList.add('flip');

    if (lockBoard) return;
    this.classList.add('flip');

    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        cout++;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
    lb.textContent = eval(cout);
    console.log(cout);

}

function checkForMatch() {
    if (firstCard.dataset.framework === 
        secondCard.dataset.framework) {
            disableCards();
            return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 400)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;

    });
}) ();

cards.forEach(card => card.addEventListener('click', flipCard));

 function restart(){
    location.reload()
 }