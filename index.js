// function menuResponsivo(){
//   const header = document.getElementById('header')
//     if (header.style.display == 'block'){
//         header.style.display = 'none'
//         document.getElementById('menuimg').src = "/src/assets/img/menu.svg" 
//     }
//     else{
//         header.style.display = 'block'
//         mobilebnt.style.display = 'block'
//         document.getElementById('menuimg').src = "src\assets\img\close.svg"
//     }
//     }

  function modeDark() {

    let elemento = document.getElementById("htmldark");
    let botao = document.getElementById("dark_mode");
    let botaolight = document.getElementById("light_mode");
  
    elemento.classList.toggle("dark");
  };
  const darkModeButton = document.getElementById('darkModeButton');
  const body = document.body;

  darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    darkModeButton.innerHTML = `<span class="material-symbols-outlined">${isDarkMode ? 'light_mode' : 'light_mode'}</span>${buttonText}`;
  });
 