// dont look at this pls
// DocumentObjectModule Variables ( connection variables)
const packagesDeliveredP = document.querySelector("#packages-delivered-p");
const packagesDeliveredBtn = document.querySelector("#packages-delivered-btn");
// Game Variables ( variables used in the game duh)
let packagesDelivered = 0;

// Event listener
packagesDeliveredBtn.addEventListener("click", () => {
  packagesDelivered += 1;
  packagesDeliveredP.innerHTML = `Packages delivered: ${packagesDelivered}`;
});
