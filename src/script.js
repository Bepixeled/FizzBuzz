const input = document.getElementById('input');
const play = document.getElementById('play');
const output = document.getElementById('output');

const fizzBuzz = () => {
    const value = input.value;
    if(value % 15 === 0) {
        output.innerHTML = 'FizzBuzz';
    } else if(value % 3 === 0) {
        output.innerHTML = 'Fizz';
    } else if(value % 5 === 0) {
        output.innerHTML = 'Buzz';
    } else {
        output.innerHTML = 'It\'s not fizzing or buzzing';
    }
};

play.addEventListener('click', fizzBuzz);

