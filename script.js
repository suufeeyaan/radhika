const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const container = document.querySelector(".container");

let attempts = 0;

// Move No button
function moveNoButton() {
  attempts++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (attempts === 10) {
    alert("😂 Bas bhi karo... 'NO' option exist hi nahi karta.");
  }

  if (attempts === 20) {
    alert("❤️ Radhika... lagta hai destiny YES hi hai.");
  }
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveNoButton();
});

// YES
yesBtn.addEventListener("click", () => {

  container.style.display = "none";
  result.classList.remove("hidden");

  createHearts();

});

// Floating hearts
function createHearts() {

  for (let i = 0; i < 80; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️","🖤","🌹","✨"][Math.floor(Math.random()*4)];

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (3 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    },7000);

  }

}
