const audio = document.getElementById("myAudio");
const container = document.querySelector(".audio-container");

container.addEventListener("mouseenter", () => {
    audio.play();
});

container.addEventListener("mouseleave", () => {
    audio.pause();
});