const seats = document.querySelectorAll('.seat');
const selectSeatsButton = document.querySelector('button[type="button"]');
const clearSelectionButton = document.querySelector('button[type="clear"]');

let selectedSeats = [];

selectSeatsButton.addEventListener('click', () => {
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('available')) {
                seat.classList.remove('available');
                seat.classList.add('selected');

                selectedSeats.push(seat);
            }
        });
    });
});

clearSelectionButton.addEventListener('click', () => {
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('available');
    });

    selectedSeats = [];
});
