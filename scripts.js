// ↓ dont look at that pls ↓
//  DocumentObjectModel Variables ( connection variables)
const packagesDeliveredP = document.querySelector("#packages-delivered-p");
const packagesDeliveredBtn = document.querySelector("#packages-delivered-btn");
const firstHogsBoughtP = document.querySelector("#first-hogs-bought-p");
const firstHogBtn = document.querySelector("#first-hog-btn");
const secondHogsBoughtP = document.querySelector("#second-hogs-bought-p");
const secondHogBtn = document.querySelector("#second-hog-btn");
// ↓ Game Variables ( variables used in the game duh) ↓
let packagesDelivered = 0;
let packagesIncrement = 0;
let firstHogsIncrement = 0;
// Functions
const autoPackageDeliver = () => {
  packagesDelivered += packagesIncrement;
  packagesIncrement += firstHogsIncrement;
};
const updateUI = () => {
  packagesDeliveredP.innerHTML = `Packages delivered: ${packagesDelivered}`;
  firstHogsBoughtP.innerHTML = `First Hogs Bought: ${packagesIncrement}`;
  secondHogsBoughtP.innerHTML = `Second Hogs Bought: ${firstHogsIncrement}`;
};
// Event listener
packagesDeliveredBtn.addEventListener("click", () => {
  packagesDelivered += 1;
});

firstHogBtn.addEventListener("click", () => {
  if (packagesDelivered >= 10) {
    packagesDelivered -= 10;
    packagesIncrement += 1;
  }
});
secondHogBtn.addEventListener("click", () => {
  if (packagesDelivered >= 1000) {
    packagesDelivered -= 1000;
    firstHogsIncrement += 1;
  }
});

// Game Loop
window.setInterval(() => {
  autoPackageDeliver();
  updateUI();
}, 1000);

window.setInterval(() => {
  updateUI();
}, 20);
