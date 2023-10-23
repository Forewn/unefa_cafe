document.addEventListener('DOMContentLoaded', () => {
    let deployed = false;
    const btn = document.getElementById('menu_button');
    btn.addEventListener('click', () => {
        const menu = document.getElementById('menu_mobile');
        if(!deployed){
            menu.setAttribute('style', 'display:block');
            deployed = true;
        }
        else{
            menu.setAttribute('style', 'display:none;');
            deployed = false
        }
    });
});