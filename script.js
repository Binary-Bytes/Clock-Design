let clock = () => {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = 'AM'

    if (h >= 12) {
        h -= 12;
        am = 'PM';
    }

    if (h.toString().length < 2) {
        h = `0${h}`;
    }
    if (m.toString().length < 2) {
        m = `0${m}`;
    }
    if (s.toString().length < 2) {
        s = `0${s}`;
    }

    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    ampm.innerText = am;
}

let interval = setInterval(clock, 1000);

const clockE = document.querySelector('.clock');
clockE.addEventListener('animationend', () => {
    if (clockE.classList.contains('animate__backInUp') != true) return;

    clockE.classList.remove('animate__backInUp');
    clockE.classList.add('animate__tada');
});

const hovered = (element) => {
    if (element.classList.contains('animate__tada') == true) element.classList.remove('animate__tada');

    element.classList.add('animate__wobble');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__wobble');
    });
}