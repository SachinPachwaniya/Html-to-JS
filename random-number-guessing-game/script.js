let input = document.getElementById("input");
const button = document.getElementById("button");
const para = document.getElementById("para");
const computerNumber = document.getElementById("computer-number");


button.addEventListener("click", function () {
  const computer = Math.floor(Math.random() * 5) + 1;
  computerNumber.innerHTML = `computer chose:-${computer} `;
  let value = input.value;
  if (isNaN(value) || value === "") {
    alert("Only numbers are allowed!");
    return;
  } else if (value > computer) {
    para.style.color = "lightblue";
    para.innerHTML = "player win";
  } else if (value == computer) {
    para.style.color = "red";
    para.innerHTML = "Draw!";
  } else {
    para.style.color = "lightpink";
    para.innerHTML = "computer win";
  }
});
