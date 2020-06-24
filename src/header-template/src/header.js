(function(window, document, headerElement) {
  const innerElement = headerElement.querySelector(".header__inner");
  const navTrigger = headerElement.querySelector(".nav-trigger");
  const navContainerElement = headerElement.querySelector(".navs");

  setupStyling(true);
  setupInteractions();

  function setupStyling(withDynamicBgAlpha) {
    function calculateAndApplyStyles() {
      const threshhold = headerElement.offsetHeight;
      const maxHeight = threshhold * 1.5;

      const isPastThreshold = window.pageYOffset > threshhold;

      function clamp(value, lower, upper) {
        return Math.min(Math.max(value, lower), upper);
      }

      const alpha = clamp(window.pageYOffset, 0, maxHeight) / maxHeight;

      isPastThreshold
        ? headerElement.classList.add("shrink")
        : headerElement.classList.remove("shrink");

      if (withDynamicBgAlpha) {
        const background = `linear-gradient(to right, rgba(106,164,184,${alpha}) 0%,rgba(71,123,199,${alpha}) 100%)`;
        innerElement.style.backgroundImage = background;
      }
    }

    window.addEventListener("scroll", calculateAndApplyStyles);
    calculateAndApplyStyles();
  }

  function setupInteractions() {
    let isNavActive = false;
    // add click listeners to hamburger menu
    navTrigger.addEventListener("click", function() {
      toggleNav();
    });

    function toggleNav() {
      isNavActive = !isNavActive;

      if (isNavActive) {
        navContainerElement.classList.add("active");
        navTrigger.classList.add("active");
      } else {
        navContainerElement.classList.remove("active");
        navTrigger.classList.remove("active");
      }
    }
  }
})(window, document, document.getElementById("app-header"));
