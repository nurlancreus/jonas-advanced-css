// When radio input label is focused and user clicked space, then check the input and prevent submit event
(function () {
  const bookingForm = document.forms["booking-form"];

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  bookingForm.addEventListener("keydown", function (e) {
    const focusedElement = document.activeElement;

    // we should put tabindex="0" attribute to the labels, otherwise we could not be able to focus on them using tab
    const focusedRadioLabel = focusedElement.closest(".form__radio-label");

    if (!focusedRadioLabel) return;

    const focusedRadioInput = document.getElementById(
      focusedRadioLabel.getAttribute("for")
    );

    if (e.code === "Space") focusedRadioInput.checked = true;
    else return;
  });
})();

// if anchor tag's href is #, then preventDefault
(function () {
  const anchorTags = document.querySelectorAll("a");

  anchorTags.forEach((anchorEl) => {
    anchorEl.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") e.preventDefault();
    });
  });
})();

// When click nav links, close navigation
(function () {
  const navigationNav = document.querySelector(".navigation__nav");

  navigationNav.addEventListener("click", function (e) {
    const clickedLink = e.target.closest(".navigation__link");

    if (!clickedLink) return;

    document.getElementById("navigation__toggle").checked = false;
  });
})();

// When click outside of popup, then close it
(function () {
  const popupOverlay = document.getElementById("popup");

  popupOverlay.addEventListener("click", function () {
    window.location.hash = "";
  });
})();
