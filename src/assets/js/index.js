function menuResponsivo(){
  const header = document.getElementById('header')
    if (header.style.display == 'block'){
        header.style.display = 'none'
        document.getElementById('menuimg').src = "/src/assets/img/menu.svg" 
    }
    else{
        header.style.display = 'block'
        mobilebnt.style.display = 'block'
        document.getElementById('menuimg').src = "src\assets\img\close.svg"
    }
    }

  function modeDark() {

    let elemento = document.getElementById("htmldark");
    let botao = document.getElementById("dark_mode");
    let botaolight = document.getElementById("light_mode");
  
    elemento.classList.toggle("dark");
  };

function projeto(){
  const indexmain = document.getElementById('indexMain');
  const projeomain = document.getElementById('indexMain');
  

  indexmain.style.display = 'none'

}

  