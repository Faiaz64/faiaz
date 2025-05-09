document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.btn');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const gameTitle = this.parentElement.querySelector('h3').innerText;
            alert(`Thank you for choosing to buy ${gameTitle}!`);

            // Add animation effect to the card
            const card = this.closest('.card');
            card.classList.add('highlight');

            setTimeout(() => {
                card.classList.remove('highlight');
            }, 1000);
        });
    });
});
