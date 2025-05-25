window.addEventListener("load", () => {
    const audio = document.getElementById("background-music");
    audio.play().catch(() => {
        document.addEventListener("click", () => audio.play(), { once: true });
    });
});
