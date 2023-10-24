document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video_banner');
    video.addEventListener('click', () => {
        video.muted = !video.muted;
        console.log("Volumen: " + video.muted);
    });

    window.addEventListener('scroll', function(){
        let value;
        if(this.window.screen.width >= 800){
            value = 1 + this.window.scrollY / -850;
        }
        else{
            value = 1 + this.window.scrollY / -300;
        }
        video.style.opacity = value;
    });
});
