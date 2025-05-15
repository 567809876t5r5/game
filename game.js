const moles = document.querySelectorAll(".mole");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const hitSound = document.getElementById("hitSound");
const winSound = document.getElementById("winSound");

let score = 0;
let timeLeft = 30;
let moleTimer;
let countdownTimer;

function showRandomMole() {
  moles.forEach(mole => mole.style.display = "none");
  const index = Math.floor(Math.random() * moles.length);
  moles[index].style.display = "flex";
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  startBtn.disabled = true;

  moleTimer = setInterval(showRandomMole, 800);
  countdownTimer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(moleTimer);
  clearInterval(countdownTimer);
  moles.forEach(mole => mole.style.display = "none");
  winSound.currentTime = 0;
  winSound.play();
  alert("时间到！你的得分是：" + score);
  startBtn.disabled = false;
}

moles.forEach(mole => {
  mole.addEventListener("click", () => {
    if (mole.style.display === "flex") {
      score++;
      scoreEl.textContent = score;
      mole.classList.add("hit");
      hitSound.currentTime = 0;
      hitSound.play();
      setTimeout(() => {
        mole.classList.remove("hit");
        mole.style.display = "none";
      }, 150);
    }
  });
});

startBtn.addEventListener("click", startGame);
