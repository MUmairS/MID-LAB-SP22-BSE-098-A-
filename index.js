let remaning = document.getElementById('remained');
let percentage = document.getElementById('percentage');
let liters = document.getElementById('liters');
let miniCups = document.querySelectorAll('.cup-small');

miniCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => Slect(idx));
});

function Slect(idx) {
    if (idx === 7 && miniCups[idx].classList.contains("full")) {
        idx--;
    } else if (miniCups[idx].classList.contains('full') && !miniCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    miniCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    ChangeMastercup();
}

function ChangeMastercup() {
    let filledCups = document.querySelectorAll('.cup-small.full').length;
    let complete = miniCups.length;

    if (filledCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${filledCups / complete * 330}px`;
        percentage.innerText = `${filledCups / complete * 100}%`;
    }

    if (filledCups === complete) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * filledCups / 1000)}L`;
    }
}
