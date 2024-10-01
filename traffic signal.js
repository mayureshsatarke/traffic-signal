const lights = {
    red: document.getElementById('red'),
    yellow: document.getElementById('yellow'),
    green: document.getElementById('green')
};

let currentLight = 'red';

function changeLight() {
    // Turn off all lights
    for (let light in lights) {
        lights[light].classList.remove('active');
    }

    // Change to the next light
    if (currentLight === 'red') {
        lights.red.classList.add('active');
        currentLight = 'green';
    } else if (currentLight === 'green') {
        lights.green.classList.add('active');
        currentLight = 'yellow';
    } else if (currentLight === 'yellow') {
        lights.yellow.classList.add('active');
        currentLight = 'red';
    }
}

// Change lights every 3 seconds
setInterval(changeLight, 3000);
changeLight(); // Start with the initial light
