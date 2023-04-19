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
