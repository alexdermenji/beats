////// #MODAL MENU
(function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const modalMenu = document.querySelector(".modal");
  const body = document.body;
  const hamburgerBtnClose = document.getElementById("modalMenuClose");
  const menuLinks = document.querySelectorAll(".menu__link");
  const scrollLinks = document.querySelectorAll(".scroll__item");

  /// scroll
  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      scrollLinks.forEach((el) => {
        el.classList.remove("scroll__item--active");
      });
      link.classList.add("scroll__item--active");
      e.preventDefault();
      const dataValue = e.target.dataset.scrollTo;
      scrollToSection(dataValue);
    });
  });

  ///menu -links
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const dataValue = e.target.dataset.scrollTo;
      scrollToSection(dataValue);
      const scrollBtn = document.querySelector(
        `[data-scroll-to='${dataValue}']`
      );
      scrollLinks.forEach((el) => {
        el.classList.remove("scroll__item--active");
      });
      scrollBtn.classList.add("scroll__item--active");
    });
  });

  const scrollToSection = (attr) => {
    const elem = document.querySelector(`[data-section-id='${attr}']`);
    window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: "smooth",
    });
    modalMenu.style.display = "none";
    body.style.overflow = "";
  };

  hamburgerBtn.addEventListener("click", function () {
    modalMenu.style.display = "flex";
    body.style.overflow = "hidden";
  });

  hamburgerBtnClose.addEventListener("click", function () {
    modalMenu.style.display = "none";
    body.style.overflow = "";
  });
})();
