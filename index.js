// function for bubbles
function makeBubble() {
  const pannelBtm = document.querySelector(".panelbottom");
  let bubble = "";
  for (let i = 0; i <= 151; i++) {
    let rn = Math.floor(Math.random() * 10);
    bubble += `<div class="circle">${rn}</div>`;
    pannelBtm.innerHTML = bubble;
  }
}
makeBubble();

// function for time
let count = 60;
function runTimmer() {
  let interval = setInterval(() => {
    count--;
    if (count >= 0) {
      document.querySelector("#timer").textContent = `${count}`;
    } else {
      clearInterval(interval);
      document.querySelector(
        ".panelbottom"
      ).innerHTML = `<h1> Game Over <br/> And Your Score is :- ${score} </h1>`;
    }
  }, 1000);
}
runTimmer();

// function for hit
let hitRn = Math.floor(Math.random() * 10);
function newHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = `${hitRn}`;
}
newHit();

// function for score
let score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = `${score}`;
}

// Score Add
document.querySelector(".panelbottom").addEventListener("click", function (e) {
  let clickedNumber = Number(e.target.textContent);
  console.log(clickedNumber);
  if (clickedNumber === hitRn) {
    increaseScore();
    makeBubble();
    newHit();
  }
});
