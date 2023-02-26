/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* about carousel slider swiper */

const Aboutswiper = new Swiper('.swiper-container-about', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-about'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    mousewheel: true,
    keyboard: true,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        setWrapperSize: true,
        loop: true
      }
    }
  })


/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #services header, #services .card,
  #cardapio .cardapio-obs , #cardapio .cup-img,
  #trabalho .galley__item ,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
const cardapio = document.getElementById('cardapio')

function backToTop() {
  if (window.pageYOffset >= cardapio.offsetTop) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

function openCardapio() {
    const cardapio = document.getElementById('#cardapio')
    const indice = document.querySelector('.cardapio-filter')
    const indiceBack = document.querySelector('.cardapio-back')
    const milkShake = document.querySelector('.cardapio-milkshake')
    const tacaFelicidade = document.querySelector('.cardapio-taca-felicidade')
    const tacaGourmet = document.querySelector('.cardapio-taca-gourmet')
    const bebidaQuente = document.querySelector('.cardapio-bebida-quente')
    const premium = document.querySelector('.cardapio-premium')
    const sodaItaliana = document.querySelector('.cardapio-soda-italiana')
    const diversos = document.querySelector('.cardapio-diversos')
    const caseirinho = document.querySelector('.cardapio-caserinho')
    const copoFelicidade = document.querySelector('.cardapio-copo-felicidade')
    const boloPote = document.querySelector('.cardapio-bolo-pote')
    const bebida = document.querySelector('.cardapio-bebida')
    const familia = document.querySelector('.cardapio-toda-familia')
    const acai = document.querySelector('.cardapio-acai')
    const boloTradicional = document.querySelector('.cardapio-bolo-tradicional')
    const boloEspecial = document.querySelector('.cardapio-bolo-especial')
    const boloPremium = document.querySelector('.cardapio-bolo-premium')
    const boloBento = document.querySelector('.cardapio-bolo-bento')
    const docinho = document.querySelector('.cardapio-docinhos')
    const salgado = document.querySelector('.cardapio-salgados')

    const optionBox = document.querySelector('.cardapio-option-box')
    const delivery = document.querySelector('.cardapio-option-delivery')
    const local = document.querySelector('.cardapio-option-local')
    const boloDecorado = document.querySelector('.cardapio-option-bolo')
    const optionBack = document.querySelector('.cardapio-option-back')

    const btnMilkShake = document.querySelector('.btn-milkshake')
    const btnTacaFelicidade = document.querySelector('.btn-taca-felicidade')
    const btnTacaGourmet = document.querySelector('.btn-taca-gourmet')
    const btnBebidaQuente = document.querySelector('.btn-bebida-quente')
    const btnPremium = document.querySelector('.btn-premium')
    const btnSodaItaliana = document.querySelector('.btn-soda-italiana')
    const btnDiversos = document.querySelector('.btn-diversos')
    const btnaCaseirinho = document.querySelector('.btn-bolo-caseirinho')
    const btnCopoFelicidade = document.querySelector('.btn-copos-felicidade')
    const btnBoloPote = document.querySelector('.btn-bolo-pote')
    const btnBebida = document.querySelector('.btn-bebidas')
    const btnFamilia = document.querySelector('.btn-toda-familia')
    const btnAcai = document.querySelector('.btn-acai')
    const btnTradicional = document.querySelector('.btn-tradicional')
    const btnEspecial = document.querySelector('.btn-especial')
    const btnBoloPremium = document.querySelector('.btn-bolo-premium')
    const btnBento = document.querySelector('.btn-bento')
    const btnSalgado = document.querySelector('.btn-salgados')
    const btnDocinho = document.querySelector('.btn-docinhos')

    delivery.addEventListener('click' , () => {
        if (window.screen.width < 1200) {
            optionBack.classList.add('active')
            local.classList.add('hidden')
            boloDecorado.classList.add('hidden')
        }


        btnAcai.classList.add('active')
        btnDiversos.classList.add('active')
        btnaCaseirinho.classList.add('active')
        btnCopoFelicidade.classList.add('active')
        btnPremium.classList.add('active')
        btnBoloPote.classList.add('active')
        btnFamilia.classList.add('active')
        btnBebida.classList.add('active')
        btnSalgado.classList.add('active')
        btnDocinho.classList.add('active')

        btnMilkShake.classList.remove('active')
        btnTacaFelicidade.classList.remove('active')
        btnTacaGourmet.classList.remove('active')
        btnBebidaQuente.classList.remove('active')
        btnSodaItaliana.classList.remove('active')
        btnTradicional.classList.remove('active')
        btnEspecial.classList.remove('active')
        btnBoloPremium.classList.remove('active')
        btnBento.classList.remove('active')

    })

    local.addEventListener('click', () => {
        if (window.screen.width < 1200) {
            optionBack.classList.add('active')
            boloDecorado.classList.add('hidden')
            delivery.classList.add('hidden')
        }


        btnMilkShake.classList.add('active')
        btnTacaFelicidade.classList.add('active')
        btnTacaGourmet.classList.add('active')
        btnBebidaQuente.classList.add('active')
        btnPremium.classList.add('active')
        btnSodaItaliana.classList.add('active')
        btnDiversos.classList.add('active')
        btnCopoFelicidade.classList.add('active')
        btnaCaseirinho.classList.add('active')
        btnAcai.classList.add('active')
        btnFamilia.classList.add('active')
        btnSalgado.classList.add('active')
        btnDocinho.classList.add('active')

        btnBoloPote.classList.remove('active')
        btnBebida.classList.remove('active')
        btnTradicional.classList.remove('active')
        btnEspecial.classList.remove('active')
        btnBoloPremium.classList.remove('active')
        btnBento.classList.remove('active')

    })

    boloDecorado.addEventListener('click', () => {
        if (window.screen.width < 1200) {
            optionBack.classList.add('active')
            local.classList.add('hidden')
            delivery.classList.add('hidden')
        }

        btnTradicional.classList.add('active')
        btnEspecial.classList.add('active')
        btnBoloPremium.classList.add('active')
        btnBento.classList.add('active')
        btnMilkShake.classList.remove('active')
        btnTacaFelicidade.classList.remove('active')
        btnTacaGourmet.classList.remove('active')
        btnBebidaQuente.classList.remove('active')
        btnPremium.classList.remove('active')
        btnSodaItaliana.classList.remove('active')
        btnDiversos.classList.remove('active')
        btnCopoFelicidade.classList.remove('active')
        btnaCaseirinho.classList.remove('active')
        btnAcai.classList.remove('active')
        btnFamilia.classList.remove('active')
        btnBoloPote.classList.remove('active')
        btnBebida.classList.remove('active')
        btnSalgado.classList.remove('active')
        btnDocinho.classList.remove('active')
        
    })

    optionBack.addEventListener('click', () => {
        optionBack.classList.remove('active')
        delivery.classList.remove('hidden')
        local.classList.remove('hidden')
        boloDecorado.classList.remove('hidden')

        btnAcai.classList.remove('active')
        btnDiversos.classList.remove('active')
        btnaCaseirinho.classList.remove('active')
        btnCopoFelicidade.classList.remove('active')
        btnPremium.classList.remove('active')
        btnBoloPote.classList.remove('active')
        btnFamilia.classList.remove('active')
        btnBebida.classList.remove('active')
        btnMilkShake.classList.remove('active')
        btnTacaFelicidade.classList.remove('active')
        btnTacaGourmet.classList.remove('active')
        btnBebidaQuente.classList.remove('active')
        btnSodaItaliana.classList.remove('active')
    })

    


    indiceBack.addEventListener('click', () => {
        optionBox.classList.remove('active')
        indice.classList.remove('active')
        indiceBack.classList.remove('active')
        milkShake.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        bebidaQuente.classList.remove('active')
        premium.classList.remove('active')
        sodaItaliana.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
        boloTradicional.classList.remove('active')
        boloEspecial.classList.remove('active')
        boloPremium.classList.remove('active')
        boloBento.classList.remove('active')
        salgado.classList.remove('active')
        docinho.classList.remove('active')
    })


    btnMilkShake.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        milkShake.classList.add('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        bebidaQuente.classList.remove('active')
        premium.classList.remove('active')
        sodaItaliana.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnTacaGourmet.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        tacaGourmet.classList.add('active')
        milkShake.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        bebidaQuente.classList.remove('active')
        premium.classList.remove('active')
        sodaItaliana.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnTacaFelicidade.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        tacaFelicidade.classList.add('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        bebidaQuente.classList.remove('active')
        premium.classList.remove('active')
        sodaItaliana.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnBebidaQuente.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        bebidaQuente.classList.add('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        premium.classList.remove('active')
        sodaItaliana.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnPremium.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        premium.classList.add('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        sodaItaliana.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnSodaItaliana.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        sodaItaliana.classList.add('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        diversos.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnDiversos.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        diversos.classList.add('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        caseirinho.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnaCaseirinho.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        caseirinho.classList.add('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnCopoFelicidade.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        copoFelicidade.classList.add('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        boloPote.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnBoloPote.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        boloPote.classList.add('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        bebida.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnBebida.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        bebida.classList.add('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        familia.classList.remove('active')
        acai.classList.remove('active')
    })

    btnFamilia.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        familia.classList.add('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
        acai.classList.remove('active')
    })

    btnAcai.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        acai.classList.add('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })

    btnTradicional.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        boloTradicional.classList.add('active')
        boloEspecial.classList.remove('active')
        boloPremium.classList.remove('active')
        boloBento.classList.remove('active')
        acai.classList.remove('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })

    btnEspecial.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        boloEspecial.classList.add('active')
        boloTradicional.classList.remove('active')
        boloPremium.classList.remove('active')
        boloBento.classList.remove('active')
        acai.classList.remove('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })

    btnBoloPremium.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        boloPremium.classList.add('active')
        boloEspecial.classList.remove('active')
        boloTradicional.classList.remove('active')
        boloBento.classList.remove('active')
        acai.classList.remove('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })

    btnBento.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        boloBento.classList.add('active')
        boloPremium.classList.remove('active')
        boloEspecial.classList.remove('active')
        boloTradicional.classList.remove('active')
        acai.classList.remove('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })

    btnSalgado.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        salgado.classList.add('active')

        boloBento.classList.remove('active')
        docinho.classList.remove('active')
        boloPremium.classList.remove('active')
        boloEspecial.classList.remove('active')
        boloTradicional.classList.remove('active')
        acai.classList.remove('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })

    btnDocinho.addEventListener('click', () => {
        optionBox.classList.add('active')
        indice.classList.add('active')
        indiceBack.classList.add('active')
        docinho.classList.add('active')

        salgado.classList.remove('active')
        boloBento.classList.remove('active')
        boloPremium.classList.remove('active')
        boloEspecial.classList.remove('active')
        boloTradicional.classList.remove('active')
        acai.classList.remove('active')
        familia.classList.remove('active')
        bebida.classList.remove('active')
        boloPote.classList.remove('active')
        copoFelicidade.classList.remove('active') 
        caseirinho.classList.remove('active')
        diversos.classList.remove('active')
        sodaItaliana.classList.remove('active')
        premium.classList.remove('active')
        bebidaQuente.classList.remove('active')
        tacaFelicidade.classList.remove('active')
        tacaGourmet.classList.remove('active')
        milkShake.classList.remove('active')
    })
}




openCardapio()



