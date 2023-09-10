function menuResponsivo(){
    const close = document.getElementById('close')
    const menu = document.getElementById('menu')
    const menuMobile = document.getElementById('menuMobile')
    
    if (menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none'
        close.style.display = 'none'
        menu.style.display = 'block'
    }
    else{
        menuMobile.style.display = 'block'
        close.style.display = 'block'
        menu.style.display = 'none'    
    }
}