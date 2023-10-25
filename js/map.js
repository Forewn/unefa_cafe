document.addEventListener('DOMContentLoaded', () =>{
    const button = document.getElementById('button');
    const map = document.querySelector('.map');
    let opened = false;
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if(!opened){
            map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!4v1698216273927!6m8!1m7!1sCAoSLEFGMVFpcFB3QW9LcmJNeGQwOWFJcEkweG9LbXdzZ2pVM0NrU0w0NUpGblBu!2m2!1d7.7837858!2d-72.2013666!3f92.4669850833713!4f-14.515915635544047!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            const iframe = document.querySelector('map>iframe');
            opened = true;
        }
        else{
            map.innerHTML = "";
            opened = false;
        }
    });
});


