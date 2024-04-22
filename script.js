// scroll effect
const a = document.getElementById("navbar");
let lastScroll = 50;

window.addEventListener("scroll", (e) => {
  if (window.scrollY < lastScroll) {
    a.style.top = "0";
  } else {
    a.style.top = "-100px";
    lastScroll = window.scrollY;
  }
});

// mousemove
const b = document.querySelectorAll(".custom");
window.addEventListener("mousemove", (e) => {
  b.forEach((effect) => {
    effect.style.top = e.y + "px";
    effect.style.left = e.x + "px";
  });
});

// click
const c = document.getElementById("btn");
c.addEventListener("click", () => {
  let d = document.querySelector("#town");
  d.textContent = "Copacabana";
  c.textContent = "Découvrez le Brésil";
  c.style.background = "green";
  c.style.color = "white";
  c.style.border = "2px solid white";
});
