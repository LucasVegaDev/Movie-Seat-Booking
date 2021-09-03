
// DOM ACCESS
// MOVIE SELECTOR
const select = document.querySelector('.select');
const movie = document.querySelector('.movie');

// SEAT BOOKING SECTION
const seatsContainer = document.querySelector('.seatsContainer');
const firstSeatRow = document.querySelector('.firstRow');
const secondSeatRow = document.querySelector('.secondRow');
const thirdSeatRow = document.querySelector('.thirdRow');
const fourthSeatRow = document.querySelector('.fourthRow');
const fifthSeatRow = document.querySelector('.fifthRow');
const lastSeatRow = document.querySelector('.lastRow');
const seat = document.querySelectorAll('.seat');
let moviePrice = select.value;

// FUNCTIONS
// SELECTED SEATS AND TOTAL PRICE COUNTER
function Counter () {
    const total = document.querySelector('.total')
    const count = document.querySelector('.count')
    const selectedSeat = document.querySelectorAll('.row .seat.selected');    
    
    const selectedSeatsCounter = selectedSeat.length;
    count.innerHTML = selectedSeatsCounter
    total.innerHTML = selectedSeatsCounter * moviePrice;
}

// EVENTS

// SELECT AND CHANGE MOVIE EVENT
select.addEventListener('change', (e) => {
    moviePrice = e.target.value;
    Counter()
})

// SELECT SEATS EVENT
seatsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')    
        Counter()
    }
})
