const bgMusic = document.getElementById("bgMusic");

window.addEventListener("load", () => {
    bgMusic.play().catch(() => {
        // If autoplay is blocked, wait for user gesture
        document.body.addEventListener("click", () => {
            bgMusic.play();
        }, { once: true });
    });
});
