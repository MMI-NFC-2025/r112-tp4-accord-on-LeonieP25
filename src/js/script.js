// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");
const allDetails = accordeon.querySelectorAll("details");

allDetails.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      allDetails.forEach((det) => {
        if (det !== details) {
          det.open = false;
        }
      });
    }
  });
});
