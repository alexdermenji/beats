////// #MODAL MENU
(function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const modalMenu = document.querySelector(".modal");
  const body = document.body;
  const hamburgerBtnClose = document.getElementById("modalMenuClose");

  hamburgerBtn.addEventListener("click", function () {
    modalMenu.style.display = "flex";
    body.style.overflow = "hidden";
  });

  hamburgerBtnClose.addEventListener("click", function () {
    modalMenu.style.display = "none";
    body.style.overflow = "";
  });
})();
