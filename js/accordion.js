(function () {
  const btn = document.querySelectorAll(".team__person");
  console.log(btn);
  const descriptionWrap = document.querySelectorAll(".team__description-wrap");
  console.log(descriptionWrap);
  const description = document.querySelectorAll(".team__description");
  console.log(description);

  function hideAccordeon() {
    for (let i = 0; i < descriptionWrap.length; i++) {
      descriptionWrap[i].style.height = "0px";
      descriptionWrap[i].classList.remove("team__description--active");
    }
  }

  function showAccordeon(element) {
    let height = getComputedStyle(description[element]).height;
    descriptionWrap[element].style.height = height;
    descriptionWrap[element].classList.add("team__description--active");
  }

  for (let i = 0; i < btn.length; i++) {
    let current = btn[i];

    current.addEventListener("click", () => {
      if (descriptionWrap[i].classList.contains("team__description--active")) {
        hideAccordeon();
      } else {
        hideAccordeon();
        showAccordeon(i);
      }
    });
  }
})();
