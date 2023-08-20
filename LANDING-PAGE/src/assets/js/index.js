function menuResponsivo(){
    if (menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none'
        document.getElementById('menuimg').src = "/src/assets/img/menu.svg"
        
        
    }
    else{
        menuMobile.style.display = 'block'
        mobilebnt.style.display = 'block'
        document.getElementById('menuimg').src = "/src/assets/img/close.svg" 
    }
}