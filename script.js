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
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    // Toggle search input visibility
    searchIcon.addEventListener('click', function() {
        searchInput.classList.toggle('show');
        if (searchInput.classList.contains('show')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            cards.forEach(card => card.style.display = 'block');
        }
    });

    // Filter cards live as user types
    searchInput.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        cards.forEach(function(card) {
            const title = card.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    // Toggle search input visibility
    searchIcon.addEventListener('click', function() {
        searchInput.classList.toggle('show');
        if (searchInput.classList.contains('show')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
            cards.forEach(card => card.style.display = 'block');
        }
    });

    // Filter cards live as user types
    searchInput.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        cards.forEach(function(card) {
            const title = card.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


