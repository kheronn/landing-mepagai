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

function botaoLerMais(){
    let conteudoArtigoProjeto = document.getElementById('conteudoArtigoProjeto')
    let botaoLerMais = document.getElementById('bntLerMais') 
    if(conteudoArtigoProjeto.style.height == '384px'){
        conteudoArtigoProjeto.style.height = 'auto'
        conteudoArtigoProjeto.classList.remove('from-stone-50')
        botaoLerMais.textContent = 'Ler menos'

    }
    else{
        conteudoArtigoProjeto.style.height = '384px'
        conteudoArtigoProjeto.classList.add('from-stone-50')
        botaoLerMais.textContent = 'Ler mais'
    }
};
window.addEventListener('scroll', function() {

    // VARIÁVEIS GLOBAIS
    var mainHtml = document.getElementById('mainHtml')
    var screenHeight = window.innerHeight
    var posicaoAnimacao = screenHeight * 0.7
    
    // ANIMAÇÃO DA SEÇÃO PROJETO
    var sectionProjeto = document.getElementById('projeto')
    var sectionProjetoTopo = sectionProjeto.getBoundingClientRect().top
    var cardProjeto = this.document.getElementById('cardProjeto')

     if (sectionProjetoTopo < posicaoAnimacao) {
        mainHtml.classList.add('bg-stone-300');
        cardProjeto.classList.add('animate__fadeInLeft')
        cardProjeto.classList.add('animate__animated')
        mainHtml.classList.add('transition-colors')
        mainHtml.classList.add('duration-700')
        cardProjeto.classList.remove('opacity-0')
    } 
    else {
        mainHtml.classList.remove('bg-stone-300');
        cardProjeto.classList.remove('animate__fadeInLeft')
        cardProjeto.classList.remove('animate__animated')
        cardProjeto.classList.add('opacity-0')
    }   

      //ANIMAÇÃO DA SEÇÃO COMO FUNCIONA

});
