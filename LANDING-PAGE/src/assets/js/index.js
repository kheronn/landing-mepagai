function menuResponsivo(){
    if (menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none'
        document.getElementById('menuimg').src = "/src/assets/img/menu.svg" 
    }
    else{
        menuMobile.style.display = 'block'
        mobilebnt.style.display = 'block'
        document.getElementById('menuimg').src = "src\assets\img\close.svg"
    }
}
let elemento = document.getElementById("htmldark");
  let botao = document.getElementById("dark_mode");
  botao.addEventListener("click", function() {
    elemento.classList.toggle("dark");
  });
  if{
    elemento.classList == ("dark"){
        document.getElementById('dark_mode'){
            dark_mode.style.display = 'none'
        }

    }
  }
  