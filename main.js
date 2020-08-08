const $btn = document.getElementById("btn");
const $btn2 = document.getElementById("btn2");
const $item4 = document.getElementById("item4");
const $item5 = document.getElementById("item5");
const $item6 = document.getElementById("item6");

if (screen.width <= 1440) {
  $btn.addEventListener("click", () => {
    $item4.style.display = "none";
    $item5.style.display = "grid";
  });
  $btn2.addEventListener("click", () => {
    $item5.style.display = "none";
    $item4.style.display = "grid";
  });
}
if (screen.width > 1440) {
  $btn.addEventListener("click", () => {
    $item6.classList.toggle("d-none");
  });
}
