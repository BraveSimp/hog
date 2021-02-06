// ↓ dont look at that pls ↓
//  DocumentObjectModel Variables ( connection variables)
const packagesDeliveredP = document.querySelector("#packages-delivered-p");
const packagesDeliveredBtn = document.querySelector("#packages-delivered-btn");
const hogCounters = document.querySelector("#hog-counters"); //hog-buttons
const hogButtons = document.querySelector("#hog-buttons");
// ↓ Game Variables ( variables used in the game duh) ↓
let packagesDelivered = 0;
let packagesIncrement = 0;
let firstHogsIncrement = 0;

class HogType {
  /**
   * A type of a hog, which produces the previous generation of the hog.
   * @param {string} name Name of the hog
   * @param {number} cost The cost of the hog
   */
  constructor(name, cost) {
    // Initialize some stuff
    this.name = name;
    this.cost = cost;
    this.amount = 0;
    // Append self to body
    this.buyButton;
  }
  buy() {
    if (packagesDelivered < this.cost) return;
    packagesDelivered -= this.cost;
    this.amount++;
    this.cost *= 1.15;
  }
}

// Functions
const autoPackageDeliver = () => {
  packagesDelivered += packagesIncrement;
  packagesIncrement += firstHogsIncrement;
};
const updateUI = () => {
  packagesDeliveredP.innerHTML = `Packages delivered: ${packagesDelivered}`;
  firstHogsBoughtP.innerHTML = `First Hogs Bought: ${packagesIncrement}`;
  secondHogsBoughtP.innerHTML = `Second Hogs Bought: ${firstHogsIncrement}`;
  firstHogBtn.innerHTML = `First Hog: ${firstHogsPrice}`;
  secondHogBtn.innerHTML = `Second Hog: ${secondHogsPrice}`;
};
// Event listener
packagesDeliveredBtn.addEventListener("click", () => {
  packagesDelivered += 1;
});

firstHogBtn.addEventListener("click", () => {
  if (packagesDelivered >= firstHogsPrice) {
    packagesDelivered -= firstHogsPrice;
    firstHogsPrice = Math.round(firstHogsPrice * 1.15);
    packagesIncrement += 1;
  }
  x;
});
secondHogBtn.addEventListener("click", () => {
  if (packagesDelivered >= secondHogsPrice) {
    packagesDelivered -= secondHogsPrice;
    secondHogsPrice = Math.round(secondHogsPrice * 1.3);
    firstHogsIncrement += 1;
  }
});

// Game Loop
window.setInterval(() => {
  autoPackageDeliver();
}, 1000);

window.setInterval(() => {
  updateUI();
}, 20);
