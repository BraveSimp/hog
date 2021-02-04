// ↓ dont look at that pls ↓
//  DocumentObjectModel Variables ( connection variables)
const packagesDeliveredP = document.querySelector("#packages-delivered-p");
const packagesDeliveredBtn = document.querySelector("#packages-delivered-btn");
const firstHogsBoughtP = document.querySelector("#first-hogs-bought-p");
const firstHogBtn = document.querySelector("#first-hog-btn");
// ↓ Game Variables ( variables used in the game duh) ↓
let packagesDelivered = 0;
let packagesIncrement = 0;
// Functions
const autoPackageDeliver = () => {
  packagesDelivered += packagesIncrement;
};
const updateUI = () => {
  packagesDeliveredP.innerHTML = `Packages delivered: ${packagesDelivered}`;
  firstHogsBoughtP.innerHTML = `First Hogs Bought: ${packagesIncrement}`;
};
// Event listener
packagesDeliveredBtn.addEventListener("click", () => {
  packagesDelivered += 1;
});

firstHogBtn.addEventListener("click", () => {
  if(packagesDelivered >= 5) {
    packagesDelivered -= 5;
  packagesIncrement += 1;
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
