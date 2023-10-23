document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video_banner');
    video.addEventListener('click', () => {
        video.muted = !video.muted;
        console.log("Volumen: " + video.muted);
    });
});
