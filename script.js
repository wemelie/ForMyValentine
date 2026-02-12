// ===== 1) Falling hearts =====
const heartsContainer = document.getElementById("hearts");

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";

  // Slumpa position och storlek
  const left = Math.random() * 100; // vw
  const size = 14 + Math.random() * 18; // px
  const duration = 6 + Math.random() * 6; // sek
  const delay = Math.random() * 1.5; // sek

  heart.style.left = `${left}vw`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;

  heartsContainer.appendChild(heart);

  // Ta bort efter en stund (för att inte bygga upp för många)
  setTimeout(() => heart.remove(), (duration + delay) * 1000);
}

// Skapa hjärtan kontinuerligt men diskret
setInterval(spawnHeart, 450);
for (let i = 0; i < 10; i++) spawnHeart();


// ===== 2) Secret message toggle =====
const toggleSecretBtn = document.getElementById("toggleSecretBtn");
const secret = document.getElementById("secret");

toggleSecretBtn.addEventListener("click", () => {
  const isHidden = secret.hasAttribute("hidden");
  if (isHidden) {
    secret.removeAttribute("hidden");
    toggleSecretBtn.textContent = "Stäng hemligt meddelande 💌";
  } else {
    secret.setAttribute("hidden", "");
    toggleSecretBtn.textContent = "Klicka här om du behöver extra kärlek 💌";
  }
});


// ===== 3) Random “why I love you” =====
const reasons = [
  "Med dig är jag tryggast i världen.",
  "För att du är min bästa vän.",
  "För att få skratta med dig är det bästa jag vet.",
  "För att du alltid försöker, även när det är tufft.",
  "För att du är så snäll mot mig.",
  "För att du gör vardagen roligare och bättre.",
  "För att du får mig att verkligen känna mig älskad.",
  "För att du är du. Och jag älskar hela dig."
];

const reasonBtn = document.getElementById("reasonBtn");
const reasonOutput = document.getElementById("reasonOutput");

function pickReason() {
  const i = Math.floor(Math.random() * reasons.length);
  return reasons[i];
}

reasonBtn.addEventListener("click", () => {
  reasonOutput.textContent = pickReason();
});
