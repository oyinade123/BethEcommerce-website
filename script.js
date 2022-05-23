const menuBar = document.getElementById("bar");
const nav = document.querySelector("ul");
const closed = document.querySelector(".closed");
const navlinks = document.querySelectorAll("li");

bar.addEventListener("click", () => {
  nav.classList.toggle("open");
  bar.style.display = "none";
  closed.style.display = "block";
});

closed.addEventListener("click", () => {
  nav.classList.remove("open");
  closed.style.display = "none";
  bar.style.display = "block";
});

navlinks.forEach((links) => {
  links.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const productWears = document.querySelectorAll(".product-wears");
productWears.forEach((pro) => {
  pro.addEventListener("click", () => {
    window.location.href = "singlepage.html";
  });
});



const main = document.querySelector(".first-single-image");
const smaller = document.querySelector(".small-1");
const smallers = document.querySelector(".small-2");
const smallerr = document.querySelector(".small-3");
const small = document.querySelector(".small-4");

smaller.addEventListener("click", () => {
  main.src = smaller.src;
});

smallers.addEventListener("click", () => {
  main.src = smallers.src;
});

smallerr.addEventListener("click", () => {
  main.src = smallerr.src;
});

small.addEventListener("click", () => {
  main.src = small.src;
});
