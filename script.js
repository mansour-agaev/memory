document.addEventListener("DOMContentLoaded", () => {
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let score = 0;

    const cards = document.querySelectorAll(".card");
    const scoreDisplay = document.getElementById("score");

    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.classList.add("flipped");

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            checkForMatch();
        }
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.cardValue === secondCard.dataset.cardValue;

        if (isMatch) {
            disableCards();
            updateScore(10);  // Add points for a correct match
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetBoard();
        }, 1000);
    }

    function updateScore(points) {
        score += points;
        scoreDisplay.textContent = score;
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    cards.forEach(card => card.addEventListener("click", flipCard));
});



