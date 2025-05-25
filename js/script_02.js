// Generate stars
const starContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starContainer.appendChild(star);
}

// Show moon and stars after 6 seconds
setTimeout(() => {
    document.getElementById('moon').classList.add('show');
    document.getElementById('stars').classList.add('show');
}, 6000);

// Show the button and make it clickable
setTimeout(() => {
    const btn = document.getElementById('delayedButton');
    btn.style.display = 'inline-block';
    btn.disabled = false;
    btn.addEventListener('click', () => {
        window.location.href = 'ending.html';
    });
}, 6100);

// Enable background music on user interaction
const bgMusic = document.getElementById("bgMusic");
document.addEventListener("click", () => {
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(() => { /* fail silently */ });
    }
});
