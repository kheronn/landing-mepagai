//CONFIGURAÇÕES DO TAILWIND
tailwind.config = {
    darkMode: 'class',
    theme: {
        screens: {
            'phone': '640px',           
            'phone-2': '785px',
            'nav': '1070px',
            'computer': '1280px',
        },
        extend: {
            colors: {
            }
        }
    }
}
function menuResponsivo(){
    const close = document.getElementById('close')
    const menu = document.getElementById('menu')
    const menuMobile = document.getElementById('menuMobile')

    if(menuMobile.style.left == '0vh'){
        menuMobile.style.left ='-150vh'
        close.style.display = 'none'
        menu.style.display = 'block'

    }
   else{
    menuMobile.style.left = '0vh'
    close.style.display = 'block'
    menu.style.display = 'none'
    
   }
    
    
    // if (menuMobile.style.display == 'block'){
    //     menuMobile.style.display = 'none'
    //     close.style.display = 'none'
    //     menu.style.display = 'block'
    // }
    // else{
    //     menuMobile.style.display = 'block'
    //     close.style.display = 'block'
    //     menu.style.display = 'none'    
    // }
}

