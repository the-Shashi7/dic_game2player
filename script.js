console.log('testing........');

const player0El = document.querySelector('.palyer--0');
const player1El = document.querySelector('.palyer--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');

score0El.textContent = 0;
score1El.textContent = 0;
document.querySelector('.dice').classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click',function () {
    const  dice = Math.trunc(Math.random()*6+1);
    document.querySelector(`#score--${activePlayer}`).textContent = dice;
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector('.dice').src =  `dice${dice}.jpg`;

    if (dice !== 1) {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{
        document.querySelector(`.player--0`).classList.toggle('player--active');
        document.querySelector(`.player--1`).classList.toggle('player--active');
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
}); 
btnRoll.addEventListener('click',function () {
    document.querySelector('.audio').play();
})

btnNew.addEventListener('click',function () {
    location.reload();
})