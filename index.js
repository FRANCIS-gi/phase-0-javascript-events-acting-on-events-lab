// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", ""); // change 'right' to 'left'
  const right = parseInt(rightNumbers, 10); // use base 10 for parseInt

  if (right < 360) { // change conditional statement to check if right is less than 360
    dodger.style.left = `${right + 1}px`; // use 'left' instead of 'right'
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

beforeAll ((done)=>{
  done();
},1000);
