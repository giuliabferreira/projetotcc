/* MOSTRAR MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // ADICIONA A CLASSE SHOW-MENU PARA A NAVEGAÇÃO MENU
    nav.classList.toggle("show-menu");

    // ADICIONA SHOW-ICON PARA APARECR E ESCONDER O ÍCONE DO MENU
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");


/* MOSTRAR DROPDOWN MENU */

const dropdownItems = document.querySelectorAll('.dropdown__item')


// 1. SELECIONAR CADA ITEM DO DROPDOWN

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button')

  // 2. SELECIONAR CADA CLICK DO BUTTON
  
  dropdownButton.addEventListener('click', () => {
    // 7. SELECIONAR A ATUAL CLASSE SHOW-DROPDOWN
    const showDropdown = document.querySelector('.show-dropdown')

    // 5. CHAMAR A FUNÇÃO TOGGLEITEM
    toggleItem(item)

    // 8. REMOVER A CLASSE SHOW-DROPDOWN PARA OS OUTROS ITENS
    if(showDropdown && showDropdown!= item) {
      toggleItem(showDropdown)
    }
  })
})


// 3. CRIAR UMA FUNÇÃO PARA O DROPDOWN ABAIXAR

const toggleItem = (item) => {
  // 3.1. SELECIONAR CADA CONTEÚDO DO DROPDOWN
  const dropdownContainer = item.querySelector('.dropdown__container')

  // 6. SE O MESMO ITEM CONTER A CLASSE SHOW-DROPDOWN, REMOVER
  if(item.classList.contains('show-dropdown')) {
    dropdownContainer.removeAttribute('style')
    item.classList.remove('show-dropdown')

  } else {
    // 4. ADICIONAR O MÁXIMO DE TAMANHO NO CONTEÚDO DO DROPDOWN E ADICIONAR O SHOW-DROPDOWN
  dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
  item.classList.add('show-dropdown')
  }
}

/* DELETAR OS ESTILOS DO DROPDOWN */

const mediaQuery = matchMedia('(min-width: 1024px)'),
  dropdownContainer = document.querySelectorAll('.dropdown__container')


// FUNÇÃO DE REMOVER O ESTILO DO DROPDOWN NO MOBILE QUANDO O BROWSER SE REALINHAR
const removeStyle = () => {
  // VALIDAR SE A MEDIA QUERY ALCANÇAR 1118PX
  if(mediaQuery.matches) {
    // REMOVER O TAMANHO E ESTILO DO CONTAINER DROPDOWN 
    dropdownContainer.forEach((e) => {
      e.removeAttribute('style')
    })

    // REMOVER A CLASSE SHOW-DROPDOWN PARA ITENS DROPDOWN
    dropdownItems.forEach((e) => {
      e.classList.remove('show-dropdown')
    })
  }
}

addEventListener('resize', removeStyle)
