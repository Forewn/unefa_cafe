document.addEventListener('DOMContentLoaded', () => {
    let deployed = false;
    const btn = document.getElementById('menu_button');
    btn.addEventListener('click', () => {
        const menu = document.getElementById('menu_mobile');
        const main = document.querySelector('main');
        if(!deployed){
            menu.style.display = 'block';
            main.style.marginTop = 0;
            deployed = true;
        }
        else{
            menu.style.display = 'none';
            main.style.marginTop = '40px';
            deployed = false
        }
    });
});