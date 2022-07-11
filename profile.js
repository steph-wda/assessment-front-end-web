let colorBtn = document.getElementById('color');
let placeBtn = document.getElementById('place');
let ritualBtn = document.getElementById('ritual');

const showColor = evt => {
    alert('Purple');
}

const showPlace = evt => {
    alert('Detroit International RiverWalk');
}

const showRitual = evt => {
    alert('Friday viewing of new episode of The Boys on Amazon Prime');
}

colorBtn.addEventListener('click',showColor);
placeBtn.addEventListener('click', showPlace);
ritualBtn.addEventListener('click', showRitual);
