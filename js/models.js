document.addEventListener('DOMContentLoaded', () =>{
    const models = document.querySelector('.models');
    const hombre = document.querySelector('#hombre_coffee');
    const mujer = document.querySelector('#mujer_coffee');
    window.addEventListener('scroll', function(){
        prevy = this.window.scrollY;
        console.log(this.window.scrollY)
        if(this.window.screenX <= 800){
            if(this.window.scrollY >= 130){
                hombre.style.left = '50px';
                hombre.style.opacity = 1;
                mujer.style.filter = 'none';
                
            }
            else if(this.window.scrollY < 130){
                hombre.style.left = 0;
                hombre.style.opacity = 0;
                mujer.style.filter = 'blur(10px)';
            }
        }
        else{
            if(this.window.scrollY >= 900){
                hombre.style.left = '50px';
                hombre.style.opacity = 1;
                mujer.style.filter = 'none';
                
            }
            else if(this.window.scrollY < 900){
                hombre.style.left = 0;
                hombre.style.opacity = 0;
                mujer.style.filter = 'blur(10px)';
            }  
        }
    });
});