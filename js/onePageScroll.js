(function () {
  const sections = document.querySelectorAll("section");

  let currentIndex = 0;
  let canScroll = false;
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      if (currentIndex + 1 >= sections.length) {
        return;
      }
      currentIndex++;
      let nextSection = sections[currentIndex];
      let offsetTop = nextSection.offsetTop;
      window.scroll({
        left: 0,
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
})();
