document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const threshold = 40;

    document.addEventListener('mousemove', (e) => {
        const rect = noButton.getBoundingClientRect();
        const distance = getDistance(e.clientX, e.clientY, rect.left + rect.width / 2, rect.top + rect.height / 2);

        if (distance < threshold) {
            moveButtonRandomly(noButton);
        }
    });
});

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function moveButtonRandomly(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function showGif() {
    window.location.href = "yes.html";
}
