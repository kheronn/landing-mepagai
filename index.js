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
    
   const showTextLink = document.getElementById('show-text-link');
   const hiddenText = document.getElementById('hidden-text');

   showTextLink.addEventListener('click', (event) => {
       event.preventDefault(); // Impede que o link seja seguido
       hiddenText.style.display = 'block'; // Torna o texto visível
   }); 

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

