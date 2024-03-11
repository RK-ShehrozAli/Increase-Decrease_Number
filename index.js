const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const lableCount = document.getElementById("lableCount");
let count = 0;

decreaseBtn.onclick = function () {
  count--;
  lableCount.textContent = count;
};
increaseBtn.onclick = function () {
  count++;
  lableCount.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  lableCount.textContent = count;
};
