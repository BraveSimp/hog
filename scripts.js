// ↓ dont look at that pls ↓
//  DocumentObjectModule Variables ( connection variables)
const packagesDeliveredP = document.querySelector("#packages-delivered-p");
const packagesDeliveredBtn = document.querySelector("#packages-delivered-btn");
const firstHogBtn = document.querySelector("#first-hog-btn");
// ↓ Game Variables ( variables used in the game duh) ↓
let packagesDelivered = 0;

// Functions
const autoPackageDeliver = () => {
  packagesDelivered += 1;
};
const updateUI = () => {
  packagesDeliveredP.innerHTML = `Packages delivered: ${cookieNum}`;
};
// Event listener
packagesDeliveredBtn.addEventListener("click", () => {
  packagesDelivered += 1;
  packagesDeliveredP.innerHTML = `Packages delivered: ${packagesDelivered}`;
  updateUI();
});

firstHogBtn.addEventListener("click", () => {
  packagesDelivered += 3;
  packagesDeliveredP.innerHTML = `Packages delivered: ${packagesDelivered}`;
  updateUI();
});

// Game Loop
window.setInterval(() => {
  updateUI();
}, 1000);
