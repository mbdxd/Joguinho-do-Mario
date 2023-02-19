const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipeposition = pipe.offsetleft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipeposition}px';

        pipe.style.animation = 'none';
        pipe.style.bottom = '${pipeposition}px';

        mario.src = './images/game-over.png'
        mario.style.width = '80px'
        mario.style.marginleft = '50px'
    }

}, 10 );

document.addEventListener('keydown', jump)

