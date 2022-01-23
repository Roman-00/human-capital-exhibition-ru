/**
 * * Мобильное меню
 */
const tooggleMenu = () => {
  /**
   * * Функционал открытия меню
   */
  const menu = document.querySelector(".mobile-menu");

  document.body.addEventListener("click", (event) => {
    let target = event.target;

    if (target && target.closest(".top-bar__menu")) {
      menu.classList.add("mobile-menu--active");
    } else if (target.classList.contains("mobile-menu__block-close")) {
      menu.classList.remove("mobile-menu--active");
    } else {
      target = target.closest(".mobile-menu__block");

      if (!target) {
        menu.classList.remove("mobile-menu--active");
      }
    }
  });

  /**
   * * Открытие доп меню в мобильном меню
   */
  const menuItem = document.getElementsByClassName("menu-item");
  const menuListItem = document.querySelectorAll(
    ".mobile-menu__list .menu-item"
  );

  menuListItem.forEach((item) => {
    if (item.childElementCount >= 2) {
      item.classList.add("menu-item-dop");
    }
  });

  /**
   * * Перебираем все блоки
   */
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", toogleSubMenu, false);
  }

  /**
   * * Показываем / Скрываем меню при клике
   *
   * @type event {Click}
   */
  function toogleSubMenu(event) {
    if (this.children.length > 1) {
      this.children[1].classList.toggle("sub-menu--active");
    }
  }
};

export default tooggleMenu;